import type { Unit } from "../types";

/**
 * Unit 3.1 — Early Britain. Handbook (Britizen PDF) § 3.7, pp. 39–42.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const earlyBritain: Unit = {
  id: "early-britain",
  number: "3.1",
  title: "Early Britain",
  handbook: {
    chapter: 3,
    chapterTitle: "A long and illustrious history",
    section: "3.7",
    pages: [39, 42],
  },
  status: "available",
  dek: "From Stone Age hunters to the Norman Conquest: the peoples who shaped Britain's language, religion and government.",
  heroImageId: "stonehenge",
  overview: [
    "The handbook's history begins with the first people to live in Britain and ends this first era with the Norman Conquest of 1066 and the Domesday Book.",
    "Along the way, wave after wave of arrivals (farmers, Romans, Anglo-Saxons, Vikings and Normans) left their mark on the language, religion, place names and government of the country. The test expects you to know the order of these arrivals, the key dates, the people involved and the places that still survive.",
  ],
  objectives: [
    "Describe how people lived in Britain in the Stone, Bronze and Iron Ages, and name surviving sites from each.",
    "Explain the impact of the Romans, including the dates of their invasions and departure.",
    "Put the groups that invaded after the Romans in the right order: Anglo-Saxons, Vikings, Normans.",
    "Name the missionaries who brought Christianity and where they came from.",
    "Explain why the Norman Conquest of 1066 was so important.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "first-britons",
      title: "The first Britons",
      dek: "Hunter-gatherers, the land bridge and the first farmers who raised Stonehenge.",
      pages: [39],
      minutes: 5,
      heroImageId: "stonehenge",
      recall: {
        question: "Before you read: was Britain always an island? Roughly when did it become one?",
        answer:
          "No. For much of the Stone Age Britain was joined to the continent by a land bridge. It became permanently separated by the Channel about 10,000 years ago.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Hunters on a land bridge",
          pages: [39],
          paragraphs: [
            "The first people to live in Britain were hunter-gatherers, in the period we call the Stone Age.",
            "For much of the Stone Age, Britain was joined to the continent by a land bridge. People came and went, following the herds of deer and horses they hunted. Britain only became permanently separated from the continent by the Channel about 10,000 years ago.",
          ],
        },
        {
          type: "prose",
          heading: "The first farmers",
          pages: [39],
          paragraphs: [
            "The first farmers arrived about 6,000 years ago. Their ancestors probably came from south-east Europe. They built houses, tombs and monuments on the land.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "stonehenge",
            kind: "photograph",
            caption: "Stonehenge, Wiltshire. Built by Britain's early farming communities.",
          },
        },
        {
          type: "cards",
          heading: "Two Stone Age sites to know",
          cards: [
            {
              id: "stonehenge",
              title: "Stonehenge",
              meta: "Wiltshire, England",
              summary: "A monument built by the first farmers that still stands today.",
              detail: [
                "One of the monuments built by the first farmers. It still stands in what is now the English county of Wiltshire.",
                "It was probably a special gathering place for seasonal ceremonies.",
              ],
              page: 39,
              imageId: "stonehenge",
            },
            {
              id: "skara-brae",
              title: "Skara Brae",
              meta: "Orkney, off the north coast of Scotland",
              summary: "The best-preserved prehistoric village in northern Europe.",
              detail: [
                "Skara Brae on Orkney is the best-preserved prehistoric village in northern Europe.",
                "It has helped archaeologists understand how people lived near the end of the Stone Age.",
              ],
              page: 39,
              imageId: "skara-brae",
            },
          ],
        },
        { type: "map", heading: "Where they are", placeIds: ["stonehenge", "skara-brae"] },
      ],
      keyFacts: [
        { text: "The first people in Britain were Stone Age hunter-gatherers.", page: 39 },
        { text: "Britain became permanently separated from the continent about 10,000 years ago.", page: 39 },
        { text: "The first farmers arrived about 6,000 years ago, probably from south-east Europe.", page: 39 },
        { text: "Stonehenge (Wiltshire) was probably a gathering place for seasonal ceremonies.", page: 39 },
        { text: "Skara Brae (Orkney) is the best-preserved prehistoric village in northern Europe.", page: 39 },
      ],
      mnemonics: [
        {
          title: "10,000 then 6,000",
          device: "Island first, farms later.",
          explanation:
            "Britain became an island (~10,000 years ago) before the first farmers arrived (~6,000 years ago). The bigger number is the older event.",
        },
        {
          title: "Skara Brae is Scottish",
          device: "Skara = Scotland, Brae = a Scots word.",
          explanation:
            "Both names start with S and Skara Brae sits on Orkney, off Scotland's north coast. Stonehenge is the English one, in Wiltshire.",
        },
      ],
      checkQuestionIds: ["eb-q01", "eb-q02", "eb-q04"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "bronze-and-iron",
      title: "Bronze and Iron",
      dek: "Metalworkers, roundhouses, hill forts and the first coins: the beginning of British history.",
      pages: [39],
      minutes: 5,
      heroImageId: "maiden-castle",
      recall: {
        question: "Before you read: what event does the handbook say marks the beginning of British history?",
        answer:
          "The first coins minted in Britain by Iron Age people, some inscribed with the names of Iron Age kings.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Bronze Age",
          pages: [39],
          paragraphs: [
            "Around 4,000 years ago people learned to make bronze, and we call this period the Bronze Age.",
            "People lived in roundhouses and buried their dead in tombs called round barrows. They were accomplished metalworkers, making beautiful objects in bronze and gold, including tools, ornaments and weapons.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "round-barrow",
            kind: "photograph",
            caption: "A Bronze Age round barrow: the burial mound type the handbook names.",
          },
        },
        {
          type: "prose",
          heading: "The Iron Age",
          pages: [39],
          paragraphs: [
            "The Bronze Age was followed by the Iron Age, when people learned to make weapons and tools out of iron.",
            "People still lived in roundhouses, now grouped into larger settlements, and sometimes defended sites called hill forts. A very impressive hill fort can still be seen at Maiden Castle in the English county of Dorset.",
            "Most people were farmers, craft workers or warriors. Their language belonged to the Celtic language family. Similar languages were spoken across Europe, and related languages are still spoken today in parts of Wales, Scotland and Ireland.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "maiden-castle",
            kind: "aerial photograph",
            caption: "Maiden Castle, Dorset, photographed from the air in 1937. The ramparts of the Iron Age hill fort are clearly visible.",
          },
        },
        {
          type: "prose",
          heading: "Where British history begins",
          pages: [39],
          paragraphs: [
            "Iron Age people had a sophisticated culture and economy. They made the first coins to be minted in Britain, some inscribed with the names of Iron Age kings. The handbook says this marks the beginning of British history.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "cunobelinus-coin",
            kind: "artefact",
            caption: "A gold Iron Age coin (stater) naming the king Cunobelinus, found in Britain.",
            context:
              "Cunobelinus is not named in the handbook. The coin is shown as an example of an Iron Age coin inscribed with a king's name.",
          },
        },
        {
          type: "sequence",
          heading: "The three ages, in order",
          page: 39,
          steps: [
            { label: "Stone Age", detail: "Hunter-gatherers, then the first farmers (~6,000 years ago). Stonehenge, Skara Brae." },
            { label: "Bronze Age", detail: "From ~4,000 years ago. Roundhouses, round barrows, bronze and gold metalwork." },
            { label: "Iron Age", detail: "Iron tools and weapons, hill forts (Maiden Castle), Celtic languages, first coins." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Bronze Age began around 4,000 years ago.", page: 39 },
        { text: "Bronze Age people lived in roundhouses and buried their dead in round barrows.", page: 39 },
        { text: "Iron Age people sometimes defended sites called hill forts, e.g. Maiden Castle, Dorset.", page: 39 },
        { text: "The Iron Age language was part of the Celtic language family; related languages survive in Wales, Scotland and Ireland.", page: 39 },
        { text: "Iron Age people made the first coins minted in Britain, marking the beginning of British history.", page: 39 },
      ],
      mnemonics: [
        {
          title: "Stone → Bronze → Iron",
          device: "\"Some Bright Ideas\"",
          explanation: "Stone, Bronze, Iron: each age is named after the material people learned to work.",
        },
        {
          title: "Round, round, round",
          device: "Roundhouses for the living, round barrows for the dead.",
          explanation: "Both Bronze Age terms in the handbook start with \"round\".",
        },
        {
          title: "Maiden Castle",
          device: "A maiden guarding a fort in Dorset.",
          explanation: "Maiden Castle is not a castle at all but an Iron Age hill fort, in Dorset.",
        },
      ],
      checkQuestionIds: ["eb-q05", "eb-q06", "eb-q08"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "romans",
      title: "Roman Britain",
      dek: "Two invasions, a rebel queen, a wall across the north and 400 years of Roman rule.",
      pages: [39, 40],
      minutes: 7,
      heroImageId: "hadrians-wall",
      recall: {
        question: "Before you read: which Roman invasion succeeded, Julius Caesar's in 55 BC or Claudius's in AD 43?",
        answer:
          "Claudius's in AD 43. Caesar's invasion of 55 BC was unsuccessful, and Britain stayed separate from the Roman Empire for nearly 100 years.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Two invasions",
          pages: [39],
          paragraphs: [
            "Julius Caesar led a Roman invasion of Britain in 55 BC. It was unsuccessful, and for nearly 100 years Britain remained separate from the Roman Empire.",
            "In AD 43 the Emperor Claudius led the Roman army in a new invasion. Some British tribes resisted, but this time the Romans succeeded in occupying almost all of Britain.",
          ],
        },
        {
          type: "figures",
          figures: [
            {
              imageId: "julius-caesar",
              kind: "portrait",
              caption: "Julius Caesar: ancient Roman marble portrait.",
            },
            {
              imageId: "claudius",
              kind: "portrait",
              caption: "Emperor Claudius: ancient Roman marble portrait, Naples.",
            },
          ],
        },
        {
          type: "cards",
          heading: "The rebel queen",
          cards: [
            {
              id: "boudicca",
              title: "Boudicca",
              meta: "Queen of the Iceni, in what is now eastern England",
              summary: "A tribal leader who fought against the Romans.",
              detail: [
                "Boudicca was one of the tribal leaders who fought against the Romans. She was queen of the Iceni, in what is now eastern England.",
                "She is still remembered today: there is a statue of her on Westminster Bridge in London, near the Houses of Parliament.",
              ],
              page: 39,
              imageId: "boudicca-statue",
              context: {
                text: "The statue, Boadicea and Her Daughters by Thomas Thornycroft, was put up in 1902. It is a Victorian imagining, not a likeness.",
              },
            },
          ],
        },
        {
          type: "prose",
          heading: "Hadrian's Wall",
          pages: [40],
          paragraphs: [
            "Areas of what is now Scotland were never conquered by the Romans. The Emperor Hadrian built a wall in the north of England to keep out the Picts, ancestors of the Scottish people.",
            "The wall included a number of forts. Parts of it, including the forts of Housesteads and Vindolanda, can still be seen. It is a popular area for walkers and a UNESCO World Heritage Site.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "hadrians-wall",
            kind: "photograph",
            caption: "Hadrian's Wall running west from Housesteads, Northumberland.",
          },
        },
        {
          type: "figure",
          figure: {
            imageId: "housesteads",
            kind: "aerial photograph",
            caption: "Housesteads Roman fort from the air, with Hadrian's Wall running along the ridge behind it.",
          },
        },
        {
          type: "map",
          heading: "Roman Britain on the map",
          placeIds: ["westminster-bridge", "hadrians-wall", "housesteads", "vindolanda"],
          caption: "Hadrian's Wall marks the northern frontier. Boudicca's statue stands in London, by Parliament.",
        },
        {
          type: "prose",
          heading: "What the Romans left behind",
          pages: [40],
          paragraphs: [
            "The Romans stayed in Britain for 400 years. They built roads and public buildings, created a structure of law, and introduced new plants and animals.",
            "The first Christian communities began to appear in Britain during the 3rd and 4th centuries AD.",
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Boudicca's revolt is usually dated to AD 60 or 61." },
            { text: "Building of Hadrian's Wall began around AD 122. It runs about 73 miles (117 km) from coast to coast." },
          ],
        },
      ],
      keyFacts: [
        { text: "55 BC: Julius Caesar's invasion was unsuccessful.", page: 39 },
        { text: "AD 43: Emperor Claudius led a successful invasion.", page: 39 },
        { text: "Boudicca, queen of the Iceni (eastern England), fought the Romans; her statue is on Westminster Bridge.", page: 39 },
        { text: "Hadrian's Wall was built to keep out the Picts, ancestors of the Scottish people. Scotland was never conquered.", page: 40 },
        { text: "Housesteads and Vindolanda are forts on Hadrian's Wall, now a UNESCO World Heritage Site.", page: 40 },
        { text: "The Romans stayed for 400 years and built roads, public buildings and a structure of law.", page: 40 },
        { text: "The first Christian communities appeared in the 3rd and 4th centuries AD.", page: 40 },
      ],
      mnemonics: [
        {
          title: "55 BC tried, AD 43 stayed",
          device: "Caesar came and went; Claudius came and conquered.",
          explanation: "Both C-names. The first (Caesar, 55 BC) failed; the second (Claudius, AD 43) succeeded.",
        },
        {
          title: "Hadrian's Wall keeps out the Picts",
          device: "\"Hadrian Hid from the Picts.\"",
          explanation: "The Picts were ancestors of the Scottish people, which is why the wall runs across the north of England.",
        },
        {
          title: "Boudicca guards Parliament",
          device: "Picture her chariot charging across Westminster Bridge.",
          explanation: "Her statue stands on Westminster Bridge, near the Houses of Parliament. She led the Iceni of eastern England.",
        },
      ],
      checkQuestionIds: ["eb-q10", "eb-q12", "eb-q14"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "anglo-saxons",
      title: "Anglo-Saxons and the coming of Christianity",
      dek: "The Romans leave, new tribes arrive, and missionaries bring Christianity from Ireland and Rome.",
      pages: [40],
      minutes: 6,
      heroImageId: "sutton-hoo-helmet",
      recall: {
        question: "Before you read: name the three tribes from northern Europe who invaded after the Romans left.",
        answer: "The Jutes, the Angles and the Saxons. Their languages are the basis of modern English.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Romans leave",
          pages: [40],
          paragraphs: [
            "The Roman army left Britain in AD 410 to defend other parts of the Roman Empire, and never returned.",
            "Britain was invaded again, this time by tribes from northern Europe: the Jutes, the Angles and the Saxons. The languages they spoke are the basis of modern-day English.",
          ],
        },
        {
          type: "prose",
          heading: "Anglo-Saxon kingdoms",
          pages: [40],
          paragraphs: [
            "Battles were fought against the invaders, but by about AD 600 Anglo-Saxon kingdoms were established in Britain, mainly in what is now England.",
            "Parts of the west of Britain, including much of what is now Wales, and Scotland remained free of Anglo-Saxon rule.",
            "One Anglo-Saxon king was buried at Sutton Hoo in modern Suffolk, with treasure and armour, all placed in a ship that was then covered by a mound of earth.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "sutton-hoo-helmet",
            kind: "artefact",
            caption: "The helmet from the Sutton Hoo ship burial, Suffolk.",
            context:
              "The helmet was found in fragments in 1939 and has been reconstructed. It is in the British Museum and dates from the early 7th century.",
          },
        },
        {
          type: "prose",
          heading: "Christianity returns",
          pages: [40],
          paragraphs: [
            "The Anglo-Saxons were not Christians when they arrived, but during this period missionaries came to Britain to preach Christianity.",
          ],
        },
        {
          type: "cards",
          heading: "The missionaries",
          cards: [
            {
              id: "st-patrick",
              title: "St Patrick",
              meta: "Missionary from Ireland · north",
              summary: "Became the patron saint of Ireland.",
              detail: [
                "Missionaries from Ireland spread Christianity in the north of Britain. St Patrick was one of the most famous, and would become the patron saint of Ireland.",
              ],
              page: 40,
            },
            {
              id: "st-columba",
              title: "St Columba",
              meta: "Missionary from Ireland · north",
              summary: "Founded a monastery on the island of Iona.",
              detail: [
                "Another famous missionary from Ireland. He founded a monastery on the island of Iona, off the coast of what is now Scotland.",
              ],
              page: 40,
              imageId: "iona-abbey",
              context: {
                text: "The abbey buildings on Iona today are later, medieval and restored in the 20th century. They stand on the site of Columba's monastery.",
              },
            },
            {
              id: "st-augustine",
              title: "St Augustine",
              meta: "Missionary from Rome · south",
              summary: "Became the first Archbishop of Canterbury.",
              detail: [
                "St Augustine led missionaries from Rome, who spread Christianity in the south. He became the first Archbishop of Canterbury.",
              ],
              page: 40,
              imageId: "augustine-gospels",
              context: {
                text: "The illustration is from the St Augustine Gospels, a 6th-century Italian gospel book traditionally linked to Augustine's mission. It is now at Corpus Christi College, Cambridge.",
                verify: "The link to Augustine himself is traditional rather than proven.",
              },
            },
          ],
        },
        {
          type: "map",
          heading: "Anglo-Saxon Britain on the map",
          placeIds: ["sutton-hoo", "iona", "canterbury"],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [{ text: "Augustine's mission arrived in Kent in AD 597." }],
        },
      ],
      keyFacts: [
        { text: "AD 410: the Roman army left Britain and never returned.", page: 40 },
        { text: "The Jutes, Angles and Saxons invaded; their languages are the basis of modern English.", page: 40 },
        { text: "By about AD 600, Anglo-Saxon kingdoms were established, mainly in what is now England.", page: 40 },
        { text: "Much of Wales, and Scotland, remained free of Anglo-Saxon rule.", page: 40 },
        { text: "Sutton Hoo (Suffolk): an Anglo-Saxon king buried in a ship with treasure and armour.", page: 40 },
        { text: "Missionaries from Ireland (St Patrick, St Columba) spread Christianity in the north.", page: 40 },
        { text: "St Columba founded a monastery on Iona; St Augustine (from Rome) became the first Archbishop of Canterbury.", page: 40 },
      ],
      mnemonics: [
        {
          title: "The tribes",
          device: "J-A-S: \"Just Arrived by Sea\": Jutes, Angles, Saxons.",
          explanation: "The Angles gave their name to England (\"Angle-land\"), a handy hook for why their language became English.",
        },
        {
          title: "North from Ireland, south from Rome",
          device: "Patrick and Columba came over the Irish Sea; Augustine came up from Rome.",
          explanation: "A for Augustine, A for Archbishop: he became the first Archbishop of Canterbury.",
        },
        {
          title: "AD 410",
          device: "400 years of Rome, 1 exit, 0 returns.",
          explanation: "The Romans stayed about 400 years and left in 410, never to return.",
        },
      ],
      checkQuestionIds: ["eb-q16", "eb-q19", "eb-q21"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "vikings",
      title: "The Vikings",
      dek: "Raiders from Denmark and Norway, Alfred the Great, the Danelaw and the birth of Scotland.",
      pages: [41],
      minutes: 5,
      heroImageId: "alfred-statue",
      recall: {
        question: "Before you read: which Anglo-Saxon king united the Anglo-Saxon kingdoms and defeated the Vikings?",
        answer: "King Alfred the Great.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Raiders, then settlers",
          pages: [41],
          paragraphs: [
            "The Vikings came from Denmark and Norway. They first visited Britain in AD 789 to raid coastal towns and take away goods and slaves.",
            "They then began to stay and form their own communities in the east of England and Scotland.",
          ],
        },
        {
          type: "cards",
          heading: "Kings of the Viking age",
          cards: [
            {
              id: "alfred",
              title: "Alfred the Great",
              meta: "Anglo-Saxon king",
              summary: "United the Anglo-Saxon kingdoms and defeated the Vikings.",
              detail: [
                "The Anglo-Saxon kingdoms in England united under King Alfred the Great, who defeated the Vikings.",
              ],
              page: 41,
              imageId: "alfred-statue",
              context: {
                text: "The statue in Winchester by Hamo Thornycroft dates from 1899. It is a later depiction, not a portrait. Alfred reigned 871–899.",
              },
            },
            {
              id: "cnut",
              title: "Cnut (Canute)",
              meta: "Danish king of England",
              summary: "The first of a short line of Danish kings.",
              detail: [
                "Anglo-Saxon kings continued to rule what is now England, except for a short period when there were Danish kings. The first of these was Cnut, also called Canute.",
              ],
              page: 41,
              imageId: "cnut-emma",
              context: {
                text: "The drawing shows Cnut and Queen Emma in the New Minster Liber Vitae, made in Winchester around 1031, during Cnut's lifetime. Cnut ruled England 1016–1035.",
              },
            },
            {
              id: "kenneth-macalpin",
              title: "Kenneth MacAlpin",
              meta: "King in the north",
              summary: "Under him the people of the north united; the term Scotland came into use.",
              detail: [
                "In the north, the threat of Viking attack encouraged people to unite under one king, Kenneth MacAlpin. The term Scotland began to be used to describe that country.",
              ],
              page: 41,
              context: { text: "Kenneth MacAlpin's rule is usually dated to the 840s." },
            },
          ],
        },
        {
          type: "prose",
          heading: "The Danelaw",
          pages: [41],
          paragraphs: [
            "Many Viking invaders stayed in Britain, especially in the east and north of England, in an area known as the Danelaw. Many place names there, such as Grimsby and Scunthorpe, come from Viking languages.",
            "The Viking settlers mixed with local communities and some converted to Christianity.",
          ],
        },
        {
          type: "map",
          heading: "Viking Britain on the map",
          placeIds: ["grimsby", "scunthorpe", "winchester"],
          caption: "Grimsby and Scunthorpe lie in the old Danelaw, in the east of England.",
        },
        {
          type: "context",
          title: "Memory hook (not in the handbook)",
          body: [
            {
              text: "Place names ending in -by (Grimsby, Whitby, Derby) and -thorpe (Scunthorpe) usually come from Old Norse words for a farm or village, so they cluster in the old Danelaw.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "The Vikings came from Denmark and Norway.", page: 41 },
        { text: "AD 789: Vikings first visited Britain to raid coastal towns.", page: 41 },
        { text: "Alfred the Great united the Anglo-Saxon kingdoms and defeated the Vikings.", page: 41 },
        { text: "The Danelaw was the area of Viking settlement in the east and north of England (Grimsby, Scunthorpe).", page: 41 },
        { text: "Cnut (Canute) was the first of a short period of Danish kings.", page: 41 },
        { text: "In the north, people united under Kenneth MacAlpin and the term Scotland began to be used.", page: 41 },
      ],
      mnemonics: [
        {
          title: "AD 789",
          device: "7-8-9: the Vikings counted up the coast.",
          explanation: "Three consecutive digits. The first Viking raid on Britain, according to the handbook.",
        },
        {
          title: "Danelaw = Danes' law",
          device: "The land where Danish law ran.",
          explanation: "East and north of England. Grimsby and Scunthorpe are the handbook's examples.",
        },
      ],
      checkQuestionIds: ["eb-q23", "eb-q25", "eb-q27"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 6
    {
      id: "norman-conquest",
      title: "1066: The Norman Conquest",
      dek: "The Battle of Hastings, the Bayeux Tapestry and the Domesday Book.",
      pages: [41, 42],
      minutes: 6,
      heroImageId: "bayeux-harold",
      recall: {
        question: "Before you read: who fought at the Battle of Hastings in 1066, and who won?",
        answer:
          "William, Duke of Normandy, defeated Harold, the Saxon king of England. Harold was killed and William became king, known as William the Conqueror.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Battle of Hastings",
          pages: [41],
          paragraphs: [
            "In 1066 an invasion led by William, Duke of Normandy (in what is now northern France), defeated Harold, the Saxon king of England, at the Battle of Hastings. Harold was killed in the battle.",
            "William became king of England and is known as William the Conqueror.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "bayeux-harold",
            kind: "artefact",
            caption: "The Bayeux Tapestry: the death of King Harold at Hastings. The Latin reads \"Harold the king is killed\".",
            context:
              "Despite its name the Bayeux Tapestry is embroidered, as the handbook says, on linen roughly 70 metres long. It was made within a few years of the battle.",
          },
        },
        {
          type: "prose",
          heading: "The Bayeux Tapestry",
          pages: [41],
          paragraphs: [
            "The battle is commemorated in a great piece of embroidery, known as the Bayeux Tapestry, which can still be seen in France today.",
          ],
        },
        {
          type: "prose",
          heading: "Why 1066 matters",
          pages: [41],
          paragraphs: [
            "The Norman Conquest was the last successful foreign invasion of England. It led to many changes in government and social structures.",
            "Norman French, the language of the new ruling class, influenced the development of the English language as we know it today.",
            "At first the Normans also conquered Wales, but the Welsh gradually won territory back. The Scots and the Normans fought on the border; the Normans took some land on the border but did not invade Scotland.",
          ],
        },
        {
          type: "prose",
          heading: "The Domesday Book",
          pages: [42],
          paragraphs: [
            "William sent people all over England to list all the towns and villages, who lived there, who owned the land and what animals they owned. This was called the Domesday Book.",
            "It still exists today and gives a picture of society in England just after the Norman Conquest.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "domesday-book",
            kind: "illustration",
            caption: "The Domesday Book volumes, from a 19th-century engraving.",
          },
        },
        {
          type: "map",
          heading: "1066 on the map",
          placeIds: ["hastings", "bayeux"],
          caption: "William sailed from Normandy; the battle was fought near Hastings. The tapestry is kept in Bayeux, France.",
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The Domesday survey was carried out in 1086." },
            { text: "The battle was fought on 14 October 1066." },
          ],
        },
      ],
      keyFacts: [
        { text: "1066: William, Duke of Normandy, defeated King Harold at the Battle of Hastings. Harold was killed.", page: 41 },
        { text: "William became king and is known as William the Conqueror.", page: 41 },
        { text: "The Bayeux Tapestry, a great embroidery, commemorates the battle and can be seen in France.", page: 41 },
        { text: "The Norman Conquest was the last successful foreign invasion of England.", page: 41 },
        { text: "Norman French influenced the development of the English language.", page: 41 },
        { text: "The Normans took some border land but did not invade Scotland; the Welsh gradually won land back.", page: 41 },
        { text: "The Domesday Book listed England's towns, villages, people, landowners and animals.", page: 42 },
      ],
      mnemonics: [
        {
          title: "The invasion order",
          device: "R-A-V-eN: Romans, Anglo-Saxons, Vikings, Normans.",
          explanation: "The four big arrivals of early British history in order. The raven is also a bird of Viking legend.",
        },
        {
          title: "Domesday",
          device: "Pronounced \"doomsday\": a final reckoning of everything England owned.",
          explanation: "William's survey of towns, villages, people, land and animals, which still exists.",
        },
      ],
      checkQuestionIds: ["eb-q29", "eb-q31", "eb-q33"],
    },
  ],

  // ───────────────────────────────────────────────────────────────── Timeline
  timeline: [
    {
      id: "t-island",
      date: "c. 10,000 years ago",
      sortYear: -8000,
      title: "Britain becomes an island",
      summary: "The land bridge to the continent disappears and the Channel permanently separates Britain.",
      people: ["Stone Age hunter-gatherers"],
      whyItMatters: "Until then people came and went freely, following herds of deer and horses.",
      remember: ["About 10,000 years ago", "Before this, a land bridge joined Britain to the continent"],
      page: 39,
      lessonId: "first-britons",
    },
    {
      id: "t-farmers",
      date: "c. 6,000 years ago",
      sortYear: -4000,
      title: "The first farmers arrive",
      summary: "Farmers, probably from south-east Europe, build houses, tombs and monuments such as Stonehenge.",
      people: ["The first farmers"],
      whyItMatters: "Their monuments, Stonehenge and the village of Skara Brae, are among the oldest surviving sites in Britain.",
      remember: ["Probably came from south-east Europe", "Stonehenge: Wiltshire", "Skara Brae: Orkney"],
      imageId: "stonehenge",
      page: 39,
      lessonId: "first-britons",
    },
    {
      id: "t-bronze",
      date: "c. 4,000 years ago",
      sortYear: -2000,
      title: "The Bronze Age",
      summary: "People learn to make bronze, live in roundhouses and bury their dead in round barrows.",
      people: ["Bronze Age metalworkers"],
      whyItMatters: "Skilled metalwork in bronze and gold: tools, ornaments and weapons.",
      remember: ["Roundhouses", "Round barrows (tombs)"],
      imageId: "round-barrow",
      page: 39,
      lessonId: "bronze-and-iron",
    },
    {
      id: "t-iron",
      contextDate: "c. 800 BC",
      sortYear: -800,
      title: "The Iron Age",
      summary: "Iron tools and weapons, hill forts like Maiden Castle, Celtic languages and the first British coins.",
      people: ["Iron Age kings", "Farmers, craft workers and warriors"],
      whyItMatters: "The first coins minted in Britain, some naming Iron Age kings, mark the beginning of British history.",
      remember: ["Hill fort: Maiden Castle, Dorset", "Celtic language family", "First coins = start of British history"],
      imageId: "maiden-castle",
      page: 39,
      lessonId: "bronze-and-iron",
    },
    {
      id: "t-caesar",
      date: "55 BC",
      sortYear: -55,
      title: "Julius Caesar's invasion fails",
      summary: "Caesar leads a Roman invasion, but it is unsuccessful.",
      people: ["Julius Caesar"],
      whyItMatters: "Britain stays outside the Roman Empire for nearly 100 more years.",
      remember: ["55 BC", "Unsuccessful"],
      imageId: "julius-caesar",
      page: 39,
      lessonId: "romans",
    },
    {
      id: "t-claudius",
      date: "AD 43",
      sortYear: 43,
      title: "Claudius conquers Britain",
      summary: "Emperor Claudius leads a new invasion and the Romans occupy almost all of Britain, despite resistance led by Boudicca and others.",
      people: ["Emperor Claudius", "Boudicca, queen of the Iceni"],
      whyItMatters: "Begins about 400 years of Roman rule: roads, public buildings, law, new plants and animals.",
      remember: ["AD 43", "Boudicca: Iceni, eastern England; statue on Westminster Bridge"],
      imageId: "claudius",
      page: 39,
      lessonId: "romans",
    },
    {
      id: "t-hadrian",
      contextDate: "c. AD 122",
      sortYear: 122,
      title: "Hadrian's Wall",
      summary: "Emperor Hadrian builds a wall across the north of England to keep out the Picts.",
      people: ["Emperor Hadrian", "The Picts"],
      whyItMatters: "Scotland was never conquered by the Romans. The wall and its forts are now a UNESCO World Heritage Site.",
      remember: ["Picts = ancestors of the Scottish people", "Forts: Housesteads, Vindolanda"],
      imageId: "hadrians-wall",
      page: 40,
      lessonId: "romans",
    },
    {
      id: "t-christians",
      date: "3rd–4th centuries AD",
      sortYear: 300,
      title: "First Christian communities",
      summary: "During Roman rule, the first Christian communities begin to appear in Britain.",
      people: [],
      whyItMatters: "Christianity's first foothold in Britain, centuries before the missionaries.",
      remember: ["3rd and 4th centuries AD"],
      page: 40,
      lessonId: "romans",
    },
    {
      id: "t-romans-leave",
      date: "AD 410",
      sortYear: 410,
      title: "The Romans leave",
      summary: "The Roman army leaves to defend other parts of the empire and never returns.",
      people: [],
      whyItMatters: "Opens the way for invasions by the Jutes, Angles and Saxons.",
      remember: ["AD 410", "About 400 years of Roman rule"],
      page: 40,
      lessonId: "anglo-saxons",
    },
    {
      id: "t-anglo-saxon-kingdoms",
      date: "c. AD 600",
      sortYear: 600,
      title: "Anglo-Saxon kingdoms established",
      summary: "Jutes, Angles and Saxons establish kingdoms, mainly in what is now England. A king is buried in a ship at Sutton Hoo.",
      people: ["Jutes", "Angles", "Saxons"],
      whyItMatters: "Their languages are the basis of modern English. Wales and Scotland stay largely free of Anglo-Saxon rule.",
      remember: ["About AD 600", "Sutton Hoo: Suffolk, ship burial"],
      imageId: "sutton-hoo-helmet",
      page: 40,
      lessonId: "anglo-saxons",
    },
    {
      id: "t-missionaries",
      contextDate: "AD 597 (Augustine)",
      sortYear: 597,
      title: "Missionaries bring Christianity",
      summary: "Missionaries from Ireland spread Christianity in the north; St Augustine's mission from Rome spreads it in the south.",
      people: ["St Patrick", "St Columba", "St Augustine"],
      whyItMatters: "The Anglo-Saxons were not Christians when they arrived. Augustine becomes the first Archbishop of Canterbury.",
      remember: ["Patrick: patron saint of Ireland", "Columba: monastery on Iona", "Augustine: from Rome, first Archbishop of Canterbury"],
      imageId: "augustine-gospels",
      page: 40,
      lessonId: "anglo-saxons",
    },
    {
      id: "t-vikings",
      date: "AD 789",
      sortYear: 789,
      title: "First Viking raids",
      summary: "Vikings from Denmark and Norway raid coastal towns, taking goods and slaves, then begin to settle.",
      people: ["Vikings"],
      whyItMatters: "Viking settlers form communities in the east of England and Scotland, and leave place names still used today.",
      remember: ["AD 789", "From Denmark and Norway"],
      page: 41,
      lessonId: "vikings",
    },
    {
      id: "t-kenneth",
      contextDate: "c. 840s",
      sortYear: 843,
      title: "Scotland takes its name",
      summary: "In the north, the Viking threat leads people to unite under one king, Kenneth MacAlpin.",
      people: ["Kenneth MacAlpin"],
      whyItMatters: "The term Scotland begins to be used to describe the country.",
      remember: ["Kenneth MacAlpin", "Viking threat → unity in the north"],
      page: 41,
      lessonId: "vikings",
    },
    {
      id: "t-alfred",
      contextDate: "reigned 871–899",
      sortYear: 878,
      title: "Alfred the Great defeats the Vikings",
      summary: "The Anglo-Saxon kingdoms unite under Alfred, who defeats the Vikings. Many Vikings stay in the Danelaw.",
      people: ["Alfred the Great"],
      whyItMatters: "The Danelaw in the east and north of England keeps Viking place names such as Grimsby and Scunthorpe.",
      remember: ["Alfred united the Anglo-Saxon kingdoms", "Danelaw: east and north of England"],
      imageId: "alfred-statue",
      page: 41,
      lessonId: "vikings",
    },
    {
      id: "t-cnut",
      contextDate: "1016",
      sortYear: 1016,
      title: "Cnut, the first Danish king",
      summary: "For a short period England has Danish kings. The first is Cnut, also called Canute.",
      people: ["Cnut (Canute)"],
      whyItMatters: "Otherwise, Anglo-Saxon kings continue to rule what is now England.",
      remember: ["Cnut = Canute", "A short period of Danish kings"],
      imageId: "cnut-emma",
      page: 41,
      lessonId: "vikings",
    },
    {
      id: "t-hastings",
      date: "1066",
      sortYear: 1066,
      title: "Battle of Hastings",
      summary: "William, Duke of Normandy, defeats and kills Harold, the Saxon king, and becomes William the Conqueror.",
      people: ["William the Conqueror", "King Harold"],
      whyItMatters: "The last successful foreign invasion of England, which transformed government, society and the English language.",
      remember: ["1066", "Commemorated in the Bayeux Tapestry (France)", "Last successful foreign invasion"],
      imageId: "bayeux-harold",
      page: 41,
      lessonId: "norman-conquest",
    },
    {
      id: "t-domesday",
      contextDate: "1086",
      sortYear: 1086,
      title: "The Domesday Book",
      summary: "William's officials list England's towns and villages, the people, the landowners and their animals.",
      people: ["William the Conqueror"],
      whyItMatters: "It still exists and gives a picture of English society just after the Conquest.",
      remember: ["Ordered by William", "Still exists today"],
      imageId: "domesday-book",
      page: 42,
      lessonId: "norman-conquest",
    },
  ],

  // ─────────────────────────────────────────────────────────────────── Places
  places: [
    { id: "stonehenge", name: "Stonehenge", lat: 51.1789, lon: -1.8262, label: { side: "left" }, note: "Stone Age monument in Wiltshire; probably a gathering place for seasonal ceremonies.", page: 39, lessonId: "first-britons", era: "Stone Age" },
    { id: "skara-brae", name: "Skara Brae", lat: 59.0486, lon: -3.3416, note: "Orkney. Best-preserved prehistoric village in northern Europe.", page: 39, lessonId: "first-britons", era: "Stone Age" },
    { id: "maiden-castle", name: "Maiden Castle", lat: 50.6947, lon: -2.4694, label: { side: "left" }, note: "Dorset. A very impressive Iron Age hill fort.", page: 39, lessonId: "bronze-and-iron", era: "Iron Age" },
    { id: "westminster-bridge", name: "Westminster Bridge", lat: 51.5008, lon: -0.1219, label: { side: "right", dy: -7 }, note: "London. Statue of Boudicca, near the Houses of Parliament.", page: 39, lessonId: "romans", era: "Roman" },
    { id: "hadrians-wall", name: "Hadrian's Wall", lat: 55.04, lon: -2.4, line: [[-3.21, 54.95], [-1.53, 54.99]], label: { side: "left", dy: -12 }, note: "Built to keep out the Picts. UNESCO World Heritage Site.", page: 40, lessonId: "romans", era: "Roman" },
    { id: "housesteads", name: "Housesteads", lat: 55.0131, lon: -2.3306, label: { side: "right", dy: -6 }, note: "Roman fort on Hadrian's Wall.", page: 40, lessonId: "romans", era: "Roman" },
    { id: "vindolanda", name: "Vindolanda", lat: 54.9911, lon: -2.3608, label: { side: "left", dy: 12 }, note: "Roman fort near Hadrian's Wall.", page: 40, lessonId: "romans", era: "Roman" },
    { id: "sutton-hoo", name: "Sutton Hoo", lat: 52.0892, lon: 1.3378, note: "Suffolk. Anglo-Saxon king buried in a ship with treasure and armour.", page: 40, lessonId: "anglo-saxons", era: "Anglo-Saxon" },
    { id: "iona", name: "Iona", lat: 56.3346, lon: -6.3921, note: "Island where St Columba founded a monastery.", page: 40, lessonId: "anglo-saxons", era: "Anglo-Saxon" },
    { id: "canterbury", name: "Canterbury", lat: 51.2798, lon: 1.0828, label: { side: "right", dy: 6 }, note: "St Augustine became the first Archbishop of Canterbury.", page: 40, lessonId: "anglo-saxons", era: "Anglo-Saxon" },
    { id: "grimsby", name: "Grimsby", lat: 53.5675, lon: -0.0802, note: "Place name from the Viking languages, in the Danelaw.", page: 41, lessonId: "vikings", era: "Viking" },
    { id: "scunthorpe", name: "Scunthorpe", lat: 53.5809, lon: -0.6502, label: { side: "left" }, note: "Place name from the Viking languages, in the Danelaw.", page: 41, lessonId: "vikings", era: "Viking" },
    { id: "winchester", name: "Winchester", lat: 51.0632, lon: -1.3080, note: "Not named in the handbook. Site of the Alfred the Great statue shown in the lesson.", page: 41, lessonId: "vikings", era: "Viking" },
    { id: "hastings", name: "Hastings", lat: 50.9118, lon: 0.4874, note: "Battle of Hastings, 1066.", page: 41, lessonId: "norman-conquest", era: "Norman" },
    { id: "bayeux", name: "Bayeux (France)", lat: 49.2765, lon: -0.7025, note: "Where the Bayeux Tapestry can be seen today.", page: 41, lessonId: "norman-conquest", era: "Norman" },
  ],

  // ──────────────────────────────────────────────────────────────── Key facts
  keyFacts: [
    { text: "Britain became an island about 10,000 years ago; the first farmers arrived about 6,000 years ago.", page: 39 },
    { text: "Stonehenge is in Wiltshire; Skara Brae, on Orkney, is the best-preserved prehistoric village in northern Europe.", page: 39 },
    { text: "Bronze Age: from about 4,000 years ago; roundhouses and round barrows.", page: 39 },
    { text: "Iron Age: hill forts (Maiden Castle, Dorset), Celtic languages, the first coins; the beginning of British history.", page: 39 },
    { text: "55 BC Julius Caesar fails; AD 43 Emperor Claudius conquers.", page: 39 },
    { text: "Boudicca, queen of the Iceni, resisted the Romans; statue on Westminster Bridge.", page: 39 },
    { text: "Hadrian's Wall kept out the Picts; Scotland was never conquered by the Romans.", page: 40 },
    { text: "The Romans stayed 400 years and left in AD 410.", page: 40 },
    { text: "Jutes, Angles and Saxons: their languages are the basis of modern English. Kingdoms established by about AD 600.", page: 40 },
    { text: "St Patrick and St Columba came from Ireland (north); St Augustine came from Rome (south) and became the first Archbishop of Canterbury.", page: 40 },
    { text: "Vikings from Denmark and Norway first raided in AD 789; Alfred the Great defeated them.", page: 41 },
    { text: "1066: William of Normandy defeated Harold at Hastings, the last successful foreign invasion of England.", page: 41 },
  ],

  // ─────────────────────────────────────────────────────────────── Flashcards
  flashcards: [
    { id: "eb-f01", lessonId: "first-britons", page: 39, front: "Who were the first people to live in Britain?", back: "Hunter-gatherers, in the Stone Age." },
    { id: "eb-f02", lessonId: "first-britons", page: 39, front: "About how long ago did Britain become permanently separated from the continent?", back: "About 10,000 years ago." },
    { id: "eb-f03", lessonId: "first-britons", page: 39, front: "When did the first farmers arrive, and where did their ancestors probably come from?", back: "About 6,000 years ago, probably from south-east Europe." },
    { id: "eb-f04", lessonId: "first-britons", page: 39, front: "In which county is Stonehenge?", back: "Wiltshire, England." },
    { id: "eb-f05", lessonId: "first-britons", page: 39, front: "What was Stonehenge probably used for?", back: "A special gathering place for seasonal ceremonies." },
    { id: "eb-f06", lessonId: "first-britons", page: 39, front: "What is Skara Brae, and where is it?", back: "The best-preserved prehistoric village in northern Europe, on Orkney, off the north coast of Scotland." },
    { id: "eb-f07", lessonId: "bronze-and-iron", page: 39, front: "When did the Bronze Age begin?", back: "Around 4,000 years ago." },
    { id: "eb-f08", lessonId: "bronze-and-iron", page: 39, front: "What were round barrows?", back: "Bronze Age tombs in which people buried their dead." },
    { id: "eb-f09", lessonId: "bronze-and-iron", page: 39, front: "What is Maiden Castle?", back: "A very impressive Iron Age hill fort in Dorset." },
    { id: "eb-f10", lessonId: "bronze-and-iron", page: 39, front: "Which language family did Iron Age people speak?", back: "Celtic. Related languages are still spoken in parts of Wales, Scotland and Ireland." },
    { id: "eb-f11", lessonId: "bronze-and-iron", page: 39, front: "What does the handbook say marks the beginning of British history?", back: "The first coins minted in Britain by Iron Age people, some inscribed with the names of Iron Age kings." },
    { id: "eb-f12", lessonId: "romans", page: 39, front: "What happened in 55 BC?", back: "Julius Caesar led an unsuccessful Roman invasion of Britain." },
    { id: "eb-f13", lessonId: "romans", page: 39, front: "Who led the successful Roman invasion of AD 43?", back: "The Emperor Claudius." },
    { id: "eb-f14", lessonId: "romans", page: 39, front: "Who was Boudicca?", back: "Queen of the Iceni, in what is now eastern England, who fought against the Romans." },
    { id: "eb-f15", lessonId: "romans", page: 39, front: "Where is the statue of Boudicca?", back: "On Westminster Bridge in London, near the Houses of Parliament." },
    { id: "eb-f16", lessonId: "romans", page: 40, front: "Why did the Emperor Hadrian build his wall?", back: "To keep out the Picts (ancestors of the Scottish people) from the north." },
    { id: "eb-f17", lessonId: "romans", page: 40, front: "Name two forts on Hadrian's Wall.", back: "Housesteads and Vindolanda." },
    { id: "eb-f18", lessonId: "romans", page: 40, front: "How long did the Romans stay in Britain?", back: "400 years." },
    { id: "eb-f19", lessonId: "romans", page: 40, front: "Name three things the Romans introduced to Britain.", back: "Any three of: roads, public buildings, a structure of law, new plants and animals." },
    { id: "eb-f20", lessonId: "romans", page: 40, front: "When did the first Christian communities appear in Britain?", back: "In the 3rd and 4th centuries AD." },
    { id: "eb-f21", lessonId: "anglo-saxons", page: 40, front: "When did the Roman army leave Britain?", back: "AD 410." },
    { id: "eb-f22", lessonId: "anglo-saxons", page: 40, front: "Which three tribes invaded after the Romans left?", back: "The Jutes, the Angles and the Saxons." },
    { id: "eb-f23", lessonId: "anglo-saxons", page: 40, front: "By about when were Anglo-Saxon kingdoms established in Britain?", back: "About AD 600." },
    { id: "eb-f24", lessonId: "anglo-saxons", page: 40, front: "What was found at Sutton Hoo?", back: "The burial place of an Anglo-Saxon king, buried with treasure and armour in a ship covered by a mound of earth (Suffolk)." },
    { id: "eb-f25", lessonId: "anglo-saxons", page: 40, front: "Where did St Columba found a monastery?", back: "On the island of Iona, off the coast of what is now Scotland." },
    { id: "eb-f26", lessonId: "anglo-saxons", page: 40, front: "Who became the first Archbishop of Canterbury?", back: "St Augustine, who led missionaries from Rome." },
    { id: "eb-f27", lessonId: "vikings", page: 41, front: "Where did the Vikings come from, and when did they first visit Britain?", back: "Denmark and Norway; first in AD 789, to raid coastal towns." },
    { id: "eb-f28", lessonId: "vikings", page: 41, front: "What was the Danelaw?", back: "The area of Viking settlement in the east and north of England." },
    { id: "eb-f29", lessonId: "vikings", page: 41, front: "Who was the first Danish king of England?", back: "Cnut, also called Canute." },
    { id: "eb-f30", lessonId: "vikings", page: 41, front: "Under which king did people in the north unite, giving rise to the name Scotland?", back: "Kenneth MacAlpin." },
    { id: "eb-f31", lessonId: "norman-conquest", page: 41, front: "What happened at the Battle of Hastings in 1066?", back: "William, Duke of Normandy, defeated and killed Harold, the Saxon king of England." },
    { id: "eb-f32", lessonId: "norman-conquest", page: 41, front: "What is the Bayeux Tapestry?", back: "A great piece of embroidery commemorating the Battle of Hastings, still on view in France." },
    { id: "eb-f33", lessonId: "norman-conquest", page: 41, front: "Why is the Norman Conquest so significant?", back: "It was the last successful foreign invasion of England and changed government, social structures and the English language." },
    { id: "eb-f34", lessonId: "norman-conquest", page: 42, front: "What was the Domesday Book?", back: "William's record of England's towns and villages, the people, the landowners and their animals. It still exists." },
  ],

  // ──────────────────────────────────────────────────────────────── Questions
  questions: [
    // first-britons
    { id: "eb-q01", lessonId: "first-britons", page: 39, type: "single", prompt: "About how long ago did Britain become permanently separated from the continent?", options: ["About 2,000 years ago", "About 6,000 years ago", "About 10,000 years ago", "About 50,000 years ago"], answer: [2], explanation: "The Channel permanently separated Britain about 10,000 years ago. The first farmers arrived later, about 6,000 years ago." },
    { id: "eb-q02", lessonId: "first-britons", page: 39, type: "single", prompt: "Where is Stonehenge?", options: ["Dorset", "Wiltshire", "Orkney", "Suffolk"], answer: [1], explanation: "Stonehenge stands in the English county of Wiltshire. Maiden Castle is in Dorset; Skara Brae is on Orkney." },
    { id: "eb-q03", lessonId: "first-britons", page: 39, type: "truefalse", prompt: "Skara Brae is the best-preserved prehistoric village in northern Europe.", options: ["True", "False"], answer: [0], explanation: "True. Skara Brae on Orkney has helped archaeologists understand life near the end of the Stone Age." },
    { id: "eb-q04", lessonId: "first-britons", page: 39, type: "single", prompt: "Where did the ancestors of Britain's first farmers probably come from?", options: ["Scandinavia", "North Africa", "South-east Europe", "Ireland"], answer: [2], explanation: "The first farmers arrived about 6,000 years ago; their ancestors probably came from south-east Europe." },
    // bronze-and-iron
    { id: "eb-q05", lessonId: "bronze-and-iron", page: 39, type: "single", prompt: "What were round barrows?", options: ["Iron Age hill forts", "Bronze Age tombs", "Stone Age houses", "Roman roads"], answer: [1], explanation: "In the Bronze Age people lived in roundhouses and buried their dead in tombs called round barrows." },
    { id: "eb-q06", lessonId: "bronze-and-iron", page: 39, type: "single", prompt: "Where can you see a very impressive Iron Age hill fort?", options: ["Maiden Castle, Dorset", "Sutton Hoo, Suffolk", "Skara Brae, Orkney", "Vindolanda, Northumberland"], answer: [0], explanation: "Maiden Castle in Dorset is the hill fort the handbook names." },
    { id: "eb-q07", lessonId: "bronze-and-iron", page: 39, type: "truefalse", prompt: "Iron Age people spoke a language from the Celtic language family.", options: ["True", "False"], answer: [0], explanation: "True. Related languages are still spoken in parts of Wales, Scotland and Ireland." },
    { id: "eb-q08", lessonId: "bronze-and-iron", page: 39, type: "single", prompt: "According to the handbook, what marks the beginning of British history?", options: ["The building of Stonehenge", "The Roman invasion of AD 43", "The first coins minted in Britain", "The Battle of Hastings"], answer: [2], explanation: "Iron Age people made the first coins minted in Britain, some inscribed with the names of Iron Age kings. This marks the beginning of British history." },
    { id: "eb-q09", lessonId: "bronze-and-iron", page: 39, type: "multi", prompt: "Which TWO statements about the Bronze Age are correct?", options: ["People lived in roundhouses", "People built Hadrian's Wall", "People were skilled metalworkers in bronze and gold", "People minted the first coins"], answer: [0, 2], explanation: "Bronze Age people lived in roundhouses and made objects in bronze and gold. The first coins came in the Iron Age; Hadrian's Wall is Roman." },
    // romans
    { id: "eb-q10", lessonId: "romans", page: 39, type: "single", prompt: "In which year did Julius Caesar lead an unsuccessful invasion of Britain?", options: ["AD 43", "55 BC", "AD 410", "43 BC"], answer: [1], explanation: "Caesar's invasion was in 55 BC. The successful invasion under Claudius came in AD 43." },
    { id: "eb-q11", lessonId: "romans", page: 39, type: "single", prompt: "Who led the Roman invasion of AD 43?", options: ["Julius Caesar", "Hadrian", "Claudius", "Augustine"], answer: [2], explanation: "The Emperor Claudius led the successful invasion of AD 43." },
    { id: "eb-q12", lessonId: "romans", page: 39, type: "single", prompt: "Boudicca was queen of which tribe?", options: ["The Picts", "The Iceni", "The Angles", "The Jutes"], answer: [1], explanation: "Boudicca was queen of the Iceni, in what is now eastern England." },
    { id: "eb-q13", lessonId: "romans", page: 39, type: "single", prompt: "Where is there a statue of Boudicca?", options: ["Westminster Bridge, London", "Trafalgar Square, London", "Edinburgh Castle", "Hadrian's Wall"], answer: [0], explanation: "Her statue is on Westminster Bridge, near the Houses of Parliament." },
    { id: "eb-q14", lessonId: "romans", page: 40, type: "single", prompt: "Why was Hadrian's Wall built?", options: ["To keep out the Vikings", "To keep out the Picts", "To mark the border with Wales", "To defend London"], answer: [1], explanation: "Hadrian built the wall in the north of England to keep out the Picts, ancestors of the Scottish people." },
    { id: "eb-q15", lessonId: "romans", page: 40, type: "multi", prompt: "Which TWO are forts on Hadrian's Wall?", options: ["Housesteads", "Maiden Castle", "Vindolanda", "Sutton Hoo"], answer: [0, 2], explanation: "Housesteads and Vindolanda are forts on Hadrian's Wall. Maiden Castle is an Iron Age hill fort; Sutton Hoo is an Anglo-Saxon burial site." },
    { id: "eb-q16b", lessonId: "romans", page: 40, type: "truefalse", prompt: "The Romans conquered all of what is now Scotland.", options: ["True", "False"], answer: [1], explanation: "False. Areas of what is now Scotland were never conquered by the Romans." },
    { id: "eb-q17", lessonId: "romans", page: 40, type: "single", prompt: "How long did the Romans remain in Britain?", options: ["100 years", "200 years", "400 years", "600 years"], answer: [2], explanation: "The Romans stayed for 400 years." },
    { id: "eb-q18", lessonId: "romans", page: 40, type: "single", prompt: "When did the first Christian communities appear in Britain?", options: ["The 1st century BC", "The 3rd and 4th centuries AD", "The 7th century AD", "After 1066"], answer: [1], explanation: "The first Christian communities appeared during the 3rd and 4th centuries AD, in the Roman period." },
    // anglo-saxons
    { id: "eb-q16", lessonId: "anglo-saxons", page: 40, type: "single", prompt: "When did the Roman army leave Britain?", options: ["AD 43", "AD 410", "AD 600", "AD 789"], answer: [1], explanation: "The Roman army left in AD 410 to defend other parts of the empire and never returned." },
    { id: "eb-q19", lessonId: "anglo-saxons", page: 40, type: "multi", prompt: "Which TWO tribes invaded Britain after the Romans left?", options: ["The Angles", "The Normans", "The Saxons", "The Iceni"], answer: [0, 2], explanation: "The Jutes, the Angles and the Saxons invaded after the Romans. The Normans came in 1066; the Iceni were a British tribe." },
    { id: "eb-q20", lessonId: "anglo-saxons", page: 40, type: "single", prompt: "Where was an Anglo-Saxon king buried in a ship with treasure and armour?", options: ["Sutton Hoo, Suffolk", "Iona", "Canterbury", "Maiden Castle, Dorset"], answer: [0], explanation: "The ship burial is at Sutton Hoo in modern Suffolk." },
    { id: "eb-q21", lessonId: "anglo-saxons", page: 40, type: "single", prompt: "Who became the first Archbishop of Canterbury?", options: ["St Patrick", "St Columba", "St Augustine", "St David"], answer: [2], explanation: "St Augustine led missionaries from Rome and became the first Archbishop of Canterbury." },
    { id: "eb-q22", lessonId: "anglo-saxons", page: 40, type: "single", prompt: "St Columba founded a monastery on which island?", options: ["Orkney", "Iona", "The Isle of Man", "Anglesey"], answer: [1], explanation: "St Columba founded a monastery on Iona, off the coast of what is now Scotland." },
    { id: "eb-q22b", lessonId: "anglo-saxons", page: 40, type: "truefalse", prompt: "St Columba led missionaries from Rome.", options: ["True", "False"], answer: [1], explanation: "False. Columba was one of the missionaries from Ireland who spread Christianity in the north. Augustine led the mission from Rome." },
    { id: "eb-q22c", lessonId: "anglo-saxons", page: 40, type: "truefalse", prompt: "The languages of the Anglo-Saxons are the basis of modern-day English.", options: ["True", "False"], answer: [0], explanation: "True. The languages of the Jutes, Angles and Saxons are the basis of modern English." },
    // vikings
    { id: "eb-q23", lessonId: "vikings", page: 41, type: "single", prompt: "Where did the Vikings come from?", options: ["Normandy and Brittany", "Denmark and Norway", "Germany and the Netherlands", "Ireland and Scotland"], answer: [1], explanation: "The Vikings came from Denmark and Norway." },
    { id: "eb-q24", lessonId: "vikings", page: 41, type: "single", prompt: "When did the Vikings first visit Britain?", options: ["AD 410", "AD 600", "AD 789", "AD 1066"], answer: [2], explanation: "The Vikings first visited in AD 789 to raid coastal towns and take goods and slaves." },
    { id: "eb-q25", lessonId: "vikings", page: 41, type: "single", prompt: "Which king united the Anglo-Saxon kingdoms and defeated the Vikings?", options: ["Cnut", "Harold", "Alfred the Great", "Kenneth MacAlpin"], answer: [2], explanation: "The Anglo-Saxon kingdoms united under Alfred the Great, who defeated the Vikings." },
    { id: "eb-q26", lessonId: "vikings", page: 41, type: "single", prompt: "What was the Danelaw?", options: ["A Viking law code used in Scotland", "An area of Viking settlement in the east and north of England", "A Danish royal family", "A treaty between Wales and England"], answer: [1], explanation: "The Danelaw was the area where many Viking invaders settled, in the east and north of England." },
    { id: "eb-q27", lessonId: "vikings", page: 41, type: "multi", prompt: "Which TWO place names come from the Viking languages, according to the handbook?", options: ["Grimsby", "Canterbury", "Scunthorpe", "Winchester"], answer: [0, 2], explanation: "The handbook gives Grimsby and Scunthorpe as examples of place names in the Danelaw from the Viking languages." },
    { id: "eb-q28", lessonId: "vikings", page: 41, type: "single", prompt: "Who was the first Danish king of England?", options: ["Cnut", "Alfred", "Harold", "William"], answer: [0], explanation: "For a short period there were Danish kings; the first was Cnut, also called Canute." },
    { id: "eb-q28b", lessonId: "vikings", page: 41, type: "single", prompt: "In the north, the threat of Viking attack led people to unite under which king?", options: ["Robert the Bruce", "Kenneth MacAlpin", "Alfred the Great", "Cnut"], answer: [1], explanation: "People in the north united under Kenneth MacAlpin, and the term Scotland began to be used." },
    // norman-conquest
    { id: "eb-q29", lessonId: "norman-conquest", page: 41, type: "single", prompt: "Who won the Battle of Hastings in 1066?", options: ["Harold, the Saxon king", "William, Duke of Normandy", "Alfred the Great", "Cnut"], answer: [1], explanation: "William, Duke of Normandy, defeated Harold, who was killed. William became known as William the Conqueror." },
    { id: "eb-q30", lessonId: "norman-conquest", page: 41, type: "single", prompt: "Where can the Bayeux Tapestry be seen today?", options: ["The British Museum, London", "Westminster Abbey", "France", "Canterbury Cathedral"], answer: [2], explanation: "The Bayeux Tapestry, a great piece of embroidery commemorating the battle, can still be seen in France." },
    { id: "eb-q31", lessonId: "norman-conquest", page: 41, type: "truefalse", prompt: "The Norman Conquest was the last successful foreign invasion of England.", options: ["True", "False"], answer: [0], explanation: "True. It led to many changes in government, social structures and the English language." },
    { id: "eb-q32", lessonId: "norman-conquest", page: 41, type: "truefalse", prompt: "After 1066 the Normans invaded and conquered Scotland.", options: ["True", "False"], answer: [1], explanation: "False. The Normans took some land on the border but did not invade Scotland." },
    { id: "eb-q33", lessonId: "norman-conquest", page: 42, type: "single", prompt: "What was the Domesday Book?", options: ["A collection of Anglo-Saxon poems", "A record of England's towns, villages, people, landowners and animals", "The first English Bible", "A list of Viking raids"], answer: [1], explanation: "William sent people all over England to compile it. It still exists and shows English society just after the Conquest." },
    { id: "eb-q34", lessonId: "norman-conquest", page: 41, type: "single", prompt: "Which language, spoken by the new ruling class, influenced English after 1066?", options: ["Latin", "Norman French", "Old Norse", "Gaelic"], answer: [1], explanation: "Norman French, the language of the new ruling class, influenced the development of English." },
    { id: "eb-q35", lessonId: "norman-conquest", page: 39, type: "single", prompt: "Which is the correct order of arrivals in Britain?", options: ["Romans, Vikings, Anglo-Saxons, Normans", "Romans, Anglo-Saxons, Vikings, Normans", "Anglo-Saxons, Romans, Normans, Vikings", "Vikings, Romans, Anglo-Saxons, Normans"], answer: [1], explanation: "Romans (AD 43), Anglo-Saxons (after AD 410), Vikings (from AD 789), Normans (1066)." },
  ],

  flags: [
    { page: 98, text: "The PDF's summary page says St Columba and St Augustine \"led missionaries from Rome\". The main text (p. 40) says Columba came from Ireland. This site follows p. 40." },
    { page: 39, text: "This PDF prints the history sections in reverse order. The site follows the official handbook's chronological order (Early Britain first)." },
  ],
};
