import type { Unit } from "../types";

/**
 * Unit 3.3 — The Tudors and Stuarts. Handbook (Britizen PDF) § 3.6, pp. 32–38.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const tudorsAndStuarts: Unit = {
  id: "tudors-and-stuarts",
  number: "3.3",
  title: "The Tudors and Stuarts",
  handbook: {
    chapter: 3,
    chapterTitle: "A long and illustrious history",
    section: "3.6",
    pages: [32, 38],
  },
  status: "available",
  dek: "Henry VIII's six wives, the Reformation, Elizabeth I, the Civil War, the Restoration and the Glorious Revolution.",
  heroImageId: "tudors-and-stuarts-elizabeth-i",
  overview: [
    "From Henry VII's victory in 1485 to the Glorious Revolution of 1688, England's kings and queens fought over religion and power. Henry VIII broke with the Church of Rome, his children swung the country between Protestant and Catholic, and Elizabeth I found a balance that made her one of England's most popular monarchs.",
    "Under the Stuarts the struggle moved to Parliament. Charles I's belief in the Divine Right of Kings led to civil war, his execution and England's only period as a republic under Oliver Cromwell. The monarchy was restored in 1660, and the Glorious Revolution of 1688 guaranteed the power of Parliament. Along the way came Shakespeare, the King James Bible, the Great Fire of London, the Royal Society and Isaac Newton.",
  ],
  objectives: [
    "Name Henry VIII's six wives in order and explain why he set up the Church of England.",
    "Describe the Reformation and how Edward VI, Mary I and Elizabeth I each handled religion.",
    "Explain the importance of the Spanish Armada (1588), Drake, Shakespeare and the Elizabethan age.",
    "Describe English rule in Ireland, including the plantations of Ulster.",
    "Explain the causes and course of the Civil War (1642), the execution of Charles I (1649) and the republic under Cromwell.",
    "Describe the Restoration (1660), the Habeas Corpus Act (1679) and the Glorious Revolution (1688).",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "henry-viii",
      title: "Henry VIII and his six wives",
      dek: "Henry VII secures the throne; his son marries six times and breaks with Rome.",
      pages: [32],
      minutes: 7,
      heroImageId: "tudors-and-stuarts-henry-viii",
      recall: {
        question: "Before you read: can you name Henry VIII's six wives in order?",
        answer:
          "Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard and Catherine Parr.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Henry VII secures the Crown",
          pages: [32],
          paragraphs: [
            "After his victory in the Wars of the Roses, Henry VII wanted to make sure England stayed peaceful and his position as king was secure. He deliberately strengthened the central administration of England and reduced the power of the nobles.",
            "He was thrifty and built up the monarchy's financial reserves. When he died, his son Henry VIII continued the policy of centralising power.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "tudors-and-stuarts-henry-vii",
              kind: "portrait",
              caption: "Henry VII, painted in 1505 during his reign by an unknown Netherlandish artist. National Portrait Gallery, London.",
            },
            {
              imageId: "tudors-and-stuarts-henry-viii",
              kind: "portrait",
              caption: "Henry VIII, from the workshop of Hans Holbein the Younger, c. 1537–47.",
            },
          ],
        },
        {
          type: "prose",
          heading: "Henry VIII",
          pages: [32],
          paragraphs: ["Henry VIII was most famous for breaking away from the Church of Rome and for marrying six times."],
        },
        {
          type: "cards",
          heading: "The six wives of Henry VIII",
          cards: [
            {
              id: "ts-catherine-of-aragon",
              title: "1. Catherine of Aragon",
              meta: "Spanish princess · divorced",
              summary: "Mother of Mary, the only one of their children to survive.",
              detail: [
                "Catherine was a Spanish princess. She and Henry had a number of children but only one, Mary, survived.",
                "When Catherine was too old to give him another child, Henry decided to divorce her, hoping another wife would give him a son to be his heir.",
              ],
              page: 32,
              imageId: "tudors-and-stuarts-catherine-of-aragon",
              context: { text: "The miniature shown was painted in her lifetime, about 1525, by Lucas Horenbout." },
            },
            {
              id: "ts-anne-boleyn",
              title: "2. Anne Boleyn",
              meta: "English · executed",
              summary: "Mother of Elizabeth; executed at the Tower of London.",
              detail: [
                "Anne Boleyn was English. She and Henry had one daughter, Elizabeth.",
                "Anne was unpopular in the country and was accused of taking lovers. She was executed at the Tower of London.",
              ],
              page: 32,
              imageId: "tudors-and-stuarts-anne-boleyn",
              context: { text: "The portrait shown is a late 16th-century copy (National Portrait Gallery), probably based on a lost contemporary likeness." },
            },
            {
              id: "ts-jane-seymour",
              title: "3. Jane Seymour",
              meta: "Died after childbirth",
              summary: "Gave Henry the son he wanted, Edward.",
              detail: [
                "Henry married Jane after Anne's execution. She gave Henry the son he wanted, Edward, but died shortly after the birth.",
              ],
              page: 32,
              imageId: "tudors-and-stuarts-jane-seymour",
            },
            {
              id: "ts-anne-of-cleves",
              title: "4. Anne of Cleves",
              meta: "German princess · divorced",
              summary: "Married for political reasons, divorced soon after.",
              detail: ["Anne was a German princess. Henry married her for political reasons but divorced her soon after."],
              page: 32,
              imageId: "tudors-and-stuarts-anne-of-cleves",
            },
            {
              id: "ts-catherine-howard",
              title: "5. Catherine Howard",
              meta: "Cousin of Anne Boleyn · executed",
              summary: "Accused of taking lovers and executed.",
              detail: ["Catherine was a cousin of Anne Boleyn. She was also accused of taking lovers and executed."],
              page: 32,
              imageId: "tudors-and-stuarts-catherine-howard",
              context: {
                text: "No portrait is certainly of Catherine Howard. The miniature shown is traditionally identified as her.",
                verify: "Identification of the sitter is uncertain.",
              },
            },
            {
              id: "ts-catherine-parr",
              title: "6. Catherine Parr",
              meta: "Widow · survived",
              summary: "Married Henry late in his life and survived him.",
              detail: ["Catherine was a widow who married Henry late in his life. She survived him and married again, but died soon after."],
              page: 32,
              imageId: "tudors-and-stuarts-catherine-parr",
            },
          ],
        },
        {
          type: "prose",
          heading: "The Church of England",
          pages: [32],
          paragraphs: [
            "To divorce his first wife Henry needed the approval of the Pope. When the Pope refused, Henry established the Church of England.",
            "In this new Church the king, not the Pope, had the power to appoint bishops and order how people should worship.",
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Henry VII reigned 1485–1509 and Henry VIII 1509–1547. Parliament made Henry VIII Supreme Head of the Church of England in 1534." },
          ],
        },
      ],
      keyFacts: [
        { text: "Henry VII strengthened central administration, reduced the nobles' power and built up royal finances.", page: 32 },
        { text: "Henry VIII continued centralising power; he is famous for breaking from Rome and marrying six times.", page: 32 },
        { text: "Wives in order: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.", page: 32 },
        { text: "Catherine of Aragon → Mary; Anne Boleyn → Elizabeth; Jane Seymour → Edward.", page: 32 },
        { text: "Anne Boleyn and Catherine Howard were executed; Catherine Parr survived Henry.", page: 32 },
        { text: "When the Pope refused a divorce, Henry set up the Church of England, with the king appointing bishops.", page: 32 },
      ],
      mnemonics: [
        {
          title: "Fates of the six wives",
          device: "\"Divorced, beheaded, died; divorced, beheaded, survived.\"",
          explanation: "Catherine of Aragon (divorced), Anne Boleyn (executed), Jane Seymour (died), Anne of Cleves (divorced), Catherine Howard (executed), Catherine Parr (survived).",
        },
        {
          title: "Names in order",
          device: "C-A-J-A-C-C: \"Can A Jolly And Cheerful Cook?\"",
          explanation: "Catherine, Anne, Jane, Anne, Catherine, Catherine. Three Catherines: Aragon first, Howard fifth, Parr last.",
        },
        {
          title: "Who had which child",
          device: "Mary from Spain, Elizabeth from Anne, Edward from Jane.",
          explanation: "Catherine of Aragon (Spanish) was Mary's mother; Anne Boleyn was Elizabeth's; Jane Seymour was Edward's.",
        },
      ],
      checkQuestionIds: ["ts-q01", "ts-q03", "ts-q06"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "reformation",
      title: "The Reformation, Edward VI and Mary",
      dek: "Protestant ideas spread, Wales is united with England, and the Crown swings between faiths.",
      pages: [33],
      minutes: 6,
      heroImageId: "tudors-and-stuarts-edward-vi",
      recall: {
        question: "Before you read: which Tudor monarch was known as 'Bloody Mary', and why?",
        answer: "Mary I, a devout Catholic who persecuted Protestants.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Reformation",
          pages: [33],
          paragraphs: [
            "At the same time the Reformation was happening across Europe. It was a movement against the authority of the Pope and the ideas and practices of the Roman Catholic Church. The Protestants formed their own churches.",
            "Protestants read the Bible in their own languages instead of Latin; they did not pray to saints or at shrines; and they believed a person's own relationship with God mattered more than submitting to the authority of the Church.",
            "Protestant ideas gradually gained strength in England, Wales and Scotland during the 16th century.",
          ],
        },
        {
          type: "cards",
          heading: "What Protestants believed",
          cards: [
            { id: "ts-prot-bible", title: "The Bible in their own language", summary: "Not in Latin.", detail: ["Protestants read the Bible in their own languages instead of in Latin."], page: 33 },
            { id: "ts-prot-saints", title: "No saints or shrines", summary: "They did not pray to saints or at shrines.", detail: ["Protestants did not pray to saints or at shrines."], page: 33 },
            { id: "ts-prot-god", title: "A personal relationship with God", summary: "More important than the Church's authority.", detail: ["A person's own relationship with God was more important than submitting to the authority of the Church."], page: 33 },
          ],
        },
        {
          type: "prose",
          heading: "Ireland and Wales",
          pages: [33],
          paragraphs: [
            "In Ireland, English attempts to impose Protestantism, together with efforts to introduce the English system of laws about inheriting land, led to rebellion by the Irish chieftains, and much brutal fighting followed.",
            "During the reign of Henry VIII, Wales became formally united with England by the Act for the Government of Wales. The Welsh sent representatives to the House of Commons and the Welsh legal system was reformed.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The PDF's summary page (p. 97) says the Act for the Government of Wales was passed under Henry VII. The main text (p. 33) correctly says it was during the reign of Henry VIII. Learn Henry VIII.",
            },
          ],
        },
        {
          type: "prose",
          heading: "Edward VI and Mary I",
          pages: [33],
          paragraphs: [
            "Henry VIII was succeeded by his son Edward VI, who was strongly Protestant. During his reign the Book of Common Prayer was written for use in the Church of England. A version of it is still used in some churches today.",
            "Edward died at the age of 15 after ruling for just over six years, and his half-sister Mary became queen. Mary was a devout Catholic who persecuted Protestants, so she became known as 'Bloody Mary'.",
            "Mary also died after a short reign. The next monarch was her half-sister Elizabeth, the daughter of Henry VIII and Anne Boleyn.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "tudors-and-stuarts-edward-vi", kind: "portrait", caption: "Edward VI, c. 1550, attributed to William Scrots." },
            { imageId: "tudors-and-stuarts-mary-i", kind: "painting", caption: "Mary I, painted by Antonis Mor in 1554. Museo del Prado, Madrid." },
            { imageId: "tudors-and-stuarts-prayer-book", kind: "manuscript", caption: "Title page of the first Book of Common Prayer, 1549." },
          ],
        },
        {
          type: "sequence",
          heading: "Henry VIII's children on the throne",
          page: 33,
          steps: [
            { label: "Edward VI", detail: "Son of Jane Seymour. Strongly Protestant; Book of Common Prayer. Died aged 15 after just over six years." },
            { label: "Mary I", detail: "Daughter of Catherine of Aragon. Devout Catholic; persecuted Protestants ('Bloody Mary'). Short reign." },
            { label: "Elizabeth I", detail: "Daughter of Anne Boleyn. Protestant; re-established the Church of England." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Edward VI reigned 1547–1553, Mary I 1553–1558. The first Book of Common Prayer appeared in 1549, edited by Archbishop Thomas Cranmer." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Reformation was a movement across Europe against the authority of the Pope and the Roman Catholic Church.", page: 33 },
        { text: "Protestants read the Bible in their own language, did not pray to saints or at shrines, and valued a personal relationship with God.", page: 33 },
        { text: "In Ireland, attempts to impose Protestantism led to rebellion by Irish chieftains and brutal fighting.", page: 33 },
        { text: "Under Henry VIII, the Act for the Government of Wales united Wales with England; Welsh MPs sat in the Commons.", page: 33 },
        { text: "Edward VI was strongly Protestant; the Book of Common Prayer was written in his reign. He died aged 15.", page: 33 },
        { text: "Mary I, a devout Catholic, persecuted Protestants and was called 'Bloody Mary'.", page: 33 },
      ],
      mnemonics: [
        {
          title: "Protestant, Catholic, Protestant",
          device: "E-M-E: Edward (P), Mary (C), Elizabeth (P).",
          explanation: "Henry VIII's three children ruled in that order, and the Crown's religion swung back and forth.",
        },
        {
          title: "Wales under the Eighth",
          device: "Henry VIII, not VII, joined Wales by Act.",
          explanation: "The Act for the Government of Wales came in Henry VIII's reign. Do not be misled by the PDF summary.",
        },
      ],
      checkQuestionIds: ["ts-q08", "ts-q10", "ts-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "elizabeth-and-mary",
      title: "Elizabeth I and Mary, Queen of Scots",
      dek: "A religious balance, the Spanish Armada, Scotland's Reformation and a captive queen.",
      pages: [34, 35],
      minutes: 7,
      heroImageId: "tudors-and-stuarts-elizabeth-i",
      recall: {
        question: "Before you read: in which year was the Spanish Armada defeated?",
        answer: "1588, in the reign of Elizabeth I.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Elizabeth I",
          pages: [34],
          paragraphs: [
            "Queen Elizabeth I was a Protestant. She re-established the Church of England as the official Church in England. Everyone had to attend their local church, and there were laws about the type of religious services and prayers allowed, but Elizabeth did not ask about people's real beliefs.",
            "She found a balance between the views of Catholics and the more extreme Protestants, and so avoided any serious religious conflict within England.",
            "Elizabeth became one of the most popular monarchs in English history, particularly after 1588, when the English defeated the Spanish Armada: a large fleet of ships sent by Spain to conquer England and restore Catholicism.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "tudors-and-stuarts-elizabeth-i",
              kind: "portrait",
              caption: "The Armada Portrait of Elizabeth I, c. 1588. Behind her, the Spanish fleet is shown in the windows.",
            },
            {
              imageId: "tudors-and-stuarts-armada",
              kind: "painting",
              caption: "English fireships launched against the Spanish Armada, 1588. Late 16th-century painting, Netherlandish school.",
            },
          ],
        },
        {
          type: "prose",
          heading: "The Reformation in Scotland",
          pages: [34],
          paragraphs: [
            "Scotland had also been strongly influenced by Protestant ideas. In 1560 the mainly Protestant Scottish Parliament abolished the authority of the Pope in Scotland, and Roman Catholic services became illegal.",
            "A Protestant Church of Scotland with an elected leadership was established but, unlike in England, it was not a state Church.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The PDF drops a word here: it reads \"a Protestant Church of Scotland with an leadership\". The official handbook says an elected leadership.",
              verify: "Missing word restored from the official 3rd edition wording.",
            },
          ],
        },
        {
          type: "cards",
          heading: "Mary, Queen of Scots",
          cards: [
            {
              id: "ts-mary-queen-of-scots",
              title: "Mary Stuart (Mary, Queen of Scots)",
              meta: "Catholic queen of Scotland · Elizabeth I's cousin",
              summary: "Fled to England, was held prisoner for 20 years and finally executed.",
              detail: [
                "Mary became queen when she was only a week old, after her father died. Much of her childhood was spent in France.",
                "Back in Scotland she was at the centre of a power struggle. When her husband was murdered she was suspected of involvement and fled to England, giving her throne to her Protestant son, James VI of Scotland.",
                "Mary hoped her cousin Elizabeth I would help her, but Elizabeth suspected her of wanting the English throne and kept her prisoner for 20 years. Mary was eventually executed, accused of plotting against Elizabeth.",
              ],
              page: 35,
              imageId: "tudors-and-stuarts-mary-queen-of-scots",
            },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Elizabeth I reigned 1558–1603. Mary, Queen of Scots fled to England in 1568 and was executed in 1587." },
          ],
        },
      ],
      keyFacts: [
        { text: "Elizabeth I, a Protestant, re-established the Church of England as the official Church.", page: 34 },
        { text: "She balanced Catholic and extreme Protestant views and avoided serious religious conflict.", page: 34 },
        { text: "1588: the English defeated the Spanish Armada, sent by Spain to conquer England and restore Catholicism.", page: 34 },
        { text: "1560: the Scottish Parliament abolished the Pope's authority; the Church of Scotland was not a state Church.", page: 34 },
        { text: "Mary, Queen of Scots, a Catholic, fled to England and gave her throne to her son James VI.", page: 35 },
        { text: "Elizabeth kept Mary prisoner for 20 years; Mary was executed, accused of plotting against her.", page: 35 },
      ],
      mnemonics: [
        {
          title: "1588",
          device: "\"Fifteen-eighty-eight, the Armada met its fate.\"",
          explanation: "The defeat of the Spanish Armada made Elizabeth I hugely popular.",
        },
        {
          title: "1560: Scotland goes Protestant",
          device: "Scotland's Reformation came 28 years before the Armada.",
          explanation: "In 1560 the Scottish Parliament abolished the Pope's authority. Unlike the Church of England, the Church of Scotland was not a state Church.",
        },
      ],
      checkQuestionIds: ["ts-q14", "ts-q16", "ts-q18"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "exploration-and-shakespeare",
      title: "Exploration, poetry and drama",
      dek: "Drake's Golden Hind, the first American colonies and William Shakespeare.",
      pages: [35, 36],
      minutes: 7,
      heroImageId: "tudors-and-stuarts-shakespeare",
      recall: {
        question: "Before you read: where was William Shakespeare born?",
        answer: "Stratford-upon-Avon, England.",
      },
      blocks: [
        {
          type: "prose",
          heading: "An age of patriotism and exploration",
          pages: [35],
          paragraphs: [
            "The Elizabethan period was a time of growing patriotism: a feeling of pride in being English. English explorers sought new trade routes and tried to expand British trade into the Spanish colonies in the Americas.",
            "In Elizabeth I's time, English settlers first began to colonise the eastern coast of America. This colonisation greatly increased in the next century, particularly by people who disagreed with the religious views of the next two kings.",
          ],
        },
        {
          type: "cards",
          heading: "Sir Francis Drake",
          cards: [
            {
              id: "ts-drake",
              title: "Sir Francis Drake",
              meta: "Elizabethan sea commander",
              summary: "Helped defeat the Armada; his Golden Hind sailed around the world.",
              detail: [
                "Drake was one of the commanders in the defeat of the Spanish Armada and one of the founders of England's naval tradition.",
                "His ship, the Golden Hind, was one of the first to sail right around ('circumnavigate') the world.",
              ],
              page: 35,
              imageId: "tudors-and-stuarts-drake",
              context: { text: "Drake's voyage round the world took place in 1577–80, before the Armada of 1588." },
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-golden-hind",
            kind: "photograph",
            caption: "A modern full-size replica of the Golden Hind at Brixham, Devon. The original ship does not survive.",
          },
        },
        {
          type: "prose",
          heading: "Poetry and drama",
          pages: [35],
          paragraphs: [
            "The Elizabethan period is also remembered for the richness of its poetry and drama, especially the plays and poems of William Shakespeare.",
          ],
        },
        {
          type: "cards",
          heading: "William Shakespeare (1564–1616)",
          cards: [
            {
              id: "ts-shakespeare",
              title: "William Shakespeare",
              meta: "1564–1616 · born in Stratford-upon-Avon",
              summary: "Playwright and actor; regarded by many as the greatest playwright of all time.",
              detail: [
                "Shakespeare was a playwright and actor who wrote many poems and plays. His most famous plays include A Midsummer Night's Dream, Hamlet, Macbeth and Romeo and Juliet.",
                "He dramatised significant events from the past but did not focus only on kings and queens: he was one of the first to portray ordinary English men and women.",
                "He had a great influence on the English language and invented many words still common today. His plays and poems are still performed and studied in Britain and other countries.",
              ],
              page: 36,
              imageId: "tudors-and-stuarts-shakespeare",
              context: { text: "The Chandos portrait, c. 1600–10, is thought to be the only portrait of Shakespeare that may have been painted from life." },
            },
          ],
        },
        {
          type: "sequence",
          heading: "Lines still quoted today",
          page: 36,
          steps: [
            { label: "\"Once more unto the breach\"", detail: "Henry V" },
            { label: "\"To be or not to be\"", detail: "Hamlet" },
            { label: "\"A rose by any other name\"", detail: "Romeo and Juliet" },
            { label: "\"All the world's a stage\"", detail: "As You Like It" },
            { label: "\"The darling buds of May\"", detail: "Sonnet 18 (Shall I Compare Thee To a Summer's Day)" },
          ],
        },
        {
          type: "prose",
          heading: "The Globe",
          pages: [36],
          paragraphs: ["The Globe Theatre in London is a modern copy of the theatres in which Shakespeare's plays were first performed."],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "tudors-and-stuarts-globe",
            kind: "photograph",
            caption: "Shakespeare's Globe on the south bank of the Thames, London: a modern reconstruction opened in 1997.",
          },
        },
        {
          type: "map",
          heading: "Shakespeare on the map",
          placeIds: ["tudors-and-stuarts-stratford", "tudors-and-stuarts-globe"],
        },
      ],
      keyFacts: [
        { text: "The Elizabethan period was a time of growing patriotism and of explorers seeking new trade routes.", page: 35 },
        { text: "Sir Francis Drake helped defeat the Armada and helped found England's naval tradition.", page: 35 },
        { text: "Drake's ship the Golden Hind was one of the first to sail around (circumnavigate) the world.", page: 35 },
        { text: "In Elizabeth I's time English settlers first began to colonise the eastern coast of America.", page: 35 },
        { text: "William Shakespeare (1564–1616) was born in Stratford-upon-Avon; a playwright and actor.", page: 36 },
        { text: "Famous plays: A Midsummer Night's Dream, Hamlet, Macbeth, Romeo and Juliet.", page: 36 },
        { text: "The Globe Theatre in London is a modern copy of the theatres where his plays were first performed.", page: 36 },
      ],
      mnemonics: [
        {
          title: "Which play is that line from?",
          device: "Breach = Henry V (battle); Be = Hamlet (doubt); Rose = Romeo (love); Stage = As You Like It; Buds = Sonnet 18.",
          explanation: "Link each line to the mood of its play: war, doubt, love, life, and summer.",
        },
        {
          title: "Shakespeare's dates",
          device: "1564 to 1616: born '64, died '16.",
          explanation: "He was born in Stratford-upon-Avon during Elizabeth I's reign and died under James I.",
        },
      ],
      checkQuestionIds: ["ts-q20", "ts-q22", "ts-q24"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "james-and-ireland",
      title: "James VI and I, Ireland and the Divine Right",
      dek: "Two crowns on one head, the King James Bible, the plantations of Ulster and a clash with Parliament.",
      pages: [36],
      minutes: 6,
      heroImageId: "tudors-and-stuarts-james-i",
      recall: {
        question: "Before you read: who inherited the English throne when Elizabeth I died in 1603?",
        answer: "Her cousin James VI of Scotland, who became James I of England, Wales and Ireland.",
      },
      blocks: [
        {
          type: "prose",
          heading: "James VI and I",
          pages: [36],
          paragraphs: [
            "Elizabeth I never married and had no children to inherit her throne. When she died in 1603 her heir was her cousin James VI of Scotland.",
            "He became King James I of England, Wales and Ireland, but Scotland remained a separate country.",
          ],
        },
        {
          type: "cards",
          heading: "The King James Bible",
          cards: [
            {
              id: "ts-kjv",
              title: "The King James Bible",
              meta: "Also called the Authorised Version",
              summary: "A new English translation of the Bible made in James's reign.",
              detail: [
                "One achievement of King James's reign was a new translation of the Bible into English, known as the 'King James Version' or the 'Authorised Version'.",
                "It was not the first English Bible, but it continues to be used in many Protestant churches today.",
              ],
              page: 36,
              imageId: "tudors-and-stuarts-kjv",
              context: { text: "It was published in 1611." },
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-james-i",
            kind: "portrait",
            caption: "James VI and I, c. 1605, attributed to John de Critz.",
          },
        },
        {
          type: "prose",
          heading: "Ireland",
          pages: [36],
          paragraphs: [
            "Ireland was an almost completely Catholic country. Henry VII and Henry VIII had extended English control outside the Pale and established English authority over the whole country. Henry VIII took the title 'King of Ireland'. English laws were introduced, and local leaders were expected to follow the instructions of the Lord Lieutenants in Dublin.",
            "During the reigns of Elizabeth I and James I many people in Ireland opposed rule by the Protestant government in England, and there were a number of rebellions.",
            "The English government encouraged Scottish and English Protestants to settle in Ulster, the northern province of Ireland, taking over land from Catholic landholders. These settlements were known as plantations. Many settlers came from south-west Scotland, and other land was given to companies based in London.",
            "James later organised similar plantations in several other parts of Ireland. This had serious long-term consequences for the history of England, Scotland and Ireland.",
          ],
        },
        { type: "map", heading: "Ireland on the map", placeIds: ["tudors-and-stuarts-ulster", "tudors-and-stuarts-dublin"], caption: "The plantations began in Ulster, the northern province. English rule was directed from Dublin." },
        {
          type: "prose",
          heading: "The rise of Parliament",
          pages: [36],
          paragraphs: [
            "Elizabeth I was very skilled at managing Parliament. She balanced her wishes against those of the House of Lords and the House of Commons, which was increasingly Protestant in its views.",
            "James I and his son Charles I were less skilled politically. Both believed in the 'Divine Right of Kings': the idea that the king was directly appointed by God to rule, and should be able to act without seeking Parliament's approval.",
            "When Charles I inherited the thrones of England, Wales, Ireland and Scotland he tried to rule by this principle. When Parliament would not agree with his religious and foreign policies he tried to rule without it. For 11 years he found ways to raise money without Parliament's approval, but trouble in Scotland eventually forced him to recall Parliament.",
          ],
        },
      ],
      keyFacts: [
        { text: "1603: Elizabeth I died childless; James VI of Scotland became James I of England, Wales and Ireland.", page: 36 },
        { text: "Scotland remained a separate country.", page: 36 },
        { text: "The King James Version (Authorised Version) of the Bible is still used in many Protestant churches.", page: 36 },
        { text: "Henry VIII took the title 'King of Ireland'; local leaders followed the Lord Lieutenants in Dublin.", page: 36 },
        { text: "Plantations: Scottish and English Protestants settled in Ulster on land taken from Catholic landholders.", page: 36 },
        { text: "James I and Charles I believed in the Divine Right of Kings: the king appointed by God to rule.", page: 36 },
        { text: "Charles I ruled without Parliament for 11 years until trouble in Scotland forced him to recall it.", page: 36 },
      ],
      mnemonics: [
        {
          title: "VI and I",
          device: "One man, two numbers: sixth in Scotland, first in England.",
          explanation: "James VI of Scotland became James I of England, Wales and Ireland in 1603. The two countries kept separate parliaments.",
        },
        {
          title: "Plantations",
          device: "Protestants were 'planted' in Ulster.",
          explanation: "Settlers from south-west Scotland and England, and London companies, took over land from Catholic landholders.",
        },
      ],
      checkQuestionIds: ["ts-q27", "ts-q29", "ts-q31"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 6
    {
      id: "civil-war-and-republic",
      title: "Civil war and the republic",
      dek: "Cavaliers and Roundheads, the execution of Charles I and Oliver Cromwell's Commonwealth.",
      pages: [36, 37],
      minutes: 8,
      heroImageId: "tudors-and-stuarts-cromwell",
      recall: {
        question: "Before you read: in what year was Charles I executed, and what did England become?",
        answer: "1649. England declared itself a republic, called the Commonwealth.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The road to war",
          pages: [36],
          paragraphs: [
            "Charles I wanted the worship of the Church of England to include more ceremony and introduced a revised Prayer Book. When he tried to impose it on the Presbyterian Church in Scotland, there was serious unrest and a Scottish army was formed.",
            "Charles could not pay for his own army without Parliament, so in 1640 he recalled Parliament to ask for funds. Many in Parliament were Puritans: Protestants who advocated strict and simple religious doctrine and worship. They disliked the king's religious views and his reforms of the Church of England, and refused him money even after the Scottish army invaded England.",
            "Another rebellion began in Ireland, because Irish Roman Catholics feared the growing power of the Puritans. Parliament used this to demand control of the English army, which would have transferred substantial power from the king to Parliament.",
          ],
        },
        {
          type: "prose",
          heading: "The king enters the Commons",
          pages: [36, 37],
          paragraphs: [
            "In response, Charles I entered the House of Commons and tried to arrest five parliamentary leaders, but they had been warned and were not there. No monarch has set foot in the Commons since.",
            "Civil war between the king and Parliament could not now be avoided, and it began in 1642. The country split between those who supported the king, the Cavaliers, and those who supported Parliament, the Roundheads.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-charles-i",
            kind: "painting",
            caption: "Charles I in three positions, painted by Anthony van Dyck, 1635–36. Royal Collection.",
          },
        },
        {
          type: "prose",
          heading: "Parliament wins",
          pages: [37],
          paragraphs: [
            "The king's army was defeated at the Battles of Marston Moor and Naseby. By 1646 it was clear that Parliament had won. Charles was held prisoner by the parliamentary army. He was still unwilling to reach any agreement with Parliament, and in 1649 he was executed.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-execution",
            kind: "illustration",
            caption: "The execution of Charles I outside the Banqueting House, Whitehall, in a contemporary print of 1649.",
          },
        },
        {
          type: "prose",
          heading: "The Commonwealth",
          pages: [37],
          paragraphs: [
            "England declared itself a republic, called the Commonwealth, with no monarch. For a time it was not clear how the country would be governed, and the army was in control.",
            "One of its generals, Oliver Cromwell, was sent to Ireland, where the revolt that began in 1641 was still continuing and there was still a Royalist army. Cromwell established the authority of the English Parliament, but with such violence that he remains a controversial figure in Ireland today.",
            "The Scots had not agreed to the execution of Charles I and declared his son Charles II king. He was crowned king of Scotland and led a Scottish army into England. Cromwell defeated it at the Battles of Dunbar and Worcester. Charles II escaped from Worcester, famously hiding in an oak tree on one occasion, and eventually fled to Europe. Parliament now controlled Scotland as well as England and Wales.",
          ],
        },
        {
          type: "cards",
          heading: "Oliver Cromwell",
          cards: [
            {
              id: "ts-cromwell",
              title: "Oliver Cromwell",
              meta: "General · Lord Protector until his death in 1658",
              summary: "Leader of the republic, given the title Lord Protector.",
              detail: [
                "After his campaign in Ireland and his victory over Charles II at Worcester, Cromwell was recognised as leader of the new republic and given the title Lord Protector.",
                "He ruled until his death in 1658. His son Richard became Lord Protector but could not control the army or the government.",
              ],
              page: 37,
              imageId: "tudors-and-stuarts-cromwell",
            },
          ],
        },
        {
          type: "prose",
          heading: "The end of the republic",
          pages: [37],
          paragraphs: [
            "Britain had been a republic for 11 years, but without Oliver Cromwell there was no clear leader or system of government. Many people wanted stability and began to talk about the need for a king.",
          ],
        },
        {
          type: "map",
          heading: "The civil war on the map",
          placeIds: ["tudors-and-stuarts-marston-moor", "tudors-and-stuarts-naseby", "tudors-and-stuarts-dunbar", "tudors-and-stuarts-worcester", "tudors-and-stuarts-commons"],
          caption: "Marston Moor and Naseby: the king's army defeated. Dunbar and Worcester: Cromwell beats Charles II's Scottish army.",
        },
        {
          type: "sequence",
          heading: "From civil war to republic",
          page: 37,
          steps: [
            { label: "1640", detail: "Charles I recalls Parliament for money; Puritan MPs refuse." },
            { label: "1641", detail: "Rebellion begins in Ireland." },
            { label: "1642", detail: "Charles tries to arrest five MPs; civil war begins. Cavaliers v Roundheads." },
            { label: "1646", detail: "After Marston Moor and Naseby, Parliament has clearly won." },
            { label: "1649", detail: "Charles I executed; England becomes a republic, the Commonwealth." },
            { label: "Dunbar, Worcester", detail: "Cromwell defeats Charles II's Scottish army; Charles hides in an oak tree and flees." },
            { label: "1658", detail: "Lord Protector Oliver Cromwell dies; his son Richard cannot govern." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The PDF's summary page (p. 98) gives \"1640: Beginning of English Civil War\". The main text (p. 37) says the civil war began in 1642; 1640 is when Charles recalled Parliament. Learn 1642 for the start of the war." },
            { text: "The summary also dates Cromwell as Lord Protector \"circa 1640s–1650s\". He held the title from 1653 until his death in 1658 (the handbook gives only 1658)." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Marston Moor was fought in 1644 and Naseby in 1645; Dunbar in 1650 and Worcester in 1651. The five members were sought in January 1642." },
          ],
        },
      ],
      keyFacts: [
        { text: "Charles I tried to impose a revised Prayer Book on the Presbyterian Church in Scotland, causing unrest.", page: 36 },
        { text: "1640: Charles recalled Parliament for money; its many Puritans refused.", page: 36 },
        { text: "Charles tried to arrest five MPs in the Commons; no monarch has set foot in the Commons since.", page: 37 },
        { text: "1642: civil war began: Cavaliers (king) v Roundheads (Parliament).", page: 37 },
        { text: "The king lost at Marston Moor and Naseby; by 1646 Parliament had won; Charles I was executed in 1649.", page: 37 },
        { text: "England became a republic called the Commonwealth.", page: 37 },
        { text: "Cromwell defeated Charles II at Dunbar and Worcester; Charles hid in an oak tree and fled to Europe.", page: 37 },
        { text: "Cromwell was Lord Protector until his death in 1658; his son Richard could not govern.", page: 37 },
      ],
      mnemonics: [
        {
          title: "Cavaliers and Roundheads",
          device: "Cavaliers for the Crown; Roundheads for the Room (the Commons).",
          explanation: "Cavaliers supported the king; Roundheads supported Parliament.",
        },
        {
          title: "42, 46, 49",
          device: "War starts '42, won by '46, king dies '49.",
          explanation: "Civil war began in 1642, Parliament had won by 1646, Charles I was executed in 1649.",
        },
        {
          title: "M and N, then D and W",
          device: "Marston Moor and Naseby beat the king; Dunbar and Worcester beat his son.",
          explanation: "The first pair defeated Charles I's army. The second pair were Cromwell's victories over Charles II's Scottish army.",
        },
      ],
      checkQuestionIds: ["ts-q34", "ts-q36", "ts-q38"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 7
    {
      id: "restoration",
      title: "The Restoration",
      dek: "Charles II returns, plague and fire strike London, Habeas Corpus, the Royal Society and Newton.",
      pages: [38],
      minutes: 7,
      heroImageId: "tudors-and-stuarts-great-fire",
      recall: {
        question: "Before you read: which architect designed the new St Paul's Cathedral after the Great Fire of London?",
        answer: "Sir Christopher Wren.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Charles II returns",
          pages: [38],
          paragraphs: [
            "In May 1660 Parliament invited Charles II back from exile in the Netherlands. He was crowned King Charles II of England, Wales, Scotland and Ireland.",
            "Charles made it clear he had 'no wish to go on his travels again'. He understood that he could not always do as he wished and would sometimes need to reach agreement with Parliament. Generally, Parliament supported his policies.",
            "The Church of England again became the established official Church. Both Roman Catholics and Puritans were kept out of power.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-charles-ii",
            kind: "portrait",
            caption: "Charles II in his coronation robes, by John Michael Wright, c. 1661–62. Royal Collection.",
          },
        },
        {
          type: "prose",
          heading: "Plague and fire",
          pages: [38],
          paragraphs: [
            "In 1665 there was a major outbreak of plague in London. Thousands died, especially in poorer areas.",
            "The following year a great fire destroyed much of the city, including many churches and St Paul's Cathedral. London was rebuilt with a new St Paul's, designed by the famous architect Sir Christopher Wren.",
            "Samuel Pepys wrote about these events in a diary that was later published and is still read today.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "tudors-and-stuarts-great-fire", kind: "painting", caption: "The Great Fire of London, painted by an unknown Dutch artist, c. 1666. Museum of London." },
            { imageId: "tudors-and-stuarts-st-pauls", kind: "photograph", caption: "The dome of Sir Christopher Wren's St Paul's Cathedral, London." },
            { imageId: "tudors-and-stuarts-pepys", kind: "portrait", caption: "Samuel Pepys, painted by John Hayls in 1666. National Portrait Gallery, London." },
          ],
        },
        {
          type: "prose",
          heading: "The Habeas Corpus Act, 1679",
          pages: [38],
          paragraphs: [
            "The Habeas Corpus Act became law in 1679. It is a very important piece of legislation that remains relevant today.",
            "Habeas corpus is Latin for 'you must present the person in court'. The Act guaranteed that no one could be held prisoner unlawfully: every prisoner has a right to a court hearing.",
          ],
        },
        {
          type: "prose",
          heading: "The Royal Society",
          pages: [38],
          paragraphs: [
            "Charles II was interested in science. During his reign the Royal Society was formed to promote 'natural knowledge'. It is the oldest surviving scientific society in the world.",
            "Among its early members were Sir Edmund Halley, who successfully predicted the return of the comet now called Halley's Comet, and Sir Isaac Newton.",
          ],
        },
        {
          type: "cards",
          heading: "Scientists",
          cards: [
            {
              id: "ts-newton",
              title: "Isaac Newton",
              meta: "1643–1727 · born in Lincolnshire",
              summary: "Showed how gravity applied to the whole universe.",
              detail: [
                "Born in Lincolnshire, eastern England, Newton first became interested in science when he studied at Cambridge University, and became an important figure in the field.",
                "His most famous published work was Philosophiae Naturalis Principia Mathematica ('Mathematical Principles of Natural Philosophy'), which showed how gravity applied to the whole universe.",
                "He also discovered that white light is made up of the colours of the rainbow. Many of his discoveries are still important for modern science.",
              ],
              page: 38,
              imageId: "tudors-and-stuarts-newton",
              context: { text: "The portrait is by Godfrey Kneller, 1689. The Principia was published in 1687." },
            },
            {
              id: "ts-halley",
              title: "Sir Edmund Halley",
              meta: "Early member of the Royal Society",
              summary: "Predicted the return of Halley's Comet.",
              detail: ["Halley successfully predicted the return of the comet now called Halley's Comet."],
              page: 38,
              imageId: "tudors-and-stuarts-halley",
            },
          ],
        },
        {
          type: "map",
          heading: "Restoration places",
          placeIds: ["tudors-and-stuarts-st-pauls", "tudors-and-stuarts-woolsthorpe", "tudors-and-stuarts-cambridge"],
          caption: "Newton was born in Lincolnshire and studied at Cambridge.",
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The Great Fire began in September 1666. The Royal Society received its royal charter in 1662, having first met in 1660." },
          ],
        },
      ],
      keyFacts: [
        { text: "May 1660: Parliament invited Charles II back from exile in the Netherlands: the Restoration.", page: 38 },
        { text: "The Church of England again became the established Church; Catholics and Puritans were kept out of power.", page: 38 },
        { text: "1665: a major outbreak of plague in London. The following year a great fire destroyed much of the city.", page: 38 },
        { text: "Sir Christopher Wren designed the new St Paul's Cathedral; Samuel Pepys described these events in his diary.", page: 38 },
        { text: "1679: the Habeas Corpus Act guaranteed that no one could be held prisoner unlawfully.", page: 38 },
        { text: "The Royal Society, the oldest surviving scientific society in the world, was formed under Charles II.", page: 38 },
        { text: "Isaac Newton (1643–1727): the Principia showed gravity applied to the whole universe; white light is made of the colours of the rainbow.", page: 38 },
      ],
      mnemonics: [
        {
          title: "Plague then fire",
          device: "'65 plague, '66 fire: first the sickness, then the flames.",
          explanation: "The Great Plague hit London in 1665; the fire came the following year.",
        },
        {
          title: "Habeas corpus",
          device: "\"Have the body\": bring the prisoner to court.",
          explanation: "The Latin means 'you must present the person in court'. The Act dates from 1679.",
        },
        {
          title: "Wren rebuilt, Pepys wrote",
          device: "W for Wren and Walls; P for Pepys and Pen.",
          explanation: "Wren designed the new St Paul's; Pepys recorded the plague and fire in his diary.",
        },
      ],
      checkQuestionIds: ["ts-q41", "ts-q44", "ts-q46"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 8
    {
      id: "glorious-revolution",
      title: "A Catholic king and the Glorious Revolution",
      dek: "James II, William of Orange, the Boyne, Glencoe and the Jacobites.",
      pages: [38],
      minutes: 6,
      heroImageId: "tudors-and-stuarts-william-iii",
      recall: {
        question: "Before you read: why was the 1688 revolution called 'glorious'?",
        answer: "Because there was no fighting in England and because it guaranteed the power of Parliament.",
      },
      blocks: [
        {
          type: "prose",
          heading: "A Catholic king",
          pages: [38],
          paragraphs: [
            "Charles II had no legitimate children. When he died in 1685 his brother James, a Roman Catholic, became King James II in England, Wales and Ireland and King James VII of Scotland.",
            "James favoured Roman Catholics and allowed them to be army officers, which an Act of Parliament had forbidden. He did not seek agreement with Parliament and arrested some Church of England bishops. People feared he wanted to make England Catholic again.",
            "His heirs were his two daughters, both firmly Protestant, so people expected a Protestant monarch again soon. Then James's wife had a son, and suddenly it seemed the next monarch would not be Protestant after all.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-james-ii",
            kind: "portrait",
            caption: "James II, painted by Godfrey Kneller in 1684. National Portrait Gallery, London.",
          },
        },
        {
          type: "prose",
          heading: "The Glorious Revolution, 1688",
          pages: [38],
          paragraphs: [
            "James II's elder daughter Mary was married to her cousin William of Orange, the Protestant ruler of the Netherlands. In 1688 important Protestants in England asked William to invade England and proclaim himself king.",
            "When William reached England there was no resistance. James fled to France, and William took the throne as William III in England, Wales and Ireland and William II of Scotland. William ruled jointly with Mary.",
            "The event was later called the 'Glorious Revolution' because there was no fighting in England and because it guaranteed the power of Parliament, ending the threat of a monarch ruling on his or her own as he or she wished.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "tudors-and-stuarts-william-iii",
            kind: "painting",
            caption: "William III (William of Orange), painted by Godfrey Kneller.",
          },
        },
        {
          type: "prose",
          heading: "Ireland: the Battle of the Boyne",
          pages: [38],
          paragraphs: [
            "James II wanted to regain the throne and invaded Ireland with the help of a French army. William defeated him at the Battle of the Boyne in Ireland in 1690, an event still celebrated by some in Northern Ireland today.",
            "William re-conquered Ireland and James fled back to France. Many restrictions were placed on the Roman Catholic Church in Ireland, and Irish Catholics could not take part in government.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "tudors-and-stuarts-boyne",
            kind: "painting",
            caption: "The Battle of the Boyne, 1690, painted by Jan Wyck (1645–1700). National Army Museum.",
          },
        },
        {
          type: "prose",
          heading: "Scotland: Killiecrankie and Glencoe",
          pages: [38],
          paragraphs: [
            "There was also support for James in Scotland. An armed rebellion in his support was quickly defeated at Killiecrankie.",
            "All Scottish clans had to accept William as king formally by taking an oath. The MacDonalds of Glencoe were late in taking the oath and were all killed. The memory of this massacre meant some Scots distrusted the new government.",
            "Some continued to believe James was the rightful king, particularly in Scotland. Some joined him in exile in France; others were secret supporters. James's supporters became known as Jacobites.",
          ],
        },
        {
          type: "map",
          heading: "After 1688 on the map",
          placeIds: ["tudors-and-stuarts-boyne", "tudors-and-stuarts-killiecrankie", "tudors-and-stuarts-glencoe"],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Killiecrankie was fought in 1689 and the Glencoe massacre took place in February 1692. 'Jacobite' comes from Jacobus, Latin for James." },
          ],
        },
      ],
      keyFacts: [
        { text: "1685: Charles II died without legitimate children; his Catholic brother became James II (James VII of Scotland).", page: 38 },
        { text: "James II favoured Catholics and arrested bishops; the birth of his son threatened a Catholic succession.", page: 38 },
        { text: "1688: Protestants invited William of Orange, husband of James's daughter Mary, to invade. There was no resistance.", page: 38 },
        { text: "William III ruled jointly with Mary. The Glorious Revolution guaranteed the power of Parliament.", page: 38 },
        { text: "1690: William defeated James II at the Battle of the Boyne in Ireland.", page: 38 },
        { text: "A Jacobite rising was defeated at Killiecrankie; the MacDonalds of Glencoe were massacred for taking the oath late.", page: 38 },
        { text: "James's supporters were known as Jacobites.", page: 38 },
      ],
      mnemonics: [
        {
          title: "1688 and 1690",
          device: "\"Eighty-eight, no fight; ninety, the Boyne.\"",
          explanation: "The Glorious Revolution (1688) was bloodless in England; William beat James at the Boyne in Ireland in 1690.",
        },
        {
          title: "Jacobites",
          device: "Jacob = James.",
          explanation: "Jacobites were supporters of James II and his heirs.",
        },
        {
          title: "Two numbers again",
          device: "James II/VII and William III/II.",
          explanation: "England and Scotland counted their monarchs separately: James II of England was James VII of Scotland; William III was William II of Scotland.",
        },
      ],
      checkQuestionIds: ["ts-q49", "ts-q51", "ts-q53"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    { id: "ts-t-henry-vii", date: "1485", sortYear: 1485, title: "Henry VII secures the throne", summary: "After victory in the Wars of the Roses, Henry VII strengthens central government and reduces the power of the nobles.", people: ["Henry VII"], whyItMatters: "He builds up the monarchy's finances; his son continues centralising power.", remember: ["Thrifty", "Reduced the nobles' power"], imageId: "tudors-and-stuarts-henry-vii", page: 32, lessonId: "henry-viii" },
    { id: "ts-t-henry-viii", contextDate: "1509", sortYear: 1509, title: "Henry VIII becomes king", summary: "Henry VIII continues his father's policy of centralising power. He marries six times.", people: ["Henry VIII", "Catherine of Aragon"], whyItMatters: "His marriages and break with Rome reshape English religion.", remember: ["Six wives", "Divorced, beheaded, died; divorced, beheaded, survived"], imageId: "tudors-and-stuarts-henry-viii", page: 32, lessonId: "henry-viii" },
    { id: "ts-t-church-of-england", contextDate: "1534", sortYear: 1534, title: "The Church of England", summary: "When the Pope refuses to approve his divorce, Henry VIII establishes the Church of England.", people: ["Henry VIII", "The Pope"], whyItMatters: "The king, not the Pope, now appoints bishops and decides how people worship.", remember: ["Because the Pope refused a divorce"], page: 32, lessonId: "henry-viii" },
    { id: "ts-t-wales-act", contextDate: "1536–1543", sortYear: 1536, title: "Act for the Government of Wales", summary: "Wales is formally united with England. Welsh representatives sit in the House of Commons.", people: ["Henry VIII"], whyItMatters: "The Welsh legal system is reformed.", remember: ["Henry VIII (not VII)"], page: 33, lessonId: "reformation" },
    { id: "ts-t-edward-vi", contextDate: "1547–1553", sortYear: 1547, title: "Edward VI and the Book of Common Prayer", summary: "Henry's strongly Protestant son reigns for just over six years and dies aged 15. The Book of Common Prayer is written.", people: ["Edward VI"], whyItMatters: "A version of the Book of Common Prayer is still used in some churches.", remember: ["Died aged 15"], imageId: "tudors-and-stuarts-prayer-book", page: 33, lessonId: "reformation" },
    { id: "ts-t-mary-i", contextDate: "1553–1558", sortYear: 1553, title: "Mary I, 'Bloody Mary'", summary: "Edward's half-sister, a devout Catholic, persecutes Protestants during a short reign.", people: ["Mary I"], whyItMatters: "Shows how the Crown's religion swung back and forth.", remember: ["Daughter of Catherine of Aragon", "Persecuted Protestants"], imageId: "tudors-and-stuarts-mary-i", page: 33, lessonId: "reformation" },
    { id: "ts-t-elizabeth", contextDate: "1558", sortYear: 1558, title: "Elizabeth I becomes queen", summary: "Henry VIII and Anne Boleyn's daughter re-establishes the Church of England and finds a religious balance.", people: ["Elizabeth I"], whyItMatters: "She avoids serious religious conflict within England.", remember: ["Protestant", "Did not ask about people's real beliefs"], imageId: "tudors-and-stuarts-elizabeth-i", page: 34, lessonId: "elizabeth-and-mary" },
    { id: "ts-t-scotland-1560", date: "1560", sortYear: 1560, title: "Reformation in Scotland", summary: "The Scottish Parliament abolishes the authority of the Pope and makes Catholic services illegal.", people: [], whyItMatters: "A Protestant Church of Scotland is set up, but not as a state Church.", remember: ["1560", "Not a state Church"], page: 34, lessonId: "elizabeth-and-mary" },
    { id: "ts-t-drake", contextDate: "1577–1580", sortYear: 1577, title: "Drake sails around the world", summary: "Sir Francis Drake's Golden Hind is one of the first ships to circumnavigate the world.", people: ["Sir Francis Drake"], whyItMatters: "Drake helps found England's naval tradition.", remember: ["Golden Hind", "Circumnavigate = sail right around"], imageId: "tudors-and-stuarts-drake", page: 35, lessonId: "exploration-and-shakespeare" },
    { id: "ts-t-mary-qos", contextDate: "1587", sortYear: 1587, title: "Mary, Queen of Scots executed", summary: "After 20 years as Elizabeth's prisoner, Mary is executed, accused of plotting against Elizabeth.", people: ["Mary, Queen of Scots", "Elizabeth I"], whyItMatters: "Her son James VI later inherits the English throne.", remember: ["Catholic", "Elizabeth's cousin"], imageId: "tudors-and-stuarts-mary-queen-of-scots", page: 35, lessonId: "elizabeth-and-mary" },
    { id: "ts-t-armada", date: "1588", sortYear: 1588, title: "Defeat of the Spanish Armada", summary: "The English defeat a large Spanish fleet sent to conquer England and restore Catholicism.", people: ["Elizabeth I", "Sir Francis Drake"], whyItMatters: "Makes Elizabeth one of the most popular monarchs in English history.", remember: ["1588", "Drake was one of the commanders"], imageId: "tudors-and-stuarts-armada", page: 34, lessonId: "elizabeth-and-mary" },
    { id: "ts-t-shakespeare", date: "1564–1616", sortYear: 1595, title: "William Shakespeare", summary: "The playwright and actor from Stratford-upon-Avon writes Hamlet, Macbeth, Romeo and Juliet and more.", people: ["William Shakespeare"], whyItMatters: "Regarded by many as the greatest playwright of all time; he shaped the English language.", remember: ["Born Stratford-upon-Avon", "Globe Theatre (modern copy)"], imageId: "tudors-and-stuarts-shakespeare", page: 36, lessonId: "exploration-and-shakespeare" },
    { id: "ts-t-james", date: "1603", sortYear: 1603, title: "James VI becomes James I", summary: "Elizabeth I dies childless. Her cousin James VI of Scotland becomes James I of England, Wales and Ireland.", people: ["James VI and I"], whyItMatters: "One king for both countries, but Scotland remains separate.", remember: ["1603", "Scotland stays a separate country"], imageId: "tudors-and-stuarts-james-i", page: 36, lessonId: "james-and-ireland" },
    { id: "ts-t-plantations", contextDate: "from 1609", sortYear: 1609, title: "Plantations in Ulster", summary: "Scottish and English Protestants settle in Ulster on land taken from Catholic landholders.", people: ["James I"], whyItMatters: "Serious long-term consequences for England, Scotland and Ireland.", remember: ["Many settlers from south-west Scotland", "London companies given land"], page: 36, lessonId: "james-and-ireland" },
    { id: "ts-t-kjv", contextDate: "1611", sortYear: 1611, title: "The King James Bible", summary: "A new English translation, the King James or Authorised Version, is made.", people: ["James I"], whyItMatters: "Still used in many Protestant churches today.", remember: ["Not the first English Bible"], imageId: "tudors-and-stuarts-kjv", page: 36, lessonId: "james-and-ireland" },
    { id: "ts-t-personal-rule", contextDate: "1629–1640", sortYear: 1629, title: "Charles I rules without Parliament", summary: "Believing in the Divine Right of Kings, Charles I raises money without Parliament for 11 years.", people: ["Charles I"], whyItMatters: "Trouble in Scotland eventually forces him to recall Parliament.", remember: ["11 years", "Divine Right of Kings"], imageId: "tudors-and-stuarts-charles-i", page: 36, lessonId: "james-and-ireland" },
    { id: "ts-t-1640", date: "1640", sortYear: 1640, title: "Parliament recalled", summary: "Facing a Scottish army over his Prayer Book, Charles I recalls Parliament for funds. The Puritans refuse.", people: ["Charles I", "Puritans"], whyItMatters: "Begins the crisis that leads to civil war.", remember: ["1640", "Revised Prayer Book imposed on Scotland"], page: 36, lessonId: "civil-war-and-republic" },
    { id: "ts-t-1641", date: "1641", sortYear: 1641, title: "Rebellion in Ireland", summary: "Irish Roman Catholics, afraid of the Puritans, rebel. Parliament demands control of the army.", people: [], whyItMatters: "The revolt is still continuing when Cromwell arrives in Ireland after 1649.", remember: ["1641"], page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-civil-war", date: "1642", sortYear: 1642, title: "The Civil War begins", summary: "After Charles I tries to arrest five MPs in the Commons, war breaks out between Cavaliers and Roundheads.", people: ["Charles I"], whyItMatters: "No monarch has set foot in the Commons since.", remember: ["1642", "Cavaliers = king; Roundheads = Parliament"], page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-1646", date: "1646", sortYear: 1646, title: "Parliament wins", summary: "After the king's defeats at Marston Moor and Naseby, Parliament has clearly won. Charles is held prisoner.", people: ["Charles I"], whyItMatters: "Charles still refuses any agreement with Parliament.", remember: ["Marston Moor", "Naseby"], page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-execution", date: "1649", sortYear: 1649, title: "Charles I executed", summary: "The king is executed and England declares itself a republic, the Commonwealth.", people: ["Charles I", "Oliver Cromwell"], whyItMatters: "The only period in history when England was a republic.", remember: ["1649", "Commonwealth"], imageId: "tudors-and-stuarts-execution", page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-worcester", contextDate: "1650–1651", sortYear: 1651, title: "Dunbar and Worcester", summary: "Cromwell defeats Charles II's Scottish army. Charles hides in an oak tree and flees to Europe.", people: ["Oliver Cromwell", "Charles II"], whyItMatters: "Parliament now controls Scotland as well as England and Wales.", remember: ["Oak tree", "Fled to Europe"], page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-cromwell", date: "1658", sortYear: 1658, title: "Death of the Lord Protector", summary: "Oliver Cromwell, Lord Protector, dies. His son Richard cannot control the army or government.", people: ["Oliver Cromwell", "Richard Cromwell"], whyItMatters: "Without him there is no clear leader; people begin to talk about a king.", remember: ["Lord Protector", "1658"], imageId: "tudors-and-stuarts-cromwell", page: 37, lessonId: "civil-war-and-republic" },
    { id: "ts-t-restoration", date: "May 1660", sortYear: 1660, title: "The Restoration", summary: "Parliament invites Charles II back from exile in the Netherlands.", people: ["Charles II"], whyItMatters: "The monarchy returns; the Church of England is again the established Church.", remember: ["May 1660", "'No wish to go on his travels again'"], imageId: "tudors-and-stuarts-charles-ii", page: 38, lessonId: "restoration" },
    { id: "ts-t-plague", date: "1665", sortYear: 1665, title: "The Great Plague", summary: "A major outbreak of plague in London kills thousands, especially in poorer areas.", people: ["Samuel Pepys"], whyItMatters: "Recorded by Samuel Pepys in his diary.", remember: ["1665"], page: 38, lessonId: "restoration" },
    { id: "ts-t-fire", date: "1666 (the following year)", sortYear: 1666, title: "The Great Fire of London", summary: "A great fire destroys much of the city, including St Paul's Cathedral.", people: ["Sir Christopher Wren", "Samuel Pepys"], whyItMatters: "London is rebuilt with a new St Paul's designed by Wren.", remember: ["The year after the plague", "Wren: new St Paul's"], imageId: "tudors-and-stuarts-great-fire", page: 38, lessonId: "restoration" },
    { id: "ts-t-habeas", date: "1679", sortYear: 1679, title: "Habeas Corpus Act", summary: "No one can be held prisoner unlawfully; every prisoner has a right to a court hearing.", people: [], whyItMatters: "Still relevant today.", remember: ["1679", "'You must present the person in court'"], page: 38, lessonId: "restoration" },
    { id: "ts-t-james-ii", date: "1685", sortYear: 1685, title: "James II, a Catholic king", summary: "Charles II dies; his Catholic brother becomes James II (James VII of Scotland).", people: ["James II"], whyItMatters: "Fears of a Catholic England lead to the Glorious Revolution.", remember: ["1685", "Favoured Catholics, arrested bishops"], imageId: "tudors-and-stuarts-james-ii", page: 38, lessonId: "glorious-revolution" },
    { id: "ts-t-newton", contextDate: "1687", sortYear: 1687, title: "Newton's Principia", summary: "Isaac Newton's most famous work shows how gravity applies to the whole universe.", people: ["Isaac Newton"], whyItMatters: "Many of his discoveries are still important for modern science.", remember: ["Gravity", "White light = colours of the rainbow"], imageId: "tudors-and-stuarts-newton", page: 38, lessonId: "restoration" },
    { id: "ts-t-glorious", date: "1688", sortYear: 1688, title: "The Glorious Revolution", summary: "William of Orange invades at the invitation of English Protestants. James flees to France; William and Mary rule jointly.", people: ["William III", "Mary II", "James II"], whyItMatters: "No fighting in England, and the power of Parliament is guaranteed.", remember: ["1688", "No resistance"], imageId: "tudors-and-stuarts-william-iii", page: 38, lessonId: "glorious-revolution" },
    { id: "ts-t-killiecrankie", contextDate: "1689", sortYear: 1689, title: "Killiecrankie", summary: "An armed rebellion in Scotland in support of James is quickly defeated.", people: [], whyItMatters: "James's supporters, the Jacobites, remain a threat.", remember: ["Jacobites"], page: 38, lessonId: "glorious-revolution" },
    { id: "ts-t-boyne", date: "1690", sortYear: 1690, title: "Battle of the Boyne", summary: "William defeats James II, who had invaded Ireland with a French army.", people: ["William III", "James II"], whyItMatters: "Still celebrated by some in Northern Ireland; Irish Catholics are excluded from government.", remember: ["1690", "Ireland"], imageId: "tudors-and-stuarts-boyne", page: 38, lessonId: "glorious-revolution" },
    { id: "ts-t-glencoe", contextDate: "1692", sortYear: 1692, title: "Massacre of Glencoe", summary: "The MacDonalds of Glencoe, late in swearing the oath to William, are all killed.", people: ["The MacDonalds of Glencoe"], whyItMatters: "Some Scots come to distrust the new government.", remember: ["Late in taking the oath"], page: 38, lessonId: "glorious-revolution" },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "tudors-and-stuarts-tower", name: "Tower of London", lat: 51.5081, lon: -0.0759, label: { side: "right", dy: 10 }, note: "Where Anne Boleyn was executed.", page: 32, lessonId: "henry-viii", era: "Tudor" },
    { id: "tudors-and-stuarts-stratford", name: "Stratford-upon-Avon", lat: 52.1917, lon: -1.7083, label: { side: "left" }, note: "Birthplace of William Shakespeare (1564).", page: 36, lessonId: "exploration-and-shakespeare", era: "Tudor" },
    { id: "tudors-and-stuarts-globe", name: "Globe Theatre", lat: 51.5081, lon: -0.0972, label: { side: "left", dy: 4 }, note: "London. A modern copy of the theatres where Shakespeare's plays were first performed.", page: 36, lessonId: "exploration-and-shakespeare", era: "Tudor" },
    { id: "tudors-and-stuarts-ulster", name: "Ulster", lat: 54.65, lon: -6.75, label: { side: "left" }, note: "Northern province of Ireland, settled by Protestant 'plantations'.", page: 36, lessonId: "james-and-ireland", era: "Stuart" },
    { id: "tudors-and-stuarts-dublin", name: "Dublin", lat: 53.3498, lon: -6.2603, note: "Seat of the Lord Lieutenants who directed English rule in Ireland.", page: 36, lessonId: "james-and-ireland", era: "Tudor" },
    { id: "tudors-and-stuarts-commons", name: "House of Commons", lat: 51.4995, lon: -0.1248, label: { side: "left", dy: 12 }, note: "Westminster. Charles I tried to arrest five MPs here; no monarch has entered the Commons since.", page: 37, lessonId: "civil-war-and-republic", era: "Stuart" },
    { id: "tudors-and-stuarts-marston-moor", name: "Marston Moor", lat: 53.9636, lon: -1.2792, label: { side: "left" }, note: "Battle where the king's army was defeated.", page: 37, lessonId: "civil-war-and-republic", era: "Stuart" },
    { id: "tudors-and-stuarts-naseby", name: "Naseby", lat: 52.4168, lon: -0.9727, note: "Battle where the king's army was defeated.", page: 37, lessonId: "civil-war-and-republic", era: "Stuart" },
    { id: "tudors-and-stuarts-dunbar", name: "Dunbar", lat: 56.0026, lon: -2.5165, note: "Cromwell defeated Charles II's Scottish army.", page: 37, lessonId: "civil-war-and-republic", era: "Stuart" },
    { id: "tudors-and-stuarts-worcester", name: "Worcester", lat: 52.192, lon: -2.22, label: { side: "left" }, note: "Cromwell defeated Charles II, who escaped and hid in an oak tree.", page: 37, lessonId: "civil-war-and-republic", era: "Stuart" },
    { id: "tudors-and-stuarts-st-pauls", name: "St Paul's Cathedral", lat: 51.5138, lon: -0.0984, label: { side: "right", dy: -8 }, note: "Destroyed in the Great Fire; rebuilt to a design by Sir Christopher Wren.", page: 38, lessonId: "restoration", era: "Stuart" },
    { id: "tudors-and-stuarts-woolsthorpe", name: "Lincolnshire (Newton's birthplace)", lat: 52.809, lon: -0.6303, note: "Isaac Newton was born in Lincolnshire (at Woolsthorpe Manor, not named in the handbook).", page: 38, lessonId: "restoration", era: "Stuart" },
    { id: "tudors-and-stuarts-cambridge", name: "Cambridge", lat: 52.2053, lon: 0.1218, note: "Newton became interested in science while studying at Cambridge University.", page: 38, lessonId: "restoration", era: "Stuart" },
    { id: "tudors-and-stuarts-boyne", name: "River Boyne", lat: 53.7232, lon: -6.417, label: { side: "left" }, note: "1690: William III defeated James II at the Battle of the Boyne.", page: 38, lessonId: "glorious-revolution", era: "Stuart" },
    { id: "tudors-and-stuarts-killiecrankie", name: "Killiecrankie", lat: 56.7445, lon: -3.7745, note: "A rebellion in support of James was quickly defeated here.", page: 38, lessonId: "glorious-revolution", era: "Stuart" },
    { id: "tudors-and-stuarts-glencoe", name: "Glencoe", lat: 56.6826, lon: -5.1023, label: { side: "left" }, note: "The MacDonalds of Glencoe were massacred for taking the oath to William late.", page: 38, lessonId: "glorious-revolution", era: "Stuart" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Henry VIII broke away from the Church of Rome and set up the Church of England when the Pope refused his divorce.", page: 32 },
    { text: "Henry VIII's wives: Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr.", page: 32 },
    { text: "Wales was united with England by the Act for the Government of Wales, under Henry VIII.", page: 33 },
    { text: "Edward VI (Protestant, Book of Common Prayer) → Mary I ('Bloody Mary', Catholic) → Elizabeth I (Protestant).", page: 33 },
    { text: "1588: the Spanish Armada was defeated; Elizabeth I became one of England's most popular monarchs.", page: 34 },
    { text: "1560: the Scottish Parliament abolished the Pope's authority in Scotland.", page: 34 },
    { text: "Drake's Golden Hind was one of the first ships to sail around the world.", page: 35 },
    { text: "William Shakespeare (1564–1616), born in Stratford-upon-Avon.", page: 36 },
    { text: "1603: James VI of Scotland became James I of England; the King James Bible followed.", page: 36 },
    { text: "1642: civil war (Cavaliers v Roundheads); 1649: Charles I executed and the Commonwealth declared.", page: 37 },
    { text: "Oliver Cromwell was Lord Protector until his death in 1658.", page: 37 },
    { text: "1660: the Restoration of Charles II; 1665 plague; then the Great Fire; Wren's St Paul's.", page: 38 },
    { text: "1679: the Habeas Corpus Act. The Royal Society: the oldest surviving scientific society in the world.", page: 38 },
    { text: "1688: the Glorious Revolution (William and Mary); 1690: the Battle of the Boyne.", page: 38 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "ts-f01", lessonId: "henry-viii", page: 32, front: "How did Henry VII make his position secure?", back: "He strengthened central administration, reduced the power of the nobles and built up the monarchy's financial reserves." },
    { id: "ts-f02", lessonId: "henry-viii", page: 32, front: "Name Henry VIII's six wives in order.", back: "Catherine of Aragon, Anne Boleyn, Jane Seymour, Anne of Cleves, Catherine Howard, Catherine Parr." },
    { id: "ts-f03", lessonId: "henry-viii", page: 32, front: "Which of Henry VIII's wives were executed?", back: "Anne Boleyn and Catherine Howard (Anne's cousin). Both were accused of taking lovers." },
    { id: "ts-f04", lessonId: "henry-viii", page: 32, front: "Who were the mothers of Mary, Elizabeth and Edward?", back: "Mary: Catherine of Aragon. Elizabeth: Anne Boleyn. Edward: Jane Seymour." },
    { id: "ts-f05", lessonId: "henry-viii", page: 32, front: "Which wives were foreign princesses?", back: "Catherine of Aragon (Spanish) and Anne of Cleves (German)." },
    { id: "ts-f06", lessonId: "henry-viii", page: 32, front: "Why did Henry VIII establish the Church of England?", back: "The Pope refused to approve his divorce from Catherine of Aragon. In the new Church the king appointed bishops." },
    { id: "ts-f07", lessonId: "reformation", page: 33, front: "What was the Reformation?", back: "A movement across Europe against the authority of the Pope and the ideas and practices of the Roman Catholic Church." },
    { id: "ts-f08", lessonId: "reformation", page: 33, front: "Name three Protestant beliefs.", back: "Bible in their own language (not Latin); no praying to saints or at shrines; a personal relationship with God matters more than the Church's authority." },
    { id: "ts-f09", lessonId: "reformation", page: 33, front: "What did the Act for the Government of Wales do?", back: "Formally united Wales with England under Henry VIII. Welsh representatives sat in the Commons and the Welsh legal system was reformed." },
    { id: "ts-f10", lessonId: "reformation", page: 33, front: "What was written during Edward VI's reign?", back: "The Book of Common Prayer, for the Church of England. A version is still used in some churches." },
    { id: "ts-f11", lessonId: "reformation", page: 33, front: "Why was Mary I called 'Bloody Mary'?", back: "She was a devout Catholic who persecuted Protestants." },
    { id: "ts-f12", lessonId: "elizabeth-and-mary", page: 34, front: "How did Elizabeth I handle religion?", back: "She re-established the Church of England, required church attendance but did not ask about real beliefs, and balanced Catholic and extreme Protestant views." },
    { id: "ts-f13", lessonId: "elizabeth-and-mary", page: 34, front: "What was the Spanish Armada?", back: "A large fleet sent by Spain to conquer England and restore Catholicism, defeated in 1588." },
    { id: "ts-f14", lessonId: "elizabeth-and-mary", page: 34, front: "What happened in Scotland in 1560?", back: "The Protestant Scottish Parliament abolished the Pope's authority; Catholic services became illegal. The Church of Scotland was not a state Church." },
    { id: "ts-f15", lessonId: "elizabeth-and-mary", page: 35, front: "What happened to Mary, Queen of Scots?", back: "Suspected in her husband's murder, she fled to England, was kept prisoner by Elizabeth I for 20 years and was executed for plotting against her." },
    { id: "ts-f16", lessonId: "elizabeth-and-mary", page: 35, front: "To whom did Mary, Queen of Scots give her throne?", back: "Her Protestant son, James VI of Scotland." },
    { id: "ts-f17", lessonId: "exploration-and-shakespeare", page: 35, front: "Who was Sir Francis Drake?", back: "A commander in the defeat of the Armada and a founder of England's naval tradition. His ship the Golden Hind was one of the first to sail around the world." },
    { id: "ts-f18", lessonId: "exploration-and-shakespeare", page: 35, front: "When did English settlers first colonise the eastern coast of America?", back: "In Elizabeth I's time. It increased greatly in the next century." },
    { id: "ts-f19", lessonId: "exploration-and-shakespeare", page: 36, front: "When and where was Shakespeare born?", back: "1564, in Stratford-upon-Avon. He died in 1616." },
    { id: "ts-f20", lessonId: "exploration-and-shakespeare", page: 36, front: "Name four of Shakespeare's most famous plays.", back: "A Midsummer Night's Dream, Hamlet, Macbeth, Romeo and Juliet." },
    { id: "ts-f21", lessonId: "exploration-and-shakespeare", page: 36, front: "\"Once more unto the breach\" / \"To be or not to be\" / \"All the world's a stage\": which plays?", back: "Henry V / Hamlet / As You Like It." },
    { id: "ts-f22", lessonId: "exploration-and-shakespeare", page: 36, front: "What is the Globe Theatre?", back: "A modern copy in London of the theatres in which Shakespeare's plays were first performed." },
    { id: "ts-f23", lessonId: "james-and-ireland", page: 36, front: "Who succeeded Elizabeth I in 1603?", back: "Her cousin James VI of Scotland, who became James I of England, Wales and Ireland." },
    { id: "ts-f24", lessonId: "james-and-ireland", page: 36, front: "What are the two names for the King James Bible?", back: "The King James Version and the Authorised Version." },
    { id: "ts-f25", lessonId: "james-and-ireland", page: 36, front: "What were the plantations?", back: "Settlements of Scottish and English Protestants in Ulster on land taken from Catholic landholders." },
    { id: "ts-f26", lessonId: "james-and-ireland", page: 36, front: "Which king took the title 'King of Ireland'?", back: "Henry VIII." },
    { id: "ts-f27", lessonId: "james-and-ireland", page: 36, front: "What was the 'Divine Right of Kings'?", back: "The belief that the king was directly appointed by God to rule and need not seek Parliament's approval." },
    { id: "ts-f28", lessonId: "civil-war-and-republic", page: 36, front: "Who were the Puritans?", back: "Protestants who advocated strict and simple religious doctrine and worship." },
    { id: "ts-f29", lessonId: "civil-war-and-republic", page: 37, front: "Who were the Cavaliers and the Roundheads?", back: "Cavaliers supported the king; Roundheads supported Parliament." },
    { id: "ts-f30", lessonId: "civil-war-and-republic", page: 37, front: "When did the civil war begin, and what triggered it?", back: "1642, after Charles I entered the Commons and tried to arrest five parliamentary leaders." },
    { id: "ts-f31", lessonId: "civil-war-and-republic", page: 37, front: "At which battles was the king's army defeated?", back: "Marston Moor and Naseby." },
    { id: "ts-f32", lessonId: "civil-war-and-republic", page: 37, front: "What was the Commonwealth?", back: "The republic England declared itself after Charles I's execution in 1649." },
    { id: "ts-f33", lessonId: "civil-war-and-republic", page: 37, front: "What title was Oliver Cromwell given?", back: "Lord Protector. He ruled until his death in 1658." },
    { id: "ts-f34", lessonId: "restoration", page: 38, front: "What was the Restoration?", back: "In May 1660 Parliament invited Charles II back from exile in the Netherlands to be king." },
    { id: "ts-f35", lessonId: "restoration", page: 38, front: "Who designed the new St Paul's Cathedral?", back: "Sir Christopher Wren, after the great fire destroyed the old one." },
    { id: "ts-f36", lessonId: "restoration", page: 38, front: "Who wrote a diary describing the plague and the fire of London?", back: "Samuel Pepys." },
    { id: "ts-f37", lessonId: "restoration", page: 38, front: "What does 'habeas corpus' mean, and when did the Act become law?", back: "'You must present the person in court'. 1679. No one can be held prisoner unlawfully." },
    { id: "ts-f38", lessonId: "restoration", page: 38, front: "What is the Royal Society?", back: "A society formed under Charles II to promote 'natural knowledge': the oldest surviving scientific society in the world." },
    { id: "ts-f39", lessonId: "restoration", page: 38, front: "What did Isaac Newton discover?", back: "His Principia showed how gravity applied to the whole universe; he also found that white light is made up of the colours of the rainbow." },
    { id: "ts-f40", lessonId: "restoration", page: 38, front: "What did Sir Edmund Halley predict?", back: "The return of the comet now called Halley's Comet." },
    { id: "ts-f41", lessonId: "glorious-revolution", page: 38, front: "Why did people fear James II?", back: "He was Catholic, favoured Catholics as army officers, ignored Parliament and arrested bishops; then he had a son." },
    { id: "ts-f42", lessonId: "glorious-revolution", page: 38, front: "What was the Glorious Revolution?", back: "In 1688 William of Orange invaded at Protestants' invitation; James fled. Called glorious because there was no fighting in England and it guaranteed Parliament's power." },
    { id: "ts-f43", lessonId: "glorious-revolution", page: 38, front: "What happened at the Battle of the Boyne?", back: "In 1690 William III defeated James II in Ireland." },
    { id: "ts-f44", lessonId: "glorious-revolution", page: 38, front: "What happened at Glencoe?", back: "The MacDonalds of Glencoe were late in taking the oath to William and were all killed." },
    { id: "ts-f45", lessonId: "glorious-revolution", page: 38, front: "Who were the Jacobites?", back: "Supporters of James II, who believed he was the rightful king." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // henry-viii
    { id: "ts-q01", lessonId: "henry-viii", page: 32, type: "single", prompt: "Who was Henry VIII's first wife?", options: ["Anne Boleyn", "Catherine of Aragon", "Jane Seymour", "Catherine Parr"], answer: [1], explanation: "Catherine of Aragon, a Spanish princess, was the first. Only one of their children, Mary, survived." },
    { id: "ts-q02", lessonId: "henry-viii", page: 32, type: "single", prompt: "Which of Henry VIII's wives gave him his son, Edward?", options: ["Anne of Cleves", "Catherine Howard", "Jane Seymour", "Anne Boleyn"], answer: [2], explanation: "Jane Seymour gave birth to Edward but died shortly afterwards." },
    { id: "ts-q03", lessonId: "henry-viii", page: 32, type: "single", prompt: "Why did Henry VIII establish the Church of England?", options: ["To spread Protestant ideas in Ireland", "Because the Pope refused to approve his divorce", "To translate the Bible into English", "Because the Church of Rome supported Spain"], answer: [1], explanation: "Henry needed the Pope's approval to divorce Catherine of Aragon. When the Pope refused, he set up the Church of England." },
    { id: "ts-q04", lessonId: "henry-viii", page: 32, type: "multi", prompt: "Which TWO of Henry VIII's wives were executed?", options: ["Anne Boleyn", "Anne of Cleves", "Catherine Howard", "Catherine Parr"], answer: [0, 2], explanation: "Anne Boleyn and her cousin Catherine Howard were both accused of taking lovers and executed. Anne of Cleves was divorced; Catherine Parr survived Henry." },
    { id: "ts-q05", lessonId: "henry-viii", page: 32, type: "single", prompt: "Anne of Cleves was a princess from which country?", options: ["Spain", "France", "Germany", "Scotland"], answer: [2], explanation: "Anne of Cleves was a German princess. Henry married her for political reasons and divorced her soon after." },
    { id: "ts-q06", lessonId: "henry-viii", page: 32, type: "truefalse", prompt: "In the Church of England, the king rather than the Pope had the power to appoint bishops.", options: ["True", "False"], answer: [0], explanation: "True. The king also had the power to order how people should worship." },
    { id: "ts-q07", lessonId: "henry-viii", page: 32, type: "single", prompt: "Which of Henry VIII's wives survived him?", options: ["Catherine of Aragon", "Jane Seymour", "Catherine Howard", "Catherine Parr"], answer: [3], explanation: "Catherine Parr, a widow, married Henry late in his life, survived him and married again." },
    // reformation
    { id: "ts-q08", lessonId: "reformation", page: 33, type: "single", prompt: "What was the Reformation?", options: ["A movement against the authority of the Pope and the Roman Catholic Church", "The rebuilding of London after the great fire", "A reform of Parliament's voting system", "A war between England and Spain"], answer: [0], explanation: "The Reformation was a movement across Europe against the Pope's authority and Catholic practices. Protestants formed their own churches." },
    { id: "ts-q09", lessonId: "reformation", page: 33, type: "multi", prompt: "Which TWO were Protestant beliefs or practices?", options: ["Reading the Bible in their own language", "Praying to saints and at shrines", "A person's own relationship with God mattered most", "Holding services only in Latin"], answer: [0, 2], explanation: "Protestants read the Bible in their own languages and stressed a personal relationship with God. They did not pray to saints or at shrines." },
    { id: "ts-q10", lessonId: "reformation", page: 33, type: "single", prompt: "Under which monarch did the Act for the Government of Wales unite Wales with England?", options: ["Edward I", "Henry VII", "Henry VIII", "Elizabeth I"], answer: [2], explanation: "It was during the reign of Henry VIII (the PDF summary wrongly says Henry VII)." },
    { id: "ts-q11", lessonId: "reformation", page: 33, type: "single", prompt: "During whose reign was the Book of Common Prayer written?", options: ["Henry VIII", "Edward VI", "Mary I", "James I"], answer: [1], explanation: "The Book of Common Prayer was written in the reign of the strongly Protestant Edward VI." },
    { id: "ts-q12", lessonId: "reformation", page: 33, type: "single", prompt: "Which monarch was known as 'Bloody Mary'?", options: ["Mary, Queen of Scots", "Mary I, Henry VIII's daughter", "Mary II, wife of William III", "Mary Seymour"], answer: [1], explanation: "Mary I, a devout Catholic, persecuted Protestants and became known as 'Bloody Mary'." },
    { id: "ts-q13", lessonId: "reformation", page: 33, type: "truefalse", prompt: "Edward VI died at the age of 15 after ruling for just over six years.", options: ["True", "False"], answer: [0], explanation: "True. His half-sister Mary then became queen." },
    { id: "ts-q13b", lessonId: "reformation", page: 33, type: "truefalse", prompt: "In Ireland, English attempts to impose Protestantism were accepted peacefully.", options: ["True", "False"], answer: [1], explanation: "False. They led to rebellion by the Irish chieftains, and much brutal fighting followed." },
    // elizabeth-and-mary
    { id: "ts-q14", lessonId: "elizabeth-and-mary", page: 34, type: "single", prompt: "In which year was the Spanish Armada defeated?", options: ["1560", "1588", "1603", "1642"], answer: [1], explanation: "The English defeated the Spanish Armada in 1588." },
    { id: "ts-q15", lessonId: "elizabeth-and-mary", page: 34, type: "single", prompt: "Why had Spain sent the Armada?", options: ["To help Mary, Queen of Scots escape", "To conquer England and restore Catholicism", "To trade with the English colonies in America", "To support Charles I"], answer: [1], explanation: "The Armada, a large fleet of ships, was sent by Spain to conquer England and restore Catholicism." },
    { id: "ts-q16", lessonId: "elizabeth-and-mary", page: 34, type: "truefalse", prompt: "Elizabeth I questioned people closely about their real religious beliefs.", options: ["True", "False"], answer: [1], explanation: "False. Everyone had to attend church, but Elizabeth did not ask about people's real beliefs. She balanced Catholic and extreme Protestant views." },
    { id: "ts-q17", lessonId: "elizabeth-and-mary", page: 34, type: "single", prompt: "In which year did the Scottish Parliament abolish the authority of the Pope in Scotland?", options: ["1534", "1560", "1588", "1603"], answer: [1], explanation: "In 1560 the mainly Protestant Scottish Parliament abolished the Pope's authority, and Catholic services became illegal." },
    { id: "ts-q18", lessonId: "elizabeth-and-mary", page: 35, type: "single", prompt: "For how long did Elizabeth I keep Mary, Queen of Scots prisoner?", options: ["5 years", "11 years", "20 years", "40 years"], answer: [2], explanation: "Elizabeth suspected Mary of wanting the English throne and kept her prisoner for 20 years before she was executed." },
    { id: "ts-q19", lessonId: "elizabeth-and-mary", page: 34, type: "truefalse", prompt: "Unlike the Church of England, the Protestant Church of Scotland was not a state Church.", options: ["True", "False"], answer: [0], explanation: "True. A Protestant Church of Scotland was set up in 1560, but it was not a state Church." },
    { id: "ts-q19b", lessonId: "elizabeth-and-mary", page: 35, type: "single", prompt: "To whom did Mary, Queen of Scots give her throne when she fled to England?", options: ["Elizabeth I", "Her son James VI", "Her husband", "Charles I"], answer: [1], explanation: "She gave the Scottish throne to her Protestant son, James VI." },
    // exploration-and-shakespeare
    { id: "ts-q20", lessonId: "exploration-and-shakespeare", page: 35, type: "single", prompt: "What was the name of Sir Francis Drake's ship?", options: ["The Mary Rose", "The Golden Hind", "The Victory", "The Mayflower"], answer: [1], explanation: "The Golden Hind was one of the first ships to sail right around the world." },
    { id: "ts-q21", lessonId: "exploration-and-shakespeare", page: 35, type: "single", prompt: "When did English settlers first begin to colonise the eastern coast of America?", options: ["In Henry VIII's time", "In Elizabeth I's time", "After the Restoration", "After the Glorious Revolution"], answer: [1], explanation: "Colonisation began in Elizabeth I's time and greatly increased in the next century." },
    { id: "ts-q22", lessonId: "exploration-and-shakespeare", page: 36, type: "single", prompt: "Where was William Shakespeare born?", options: ["London", "Stratford-upon-Avon", "Canterbury", "Oxford"], answer: [1], explanation: "Shakespeare was born in Stratford-upon-Avon, England, in 1564." },
    { id: "ts-q23", lessonId: "exploration-and-shakespeare", page: 36, type: "single", prompt: "Which play contains the line \"To be or not to be\"?", options: ["Macbeth", "Hamlet", "Henry V", "As You Like It"], answer: [1], explanation: "\"To be or not to be\" is from Hamlet." },
    { id: "ts-q24", lessonId: "exploration-and-shakespeare", page: 36, type: "multi", prompt: "Which TWO are among Shakespeare's most famous plays, according to the handbook?", options: ["Macbeth", "The Canterbury Tales", "A Midsummer Night's Dream", "The Bruce"], answer: [0, 2], explanation: "His famous plays include A Midsummer Night's Dream, Hamlet, Macbeth and Romeo and Juliet. The Canterbury Tales is by Chaucer; The Bruce is by John Barbour." },
    { id: "ts-q25", lessonId: "exploration-and-shakespeare", page: 36, type: "truefalse", prompt: "The Globe Theatre in London is the original theatre where Shakespeare's plays were first performed.", options: ["True", "False"], answer: [1], explanation: "False. It is a modern copy of the theatres in which his plays were first performed." },
    { id: "ts-q26", lessonId: "exploration-and-shakespeare", page: 36, type: "single", prompt: "\"Once more unto the breach\" comes from which Shakespeare play?", options: ["Henry V", "Romeo and Juliet", "Hamlet", "Macbeth"], answer: [0], explanation: "It is from Henry V. \"A rose by any other name\" is from Romeo and Juliet." },
    // james-and-ireland
    { id: "ts-q27", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "Who became king of England when Elizabeth I died in 1603?", options: ["Charles I", "James VI of Scotland", "William of Orange", "Henry IX"], answer: [1], explanation: "Her cousin James VI of Scotland became James I of England, Wales and Ireland. Scotland remained a separate country." },
    { id: "ts-q28", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "What is another name for the King James Bible?", options: ["The Book of Common Prayer", "The Authorised Version", "The Great Bible", "The Domesday Book"], answer: [1], explanation: "It is known as the King James Version or the Authorised Version, and is still used in many Protestant churches." },
    { id: "ts-q29", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "In Ireland, what were the 'plantations'?", options: ["Large farms growing potatoes", "Settlements of Scottish and English Protestants on land taken from Catholics", "Catholic monasteries", "Areas ruled directly by Irish chieftains"], answer: [1], explanation: "Protestant settlers, many from south-west Scotland, took over land from Catholic landholders, especially in Ulster." },
    { id: "ts-q30", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "Which king took the title 'King of Ireland'?", options: ["Henry VII", "Henry VIII", "James I", "Charles II"], answer: [1], explanation: "Henry VIII took the title 'King of Ireland'." },
    { id: "ts-q31", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "What was the 'Divine Right of Kings'?", options: ["The right of Parliament to choose the king", "The idea that the king was directly appointed by God to rule", "The king's right to lead the Church of Scotland", "A law giving the king control of the army"], answer: [1], explanation: "James I and Charles I believed the king was appointed by God and should be able to act without Parliament's approval." },
    { id: "ts-q32", lessonId: "james-and-ireland", page: 36, type: "single", prompt: "For how many years did Charles I raise money without Parliament's approval?", options: ["6", "11", "20", "116"], answer: [1], explanation: "For 11 years, until trouble in Scotland forced him to recall Parliament." },
    { id: "ts-q32b", lessonId: "james-and-ireland", page: 36, type: "truefalse", prompt: "Ulster is the northern province of Ireland.", options: ["True", "False"], answer: [0], explanation: "True. The government encouraged Protestants to settle there in the plantations." },
    // civil-war-and-republic
    { id: "ts-q33", lessonId: "civil-war-and-republic", page: 36, type: "single", prompt: "Who were the Puritans?", options: ["Catholics loyal to the Pope", "Protestants who advocated strict and simple religious doctrine and worship", "Supporters of the king", "Scottish Presbyterian ministers"], answer: [1], explanation: "Many in Parliament were Puritans; they disliked Charles I's religious views and reforms." },
    { id: "ts-q34", lessonId: "civil-war-and-republic", page: 37, type: "single", prompt: "In which year did the English Civil War begin?", options: ["1640", "1642", "1646", "1649"], answer: [1], explanation: "Civil war began in 1642. In 1640 Charles recalled Parliament; by 1646 Parliament had won; in 1649 Charles was executed." },
    { id: "ts-q35", lessonId: "civil-war-and-republic", page: 37, type: "single", prompt: "Who were the supporters of Parliament in the Civil War called?", options: ["Cavaliers", "Roundheads", "Jacobites", "Puritans"], answer: [1], explanation: "Parliament's supporters were the Roundheads; the king's were the Cavaliers." },
    { id: "ts-q36", lessonId: "civil-war-and-republic", page: 37, type: "multi", prompt: "At which TWO battles was the king's army defeated?", options: ["Marston Moor", "Bosworth Field", "Naseby", "The Boyne"], answer: [0, 2], explanation: "Charles I's army was defeated at Marston Moor and Naseby. Bosworth ended the Wars of the Roses; the Boyne was fought in 1690." },
    { id: "ts-q37", lessonId: "civil-war-and-republic", page: 37, type: "truefalse", prompt: "Since Charles I tried to arrest five MPs, no monarch has set foot in the House of Commons.", options: ["True", "False"], answer: [0], explanation: "True. The five leaders had been warned and were not there." },
    { id: "ts-q38", lessonId: "civil-war-and-republic", page: 37, type: "single", prompt: "What title was Oliver Cromwell given as leader of the republic?", options: ["King", "Prime Minister", "Lord Protector", "Lord Lieutenant"], answer: [2], explanation: "Cromwell was given the title Lord Protector and ruled until his death in 1658." },
    { id: "ts-q39", lessonId: "civil-war-and-republic", page: 37, type: "single", prompt: "What was the republic declared after the execution of Charles I called?", options: ["The Commonwealth", "The Restoration", "The Protectorate of Scotland", "The Union"], answer: [0], explanation: "England declared itself a republic called the Commonwealth, with no monarch." },
    { id: "ts-q40", lessonId: "civil-war-and-republic", page: 37, type: "single", prompt: "Where did Charles II famously hide after the Battle of Worcester?", options: ["In a church", "In an oak tree", "In the Tower of London", "On a ship to Ireland"], answer: [1], explanation: "Charles II escaped from Worcester, hid in an oak tree on one occasion, and eventually fled to Europe." },
    // restoration
    { id: "ts-q41", lessonId: "restoration", page: 38, type: "single", prompt: "In which year was the monarchy restored with Charles II?", options: ["1649", "1658", "1660", "1688"], answer: [2], explanation: "In May 1660 Parliament invited Charles II back from exile in the Netherlands." },
    { id: "ts-q42", lessonId: "restoration", page: 38, type: "single", prompt: "Where had Charles II been living in exile before the Restoration?", options: ["France", "Spain", "The Netherlands", "Scotland"], answer: [2], explanation: "Parliament invited him back from exile in the Netherlands." },
    { id: "ts-q43", lessonId: "restoration", page: 38, type: "single", prompt: "In which year was there a major outbreak of plague in London?", options: ["1348", "1588", "1665", "1679"], answer: [2], explanation: "The plague struck London in 1665. The following year a great fire destroyed much of the city." },
    { id: "ts-q44", lessonId: "restoration", page: 38, type: "single", prompt: "Who designed the new St Paul's Cathedral?", options: ["Samuel Pepys", "Sir Christopher Wren", "Isaac Newton", "Edmund Halley"], answer: [1], explanation: "Sir Christopher Wren, a famous architect, designed the new St Paul's after the great fire." },
    { id: "ts-q45", lessonId: "restoration", page: 38, type: "single", prompt: "What did the Habeas Corpus Act of 1679 guarantee?", options: ["The right to vote", "That no one could be held prisoner unlawfully", "Freedom of religion", "Trial by jury of 12"], answer: [1], explanation: "Habeas corpus means 'you must present the person in court'. Every prisoner has a right to a court hearing." },
    { id: "ts-q46", lessonId: "restoration", page: 38, type: "truefalse", prompt: "The Royal Society is the oldest surviving scientific society in the world.", options: ["True", "False"], answer: [0], explanation: "True. It was formed in Charles II's reign to promote 'natural knowledge'." },
    { id: "ts-q47", lessonId: "restoration", page: 38, type: "multi", prompt: "Which TWO discoveries are credited to Isaac Newton in the handbook?", options: ["How gravity applied to the whole universe", "The return of a comet", "That white light is made up of the colours of the rainbow", "The circulation of the blood"], answer: [0, 2], explanation: "Newton's Principia showed gravity applied to the whole universe, and he discovered white light is made of the rainbow's colours. Halley predicted the comet's return." },
    { id: "ts-q48", lessonId: "restoration", page: 38, type: "single", prompt: "Who wrote a diary about the plague and the great fire that is still read today?", options: ["Samuel Pepys", "Christopher Wren", "John Barbour", "Geoffrey Chaucer"], answer: [0], explanation: "Samuel Pepys's diary was later published and is still read." },
    // glorious-revolution
    { id: "ts-q49", lessonId: "glorious-revolution", page: 38, type: "single", prompt: "In which year did the Glorious Revolution take place?", options: ["1660", "1679", "1688", "1690"], answer: [2], explanation: "In 1688 William of Orange invaded at the invitation of English Protestants and James II fled." },
    { id: "ts-q50", lessonId: "glorious-revolution", page: 38, type: "single", prompt: "Who was William of Orange?", options: ["James II's son", "The Protestant ruler of the Netherlands, married to James II's daughter Mary", "A French general", "The leader of the Jacobites"], answer: [1], explanation: "William, the Protestant ruler of the Netherlands, was married to his cousin Mary, James II's elder daughter." },
    { id: "ts-q51", lessonId: "glorious-revolution", page: 38, type: "multi", prompt: "Which TWO reasons explain why the 1688 revolution was called 'Glorious'?", options: ["There was no fighting in England", "James II was executed", "It guaranteed the power of Parliament", "It made England a republic"], answer: [0, 2], explanation: "There was no fighting in England, and it guaranteed Parliament's power, ending the threat of a monarch ruling alone." },
    { id: "ts-q52", lessonId: "glorious-revolution", page: 38, type: "single", prompt: "In 1690, where did William III defeat James II?", options: ["Killiecrankie", "Glencoe", "The Battle of the Boyne", "Worcester"], answer: [2], explanation: "William defeated James at the Battle of the Boyne in Ireland in 1690." },
    { id: "ts-q53", lessonId: "glorious-revolution", page: 38, type: "single", prompt: "What were supporters of James II called?", options: ["Roundheads", "Puritans", "Jacobites", "Cavaliers"], answer: [2], explanation: "James's supporters, some in exile in France and some secret, were known as Jacobites." },
    { id: "ts-q54", lessonId: "glorious-revolution", page: 38, type: "single", prompt: "Which clan was massacred for being late to take the oath accepting William as king?", options: ["The Campbells", "The MacDonalds of Glencoe", "The Stuarts", "The MacAlpins"], answer: [1], explanation: "The MacDonalds of Glencoe were late in taking the oath and were all killed." },
    { id: "ts-q55", lessonId: "glorious-revolution", page: 38, type: "truefalse", prompt: "James II was a Protestant.", options: ["True", "False"], answer: [1], explanation: "False. James II was a Roman Catholic. His heirs, his two daughters, were firmly Protestant." },
  ],

  flags: [
    { page: 97, text: "The PDF's summary says the Act for the Government of Wales was under King Henry VII. The main text (p. 33) says it was during the reign of Henry VIII, which is correct. This site teaches Henry VIII." },
    { page: 98, text: "The PDF's summary gives \"1640: Beginning of English Civil War\". The main text (p. 37) says civil war began in 1642; 1640 is when Charles I recalled Parliament. This site teaches 1642." },
    { page: 98, text: "The PDF's summary says Drake helped defeat the Armada \"and who later sailed around the world\". His voyage round the world (1577–80) came before the Armada (1588). The main text (p. 35) gives no order." },
    { page: 98, text: "The PDF's summary dates Cromwell as Lord Protector \"circa 1640s–1650s\". He held the title from 1653 to his death in 1658 (main text p. 37 gives only 1658)." },
    { page: 34, text: "The PDF text is missing a word: \"a Protestant Church of Scotland with an leadership\". The official handbook reads \"an elected leadership\"." },
    { page: 35, text: "The handbook says Elizabeth kept Mary, Queen of Scots prisoner for 20 years. Historically it was about 19 years (1568–1587). Learn the handbook's figure of 20." },
  ],
};
