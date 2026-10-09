import type { Unit } from "../types";

/**
 * Unit 5.5 — Respecting the law. Handbook (Britizen PDF) § 5.5 incl. 5.5.1, pp. 82–85.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const respectingTheLaw: Unit = {
  id: "respecting-the-law",
  number: "5.5",
  title: "Respecting the law",
  handbook: {
    chapter: 5,
    chapterTitle: "The UK government, the law and your role",
    section: "5.5",
    pages: [82, 85],
  },
  status: "available",
  dek: "Criminal and civil law, the police, and the courts across the UK.",
  heroImageId: "rl-royal-courts-of-justice",
  overview: [
    "Knowing and obeying the law is one of the most important responsibilities of everyone who lives in the UK. The handbook explains the difference between criminal law (crimes, punished by the courts) and civil law (disputes between people), with everyday examples of each, and describes what the police do and how to complain about them.",
    "The second half covers the courts. England and Wales, Scotland and Northern Ireland each organise their courts a little differently: different names for the courts, different jury sizes (12 or 15), a third verdict in Scotland, and different systems for young offenders. These comparisons are some of the most testable details in the whole handbook.",
  ],
  objectives: [
    "Explain the difference between criminal and civil law and give examples of each.",
    "Describe the duties of the police, the role of Police and Crime Commissioners and PCSOs, and how to complain.",
    "Describe the terrorist and extremist threats the handbook identifies and what to do if someone tries to recruit you.",
    "Compare the criminal courts of England and Wales, Scotland and Northern Ireland, including juries and youth justice.",
    "Explain how civil courts and the small claims procedure work, and where to find a solicitor.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "criminal-and-civil",
      title: "Criminal law and civil law",
      dek: "Equal treatment under the law, and the two main kinds of law, with everyday examples.",
      pages: [82],
      minutes: 5,
      recall: {
        question: "Before you read: is a dispute between a landlord and a tenant about repairs a criminal or a civil matter?",
        answer: "Civil. Civil law settles disputes between individuals or groups; criminal law deals with crimes punished by the courts.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Everyone must obey the law",
          pages: [82],
          paragraphs: [
            "One of the most important responsibilities of all UK residents is to know and obey the law. All residents, whatever their background, are expected to comply with the law and to understand that some things allowed in other legal systems are not acceptable in the UK. Those who do not respect the law should not expect to be allowed to become permanent residents.",
            "The law is relevant to all areas of life, including personal and business affairs. Every person in the UK receives equal treatment under the law: it applies in the same way to everyone, no matter who they are or where they are from.",
          ],
        },
        {
          type: "cards",
          heading: "Two kinds of law",
          cards: [
            {
              id: "rl-criminal-law",
              title: "Criminal law",
              meta: "Crimes · police · punished by the courts",
              summary: "Relates to crimes, usually investigated by the police or another authority, and punished by the courts.",
              detail: [
                "Crimes are usually investigated by the police or another authority such as a council, and are punished by the courts.",
                "Carrying a weapon of any kind is a criminal offence, even for self-defence: a gun, a knife or anything made or adapted to cause injury.",
                "Selling or buying drugs such as heroin, cocaine, ecstasy and cannabis is illegal.",
                "Racial crime: causing harassment, alarm or distress to someone because of their religion or ethnic origin.",
                "It is illegal to sell tobacco products (cigarettes, cigars, roll-up tobacco) to anyone under 18.",
                "Smoking tobacco is against the law in nearly every enclosed public place; signs show where you cannot smoke.",
                "It is an offence to sell alcohol to anyone under 18, or to buy alcohol for them. Exception: people aged 16 or over can drink alcohol with a meal in a hotel or restaurant.",
                "Some places have alcohol-free zones. The police can confiscate alcohol or move young people on from public places; you can be fined or arrested.",
                "Many other crimes apply in most countries, such as murder, theft and assault (more at www.gov.uk).",
              ],
              page: 82,
            },
            {
              id: "rl-civil-law",
              title: "Civil law",
              meta: "Disputes between individuals or groups",
              summary: "Used to settle disputes between individuals or groups.",
              detail: [
                "Housing law: disputes between landlords and tenants over issues such as repairs and eviction.",
                "Consumer rights: for example, a dispute about faulty goods or services.",
                "Employment law: disputes over wages, and cases of unfair dismissal or discrimination in the workplace.",
                "Debt: people might be taken to court if they owe money to someone.",
              ],
              page: 82,
            },
          ],
        },
        {
          type: "sequence",
          heading: "Age limits to remember",
          page: 82,
          steps: [
            { label: "Under 18: no tobacco", detail: "It is illegal to sell tobacco products to anyone under 18." },
            { label: "Under 18: no alcohol", detail: "Illegal to sell alcohol to under-18s, or to buy it for them." },
            { label: "16 or over: the one exception", detail: "May drink alcohol with a meal in a hotel or restaurant." },
          ],
        },
      ],
      keyFacts: [
        { text: "Every person in the UK receives equal treatment under the law.", page: 82 },
        { text: "Criminal law relates to crimes, investigated by the police or another authority (e.g. a council) and punished by the courts.", page: 82 },
        { text: "Civil law is used to settle disputes between individuals or groups.", page: 82 },
        { text: "Carrying a weapon of any kind is a criminal offence, even for self-defence.", page: 82 },
        { text: "Tobacco and alcohol cannot be sold to under-18s; 16+ may drink alcohol with a meal in a hotel or restaurant.", page: 82 },
        { text: "Civil law examples: housing, consumer rights, employment, debt.", page: 82 },
      ],
      mnemonics: [
        {
          title: "Civil disputes: H-C-E-D",
          device: "\"Houses, Consumers, Employers, Debts\"",
          explanation: "The handbook's four civil law examples: housing law, consumer rights, employment law and debt.",
        },
        {
          title: "Criminal = Crown punishes; civil = people disagree",
          device: "Crime → police → punishment. Dispute → court settles it.",
          explanation: "If the police investigate and the court punishes, it is criminal. If two parties argue over money, goods, housing or a job, it is civil.",
        },
      ],
      checkQuestionIds: ["rl-q01", "rl-q02", "rl-q04"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "police-and-terrorism",
      title: "The police, terrorism and extremism",
      dek: "What the police do, who oversees them, how to complain, and the threats the UK faces.",
      pages: [83, 84],
      minutes: 6,
      heroImageId: "rl-police-patrol",
      recall: {
        question: "Before you read: what are the three duties of the police?",
        answer: "To protect life and property, to prevent disturbances (keep the peace), and to prevent and detect crime.",
      },
      blocks: [
        {
          type: "sequence",
          heading: "The job of the police",
          page: 83,
          steps: [
            { label: "Protect", detail: "Protect life and property." },
            { label: "Keep the peace", detail: "Prevent disturbances." },
            { label: "Prevent and detect", detail: "Prevent and detect crime." },
          ],
        },
        {
          type: "prose",
          heading: "How policing is organised",
          pages: [83],
          paragraphs: [
            "The police are organised into a number of separate police forces headed by Chief Constables. They are independent of the government.",
            "In November 2012 the public elected Police and Crime Commissioners (PCCs) in England and Wales. PCCs are directly elected individuals responsible for an efficient and effective police force that reflects local needs. They set local police priorities and the local policing budget, and appoint the Chief Constable.",
            "The police are a public service that helps and protects everyone. Officers must themselves obey the law: they must not misuse their authority, make a false statement, be rude or abusive, or commit racial discrimination. Corrupt officers, or those who misuse their authority, are severely punished.",
            "Police officers are supported by police community support officers (PCSOs). PCSOs' roles vary by area, but they usually patrol the streets, work with the public, and support officers at crime scenes and major events.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "rl-police-patrol",
            kind: "photograph",
            caption: "Two police officers and a police community support officer on patrol near Buckingham Palace, London.",
          },
        },
        {
          type: "prose",
          heading: "Your part, and your rights",
          pages: [83],
          paragraphs: [
            "Everyone in the UK is expected to help the police prevent and detect crimes whenever they can.",
            "If you are arrested and taken to a police station, an officer will tell you the reason for your arrest and you will be able to seek legal advice.",
          ],
        },
        {
          type: "cards",
          heading: "Complaining about the police",
          cards: [
            {
              id: "rl-complaints-direct",
              title: "Directly",
              meta: "Anywhere in the UK",
              summary: "Go to a police station or write to the Chief Constable.",
              detail: ["Anyone can complain by going to a police station or writing to the Chief Constable of the force involved."],
              page: 83,
            },
            {
              id: "rl-ipcc",
              title: "Independent Police Complaints Commission",
              meta: "England and Wales",
              summary: "The independent complaints body named for England and Wales.",
              detail: ["Complaints can also be made to an independent body. In England and Wales the handbook names the Independent Police Complaints Commission."],
              page: 83,
              context: { text: "Replaced in 2018 by the Independent Office for Police Conduct (IOPC)." },
            },
            {
              id: "rl-pccs-scotland",
              title: "Police Complaints Commissioner for Scotland",
              meta: "Scotland",
              summary: "The independent complaints body for Scotland.",
              detail: ["In Scotland, complaints can be made to the Police Complaints Commissioner for Scotland."],
              page: 83,
            },
            {
              id: "rl-ombudsman-ni",
              title: "Police Ombudsman for Northern Ireland",
              meta: "Northern Ireland",
              summary: "The independent complaints body for Northern Ireland.",
              detail: ["In Northern Ireland, complaints go to the Police Ombudsman for Northern Ireland."],
              page: 83,
            },
          ],
        },
        {
          type: "prose",
          heading: "Terrorism and extremism",
          pages: [83, 84],
          paragraphs: [
            "The UK faces a range of terrorist threats. The handbook says the most serious is from Al Qa'ida, its affiliates and like-minded organisations. The UK also faces other kinds of terrorism, such as Northern Ireland-related terrorism.",
            "All terrorist groups try to radicalise and recruit people. Evidence shows they attract very low levels of public support, but people making their home in the UK should be aware of the threat.",
            "It is important that all citizens feel safe, including from all kinds of extremism (vocal or active opposition to fundamental British values), such as religious extremism and far-right extremism.",
            "If you think someone is trying to persuade you to join an extremist or terrorist cause, you should notify your local police force.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The Independent Police Complaints Commission was replaced by the Independent Office for Police Conduct (IOPC) in 2018. Questions based on the handbook may still use the old name." },
            {
              text: "In 2025 the UK government announced plans to abolish Police and Crime Commissioners in England and Wales; in some areas their role has already passed to elected mayors.",
              verify: "Check the current status of PCCs on gov.uk.",
            },
            { text: "The handbook's description of the terrorist threat (Al Qa'ida as the most serious) dates from 2013; official threat assessments have changed since." },
          ],
        },
      ],
      keyFacts: [
        { text: "Police duties: protect life and property, prevent disturbances (keep the peace), prevent and detect crime.", page: 83 },
        { text: "Police forces are headed by Chief Constables and are independent of the government.", page: 83 },
        { text: "Police and Crime Commissioners (PCCs) were first elected in England and Wales in November 2012; they appoint the Chief Constable.", page: 83 },
        { text: "PCSOs patrol the streets, work with the public and support officers at crime scenes and major events.", page: 83 },
        { text: "If arrested, you are told the reason and can seek legal advice.", page: 83 },
        { text: "Independent complaints bodies: IPCC (England and Wales), Police Complaints Commissioner for Scotland, Police Ombudsman for Northern Ireland.", page: 83 },
        { text: "If someone tries to recruit you to an extremist or terrorist cause, notify your local police.", page: 84 },
      ],
      mnemonics: [
        {
          title: "Three police duties",
          device: "\"Protect, Peace, Prevent\"",
          explanation: "Protect life and property; keep the Peace (prevent disturbances); Prevent and detect crime.",
        },
        {
          title: "PCCs: elected 2012",
          device: "PCCs Pick the Chief Constable and set Priorities and the budget.",
          explanation: "Police and Crime Commissioners were first elected in November 2012 in England and Wales.",
        },
      ],
      checkQuestionIds: ["rl-q08", "rl-q10", "rl-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "criminal-courts",
      title: "The judiciary and the criminal courts",
      dek: "Judges, magistrates and juries, and how the three legal systems differ.",
      pages: [84],
      minutes: 8,
      heroImageId: "rl-magistrates-court",
      recall: {
        question: "Before you read: how many people sit on a jury in Scotland? And in England?",
        answer: "15 in Scotland; 12 in England, Wales and Northern Ireland.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The judiciary",
          pages: [84],
          paragraphs: [
            "Judges, together called 'the judiciary', are responsible for interpreting the law and ensuring that trials are conducted fairly. The government cannot interfere with this.",
            "If judges agree that the government has acted illegally, the government must either change its policies or ask Parliament to change the law. If a public body is not respecting someone's legal rights, judges can order it to change its practices and/or pay compensation.",
            "Judges also decide disputes between members of the public or organisations, for example about contracts, property, employment rights, or after an accident.",
          ],
        },
        {
          type: "prose",
          heading: "Minor criminal cases",
          pages: [84],
          paragraphs: [
            "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a Magistrates' Court. In Scotland, minor criminal offences go to a Justice of the Peace Court.",
            "Magistrates and Justices of the Peace (JPs) are members of the local community. In England, Wales and Scotland they usually work unpaid and do not need legal qualifications; they receive training and are supported by a legal adviser. Magistrates decide the verdict and, if the person is found guilty, the sentence.",
            "In Northern Ireland, cases are heard by a District Judge or Deputy District Judge, who is legally qualified and paid.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "rl-magistrates-court",
            kind: "photograph",
            caption: "The Magistrates' Court on Clifford Street, York, a building listed for its architecture.",
          },
        },
        {
          type: "prose",
          heading: "Serious criminal cases and juries",
          pages: [84],
          paragraphs: [
            "In England, Wales and Northern Ireland, serious offences are tried in front of a judge and jury in a Crown Court. In Scotland, serious cases are heard in a Sheriff Court with either a sheriff or a sheriff with a jury. The most serious cases in Scotland, such as murder, are heard at a High Court with a judge and jury.",
            "A jury is made up of members of the public chosen at random from the local electoral register. Anyone summoned for jury service must do it unless they are not eligible (for example, because of a criminal conviction) or give a good reason to be excused, such as ill health.",
            "The jury listens to the evidence and decides a verdict of 'guilty' or 'not guilty'. In Scotland a third verdict, 'not proven', is also possible. If the jury finds the defendant guilty, the judge decides the penalty.",
          ],
        },
        {
          type: "prose",
          heading: "Young offenders",
          pages: [84],
          paragraphs: [
            "In England, Wales and Northern Ireland, an accused person aged 10 to 17 is normally tried in a Youth Court, in front of up to three specially trained magistrates or a District Judge. The most serious cases go to the Crown Court.",
            "Parents or carers are expected to attend. The public are not allowed in Youth Courts, and the young person's name or photograph cannot be published or used by the media.",
            "Scotland uses the Children's Hearings System for children and young people who have committed an offence. Northern Ireland has a system of youth conferencing to decide how a child who has offended should be dealt with.",
          ],
        },
        {
          type: "cards",
          heading: "Criminal courts compared",
          cards: [
            {
              id: "rl-courts-england-wales",
              title: "England and Wales",
              meta: "Magistrates' Court · Crown Court · jury of 12",
              summary: "Minor cases: Magistrates' Court. Serious cases: Crown Court with judge and jury of 12.",
              detail: [
                "Minor criminal cases: Magistrates' Court, with unpaid magistrates who need no legal qualifications.",
                "Serious offences: Crown Court, judge and jury.",
                "Jury: 12 members. Verdicts: guilty or not guilty.",
                "Ages 10–17: Youth Court (up to three specially trained magistrates or a District Judge).",
              ],
              page: 84,
            },
            {
              id: "rl-courts-scotland",
              title: "Scotland",
              meta: "Justice of the Peace Court · Sheriff Court · High Court · jury of 15",
              summary: "Minor cases: JP Court. Serious: Sheriff Court. Most serious: High Court. Jury of 15; three verdicts.",
              detail: [
                "Minor criminal offences: Justice of the Peace Court, with unpaid JPs who need no legal qualifications.",
                "Serious cases: Sheriff Court, with a sheriff or a sheriff with a jury.",
                "Most serious cases, such as murder: High Court, judge and jury.",
                "Jury: 15 members. Verdicts: guilty, not guilty or not proven.",
                "Young people: the Children's Hearings System.",
              ],
              page: 84,
              imageId: "rl-court-of-session-building",
            },
            {
              id: "rl-courts-ni",
              title: "Northern Ireland",
              meta: "Magistrates' Court · Crown Court · jury of 12",
              summary: "Like England and Wales, but minor cases are heard by a paid, legally qualified District Judge.",
              detail: [
                "Minor criminal cases: Magistrates' Court, heard by a District Judge or Deputy District Judge, who is legally qualified and paid.",
                "Serious offences: Crown Court, judge and jury.",
                "Jury: 12 members.",
                "Ages 10–17: Youth Court; also a system of youth conferencing.",
              ],
              page: 84,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Scotland's Parliament voted in 2025 to abolish the 'not proven' verdict. The handbook (and the test) describes three verdicts in Scotland.",
              verify: "Check whether abolition of 'not proven' has come into force.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "The judiciary interprets the law and ensures trials are fair; the government cannot interfere.", page: 84 },
        { text: "Minor criminal cases: Magistrates' Court (England, Wales, NI); Justice of the Peace Court (Scotland).", page: 84 },
        { text: "Magistrates and JPs in England, Wales and Scotland are usually unpaid and need no legal qualifications; in NI a paid, qualified District Judge hears cases.", page: 84 },
        { text: "Serious cases: Crown Court (England, Wales, NI); Sheriff Court, or High Court for the most serious, in Scotland.", page: 84 },
        { text: "Juries are chosen at random from the electoral register: 12 members in England, Wales and NI; 15 in Scotland.", page: 84 },
        { text: "Scotland has a third verdict: 'not proven'. If the jury finds someone guilty, the judge decides the penalty.", page: 84 },
        { text: "Youth Courts hear cases of 10–17-year-olds in England, Wales and NI; Scotland uses the Children's Hearings System; NI also has youth conferencing.", page: 84 },
      ],
      mnemonics: [
        {
          title: "Scotland is the odd one out",
          device: "Scotland: 15 jurors, 3 verdicts, Sheriff not Crown, JP not Magistrates.",
          explanation: "Almost every Scottish court detail differs from England, Wales and Northern Ireland, which share Magistrates' Courts, Crown Courts and 12-person juries.",
        },
        {
          title: "Jury numbers",
          device: "\"Twelve for the Crown, fifteen for the Sheriff.\"",
          explanation: "Crown Court juries (England, Wales, NI) have 12 members; Scottish juries have 15.",
        },
        {
          title: "Youth Court ages",
          device: "\"From ten to the teens\": 10 to 17.",
          explanation: "Youth Courts hear cases where the accused is aged 10 to 17.",
        },
      ],
      checkQuestionIds: ["rl-q15", "rl-q17", "rl-q19"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "civil-courts-and-advice",
      title: "Civil courts, small claims and legal advice",
      dek: "County Courts, the High Court and Court of Session, small claims, and solicitors.",
      pages: [84, 85],
      minutes: 5,
      heroImageId: "rl-royal-courts-of-justice",
      recall: {
        question: "Before you read: what is the limit for the small claims procedure in England and Wales?",
        answer: "Claims of less than £10,000. In Scotland and Northern Ireland the handbook gives £5,000.",
      },
      blocks: [
        {
          type: "prose",
          heading: "County Courts and higher civil courts",
          pages: [84],
          paragraphs: [
            "County Courts deal with a wide range of civil disputes: people trying to get back money they are owed, personal injury cases, family matters, breaches of contract and divorce. In Scotland most of these matters are dealt with in the Sheriff Court.",
            "More serious civil cases, for example when a large amount of compensation is being claimed, go to the High Court in England, Wales and Northern Ireland. In Scotland they go to the Court of Session in Edinburgh.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "rl-royal-courts-of-justice",
              kind: "photograph",
              caption: "The Royal Courts of Justice on the Strand, London, home of the High Court of England and Wales.",
              context: "The building is not named in the handbook.",
            },
            {
              imageId: "rl-court-of-session-building",
              kind: "photograph",
              caption: "Parliament House, Edinburgh, home of the Court of Session, with the statue of Charles II in front.",
            },
          ],
        },
        {
          type: "cards",
          heading: "Civil courts compared",
          cards: [
            {
              id: "rl-civil-ew-ni",
              title: "England, Wales and Northern Ireland",
              meta: "County Court · High Court",
              summary: "Most disputes: County Court. Serious cases: High Court.",
              detail: [
                "County Courts: money owed, personal injury, family matters, breaches of contract, divorce.",
                "High Court: more serious cases, e.g. large compensation claims.",
                "Small claims: under £10,000 in England and Wales; under £5,000 in Northern Ireland (as given in the handbook).",
              ],
              page: 84,
            },
            {
              id: "rl-civil-scotland",
              title: "Scotland",
              meta: "Sheriff Court · Court of Session",
              summary: "Most disputes: Sheriff Court. Serious cases: Court of Session, Edinburgh.",
              detail: [
                "Most civil matters: the Sheriff Court.",
                "More serious cases: the Court of Session in Edinburgh.",
                "Small claims: under £5,000 (as given in the handbook).",
              ],
              page: 84,
              imageId: "rl-court-of-session-building",
            },
          ],
        },
        {
          type: "prose",
          heading: "The small claims procedure",
          pages: [84, 85],
          paragraphs: [
            "The small claims procedure is an informal way to settle minor disputes without spending a lot of time and money on a lawyer. It is used for claims of less than £10,000 in England and Wales and £5,000 in Scotland and Northern Ireland.",
            "The hearing is held in front of a judge in an ordinary room, with people from both sides sitting around a table. Small claims can also be issued online through Money Claims Online.",
            "Details are available from your local County Court or Sheriff Court. Find your local court at www.gov.uk (England and Wales), www.scotcourts.gov.uk (Scotland) or www.courtsni.gov.uk (Northern Ireland).",
          ],
        },
        {
          type: "prose",
          heading: "Solicitors and legal advice",
          pages: [85],
          paragraphs: [
            "Solicitors are trained lawyers who give advice on legal matters, take action for their clients and represent them in court.",
            "It is important to check which areas of law a solicitor specialises in and that they have the right experience. The Citizens Advice Bureau can give you names of local solicitors and their specialisms, as can the Law Society (England and Wales), the Law Society of Scotland and the Law Society of Northern Ireland. Many solicitors also advertise in local newspapers and Yellow Pages.",
            "Solicitors' charges are usually based on how much time they spend on a case, so it is very important to find out at the start how much a case is likely to cost.",
          ],
        },
        {
          type: "map",
          heading: "Senior civil courts",
          placeIds: ["respecting-the-law-court-of-session", "respecting-the-law-royal-courts"],
          caption: "Serious civil cases in Scotland go to the Court of Session in Edinburgh; in England and Wales to the High Court.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Small claims limits have changed over time, and some editions of the official handbook give a lower figure for Scotland and Northern Ireland. Learn the handbook figures (£10,000 England and Wales; £5,000 Scotland and NI), but check current limits before going to court.",
              verify: "Check current small claims limits on gov.uk, scotcourts.gov.uk and nidirect.",
            },
            { text: "The Citizens Advice Bureau is now simply called Citizens Advice, and printed Yellow Pages directories have largely been discontinued." },
          ],
        },
      ],
      keyFacts: [
        { text: "County Courts handle money owed, personal injury, family matters, breaches of contract and divorce.", page: 84 },
        { text: "In Scotland most civil matters go to the Sheriff Court.", page: 84 },
        { text: "Serious civil cases: High Court (England, Wales, NI); Court of Session in Edinburgh (Scotland).", page: 84 },
        { text: "Small claims: under £10,000 in England and Wales; under £5,000 in Scotland and Northern Ireland.", page: 84 },
        { text: "Small claims hearings are informal, in front of a judge in an ordinary room, and can be issued online via Money Claims Online.", page: 84 },
        { text: "Solicitors' charges are usually based on time spent; find out the likely cost at the start.", page: 85 },
      ],
      mnemonics: [
        {
          title: "Small claims limits",
          device: "\"Ten in England, five in the others.\"",
          explanation: "£10,000 in England and Wales; £5,000 in Scotland and Northern Ireland (handbook figures).",
        },
        {
          title: "Session in Scotland",
          device: "Big Scottish civil cases go into Session in Edinburgh.",
          explanation: "The Court of Session in Edinburgh is Scotland's equivalent of the High Court for serious civil cases.",
        },
      ],
      checkQuestionIds: ["rl-q22", "rl-q24", "rl-q26"],
    },
  ],

  places: [
    { id: "respecting-the-law-court-of-session", name: "Court of Session", lat: 55.9494, lon: -3.1907, note: "Edinburgh. Hears more serious civil cases in Scotland.", page: 84, lessonId: "civil-courts-and-advice", era: "Today" },
    { id: "respecting-the-law-royal-courts", name: "Royal Courts of Justice", lat: 51.5136, lon: -0.1134, note: "London. Not named in the handbook: home of the High Court of England and Wales, shown in the lesson.", page: 84, lessonId: "civil-courts-and-advice", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Everyone in the UK receives equal treatment under the law.", page: 82 },
    { text: "Criminal law: crimes punished by the courts. Civil law: disputes between individuals or groups.", page: 82 },
    { text: "Carrying any weapon, even for self-defence, is a criminal offence.", page: 82 },
    { text: "No tobacco or alcohol sales to under-18s; 16+ may drink alcohol with a meal in a hotel or restaurant.", page: 82 },
    { text: "Police duties: protect life and property, keep the peace, prevent and detect crime. Forces are independent of government.", page: 83 },
    { text: "Police and Crime Commissioners were first elected in England and Wales in November 2012.", page: 83 },
    { text: "Minor criminal cases: Magistrates' Court (England, Wales, NI) or Justice of the Peace Court (Scotland).", page: 84 },
    { text: "Serious criminal cases: Crown Court (England, Wales, NI) or Sheriff Court / High Court (Scotland).", page: 84 },
    { text: "Juries: 12 in England, Wales and NI; 15 in Scotland. Scotland also has a 'not proven' verdict.", page: 84 },
    { text: "Youth Courts deal with 10–17-year-olds; Scotland has the Children's Hearings System; NI has youth conferencing.", page: 84 },
    { text: "Serious civil cases: High Court (England, Wales, NI) or Court of Session, Edinburgh (Scotland).", page: 84 },
    { text: "Small claims: under £10,000 (England and Wales) or £5,000 (Scotland and NI).", page: 84 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "rl-f01", lessonId: "criminal-and-civil", page: 82, front: "What is the difference between criminal law and civil law?", back: "Criminal law relates to crimes, investigated by the police or another authority and punished by the courts. Civil law settles disputes between individuals or groups." },
    { id: "rl-f02", lessonId: "criminal-and-civil", page: 82, front: "Is it legal to carry a knife for self-defence?", back: "No. It is a criminal offence to carry a weapon of any kind, even for self-defence." },
    { id: "rl-f03", lessonId: "criminal-and-civil", page: 82, front: "What is racial crime?", back: "Causing harassment, alarm or distress to someone because of their religion or ethnic origin." },
    { id: "rl-f04", lessonId: "criminal-and-civil", page: 82, front: "What is the exception to the rule that under-18s cannot drink alcohol?", back: "People aged 16 or over can drink alcohol with a meal in a hotel or restaurant." },
    { id: "rl-f05", lessonId: "criminal-and-civil", page: 82, front: "Give four examples of civil law.", back: "Housing law (landlord and tenant disputes), consumer rights (faulty goods or services), employment law (wages, unfair dismissal, discrimination) and debt." },
    { id: "rl-f06", lessonId: "criminal-and-civil", page: 82, front: "Name four drugs the handbook says it is illegal to buy or sell.", back: "Heroin, cocaine, ecstasy and cannabis." },
    { id: "rl-f07", lessonId: "police-and-terrorism", page: 83, front: "What are the three duties of the police?", back: "Protect life and property; prevent disturbances (keep the peace); prevent and detect crime." },
    { id: "rl-f08", lessonId: "police-and-terrorism", page: 83, front: "Who heads police forces, and are they controlled by the government?", back: "Chief Constables. Police forces are independent of the government." },
    { id: "rl-f09", lessonId: "police-and-terrorism", page: 83, front: "What do Police and Crime Commissioners do, and when were they first elected?", back: "Set local police priorities and budget, and appoint the Chief Constable. First elected in England and Wales in November 2012." },
    { id: "rl-f10", lessonId: "police-and-terrorism", page: 83, front: "What do PCSOs do?", back: "Police community support officers usually patrol the streets, work with the public, and support officers at crime scenes and major events." },
    { id: "rl-f11", lessonId: "police-and-terrorism", page: 83, front: "Name the independent police complaints bodies in each part of the UK.", back: "England and Wales: Independent Police Complaints Commission. Scotland: Police Complaints Commissioner for Scotland. Northern Ireland: Police Ombudsman for Northern Ireland." },
    { id: "rl-f12", lessonId: "police-and-terrorism", page: 84, front: "What should you do if someone tries to persuade you to join an extremist or terrorist cause?", back: "Notify your local police force." },
    { id: "rl-f13", lessonId: "criminal-courts", page: 84, front: "What does the judiciary do?", back: "Judges interpret the law and ensure trials are conducted fairly. The government cannot interfere." },
    { id: "rl-f14", lessonId: "criminal-courts", page: 84, front: "Where are minor criminal cases heard in England, Wales and NI, and in Scotland?", back: "Magistrates' Court (England, Wales, NI); Justice of the Peace Court (Scotland)." },
    { id: "rl-f15", lessonId: "criminal-courts", page: 84, front: "Who hears minor criminal cases in Northern Ireland?", back: "A District Judge or Deputy District Judge, who is legally qualified and paid." },
    { id: "rl-f16", lessonId: "criminal-courts", page: 84, front: "Where are serious criminal cases tried in Scotland?", back: "In a Sheriff Court (sheriff, or sheriff with jury); the most serious, such as murder, at the High Court with judge and jury." },
    { id: "rl-f17", lessonId: "criminal-courts", page: 84, front: "How many people are on a jury?", back: "12 in England, Wales and Northern Ireland; 15 in Scotland." },
    { id: "rl-f18", lessonId: "criminal-courts", page: 84, front: "What verdicts can a Scottish jury reach?", back: "Guilty, not guilty, or not proven." },
    { id: "rl-f19", lessonId: "criminal-courts", page: 84, front: "What is a Youth Court?", back: "In England, Wales and NI, the court for accused people aged 10 to 17, before up to three specially trained magistrates or a District Judge. The public cannot attend and the young person cannot be named." },
    { id: "rl-f20", lessonId: "criminal-courts", page: 84, front: "How are young offenders dealt with in Scotland and in Northern Ireland?", back: "Scotland: the Children's Hearings System. Northern Ireland: youth conferencing." },
    { id: "rl-f21", lessonId: "civil-courts-and-advice", page: 84, front: "What do County Courts deal with?", back: "Civil disputes such as money owed, personal injury, family matters, breaches of contract and divorce." },
    { id: "rl-f22", lessonId: "civil-courts-and-advice", page: 84, front: "Where are serious civil cases heard?", back: "The High Court in England, Wales and NI; the Court of Session in Edinburgh in Scotland." },
    { id: "rl-f23", lessonId: "civil-courts-and-advice", page: 84, front: "What are the small claims limits?", back: "Less than £10,000 in England and Wales; £5,000 in Scotland and Northern Ireland." },
    { id: "rl-f24", lessonId: "civil-courts-and-advice", page: 84, front: "How can small claims be issued online?", back: "Through Money Claims Online." },
    { id: "rl-f25", lessonId: "civil-courts-and-advice", page: 85, front: "What do solicitors do, and how do they usually charge?", back: "Trained lawyers who advise, take action for clients and represent them in court. Charges are usually based on time spent on the case." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // criminal-and-civil
    { id: "rl-q01", lessonId: "criminal-and-civil", page: 82, type: "single", prompt: "Which of these is an example of civil law?", options: ["Carrying a weapon", "Selling tobacco to under-18s", "A dispute between a landlord and tenant over repairs", "Racial crime"], answer: [2], explanation: "Housing disputes between landlords and tenants are civil matters. The others are criminal offences." },
    { id: "rl-q02", lessonId: "criminal-and-civil", page: 82, type: "truefalse", prompt: "It is legal to carry a knife if it is for self-defence.", options: ["True", "False"], answer: [1], explanation: "False. It is a criminal offence to carry a weapon of any kind, even for self-defence." },
    { id: "rl-q03", lessonId: "criminal-and-civil", page: 82, type: "single", prompt: "What is the minimum age to buy tobacco products in the UK?", options: ["16", "17", "18", "21"], answer: [2], explanation: "It is illegal to sell tobacco products to anyone under 18." },
    { id: "rl-q04", lessonId: "criminal-and-civil", page: 82, type: "single", prompt: "Under what circumstances can a 16-year-old legally drink alcohol?", options: ["At home with friends", "In a pub with a parent", "With a meal in a hotel or restaurant", "Never"], answer: [2], explanation: "People aged 16 or over can drink alcohol with a meal in a hotel or restaurant. This is the one exception." },
    { id: "rl-q05", lessonId: "criminal-and-civil", page: 82, type: "multi", prompt: "Which TWO are examples of civil law?", options: ["Disputes about faulty goods", "Selling drugs", "Unfair dismissal from work", "Drinking in an alcohol-free zone"], answer: [0, 2], explanation: "Consumer rights and employment law are civil law. Selling drugs and drinking in an alcohol-free zone are criminal matters." },
    { id: "rl-q06", lessonId: "criminal-and-civil", page: 82, type: "single", prompt: "Who usually investigates crimes?", options: ["The civil service", "The police or another authority such as a council", "Solicitors", "The House of Lords"], answer: [1], explanation: "Crimes are usually investigated by the police or another authority such as a council, and punished by the courts." },
    { id: "rl-q07", lessonId: "criminal-and-civil", page: 82, type: "truefalse", prompt: "It is against the law to smoke tobacco in nearly every enclosed public place in the UK.", options: ["True", "False"], answer: [0], explanation: "True. Signs are displayed to show where you cannot smoke." },
    // police-and-terrorism
    { id: "rl-q08", lessonId: "police-and-terrorism", page: 83, type: "multi", prompt: "Which TWO are duties of the police?", options: ["Protect life and property", "Set the national budget", "Prevent and detect crime", "Decide sentences in court"], answer: [0, 2], explanation: "The police protect life and property, prevent disturbances and prevent and detect crime. Judges and magistrates decide sentences." },
    { id: "rl-q09", lessonId: "police-and-terrorism", page: 83, type: "truefalse", prompt: "The police are independent of the government.", options: ["True", "False"], answer: [0], explanation: "True. Police forces are headed by Chief Constables and are independent of the government." },
    { id: "rl-q10", lessonId: "police-and-terrorism", page: 83, type: "single", prompt: "When did the public first elect Police and Crime Commissioners in England and Wales?", options: ["May 1997", "November 2012", "June 2016", "January 2020"], answer: [1], explanation: "PCCs were elected in November 2012. They set local priorities and budget and appoint the Chief Constable." },
    { id: "rl-q11", lessonId: "police-and-terrorism", page: 83, type: "single", prompt: "Who appoints the Chief Constable of a police force in England and Wales?", options: ["The Home Secretary", "The Prime Minister", "The Police and Crime Commissioner", "The local council"], answer: [2], explanation: "Police and Crime Commissioners appoint the Chief Constable." },
    { id: "rl-q12", lessonId: "police-and-terrorism", page: 83, type: "single", prompt: "To which body can you complain about the police in Northern Ireland?", options: ["The Police Complaints Commissioner", "The Police Ombudsman for Northern Ireland", "The Independent Police Complaints Commission", "The Northern Ireland Assembly"], answer: [1], explanation: "In Northern Ireland complaints go to the Police Ombudsman. Scotland has the Police Complaints Commissioner; England and Wales the IPCC (now IOPC)." },
    { id: "rl-q13", lessonId: "police-and-terrorism", page: 83, type: "single", prompt: "Who supports police officers by patrolling the streets and helping at crime scenes and major events?", options: ["Magistrates", "Police community support officers (PCSOs)", "Justices of the Peace", "Civil servants"], answer: [1], explanation: "PCSOs usually patrol the streets, work with the public and support officers at crime scenes and major events." },
    { id: "rl-q14", lessonId: "police-and-terrorism", page: 84, type: "single", prompt: "What should you do if someone tries to persuade you to join an extremist or terrorist cause?", options: ["Ignore it", "Tell your MP", "Notify your local police force", "Write to a newspaper"], answer: [2], explanation: "The handbook says you should notify your local police force." },
    { id: "rl-q14b", lessonId: "police-and-terrorism", page: 83, type: "truefalse", prompt: "If you are arrested, a police officer will tell you the reason for your arrest and you can seek legal advice.", options: ["True", "False"], answer: [0], explanation: "True. You are told why you have been arrested and can seek legal advice." },
    // criminal-courts
    { id: "rl-q15", lessonId: "criminal-courts", page: 84, type: "single", prompt: "How many people are on a jury in Scotland?", options: ["10", "12", "15", "21"], answer: [2], explanation: "A Scottish jury has 15 members; juries in England, Wales and Northern Ireland have 12." },
    { id: "rl-q16", lessonId: "criminal-courts", page: 84, type: "single", prompt: "Where are most minor criminal cases dealt with in Scotland?", options: ["Magistrates' Court", "Justice of the Peace Court", "Crown Court", "Court of Session"], answer: [1], explanation: "In Scotland minor criminal offences go to a Justice of the Peace Court. England, Wales and NI use Magistrates' Courts." },
    { id: "rl-q17", lessonId: "criminal-courts", page: 84, type: "single", prompt: "In England, Wales and Northern Ireland, where are serious criminal offences tried?", options: ["Magistrates' Court", "County Court", "Crown Court", "Youth Court"], answer: [2], explanation: "Serious offences are tried before a judge and jury in a Crown Court." },
    { id: "rl-q18", lessonId: "criminal-courts", page: 84, type: "single", prompt: "Which verdict is possible in Scotland but not in the rest of the UK?", options: ["Guilty", "Not guilty", "Not proven", "Dismissed"], answer: [2], explanation: "In Scotland a third verdict, 'not proven', is also possible." },
    { id: "rl-q19", lessonId: "criminal-courts", page: 84, type: "single", prompt: "In England, Wales and Northern Ireland, which court normally hears cases where the accused is aged 10 to 17?", options: ["Crown Court", "Youth Court", "County Court", "Children's Hearings System"], answer: [1], explanation: "A Youth Court, in front of up to three specially trained magistrates or a District Judge. Scotland uses the Children's Hearings System." },
    { id: "rl-q20", lessonId: "criminal-courts", page: 84, type: "truefalse", prompt: "Magistrates in England and Wales must be qualified lawyers and are paid.", options: ["True", "False"], answer: [1], explanation: "False. In England, Wales and Scotland magistrates and JPs usually work unpaid and do not need legal qualifications. In NI a paid, qualified District Judge hears cases." },
    { id: "rl-q21", lessonId: "criminal-courts", page: 84, type: "multi", prompt: "Which TWO statements about juries are correct?", options: ["Jury members are chosen at random from the electoral register", "The jury decides the penalty", "In England a jury has 12 members", "Anyone can refuse jury service without a reason"], answer: [0, 2], explanation: "Jurors are chosen at random from the electoral register; English juries have 12 members. The judge decides the penalty, and you must serve unless ineligible or excused for a good reason." },
    { id: "rl-q21b", lessonId: "criminal-courts", page: 84, type: "single", prompt: "Which system does Northern Ireland use to consider how a child who has offended should be dealt with?", options: ["Children's Hearings System", "Youth conferencing", "Small claims procedure", "Sheriff Court"], answer: [1], explanation: "Northern Ireland has a system of youth conferencing. Scotland uses the Children's Hearings System." },
    { id: "rl-q21c", lessonId: "criminal-courts", page: 84, type: "truefalse", prompt: "The government can interfere with how judges interpret the law.", options: ["True", "False"], answer: [1], explanation: "False. Judges interpret the law and ensure fair trials, and the government cannot interfere." },
    // civil-courts-and-advice
    { id: "rl-q22", lessonId: "civil-courts-and-advice", page: 84, type: "single", prompt: "What is the limit for the small claims procedure in England and Wales?", options: ["£3,000", "£5,000", "£10,000", "£25,000"], answer: [2], explanation: "Small claims in England and Wales are claims of less than £10,000; the handbook gives £5,000 for Scotland and Northern Ireland." },
    { id: "rl-q23", lessonId: "civil-courts-and-advice", page: 84, type: "single", prompt: "In Scotland, where are more serious civil cases dealt with?", options: ["The High Court of Justiciary", "The Court of Session in Edinburgh", "The Crown Court", "The Supreme Court in London"], answer: [1], explanation: "In Scotland, serious civil cases go to the Court of Session in Edinburgh. In England, Wales and NI they go to the High Court." },
    { id: "rl-q24", lessonId: "civil-courts-and-advice", page: 84, type: "multi", prompt: "Which TWO kinds of case do County Courts deal with?", options: ["Divorce", "Murder", "Breaches of contract", "Terrorism"], answer: [0, 2], explanation: "County Courts deal with civil disputes: money owed, personal injury, family matters, breaches of contract and divorce. Murder and terrorism are criminal matters." },
    { id: "rl-q25", lessonId: "civil-courts-and-advice", page: 84, type: "truefalse", prompt: "Small claims hearings are held in front of a judge in an ordinary room, with both sides sitting around a table.", options: ["True", "False"], answer: [0], explanation: "True. It is an informal procedure designed to avoid the cost of a lawyer." },
    { id: "rl-q26", lessonId: "civil-courts-and-advice", page: 84, type: "single", prompt: "How can small claims be issued online?", options: ["Through Money Claims Online", "Through the Electoral Commission", "Through Hansard", "They cannot be issued online"], answer: [0], explanation: "Small claims can be issued online through Money Claims Online." },
    { id: "rl-q27", lessonId: "civil-courts-and-advice", page: 85, type: "single", prompt: "How are solicitors' charges usually calculated?", options: ["A fixed fee set by law", "By how much time they spend on a case", "As a share of any compensation", "They are always free"], answer: [1], explanation: "Charges are usually based on time spent, so find out at the start how much a case is likely to cost." },
    { id: "rl-q28", lessonId: "civil-courts-and-advice", page: 84, type: "single", prompt: "In Scotland, where are most civil matters (such as debts and contract disputes) dealt with?", options: ["County Court", "Sheriff Court", "Justice of the Peace Court", "Youth Court"], answer: [1], explanation: "In Scotland most of the matters handled by County Courts elsewhere go to the Sheriff Court." },
  ],

  flags: [
    { page: 83, text: "The Independent Police Complaints Commission (England and Wales) was replaced by the Independent Office for Police Conduct (IOPC) in 2018." },
    { page: 83, text: "The PDF abbreviates police community support officers as 'PSCOs'; the correct abbreviation is PCSOs." },
    { page: 83, text: "Police and Crime Commissioners: the UK government announced in 2025 that they will be abolished, and in some areas their functions already sit with elected mayors. Verify current arrangements." },
    { page: 83, text: "The description of the terrorist threat (Al Qa'ida as the most serious) reflects 2013." },
    { page: 84, text: "Scotland voted in 2025 to abolish the 'not proven' verdict. The handbook teaches three Scottish verdicts; check whether the change is in force." },
    { page: 84, text: "Small claims limits for Scotland and Northern Ireland have changed over time and differ between editions of the handbook (some give £3,000). Teach the PDF's £5,000 but verify current limits." },
    { page: 85, text: "Citizens Advice Bureau is now Citizens Advice; Yellow Pages is a dated reference." },
  ],
};
