import type { Metadata } from "next";
import { ReviewClient } from "./review-client";

export const metadata: Metadata = { title: "Review" };

export default function ReviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-8">
      <p className="kicker">Spaced repetition and mistakes</p>
      <h1 className="display mt-3 text-[2.8rem] sm:text-[3.6rem]">Review</h1>
      <p className="mt-3 max-w-xl font-serif text-lg text-ink-2">
        Two kinds of revision in one place: flashcards that are due today, and every question you have answered wrongly. A
        mistake leaves the bank after you answer it correctly twice in a row.
      </p>
      <ReviewClient />
    </div>
  );
}
