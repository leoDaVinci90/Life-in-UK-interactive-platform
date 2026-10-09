import { allFlashcards, availableUnits, getUnit, questionBank } from "@/content/curriculum";
import type { Unit } from "@/content/types";
import { lessonKey, type Progress } from "./progress";
import { isDue, isLearned } from "./srs";

export const PASS_RATIO = 0.75;

export type UnitStatus = "not-started" | "in-progress" | "needs-revision" | "complete";

export function unitStats(unit: Unit, p: Progress, now = Date.now()) {
  const lessons = unit.lessons ?? [];
  const done = lessons.filter((l) => p.lessons[lessonKey(unit.id, l.id)]).length;
  const cards = unit.flashcards ?? [];
  const learned = cards.filter((c) => isLearned(p.cards[c.id])).length;
  const due = cards.filter((c) => p.cards[c.id] && isDue(p.cards[c.id], now)).length;
  const fresh = cards.filter((c) => !p.cards[c.id]).length;
  const quizzes = p.quizzes.filter((q) => q.unitId === unit.id);
  const best = quizzes.reduce<number | null>((b, q) => Math.max(b ?? 0, q.score / q.total), null);
  const mistakes = Object.values(p.mistakes).filter((m) => m.unitId === unit.id).length;

  let status: UnitStatus = "not-started";
  if (done > 0 || quizzes.length > 0) status = "in-progress";
  if (done === lessons.length && best !== null) {
    status = best >= PASS_RATIO && mistakes === 0 ? "complete" : "needs-revision";
  }

  // Weighted mastery: reading 40%, flashcards 30%, best quiz 30%.
  const mastery =
    (lessons.length ? (done / lessons.length) * 0.4 : 0) +
    (cards.length ? (learned / cards.length) * 0.3 : 0) +
    (best ?? 0) * 0.3;

  return { done, total: lessons.length, learned, cards: cards.length, due, fresh, best, mistakes, status, mastery };
}

export function overall(p: Progress, now = Date.now()) {
  const stats = availableUnits.map((u) => ({ unit: u, ...unitStats(u, p, now) }));
  const lessonsTotal = stats.reduce((s, x) => s + x.total, 0);
  const lessonsDone = stats.reduce((s, x) => s + x.done, 0);
  const due = allFlashcards.filter((c) => p.cards[c.id] && isDue(p.cards[c.id], now)).length;
  const fresh = allFlashcards.filter((c) => !p.cards[c.id]).length;
  const mastery = stats.length ? stats.reduce((s, x) => s + x.mastery, 0) / stats.length : 0;
  return { stats, lessonsTotal, lessonsDone, due, fresh, mastery, mistakes: Object.keys(p.mistakes).length };
}

/** Lessons whose questions are answered poorly, worst first. */
export function weakTopics(p: Progress) {
  const byLesson = new Map<string, { unitId: string; lessonId: string; attempts: number; correct: number }>();
  for (const q of questionBank) {
    const s = p.questions[q.id];
    if (!s) continue;
    const key = lessonKey(q.unitId, q.lessonId);
    const agg = byLesson.get(key) ?? { unitId: q.unitId, lessonId: q.lessonId, attempts: 0, correct: 0 };
    agg.attempts += s.attempts;
    agg.correct += s.correct;
    byLesson.set(key, agg);
  }
  for (const [key, l] of Object.entries(p.lessons)) {
    if (l.check && l.check.score < l.check.total * 0.67) {
      const [unitId, lessonId] = key.split("/");
      if (!byLesson.has(key)) byLesson.set(key, { unitId, lessonId, attempts: l.check.total, correct: l.check.score });
    }
  }
  return [...byLesson.values()]
    .map((t) => ({ ...t, accuracy: t.correct / t.attempts }))
    .filter((t) => t.accuracy < 0.75)
    .sort((a, b) => a.accuracy - b.accuracy)
    .map((t) => {
      const unit = getUnit(t.unitId);
      const lesson = unit?.lessons?.find((l) => l.id === t.lessonId);
      return { ...t, unitTitle: unit?.title ?? "", lessonTitle: lesson?.title ?? t.lessonId };
    });
}

/** The next thing to study. */
export function recommendNext(p: Progress) {
  for (const unit of availableUnits) {
    for (const lesson of unit.lessons ?? []) {
      if (!p.lessons[lessonKey(unit.id, lesson.id)]) {
        return { kind: "lesson" as const, unit, lesson, href: `/units/${unit.id}/${lesson.id}` };
      }
    }
    if (!p.quizzes.some((q) => q.unitId === unit.id)) {
      return { kind: "quiz" as const, unit, href: `/units/${unit.id}/quiz` };
    }
  }
  return null;
}
