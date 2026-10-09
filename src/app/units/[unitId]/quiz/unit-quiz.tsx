"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { QuizRunner } from "@/components/quiz-runner";
import { buttonClass } from "@/components/ui";
import { getUnit } from "@/content/curriculum";
import { recordQuiz, useHydrated } from "@/lib/progress";
import { shuffle } from "@/lib/utils";

const QUIZ_LENGTH = 12;

export function UnitQuiz({ unitId }: { unitId: string }) {
  const unit = getUnit(unitId)!;
  const hydrated = useHydrated();
  const [round, setRound] = useState(0);
  const [finished, setFinished] = useState(false);

  // A fresh random draw each round, spread across lessons.
  const questions = useMemo(() => {
    if (!hydrated) return [];
    const byLesson = new Map<string, typeof unit.questions>();
    for (const q of shuffle(unit.questions!)) byLesson.set(q.lessonId, [...(byLesson.get(q.lessonId) ?? []), q]);
    const picked = [];
    while (picked.length < QUIZ_LENGTH && [...byLesson.values()].some((l) => l!.length)) {
      for (const list of byLesson.values()) if (list!.length && picked.length < QUIZ_LENGTH) picked.push(list!.shift()!);
    }
    return shuffle(picked).map((q) => ({ ...q, unitId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, round, unitId]);

  if (!hydrated) return <div className="min-h-[24rem] rounded-[3px] border hairline bg-card" />;

  return (
    <div className="grid gap-6">
      <QuizRunner
        key={round}
        questions={questions}
        onFinish={(score, total) => {
          recordQuiz(unitId, score, total, `${unit.title} quiz`);
          setFinished(true);
        }}
      />
      {finished && (
        <div className="flex flex-wrap gap-3">
          <button
            className={buttonClass("primary")}
            onClick={() => {
              setFinished(false);
              setRound((r) => r + 1);
            }}
          >
            New set of questions
          </button>
          <Link href="/review" className={buttonClass("secondary")}>
            Review mistakes
          </Link>
          <Link href={`/units/${unitId}`} className={buttonClass("quiet")}>
            Back to {unit.title}
          </Link>
        </div>
      )}
    </div>
  );
}
