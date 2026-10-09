import type { Unit } from "../types";

/**
 * Unit 5.2 — The government. Handbook (Britizen PDF) § 5.6 incl. 5.6.1, pp. 86–89.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const theGovernment: Unit = {
  id: "the-government",
  number: "5.2",
  title: "The government",
  handbook: {
    chapter: 5,
    chapterTitle: "The UK government, the law and your role",
    section: "5.6",
    pages: [86, 89],
  },
  status: "available",
  dek: "Prime Minister, cabinet, opposition, civil service, devolution and who can vote.",
  heroImageId: "go-downing-street",
  overview: [
    "This unit explains who runs the country day to day: the Prime Minister and cabinet, the opposition that challenges them, the political parties and pressure groups that try to shape policy, the politically neutral civil service, and the local councils that deliver services in towns and cities.",
    "It then turns to devolution, which since 1997 has given Wales, Scotland and Northern Ireland their own law-making bodies, and ends with the practical side of democracy: who can vote, how to register, what happens at a polling station, who can stand for office and how to visit Parliament. Numbers (60, 129, 90 members; 7 am to 10 pm; age 18) and the differences between the three devolved bodies are favourite test material.",
  ],
  objectives: [
    "Describe the roles of the Prime Minister, cabinet, opposition and shadow cabinet, and name the PM's two homes.",
    "Name the main political parties and give examples of pressure and lobby groups.",
    "Explain the role and core values of the civil service and how local government works.",
    "Compare the Welsh Assembly, Scottish Parliament and Northern Ireland Assembly: where they sit, how many members and what they control.",
    "Explain who can vote, how to register and vote, and who can stand for public office.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "pm-and-cabinet",
      title: "The Prime Minister, cabinet and opposition",
      dek: "Who leads the government, who sits in the cabinet, and who holds them to account.",
      pages: [86],
      minutes: 6,
      heroImageId: "go-downing-street",
      recall: {
        question: "Before you read: what is the name of the Prime Minister's country house outside London?",
        answer: "Chequers. The PM's official home is 10 Downing Street, in central London near the Houses of Parliament.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Prime Minister",
          pages: [86],
          paragraphs: [
            "The Prime Minister (PM) is the leader of the political party in power. The PM appoints the members of the cabinet and has control over many important public appointments.",
            "The PM's official home is 10 Downing Street, in central London near the Houses of Parliament. The PM also has a country house outside London called Chequers.",
            "The PM can be changed if the MPs in the governing party decide to do so, or if he or she wishes to resign. The PM usually resigns if his or her party loses a General Election.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "go-downing-street",
              kind: "photograph",
              caption: "The front door of 10 Downing Street, London, the official home of the Prime Minister, with a police officer on duty (black-and-white photograph).",
            },
            {
              imageId: "go-chequers",
              kind: "photograph",
              caption: "Chequers, near Wendover in Buckinghamshire, the Prime Minister's country house.",
            },
          ],
        },
        {
          type: "map",
          heading: "The Prime Minister's two homes",
          placeIds: ["the-government-downing-street", "the-government-westminster", "the-government-chequers"],
          caption: "Downing Street is a short walk from Parliament; Chequers is in the countryside north-west of London.",
        },
        {
          type: "prose",
          heading: "The cabinet",
          pages: [86],
          paragraphs: [
            "The PM appoints about 20 senior MPs to become ministers in charge of departments. These ministers form the cabinet, a committee which usually meets weekly and makes important decisions about government policy. Many of these decisions have to be debated or approved by Parliament.",
            "Each department also has other ministers, called Ministers of State and Parliamentary Under-Secretaries of State, who take charge of particular areas of the department's work.",
          ],
        },
        {
          type: "cards",
          heading: "Key cabinet posts",
          cards: [
            {
              id: "go-chancellor",
              title: "Chancellor of the Exchequer",
              meta: "Cabinet minister",
              summary: "Responsible for the economy.",
              detail: ["One of the senior ministers the PM appoints to the cabinet. Responsible for the economy."],
              page: 86,
            },
            {
              id: "go-home-secretary",
              title: "Home Secretary",
              meta: "Cabinet minister",
              summary: "Responsible for crime, policing and immigration.",
              detail: ["Responsible for crime, policing and immigration."],
              page: 86,
            },
            {
              id: "go-foreign-secretary",
              title: "Foreign Secretary",
              meta: "Cabinet minister",
              summary: "Responsible for managing relationships with foreign countries.",
              detail: ["Responsible for managing the UK's relationships with foreign countries."],
              page: 86,
            },
            {
              id: "go-secretaries-of-state",
              title: "Secretaries of State",
              meta: "Other cabinet ministers",
              summary: "Responsible for subjects such as education, health and defence.",
              detail: ["Other cabinet ministers are called Secretaries of State and are responsible for subjects such as education, health and defence."],
              page: 86,
            },
          ],
        },
        {
          type: "prose",
          heading: "The opposition",
          pages: [86],
          paragraphs: [
            "The second-largest party in the House of Commons is called the opposition. The leader of the opposition usually becomes Prime Minister if his or her party wins the next General Election.",
            "The leader of the opposition leads the party in pointing out what they see as the government's failures and weaknesses. An important opportunity is Prime Minister's Questions, which takes place every week while Parliament is sitting.",
            "The leader of the opposition also appoints senior opposition MPs to be 'shadow ministers'. Together they form the shadow cabinet, whose role is to challenge the government and put forward alternative policies.",
          ],
        },
      ],
      keyFacts: [
        { text: "The Prime Minister is the leader of the political party in power and appoints the cabinet.", page: 86 },
        { text: "The PM's official home is 10 Downing Street; the PM's country house is Chequers.", page: 86 },
        { text: "The cabinet is about 20 senior MPs and usually meets weekly.", page: 86 },
        { text: "Chancellor of the Exchequer: economy. Home Secretary: crime, policing, immigration. Foreign Secretary: foreign relations.", page: 86 },
        { text: "The opposition is the second-largest party in the House of Commons.", page: 86 },
        { text: "Prime Minister's Questions takes place every week while Parliament is sitting.", page: 86 },
        { text: "The shadow cabinet challenges the government and puts forward alternative policies.", page: 86 },
      ],
      mnemonics: [
        {
          title: "Chancellor counts cash",
          device: "Chancellor = Cash, Home = Halt crime at Home, Foreign = Friends abroad.",
          explanation: "The Chancellor runs the economy; the Home Secretary deals with crime, policing and immigration; the Foreign Secretary manages relationships with other countries.",
        },
        {
          title: "Two homes",
          device: "\"Number 10 for work, Chequers for the weekend.\"",
          explanation: "10 Downing Street is the PM's official home in central London; Chequers is the country house outside London.",
        },
      ],
      checkQuestionIds: ["go-q01", "go-q03", "go-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "parties-and-media",
      title: "Parties, pressure groups and the media",
      dek: "Who stands for election, who lobbies government, and how Parliament is reported.",
      pages: [86, 88],
      minutes: 5,
      recall: {
        question: "Before you read: what is Hansard?",
        answer: "The official published reports of proceedings in Parliament.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The party system",
          pages: [86],
          paragraphs: [
            "Anyone aged 18 or over can stand for election as an MP, but they are unlikely to win unless they have been nominated to represent one of the major political parties: the Conservative Party, the Labour Party, the Liberal Democrats, or one of the parties representing Scottish, Welsh or Northern Irish interests.",
            "A few MPs do not represent any of the main parties. They are called 'independents' and usually represent an issue important to their constituency.",
            "The main parties actively look for members of the public to join their debates, contribute to their costs and help at elections. They have branches in most constituencies and hold policy-making conferences every year.",
          ],
        },
        {
          type: "cards",
          heading: "Pressure and lobby groups",
          cards: [
            {
              id: "go-cbi",
              title: "CBI",
              meta: "Confederation of British Industry",
              summary: "A representative organisation for the views of British business.",
              detail: [
                "Pressure and lobby groups are organisations which try to influence government policy, and play an important role in politics.",
                "Some are representative organisations, such as the CBI, which represents the views of British business.",
              ],
              page: 86,
            },
            {
              id: "go-greenpeace",
              title: "Greenpeace",
              meta: "Campaign group · environment",
              summary: "An example of a group campaigning on the environment.",
              detail: ["Other groups campaign on particular topics, such as the environment (for example, Greenpeace)."],
              page: 86,
            },
            {
              id: "go-liberty",
              title: "Liberty",
              meta: "Campaign group · human rights",
              summary: "An example of a group campaigning on human rights.",
              detail: ["Groups that campaign on human rights include Liberty."],
              page: 86,
            },
          ],
        },
        {
          type: "prose",
          heading: "The media and government",
          pages: [88],
          paragraphs: [
            "Proceedings in Parliament are broadcast on television and published in official reports called Hansard. Written reports can be found in large libraries and at www.parliament.uk.",
            "Most people get information about political issues from newspapers (often called 'the press'), television, radio and the internet.",
            "The UK has a free press: what is written in newspapers is free from government control. Some newspaper owners and editors hold strong political opinions and run campaigns to influence government policy and public opinion.",
            "By law, radio and television coverage of the political parties must be balanced, so equal time has to be given to rival viewpoints.",
          ],
        },
      ],
      keyFacts: [
        { text: "Anyone aged 18 or over can stand for election as an MP.", page: 86 },
        { text: "Main parties: Conservative, Labour, Liberal Democrats, and parties representing Scottish, Welsh or Northern Irish interests.", page: 86 },
        { text: "MPs who do not represent a main party are called 'independents'.", page: 86 },
        { text: "Pressure and lobby groups try to influence government policy: e.g. CBI (business), Greenpeace (environment), Liberty (human rights).", page: 86 },
        { text: "Proceedings in Parliament are published in official reports called Hansard.", page: 88 },
        { text: "The UK has a free press; by law radio and TV coverage of political parties must be balanced.", page: 88 },
      ],
      mnemonics: [
        {
          title: "Pressure group examples",
          device: "\"Business, Bees, Basic rights\": CBI, Greenpeace, Liberty.",
          explanation: "CBI speaks for British business, Greenpeace for the environment, Liberty for human rights.",
        },
        {
          title: "Free press, balanced broadcasts",
          device: "Papers may take sides; TV and radio may not.",
          explanation: "Newspapers are free from government control and can campaign; broadcasters must by law give equal time to rival viewpoints.",
        },
      ],
      checkQuestionIds: ["go-q07", "go-q09", "go-q11"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "civil-service-and-local",
      title: "The civil service and local government",
      dek: "Neutral officials who carry out policy, and elected councils that run local services.",
      pages: [86, 87],
      minutes: 4,
      recall: {
        question: "Before you read: how many local authorities does London have?",
        answer: "33, with the Greater London Authority and the Mayor of London coordinating policies across the capital.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The civil service",
          pages: [86],
          paragraphs: [
            "Civil servants support the government in developing and implementing its policies, and they deliver public services. They are accountable to ministers.",
            "Civil servants are chosen on merit and are politically neutral: they are not political appointees. People apply to join the civil service through an application process, like other jobs.",
          ],
        },
        {
          type: "sequence",
          heading: "The civil service's four core values",
          page: 86,
          steps: [
            { label: "Integrity", detail: "A core value of the civil service." },
            { label: "Honesty", detail: "A core value of the civil service." },
            { label: "Objectivity", detail: "A core value of the civil service." },
            { label: "Impartiality", detail: "Including being politically neutral." },
          ],
        },
        {
          type: "prose",
          heading: "Local government",
          pages: [87],
          paragraphs: [
            "Towns, cities and rural areas are governed by democratically elected councils, often called 'local authorities'. Some areas have both district and county councils with different functions; most large towns and cities have a single local authority.",
            "Local authorities provide a range of services in their areas. They are funded by money from central government and by local taxes.",
            "Many local authorities appoint a mayor, who is the ceremonial leader of the council. In some towns a mayor is elected to be the effective leader of the administration.",
            "London has 33 local authorities, with the Greater London Authority and the Mayor of London coordinating policies across the capital.",
            "For most local authorities, local elections for councillors are held in May every year. Many candidates stand as members of a political party.",
          ],
        },
      ],
      keyFacts: [
        { text: "Civil servants support the government in developing and implementing policy and deliver public services.", page: 86 },
        { text: "Civil servants are chosen on merit, are politically neutral and are accountable to ministers.", page: 86 },
        { text: "Civil service core values: integrity, honesty, objectivity and impartiality.", page: 86 },
        { text: "Local authorities are funded by central government and by local taxes.", page: 87 },
        { text: "London has 33 local authorities; the Greater London Authority and Mayor of London coordinate policy.", page: 87 },
        { text: "Local elections for councillors are held in May every year in most areas.", page: 87 },
      ],
      mnemonics: [
        {
          title: "Civil service values",
          device: "\"I HOpe I'm neutral\": Integrity, Honesty, Objectivity, Impartiality.",
          explanation: "The four core values; impartiality includes being politically neutral.",
        },
        {
          title: "May for councils",
          device: "\"In May, councils have their say.\"",
          explanation: "Most local council elections are held in May every year.",
        },
      ],
      checkQuestionIds: ["go-q13", "go-q15", "go-q16"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "devolution",
      title: "Devolved administrations",
      dek: "Since 1997: a Welsh Assembly, a Scottish Parliament and a Northern Ireland Assembly.",
      pages: [87, 88],
      minutes: 7,
      heroImageId: "go-holyrood",
      recall: {
        question: "Before you read: how many members does the Scottish Parliament have?",
        answer: "129 MSPs. The National Assembly for Wales has 60 AMs and the Northern Ireland Assembly 90 MLAs.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What devolution means",
          pages: [87],
          paragraphs: [
            "Since 1997 some powers have been devolved from central government to give people in Wales, Scotland and Northern Ireland more control over matters that directly affect them.",
            "There has been a Welsh Assembly and a Scottish Parliament since 1999. There is also a Northern Ireland Assembly, although it has been suspended on a few occasions.",
            "Defence, foreign affairs, immigration, taxation and social security remain under central UK government control. Many other public services, such as education, are controlled by the devolved administrations, which each have their own civil service.",
          ],
        },
        {
          type: "cards",
          heading: "The three devolved bodies compared",
          cards: [
            {
              id: "go-welsh-assembly",
              title: "National Assembly for Wales",
              meta: "Cardiff · 60 AMs · since 1999",
              summary: "60 Assembly members, elected every four years by proportional representation.",
              detail: [
                "The Welsh government and National Assembly for Wales are based in Cardiff, the capital city of Wales.",
                "60 Assembly members (AMs), with elections every four years using a form of proportional representation.",
                "Members can speak in Welsh or English, and all Assembly publications are in both languages.",
                "It can make laws for Wales in 20 areas, including education and training, health and social services, economic development and housing.",
                "Since 2011 it has been able to pass laws on these topics without the agreement of the UK Parliament.",
              ],
              page: 87,
              imageId: "go-senedd",
              context: {
                text: "In 2020 the Assembly was renamed Senedd Cymru (the Welsh Parliament) and its members became Members of the Senedd (MSs). From the 2026 election it has 96 members.",
                verify: "Check current name and size of the Senedd against senedd.wales.",
              },
            },
            {
              id: "go-scottish-parliament",
              title: "Scottish Parliament",
              meta: "Edinburgh · 129 MSPs · since 1999",
              summary: "129 MSPs; can pass laws on all matters not reserved to the UK Parliament.",
              detail: [
                "Formed in 1999. It sits in Edinburgh, the capital city of Scotland.",
                "129 members of the Scottish Parliament (MSPs), elected by a form of proportional representation.",
                "It can pass laws for Scotland on all matters not specifically reserved to the UK Parliament.",
                "These include civil and criminal law, health, education, planning and additional tax-raising powers.",
              ],
              page: 87,
              imageId: "go-holyrood",
            },
            {
              id: "go-ni-assembly",
              title: "Northern Ireland Assembly",
              meta: "Belfast (Stormont) · 90 MLAs · since 1998",
              summary: "90 MLAs with a power-sharing agreement between the main parties.",
              detail: [
                "A Northern Ireland Parliament was established in 1922, when Ireland was divided, but abolished in 1972, shortly after the Troubles broke out in 1969.",
                "The Northern Ireland Assembly was established soon after the Belfast Agreement (or Good Friday Agreement) in 1998.",
                "A power-sharing agreement distributes ministerial offices amongst the main parties.",
                "90 elected members, known as MLAs (members of the Legislative Assembly), elected by a form of proportional representation.",
                "It can make decisions on issues such as education, agriculture, the environment, health and social services.",
              ],
              page: 87,
              imageId: "go-stormont",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "go-senedd",
              kind: "photograph",
              caption: "The Senedd building, Cardiff Bay, home of the National Assembly for Wales.",
            },
            {
              imageId: "go-stormont",
              kind: "photograph",
              caption: "Parliament Buildings at Stormont, Belfast, where the Northern Ireland Assembly meets.",
            },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "go-holyrood",
            kind: "photograph",
            caption: "The Scottish Parliament building at Holyrood, Edinburgh, 2024.",
          },
        },
        {
          type: "prose",
          heading: "Suspending devolved assemblies",
          pages: [88],
          paragraphs: [
            "The UK government has the power to suspend all devolved assemblies. It has used this power several times in Northern Ireland when local political leaders found it difficult to work together. The handbook says the Assembly has been running successfully since 2007.",
          ],
        },
        {
          type: "map",
          heading: "Where the devolved bodies sit",
          placeIds: ["the-government-westminster", "the-government-senedd", "the-government-holyrood", "the-government-stormont"],
          caption: "Westminster (UK Parliament), the Senedd in Cardiff Bay, Holyrood in Edinburgh and Stormont in Belfast.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "Learn the handbook's numbers: Wales 60 AMs, Scotland 129 MSPs, Northern Ireland 90 MLAs. The official 3rd edition (2013) gave the Northern Ireland Assembly 108 members; it was reduced to 90 in 2017.", verify: "Check which figure the current official handbook uses." },
            { text: "The Welsh Assembly became Senedd Cymru (the Welsh Parliament) in 2020, and grew to 96 members at the 2026 election. Test questions based on the handbook may still use the old name and 60 members." },
            { text: "The Northern Ireland Assembly was suspended again from 2017 to 2020 and from 2022 to 2024, so 'running successfully since 2007' is out of date." },
          ],
        },
      ],
      keyFacts: [
        { text: "Powers have been devolved since 1997; the Welsh Assembly and Scottish Parliament have existed since 1999.", page: 87 },
        { text: "Defence, foreign affairs, immigration, taxation and social security stay with the UK government.", page: 87 },
        { text: "Wales: Cardiff, 60 AMs, elections every four years, laws in 20 areas; since 2011 without UK Parliament agreement.", page: 87 },
        { text: "Scotland: Edinburgh, 129 MSPs; can legislate on all matters not reserved to the UK Parliament.", page: 87 },
        { text: "Northern Ireland: Parliament 1922–1972; Assembly after the Belfast (Good Friday) Agreement of 1998; 90 MLAs; power-sharing.", page: 87 },
        { text: "All three devolved bodies are elected by forms of proportional representation.", page: 87 },
        { text: "The UK government can suspend devolved assemblies and has done so several times in Northern Ireland.", page: 88 },
      ],
      mnemonics: [
        {
          title: "60 – 129 – 90",
          device: "\"Wales 60, Scotland 129, Ireland 90\": W-S-N goes up then down.",
          explanation: "Wales has the smallest (60 AMs), Scotland the largest (129 MSPs), Northern Ireland in between (90 MLAs).",
        },
        {
          title: "Who keeps what",
          device: "\"Defence, Foreign, Immigration, Tax, Social security\": the UK keeps the DIFTS.",
          explanation: "These five areas stay with the UK government; education is one of the services controlled by the devolved administrations.",
        },
        {
          title: "AMs, MSPs, MLAs",
          device: "Assembly (Wales), Scottish Parliament, Legislative Assembly (NI).",
          explanation: "Each title comes from the body's name: Assembly Members, Members of the Scottish Parliament, Members of the Legislative Assembly.",
        },
      ],
      checkQuestionIds: ["go-q19", "go-q20", "go-q22"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "who-can-vote",
      title: "Who can vote, and how",
      dek: "Eligibility, the electoral register, polling stations and postal votes.",
      pages: [88, 89],
      minutes: 6,
      heroImageId: "go-polling-station",
      recall: {
        question: "Before you read: what hours is a polling station open on election day?",
        answer: "From 7.00 am until 10.00 pm.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Who can vote?",
          pages: [88],
          paragraphs: [
            "The UK has had a fully democratic voting system since 1928. The present voting age of 18 was set in 1969, and (with a few exceptions) all UK-born and naturalised adult citizens have the right to vote.",
            "Adult citizens of the UK, and citizens of the Commonwealth and the Irish Republic who are resident in the UK, can vote in all public elections. The handbook adds that adult citizens of other EU states resident in the UK can vote in all elections except General Elections.",
          ],
        },
        {
          type: "prose",
          heading: "The electoral register",
          pages: [88],
          paragraphs: [
            "To vote in a parliamentary, local or European election, you must have your name on the electoral register.",
            "If you are eligible, you can register by contacting your local council electoral registration office (in Scotland it may be based elsewhere). You can find your local authority at www.aboutmyvote.co.uk by entering your postcode, and download registration forms in English, Welsh and some other languages.",
            "The register is updated every year in September or October. A registration form is sent to every household, to be completed with the names of everyone resident who is eligible to vote.",
            "Northern Ireland uses a different system called 'individual registration': everyone entitled to vote must complete their own form. Once registered, people stay on the register as long as their personal details do not change (see www.eoni.org.uk).",
            "By law, each local authority must make its electoral register available for anyone to look at, under supervision. It is kept at the local electoral registration office (or council office in England and Wales), and can also be seen at some public buildings such as libraries.",
          ],
        },
        {
          type: "sequence",
          heading: "Voting on election day",
          page: 89,
          steps: [
            { label: "Poll card", detail: "Before the election you are sent a poll card saying where your polling station (polling place in Scotland) is and when the election is." },
            { label: "Polling station", detail: "Open from 7.00 am until 10.00 pm on election day." },
            { label: "Give name and address", detail: "Staff ask for your name and address. In Northern Ireland you must also show photographic identification." },
            { label: "Polling booth", detail: "Take your ballot paper to a booth and fill it in privately, following the instructions. No one has the right to make you vote for a particular candidate." },
            { label: "Ballot box", detail: "Put the completed paper in the ballot box." },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "go-polling-station",
            kind: "photograph",
            caption: "A polling station sign in London on the day of the 2010 General Election.",
          },
        },
        {
          type: "prose",
          heading: "Postal votes",
          pages: [89],
          paragraphs: [
            "If it is difficult for you to get to a polling station, you can register for a postal ballot. Your ballot paper is sent to your home before the election; you fill it in and post it back. You can choose this when you register to vote.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "Since 2023 voters in Great Britain must also show photographic ID at polling stations; the handbook mentions photo ID only for Northern Ireland." },
            { text: "Individual electoral registration replaced household registration in Great Britain in 2014. EU citizens' voting rights and European elections changed after Brexit." },
            { text: "In Scotland and Wales, 16- and 17-year-olds can vote in devolved and local elections, and the UK government has proposed lowering the voting age to 16 for all elections.", verify: "Check the current voting age for UK Parliament elections." },
          ],
        },
      ],
      keyFacts: [
        { text: "Fully democratic voting since 1928; voting age 18 since 1969.", page: 88 },
        { text: "UK, Commonwealth and Irish Republic citizens resident in the UK can vote in all public elections.", page: 88 },
        { text: "You must be on the electoral register to vote; it is updated every year in September or October.", page: 88 },
        { text: "Northern Ireland uses 'individual registration': each voter completes their own form.", page: 88 },
        { text: "Anyone may look at the electoral register, under supervision.", page: 88 },
        { text: "Polling stations (polling places in Scotland) are open 7.00 am to 10.00 pm.", page: 89 },
        { text: "In Northern Ireland voters must show photographic identification.", page: 89 },
        { text: "You can register for a postal ballot if it is hard to get to a polling station.", page: 89 },
      ],
      mnemonics: [
        {
          title: "7 till 10",
          device: "\"Seven in the morning to ten at night: fifteen hours to vote.\"",
          explanation: "Polling stations open at 7.00 am and close at 10.00 pm.",
        },
        {
          title: "Register in autumn",
          device: "September or October: the register falls into place with the leaves.",
          explanation: "The electoral register is updated every year in September or October.",
        },
      ],
      checkQuestionIds: ["go-q25", "go-q27", "go-q29"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 6
    {
      id: "standing-and-visiting",
      title: "Standing for office and visiting Parliament",
      dek: "Who can stand for election, and how to watch democracy in action.",
      pages: [89],
      minutes: 4,
      recall: {
        question: "Before you read: name one group of people who cannot stand for public office.",
        answer: "Members of the armed forces, civil servants, or people found guilty of certain criminal offences.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Standing for office",
          pages: [89],
          paragraphs: [
            "Most citizens of the UK, the Irish Republic or the Commonwealth aged 18 or over can stand for public office. Exceptions include members of the armed forces, civil servants, and people found guilty of certain criminal offences.",
            "Members of the House of Lords may not stand for election to the House of Commons, but are eligible for all other public offices.",
          ],
        },
        {
          type: "prose",
          heading: "Visiting the UK Parliament",
          pages: [89],
          paragraphs: [
            "The public can listen to debates in the Palace of Westminster from public galleries in both the House of Commons and the House of Lords.",
            "You can write to your local MP in advance to ask for tickets, or queue on the day at the public entrance. Entrance is free. There are sometimes long queues for the House of Commons (at least one to two hours); it is usually easier to get into the House of Lords. See www.parliament.uk.",
          ],
        },
        {
          type: "cards",
          heading: "Visiting the devolved bodies",
          cards: [
            {
              id: "go-visit-stormont",
              title: "Stormont, Belfast",
              meta: "Northern Ireland Assembly · MLAs",
              summary: "Arrange a visit through the Education Service or an MLA.",
              detail: [
                "MLAs meet in the Northern Ireland Assembly at Stormont, in Belfast.",
                "There are two ways to arrange a visit: contact the Education Service (details on www.niassembly.gov.uk) or contact an MLA.",
              ],
              page: 89,
              imageId: "go-stormont",
            },
            {
              id: "go-visit-holyrood",
              title: "Holyrood, Edinburgh",
              meta: "Scottish Parliament · MSPs",
              summary: "Book tickets or tours through visitor services.",
              detail: [
                "MSPs meet in the Scottish Parliament building at Holyrood in Edinburgh (www.scottish.parliament.uk).",
                "You can get information, book tickets or arrange tours through visitor services, by post, telephone or email.",
              ],
              page: 89,
              imageId: "go-holyrood",
            },
            {
              id: "go-visit-senedd",
              title: "The Senedd, Cardiff Bay",
              meta: "National Assembly for Wales · AMs",
              summary: "An open building: book guided tours or gallery seats.",
              detail: [
                "AMs meet in the Welsh Assembly in the Senedd in Cardiff Bay.",
                "The Senedd is an open building. You can book guided tours or seats in the public galleries through the Assembly Booking Service.",
              ],
              page: 89,
              imageId: "go-senedd",
            },
          ],
        },
        {
          type: "map",
          heading: "Parliaments you can visit",
          placeIds: ["the-government-westminster", "the-government-senedd", "the-government-holyrood", "the-government-stormont"],
        },
      ],
      keyFacts: [
        { text: "Most UK, Irish Republic and Commonwealth citizens aged 18 or over can stand for public office.", page: 89 },
        { text: "Members of the armed forces, civil servants and people guilty of certain crimes cannot stand.", page: 89 },
        { text: "Members of the House of Lords cannot stand for the House of Commons.", page: 89 },
        { text: "Entrance to the public galleries at Westminster is free; it is usually easier to get into the House of Lords.", page: 89 },
        { text: "MLAs meet at Stormont (Belfast); MSPs at Holyrood (Edinburgh); AMs at the Senedd (Cardiff Bay).", page: 89 },
      ],
      mnemonics: [
        {
          title: "Who can't stand",
          device: "\"Soldiers, Servants, Sinners\"",
          explanation: "Members of the armed forces, civil servants, and people found guilty of certain criminal offences cannot stand for office.",
        },
        {
          title: "Match building to nation",
          device: "Stormont – Six counties; Holyrood – Highlands; Senedd – a Welsh word.",
          explanation: "Stormont is Northern Ireland's, Holyrood is Scotland's, and the Senedd ('parliament' in Welsh) is in Cardiff Bay.",
        },
      ],
      checkQuestionIds: ["go-q31", "go-q33", "go-q35"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    {
      id: "t-go-1922",
      date: "1922",
      sortYear: 1922,
      title: "Northern Ireland Parliament established",
      summary: "A Northern Ireland Parliament is set up when Ireland is divided.",
      people: [],
      whyItMatters: "It lasted 50 years before being abolished.",
      remember: ["1922: Ireland divided"],
      page: 87,
      lessonId: "devolution",
    },
    {
      id: "t-go-1972",
      date: "1972",
      sortYear: 1972,
      title: "Northern Ireland Parliament abolished",
      summary: "The Parliament is abolished, shortly after the Troubles broke out in 1969.",
      people: [],
      whyItMatters: "Northern Ireland had no devolved body until the Assembly after 1998.",
      remember: ["Troubles began 1969", "Parliament abolished 1972"],
      page: 87,
      lessonId: "devolution",
    },
    {
      id: "t-go-1997",
      date: "1997",
      sortYear: 1997,
      title: "Devolution begins",
      summary: "Some powers are devolved from central government to Wales, Scotland and Northern Ireland.",
      people: [],
      whyItMatters: "People in the three nations gained more control over matters that directly affect them.",
      remember: ["Since 1997"],
      page: 87,
      lessonId: "devolution",
    },
    {
      id: "t-go-1998",
      date: "1998",
      sortYear: 1998,
      title: "Belfast (Good Friday) Agreement",
      summary: "The Northern Ireland Assembly is established soon after the Agreement, with power-sharing between the main parties.",
      people: [],
      whyItMatters: "Ministerial offices are distributed amongst the main parties.",
      remember: ["Also called the Good Friday Agreement", "90 MLAs"],
      imageId: "go-stormont",
      page: 87,
      lessonId: "devolution",
    },
    {
      id: "t-go-1999",
      date: "1999",
      sortYear: 1999,
      title: "Welsh Assembly and Scottish Parliament open",
      summary: "The National Assembly for Wales (Cardiff) and the Scottish Parliament (Edinburgh) begin work.",
      people: [],
      whyItMatters: "Wales has 60 AMs; Scotland 129 MSPs.",
      remember: ["Both since 1999"],
      imageId: "go-holyrood",
      page: 87,
      lessonId: "devolution",
    },
    {
      id: "t-go-2007",
      date: "2007",
      sortYear: 2007,
      title: "Northern Ireland Assembly restored",
      summary: "After several suspensions, the handbook says the Assembly has been running successfully since 2007.",
      people: [],
      whyItMatters: "Shows the UK government's power to suspend devolved assemblies.",
      remember: ["Running since 2007 (as of 2013)"],
      page: 88,
      lessonId: "devolution",
    },
    {
      id: "t-go-2011",
      date: "2011",
      sortYear: 2011,
      title: "Welsh Assembly gains full law-making powers",
      summary: "The National Assembly for Wales can pass laws in its 20 areas without the agreement of the UK Parliament.",
      people: [],
      whyItMatters: "Areas include education, health, economic development and housing.",
      remember: ["Since 2011", "20 areas"],
      imageId: "go-senedd",
      page: 87,
      lessonId: "devolution",
    },
  ],

  places: [
    { id: "the-government-westminster", name: "Palace of Westminster", lat: 51.4995, lon: -0.1248, label: { side: "right", dy: 8 }, note: "London. The UK Parliament; public galleries in both Houses, entrance free.", page: 89, lessonId: "standing-and-visiting", era: "Today" },
    { id: "the-government-downing-street", name: "10 Downing Street", lat: 51.5034, lon: -0.1276, label: { side: "right", dy: -8 }, note: "The Prime Minister's official home, near the Houses of Parliament.", page: 86, lessonId: "pm-and-cabinet", era: "Today" },
    { id: "the-government-chequers", name: "Chequers", lat: 51.7425, lon: -0.7935, label: { side: "left" }, note: "Buckinghamshire. The Prime Minister's country house outside London.", page: 86, lessonId: "pm-and-cabinet", era: "Today" },
    { id: "the-government-holyrood", name: "Holyrood (Scottish Parliament)", lat: 55.9520, lon: -3.1755, note: "Edinburgh. Where the 129 MSPs meet.", page: 89, lessonId: "devolution", era: "Today" },
    { id: "the-government-senedd", name: "The Senedd", lat: 51.4643, lon: -3.1621, label: { side: "left" }, note: "Cardiff Bay. Where the 60 AMs of the National Assembly for Wales meet.", page: 89, lessonId: "devolution", era: "Today" },
    { id: "the-government-stormont", name: "Stormont", lat: 54.6047, lon: -5.8318, label: { side: "left" }, note: "Belfast. Where the 90 MLAs of the Northern Ireland Assembly meet.", page: 89, lessonId: "devolution", era: "Today" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "The PM leads the party in power, appoints the cabinet, lives at 10 Downing Street and has a country house, Chequers.", page: 86 },
    { text: "The cabinet: about 20 senior ministers, meeting weekly, including the Chancellor, Home Secretary and Foreign Secretary.", page: 86 },
    { text: "The opposition is the second-largest party; its leader appoints a shadow cabinet.", page: 86 },
    { text: "Prime Minister's Questions happens every week while Parliament is sitting.", page: 86 },
    { text: "Pressure groups: CBI (business), Greenpeace (environment), Liberty (human rights).", page: 86 },
    { text: "Civil servants are politically neutral; core values: integrity, honesty, objectivity, impartiality.", page: 86 },
    { text: "London has 33 local authorities; local elections are held in May every year.", page: 87 },
    { text: "Devolution since 1997: Welsh Assembly (60 AMs, Cardiff) and Scottish Parliament (129 MSPs, Edinburgh) since 1999; Northern Ireland Assembly (90 MLAs, Stormont).", page: 87 },
    { text: "Defence, foreign affairs, immigration, taxation and social security remain with the UK government.", page: 87 },
    { text: "Proceedings in Parliament are recorded in Hansard; TV and radio coverage of parties must be balanced.", page: 88 },
    { text: "You must be on the electoral register to vote; polling stations are open 7.00 am to 10.00 pm.", page: 89 },
    { text: "Most UK, Irish and Commonwealth citizens aged 18+ can stand for office, except the armed forces, civil servants and some offenders.", page: 89 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "go-f01", lessonId: "pm-and-cabinet", page: 86, front: "What is the Prime Minister's official home?", back: "10 Downing Street, in central London near the Houses of Parliament." },
    { id: "go-f02", lessonId: "pm-and-cabinet", page: 86, front: "What is Chequers?", back: "The Prime Minister's country house outside London." },
    { id: "go-f03", lessonId: "pm-and-cabinet", page: 86, front: "How can a Prime Minister be changed?", back: "If the MPs in the governing party decide to change them, or if the PM resigns. The PM usually resigns after losing a General Election." },
    { id: "go-f04", lessonId: "pm-and-cabinet", page: 86, front: "What is the cabinet?", back: "About 20 senior MPs appointed by the PM to run departments; a committee that usually meets weekly and makes important policy decisions." },
    { id: "go-f05", lessonId: "pm-and-cabinet", page: 86, front: "What are the Chancellor of the Exchequer, Home Secretary and Foreign Secretary responsible for?", back: "Chancellor: the economy. Home Secretary: crime, policing and immigration. Foreign Secretary: relationships with foreign countries." },
    { id: "go-f06", lessonId: "pm-and-cabinet", page: 86, front: "What is the opposition?", back: "The second-largest party in the House of Commons. Its leader usually becomes PM if the party wins the next General Election." },
    { id: "go-f07", lessonId: "pm-and-cabinet", page: 86, front: "What is the shadow cabinet?", back: "Senior opposition MPs appointed by the leader of the opposition as 'shadow ministers', to challenge the government and put forward alternative policies." },
    { id: "go-f08", lessonId: "parties-and-media", page: 86, front: "Name the major political parties given in the handbook.", back: "The Conservative Party, the Labour Party, the Liberal Democrats, and parties representing Scottish, Welsh or Northern Irish interests." },
    { id: "go-f09", lessonId: "parties-and-media", page: 86, front: "What is an 'independent' MP?", back: "An MP who does not represent any of the main parties; they usually represent an issue important to their constituency." },
    { id: "go-f10", lessonId: "parties-and-media", page: 86, front: "What are pressure and lobby groups? Give three examples.", back: "Organisations that try to influence government policy, e.g. the CBI (British business), Greenpeace (environment), Liberty (human rights)." },
    { id: "go-f11", lessonId: "parties-and-media", page: 88, front: "What is Hansard?", back: "The official reports of proceedings in Parliament." },
    { id: "go-f12", lessonId: "parties-and-media", page: 88, front: "What does a 'free press' mean?", back: "What is written in newspapers is free from government control." },
    { id: "go-f13", lessonId: "parties-and-media", page: 88, front: "What does the law say about radio and TV coverage of political parties?", back: "It must be balanced, so equal time is given to rival viewpoints." },
    { id: "go-f14", lessonId: "civil-service-and-local", page: 86, front: "What do civil servants do?", back: "Support the government in developing and implementing its policies, and deliver public services. They are accountable to ministers." },
    { id: "go-f15", lessonId: "civil-service-and-local", page: 86, front: "What are the civil service's core values?", back: "Integrity, honesty, objectivity and impartiality (including being politically neutral)." },
    { id: "go-f16", lessonId: "civil-service-and-local", page: 87, front: "How are local authorities funded?", back: "By money from central government and by local taxes." },
    { id: "go-f17", lessonId: "civil-service-and-local", page: 87, front: "How many local authorities does London have, and who coordinates policy across the capital?", back: "33; the Greater London Authority and the Mayor of London." },
    { id: "go-f18", lessonId: "civil-service-and-local", page: 87, front: "When are most local council elections held?", back: "In May every year." },
    { id: "go-f19", lessonId: "devolution", page: 87, front: "Since when have powers been devolved, and since when have the Welsh Assembly and Scottish Parliament existed?", back: "Devolution since 1997; Welsh Assembly and Scottish Parliament since 1999." },
    { id: "go-f20", lessonId: "devolution", page: 87, front: "Which policy areas remain under central UK government control?", back: "Defence, foreign affairs, immigration, taxation and social security." },
    { id: "go-f21", lessonId: "devolution", page: 87, front: "How many members do the three devolved bodies have?", back: "National Assembly for Wales: 60 AMs. Scottish Parliament: 129 MSPs. Northern Ireland Assembly: 90 MLAs." },
    { id: "go-f22", lessonId: "devolution", page: 87, front: "In how many areas can the Welsh Assembly make laws, and since when without UK Parliament agreement?", back: "20 areas (e.g. education, health, economic development, housing); since 2011." },
    { id: "go-f23", lessonId: "devolution", page: 87, front: "Name four matters on which the Scottish Parliament can legislate.", back: "Any four of: civil and criminal law, health, education, planning, additional tax-raising powers." },
    { id: "go-f24", lessonId: "devolution", page: 87, front: "When was the Northern Ireland Parliament established and abolished?", back: "Established 1922 (when Ireland was divided); abolished 1972, shortly after the Troubles broke out in 1969." },
    { id: "go-f25", lessonId: "devolution", page: 87, front: "After which agreement was the Northern Ireland Assembly established?", back: "The Belfast Agreement (Good Friday Agreement) of 1998." },
    { id: "go-f26", lessonId: "who-can-vote", page: 88, front: "Who can vote in all public elections in the UK?", back: "Adult citizens of the UK, and citizens of the Commonwealth and the Irish Republic who are resident in the UK." },
    { id: "go-f27", lessonId: "who-can-vote", page: 88, front: "When is the electoral register updated?", back: "Every year in September or October." },
    { id: "go-f28", lessonId: "who-can-vote", page: 88, front: "What is 'individual registration' and where is it used?", back: "In Northern Ireland: everyone entitled to vote must complete their own registration form." },
    { id: "go-f29", lessonId: "who-can-vote", page: 89, front: "When are polling stations open on election day?", back: "From 7.00 am until 10.00 pm." },
    { id: "go-f30", lessonId: "who-can-vote", page: 89, front: "What extra must voters show at a polling station in Northern Ireland?", back: "Photographic identification." },
    { id: "go-f31", lessonId: "standing-and-visiting", page: 89, front: "Who cannot stand for public office?", back: "Exceptions include members of the armed forces, civil servants and people found guilty of certain criminal offences." },
    { id: "go-f32", lessonId: "standing-and-visiting", page: 89, front: "Where do MLAs, MSPs and AMs meet?", back: "MLAs: Stormont, Belfast. MSPs: Holyrood, Edinburgh. AMs: the Senedd, Cardiff Bay." },
    { id: "go-f33", lessonId: "standing-and-visiting", page: 89, front: "How can you get into the public galleries at Westminster?", back: "Write to your MP in advance for tickets or queue on the day at the public entrance. Entrance is free." },
    { id: "go-f34", lessonId: "standing-and-visiting", page: 89, front: "Can members of the House of Lords stand for election to the House of Commons?", back: "No, but they are eligible for all other public offices." },
    { id: "go-f35", lessonId: "standing-and-visiting", page: 89, front: "How can you arrange a visit to Stormont?", back: "Contact the Education Service of the Northern Ireland Assembly or contact an MLA." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // pm-and-cabinet
    { id: "go-q01", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "What is the name of the Prime Minister's country house outside London?", options: ["Balmoral", "Chequers", "Sandringham", "Hampton Court"], answer: [1], explanation: "The PM's official home is 10 Downing Street; the country house is Chequers." },
    { id: "go-q02", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "Where is the Prime Minister's official home?", options: ["Buckingham Palace", "10 Downing Street", "11 Downing Street", "The Palace of Westminster"], answer: [1], explanation: "The official home is 10 Downing Street in central London, near the Houses of Parliament." },
    { id: "go-q03", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "Which minister is responsible for crime, policing and immigration?", options: ["The Chancellor of the Exchequer", "The Foreign Secretary", "The Home Secretary", "The Secretary of State for Defence"], answer: [2], explanation: "The Home Secretary is responsible for crime, policing and immigration." },
    { id: "go-q04", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "Which minister is responsible for the economy?", options: ["The Chancellor of the Exchequer", "The Home Secretary", "The Foreign Secretary", "The Speaker"], answer: [0], explanation: "The Chancellor of the Exchequer is responsible for the economy." },
    { id: "go-q05", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "What is the opposition?", options: ["The House of Lords", "The second-largest party in the House of Commons", "All MPs who are not ministers", "Independent MPs"], answer: [1], explanation: "The second-largest party in the House of Commons is called the opposition." },
    { id: "go-q06", lessonId: "pm-and-cabinet", page: 86, type: "truefalse", prompt: "Prime Minister's Questions takes place every week while Parliament is sitting.", options: ["True", "False"], answer: [0], explanation: "True. It is an important opportunity for the leader of the opposition to challenge the government." },
    { id: "go-q06b", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "About how many senior MPs does the Prime Minister appoint to the cabinet?", options: ["About 5", "About 20", "About 50", "About 100"], answer: [1], explanation: "The PM appoints about 20 senior MPs to become ministers in charge of departments." },
    { id: "go-q06c", lessonId: "pm-and-cabinet", page: 86, type: "single", prompt: "Who appoints the shadow cabinet?", options: ["The Prime Minister", "The Speaker", "The leader of the opposition", "The monarch"], answer: [2], explanation: "The leader of the opposition appoints senior opposition MPs as shadow ministers." },
    // parties-and-media
    { id: "go-q07", lessonId: "parties-and-media", page: 86, type: "single", prompt: "What are MPs who do not represent any of the main political parties called?", options: ["Crossbenchers", "Independents", "Peers", "Shadow ministers"], answer: [1], explanation: "They are called 'independents' and usually represent an issue important to their constituency." },
    { id: "go-q08", lessonId: "parties-and-media", page: 86, type: "single", prompt: "What is the minimum age to stand for election as an MP?", options: ["16", "18", "21", "25"], answer: [1], explanation: "Anyone aged 18 or over can stand for election as an MP." },
    { id: "go-q09", lessonId: "parties-and-media", page: 86, type: "multi", prompt: "Which TWO are examples of pressure or lobby groups given in the handbook?", options: ["Greenpeace", "The civil service", "Liberty", "Hansard"], answer: [0, 2], explanation: "Greenpeace (environment) and Liberty (human rights) are campaign groups; the CBI is a representative organisation." },
    { id: "go-q10", lessonId: "parties-and-media", page: 86, type: "single", prompt: "Which organisation represents the views of British business?", options: ["Liberty", "The CBI", "Greenpeace", "The Electoral Commission"], answer: [1], explanation: "The CBI (Confederation of British Industry) represents the views of British business." },
    { id: "go-q11", lessonId: "parties-and-media", page: 88, type: "single", prompt: "What are the official reports of proceedings in Parliament called?", options: ["The Gazette", "Hansard", "The Domesday Book", "The Register"], answer: [1], explanation: "Proceedings are broadcast on TV and published in official reports called Hansard." },
    { id: "go-q12", lessonId: "parties-and-media", page: 88, type: "truefalse", prompt: "By law, radio and television coverage of the political parties must be balanced.", options: ["True", "False"], answer: [0], explanation: "True. Equal time has to be given to rival viewpoints. Newspapers, by contrast, may campaign." },
    { id: "go-q12b", lessonId: "parties-and-media", page: 88, type: "truefalse", prompt: "Newspapers in the UK are controlled by the government.", options: ["True", "False"], answer: [1], explanation: "False. The UK has a free press: what is written in newspapers is free from government control." },
    // civil-service-and-local
    { id: "go-q13", lessonId: "civil-service-and-local", page: 86, type: "truefalse", prompt: "Civil servants are political appointees chosen by the governing party.", options: ["True", "False"], answer: [1], explanation: "False. Civil servants are chosen on merit and are politically neutral." },
    { id: "go-q14", lessonId: "civil-service-and-local", page: 86, type: "multi", prompt: "Which TWO are core values of the civil service?", options: ["Loyalty to a party", "Integrity", "Impartiality", "Secrecy"], answer: [1, 2], explanation: "The core values are integrity, honesty, objectivity and impartiality (including being politically neutral)." },
    { id: "go-q15", lessonId: "civil-service-and-local", page: 87, type: "single", prompt: "How many local authorities does London have?", options: ["12", "25", "33", "48"], answer: [2], explanation: "London has 33 local authorities, with the Greater London Authority and the Mayor of London coordinating policies." },
    { id: "go-q16", lessonId: "civil-service-and-local", page: 87, type: "single", prompt: "In which month are local elections for councillors held in most areas?", options: ["January", "May", "September", "November"], answer: [1], explanation: "For most local authorities, local elections are held in May every year." },
    { id: "go-q17", lessonId: "civil-service-and-local", page: 87, type: "single", prompt: "How are local authorities funded?", options: ["Only by local taxes", "Only by central government", "By central government and local taxes", "By the European Union"], answer: [2], explanation: "They are funded by money from central government and by local taxes." },
    { id: "go-q18", lessonId: "civil-service-and-local", page: 86, type: "single", prompt: "To whom are civil servants accountable?", options: ["The Speaker", "Ministers", "The monarch", "Local councils"], answer: [1], explanation: "Civil servants are accountable to ministers." },
    // devolution
    { id: "go-q19", lessonId: "devolution", page: 87, type: "single", prompt: "How many members does the Scottish Parliament have?", options: ["60", "90", "108", "129"], answer: [3], explanation: "There are 129 MSPs. Wales has 60 AMs and Northern Ireland 90 MLAs." },
    { id: "go-q20", lessonId: "devolution", page: 87, type: "single", prompt: "How many Assembly members (AMs) does the National Assembly for Wales have, according to the handbook?", options: ["40", "60", "90", "129"], answer: [1], explanation: "The handbook says 60 AMs, elected every four years by a form of proportional representation." },
    { id: "go-q21", lessonId: "devolution", page: 87, type: "multi", prompt: "Which TWO policy areas remain under central UK government control?", options: ["Defence", "Education", "Immigration", "Health"], answer: [0, 2], explanation: "Defence, foreign affairs, immigration, taxation and social security stay with the UK government. Education and health are devolved." },
    { id: "go-q22", lessonId: "devolution", page: 87, type: "single", prompt: "Soon after which agreement was the Northern Ireland Assembly established?", options: ["The Treaty of Rome", "The Belfast (Good Friday) Agreement", "The Act of Union", "The Anglo-Irish Treaty of 1922"], answer: [1], explanation: "The Assembly was established soon after the Belfast Agreement (or Good Friday Agreement) in 1998." },
    { id: "go-q23", lessonId: "devolution", page: 87, type: "single", prompt: "When was the Northern Ireland Parliament abolished?", options: ["1922", "1969", "1972", "1998"], answer: [2], explanation: "Established in 1922, it was abolished in 1972, shortly after the Troubles broke out in 1969." },
    { id: "go-q24", lessonId: "devolution", page: 87, type: "truefalse", prompt: "Since 2011 the National Assembly for Wales has been able to pass laws in its areas without the agreement of the UK Parliament.", options: ["True", "False"], answer: [0], explanation: "True. It can make laws in 20 areas, including education, health, economic development and housing." },
    { id: "go-q24b", lessonId: "devolution", page: 87, type: "single", prompt: "What are the elected members of the Northern Ireland Assembly called?", options: ["AMs", "MSPs", "MLAs", "MEPs"], answer: [2], explanation: "They are MLAs (members of the Legislative Assembly). There are 90 of them." },
    { id: "go-q24c", lessonId: "devolution", page: 88, type: "truefalse", prompt: "The UK government has the power to suspend all devolved assemblies.", options: ["True", "False"], answer: [0], explanation: "True. It has used this power several times in Northern Ireland." },
    // who-can-vote
    { id: "go-q25", lessonId: "who-can-vote", page: 89, type: "single", prompt: "What hours are polling stations open on election day?", options: ["8.00 am to 8.00 pm", "7.00 am to 10.00 pm", "9.00 am to 9.00 pm", "6.00 am to 11.00 pm"], answer: [1], explanation: "Polling stations are open from 7.00 am until 10.00 pm." },
    { id: "go-q26", lessonId: "who-can-vote", page: 88, type: "multi", prompt: "Which TWO groups resident in the UK can vote in all public elections?", options: ["Citizens of the Irish Republic", "Citizens of the USA", "Citizens of Commonwealth countries", "Anyone who has lived in the UK for a year"], answer: [0, 2], explanation: "UK citizens, and Commonwealth and Irish Republic citizens resident in the UK, can vote in all public elections." },
    { id: "go-q27", lessonId: "who-can-vote", page: 88, type: "single", prompt: "When is the electoral register updated?", options: ["Every January", "Every year in September or October", "Only before a General Election", "Every five years"], answer: [1], explanation: "The register is updated every year in September or October." },
    { id: "go-q28", lessonId: "who-can-vote", page: 88, type: "truefalse", prompt: "Anyone can look at the electoral register, under supervision.", options: ["True", "False"], answer: [0], explanation: "True. By law, each local authority must make it available, although viewing has to be supervised." },
    { id: "go-q29", lessonId: "who-can-vote", page: 89, type: "single", prompt: "According to the handbook, in which part of the UK must voters show photographic identification at the polling station?", options: ["England", "Scotland", "Wales", "Northern Ireland"], answer: [3], explanation: "The handbook says photographic ID is required in Northern Ireland. (Photo ID has since been introduced in Great Britain too.)" },
    { id: "go-q30", lessonId: "who-can-vote", page: 88, type: "single", prompt: "Since which year has the UK had a fully democratic voting system?", options: ["1918", "1928", "1969", "1999"], answer: [1], explanation: "The UK has had a fully democratic voting system since 1928; the voting age of 18 was set in 1969." },
    { id: "go-q30b", lessonId: "who-can-vote", page: 89, type: "single", prompt: "If it is difficult to get to a polling station, what can you do?", options: ["Vote by telephone", "Ask a neighbour to vote for you", "Register for a postal ballot", "Vote at the next election instead"], answer: [2], explanation: "You can register for a postal ballot; the paper is sent to your home and you post it back." },
    // standing-and-visiting
    { id: "go-q31", lessonId: "standing-and-visiting", page: 89, type: "multi", prompt: "Which TWO groups cannot stand for public office?", options: ["Members of the armed forces", "Teachers", "Civil servants", "Commonwealth citizens aged 18 or over"], answer: [0, 2], explanation: "Exceptions include members of the armed forces, civil servants and people found guilty of certain criminal offences." },
    { id: "go-q32", lessonId: "standing-and-visiting", page: 89, type: "truefalse", prompt: "Members of the House of Lords can stand for election to the House of Commons.", options: ["True", "False"], answer: [1], explanation: "False. They may not stand for the House of Commons but are eligible for all other public offices." },
    { id: "go-q33", lessonId: "standing-and-visiting", page: 89, type: "single", prompt: "Where does the Northern Ireland Assembly meet?", options: ["Holyrood", "The Senedd", "Stormont", "Westminster"], answer: [2], explanation: "MLAs meet in the Northern Ireland Assembly at Stormont, in Belfast." },
    { id: "go-q34", lessonId: "standing-and-visiting", page: 89, type: "single", prompt: "Where do members of the Scottish Parliament meet?", options: ["Holyrood, Edinburgh", "Stormont, Belfast", "The Senedd, Cardiff Bay", "Glasgow City Chambers"], answer: [0], explanation: "MSPs meet in the Scottish Parliament building at Holyrood in Edinburgh." },
    { id: "go-q35", lessonId: "standing-and-visiting", page: 89, type: "single", prompt: "How much does it cost to enter the public galleries of the Houses of Parliament?", options: ["It is free", "£5", "£10", "Only MPs' guests may enter"], answer: [0], explanation: "Entrance is free. You can write to your MP for tickets or queue on the day." },
    { id: "go-q36", lessonId: "standing-and-visiting", page: 89, type: "truefalse", prompt: "It is usually easier to get into the House of Lords public gallery than the House of Commons.", options: ["True", "False"], answer: [0], explanation: "True. Queues for the Commons can take at least one to two hours." },
  ],

  flags: [
    { page: 87, text: "The National Assembly for Wales was renamed Senedd Cymru / the Welsh Parliament in 2020; its members are now Members of the Senedd (MSs), and it has 96 members from the 2026 election. The handbook's '60 AMs' reflects 2013." },
    { page: 87, text: "The PDF gives the Northern Ireland Assembly 90 members (correct since 2017). The official 3rd edition (2013) gave 108. Check which figure your test material uses." },
    { page: 88, text: "'The Assembly has been running successfully since 2007' is dated: the Northern Ireland Assembly was suspended in 2017–2020 and 2022–2024." },
    { page: 88, text: "EU citizens' voting rights and European elections changed after the UK left the EU in 2020. Individual electoral registration replaced household registration in Great Britain in 2014." },
    { page: 89, text: "Photographic ID is now required at polling stations in Great Britain as well as Northern Ireland (since 2023)." },
    { page: 89, text: "The Welsh Assembly booking number (0845) and gsi.gov.uk email address are out of date." },
  ],
};
