import type { Unit } from "../types";

/**
 * Unit 5.4 — Rights, tax and driving. Handbook (Britizen PDF) § 5.4, pp. 79–81.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const rightsTaxDriving: Unit = {
  id: "rights-tax-driving",
  number: "5.4",
  title: "Rights, tax and driving",
  handbook: {
    chapter: 5,
    chapterTitle: "The UK government, the law and your role",
    section: "5.4",
    pages: [79, 81],
  },
  status: "available",
  dek: "Human rights, equal opportunities, income tax, National Insurance and driving.",
  heroImageId: "rights-tax-driving-magna-carta",
  overview: [
    "This section starts with the roots of British rights (Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689) and the European Convention on Human Rights, which Britain helped to draft and which the Human Rights Act 1998 brought into UK law. It then explains the laws on equal opportunities and three serious crimes the handbook singles out: domestic violence, female genital mutilation and forced marriage.",
    "The second half is practical: how income tax and National Insurance are paid, how to get a National Insurance number, and the rules for driving. Expect questions with numbers in them: 1950, 1998, 2007, 2008, 16, 17, 70, two years, three years and 12 months.",
  ],
  objectives: [
    "Name the historic documents at the root of British rights and list principles of the European Convention on Human Rights.",
    "Explain what the Human Rights Act 1998 did and list the grounds on which unfair treatment is illegal.",
    "Explain why domestic violence, FGM and forced marriage are crimes, and what a Forced Marriage Protection Order is.",
    "Describe how income tax and National Insurance are paid and what they pay for.",
    "State the age limits, tests and vehicle rules for driving in the UK.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "human-rights",
      title: "Human rights and equal opportunities",
      dek: "From Magna Carta to the Human Rights Act 1998, and the law against discrimination.",
      pages: [79],
      minutes: 6,
      heroImageId: "rights-tax-driving-magna-carta",
      recall: {
        question: "Before you read: in which year did the UK sign the European Convention on Human Rights?",
        answer: "1950. The UK was one of the first countries to sign it.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Where British rights come from",
          pages: [79],
          paragraphs: [
            "Britain has a long history of respecting individual rights and ensuring essential freedoms. These rights have their roots in Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689, and have developed over time.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "rights-tax-driving-magna-carta",
              kind: "manuscript",
              caption: "One of the surviving original copies of Magna Carta (1215), British Library, Cotton MS Augustus II.106.",
              context: "Magna Carta was agreed by King John in 1215. It is covered in the Middle Ages unit.",
            },
            {
              imageId: "rights-tax-driving-bill-of-rights",
              kind: "manuscript",
              caption: "The Bill of Rights of 1689, Parliamentary Archives.",
            },
          ],
        },
        {
          type: "prose",
          heading: "The European Convention on Human Rights",
          pages: [79],
          paragraphs: [
            "British diplomats and lawyers played an important role in drafting the European Convention on Human Rights and Fundamental Freedoms. The UK was one of the first countries to sign it, in 1950.",
            "The Human Rights Act 1998 incorporated the Convention into UK law. The government, public bodies and the courts must follow its principles.",
          ],
        },
        {
          type: "cards",
          heading: "Some principles in the Convention",
          cards: [
            { id: "echr-life", title: "Protection of life and body", summary: "Right to life; prohibition of torture.", detail: ["Right to life.", "Prohibition of torture."], page: 79 },
            { id: "echr-liberty", title: "Freedom from bondage", summary: "Prohibition of slavery and forced labour; right to liberty and security.", detail: ["Prohibition of slavery and forced labour.", "Right to liberty and security."], page: 79 },
            { id: "echr-justice", title: "Justice", summary: "Right to a fair trial.", detail: ["Right to a fair trial."], page: 79 },
            { id: "echr-freedoms", title: "Freedoms of mind and speech", summary: "Freedom of thought, conscience and religion; freedom of expression (speech).", detail: ["Freedom of thought, conscience and religion.", "Freedom of expression (speech)."], page: 79 },
          ],
        },
        {
          type: "prose",
          heading: "Equal opportunities",
          pages: [79],
          paragraphs: [
            "UK laws make sure people are not treated unfairly in any area of life or work because of their age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status.",
            "If you face discrimination you can get information from the Citizens Advice Bureau or from the bodies below.",
          ],
        },
        {
          type: "cards",
          heading: "Where to get help with discrimination",
          cards: [
            {
              id: "ehrc",
              title: "Equality and Human Rights Commission",
              meta: "England and Wales",
              summary: "The equality body for England and Wales.",
              detail: ["Covers England and Wales."],
              page: 79,
            },
            {
              id: "ehrc-scotland",
              title: "EHRC in Scotland and Scottish Human Rights Commission",
              meta: "Scotland",
              summary: "Two bodies cover Scotland.",
              detail: ["The Equality and Human Rights Commission in Scotland, and the Scottish Human Rights Commission."],
              page: 79,
            },
            {
              id: "ni-commissions",
              title: "Equality Commission for NI and NI Human Rights Commission",
              meta: "Northern Ireland",
              summary: "Two bodies cover Northern Ireland.",
              detail: ["The Equality Commission for Northern Ireland, and the Northern Ireland Human Rights Commission."],
              page: 79,
            },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The main equal opportunities law in Great Britain today is the Equality Act 2010. The Habeas Corpus Act dates from 1679." },
            { text: "The European Convention belongs to the Council of Europe, not the European Union, so leaving the EU did not change it." },
          ],
        },
      ],
      keyFacts: [
        { text: "British rights have roots in Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689.", page: 79 },
        { text: "British diplomats and lawyers helped draft the European Convention on Human Rights; the UK signed it in 1950, one of the first countries to do so.", page: 79 },
        { text: "The Human Rights Act 1998 incorporated the Convention into UK law; government, public bodies and courts must follow it.", page: 79 },
        { text: "Convention principles include the right to life, a fair trial, liberty and security; prohibition of torture, slavery and forced labour; freedom of thought, conscience, religion and expression.", page: 79 },
        { text: "Unfair treatment because of age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status is illegal.", page: 79 },
      ],
      mnemonics: [
        {
          title: "Three roots, in date order",
          device: "\"My Happy Birthday\": Magna Carta, Habeas Corpus, Bill of Rights.",
          explanation: "The three historic sources the handbook names, oldest first. Only the Bill of Rights has its date (1689) in the handbook.",
        },
        {
          title: "1950 then 1998",
          device: "Signed at mid-century, brought home at century's end.",
          explanation: "The UK signed the Convention in 1950; the Human Rights Act 1998 made it part of UK law.",
        },
      ],
      checkQuestionIds: ["rt-q01", "rt-q03", "rt-q06"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "protection-from-harm",
      title: "Domestic violence, FGM and forced marriage",
      dek: "Three crimes the handbook singles out, and the help available.",
      pages: [79, 80],
      minutes: 5,
      recall: {
        question: "Before you read: is an arranged marriage legal in the UK? Is a forced marriage?",
        answer:
          "An arranged marriage, where both people agree, is acceptable. A forced marriage, where one or both cannot or do not consent, is not: forcing someone to marry is a criminal offence.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Domestic violence",
          pages: [79],
          paragraphs: [
            "Brutality and violence in the home is a serious crime in the UK. Anyone who is violent towards their partner, whether a man or a woman, married or living together, can be prosecuted. Any man who forces a woman to have sex, including her husband, can be charged with rape.",
            "Anyone facing domestic violence should get help as soon as possible. A solicitor or the Citizens Advice Bureau can explain the options. In some areas there are safe places to stay called refuges or shelters. You can call the 24-hour National Domestic Violence Freephone Helpline at any time, and the police can help you find a safe place to stay.",
          ],
        },
        {
          type: "prose",
          heading: "Female genital mutilation",
          pages: [79],
          paragraphs: [
            "Female genital mutilation (FGM), also known as cutting or female circumcision, is illegal in the UK. Practising FGM, or taking a girl or woman abroad for FGM, is a criminal offence.",
          ],
        },
        {
          type: "prose",
          heading: "Forced marriage",
          pages: [79, 80],
          paragraphs: [
            "A marriage should be entered into with the full and free consent of both people. Arranged marriages, where both parties agree, are acceptable in the UK.",
            "A forced marriage is one where one or both parties do not or cannot consent. Forcing another person to marry is a criminal offence.",
          ],
        },
        {
          type: "cards",
          heading: "Forced Marriage Protection Orders",
          cards: [
            {
              id: "fmpo",
              title: "Forced Marriage Protection Orders",
              meta: "England, Wales and NI from 2008 · Scotland from November 2011",
              summary: "Court orders protecting someone from being forced into a marriage, or protecting someone already in one.",
              detail: [
                "Introduced in 2008 for England, Wales and Northern Ireland under the Forced Marriage (Civil Protection) Act 2007. Similar orders were introduced in Scotland in November 2011.",
                "A potential victim, or someone acting for them, can apply.",
                "Anyone who breaches an order can be jailed for up to two years for contempt of court.",
              ],
              page: 80,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The handbook tells you to find emergency numbers in Yellow Pages and calls the advice service the Citizens Advice Bureau. The printed Yellow Pages has since ended and the service is now called Citizens Advice. For a domestic violence emergency, call 999.",
              verify: "Current helpline numbers on GOV.UK.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Violence in the home is a serious crime; anyone violent to a partner, married or not, can be prosecuted.", page: 79 },
        { text: "A man who forces a woman to have sex, including her husband, can be charged with rape.", page: 79 },
        { text: "Refuges or shelters are safe places to stay; there is a 24-hour National Domestic Violence Freephone Helpline.", page: 79 },
        { text: "FGM is illegal; practising it or taking a girl or woman abroad for it is a criminal offence.", page: 79 },
        { text: "Arranged marriages (both agree) are acceptable; forcing someone to marry is a criminal offence.", page: 79 },
        { text: "Forced Marriage Protection Orders: 2008 (England, Wales, NI) under the Forced Marriage (Civil Protection) Act 2007; Scotland November 2011.", page: 80 },
        { text: "Breaching a protection order can lead to up to two years in jail for contempt of court.", page: 80 },
      ],
      mnemonics: [
        {
          title: "Act 2007, orders 2008",
          device: "The Act comes first, the orders a year later.",
          explanation: "The Forced Marriage (Civil Protection) Act 2007 brought in protection orders in 2008 for England, Wales and Northern Ireland. Scotland followed in November 2011.",
        },
        {
          title: "Arranged vs forced",
          device: "Arranged = Agreed. Forced = no Free consent.",
          explanation: "The difference is consent. Arranged marriages are acceptable; forcing someone is a crime.",
        },
      ],
      checkQuestionIds: ["rt-q08", "rt-q10", "rt-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "tax-and-ni",
      title: "Income tax and National Insurance",
      dek: "PAYE, self-assessment, HMRC, National Insurance Contributions and your NI number.",
      pages: [80],
      minutes: 6,
      recall: {
        question: "Before you read: what is the name of the system by which employers take income tax from your wages?",
        answer: "Pay As You Earn (PAYE). The employer pays the tax directly to HM Revenue & Customs (HMRC).",
      },
      blocks: [
        {
          type: "prose",
          heading: "Income tax",
          pages: [80],
          paragraphs: [
            "People in the UK pay tax on their income, which includes wages from paid employment, profits from self-employment, taxable benefits, pensions, and income from property, savings and dividends.",
            "Income tax pays for government services such as roads, education, police and the armed forces.",
          ],
        },
        {
          type: "cards",
          heading: "Two ways of paying income tax",
          cards: [
            {
              id: "paye",
              title: "Pay As You Earn (PAYE)",
              meta: "Most employees",
              summary: "Your employer takes the tax from your pay and sends it to HMRC.",
              detail: [
                "For most people the right amount of income tax is taken automatically from their pay by their employer and paid directly to HM Revenue & Customs (HMRC), the government department that collects taxes.",
              ],
              page: 80,
            },
            {
              id: "self-assessment",
              title: "Self-assessment",
              meta: "Self-employed people (and some others)",
              summary: "You pay your own tax, which includes completing a tax return.",
              detail: [
                "If you are self-employed you pay your own tax through self-assessment, which includes completing a tax return. Other people may also need to complete one.",
                "If HMRC sends you a tax return, complete and return it as soon as you have all the necessary information.",
              ],
              page: 80,
            },
          ],
        },
        {
          type: "prose",
          heading: "National Insurance",
          pages: [80],
          paragraphs: [
            "Almost everybody in paid work, including self-employed people, must pay National Insurance Contributions. The money pays for state benefits and services such as the state retirement pension and the National Health Service (NHS).",
            "Employees have their contributions deducted from their pay by their employer; self-employed people pay their own.",
            "Anyone who does not pay enough contributions will not be able to receive certain contributory benefits, such as Jobseeker's Allowance or a full state retirement pension. Some workers, such as part-time workers, may not qualify for statutory payments such as maternity pay if they do not earn enough.",
          ],
        },
        {
          type: "prose",
          heading: "Getting a National Insurance number",
          pages: [80],
          paragraphs: [
            "A National Insurance number is a unique personal account number. It makes sure your contributions and tax are properly recorded against your name. All young people in the UK are sent one just before their 16th birthday.",
            "A non-UK national living in the UK who is looking for work, starting work or setting up as self-employed will need one, but you can start work without it. If you have permission to work, the handbook says to telephone the Department for Work and Pensions (DWP), which will explain the process; you may need to attend an interview with documents proving your identity and your permission to work.",
            "A National Insurance number does not, on its own, prove to an employer that you have the right to work in the UK.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The HMRC helpline (0845 number) and the way to apply for an NI number (telephoning the DWP) date from 2013. Most applications are now made online through GOV.UK.",
              verify: "Current NI number application on GOV.UK.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Taxable income includes wages, self-employment profits, taxable benefits, pensions, and income from property, savings and dividends.", page: 80 },
        { text: "Income tax pays for roads, education, police and the armed forces.", page: 80 },
        { text: "PAYE: employers take income tax from pay and send it to HM Revenue & Customs (HMRC).", page: 80 },
        { text: "Self-employed people pay their tax through self-assessment, including a tax return.", page: 80 },
        { text: "National Insurance Contributions pay for state benefits and services such as the state pension and the NHS.", page: 80 },
        { text: "Not paying enough NI can mean no Jobseeker's Allowance or full state pension.", page: 80 },
        { text: "Young people are sent an NI number just before their 16th birthday; an NI number alone does not prove the right to work.", page: 80 },
      ],
      mnemonics: [
        {
          title: "Tax builds, NI protects",
          device: "Income tax = Roads, Education, Police, Army. NI = Pension and NHS.",
          explanation: "Income tax funds general government services; National Insurance funds state benefits such as the pension and the NHS.",
        },
        {
          title: "Sweet sixteen",
          device: "Your NI number arrives just before you turn 16.",
          explanation: "All young people in the UK are sent a National Insurance number just before their 16th birthday.",
        },
      ],
      checkQuestionIds: ["rt-q14", "rt-q16", "rt-q19"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "driving",
      title: "Driving",
      dek: "Ages, licences, tests, foreign licences, tax, insurance and the MOT.",
      pages: [80, 81],
      minutes: 5,
      heroImageId: "rights-tax-driving-learner-car",
      recall: {
        question: "Before you read: how old must you be to drive a car in the UK? And to ride a moped?",
        answer: "At least 17 for a car or motorcycle; at least 16 for a moped.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Who can drive",
          pages: [80],
          paragraphs: [
            "You must be at least 17 to drive a car or motorcycle, and you must have a driving licence to drive on public roads. To get a UK licence you must pass a driving test, which tests both your knowledge and your practical skills.",
            "You need to be at least 16 to ride a moped. There are other age requirements and special tests for driving large vehicles.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "rights-tax-driving-learner-car",
            kind: "photograph",
            caption: "A car in England displaying a red \"L\" (learner) plate.",
            context: "Learner drivers display L plates (L or D plates in Wales). The handbook mentions only the Northern Ireland \"R\" plate for newly qualified drivers.",
          },
        },
        {
          type: "sequence",
          heading: "Getting your licence",
          page: 80,
          steps: [
            { label: "Provisional licence and instructor", detail: "Apply for a provisional driving licence and find a driving instructor." },
            { label: "Theory test", detail: "A multiple-choice theory test and a hazard perception test." },
            { label: "Practical driving test", detail: "Pass this to get your full licence." },
            { label: "Until age 70", detail: "Drivers can use their licence until they are 70. After that it is valid for three years at a time." },
          ],
        },
        {
          type: "prose",
          heading: "Special rules",
          pages: [80],
          paragraphs: [
            "In Northern Ireland, a newly qualified driver must display an \"R\" plate (for restricted driver) for one year after passing the test.",
            "If your licence is from a country in the European Union (EU), Iceland, Liechtenstein or Norway, you can drive in the UK for as long as it is valid. A licence from any other country can be used for up to 12 months; after that you must get a full UK licence.",
          ],
        },
        {
          type: "cards",
          heading: "Your vehicle",
          cards: [
            {
              id: "dvla",
              title: "Registration and road tax",
              meta: "Driver and Vehicle Licensing Agency (DVLA)",
              summary: "Register your car or motorcycle with the DVLA and pay annual road tax.",
              detail: [
                "If you are resident in the UK, your car or motorcycle must be registered at the DVLA.",
                "You must pay an annual road tax and, the handbook says, display the tax disc on the windscreen.",
              ],
              page: 81,
            },
            {
              id: "insurance",
              title: "Motor insurance",
              meta: "Compulsory",
              summary: "Driving without insurance is a serious criminal offence.",
              detail: ["You must have valid motor insurance. It is a serious criminal offence to drive without it."],
              page: 81,
            },
            {
              id: "mot",
              title: "MOT test",
              meta: "Ministry of Transport",
              summary: "Vehicles over three years old need an MOT test every year.",
              detail: [
                "If your vehicle is over three years old you must take it for a Ministry of Transport (MOT) test every year.",
                "It is an offence not to have an MOT certificate if your vehicle is more than three years old.",
              ],
              page: 81,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Paper tax discs were abolished in October 2014: road tax (vehicle tax) is still paid, but nothing is displayed on the windscreen. Learn the handbook's wording for the test.",
            },
            {
              text: "The rules for EU licences and the Northern Ireland R-plate period may have changed since 2013 (for example after the UK left the EU).",
              verify: "Current rules on GOV.UK and nidirect.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Minimum age: 17 for a car or motorcycle; 16 for a moped.", page: 80 },
        { text: "The driving test checks both knowledge and practical skills (theory test with hazard perception, then a practical test).", page: 80 },
        { text: "Licences last until age 70, then are valid for three years at a time.", page: 80 },
        { text: "Northern Ireland: new drivers display an \"R\" (restricted) plate for one year.", page: 80 },
        { text: "EU, Iceland, Liechtenstein, Norway licences: valid in the UK while the licence is valid. Other countries: up to 12 months.", page: 80 },
        { text: "Vehicles must be registered with the DVLA; road tax is paid annually; insurance is compulsory.", page: 81 },
        { text: "Vehicles over three years old need an MOT test every year.", page: 81 },
      ],
      mnemonics: [
        {
          title: "16, 17, 70",
          device: "Moped at 16, car at 17, renew every 3 years from 70.",
          explanation: "The three driving ages in the handbook, plus the three-year renewal after 70.",
        },
        {
          title: "Threes",
          device: "Three-year-old car = MOT. Seventy-year-old driver = three-year licence.",
          explanation: "Both rules use the number three.",
        },
        {
          title: "R for Restricted",
          device: "R plate = Restricted, for one year, in Northern Ireland only.",
          explanation: "Only Northern Ireland requires newly qualified drivers to display an R plate.",
        },
      ],
      checkQuestionIds: ["rt-q21", "rt-q24", "rt-q27"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    { id: "rt-t-bill", date: "1689", sortYear: 1689, title: "Bill of Rights", summary: "One of the historic roots of British rights, alongside Magna Carta and the Habeas Corpus Act.", people: [], whyItMatters: "Rights in Britain have developed over a long period from these documents.", remember: ["Magna Carta, Habeas Corpus Act, Bill of Rights 1689"], imageId: "rights-tax-driving-bill-of-rights", page: 79, lessonId: "human-rights" },
    { id: "rt-t-echr", date: "1950", sortYear: 1950, title: "UK signs the European Convention on Human Rights", summary: "British diplomats and lawyers helped draft it; the UK was one of the first countries to sign.", people: [], whyItMatters: "Sets out rights such as the right to life and to a fair trial.", remember: ["1950", "One of the first to sign"], page: 79, lessonId: "human-rights" },
    { id: "rt-t-hra", date: "1998", sortYear: 1998, title: "Human Rights Act", summary: "Incorporates the European Convention on Human Rights into UK law.", people: [], whyItMatters: "Government, public bodies and the courts must follow the Convention's principles.", remember: ["Human Rights Act 1998"], page: 79, lessonId: "human-rights" },
    { id: "rt-t-fm-act", date: "2007", sortYear: 2007, title: "Forced Marriage (Civil Protection) Act", summary: "The Act under which Forced Marriage Protection Orders were introduced.", people: [], whyItMatters: "Courts can protect people from being forced into marriage.", remember: ["Act 2007"], page: 80, lessonId: "protection-from-harm" },
    { id: "rt-t-fmpo", date: "2008", sortYear: 2008, title: "Forced Marriage Protection Orders (England, Wales, NI)", summary: "Protection Orders introduced for England, Wales and Northern Ireland.", people: [], whyItMatters: "Breaching an order can mean up to two years in jail.", remember: ["2008: England, Wales, Northern Ireland"], page: 80, lessonId: "protection-from-harm" },
    { id: "rt-t-fmpo-scot", date: "November 2011", sortYear: 2011, title: "Protection Orders in Scotland", summary: "Similar Protection Orders introduced in Scotland.", people: [], whyItMatters: "Extends protection against forced marriage to the whole UK.", remember: ["Scotland: November 2011"], page: 80, lessonId: "protection-from-harm" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Roots of British rights: Magna Carta, the Habeas Corpus Act, the Bill of Rights of 1689.", page: 79 },
    { text: "The UK signed the European Convention on Human Rights in 1950; the Human Rights Act 1998 brought it into UK law.", page: 79 },
    { text: "Discrimination on grounds of age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality or marital status is illegal.", page: 79 },
    { text: "Domestic violence, FGM and forcing someone to marry are criminal offences.", page: 79 },
    { text: "Forced Marriage Protection Orders: 2008 (England, Wales, NI), November 2011 (Scotland); breach = up to two years in jail.", page: 80 },
    { text: "PAYE: employers deduct income tax and pay it to HMRC; the self-employed use self-assessment.", page: 80 },
    { text: "National Insurance pays for state benefits and services such as the state pension and the NHS.", page: 80 },
    { text: "NI numbers are sent just before the 16th birthday; one does not prove the right to work.", page: 80 },
    { text: "Driving ages: 17 for cars and motorcycles, 16 for mopeds; licence until 70, then every three years.", page: 80 },
    { text: "Northern Ireland new drivers display an R plate for one year.", page: 80 },
    { text: "Non-EU foreign licences can be used for up to 12 months.", page: 80 },
    { text: "DVLA registration, annual road tax and insurance are required; MOT every year for vehicles over three years old.", page: 81 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "rt-f01", lessonId: "human-rights", page: 79, front: "Name the three historic documents at the root of British rights.", back: "Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689." },
    { id: "rt-f02", lessonId: "human-rights", page: 79, front: "When did the UK sign the European Convention on Human Rights?", back: "1950. It was one of the first countries to sign, and British diplomats and lawyers helped draft it." },
    { id: "rt-f03", lessonId: "human-rights", page: 79, front: "What did the Human Rights Act 1998 do?", back: "Incorporated the European Convention on Human Rights into UK law. Government, public bodies and courts must follow its principles." },
    { id: "rt-f04", lessonId: "human-rights", page: 79, front: "List principles of the European Convention on Human Rights.", back: "Right to life; prohibition of torture; prohibition of slavery and forced labour; right to liberty and security; right to a fair trial; freedom of thought, conscience and religion; freedom of expression (speech)." },
    { id: "rt-f05", lessonId: "human-rights", page: 79, front: "On which grounds is unfair treatment illegal in the UK?", back: "Age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality, marital status." },
    { id: "rt-f06", lessonId: "human-rights", page: 79, front: "Which bodies deal with equality and human rights in Northern Ireland?", back: "The Equality Commission for Northern Ireland and the Northern Ireland Human Rights Commission." },
    { id: "rt-f07", lessonId: "protection-from-harm", page: 79, front: "Can a husband be charged with rape?", back: "Yes. Any man who forces a woman to have sex, including her husband, can be charged with rape." },
    { id: "rt-f08", lessonId: "protection-from-harm", page: 79, front: "What are refuges or shelters?", back: "Safe places to go and stay for people facing domestic violence." },
    { id: "rt-f09", lessonId: "protection-from-harm", page: 79, front: "What is the legal position on FGM?", back: "Illegal. Practising FGM or taking a girl or woman abroad for FGM is a criminal offence." },
    { id: "rt-f10", lessonId: "protection-from-harm", page: 79, front: "What is the difference between an arranged and a forced marriage?", back: "In an arranged marriage both parties agree (acceptable). In a forced marriage one or both do not or cannot consent (forcing someone to marry is a crime)." },
    { id: "rt-f11", lessonId: "protection-from-harm", page: 80, front: "When and under which Act were Forced Marriage Protection Orders introduced?", back: "2008, for England, Wales and Northern Ireland, under the Forced Marriage (Civil Protection) Act 2007. Scotland: November 2011." },
    { id: "rt-f12", lessonId: "protection-from-harm", page: 80, front: "What is the penalty for breaching a Forced Marriage Protection Order?", back: "Up to two years in jail for contempt of court." },
    { id: "rt-f13", lessonId: "tax-and-ni", page: 80, front: "What does income tax pay for?", back: "Government services such as roads, education, police and the armed forces." },
    { id: "rt-f14", lessonId: "tax-and-ni", page: 80, front: "What is PAYE?", back: "Pay As You Earn: employers take income tax from pay and send it directly to HM Revenue & Customs (HMRC)." },
    { id: "rt-f15", lessonId: "tax-and-ni", page: 80, front: "How do self-employed people pay tax?", back: "Through self-assessment, which includes completing a tax return." },
    { id: "rt-f16", lessonId: "tax-and-ni", page: 80, front: "What do National Insurance Contributions pay for?", back: "State benefits and services such as the state retirement pension and the NHS." },
    { id: "rt-f17", lessonId: "tax-and-ni", page: 80, front: "What can happen if you don't pay enough National Insurance?", back: "You may not get contributory benefits such as Jobseeker's Allowance or a full state pension." },
    { id: "rt-f18", lessonId: "tax-and-ni", page: 80, front: "When are young people sent a National Insurance number?", back: "Just before their 16th birthday." },
    { id: "rt-f19", lessonId: "driving", page: 80, front: "Minimum ages for driving a car and riding a moped?", back: "17 for a car or motorcycle; 16 for a moped." },
    { id: "rt-f20", lessonId: "driving", page: 80, front: "How long is a driving licence valid?", back: "Until age 70; after that, three years at a time." },
    { id: "rt-f21", lessonId: "driving", page: 80, front: "What is the R plate?", back: "In Northern Ireland, newly qualified drivers display an R (restricted driver) plate for one year." },
    { id: "rt-f22", lessonId: "driving", page: 80, front: "How long can you drive on a licence from outside the EU, Iceland, Liechtenstein and Norway?", back: "Up to 12 months; then you need a full UK licence." },
    { id: "rt-f23", lessonId: "driving", page: 81, front: "Where must a UK resident's car be registered?", back: "At the Driver and Vehicle Licensing Agency (DVLA)." },
    { id: "rt-f24", lessonId: "driving", page: 81, front: "When does a vehicle need an MOT test?", back: "Every year once it is over three years old." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // human-rights
    { id: "rt-q01", lessonId: "human-rights", page: 79, type: "multi", prompt: "Which TWO documents does the handbook name as roots of British rights?", options: ["Magna Carta", "The Domesday Book", "The Habeas Corpus Act", "The Treaty of Rome"], answer: [0, 2], explanation: "The roots are Magna Carta, the Habeas Corpus Act and the Bill of Rights of 1689." },
    { id: "rt-q02", lessonId: "human-rights", page: 79, type: "single", prompt: "In which year was the Bill of Rights?", options: ["1215", "1689", "1950", "1998"], answer: [1], explanation: "The Bill of Rights dates from 1689." },
    { id: "rt-q03", lessonId: "human-rights", page: 79, type: "single", prompt: "In which year did the UK sign the European Convention on Human Rights?", options: ["1945", "1950", "1973", "1998"], answer: [1], explanation: "The UK was one of the first countries to sign the Convention, in 1950." },
    { id: "rt-q04", lessonId: "human-rights", page: 79, type: "single", prompt: "Which Act incorporated the European Convention on Human Rights into UK law?", options: ["The Human Rights Act 1998", "The Equality Act 1950", "The Bill of Rights 1689", "The Habeas Corpus Act"], answer: [0], explanation: "The Human Rights Act 1998 brought the Convention into UK law." },
    { id: "rt-q05", lessonId: "human-rights", page: 79, type: "multi", prompt: "Which TWO are principles of the European Convention on Human Rights?", options: ["Prohibition of slavery and forced labour", "Right to free housing", "Freedom of expression (speech)", "Right to a job"], answer: [0, 2], explanation: "Principles include the right to life, prohibition of torture, slavery and forced labour, liberty and security, a fair trial, freedom of thought, conscience and religion, and freedom of expression." },
    { id: "rt-q06", lessonId: "human-rights", page: 79, type: "truefalse", prompt: "UK law protects people from being treated unfairly at work because of their marital status.", options: ["True", "False"], answer: [0], explanation: "True. Protected grounds are age, disability, sex, pregnancy and maternity, race, religion or belief, sexuality and marital status." },
    { id: "rt-q07", lessonId: "human-rights", page: 79, type: "truefalse", prompt: "British diplomats and lawyers had an important role in drafting the European Convention on Human Rights.", options: ["True", "False"], answer: [0], explanation: "True, according to the handbook." },
    // protection-from-harm
    { id: "rt-q08", lessonId: "protection-from-harm", page: 79, type: "truefalse", prompt: "A man who forces his wife to have sex can be charged with rape.", options: ["True", "False"], answer: [0], explanation: "True. Any man who forces a woman to have sex, including her husband, can be charged with rape." },
    { id: "rt-q09", lessonId: "protection-from-harm", page: 79, type: "single", prompt: "What are the safe places for people facing domestic violence called?", options: ["Hostels", "Refuges or shelters", "Sanctuaries", "Halfway houses"], answer: [1], explanation: "In some areas there are safe places to go and stay, called refuges or shelters." },
    { id: "rt-q10", lessonId: "protection-from-harm", page: 79, type: "truefalse", prompt: "Taking a girl abroad for female genital mutilation is legal if it is legal in that country.", options: ["True", "False"], answer: [1], explanation: "False. Practising FGM or taking a girl or woman abroad for FGM is a criminal offence in the UK." },
    { id: "rt-q11", lessonId: "protection-from-harm", page: 79, type: "single", prompt: "Which statement about marriage in the UK is correct?", options: ["Arranged marriages are illegal", "Forcing another person to marry is a criminal offence", "Only civil marriages are legal", "Forced marriage is a civil matter, not a crime"], answer: [1], explanation: "Arranged marriages where both agree are acceptable; forcing someone to marry is a criminal offence." },
    { id: "rt-q12", lessonId: "protection-from-harm", page: 80, type: "single", prompt: "In which year were Forced Marriage Protection Orders introduced for England, Wales and Northern Ireland?", options: ["2005", "2007", "2008", "2011"], answer: [2], explanation: "They were introduced in 2008 under the Forced Marriage (Civil Protection) Act 2007. Scotland followed in November 2011." },
    { id: "rt-q13", lessonId: "protection-from-harm", page: 80, type: "single", prompt: "What is the maximum jail term for breaching a Forced Marriage Protection Order?", options: ["Six months", "One year", "Two years", "Five years"], answer: [2], explanation: "Anyone who breaches an order can be jailed for up to two years for contempt of court." },
    { id: "rt-q13b", lessonId: "protection-from-harm", page: 80, type: "truefalse", prompt: "Only the potential victim can apply for a Forced Marriage Protection Order.", options: ["True", "False"], answer: [1], explanation: "False. A potential victim or someone acting for them can apply." },
    // tax-and-ni
    { id: "rt-q14", lessonId: "tax-and-ni", page: 80, type: "single", prompt: "What is the system called in which employers deduct income tax from wages?", options: ["Self-assessment", "Pay As You Earn (PAYE)", "National Insurance", "VAT"], answer: [1], explanation: "Under PAYE the employer takes the tax from pay and sends it directly to HMRC." },
    { id: "rt-q15", lessonId: "tax-and-ni", page: 80, type: "single", prompt: "Which government department collects taxes?", options: ["The DVLA", "The Department for Work and Pensions", "HM Revenue & Customs (HMRC)", "The Home Office"], answer: [2], explanation: "HM Revenue & Customs (HMRC) is the government department that collects taxes." },
    { id: "rt-q16", lessonId: "tax-and-ni", page: 80, type: "multi", prompt: "Which TWO does National Insurance help pay for?", options: ["The state retirement pension", "The armed forces", "The National Health Service", "Roads"], answer: [0, 2], explanation: "NI pays for state benefits and services such as the state pension and the NHS. Income tax pays for roads and the armed forces." },
    { id: "rt-q17", lessonId: "tax-and-ni", page: 80, type: "single", prompt: "How do self-employed people pay their income tax?", options: ["Through PAYE", "Through self-assessment, including a tax return", "They do not pay income tax", "Through their bank automatically"], answer: [1], explanation: "Self-employed people pay their own tax through self-assessment, which includes completing a tax return." },
    { id: "rt-q18", lessonId: "tax-and-ni", page: 80, type: "truefalse", prompt: "A National Insurance number on its own proves to an employer that you have the right to work in the UK.", options: ["True", "False"], answer: [1], explanation: "False. The handbook says an NI number does not on its own prove the right to work." },
    { id: "rt-q19", lessonId: "tax-and-ni", page: 80, type: "single", prompt: "When are young people in the UK sent a National Insurance number?", options: ["At birth", "Just before their 16th birthday", "At 18", "When they start their first job"], answer: [1], explanation: "All young people in the UK are sent a National Insurance number just before their 16th birthday." },
    { id: "rt-q20", lessonId: "tax-and-ni", page: 80, type: "truefalse", prompt: "Someone who has not paid enough National Insurance may not receive a full state retirement pension.", options: ["True", "False"], answer: [0], explanation: "True. They may also be unable to receive contributory benefits such as Jobseeker's Allowance." },
    // driving
    { id: "rt-q21", lessonId: "driving", page: 80, type: "single", prompt: "What is the minimum age for driving a car in the UK?", options: ["16", "17", "18", "21"], answer: [1], explanation: "You must be at least 17 to drive a car or motorcycle; 16 for a moped." },
    { id: "rt-q22", lessonId: "driving", page: 80, type: "single", prompt: "What is the minimum age for riding a moped?", options: ["15", "16", "17", "18"], answer: [1], explanation: "You need to be at least 16 to ride a moped." },
    { id: "rt-q23", lessonId: "driving", page: 80, type: "single", prompt: "Until what age can drivers use their licence before it must be renewed every three years?", options: ["60", "65", "70", "75"], answer: [2], explanation: "Licences are valid until 70; after that, for three years at a time." },
    { id: "rt-q24", lessonId: "driving", page: 80, type: "single", prompt: "Where must newly qualified drivers display an R plate for one year?", options: ["Scotland", "Wales", "Northern Ireland", "Everywhere in the UK"], answer: [2], explanation: "In Northern Ireland a newly qualified driver displays an R (restricted driver) plate for one year." },
    { id: "rt-q25", lessonId: "driving", page: 80, type: "single", prompt: "For how long can you use a driving licence from a non-EU country (other than Iceland, Liechtenstein or Norway) in the UK?", options: ["3 months", "6 months", "12 months", "As long as it is valid"], answer: [2], explanation: "Up to 12 months. After that you must get a full UK licence." },
    { id: "rt-q26", lessonId: "driving", page: 81, type: "truefalse", prompt: "It is a serious criminal offence to drive without insurance.", options: ["True", "False"], answer: [0], explanation: "True. You must have valid motor insurance." },
    { id: "rt-q27", lessonId: "driving", page: 81, type: "single", prompt: "When must a vehicle have an MOT test?", options: ["Every year once it is over three years old", "Every three years from new", "Only when it is sold", "Every year from new"], answer: [0], explanation: "If your vehicle is over three years old it must have an MOT test every year." },
    { id: "rt-q28", lessonId: "driving", page: 81, type: "multi", prompt: "Which TWO are requirements for a UK resident with a car?", options: ["Register it with the DVLA", "Register it with HMRC", "Have valid motor insurance", "Display an R plate for five years"], answer: [0, 2], explanation: "Cars must be registered at the DVLA and have valid insurance; annual road tax must also be paid." },
  ],

  flags: [
    { page: 81, text: "The handbook says you must display a tax disc on the windscreen. Paper tax discs were abolished in October 2014; vehicle tax is still paid but nothing is displayed." },
    { page: 80, text: "Typo in the PDF: \"an 'R' place\" should read \"an 'R' plate\". Also \"license\" and \"instuctor\" for \"licence\" and \"instructor\"." },
    { page: 80, text: "The step-by-step paragraph on provisional licences and the theory test (multiple-choice and hazard perception) may have been added by the PDF publisher; the official 3rd edition only says the test checks knowledge and practical skills." },
    { page: 80, text: "Rules for driving on EU licences and the NI R-plate period may have changed since 2013 (including after the UK left the EU). Check GOV.UK / nidirect." },
    { page: 80, text: "Applying for a National Insurance number by telephoning the DWP and the 0845 HMRC helpline are 2013 arrangements; applications are now mostly online." },
    { page: 79, text: "Yellow Pages (printed) and the \"Citizens Advice Bureau\" name are dated; the service is now called Citizens Advice." },
  ],
};
