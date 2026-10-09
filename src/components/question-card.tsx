"use client";

import type { Question } from "@/content/types";
import { cn } from "@/lib/utils";
import { SourceRef } from "./ui";

export type ShuffledQuestion = Question & { unitId: string; order: number[] };

/** Randomise option order (except true/false), keeping track of the original indices. */
export function prepare(q: Question & { unitId: string }, random = Math.random): ShuffledQuestion {
  const order = q.options.map((_, i) => i);
  if (q.type !== "truefalse") {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  return { ...q, order };
}

const TYPE_LABEL = { single: "Choose one answer", truefalse: "True or false?", multi: "Choose two answers" } as const;

/**
 * One question. `selected` holds original option indices.
 * When `reveal` is true, shows right/wrong styling and the explanation.
 */
export function QuestionCard({
  q,
  selected,
  onSelect,
  reveal,
  index,
  total,
}: {
  q: ShuffledQuestion;
  selected: number[];
  onSelect: (next: number[]) => void;
  reveal: boolean;
  index?: number;
  total?: number;
}) {
  const need = q.type === "multi" ? 2 : 1;

  const toggle = (opt: number) => {
    if (reveal) return;
    if (need === 1) return onSelect([opt]);
    if (selected.includes(opt)) return onSelect(selected.filter((s) => s !== opt));
    if (selected.length < need) return onSelect([...selected, opt]);
    onSelect([selected[1], opt]);
  };

  const correct = reveal && q.answer.length === selected.length && q.answer.every((a) => selected.includes(a));

  return (
    <fieldset className="grid gap-5">
      <legend className="contents">
        <span className="flex flex-wrap items-center justify-between gap-2">
          <span className="kicker">
            {index !== undefined && total !== undefined && (
              <span className="mr-2 text-ink">
                {index + 1} / {total}
              </span>
            )}
            {TYPE_LABEL[q.type]}
          </span>
        </span>
        <span className="mt-2 block font-serif text-[1.45rem] leading-snug text-ink sm:text-[1.6rem]">{q.prompt}</span>
      </legend>

      <div className="grid gap-2.5" role={need === 1 ? "radiogroup" : "group"}>
        {q.order.map((opt, i) => {
          const isSel = selected.includes(opt);
          const isAns = q.answer.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              role={need === 1 ? "radio" : "checkbox"}
              aria-checked={isSel}
              disabled={reveal}
              onClick={() => toggle(opt)}
              className={cn(
                "group flex items-center gap-4 rounded-[3px] border px-4 py-3.5 text-left font-sans text-[0.98rem] transition-all",
                !reveal && !isSel && "border-rule bg-card hover:border-ink-2",
                !reveal && isSel && "border-ink bg-card shadow-[inset_0_0_0_1px_var(--ink)]",
                reveal && isAns && "border-sage bg-sage-soft text-ink",
                reveal && isSel && !isAns && "border-danger bg-accent-soft text-ink",
                reveal && !isSel && !isAns && "border-rule bg-card text-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center border font-sans text-[0.7rem] font-semibold",
                  need === 1 ? "rounded-full" : "rounded-[3px]",
                  isSel ? "border-ink bg-ink text-paper" : "border-rule text-muted",
                  reveal && isAns && "border-sage bg-sage text-paper",
                  reveal && isSel && !isAns && "border-danger bg-danger text-paper",
                )}
                aria-hidden
              >
                {reveal && isAns ? "✓" : reveal && isSel ? "✕" : String.fromCharCode(65 + i)}
              </span>
              <span>{q.options[opt]}</span>
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className={cn("rise rounded-[3px] border-l-2 px-4 py-3", correct ? "border-sage bg-sage-soft" : "border-danger bg-accent-soft")} role="status">
          <p className="font-sans text-sm font-semibold">{correct ? "Correct" : selected.length === 0 ? "Not answered" : "Not quite"}</p>
          <p className="mt-1 font-serif text-[1.02rem] leading-relaxed text-ink">{q.explanation}</p>
          <SourceRef pages={[q.page]} className="mt-2" />
        </div>
      )}
    </fieldset>
  );
}
