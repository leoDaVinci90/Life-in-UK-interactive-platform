"use client";

import { useMemo, useState } from "react";
import type { Question } from "@/content/types";
import { recordAnswer, useHydrated } from "@/lib/progress";
import { cn, sameAnswer } from "@/lib/utils";
import { prepare, QuestionCard } from "./question-card";
import { buttonClass, GeneratedNotice, ProgressBar } from "./ui";

/**
 * Sequential quiz with feedback after each answer. Used for lesson checks,
 * unit quizzes and mistake review. Every answer is recorded, so wrong answers
 * reach the mistake bank automatically.
 */
export function QuizRunner({
  questions,
  onFinish,
  finishLabel = "See results",
  summary = true,
  compact,
}: {
  questions: (Question & { unitId: string })[];
  onFinish?: (score: number, total: number, wrong: string[]) => void;
  finishLabel?: string;
  summary?: boolean;
  compact?: boolean;
}) {
  // Option order is fixed per mount so it does not reshuffle on re-render.
  const prepared = useMemo(() => questions.map((q) => prepare(q)), [questions]);
  const [i, setI] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const hydrated = useHydrated();

  if (prepared.length === 0) return null;
  // Option order is random, so render only in the browser to avoid a hydration mismatch.
  if (!hydrated) return <div className={cn("min-h-[22rem]", !compact && "rounded-[3px] border hairline bg-card")} />;
  const q = prepared[i];
  const need = q.type === "multi" ? 2 : 1;
  const score = results.filter(Boolean).length;

  const check = () => {
    const ok = sameAnswer(selected, q.answer);
    recordAnswer(q.id, q.unitId, ok);
    setResults((r) => [...r, ok]);
    setRevealed(true);
  };

  const next = () => {
    if (i + 1 < prepared.length) {
      setI(i + 1);
      setSelected([]);
      setRevealed(false);
    } else {
      const wrong = prepared.filter((_, k) => !results[k]).map((x) => x.id);
      setDone(true);
      onFinish?.(score, prepared.length, wrong);
    }
  };

  if (done && summary) {
    const pct = score / prepared.length;
    return (
      <div className="rise grid gap-6 rounded-[3px] border hairline bg-card p-6 sm:p-8">
        <div>
          <p className="kicker">Result</p>
          <p className="display mt-2 text-[3.2rem]">
            {score}
            <span className="text-muted">/{prepared.length}</span>
          </p>
          <p className="mt-2 font-serif text-lg text-ink-2">
            {pct === 1
              ? "Every answer right."
              : pct >= 0.75
                ? "A pass-level score. Anything you missed is now in your mistake bank."
                : "Below the 75% pass level. The questions you missed are in your mistake bank for review."}
          </p>
        </div>
        <ol className="grid gap-2">
          {prepared.map((x, k) => (
            <li key={x.id} className="flex gap-3 font-sans text-sm">
              <span className={cn("w-4 shrink-0 font-semibold", results[k] ? "text-sage" : "text-danger")}>{results[k] ? "✓" : "✕"}</span>
              <span className={results[k] ? "text-ink-2" : "text-ink"}>{x.prompt}</span>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6", !compact && "rounded-[3px] border hairline bg-card p-5 sm:p-8")}>
      <ProgressBar value={(i + (revealed ? 1 : 0)) / prepared.length} tone="accent" />
      <QuestionCard q={q} selected={selected} onSelect={setSelected} reveal={revealed} index={i} total={prepared.length} />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <GeneratedNotice className="max-w-sm" />
        {revealed ? (
          <button className={buttonClass("primary")} onClick={next} autoFocus>
            {i + 1 < prepared.length ? "Next question" : finishLabel}
          </button>
        ) : (
          <button className={buttonClass("primary")} onClick={check} disabled={selected.length !== need}>
            Check answer
          </button>
        )}
      </div>
    </div>
  );
}
