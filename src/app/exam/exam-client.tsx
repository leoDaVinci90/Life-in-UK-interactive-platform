"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { prepare, QuestionCard, type ShuffledQuestion } from "@/components/question-card";
import { buttonClass, GeneratedNotice, ProgressBar } from "@/components/ui";
import { availableUnits, questionBank } from "@/content/curriculum";
import { recordAnswer, recordExam, useHydrated, useProgress } from "@/lib/progress";
import { cn, formatDuration, relativeTime, sameAnswer, shuffle } from "@/lib/utils";

const LENGTH = 24;
const LIMIT_SECONDS = 45 * 60;
const PASS_MARK = 18;

type Phase = "intro" | "running" | "done";

export function ExamClient() {
  const p = useProgress();
  const hydrated = useHydrated();
  const [phase, setPhase] = useState<Phase>("intro");
  const [questions, setQuestions] = useState<ShuffledQuestion[]>([]);
  const [answers, setAnswers] = useState<number[][]>([]);
  const [i, setI] = useState(0);
  const [startedAt, setStartedAt] = useState(0);
  const [now, setNow] = useState(0);
  const [result, setResult] = useState<{ score: number; seconds: number; timedOut: boolean } | null>(null);
  const [confirming, setConfirming] = useState(false);

  const start = () => {
    const qs = shuffle(questionBank).slice(0, LENGTH).map((q) => prepare(q));
    setQuestions(qs);
    setAnswers(qs.map(() => []));
    setI(0);
    setStartedAt(Date.now());
    setNow(Date.now());
    setResult(null);
    setConfirming(false);
    setPhase("running");
    window.scrollTo({ top: 0 });
  };

  const submit = useCallback(
    (timedOut = false) => {
      const seconds = Math.min(LIMIT_SECONDS, Math.round((Date.now() - startedAt) / 1000));
      let score = 0;
      questions.forEach((q, k) => {
        const ok = sameAnswer(answers[k], q.answer);
        if (ok) score++;
        recordAnswer(q.id, q.unitId, ok);
      });
      recordExam({ score, total: questions.length, passed: score >= PASS_MARK, seconds });
      setResult({ score, seconds, timedOut });
      setPhase("done");
      window.scrollTo({ top: 0 });
    },
    [answers, questions, startedAt],
  );

  // Timer: ticks every second and submits automatically when time runs out.
  const submitRef = useRef(submit);
  useEffect(() => {
    submitRef.current = submit;
  }, [submit]);
  useEffect(() => {
    if (phase !== "running") return;
    const t = setInterval(() => {
      const ts = Date.now();
      setNow(ts);
      if (ts - startedAt >= LIMIT_SECONDS * 1000) submitRef.current(true);
    }, 1000);
    return () => clearInterval(t);
  }, [phase, startedAt]);

  const remaining = Math.max(0, LIMIT_SECONDS - Math.floor((now - startedAt) / 1000));

  // Warn before leaving mid-exam.
  useEffect(() => {
    if (phase !== "running") return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [phase]);

  const answered = answers.filter((a, k) => questions[k] && a.length === (questions[k].type === "multi" ? 2 : 1)).length;
  const bankSize = questionBank.length;
  const history = useMemo(() => p.exams.slice(0, 8), [p.exams]);

  if (!hydrated) return <div className="min-h-[30rem]" />;

  if (phase === "intro") {
    return (
      <div className="grid gap-10">
        <header>
          <p className="kicker">Timed practice</p>
          <h1 className="display mt-3 text-[2.8rem] sm:text-[3.6rem]">Practice exam</h1>
          <p className="mt-3 max-w-xl font-serif text-lg text-ink-2">
            The same shape as the real test: 24 questions, 45 minutes, and you need 18 correct to pass. Answers are marked
            at the end. You can move between questions and change your answers before you submit.
          </p>
        </header>
        <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-[3px] border hairline bg-rule text-center">
          {[
            ["24", "questions"],
            ["45", "minutes"],
            ["18/24", "to pass"],
          ].map(([n, l]) => (
            <div key={l} className="bg-card px-3 py-5">
              <dt className="sr-only">{l}</dt>
              <dd className="numeral text-3xl text-ink">{n}</dd>
              <dd className="font-sans text-xs text-muted">{l}</dd>
            </div>
          ))}
        </dl>
        <div className="rounded-[3px] border-l-2 border-gold bg-gold-soft px-4 py-3 font-sans text-sm leading-relaxed text-ink">
          <p>
            Questions are drawn from the {bankSize} written so far for{" "}
            {availableUnits.map((u) => u.title).join(", ")}. The real test covers the whole handbook, so this exam will
            become representative as more units are added.
          </p>
          <p className="mt-2 text-ink-2">
            The 45-minute limit and 18/24 pass mark come from current official test guidance, not from the handbook. Check
            them before your test.
          </p>
        </div>
        <GeneratedNotice />
        <div>
          <button className={buttonClass("primary")} onClick={start}>
            Start the exam
          </button>
        </div>
        <ExamHistory history={history} />
      </div>
    );
  }

  if (phase === "done" && result) {
    const passed = result.score >= PASS_MARK;
    return (
      <div className="grid gap-10">
        <header className="rise">
          <p className={cn("kicker", passed ? "!text-sage" : "!text-accent")}>{passed ? "Pass" : "Not yet a pass"}</p>
          <p className="display mt-3 text-[4.5rem]">
            {result.score}
            <span className="text-muted">/{questions.length}</span>
          </p>
          <p className="mt-2 font-serif text-lg text-ink-2">
            {result.timedOut ? "Time ran out. " : ""}
            Finished in {formatDuration(result.seconds)}. {passed ? "That is above the 18/24 pass mark." : `You need ${PASS_MARK} to pass.`}{" "}
            Every question you missed is now in your mistake bank.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className={buttonClass("primary")} onClick={start}>
              Take another exam
            </button>
            <a href="/review" className={buttonClass("secondary")}>
              Review mistakes
            </a>
          </div>
        </header>
        <section>
          <h2 className="display mb-6 border-b hairline pb-3 text-[1.8rem]">Your answers</h2>
          <ol className="grid gap-10">
            {questions.map((q, k) => (
              <li key={q.id}>
                <QuestionCard q={q} selected={answers[k]} onSelect={() => {}} reveal index={k} total={questions.length} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    );
  }

  const q = questions[i];
  return (
    <div className="grid gap-6">
      <div className="sticky top-0 z-20 sm:top-[var(--header-h)] -mx-4 grid gap-2 border-b hairline bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-8 sm:px-8">
        <div className="flex items-center justify-between font-sans text-sm">
          <span className="text-ink-2">
            {answered} of {questions.length} answered
          </span>
          <span className={cn("tabular-nums font-semibold", remaining < 300 ? "text-accent" : "text-ink")} aria-live="off">
            {formatDuration(remaining)} left
          </span>
        </div>
        <ProgressBar value={answered / questions.length} tone="accent" />
      </div>

      <div className="rounded-[3px] border hairline bg-card p-5 sm:p-8">
        <QuestionCard
          q={q}
          selected={answers[i]}
          onSelect={(sel) => setAnswers((a) => a.map((x, k) => (k === i ? sel : x)))}
          reveal={false}
          index={i}
          total={questions.length}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button className={buttonClass("secondary")} disabled={i === 0} onClick={() => setI(i - 1)}>
          ← Previous
        </button>
        {i + 1 < questions.length ? (
          <button className={buttonClass("primary")} onClick={() => setI(i + 1)}>
            Next →
          </button>
        ) : (
          <button className={buttonClass("primary")} onClick={() => (answered < questions.length ? setConfirming(true) : submit())}>
            Submit exam
          </button>
        )}
      </div>

      <nav aria-label="Jump to question" className="grid grid-cols-8 gap-1.5 sm:grid-cols-12">
        {questions.map((x, k) => {
          const done = answers[k].length === (x.type === "multi" ? 2 : 1);
          return (
            <button
              key={x.id}
              onClick={() => setI(k)}
              aria-current={k === i ? "step" : undefined}
              className={cn(
                "rounded-[3px] border py-1.5 font-sans text-xs tabular-nums transition-colors",
                k === i ? "border-ink bg-ink text-paper" : done ? "border-rule bg-paper-2 text-ink" : "border-rule text-muted hover:border-ink",
              )}
            >
              {k + 1}
            </button>
          );
        })}
      </nav>
      {confirming ? (
        <div className="rise flex flex-wrap items-center justify-between gap-3 rounded-[3px] border-l-2 border-accent bg-accent-soft px-4 py-3" role="alertdialog" aria-label="Confirm submission">
          <p className="font-sans text-sm text-ink">
            {questions.length - answered === 0
              ? "Submit your answers now?"
              : `${questions.length - answered} question${questions.length - answered === 1 ? " is" : "s are"} unanswered and will be marked wrong.`}
          </p>
          <div className="flex gap-2">
            <button className={buttonClass("secondary")} onClick={() => setConfirming(false)}>
              Keep going
            </button>
            <button className={buttonClass("primary")} onClick={() => submit()}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <button className={buttonClass("quiet")} onClick={() => setConfirming(true)}>
            Submit now
          </button>
        </div>
      )}
    </div>
  );
}

function ExamHistory({ history }: { history: { score: number; total: number; passed: boolean; seconds: number; at: number }[] }) {
  if (!history.length) return null;
  return (
    <section>
      <h2 className="kicker mb-3">Previous attempts</h2>
      <ul className="divide-y hairline border-y hairline">
        {history.map((e) => (
          <li key={e.at} className="flex items-center justify-between py-2.5 font-sans text-sm">
            <span className="text-ink-2">{relativeTime(e.at)}</span>
            <span className="tabular-nums text-muted">{formatDuration(e.seconds)}</span>
            <span className={cn("tabular-nums font-semibold", e.passed ? "text-sage" : "text-accent")}>
              {e.score}/{e.total}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
