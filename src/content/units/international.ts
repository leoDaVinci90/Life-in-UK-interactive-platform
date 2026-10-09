import type { Unit } from "../types";

/**
 * Unit 5.3 — The UK and the world. Handbook (Britizen PDF) § 5.7, pp. 90–92.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks. Brexit material on p. 91 was added by
 * the PDF publisher and is flagged.
 */
export const international: Unit = {
  id: "international",
  number: "5.3",
  title: "The UK and the world",
  handbook: {
    chapter: 5,
    chapterTitle: "The UK government, the law and your role",
    section: "5.7",
    pages: [90, 92],
  },
  status: "available",
  dek: "The Commonwealth, the EU, the Council of Europe, the UN and NATO.",
  heroImageId: "in-commonwealth-flags",
  overview: [
    "The UK belongs to several international organisations, and the test often asks you to tell them apart. The Commonwealth is a voluntary association of mostly former British Empire countries; the European Union began as a six-nation economic community in 1957; the Council of Europe is a separate body that protects human rights.",
    "The UK is also a member of the United Nations, where it is one of five permanent members of the Security Council, and of NATO, a defensive alliance of European and North American countries. This PDF adds the UK's departure from the EU in 2020, which is not in the official 3rd edition and is flagged throughout.",
  ],
  objectives: [
    "Describe the Commonwealth: who leads it, its core values, and how membership works.",
    "Explain how the EU began (the six founding countries and the Treaty of Rome) and when the UK joined.",
    "Distinguish the Council of Europe from the EU and name the European Convention on Human Rights.",
    "Describe the role of the UN and its Security Council, and the UK's place on it.",
    "Explain what NATO members agree to do.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "commonwealth",
      title: "The Commonwealth",
      dek: "A voluntary association of countries, most once part of the British Empire.",
      pages: [90],
      minutes: 5,
      heroImageId: "in-commonwealth-flags",
      recall: {
        question: "Before you read: who is the ceremonial head of the Commonwealth?",
        answer: "The monarch (the handbook says currently King Charles III).",
      },
      blocks: [
        {
          type: "prose",
          heading: "What the Commonwealth is",
          pages: [90],
          paragraphs: [
            "The Commonwealth is an association of countries that support each other and work together towards shared goals in democracy and development. Most member states were once part of the British Empire, although a few countries that were not have also joined.",
            "The monarch is the ceremonial head of the Commonwealth. Membership is voluntary. The Commonwealth has no power over its members, although it can suspend membership.",
            "It is based on the core values of democracy, good government and the rule of law.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "in-commonwealth-flags",
            kind: "photograph",
            caption: "Flags of Commonwealth countries flying in Parliament Square, London, with the Elizabeth Tower behind.",
          },
        },
        {
          type: "cards",
          heading: "Members by region (as listed in the PDF)",
          cards: [
            {
              id: "in-cw-africa",
              title: "Africa",
              meta: "21 members",
              summary: "From Botswana to Zambia.",
              detail: ["Botswana, Cameroon, Gabon, The Gambia, Ghana, Kenya, Kingdom of Eswatini, Lesotho, Malawi, Mauritius, Mozambique, Namibia, Nigeria, Rwanda, Seychelles, Sierra Leone, South Africa, Togo, Uganda, United Republic of Tanzania, Zambia."],
              page: 90,
            },
            {
              id: "in-cw-asia",
              title: "Asia",
              meta: "8 members",
              summary: "Including India, Pakistan and Bangladesh.",
              detail: ["Bangladesh, Brunei Darussalam, India, Malaysia, Maldives, Pakistan, Singapore, Sri Lanka."],
              page: 90,
            },
            {
              id: "in-cw-americas",
              title: "Caribbean and Americas",
              meta: "13 members",
              summary: "Including Canada and Jamaica.",
              detail: ["Antigua and Barbuda, The Bahamas, Barbados, Belize, Canada, Dominica, Grenada, Guyana, Jamaica, Saint Lucia, St Kitts and Nevis, St Vincent and The Grenadines, Trinidad and Tobago."],
              page: 90,
            },
            {
              id: "in-cw-europe",
              title: "Europe",
              meta: "3 members",
              summary: "Cyprus, Malta and the United Kingdom.",
              detail: ["Cyprus, Malta, United Kingdom."],
              page: 90,
            },
            {
              id: "in-cw-pacific",
              title: "Pacific",
              meta: "11 members",
              summary: "Including Australia and New Zealand.",
              detail: ["Australia, Fiji, Kiribati, Nauru, New Zealand, Papua New Guinea, Samoa, Solomon Islands, Tonga, Tuvalu, Vanuatu."],
              page: 90,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The PDF says the Commonwealth 'currently has 54 member states' but then lists 56. The official 3rd edition (2013) gave 54. Gabon and Togo joined in 2022, bringing the total to 56. If a question uses the handbook figure, it will be 54." },
            { text: "The member list and the reference to King Charles III were added by the PDF publisher; the official handbook names the Queen as head of the Commonwealth." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Commonwealth is an association of countries working together for democracy and development.", page: 90 },
        { text: "Most members were once part of the British Empire; a few that were not have also joined.", page: 90 },
        { text: "The monarch is the ceremonial head of the Commonwealth.", page: 90 },
        { text: "Membership is voluntary; the Commonwealth has no power over members but can suspend them.", page: 90 },
        { text: "Core values: democracy, good government and the rule of law.", page: 90 },
        { text: "The handbook text gives 54 member states (the PDF's list has 56).", page: 90 },
      ],
      mnemonics: [
        {
          title: "Commonwealth values",
          device: "\"Democracy, Good government, Rule of law\": the Commonwealth's D-G-R.",
          explanation: "The three core values the Commonwealth is based on.",
        },
        {
          title: "Can suspend, can't command",
          device: "A club, not a boss.",
          explanation: "Membership is voluntary and the Commonwealth has no power over members, but it can suspend them.",
        },
      ],
      checkQuestionIds: ["in-q01", "in-q02", "in-q04"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "european-union",
      title: "The European Union",
      dek: "Six founders, the Treaty of Rome in 1957, the UK joining in 1973 and leaving in 2020.",
      pages: [91, 92],
      minutes: 5,
      heroImageId: "in-eu-flag",
      recall: {
        question: "Before you read: which treaty founded the European Economic Community, and when?",
        answer: "The Treaty of Rome, signed on 25 March 1957 by six western European countries.",
      },
      blocks: [
        {
          type: "prose",
          heading: "How the EU began",
          pages: [91],
          paragraphs: [
            "The European Union (EU), originally called the European Economic Community (EEC), was set up by six western European countries who signed the Treaty of Rome on 25 March 1957.",
            "The UK originally decided not to join this group, but became a member in 1973.",
          ],
        },
        {
          type: "sequence",
          heading: "The six founding countries",
          page: 91,
          steps: [
            { label: "Belgium", detail: "Founding member (Treaty of Rome, 1957)." },
            { label: "France", detail: "Founding member (Treaty of Rome, 1957)." },
            { label: "Germany", detail: "Founding member (Treaty of Rome, 1957)." },
            { label: "Italy", detail: "Founding member (Treaty of Rome, 1957)." },
            { label: "Luxembourg", detail: "Founding member (Treaty of Rome, 1957)." },
            { label: "The Netherlands", detail: "Founding member (Treaty of Rome, 1957)." },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "in-eu-flag",
            kind: "photograph",
            caption: "The flag of the European Union: a circle of twelve gold stars on blue.",
          },
        },
        {
          type: "prose",
          heading: "Brexit (added by the PDF publisher)",
          pages: [91, 92],
          paragraphs: [
            "This PDF adds that the UK left the EU after the Brexit vote, officially at 23:00 GMT on 31 January 2020, leaving 27 member states: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain and Sweden.",
            "It also says that, with effect from 2024, no general principle of EU law is part of UK law.",
          ],
        },
        {
          type: "prose",
          heading: "Types of European law",
          pages: [92],
          paragraphs: [
            "European laws are called directives, regulations or framework decisions.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The official 3rd edition (2013) describes the UK as an EU member, and says EU law is legally binding in the UK. The Brexit section, the list of 27 members and the 2024 statement on EU law were added by the PDF publisher." },
            { text: "The PDF contradicts itself: p. 13 still says the UK is a full member of the EU." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The UK voted to leave the EU in a referendum on 23 June 2016." },
          ],
        },
      ],
      keyFacts: [
        { text: "The EU was originally called the European Economic Community (EEC).", page: 91 },
        { text: "Six founders: Belgium, France, Germany, Italy, Luxembourg and the Netherlands.", page: 91 },
        { text: "The Treaty of Rome was signed on 25 March 1957.", page: 91 },
        { text: "The UK at first decided not to join, then became a member in 1973.", page: 91 },
        { text: "The PDF adds: the UK left the EU at 23:00 GMT on 31 January 2020; there are now 27 member states.", page: 91 },
        { text: "European laws are called directives, regulations or framework decisions.", page: 92 },
      ],
      mnemonics: [
        {
          title: "The founding six",
          device: "\"Big Fat Giraffes Invade Little Netherlands\"",
          explanation: "Belgium, France, Germany, Italy, Luxembourg, the Netherlands: the six countries that signed the Treaty of Rome.",
        },
        {
          title: "57 then 73",
          device: "Rome in '57; the UK arrives in '73 (the digits swapped round).",
          explanation: "The EEC was founded in 1957; the UK joined in 1973.",
        },
        {
          title: "Three kinds of EU law",
          device: "\"Do Run Fast\": Directives, Regulations, Framework decisions.",
          explanation: "The three names the handbook gives for European laws.",
        },
      ],
      checkQuestionIds: ["in-q07", "in-q08", "in-q10"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "council-un-nato",
      title: "The Council of Europe, the UN and NATO",
      dek: "Human rights, world peace and mutual defence.",
      pages: [92],
      minutes: 5,
      heroImageId: "in-un-security-council",
      recall: {
        question: "Before you read: is the Council of Europe part of the EU?",
        answer: "No. It is a separate body responsible for protecting and promoting human rights, and it cannot make laws.",
      },
      blocks: [
        {
          type: "cards",
          heading: "Three more organisations",
          cards: [
            {
              id: "in-council-of-europe-card",
              title: "The Council of Europe",
              meta: "47 members (handbook) · human rights",
              summary: "Separate from the EU; protects and promotes human rights.",
              detail: [
                "The Council of Europe is separate from the EU. It has 47 member countries, including the UK.",
                "It is responsible for the protection and promotion of human rights in those countries.",
                "It has no power to make laws but draws up conventions and charters. The best known is the European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights.",
              ],
              page: 92,
              imageId: "in-council-of-europe",
              context: { text: "Russia was expelled in 2022, leaving 46 members. Its headquarters are in Strasbourg, France." },
            },
            {
              id: "in-un-card",
              title: "The United Nations (UN)",
              meta: "More than 190 members · world peace",
              summary: "Set up after the Second World War to prevent war and promote peace.",
              detail: [
                "An international organisation with more than 190 member countries, including the UK.",
                "Set up after the Second World War; it aims to prevent war and promote international peace and security.",
                "The UN Security Council has 15 members and recommends action when there are international crises and threats to peace.",
                "The UK is one of five permanent members of the Security Council.",
              ],
              page: 92,
              imageId: "in-un-security-council",
            },
            {
              id: "in-nato-card",
              title: "NATO",
              meta: "North Atlantic Treaty Organization",
              summary: "European and North American countries that agree to help each other if attacked.",
              detail: [
                "A group of European and North American countries that have agreed to help each other if they come under attack.",
                "It also aims to maintain peace between all its members. The UK is a member.",
              ],
              page: 92,
              imageId: "in-nato-hq",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "in-council-of-europe",
              kind: "photograph",
              caption: "The Palais de l'Europe in Strasbourg, France, seat of the Council of Europe.",
            },
            {
              imageId: "in-un-security-council",
              kind: "photograph",
              caption: "The UN Security Council chamber in New York, 2023, with its horseshoe table and Per Krohg's mural.",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "in-nato-hq",
            kind: "photograph",
            caption: "NATO headquarters in Brussels, Belgium, seen through its security fence.",
          },
        },
        {
          type: "sequence",
          heading: "Don't mix them up",
          page: 92,
          steps: [
            { label: "Commonwealth", detail: "Mostly former Empire countries; democracy and development; head is the monarch." },
            { label: "European Union", detail: "Began as the EEC (Treaty of Rome, 1957); makes laws (directives, regulations, framework decisions)." },
            { label: "Council of Europe", detail: "Human rights; cannot make laws; European Convention on Human Rights." },
            { label: "United Nations", detail: "190+ countries; prevent war; UK a permanent Security Council member." },
            { label: "NATO", detail: "Europe and North America; help each other if attacked." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The UN was founded in 1945 and NATO in 1949. The other four permanent members of the Security Council are China, France, Russia and the United States." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Council of Europe is separate from the EU and protects and promotes human rights.", page: 92 },
        { text: "The handbook gives the Council of Europe 47 members, including the UK.", page: 92 },
        { text: "The Council of Europe cannot make laws; it draws up conventions and charters, such as the European Convention on Human Rights.", page: 92 },
        { text: "The UN has more than 190 members and was set up after the Second World War to prevent war.", page: 92 },
        { text: "The UN Security Council has 15 members; the UK is one of five permanent members.", page: 92 },
        { text: "NATO members (European and North American countries) agree to help each other if attacked.", page: 92 },
      ],
      mnemonics: [
        {
          title: "Council = Convention",
          device: "Council of Europe → Convention on Human Rights. No laws, just Conventions and Charters.",
          explanation: "The Council of Europe cannot make laws; its best-known product is the European Convention on Human Rights.",
        },
        {
          title: "15 and 5",
          device: "\"Fifteen at the table, five for good.\"",
          explanation: "The Security Council has 15 members; 5, including the UK, are permanent.",
        },
      ],
      checkQuestionIds: ["in-q13", "in-q15", "in-q17"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    {
      id: "t-in-un",
      date: "After the Second World War",
      contextDate: "1945",
      sortYear: 1945,
      title: "The United Nations is set up",
      summary: "The UN is created to prevent war and promote international peace and security.",
      people: [],
      whyItMatters: "The UK is one of five permanent members of its Security Council.",
      remember: ["More than 190 members", "Security Council: 15 members, 5 permanent"],
      imageId: "in-un-security-council",
      page: 92,
      lessonId: "council-un-nato",
    },
    {
      id: "t-in-rome",
      date: "25 March 1957",
      sortYear: 1957,
      title: "The Treaty of Rome",
      summary: "Belgium, France, Germany, Italy, Luxembourg and the Netherlands found the European Economic Community.",
      people: [],
      whyItMatters: "The EEC later became the European Union.",
      remember: ["Six founders", "EEC, now the EU"],
      imageId: "in-eu-flag",
      page: 91,
      lessonId: "european-union",
    },
    {
      id: "t-in-1973",
      date: "1973",
      sortYear: 1973,
      title: "The UK joins",
      summary: "Having first decided not to join, the UK becomes a member of the EEC.",
      people: [],
      whyItMatters: "The UK remained a member for almost 50 years.",
      remember: ["1973"],
      page: 91,
      lessonId: "european-union",
    },
    {
      id: "t-in-brexit",
      date: "31 January 2020",
      sortYear: 2020,
      title: "Brexit",
      summary: "The UK leaves the EU at 23:00 GMT, leaving 27 member states. (Added by the PDF publisher.)",
      people: [],
      whyItMatters: "Not in the official 3rd edition, which describes the UK as an EU member.",
      remember: ["23:00 GMT, 31 January 2020", "27 EU members remain"],
      page: 91,
      lessonId: "european-union",
    },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "The Commonwealth: mostly former British Empire countries working for democracy and development.", page: 90 },
    { text: "The monarch is ceremonial head of the Commonwealth; membership is voluntary.", page: 90 },
    { text: "Commonwealth core values: democracy, good government and the rule of law.", page: 90 },
    { text: "The handbook gives 54 Commonwealth member states.", page: 90 },
    { text: "The EEC (now the EU) was founded by six countries with the Treaty of Rome, 25 March 1957.", page: 91 },
    { text: "The UK joined in 1973 (and, the PDF adds, left on 31 January 2020).", page: 91 },
    { text: "European laws are called directives, regulations or framework decisions.", page: 92 },
    { text: "The Council of Europe (47 members) protects human rights and drew up the European Convention on Human Rights; it cannot make laws.", page: 92 },
    { text: "The UN (190+ members) aims to prevent war; the UK is one of five permanent members of the 15-member Security Council.", page: 92 },
    { text: "NATO: European and North American countries that agree to help each other if attacked.", page: 92 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "in-f01", lessonId: "commonwealth", page: 90, front: "What is the Commonwealth?", back: "An association of countries that support each other and work together towards shared goals in democracy and development. Most were once part of the British Empire." },
    { id: "in-f02", lessonId: "commonwealth", page: 90, front: "Who is the head of the Commonwealth?", back: "The monarch, as its ceremonial head." },
    { id: "in-f03", lessonId: "commonwealth", page: 90, front: "What are the Commonwealth's core values?", back: "Democracy, good government and the rule of law." },
    { id: "in-f04", lessonId: "commonwealth", page: 90, front: "Does the Commonwealth have power over its members?", back: "No. Membership is voluntary, but it can suspend membership." },
    { id: "in-f05", lessonId: "commonwealth", page: 90, front: "How many member states does the handbook text give the Commonwealth?", back: "54 (the PDF's own list has 56)." },
    { id: "in-f06", lessonId: "european-union", page: 91, front: "What was the EU originally called?", back: "The European Economic Community (EEC)." },
    { id: "in-f07", lessonId: "european-union", page: 91, front: "Which six countries founded the EEC?", back: "Belgium, France, Germany, Italy, Luxembourg and the Netherlands." },
    { id: "in-f08", lessonId: "european-union", page: 91, front: "What was signed on 25 March 1957?", back: "The Treaty of Rome, setting up the European Economic Community." },
    { id: "in-f09", lessonId: "european-union", page: 91, front: "When did the UK join the EEC?", back: "1973 (it had originally decided not to join)." },
    { id: "in-f10", lessonId: "european-union", page: 92, front: "What are European laws called?", back: "Directives, regulations or framework decisions." },
    { id: "in-f11", lessonId: "european-union", page: 91, front: "According to the PDF, when did Brexit officially take place?", back: "At 23:00 GMT on 31 January 2020 (publisher-added; not in the official 3rd edition)." },
    { id: "in-f12", lessonId: "council-un-nato", page: 92, front: "What is the Council of Europe responsible for?", back: "The protection and promotion of human rights in its member countries. It is separate from the EU." },
    { id: "in-f13", lessonId: "council-un-nato", page: 92, front: "Can the Council of Europe make laws?", back: "No. It draws up conventions and charters, such as the European Convention on Human Rights." },
    { id: "in-f14", lessonId: "council-un-nato", page: 92, front: "How many members does the Council of Europe have, according to the handbook?", back: "47, including the UK." },
    { id: "in-f15", lessonId: "council-un-nato", page: 92, front: "When was the UN set up, and what does it aim to do?", back: "After the Second World War; to prevent war and promote international peace and security." },
    { id: "in-f16", lessonId: "council-un-nato", page: 92, front: "How many members does the UN Security Council have, and what is the UK's position?", back: "15 members; the UK is one of five permanent members." },
    { id: "in-f17", lessonId: "council-un-nato", page: 92, front: "What is NATO?", back: "A group of European and North American countries that have agreed to help each other if attacked, and to maintain peace between members." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // commonwealth
    { id: "in-q01", lessonId: "commonwealth", page: 90, type: "single", prompt: "Who is the ceremonial head of the Commonwealth?", options: ["The Prime Minister", "The monarch", "The Secretary-General of the UN", "The President of the European Commission"], answer: [1], explanation: "The monarch is the ceremonial head of the Commonwealth." },
    { id: "in-q02", lessonId: "commonwealth", page: 90, type: "multi", prompt: "Which TWO are core values of the Commonwealth?", options: ["Democracy", "A single currency", "The rule of law", "Free movement of people"], answer: [0, 2], explanation: "The Commonwealth is based on democracy, good government and the rule of law." },
    { id: "in-q03", lessonId: "commonwealth", page: 90, type: "truefalse", prompt: "Membership of the Commonwealth is compulsory for former British colonies.", options: ["True", "False"], answer: [1], explanation: "False. Membership is voluntary, and a few countries that were never part of the Empire have joined." },
    { id: "in-q04", lessonId: "commonwealth", page: 90, type: "single", prompt: "According to the handbook text, how many member states does the Commonwealth have?", options: ["27", "47", "54", "193"], answer: [2], explanation: "The handbook says 54 (the PDF's list contains 56). 27 is the EU, 47 the Council of Europe." },
    { id: "in-q05", lessonId: "commonwealth", page: 90, type: "truefalse", prompt: "The Commonwealth has no power over its members but can suspend membership.", options: ["True", "False"], answer: [0], explanation: "True." },
    { id: "in-q06", lessonId: "commonwealth", page: 90, type: "single", prompt: "Most Commonwealth member states were once part of what?", options: ["The Roman Empire", "The British Empire", "The European Economic Community", "NATO"], answer: [1], explanation: "Most members were once part of the British Empire." },
    { id: "in-q06b", lessonId: "commonwealth", page: 90, type: "multi", prompt: "Which TWO countries are listed as Commonwealth members in Europe?", options: ["Malta", "Ireland", "Cyprus", "France"], answer: [0, 2], explanation: "The European members listed are Cyprus, Malta and the United Kingdom." },
    // european-union
    { id: "in-q07", lessonId: "european-union", page: 91, type: "single", prompt: "When was the Treaty of Rome signed?", options: ["25 March 1957", "1 January 1973", "9 May 1950", "31 January 2020"], answer: [0], explanation: "Six countries signed the Treaty of Rome on 25 March 1957, setting up the EEC." },
    { id: "in-q08", lessonId: "european-union", page: 91, type: "single", prompt: "In which year did the UK become a member of the EEC?", options: ["1957", "1969", "1973", "1992"], answer: [2], explanation: "The UK originally decided not to join, but became a member in 1973." },
    { id: "in-q09", lessonId: "european-union", page: 91, type: "multi", prompt: "Which TWO countries were among the six that founded the EEC?", options: ["Luxembourg", "The United Kingdom", "Italy", "Spain"], answer: [0, 2], explanation: "The founders were Belgium, France, Germany, Italy, Luxembourg and the Netherlands." },
    { id: "in-q10", lessonId: "european-union", page: 91, type: "single", prompt: "What was the European Union originally called?", options: ["The Council of Europe", "The European Economic Community", "The European Free Trade Association", "The Commonwealth of Europe"], answer: [1], explanation: "The EU was originally called the European Economic Community (EEC)." },
    { id: "in-q11", lessonId: "european-union", page: 92, type: "single", prompt: "European laws are called directives, regulations or what?", options: ["Conventions", "Framework decisions", "Acts of Parliament", "Charters"], answer: [1], explanation: "European laws are called directives, regulations or framework decisions. Conventions and charters are drawn up by the Council of Europe." },
    { id: "in-q12", lessonId: "european-union", page: 91, type: "truefalse", prompt: "The United Kingdom was one of the six countries that signed the Treaty of Rome.", options: ["True", "False"], answer: [1], explanation: "False. The UK originally decided not to join and became a member in 1973." },
    // council-un-nato
    { id: "in-q13", lessonId: "council-un-nato", page: 92, type: "truefalse", prompt: "The Council of Europe is part of the European Union.", options: ["True", "False"], answer: [1], explanation: "False. The Council of Europe is separate from the EU and is responsible for human rights." },
    { id: "in-q14", lessonId: "council-un-nato", page: 92, type: "single", prompt: "What is the best-known convention drawn up by the Council of Europe?", options: ["The Treaty of Rome", "The European Convention on Human Rights", "The Geneva Convention", "The North Atlantic Treaty"], answer: [1], explanation: "The European Convention on Human Rights and Fundamental Freedoms, usually called the European Convention on Human Rights." },
    { id: "in-q15", lessonId: "council-un-nato", page: 92, type: "single", prompt: "How many members does the UN Security Council have?", options: ["5", "10", "15", "27"], answer: [2], explanation: "The Security Council has 15 members; the UK is one of five permanent members." },
    { id: "in-q16", lessonId: "council-un-nato", page: 92, type: "truefalse", prompt: "The UK is one of five permanent members of the UN Security Council.", options: ["True", "False"], answer: [0], explanation: "True." },
    { id: "in-q17", lessonId: "council-un-nato", page: 92, type: "single", prompt: "What have NATO members agreed to do?", options: ["Use a single currency", "Help each other if they come under attack", "Protect human rights through a convention", "Trade without tariffs"], answer: [1], explanation: "NATO is a group of European and North American countries that have agreed to help each other if attacked." },
    { id: "in-q18", lessonId: "council-un-nato", page: 92, type: "single", prompt: "When was the United Nations set up?", options: ["After the First World War", "After the Second World War", "In 1973", "After the Cold War"], answer: [1], explanation: "The UN was set up after the Second World War to prevent war and promote international peace and security." },
    { id: "in-q19", lessonId: "council-un-nato", page: 92, type: "multi", prompt: "Which TWO statements about the Council of Europe are correct?", options: ["It has no power to make laws", "It has 15 members", "It is responsible for protecting human rights", "It was founded by the Treaty of Rome"], answer: [0, 2], explanation: "It cannot make laws but draws up conventions and charters, and it protects and promotes human rights. The handbook gives it 47 members." },
    { id: "in-q20", lessonId: "council-un-nato", page: 92, type: "single", prompt: "About how many countries are members of the United Nations?", options: ["More than 50", "More than 100", "More than 190", "More than 300"], answer: [2], explanation: "The UN has more than 190 member countries." },
  ],

  flags: [
    { page: 90, text: "The PDF says the Commonwealth has 54 member states but lists 56. The official 3rd edition (2013) says 54; Gabon and Togo joined in 2022, making 56 today." },
    { page: 90, text: "The member list and 'currently King Charles III' were added by the PDF publisher; the official handbook names the Queen as head of the Commonwealth." },
    { page: 91, text: "The Brexit section (UK left at 23:00 GMT on 31 January 2020; 27 member states) is publisher-added and not in the official 3rd edition, which describes the UK as an EU member. It also contradicts p. 13 of the same PDF ('The UK is a full member of the European Union')." },
    { page: 92, text: "'With effect from 2024, no general principle of EU law is part of UK law' is publisher-added. The official 3rd edition says EU law is legally binding in the UK." },
    { page: 92, text: "The Council of Europe now has 46 members (Russia was expelled in 2022); the handbook says 47." },
  ],
};
