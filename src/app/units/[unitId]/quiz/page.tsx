import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { UnitQuiz } from "./unit-quiz";
import { availableUnits, getUnit } from "@/content/curriculum";

export function generateStaticParams() {
  return availableUnits.map((u) => ({ unitId: u.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ unitId: string }> }): Promise<Metadata> {
  return { title: `Quiz: ${getUnit((await params).unitId)?.title}` };
}

export default async function QuizPage({ params }: { params: Promise<{ unitId: string }> }) {
  const unit = getUnit((await params).unitId);
  if (!unit?.questions) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-8">
      <Link href={`/units/${unit.id}`} className="kicker hover:text-ink">
        ← {unit.number} {unit.title}
      </Link>
      <h1 className="display mt-4 text-[2.6rem] sm:text-[3.2rem]">Unit quiz</h1>
      <p className="mt-3 max-w-xl font-serif text-lg text-ink-2">
        Twelve questions from across the part. You get feedback after each answer, and anything you miss is saved to your
        mistake bank. A new set is drawn each time.
      </p>
      <div className="mt-10">
        <UnitQuiz unitId={unit.id} />
      </div>
    </div>
  );
}
