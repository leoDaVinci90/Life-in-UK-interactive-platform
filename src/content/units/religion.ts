import type { Unit } from "../types";

/**
 * Unit 4.2 — Religion. Handbook (Britizen PDF) § 4.6, pp. 62–63.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const religion: Unit = {
  id: "religion",
  number: "4.2",
  title: "Religion",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.6",
    pages: [62, 63],
  },
  status: "available",
  dek: "Faiths in the UK, the Church of England, the Church of Scotland and the patron saints.",
  heroImageId: "religion-canterbury-cathedral",
  overview: [
    "The UK is historically a Christian country, but people of many faiths live here, and everyone has the legal right to choose a religion or to have none. The handbook gives the figures from the 2009 Citizenship Survey and names the places of worship of the main faiths.",
    "It then explains the link between Church and state: the Church of England is the established Church in England, with the monarch at its head, while Scotland has its own Presbyterian national Church and Wales and Northern Ireland have no established Church. The unit ends with the four patron saints and their days, a favourite source of test questions.",
  ],
  objectives: [
    "Give the 2009 Citizenship Survey figures for the main religions and for people with no religion.",
    "Match each faith with its place of worship (mosque, temple, synagogue, gurdwara).",
    "Explain the constitutional link between the Church of England and the state, including the roles of the monarch and the Archbishop of Canterbury.",
    "Describe the Church of Scotland, its Moderator, and which parts of the UK have no established Church.",
    "Name the four patron saints, their nations and their days, and say which are official holidays.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "faiths",
      title: "A Christian country of many faiths",
      dek: "What the 2009 Citizenship Survey found, places of worship and the right to choose.",
      pages: [62],
      minutes: 4,
      heroImageId: "religion-neasden-mandir",
      recall: {
        question: "Before you read: roughly what share of people in the 2009 Citizenship Survey said they were Christian?",
        answer: "70%. 21% said they had no religion.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Historically Christian",
          pages: [62],
          paragraphs: [
            "The UK is historically a Christian country. In the 2009 Citizenship Survey, 70% of people described themselves as Christian.",
            "Much smaller shares described themselves as Muslim (4%), Hindu (2%), Sikh (1%), or Jewish or Buddhist (each less than 0.5%). Another 2% followed some other religion, and 21% said they had no religion.",
          ],
        },
        {
          type: "sequence",
          heading: "2009 Citizenship Survey, largest to smallest",
          page: 62,
          steps: [
            { label: "Christian", detail: "70%" },
            { label: "No religion", detail: "21%" },
            { label: "Muslim", detail: "4%" },
            { label: "Hindu", detail: "2%" },
            { label: "Another religion", detail: "2%" },
            { label: "Sikh", detail: "1%" },
            { label: "Jewish, Buddhist", detail: "Each less than 0.5%" },
          ],
        },
        {
          type: "prose",
          heading: "Places of worship and freedom of belief",
          pages: [62],
          paragraphs: [
            "There are religious buildings for other faiths all over the UK: Islamic mosques, Hindu temples, Jewish synagogues, Sikh gurdwaras and Buddhist temples.",
            "Everyone has the legal right to choose their religion, or to choose not to practise a religion.",
          ],
        },
        {
          type: "cards",
          heading: "Faiths and their buildings",
          cards: [
            { id: "re-mosque", title: "Mosque", meta: "Islam", summary: "Place of worship for Muslims (4% in 2009).", detail: ["The handbook lists Islamic mosques among the religious buildings found all over the UK."], page: 62 },
            { id: "re-hindu-temple", title: "Temple", meta: "Hinduism, Buddhism", summary: "Hindus and Buddhists both worship in temples.", detail: ["The handbook names Hindu temples and Buddhist temples."], page: 62, imageId: "religion-neasden-mandir" },
            { id: "re-synagogue", title: "Synagogue", meta: "Judaism", summary: "Place of worship for Jewish people.", detail: ["The handbook names Jewish synagogues."], page: 62 },
            { id: "re-gurdwara", title: "Gurdwara", meta: "Sikhism", summary: "Place of worship for Sikhs (1% in 2009).", detail: ["The handbook names Sikh gurdwaras."], page: 62 },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "religion-neasden-mandir",
            kind: "photograph",
            caption: "BAPS Shri Swaminarayan Mandir, a Hindu temple in Neasden, north-west London.",
            context: "This temple is not named in the handbook. It is shown as an example of a Hindu temple in the UK.",
          },
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "These figures come from the 2009 Citizenship Survey and are what the handbook (and so the test) uses. More recent figures differ: in the 2021 census for England and Wales, under half of people described themselves as Christian and over a third said they had no religion.",
              verify: "Learn the handbook figures for the test; check the latest census if you need current numbers.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "The UK is historically a Christian country: 70% identified as Christian in the 2009 Citizenship Survey.", page: 62 },
        { text: "Muslim 4%, Hindu 2%, Sikh 1%, Jewish and Buddhist each under 0.5%, another religion 2%.", page: 62 },
        { text: "21% of people said they had no religion.", page: 62 },
        { text: "Places of worship: mosques (Islam), temples (Hindu, Buddhist), synagogues (Jewish), gurdwaras (Sikh).", page: 62 },
        { text: "Everyone has the legal right to choose a religion, or not to practise one.", page: 62 },
      ],
      mnemonics: [
        {
          title: "70 – 21 – 4 – 2 – 1",
          device: "Seventy Christians, twenty-one with none, then 4-2-1 counts down: Muslim, Hindu, Sikh.",
          explanation: "The three smaller faiths count down 4, 2, 1 in the order Muslim, Hindu, Sikh. Jewish and Buddhist are each under half a per cent.",
        },
        {
          title: "Gurdwara = Guru's door",
          device: "Sikhs follow the Gurus, so they worship at the Guru's door.",
          explanation: "A simple way to tie the gurdwara to Sikhism; synagogue goes with Judaism, mosque with Islam.",
        },
      ],
      checkQuestionIds: ["re-q01", "re-q03", "re-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "christian-churches",
      title: "The Christian Churches",
      dek: "The Church of England and the state, the Church of Scotland and other denominations.",
      pages: [62],
      minutes: 5,
      heroImageId: "religion-canterbury-cathedral",
      recall: {
        question: "Before you read: who is the head of the Church of England, and who is its spiritual leader?",
        answer: "The monarch is the head of the Church of England. The Archbishop of Canterbury is its spiritual leader.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Church of England",
          pages: [62],
          paragraphs: [
            "In England there is a constitutional link between Church and state. The official Church of the state is the Church of England. In other countries it is called the Anglican Church, and in Scotland and the United States it is called the Episcopal Church.",
            "It is a Protestant Church and has existed since the Reformation in the 1530s.",
            "The monarch is the head of the Church of England, and its spiritual leader is the Archbishop of Canterbury. The monarch has the right to choose the Archbishop and other senior church officials, but usually the choice is made by the Prime Minister and a committee appointed by the Church. Several Church of England bishops sit in the House of Lords.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "religion-canterbury-cathedral",
            kind: "photograph",
            caption: "Canterbury Cathedral, Kent, the cathedral of the Archbishop of Canterbury.",
          },
        },
        {
          type: "prose",
          heading: "The Church of Scotland",
          pages: [62],
          paragraphs: [
            "In Scotland the national Church is the Church of Scotland, a Presbyterian Church. It is governed by ministers and elders.",
            "The chairperson of its General Assembly is the Moderator, who is appointed for one year only and often speaks on behalf of the Church.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "religion-st-giles",
            kind: "photograph",
            caption: "St Giles' Cathedral on the Royal Mile, Edinburgh, a Church of Scotland church.",
            context: "St Giles' is not named in the handbook. It is shown as an example of a Church of Scotland building.",
          },
        },
        {
          type: "cards",
          heading: "Church and state across the UK",
          cards: [
            {
              id: "re-church-england",
              title: "England",
              meta: "Church of England (Anglican)",
              summary: "The established Church. Head: the monarch. Spiritual leader: the Archbishop of Canterbury.",
              detail: [
                "Protestant; has existed since the Reformation in the 1530s.",
                "Senior appointments are usually chosen by the Prime Minister and a Church committee, though the monarch has the right to select them.",
                "Several bishops sit in the House of Lords.",
              ],
              page: 62,
            },
            {
              id: "re-church-scotland",
              title: "Scotland",
              meta: "Church of Scotland (Presbyterian)",
              summary: "The national Church, governed by ministers and elders.",
              detail: ["Its General Assembly is chaired by the Moderator, appointed for one year only."],
              page: 62,
              imageId: "religion-st-giles",
            },
            {
              id: "re-church-wales-ni",
              title: "Wales and Northern Ireland",
              meta: "No established Church",
              summary: "Neither has an established (state) Church.",
              detail: ["There is no established Church in Wales or Northern Ireland."],
              page: 62,
            },
          ],
        },
        {
          type: "prose",
          heading: "Other Christian groups",
          pages: [62],
          paragraphs: [
            "Other Protestant Christian groups in the UK include Baptists, Methodists, Presbyterians and Quakers.",
            "There are also other denominations of Christianity. The biggest of these is the Roman Catholic Church.",
          ],
        },
        {
          type: "map",
          heading: "On the map",
          placeIds: ["religion-canterbury", "religion-edinburgh"],
          caption: "Canterbury is the seat of the Church of England's spiritual leader. The Church of Scotland's General Assembly meets in Edinburgh.",
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The Church of Scotland's General Assembly meets each May in Edinburgh." },
            { text: "The Reformation of the 1530s, when Henry VIII broke with Rome, is covered in the Tudors and Stuarts unit." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Church of England is the official (established) Church in England; it is Protestant and dates from the Reformation in the 1530s.", page: 62 },
        { text: "It is called the Anglican Church in other countries and the Episcopal Church in Scotland and the USA.", page: 62 },
        { text: "The monarch is its head; the Archbishop of Canterbury is its spiritual leader.", page: 62 },
        { text: "Senior appointments are usually made by the Prime Minister and a Church committee. Several bishops sit in the House of Lords.", page: 62 },
        { text: "The Church of Scotland is Presbyterian, governed by ministers and elders; its Moderator serves for one year.", page: 62 },
        { text: "There is no established Church in Wales or Northern Ireland.", page: 62 },
        { text: "Other Protestant groups: Baptists, Methodists, Presbyterians, Quakers. The biggest other denomination is Roman Catholic.", page: 62 },
      ],
      mnemonics: [
        {
          title: "Head vs spirit",
          device: "The Crown on top, Canterbury at heart.",
          explanation: "The monarch is the head of the Church of England; the Archbishop of Canterbury is its spiritual leader.",
        },
        {
          title: "Moderator for a moment",
          device: "M for Moderator, M for one-year Mandate.",
          explanation: "The Church of Scotland's Moderator chairs the General Assembly and is appointed for one year only.",
        },
        {
          title: "Two established, two not",
          device: "England and Scotland have national Churches; Wales and Northern Ireland have none.",
          explanation: "The Church of England is established in England, the Church of Scotland is Scotland's national Church; Wales and Northern Ireland have no established Church.",
        },
      ],
      checkQuestionIds: ["re-q07", "re-q09", "re-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "patron-saints",
      title: "The patron saints",
      dek: "St David, St Patrick, St George and St Andrew, their days, and which are holidays.",
      pages: [63],
      minutes: 4,
      recall: {
        question: "Before you read: whose day is 30 November, and which country is he patron saint of?",
        answer: "St Andrew's Day, Scotland.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Four nations, four saints",
          pages: [63],
          paragraphs: [
            "England, Scotland, Wales and Northern Ireland each have a national saint, called a patron saint, and each saint has a special day.",
          ],
        },
        {
          type: "sequence",
          heading: "The patron saints' days through the year",
          page: 63,
          steps: [
            { label: "1 March", detail: "St David's Day · Wales" },
            { label: "17 March", detail: "St Patrick's Day · Northern Ireland" },
            { label: "23 April", detail: "St George's Day · England" },
            { label: "30 November", detail: "St Andrew's Day · Scotland" },
          ],
        },
        {
          type: "cards",
          heading: "The saints",
          cards: [
            { id: "re-st-david", title: "St David", meta: "Wales · 1 March", summary: "Patron saint of Wales.", detail: ["St David's Day is 1 March. It is not a public holiday in Wales, but it is still celebrated with parades and small festivals."], page: 63 },
            { id: "re-st-patrick", title: "St Patrick", meta: "Northern Ireland · 17 March", summary: "Patron saint of Northern Ireland; his day is an official holiday there.", detail: ["St Patrick's Day is 17 March and is an official holiday in Northern Ireland."], page: 63 },
            { id: "re-st-george", title: "St George", meta: "England · 23 April", summary: "Patron saint of England.", detail: ["St George's Day is 23 April. It is not a public holiday in England, but it is still celebrated."], page: 63 },
            { id: "re-st-andrew", title: "St Andrew", meta: "Scotland · 30 November", summary: "Patron saint of Scotland; his day is an official holiday there.", detail: ["St Andrew's Day is 30 November and is an official holiday in Scotland, although not all businesses and offices close."], page: 63 },
          ],
        },
        {
          type: "prose",
          heading: "Which days are holidays?",
          pages: [63],
          paragraphs: [
            "Only Scotland and Northern Ireland have their patron saint's day as an official holiday, although in Scotland not all businesses and offices close. Events are held across Scotland, Northern Ireland and the rest of the country, especially where many people have Scottish, Northern Irish or Irish heritage.",
            "In England and Wales the patron saints' days are no longer public holidays, but they are still celebrated, with parades and small festivals all over both countries.",
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "St Patrick also appears in the Early Britain unit as a missionary from Ireland who became the patron saint of Ireland." },
            { text: "The crosses of St George, St Andrew and St Patrick are combined in the Union Flag; Wales is not represented on it." },
          ],
        },
      ],
      keyFacts: [
        { text: "1 March: St David's Day (Wales).", page: 63 },
        { text: "17 March: St Patrick's Day (Northern Ireland).", page: 63 },
        { text: "23 April: St George's Day (England).", page: 63 },
        { text: "30 November: St Andrew's Day (Scotland).", page: 63 },
        { text: "Only Scotland and Northern Ireland have their patron saint's day as an official holiday.", page: 63 },
      ],
      mnemonics: [
        {
          title: "Calendar order: D-P-G-A",
          device: "\"Dragons Prefer Grilled Apples\": David, Patrick, George, Andrew.",
          explanation: "The saints' days in date order: 1 March, 17 March, 23 April, 30 November. The Welsh dragon starts the year's list.",
        },
        {
          title: "Holidays in the north and west",
          device: "Andrew and Patrick get the day off; George and David go to work.",
          explanation: "Only Scotland (St Andrew) and Northern Ireland (St Patrick) have their saint's day as an official holiday.",
        },
      ],
      checkQuestionIds: ["re-q14", "re-q16", "re-q18"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "religion-canterbury", name: "Canterbury", lat: 51.2798, lon: 1.0828, note: "The Archbishop of Canterbury is the spiritual leader of the Church of England.", page: 62, lessonId: "christian-churches", era: "Today" },
    { id: "religion-edinburgh", name: "Edinburgh", lat: 55.9533, lon: -3.1883, note: "Not named in this section of the handbook. The Church of Scotland's General Assembly meets here; St Giles' Cathedral is shown in the lesson.", page: 62, lessonId: "christian-churches", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "2009 Citizenship Survey: 70% Christian, 21% no religion.", page: 62 },
    { text: "Muslim 4%, Hindu 2%, Sikh 1%, Jewish and Buddhist each under 0.5%, other religions 2%.", page: 62 },
    { text: "Mosques, temples, synagogues and gurdwaras are found all over the UK; everyone may choose their religion or none.", page: 62 },
    { text: "The Church of England (Anglican; Episcopal in Scotland and the USA) is the established Church in England, Protestant since the 1530s.", page: 62 },
    { text: "The monarch is head of the Church of England; the Archbishop of Canterbury is its spiritual leader.", page: 62 },
    { text: "Several Church of England bishops sit in the House of Lords.", page: 62 },
    { text: "The Church of Scotland is Presbyterian; its Moderator chairs the General Assembly for one year.", page: 62 },
    { text: "There is no established Church in Wales or Northern Ireland. The biggest other Christian denomination is Roman Catholic.", page: 62 },
    { text: "Patron saints' days: St David 1 March, St Patrick 17 March, St George 23 April, St Andrew 30 November.", page: 63 },
    { text: "Only Scotland and Northern Ireland have their patron saint's day as an official holiday.", page: 63 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "re-f01", lessonId: "faiths", page: 62, front: "In the 2009 Citizenship Survey, what percentage of people identified as Christian?", back: "70%." },
    { id: "re-f02", lessonId: "faiths", page: 62, front: "In the 2009 Citizenship Survey, what percentage said they had no religion?", back: "21%." },
    { id: "re-f03", lessonId: "faiths", page: 62, front: "Give the 2009 survey percentages for Muslims, Hindus and Sikhs.", back: "Muslim 4%, Hindu 2%, Sikh 1%. (Jewish and Buddhist: each under 0.5%; other religions 2%.)" },
    { id: "re-f04", lessonId: "faiths", page: 62, front: "What is a gurdwara?", back: "A Sikh place of worship." },
    { id: "re-f05", lessonId: "faiths", page: 62, front: "What is a synagogue?", back: "A Jewish place of worship." },
    { id: "re-f06", lessonId: "faiths", page: 62, front: "Does everyone in the UK have to practise a religion?", back: "No. Everyone has the legal right to choose their religion, or to choose not to practise one." },
    { id: "re-f07", lessonId: "christian-churches", page: 62, front: "What is the established (official) Church in England?", back: "The Church of England, a Protestant Church that has existed since the Reformation in the 1530s." },
    { id: "re-f08", lessonId: "christian-churches", page: 62, front: "What is the Church of England called in other countries, and in Scotland and the USA?", back: "The Anglican Church in other countries; the Episcopal Church in Scotland and the United States." },
    { id: "re-f09", lessonId: "christian-churches", page: 62, front: "Who is the head of the Church of England, and who is its spiritual leader?", back: "The monarch is the head; the Archbishop of Canterbury is the spiritual leader." },
    { id: "re-f10", lessonId: "christian-churches", page: 62, front: "Who usually chooses the Archbishop and other senior Church of England officials?", back: "The Prime Minister and a committee appointed by the Church (the monarch has the right to select them)." },
    { id: "re-f11", lessonId: "christian-churches", page: 62, front: "What kind of Church is the Church of Scotland, and how is it governed?", back: "A Presbyterian Church, governed by ministers and elders." },
    { id: "re-f12", lessonId: "christian-churches", page: 62, front: "Who is the Moderator?", back: "The chairperson of the General Assembly of the Church of Scotland, appointed for one year only." },
    { id: "re-f13", lessonId: "christian-churches", page: 62, front: "Which parts of the UK have no established Church?", back: "Wales and Northern Ireland." },
    { id: "re-f14", lessonId: "christian-churches", page: 62, front: "What is the biggest Christian denomination after the Protestant Churches?", back: "Roman Catholic. Other Protestant groups include Baptists, Methodists, Presbyterians and Quakers." },
    { id: "re-f15", lessonId: "patron-saints", page: 63, front: "When is St David's Day, and which country is it for?", back: "1 March, Wales." },
    { id: "re-f16", lessonId: "patron-saints", page: 63, front: "When is St Patrick's Day, and which country is it for?", back: "17 March, Northern Ireland." },
    { id: "re-f17", lessonId: "patron-saints", page: 63, front: "When is St George's Day, and which country is it for?", back: "23 April, England." },
    { id: "re-f18", lessonId: "patron-saints", page: 63, front: "When is St Andrew's Day, and which country is it for?", back: "30 November, Scotland." },
    { id: "re-f19", lessonId: "patron-saints", page: 63, front: "Which nations have their patron saint's day as an official holiday?", back: "Only Scotland and Northern Ireland (in Scotland not all businesses and offices close)." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // faiths
    { id: "re-q01", lessonId: "faiths", page: 62, type: "single", prompt: "In the 2009 Citizenship Survey, what percentage of people identified themselves as Christian?", options: ["50%", "60%", "70%", "84%"], answer: [2], explanation: "70% identified as Christian. 84% is England's share of the UK population, a common mix-up." },
    { id: "re-q02", lessonId: "faiths", page: 62, type: "single", prompt: "In the 2009 Citizenship Survey, what percentage of people said they had no religion?", options: ["4%", "11%", "21%", "30%"], answer: [2], explanation: "21% of people said they had no religion." },
    { id: "re-q03", lessonId: "faiths", page: 62, type: "single", prompt: "Which was the largest non-Christian religion in the 2009 Citizenship Survey?", options: ["Hindu", "Muslim", "Sikh", "Jewish"], answer: [1], explanation: "Muslims were 4%, Hindus 2%, Sikhs 1%, and Jewish and Buddhist people each under 0.5%." },
    { id: "re-q04", lessonId: "faiths", page: 62, type: "single", prompt: "What is a gurdwara?", options: ["A Hindu temple", "A Sikh place of worship", "A Jewish place of worship", "A Buddhist monastery"], answer: [1], explanation: "Sikhs worship in gurdwaras. Jewish people worship in synagogues, Hindus and Buddhists in temples." },
    { id: "re-q05", lessonId: "faiths", page: 62, type: "truefalse", prompt: "Everyone in the UK has the legal right to choose their religion, or to choose not to practise a religion.", options: ["True", "False"], answer: [0], explanation: "True. The handbook states this right explicitly." },
    { id: "re-q06", lessonId: "faiths", page: 62, type: "multi", prompt: "Which TWO statements about the 2009 Citizenship Survey are correct?", options: ["2% of people identified as Hindu", "10% of people identified as Muslim", "1% of people identified as Sikh", "5% of people identified as Jewish"], answer: [0, 2], explanation: "Hindu 2% and Sikh 1% are correct. Muslims were 4%; Jewish people were less than 0.5%." },
    // christian-churches
    { id: "re-q07", lessonId: "christian-churches", page: 62, type: "single", prompt: "Who is the head of the Church of England?", options: ["The Archbishop of Canterbury", "The Prime Minister", "The monarch", "The Moderator"], answer: [2], explanation: "The monarch is the head of the Church of England. The Archbishop of Canterbury is its spiritual leader." },
    { id: "re-q08", lessonId: "christian-churches", page: 62, type: "single", prompt: "Who is the spiritual leader of the Church of England?", options: ["The Archbishop of Canterbury", "The Archbishop of Westminster", "The monarch", "The Moderator of the General Assembly"], answer: [0], explanation: "The Archbishop of Canterbury is the spiritual leader; the monarch is the head." },
    { id: "re-q09", lessonId: "christian-churches", page: 62, type: "single", prompt: "Since when has the Church of England existed?", options: ["The Norman Conquest in 1066", "The Reformation in the 1530s", "The Glorious Revolution of 1688", "The Act of Union in 1707"], answer: [1], explanation: "It is a Protestant Church that has existed since the Reformation in the 1530s." },
    { id: "re-q10", lessonId: "christian-churches", page: 62, type: "single", prompt: "What is the Church of England called in Scotland and the United States?", options: ["The Presbyterian Church", "The Anglican Church", "The Episcopal Church", "The Methodist Church"], answer: [2], explanation: "It is called the Episcopal Church in Scotland and the USA, and the Anglican Church in other countries." },
    { id: "re-q11", lessonId: "christian-churches", page: 62, type: "truefalse", prompt: "Several Church of England bishops sit in the House of Lords.", options: ["True", "False"], answer: [0], explanation: "True. This is part of the constitutional link between Church and state in England." },
    { id: "re-q12", lessonId: "christian-churches", page: 62, type: "single", prompt: "What is the national Church of Scotland?", options: ["The Church of England", "The Church of Scotland, a Presbyterian Church", "The Roman Catholic Church", "There is no national Church in Scotland"], answer: [1], explanation: "Scotland's national Church is the Church of Scotland, a Presbyterian Church governed by ministers and elders." },
    { id: "re-q13", lessonId: "christian-churches", page: 62, type: "single", prompt: "How long is the Moderator of the General Assembly of the Church of Scotland appointed for?", options: ["One year", "Four years", "Seven years", "For life"], answer: [0], explanation: "The Moderator is appointed for one year only and often speaks for the Church." },
    { id: "re-q13b", lessonId: "christian-churches", page: 62, type: "multi", prompt: "Which TWO parts of the UK have no established Church?", options: ["England", "Wales", "Scotland", "Northern Ireland"], answer: [1, 3], explanation: "There is no established Church in Wales or Northern Ireland." },
    { id: "re-q13c", lessonId: "christian-churches", page: 62, type: "single", prompt: "Which is the biggest Christian denomination in the UK other than the Protestant Churches?", options: ["Quaker", "Baptist", "Roman Catholic", "Methodist"], answer: [2], explanation: "Baptists, Methodists, Presbyterians and Quakers are Protestant groups. The biggest other denomination is Roman Catholic." },
    { id: "re-q13d", lessonId: "christian-churches", page: 62, type: "truefalse", prompt: "The Archbishop of Canterbury is always chosen personally by the monarch, without advice.", options: ["True", "False"], answer: [1], explanation: "False. The monarch has the right to select the Archbishop, but usually the choice is made by the Prime Minister and a committee appointed by the Church." },
    // patron-saints
    { id: "re-q14", lessonId: "patron-saints", page: 63, type: "single", prompt: "When is St David's Day?", options: ["1 March", "17 March", "23 April", "30 November"], answer: [0], explanation: "St David's Day, for Wales, is 1 March." },
    { id: "re-q15", lessonId: "patron-saints", page: 63, type: "single", prompt: "Who is the patron saint of Scotland?", options: ["St Patrick", "St George", "St David", "St Andrew"], answer: [3], explanation: "St Andrew is the patron saint of Scotland; his day is 30 November." },
    { id: "re-q16", lessonId: "patron-saints", page: 63, type: "single", prompt: "St George's Day, 23 April, celebrates the patron saint of which country?", options: ["Wales", "England", "Scotland", "Northern Ireland"], answer: [1], explanation: "St George is the patron saint of England." },
    { id: "re-q17", lessonId: "patron-saints", page: 63, type: "single", prompt: "When is St Patrick's Day?", options: ["1 March", "17 March", "23 April", "30 November"], answer: [1], explanation: "St Patrick's Day, for Northern Ireland, is 17 March." },
    { id: "re-q18", lessonId: "patron-saints", page: 63, type: "multi", prompt: "Which TWO countries have their patron saint's day as an official holiday?", options: ["England", "Scotland", "Wales", "Northern Ireland"], answer: [1, 3], explanation: "Only Scotland and Northern Ireland do. In England and Wales the days are still celebrated but are not public holidays." },
    { id: "re-q19", lessonId: "patron-saints", page: 63, type: "truefalse", prompt: "St George's Day is a public holiday in England.", options: ["True", "False"], answer: [1], explanation: "False. The patron saints' days are no longer public holidays in England and Wales, though they are still celebrated." },
    { id: "re-q20", lessonId: "patron-saints", page: 63, type: "single", prompt: "30 November is the day of which patron saint?", options: ["St Andrew", "St David", "St George", "St Patrick"], answer: [0], explanation: "30 November is St Andrew's Day, Scotland." },
  ],

  flags: [
    { page: 62, text: "The religion figures come from the 2009 Citizenship Survey. They are what the handbook (and so the test) uses, but later surveys and the 2021 census show a much lower Christian share and a higher share with no religion." },
  ],
};
