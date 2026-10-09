"use client";

import Image from "next/image";
import Link from "next/link";
import { getUnit, images } from "@/content/curriculum";
import { lessonKey, useHydrated, useProgress } from "@/lib/progress";
import { unitStats } from "@/lib/stats";
import { cn } from "@/lib/utils";
import { ProgressBar, StatusPill } from "./ui";

export function UnitStatusPanel({ unitId }: { unitId: string }) {
  const unit = getUnit(unitId)!;
  const p = useProgress();
  const hydrated = useHydrated();
  const s = unitStats(unit, p);
  const firstOpen = unit.lessons?.find((l) => !p.lessons[lessonKey(unit.id, l.id)]);

  return (
    <aside className={cn("grid gap-5 rounded-[3px] border hairline bg-card p-6 transition-opacity", hydrated ? "opacity-100" : "opacity-0")}>
      <div className="flex items-center justify-between">
        <p className="kicker">Your progress</p>
        <StatusPill status={s.status} />
      </div>
      <Row label="Lessons" value={`${s.done} / ${s.total}`} progress={s.done / Math.max(1, s.total)} />
      <Row label="Flashcards learned" value={`${s.learned} / ${s.cards}`} progress={s.learned / Math.max(1, s.cards)} />
      <Row label="Best quiz score" value={s.best === null ? "—" : `${Math.round(s.best * 100)}%`} progress={s.best ?? 0} tone={s.best !== null && s.best >= 0.75 ? "sage" : "accent"} />
      <div className="grid grid-cols-2 gap-3 border-t hairline pt-4 font-sans text-sm">
        <Link href={`/units/${unitId}/flashcards`} className="text-ink-2 hover:text-ink">
          <span className="numeral block text-2xl text-ink">{s.due + Math.min(s.fresh, 12)}</span>
          cards to study
        </Link>
        <Link href="/review" className="text-ink-2 hover:text-ink">
          <span className={cn("numeral block text-2xl", s.mistakes ? "text-accent" : "text-ink")}>{s.mistakes}</span>
          mistakes to review
        </Link>
      </div>
      {firstOpen ? (
        <Link href={`/units/${unitId}/${firstOpen.id}`} className="rounded-full bg-ink px-4 py-2.5 text-center font-sans text-sm font-medium text-paper hover:bg-accent">
          {s.done === 0 ? "Start the first lesson" : `Continue: ${firstOpen.title}`}
        </Link>
      ) : (
        <Link href={`/units/${unitId}/quiz`} className="rounded-full bg-ink px-4 py-2.5 text-center font-sans text-sm font-medium text-paper hover:bg-accent">
          Take the unit quiz
        </Link>
      )}
    </aside>
  );
}

function Row({ label, value, progress, tone = "ink" }: { label: string; value: string; progress: number; tone?: "ink" | "accent" | "sage" }) {
  return (
    <div className="grid gap-1.5">
      <div className="flex items-baseline justify-between font-sans text-sm">
        <span className="text-ink-2">{label}</span>
        <span className="font-medium tabular-nums text-ink">{value}</span>
      </div>
      <ProgressBar value={progress} tone={tone} />
    </div>
  );
}

export function LessonList({ unitId }: { unitId: string }) {
  const unit = getUnit(unitId)!;
  const p = useProgress();
  return (
    <ol className="grid gap-px overflow-hidden rounded-[3px] border hairline bg-rule md:grid-cols-2">
      {unit.lessons?.map((l, i) => {
        const done = p.lessons[lessonKey(unitId, l.id)];
        const img = l.heroImageId ? images[l.heroImageId] : undefined;
        return (
          <li key={l.id} className="bg-card">
            <Link href={`/units/${unitId}/${l.id}`} className="group flex h-full gap-4 p-4 transition-colors hover:bg-paper-2 sm:p-5">
              {img && (
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[2px] bg-paper-2 sm:h-24 sm:w-24">
                  <Image src={img.src} alt="" fill sizes="96px" className="object-cover grayscale-[35%] transition group-hover:grayscale-0" />
                </div>
              )}
              <div className="grid content-start gap-1">
                <span className="kicker flex items-center gap-2 !text-[0.62rem]">
                  Lesson {i + 1} · {l.minutes} min
                  {done && <span className="text-sage">· Done{done.check ? ` ${done.check.score}/${done.check.total}` : ""}</span>}
                </span>
                <span className="font-serif text-[1.25rem] leading-tight text-ink group-hover:text-accent">{l.title}</span>
                <span className="font-sans text-sm leading-snug text-ink-2">{l.dek}</span>
              </div>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
