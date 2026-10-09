"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FlashcardDeck } from "@/components/flashcard-deck";
import { QuizRunner } from "@/components/quiz-runner";
import { buttonClass } from "@/components/ui";
import { allFlashcards, lessonTitle, questionBank } from "@/content/curriculum";
import { useHydrated, useNow, useProgress } from "@/lib/progress";
import { isDue } from "@/lib/srs";
import { cn, shuffle } from "@/lib/utils";

type Tab = "cards" | "mistakes";

export function ReviewClient() {
  const p = useProgress();
  const hydrated = useHydrated();
  const [tab, setTab] = useState<Tab>("cards");
  const [mistakeRound, setMistakeRound] = useState<number | null>(null);

  const now = useNow();
  const dueCount = now ? allFlashcards.filter((c) => p.cards[c.id] && isDue(p.cards[c.id], now)).length : 0;
  const mistakeIds = Object.keys(p.mistakes);

  // Freeze the mistake set when a round starts, so answering doesn't reshuffle it.
  const mistakeQuestions = useMemo(
    () => (mistakeRound === null ? [] : shuffle(questionBank.filter((q) => mistakeIds.includes(q.id)))),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mistakeRound],
  );

  if (!hydrated) return <div className="mt-10 min-h-[24rem]" />;

  return (
    <div className="mt-10">
      <div className="mb-8 flex gap-1 border-b hairline" role="tablist">
        {(
          [
            ["cards", "Flashcards due", dueCount],
            ["mistakes", "Mistake bank", mistakeIds.length],
          ] as const
        ).map(([id, label, count]) => (
          <button
            key={id}
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={cn(
              "-mb-px border-b-2 px-3 py-2.5 font-sans text-sm transition-colors",
              tab === id ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink",
            )}
          >
            {label} <span className="ml-1 tabular-nums text-muted">{count}</span>
          </button>
        ))}
      </div>

      {tab === "cards" && (
        <FlashcardDeck
          cards={allFlashcards}
          newLimit={0}
          sessionLabel="Review"
          sessionHref="/review"
          emptyMessage="No flashcards are due right now. New cards are introduced from each unit's flashcard page."
        />
      )}

      {tab === "mistakes" &&
        (mistakeRound !== null && mistakeQuestions.length > 0 ? (
          <div className="grid gap-6">
            <QuizRunner key={mistakeRound} questions={mistakeQuestions} finishLabel="Finish review" />
            <div>
              <button className={buttonClass("secondary")} onClick={() => setMistakeRound(null)}>
                Back to the mistake bank
              </button>
            </div>
          </div>
        ) : mistakeIds.length === 0 ? (
          <div className="rounded-[3px] border hairline bg-card px-6 py-14 text-center">
            <p className="display text-3xl">No mistakes to review</p>
            <p className="mx-auto mt-3 max-w-md font-serif text-lg text-ink-2">
              Questions you answer wrongly in lessons, quizzes and exams will collect here automatically.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            <ul className="divide-y hairline border-y hairline">
              {questionBank
                .filter((q) => mistakeIds.includes(q.id))
                .map((q) => (
                  <li key={q.id} className="grid gap-1 py-3">
                    <span className="font-serif text-[1.05rem] text-ink">{q.prompt}</span>
                    <span className="font-sans text-xs text-muted">
                      <Link href={`/units/${q.unitId}/${q.lessonId}`} className="hover:text-ink hover:underline">
                        {lessonTitle(q.unitId, q.lessonId)}
                      </Link>{" "}
                      · correct in a row: {p.mistakes[q.id].streak}/2
                    </span>
                  </li>
                ))}
            </ul>
            <div>
              <button className={buttonClass("primary")} onClick={() => setMistakeRound(Date.now())}>
                Practise these {mistakeIds.length} questions
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
