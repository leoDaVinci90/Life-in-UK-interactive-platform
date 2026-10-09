# Life in the UK — Interactive Study Edition

Plan, analysis and design direction. Written before building the prototype chapter.

Source: *Life in the UK: A guide for new residents, 3rd Edition, PDF version* (98 pages, "Britizen" PDF, Crown copyright). Page numbers below refer to this PDF.

---

## 1. Analysis of the handbook

### 1.1 Structure

| Handbook chapter | Sections (PDF pages) | Pages | Character |
|---|---|---|---|
| 1. The values and principles of the UK | 1.1 Intro (4) · 1.2 Becoming a permanent resident (5) · 1.3 Values and principles (6) · 1.4 Taking the test (7) | 4 | Short, list-heavy: five principles, responsibilities, freedoms, citizenship pledge |
| 2. What is the UK? | 2.1–2.2 (8–9) | 2 | Very short but reliably tested: UK vs Great Britain vs British Isles, Crown dependencies, overseas territories |
| 3. A long and illustrious history | 3.2 Britain since 1945 (11–15) · 3.3 A global power (16–22) · 3.4 The 20th century (23–26) · 3.5 The Middle Ages (27–31) · 3.6 Tudors and Stuarts (32–38) · 3.7 Early Britain (39–42) | 33 | The largest and most date-dense chapter. ~60 named people, ~80 dates, many Acts, battles and "profile boxes" |
| 4. A modern, thriving society | 4.2 Arts and culture (44–50) · 4.3 Customs and traditions (51–53) · 4.4 Leisure (54–58) · 4.5 Places of interest (59–61) · 4.6 Religion (62–63) · 4.7 Sport (64–67) · 4.8 The UK today (68–71) | 29 | Catalogue-like: composers, painters, writers, films, festivals, sports people, landmarks, cities, statistics |
| 5. The UK government, the law and your role | 5.2 Democracy (73) · 5.3 Constitution (74–78) · 5.4 Fundamental principles, tax, driving (79–81) · 5.5 Law, police, courts (82–85) · 5.6 Government, devolution, voting (86–89) · 5.7 International institutions (90–92) · 5.8 Your role in the community (93–95) | 24 | Rules and institutions: numbers (ages, members, limits), comparisons between the four nations |
| 6. Summary | 6.1 Sources (96) · 6.2 Key material and facts (97–98) | 3 | A publisher-written fact digest, not part of the official handbook |

**Important:** this PDF prints the history chapter in *reverse* order (1945 first, Early Britain last). The official handbook runs chronologically. The site restores chronological order and keeps the PDF section numbers and page numbers on every unit so the source is always one click away.

### 1.2 What is most examinable

The handbook itself says questions come from *all* chapters, including the introduction, and that "Check that you understand" boxes are guidance only. From the text's own emphasis (chapter intros on pp. 8, 10, 43, 72) the densest examinable material is:

- **Dates and sequences**: invasions, battles, Acts of Parliament, the extension of the vote (1832, 1867, 1918, 1928, 1969), devolution (1997–99).
- **People and what they are known for**: monarchs, PMs, inventors, writers, artists, composers, athletes.
- **Distinctions**: UK / Great Britain / British Isles; criminal vs civil law; Magistrates' / Crown / Sheriff / Youth courts; Commonwealth / EU / Council of Europe / UN / NATO; England vs Scotland vs Wales vs Northern Ireland (legal systems, churches, parliaments, banknotes, patron saints, bank holidays).
- **Numbers**: jury sizes (12 / 15), voting and driving ages, member counts (Scottish Parliament 129, Welsh Assembly 60, NI Assembly 90), claim limits, population shares.
- **Festivals and traditions** with their dates.

### 1.3 Accuracy flags (need verification against current official information)

The app shows these as "Check" notes next to the affected content. None are corrected silently.

**Errors or inconsistencies inside the PDF**

| Page | Issue |
|---|---|
| 97 | Summary says the Act for the Government of Wales was under Henry **VII**; the main text (p. 33) says Henry **VIII**. |
| 98 | Summary says St Columba and St Augustine "led missionaries from Rome"; the main text (p. 40) says Columba came from **Ireland** and only Augustine came from Rome. |
| 13 vs 91 | p. 13 says "The UK is a full member of the European Union"; p. 91 says the UK left on 31 January 2020. |
| 90 | Says the Commonwealth has 54 members, then lists "56 member states". |
| 21 | Cross-reference "pocket and rotten boroughs (see Chapter 4)" points to the wrong place (they are explained on p. 16). |
| 13, 97–98 | Spelling slips: "Ian Wilmot" (Wilmut), "Clement Atlee", "Cockrell", "Flemming", "Stevenson" (Stephenson). The site uses the correct spellings and notes the source spelling. |

**Information that has dated since the 3rd edition (2013)**

| Page | Issue |
|---|---|
| 5, 7 | Application process, UK Border Agency, test centres and fees describe 2013 arrangements. |
| 19 | "Longest reign of any British monarch (2013)" — Victoria was overtaken by Elizabeth II in 2015. |
| 15, 75, 90 | Content added by the PDF publisher (2015–2024 governments, King Charles III, Brexit, Commonwealth list) is **not in the official 3rd edition** and may never be tested. Shown with a "Publisher update" label. |
| 62 | Religion figures come from the 2009 Citizenship Survey. |
| 78, 88, 94 | European Parliament elections and EU citizens' voting/standing rights no longer apply to the UK. |
| 80–81 | Paper tax disc no longer exists; NI number process has changed. |
| 83 | Independent Police Complaints Commission has been replaced. |
| 92 | Council of Europe membership is now 46, not 47. |

**Exam format.** The handbook says the test has 24 questions (p. 7). The 45-minute limit and 18/24 pass mark used by the practice exam come from current official test guidance, not from this PDF, and should be re-checked before the real test.

---

## 2. Information architecture

```
Dashboard (home)
├── Curriculum
│   ├── 1  Values and principles of the UK        (1 unit)
│   ├── 2  What is the UK?                         (1 unit)
│   ├── 3  A long and illustrious history          (6 units, chronological)
│   │   ├── 3.1 Early Britain           § 3.7  pp. 39–42   ← prototype
│   │   ├── 3.2 The Middle Ages         § 3.5  pp. 27–31
│   │   ├── 3.3 Tudors and Stuarts      § 3.6  pp. 32–38
│   │   ├── 3.4 A global power          § 3.3  pp. 16–22
│   │   ├── 3.5 The 20th century        § 3.4  pp. 23–26
│   │   └── 3.6 Britain since 1945      § 3.2  pp. 11–15
│   ├── 4  A modern, thriving society              (7 units)
│   └── 5  Government, the law and your role       (7 units)
│
│   Every unit:  Overview · Objectives · Lessons · Timeline / Map · Key facts
│                · Flashcards · Unit quiz · Status
│   Every lesson: Recall-first prompt → short sections → figures → key facts
│                → memory aid → 3-question knowledge check → next lesson
├── Review        due flashcards (all units) + mistake bank
├── Practice exam 24 questions · 45 min · pass 18/24 · history
└── Sources       handbook PDF (page-linked), image credits, accuracy flags
```

A unit is the handbook's section (history is split into its six eras, which is how the handbook itself splits it). Units are the "chapters" learners finish; the handbook chapter number stays visible so the original structure remains recognisable.

## 3. Learning experience and content transformation

**Principle: source first, then help.** Every lesson paragraph is a faithful paraphrase of the handbook with a page reference. Anything that is *not* in the handbook — extra dates, image background, memory aids — sits in a visibly different "Beyond the handbook" style so it never gets mistaken for examinable content.

| Handbook material | Presentation |
|---|---|
| Chronological narrative (history) | Interactive timeline + short lessons per era; each event shows date, people, why it matters, what to remember |
| Places (sites, cities, landmarks, parks) | Interactive map of Britain built from public-domain Natural Earth data |
| People boxes (inventors, writers, artists, athletes) | Expandable portrait cards: name, dates, known for, one memorable detail |
| Lists (principles, rights, festivals, courts) | Grouped cards, comparison tables (e.g. England & Wales vs Scotland vs NI) |
| Numbers and dates | Key-fact panels + flashcards + "which number?" questions |
| Poems and quotations | Set as pull-quotes, recognised by author and title |

**Study methods built in**

- **Active recall** — every lesson opens with a question to attempt *before* reading; every lesson ends with a knowledge check.
- **Flashcards with spaced repetition** — a simplified SM-2 scheduler (Again / Hard / Good / Easy). New and lapsed cards come back sooner.
- **Unit quiz** — 12 questions drawn from a larger bank in the three official formats (single answer, true/false, choose two).
- **Mistake review** — every wrong answer goes into a mistake bank; it leaves after two correct answers in a row.
- **Practice exam** — 24 questions, 45-minute timer, 18/24 to pass, history kept.
- **Memory aids** — mnemonics and visual associations for sequences, names and numbers, labelled as memory aids.
- All practice questions are labelled **"Written for this site from the handbook — not official test questions."**

## 4. Design direction

*A curated exhibition catalogue rather than an app.*

- **Typography**: Newsreader (editorial serif) for headings and reading text; Inter for interface labels, numbers and small caps. Long-form measure ~66 characters.
- **Palette**: warm paper (`#F5F1E8`), ink (`#1C1B19`), oxblood accent (`#8A2E24`), antique gold for dates (`#9C7A3C`), sage for success (`#4E6B55`). Full dark theme.
- **Layout**: generous margins, a clear reading column, wide figures that break the column, hairline rules, small-caps kickers ("Chapter 3 · Part 1 · pp. 39–42").
- **Imagery**: real photographs, artefacts and manuscripts, each with caption, type label (photograph / artefact / manuscript / later depiction), author, licence and link. No AI images.
- **Motion**: subtle fades and card flips only; respects `prefers-reduced-motion`.
- **Progress**: quiet numerals and thin bars, no badges, points or confetti.

**Component system**: `PageHeader`, `Kicker`, `Prose`, `Figure`, `ContextNote`, `KeyFacts`, `Mnemonic`, `RecallPrompt`, `ExpandableCard`, `Timeline`, `BritainMap`, `FlashcardDeck`, `QuizRunner`, `ProgressBar`, `StatusPill`, `SourceRef` (links into the PDF at the right page).

## 5. Technical approach

- **Next.js (App Router) + TypeScript + Tailwind CSS v4**, statically generated, runs with `npm run dev`.
- **Content as typed TypeScript files** in `src/content/` (one file per unit), validated by the type system. Image credits in JSON generated by `scripts/fetch-images.mjs`; basemap generated by `scripts/build-map.py`.
- **Progress in `localStorage`** behind a small versioned store (`src/lib/progress.ts`) with `useSyncExternalStore`; export/import as JSON so a backup is possible. No accounts, database or paid APIs.
- **The handbook PDF stays local** (`public/handbook.pdf`, git-ignored) because the repository is public; "View in handbook" links open it at the right page.

**Limitations**

- Progress lives in one browser; clearing site data deletes it (export first).
- Image availability depends on openly licensed collections; some subjects (e.g. early medieval people) have no authentic portraits, so the site uses artefacts, manuscripts or clearly labelled later depictions.
- Practice questions are generated from the handbook; they approximate the real test's style but are not official.
- The Britizen PDF differs from the official TSO handbook in places (see §1.3). If you can obtain the official edition, it should become the primary source.

## 6. Prototype scope

Unit **3.1 Early Britain** (PDF § 3.7, pp. 39–42): 6 lessons, a 17-event timeline, a map of 15 places, 17 images, key facts, 34 flashcards, a 39-question bank, unit quiz, dashboard, review, practice exam and sources page — all working end to end. Other units appear in the curriculum as "Planned".
