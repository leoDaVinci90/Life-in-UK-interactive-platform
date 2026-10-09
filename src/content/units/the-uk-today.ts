import type { Unit } from "../types";

/**
 * Unit 4.1 — The UK today. Handbook (Britizen PDF) § 4.8, pp. 68–71.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const theUkToday: Unit = {
  id: "the-uk-today",
  number: "4.1",
  title: "The UK today",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.8",
    pages: [68, 71],
  },
  status: "available",
  dek: "The nations, cities, currency, languages, population and an equal society.",
  heroImageId: "the-uk-today-john-o-groats",
  overview: [
    "The UK today is more diverse, in ethnic and religious terms, than it was 100 years ago. This unit covers the basic facts the test expects every resident to know: where the UK is, how far it stretches, its main cities and four capitals, its currency and its languages.",
    "It then looks at the people: how the population has grown since 1600, how unevenly it is spread across the four nations, why it is ageing, and the legal equality of men and women at work and at home.",
  ],
  objectives: [
    "Locate the UK in Europe and give the distance from John O'Groats to Land's End.",
    "Name the capital cities of the UK, Scotland, Wales and Northern Ireland, and place the main cities of each nation on a map.",
    "Describe the UK's currency, coins and notes, and the status of Scottish and Northern Irish banknotes.",
    "Name the languages other than English spoken in Wales, Scotland and Northern Ireland.",
    "Describe how the UK population has grown, how it is distributed between the four nations, and why it is ageing.",
    "Explain the legal equality of men and women and how women's role in work has changed.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "nations-and-cities",
      title: "The nations and their cities",
      dek: "Where the UK is, how far it stretches, its main cities and four capitals.",
      pages: [68, 69],
      minutes: 6,
      heroImageId: "the-uk-today-john-o-groats",
      recall: {
        question: "Before you read: what is the longest distance on the UK mainland, and roughly how far is it?",
        answer: "From John O'Groats on the north coast of Scotland to Land's End in the south-west corner of England: about 870 miles (approximately 1,400 kilometres).",
      },
      blocks: [
        {
          type: "prose",
          heading: "A diverse society",
          pages: [68],
          paragraphs: [
            "The UK today is a more diverse society than it was 100 years ago, in both ethnic and religious terms. Because of post-war immigration, nearly 10% of the population has a parent or grandparent born outside the UK.",
            "The UK continues to be a multinational and multiracial society with a rich and varied culture.",
          ],
        },
        {
          type: "prose",
          heading: "Where the UK is",
          pages: [68],
          paragraphs: [
            "The UK is in the north west of Europe. The longest distance on the mainland is from John O'Groats on the north coast of Scotland to Land's End in the south-west corner of England: about 870 miles, or approximately 1,400 kilometres.",
            "Most people live in towns and cities, but much of Britain is still countryside. Many people visit the countryside for holidays and for leisure activities such as walking, camping and fishing.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "the-uk-today-john-o-groats", kind: "photograph", caption: "The signpost at John O'Groats, on the north coast of Scotland." },
            { imageId: "the-uk-today-lands-end", kind: "photograph", caption: "The signpost at Land's End, the south-west corner of England." },
          ],
        },
        {
          type: "map",
          heading: "End to end",
          placeIds: ["the-uk-today-john-o-groats", "the-uk-today-lands-end"],
          caption: "About 870 miles (approximately 1,400 km) apart: the longest distance on the mainland.",
        },
        {
          type: "cards",
          heading: "Cities of the UK, by nation",
          cards: [
            {
              id: "ut-cities-england",
              title: "England",
              meta: "12 cities in the handbook · capital: London",
              summary: "London, Birmingham, Liverpool, Leeds, Sheffield, Bristol, Manchester, Bradford, Newcastle upon Tyne, Plymouth, Southampton, Norwich.",
              detail: ["London is the capital city of the UK."],
              page: 68,
            },
            {
              id: "ut-cities-wales",
              title: "Wales",
              meta: "3 cities · capital: Cardiff",
              summary: "Cardiff, Swansea, Newport.",
              detail: ["Cardiff is the capital city of Wales."],
              page: 68,
              imageId: "the-uk-today-cardiff",
            },
            {
              id: "ut-cities-scotland",
              title: "Scotland",
              meta: "4 cities · capital: Edinburgh",
              summary: "Edinburgh, Glasgow, Dundee, Aberdeen.",
              detail: ["Edinburgh is the capital city of Scotland. Glasgow is not the capital."],
              page: 68,
              imageId: "the-uk-today-edinburgh",
            },
            {
              id: "ut-cities-ni",
              title: "Northern Ireland",
              meta: "1 city · capital: Belfast",
              summary: "Belfast.",
              detail: ["Belfast is the capital city of Northern Ireland."],
              page: 69,
              imageId: "the-uk-today-belfast",
            },
          ],
        },
        {
          type: "map",
          heading: "The cities of the UK",
          placeIds: [
            "the-uk-today-london",
            "the-uk-today-birmingham",
            "the-uk-today-liverpool",
            "the-uk-today-leeds",
            "the-uk-today-sheffield",
            "the-uk-today-bristol",
            "the-uk-today-manchester",
            "the-uk-today-bradford",
            "the-uk-today-newcastle",
            "the-uk-today-plymouth",
            "the-uk-today-southampton",
            "the-uk-today-norwich",
            "the-uk-today-cardiff",
            "the-uk-today-swansea",
            "the-uk-today-newport",
            "the-uk-today-edinburgh",
            "the-uk-today-glasgow",
            "the-uk-today-dundee",
            "the-uk-today-aberdeen",
            "the-uk-today-belfast",
          ],
          caption: "All 20 cities listed in the handbook.",
        },
        {
          type: "map",
          heading: "The four capitals",
          placeIds: ["the-uk-today-london", "the-uk-today-edinburgh", "the-uk-today-cardiff", "the-uk-today-belfast"],
          caption: "London (UK), Edinburgh (Scotland), Cardiff (Wales) and Belfast (Northern Ireland).",
        },
        {
          type: "figures",
          figures: [
            { imageId: "the-uk-today-edinburgh", kind: "photograph", caption: "Edinburgh, capital of Scotland, with the castle on its rock." },
            { imageId: "the-uk-today-cardiff", kind: "photograph", caption: "City Hall, Cardiff, capital of Wales." },
            { imageId: "the-uk-today-belfast", kind: "photograph", caption: "Belfast City Hall, in the capital of Northern Ireland." },
          ],
        },
      ],
      keyFacts: [
        { text: "Nearly 10% of the population has a parent or grandparent born outside the UK.", page: 68 },
        { text: "The UK is in the north west of Europe.", page: 68 },
        { text: "John O'Groats (north coast of Scotland) to Land's End (south-west England): about 870 miles / 1,400 km.", page: 68 },
        { text: "Capitals: London (UK), Edinburgh (Scotland), Cardiff (Wales), Belfast (Northern Ireland).", page: 69 },
        { text: "Welsh cities: Cardiff, Swansea, Newport. Scottish cities: Edinburgh, Glasgow, Dundee, Aberdeen.", page: 68 },
      ],
      mnemonics: [
        {
          title: "Top to toe: 870",
          device: "\"Eight-seventy from the Groats to the End.\"",
          explanation: "John O'Groats (top) to Land's End (toe) is about 870 miles, approximately 1,400 km.",
        },
        {
          title: "The four capitals",
          device: "\"Little Elephants Can Bounce\": London, Edinburgh, Cardiff, Belfast.",
          explanation: "In the handbook's order: the UK, then Scotland, Wales and Northern Ireland.",
        },
        {
          title: "Wales: CSN",
          device: "\"Cymru's Southern Ports\": Cardiff, Swansea, Newport.",
          explanation: "The handbook's three Welsh cities all lie in the south of Wales. Cardiff, the first, is the capital.",
        },
      ],
      checkQuestionIds: ["ut-q01", "ut-q03", "ut-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "currency-and-languages",
      title: "Currency and languages",
      dek: "The pound sterling, its coins and notes, and Welsh and Gaelic.",
      pages: [69],
      minutes: 4,
      recall: {
        question: "Before you read: must a shop in England accept a Scottish banknote?",
        answer: "No. Scottish and Northern Irish banknotes are valid everywhere in the UK, but shops and businesses do not have to accept them.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The pound sterling",
          pages: [69],
          paragraphs: [
            "The UK's currency is the pound sterling (symbol £). There are 100 pence in a pound.",
            "Northern Ireland and Scotland have their own banknotes, which are valid everywhere in the UK. However, shops and businesses do not have to accept them.",
          ],
        },
        {
          type: "sequence",
          heading: "The denominations",
          page: 69,
          steps: [
            { label: "Coins", detail: "1p, 2p, 5p, 10p, 20p, 50p, £1 and £2" },
            { label: "Notes", detail: "£5, £10, £20, £50" },
          ],
        },
        {
          type: "prose",
          heading: "Languages and dialects",
          pages: [69],
          paragraphs: [
            "Language varies across the UK, and English has many accents and dialects.",
            "In Wales many people speak Welsh, a completely different language from English. It is taught in schools and universities.",
            "In Scotland, Gaelic (again a different language) is spoken in some parts of the Highlands and Islands. In Northern Ireland some people speak Irish Gaelic.",
          ],
        },
        {
          type: "cards",
          heading: "Languages beyond English",
          cards: [
            { id: "ut-welsh", title: "Welsh", meta: "Wales", summary: "Spoken by many people; taught in schools and universities.", detail: ["A completely different language from English."], page: 69 },
            { id: "ut-gaelic", title: "Gaelic", meta: "Scotland: Highlands and Islands", summary: "Spoken in some parts of the Highlands and Islands.", detail: ["A different language from English."], page: 69 },
            { id: "ut-irish-gaelic", title: "Irish Gaelic", meta: "Northern Ireland", summary: "Spoken by some people in Northern Ireland.", detail: ["The handbook says \"some people\" speak it."], page: 69 },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Banknotes in England and Wales are issued by the Bank of England. Several commercial banks in Scotland and Northern Ireland issue their own notes." },
            { text: "Coins and notes now carry the portrait of King Charles III as well as Queen Elizabeth II; both remain legal tender." },
          ],
        },
      ],
      keyFacts: [
        { text: "The currency is the pound sterling (£); 100 pence = £1.", page: 69 },
        { text: "Coins: 1p, 2p, 5p, 10p, 20p, 50p, £1, £2. Notes: £5, £10, £20, £50.", page: 69 },
        { text: "Scottish and Northern Irish banknotes are valid everywhere in the UK, but shops do not have to accept them.", page: 69 },
        { text: "Welsh is spoken by many in Wales and taught in schools and universities.", page: 69 },
        { text: "Gaelic is spoken in parts of the Scottish Highlands and Islands; some people in Northern Ireland speak Irish Gaelic.", page: 69 },
      ],
      mnemonics: [
        {
          title: "Coins stop at £2, notes start at £5",
          device: "1-2-5 pattern: 1p 2p 5p, 10p 20p 50p, £1 £2 … £5.",
          explanation: "Every coin follows 1-2-5. There is no £5 coin in the list and no £1 note: notes are £5, £10, £20, £50.",
        },
        {
          title: "Valid but optional",
          device: "\"Good everywhere, owed nowhere.\"",
          explanation: "Scottish and Northern Irish notes are valid throughout the UK, but no shop is obliged to accept them.",
        },
      ],
      checkQuestionIds: ["ut-q08", "ut-q10", "ut-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "population",
      title: "Population",
      dek: "From 4 million in 1600 to over 62 million in 2010, an uneven spread and an ageing nation.",
      pages: [69, 70],
      minutes: 5,
      recall: {
        question: "Before you read: roughly what share of the UK population lives in England?",
        answer: "About 84%. Wales has around 5%, Scotland just over 8% and Northern Ireland less than 3%.",
      },
      blocks: [
        {
          type: "sequence",
          heading: "Population growth in the UK (source: National Statistics)",
          page: 69,
          steps: [
            { label: "1600", detail: "Just over 4 million" },
            { label: "1700", detail: "5 million" },
            { label: "1801", detail: "8 million" },
            { label: "1851", detail: "20 million" },
            { label: "1901", detail: "40 million" },
            { label: "1951", detail: "50 million" },
            { label: "1998", detail: "57 million" },
            { label: "2005", detail: "Just under 60 million" },
            { label: "2010", detail: "Just over 62 million" },
            { label: "2022 (publisher update)", detail: "Estimated 67.6 million. Not in the official 3rd edition." },
          ],
        },
        {
          type: "prose",
          heading: "Why it has grown",
          pages: [69],
          paragraphs: [
            "Population growth has been faster in more recent years. Migration into the UK and longer life expectancy have both played a part.",
          ],
        },
        {
          type: "prose",
          heading: "An uneven spread",
          pages: [69],
          paragraphs: [
            "The population is very unequally spread over the four parts of the UK. England more or less consistently makes up 84% of the total, Wales around 5%, Scotland just over 8% and Northern Ireland less than 3%.",
          ],
        },
        {
          type: "cards",
          heading: "Share of the UK population",
          cards: [
            { id: "ut-share-england", title: "England", meta: "84%", summary: "More or less consistently 84% of the total.", detail: ["By far the largest share."], page: 69 },
            { id: "ut-share-scotland", title: "Scotland", meta: "Just over 8%", summary: "The second-largest share.", detail: ["Just over 8% of the total."], page: 69 },
            { id: "ut-share-wales", title: "Wales", meta: "Around 5%", summary: "Around 5% of the total.", detail: ["Around 5% of the population lives in Wales."], page: 69 },
            { id: "ut-share-ni", title: "Northern Ireland", meta: "Less than 3%", summary: "The smallest share.", detail: ["Less than 3% of the total."], page: 69 },
          ],
        },
        {
          type: "prose",
          heading: "An ageing population",
          pages: [69],
          paragraphs: [
            "People in the UK are living longer than ever, because of improved living standards and better health care. There is now a record number of people aged 85 and over, which affects the cost of pensions and health care.",
          ],
        },
        {
          type: "prose",
          heading: "Ethnic diversity",
          pages: [70],
          paragraphs: [
            "The UK population is ethnically diverse and changing rapidly, especially in large cities such as London. It is not always easy to get an exact picture of everyone's ethnic origin; there are people in the UK with origins from all over the world.",
            "In surveys, the most common ethnic description chosen is white, which includes people of European, Australian, Canadian, New Zealand and American descent. Other significant groups are people of Asian, black and mixed descent.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The 2022 row (estimated 67.6 million) was added by the publisher of this PDF. The official 3rd edition's table ends with 2010 (just over 62 million), so test questions are likely to use the earlier figures.",
              verify: "Learn the 1600–2010 figures; treat 2022 as background.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "UK population: just over 4 million (1600), 8 million (1801), 40 million (1901), 50 million (1951).", page: 69 },
        { text: "UK population: 57 million (1998), just under 60 million (2005), just over 62 million (2010).", page: 69 },
        { text: "Growth has been faster recently, because of migration and longer life expectancy.", page: 69 },
        { text: "England ~84%, Scotland just over 8%, Wales ~5%, Northern Ireland under 3% of the population.", page: 69 },
        { text: "A record number of people are aged 85 and over, affecting pensions and health care costs.", page: 69 },
        { text: "The most common ethnic description in surveys is white; other significant groups are Asian, black and mixed descent.", page: 70 },
      ],
      mnemonics: [
        {
          title: "84 – 8 – 5 – 3",
          device: "England eats the cake: 84; then Scotland 8, Wales 5, NI 3.",
          explanation: "The four shares add to roughly 100. Note Scotland (just over 8%) is bigger than Wales (around 5%).",
        },
        {
          title: "Doubling centuries",
          device: "1801: 8 → 1851: 20 → 1901: 40.",
          explanation: "The population doubled from 20 to 40 million in the second half of the 19th century, then grew to 50 million by 1951.",
        },
      ],
      checkQuestionIds: ["ut-q14", "ut-q16", "ut-q18"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "equal-society",
      title: "An equal society",
      dek: "Equal rights for men and women, and how work and family life have changed.",
      pages: [70, 71],
      minutes: 4,
      recall: {
        question: "Before you read: about what share of the UK workforce is made up of women?",
        answer: "About half.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Equal in law",
          pages: [70],
          paragraphs: [
            "In the UK it is a legal requirement that men and women must not be discriminated against because of their gender, or because they are, or are not, married.",
            "Men and women have equal rights to work, own property, marry and divorce. If they are married, both parents are equally responsible for their children.",
          ],
        },
        {
          type: "prose",
          heading: "Women at work and in education",
          pages: [70],
          paragraphs: [
            "Women make up about half of the workforce. On average, girls leave school with better qualifications than boys, and more women than men study at university.",
            "Employment opportunities for women are much greater than in the past. Women work in all sectors of the economy, and more women than ever hold high-level positions, including senior management in traditionally male-dominated occupations. Men, too, now work in more varied jobs.",
          ],
        },
        {
          type: "prose",
          heading: "Home life",
          pages: [71],
          paragraphs: [
            "It is no longer expected that women should stay at home and not work. Women often continue to work after having children.",
            "In many families today both partners work and both share responsibility for childcare and household chores.",
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The 1960s laws on equal pay and sex discrimination are covered in the Britain since 1945 unit." },
          ],
        },
      ],
      keyFacts: [
        { text: "It is illegal to discriminate against men or women because of their gender or marital status.", page: 70 },
        { text: "Men and women have equal rights to work, own property, marry and divorce; married parents are equally responsible for children.", page: 70 },
        { text: "Women make up about half of the workforce.", page: 70 },
        { text: "On average girls leave school with better qualifications than boys; more women than men study at university.", page: 70 },
        { text: "In many families both partners work and share childcare and household chores.", page: 71 },
      ],
      mnemonics: [
        {
          title: "Four equal rights",
          device: "W-O-M-D: Work, Own property, Marry, Divorce.",
          explanation: "The four things men and women have equal rights to do, according to the handbook.",
        },
        {
          title: "Half and ahead",
          device: "Half the workforce, ahead at school and university.",
          explanation: "Women are about half of the workforce; girls leave school with better qualifications, and more women than men go to university.",
        },
      ],
      checkQuestionIds: ["ut-q20", "ut-q22", "ut-q24"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "the-uk-today-john-o-groats", name: "John O'Groats", lat: 58.6373, lon: -3.0689, note: "On the north coast of Scotland; one end of the longest mainland distance (about 870 miles).", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-lands-end", name: "Land's End", lat: 50.0657, lon: -5.7132, label: { side: "left", dy: 8 }, note: "The south-west corner of England; the other end of the longest mainland distance.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    // England
    { id: "the-uk-today-london", name: "London", lat: 51.5074, lon: -0.1278, note: "Capital city of the UK.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-birmingham", name: "Birmingham", lat: 52.4862, lon: -1.8904, label: { side: "left" }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-liverpool", name: "Liverpool", lat: 53.4084, lon: -2.9916, label: { side: "left" }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-leeds", name: "Leeds", lat: 53.8008, lon: -1.5491, label: { side: "right", dy: -4 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-sheffield", name: "Sheffield", lat: 53.3811, lon: -1.4701, label: { side: "right", dy: 6 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-bristol", name: "Bristol", lat: 51.4545, lon: -2.5879, label: { side: "right", dy: -6 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-manchester", name: "Manchester", lat: 53.4808, lon: -2.2426, label: { side: "right", dy: 2 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-bradford", name: "Bradford", lat: 53.795, lon: -1.7594, label: { side: "left", dy: -6 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-newcastle", name: "Newcastle upon Tyne", lat: 54.9783, lon: -1.6178, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-plymouth", name: "Plymouth", lat: 50.3755, lon: -4.1427, label: { side: "right", dy: 6 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-southampton", name: "Southampton", lat: 50.9097, lon: -1.4044, label: { side: "left", dy: 8 }, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-norwich", name: "Norwich", lat: 52.6309, lon: 1.2974, note: "City in England.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    // Wales
    { id: "the-uk-today-cardiff", name: "Cardiff", lat: 51.4816, lon: -3.1791, label: { side: "left", dy: 8 }, note: "Capital city of Wales.", page: 69, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-swansea", name: "Swansea", lat: 51.6214, lon: -3.9436, label: { side: "left", dy: -4 }, note: "City in Wales.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-newport", name: "Newport", lat: 51.5842, lon: -2.9977, label: { side: "left", dy: -8 }, note: "City in Wales.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    // Scotland
    { id: "the-uk-today-edinburgh", name: "Edinburgh", lat: 55.9533, lon: -3.1883, note: "Capital city of Scotland.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-glasgow", name: "Glasgow", lat: 55.8642, lon: -4.2518, label: { side: "left" }, note: "City in Scotland.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-dundee", name: "Dundee", lat: 56.462, lon: -2.9707, note: "City in Scotland.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    { id: "the-uk-today-aberdeen", name: "Aberdeen", lat: 57.1497, lon: -2.0943, note: "City in Scotland.", page: 68, lessonId: "nations-and-cities", era: "Today" },
    // Northern Ireland
    { id: "the-uk-today-belfast", name: "Belfast", lat: 54.5973, lon: -5.9301, label: { side: "left" }, note: "Capital city of Northern Ireland.", page: 69, lessonId: "nations-and-cities", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "The UK is in north-west Europe; John O'Groats to Land's End is about 870 miles (1,400 km).", page: 68 },
    { text: "Nearly 10% of people have a parent or grandparent born outside the UK.", page: 68 },
    { text: "Capitals: London (UK), Edinburgh (Scotland), Cardiff (Wales), Belfast (Northern Ireland).", page: 69 },
    { text: "Pound sterling (£), 100 pence. Coins 1p–£2; notes £5, £10, £20, £50.", page: 69 },
    { text: "Scottish and Northern Irish notes are valid throughout the UK, but businesses need not accept them.", page: 69 },
    { text: "Welsh (Wales), Gaelic (Scottish Highlands and Islands), Irish Gaelic (Northern Ireland).", page: 69 },
    { text: "Population: just over 4 million in 1600; just over 62 million in 2010.", page: 69 },
    { text: "Population shares: England 84%, Scotland just over 8%, Wales ~5%, Northern Ireland under 3%.", page: 69 },
    { text: "Record numbers aged 85+, raising pension and health care costs.", page: 69 },
    { text: "Men and women have equal rights to work, own property, marry and divorce; women are about half the workforce.", page: 70 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "ut-f01", lessonId: "nations-and-cities", page: 68, front: "Where in Europe is the UK?", back: "In the north west of Europe." },
    { id: "ut-f02", lessonId: "nations-and-cities", page: 68, front: "What is the longest distance on the UK mainland?", back: "John O'Groats (north coast of Scotland) to Land's End (south-west England): about 870 miles, approximately 1,400 km." },
    { id: "ut-f03", lessonId: "nations-and-cities", page: 68, front: "What share of the population has a parent or grandparent born outside the UK?", back: "Nearly 10%, because of post-war immigration." },
    { id: "ut-f04", lessonId: "nations-and-cities", page: 69, front: "Name the four capital cities.", back: "UK: London. Scotland: Edinburgh. Wales: Cardiff. Northern Ireland: Belfast." },
    { id: "ut-f05", lessonId: "nations-and-cities", page: 68, front: "Which three Welsh cities does the handbook list?", back: "Cardiff, Swansea and Newport." },
    { id: "ut-f06", lessonId: "nations-and-cities", page: 68, front: "Which four Scottish cities does the handbook list?", back: "Edinburgh, Glasgow, Dundee and Aberdeen." },
    { id: "ut-f07", lessonId: "nations-and-cities", page: 68, front: "Name the 12 English cities listed in the handbook.", back: "London, Birmingham, Liverpool, Leeds, Sheffield, Bristol, Manchester, Bradford, Newcastle upon Tyne, Plymouth, Southampton, Norwich." },
    { id: "ut-f08", lessonId: "currency-and-languages", page: 69, front: "What is the UK's currency, and how many pence are in a pound?", back: "The pound sterling (£). 100 pence." },
    { id: "ut-f09", lessonId: "currency-and-languages", page: 69, front: "List the UK coins.", back: "1p, 2p, 5p, 10p, 20p, 50p, £1 and £2." },
    { id: "ut-f10", lessonId: "currency-and-languages", page: 69, front: "List the UK banknotes.", back: "£5, £10, £20 and £50." },
    { id: "ut-f11", lessonId: "currency-and-languages", page: 69, front: "Are Scottish and Northern Irish banknotes valid in England?", back: "Yes, they are valid everywhere in the UK, but shops and businesses do not have to accept them." },
    { id: "ut-f12", lessonId: "currency-and-languages", page: 69, front: "Which languages other than English are spoken in Wales, Scotland and Northern Ireland?", back: "Wales: Welsh. Scotland: Gaelic (parts of the Highlands and Islands). Northern Ireland: Irish Gaelic." },
    { id: "ut-f13", lessonId: "population", page: 69, front: "What was the UK population in 1600, 1801 and 1901?", back: "Just over 4 million; 8 million; 40 million." },
    { id: "ut-f14", lessonId: "population", page: 69, front: "What was the UK population in 1951, 1998, 2005 and 2010?", back: "50 million; 57 million; just under 60 million; just over 62 million." },
    { id: "ut-f15", lessonId: "population", page: 69, front: "What two factors have contributed to recent population growth?", back: "Migration into the UK and longer life expectancy." },
    { id: "ut-f16", lessonId: "population", page: 69, front: "How is the population shared between the four nations?", back: "England about 84%, Scotland just over 8%, Wales around 5%, Northern Ireland less than 3%." },
    { id: "ut-f17", lessonId: "population", page: 69, front: "Why is the UK population ageing, and what does it affect?", back: "Improved living standards and better health care. It affects the cost of pensions and health care; there are a record number of people aged 85+." },
    { id: "ut-f18", lessonId: "population", page: 70, front: "What is the most common ethnic description chosen in UK surveys?", back: "White (including European, Australian, Canadian, New Zealand and American descent). Other significant groups: Asian, black and mixed descent." },
    { id: "ut-f19", lessonId: "equal-society", page: 70, front: "On what grounds is it illegal to discriminate against men and women?", back: "Their gender, or because they are, or are not, married." },
    { id: "ut-f20", lessonId: "equal-society", page: 70, front: "Which four things do men and women have equal rights to do?", back: "Work, own property, marry and divorce." },
    { id: "ut-f21", lessonId: "equal-society", page: 70, front: "What share of the workforce do women make up?", back: "About half." },
    { id: "ut-f22", lessonId: "equal-society", page: 70, front: "Who studies at university in greater numbers, men or women?", back: "Women. On average girls also leave school with better qualifications than boys." },
    { id: "ut-f23", lessonId: "equal-society", page: 71, front: "Is it still expected that women stay at home and do not work?", back: "No. Women often continue to work after having children, and in many families both partners work and share childcare and chores." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // nations-and-cities
    { id: "ut-q01", lessonId: "nations-and-cities", page: 68, type: "single", prompt: "What is the approximate distance from John O'Groats to Land's End?", options: ["About 470 miles", "About 670 miles", "About 870 miles", "About 1,070 miles"], answer: [2], explanation: "It is about 870 miles (approximately 1,400 kilometres), the longest distance on the mainland." },
    { id: "ut-q02", lessonId: "nations-and-cities", page: 68, type: "single", prompt: "Where is John O'Groats?", options: ["The south-west corner of England", "The north coast of Scotland", "The west coast of Wales", "The north coast of Northern Ireland"], answer: [1], explanation: "John O'Groats is on the north coast of Scotland; Land's End is in the south-west corner of England." },
    { id: "ut-q03", lessonId: "nations-and-cities", page: 69, type: "single", prompt: "What is the capital city of Wales?", options: ["Swansea", "Newport", "Cardiff", "Bristol"], answer: [2], explanation: "Cardiff is the capital of Wales. Swansea and Newport are other Welsh cities; Bristol is in England." },
    { id: "ut-q04", lessonId: "nations-and-cities", page: 68, type: "single", prompt: "What is the capital city of Scotland?", options: ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"], answer: [1], explanation: "Edinburgh is the capital of Scotland. Glasgow is Scotland's other large city but not its capital." },
    { id: "ut-q05", lessonId: "nations-and-cities", page: 68, type: "single", prompt: "Approximately what share of the UK population has a parent or grandparent born outside the UK?", options: ["Nearly 5%", "Nearly 10%", "Nearly 25%", "Nearly 50%"], answer: [1], explanation: "Because of post-war immigration, nearly 10% of the population has a parent or grandparent born outside the UK." },
    { id: "ut-q06", lessonId: "nations-and-cities", page: 68, type: "multi", prompt: "Which TWO of these are cities in Wales?", options: ["Swansea", "Plymouth", "Newport", "Dundee"], answer: [0, 2], explanation: "The handbook's Welsh cities are Cardiff, Swansea and Newport. Plymouth is in England; Dundee is in Scotland." },
    { id: "ut-q07", lessonId: "nations-and-cities", page: 69, type: "truefalse", prompt: "Belfast is the capital city of Northern Ireland.", options: ["True", "False"], answer: [0], explanation: "True. Belfast is the capital of Northern Ireland." },
    { id: "ut-q07b", lessonId: "nations-and-cities", page: 68, type: "single", prompt: "In which part of Europe is the UK located?", options: ["The north east", "The north west", "The south west", "Central Europe"], answer: [1], explanation: "The UK is located in the north west of Europe." },
    // currency-and-languages
    { id: "ut-q08", lessonId: "currency-and-languages", page: 69, type: "single", prompt: "How many pence are there in a pound?", options: ["10", "12", "100", "240"], answer: [2], explanation: "There are 100 pence in a pound sterling." },
    { id: "ut-q09", lessonId: "currency-and-languages", page: 69, type: "single", prompt: "Which of these is NOT a UK banknote?", options: ["£5", "£10", "£25", "£50"], answer: [2], explanation: "The notes are £5, £10, £20 and £50. There is no £25 note." },
    { id: "ut-q10", lessonId: "currency-and-languages", page: 69, type: "truefalse", prompt: "Shops in the UK must accept Scottish and Northern Irish banknotes.", options: ["True", "False"], answer: [1], explanation: "False. These notes are valid everywhere in the UK, but shops and businesses do not have to accept them." },
    { id: "ut-q11", lessonId: "currency-and-languages", page: 69, type: "multi", prompt: "Which TWO are UK coins?", options: ["£2", "25p", "£5", "20p"], answer: [0, 3], explanation: "The coins are 1p, 2p, 5p, 10p, 20p, 50p, £1 and £2. There is no 25p coin, and £5 is a note." },
    { id: "ut-q12", lessonId: "currency-and-languages", page: 69, type: "single", prompt: "In which part of the UK is Gaelic spoken in some parts of the Highlands and Islands?", options: ["Wales", "Scotland", "Northern Ireland", "Cornwall"], answer: [1], explanation: "Gaelic is spoken in parts of the Scottish Highlands and Islands. Irish Gaelic is spoken by some people in Northern Ireland." },
    { id: "ut-q13", lessonId: "currency-and-languages", page: 69, type: "single", prompt: "Which language is spoken by many people in Wales and taught in schools and universities?", options: ["Gaelic", "Irish Gaelic", "Welsh", "Scots"], answer: [2], explanation: "Welsh, a completely different language from English, is spoken by many people in Wales." },
    { id: "ut-q13b", lessonId: "currency-and-languages", page: 69, type: "single", prompt: "Which language do some people in Northern Ireland speak?", options: ["Welsh", "Irish Gaelic", "Cornish", "Manx"], answer: [1], explanation: "In Northern Ireland some people speak Irish Gaelic." },
    // population
    { id: "ut-q14", lessonId: "population", page: 69, type: "single", prompt: "Approximately what percentage of the UK population lives in England?", options: ["54%", "70%", "84%", "94%"], answer: [2], explanation: "England more or less consistently makes up 84% of the UK population." },
    { id: "ut-q15", lessonId: "population", page: 69, type: "single", prompt: "What share of the UK population lives in Wales?", options: ["Less than 3%", "Around 5%", "Just over 8%", "Around 12%"], answer: [1], explanation: "Wales has around 5%, Scotland just over 8% and Northern Ireland less than 3%." },
    { id: "ut-q16", lessonId: "population", page: 69, type: "single", prompt: "What was the UK population in 2010, according to the handbook?", options: ["Just over 50 million", "57 million", "Just under 60 million", "Just over 62 million"], answer: [3], explanation: "The population was just over 62 million in 2010 (57 million in 1998, just under 60 million in 2005)." },
    { id: "ut-q17", lessonId: "population", page: 69, type: "single", prompt: "What was the UK population in 1901?", options: ["8 million", "20 million", "40 million", "50 million"], answer: [2], explanation: "40 million in 1901: up from 20 million in 1851, and rising to 50 million by 1951." },
    { id: "ut-q18", lessonId: "population", page: 69, type: "multi", prompt: "Which TWO factors have played a part in recent population growth?", options: ["Migration into the UK", "A rising birth rate in Scotland", "Longer life expectancy", "Fewer people emigrating to Australia"], answer: [0, 2], explanation: "The handbook says migration into the UK and longer life expectancy have played a part." },
    { id: "ut-q19", lessonId: "population", page: 69, type: "truefalse", prompt: "There is now a record number of people in the UK aged 85 and over.", options: ["True", "False"], answer: [0], explanation: "True. This affects the cost of pensions and health care." },
    { id: "ut-q19b", lessonId: "population", page: 69, type: "single", prompt: "Which part of the UK has the smallest share of the population?", options: ["Wales", "Scotland", "Northern Ireland", "England"], answer: [2], explanation: "Northern Ireland has less than 3% of the UK population." },
    // equal-society
    { id: "ut-q20", lessonId: "equal-society", page: 70, type: "single", prompt: "About what share of the UK workforce is made up of women?", options: ["About a quarter", "About a third", "About half", "About two-thirds"], answer: [2], explanation: "Women in Britain today make up about half of the workforce." },
    { id: "ut-q21", lessonId: "equal-society", page: 70, type: "truefalse", prompt: "In the UK, it is legal to discriminate against a woman because she is married.", options: ["True", "False"], answer: [1], explanation: "False. It is a legal requirement that men and women are not discriminated against because of their gender or because they are, or are not, married." },
    { id: "ut-q22", lessonId: "equal-society", page: 70, type: "single", prompt: "According to the handbook, who on average leaves school with better qualifications?", options: ["Boys", "Girls", "There is no difference", "It varies by nation"], answer: [1], explanation: "On average girls leave school with better qualifications than boys, and more women than men study at university." },
    { id: "ut-q23", lessonId: "equal-society", page: 70, type: "multi", prompt: "Which TWO are rights the handbook says men and women hold equally?", options: ["To own property", "To vote from age 16", "To divorce", "To a free university place"], answer: [0, 2], explanation: "Men and women have equal rights to work, own property, marry and divorce." },
    { id: "ut-q24", lessonId: "equal-society", page: 71, type: "truefalse", prompt: "In many UK families today, both partners work and share childcare and household chores.", options: ["True", "False"], answer: [0], explanation: "True. It is no longer expected that women stay at home, and many women continue to work after having children." },
    { id: "ut-q25", lessonId: "equal-society", page: 70, type: "truefalse", prompt: "If they are married, both parents are equally responsible for their children.", options: ["True", "False"], answer: [0], explanation: "True. The handbook states this explicitly." },
  ],

  flags: [
    { page: 69, text: "The population table's final row, \"2022: estimated 67.6 million\", was added by the PDF's publisher and is not in the official 3rd edition, whose table ends with 2010 (just over 62 million)." },
    { page: 69, text: "The handbook repeats the sentence about Gaelic and Irish Gaelic twice on p. 69 (a layout slip in the PDF). No content difference." },
    { page: 70, text: "Workforce, education and population-share figures describe the situation around 2013 and may have changed." },
  ],
};
