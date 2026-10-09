"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { buttonClass, Kicker, ProgressBar, StatusPill } from "@/components/ui";
import { allUnits, curriculum, images } from "@/content/curriculum";
import { exportProgress, importProgress, resetProgress, useHydrated, useProgress } from "@/lib/progress";
import { overall, recommendNext, unitStats, weakTopics } from "@/lib/stats";
import { cn, relativeTime } from "@/lib/utils";

export function Dashboard() {
  const p = useProgress();
  const hydrated = useHydrated();
  const o = overall(p);
  const next = recommendNext(p);
  const weak = weakTopics(p).slice(0, 4);
  const lastExam = p.exams[0];
  const nextImg = next?.kind === "lesson" && next.lesson.heroImageId ? images[next.lesson.heroImageId] : next ? images[next.unit.heroImageId ?? ""] : undefined;
  const totalUnits = allUnits.length;
  const completeUnits = o.stats.filter((s) => s.status === "complete").length;

  return (
    <div className={cn("mx-auto max-w-6xl px-4 pb-10 sm:px-8 transition-opacity duration-300", hydrated ? "opacity-100" : "opacity-0")}>
      {/* Masthead */}
      <header className="grid gap-6 border-b hairline pb-10 pt-14 sm:pt-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <Kicker>A guide for new residents · 3rd edition</Kicker>
          <h1 className="display mt-3 max-w-3xl text-[3rem] sm:text-[4.6rem]">Your study desk</h1>
        </div>
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          <Stat value={`${Math.round(o.mastery * 100)}%`} label="mastery" />
          <Stat value={`${o.lessonsDone}/${o.lessonsTotal}`} label="lessons read" />
          <Stat value={`${completeUnits}/${totalUnits}`} label="parts complete" />
        </div>
      </header>

      <div className="grid gap-12 py-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        {/* Left column */}
        <div className="grid content-start gap-12">
          {/* Recommended next */}
          <section>
            <Kicker className="mb-4">Recommended next</Kicker>
            {next ? (
              <Link href={next.href} className="group grid overflow-hidden rounded-[3px] border hairline bg-card sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
                {nextImg && (
                  <div className="relative aspect-[4/3] bg-paper-2 sm:aspect-auto">
                    <Image src={nextImg.src} alt="" fill sizes="(min-width: 640px) 360px, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.02]" />
                  </div>
                )}
                <div className="grid content-between gap-6 p-6 sm:p-8">
                  <div>
                    <p className="kicker !text-gold">
                      {next.kind === "lesson" ? `Part ${next.unit.number} · ${next.unit.title}` : `Part ${next.unit.number} · all lessons read`}
                    </p>
                    <p className="display mt-2 text-[2rem] group-hover:text-accent">
                      {next.kind === "lesson" ? next.lesson.title : `${next.unit.title}: unit quiz`}
                    </p>
                    <p className="mt-2 font-serif text-[1.08rem] leading-snug text-ink-2">
                      {next.kind === "lesson" ? next.lesson.dek : "Twelve questions to check what you remember from the whole part."}
                    </p>
                  </div>
                  <span className={buttonClass("primary") + " justify-self-start"}>
                    {next.kind === "lesson" ? (o.lessonsDone ? "Continue" : "Begin") : "Take the quiz"} →
                  </span>
                </div>
              </Link>
            ) : (
              <div className="rounded-[3px] border hairline bg-card p-8">
                <p className="display text-2xl">Every available lesson is read.</p>
                <p className="mt-2 font-serif text-lg text-ink-2">Keep your memory fresh with Review and the practice exam.</p>
              </div>
            )}
          </section>

          {/* Chapters */}
          <section>
            <div className="mb-4 flex items-baseline justify-between">
              <Kicker>Chapters</Kicker>
              <Link href="/curriculum" className="font-sans text-xs text-muted hover:text-ink">
                Full curriculum →
              </Link>
            </div>
            <ol className="divide-y hairline border-y hairline">
              {curriculum.map((c) => {
                const units = c.units;
                const available = units.filter((u) => u.status === "available");
                const stats = available.map((u) => unitStats(u, p));
                const mastery = units.length ? stats.reduce((s, x) => s + x.mastery, 0) / units.length : 0;
                return (
                  <li key={c.number} className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-4 py-4">
                    <span className="numeral text-2xl text-gold">{c.number}</span>
                    <div className="grid gap-2">
                      <span className="font-serif text-[1.15rem] leading-tight text-ink">{c.title}</span>
                      <ProgressBar value={mastery} />
                    </div>
                    <span className="font-sans text-xs tabular-nums text-muted">
                      {available.length ? `${Math.round(mastery * 100)}%` : "Planned"}
                    </span>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* Unit status */}
          <section>
            <Kicker className="mb-4">Parts in progress</Kicker>
            <div className="grid gap-3">
              {o.stats.map((s) => (
                <Link key={s.unit.id} href={`/units/${s.unit.id}`} className="grid gap-3 rounded-[3px] border hairline bg-card p-5 hover:border-ink/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-serif text-[1.2rem] text-ink">
                      <span className="numeral mr-2 text-gold">{s.unit.number}</span>
                      {s.unit.title}
                    </span>
                    <StatusPill status={s.status} />
                  </div>
                  <div className="grid grid-cols-3 gap-4 font-sans text-xs text-muted">
                    <span>
                      <span className="block tabular-nums text-sm text-ink">
                        {s.done}/{s.total}
                      </span>
                      lessons
                    </span>
                    <span>
                      <span className="block tabular-nums text-sm text-ink">
                        {s.learned}/{s.cards}
                      </span>
                      cards learned
                    </span>
                    <span>
                      <span className="block tabular-nums text-sm text-ink">{s.best === null ? "—" : `${Math.round(s.best * 100)}%`}</span>
                      best quiz
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Right column */}
        <div className="grid content-start gap-10">
          <section className="grid grid-cols-2 gap-px overflow-hidden rounded-[3px] border hairline bg-rule">
            <Link href="/review" className="bg-card p-5 hover:bg-paper-2">
              <span className={cn("numeral block text-4xl", o.due ? "text-accent" : "text-ink")}>{o.due}</span>
              <span className="font-sans text-xs text-muted">flashcards due</span>
            </Link>
            <Link href="/review" className="bg-card p-5 hover:bg-paper-2">
              <span className={cn("numeral block text-4xl", o.mistakes ? "text-accent" : "text-ink")}>{o.mistakes}</span>
              <span className="font-sans text-xs text-muted">mistakes to review</span>
            </Link>
            <Link href="/exam" className="col-span-2 bg-card p-5 hover:bg-paper-2">
              <span className="font-sans text-xs text-muted">Last practice exam</span>
              {lastExam ? (
                <span className="mt-1 flex items-baseline justify-between">
                  <span className={cn("numeral text-3xl", lastExam.passed ? "text-sage" : "text-accent")}>
                    {lastExam.score}/{lastExam.total}
                  </span>
                  <span className="font-sans text-xs text-muted">
                    {lastExam.passed ? "Pass" : "Not yet"} · {relativeTime(lastExam.at)} · {p.exams.length} taken
                  </span>
                </span>
              ) : (
                <span className="mt-1 block font-serif text-lg text-ink">Not taken yet →</span>
              )}
            </Link>
          </section>

          <section>
            <Kicker className="mb-3">Topics to revise</Kicker>
            {weak.length ? (
              <ul className="divide-y hairline border-y hairline">
                {weak.map((t) => (
                  <li key={`${t.unitId}/${t.lessonId}`}>
                    <Link href={`/units/${t.unitId}/${t.lessonId}`} className="flex items-center justify-between gap-3 py-3 hover:text-accent">
                      <span className="font-serif text-[1.05rem] text-ink">{t.lessonTitle}</span>
                      <span className="font-sans text-xs tabular-nums text-accent">{Math.round(t.accuracy * 100)}% right</span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-serif text-[1.05rem] text-ink-2">Nothing yet. Topics where you get questions wrong will appear here.</p>
            )}
          </section>

          <section>
            <Kicker className="mb-3">Quiz results</Kicker>
            {p.quizzes.length ? (
              <ul className="divide-y hairline border-y hairline">
                {p.quizzes.slice(0, 5).map((q) => (
                  <li key={q.at} className="flex items-center justify-between py-2.5 font-sans text-sm">
                    <span className="text-ink">{allUnits.find((u) => u.id === q.unitId)?.title}</span>
                    <span className="text-xs text-muted">{relativeTime(q.at)}</span>
                    <span className={cn("tabular-nums font-semibold", q.score / q.total >= 0.75 ? "text-sage" : "text-accent")}>
                      {q.score}/{q.total}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-serif text-[1.05rem] text-ink-2">No quizzes taken yet.</p>
            )}
          </section>

          <section>
            <Kicker className="mb-3">Recent activity</Kicker>
            {p.activity.length ? (
              <ul className="grid gap-2.5">
                {p.activity.slice(0, 7).map((a) => (
                  <li key={a.at + a.label} className="flex items-baseline justify-between gap-3">
                    <Link href={a.href} className="font-sans text-sm text-ink-2 hover:text-ink">
                      {a.label}
                    </Link>
                    <span className="shrink-0 font-sans text-xs text-muted">{relativeTime(a.at)}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-serif text-[1.05rem] text-ink-2">Your lessons, quizzes and reviews will be listed here.</p>
            )}
          </section>

          <BackupControls />
        </div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="numeral text-[2.2rem] leading-none text-ink">{value}</p>
      <p className="mt-1 font-sans text-xs text-muted">{label}</p>
    </div>
  );
}

function BackupControls() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState("");
  return (
    <section className="rounded-[3px] border border-dashed border-rule p-5">
      <Kicker className="mb-2">Your data</Kicker>
      <p className="font-sans text-xs leading-relaxed text-muted">
        Progress is saved in this browser only. Export a copy to move it to another browser or to keep a backup.
      </p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-sans text-xs">
        <button
          className="text-ink underline underline-offset-2"
          onClick={() => {
            const blob = new Blob([exportProgress()], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `life-in-uk-progress-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(a.href);
          }}
        >
          Export progress
        </button>
        <button className="text-ink underline underline-offset-2" onClick={() => fileRef.current?.click()}>
          Import
        </button>
        <button
          className="text-muted underline underline-offset-2 hover:text-danger"
          onClick={() => confirm("Delete all progress in this browser? This cannot be undone.") && resetProgress()}
        >
          Reset
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          className="hidden"
          onChange={async (e) => {
            const f = e.target.files?.[0];
            if (!f) return;
            try {
              importProgress(await f.text());
              setMsg("Progress imported.");
            } catch (err) {
              setMsg(err instanceof Error ? err.message : "Could not import that file.");
            }
            e.target.value = "";
          }}
        />
      </div>
      {msg && <p className="mt-2 font-sans text-xs text-ink-2">{msg}</p>}
    </section>
  );
}
