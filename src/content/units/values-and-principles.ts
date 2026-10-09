import type { Unit } from "../types";

/**
 * Unit 1.1 — Values, principles and the test. Handbook (Britizen PDF) §§ 1.1–1.4, pp. 4–7.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const valuesAndPrinciples: Unit = {
  id: "values-and-principles",
  number: "1.1",
  title: "Values, principles and the test",
  handbook: {
    chapter: 1,
    chapterTitle: "The values and principles of the UK",
    section: "1.1–1.4",
    pages: [4, 7],
  },
  status: "available",
  dek: "The five fundamental principles, responsibilities and freedoms, the citizenship pledge and how the test works.",
  heroImageId: "values-and-principles-westminster",
  overview: [
    "The handbook opens by explaining why the test exists: becoming a permanent resident or citizen is an important commitment, and passing the Life in the UK test is part of showing you are ready for it. It also sets out the two requirements (English and knowledge of life in the UK) and how they were tested when the book was written.",
    "At the heart of the chapter are three short lists that are very often tested: the five fundamental principles of British life, the five responsibilities expected of residents, and the five freedoms the UK offers in return. The chapter ends with the practical details of the test itself: 24 questions, taken in English, Welsh or Scottish Gaelic, at about 60 approved centres.",
  ],
  objectives: [
    "State the two requirements for permanent residence or citizenship and how they can be tested.",
    "List the five fundamental principles of British life.",
    "Recall the main promises of the citizenship pledge.",
    "List the five responsibilities of residents and the five freedoms the UK offers in return.",
    "Describe the format of the Life in the UK test and what you must bring to it.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "becoming-a-resident",
      title: "Becoming a permanent resident",
      dek: "Why the test exists, the two requirements, and the two routes to meeting them.",
      pages: [4, 5],
      minutes: 5,
      heroImageId: "values-and-principles-westminster",
      recall: {
        question: "Before you read: what two things must you be able to show to become a permanent resident or citizen?",
        answer: "That you can speak and read English, and that you have a good understanding of life in the UK.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Why this chapter matters",
          pages: [4],
          paragraphs: [
            "This chapter covers the fundamental rights and responsibilities that apply to everyone who lives in the UK, whether or not they are a citizen. It also explains the format of the test and how to become a permanent resident.",
            "The handbook warns that questions in the real test come from the whole book, including this introductory chapter.",
          ],
        },
        {
          type: "prose",
          heading: "A commitment, not just a form",
          pages: [4],
          paragraphs: [
            "The handbook describes Britain as a modern, thriving society with a long and illustrious history, whose people have been at the heart of the world's political, scientific, industrial and cultural development. It says the UK is proud of welcoming new migrants who add to the diversity and dynamism of national life.",
            "Applying for permanent residence or citizenship is an important decision and commitment. You agree to accept the responsibilities that come with it and to respect the laws, values and traditions of the UK. Good citizens are an asset to the UK.",
            "Passing the test is part of showing that you are ready to become a permanent migrant. The handbook is meant to help you integrate, play a full role in your local community and gain a broad general knowledge of the culture, laws and history of the UK.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "values-and-principles-westminster",
            kind: "photograph",
            caption: "The Palace of Westminster, home of the UK Parliament, and Elizabeth Tower (Big Ben) at night, seen across the River Thames.",
          },
        },
        {
          type: "prose",
          heading: "The two requirements",
          pages: [5],
          paragraphs: [
            "To apply to become a permanent resident or citizen you need to speak and read English, and have a good understanding of life in the UK.",
            "As of January 2013 there were two ways to be tested on these requirements.",
          ],
        },
        {
          type: "cards",
          heading: "Two routes (as of January 2013)",
          cards: [
            {
              id: "route-test",
              title: "The Life in the UK test",
              meta: "For people with English at ESOL Entry Level 3 or above",
              summary: "Its questions need English at ESOL Entry Level 3, so no separate English test is needed.",
              detail: [
                "The questions are written so that they require an understanding of English at English for Speakers of Other Languages (ESOL) Entry Level 3. That is why there is no need to take a separate English language test.",
                "People in the UK on work visas, including Tier 1 and Tier 2 of the points-based system, normally must pass the Life in the UK test to become permanent residents.",
              ],
              page: 5,
            },
            {
              id: "route-esol",
              title: "An ESOL course in English with Citizenship",
              meta: "For people whose English is below ESOL Entry Level 3",
              summary: "A course that improves your English and teaches about life in the UK, ending with a test.",
              detail: [
                "You need to take this course if your English is below ESOL Entry Level 3.",
                "It helps you improve your English and learn more about life in the UK. At the end of the course you take a test.",
              ],
              page: 5,
            },
          ],
        },
        {
          type: "prose",
          heading: "After you pass",
          pages: [5],
          paragraphs: [
            "Once you have passed one of these tests you can apply for permanent residence or British citizenship. The form and evidence you need depend on your personal circumstances, and there is a fee, which differs between types of application. The handbook says the forms and fees were on the UK Border Agency website.",
          ],
        },
        {
          type: "sequence",
          heading: "The rules from October 2013",
          page: 5,
          steps: [
            { label: "Pass the Life in the UK test", detail: "Required for settlement or permanent residence." },
            { label: "AND show your English", detail: "Acceptable evidence of speaking and listening skills in English at B1 of the Common European Framework of Reference, which is equivalent to ESOL Entry Level 3." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Page 5 describes the arrangements of 2013 (\"currently (as of January 2013)\"). The UK Border Agency no longer exists and its website has been replaced by GOV.UK. Learn what the handbook says for the test, but check the current requirements and fees on GOV.UK before applying.",
              verify: "Current settlement and citizenship requirements on GOV.UK.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Test questions are based on the whole handbook, including the introductory chapter.", page: 4 },
        { text: "To become a permanent resident or citizen you must speak and read English and have a good understanding of life in the UK.", page: 5 },
        { text: "The test's questions require English at ESOL Entry Level 3, so no separate English test is needed.", page: 5 },
        { text: "If your English is below ESOL Entry Level 3 you take an ESOL course in English with Citizenship, which ends with a test.", page: 5 },
        { text: "From October 2013: pass the test AND show English speaking and listening at B1 (CEFR), equivalent to ESOL Entry Level 3.", page: 5 },
      ],
      mnemonics: [
        {
          title: "Two requirements",
          device: "\"Speak it and know it\": English, and life in the UK.",
          explanation: "The handbook's two requirements: speak and read English, and have a good understanding of life in the UK.",
        },
        {
          title: "B1 = Entry 3",
          device: "B-one equals Entry-three.",
          explanation: "B1 of the Common European Framework is the same level as ESOL Entry Level 3, the level the test questions are written at.",
        },
      ],
      checkQuestionIds: ["vp-q01", "vp-q02", "vp-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "principles-and-pledge",
      title: "Principles, pledge, responsibilities and freedoms",
      dek: "Five principles, the citizenship pledge, five responsibilities and five freedoms.",
      pages: [6],
      minutes: 7,
      recall: {
        question: "Before you read: can you name the five fundamental principles of British life?",
        answer:
          "Democracy; the rule of law; individual liberty; tolerance of those with different faiths and beliefs; participation in community life.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Where British values come from",
          pages: [6],
          paragraphs: [
            "British society is founded on fundamental values and principles that everyone living in the UK should respect and support. They are reflected in the responsibilities, rights and privileges of being a British citizen or permanent resident.",
            "These values are based on history and traditions, and are protected by law, customs and expectations. There is no place in British society for extremism or intolerance.",
          ],
        },
        {
          type: "sequence",
          heading: "The five fundamental principles of British life",
          page: 6,
          steps: [
            { label: "Democracy", detail: "People take part in choosing their government." },
            { label: "The rule of law", detail: "Everyone must respect and obey the law." },
            { label: "Individual liberty", detail: "Personal freedom for each person." },
            { label: "Tolerance", detail: "Tolerance of those with different faiths and beliefs." },
            { label: "Participation", detail: "Participation in community life." },
          ],
        },
        {
          type: "prose",
          heading: "The citizenship pledge",
          pages: [6],
          paragraphs: [
            "As part of the citizenship ceremony, new citizens pledge to uphold these values. The pledge is:",
          ],
        },
        {
          type: "quote",
          text: "I will give my loyalty to the United Kingdom and respect its rights and freedoms. I will uphold its democratic values. I will observe its laws faithfully and fulfil my duties and obligations as a British citizen.",
          attribution: "The citizenship pledge, as printed in the handbook (p. 6)",
        },
        {
          type: "prose",
          heading: "Responsibilities and freedoms",
          pages: [6],
          paragraphs: [
            "From the fundamental principles follow responsibilities and freedoms that are shared by everyone living in the UK, and that all residents are expected to respect.",
          ],
        },
        {
          type: "cards",
          heading: "What you give, and what you get",
          cards: [
            {
              id: "five-responsibilities",
              title: "Your responsibilities",
              meta: "If you wish to be a permanent resident or citizen, you should:",
              summary: "Obey the law, respect others' rights, be fair, look after your family and your area.",
              detail: [
                "Respect and obey the law.",
                "Respect the rights of others, including their right to their own opinions.",
                "Treat others with fairness.",
                "Look after yourself and your family.",
                "Look after the area in which you live and the environment.",
              ],
              page: 6,
            },
            {
              id: "five-freedoms",
              title: "The UK's freedoms",
              meta: "In return, the UK offers:",
              summary: "Freedom of belief, of speech and from unfair discrimination; a fair trial; a vote.",
              detail: [
                "Freedom of belief and religion.",
                "Freedom of speech.",
                "Freedom from unfair discrimination.",
                "A right to a fair trial.",
                "A right to join in the election of a government.",
              ],
              page: 6,
            },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            {
              text: "Adults becoming citizens also swear an oath (or make an affirmation) of allegiance to the monarch at the ceremony, as well as making the pledge. The handbook prints only the pledge.",
              verify: "Wording of the current oath and pledge on GOV.UK.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "British values are based on history and traditions and protected by law, customs and expectations.", page: 6 },
        { text: "There is no place in British society for extremism or intolerance.", page: 6 },
        { text: "The five fundamental principles: democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, participation in community life.", page: 6 },
        { text: "New citizens make a pledge at the citizenship ceremony to uphold these values.", page: 6 },
        { text: "Responsibilities: obey the law, respect others' rights and opinions, treat others fairly, look after yourself and your family, look after your area and the environment.", page: 6 },
        { text: "Freedoms: belief and religion, speech, freedom from unfair discrimination, a fair trial, joining in the election of a government.", page: 6 },
      ],
      mnemonics: [
        {
          title: "The five principles",
          device: "\"Do Rules Let Them Prosper?\": Democracy, Rule of law, Liberty, Tolerance, Participation.",
          explanation: "One letter for each principle, in the handbook's order.",
        },
        {
          title: "The pledge in three verbs",
          device: "Loyal, Uphold, Observe.",
          explanation: "Loyalty to the UK (and respect for its rights and freedoms), uphold its democratic values, observe its laws (and fulfil your duties).",
        },
        {
          title: "Give five, get five",
          device: "Five responsibilities in, five freedoms out.",
          explanation: "A fair trial and a vote are things you receive (freedoms). Obeying the law and looking after the environment are things you do (responsibilities).",
        },
      ],
      checkQuestionIds: ["vp-q07", "vp-q09", "vp-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "taking-the-test",
      title: "Taking the Life in the UK test",
      dek: "24 questions, three languages, approved centres only, and what to bring.",
      pages: [7],
      minutes: 4,
      recall: {
        question: "Before you read: how many questions are there in the Life in the UK test?",
        answer: "24. They are based on all parts of the handbook and differ for each person at a test session.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The test",
          pages: [7],
          paragraphs: [
            "The test consists of 24 questions about important aspects of life in the UK. Questions are based on ALL parts of the handbook, and the 24 questions are different for each person taking the test at that session.",
            "The test is usually taken in English, but special arrangements can be made to take it in Welsh or Scottish Gaelic.",
          ],
        },
        {
          type: "prose",
          heading: "Where and how to book",
          pages: [7],
          paragraphs: [
            "You can only take the test at a registered and approved Life in the UK test centre. The handbook says there are about 60 test centres around the UK, and that tests can only be booked online.",
            "Do not take the test anywhere else: only certificates from registered test centres are accepted. If you live on the Isle of Man or in the Channel Islands, there are different arrangements for taking the test.",
            "When booking, read the instructions carefully and enter your details correctly. You must take some identification and proof of your address with you. Without them you will not be able to take the test.",
          ],
        },
        {
          type: "prose",
          heading: "How to use the handbook",
          pages: [7],
          paragraphs: [
            "Everything you need to pass is in the handbook, and the questions are based on the whole book, including the introduction. Anyone who can read English at ESOL Entry Level 3 or above should have no difficulty with the language.",
            "The glossary at the back contains key words and phrases. The 'Check that you understand' boxes are for guidance only: knowing just those points will not be enough to pass.",
          ],
        },
        {
          type: "cards",
          heading: "Where to find more information (as listed in 2013)",
          cards: [
            {
              id: "info-ukba",
              title: "UK Border Agency website",
              summary: "The application process and the forms to complete.",
              detail: ["For information about the application process and the forms you need to complete."],
              page: 7,
            },
            {
              id: "info-test-site",
              title: "Life in the UK test website",
              summary: "The test and how to book a place.",
              detail: ["For information about the test and how to book a place to take one."],
              page: 7,
            },
            {
              id: "info-govuk",
              title: "GOV.UK",
              summary: "ESOL courses and how to find one near you.",
              detail: ["For information about ESOL courses and how to find one in your area."],
              page: 7,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The number of test centres (about 60), the websites and the UK Border Agency on page 7 date from 2013. Book only through the official GOV.UK Life in the UK test service.",
              verify: "Current booking route, centres and ID requirements on GOV.UK.",
            },
            {
              text: "The handbook gives the number of questions (24) but not the time limit or pass mark. Current official guidance is 45 minutes and a pass mark of 75% (18 out of 24).",
              verify: "Time limit and pass mark on GOV.UK.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "The test has 24 questions, based on all parts of the handbook; they differ for each person at a session.", page: 7 },
        { text: "The test is usually in English; special arrangements can be made for Welsh or Scottish Gaelic.", page: 7 },
        { text: "Tests can only be taken at registered and approved centres; the handbook says there are about 60.", page: 7 },
        { text: "Tests can only be booked online.", page: 7 },
        { text: "You must take identification and proof of address, or you cannot take the test.", page: 7 },
        { text: "The Isle of Man and the Channel Islands have different arrangements.", page: 7 },
        { text: "'Check that you understand' boxes are for guidance only; knowing them alone is not enough.", page: 7 },
      ],
      mnemonics: [
        {
          title: "24 questions, 3 languages",
          device: "\"Two dozen questions, three tongues\": English, Welsh, Scottish Gaelic.",
          explanation: "The test is usually in English; special arrangements allow Welsh or Scottish Gaelic. Irish is not one of the options.",
        },
        {
          title: "Bring two things",
          device: "\"Who and where\": ID shows who you are, proof of address shows where you live.",
          explanation: "Without identification and proof of address you will not be able to take the test.",
        },
      ],
      checkQuestionIds: ["vp-q14", "vp-q15", "vp-q18"],
    },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Test questions come from the whole handbook, including this introductory chapter.", page: 4 },
    { text: "Requirements: speak and read English, and have a good understanding of life in the UK.", page: 5 },
    { text: "The test is written at ESOL Entry Level 3; people below that level take an ESOL course in English with Citizenship.", page: 5 },
    { text: "From October 2013: pass the test and show English speaking and listening at B1 (CEFR) = ESOL Entry Level 3.", page: 5 },
    { text: "Five principles: democracy, the rule of law, individual liberty, tolerance of different faiths and beliefs, participation in community life.", page: 6 },
    { text: "There is no place in British society for extremism or intolerance.", page: 6 },
    { text: "New citizens pledge loyalty to the UK, to uphold its democratic values and to observe its laws faithfully.", page: 6 },
    { text: "Responsibilities: obey the law, respect others' rights, be fair, look after yourself and your family, look after your area and the environment.", page: 6 },
    { text: "Freedoms: belief and religion, speech, freedom from unfair discrimination, a fair trial, a vote in electing a government.", page: 6 },
    { text: "The test: 24 questions, usually in English (Welsh or Scottish Gaelic by arrangement), at about 60 approved centres, booked online.", page: 7 },
    { text: "Bring identification and proof of address, or you cannot sit the test.", page: 7 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "vp-f01", lessonId: "becoming-a-resident", page: 5, front: "What are the two requirements for becoming a permanent resident or citizen?", back: "Speak and read English, and have a good understanding of life in the UK." },
    { id: "vp-f02", lessonId: "becoming-a-resident", page: 5, front: "At what English level are the test questions written?", back: "ESOL (English for Speakers of Other Languages) Entry Level 3." },
    { id: "vp-f03", lessonId: "becoming-a-resident", page: 5, front: "What must you take if your English is below ESOL Entry Level 3?", back: "An ESOL course in English with Citizenship, which ends with a test." },
    { id: "vp-f04", lessonId: "becoming-a-resident", page: 5, front: "Which visa holders normally must pass the Life in the UK test to become permanent residents?", back: "People on work visas, including Tier 1 and Tier 2 of the points-based system." },
    { id: "vp-f05", lessonId: "becoming-a-resident", page: 5, front: "From October 2013, what two things are needed for settlement?", back: "Pass the Life in the UK test AND show English speaking and listening at B1 of the Common European Framework of Reference (= ESOL Entry Level 3)." },
    { id: "vp-f06", lessonId: "becoming-a-resident", page: 4, front: "Which parts of the handbook can test questions come from?", back: "The whole book, including the introductory chapter." },
    { id: "vp-f07", lessonId: "principles-and-pledge", page: 6, front: "Name the five fundamental principles of British life.", back: "Democracy; the rule of law; individual liberty; tolerance of those with different faiths and beliefs; participation in community life." },
    { id: "vp-f08", lessonId: "principles-and-pledge", page: 6, front: "What are British values based on, and what protects them?", back: "Based on history and traditions; protected by law, customs and expectations." },
    { id: "vp-f09", lessonId: "principles-and-pledge", page: 6, front: "When do new citizens make the citizenship pledge?", back: "As part of the citizenship ceremony." },
    { id: "vp-f10", lessonId: "principles-and-pledge", page: 6, front: "What do new citizens promise in the pledge?", back: "Loyalty to the UK and respect for its rights and freedoms; to uphold its democratic values; to observe its laws faithfully and fulfil their duties and obligations as a British citizen." },
    { id: "vp-f11", lessonId: "principles-and-pledge", page: 6, front: "List the five responsibilities of anyone who wishes to be a permanent resident or citizen.", back: "Respect and obey the law; respect the rights of others, including their opinions; treat others with fairness; look after yourself and your family; look after your area and the environment." },
    { id: "vp-f12", lessonId: "principles-and-pledge", page: 6, front: "List the five freedoms the UK offers in return.", back: "Freedom of belief and religion; freedom of speech; freedom from unfair discrimination; a right to a fair trial; a right to join in the election of a government." },
    { id: "vp-f13", lessonId: "taking-the-test", page: 7, front: "How many questions are in the Life in the UK test?", back: "24." },
    { id: "vp-f14", lessonId: "taking-the-test", page: 7, front: "In which languages can the test be taken?", back: "Usually English; special arrangements can be made for Welsh or Scottish Gaelic." },
    { id: "vp-f15", lessonId: "taking-the-test", page: 7, front: "How many test centres does the handbook say there are, and how do you book?", back: "About 60 registered and approved centres; booking is online only." },
    { id: "vp-f16", lessonId: "taking-the-test", page: 7, front: "What must you bring to the test?", back: "Identification and proof of your address. Without them you cannot take the test." },
    { id: "vp-f17", lessonId: "taking-the-test", page: 7, front: "Where do different test arrangements apply?", back: "On the Isle of Man and in the Channel Islands." },
    { id: "vp-f18", lessonId: "taking-the-test", page: 7, front: "Is knowing the 'Check that you understand' boxes enough to pass?", back: "No. They are for guidance only; you need to understand everything in the book." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // becoming-a-resident
    { id: "vp-q01", lessonId: "becoming-a-resident", page: 5, type: "multi", prompt: "Which TWO requirements must you meet to become a permanent resident or citizen of the UK?", options: ["Speak and read English", "Own property in the UK", "Have a good understanding of life in the UK", "Have lived in London"], answer: [0, 2], explanation: "The two requirements are to speak and read English and to have a good understanding of life in the UK." },
    { id: "vp-q02", lessonId: "becoming-a-resident", page: 5, type: "single", prompt: "At what level of English are the Life in the UK test questions written?", options: ["ESOL Entry Level 1", "ESOL Entry Level 3", "GCSE English", "A-level English"], answer: [1], explanation: "The questions require English at ESOL Entry Level 3, so no separate English language test is needed." },
    { id: "vp-q03", lessonId: "becoming-a-resident", page: 5, type: "single", prompt: "What should you take if your English is below ESOL Entry Level 3?", options: ["Nothing; you cannot apply", "A university degree in English", "An ESOL course in English with Citizenship", "A driving theory test"], answer: [2], explanation: "The ESOL course in English with Citizenship helps you improve your English and learn about life in the UK, and ends with a test." },
    { id: "vp-q04", lessonId: "becoming-a-resident", page: 5, type: "truefalse", prompt: "People on Tier 1 and Tier 2 work visas normally must pass the Life in the UK test to become permanent residents.", options: ["True", "False"], answer: [0], explanation: "True. The handbook says people on work visas, including Tier 1 and Tier 2 of the points-based system, normally must pass the test." },
    { id: "vp-q05", lessonId: "becoming-a-resident", page: 5, type: "single", prompt: "From October 2013, what level of spoken English is needed for settlement, alongside passing the test?", options: ["A1 of the Common European Framework", "B1 of the Common European Framework", "C2 of the Common European Framework", "No English evidence is needed"], answer: [1], explanation: "You must produce evidence of speaking and listening at B1 of the Common European Framework of Reference, equivalent to ESOL Entry Level 3." },
    { id: "vp-q06", lessonId: "becoming-a-resident", page: 4, type: "truefalse", prompt: "Questions in the Life in the UK test are never taken from the introductory chapter of the handbook.", options: ["True", "False"], answer: [1], explanation: "False. The handbook says questions are based on the whole book, including the introductory chapter." },
    // principles-and-pledge
    { id: "vp-q07", lessonId: "principles-and-pledge", page: 6, type: "multi", prompt: "Which TWO are fundamental principles of British life?", options: ["The rule of law", "Compulsory voting", "Individual liberty", "Membership of a church"], answer: [0, 2], explanation: "The five principles are democracy, the rule of law, individual liberty, tolerance of those with different faiths and beliefs, and participation in community life." },
    { id: "vp-q08", lessonId: "principles-and-pledge", page: 6, type: "single", prompt: "Which of these is NOT one of the fundamental principles of British life?", options: ["Democracy", "Participation in community life", "Tolerance of those with different faiths and beliefs", "Loyalty to a political party"], answer: [3], explanation: "Loyalty to a party is not a principle. The five are democracy, the rule of law, individual liberty, tolerance, and participation in community life." },
    { id: "vp-q09", lessonId: "principles-and-pledge", page: 6, type: "single", prompt: "When do new citizens pledge to uphold the UK's values?", options: ["When they book the Life in the UK test", "As part of the citizenship ceremony", "When they register to vote", "When they get a National Insurance number"], answer: [1], explanation: "New citizens make the pledge as part of the citizenship ceremony." },
    { id: "vp-q10", lessonId: "principles-and-pledge", page: 6, type: "truefalse", prompt: "In the citizenship pledge, new citizens promise to uphold the UK's democratic values.", options: ["True", "False"], answer: [0], explanation: "True. The pledge includes \"I will uphold its democratic values\" and promises to observe its laws faithfully." },
    { id: "vp-q11", lessonId: "principles-and-pledge", page: 6, type: "single", prompt: "According to the handbook, British values are protected by what?", options: ["Law, customs and expectations", "The European Union", "The Church of England alone", "The armed forces"], answer: [0], explanation: "The values are based on history and traditions and are protected by law, customs and expectations." },
    { id: "vp-q12", lessonId: "principles-and-pledge", page: 6, type: "multi", prompt: "Which TWO are responsibilities of anyone who wishes to be a permanent resident or citizen?", options: ["Look after the area in which you live and the environment", "Join a political party", "Treat others with fairness", "Attend a place of worship"], answer: [0, 2], explanation: "The responsibilities are: obey the law, respect others' rights, treat others fairly, look after yourself and your family, and look after your area and the environment." },
    { id: "vp-q13", lessonId: "principles-and-pledge", page: 6, type: "multi", prompt: "Which TWO are freedoms the UK offers to residents in return?", options: ["A right to a fair trial", "A guaranteed job", "Freedom from unfair discrimination", "Free housing"], answer: [0, 2], explanation: "The UK offers freedom of belief and religion, freedom of speech, freedom from unfair discrimination, a right to a fair trial, and a right to join in the election of a government." },
    { id: "vp-q13b", lessonId: "principles-and-pledge", page: 6, type: "truefalse", prompt: "The handbook says there is no place in British society for extremism or intolerance.", options: ["True", "False"], answer: [0], explanation: "True. This is stated directly in the section on values and principles." },
    // taking-the-test
    { id: "vp-q14", lessonId: "taking-the-test", page: 7, type: "single", prompt: "How many questions are there in the Life in the UK test?", options: ["18", "20", "24", "30"], answer: [2], explanation: "The test consists of 24 questions about important aspects of life in the UK." },
    { id: "vp-q15", lessonId: "taking-the-test", page: 7, type: "multi", prompt: "Apart from English, which TWO languages can the test be taken in by special arrangement?", options: ["Welsh", "Irish", "Scottish Gaelic", "Cornish"], answer: [0, 2], explanation: "The test is usually in English, but special arrangements can be made to take it in Welsh or Scottish Gaelic." },
    { id: "vp-q16", lessonId: "taking-the-test", page: 7, type: "single", prompt: "According to the handbook, about how many Life in the UK test centres are there?", options: ["About 10", "About 60", "About 200", "About 600"], answer: [1], explanation: "The handbook says there are about 60 registered and approved test centres around the UK." },
    { id: "vp-q17", lessonId: "taking-the-test", page: 7, type: "truefalse", prompt: "You can book the Life in the UK test by telephone or in person at the test centre.", options: ["True", "False"], answer: [1], explanation: "False. The handbook says you can only book your test online." },
    { id: "vp-q18", lessonId: "taking-the-test", page: 7, type: "multi", prompt: "Which TWO things must you take with you to the test?", options: ["Identification", "Your birth certificate translated into English", "Proof of your address", "A letter from your employer"], answer: [0, 2], explanation: "You need identification and proof of your address. Without them you will not be able to take the test." },
    { id: "vp-q19", lessonId: "taking-the-test", page: 7, type: "single", prompt: "Where are there different arrangements for taking the Life in the UK test?", options: ["Scotland and Wales", "Northern Ireland", "The Isle of Man and the Channel Islands", "The Falkland Islands only"], answer: [2], explanation: "If you live on the Isle of Man or in the Channel Islands, there are different arrangements." },
    { id: "vp-q20", lessonId: "taking-the-test", page: 7, type: "truefalse", prompt: "Knowing the points in the 'Check that you understand' boxes is enough to pass the test.", options: ["True", "False"], answer: [1], explanation: "False. The boxes are for guidance only; you need to understand everything in the book." },
  ],

  flags: [
    { page: 5, text: "The application process, the UK Border Agency and its website, and the \"from October 2013\" changes describe the position in 2013. The UK Border Agency was abolished in 2013 and the information now lives on GOV.UK. Check current requirements and fees before applying." },
    { page: 7, text: "\"About 60 test centres\", the lifeintheuktest.gov.uk and ukba websites, and the role of the UK Border Agency are 2013 details and may have changed. The handbook gives 24 questions but no time limit or pass mark; current official guidance (45 minutes, 18/24) comes from GOV.UK and should be re-checked." },
    { page: 6, text: "Minor typo in the PDF: \"Folowing\" for \"Following\"." },
  ],
};
