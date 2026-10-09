import type { Unit } from "../types";

/**
 * Unit 5.6 — Your role in the community. Handbook (Britizen PDF) § 5.8, pp. 93–95.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const yourRole: Unit = {
  id: "your-role",
  number: "5.6",
  title: "Your role in the community",
  handbook: {
    chapter: 5,
    chapterTitle: "The UK government, the law and your role",
    section: "5.8",
    pages: [93, 95],
  },
  status: "available",
  dek: "Shared values, volunteering, jury service, school governors and the environment.",
  heroImageId: "your-role-litter-pick",
  overview: [
    "The handbook ends with what you can give back. It lists the shared values and responsibilities that everyone can agree with, explains how to be a good neighbour, and describes the many ways to support your community: jury service, helping in schools, becoming a school governor, joining a political party, and volunteering with local services.",
    "It then covers blood and organ donation, the kinds of volunteering and charities you can join, opportunities for young people such as the National Citizen Service, and simple ways to look after the environment. Numbers to remember include the jury age range (18 to 70), the minimum age for governors (18), and the National Citizen Service age group (16 and 17).",
  ],
  objectives: [
    "List the shared values and responsibilities that everyone in the UK can agree with.",
    "Explain how to be a good neighbour and why volunteering matters.",
    "State who can be called for jury service and describe the role of school governors and school boards.",
    "Describe what political party members do, including canvassing, and who can stand for office.",
    "Name ways to volunteer, give blood and organs, and examples of UK charities.",
    "Describe how recycling, shopping locally and using public transport help the environment.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "values-and-neighbours",
      title: "Shared values and being a good neighbour",
      dek: "Ten shared responsibilities, getting to know your neighbours and why volunteering matters.",
      pages: [93],
      minutes: 5,
      recall: {
        question: "Before you read: name three of the shared values and responsibilities that everyone in the UK can agree with.",
        answer:
          "For example: obey and respect the law; treat others with fairness; help others; vote in local and national elections; respect and preserve the environment.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Responsibilities and opportunities",
          pages: [93],
          paragraphs: [
            "Becoming a British citizen or settling in the UK brings responsibilities but also opportunities. Everyone has the chance to take part in their community and help make it a better place to live and work.",
            "Britain is one of the world's most diverse societies, but there is a set of shared values and responsibilities that everyone can agree with. Taking them on makes it easier to become a full and active citizen.",
          ],
        },
        {
          type: "cards",
          heading: "The shared values and responsibilities",
          cards: [
            {
              id: "values-law-rights",
              title: "Law, rights and fairness",
              summary: "Obey and respect the law; respect the rights of others; treat others fairly; behave responsibly.",
              detail: [
                "To obey and respect the law.",
                "To be aware of the rights of others and respect those rights.",
                "To treat others with fairness.",
                "To behave responsibly.",
              ],
              page: 93,
            },
            {
              id: "values-family-environment",
              title: "Family, work and the environment",
              summary: "Help and protect your family; work to provide for yourself and your family; respect and preserve the environment.",
              detail: [
                "To help and protect your family.",
                "To work to provide for yourself and your family.",
                "To respect and preserve the environment.",
              ],
              page: 93,
            },
            {
              id: "values-equality-help-vote",
              title: "Equality, helping others and voting",
              summary: "Treat everyone equally; help others; vote in local and national elections.",
              detail: [
                "To treat everyone equally, regardless of sex, race, religion, age, disability, class or sexual orientation.",
                "To help others.",
                "To vote in local and national government elections.",
              ],
              page: 93,
            },
          ],
        },
        {
          type: "prose",
          heading: "Being a good neighbour",
          pages: [93],
          paragraphs: [
            "When you move into a new house or flat, introduce yourself to the people who live near you. Knowing your neighbours helps you become part of the community and make friends. They can also be a good source of help, for example feeding your pets while you are away or advising on local shops and services.",
            "You can prevent problems with neighbours by respecting their privacy and limiting your noise. Keep your garden tidy, and only put refuse bags and bins on the street or in communal areas when they are due to be collected.",
          ],
        },
        {
          type: "prose",
          heading: "Getting involved",
          pages: [93],
          paragraphs: [
            "Volunteering and helping your community are an important part of being a good citizen. They help you integrate and get to know people, make the community better when residents support each other, and help you fulfil your duties as a citizen, such as behaving responsibly and helping others.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "your-role-polling-station",
            kind: "photograph",
            caption: "A polling station sign in Camberwell, south-east London, at the 2017 general election.",
            context: "Voting in local and national elections is one of the shared responsibilities the handbook lists.",
          },
        },
      ],
      keyFacts: [
        { text: "Shared values include obeying the law, respecting others' rights, treating others fairly and behaving responsibly.", page: 93 },
        { text: "Also: help and protect your family, work to provide for yourself and your family, help others, respect and preserve the environment.", page: 93 },
        { text: "Treat everyone equally regardless of sex, race, religion, age, disability, class or sexual orientation.", page: 93 },
        { text: "Vote in local and national government elections.", page: 93 },
        { text: "Good neighbours introduce themselves, respect privacy, limit noise, keep gardens tidy and put bins out only on collection day.", page: 93 },
        { text: "Volunteering helps you integrate, improves the community and helps you fulfil your duties as a citizen.", page: 93 },
      ],
      mnemonics: [
        {
          title: "Neighbour rules",
          device: "\"Say hello, keep it low, bins out only when they go.\"",
          explanation: "Introduce yourself, limit noise, and only put refuse out when it is due to be collected.",
        },
        {
          title: "Ten values, three groups",
          device: "Law and fairness · Family, work and environment · Equality, help and vote.",
          explanation: "Grouping the ten shared responsibilities makes them easier to recall in full.",
        },
      ],
      checkQuestionIds: ["yr-q01", "yr-q03", "yr-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "supporting-community",
      title: "Juries, schools and politics",
      dek: "Jury service, helping at school, school governors, political parties and standing for office.",
      pages: [93, 94],
      minutes: 7,
      recall: {
        question: "Before you read: who can be asked to serve on a jury?",
        answer: "Anyone on the electoral register aged 18 to 70. People are selected at random.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Jury service",
          pages: [93],
          paragraphs: [
            "As well as getting the right to vote, people on the electoral register are randomly selected to serve on a jury. Anyone on the electoral register aged 18 to 70 can be asked to do this.",
          ],
        },
        {
          type: "prose",
          heading: "Helping in schools",
          pages: [93],
          paragraphs: [
            "If you have children, you can help at their schools: in classrooms, supporting activities or listening to children read.",
            "Many schools hold events to raise money for extra equipment or out-of-school activities, such as book sales, toy sales or selling food. Events are sometimes run by parent-teacher associations (PTAs). Volunteering with a PTA or joining it helps the school and is a good way to make friends. You can find out about these opportunities from notices in the school or notes your children bring home.",
          ],
        },
        {
          type: "cards",
          heading: "School governors and school boards",
          cards: [
            {
              id: "school-governors",
              title: "School governors (school board members in Scotland)",
              meta: "Aged 18 or over · no upper age limit",
              summary: "Local people who help raise school standards.",
              detail: [
                "School governors, or members of the school board in Scotland, are people from the local community who want to make a positive contribution to children's education.",
                "They must be 18 or over at the date of their election or appointment. There is no upper age limit.",
                "They have three key roles: setting the strategic direction of the school; ensuring accountability; monitoring and evaluating school performance.",
                "Contact your local school to ask if they need a governor or school board member. In England you can also apply online at the School Governors' One-Stop Shop.",
              ],
              page: 94,
            },
            {
              id: "free-schools",
              title: "Free schools",
              meta: "England",
              summary: "Parents and community groups can apply to open a free school.",
              detail: [
                "In England, parents and other community groups can apply to open a free school in their local area. The Department for Education has more information.",
              ],
              page: 94,
            },
          ],
        },
        {
          type: "prose",
          heading: "Supporting political parties",
          pages: [94],
          paragraphs: [
            "Political parties welcome new members. Joining one is a way to show support for certain views and get involved in the democratic process.",
            "Parties are particularly busy at election times. Members try to persuade people to vote for their candidates, for example by handing out leaflets or knocking on doors asking for support. This is called \"canvassing\". You do not have to tell a canvasser how you intend to vote.",
          ],
        },
        {
          type: "cards",
          heading: "Standing for office",
          cards: [
            {
              id: "stand-for-office",
              title: "Who can stand",
              meta: "As described in the handbook (2013)",
              summary: "British citizens; also Irish, eligible Commonwealth and (except for MP) other EU citizens.",
              detail: [
                "British citizens can stand for office as a local councillor, a Member of Parliament (or the devolved equivalents) or a member of the European Parliament.",
                "You may also be able to stand if you are an Irish citizen, an eligible Commonwealth citizen, or (except for standing to be an MP) a citizen of another EU country.",
              ],
              page: 94,
              context: {
                text: "The UK left the EU on 31 January 2020, so there are no longer UK elections to the European Parliament, and the rights of EU citizens to stand have changed.",
                verify: "Current candidacy rules from the Electoral Commission.",
              },
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The handbook gives the jury age range as 18 to 70. In England and Wales the upper age was raised to 75 in 2016. Learn 18 to 70 for the test.",
              verify: "Current jury rules for each part of the UK on GOV.UK.",
            },
            {
              text: "References to the European Parliament on page 94 no longer apply since the UK left the EU.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "People on the electoral register aged 18 to 70 can be randomly selected for jury service.", page: 93 },
        { text: "Parents can help in classrooms, support activities, listen to children read and join parent-teacher associations (PTAs).", page: 93 },
        { text: "School governors (school board members in Scotland) must be 18 or over; there is no upper age limit.", page: 94 },
        { text: "Governors' three key roles: setting strategic direction, ensuring accountability, monitoring and evaluating performance.", page: 94 },
        { text: "In England, parents and community groups can apply to open a free school.", page: 94 },
        { text: "Canvassing: persuading people to vote for a party's candidate; you don't have to tell a canvasser how you'll vote.", page: 94 },
        { text: "British citizens can stand as councillor, MP (or devolved equivalent) or MEP; Irish, eligible Commonwealth and (not for MP) EU citizens may also stand.", page: 94 },
      ],
      mnemonics: [
        {
          title: "Juries: 18 to 70",
          device: "\"Eighteen to seventy, on the register, picked at random.\"",
          explanation: "Three conditions: on the electoral register, aged 18 to 70, randomly selected.",
        },
        {
          title: "Governors: SAM",
          device: "Strategy, Accountability, Monitoring.",
          explanation: "The three key roles of school governors and school boards.",
        },
        {
          title: "Canvassing",
          device: "Canvassers Call at your door.",
          explanation: "Party members knocking on doors or handing out leaflets. Your vote stays secret if you want.",
        },
      ],
      checkQuestionIds: ["yr-q07", "yr-q09", "yr-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "volunteering",
      title: "Local services, donation and volunteering",
      dek: "Special constables and magistrates, blood and organ donation, charities and the National Citizen Service.",
      pages: [94, 95],
      minutes: 7,
      heroImageId: "your-role-litter-pick",
      recall: {
        question: "Before you read: about how long does it take to give blood?",
        answer: "About an hour.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Helping with local services",
          pages: [94],
          paragraphs: [
            "You can volunteer with many local service providers, including hospitals and youth projects. Services often want local people involved in decisions about how they work. Universities, housing associations, museums and arts councils may advertise for volunteers to serve on their governing bodies.",
            "You can volunteer with the police as a special constable or a lay (non-police) representative. You can also apply to become a magistrate. Vacancies are often advertised in local newspapers or on local radio.",
          ],
        },
        {
          type: "prose",
          heading: "Blood and organ donation",
          pages: [94],
          paragraphs: [
            "Hospitals use donated blood to help people with a wide range of injuries and illnesses. Giving blood takes only about an hour. There are separate registration services for England and North Wales, the rest of Wales, Scotland, and Northern Ireland.",
            "Many people in the UK are waiting for organ transplants. Registering as an organ donor can make it easier for your family to decide whether to donate your organs when you die. Living people can also donate a kidney.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "your-role-blood-donor-centre",
            kind: "photograph",
            caption: "The blood donor centre on The Headrow, Leeds.",
          },
        },
        {
          type: "prose",
          heading: "Why volunteer?",
          pages: [94],
          paragraphs: [
            "Volunteering is working for good causes without payment. You meet new people and help make your community better. Some activities let you practise English or develop work skills that help you find a job or improve your CV. Many people volunteer simply because they want to help others.",
          ],
        },
        {
          type: "sequence",
          heading: "Things volunteers do (the handbook's examples)",
          page: 94,
          steps: [
            { label: "Working with animals", detail: "e.g. caring for animals at a local rescue shelter." },
            { label: "Youth work", detail: "e.g. volunteering at a youth group." },
            { label: "Improving the environment", detail: "e.g. a litter pick-up in the local area." },
            { label: "Working with the homeless", detail: "e.g. in a homelessness shelter." },
            { label: "Mentoring", detail: "e.g. supporting someone who has just come out of prison." },
            { label: "Health and hospitals", detail: "e.g. working on a hospital information desk." },
            { label: "Helping older people", detail: "e.g. at a residential care home." },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "your-role-litter-pick",
            kind: "photograph",
            caption: "Volunteers litter-picking at Forbes Hole, a local nature area in England.",
          },
        },
        {
          type: "cards",
          heading: "Charities named in the handbook",
          cards: [
            { id: "charity-red-cross", title: "British Red Cross", meta: "British branch of an international organisation", summary: "An example of a British branch of an international organisation.", detail: ["Charities range from British branches of international organisations, such as the British Red Cross, to small local charities."], page: 94 },
            { id: "charity-age-uk", title: "Age UK", meta: "Older people", summary: "A charity working with older people.", detail: ["Works with older people."], page: 94 },
            { id: "charity-nspcc", title: "NSPCC", meta: "Children", summary: "National Society for the Prevention of Cruelty to Children.", detail: ["Works with children."], page: 94 },
            { id: "charity-crisis-shelter", title: "Crisis and Shelter", meta: "The homeless", summary: "Two charities working with homeless people.", detail: ["Work with the homeless."], page: 94 },
            { id: "charity-cruk", title: "Cancer Research UK", meta: "Medical research", summary: "A medical research charity.", detail: ["An example of a medical research charity."], page: 94 },
            { id: "charity-environment", title: "National Trust and Friends of the Earth", meta: "Environment", summary: "Environmental charities.", detail: ["Examples of environmental charities."], page: 94 },
            { id: "charity-pdsa", title: "PDSA", meta: "Animals", summary: "People's Dispensary for Sick Animals.", detail: ["An example of a charity working with animals."], page: 94 },
          ],
        },
        {
          type: "prose",
          heading: "Young volunteers",
          pages: [94, 95],
          paragraphs: [
            "Charities need volunteers to help with activities and raise money. They often advertise in local newspapers and on their websites.",
            "There are many opportunities for young people to volunteer and gain accreditation that develops their skills. These include the National Citizen Service programme, which gives 16- and 17-year-olds the chance to enjoy outdoor activities, develop their skills and take part in a community project.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Organ donation in all four nations has since moved to an \"opt-out\" system (Wales 2015, England 2020, Scotland 2021, Northern Ireland 2023), though registering your decision is still encouraged. The handbook describes the earlier opt-in register.",
              verify: "Current rules on the NHS Organ Donation website.",
            },
            {
              text: "Several websites listed on pages 94–95 (for example vinspired.com and the old direct.gov.uk address for the National Citizen Service) have changed or closed.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "You can volunteer with hospitals, youth projects and the governing bodies of universities, housing associations, museums and arts councils.", page: 94 },
        { text: "You can volunteer with the police as a special constable or lay (non-police) representative, or apply to become a magistrate.", page: 94 },
        { text: "Giving blood takes about an hour.", page: 94 },
        { text: "Registering as an organ donor makes it easier for your family to decide; living people can donate a kidney.", page: 94 },
        { text: "Volunteering means working for good causes without payment; it can help your English, work skills and CV.", page: 94 },
        { text: "Charities: British Red Cross, Age UK, NSPCC, Crisis, Shelter, Cancer Research UK, National Trust, Friends of the Earth, PDSA.", page: 94 },
        { text: "The National Citizen Service is for 16- and 17-year-olds: outdoor activities, skills and a community project.", page: 95 },
      ],
      mnemonics: [
        {
          title: "Charity matching",
          device: "Age UK = Age; NSPCC = Children; Crisis and Shelter = homeless; PDSA = Pets.",
          explanation: "Match each charity to who it helps. The National Trust and Friends of the Earth are the environmental pair.",
        },
        {
          title: "NCS = 16 and 17",
          device: "\"Sweet sixteen and seventeen serve the community.\"",
          explanation: "The National Citizen Service is for 16- and 17-year-olds.",
        },
        {
          title: "Volunteer with the law",
          device: "Special constable (police) or magistrate (courts).",
          explanation: "Two volunteer roles in the justice system that the handbook names.",
        },
      ],
      checkQuestionIds: ["yr-q14", "yr-q16", "yr-q19"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "environment",
      title: "Looking after the environment",
      dek: "Recycling, shopping locally, walking and public transport.",
      pages: [95],
      minutes: 4,
      heroImageId: "your-role-recycling-bins",
      recall: {
        question: "Before you read: give two reasons why recycling helps the environment.",
        answer:
          "Making products from recycled materials uses less energy, means fewer raw materials are extracted from the earth, and reduces the rubbish put into landfill.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Recycling",
          pages: [95],
          paragraphs: [
            "Recycle as much of your waste as you can. Making new products from recycled materials uses less energy and means we do not need to extract more raw materials from the earth. It also means less rubbish is created, so less goes into landfill.",
            "There are separate sources of recycling information for England, Wales and Scotland; in Northern Ireland, information comes from your local authority.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "your-role-recycling-bins",
            kind: "photograph",
            caption: "Street recycling bins for paper, cans, glass and clothes on Mare Street, Hackney, London.",
          },
        },
        {
          type: "sequence",
          heading: "Three ways to help",
          page: 95,
          steps: [
            { label: "Recycle", detail: "Uses less energy, fewer raw materials, less landfill." },
            { label: "Shop locally", detail: "Helps businesses and farmers in your area and in Britain, and reduces your carbon footprint because products travel less far." },
            { label: "Walk or use public transport", detail: "You create less pollution than when you use a car." },
          ],
        },
      ],
      keyFacts: [
        { text: "Recycling uses less energy, reduces the need to extract raw materials and reduces landfill.", page: 95 },
        { text: "In Northern Ireland, recycling information is available from your local authority.", page: 95 },
        { text: "Shopping locally helps local businesses and farmers and reduces your carbon footprint.", page: 95 },
        { text: "Walking and public transport create less pollution than using a car.", page: 95 },
      ],
      mnemonics: [
        {
          title: "Recycle, Local, Walk",
          device: "\"Reuse it, Buy it near, Leave the car.\"",
          explanation: "The handbook's three ways to look after the environment: recycle, shop locally, walk or use public transport.",
        },
      ],
      checkQuestionIds: ["yr-q22", "yr-q23", "yr-q25"],
    },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Shared values include obeying the law, treating others fairly and equally, helping others, protecting your family and the environment, and voting.", page: 93 },
    { text: "Good neighbours introduce themselves, respect privacy, limit noise and put bins out only on collection day.", page: 93 },
    { text: "Jury service: anyone on the electoral register aged 18 to 70, selected at random.", page: 93 },
    { text: "Parents can help at school and through parent-teacher associations (PTAs).", page: 93 },
    { text: "School governors / school board members must be 18 or over, with no upper age limit; three roles: strategy, accountability, monitoring performance.", page: 94 },
    { text: "Canvassing is persuading people to vote for a party's candidates; you don't have to say how you will vote.", page: 94 },
    { text: "You can volunteer as a special constable or lay representative with the police, or apply to be a magistrate.", page: 94 },
    { text: "Giving blood takes about an hour; living people can donate a kidney.", page: 94 },
    { text: "Charities include the British Red Cross, Age UK, NSPCC, Crisis, Shelter, Cancer Research UK, National Trust, Friends of the Earth and PDSA.", page: 94 },
    { text: "The National Citizen Service is for 16- and 17-year-olds.", page: 95 },
    { text: "Recycle, shop locally and walk or use public transport to protect the environment.", page: 95 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "yr-f01", lessonId: "values-and-neighbours", page: 93, front: "List five of the shared values and responsibilities in the UK.", back: "Any five of: obey and respect the law; respect others' rights; treat others fairly; behave responsibly; help and protect your family; respect and preserve the environment; treat everyone equally; work to provide for yourself and your family; help others; vote in local and national elections." },
    { id: "yr-f02", lessonId: "values-and-neighbours", page: 93, front: "Regardless of what should you treat everyone equally?", back: "Sex, race, religion, age, disability, class or sexual orientation." },
    { id: "yr-f03", lessonId: "values-and-neighbours", page: 93, front: "What should you do when you move into a new home?", back: "Introduce yourself to your neighbours." },
    { id: "yr-f04", lessonId: "values-and-neighbours", page: 93, front: "How can you avoid problems with neighbours?", back: "Respect their privacy, limit noise, keep your garden tidy, and only put refuse out when it is due to be collected." },
    { id: "yr-f05", lessonId: "values-and-neighbours", page: 93, front: "Why is volunteering good for you and the community?", back: "It helps you integrate and meet people, makes the community better, and helps you fulfil duties such as behaving responsibly and helping others." },
    { id: "yr-f06", lessonId: "supporting-community", page: 93, front: "Who can be asked to do jury service?", back: "Anyone on the electoral register aged 18 to 70, selected at random." },
    { id: "yr-f07", lessonId: "supporting-community", page: 93, front: "What is a PTA?", back: "A parent-teacher association, which organises events (e.g. to raise money) for a school." },
    { id: "yr-f08", lessonId: "supporting-community", page: 94, front: "What is the minimum age to be a school governor, and is there an upper limit?", back: "18 or over at the date of election or appointment; no upper age limit." },
    { id: "yr-f09", lessonId: "supporting-community", page: 94, front: "What are the three key roles of school governors and school boards?", back: "Setting the strategic direction of the school; ensuring accountability; monitoring and evaluating school performance." },
    { id: "yr-f10", lessonId: "supporting-community", page: 94, front: "What is school governor called in Scotland?", back: "A member of the school board." },
    { id: "yr-f11", lessonId: "supporting-community", page: 94, front: "What is canvassing?", back: "Party members persuading people to vote for their candidates, e.g. handing out leaflets or knocking on doors. You don't have to tell a canvasser how you'll vote." },
    { id: "yr-f12", lessonId: "supporting-community", page: 94, front: "Who, besides British citizens, may be able to stand for office?", back: "Irish citizens, eligible Commonwealth citizens and (except for MP) citizens of other EU countries." },
    { id: "yr-f13", lessonId: "supporting-community", page: 94, front: "Where can parents in England apply to open a free school?", back: "In their local area; information from the Department for Education." },
    { id: "yr-f14", lessonId: "volunteering", page: 94, front: "Name two ways to volunteer with the police.", back: "Become a special constable or a lay (non-police) representative." },
    { id: "yr-f15", lessonId: "volunteering", page: 94, front: "How long does it take to give blood?", back: "About an hour." },
    { id: "yr-f16", lessonId: "volunteering", page: 94, front: "What organ can living people donate?", back: "A kidney." },
    { id: "yr-f17", lessonId: "volunteering", page: 94, front: "Which charities work with: older people; children; the homeless; animals?", back: "Age UK; NSPCC; Crisis and Shelter; PDSA." },
    { id: "yr-f18", lessonId: "volunteering", page: 94, front: "Name two environmental charities from the handbook.", back: "The National Trust and Friends of the Earth." },
    { id: "yr-f19", lessonId: "volunteering", page: 95, front: "Who is the National Citizen Service for, and what does it offer?", back: "16- and 17-year-olds: outdoor activities, developing skills and a community project." },
    { id: "yr-f20", lessonId: "environment", page: 95, front: "Why does recycling help the environment?", back: "Uses less energy, avoids extracting more raw materials, and reduces rubbish going to landfill." },
    { id: "yr-f21", lessonId: "environment", page: 95, front: "How does shopping locally help?", back: "It supports local businesses and farmers and reduces your carbon footprint." },
    { id: "yr-f22", lessonId: "environment", page: 95, front: "Where do people in Northern Ireland get recycling information?", back: "From their local authority." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // values-and-neighbours
    { id: "yr-q01", lessonId: "values-and-neighbours", page: 93, type: "multi", prompt: "Which TWO are shared values and responsibilities listed in the handbook?", options: ["To vote in local and national government elections", "To join a trade union", "To help others", "To attend a place of worship"], answer: [0, 2], explanation: "Voting and helping others are both on the list. Joining a union and attending worship are not." },
    { id: "yr-q02", lessonId: "values-and-neighbours", page: 93, type: "truefalse", prompt: "Treating everyone equally regardless of class is one of the shared responsibilities.", options: ["True", "False"], answer: [0], explanation: "True. Everyone should be treated equally regardless of sex, race, religion, age, disability, class or sexual orientation." },
    { id: "yr-q03", lessonId: "values-and-neighbours", page: 93, type: "single", prompt: "When should you put your refuse bags and bins on the street?", options: ["Whenever they are full", "Only when they are due to be collected", "Every evening", "At weekends"], answer: [1], explanation: "Only put refuse bags and bins on the street or in communal areas if they are due to be collected." },
    { id: "yr-q04", lessonId: "values-and-neighbours", page: 93, type: "single", prompt: "What does the handbook suggest you do when you move into a new home?", options: ["Hold a party", "Introduce yourself to your neighbours", "Write to your MP", "Register with the police"], answer: [1], explanation: "Introducing yourself helps you become part of the community and make friends." },
    { id: "yr-q05", lessonId: "values-and-neighbours", page: 93, type: "multi", prompt: "Which TWO help prevent problems with neighbours?", options: ["Respecting their privacy", "Playing music late at night", "Limiting how much noise you make", "Leaving bins out all week"], answer: [0, 2], explanation: "Respect neighbours' privacy, limit noise, keep your garden tidy and only put bins out for collection." },
    { id: "yr-q06", lessonId: "values-and-neighbours", page: 93, type: "truefalse", prompt: "Volunteering helps you fulfil your duties as a citizen, such as behaving responsibly and helping others.", options: ["True", "False"], answer: [0], explanation: "True. It also helps you integrate and makes your community a better place." },
    // supporting-community
    { id: "yr-q07", lessonId: "supporting-community", page: 93, type: "single", prompt: "Who can be asked to serve on a jury?", options: ["Anyone aged 16 to 65", "Anyone on the electoral register aged 18 to 70", "Only British citizens over 21", "Only people who volunteer"], answer: [1], explanation: "Anyone on the electoral register aged 18 to 70 can be randomly selected." },
    { id: "yr-q08", lessonId: "supporting-community", page: 93, type: "single", prompt: "What do the letters PTA stand for?", options: ["Public Transport Authority", "Parent-teacher association", "Pupil Teaching Assistant", "Parish Town Assembly"], answer: [1], explanation: "Parent-teacher associations often organise school events." },
    { id: "yr-q09", lessonId: "supporting-community", page: 94, type: "single", prompt: "What is the minimum age to become a school governor?", options: ["16", "18", "21", "25"], answer: [1], explanation: "Governors must be 18 or over at the date of their election or appointment. There is no upper age limit." },
    { id: "yr-q10", lessonId: "supporting-community", page: 94, type: "multi", prompt: "Which TWO are key roles of school governors?", options: ["Setting the strategic direction of the school", "Teaching lessons", "Monitoring and evaluating school performance", "Setting national exam papers"], answer: [0, 2], explanation: "The three roles are setting strategic direction, ensuring accountability, and monitoring and evaluating performance." },
    { id: "yr-q11", lessonId: "supporting-community", page: 94, type: "truefalse", prompt: "There is an upper age limit of 70 for school governors.", options: ["True", "False"], answer: [1], explanation: "False. There is no upper age limit for governors. (The 18 to 70 range is for jury service.)" },
    { id: "yr-q12", lessonId: "supporting-community", page: 94, type: "single", prompt: "What is canvassing?", options: ["Painting a polling station", "Counting votes", "Persuading people to vote for a party's candidates, e.g. by knocking on doors", "Standing as a candidate"], answer: [2], explanation: "Canvassing means handing out leaflets or knocking on doors to ask for support." },
    { id: "yr-q13", lessonId: "supporting-community", page: 94, type: "truefalse", prompt: "You must tell a canvasser how you intend to vote.", options: ["True", "False"], answer: [1], explanation: "False. You don't have to tell a canvasser how you intend to vote." },
    { id: "yr-q13b", lessonId: "supporting-community", page: 94, type: "single", prompt: "What are school governors called in Scotland?", options: ["Trustees", "Members of the school board", "Wardens", "Councillors"], answer: [1], explanation: "In Scotland they are members of the school board." },
    // volunteering
    { id: "yr-q14", lessonId: "volunteering", page: 94, type: "multi", prompt: "Which TWO roles can you volunteer for with the police?", options: ["Special constable", "Chief constable", "Lay (non-police) representative", "Police and Crime Commissioner"], answer: [0, 2], explanation: "You can become a special constable or a lay representative. You can also apply to become a magistrate." },
    { id: "yr-q15", lessonId: "volunteering", page: 94, type: "single", prompt: "About how long does it take to give blood?", options: ["Ten minutes", "About an hour", "Half a day", "A full day"], answer: [1], explanation: "Giving blood only takes about an hour." },
    { id: "yr-q16", lessonId: "volunteering", page: 94, type: "single", prompt: "Which organ can living people donate, according to the handbook?", options: ["A kidney", "A heart", "A liver", "Lungs"], answer: [0], explanation: "Living people can donate a kidney." },
    { id: "yr-q17", lessonId: "volunteering", page: 94, type: "single", prompt: "Which charity works with children?", options: ["Age UK", "PDSA", "NSPCC", "Shelter"], answer: [2], explanation: "The NSPCC (National Society for the Prevention of Cruelty to Children) works with children." },
    { id: "yr-q18", lessonId: "volunteering", page: 94, type: "multi", prompt: "Which TWO charities work with the homeless?", options: ["Crisis", "Cancer Research UK", "Shelter", "Friends of the Earth"], answer: [0, 2], explanation: "Crisis and Shelter work with homeless people." },
    { id: "yr-q19", lessonId: "volunteering", page: 95, type: "single", prompt: "Which age group is the National Citizen Service for?", options: ["11 and 12", "14 and 15", "16 and 17", "18 to 25"], answer: [2], explanation: "It gives 16- and 17-year-olds outdoor activities, skills development and a community project." },
    { id: "yr-q20", lessonId: "volunteering", page: 94, type: "truefalse", prompt: "Volunteering means working for good causes without payment.", options: ["True", "False"], answer: [0], explanation: "True. It can also help you practise English and develop work skills." },
    { id: "yr-q21", lessonId: "volunteering", page: 94, type: "single", prompt: "Which charity works with animals?", options: ["PDSA", "Age UK", "British Red Cross", "Crisis"], answer: [0], explanation: "The People's Dispensary for Sick Animals (PDSA) works with animals." },
    // environment
    { id: "yr-q22", lessonId: "environment", page: 95, type: "multi", prompt: "Which TWO are benefits of recycling, according to the handbook?", options: ["It uses less energy", "It increases landfill", "Less rubbish is put into landfill", "It needs more raw materials"], answer: [0, 2], explanation: "Recycling uses less energy, avoids extracting more raw materials, and reduces landfill." },
    { id: "yr-q23", lessonId: "environment", page: 95, type: "single", prompt: "Why does shopping locally reduce your carbon footprint?", options: ["Local shops are cheaper", "Products have not had to travel as far", "Local shops use solar power", "You pay less tax"], answer: [1], explanation: "Products bought locally have not travelled as far; it also helps local businesses and farmers." },
    { id: "yr-q24", lessonId: "environment", page: 95, type: "truefalse", prompt: "Walking and using public transport create less pollution than using a car.", options: ["True", "False"], answer: [0], explanation: "True, according to the handbook." },
    { id: "yr-q25", lessonId: "environment", page: 95, type: "single", prompt: "Where can people in Northern Ireland find out about recycling?", options: ["Their local authority", "The DVLA", "The Northern Ireland Assembly", "The NSPCC"], answer: [0], explanation: "In Northern Ireland, recycling information comes from your local authority." },
    { id: "yr-q26", lessonId: "environment", page: 95, type: "truefalse", prompt: "Shopping locally helps businesses and farmers in your area and in Britain.", options: ["True", "False"], answer: [0], explanation: "True. It also reduces your carbon footprint." },
  ],

  flags: [
    { page: 93, text: "Jury service age 18 to 70 is the handbook's figure. In England and Wales the upper limit was raised to 75 in 2016; rules differ in Scotland and Northern Ireland. Check GOV.UK." },
    { page: 94, text: "Standing as a member of the European Parliament and EU citizens' candidacy rights no longer apply as described since the UK left the EU (31 January 2020)." },
    { page: 94, text: "Organ donation has moved to an opt-out system in all four nations (2015–2023); the handbook describes the opt-in register." },
    { page: 94, text: "Several websites (sgoss.org.uk, dfe.gov.uk, blood services, do-it.org.uk) and on p. 95 (nationalcitizenservice.direct.gov.uk, vinspired.com, gwirvol.org, vds.org.uk) may have changed or closed." },
  ],
};
