import type { Unit } from "../types";

/**
 * Unit 2.1 — What is the UK? Handbook (Britizen PDF) §§ 2.1–2.2, pp. 8–9.
 * The capital cities come from § 4.8 (pp. 68–69) and are cross-referenced here
 * because they belong naturally with "the four countries".
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const whatIsTheUk: Unit = {
  id: "what-is-the-uk",
  number: "2.1",
  title: "What is the UK?",
  handbook: {
    chapter: 2,
    chapterTitle: "What is the UK?",
    section: "2.1–2.2",
    pages: [8, 9],
  },
  status: "available",
  dek: "The four countries, Great Britain vs the UK, Crown dependencies and overseas territories.",
  heroImageId: "what-is-the-uk-satellite",
  overview: [
    "This is the shortest chapter in the handbook, but the handbook itself warns that it is reliably tested. You need to know exactly which countries make up the United Kingdom, what \"Great Britain\" covers and what it leaves out, and how the UK is governed.",
    "You also need to know which places are closely linked to the UK but are not part of it: the Crown dependencies (the Channel Islands and the Isle of Man) and the British overseas territories (such as St Helena and the Falkland Islands). This unit lays the names side by side so the differences stick.",
  ],
  objectives: [
    "Name the four countries of the UK and give the country's full official name.",
    "Explain the difference between the United Kingdom and Great Britain.",
    "Name the capital city of each of the four countries.",
    "Define a Crown dependency and name the two examples in the handbook.",
    "Give examples of British overseas territories and explain how they differ from the UK itself.",
    "Describe where the UK is governed from and which countries have devolved parliaments or assemblies.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "four-countries",
      title: "The four countries and their names",
      dek: "England, Scotland, Wales and Northern Ireland: the UK, Great Britain and \"Britain\".",
      pages: [8, 9, 68, 69],
      minutes: 6,
      heroImageId: "what-is-the-uk-satellite",
      recall: {
        question: "Before you read: is Northern Ireland part of Great Britain?",
        answer:
          "No. Great Britain means only England, Scotland and Wales. Northern Ireland is part of the United Kingdom, whose full name is the United Kingdom of Great Britain and Northern Ireland.",
      },
      blocks: [
        {
          type: "prose",
          heading: "A short chapter that is often tested",
          pages: [8],
          paragraphs: [
            "Chapter 2 explains which countries make up the Union and the different phrases used to describe them. The handbook warns that, although the chapter is very short, there are very likely to be questions on the differences between Great Britain, the British Isles and Britain, and on what the Crown dependencies are.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "what-is-the-uk-satellite",
            kind: "aerial photograph",
            caption: "Satellite image of Great Britain, Ireland and the north coast of France, taken by NASA's MODIS instrument in February 2018.",
            context: "Satellite view of the whole island group. Not every land area in the picture is part of the UK: most of the island of Ireland is an independent country.",
          },
        },
        {
          type: "prose",
          heading: "Four countries, one kingdom",
          pages: [9],
          paragraphs: [
            "The UK is made up of England, Scotland, Wales and Northern Ireland. The rest of Ireland is an independent country.",
            "The official name of the country is the United Kingdom of Great Britain and Northern Ireland.",
            "\"Great Britain\" refers only to England, Scotland and Wales. It does not include Northern Ireland.",
            "The handbook uses the words \"Britain\", \"British Isles\" and \"British\" to refer to everyone in the UK.",
          ],
        },
        {
          type: "sequence",
          heading: "From smallest to largest",
          page: 9,
          steps: [
            { label: "Great Britain", detail: "England, Scotland and Wales only." },
            { label: "The United Kingdom", detail: "Great Britain plus Northern Ireland: four countries. Full name: the United Kingdom of Great Britain and Northern Ireland." },
            { label: "Crown dependencies", detail: "The Channel Islands and the Isle of Man: closely linked to the UK, with their own governments, but NOT part of the UK." },
            { label: "British overseas territories", detail: "Places in other parts of the world, such as St Helena and the Falkland Islands: linked to the UK but NOT part of it." },
          ],
        },
        {
          type: "cards",
          heading: "The four countries and their capitals",
          cards: [
            {
              id: "england",
              title: "England",
              meta: "Capital: London",
              summary: "Part of Great Britain and of the UK. London is also the capital of the UK.",
              detail: [
                "One of the three countries of Great Britain.",
                "London is the capital city of the UK (p. 68). The UK Parliament sits at Westminster, in London (p. 9).",
              ],
              page: 68,
              imageId: "values-and-principles-westminster",
            },
            {
              id: "scotland",
              title: "Scotland",
              meta: "Capital: Edinburgh",
              summary: "Part of Great Britain and of the UK, with its own parliament.",
              detail: [
                "One of the three countries of Great Britain.",
                "The capital city of Scotland is Edinburgh (p. 68). Scotland has a parliament of its own with devolved powers (p. 9).",
              ],
              page: 68,
            },
            {
              id: "wales",
              title: "Wales",
              meta: "Capital: Cardiff",
              summary: "Part of Great Britain and of the UK, with its own devolved assembly.",
              detail: [
                "One of the three countries of Great Britain.",
                "The capital city of Wales is Cardiff (p. 69). Wales has its own devolved parliament or assembly (p. 9).",
              ],
              page: 69,
            },
            {
              id: "northern-ireland",
              title: "Northern Ireland",
              meta: "Capital: Belfast",
              summary: "Part of the UK but NOT part of Great Britain.",
              detail: [
                "Northern Ireland is in the UK but not in Great Britain. The rest of Ireland is an independent country.",
                "The capital city of Northern Ireland is Belfast (p. 69). Northern Ireland has its own devolved assembly (p. 9).",
              ],
              page: 69,
            },
          ],
        },
        {
          type: "map",
          heading: "The four capitals",
          placeIds: ["what-is-the-uk-london", "what-is-the-uk-edinburgh", "what-is-the-uk-cardiff", "what-is-the-uk-belfast"],
          caption: "London is the capital of the UK and of England; Edinburgh, Cardiff and Belfast are the capitals of Scotland, Wales and Northern Ireland.",
        },
        {
          type: "prose",
          heading: "How the UK is governed",
          pages: [9],
          paragraphs: [
            "The UK is governed by the parliament sitting in Westminster.",
            "Scotland, Wales and Northern Ireland also have parliaments or assemblies of their own, with devolved powers in defined areas. England does not have a separate one.",
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook: the geographical \"British Isles\"",
          body: [
            {
              text: "Outside this handbook, \"British Isles\" is normally a geographical term for the whole group of islands, including the island of Ireland (both Northern Ireland and the independent Republic of Ireland) and the Isle of Man. For the test, remember the handbook's own definitions: Great Britain = England, Scotland and Wales; the UK = those three plus Northern Ireland.",
              verify: "Usage varies; many people in Ireland avoid the term.",
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The PDF's sentence on page 9 is garbled (\"'Britain', Isles' or 'British'\"). The official handbook reads \"'Britain', 'British Isles' or 'British'\". This lesson uses the official wording.",
            },
            {
              text: "The Welsh assembly (the National Assembly for Wales) was renamed the Senedd (Welsh Parliament) in 2020, after this edition was written.",
              verify: "Current names of the devolved bodies.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "The UK is made up of England, Scotland, Wales and Northern Ireland.", page: 9 },
        { text: "The rest of Ireland is an independent country.", page: 9 },
        { text: "Official name: the United Kingdom of Great Britain and Northern Ireland.", page: 9 },
        { text: "Great Britain means England, Scotland and Wales only, not Northern Ireland.", page: 9 },
        { text: "The handbook uses \"Britain\", \"British Isles\" and \"British\" to refer to everyone in the UK.", page: 9 },
        { text: "Capitals: London (UK and England), Edinburgh (Scotland), Cardiff (Wales), Belfast (Northern Ireland).", page: 68 },
        { text: "The UK is governed by the parliament at Westminster; Scotland, Wales and Northern Ireland have their own parliaments or assemblies with devolved powers.", page: 9 },
      ],
      mnemonics: [
        {
          title: "Great Britain is the big island",
          device: "\"Great Britain has no Irish in it.\"",
          explanation: "Great Britain = England, Scotland, Wales (the three countries on the largest island). Add Northern Ireland and you have the United Kingdom.",
        },
        {
          title: "The full name says it all",
          device: "UK = GB + NI.",
          explanation: "The official name, the United Kingdom of Great Britain and Northern Ireland, is literally the equation: Great Britain plus Northern Ireland.",
        },
        {
          title: "Capitals",
          device: "\"Lovely Easter Cakes, Bakers!\": London, Edinburgh, Cardiff, Belfast.",
          explanation: "England, Scotland, Wales, Northern Ireland, in the same order as the handbook's list.",
        },
      ],
      checkQuestionIds: ["uk-q01", "uk-q02", "uk-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "linked-not-part",
      title: "Linked to the UK, but not part of it",
      dek: "Crown dependencies (the Channel Islands and the Isle of Man) and British overseas territories.",
      pages: [9],
      minutes: 5,
      heroImageId: "what-is-the-uk-castle-cornet",
      recall: {
        question: "Before you read: is the Isle of Man part of the United Kingdom?",
        answer:
          "No. The Isle of Man and the Channel Islands are closely linked with the UK but are not part of it. They have their own governments and are called Crown dependencies.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Crown dependencies",
          pages: [9],
          paragraphs: [
            "Several islands are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man.",
            "They have their own governments and are called \"Crown dependencies\".",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "what-is-the-uk-castle-cornet",
              kind: "photograph",
              caption: "Castle Cornet guarding the harbour of St Peter Port, Guernsey, one of the Channel Islands.",
            },
            {
              imageId: "what-is-the-uk-tynwald",
              kind: "photograph",
              caption: "Tynwald Hill at St John's, Isle of Man.",
              context: "Tynwald is the name of the Isle of Man's own parliament. Every year it meets in the open air on this hill to proclaim new laws. Not in the handbook.",
            },
          ],
        },
        {
          type: "prose",
          heading: "British overseas territories",
          pages: [9],
          paragraphs: [
            "There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands.",
            "Like the Crown dependencies, they are linked to the UK but are not part of it.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "what-is-the-uk-stanley",
              kind: "photograph",
              caption: "Christ Church Cathedral in Stanley, the capital of the Falkland Islands.",
              context: "The Falklands lie in the South Atlantic. Argentina invaded them in 1982 (see the unit on Britain since 1945).",
            },
            {
              imageId: "what-is-the-uk-jamestown",
              kind: "photograph",
              caption: "Jamestown, the capital of St Helena, an island in the South Atlantic.",
            },
          ],
        },
        {
          type: "cards",
          heading: "Compare: who is in, who is linked",
          cards: [
            {
              id: "cmp-uk",
              title: "The United Kingdom",
              meta: "Part of the UK: yes",
              summary: "England, Scotland, Wales and Northern Ireland.",
              detail: [
                "Four countries. Governed by the parliament at Westminster, with devolved parliaments or assemblies in Scotland, Wales and Northern Ireland.",
              ],
              page: 9,
            },
            {
              id: "cmp-gb",
              title: "Great Britain",
              meta: "Part of the UK: yes, but not all of it",
              summary: "England, Scotland and Wales only.",
              detail: ["Great Britain does not include Northern Ireland."],
              page: 9,
            },
            {
              id: "cmp-britain",
              title: "\"Britain\", \"British Isles\", \"British\"",
              meta: "As used in the handbook",
              summary: "Words the handbook uses to refer to everyone in the UK.",
              detail: [
                "In this book these words refer to everyone in the UK.",
              ],
              page: 9,
              context: {
                text: "In geography, \"British Isles\" usually means the whole island group, including the Republic of Ireland, which is NOT part of the UK.",
              },
            },
            {
              id: "cmp-crown-dependencies",
              title: "Crown dependencies",
              meta: "Part of the UK: no",
              summary: "The Channel Islands and the Isle of Man.",
              detail: [
                "Islands closely linked with the UK but not part of it.",
                "They have their own governments.",
              ],
              page: 9,
              context: {
                text: "The main Channel Islands are Jersey and Guernsey. The UK is responsible for the defence and international relations of the Crown dependencies.",
              },
            },
            {
              id: "cmp-overseas-territories",
              title: "British overseas territories",
              meta: "Part of the UK: no",
              summary: "Places in other parts of the world, e.g. St Helena and the Falkland Islands.",
              detail: ["Linked to the UK but not part of it."],
              page: 9,
              context: {
                text: "There are 14 British overseas territories, including Gibraltar and Bermuda as well as St Helena and the Falklands.",
                verify: "Current list on GOV.UK.",
              },
            },
            {
              id: "cmp-ireland",
              title: "The rest of Ireland",
              meta: "Part of the UK: no",
              summary: "An independent country.",
              detail: ["Only Northern Ireland is part of the UK. The rest of Ireland is an independent country."],
              page: 9,
            },
          ],
        },
        {
          type: "map",
          heading: "The Crown dependencies",
          placeIds: ["what-is-the-uk-isle-of-man", "what-is-the-uk-jersey", "what-is-the-uk-guernsey"],
          caption: "The Isle of Man lies in the Irish Sea; the Channel Islands lie off the coast of France. St Helena and the Falklands are far off the map, in the South Atlantic.",
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Jersey and Guernsey are the two largest Channel Islands; their capitals are St Helier and St Peter Port." },
            { text: "Remember from Chapter 1 (p. 7): people living on the Isle of Man or in the Channel Islands have different arrangements for taking the Life in the UK test, precisely because these islands are not part of the UK." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Channel Islands and the Isle of Man are closely linked with the UK but are not part of it.", page: 9 },
        { text: "They have their own governments and are called Crown dependencies.", page: 9 },
        { text: "British overseas territories, such as St Helena and the Falkland Islands, are in other parts of the world.", page: 9 },
        { text: "Overseas territories are linked to the UK but are not part of it.", page: 9 },
      ],
      mnemonics: [
        {
          title: "Crown dependencies: C and I",
          device: "\"The Crown sits on C-I\": Channel Islands and Isle of Man.",
          explanation: "The two Crown dependencies named in the handbook. Both have their own governments and neither is part of the UK.",
        },
        {
          title: "Overseas = far away",
          device: "\"Saints and Falcons fly overseas\": St Helena and the Falklands.",
          explanation: "The handbook's two examples of British overseas territories, both in other parts of the world.",
        },
      ],
      checkQuestionIds: ["uk-q09", "uk-q11", "uk-q13"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "what-is-the-uk-london", name: "London (Westminster)", lat: 51.4995, lon: -0.1248, note: "Capital city of the UK and of England. The UK Parliament sits at Westminster.", page: 68, lessonId: "four-countries", era: "Today" },
    { id: "what-is-the-uk-edinburgh", name: "Edinburgh", lat: 55.9533, lon: -3.1883, note: "Capital city of Scotland.", page: 68, lessonId: "four-countries", era: "Today" },
    { id: "what-is-the-uk-cardiff", name: "Cardiff", lat: 51.4816, lon: -3.1791, label: { side: "left" }, note: "Capital city of Wales.", page: 69, lessonId: "four-countries", era: "Today" },
    { id: "what-is-the-uk-belfast", name: "Belfast", lat: 54.5973, lon: -5.9301, label: { side: "left" }, note: "Capital city of Northern Ireland (part of the UK, not of Great Britain).", page: 69, lessonId: "four-countries", era: "Today" },
    { id: "what-is-the-uk-isle-of-man", name: "Isle of Man", lat: 54.2361, lon: -4.5481, note: "Crown dependency: closely linked to the UK, with its own government, but not part of the UK.", page: 9, lessonId: "linked-not-part", era: "Today" },
    { id: "what-is-the-uk-guernsey", name: "Guernsey", lat: 49.4560, lon: -2.5850, label: { side: "left" }, note: "One of the Channel Islands, a Crown dependency. Not part of the UK.", page: 9, lessonId: "linked-not-part", era: "Today" },
    { id: "what-is-the-uk-jersey", name: "Jersey", lat: 49.2140, lon: -2.1310, note: "One of the Channel Islands, a Crown dependency. Not part of the UK.", page: 9, lessonId: "linked-not-part", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "The UK = England, Scotland, Wales and Northern Ireland.", page: 9 },
    { text: "Official name: the United Kingdom of Great Britain and Northern Ireland.", page: 9 },
    { text: "Great Britain = England, Scotland and Wales only (not Northern Ireland).", page: 9 },
    { text: "The rest of Ireland is an independent country.", page: 9 },
    { text: "In the handbook, \"Britain\", \"British Isles\" and \"British\" refer to everyone in the UK.", page: 9 },
    { text: "Crown dependencies (the Channel Islands and the Isle of Man) have their own governments and are not part of the UK.", page: 9 },
    { text: "British overseas territories, such as St Helena and the Falkland Islands, are linked to the UK but not part of it.", page: 9 },
    { text: "The UK is governed by the parliament in Westminster; Scotland, Wales and Northern Ireland have devolved parliaments or assemblies.", page: 9 },
    { text: "Capitals: London, Edinburgh, Cardiff, Belfast.", page: 68 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "uk-f01", lessonId: "four-countries", page: 9, front: "Which four countries make up the UK?", back: "England, Scotland, Wales and Northern Ireland." },
    { id: "uk-f02", lessonId: "four-countries", page: 9, front: "What is the official name of the UK?", back: "The United Kingdom of Great Britain and Northern Ireland." },
    { id: "uk-f03", lessonId: "four-countries", page: 9, front: "What does \"Great Britain\" refer to?", back: "England, Scotland and Wales only. Not Northern Ireland." },
    { id: "uk-f04", lessonId: "four-countries", page: 9, front: "What is the status of the rest of Ireland (outside Northern Ireland)?", back: "It is an independent country." },
    { id: "uk-f05", lessonId: "four-countries", page: 9, front: "How does the handbook use the words \"Britain\", \"British Isles\" and \"British\"?", back: "To refer to everyone in the UK." },
    { id: "uk-f06", lessonId: "four-countries", page: 68, front: "Name the capital of each country of the UK.", back: "England: London (also the UK capital). Scotland: Edinburgh. Wales: Cardiff. Northern Ireland: Belfast." },
    { id: "uk-f07", lessonId: "four-countries", page: 9, front: "Where does the parliament that governs the UK sit, and which countries have their own?", back: "Westminster. Scotland, Wales and Northern Ireland also have parliaments or assemblies with devolved powers." },
    { id: "uk-f08", lessonId: "linked-not-part", page: 9, front: "What are the Crown dependencies?", back: "The Channel Islands and the Isle of Man: closely linked with the UK, with their own governments, but not part of the UK." },
    { id: "uk-f09", lessonId: "linked-not-part", page: 9, front: "Do the Crown dependencies have their own governments?", back: "Yes." },
    { id: "uk-f10", lessonId: "linked-not-part", page: 9, front: "Give two examples of British overseas territories.", back: "St Helena and the Falkland Islands." },
    { id: "uk-f11", lessonId: "linked-not-part", page: 9, front: "Are British overseas territories part of the UK?", back: "No. They are linked to the UK but not part of it." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // four-countries
    { id: "uk-q01", lessonId: "four-countries", page: 9, type: "single", prompt: "Which countries make up the United Kingdom?", options: ["England, Scotland and Wales", "England, Scotland, Wales and Northern Ireland", "England, Scotland, Wales and Ireland", "England, Scotland, Wales, Northern Ireland and the Isle of Man"], answer: [1], explanation: "The UK is made up of England, Scotland, Wales and Northern Ireland. The rest of Ireland is independent, and the Isle of Man is a Crown dependency." },
    { id: "uk-q02", lessonId: "four-countries", page: 9, type: "single", prompt: "What does the term \"Great Britain\" refer to?", options: ["England, Scotland and Wales", "England, Scotland, Wales and Northern Ireland", "England and Wales only", "The whole of the UK and the Crown dependencies"], answer: [0], explanation: "\"Great Britain\" refers only to England, Scotland and Wales, not to Northern Ireland." },
    { id: "uk-q03", lessonId: "four-countries", page: 9, type: "truefalse", prompt: "Northern Ireland is part of Great Britain.", options: ["True", "False"], answer: [1], explanation: "False. Northern Ireland is part of the UK but not of Great Britain, which means England, Scotland and Wales." },
    { id: "uk-q04", lessonId: "four-countries", page: 9, type: "single", prompt: "What is the official name of the country?", options: ["Great Britain", "The British Isles", "The United Kingdom of Great Britain and Northern Ireland", "The United Kingdom of England, Scotland and Wales"], answer: [2], explanation: "The official name is the United Kingdom of Great Britain and Northern Ireland." },
    { id: "uk-q05", lessonId: "four-countries", page: 68, type: "single", prompt: "What is the capital city of Wales?", options: ["Swansea", "Cardiff", "Newport", "Belfast"], answer: [1], explanation: "Cardiff is the capital of Wales. Swansea and Newport are other Welsh cities; Belfast is the capital of Northern Ireland." },
    { id: "uk-q06", lessonId: "four-countries", page: 69, type: "multi", prompt: "Which TWO statements about capital cities are correct?", options: ["Edinburgh is the capital of Scotland", "Glasgow is the capital of Scotland", "Belfast is the capital of Northern Ireland", "Dublin is the capital of Northern Ireland"], answer: [0, 2], explanation: "Edinburgh is Scotland's capital and Belfast is Northern Ireland's. Glasgow is a Scottish city but not the capital; Dublin is not in the UK." },
    { id: "uk-q07", lessonId: "four-countries", page: 9, type: "single", prompt: "Where does the parliament that governs the UK sit?", options: ["Edinburgh", "Cardiff", "Westminster", "Belfast"], answer: [2], explanation: "The UK is governed by the parliament sitting in Westminster." },
    { id: "uk-q08", lessonId: "four-countries", page: 9, type: "truefalse", prompt: "Scotland, Wales and Northern Ireland have parliaments or assemblies of their own with devolved powers.", options: ["True", "False"], answer: [0], explanation: "True. They have devolved powers in defined areas, while the UK as a whole is governed from Westminster." },
    { id: "uk-q08b", lessonId: "four-countries", page: 9, type: "truefalse", prompt: "The rest of Ireland, outside Northern Ireland, is part of the UK.", options: ["True", "False"], answer: [1], explanation: "False. The rest of Ireland is an independent country." },
    // linked-not-part
    { id: "uk-q09", lessonId: "linked-not-part", page: 9, type: "single", prompt: "What are the Channel Islands and the Isle of Man called?", options: ["Overseas territories", "Crown dependencies", "Devolved nations", "Commonwealth realms"], answer: [1], explanation: "They have their own governments and are called Crown dependencies." },
    { id: "uk-q10", lessonId: "linked-not-part", page: 9, type: "truefalse", prompt: "The Isle of Man is part of the United Kingdom.", options: ["True", "False"], answer: [1], explanation: "False. The Isle of Man is closely linked with the UK but is not part of it. It is a Crown dependency." },
    { id: "uk-q11", lessonId: "linked-not-part", page: 9, type: "multi", prompt: "Which TWO are Crown dependencies?", options: ["The Channel Islands", "The Falkland Islands", "The Isle of Man", "St Helena"], answer: [0, 2], explanation: "The Channel Islands and the Isle of Man are Crown dependencies. The Falkland Islands and St Helena are British overseas territories." },
    { id: "uk-q12", lessonId: "linked-not-part", page: 9, type: "single", prompt: "Which of these is a British overseas territory?", options: ["The Isle of Man", "The Channel Islands", "Northern Ireland", "St Helena"], answer: [3], explanation: "St Helena is a British overseas territory. The Isle of Man and the Channel Islands are Crown dependencies; Northern Ireland is part of the UK." },
    { id: "uk-q13", lessonId: "linked-not-part", page: 9, type: "truefalse", prompt: "The Crown dependencies have their own governments.", options: ["True", "False"], answer: [0], explanation: "True. The Channel Islands and the Isle of Man have their own governments." },
    { id: "uk-q14", lessonId: "linked-not-part", page: 9, type: "single", prompt: "What is true of the British overseas territories, such as the Falkland Islands?", options: ["They are part of the UK", "They are linked to the UK but are not part of it", "They are part of Great Britain", "They are Crown dependencies"], answer: [1], explanation: "British overseas territories are in other parts of the world and are linked to the UK, but are not part of it." },
    { id: "uk-q15", lessonId: "linked-not-part", page: 9, type: "multi", prompt: "Which TWO places are linked to the UK but are NOT part of it?", options: ["The Falkland Islands", "Wales", "Jersey, in the Channel Islands", "Northern Ireland"], answer: [0, 2], explanation: "The Falklands (overseas territory) and the Channel Islands (Crown dependency) are linked to but not part of the UK. Wales and Northern Ireland are part of the UK." },
  ],

  flags: [
    { page: 9, text: "The PDF's sentence is garbled: \"The words 'Britain', Isles' or 'British'\". The official handbook reads \"'Britain', 'British Isles' or 'British'\", which the site uses." },
    { page: 9, text: "The handbook uses \"British Isles\" to refer to everyone in the UK. In ordinary geographical usage the British Isles also include the island of Ireland as a whole, so be careful to answer test questions in the handbook's terms (Great Britain = England, Scotland, Wales; UK = plus Northern Ireland)." },
    { page: 9, text: "\"Parliaments or assemblies\": the National Assembly for Wales was renamed the Senedd (Welsh Parliament) in 2020, after this edition." },
    { page: 68, text: "The capital cities are taken from § 4.8 (pp. 68–69) and taught here alongside the four countries." },
  ],
};
