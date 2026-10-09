"use client";

import { useSyncExternalStore } from "react";
import { schedule, type Grade } from "./srs";

/**
 * All learning progress, persisted in localStorage. Versioned so the shape
 * can evolve without losing data.
 */
export interface CardState {
  ease: number;
  interval: number; // days
  reps: number;
  lapses: number;
  due: number; // epoch ms
  last: number;
}

export interface QuestionState {
  attempts: number;
  correct: number;
  lastCorrect: boolean;
  last: number;
}

export interface Mistake {
  unitId: string;
  added: number;
  streak: number; // consecutive correct answers since added
}

export interface QuizResult {
  unitId: string;
  score: number;
  total: number;
  at: number;
}

export interface ExamResult {
  score: number;
  total: number;
  passed: boolean;
  seconds: number;
  at: number;
}

export interface Activity {
  kind: "lesson" | "quiz" | "flashcards" | "exam" | "review";
  label: string;
  href: string;
  at: number;
}

export interface Progress {
  version: 1;
  lessons: Record<string, { completed: number; check?: { score: number; total: number } }>; // key: unitId/lessonId
  recall: Record<string, number>; // key: unitId/lessonId → when attempted
  cards: Record<string, CardState>;
  questions: Record<string, QuestionState>;
  mistakes: Record<string, Mistake>;
  quizzes: QuizResult[];
  exams: ExamResult[];
  activity: Activity[];
}

const KEY = "lituk.progress.v1";
const MISTAKE_CLEAR_STREAK = 2;

const empty = (): Progress => ({
  version: 1,
  lessons: {},
  recall: {},
  cards: {},
  questions: {},
  mistakes: {},
  quizzes: [],
  exams: [],
  activity: [],
});

let state: Progress = empty();
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...empty(), ...JSON.parse(raw) };
  } catch {
    state = empty();
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage full or blocked: progress stays in memory for this session.
  }
}

function update(fn: (draft: Progress) => void) {
  load();
  const next: Progress = structuredClone(state);
  fn(next);
  state = next;
  persist();
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      loaded = false;
      load();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

const serverSnapshot = empty();

/** Read progress in a component. Returns an empty record during SSR. */
export function useProgress(): Progress {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return state;
    },
    () => serverSnapshot,
  );
}

/** True once the browser store has been read (avoids flashing empty states). */
export function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

// ───────────────────────────────────────────────────────────────── Actions

function log(draft: Progress, a: Omit<Activity, "at">) {
  draft.activity.unshift({ ...a, at: Date.now() });
  draft.activity = draft.activity.slice(0, 40);
}

export const lessonKey = (unitId: string, lessonId: string) => `${unitId}/${lessonId}`;

export function markRecall(unitId: string, lessonId: string) {
  update((d) => {
    d.recall[lessonKey(unitId, lessonId)] = Date.now();
  });
}

export function completeLesson(unitId: string, lessonId: string, label: string, check?: { score: number; total: number }) {
  update((d) => {
    const key = lessonKey(unitId, lessonId);
    d.lessons[key] = { completed: d.lessons[key]?.completed ?? Date.now(), check: check ?? d.lessons[key]?.check };
    log(d, { kind: "lesson", label, href: `/units/${unitId}/${lessonId}` });
  });
}

/** Record one answer. Wrong answers enter the mistake bank; two right in a row clear them. */
export function recordAnswer(questionId: string, unitId: string, correct: boolean) {
  update((d) => {
    const q = d.questions[questionId] ?? { attempts: 0, correct: 0, lastCorrect: false, last: 0 };
    d.questions[questionId] = {
      attempts: q.attempts + 1,
      correct: q.correct + (correct ? 1 : 0),
      lastCorrect: correct,
      last: Date.now(),
    };
    const m = d.mistakes[questionId];
    if (!correct) {
      d.mistakes[questionId] = { unitId, added: m?.added ?? Date.now(), streak: 0 };
    } else if (m) {
      if (m.streak + 1 >= MISTAKE_CLEAR_STREAK) delete d.mistakes[questionId];
      else d.mistakes[questionId] = { ...m, streak: m.streak + 1 };
    }
  });
}

export function recordQuiz(unitId: string, score: number, total: number, label: string) {
  update((d) => {
    d.quizzes.unshift({ unitId, score, total, at: Date.now() });
    log(d, { kind: "quiz", label: `${label}: ${score}/${total}`, href: `/units/${unitId}/quiz` });
  });
}

export function recordExam(result: Omit<ExamResult, "at">) {
  update((d) => {
    d.exams.unshift({ ...result, at: Date.now() });
    log(d, {
      kind: "exam",
      label: `Practice exam: ${result.score}/${result.total} (${result.passed ? "pass" : "not yet"})`,
      href: "/exam",
    });
  });
}

export function reviewCard(cardId: string, grade: Grade) {
  update((d) => {
    d.cards[cardId] = schedule(d.cards[cardId], grade, Date.now());
  });
}

export function logFlashcardSession(label: string, href: string, count: number) {
  if (count === 0) return;
  update((d) => log(d, { kind: "flashcards", label: `${label}: ${count} card${count === 1 ? "" : "s"}`, href }));
}

export function exportProgress(): string {
  load();
  return JSON.stringify(state, null, 2);
}

export function importProgress(json: string) {
  const parsed = JSON.parse(json);
  if (parsed?.version !== 1) throw new Error("This file is not a progress export from this site.");
  update((d) => Object.assign(d, empty(), parsed));
}

export function resetProgress() {
  update((d) => Object.assign(d, empty()));
}

// ───────────────────────────────────────────────────────────────── Clock

let clock = 0;
const clockListeners = new Set<() => void>();
let clockTimer: ReturnType<typeof setInterval> | undefined;

function subscribeClock(listener: () => void) {
  clockListeners.add(listener);
  if (!clockTimer) {
    clockTimer = setInterval(() => {
      clock = Date.now();
      clockListeners.forEach((l) => l());
    }, 30_000);
  }
  return () => {
    clockListeners.delete(listener);
    if (!clockListeners.size && clockTimer) {
      clearInterval(clockTimer);
      clockTimer = undefined;
    }
  };
}

/** Current time, refreshed every 30 seconds. 0 during server rendering. */
export function useNow() {
  return useSyncExternalStore(
    subscribeClock,
    () => {
      if (!clock || (!clockTimer && Date.now() - clock > 30_000)) clock = Date.now();
      return clock;
    },
    () => 0,
  );
}
