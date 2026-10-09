import type { Chapter, Question, Unit } from "./types";
import { earlyBritain } from "./units/early-britain";
import { valuesAndPrinciples } from "./units/values-and-principles";
import { whatIsTheUk } from "./units/what-is-the-uk";
import { middleAges } from "./units/middle-ages";
import { tudorsAndStuarts } from "./units/tudors-and-stuarts";
import { aGlobalPower } from "./units/a-global-power";
import { twentiethCentury } from "./units/twentieth-century";
import { britainSince1945 } from "./units/britain-since-1945";
import { theUkToday } from "./units/the-uk-today";
import { religion } from "./units/religion";
import { customsAndTraditions } from "./units/customs-and-traditions";
import { sport } from "./units/sport";
import { artsAndCulture } from "./units/arts-and-culture";
import { leisure } from "./units/leisure";
import { placesOfInterest } from "./units/places-of-interest";
import { democracyAndConstitution } from "./units/democracy-and-constitution";
import { theGovernment } from "./units/the-government";
import { international } from "./units/international";
import { rightsTaxDriving } from "./units/rights-tax-driving";
import { respectingTheLaw } from "./units/respecting-the-law";
import { yourRole } from "./units/your-role";
import { credits } from "./credits";

/**
 * The handbook's structure, with history restored to chronological order.
 * `handbook.section` and `handbook.pages` always point at the PDF.
 */
export const curriculum: Chapter[] = [
  {
    number: 1,
    title: "The values and principles of the UK",
    pages: [4, 7],
    units: [
      valuesAndPrinciples,
    ],
  },
  {
    number: 2,
    title: "What is the UK?",
    pages: [8, 9],
    units: [
      whatIsTheUk,
    ],
  },
  {
    number: 3,
    title: "A long and illustrious history",
    pages: [10, 42],
    units: [
      earlyBritain,
      middleAges,
      tudorsAndStuarts,
      aGlobalPower,
      twentiethCentury,
      britainSince1945,
    ],
  },
  {
    number: 4,
    title: "A modern, thriving society",
    pages: [43, 71],
    units: [
      theUkToday,
      religion,
      customsAndTraditions,
      sport,
      artsAndCulture,
      leisure,
      placesOfInterest,
    ],
  },
  {
    number: 5,
    title: "The UK government, the law and your role",
    pages: [72, 95],
    units: [
      democracyAndConstitution,
      theGovernment,
      international,
      rightsTaxDriving,
      respectingTheLaw,
      yourRole,
    ],
  },
];

export const allUnits: Unit[] = curriculum.flatMap((c) => c.units);
export const availableUnits = allUnits.filter((u) => u.status === "available");

export function getUnit(id: string): Unit | undefined {
  return allUnits.find((u) => u.id === id);
}

export function getLesson(unitId: string, lessonId: string) {
  const unit = getUnit(unitId);
  const index = unit?.lessons?.findIndex((l) => l.id === lessonId) ?? -1;
  if (!unit?.lessons || index < 0) return undefined;
  return { unit, lesson: unit.lessons[index], index, prev: unit.lessons[index - 1], next: unit.lessons[index + 1] };
}

/** Every question on the site, tagged with its unit. */
export const questionBank: (Question & { unitId: string })[] = availableUnits.flatMap((u) =>
  (u.questions ?? []).map((q) => ({ ...q, unitId: u.id })),
);

export const allFlashcards = availableUnits.flatMap((u) =>
  (u.flashcards ?? []).map((f) => ({ ...f, unitId: u.id })),
);

export type ImageCredit = {
  src: string;
  width: number;
  height: number;
  title: string;
  author: string;
  licence: string;
  licenceUrl: string | null;
  sourceUrl: string;
};

export const images = credits as Record<string, ImageCredit>;

/** Lesson title lookup for any (unitId, lessonId). */
export function lessonTitle(unitId: string, lessonId: string) {
  return getUnit(unitId)?.lessons?.find((l) => l.id === lessonId)?.title ?? lessonId;
}
