"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { images } from "@/content/curriculum";
import type { InfoCard, Question } from "@/content/types";
import { completeLesson, lessonKey, markRecall, useProgress } from "@/lib/progress";
import { cn } from "@/lib/utils";
import { Credit } from "./figure";
import { QuizRunner } from "./quiz-runner";
import { buttonClass, SourceRef } from "./ui";

/** Ask before telling: the learner commits to an answer, then reveals it. */
export function RecallPrompt({ unitId, lessonId, question, answer }: { unitId: string; lessonId: string; question: string; answer: string }) {
  const [draft, setDraft] = useState("");
  const [shown, setShown] = useState(false);
  return (
    <section className="my-10 rounded-[3px] border hairline bg-card p-6 sm:p-7" aria-labelledby="recall-title">
      <p id="recall-title" className="kicker mb-2 !text-accent">
        Recall first
      </p>
      <p className="font-serif text-[1.3rem] leading-snug text-ink">{question}</p>
      {!shown ? (
        <div className="mt-4 grid gap-3">
          <label className="sr-only" htmlFor="recall-input">
            Your answer
          </label>
          <textarea
            id="recall-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={2}
            placeholder="Have a guess, even if you're not sure. Guessing first helps you remember."
            className="w-full resize-none rounded-[3px] border hairline bg-paper px-3 py-2 font-sans text-sm text-ink placeholder:text-muted focus:border-ink focus:outline-none"
          />
          <div>
            <button
              className={buttonClass("secondary")}
              onClick={() => {
                setShown(true);
                markRecall(unitId, lessonId);
              }}
            >
              Reveal the answer
            </button>
          </div>
        </div>
      ) : (
        <div className="rise mt-4 border-l-2 border-gold pl-4">
          {draft.trim() && <p className="mb-2 font-sans text-sm text-muted">You wrote: “{draft.trim()}”</p>}
          <p className="font-serif text-[1.1rem] leading-relaxed text-ink">{answer}</p>
          <p className="mt-2 font-sans text-xs text-muted">Now read on and see how it fits.</p>
        </div>
      )}
    </section>
  );
}

/** Portrait-style cards that expand to show detail from the handbook. */
export function ExpandableCards({ cards }: { cards: InfoCard[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className={cn("grid gap-4", cards.length > 1 && "sm:grid-cols-2", cards.length > 2 && "lg:grid-cols-3")}>
      {cards.map((c) => {
        const isOpen = open === c.id;
        const img = c.imageId ? images[c.imageId] : undefined;
        return (
          <article key={c.id} className={cn("flex flex-col overflow-hidden rounded-[3px] border bg-card transition-colors", isOpen ? "border-ink/40" : "hairline")}>
            {img && (
              <div className="relative aspect-[4/3] bg-paper-2">
                <Image src={img.src} alt={c.title} fill sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
            )}
            <button
              className="flex flex-1 flex-col items-start gap-1.5 p-5 text-left"
              onClick={() => setOpen(isOpen ? null : c.id)}
              aria-expanded={isOpen}
            >
              {c.meta && <span className="kicker !text-[0.62rem]">{c.meta}</span>}
              <span className="font-serif text-[1.35rem] leading-tight text-ink">{c.title}</span>
              <span className="font-sans text-sm text-ink-2">{c.summary}</span>
              <span className="mt-2 font-sans text-xs font-medium text-accent">{isOpen ? "Show less" : "Read more"}</span>
            </button>
            {isOpen && (
              <div className="rise grid gap-3 border-t hairline px-5 pb-5 pt-4">
                {c.detail.map((d) => (
                  <p key={d} className="font-serif text-[1.02rem] leading-relaxed text-ink">
                    {d}
                  </p>
                ))}
                {c.context && (
                  <p className="font-sans text-[0.8rem] leading-relaxed text-muted">
                    <span className="font-medium">Beyond the handbook:</span> {c.context.text}
                    {c.context.verify && <span className="block italic">Check: {c.context.verify}</span>}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <SourceRef pages={[c.page]} />
                  {c.imageId && <Credit imageId={c.imageId} />}
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}

/** End-of-lesson knowledge check; completes the lesson when finished. */
export function LessonCheck({
  unitId,
  lessonId,
  lessonTitle,
  questions,
  nextHref,
  nextLabel,
}: {
  unitId: string;
  lessonId: string;
  lessonTitle: string;
  questions: (Question & { unitId: string })[];
  nextHref: string;
  nextLabel: string;
}) {
  const progress = useProgress();
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [retry, setRetry] = useState(0);
  const done = progress.lessons[lessonKey(unitId, lessonId)];
  const qs = useMemo(() => questions, [questions]);

  return (
    <section className="mt-16" aria-labelledby="check-title">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b hairline pb-3">
        <div>
          <p className="kicker mb-1">Knowledge check</p>
          <h2 id="check-title" className="display text-[1.9rem]">
            Three quick questions
          </h2>
        </div>
        {done?.check && !result && (
          <p className="font-sans text-sm text-muted">
            Last time: {done.check.score}/{done.check.total}
          </p>
        )}
      </div>

      {!result ? (
        <QuizRunner
          key={retry}
          questions={qs}
          summary={false}
          finishLabel="Finish lesson"
          onFinish={(score, total) => {
            setResult({ score, total });
            completeLesson(unitId, lessonId, lessonTitle, { score, total });
          }}
        />
      ) : (
        <div className="rise grid gap-5 rounded-[3px] border hairline bg-card p-6 sm:p-8">
          <p className="kicker !text-sage">Lesson complete</p>
          <p className="display text-[2.4rem]">
            {result.score}/{result.total} correct
          </p>
          <p className="max-w-xl font-serif text-lg text-ink-2">
            {result.score === result.total
              ? "Well remembered. The flashcards for this lesson are now in your deck."
              : "Anything you missed is saved in your mistake bank, and will come back in Review."}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={nextHref} className={buttonClass("primary")}>
              {nextLabel} →
            </Link>
            <button
              className={buttonClass("secondary")}
              onClick={() => {
                setResult(null);
                setRetry((r) => r + 1);
              }}
            >
              Try the questions again
            </button>
          </div>
        </div>
      )}

      {!result && !done && (
        <p className="mt-4 font-sans text-xs text-muted">
          Prefer to skip?{" "}
          <button className="underline underline-offset-2 hover:text-ink" onClick={() => completeLesson(unitId, lessonId, lessonTitle)}>
            Mark this lesson as read
          </button>
        </p>
      )}
    </section>
  );
}
