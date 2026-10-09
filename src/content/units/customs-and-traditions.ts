import type { Unit } from "../types";

/**
 * Unit 4.3 — Customs and traditions. Handbook (Britizen PDF) § 4.3, pp. 51–53.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const customsAndTraditions: Unit = {
  id: "customs-and-traditions",
  number: "4.3",
  title: "Customs and traditions",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.3",
    pages: [51, 53],
  },
  status: "available",
  dek: "Christian and other religious festivals, national days and bank holidays.",
  heroImageId: "customs-and-traditions-hogmanay",
  overview: [
    "The UK's year is marked by festivals: the Christian festivals of Christmas and Easter, the festivals of other faiths such as Diwali, Hannukah, Eid and Vaisakhi, and popular days like Valentine's Day, Halloween and Bonfire Night.",
    "The test often asks for a date, a month, or what a festival celebrates, and which days are public holidays. This unit takes the handbook's festivals in turn and then puts them all on one calendar so you can see the year at a glance.",
  ],
  objectives: [
    "Give the dates of Christmas Day, Boxing Day and New Year, and explain what Christmas and Easter celebrate.",
    "Explain Lent, Shrove Tuesday (Pancake Day) and Ash Wednesday, and how they relate to Easter.",
    "Say who celebrates Diwali, Hannukah, Eid al-Fitr, Eid ul Adha and Vaisakhi, when, and what each remembers.",
    "Give the dates and customs of Valentine's Day, April Fool's Day, Mothering Sunday, Father's Day, Halloween, Bonfire Night and Remembrance Day.",
    "Explain what a bank holiday is and when they fall, including the extra holidays in Scotland and Northern Ireland.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "christian-festivals",
      title: "Christmas and Easter",
      dek: "The two main Christian festivals, Boxing Day, Lent and Pancake Day.",
      pages: [51],
      minutes: 6,
      heroImageId: "customs-and-traditions-christmas-pudding",
      recall: {
        question: "Before you read: what does Easter mark, and which two days around it are public holidays?",
        answer: "The death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday. Good Friday and Easter Monday are public holidays.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Christmas",
          pages: [51],
          paragraphs: [
            "Christmas Day, 25 December, celebrates the birth of Jesus Christ and is a public holiday. Many Christians go to church on Christmas Eve (24 December) or on Christmas Day itself.",
            "Christmas is celebrated in a traditional way. People usually spend the day at home and eat a special meal, often roast turkey, Christmas pudding and mince pies. They give gifts, send cards and decorate their houses, and many decorate a tree.",
            "It is a special time for children. Very young children believe that Father Christmas, also known as Santa Claus, brings them presents during the night before Christmas Day.",
            "Boxing Day, the day after Christmas Day, is also a public holiday.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "customs-and-traditions-christmas-pudding",
            kind: "photograph",
            caption: "A Christmas pudding, one of the traditional Christmas foods the handbook names.",
          },
        },
        {
          type: "prose",
          heading: "Easter",
          pages: [51],
          paragraphs: [
            "Easter takes place in March or April. It marks the death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday. Good Friday and the following Monday, Easter Monday, are both public holidays.",
            "Easter is also celebrated by people who are not religious. Easter eggs, usually chocolate eggs, are given as presents as a symbol of new life.",
          ],
        },
        {
          type: "prose",
          heading: "Lent, Shrove Tuesday and Ash Wednesday",
          pages: [51],
          paragraphs: [
            "The 40 days before Easter are known as Lent, a time when Christians reflect and prepare for Easter. Traditionally people fasted during Lent; today many people give something up, such as a favourite food.",
            "The day before Lent starts is Shrove Tuesday, or Pancake Day. People eat pancakes, which were traditionally made to use up foods such as eggs, fat and milk before fasting.",
            "Lent begins on Ash Wednesday. At church services Christians are marked with an ash cross on their forehead, a symbol of death and sorrow for sin.",
          ],
        },
        {
          type: "sequence",
          heading: "From Pancake Day to Easter Monday",
          page: 51,
          steps: [
            { label: "Shrove Tuesday", detail: "Pancake Day: the day before Lent. Use up eggs, fat and milk." },
            { label: "Ash Wednesday", detail: "Lent begins. An ash cross is marked on the forehead." },
            { label: "Lent", detail: "The 40 days before Easter: reflection, fasting or giving something up." },
            { label: "Good Friday", detail: "The death of Jesus Christ. Public holiday." },
            { label: "Easter Sunday", detail: "Jesus Christ's rising from the dead. Easter eggs." },
            { label: "Easter Monday", detail: "Public holiday." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The handbook says Good Friday and Easter Monday are public holidays. In Scotland, Easter Monday is not a bank holiday, though Good Friday is.",
              verify: "Learn the handbook's statement for the test.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Christmas Day, 25 December, celebrates the birth of Jesus Christ and is a public holiday.", page: 51 },
        { text: "Christmas Eve is 24 December; Boxing Day, the day after Christmas, is a public holiday.", page: 51 },
        { text: "Traditional Christmas foods: roast turkey, Christmas pudding and mince pies. Father Christmas is also called Santa Claus.", page: 51 },
        { text: "Easter (March or April) marks Jesus's death on Good Friday and rising on Easter Sunday; Good Friday and Easter Monday are public holidays.", page: 51 },
        { text: "Lent is the 40 days before Easter. It begins on Ash Wednesday; the day before is Shrove Tuesday (Pancake Day).", page: 51 },
        { text: "Easter eggs are chocolate eggs given as a symbol of new life.", page: 51 },
      ],
      mnemonics: [
        {
          title: "Pancakes before ashes",
          device: "Tuesday you feast, Wednesday you fast.",
          explanation: "Shrove Tuesday (pancakes) comes the day before Ash Wednesday, when Lent begins.",
        },
        {
          title: "Forty days of Lent",
          device: "Forty days to get ready for Easter.",
          explanation: "Lent lasts the 40 days before Easter.",
        },
        {
          title: "Easter's bookends",
          device: "Friday Good, Monday off.",
          explanation: "Good Friday and Easter Monday are the two Easter public holidays named in the handbook.",
        },
      ],
      checkQuestionIds: ["ct-q01", "ct-q04", "ct-q06"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "other-religious-festivals",
      title: "Festivals of other faiths",
      dek: "Diwali, Hannukah, the two Eids and Vaisakhi.",
      pages: [51, 52],
      minutes: 5,
      heroImageId: "customs-and-traditions-diwali-leicester",
      recall: {
        question: "Before you read: which festival is called the Festival of Lights, and who celebrates it?",
        answer: "Diwali. It is celebrated by Hindus and Sikhs.",
      },
      blocks: [
        {
          type: "cards",
          heading: "Five festivals to know",
          cards: [
            {
              id: "ct-diwali",
              title: "Diwali",
              meta: "Hindus and Sikhs · October or November · 5 days",
              summary: "The Festival of Lights: the victory of good over evil and the gaining of knowledge.",
              detail: [
                "Diwali normally falls in October or November and lasts for five days. It is often called the Festival of Lights.",
                "It celebrates the victory of good over evil and the gaining of knowledge. There are different stories about how it began.",
                "There is a famous celebration of Diwali in Leicester.",
              ],
              page: 51,
              imageId: "customs-and-traditions-diwali-leicester",
            },
            {
              id: "ct-hannukah",
              title: "Hannukah",
              meta: "Jewish · November or December · 8 days",
              summary: "Remembers the Jews' struggle for religious freedom.",
              detail: [
                "Hannukah is in November or December and lasts for eight days. It remembers the Jews' struggle for religious freedom.",
                "On each day a candle is lit on a stand of eight candles called a menorah. This recalls the story of the festival, in which oil that should have lasted only one day lasted for eight.",
              ],
              page: 52,
              context: { text: "More often spelled Hanukkah or Chanukah. The handbook spells it Hannukah." },
            },
            {
              id: "ct-eid-al-fitr",
              title: "Eid al-Fitr",
              meta: "Muslim · date changes every year",
              summary: "Celebrates the end of Ramadan, a month of fasting.",
              detail: [
                "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month. They thank Allah for giving them the strength to complete the fast.",
                "The date changes every year. Muslims attend special services and meals.",
              ],
              page: 52,
            },
            {
              id: "ct-eid-ul-adha",
              title: "Eid ul Adha",
              meta: "Muslim",
              summary: "Remembers that the prophet Ibrahim was willing to sacrifice his son when God ordered him to.",
              detail: [
                "It reminds Muslims of their own commitment to God.",
                "Many Muslims sacrifice an animal to eat during the festival. In Britain this has to be done in a slaughterhouse.",
              ],
              page: 52,
            },
            {
              id: "ct-vaisakhi",
              title: "Vaisakhi (Baisakhi)",
              meta: "Sikh · 14 April",
              summary: "Celebrates the founding of the Sikh community known as the Khalsa.",
              detail: [
                "Vaisakhi, also spelled Baisakhi, is a Sikh festival celebrated on 14 April each year with parades, dancing and singing.",
                "It celebrates the founding of the Khalsa, the Sikh community.",
              ],
              page: 52,
            },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "customs-and-traditions-diwali-leicester",
            kind: "photograph",
            caption: "Diwali lights in Leicester, home of a famous Diwali celebration.",
          },
        },
        {
          type: "map",
          heading: "Diwali on the map",
          placeIds: ["customs-and-traditions-leicester"],
          caption: "Leicester holds a famous Diwali celebration.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The handbook gives Vaisakhi as 14 April each year. In practice it falls on 13 or 14 April, depending on the year.",
              verify: "Answer 14 April in the test, as the handbook says.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Diwali (Hindus and Sikhs), October or November, five days: the Festival of Lights. Famous celebration in Leicester.", page: 51 },
        { text: "Diwali celebrates the victory of good over evil and the gaining of knowledge.", page: 51 },
        { text: "Hannukah (Jewish), November or December, eight days: a menorah candle is lit each day.", page: 52 },
        { text: "Eid al-Fitr celebrates the end of Ramadan; its date changes every year.", page: 52 },
        { text: "Eid ul Adha remembers the prophet Ibrahim's willingness to sacrifice his son; in Britain animals must be slaughtered in a slaughterhouse.", page: 52 },
        { text: "Vaisakhi (Sikh), 14 April, celebrates the founding of the Khalsa.", page: 52 },
      ],
      mnemonics: [
        {
          title: "Diwali = 5, Hannukah = 8",
          device: "Five fingers of light; eight candles on the menorah.",
          explanation: "Diwali lasts five days (October/November); Hannukah lasts eight days (November/December), one candle each day.",
        },
        {
          title: "Two Eids",
          device: "al-Fitr = Finish the fast; ul Adha = Abraham (Ibrahim).",
          explanation: "Eid al-Fitr marks the end of Ramadan; Eid ul Adha remembers Ibrahim's willingness to sacrifice his son.",
        },
        {
          title: "Vaisakhi and the Khalsa",
          device: "V for Vaisakhi in April, K for Khalsa.",
          explanation: "The Sikh festival on 14 April celebrates the founding of the Khalsa.",
        },
      ],
      checkQuestionIds: ["ct-q08", "ct-q10", "ct-q13"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "popular-days",
      title: "New Year to Halloween",
      dek: "Hogmanay, Valentine's Day, April Fool's Day, Mothering Sunday, Father's Day and Halloween.",
      pages: [52],
      minutes: 5,
      heroImageId: "customs-and-traditions-hogmanay",
      recall: {
        question: "Before you read: what is 31 December called in Scotland, and which extra day is a public holiday there?",
        answer: "Hogmanay. 2 January is also a public holiday in Scotland.",
      },
      blocks: [
        {
          type: "prose",
          heading: "New Year and Hogmanay",
          pages: [52],
          paragraphs: [
            "New Year, 1 January, is a public holiday. People usually celebrate on the night of 31 December, New Year's Eve.",
            "In Scotland, 31 December is called Hogmanay and 2 January is also a public holiday. For some Scottish people, Hogmanay is a bigger holiday than Christmas.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "customs-and-traditions-hogmanay",
            kind: "photograph",
            caption: "Fireworks over Edinburgh at Hogmanay.",
          },
        },
        {
          type: "cards",
          heading: "Days in the calendar",
          cards: [
            { id: "ct-valentine", title: "Valentine's Day", meta: "14 February", summary: "Lovers exchange cards and gifts.", detail: ["Sometimes people send anonymous cards to someone they secretly admire."], page: 52 },
            { id: "ct-april-fool", title: "April Fool's Day", meta: "1 April", summary: "People play jokes on each other until midday.", detail: ["Television and newspapers often run stories that are April Fool jokes."], page: 52 },
            { id: "ct-mothering-sunday", title: "Mothering Sunday (Mother's Day)", meta: "The Sunday three weeks before Easter", summary: "Children send cards or buy gifts for their mothers.", detail: ["Because it is tied to Easter, its date moves each year."], page: 52 },
            { id: "ct-fathers-day", title: "Father's Day", meta: "The third Sunday in June", summary: "Children send cards or buy gifts for their fathers.", detail: ["Father's Day is the third Sunday in June."], page: 52 },
            {
              id: "ct-halloween",
              title: "Halloween",
              meta: "31 October",
              summary: "An ancient festival with roots in a pagan festival marking the beginning of winter.",
              detail: [
                "Young people often dress up in frightening costumes to play 'trick or treat'. People give them treats to stop them playing tricks.",
                "Many people carve lanterns out of pumpkins and put a candle inside.",
              ],
              page: 52,
              imageId: "customs-and-traditions-pumpkin",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "customs-and-traditions-pumpkin",
            kind: "photograph",
            caption: "A pumpkin lantern lit with a candle for Halloween.",
          },
        },
        {
          type: "map",
          heading: "Hogmanay on the map",
          placeIds: ["customs-and-traditions-edinburgh"],
        },
      ],
      keyFacts: [
        { text: "New Year's Day, 1 January, is a public holiday; New Year's Eve is 31 December.", page: 52 },
        { text: "In Scotland 31 December is Hogmanay, and 2 January is also a public holiday.", page: 52 },
        { text: "Valentine's Day: 14 February. April Fool's Day: 1 April, jokes until midday.", page: 52 },
        { text: "Mothering Sunday is the Sunday three weeks before Easter; Father's Day is the third Sunday in June.", page: 52 },
        { text: "Halloween, 31 October, has roots in a pagan festival marking the beginning of winter: trick or treat and pumpkin lanterns.", page: 52 },
      ],
      mnemonics: [
        {
          title: "Fools until noon",
          device: "April Fool's jokes stop when the clock strikes twelve.",
          explanation: "On 1 April jokes are played only until midday.",
        },
        {
          title: "Mum moves, Dad doesn't",
          device: "Mum follows Easter (three weeks before); Dad sticks to June (third Sunday).",
          explanation: "Both involve the number three: Mothering Sunday is three weeks before Easter, Father's Day is the third Sunday in June.",
        },
      ],
      checkQuestionIds: ["ct-q15", "ct-q17", "ct-q19"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "remembrance-and-bank-holidays",
      title: "Bonfire Night, Remembrance and bank holidays",
      dek: "5 and 11 November, and the holidays with no religious significance.",
      pages: [53],
      minutes: 5,
      heroImageId: "customs-and-traditions-cenotaph",
      recall: {
        question: "Before you read: what happens at 11.00 am on Remembrance Day?",
        answer: "A two-minute silence, and wreaths are laid at the Cenotaph in Whitehall, London.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Bonfire Night",
          pages: [53],
          paragraphs: [
            "Bonfire Night, 5 November, is when people in Great Britain set off fireworks at home or at special displays.",
            "It began with an event in 1605, when a group of Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "customs-and-traditions-bonfire",
            kind: "photograph",
            caption: "A Bonfire Night fireworks display.",
          },
        },
        {
          type: "prose",
          heading: "Remembrance Day",
          pages: [53],
          paragraphs: [
            "Remembrance Day, 11 November, commemorates those who died fighting for the UK and its allies. It originally commemorated the dead of the First World War, which ended on 11 November 1918.",
            "People wear poppies, the red flower found on the battlefields of the First World War. At 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall, London.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "customs-and-traditions-cenotaph", kind: "photograph", caption: "Wreaths of poppies at the Cenotaph, Whitehall, London." },
            { imageId: "customs-and-traditions-poppy", kind: "photograph", caption: "A paper remembrance poppy, worn in the weeks before Remembrance Day." },
          ],
        },
        {
          type: "prose",
          heading: "Bank holidays",
          pages: [53],
          paragraphs: [
            "As well as the holidays already mentioned, there are other public holidays each year called bank holidays, when banks and many other businesses close for the day. They have no religious significance.",
            "They fall at the beginning of May, in late May or early June, and in August. In Northern Ireland, the anniversary of the Battle of the Boyne in July is also a public holiday.",
          ],
        },
        {
          type: "map",
          heading: "On the map",
          placeIds: ["customs-and-traditions-cenotaph", "customs-and-traditions-boyne"],
          caption: "The Cenotaph is in Whitehall, close to the Houses of Parliament that Guy Fawkes planned to blow up. The Battle of the Boyne was fought in Ireland.",
        },
        {
          type: "sequence",
          heading: "The festival calendar: the whole year at a glance",
          page: 53,
          steps: [
            { label: "1 January", detail: "New Year's Day · public holiday (2 January too, in Scotland)" },
            { label: "14 February", detail: "Valentine's Day" },
            { label: "1 March", detail: "St David's Day · Wales (see the Religion unit)" },
            { label: "17 March", detail: "St Patrick's Day · Northern Ireland (see the Religion unit)" },
            { label: "March or April", detail: "Shrove Tuesday, Ash Wednesday, Lent (40 days), Mothering Sunday (3 weeks before Easter), Good Friday, Easter Sunday, Easter Monday" },
            { label: "1 April", detail: "April Fool's Day · jokes until midday" },
            { label: "14 April", detail: "Vaisakhi · Sikh" },
            { label: "23 April", detail: "St George's Day · England (see the Religion unit)" },
            { label: "May", detail: "Bank holidays at the beginning of May and in late May (or early June)" },
            { label: "June", detail: "Father's Day · third Sunday" },
            { label: "July", detail: "Battle of the Boyne anniversary · public holiday in Northern Ireland" },
            { label: "August", detail: "Bank holiday" },
            { label: "October or November", detail: "Diwali · Hindus and Sikhs · five days" },
            { label: "31 October", detail: "Halloween" },
            { label: "5 November", detail: "Bonfire Night" },
            { label: "11 November", detail: "Remembrance Day · two-minute silence at 11.00 am" },
            { label: "November or December", detail: "Hannukah · Jewish · eight days" },
            { label: "30 November", detail: "St Andrew's Day · Scotland (see the Religion unit)" },
            { label: "24–26 December", detail: "Christmas Eve, Christmas Day (public holiday), Boxing Day (public holiday)" },
            { label: "31 December", detail: "New Year's Eve · Hogmanay in Scotland" },
            { label: "Changes every year", detail: "Eid al-Fitr (end of Ramadan) and Eid ul Adha" },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The national ceremony at the Cenotaph is held on Remembrance Sunday, the Sunday nearest to 11 November." },
            { text: "The Battle of the Boyne was fought in 1690. Its anniversary holiday is on 12 July. The battle is covered in the Tudors and Stuarts unit." },
            { text: "The patron saints' days (p. 63) are taught in the Religion unit; they are shown here so the calendar is complete." },
          ],
        },
      ],
      keyFacts: [
        { text: "Bonfire Night, 5 November: fireworks, remembering Guy Fawkes's failed plot of 1605 to blow up the Houses of Parliament.", page: 53 },
        { text: "Guy Fawkes led a group of Catholics who planned to kill the Protestant king.", page: 53 },
        { text: "Remembrance Day, 11 November: the First World War ended on 11 November 1918.", page: 53 },
        { text: "People wear poppies; at 11.00 am there is a two-minute silence and wreaths are laid at the Cenotaph in Whitehall.", page: 53 },
        { text: "Bank holidays have no religious significance: early May, late May or early June, and August.", page: 53 },
        { text: "In Northern Ireland the anniversary of the Battle of the Boyne in July is also a public holiday.", page: 53 },
      ],
      mnemonics: [
        {
          title: "Remember, remember",
          device: "5th of November: fireworks; 11th of November: silence.",
          explanation: "Two November dates six days apart: Bonfire Night (5th, Guy Fawkes, 1605) and Remembrance Day (11th, end of the First World War, 1918).",
        },
        {
          title: "Eleven, eleven, eleven",
          device: "11 am, 11th day, 11th month.",
          explanation: "The two-minute silence is at 11.00 am on 11 November, because the First World War ended on 11 November 1918.",
        },
        {
          title: "Bank holidays: May, May, August",
          device: "Two in May, one in August.",
          explanation: "Early May, late May (or early June) and August. Northern Ireland adds the Boyne in July.",
        },
      ],
      checkQuestionIds: ["ct-q21", "ct-q23", "ct-q26"],
    },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "customs-and-traditions-leicester", name: "Leicester", lat: 52.6369, lon: -1.1398, note: "Famous celebration of Diwali.", page: 51, lessonId: "other-religious-festivals", era: "Today" },
    { id: "customs-and-traditions-edinburgh", name: "Edinburgh", lat: 55.9533, lon: -3.1883, note: "Hogmanay (31 December) celebrations; the handbook's Hogmanay photo is captioned Edinburgh.", page: 52, lessonId: "popular-days", era: "Today" },
    { id: "customs-and-traditions-cenotaph", name: "The Cenotaph, Whitehall", lat: 51.5027, lon: -0.1262, label: { side: "left" }, note: "Wreaths are laid here on Remembrance Day, 11 November.", page: 53, lessonId: "remembrance-and-bank-holidays", era: "Today" },
    { id: "customs-and-traditions-boyne", name: "River Boyne (battle site)", lat: 53.7236, lon: -6.4167, label: { side: "left" }, note: "Anniversary of the Battle of the Boyne (July) is a public holiday in Northern Ireland.", page: 53, lessonId: "remembrance-and-bank-holidays", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Christmas Day (25 December) and Boxing Day (26 December) are public holidays.", page: 51 },
    { text: "Easter (March or April): Good Friday and Easter Monday are public holidays.", page: 51 },
    { text: "Lent: the 40 days before Easter, beginning on Ash Wednesday; the day before is Shrove Tuesday (Pancake Day).", page: 51 },
    { text: "Diwali: Hindus and Sikhs, October/November, five days, Festival of Lights; famous celebration in Leicester.", page: 51 },
    { text: "Hannukah: Jewish, November/December, eight days, menorah.", page: 52 },
    { text: "Eid al-Fitr ends Ramadan; Eid ul Adha remembers Ibrahim. Vaisakhi (Sikh, 14 April) celebrates the Khalsa.", page: 52 },
    { text: "New Year (1 January) is a public holiday; Hogmanay is 31 December in Scotland, where 2 January is also a holiday.", page: 52 },
    { text: "Valentine's Day 14 February; April Fool's Day 1 April; Halloween 31 October.", page: 52 },
    { text: "Mothering Sunday: three weeks before Easter. Father's Day: third Sunday in June.", page: 52 },
    { text: "Bonfire Night, 5 November, recalls Guy Fawkes's failed plot of 1605.", page: 53 },
    { text: "Remembrance Day, 11 November: poppies, two-minute silence at 11.00 am, wreaths at the Cenotaph.", page: 53 },
    { text: "Bank holidays: early May, late May/early June and August; Battle of the Boyne (July) in Northern Ireland.", page: 53 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "ct-f01", lessonId: "christian-festivals", page: 51, front: "What does Christmas Day celebrate, and when is it?", back: "The birth of Jesus Christ, on 25 December. It is a public holiday." },
    { id: "ct-f02", lessonId: "christian-festivals", page: 51, front: "What is Boxing Day?", back: "The day after Christmas Day (26 December). A public holiday." },
    { id: "ct-f03", lessonId: "christian-festivals", page: 51, front: "Name three traditional Christmas foods from the handbook.", back: "Roast turkey, Christmas pudding and mince pies." },
    { id: "ct-f04", lessonId: "christian-festivals", page: 51, front: "What does Easter mark?", back: "The death of Jesus Christ on Good Friday and his rising from the dead on Easter Sunday." },
    { id: "ct-f05", lessonId: "christian-festivals", page: 51, front: "What is Lent?", back: "The 40 days before Easter, when Christians reflect and prepare. Traditionally a time of fasting." },
    { id: "ct-f06", lessonId: "christian-festivals", page: 51, front: "What is Shrove Tuesday, and why are pancakes eaten?", back: "The day before Lent (Pancake Day). Pancakes used up eggs, fat and milk before fasting." },
    { id: "ct-f07", lessonId: "christian-festivals", page: 51, front: "What happens on Ash Wednesday?", back: "Lent begins; Christians are marked with an ash cross on the forehead, a symbol of death and sorrow for sin." },
    { id: "ct-f08", lessonId: "other-religious-festivals", page: 51, front: "Diwali: who celebrates it, when, and for how long?", back: "Hindus and Sikhs; October or November; five days. Called the Festival of Lights." },
    { id: "ct-f09", lessonId: "other-religious-festivals", page: 51, front: "What does Diwali celebrate, and where is there a famous celebration?", back: "The victory of good over evil and the gaining of knowledge. Leicester." },
    { id: "ct-f10", lessonId: "other-religious-festivals", page: 52, front: "Hannukah: when, how long, and what does it remember?", back: "November or December, eight days. The Jews' struggle for religious freedom; a candle on a menorah is lit each day." },
    { id: "ct-f11", lessonId: "other-religious-festivals", page: 52, front: "What does Eid al-Fitr celebrate?", back: "The end of Ramadan, a month of fasting. Its date changes every year." },
    { id: "ct-f12", lessonId: "other-religious-festivals", page: 52, front: "What does Eid ul Adha remember?", back: "That the prophet Ibrahim was willing to sacrifice his son when God ordered him to." },
    { id: "ct-f13", lessonId: "other-religious-festivals", page: 52, front: "Vaisakhi: whose festival, when, and what does it celebrate?", back: "Sikh; 14 April; the founding of the Sikh community known as the Khalsa." },
    { id: "ct-f14", lessonId: "popular-days", page: 52, front: "What is Hogmanay?", back: "The Scottish name for 31 December (New Year's Eve). 2 January is also a public holiday in Scotland." },
    { id: "ct-f15", lessonId: "popular-days", page: 52, front: "When is Valentine's Day?", back: "14 February." },
    { id: "ct-f16", lessonId: "popular-days", page: 52, front: "On April Fool's Day, until what time are jokes played?", back: "Until midday, on 1 April." },
    { id: "ct-f17", lessonId: "popular-days", page: 52, front: "When are Mothering Sunday and Father's Day?", back: "Mothering Sunday: the Sunday three weeks before Easter. Father's Day: the third Sunday in June." },
    { id: "ct-f18", lessonId: "popular-days", page: 52, front: "What are the roots of Halloween (31 October)?", back: "A pagan festival marking the beginning of winter." },
    { id: "ct-f19", lessonId: "remembrance-and-bank-holidays", page: 53, front: "What is the origin of Bonfire Night (5 November)?", back: "1605: Catholics led by Guy Fawkes failed in their plan to kill the Protestant king with a bomb in the Houses of Parliament." },
    { id: "ct-f20", lessonId: "remembrance-and-bank-holidays", page: 53, front: "Why is Remembrance Day on 11 November?", back: "The First World War ended on 11 November 1918." },
    { id: "ct-f21", lessonId: "remembrance-and-bank-holidays", page: 53, front: "What happens at 11.00 am on Remembrance Day?", back: "A two-minute silence; wreaths are laid at the Cenotaph in Whitehall, London." },
    { id: "ct-f22", lessonId: "remembrance-and-bank-holidays", page: 53, front: "Why do people wear poppies?", back: "The red poppy was found on the battlefields of the First World War." },
    { id: "ct-f23", lessonId: "remembrance-and-bank-holidays", page: 53, front: "What is a bank holiday, and when are they?", back: "A public holiday with no religious significance when banks and many businesses close: early May, late May or early June, and August." },
    { id: "ct-f24", lessonId: "remembrance-and-bank-holidays", page: 53, front: "Which extra public holiday does Northern Ireland have in July?", back: "The anniversary of the Battle of the Boyne." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // christian-festivals
    { id: "ct-q01", lessonId: "christian-festivals", page: 51, type: "single", prompt: "What does Christmas Day celebrate?", options: ["The death of Jesus Christ", "The birth of Jesus Christ", "The rising of Jesus Christ from the dead", "The start of Lent"], answer: [1], explanation: "Christmas Day, 25 December, celebrates the birth of Jesus Christ. Easter marks his death and rising." },
    { id: "ct-q02", lessonId: "christian-festivals", page: 51, type: "truefalse", prompt: "Boxing Day, the day after Christmas Day, is a public holiday.", options: ["True", "False"], answer: [0], explanation: "True. Both Christmas Day and Boxing Day are public holidays." },
    { id: "ct-q03", lessonId: "christian-festivals", page: 51, type: "multi", prompt: "Which TWO days at Easter are public holidays?", options: ["Ash Wednesday", "Good Friday", "Shrove Tuesday", "Easter Monday"], answer: [1, 3], explanation: "Good Friday and Easter Monday are public holidays. Shrove Tuesday and Ash Wednesday mark the start of Lent." },
    { id: "ct-q04", lessonId: "christian-festivals", page: 51, type: "single", prompt: "How long is Lent?", options: ["7 days", "12 days", "30 days", "40 days"], answer: [3], explanation: "The 40 days before Easter are known as Lent." },
    { id: "ct-q05", lessonId: "christian-festivals", page: 51, type: "single", prompt: "What is the day before Lent starts called?", options: ["Ash Wednesday", "Good Friday", "Shrove Tuesday", "Mothering Sunday"], answer: [2], explanation: "Shrove Tuesday, or Pancake Day, is the day before Lent. Lent begins on Ash Wednesday." },
    { id: "ct-q06", lessonId: "christian-festivals", page: 51, type: "single", prompt: "On which day does Lent begin?", options: ["Shrove Tuesday", "Ash Wednesday", "Good Friday", "Easter Sunday"], answer: [1], explanation: "Lent begins on Ash Wednesday, when Christians may be marked with an ash cross on the forehead." },
    { id: "ct-q07", lessonId: "christian-festivals", page: 51, type: "single", prompt: "Why were pancakes traditionally made on Shrove Tuesday?", options: ["To celebrate the birth of Jesus", "To use up eggs, fat and milk before fasting", "To mark the end of Ramadan", "To celebrate the new year"], answer: [1], explanation: "Pancakes used up foods such as eggs, fat and milk before the Lent fast." },
    { id: "ct-q07b", lessonId: "christian-festivals", page: 51, type: "truefalse", prompt: "Easter is celebrated only by religious people.", options: ["True", "False"], answer: [1], explanation: "False. Easter is also celebrated by people who are not religious; chocolate Easter eggs are given as a symbol of new life." },
    // other-religious-festivals
    { id: "ct-q08", lessonId: "other-religious-festivals", page: 51, type: "single", prompt: "Which festival is often called the Festival of Lights?", options: ["Hannukah", "Diwali", "Vaisakhi", "Eid al-Fitr"], answer: [1], explanation: "Diwali, celebrated by Hindus and Sikhs, is often called the Festival of Lights." },
    { id: "ct-q09", lessonId: "other-religious-festivals", page: 51, type: "multi", prompt: "Which TWO groups celebrate Diwali?", options: ["Hindus", "Muslims", "Sikhs", "Jews"], answer: [0, 2], explanation: "Diwali is celebrated by Hindus and Sikhs." },
    { id: "ct-q10", lessonId: "other-religious-festivals", page: 51, type: "single", prompt: "Which city is famous for its Diwali celebration?", options: ["Bradford", "Birmingham", "Leicester", "Manchester"], answer: [2], explanation: "The handbook says there is a famous celebration of Diwali in Leicester." },
    { id: "ct-q11", lessonId: "other-religious-festivals", page: 52, type: "single", prompt: "How many days does Hannukah last?", options: ["Three", "Five", "Seven", "Eight"], answer: [3], explanation: "Hannukah lasts eight days; a candle is lit on the menorah each day. Diwali lasts five." },
    { id: "ct-q12", lessonId: "other-religious-festivals", page: 52, type: "single", prompt: "What does Eid al-Fitr celebrate?", options: ["The founding of the Khalsa", "The end of Ramadan", "The prophet Ibrahim's willingness to sacrifice his son", "The victory of good over evil"], answer: [1], explanation: "Eid al-Fitr celebrates the end of Ramadan, when Muslims have fasted for a month." },
    { id: "ct-q13", lessonId: "other-religious-festivals", page: 52, type: "single", prompt: "Vaisakhi celebrates the founding of the Khalsa. Which religion is it part of?", options: ["Hinduism", "Islam", "Sikhism", "Judaism"], answer: [2], explanation: "Vaisakhi (Baisakhi) is a Sikh festival celebrated on 14 April." },
    { id: "ct-q14", lessonId: "other-religious-festivals", page: 52, type: "truefalse", prompt: "In Britain, animals sacrificed for Eid ul Adha must be killed in a slaughterhouse.", options: ["True", "False"], answer: [0], explanation: "True. Many Muslims sacrifice an animal to eat during Eid ul Adha; in Britain this must be done in a slaughterhouse." },
    { id: "ct-q14b", lessonId: "other-religious-festivals", page: 52, type: "single", prompt: "What is a menorah?", options: ["A Sikh place of worship", "A stand of eight candles lit during Hannukah", "A lantern carved from a pumpkin", "A Hindu lamp used at Diwali"], answer: [1], explanation: "During Hannukah a candle is lit each day on a stand of eight candles called a menorah." },
    // popular-days
    { id: "ct-q15", lessonId: "popular-days", page: 52, type: "single", prompt: "What is 31 December called in Scotland?", options: ["Burns Night", "Hogmanay", "St Andrew's Day", "Boxing Day"], answer: [1], explanation: "In Scotland 31 December is called Hogmanay; 2 January is also a public holiday there." },
    { id: "ct-q16", lessonId: "popular-days", page: 52, type: "truefalse", prompt: "In Scotland, 2 January is also a public holiday.", options: ["True", "False"], answer: [0], explanation: "True. For some Scottish people, Hogmanay is a bigger holiday than Christmas." },
    { id: "ct-q17", lessonId: "popular-days", page: 52, type: "single", prompt: "When is Mothering Sunday?", options: ["The third Sunday in June", "The Sunday three weeks before Easter", "The first Sunday in May", "The Sunday after Easter"], answer: [1], explanation: "Mothering Sunday is the Sunday three weeks before Easter. Father's Day is the third Sunday in June." },
    { id: "ct-q18", lessonId: "popular-days", page: 52, type: "single", prompt: "When is Father's Day?", options: ["The third Sunday in June", "The first Sunday in June", "The Sunday three weeks before Easter", "The last Sunday in May"], answer: [0], explanation: "Father's Day is the third Sunday in June." },
    { id: "ct-q19", lessonId: "popular-days", page: 52, type: "single", prompt: "On April Fool's Day, people play jokes until when?", options: ["Midnight", "Midday", "Sunset", "The end of the week"], answer: [1], explanation: "People play jokes on each other until midday on 1 April." },
    { id: "ct-q20", lessonId: "popular-days", page: 52, type: "single", prompt: "Halloween has its roots in a pagan festival marking what?", options: ["The beginning of spring", "The longest day", "The beginning of winter", "The harvest"], answer: [2], explanation: "Halloween, 31 October, has roots in a pagan festival marking the beginning of winter." },
    { id: "ct-q20b", lessonId: "popular-days", page: 52, type: "single", prompt: "When is Valentine's Day?", options: ["14 January", "14 February", "1 March", "14 April"], answer: [1], explanation: "Valentine's Day is 14 February, when lovers exchange cards and gifts. 14 April is Vaisakhi." },
    // remembrance-and-bank-holidays
    { id: "ct-q21", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "Bonfire Night remembers a failed plot in which year?", options: ["1588", "1605", "1666", "1688"], answer: [1], explanation: "In 1605 a group of Catholics led by Guy Fawkes failed in their plan to blow up the Houses of Parliament and kill the Protestant king." },
    { id: "ct-q22", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "Who led the group behind the plot remembered on Bonfire Night?", options: ["Oliver Cromwell", "Guy Fawkes", "Bonnie Prince Charlie", "Robert the Bruce"], answer: [1], explanation: "Guy Fawkes led the Catholic plot of 1605." },
    { id: "ct-q23", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "Where are wreaths laid on Remembrance Day?", options: ["Westminster Abbey", "The Cenotaph in Whitehall", "Trafalgar Square", "Buckingham Palace"], answer: [1], explanation: "Wreaths are laid at the Cenotaph in Whitehall, London, and there is a two-minute silence at 11.00 am." },
    { id: "ct-q24", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "Why is Remembrance Day held on 11 November?", options: ["The Second World War ended that day", "The First World War ended on 11 November 1918", "It is the anniversary of the Battle of the Boyne", "It is the anniversary of the Gunpowder Plot"], answer: [1], explanation: "It originally commemorated the dead of the First World War, which ended on 11 November 1918." },
    { id: "ct-q25", lessonId: "remembrance-and-bank-holidays", page: 53, type: "truefalse", prompt: "Bank holidays have religious significance.", options: ["True", "False"], answer: [1], explanation: "False. Bank holidays are of no religious significance." },
    { id: "ct-q26", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "In Northern Ireland, which anniversary in July is a public holiday?", options: ["The Easter Rising", "The Battle of the Boyne", "The Good Friday Agreement", "St Patrick's Day"], answer: [1], explanation: "The anniversary of the Battle of the Boyne in July is a public holiday in Northern Ireland." },
    { id: "ct-q27", lessonId: "remembrance-and-bank-holidays", page: 53, type: "multi", prompt: "Which TWO are times of year when bank holidays fall, according to the handbook?", options: ["The beginning of May", "The end of October", "August", "Mid-March"], answer: [0, 2], explanation: "Bank holidays fall at the beginning of May, in late May or early June, and in August." },
    { id: "ct-q28", lessonId: "remembrance-and-bank-holidays", page: 53, type: "single", prompt: "Why do people wear poppies for Remembrance Day?", options: ["The poppy is the national flower of England", "Red poppies grew on the battlefields of the First World War", "Poppies bloom in November", "It is the symbol of the Royal Family"], answer: [1], explanation: "The red poppy was the flower found on the battlefields of the First World War." },
  ],

  flags: [
    { page: 51, text: "The handbook says Good Friday and Easter Monday are public holidays. That is true for England, Wales and Northern Ireland, but Easter Monday is not a bank holiday in Scotland." },
    { page: 52, text: "The handbook gives Vaisakhi as 14 April each year. In practice it falls on 13 or 14 April depending on the year. Use 14 April for the test." },
    { page: 52, text: "\"Hannukah\" is the handbook's spelling. The usual spellings are Hanukkah or Chanukah." },
  ],
};
