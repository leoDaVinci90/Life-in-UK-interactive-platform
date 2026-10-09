import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FlashcardDeck } from "@/components/flashcard-deck";
import { availableUnits, getUnit } from "@/content/curriculum";

export function generateStaticParams() {
  return availableUnits.map((u) => ({ unitId: u.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ unitId: string }> }): Promise<Metadata> {
  return { title: `Flashcards: ${getUnit((await params).unitId)?.title}` };
}

export default async function FlashcardsPage({ params }: { params: Promise<{ unitId: string }> }) {
  const unit = getUnit((await params).unitId);
  if (!unit?.flashcards) notFound();
  const cards = unit.flashcards.map((c) => ({ ...c, unitId: unit.id }));
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-8">
      <Link href={`/units/${unit.id}`} className="kicker hover:text-ink">
        ← {unit.number} {unit.title}
      </Link>
      <h1 className="display mt-4 text-[2.6rem] sm:text-[3.2rem]">Flashcards</h1>
      <p className="mt-3 max-w-xl font-serif text-lg text-ink-2">
        Say the answer to yourself before you turn the card. Then rate how well you remembered: cards you find hard come
        back sooner, easy ones wait longer.
      </p>
      <div className="mt-10">
        <FlashcardDeck cards={cards} sessionLabel={`${unit.title} flashcards`} sessionHref={`/units/${unit.id}/flashcards`} />
      </div>
    </div>
  );
}
