import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { KeyFacts } from "@/components/blocks";
import { BritainMap } from "@/components/britain-map";
import { Credit } from "@/components/figure";
import { Timeline } from "@/components/timeline";
import { buttonClass, SectionHeading, SourceRef } from "@/components/ui";
import { LessonList, UnitStatusPanel } from "@/components/unit-widgets";
import { availableUnits, getUnit, images } from "@/content/curriculum";

export function generateStaticParams() {
  return availableUnits.map((u) => ({ unitId: u.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ unitId: string }> }): Promise<Metadata> {
  const unit = getUnit((await params).unitId);
  return { title: unit?.title };
}

export default async function UnitPage({ params }: { params: Promise<{ unitId: string }> }) {
  const unit = getUnit((await params).unitId);
  if (!unit || unit.status !== "available") notFound();
  const hero = unit.heroImageId ? images[unit.heroImageId] : undefined;

  return (
    <article>
      {/* Hero */}
      <header className="relative border-b hairline">
        {hero && (
          <div className="absolute inset-0 overflow-hidden">
            <Image src={hero.src} alt="" fill priority sizes="100vw" className="object-cover opacity-[0.22] dark:opacity-[0.16]" />
            <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-paper/70 to-paper" />
          </div>
        )}
        <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-8 sm:pt-24">
          <nav className="kicker mb-6 flex flex-wrap gap-2" aria-label="Breadcrumb">
            <Link href="/curriculum" className="hover:text-ink">
              Curriculum
            </Link>
            <span>/</span>
            <span>
              Chapter {unit.handbook.chapter} · {unit.handbook.chapterTitle}
            </span>
          </nav>
          <p className="numeral text-2xl text-gold">Part {unit.number}</p>
          <h1 className="display mt-1 max-w-3xl text-[3.2rem] sm:text-[5rem]">{unit.title}</h1>
          <p className="mt-5 max-w-2xl font-serif text-[1.35rem] leading-snug text-ink-2">{unit.dek}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="font-sans text-sm text-muted">
              Handbook § {unit.handbook.section} · {unit.lessons?.length} lessons ·{" "}
              {unit.lessons?.reduce((s, l) => s + l.minutes, 0)} min
            </span>
            <SourceRef pages={unit.handbook.pages} />
          </div>
          {hero && unit.heroImageId && <Credit imageId={unit.heroImageId} className="mt-8 block" />}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        {/* Overview + progress */}
        <section className="grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="kicker mb-3">Overview</p>
            <div className="prose-body max-w-2xl">
              {unit.overview?.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="kicker mb-3 mt-10">By the end of this part you should be able to</p>
            <ol className="grid max-w-2xl gap-3">
              {unit.objectives?.map((o, i) => (
                <li key={o} className="flex gap-4">
                  <span className="numeral w-5 shrink-0 text-xl text-gold">{i + 1}</span>
                  <span className="font-serif text-[1.08rem] leading-snug text-ink">{o}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <UnitStatusPanel unitId={unit.id} />
          </div>
        </section>

        {/* Lessons */}
        <section className="py-10">
          <SectionHeading kicker="Read" title="Lessons" />
          <LessonList unitId={unit.id} />
        </section>

        {/* Timeline */}
        {unit.timeline && (
          <section className="py-14" id="timeline">
            <SectionHeading kicker="Explore" title="Timeline" />
            <Timeline events={unit.timeline} unitId={unit.id} />
          </section>
        )}

        {/* Map */}
        {unit.places && (
          <section className="py-10" id="map">
            <SectionHeading kicker="Explore" title="Places to know" />
            <BritainMap
              places={unit.places}
              caption="Every place named in this part of the handbook. Select a place to see what to remember about it."
            />
          </section>
        )}

        {/* Key facts */}
        {unit.keyFacts && <KeyFacts facts={unit.keyFacts} title="Key facts for the whole part" />}

        {/* Practise */}
        <section className="py-10">
          <SectionHeading kicker="Practise" title="Test your memory" />
          <div className="grid gap-4 md:grid-cols-2">
            <PractiseCard
              href={`/units/${unit.id}/flashcards`}
              title="Flashcards"
              body={`${unit.flashcards?.length} cards with spaced repetition: the ones you find hard come back sooner.`}
              cta="Study flashcards"
            />
            <PractiseCard
              href={`/units/${unit.id}/quiz`}
              title="Unit quiz"
              body={`12 questions drawn from a bank of ${unit.questions?.length}, in the three formats used in the test.`}
              cta="Take the quiz"
            />
          </div>
        </section>

        {/* Source notes */}
        {unit.flags && unit.flags.length > 0 && (
          <section className="py-10">
            <SectionHeading kicker="Source notes" title="About the source" />
            <ul className="grid max-w-3xl gap-3">
              {unit.flags.map((f) => (
                <li key={f.text} className="flex gap-3 font-sans text-sm leading-relaxed text-ink-2">
                  <span className="text-gold">Check</span>
                  <span>
                    {f.text} <SourceRef pages={[f.page]} />
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}

function PractiseCard({ href, title, body, cta }: { href: string; title: string; body: string; cta: string }) {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-[3px] border hairline bg-card p-6">
      <div>
        <h3 className="display text-[1.6rem]">{title}</h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-2">{body}</p>
      </div>
      <div>
        <Link href={href} className={buttonClass("primary")}>
          {cta}
        </Link>
      </div>
    </div>
  );
}
