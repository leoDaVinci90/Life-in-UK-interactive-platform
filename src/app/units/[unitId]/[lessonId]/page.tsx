import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Blocks, KeyFacts, Mnemonics } from "@/components/blocks";
import { LessonCheck, RecallPrompt } from "@/components/lesson-parts";
import { SourceRef } from "@/components/ui";
import { availableUnits, getLesson } from "@/content/curriculum";

type Params = { unitId: string; lessonId: string };

export function generateStaticParams() {
  return availableUnits.flatMap((u) => (u.lessons ?? []).map((l) => ({ unitId: u.id, lessonId: l.id })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { unitId, lessonId } = await params;
  return { title: getLesson(unitId, lessonId)?.lesson.title };
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { unitId, lessonId } = await params;
  const found = getLesson(unitId, lessonId);
  if (!found) notFound();
  const { unit, lesson, index, prev, next } = found;
  const total = unit.lessons!.length;
  const checkQuestions = lesson.checkQuestionIds
    .map((id) => unit.questions!.find((q) => q.id === id)!)
    .map((q) => ({ ...q, unitId: unit.id }));
  const nextHref = next ? `/units/${unit.id}/${next.id}` : `/units/${unit.id}/quiz`;
  const nextLabel = next ? `Next: ${next.title}` : "Take the unit quiz";

  return (
    <article className="mx-auto max-w-6xl px-4 sm:px-8">
      {/* Lesson rail */}
      <nav className="sticky top-0 z-30 sm:top-[var(--header-h)] -mx-4 border-b hairline bg-paper/90 px-4 py-2.5 backdrop-blur sm:-mx-8 sm:px-8" aria-label="Lessons in this part">
        <div className="flex items-center gap-4 overflow-x-auto [scrollbar-width:none]">
          <Link href={`/units/${unit.id}`} className="kicker shrink-0 hover:text-ink">
            {unit.number} {unit.title}
          </Link>
          <ol className="flex items-center gap-1.5">
            {unit.lessons!.map((l, i) => (
              <li key={l.id}>
                <Link
                  href={`/units/${unit.id}/${l.id}`}
                  aria-current={l.id === lesson.id ? "page" : undefined}
                  title={l.title}
                  className={`block h-1.5 w-8 rounded-full transition-colors ${l.id === lesson.id ? "bg-accent" : i < index ? "bg-ink-2" : "bg-rule hover:bg-muted"}`}
                >
                  <span className="sr-only">
                    Lesson {i + 1}: {l.title}
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <span className="shrink-0 font-sans text-xs text-muted">
            {index + 1} of {total}
          </span>
        </div>
      </nav>

      <div className="mx-auto max-w-[44rem] pb-10 pt-12 sm:pt-16">
        <header>
          <p className="kicker">
            Lesson {index + 1} · {lesson.minutes} min read
          </p>
          <h1 className="display mt-4 text-[2rem] sm:text-[2.9rem]">{lesson.title}</h1>
          <div className="ornament mt-5 max-w-xs" aria-hidden><span className="text-xs">◆</span></div>
          <p className="mt-5 text-[1.15rem] leading-relaxed text-ink-2">{lesson.dek}</p>
          <div className="mt-4">
            <SourceRef pages={lesson.pages} />
          </div>
        </header>

        <RecallPrompt unitId={unit.id} lessonId={lesson.id} question={lesson.recall.question} answer={lesson.recall.answer} />

        <Blocks blocks={lesson.blocks} places={unit.places ?? []} />

        <KeyFacts facts={lesson.keyFacts} />
        <Mnemonics items={lesson.mnemonics} />

        <LessonCheck
          unitId={unit.id}
          lessonId={lesson.id}
          lessonTitle={lesson.title}
          questions={checkQuestions}
          nextHref={nextHref}
          nextLabel={nextLabel}
        />

        <nav className="mt-16 grid gap-4 border-t hairline pt-6 sm:grid-cols-2" aria-label="Previous and next lesson">
          {prev ? (
            <Link href={`/units/${unit.id}/${prev.id}`} className="group">
              <span className="kicker">← Previous</span>
              <span className="mt-1 block font-display text-lg text-ink-2 group-hover:text-ink">{prev.title}</span>
            </Link>
          ) : (
            <Link href={`/units/${unit.id}`} className="group">
              <span className="kicker">← Overview</span>
              <span className="mt-1 block font-display text-lg text-ink-2 group-hover:text-ink">{unit.title}</span>
            </Link>
          )}
          <Link href={nextHref} className="group sm:text-right">
            <span className="kicker">Next →</span>
            <span className="mt-1 block font-display text-lg text-ink-2 group-hover:text-ink">{next ? next.title : "Unit quiz"}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
