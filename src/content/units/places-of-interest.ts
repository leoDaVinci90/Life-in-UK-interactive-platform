import type { Unit } from "../types";

/**
 * Unit 4.7 — Places of interest. Handbook (Britizen PDF) § 4.5, pp. 59–61.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const placesOfInterest: Unit = {
  id: "places-of-interest",
  number: "4.7",
  title: "Places of interest",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.5",
    pages: [59, 61],
  },
  status: "available",
  dek: "National parks, the National Trust and famous UK landmarks.",
  heroImageId: "places-giants-causeway",
  overview: [
    "The UK has a large network of public footpaths, 15 national parks and many museums and landmarks, most of them open to the public. Much of the countryside and many historic buildings are looked after by two charities: the National Trust and the National Trust for Scotland.",
    "The handbook then picks out ten famous landmarks, from Big Ben and the Tower of London to the Giant's Causeway and the Lake District. The test asks where each one is, what makes it special and the numbers attached to it: heights, areas, ages and dates.",
  ],
  objectives: [
    "Explain what national parks are and how many there are in England, Wales and Scotland.",
    "Describe the work of the National Trust and the National Trust for Scotland, including when the National Trust was founded.",
    "Locate the landmarks named in the handbook on a map of the UK.",
    "Recall the key facts and figures for each landmark (Big Ben, the London Eye, the Tower of London, the Eden Project, Edinburgh Castle, the Giant's Causeway, Loch Lomond, Snowdonia and the Lake District).",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "countryside-and-heritage",
      title: "Countryside, museums and the National Trust",
      dek: "Footpaths, 15 national parks, museums and the charities that look after Britain's heritage.",
      pages: [59],
      minutes: 4,
      heroImageId: "places-lake-district",
      recall: {
        question: "Before you read: when was the National Trust founded, and by how many people?",
        answer: "In 1895, by three volunteers. Today more than 61,000 volunteers help to keep it running.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The countryside",
          pages: [59],
          paragraphs: [
            "The UK has a large network of public footpaths in the countryside, and many opportunities for mountain biking, mountaineering and hill walking.",
            "There are 15 national parks in England, Wales and Scotland. They are areas of protected countryside that everyone can visit, and where people live, work and look after the landscape.",
          ],
        },
        {
          type: "prose",
          heading: "Museums and landmarks",
          pages: [59],
          paragraphs: [
            "There are many museums, from small community museums to large national and civic collections. Famous landmarks can be found in towns, cities and the countryside throughout the UK, and most are open to the public (generally for a charge).",
          ],
        },
        {
          type: "cards",
          heading: "Two heritage charities",
          cards: [
            {
              id: "national-trust",
              title: "The National Trust",
              meta: "England, Wales and Northern Ireland · founded 1895",
              summary: "A charity that preserves important buildings, coastline and countryside.",
              detail: [
                "The National Trust keeps many parts of the countryside and places of interest open in England, Wales and Northern Ireland.",
                "It was founded in 1895 by three volunteers. There are now more than 61,000 volunteers helping to keep it running.",
              ],
              page: 59,
              context: { text: "The three founders were Octavia Hill, Sir Robert Hunter and Canon Hardwicke Rawnsley." },
            },
            {
              id: "national-trust-scotland",
              title: "The National Trust for Scotland",
              meta: "Scotland",
              summary: "Scotland's equivalent charity.",
              detail: [
                "Like the National Trust, it is a charity that works to preserve important buildings, coastline and countryside.",
              ],
              page: 59,
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The figure of more than 61,000 National Trust volunteers dates from when the handbook was written. Learn the handbook's figure for the test.",
              verify: "Current volunteer numbers are on the National Trust's website.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "There are 15 national parks in England, Wales and Scotland.", page: 59 },
        { text: "National parks are protected countryside that everyone can visit, where people also live and work.", page: 59 },
        { text: "Most landmarks are open to the public, generally for a charge.", page: 59 },
        { text: "The National Trust (England, Wales, NI) and the National Trust for Scotland are charities.", page: 59 },
        { text: "The National Trust was founded in 1895 by three volunteers; it now has more than 61,000 volunteers.", page: 59 },
      ],
      mnemonics: [
        {
          title: "1895, three founders",
          device: "Eighteen-ninety-five, three people alive to the countryside.",
          explanation: "The National Trust was founded in 1895 by three volunteers.",
        },
        {
          title: "15 parks",
          device: "15 parks across 3 countries (not Northern Ireland).",
          explanation: "The handbook says there are 15 national parks in England, Wales and Scotland.",
        },
      ],
      checkQuestionIds: ["pi-q01", "pi-q02", "pi-q04"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "london-landmarks",
      title: "London landmarks",
      dek: "Big Ben and the Elizabeth Tower, the London Eye and the Tower of London.",
      pages: [59, 60],
      minutes: 5,
      heroImageId: "places-big-ben",
      recall: {
        question: "Before you read: is Big Ben the name of the clock tower, the clock or the bell?",
        answer: "Strictly, the great bell of the clock at the Houses of Parliament. Many people also call the clock Big Ben. The tower is the Elizabeth Tower.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Big Ben",
          pages: [59],
          paragraphs: [
            "Big Ben is the nickname for the great bell of the clock at the Houses of Parliament in London, and many people call the clock Big Ben as well.",
            "The clock is over 150 years old and is a popular tourist attraction. The clock tower was named the Elizabeth Tower in honour of Queen Elizabeth II's Diamond Jubilee in 2012.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "places-big-ben",
            kind: "photograph",
            caption: "The Elizabeth Tower at the Houses of Parliament, which houses the great bell known as Big Ben.",
          },
        },
        {
          type: "prose",
          heading: "The London Eye",
          pages: [60],
          paragraphs: [
            "The London Eye stands on the southern bank of the River Thames. It is a Ferris wheel 443 feet (135 metres) tall.",
            "It was originally built as part of the UK's celebration of the new millennium and continues to be an important part of New Year celebrations.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "places-london-eye", kind: "photograph", caption: "The London Eye on the South Bank of the Thames at twilight." },
        },
        {
          type: "prose",
          heading: "The Tower of London",
          pages: [60],
          paragraphs: [
            "The Tower of London was first built by William the Conqueror after he became king in 1066.",
            "Tours are given by the Yeoman Warders, also known as Beefeaters, who tell visitors about the building's history. Visitors can also see the Crown Jewels there.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "places-tower-of-london", kind: "photograph", caption: "The Tower of London seen from the River Thames, with the Norman White Tower at its centre." },
        },
        { type: "map", heading: "London landmarks", placeIds: ["places-big-ben", "places-london-eye", "places-tower-of-london"] },
      ],
      keyFacts: [
        { text: "Big Ben is the nickname for the great bell of the clock at the Houses of Parliament; many call the clock Big Ben too.", page: 59 },
        { text: "The clock is over 150 years old.", page: 59 },
        { text: "The clock tower was named the Elizabeth Tower for Queen Elizabeth II's Diamond Jubilee in 2012.", page: 59 },
        { text: "The London Eye is a Ferris wheel 443 feet (135 metres) tall on the south bank of the Thames, built for the millennium.", page: 60 },
        { text: "The Tower of London was first built by William the Conqueror after 1066; Yeoman Warders (Beefeaters) give tours; it holds the Crown Jewels.", page: 60 },
      ],
      mnemonics: [
        {
          title: "Bell, clock, tower",
          device: "Ben is the bell; Elizabeth is the tower.",
          explanation: "Big Ben is strictly the great bell (and popularly the clock). The tower was named the Elizabeth Tower in 2012.",
        },
        {
          title: "London Eye height",
          device: "1-3-5 metres: count up 1, 3, 5.",
          explanation: "The London Eye is 135 metres (443 feet) tall.",
        },
      ],
      checkQuestionIds: ["pi-q07", "pi-q09", "pi-q11"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "landmarks-around-the-uk",
      title: "Landmarks around the UK",
      dek: "The Eden Project, Edinburgh Castle, the Giant's Causeway and three great national parks.",
      pages: [59, 60, 61],
      minutes: 7,
      heroImageId: "places-giants-causeway",
      recall: {
        question: "Before you read: which is England's largest national park, and what is its biggest stretch of water?",
        answer: "The Lake District. Its biggest stretch of water is Windermere.",
      },
      blocks: [
        {
          type: "cards",
          heading: "Landmarks to know",
          cards: [
            {
              id: "eden-project",
              title: "The Eden Project",
              meta: "Cornwall, south-west England",
              summary: "Giant greenhouse-like biomes housing plants from all over the world.",
              detail: [
                "The Eden Project is in Cornwall, in the south west of England. Its biomes, which are like giant greenhouses, house plants from all over the world.",
                "It is also a charity that runs environmental and social projects internationally.",
              ],
              page: 59,
              imageId: "places-eden-project",
            },
            {
              id: "edinburgh-castle",
              title: "Edinburgh Castle",
              meta: "Edinburgh, Scotland",
              summary: "Dominates the Edinburgh skyline; history back to the early Middle Ages.",
              detail: [
                "The Castle is a dominant feature of the skyline in Edinburgh. It has a long history, dating back to the early Middle Ages.",
                "It is looked after by Historic Scotland, a Scottish government agency.",
              ],
              page: 59,
              imageId: "places-edinburgh-castle",
            },
            {
              id: "giants-causeway",
              title: "The Giant's Causeway",
              meta: "North-east coast of Northern Ireland",
              summary: "Columns of volcanic lava formed about 50 million years ago.",
              detail: [
                "Located on the north-east coast of Northern Ireland, the Giant's Causeway is a land formation of columns made from volcanic lava.",
                "It was formed about 50 million years ago. There are many legends about the Causeway and how it was formed.",
              ],
              page: 59,
              imageId: "places-giants-causeway",
            },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "places-giants-causeway", kind: "photograph", caption: "The basalt columns of the Giant's Causeway, County Antrim." },
        },
        {
          type: "cards",
          heading: "Three national parks",
          cards: [
            {
              id: "loch-lomond",
              title: "Loch Lomond and the Trossachs National Park",
              meta: "West of Scotland · 720 sq miles (1,865 km²)",
              summary: "Loch Lomond is the largest expanse of fresh water in mainland Britain.",
              detail: [
                "This national park covers 720 square miles (1,865 square kilometres) in the west of Scotland.",
                "Loch Lomond is the largest expanse of fresh water in mainland Britain and probably the best-known part of the park.",
              ],
              page: 59,
              imageId: "places-loch-lomond",
            },
            {
              id: "snowdonia",
              title: "Snowdonia",
              meta: "North Wales · 838 sq miles (2,170 km²)",
              summary: "A national park whose best-known landmark is Snowdon, the highest mountain in Wales.",
              detail: [
                "Snowdonia is a national park in North Wales covering 838 square miles (2,170 square kilometres).",
                "Its most well-known landmark is Snowdon, the highest mountain in Wales.",
              ],
              page: 60,
              imageId: "places-snowdon",
            },
            {
              id: "lake-district",
              title: "The Lake District",
              meta: "England · 885 sq miles (2,292 km²)",
              summary: "England's largest national park, famous for its lakes and mountains.",
              detail: [
                "The Lake District is England's largest national park, covering 885 square miles (2,292 square kilometres).",
                "It is famous for its lakes and mountains and is very popular with climbers, walkers and sailors.",
                "The biggest stretch of water is Windermere. In 2007 television viewers voted Wastwater as Britain's favourite view.",
              ],
              page: 61,
              imageId: "places-lake-district",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "places-snowdon", kind: "photograph", caption: "The Snowdon massif seen across Llynnau Mymbyr, Snowdonia National Park." },
            { imageId: "places-lake-district", kind: "photograph", caption: "Wastwater in the Lake District, voted Britain's favourite view in 2007." },
          ],
        },
        {
          type: "sequence",
          heading: "The three national parks by size",
          page: 61,
          steps: [
            { label: "Lake District (England)", detail: "885 sq miles (2,292 km²): England's largest national park." },
            { label: "Snowdonia (Wales)", detail: "838 sq miles (2,170 km²)." },
            { label: "Loch Lomond and the Trossachs (Scotland)", detail: "720 sq miles (1,865 km²)." },
          ],
        },
        {
          type: "map",
          heading: "Landmarks across the UK",
          placeIds: ["places-eden-project", "places-edinburgh-castle", "places-giants-causeway", "places-loch-lomond", "places-snowdon", "places-windermere", "places-wastwater"],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "Historic Scotland was merged into a new body, Historic Environment Scotland, in 2015. The handbook says Historic Scotland." },
            { text: "Since 2022 the national park authority uses the Welsh names Eryri (Snowdonia) and Yr Wyddfa (Snowdon). The handbook uses the English names." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Eden Project (Cornwall) has biomes, like giant greenhouses, with plants from all over the world; it is also a charity.", page: 59 },
        { text: "Edinburgh Castle dates back to the early Middle Ages and is looked after by Historic Scotland.", page: 59 },
        { text: "The Giant's Causeway (north-east coast of NI) is made of volcanic lava columns about 50 million years old.", page: 59 },
        { text: "Loch Lomond and the Trossachs: 720 sq miles; Loch Lomond is the largest expanse of fresh water in mainland Britain.", page: 59 },
        { text: "Snowdonia (North Wales): 838 sq miles; Snowdon is the highest mountain in Wales.", page: 60 },
        { text: "The Lake District is England's largest national park (885 sq miles); its biggest lake is Windermere.", page: 61 },
        { text: "In 2007 TV viewers voted Wastwater Britain's favourite view.", page: 61 },
      ],
      mnemonics: [
        {
          title: "Park sizes: Scotland, Wales, England",
          device: "720 < 838 < 885: smallest in Scotland, largest in England.",
          explanation: "Loch Lomond and the Trossachs is the smallest of the three, then Snowdonia, then the Lake District (England's largest).",
        },
        {
          title: "Two lakes, two records",
          device: "Windermere = the biggest water; Wastwater = the best view.",
          explanation: "Windermere is the Lake District's biggest stretch of water; Wastwater was voted Britain's favourite view in 2007.",
        },
        {
          title: "Causeway age",
          device: "Fifty million years of lava.",
          explanation: "The Giant's Causeway was formed about 50 million years ago from volcanic lava.",
        },
      ],
      checkQuestionIds: ["pi-q13", "pi-q15", "pi-q18"],
    },
  ],

  places: [
    { id: "places-big-ben", name: "Big Ben (Elizabeth Tower)", lat: 51.5007, lon: -0.1246, label: { side: "left", dy: -4 }, note: "Great bell of the clock at the Houses of Parliament. Tower renamed for the 2012 Diamond Jubilee.", page: 59, lessonId: "london-landmarks", era: "Landmark" },
    { id: "places-london-eye", name: "London Eye", lat: 51.5033, lon: -0.1196, label: { side: "right", dy: -8 }, note: "Ferris wheel, 443 ft (135 m), on the south bank of the Thames; built for the millennium.", page: 60, lessonId: "london-landmarks", era: "Landmark" },
    { id: "places-tower-of-london", name: "Tower of London", lat: 51.5081, lon: -0.0759, label: { side: "right", dy: 8 }, note: "First built by William the Conqueror. Beefeaters and the Crown Jewels.", page: 60, lessonId: "london-landmarks", era: "Landmark" },
    { id: "places-eden-project", name: "Eden Project", lat: 50.3601, lon: -4.7447, label: { side: "left" }, note: "Cornwall. Biomes housing plants from all over the world.", page: 59, lessonId: "landmarks-around-the-uk", era: "Landmark" },
    { id: "places-edinburgh-castle", name: "Edinburgh Castle", lat: 55.9486, lon: -3.1999, note: "Dominates the Edinburgh skyline; dates back to the early Middle Ages.", page: 59, lessonId: "landmarks-around-the-uk", era: "Landmark" },
    { id: "places-giants-causeway", name: "Giant's Causeway", lat: 55.2408, lon: -6.5116, label: { side: "left" }, note: "North-east coast of Northern Ireland. Volcanic lava columns, about 50 million years old.", page: 59, lessonId: "landmarks-around-the-uk", era: "Landmark" },
    { id: "places-loch-lomond", name: "Loch Lomond", lat: 56.08, lon: -4.6, label: { side: "left" }, note: "Loch Lomond and the Trossachs National Park (720 sq miles). Largest expanse of fresh water in mainland Britain.", page: 59, lessonId: "landmarks-around-the-uk", era: "National park" },
    { id: "places-snowdon", name: "Snowdon (Snowdonia)", lat: 53.0685, lon: -4.0763, label: { side: "left" }, note: "Snowdonia National Park, North Wales (838 sq miles). Snowdon is the highest mountain in Wales.", page: 60, lessonId: "landmarks-around-the-uk", era: "National park" },
    { id: "places-windermere", name: "Windermere", lat: 54.36, lon: -2.93, note: "Lake District, England's largest national park (885 sq miles). Its biggest stretch of water.", page: 61, lessonId: "landmarks-around-the-uk", era: "National park" },
    { id: "places-wastwater", name: "Wastwater", lat: 54.4383, lon: -3.2939, label: { side: "left" }, note: "Lake District. Voted Britain's favourite view by TV viewers in 2007.", page: 61, lessonId: "landmarks-around-the-uk", era: "National park" },
  ],

  keyFacts: [
    { text: "There are 15 national parks in England, Wales and Scotland.", page: 59 },
    { text: "The National Trust was founded in 1895 by three volunteers and now has more than 61,000 volunteers.", page: 59 },
    { text: "Big Ben is the great bell of the clock at the Houses of Parliament; the tower is the Elizabeth Tower (2012).", page: 59 },
    { text: "The Eden Project in Cornwall has biomes housing plants from all over the world.", page: 59 },
    { text: "Edinburgh Castle is looked after by Historic Scotland.", page: 59 },
    { text: "The Giant's Causeway, on Northern Ireland's north-east coast, formed about 50 million years ago.", page: 59 },
    { text: "Loch Lomond is the largest expanse of fresh water in mainland Britain.", page: 59 },
    { text: "The London Eye is 443 feet (135 metres) tall and was built for the millennium.", page: 60 },
    { text: "Snowdon, in Snowdonia, is the highest mountain in Wales.", page: 60 },
    { text: "The Tower of London was first built by William the Conqueror; Beefeaters give tours; the Crown Jewels are kept there.", page: 60 },
    { text: "The Lake District is England's largest national park; Windermere is its biggest lake; Wastwater was voted Britain's favourite view in 2007.", page: 61 },
  ],

  flashcards: [
    { id: "pi-f01", lessonId: "countryside-and-heritage", page: 59, front: "How many national parks are there in England, Wales and Scotland?", back: "15." },
    { id: "pi-f02", lessonId: "countryside-and-heritage", page: 59, front: "What is a national park?", back: "An area of protected countryside that everyone can visit, where people live, work and look after the landscape." },
    { id: "pi-f03", lessonId: "countryside-and-heritage", page: 59, front: "When, and by whom, was the National Trust founded?", back: "In 1895, by three volunteers." },
    { id: "pi-f04", lessonId: "countryside-and-heritage", page: 59, front: "How many volunteers help the National Trust today, according to the handbook?", back: "More than 61,000." },
    { id: "pi-f05", lessonId: "countryside-and-heritage", page: 59, front: "Which two charities keep much of the UK's countryside and places of interest open?", back: "The National Trust (England, Wales and Northern Ireland) and the National Trust for Scotland." },
    { id: "pi-f06", lessonId: "london-landmarks", page: 59, front: "What is Big Ben?", back: "The nickname for the great bell of the clock at the Houses of Parliament. Many people call the clock Big Ben too." },
    { id: "pi-f07", lessonId: "london-landmarks", page: 59, front: "What is the clock tower called, and why?", back: "The Elizabeth Tower, named in honour of Queen Elizabeth II's Diamond Jubilee in 2012." },
    { id: "pi-f08", lessonId: "london-landmarks", page: 60, front: "How tall is the London Eye, and why was it built?", back: "443 feet (135 metres). It was built to celebrate the new millennium." },
    { id: "pi-f09", lessonId: "london-landmarks", page: 60, front: "Who first built the Tower of London?", back: "William the Conqueror, after he became king in 1066." },
    { id: "pi-f10", lessonId: "london-landmarks", page: 60, front: "Who gives tours of the Tower of London, and what can you see there?", back: "The Yeoman Warders (Beefeaters). The Crown Jewels." },
    { id: "pi-f11", lessonId: "landmarks-around-the-uk", page: 59, front: "Where is the Eden Project, and what are its biomes?", back: "Cornwall, south-west England. Giant greenhouse-like structures housing plants from all over the world." },
    { id: "pi-f12", lessonId: "landmarks-around-the-uk", page: 59, front: "Who looks after Edinburgh Castle, according to the handbook?", back: "Historic Scotland, a Scottish government agency." },
    { id: "pi-f13", lessonId: "landmarks-around-the-uk", page: 59, front: "What is the Giant's Causeway made of, and how old is it?", back: "Columns of volcanic lava, formed about 50 million years ago." },
    { id: "pi-f14", lessonId: "landmarks-around-the-uk", page: 59, front: "What is special about Loch Lomond?", back: "It is the largest expanse of fresh water in mainland Britain (in Loch Lomond and the Trossachs National Park, 720 sq miles)." },
    { id: "pi-f15", lessonId: "landmarks-around-the-uk", page: 60, front: "What is Snowdonia's best-known landmark?", back: "Snowdon, the highest mountain in Wales. The park covers 838 square miles in North Wales." },
    { id: "pi-f16", lessonId: "landmarks-around-the-uk", page: 61, front: "Lake District: size, biggest lake, favourite view?", back: "England's largest national park, 885 square miles (2,292 km²). Biggest lake: Windermere. Wastwater was voted Britain's favourite view in 2007." },
  ],

  questions: [
    // countryside-and-heritage
    { id: "pi-q01", lessonId: "countryside-and-heritage", page: 59, type: "single", prompt: "How many national parks are there in England, Wales and Scotland?", options: ["10", "12", "15", "20"], answer: [2], explanation: "There are 15 national parks in England, Wales and Scotland." },
    { id: "pi-q02", lessonId: "countryside-and-heritage", page: 59, type: "single", prompt: "When was the National Trust founded?", options: ["1855", "1895", "1919", "1945"], answer: [1], explanation: "The National Trust was founded in 1895 by three volunteers." },
    { id: "pi-q03", lessonId: "countryside-and-heritage", page: 59, type: "truefalse", prompt: "The National Trust was founded by three volunteers.", options: ["True", "False"], answer: [0], explanation: "True. There are now more than 61,000 volunteers helping to run it." },
    { id: "pi-q04", lessonId: "countryside-and-heritage", page: 59, type: "single", prompt: "Which organisation preserves buildings, coastline and countryside in Scotland?", options: ["English Heritage", "The National Trust for Scotland", "Cadw", "The Eden Project"], answer: [1], explanation: "The National Trust covers England, Wales and Northern Ireland; the National Trust for Scotland covers Scotland. Both are charities." },
    { id: "pi-q05", lessonId: "countryside-and-heritage", page: 59, type: "truefalse", prompt: "National parks are areas where nobody is allowed to live or work.", options: ["True", "False"], answer: [1], explanation: "False. They are protected countryside that everyone can visit, and where people live, work and look after the landscape." },
    { id: "pi-q06", lessonId: "countryside-and-heritage", page: 59, type: "single", prompt: "According to the handbook, about how many volunteers help to keep the National Trust running?", options: ["More than 6,100", "More than 16,000", "More than 61,000", "More than 610,000"], answer: [2], explanation: "There are now more than 61,000 volunteers." },
    // london-landmarks
    { id: "pi-q07", lessonId: "london-landmarks", page: 59, type: "single", prompt: "What is 'Big Ben' strictly the nickname for?", options: ["The Houses of Parliament", "The great bell of the clock at the Houses of Parliament", "Westminster Abbey", "The London Eye"], answer: [1], explanation: "Big Ben is the nickname for the great bell of the clock. Many people call the clock Big Ben as well." },
    { id: "pi-q08", lessonId: "london-landmarks", page: 59, type: "single", prompt: "Why was the clock tower at the Houses of Parliament named the Elizabeth Tower?", options: ["For Elizabeth I's victory over the Armada", "For Queen Elizabeth II's coronation in 1953", "For Queen Elizabeth II's Diamond Jubilee in 2012", "For the new millennium"], answer: [2], explanation: "It was named in honour of Queen Elizabeth II's Diamond Jubilee in 2012." },
    { id: "pi-q09", lessonId: "london-landmarks", page: 60, type: "single", prompt: "How tall is the London Eye?", options: ["135 metres (443 feet)", "100 metres (328 feet)", "443 metres (1,453 feet)", "235 metres (771 feet)"], answer: [0], explanation: "The London Eye is a Ferris wheel 443 feet (135 metres) tall." },
    { id: "pi-q10", lessonId: "london-landmarks", page: 60, type: "truefalse", prompt: "The London Eye was originally built as part of the UK's celebration of the new millennium.", options: ["True", "False"], answer: [0], explanation: "True. It continues to be an important part of New Year celebrations." },
    { id: "pi-q11", lessonId: "london-landmarks", page: 60, type: "single", prompt: "Who first built the Tower of London?", options: ["Henry VIII", "William the Conqueror", "Alfred the Great", "Edward I"], answer: [1], explanation: "It was first built by William the Conqueror after he became king in 1066." },
    { id: "pi-q12", lessonId: "london-landmarks", page: 60, type: "multi", prompt: "Which TWO statements about the Tower of London are correct?", options: ["Tours are given by the Yeoman Warders (Beefeaters)", "It stands on the south bank next to the London Eye", "The Crown Jewels can be seen there", "It was built for the millennium"], answer: [0, 2], explanation: "The Yeoman Warders, also known as Beefeaters, give tours, and visitors can see the Crown Jewels." },
    { id: "pi-q12b", lessonId: "london-landmarks", page: 59, type: "truefalse", prompt: "The clock at the Houses of Parliament is over 150 years old.", options: ["True", "False"], answer: [0], explanation: "True. The clock is over 150 years old and is a popular tourist attraction." },
    // landmarks-around-the-uk
    { id: "pi-q13", lessonId: "landmarks-around-the-uk", page: 59, type: "single", prompt: "Where is the Eden Project?", options: ["Devon", "Cornwall", "Kent", "Cumbria"], answer: [1], explanation: "The Eden Project is in Cornwall, in the south west of England." },
    { id: "pi-q14", lessonId: "landmarks-around-the-uk", page: 59, type: "single", prompt: "About how long ago was the Giant's Causeway formed?", options: ["5,000 years ago", "500,000 years ago", "50 million years ago", "500 million years ago"], answer: [2], explanation: "It was formed about 50 million years ago, from volcanic lava." },
    { id: "pi-q15", lessonId: "landmarks-around-the-uk", page: 59, type: "single", prompt: "What is the largest expanse of fresh water in mainland Britain?", options: ["Windermere", "Loch Ness", "Loch Lomond", "Wastwater"], answer: [2], explanation: "Loch Lomond, in Loch Lomond and the Trossachs National Park in the west of Scotland." },
    { id: "pi-q16", lessonId: "landmarks-around-the-uk", page: 60, type: "single", prompt: "Which national park contains the highest mountain in Wales?", options: ["The Brecon Beacons", "Snowdonia", "The Peak District", "Pembrokeshire Coast"], answer: [1], explanation: "Snowdonia, in North Wales; its best-known landmark is Snowdon." },
    { id: "pi-q17", lessonId: "landmarks-around-the-uk", page: 61, type: "single", prompt: "Which is England's largest national park?", options: ["The Peak District", "Dartmoor", "The Lake District", "The New Forest"], answer: [2], explanation: "The Lake District, covering 885 square miles (2,292 square kilometres)." },
    { id: "pi-q18", lessonId: "landmarks-around-the-uk", page: 61, type: "single", prompt: "In 2007, television viewers voted which place as Britain's favourite view?", options: ["Windermere", "Wastwater", "The Giant's Causeway", "Loch Lomond"], answer: [1], explanation: "Wastwater, in the Lake District. Windermere is the Lake District's biggest stretch of water." },
    { id: "pi-q19", lessonId: "landmarks-around-the-uk", page: 59, type: "truefalse", prompt: "The Giant's Causeway is on the north-east coast of Northern Ireland.", options: ["True", "False"], answer: [0], explanation: "True. It is a formation of columns made from volcanic lava." },
    { id: "pi-q20", lessonId: "landmarks-around-the-uk", page: 59, type: "single", prompt: "According to the handbook, who looks after Edinburgh Castle?", options: ["The National Trust for Scotland", "Historic Scotland", "The Royal Family", "Edinburgh City Council"], answer: [1], explanation: "Historic Scotland, a Scottish government agency (since 2015 part of Historic Environment Scotland)." },
    { id: "pi-q21", lessonId: "landmarks-around-the-uk", page: 61, type: "multi", prompt: "Which TWO statements about the Lake District are correct?", options: ["Its biggest stretch of water is Windermere", "It is in North Wales", "It is popular with climbers, walkers and sailors", "It contains Loch Lomond"], answer: [0, 2], explanation: "The Lake District is in England; Windermere is its biggest lake and it is popular with climbers, walkers and sailors." },
  ],

  flags: [
    { page: 59, text: "Edinburgh Castle is said to be looked after by Historic Scotland. Historic Scotland became part of Historic Environment Scotland in 2015." },
    { page: 59, text: "\"More than 61,000 volunteers\" for the National Trust is the figure from when the handbook was written and may have changed." },
    { page: 60, text: "Since 2022 the Snowdonia National Park Authority uses the Welsh names Eryri and Yr Wyddfa (Snowdon). The handbook uses the English names." },
  ],
};
