import type { CardState } from "./progress";

/**
 * Simplified SM-2 spaced repetition.
 * Again: relearn soon. Hard: small step. Good: normal step. Easy: big step.
 */
export type Grade = "again" | "hard" | "good" | "easy";

const DAY = 24 * 60 * 60 * 1000;
const MIN_EASE = 1.3;

export function schedule(prev: CardState | undefined, grade: Grade, now: number): CardState {
  const card: CardState = prev ?? { ease: 2.5, interval: 0, reps: 0, lapses: 0, due: now, last: now };
  let { ease, interval, reps, lapses } = card;

  if (grade === "again") {
    lapses += 1;
    reps = 0;
    ease = Math.max(MIN_EASE, ease - 0.2);
    // Back in this session (10 minutes).
    return { ease, interval: 0, reps, lapses, due: now + 10 * 60 * 1000, last: now };
  }

  reps += 1;
  if (reps === 1) interval = grade === "easy" ? 4 : grade === "good" ? 1 : 0.5;
  else if (reps === 2) interval = grade === "easy" ? 7 : grade === "good" ? 3 : 1.5;
  else interval = interval * (grade === "hard" ? 1.2 : grade === "good" ? ease : ease * 1.3);

  if (grade === "hard") ease = Math.max(MIN_EASE, ease - 0.15);
  if (grade === "easy") ease += 0.15;

  return { ease, interval, reps, lapses, due: now + interval * DAY, last: now };
}

export function isDue(card: CardState | undefined, now: number) {
  return !card || card.due <= now;
}

/** A card counts as "learned" once it has an interval of at least 3 days. */
export function isLearned(card: CardState | undefined) {
  return !!card && card.interval >= 3;
}

export function describeInterval(card: CardState | undefined, grade: Grade): string {
  const next = schedule(card, grade, 0);
  const minutes = next.due / 60000;
  if (minutes < 60) return `${Math.round(minutes)} min`;
  const days = next.due / DAY;
  if (days < 1) return `${Math.round(days * 24)} h`;
  if (days < 30) return `${Math.round(days)} d`;
  return `${Math.round(days / 30)} mo`;
}
