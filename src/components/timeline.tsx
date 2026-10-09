"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/content/curriculum";
import type { TimelineEvent } from "@/content/types";
import { cn } from "@/lib/utils";
import { Credit } from "./figure";
import { SourceRef } from "./ui";

function DateLabel({ e, large }: { e: TimelineEvent; large?: boolean }) {
  if (e.date) return <span className={cn("numeral text-gold", large ? "text-3xl" : "text-[1.05rem]")}>{e.date}</span>;
  return (
    <span className={cn("numeral text-muted", large ? "text-3xl" : "text-[1.05rem]")} title="Date not given in the handbook">
      {e.contextDate}
      <sup className="ml-0.5 font-sans text-[0.6em] not-italic">†</sup>
    </span>
  );
}

/**
 * Vertical, chronological timeline. Selecting an event opens its detail:
 * a sticky panel on wide screens, inline on small screens.
 */
export function Timeline({ events, unitId }: { events: TimelineEvent[]; unitId: string }) {
  const sorted = [...events].sort((a, b) => a.sortYear - b.sortYear);
  const [selected, setSelected] = useState(sorted[0]?.id);
  const current = sorted.find((e) => e.id === selected);

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ol className="relative border-l hairline pl-6">
          {sorted.map((e) => {
            const active = e.id === selected;
            return (
              <li key={e.id} className="relative pb-1">
                <span
                  className={cn(
                    "absolute -left-[29.5px] top-[1.15rem] h-[9px] w-[9px] rounded-full border-2 transition-colors",
                    active ? "border-accent bg-accent" : "border-rule bg-paper",
                  )}
                  aria-hidden
                />
                <button
                  onClick={() => setSelected(e.id)}
                  aria-expanded={active}
                  className={cn(
                    "group w-full rounded px-3 py-3 text-left transition-colors",
                    active ? "bg-card shadow-[0_1px_0_var(--rule)]" : "hover:bg-card/60",
                  )}
                >
                  <DateLabel e={e} />
                  <span className={cn("block font-display text-[1.15rem] leading-snug", active ? "text-ink" : "text-ink-2 group-hover:text-ink")}>
                    {e.title}
                  </span>
                </button>
                {active && (
                  <div className="lg:hidden">
                    <EventDetail e={e} unitId={unitId} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        <div className="hidden lg:block">
          <div className="sticky top-24">{current && <EventDetail e={current} unitId={unitId} key={current.id} />}</div>
        </div>
      </div>
      <p className="mt-6 font-sans text-xs text-muted">
        <span className="numeral text-gold">Gold dates</span> are given in the handbook.{" "}
        <span className="numeral">Grey dates†</span> are not in the handbook: they are added for orientation only and are not
        needed for the test.
      </p>
    </div>
  );
}

function EventDetail({ e, unitId }: { e: TimelineEvent; unitId: string }) {
  const img = e.imageId ? images[e.imageId] : undefined;
  return (
    <article className="rise mt-2 mb-6 overflow-hidden rounded-[2px] border hairline bg-card lg:mt-0">
      {img && (
        <div className="relative aspect-[16/9] bg-paper-2">
          <Image src={img.src} alt={e.title} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        </div>
      )}
      <div className="grid gap-5 p-6">
        <div>
          <DateLabel e={e} large />
          <h3 className="display mt-1 text-[1.7rem]">{e.title}</h3>
          <p className="mt-3 font-serif text-[1.08rem] leading-relaxed text-ink-2">{e.summary}</p>
        </div>
        {e.people.length > 0 && (
          <div>
            <p className="kicker mb-1.5">People</p>
            <p className="font-sans text-sm text-ink">{e.people.join(" · ")}</p>
          </div>
        )}
        <div>
          <p className="kicker mb-1.5">Why it matters</p>
          <p className="font-serif text-[1.02rem] leading-relaxed text-ink">{e.whyItMatters}</p>
        </div>
        <div className="rounded-[2px] bg-gold-soft px-4 py-3">
          <p className="kicker mb-2 !text-gold">Remember for the test</p>
          <ul className="grid gap-1.5">
            {e.remember.map((r) => (
              <li key={r} className="flex gap-2 font-sans text-sm text-ink">
                <span className="text-gold" aria-hidden>
                  —
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t hairline pt-4">
          <Link href={`/units/${unitId}/${e.lessonId}`} className="font-sans text-sm font-medium text-accent hover:underline">
            Go to the lesson →
          </Link>
          <SourceRef pages={[e.page]} />
        </div>
        {e.imageId && <Credit imageId={e.imageId} />}
      </div>
    </article>
  );
}
