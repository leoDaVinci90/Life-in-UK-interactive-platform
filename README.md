# Life in the UK: Study Edition

A personal, local-first study site built from *Life in the UK: A Guide for New Residents* (3rd edition).
Short lessons, an interactive timeline and map, flashcards with spaced repetition, quizzes, a mistake bank
and a timed practice exam. Progress is saved in your browser.

See [docs/PLAN.md](docs/PLAN.md) for the analysis of the handbook, the information architecture, the
learning approach, the design direction and the accuracy notes.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

### The handbook PDF

The handbook is not committed to this repository. To enable the "Handbook p. N" links, copy your PDF to
`public/handbook.pdf` (it is git-ignored).

## Status

| Part | Status |
|---|---|
| 3.1 Early Britain (handbook § 3.7, pp. 39–42) | Prototype: complete |
| Everything else | Planned, shown in the curriculum |

## How it is organised

```
src/content/            Typed content, one file per part (units/early-britain.ts)
src/content/curriculum.ts  Chapter and part structure, with handbook page ranges
src/content/flags.ts    Accuracy notes found while analysing the PDF
src/content/image-credits.json  Image licences and authors (generated)
src/content/map/basemap.json    Map outlines (generated)
src/lib/progress.ts     localStorage progress store (export/import on the dashboard)
src/lib/srs.ts          Spaced-repetition scheduler (simplified SM-2)
src/components/         Timeline, map, flashcards, quiz, figures, lesson blocks
scripts/fetch-images.mjs  Downloads Wikimedia Commons images and records attribution
scripts/build-map.py      Builds map outlines from Natural Earth (public domain)
```

## Content rules

- The handbook is the primary source. Every lesson section, key fact, flashcard and question carries a page reference.
- Anything not in the handbook is labelled "Beyond the handbook" (or shown with † on the timeline).
- Practice questions are written for this site and are not official test questions.
- Images are real photographs, artefacts and documents with credits. No AI-generated images.
