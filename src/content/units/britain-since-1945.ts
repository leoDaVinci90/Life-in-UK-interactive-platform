import type { Unit } from "../types";

/**
 * Unit 3.6 — Britain since 1945. Handbook (Britizen PDF) § 3.2, pp. 11–15.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks. The 2015–2024 material on p. 15 was
 * added by the PDF's publisher and is labelled as such.
 */
export const britainSince1945: Unit = {
  id: "britain-since-1945",
  number: "3.6",
  title: "Britain since 1945",
  handbook: {
    chapter: 3,
    chapterTitle: "A long and illustrious history",
    section: "3.2",
    pages: [11, 15],
  },
  status: "available",
  dek: "The welfare state, migration, the 1960s, British inventions, Thatcher and devolution.",
  heroImageId: "britain-since-1945-attlee",
  overview: [
    "Britain won the Second World War but was exhausted economically, and its people wanted change. The Labour government of 1945 built the welfare state and the NHS, began giving independence to former colonies, and invited workers from the Commonwealth to help rebuild the country.",
    "The handbook then follows the Swinging Sixties, a remarkable run of British inventions, the economic troubles of the 1970s, Margaret Thatcher's reforms, devolution under Tony Blair, and the conflicts and coalition of the 21st century. Expect questions on the people in the profile boxes, the inventors and what they invented, and the key dates from 1945 to 2010.",
  ],
  objectives: [
    "Explain how the welfare state and the NHS were created after 1945, and the roles of Attlee, Beveridge, Bevan and Butler.",
    "Describe post-war migration to Britain and the social changes of the 1960s.",
    "Match the great British inventions of the 20th century to their inventors.",
    "Describe the economic and political problems of the 1970s and the UK's entry into the EEC in 1973.",
    "Summarise the Thatcher, Major, Blair and Brown governments, including the Falklands War and devolution.",
    "Outline Britain's role in conflicts since 1990 and the 2010 coalition government.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "welfare-state",
      title: "The welfare state",
      dek: "Attlee's Labour government, the Beveridge Report, the NHS and the end of empire.",
      pages: [11, 12],
      minutes: 8,
      heroImageId: "britain-since-1945-attlee",
      recall: {
        question: "Before you read: who led the establishment of the NHS in 1948?",
        answer: "Aneurin (Nye) Bevan, the Minister for Health in Clement Attlee's Labour government.",
      },
      blocks: [
        {
          type: "prose",
          heading: "A country that wanted change",
          pages: [11],
          paragraphs: [
            "Although the UK had won the war, the country was exhausted economically and people wanted change. There had already been major reforms to the education system during the war, and people now looked for wider social reforms.",
            "In 1945 the British people elected a Labour government. The new Prime Minister, Clement Attlee, promised to introduce the welfare state outlined in the Beveridge Report.",
          ],
        },
        {
          type: "prose",
          heading: "The NHS and social security",
          pages: [11],
          paragraphs: [
            "In 1948 Aneurin (Nye) Bevan, the Minister for Health, led the establishment of the National Health Service (NHS). It guaranteed a minimum standard of health care for all, free at the point of use.",
            "A national system of benefits was also introduced to provide 'social security', so that people would be protected 'from the cradle to the grave'.",
            "The government took into public ownership (nationalised) the railways, the coal mines, and the gas, water and electricity supplies.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-bevan",
            kind: "photograph",
            caption: "Aneurin (Nye) Bevan, photographed by Howard Coster, 1943.",
          },
        },
        {
          type: "prose",
          heading: "Independence for former colonies",
          pages: [11],
          paragraphs: [
            "Another change was self-government for former colonies. In 1947 independence was granted to nine countries, including India, Pakistan and Ceylon (now Sri Lanka). Other colonies in Africa, the Caribbean and the Pacific became independent over the next 20 years.",
          ],
        },
        {
          type: "prose",
          heading: "The Cold War and the 1950s",
          pages: [11],
          paragraphs: [
            "The UK developed its own atomic bomb and joined the new North Atlantic Treaty Organization (NATO), an alliance of nations set up to resist the perceived threat of invasion by the Soviet Union and its allies.",
            "Britain had a Conservative government from 1951 to 1964. The 1950s were a time of economic recovery and growing prosperity for working people. The Prime Minister Harold Macmillan was famous for his 'wind of change' speech about decolonisation and independence for the countries of the Empire.",
          ],
        },
        {
          type: "cards",
          heading: "People of the post-war years",
          cards: [
            {
              id: "bs-attlee",
              title: "Clement Attlee",
              meta: "1883–1967 · Labour Prime Minister 1945–1951",
              summary: "Led the government that created the NHS and nationalised major industries.",
              detail: [
                "Born in London; his father was a solicitor. After Oxford University he became a barrister, but gave it up to do social work in East London and eventually became a Labour MP.",
                "He was Winston Churchill's Deputy Prime Minister in the wartime coalition, and became Prime Minister when Labour won the 1945 election. He led the Labour Party for 20 years.",
                "His government nationalised major industries (such as coal and steel), created the NHS, carried out many of Beveridge's plans for a stronger welfare state, and improved conditions for workers.",
              ],
              page: 11,
              imageId: "britain-since-1945-attlee",
            },
            {
              id: "bs-beveridge",
              title: "William Beveridge",
              meta: "1879–1963 · economist and social reformer",
              summary: "His 1942 report provided the basis of the modern welfare state.",
              detail: [
                "Later Lord Beveridge. He was briefly a Liberal MP and later leader of the Liberals in the House of Lords.",
                "He is best known for the 1942 report Social Insurance and Allied Services, known as the Beveridge Report. The wartime government commissioned it in 1941.",
                "It recommended that the government fight the five 'Giant Evils' of Want, Disease, Ignorance, Squalor and Idleness.",
              ],
              page: 11,
              imageId: "britain-since-1945-beveridge",
            },
            {
              id: "bs-butler",
              title: "R A Butler",
              meta: "1902–82 · Conservative MP",
              summary: "Oversaw the Education Act 1944, 'the Butler Act', which introduced free secondary education.",
              detail: [
                "Richard Austen Butler (later Lord Butler) became a Conservative MP in 1923 and was made responsible for education in 1941.",
                "The Education Act 1944 introduced free secondary education in England and Wales. The division between primary and secondary schools that it enforced still remains in most areas of Britain.",
              ],
              page: 12,
              imageId: "britain-since-1945-butler",
            },
            {
              id: "bs-dylan-thomas",
              title: "Dylan Thomas",
              meta: "1914–53 · Welsh poet and writer",
              summary: "Wrote Under Milk Wood and Do Not Go Gentle into That Good Night.",
              detail: [
                "He often read and performed his work in public, including for the BBC.",
                "His best-known works include the radio play Under Milk Wood, first performed in 1954 after his death, and the poem Do Not Go Gentle into That Good Night, written for his dying father in 1952.",
                "He died aged 39 in New York. His birthplace, Swansea, has several memorials to him, including a statue and the Dylan Thomas Centre.",
              ],
              page: 12,
              imageId: "britain-since-1945-dylan-thomas",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "britain-since-1945-attlee", kind: "portrait", caption: "Clement Attlee, portrait by George Harcourt, 1946." },
            { imageId: "britain-since-1945-beveridge", kind: "photograph", caption: "William Beveridge, photographed by Howard Coster." },
            { imageId: "britain-since-1945-butler", kind: "photograph", caption: "R A Butler in 1963, photographed in The Hague by Joop van Bilsen." },
            { imageId: "britain-since-1945-dylan-thomas", kind: "photograph", caption: "Dylan Thomas, photographed by Nora Summers, c. 1938." },
          ],
        },
        {
          type: "sequence",
          heading: "The five Giant Evils (Beveridge Report, 1942)",
          page: 11,
          steps: [
            { label: "Want", detail: "Poverty: answered by social security benefits." },
            { label: "Disease", detail: "Answered by the NHS (1948)." },
            { label: "Ignorance", detail: "Lack of education." },
            { label: "Squalor", detail: "Poor housing and living conditions." },
            { label: "Idleness", detail: "Unemployment." },
          ],
        },
        {
          type: "map",
          heading: "On the map",
          placeIds: ["britain-since-1945-swansea"],
          caption: "Swansea, Dylan Thomas's birthplace, has a statue of him and the Dylan Thomas Centre.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The main text of this PDF spells the name \"Clement Atlee\". The correct spelling, used in the profile box and on this site, is Attlee." },
            { text: "Beyond the handbook: the glosses on the Giant Evils (poverty, housing, unemployment) are standard explanations, not handbook text." },
          ],
        },
      ],
      keyFacts: [
        { text: "1945: Labour won the election; Clement Attlee became Prime Minister (1945–1951).", page: 11 },
        { text: "1948: Aneurin (Nye) Bevan, Minister for Health, led the establishment of the NHS, free at the point of use.", page: 11 },
        { text: "Social security protected people 'from the cradle to the grave'; railways, coal, gas, water and electricity were nationalised.", page: 11 },
        { text: "1947: independence for nine countries, including India, Pakistan and Ceylon (now Sri Lanka).", page: 11 },
        { text: "The UK developed an atomic bomb and joined NATO. Conservative government 1951–1964; Harold Macmillan's 'wind of change' speech.", page: 11 },
        { text: "Beveridge Report (1942): fight the five Giant Evils of Want, Disease, Ignorance, Squalor and Idleness.", page: 11 },
        { text: "R A Butler's Education Act 1944 introduced free secondary education in England and Wales.", page: 12 },
        { text: "Dylan Thomas, Welsh poet from Swansea: Under Milk Wood and Do Not Go Gentle into That Good Night.", page: 12 },
      ],
      mnemonics: [
        {
          title: "The five Giant Evils",
          device: "\"We Don't Ignore Sick Individuals\": Want, Disease, Ignorance, Squalor, Idleness.",
          explanation: "The Beveridge Report's five problems, in the handbook's order.",
        },
        {
          title: "Who did what",
          device: "Beveridge wrote it, Attlee promised it, Bevan built it, Butler schooled it.",
          explanation: "Beveridge Report (1942), Attlee's government (1945), Bevan's NHS (1948), Butler's Education Act (1944).",
        },
        {
          title: "1947 then 1948",
          device: "India goes in '47; the NHS comes in '48.",
          explanation: "Independence for India, Pakistan and Ceylon in 1947; the NHS a year later.",
        },
      ],
      checkQuestionIds: ["bs-q01", "bs-q03", "bs-q06"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "migration-and-sixties",
      title: "Migration and the Swinging Sixties",
      dek: "Workers from the West Indies and South Asia, social change and new laws.",
      pages: [12],
      minutes: 6,
      heroImageId: "britain-since-1945-windrush",
      recall: {
        question: "Before you read: in which year were people from the West Indies first invited to come and work in Britain?",
        answer: "1948.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Rebuilding Britain",
          pages: [12],
          paragraphs: [
            "Rebuilding Britain after the Second World War was a huge task, and there were labour shortages. The government encouraged workers from Ireland and other parts of Europe to come and help with reconstruction. In 1948 people from the West Indies were also invited to come and work.",
            "During the 1950s there was still a shortage of labour, so further immigration was encouraged for economic reasons and many industries advertised for workers from overseas. Centres were set up in the West Indies to recruit bus drivers. Textile and engineering firms from the north of England and the Midlands sent agents to India and Pakistan to find workers.",
            "For about 25 years, people from the West Indies, India, Pakistan and (later) Bangladesh travelled to work and settle in Britain.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-windrush",
            kind: "photograph",
            caption: "HMT Empire Windrush, a Royal Navy official photograph.",
            context: "The Empire Windrush is not named in the handbook. In June 1948 it brought one of the first large groups of people from the Caribbean to Britain, and the post-war generation of Caribbean migrants is often called the Windrush generation.",
          },
        },
        {
          type: "prose",
          heading: "The Swinging Sixties",
          pages: [12],
          paragraphs: [
            "The 1960s, known as 'the Swinging Sixties', were a time of major social change. British fashion, cinema and popular music grew; two well-known pop groups of the time were The Beatles and The Rolling Stones. People became better off and many bought cars and other consumer goods.",
            "Social laws were liberalised, for example on divorce and on abortion in England, Wales and Scotland.",
            "The position of women at work also improved. It had been quite common for employers to ask women to leave their jobs when they married, but Parliament passed new laws giving women the right to equal pay and making it illegal for employers to discriminate against women because of their gender.",
            "It was also a time of technological progress. Britain and France developed Concorde, the supersonic airliner. New styles of architecture, including high-rise buildings and the use of concrete and steel, became common.",
          ],
        },
        {
          type: "prose",
          heading: "Immigration restricted",
          pages: [12],
          paragraphs: [
            "Migration from the West Indies, India, Pakistan and what is now Bangladesh fell in the late 1960s, because the government passed new laws to restrict immigration. Immigrants had to have a strong connection to Britain through birth or ancestry.",
            "Even so, in the early 1970s Britain admitted 28,000 people of Indian origin who had been forced to leave Uganda.",
          ],
        },
        {
          type: "sequence",
          heading: "Post-war migration in order",
          page: 12,
          steps: [
            { label: "After 1945", detail: "Workers from Ireland and other parts of Europe help with reconstruction." },
            { label: "1948", detail: "People from the West Indies invited to come and work." },
            { label: "1950s", detail: "Recruitment centres in the West Indies (bus drivers); agents sent to India and Pakistan by textile and engineering firms." },
            { label: "About 25 years", detail: "People from the West Indies, India, Pakistan and later Bangladesh come to work and settle." },
            { label: "Late 1960s", detail: "New laws restrict immigration: a strong connection through birth or ancestry is required." },
            { label: "Early 1970s", detail: "28,000 people of Indian origin forced to leave Uganda are admitted." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The Ugandan Asians were expelled by Idi Amin in 1972." },
            { text: "The equal pay law was the Equal Pay Act 1970, and the Sex Discrimination Act followed in 1975.", verify: "The handbook places these laws in the 1960s section without naming them." },
          ],
        },
      ],
      keyFacts: [
        { text: "Post-war labour shortages: workers were encouraged from Ireland and other parts of Europe.", page: 12 },
        { text: "1948: people from the West Indies were invited to come and work.", page: 12 },
        { text: "1950s: bus drivers recruited in the West Indies; textile and engineering firms sent agents to India and Pakistan.", page: 12 },
        { text: "The 1960s, 'the Swinging Sixties': The Beatles and The Rolling Stones; growth in fashion, cinema and music.", page: 12 },
        { text: "1960s laws liberalised divorce and abortion and gave women equal pay and protection from discrimination.", page: 12 },
        { text: "Late 1960s laws restricted immigration; in the early 1970s Britain admitted 28,000 people of Indian origin expelled from Uganda.", page: 12 },
      ],
      mnemonics: [
        {
          title: "Buses and textiles",
          device: "West Indies drove the buses; India and Pakistan staffed the mills.",
          explanation: "Recruitment centres in the West Indies found bus drivers; textile and engineering firms from the north and Midlands sent agents to India and Pakistan.",
        },
        {
          title: "28,000 from Uganda",
          device: "Twenty-eight thousand, early seventies.",
          explanation: "People of Indian origin forced to leave Uganda, admitted despite the late-1960s restrictions.",
        },
      ],
      checkQuestionIds: ["bs-q09", "bs-q11", "bs-q14"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "inventions",
      title: "Great British inventions of the 20th century",
      dek: "Television, radar, the jet engine, DNA, Concorde, the ATM, IVF, Dolly the sheep and the web.",
      pages: [12, 13],
      minutes: 8,
      heroImageId: "britain-since-1945-concorde",
      recall: {
        question: "Before you read: who invented the World Wide Web, and when was information first transferred via the web?",
        answer: "Sir Tim Berners-Lee. Information was first transferred via the web on 25 December 1990.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Britain's gifts to the world",
          pages: [12],
          paragraphs: [
            "Britain has given the world some wonderful inventions. The handbook lists these examples from the 20th century. It says you do not need to remember the inventors' dates of birth and death, but the inventions, the people and the key dates of the inventions are worth knowing.",
          ],
        },
        {
          type: "cards",
          heading: "Broadcasting, radar and computing",
          cards: [
            {
              id: "bs-baird",
              title: "Television",
              meta: "John Logie Baird (1888–1946) · Scottish",
              summary: "Developed in the 1920s. In 1932 Baird made the first television broadcast between London and Glasgow.",
              detail: ["The television was developed by Scotsman John Logie Baird in the 1920s.", "In 1932 he made the first television broadcast between London and Glasgow."],
              page: 12,
              imageId: "britain-since-1945-baird",
            },
            {
              id: "bs-watson-watt",
              title: "Radar",
              meta: "Sir Robert Watson-Watt (1892–1973) · Scottish",
              summary: "Proposed that enemy aircraft could be detected by radio waves. First successful test: 1935.",
              detail: ["Radar was developed by Scotsman Sir Robert Watson-Watt, who proposed that enemy aircraft could be detected by radio waves.", "The first successful radar test took place in 1935."],
              page: 12,
            },
            {
              id: "bs-lovell",
              title: "Radio telescope at Jodrell Bank",
              meta: "Sir Bernard Lovell (1913–2012)",
              summary: "Working with radar led Lovell to new discoveries in astronomy.",
              detail: ["The radio telescope he built at Jodrell Bank in Cheshire was for many years the biggest in the world, and it still operates today."],
              page: 12,
              imageId: "britain-since-1945-lovell-telescope",
            },
            {
              id: "bs-turing",
              title: "The Turing machine",
              meta: "Alan Turing (1912–54) · mathematician",
              summary: "A theoretical mathematical device invented in the 1930s.",
              detail: ["The theory was influential in the development of computer science and the modern-day computer."],
              page: 12,
              imageId: "britain-since-1945-turing",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "britain-since-1945-baird", kind: "photograph", caption: "John Logie Baird, photographed by Lafayette Ltd, 1928." },
            { imageId: "britain-since-1945-turing", kind: "photograph", caption: "Alan Turing, photographed by Elliott & Fry, 1951." },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "britain-since-1945-lovell-telescope",
            kind: "photograph",
            caption: "The Lovell Telescope at Jodrell Bank, Cheshire.",
          },
        },
        {
          type: "cards",
          heading: "Medicine and science",
          cards: [
            {
              id: "bs-macleod",
              title: "Insulin",
              meta: "John MacLeod (1876–1935) · Scottish physician and researcher",
              summary: "Co-discoverer of insulin, used to treat diabetes.",
              detail: ["The Scottish physician and researcher John MacLeod was the co-discoverer of insulin."],
              page: 12,
            },
            {
              id: "bs-dna",
              title: "The structure of DNA",
              meta: "1953 · London and Cambridge · Francis Crick (1916–2004)",
              summary: "Discovered through work at British universities in London and Cambridge.",
              detail: ["The discovery contributed to many scientific advances, particularly in medicine and fighting crime.", "Francis Crick, one of those awarded the Nobel Prize for it, was British."],
              page: 12,
            },
            {
              id: "bs-ivf",
              title: "IVF (in-vitro fertilisation)",
              meta: "Sir Robert Edwards (1925–) and Patrick Steptoe (1913–88)",
              summary: "Pioneered in Britain to treat infertility. The world's first 'test-tube baby' was born in Oldham, Lancashire, in 1978.",
              detail: ["Edwards was a physiologist and Steptoe a gynaecologist."],
              page: 13,
              context: { text: "Sir Robert Edwards died in 2013, after the handbook was written." },
            },
            {
              id: "bs-dolly",
              title: "Dolly the sheep",
              meta: "1996 · Sir Ian Wilmut (1944–) and Keith Campbell (1954–2012)",
              summary: "Led the team that was the first to clone a mammal.",
              detail: ["This led to further research into cloning to preserve endangered species and for medical purposes."],
              page: 13,
              imageId: "britain-since-1945-dolly",
              context: { text: "This PDF spells his name \"Ian Wilmot\"; the correct spelling is Wilmut. He died in 2023." },
            },
            {
              id: "bs-mansfield",
              title: "MRI scanner",
              meta: "Sir Peter Mansfield (1933–) · co-inventor",
              summary: "Magnetic resonance imaging gives exact, non-invasive images of internal organs.",
              detail: ["It has revolutionised diagnostic medicine."],
              page: 13,
              context: { text: "Sir Peter Mansfield died in 2017, after the handbook was written." },
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-dolly",
            kind: "photograph",
            caption: "Dolly the sheep, preserved and on display at the National Museum of Scotland, Edinburgh.",
          },
        },
        {
          type: "cards",
          heading: "Engines, aircraft and everyday machines",
          cards: [
            {
              id: "bs-whittle",
              title: "The jet engine",
              meta: "Sir Frank Whittle (1907–96) · RAF engineer officer",
              summary: "Developed in Britain in the 1930s.",
              detail: ["The jet engine was developed by Sir Frank Whittle, a British Royal Air Force engineer officer."],
              page: 12,
              imageId: "britain-since-1945-whittle",
            },
            {
              id: "bs-cockerell",
              title: "The hovercraft",
              meta: "Sir Christopher Cockerell (1910–99)",
              summary: "Invented in the 1950s.",
              detail: ["A British inventor."],
              page: 13,
              imageId: "britain-since-1945-hovercraft",
            },
            {
              id: "bs-concorde",
              title: "Concorde",
              meta: "Britain and France · first flew 1969",
              summary: "Supersonic passenger aircraft. Carried passengers from 1976; retired in 2003.",
              detail: ["Britain and France developed Concorde, the world's only supersonic passenger aircraft.", "It first flew in 1969, began carrying passengers in 1976 and was retired from service in 2003."],
              page: 13,
              imageId: "britain-since-1945-concorde",
            },
            {
              id: "bs-harrier",
              title: "The Harrier jump jet",
              meta: "Designed and developed in the UK",
              summary: "An aircraft capable of taking off vertically.",
              detail: ["The Harrier jump jet was designed and developed in the UK."],
              page: 13,
              imageId: "britain-since-1945-harrier",
            },
            {
              id: "bs-goodfellow",
              title: "The cash machine (ATM)",
              meta: "James Goodfellow (1937–) · 1960s",
              summary: "Invented the cash-dispensing ATM, or 'cashpoint'.",
              detail: ["The first was put into use by Barclays Bank in Enfield, north London, in 1967."],
              page: 13,
            },
            {
              id: "bs-berners-lee",
              title: "The World Wide Web",
              meta: "Sir Tim Berners-Lee (1955–)",
              summary: "Information was first transferred via the web on 25 December 1990.",
              detail: ["The inventor of the World Wide Web, Sir Tim Berners-Lee, is British."],
              page: 13,
              imageId: "britain-since-1945-berners-lee",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "britain-since-1945-whittle", kind: "photograph", caption: "Frank Whittle at his desk at the Ministry of Aircraft Production, during the Second World War." },
            { imageId: "britain-since-1945-hovercraft", kind: "photograph", caption: "The experimental hovercraft SR.N1 during trials, c. 1963 (The National Archives)." },
            { imageId: "britain-since-1945-harrier", kind: "photograph", caption: "A Harrier GR7 of the Royal Air Force, 2007." },
            { imageId: "britain-since-1945-berners-lee", kind: "photograph", caption: "Sir Tim Berners-Lee in London, 2014." },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "britain-since-1945-concorde",
            kind: "photograph",
            caption: "British Airways Concorde G-BOAC.",
          },
        },
        {
          type: "map",
          heading: "Inventions on the map",
          placeIds: ["britain-since-1945-london", "britain-since-1945-glasgow", "britain-since-1945-jodrell-bank", "britain-since-1945-cambridge", "britain-since-1945-enfield", "britain-since-1945-oldham"],
          caption: "London to Glasgow: the first TV broadcast (1932). Jodrell Bank: Lovell's radio telescope. London and Cambridge: DNA (1953). Enfield: the first ATM (1967). Oldham: the first test-tube baby (1978).",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "This PDF spells two inventors' names wrongly elsewhere: \"Cockrell\" (summary, p. 97) for Christopher Cockerell, and \"Ian Wilmot\" (p. 13) for Ian Wilmut. This site uses the correct spellings." },
            { text: "The handbook calls Concorde the world's only supersonic passenger aircraft. The Soviet Tupolev Tu-144 also carried passengers briefly in 1977–78; for the test, use the handbook's wording." },
            { text: "The handbook shows Sir Robert Edwards, Sir Ian Wilmut and Sir Peter Mansfield as living. They died in 2013, 2023 and 2017 respectively. You do not need inventors' birth and death dates for the test." },
          ],
        },
      ],
      keyFacts: [
        { text: "Television: John Logie Baird (Scottish), 1920s; first TV broadcast London–Glasgow in 1932.", page: 12 },
        { text: "Radar: Sir Robert Watson-Watt (Scottish); first successful test in 1935.", page: 12 },
        { text: "Sir Bernard Lovell built the radio telescope at Jodrell Bank, Cheshire.", page: 12 },
        { text: "The Turing machine: Alan Turing, 1930s, influential in the development of computers.", page: 12 },
        { text: "John MacLeod (Scottish) co-discovered insulin; the structure of DNA was discovered in 1953 (Francis Crick).", page: 12 },
        { text: "Jet engine: Sir Frank Whittle, 1930s. Hovercraft: Sir Christopher Cockerell, 1950s.", page: 12 },
        { text: "Concorde (Britain and France): first flew 1969, passengers from 1976, retired 2003. The Harrier jump jet takes off vertically.", page: 13 },
        { text: "ATM: James Goodfellow, 1960s; the first was used by Barclays in Enfield in 1967.", page: 13 },
        { text: "IVF: Sir Robert Edwards and Patrick Steptoe; first test-tube baby born in Oldham, 1978.", page: 13 },
        { text: "1996: Dolly the sheep, the first cloned mammal (Ian Wilmut and Keith Campbell). MRI: Sir Peter Mansfield.", page: 13 },
        { text: "World Wide Web: Sir Tim Berners-Lee; first transfer of information on 25 December 1990.", page: 13 },
      ],
      mnemonics: [
        {
          title: "Two Scots in the air waves",
          device: "Baird broadcast, Watson-Watt watched.",
          explanation: "Both Scots: John Logie Baird developed television; Robert Watson-Watt developed radar, which watches for enemy aircraft.",
        },
        {
          title: "Hover-Cockerell, Whittle-jet",
          device: "A cockerel hovering over a whistling jet.",
          explanation: "Christopher Cockerell invented the hovercraft (1950s); Frank Whittle developed the jet engine (1930s).",
        },
        {
          title: "Concorde 69 – 76 – 03",
          device: "Flew in '69, flew people in '76, flew off in '03.",
          explanation: "First flight 1969, passenger service from 1976, retired 2003.",
        },
      ],
      checkQuestionIds: ["bs-q16", "bs-q19", "bs-q23"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "the-1970s",
      title: "The troubled 1970s and Europe",
      dek: "The end of the boom, strikes, the Troubles in Northern Ireland and joining the EEC.",
      pages: [13],
      minutes: 5,
      recall: {
        question: "Before you read: in which year did the UK join the European Economic Community?",
        answer: "1973. The EEC had been formed in 1957 by six countries.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Problems in the economy",
          pages: [13],
          paragraphs: [
            "In the late 1970s the post-war economic boom ended. Prices of goods and raw materials rose sharply and the exchange rate between the pound and other currencies was unstable. This caused 'balance of payments' problems: imports were valued at more than exports.",
            "Many industries and services were hit by strikes, causing problems between the trade unions and the government. People began to argue that the unions were too powerful and that their activities were harming the UK.",
          ],
        },
        {
          type: "prose",
          heading: "Unrest in Northern Ireland",
          pages: [13],
          paragraphs: [
            "The 1970s were also a time of serious unrest in Northern Ireland. In 1972 the Northern Ireland Parliament was suspended and Northern Ireland was ruled directly by the UK government.",
            "Some 3,000 people lost their lives in the violence in Northern Ireland in the decades after 1969.",
          ],
        },
        {
          type: "cards",
          heading: "Profile",
          cards: [
            {
              id: "bs-mary-peters",
              title: "Mary Peters",
              meta: "1939– · athlete",
              summary: "Won an Olympic gold medal in the pentathlon in 1972.",
              detail: [
                "Born in Manchester, she moved to Northern Ireland as a child.",
                "After her gold medal she raised money for local athletics and became team manager for the women's British Olympic team.",
                "She continues to promote sport and tourism in Northern Ireland, and was made a Dame of the British Empire in 2000.",
              ],
              page: 13,
              imageId: "britain-since-1945-mary-peters-medal",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-mary-peters-medal",
            kind: "artefact",
            caption: "The Olympic gold medal won by Mary Peters in the women's pentathlon, Munich, 1972.",
          },
        },
        {
          type: "prose",
          heading: "Europe and the Common Market",
          pages: [13],
          paragraphs: [
            "West Germany, France, Belgium, Italy, Luxembourg and the Netherlands formed the European Economic Community (EEC) in 1957. At first the UK did not wish to join, but it eventually did so in 1973.",
            "The handbook adds that the UK is a full member of the European Union but does not use the euro.",
          ],
        },
        {
          type: "map",
          heading: "On the map",
          placeIds: ["britain-since-1945-manchester", "britain-since-1945-stormont"],
          caption: "Mary Peters was born in Manchester and moved to Northern Ireland as a child. Northern Ireland's Parliament was suspended in 1972.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "\"The UK is a full member of the European Union\" (p. 13) is out of date, and contradicts p. 91 of the same PDF, which says the UK left the EU on 31 January 2020. Learn that the UK joined the EEC in 1973.",
              verify: "The official 3rd edition (2013) predates Brexit; test questions may still reflect pre-2020 wording.",
            },
            { text: "Beyond the handbook: the Northern Ireland Parliament sat at Stormont, outside Belfast. The violence after 1969 is often called 'the Troubles'." },
          ],
        },
      ],
      keyFacts: [
        { text: "Late 1970s: the post-war boom ended; prices rose sharply and the pound was unstable, causing balance of payments problems.", page: 13 },
        { text: "Strikes caused conflict between trade unions and government; many argued the unions were too powerful.", page: 13 },
        { text: "1972: the Northern Ireland Parliament was suspended and NI was ruled directly by the UK government.", page: 13 },
        { text: "Some 3,000 people died in the violence in Northern Ireland in the decades after 1969.", page: 13 },
        { text: "Mary Peters won Olympic gold in the pentathlon in 1972 and was made a Dame in 2000.", page: 13 },
        { text: "The EEC was formed in 1957 by six countries; the UK joined in 1973.", page: 13 },
      ],
      mnemonics: [
        {
          title: "The six founders",
          device: "\"Big Friendly Giants Like Neat Italy\": Belgium, France, (West) Germany, Luxembourg, Netherlands, Italy.",
          explanation: "The six countries that formed the EEC in 1957. The UK joined 16 years later, in 1973.",
        },
        {
          title: "1972 twice",
          device: "Gold in the pentathlon, direct rule in the province.",
          explanation: "1972: Mary Peters' Olympic gold and the suspension of the Northern Ireland Parliament.",
        },
      ],
      checkQuestionIds: ["bs-q27", "bs-q29", "bs-q31"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "thatcher-to-brown",
      title: "From Thatcher to Brown",
      dek: "The first woman Prime Minister, the Falklands, devolution and the Good Friday Agreement.",
      pages: [14],
      minutes: 7,
      heroImageId: "britain-since-1945-thatcher",
      recall: {
        question: "Before you read: which Prime Minister introduced the Scottish Parliament and the Welsh Assembly?",
        answer: "Tony Blair, whose Labour government was elected in 1997.",
      },
      blocks: [
        {
          type: "cards",
          heading: "Profile",
          cards: [
            {
              id: "bs-thatcher",
              title: "Margaret Thatcher",
              meta: "1925–2013 · Conservative Prime Minister 1979–1990",
              summary: "The UK's first woman Prime Minister and the longest-serving PM of the 20th century.",
              detail: [
                "The daughter of a grocer from Grantham in Lincolnshire, she trained as a chemist and lawyer.",
                "Elected a Conservative MP in 1959, she joined the cabinet in 1970 as Secretary of State for Education and Science. In 1975 she was elected Leader of the Conservative Party and so became Leader of the Opposition.",
                "After the Conservative victory in 1979 she became the first woman Prime Minister, and stayed in office until 1990.",
                "She worked closely with US President Ronald Reagan, and was one of the first Western leaders to welcome the changes in the Soviet leadership that eventually led to the end of the Cold War.",
              ],
              page: 14,
              imageId: "britain-since-1945-thatcher",
            },
          ],
        },
        {
          type: "prose",
          heading: "Conservative government, 1979–1997",
          pages: [14],
          paragraphs: [
            "Thatcher's government made structural changes to the economy by privatising nationalised industries, and imposed legal controls on trade union powers.",
            "Deregulation greatly increased the role of the City of London as an international centre for investment, insurance and other financial services. Traditional industries such as shipbuilding and coal mining declined.",
            "In 1982 Argentina invaded the Falkland Islands, a British overseas territory in the South Atlantic. A naval taskforce was sent from the UK and military action recovered the islands.",
            "John Major was Prime Minister after Mrs Thatcher, and helped establish the Northern Ireland peace process.",
          ],
        },
        {
          type: "cards",
          heading: "Profile",
          cards: [
            {
              id: "bs-dahl",
              title: "Roald Dahl",
              meta: "1916–90 · writer",
              summary: "Best known for children's books such as Charlie and the Chocolate Factory.",
              detail: [
                "Born in Wales to Norwegian parents, he served in the Royal Air Force in the Second World War.",
                "He began publishing books and short stories in the 1940s. He also wrote for adults.",
                "His best-known works include Charlie and the Chocolate Factory and George's Marvellous Medicine. Several of his books have been made into films.",
              ],
              page: 14,
              imageId: "britain-since-1945-dahl",
            },
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-dahl",
            kind: "photograph",
            caption: "Roald Dahl, photographed by Carl Van Vechten.",
          },
        },
        {
          type: "prose",
          heading: "Labour government, 1997–2010",
          pages: [14],
          paragraphs: [
            "In 1997 the Labour Party led by Tony Blair was elected. The Blair government introduced a Scottish Parliament and a Welsh Assembly. The Scottish Parliament has substantial powers to make laws; the Welsh Assembly was given fewer law-making powers but considerable control over public services.",
            "In Northern Ireland the Blair government built on the peace process, leading to the Good Friday Agreement, signed in 1998. The Northern Ireland Assembly was elected in 1999, suspended in 2002 and not reinstated until 2007. Most paramilitary groups in Northern Ireland have decommissioned their arms and are inactive.",
            "Gordon Brown took over as Prime Minister in 2007.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "britain-since-1945-scottish-parliament",
            kind: "photograph",
            caption: "The Scottish Parliament building at Holyrood, Edinburgh.",
            context: "The building opened in 2004; the Parliament itself first met in 1999.",
          },
        },
        {
          type: "sequence",
          heading: "Prime Ministers since 1979 in the handbook",
          page: 14,
          steps: [
            { label: "Margaret Thatcher", detail: "Conservative, 1979–1990. First woman PM; Falklands 1982." },
            { label: "John Major", detail: "Conservative, after Thatcher until 1997. Helped establish the Northern Ireland peace process." },
            { label: "Tony Blair", detail: "Labour, from 1997. Scottish Parliament, Welsh Assembly, Good Friday Agreement 1998." },
            { label: "Gordon Brown", detail: "Labour, from 2007 to 2010." },
            { label: "David Cameron", detail: "Conservative, leading a coalition with the Liberal Democrats from 2010 (see next lesson)." },
          ],
        },
        {
          type: "map",
          heading: "On the map",
          placeIds: ["britain-since-1945-grantham", "britain-since-1945-holyrood", "britain-since-1945-cardiff-bay", "britain-since-1945-stormont"],
          caption: "Grantham, Thatcher's home town; and the seats of the devolved Scottish Parliament, Welsh Assembly and Northern Ireland Assembly. The Falkland Islands, in the South Atlantic, lie far off this map.",
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The Welsh Assembly was renamed the Senedd (Welsh Parliament) in 2020 and now has law-making powers. Learn the handbook's description for the test." },
            { text: "The Northern Ireland Assembly has been suspended again since the handbook was written (2017–2020 and 2022–2024)." },
          ],
        },
      ],
      keyFacts: [
        { text: "1979: Margaret Thatcher became the first woman Prime Minister; she was the longest-serving PM of the 20th century (to 1990).", page: 14 },
        { text: "Thatcher was a grocer's daughter from Grantham, Lincolnshire, and trained as a chemist and lawyer.", page: 14 },
        { text: "Her government privatised nationalised industries and controlled trade union powers; shipbuilding and coal mining declined.", page: 14 },
        { text: "1982: Argentina invaded the Falkland Islands; a UK naval taskforce recovered them.", page: 14 },
        { text: "John Major followed Thatcher and helped establish the Northern Ireland peace process.", page: 14 },
        { text: "1997: Tony Blair's Labour government introduced the Scottish Parliament and Welsh Assembly.", page: 14 },
        { text: "1998: Good Friday Agreement. NI Assembly elected 1999, suspended 2002, reinstated 2007. Gordon Brown became PM in 2007.", page: 14 },
        { text: "Roald Dahl, born in Wales to Norwegian parents: Charlie and the Chocolate Factory, George's Marvellous Medicine.", page: 14 },
      ],
      mnemonics: [
        {
          title: "T-M-B-B-C",
          device: "\"The Major Blair Brown Coalition\": Thatcher, Major, Blair, Brown, Cameron.",
          explanation: "The order of Prime Ministers from 1979 to 2010.",
        },
        {
          title: "Northern Ireland Assembly: 99 – 02 – 07",
          device: "Elected, ejected, re-elected.",
          explanation: "Elected in 1999, suspended in 2002, reinstated in 2007, building on the Good Friday Agreement of 1998.",
        },
        {
          title: "Scotland strong, Wales services",
          device: "Parliament for laws, Assembly for services.",
          explanation: "The Scottish Parliament had substantial law-making powers; the Welsh Assembly had fewer, but considerable control over public services.",
        },
      ],
      checkQuestionIds: ["bs-q33", "bs-q36", "bs-q39"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 6
    {
      id: "conflicts-and-coalition",
      title: "Conflicts and coalition",
      dek: "Kuwait, Yugoslavia, Afghanistan and Iraq; the 2010 coalition; and the publisher's 2015–2024 update.",
      pages: [15],
      minutes: 5,
      recall: {
        question: "Before you read: what was unusual about the result of the May 2010 General Election?",
        answer: "No party won an overall majority, for the first time since February 1974. The Conservatives and Liberal Democrats formed a coalition led by David Cameron.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Conflicts in Afghanistan and Iraq",
          pages: [15],
          paragraphs: [
            "In the 1990s Britain played a leading role in coalition forces that liberated Kuwait after the Iraqi invasion of 1990, and in the conflict in the former Republic of Yugoslavia.",
            "Since 2000, British armed forces have been engaged in the global fight against international terrorism and the spread of weapons of mass destruction, including operations in Afghanistan and Iraq. British combat troops left Iraq in 2009.",
            "The handbook describes the UK operating in Afghanistan as part of the UN-mandated, 50-nation International Security Assistance Force (ISAF), at the invitation of the Afghan government. ISAF aimed to make sure Afghanistan could never again be a safe haven for international terrorism, building up the Afghan National Security Forces. Afghans were to have full security responsibility in all provinces by the end of 2014.",
          ],
        },
        {
          type: "prose",
          heading: "Coalition government, 2010–2015",
          pages: [15],
          paragraphs: [
            "In May 2010, for the first time in the UK since February 1974, no political party won an overall majority in the General Election. The Conservative and Liberal Democrat parties formed a coalition, and the Conservative leader, David Cameron, became Prime Minister.",
          ],
        },
        {
          type: "context",
          title: "Check before your test: publisher update",
          body: [
            {
              text: "The rest of p. 15 was added by the PDF's publisher and is not in the official 3rd edition, so it may never be tested. It says the Conservative government of 2015–2024 had several Prime Ministers (David Cameron, Theresa May, Boris Johnson, Liz Truss and Rishi Sunak), and saw the 2016 EU membership referendum (Brexit) and the COVID-19 pandemic. Rishi Sunak called a general election for 4 July 2024.",
              verify: "Publisher-added content; not part of the official handbook.",
            },
            {
              text: "The publisher also adds that the Labour Party, led by Keir Starmer, won a majority in the 2024 general election and formed the government.",
              verify: "Publisher-added content; not part of the official handbook.",
            },
            {
              text: "The Afghanistan paragraph describes the situation in 2013. ISAF's mission ended in 2014, and international forces withdrew from Afghanistan in 2021.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "1990: Iraq invaded Kuwait; Britain played a leading role in the coalition that liberated it.", page: 15 },
        { text: "In the 1990s Britain was also involved in the conflict in the former Republic of Yugoslavia.", page: 15 },
        { text: "Since 2000 British forces have fought international terrorism, including in Afghanistan and Iraq. Combat troops left Iraq in 2009.", page: 15 },
        { text: "In Afghanistan the UK was part of the UN-mandated 50-nation ISAF coalition.", page: 15 },
        { text: "May 2010: no overall majority (first time since February 1974); Conservative–Liberal Democrat coalition under David Cameron.", page: 15 },
      ],
      mnemonics: [
        {
          title: "Hung in '74, hung in 2010",
          device: "February 1974 and May 2010: nobody won outright.",
          explanation: "2010 was the first election since February 1974 with no overall majority, leading to the Conservative–Liberal Democrat coalition.",
        },
        {
          title: "Iraq exit: 2009",
          device: "Out of Iraq in '09.",
          explanation: "British combat troops left Iraq in 2009; ISAF was to hand Afghan security to Afghans by the end of 2014.",
        },
      ],
      checkQuestionIds: ["bs-q41", "bs-q43", "bs-q45"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    { id: "bs-t-tv", date: "1932", sortYear: 1932, title: "First television broadcast", summary: "John Logie Baird, who developed television in the 1920s, makes the first TV broadcast between London and Glasgow.", people: ["John Logie Baird"], whyItMatters: "One of the great British inventions of the 20th century.", remember: ["Baird was Scottish", "London to Glasgow"], imageId: "britain-since-1945-baird", page: 12, lessonId: "inventions" },
    { id: "bs-t-radar", date: "1935", sortYear: 1935, title: "First successful radar test", summary: "Sir Robert Watson-Watt's idea that enemy aircraft could be detected by radio waves is proven.", people: ["Sir Robert Watson-Watt"], whyItMatters: "Work with radar also led Sir Bernard Lovell to new discoveries in astronomy.", remember: ["Watson-Watt was Scottish", "Radio waves detect aircraft"], page: 12, lessonId: "inventions" },
    { id: "bs-t-beveridge", date: "1942", sortYear: 1942, title: "The Beveridge Report", summary: "William Beveridge's report Social Insurance and Allied Services, commissioned in 1941, sets out how to fight the five Giant Evils.", people: ["William Beveridge"], whyItMatters: "It provided the basis of the modern welfare state.", remember: ["Want, Disease, Ignorance, Squalor, Idleness"], imageId: "britain-since-1945-beveridge", page: 11, lessonId: "welfare-state" },
    { id: "bs-t-butler", date: "1944", sortYear: 1944, title: "The Education Act ('the Butler Act')", summary: "R A Butler's Act introduces free secondary education in England and Wales.", people: ["R A Butler"], whyItMatters: "The division between primary and secondary schools it enforced still remains in most areas.", remember: ["Free secondary education", "England and Wales"], page: 12, lessonId: "welfare-state" },
    { id: "bs-t-labour", date: "1945", sortYear: 1945, title: "Labour wins; Attlee becomes Prime Minister", summary: "Clement Attlee's Labour government promises the welfare state outlined in the Beveridge Report.", people: ["Clement Attlee"], whyItMatters: "Begins the NHS, social security and nationalisation of major industries.", remember: ["Attlee PM 1945–1951", "Churchill's wartime deputy"], imageId: "britain-since-1945-attlee", page: 11, lessonId: "welfare-state" },
    { id: "bs-t-independence", date: "1947", sortYear: 1947, title: "Independence for nine countries", summary: "India, Pakistan and Ceylon (now Sri Lanka) are among nine countries granted independence.", people: [], whyItMatters: "Colonies in Africa, the Caribbean and the Pacific follow over the next 20 years.", remember: ["India, Pakistan, Ceylon"], page: 11, lessonId: "welfare-state" },
    { id: "bs-t-nhs", date: "1948", sortYear: 1948, title: "The NHS is established", summary: "Aneurin (Nye) Bevan, Minister for Health, leads the creation of the National Health Service, free at the point of use. People from the West Indies are invited to come and work.", people: ["Aneurin (Nye) Bevan"], whyItMatters: "A minimum standard of health care for all.", remember: ["Bevan, Minister for Health", "Free at the point of use", "1948: West Indies workers invited"], imageId: "britain-since-1945-bevan", page: 11, lessonId: "welfare-state" },
    { id: "bs-t-conservatives", date: "1951–1964", sortYear: 1951, title: "Conservative government", summary: "A period of economic recovery and growing prosperity. Harold Macmillan makes his 'wind of change' speech.", people: ["Harold Macmillan"], whyItMatters: "Macmillan's speech was about decolonisation and independence for the countries of the Empire.", remember: ["1951–1964", "'Wind of change'"], page: 11, lessonId: "welfare-state" },
    { id: "bs-t-dna", date: "1953", sortYear: 1953, title: "The structure of DNA discovered", summary: "Work at British universities in London and Cambridge reveals the structure of the DNA molecule.", people: ["Francis Crick"], whyItMatters: "Contributed to advances in medicine and fighting crime.", remember: ["London and Cambridge", "Crick shared the Nobel Prize"], page: 12, lessonId: "inventions" },
    { id: "bs-t-eec-formed", date: "1957", sortYear: 1957, title: "The EEC is formed", summary: "West Germany, France, Belgium, Italy, Luxembourg and the Netherlands form the European Economic Community.", people: [], whyItMatters: "At first the UK did not wish to join.", remember: ["Six founding countries"], page: 13, lessonId: "the-1970s" },
    { id: "bs-t-sixties", date: "1960s", sortYear: 1960, title: "The Swinging Sixties", summary: "Growth in fashion, cinema and pop music (The Beatles, The Rolling Stones); divorce and abortion laws liberalised; equal pay for women.", people: ["The Beatles", "The Rolling Stones"], whyItMatters: "A decade of major social change and technological progress.", remember: ["Equal pay and anti-discrimination laws", "High-rise concrete and steel architecture"], page: 12, lessonId: "migration-and-sixties" },
    { id: "bs-t-atm", date: "1967", sortYear: 1967, title: "The first cash machine", summary: "James Goodfellow's ATM is put into use by Barclays Bank in Enfield, north London.", people: ["James Goodfellow"], whyItMatters: "The 'cashpoint' was a 1960s British invention.", remember: ["Barclays, Enfield"], page: 13, lessonId: "inventions" },
    { id: "bs-t-concorde", date: "1969", sortYear: 1969, title: "Concorde's first flight", summary: "The supersonic airliner developed by Britain and France first flies. It carries passengers from 1976 until it is retired in 2003.", people: [], whyItMatters: "A symbol of 1960s technological progress.", remember: ["First flight 1969", "Passengers 1976", "Retired 2003"], imageId: "britain-since-1945-concorde", page: 13, lessonId: "inventions" },
    { id: "bs-t-ni-1972", date: "1972", sortYear: 1972, title: "Direct rule in Northern Ireland", summary: "The Northern Ireland Parliament is suspended and Northern Ireland is ruled directly by the UK government. Mary Peters wins Olympic gold.", people: ["Mary Peters"], whyItMatters: "Some 3,000 people died in the violence in Northern Ireland in the decades after 1969.", remember: ["NI Parliament suspended 1972", "Mary Peters: pentathlon gold 1972"], page: 13, lessonId: "the-1970s" },
    { id: "bs-t-uganda", date: "Early 1970s", sortYear: 1972.5, title: "Ugandan Asians admitted", summary: "Britain admits 28,000 people of Indian origin who had been forced to leave Uganda.", people: [], whyItMatters: "This happened despite the late-1960s laws restricting immigration.", remember: ["28,000 people"], page: 12, lessonId: "migration-and-sixties" },
    { id: "bs-t-eec-joins", date: "1973", sortYear: 1973, title: "The UK joins the EEC", summary: "After first declining to join, the UK becomes a member of the European Economic Community.", people: [], whyItMatters: "Begins the UK's membership of what became the European Union.", remember: ["1973"], page: 13, lessonId: "the-1970s" },
    { id: "bs-t-ivf", date: "1978", sortYear: 1978, title: "The first 'test-tube baby'", summary: "The world's first IVF baby is born in Oldham, Lancashire, after work by Sir Robert Edwards and Patrick Steptoe.", people: ["Sir Robert Edwards", "Patrick Steptoe"], whyItMatters: "IVF treats infertility.", remember: ["Oldham, Lancashire", "1978"], page: 13, lessonId: "inventions" },
    { id: "bs-t-thatcher", date: "1979", sortYear: 1979, title: "Margaret Thatcher becomes Prime Minister", summary: "After the Conservative victory, Thatcher becomes the first woman Prime Minister of the UK, serving until 1990.", people: ["Margaret Thatcher"], whyItMatters: "Privatisation, controls on trade unions and the growth of the City of London.", remember: ["First woman PM", "Longest-serving PM of the 20th century"], imageId: "britain-since-1945-thatcher", page: 14, lessonId: "thatcher-to-brown" },
    { id: "bs-t-falklands", date: "1982", sortYear: 1982, title: "The Falklands War", summary: "Argentina invades the Falkland Islands; a British naval taskforce recovers them.", people: ["Margaret Thatcher"], whyItMatters: "The Falklands are a British overseas territory in the South Atlantic.", remember: ["Argentina invaded", "Naval taskforce"], page: 14, lessonId: "thatcher-to-brown" },
    { id: "bs-t-kuwait", date: "1990", sortYear: 1990, title: "Iraq invades Kuwait", summary: "Britain plays a leading role in the coalition that liberates Kuwait. Thatcher leaves office; John Major becomes Prime Minister.", people: ["John Major"], whyItMatters: "Major later helped establish the Northern Ireland peace process.", remember: ["Kuwait liberated", "Thatcher in office until 1990"], page: 15, lessonId: "conflicts-and-coalition" },
    { id: "bs-t-web", date: "25 December 1990", sortYear: 1990.9, title: "The World Wide Web", summary: "Information is transferred via the web for the first time. Its inventor, Sir Tim Berners-Lee, is British.", people: ["Sir Tim Berners-Lee"], whyItMatters: "One of the most influential inventions of the century.", remember: ["Christmas Day 1990"], imageId: "britain-since-1945-berners-lee", page: 13, lessonId: "inventions" },
    { id: "bs-t-dolly", date: "1996", sortYear: 1996, title: "Dolly the sheep", summary: "A team led by Ian Wilmut and Keith Campbell is the first to clone a mammal.", people: ["Sir Ian Wilmut", "Keith Campbell"], whyItMatters: "Led to research into cloning to save endangered species and for medicine.", remember: ["First cloned mammal", "1996"], imageId: "britain-since-1945-dolly", page: 13, lessonId: "inventions" },
    { id: "bs-t-blair", date: "1997", sortYear: 1997, title: "Tony Blair's Labour government", summary: "Labour is elected and introduces a Scottish Parliament and a Welsh Assembly.", people: ["Tony Blair"], whyItMatters: "Devolution: Scotland gets substantial law-making powers; Wales control over public services.", remember: ["Scottish Parliament", "Welsh Assembly"], page: 14, lessonId: "thatcher-to-brown" },
    { id: "bs-t-good-friday", date: "1998", sortYear: 1998, title: "The Good Friday Agreement", summary: "Building on the peace process, the Good Friday Agreement is signed. The Northern Ireland Assembly is elected in 1999, suspended in 2002 and reinstated in 2007.", people: ["Tony Blair"], whyItMatters: "Most paramilitary groups have since decommissioned their arms.", remember: ["Signed 1998", "Assembly 1999 / 2002 / 2007"], page: 14, lessonId: "thatcher-to-brown" },
    { id: "bs-t-brown", date: "2007", sortYear: 2007, title: "Gordon Brown becomes Prime Minister", summary: "Gordon Brown takes over from Tony Blair. The Northern Ireland Assembly is reinstated.", people: ["Gordon Brown"], whyItMatters: "The last Labour PM before the 2010 coalition.", remember: ["2007"], page: 14, lessonId: "thatcher-to-brown" },
    { id: "bs-t-iraq", date: "2009", sortYear: 2009, title: "British combat troops leave Iraq", summary: "Since 2000 British forces had fought terrorism and the spread of weapons of mass destruction, including in Afghanistan and Iraq.", people: [], whyItMatters: "In Afghanistan the UK served in the UN-mandated 50-nation ISAF coalition.", remember: ["Iraq exit 2009"], page: 15, lessonId: "conflicts-and-coalition" },
    { id: "bs-t-coalition", date: "May 2010", sortYear: 2010, title: "The coalition government", summary: "No party wins an overall majority for the first time since February 1974. Conservatives and Liberal Democrats form a coalition under David Cameron.", people: ["David Cameron"], whyItMatters: "The first coalition government since the Second World War.", remember: ["First hung result since February 1974"], page: 15, lessonId: "conflicts-and-coalition" },
    { id: "bs-t-brexit", date: "2016 (publisher update)", sortYear: 2016, title: "EU membership referendum", summary: "Publisher-added: the 2016 referendum on EU membership (Brexit) during the Conservative government of 2015–2024.", people: ["David Cameron", "Theresa May", "Boris Johnson", "Liz Truss", "Rishi Sunak"], whyItMatters: "Not in the official 3rd edition; may not be tested.", remember: ["Publisher update"], page: 15, lessonId: "conflicts-and-coalition" },
    { id: "bs-t-starmer", date: "2024 (publisher update)", sortYear: 2024, title: "Labour returns under Keir Starmer", summary: "Publisher-added: Labour, led by Keir Starmer, wins a majority at the general election of 4 July 2024.", people: ["Keir Starmer"], whyItMatters: "Not in the official 3rd edition; may not be tested.", remember: ["Publisher update"], page: 15, lessonId: "conflicts-and-coalition" },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "britain-since-1945-swansea", name: "Swansea", lat: 51.6214, lon: -3.9436, label: { side: "left" }, note: "Birthplace of Dylan Thomas: a statue and the Dylan Thomas Centre.", page: 12, lessonId: "welfare-state", era: "1945–1951" },
    { id: "britain-since-1945-london", name: "London", lat: 51.5074, lon: -0.1278, label: { side: "right", dy: 6 }, note: "The 1932 TV broadcast ran between London and Glasgow; DNA work was done at universities in London and Cambridge.", page: 12, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-glasgow", name: "Glasgow", lat: 55.8642, lon: -4.2518, label: { side: "left" }, note: "The first television broadcast (1932) ran between London and Glasgow.", page: 12, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-jodrell-bank", name: "Jodrell Bank", lat: 53.2367, lon: -2.3085, label: { side: "left" }, note: "Cheshire. Sir Bernard Lovell's radio telescope, for many years the biggest in the world.", page: 12, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-cambridge", name: "Cambridge", lat: 52.2053, lon: 0.1218, note: "The structure of DNA was discovered in 1953 through work in London and Cambridge.", page: 12, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-enfield", name: "Enfield", lat: 51.6523, lon: -0.0807, label: { side: "right", dy: -8 }, note: "North London. The first ATM was put into use here by Barclays Bank in 1967.", page: 13, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-oldham", name: "Oldham", lat: 53.5409, lon: -2.1114, note: "Lancashire. The world's first 'test-tube baby' was born here in 1978.", page: 13, lessonId: "inventions", era: "Inventions" },
    { id: "britain-since-1945-manchester", name: "Manchester", lat: 53.4808, lon: -2.2426, label: { side: "left" }, note: "Birthplace of Mary Peters, who moved to Northern Ireland as a child.", page: 13, lessonId: "the-1970s", era: "1970s" },
    { id: "britain-since-1945-stormont", name: "Stormont, Belfast", lat: 54.605, lon: -5.832, label: { side: "left" }, note: "Seat of the Northern Ireland Parliament, suspended in 1972, and later of the Northern Ireland Assembly (elected 1999). The building is not named in the handbook.", page: 13, lessonId: "the-1970s", era: "1970s" },
    { id: "britain-since-1945-grantham", name: "Grantham", lat: 52.9118, lon: -0.6426, note: "Lincolnshire. Margaret Thatcher was the daughter of a grocer from Grantham.", page: 14, lessonId: "thatcher-to-brown", era: "1979–2010" },
    { id: "britain-since-1945-holyrood", name: "Scottish Parliament, Edinburgh", lat: 55.952, lon: -3.1749, note: "The Scottish Parliament introduced by the Blair government. The Holyrood building is not named in the handbook.", page: 14, lessonId: "thatcher-to-brown", era: "1979–2010" },
    { id: "britain-since-1945-cardiff-bay", name: "Welsh Assembly, Cardiff", lat: 51.4639, lon: -3.1622, label: { side: "left", dy: 8 }, note: "The Welsh Assembly introduced by the Blair government (now the Senedd, in Cardiff Bay).", page: 14, lessonId: "thatcher-to-brown", era: "1979–2010" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "1945: Labour elected; Clement Attlee PM (1945–1951), promising the welfare state of the Beveridge Report (1942).", page: 11 },
    { text: "1948: Aneurin (Nye) Bevan led the creation of the NHS, free at the point of use.", page: 11 },
    { text: "1947: independence for nine countries including India, Pakistan and Ceylon.", page: 11 },
    { text: "Education Act 1944 ('the Butler Act'): free secondary education in England and Wales.", page: 12 },
    { text: "1948: West Indians invited to work in Britain; in the early 1970s, 28,000 Ugandan Asians were admitted.", page: 12 },
    { text: "Inventions: TV (Baird), radar (Watson-Watt), jet engine (Whittle), hovercraft (Cockerell), ATM (Goodfellow), web (Berners-Lee).", page: 12 },
    { text: "DNA structure 1953; first test-tube baby 1978 (Oldham); Dolly the sheep 1996; Concorde 1969–2003.", page: 13 },
    { text: "1972: Northern Ireland Parliament suspended; direct rule from London.", page: 13 },
    { text: "The EEC was formed in 1957; the UK joined in 1973.", page: 13 },
    { text: "1979–1990: Margaret Thatcher, first woman PM; 1982 Falklands War.", page: 14 },
    { text: "1997: Tony Blair; Scottish Parliament and Welsh Assembly; 1998 Good Friday Agreement.", page: 14 },
    { text: "May 2010: first hung result since February 1974; Conservative–Liberal Democrat coalition under David Cameron.", page: 15 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    // welfare-state
    { id: "bs-f01", lessonId: "welfare-state", page: 11, front: "Who became Prime Minister in 1945, and for which party?", back: "Clement Attlee, Labour. He was PM from 1945 to 1951." },
    { id: "bs-f02", lessonId: "welfare-state", page: 11, front: "Who led the establishment of the NHS, and when?", back: "Aneurin (Nye) Bevan, Minister for Health, in 1948." },
    { id: "bs-f03", lessonId: "welfare-state", page: 11, front: "What were the five 'Giant Evils' in the Beveridge Report?", back: "Want, Disease, Ignorance, Squalor and Idleness." },
    { id: "bs-f04", lessonId: "welfare-state", page: 11, front: "What was the official title of the Beveridge Report, and when was it published?", back: "Social Insurance and Allied Services, 1942 (commissioned in 1941)." },
    { id: "bs-f05", lessonId: "welfare-state", page: 11, front: "Which industries and services did the post-war Labour government nationalise?", back: "The railways, coal mines, and gas, water and electricity supplies (Attlee's profile also mentions steel)." },
    { id: "bs-f06", lessonId: "welfare-state", page: 11, front: "Which three countries are named among the nine granted independence in 1947?", back: "India, Pakistan and Ceylon (now Sri Lanka)." },
    { id: "bs-f07", lessonId: "welfare-state", page: 11, front: "Which Prime Minister made the 'wind of change' speech, and what was it about?", back: "Harold Macmillan; decolonisation and independence for the countries of the Empire." },
    { id: "bs-f08", lessonId: "welfare-state", page: 12, front: "What did the Education Act 1944 ('the Butler Act') introduce?", back: "Free secondary education in England and Wales." },
    { id: "bs-f09", lessonId: "welfare-state", page: 12, front: "Name two works by Dylan Thomas.", back: "The radio play Under Milk Wood and the poem Do Not Go Gentle into That Good Night." },
    // migration-and-sixties
    { id: "bs-f10", lessonId: "migration-and-sixties", page: 12, front: "In which year were people from the West Indies invited to come and work in Britain?", back: "1948." },
    { id: "bs-f11", lessonId: "migration-and-sixties", page: 12, front: "Why did Britain encourage immigration in the 1950s, and give two examples of recruitment?", back: "Labour shortages. Centres in the West Indies recruited bus drivers; textile and engineering firms sent agents to India and Pakistan." },
    { id: "bs-f12", lessonId: "migration-and-sixties", page: 12, front: "What was the 1960s known as, and which two pop groups are named?", back: "'The Swinging Sixties'. The Beatles and The Rolling Stones." },
    { id: "bs-f13", lessonId: "migration-and-sixties", page: 12, front: "Which social laws were liberalised in the 1960s, and what new rights did women gain?", back: "Divorce and abortion laws. Women gained the right to equal pay and protection from discrimination at work because of their gender." },
    { id: "bs-f14", lessonId: "migration-and-sixties", page: 12, front: "How many people of Indian origin expelled from Uganda did Britain admit in the early 1970s?", back: "28,000." },
    // inventions
    { id: "bs-f15", lessonId: "inventions", page: 12, front: "Who developed the television, and what did he do in 1932?", back: "John Logie Baird (Scottish). In 1932 he made the first TV broadcast between London and Glasgow." },
    { id: "bs-f16", lessonId: "inventions", page: 12, front: "Who developed radar, and when was the first successful test?", back: "Sir Robert Watson-Watt (Scottish); 1935." },
    { id: "bs-f17", lessonId: "inventions", page: 12, front: "What did Sir Bernard Lovell build, and where?", back: "A radio telescope at Jodrell Bank in Cheshire, for many years the biggest in the world." },
    { id: "bs-f18", lessonId: "inventions", page: 12, front: "What is a Turing machine?", back: "A theoretical mathematical device invented by Alan Turing in the 1930s; influential in the development of computers." },
    { id: "bs-f19", lessonId: "inventions", page: 12, front: "What did John MacLeod co-discover?", back: "Insulin, used to treat diabetes." },
    { id: "bs-f20", lessonId: "inventions", page: 12, front: "When was the structure of DNA discovered, and which British scientist shared the Nobel Prize?", back: "1953, through work in London and Cambridge. Francis Crick." },
    { id: "bs-f21", lessonId: "inventions", page: 12, front: "Who developed the jet engine, and when?", back: "Sir Frank Whittle, an RAF engineer officer, in the 1930s." },
    { id: "bs-f22", lessonId: "inventions", page: 13, front: "Who invented the hovercraft, and when?", back: "Sir Christopher Cockerell, in the 1950s." },
    { id: "bs-f23", lessonId: "inventions", page: 13, front: "Concorde: who developed it, and when did it first fly, carry passengers and retire?", back: "Britain and France. First flew 1969, carried passengers from 1976, retired 2003." },
    { id: "bs-f24", lessonId: "inventions", page: 13, front: "Who invented the ATM, and where was the first one used?", back: "James Goodfellow (1960s). Barclays Bank, Enfield, north London, in 1967." },
    { id: "bs-f25", lessonId: "inventions", page: 13, front: "Who pioneered IVF, and where and when was the first test-tube baby born?", back: "Sir Robert Edwards and Patrick Steptoe. Oldham, Lancashire, 1978." },
    { id: "bs-f26", lessonId: "inventions", page: 13, front: "What was Dolly the sheep, and who led the team?", back: "The first cloned mammal (1996). Sir Ian Wilmut and Keith Campbell." },
    { id: "bs-f27", lessonId: "inventions", page: 13, front: "Who co-invented the MRI scanner?", back: "Sir Peter Mansfield." },
    { id: "bs-f28", lessonId: "inventions", page: 13, front: "Who invented the World Wide Web, and when was information first transferred via it?", back: "Sir Tim Berners-Lee; 25 December 1990." },
    { id: "bs-f29", lessonId: "inventions", page: 13, front: "Which British-designed aircraft can take off vertically?", back: "The Harrier jump jet." },
    // the-1970s
    { id: "bs-f30", lessonId: "the-1970s", page: 13, front: "What is a 'balance of payments' problem, as described for the 1970s?", back: "When imports of goods are valued at more than the price paid for exports." },
    { id: "bs-f31", lessonId: "the-1970s", page: 13, front: "What happened to the Northern Ireland Parliament in 1972?", back: "It was suspended and Northern Ireland was ruled directly by the UK government." },
    { id: "bs-f32", lessonId: "the-1970s", page: 13, front: "About how many people died in the violence in Northern Ireland in the decades after 1969?", back: "Some 3,000." },
    { id: "bs-f33", lessonId: "the-1970s", page: 13, front: "What did Mary Peters win in 1972?", back: "An Olympic gold medal in the pentathlon. She was made a Dame in 2000." },
    { id: "bs-f34", lessonId: "the-1970s", page: 13, front: "Which six countries formed the EEC in 1957, and when did the UK join?", back: "West Germany, France, Belgium, Italy, Luxembourg and the Netherlands. The UK joined in 1973." },
    // thatcher-to-brown
    { id: "bs-f35", lessonId: "thatcher-to-brown", page: 14, front: "Who was the UK's first woman Prime Minister, and when did she serve?", back: "Margaret Thatcher, 1979–1990. The longest-serving PM of the 20th century." },
    { id: "bs-f36", lessonId: "thatcher-to-brown", page: 14, front: "Where was Margaret Thatcher from, and what did she train as?", back: "Grantham, Lincolnshire (a grocer's daughter). She trained as a chemist and lawyer." },
    { id: "bs-f37", lessonId: "thatcher-to-brown", page: 14, front: "What happened in the Falkland Islands in 1982?", back: "Argentina invaded; a British naval taskforce was sent and recovered the islands." },
    { id: "bs-f38", lessonId: "thatcher-to-brown", page: 14, front: "What did John Major help to establish?", back: "The Northern Ireland peace process." },
    { id: "bs-f39", lessonId: "thatcher-to-brown", page: 14, front: "Which devolved bodies did Tony Blair's government introduce?", back: "A Scottish Parliament and a Welsh Assembly." },
    { id: "bs-f40", lessonId: "thatcher-to-brown", page: 14, front: "When was the Good Friday Agreement signed, and what happened to the NI Assembly afterwards?", back: "1998. The Assembly was elected in 1999, suspended in 2002 and reinstated in 2007." },
    { id: "bs-f41", lessonId: "thatcher-to-brown", page: 14, front: "Name two books by Roald Dahl.", back: "Charlie and the Chocolate Factory and George's Marvellous Medicine." },
    // conflicts-and-coalition
    { id: "bs-f42", lessonId: "conflicts-and-coalition", page: 15, front: "Which country did Iraq invade in 1990?", back: "Kuwait. Britain played a leading role in the coalition that liberated it." },
    { id: "bs-f43", lessonId: "conflicts-and-coalition", page: 15, front: "When did British combat troops leave Iraq?", back: "2009." },
    { id: "bs-f44", lessonId: "conflicts-and-coalition", page: 15, front: "What is ISAF, according to the handbook?", back: "The UN-mandated, 50-nation International Security Assistance Force in Afghanistan." },
    { id: "bs-f46", lessonId: "conflicts-and-coalition", page: 15, front: "Apart from Kuwait, which 1990s conflict does the handbook say Britain was involved in?", back: "The conflict in the former Republic of Yugoslavia." },
    { id: "bs-f45", lessonId: "conflicts-and-coalition", page: 15, front: "Which parties formed the 2010 coalition, and who became Prime Minister?", back: "The Conservatives and the Liberal Democrats; David Cameron." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // welfare-state
    { id: "bs-q01", lessonId: "welfare-state", page: 11, type: "single", prompt: "Who was the Minister for Health who led the establishment of the NHS in 1948?", options: ["Clement Attlee", "Aneurin (Nye) Bevan", "William Beveridge", "R A Butler"], answer: [1], explanation: "Aneurin (Nye) Bevan led the establishment of the NHS. Attlee was Prime Minister; Beveridge wrote the report; Butler was responsible for education." },
    { id: "bs-q02", lessonId: "welfare-state", page: 11, type: "single", prompt: "Which party won the 1945 general election?", options: ["Conservative", "Liberal", "Labour", "A coalition"], answer: [2], explanation: "The British people elected a Labour government in 1945, with Clement Attlee as Prime Minister." },
    { id: "bs-q03", lessonId: "welfare-state", page: 11, type: "multi", prompt: "Which TWO were among the five 'Giant Evils' named in the Beveridge Report?", options: ["Squalor", "Crime", "Idleness", "War"], answer: [0, 2], explanation: "The five Giant Evils were Want, Disease, Ignorance, Squalor and Idleness." },
    { id: "bs-q04", lessonId: "welfare-state", page: 11, type: "single", prompt: "In 1947, independence was granted to nine countries. Which of these was one of them?", options: ["Kenya", "Ceylon", "Jamaica", "Nigeria"], answer: [1], explanation: "India, Pakistan and Ceylon (now Sri Lanka) are the countries the handbook names." },
    { id: "bs-q05", lessonId: "welfare-state", page: 11, type: "single", prompt: "Which Prime Minister was famous for his 'wind of change' speech?", options: ["Winston Churchill", "Clement Attlee", "Harold Macmillan", "Harold Wilson"], answer: [2], explanation: "Harold Macmillan, Conservative PM, made the 'wind of change' speech about decolonisation." },
    { id: "bs-q06", lessonId: "welfare-state", page: 12, type: "single", prompt: "What did the Education Act 1944 introduce?", options: ["Free university education", "Free secondary education in England and Wales", "Compulsory primary education", "The national curriculum"], answer: [1], explanation: "The 'Butler Act', overseen by R A Butler, introduced free secondary education in England and Wales." },
    { id: "bs-q07", lessonId: "welfare-state", page: 11, type: "truefalse", prompt: "Clement Attlee was Winston Churchill's Deputy Prime Minister in the wartime coalition government.", options: ["True", "False"], answer: [0], explanation: "True. He became Prime Minister after Labour won the 1945 election." },
    { id: "bs-q08", lessonId: "welfare-state", page: 12, type: "single", prompt: "Dylan Thomas, author of Under Milk Wood, was born in which city?", options: ["Cardiff", "Swansea", "Newport", "Liverpool"], answer: [1], explanation: "Swansea, his birthplace, has a statue of him and the Dylan Thomas Centre." },
    { id: "bs-q08b", lessonId: "welfare-state", page: 11, type: "truefalse", prompt: "Britain had a Conservative government from 1951 to 1964.", options: ["True", "False"], answer: [0], explanation: "True. The 1950s were a period of economic recovery and growing prosperity." },
    // migration-and-sixties
    { id: "bs-q09", lessonId: "migration-and-sixties", page: 12, type: "single", prompt: "In which year were people from the West Indies invited to come and work in the UK?", options: ["1945", "1948", "1957", "1962"], answer: [1], explanation: "In 1948 people from the West Indies were invited to come and work, to help with post-war rebuilding." },
    { id: "bs-q10", lessonId: "migration-and-sixties", page: 12, type: "single", prompt: "Centres were set up in the West Indies in the 1950s to recruit people for which job?", options: ["Nursing", "Driving buses", "Coal mining", "Shipbuilding"], answer: [1], explanation: "Centres in the West Indies recruited people to drive buses." },
    { id: "bs-q11", lessonId: "migration-and-sixties", page: 12, type: "multi", prompt: "Textile and engineering firms from the north of England and the Midlands sent agents to which TWO countries to find workers?", options: ["India", "Ireland", "Pakistan", "Poland"], answer: [0, 2], explanation: "They sent agents to India and Pakistan." },
    { id: "bs-q12", lessonId: "migration-and-sixties", page: 12, type: "single", prompt: "What was the decade of the 1960s known as?", options: ["The Roaring Sixties", "The Swinging Sixties", "The Golden Sixties", "The Austerity Years"], answer: [1], explanation: "It was known as 'the Swinging Sixties', with growth in fashion, cinema and popular music." },
    { id: "bs-q13", lessonId: "migration-and-sixties", page: 12, type: "truefalse", prompt: "In the 1960s Parliament passed laws giving women the right to equal pay.", options: ["True", "False"], answer: [0], explanation: "True. It also made it illegal for employers to discriminate against women because of their gender." },
    { id: "bs-q14", lessonId: "migration-and-sixties", page: 12, type: "single", prompt: "In the early 1970s, how many people of Indian origin who had been forced to leave Uganda did Britain admit?", options: ["8,000", "18,000", "28,000", "80,000"], answer: [2], explanation: "Britain admitted 28,000 people of Indian origin from Uganda." },
    { id: "bs-q15", lessonId: "migration-and-sixties", page: 12, type: "single", prompt: "Why did migration from the West Indies and South Asia fall in the late 1960s?", options: ["The economy collapsed", "New laws restricted immigration", "Those countries banned emigration", "Travel became too expensive"], answer: [1], explanation: "The government passed laws requiring immigrants to have a strong connection to Britain through birth or ancestry." },
    { id: "bs-q15b", lessonId: "migration-and-sixties", page: 12, type: "multi", prompt: "Which TWO pop groups does the handbook name from the 1960s?", options: ["The Beatles", "Queen", "The Rolling Stones", "The Who"], answer: [0, 2], explanation: "The handbook names The Beatles and The Rolling Stones." },
    // inventions
    { id: "bs-q16", lessonId: "inventions", page: 12, type: "single", prompt: "Who developed the television in the 1920s?", options: ["Robert Watson-Watt", "John Logie Baird", "Alan Turing", "Frank Whittle"], answer: [1], explanation: "Scotsman John Logie Baird developed the television and made the first TV broadcast, between London and Glasgow, in 1932." },
    { id: "bs-q17", lessonId: "inventions", page: 12, type: "single", prompt: "Who developed radar?", options: ["Sir Bernard Lovell", "Sir Robert Watson-Watt", "Sir Frank Whittle", "Sir Christopher Cockerell"], answer: [1], explanation: "Sir Robert Watson-Watt proposed that enemy aircraft could be detected by radio waves; the first successful test was in 1935." },
    { id: "bs-q18", lessonId: "inventions", page: 12, type: "single", prompt: "Where is the radio telescope built by Sir Bernard Lovell?", options: ["Greenwich", "Jodrell Bank, Cheshire", "Cambridge", "Edinburgh"], answer: [1], explanation: "Lovell's radio telescope at Jodrell Bank in Cheshire was for many years the biggest in the world." },
    { id: "bs-q19", lessonId: "inventions", page: 12, type: "single", prompt: "Who developed the jet engine in the 1930s?", options: ["Sir Frank Whittle", "Sir Christopher Cockerell", "James Goodfellow", "John Logie Baird"], answer: [0], explanation: "Sir Frank Whittle, an RAF engineer officer, developed the jet engine. Cockerell invented the hovercraft." },
    { id: "bs-q20", lessonId: "inventions", page: 13, type: "single", prompt: "Who invented the hovercraft?", options: ["Sir Frank Whittle", "Sir Christopher Cockerell", "Sir Peter Mansfield", "Sir Tim Berners-Lee"], answer: [1], explanation: "Sir Christopher Cockerell invented the hovercraft in the 1950s." },
    { id: "bs-q21", lessonId: "inventions", page: 13, type: "single", prompt: "Where was the world's first 'test-tube baby' born in 1978?", options: ["Oldham, Lancashire", "Enfield, north London", "Cambridge", "Edinburgh"], answer: [0], explanation: "The first IVF baby was born in Oldham, Lancashire, after work by Sir Robert Edwards and Patrick Steptoe." },
    { id: "bs-q22", lessonId: "inventions", page: 13, type: "single", prompt: "In which year did Concorde first fly?", options: ["1957", "1969", "1976", "2003"], answer: [1], explanation: "Concorde first flew in 1969, began carrying passengers in 1976 and was retired in 2003." },
    { id: "bs-q23", lessonId: "inventions", page: 13, type: "single", prompt: "Who invented the World Wide Web?", options: ["Alan Turing", "Sir Tim Berners-Lee", "James Goodfellow", "Sir Peter Mansfield"], answer: [1], explanation: "Sir Tim Berners-Lee is British. Information was first transferred via the web on 25 December 1990." },
    { id: "bs-q24", lessonId: "inventions", page: 13, type: "single", prompt: "What was Dolly the sheep, created in 1996?", options: ["The first animal sent into space", "The first cloned mammal", "The first animal treated with insulin", "The first animal scanned by MRI"], answer: [1], explanation: "A team led by Ian Wilmut and Keith Campbell was the first to clone a mammal, Dolly the sheep." },
    { id: "bs-q25", lessonId: "inventions", page: 13, type: "single", prompt: "Where was the first cash-dispensing ATM put into use, in 1967?", options: ["Glasgow", "Barclays Bank, Enfield", "The Bank of England, London", "Manchester"], answer: [1], explanation: "James Goodfellow invented the ATM; the first was used by Barclays Bank in Enfield, north London." },
    { id: "bs-q26", lessonId: "inventions", page: 12, type: "multi", prompt: "Which TWO inventors does the handbook describe as Scottish?", options: ["John Logie Baird", "Alan Turing", "Sir Robert Watson-Watt", "Sir Frank Whittle"], answer: [0, 2], explanation: "Baird (television) and Watson-Watt (radar) are both described as Scotsmen. John MacLeod (insulin) was also Scottish." },
    { id: "bs-q26b", lessonId: "inventions", page: 12, type: "single", prompt: "What did John MacLeod co-discover?", options: ["Penicillin", "Insulin", "DNA", "IVF"], answer: [1], explanation: "The Scottish physician John MacLeod was the co-discoverer of insulin, used to treat diabetes." },
    { id: "bs-q26c", lessonId: "inventions", page: 12, type: "truefalse", prompt: "The structure of the DNA molecule was discovered in 1953 through work at universities in London and Cambridge.", options: ["True", "False"], answer: [0], explanation: "True. Francis Crick, one of the Nobel Prize winners for the discovery, was British." },
    { id: "bs-q26d", lessonId: "inventions", page: 13, type: "single", prompt: "Who co-invented the MRI scanner?", options: ["Sir Peter Mansfield", "Sir Robert Edwards", "Keith Campbell", "Francis Crick"], answer: [0], explanation: "Sir Peter Mansfield is the co-inventor of the MRI scanner, which has revolutionised diagnostic medicine." },
    // the-1970s
    { id: "bs-q27", lessonId: "the-1970s", page: 13, type: "single", prompt: "In which year was the Northern Ireland Parliament suspended?", options: ["1969", "1972", "1979", "1998"], answer: [1], explanation: "In 1972 the Northern Ireland Parliament was suspended and Northern Ireland was ruled directly by the UK government." },
    { id: "bs-q28", lessonId: "the-1970s", page: 13, type: "single", prompt: "About how many people lost their lives in the violence in Northern Ireland in the decades after 1969?", options: ["300", "1,000", "3,000", "30,000"], answer: [2], explanation: "Some 3,000 people lost their lives." },
    { id: "bs-q29", lessonId: "the-1970s", page: 13, type: "single", prompt: "In which year did the UK join the European Economic Community?", options: ["1957", "1963", "1973", "1975"], answer: [2], explanation: "The EEC was formed in 1957; the UK joined in 1973." },
    { id: "bs-q30", lessonId: "the-1970s", page: 13, type: "multi", prompt: "Which TWO countries were founder members of the EEC in 1957?", options: ["Italy", "The UK", "Luxembourg", "Spain"], answer: [0, 2], explanation: "The six founders were West Germany, France, Belgium, Italy, Luxembourg and the Netherlands." },
    { id: "bs-q31", lessonId: "the-1970s", page: 13, type: "single", prompt: "Mary Peters won an Olympic gold medal in 1972 in which event?", options: ["The marathon", "The pentathlon", "The 100 metres", "Swimming"], answer: [1], explanation: "Mary Peters, born in Manchester and raised in Northern Ireland, won gold in the pentathlon." },
    { id: "bs-q32", lessonId: "the-1970s", page: 13, type: "truefalse", prompt: "In the late 1970s, imports of goods were valued at more than exports, causing 'balance of payments' problems.", options: ["True", "False"], answer: [0], explanation: "True. Prices rose sharply and the exchange rate of the pound was unstable." },
    { id: "bs-q32b", lessonId: "the-1970s", page: 13, type: "truefalse", prompt: "The UK was keen to join the EEC as soon as it was formed in 1957.", options: ["True", "False"], answer: [1], explanation: "False. At first the UK did not wish to join, but it eventually did so in 1973." },
    // thatcher-to-brown
    { id: "bs-q33", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "Who was the first woman Prime Minister of the UK?", options: ["Theresa May", "Margaret Thatcher", "Barbara Castle", "Mary Peters"], answer: [1], explanation: "Margaret Thatcher became the first woman PM in 1979 and served until 1990." },
    { id: "bs-q34", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "In 1982, which country invaded the Falkland Islands?", options: ["Chile", "Spain", "Argentina", "Brazil"], answer: [2], explanation: "Argentina invaded; a British naval taskforce recovered the islands." },
    { id: "bs-q35", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "Which Prime Minister helped establish the Northern Ireland peace process?", options: ["Margaret Thatcher", "John Major", "Gordon Brown", "David Cameron"], answer: [1], explanation: "John Major, PM after Mrs Thatcher, helped establish the peace process; Tony Blair's government built on it." },
    { id: "bs-q36", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "When was the Good Friday Agreement signed?", options: ["1994", "1997", "1998", "2007"], answer: [2], explanation: "The Good Friday Agreement was signed in 1998. The Northern Ireland Assembly was elected in 1999." },
    { id: "bs-q37", lessonId: "thatcher-to-brown", page: 14, type: "multi", prompt: "Which TWO did the Blair government introduce?", options: ["A Scottish Parliament", "The National Health Service", "A Welsh Assembly", "The Northern Ireland Parliament"], answer: [0, 2], explanation: "The Blair government introduced a Scottish Parliament and a Welsh Assembly. The NHS dates from 1948." },
    { id: "bs-q38", lessonId: "thatcher-to-brown", page: 14, type: "truefalse", prompt: "Margaret Thatcher was the longest-serving Prime Minister of the 20th century.", options: ["True", "False"], answer: [0], explanation: "True. She remained in office from 1979 until 1990." },
    { id: "bs-q39", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "Which traditional industries declined under the Thatcher government?", options: ["Banking and insurance", "Shipbuilding and coal mining", "Tourism and retail", "Textiles and computing"], answer: [1], explanation: "Shipbuilding and coal mining declined, while deregulation boosted the City of London's financial services." },
    { id: "bs-q40", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "Roald Dahl, author of Charlie and the Chocolate Factory, was born where?", options: ["In Norway, to Welsh parents", "In Wales, to Norwegian parents", "In Scotland, to Danish parents", "In London, to Swedish parents"], answer: [1], explanation: "Roald Dahl was born in Wales to Norwegian parents and served in the RAF in the Second World War." },
    { id: "bs-q40b", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "In which year did Gordon Brown take over as Prime Minister?", options: ["1997", "2002", "2007", "2010"], answer: [2], explanation: "Gordon Brown took over from Tony Blair in 2007." },
    { id: "bs-q40c", lessonId: "thatcher-to-brown", page: 14, type: "single", prompt: "Margaret Thatcher was the daughter of a grocer from which town?", options: ["Grantham, Lincolnshire", "Oldham, Lancashire", "Enfield, London", "Swansea"], answer: [0], explanation: "She grew up in Grantham, Lincolnshire, and trained as a chemist and lawyer." },
    // conflicts-and-coalition
    { id: "bs-q41", lessonId: "conflicts-and-coalition", page: 15, type: "single", prompt: "In May 2010, no party won an overall majority for the first time since when?", options: ["1945", "February 1974", "1979", "1992"], answer: [1], explanation: "It was the first time since February 1974." },
    { id: "bs-q42", lessonId: "conflicts-and-coalition", page: 15, type: "multi", prompt: "Which TWO parties formed the coalition government in 2010?", options: ["Labour", "Conservative", "Liberal Democrat", "Scottish National Party"], answer: [1, 2], explanation: "The Conservatives and Liberal Democrats formed a coalition, and David Cameron became PM." },
    { id: "bs-q43", lessonId: "conflicts-and-coalition", page: 15, type: "single", prompt: "When did British combat troops leave Iraq?", options: ["2003", "2007", "2009", "2014"], answer: [2], explanation: "British combat troops left Iraq in 2009." },
    { id: "bs-q44", lessonId: "conflicts-and-coalition", page: 15, type: "single", prompt: "Which country did Britain help to liberate in the 1990s, after it was invaded by Iraq in 1990?", options: ["Afghanistan", "Kuwait", "Iran", "Yugoslavia"], answer: [1], explanation: "Britain played a leading role in coalition forces involved in the liberation of Kuwait." },
    { id: "bs-q45", lessonId: "conflicts-and-coalition", page: 15, type: "single", prompt: "Who became Prime Minister of the coalition government in 2010?", options: ["Gordon Brown", "Nick Clegg", "David Cameron", "Tony Blair"], answer: [2], explanation: "David Cameron, leader of the Conservative Party, became Prime Minister." },
    { id: "bs-q46", lessonId: "conflicts-and-coalition", page: 15, type: "truefalse", prompt: "According to the handbook, the UK operated in Afghanistan as part of a UN-mandated 50-nation coalition (ISAF).", options: ["True", "False"], answer: [0], explanation: "True. ISAF worked to stop Afghanistan being used as a safe haven for international terrorism." },
  ],

  flags: [
    { page: 11, text: "The main text spells the Prime Minister's name \"Clement Atlee\"; the profile box spells it correctly as Attlee. This site uses Attlee." },
    { page: 12, text: "The handbook calls Concorde the world's only supersonic commercial airliner. The Soviet Tupolev Tu-144 also briefly carried passengers (1977–78). Use the handbook's wording for the test." },
    { page: 13, text: "\"Sir Ian Wilmot\" is a misspelling of Sir Ian Wilmut. The summary on p. 97 also misspells Cockerell as \"Cockrell\". This site uses the correct spellings." },
    { page: 13, text: "Several inventors shown as living have since died: Sir Robert Edwards (2013), Sir Peter Mansfield (2017) and Sir Ian Wilmut (2023). The handbook says dates of birth and death need not be learned." },
    { page: 13, text: "\"The UK is a full member of the European Union\" is out of date and contradicts p. 91, which says the UK left on 31 January 2020." },
    { page: 14, text: "The Welsh Assembly became the Senedd (Welsh Parliament) in 2020, with full law-making powers; the Northern Ireland Assembly has been suspended again since the handbook was written (2017–2020, 2022–2024)." },
    { page: 15, text: "The Afghanistan paragraph describes 2013 plans (security handover by end of 2014). ISAF ended in 2014 and international forces left Afghanistan in 2021." },
    { page: 15, text: "The sections \"Conservative Government from 2015 to 2024\" and \"Labour Government from 2024\" were added by the PDF's publisher and are not in the official 3rd edition. They are shown as publisher updates and are not drilled in questions." },
  ],
};
