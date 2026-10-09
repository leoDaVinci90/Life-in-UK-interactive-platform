/**
 * Content model. Everything examinable carries a handbook page reference.
 * Anything not in the handbook is typed as `Context` so the UI can style it
 * differently ("Beyond the handbook").
 */

/** A page in the handbook PDF (1-based, as printed in the footer "n/98"). */
export type Page = number;

export type ImageKind =
  | "photograph"
  | "artefact"
  | "manuscript"
  | "later depiction"
  | "aerial photograph"
  | "illustration"
  | "painting"
  | "portrait";

export interface FigureRef {
  imageId: string;
  /** What the image shows. Plain description, no examinable claims unless sourced. */
  caption: string;
  kind: ImageKind;
  /** Optional supplementary background about the object itself. */
  context?: string;
}

/** Supplementary information that is NOT in the handbook. */
export interface Context {
  text: string;
  /** Set when the statement should be double-checked against an official source. */
  verify?: string;
}

export interface Fact {
  text: string;
  page: Page;
}

export type Block =
  | { type: "prose"; heading?: string; paragraphs: string[]; pages: Page[] }
  | { type: "figure"; figure: FigureRef; wide?: boolean }
  | { type: "figures"; figures: FigureRef[] }
  | { type: "context"; title: string; body: Context[] }
  | { type: "cards"; heading?: string; cards: InfoCard[] }
  | { type: "map"; heading?: string; placeIds: string[]; caption?: string }
  | { type: "sequence"; heading: string; steps: { label: string; detail?: string }[]; page: Page }
  | { type: "quote"; text: string; attribution: string };

export interface InfoCard {
  id: string;
  title: string;
  /** Short line under the title: dates, role, place. */
  meta?: string;
  /** One-line summary visible when collapsed. */
  summary: string;
  /** Expanded detail, from the handbook. */
  detail: string[];
  page: Page;
  imageId?: string;
  context?: Context;
}

export interface Mnemonic {
  title: string;
  device: string;
  explanation: string;
}

export type QuestionType = "single" | "truefalse" | "multi";

export interface Question {
  id: string;
  type: QuestionType;
  prompt: string;
  options: string[];
  /** Indices into options. One for single/truefalse, two for multi. */
  answer: number[];
  explanation: string;
  page: Page;
  lessonId: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  page: Page;
  lessonId: string;
}

export interface Lesson {
  id: string;
  title: string;
  /** Short line used on cards and in the lesson header. */
  dek: string;
  pages: Page[];
  minutes: number;
  heroImageId?: string;
  recall: { question: string; answer: string };
  blocks: Block[];
  keyFacts: Fact[];
  mnemonics: Mnemonic[];
  /** Ids of questions used for the end-of-lesson knowledge check. */
  checkQuestionIds: string[];
}

export interface TimelineEvent {
  id: string;
  /** Date exactly as the handbook gives it, if it gives one. */
  date?: string;
  /** Date from outside the handbook, shown as supplementary. */
  contextDate?: string;
  /** Used for ordering only. Negative = BC. */
  sortYear: number;
  title: string;
  summary: string;
  people: string[];
  whyItMatters: string;
  remember: string[];
  imageId?: string;
  page: Page;
  lessonId: string;
}

export interface Place {
  id: string;
  name: string;
  lat: number;
  lon: number;
  /** Handbook fact about the place. */
  note: string;
  page: Page;
  lessonId: string;
  era: string;
  /** Label placement on the map, to avoid collisions. Default: right. */
  label?: { side: "left" | "right"; dy?: number };
  /** Draw as a line between two points (e.g. a wall) instead of a dot. */
  line?: [[number, number], [number, number]];
}

export interface VerificationFlag {
  page: Page;
  text: string;
}

export interface Unit {
  id: string;
  /** Position in this site's curriculum, e.g. "3.1". */
  number: string;
  title: string;
  handbook: { chapter: number; chapterTitle: string; section: string; pages: [Page, Page] };
  status: "available" | "planned";
  dek: string;
  heroImageId?: string;
  overview?: string[];
  objectives?: string[];
  lessons?: Lesson[];
  timeline?: TimelineEvent[];
  places?: Place[];
  keyFacts?: Fact[];
  flashcards?: Flashcard[];
  questions?: Question[];
  flags?: VerificationFlag[];
}

export interface Chapter {
  number: number;
  title: string;
  pages: [Page, Page];
  units: Unit[];
}
