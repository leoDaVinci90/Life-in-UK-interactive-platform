import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SourceRef } from "@/components/ui";
import { curriculum, images } from "@/content/curriculum";
import { pageLabel } from "@/lib/utils";
import { UnitBadge } from "./unit-badge";

export const metadata: Metadata = { title: "Curriculum" };

export default function CurriculumPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-8 sm:py-20">
      <p className="kicker">The handbook, chapter by chapter</p>
      <h1 className="display mt-3 text-[3rem] sm:text-[4.4rem]">Curriculum</h1>
      <p className="mt-4 max-w-2xl font-serif text-[1.25rem] leading-snug text-ink-2">
        Five chapters, as in the handbook, divided into short parts. The history chapter is in chronological order. Every
        part links back to the pages it comes from.
      </p>

      <div className="mt-14 grid gap-16">
        {curriculum.map((c) => (
          <section key={c.number} aria-labelledby={`ch-${c.number}`} className="grid gap-6 md:grid-cols-[12rem_minmax(0,1fr)]">
            <div>
              <p className="numeral text-5xl text-gold">{c.number}</p>
              <h2 id={`ch-${c.number}`} className="display mt-2 text-[1.6rem]">
                {c.title}
              </h2>
              <p className="mt-2 font-sans text-xs text-muted">Handbook {pageLabel(c.pages)}</p>
            </div>
            <ol className="divide-y hairline border-y hairline">
              {c.units.map((u) => {
                const img = u.heroImageId ? images[u.heroImageId] : undefined;
                const inner = (
                  <div className="flex gap-5 py-5">
                    <div className="relative hidden h-20 w-28 shrink-0 overflow-hidden rounded-[2px] bg-paper-2 sm:block">
                      {img ? (
                        <Image src={img.src} alt="" fill sizes="112px" className="object-cover" />
                      ) : (
                        <span className="absolute inset-0 grid place-items-center font-display text-2xl text-rule">{u.number}</span>
                      )}
                    </div>
                    <div className="grid flex-1 content-start gap-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="numeral text-lg text-gold">{u.number}</span>
                        <span className={`font-display text-[1.3rem] leading-tight ${u.status === "available" ? "text-ink" : "text-ink-2"}`}>{u.title}</span>
                        <UnitBadge unitId={u.id} planned={u.status === "planned"} />
                      </div>
                      <p className="font-sans text-sm leading-snug text-ink-2">{u.dek}</p>
                      <p className="font-sans text-xs text-muted">
                        § {u.handbook.section} · {pageLabel(u.handbook.pages)}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li key={u.id}>
                    {u.status === "available" ? (
                      <Link href={`/units/${u.id}`} className="block transition-colors hover:bg-card">
                        {inner}
                      </Link>
                    ) : (
                      <div className="flex items-start justify-between gap-4">
                        {inner}
                        <SourceRef pages={u.handbook.pages} className="mt-6 hidden shrink-0 md:inline-flex" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
