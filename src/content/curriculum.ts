import type { Chapter, Question, Unit } from "./types";
import { earlyBritain } from "./units/early-britain";
import credits from "./image-credits.json";

type PlannedUnit = Pick<Unit, "id" | "number" | "title" | "handbook" | "dek">;

const planned = (u: PlannedUnit): Unit => ({ ...u, status: "planned" });

const ch3 = { chapter: 3, chapterTitle: "A long and illustrious history" };
const ch4 = { chapter: 4, chapterTitle: "A modern, thriving society" };
const ch5 = { chapter: 5, chapterTitle: "The UK government, the law and your role" };

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
      planned({
        id: "values-and-principles",
        number: "1.1",
        title: "Values, principles and the test",
        handbook: { chapter: 1, chapterTitle: "The values and principles of the UK", section: "1.1–1.4", pages: [4, 7] },
        dek: "The five fundamental principles, responsibilities and freedoms, the citizenship pledge and how the test works.",
      }),
    ],
  },
  {
    number: 2,
    title: "What is the UK?",
    pages: [8, 9],
    units: [
      planned({
        id: "what-is-the-uk",
        number: "2.1",
        title: "What is the UK?",
        handbook: { chapter: 2, chapterTitle: "What is the UK?", section: "2.1–2.2", pages: [8, 9] },
        dek: "The four countries, Great Britain vs the UK, Crown dependencies and overseas territories.",
      }),
    ],
  },
  {
    number: 3,
    title: "A long and illustrious history",
    pages: [10, 42],
    units: [
      earlyBritain,
      planned({ id: "middle-ages", number: "3.2", title: "The Middle Ages", handbook: { ...ch3, section: "3.5", pages: [27, 31] }, dek: "Bannockburn, the Black Death, Magna Carta, the birth of Parliament and the Wars of the Roses." }),
      planned({ id: "tudors-and-stuarts", number: "3.3", title: "The Tudors and Stuarts", handbook: { ...ch3, section: "3.6", pages: [32, 38] }, dek: "Henry VIII's six wives, the Reformation, Elizabeth I, the Civil War, the Restoration and the Glorious Revolution." }),
      planned({ id: "a-global-power", number: "3.4", title: "A global power", handbook: { ...ch3, section: "3.3", pages: [16, 22] }, dek: "The Bill of Rights, the Act of Union, the Enlightenment, the Industrial Revolution, Empire and the right to vote." }),
      planned({ id: "twentieth-century", number: "3.5", title: "The 20th century", handbook: { ...ch3, section: "3.4", pages: [23, 26] }, dek: "The First World War, the partition of Ireland, the Depression and the Second World War." }),
      planned({ id: "britain-since-1945", number: "3.6", title: "Britain since 1945", handbook: { ...ch3, section: "3.2", pages: [11, 15] }, dek: "The welfare state, migration, the 1960s, British inventions, Thatcher and devolution." }),
    ],
  },
  {
    number: 4,
    title: "A modern, thriving society",
    pages: [43, 71],
    units: [
      planned({ id: "the-uk-today", number: "4.1", title: "The UK today", handbook: { ...ch4, section: "4.8", pages: [68, 71] }, dek: "The nations, cities, currency, languages, population and an equal society." }),
      planned({ id: "religion", number: "4.2", title: "Religion", handbook: { ...ch4, section: "4.6", pages: [62, 63] }, dek: "Faiths in the UK, the Church of England, the Church of Scotland and the patron saints." }),
      planned({ id: "customs-and-traditions", number: "4.3", title: "Customs and traditions", handbook: { ...ch4, section: "4.3", pages: [51, 53] }, dek: "Christian and other religious festivals, national days and bank holidays." }),
      planned({ id: "sport", number: "4.4", title: "Sport", handbook: { ...ch4, section: "4.7", pages: [64, 67] }, dek: "Famous sportspeople, the Olympics and the sports that began in Britain." }),
      planned({ id: "arts-and-culture", number: "4.5", title: "Arts and culture", handbook: { ...ch4, section: "4.2", pages: [44, 50] }, dek: "Music, theatre, art, architecture, fashion, literature and poetry." }),
      planned({ id: "leisure", number: "4.6", title: "Leisure", handbook: { ...ch4, section: "4.4", pages: [54, 58] }, dek: "Gardening, food, film, comedy, TV licences, pubs, betting and pets." }),
      planned({ id: "places-of-interest", number: "4.7", title: "Places of interest", handbook: { ...ch4, section: "4.5", pages: [59, 61] }, dek: "National parks, the National Trust and famous UK landmarks." }),
    ],
  },
  {
    number: 5,
    title: "The UK government, the law and your role",
    pages: [72, 95],
    units: [
      planned({ id: "democracy-and-constitution", number: "5.1", title: "Democracy and the constitution", handbook: { ...ch5, section: "5.2–5.3", pages: [73, 78] }, dek: "How democracy developed, the monarchy, Parliament, the Speaker and elections." }),
      planned({ id: "the-government", number: "5.2", title: "The government", handbook: { ...ch5, section: "5.6", pages: [86, 89] }, dek: "Prime Minister, cabinet, opposition, civil service, devolution and who can vote." }),
      planned({ id: "international", number: "5.3", title: "The UK and the world", handbook: { ...ch5, section: "5.7", pages: [90, 92] }, dek: "The Commonwealth, the EU, the Council of Europe, the UN and NATO." }),
      planned({ id: "rights-tax-driving", number: "5.4", title: "Rights, tax and driving", handbook: { ...ch5, section: "5.4", pages: [79, 81] }, dek: "Human rights, equal opportunities, income tax, National Insurance and driving." }),
      planned({ id: "respecting-the-law", number: "5.5", title: "Respecting the law", handbook: { ...ch5, section: "5.5", pages: [82, 85] }, dek: "Criminal and civil law, the police, and the courts across the UK." }),
      planned({ id: "your-role", number: "5.6", title: "Your role in the community", handbook: { ...ch5, section: "5.8", pages: [93, 95] }, dek: "Shared values, volunteering, jury service, school governors and the environment." }),
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
