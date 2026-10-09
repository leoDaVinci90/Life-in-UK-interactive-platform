"use client";

import { useEffect, useMemo, useState } from "react";
import type { Flashcard } from "@/content/types";
import { logFlashcardSession, reviewCard, useHydrated, useProgress, type CardState } from "@/lib/progress";
import { describeInterval, isDue, type Grade } from "@/lib/srs";
import { cn, shuffle } from "@/lib/utils";
import { buttonClass, SourceRef } from "./ui";

type Card = Flashcard & { unitId: string };

const GRADES: { grade: Grade; label: string; key: string; cls: string }[] = [
  { grade: "again", label: "Again", key: "1", cls: "hover:border-danger hover:text-danger" },
  { grade: "hard", label: "Hard", key: "2", cls: "hover:border-gold hover:text-gold" },
  { grade: "good", label: "Good", key: "3", cls: "hover:border-sage hover:text-sage" },
  { grade: "easy", label: "Easy", key: "4", cls: "hover:border-sage hover:text-sage" },
];

/**
 * Spaced-repetition session: due cards first, then new ones (up to `newLimit`).
 * Active recall: the answer stays hidden until the learner chooses to reveal it.
 */
type DeckProps = {
  cards: Card[];
  newLimit?: number;
  sessionLabel: string;
  sessionHref: string;
  emptyMessage?: string;
};

export function FlashcardDeck(props: DeckProps) {
  const hydrated = useHydrated();
  // The queue depends on stored progress and the clock, so build it in the browser only.
  if (!hydrated) return <div className="min-h-[26rem] rounded-[3px] border hairline bg-card" />;
  return <Deck {...props} />;
}

function buildQueue(cards: Card[], stored: Record<string, CardState>, newLimit: number) {
  const now = Date.now();
  const due = cards.filter((c) => stored[c.id] && isDue(stored[c.id], now));
  const fresh = cards.filter((c) => !stored[c.id]).slice(0, newLimit);
  return [...shuffle(due), ...fresh].map((c) => c.id);
}

function Deck({
  cards,
  newLimit = 12,
  sessionLabel,
  sessionHref,
  emptyMessage = "Nothing due. Come back later, or study ahead.",
}: DeckProps) {
  const progress = useProgress();
  const [queue, setQueue] = useState<string[]>(() => buildQueue(cards, progress.cards, newLimit));
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(0);
  const [ahead, setAhead] = useState(false);

  const byId = useMemo(() => new Map(cards.map((c) => [c.id, c])), [cards]);
  const current = queue[0] ? byId.get(queue[0]) : undefined;

  const grade = (g: Grade) => {
    if (!current) return;
    reviewCard(current.id, g);
    setReviewed((n) => n + 1);
    setFlipped(false);
    // "Again" puts the card back a few places so it returns in this session.
    const rest = queue.slice(1);
    setQueue(g === "again" ? [...rest.slice(0, 3), current.id, ...rest.slice(3)] : rest);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!current || (e.target as HTMLElement)?.closest("input,textarea")) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped) {
        const g = GRADES.find((x) => x.key === e.key);
        if (g) grade(g.grade);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // Log the session once when the queue empties.
  useEffect(() => {
    if (queue.length === 0 && reviewed > 0) logFlashcardSession(sessionLabel, sessionHref, reviewed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.length === 0]);

  if (!current) {
    return (
      <div className="grid place-items-center gap-4 rounded-[3px] border hairline bg-card px-6 py-16 text-center">
        <p className="display text-3xl">{reviewed > 0 ? "Session complete" : "All caught up"}</p>
        <p className="max-w-md font-serif text-lg text-ink-2">
          {reviewed > 0 ? `You reviewed ${reviewed} card${reviewed === 1 ? "" : "s"}. They will come back when they are due.` : emptyMessage}
        </p>
        {!ahead && (
          <button
            className={buttonClass("secondary")}
            onClick={() => {
              setAhead(true);
              setQueue(shuffle(cards).map((c) => c.id));
            }}
          >
            Study all {cards.length} cards anyway
          </button>
        )}
      </div>
    );
  }

  const state = progress.cards[current.id];

  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between font-sans text-xs text-muted">
        <span>
          {queue.length} left · {reviewed} reviewed
        </span>
        <span>{state ? "Review" : "New card"}</span>
      </div>

      <div className="flip">
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="flip-inner relative grid min-h-[18rem] w-full text-left sm:min-h-[20rem]"
          data-flipped={flipped}
          aria-label={flipped ? "Show question" : "Reveal answer"}
        >
          <div className="flip-face col-start-1 row-start-1 flex flex-col justify-between rounded-[3px] border hairline bg-card p-7 sm:p-10">
            <p className="kicker">Question</p>
            <p className="font-serif text-[1.6rem] leading-snug text-ink sm:text-[1.9rem]">{current.front}</p>
            <p className="font-sans text-xs text-muted">Answer in your head first, then tap or press Space to reveal.</p>
          </div>
          <div className="flip-face flip-back col-start-1 row-start-1 flex flex-col justify-between rounded-[3px] border border-ink/20 bg-ink p-7 text-paper sm:p-10">
            <p className="font-sans text-sm leading-snug text-paper/60">{current.front}</p>
            <p className="font-serif text-[1.45rem] leading-snug sm:text-[1.7rem]">{current.back}</p>
            <p className="font-sans text-xs text-paper/60">Handbook p. {current.page}</p>
          </div>
        </button>
      </div>

      <div className={cn("grid grid-cols-4 gap-2 transition-opacity", flipped ? "opacity-100" : "pointer-events-none opacity-30")} aria-hidden={!flipped}>
        {GRADES.map((g) => (
          <button
            key={g.grade}
            onClick={() => grade(g.grade)}
            tabIndex={flipped ? 0 : -1}
            className={cn("grid gap-0.5 rounded-[3px] border hairline bg-card px-2 py-2.5 text-center font-sans transition-colors", g.cls)}
          >
            <span className="text-sm font-medium">{g.label}</span>
            <span className="text-[0.68rem] text-muted tabular-nums">{describeInterval(state, g.grade)}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <p className="font-sans text-xs text-muted">How well did you remember? Keys 1–4.</p>
        <SourceRef pages={[current.page]} />
      </div>
    </div>
  );
}
