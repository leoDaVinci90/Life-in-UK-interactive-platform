import type { Unit } from "../types";

/**
 * Unit 4.6 — Leisure. Handbook (Britizen PDF) § 4.4, pp. 54–58.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const leisure: Unit = {
  id: "leisure",
  number: "4.6",
  title: "Leisure",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.4",
    pages: [54, 58],
  },
  status: "available",
  dek: "Gardening, food, film, comedy, TV licences, pubs, betting and pets.",
  heroImageId: "leisure-kew",
  overview: [
    "This section of the handbook describes how people in the UK spend their free time: gardening and famous gardens, shopping, cooking and the traditional foods of each nation, the British film industry, comedy and satire, television and radio, social networking, pubs, betting and pets.",
    "Much of it is practical everyday knowledge that the test likes to check: who needs a TV licence and how much the fine is, the ages for drinking in pubs and for betting, and what dog owners must do in public. There are also plenty of names to learn: gardens, films and their directors, actors, comedians and programmes.",
  ],
  objectives: [
    "Name famous gardens in each country of the UK and the flower associated with each nation.",
    "Match traditional foods to England, Wales, Scotland and Northern Ireland.",
    "Outline the history of British cinema and name key directors, actors and films.",
    "Describe the traditions of British comedy and satire.",
    "Explain the rules on TV licences, how the BBC is funded, and the ages for drinking, betting and the National Lottery.",
    "State the legal duties of pet owners.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "gardens-shopping-food",
      title: "Gardens, shopping and food",
      dek: "Allotments, famous gardens, national flowers, town centres and the traditional food of each nation.",
      pages: [54, 55],
      minutes: 6,
      heroImageId: "leisure-kew",
      recall: {
        question: "Before you read: which nation of the UK is haggis associated with, and what is it made of?",
        answer: "Scotland. Haggis is a sheep's stomach stuffed with offal, suet, onions and oatmeal.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Gardening",
          pages: [54],
          paragraphs: [
            "Many people have gardens at home and spend their free time looking after them. Some rent extra land called an allotment, where they grow fruit and vegetables.",
            "Gardening and flower shows range from major national exhibitions to small local events, and many towns have garden centres selling plants and equipment.",
          ],
        },
        {
          type: "cards",
          heading: "Famous gardens to visit",
          cards: [
            { id: "gardens-england", title: "England", meta: "Kew Gardens · Sissinghurst · Hidcote", summary: "Kew Gardens, Sissinghurst and Hidcote.", detail: ["The handbook names Kew Gardens, Sissinghurst and Hidcote in England."], page: 54, imageId: "leisure-kew" },
            { id: "gardens-scotland", title: "Scotland", meta: "Crathes Castle · Inveraray Castle", summary: "Crathes Castle and Inveraray Castle.", detail: ["The handbook names Crathes Castle and Inveraray Castle in Scotland."], page: 54 },
            { id: "gardens-wales", title: "Wales", meta: "Bodnant Garden", summary: "Bodnant Garden.", detail: ["The handbook names Bodnant Garden in Wales."], page: 54, imageId: "leisure-bodnant" },
            { id: "gardens-ni", title: "Northern Ireland", meta: "Mount Stewart", summary: "Mount Stewart.", detail: ["The handbook names Mount Stewart in Northern Ireland."], page: 54 },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "leisure-kew", kind: "photograph", caption: "The Palm House at Kew Gardens, London." },
            { imageId: "leisure-sissinghurst", kind: "aerial photograph", caption: "Sissinghurst Castle Garden, Kent, from the air." },
            { imageId: "leisure-mount-stewart", kind: "photograph", caption: "The gardens at Mount Stewart, County Down." },
          ],
        },
        {
          type: "map",
          heading: "Famous gardens on the map",
          placeIds: ["leisure-kew", "leisure-sissinghurst", "leisure-hidcote", "leisure-crathes", "leisure-inveraray", "leisure-bodnant", "leisure-mount-stewart"],
        },
        {
          type: "prose",
          heading: "National flowers",
          pages: [54],
          paragraphs: [
            "Each country of the UK has a flower particularly associated with it, sometimes worn on national saints' days: the rose for England, the thistle for Scotland, the daffodil for Wales and the shamrock for Northern Ireland.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "In this PDF the list of national flowers appears only as pictures, not in the text. The official handbook lists: England, the rose; Scotland, the thistle; Wales, the daffodil; Northern Ireland, the shamrock.",
            },
          ],
        },
        {
          type: "prose",
          heading: "Shopping",
          pages: [54],
          paragraphs: [
            "Most towns and cities have a central shopping area called the town centre. Undercover shopping centres are also common, in town centres or on the outskirts.",
            "Most shops are open seven days a week, although trading hours on Sundays and public holidays are generally reduced. Many towns also have markets on one or more days a week, where stallholders sell a variety of goods.",
          ],
        },
        {
          type: "prose",
          heading: "Cooking and food",
          pages: [54],
          paragraphs: [
            "Many people enjoy cooking and often invite each other to their homes for dinner. A wide variety of food is eaten in the UK because of the country's rich cultural heritage and diverse population.",
          ],
        },
        {
          type: "cards",
          heading: "Traditional foods",
          cards: [
            { id: "food-england", title: "England: roast beef", meta: "Also: fish and chips", summary: "Roast beef with potatoes, vegetables and Yorkshire puddings.", detail: ["Roast beef is served with potatoes, vegetables, Yorkshire puddings (batter baked in the oven) and other accompaniments.", "Fish and chips are also popular."], page: 55, imageId: "leisure-fish-and-chips" },
            { id: "food-wales", title: "Wales: Welsh cakes", summary: "A snack made from flour, dried fruits and spices.", detail: ["Welsh cakes are a traditional Welsh snack made from flour, dried fruits and spices, served hot or cold."], page: 55, imageId: "leisure-welsh-cakes" },
            { id: "food-scotland", title: "Scotland: haggis", summary: "A sheep's stomach stuffed with offal, suet, onions and oatmeal.", detail: ["Haggis is a sheep's stomach stuffed with offal, suet, onions and oatmeal."], page: 55, imageId: "leisure-haggis" },
            { id: "food-ni", title: "Northern Ireland: Ulster fry", summary: "A fried meal including soda bread and potato bread.", detail: ["The Ulster fry is a fried meal with bacon, eggs, sausage, black pudding, white pudding, tomatoes, mushrooms, soda bread and potato bread."], page: 55, imageId: "leisure-ulster-fry" },
          ],
        },
      ],
      keyFacts: [
        { text: "An allotment is extra land some people rent to grow fruit and vegetables.", page: 54 },
        { text: "Famous gardens: Kew, Sissinghurst, Hidcote (England); Crathes Castle, Inveraray Castle (Scotland); Bodnant (Wales); Mount Stewart (NI).", page: 54 },
        { text: "National flowers: rose (England), thistle (Scotland), daffodil (Wales), shamrock (Northern Ireland).", page: 54 },
        { text: "Most shops open seven days a week, with reduced hours on Sundays and public holidays.", page: 54 },
        { text: "Traditional foods: roast beef with Yorkshire pudding (England), Welsh cakes (Wales), haggis (Scotland), Ulster fry (NI).", page: 55 },
      ],
      mnemonics: [
        {
          title: "Gardens by nation",
          device: "England has three (Kew, Sissinghurst, Hidcote); Scotland has two castles (Crathes, Inveraray); Wales and NI one each (Bodnant, Mount Stewart).",
          explanation: "Counting 3-2-1-1 makes it easier to spot a garden placed in the wrong country.",
        },
        {
          title: "Flowers",
          device: "Rose-English, Thistle-Scottish, Daffodil-Welsh (Dafydd = David), Shamrock-Irish.",
          explanation: "Dafydd is Welsh for David, the patron saint of Wales; daffodils are worn on St David's Day.",
        },
      ],
      checkQuestionIds: ["le-q01", "le-q03", "le-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "british-film",
      title: "British film",
      dek: "From the first screenings of 1896 to Chaplin, Hitchcock, Ealing, Bond, Harry Potter and Wallace and Gromit.",
      pages: [55, 56, 57],
      minutes: 7,
      heroImageId: "leisure-chaplin",
      recall: {
        question: "Before you read: when were films first shown publicly in the UK?",
        answer: "In 1896.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The early years",
          pages: [55, 56],
          paragraphs: [
            "The UK has had a major influence on modern cinema. Films were first shown publicly in the UK in 1896 and quickly became popular. From the start, British film makers were known for clever special effects, which remain an area of British expertise.",
            "From the early days, British actors worked in both the UK and the USA. Sir Charles (Charlie) Chaplin became famous in silent movies for his tramp character and was one of many British actors to make a career in Hollywood.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "leisure-chaplin", kind: "photograph", caption: "Charlie Chaplin, publicity photograph from the silent-film era." },
            { imageId: "leisure-hitchcock", kind: "photograph", caption: "Alfred Hitchcock, publicity photograph." },
          ],
        },
        {
          type: "prose",
          heading: "Studios, directors and comedies",
          pages: [56],
          paragraphs: [
            "British studios flourished in the 1930s. Eminent directors included Sir Alexander Korda and Sir Alfred Hitchcock, who later left for Hollywood and remained an important director until his death in 1980.",
            "During the Second World War, British films such as In Which We Serve played an important part in boosting morale. Later, directors including Sir David Lean and Ridley Scott found great success in the UK and internationally.",
            "The 1950s and 1960s were a high point for British comedies, including Passport to Pimlico, The Ladykillers and, later, the Carry On films.",
          ],
        },
        {
          type: "prose",
          heading: "British film today",
          pages: [57],
          paragraphs: [
            "Many films now produced in the UK are made by foreign companies using British expertise. Some of the most commercially successful films of all time, including the two highest-grossing film franchises (Harry Potter and James Bond), have been produced in the UK.",
            "Ealing Studios has a claim to being the oldest continuously working film studio facility in the world. Britain remains particularly strong in special effects and animation: Nick Park has won four Oscars for his animated films, including three for films featuring Wallace and Gromit.",
            "Actors such as Sir Laurence Olivier, David Niven, Sir Rex Harrison and Richard Burton starred in many popular films. Recent British Oscar winners include Colin Firth, Sir Anthony Hopkins, Dame Judi Dench, Kate Winslet and Tilda Swinton.",
            "The annual British Academy Film Awards, hosted by the British Academy of Film and Television Arts (BAFTA), are the British equivalent of the Oscars.",
          ],
        },
        {
          type: "sequence",
          heading: "Some famous British films",
          page: 57,
          steps: [
            { label: "The 39 Steps (1935)", detail: "Directed by Alfred Hitchcock." },
            { label: "Brief Encounter (1945)", detail: "Directed by David Lean." },
            { label: "The Third Man (1949)", detail: "Directed by Carol Reed." },
            { label: "The Belles of St Trinian's (1954)", detail: "Directed by Frank Launder." },
            { label: "Lawrence of Arabia (1962)", detail: "Directed by David Lean." },
            { label: "Women in Love (1969)", detail: "Directed by Ken Russell." },
            { label: "Don't Look Now (1973)", detail: "Directed by Nicolas Roeg." },
            { label: "Chariots of Fire (1981)", detail: "Directed by Hugh Hudson." },
            { label: "The Killing Fields (1984)", detail: "Directed by Roland Joffé." },
            { label: "Four Weddings and a Funeral (1994)", detail: "Directed by Mike Newell." },
            { label: "Touching the Void (2003)", detail: "Directed by Kevin Macdonald." },
          ],
        },
        { type: "map", heading: "Ealing Studios", placeIds: ["leisure-ealing-studios"] },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "This PDF spells the actor's name \"Sir Lawrence Olivier\" on p. 57 but \"Laurence Olivier\" on p. 45. The correct spelling is Laurence." },
            { text: "The claim that Harry Potter and James Bond are the two highest-grossing film franchises was true in 2013 but has since been overtaken (for example by the Marvel films). Learn the handbook's statement for the test." },
          ],
        },
      ],
      keyFacts: [
        { text: "Films were first shown publicly in the UK in 1896.", page: 56 },
        { text: "Charlie Chaplin became famous in silent movies for his tramp character and worked in Hollywood.", page: 56 },
        { text: "British studios flourished in the 1930s: directors Sir Alexander Korda and Sir Alfred Hitchcock (died 1980).", page: 56 },
        { text: "In Which We Serve boosted morale during the Second World War.", page: 56 },
        { text: "1950s–60s comedies: Passport to Pimlico, The Ladykillers, the Carry On films.", page: 56 },
        { text: "Ealing Studios may be the oldest continuously working film studio in the world.", page: 57 },
        { text: "Nick Park has won four Oscars, three for Wallace and Gromit films.", page: 57 },
        { text: "The BAFTAs are the British equivalent of the Oscars.", page: 57 },
      ],
      mnemonics: [
        {
          title: "David Lean's two",
          device: "Lean made a Brief Encounter, then went to Arabia.",
          explanation: "David Lean directed Brief Encounter (1945) and Lawrence of Arabia (1962): the only director with two films on the handbook's list.",
        },
        {
          title: "Nick Park's Oscars",
          device: "Four Oscars, three with a dog.",
          explanation: "Nick Park has won four Oscars, three of them for Wallace and Gromit films.",
        },
      ],
      checkQuestionIds: ["le-q08", "le-q10", "le-q12"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "comedy-tv-radio",
      title: "Comedy, TV and radio",
      dek: "Jesters to Monty Python, soap operas, the TV licence and how the BBC is funded.",
      pages: [57, 58],
      minutes: 6,
      heroImageId: "leisure-punch",
      recall: {
        question: "Before you read: what is the maximum fine for watching TV without a TV licence?",
        answer: "Up to £1,000.",
      },
      blocks: [
        {
          type: "prose",
          heading: "British comedy",
          pages: [57],
          paragraphs: [
            "Comedy, satire and the ability to laugh at ourselves are an important part of the UK character. Medieval kings and rich nobles had jesters who told jokes and made fun of people at Court, and Shakespeare included comic characters in his plays.",
            "In the 18th century, political cartoons attacking prominent politicians, and sometimes the monarch or other members of the Royal Family, became increasingly popular. In the 19th century satirical magazines appeared; the most famous was Punch, first published in the 1840s. Today political cartoons still appear in newspapers, and magazines such as Private Eye continue the tradition of satire.",
            "Comedians were a popular feature of the music hall, a form of variety theatre that was very common until television became the leading form of entertainment. Some music hall performers of the 1940s and 1950s, such as Morecambe and Wise, became television stars.",
            "Television comedy developed its own style. Situation comedies (sitcoms), often about family life and relationships at work, remain popular. Satire stayed important, with That Was The Week That Was in the 1960s and Spitting Image in the 1980s and 1990s. In 1969 Monty Python's Flying Circus introduced a new type of progressive comedy. Stand-up comedy, where a solo comedian talks to a live audience, has become popular again in recent years.",
          ],
        },
        {
          type: "figure",
          figure: { imageId: "leisure-punch", kind: "illustration", caption: "A cover of Punch, the most famous British satirical magazine of the 19th century." },
        },
        {
          type: "sequence",
          heading: "Comedy through the centuries",
          page: 57,
          steps: [
            { label: "Middle Ages", detail: "Jesters at the courts of kings and nobles." },
            { label: "Shakespeare", detail: "Comic characters in his plays." },
            { label: "18th century", detail: "Political cartoons attacking politicians and even the monarch." },
            { label: "19th century", detail: "Satirical magazines; Punch first published in the 1840s." },
            { label: "1940s–50s", detail: "Music hall comedians such as Morecambe and Wise move to TV." },
            { label: "1960s", detail: "That Was The Week That Was; Monty Python's Flying Circus (1969)." },
            { label: "1980s–90s", detail: "Spitting Image." },
          ],
        },
        {
          type: "prose",
          heading: "Television and radio",
          pages: [57, 58],
          paragraphs: [
            "Many TV channels are available: some free, some by paid subscription. Popular programmes include soap operas such as Coronation Street and EastEnders. Scotland has some Scotland-specific programmes and a Gaelic-language channel; Wales has a Welsh-language channel; and there are programmes specific to Northern Ireland and some broadcast in Irish Gaelic.",
            "There are national, city and regional radio stations, some playing particular types of music and some broadcasting in regional languages such as Welsh or Gaelic. BBC radio is funded by TV licences; other stations are funded through advertisements.",
          ],
        },
        {
          type: "cards",
          heading: "The TV licence and the BBC",
          cards: [
            {
              id: "tv-licence",
              title: "The TV licence",
              meta: "Required by law",
              summary: "Anyone watching TV on any device must have one. Fine: up to £1,000.",
              detail: [
                "Everyone in the UK with a TV, computer or other device that can be used for watching TV must have a television licence.",
                "One licence covers all the equipment in one home, except where people rent rooms in a shared house with separate tenancy agreements: they must each buy a licence.",
                "People over 75 can apply for a free licence, and blind people can get a 50% discount.",
                "You can be fined up to £1,000 for watching TV without a licence.",
              ],
              page: 57,
            },
            {
              id: "bbc",
              title: "The BBC",
              meta: "British Broadcasting Corporation",
              summary: "A public service broadcaster paid for by the TV licence.",
              detail: [
                "Money from TV licences pays for the BBC, a British public service broadcaster providing television and radio programmes.",
                "The handbook calls it the largest broadcaster in the world and the only wholly state-funded media organisation that is independent of government.",
                "Other UK channels are mainly funded through advertisements and subscriptions.",
              ],
              page: 58,
            },
          ],
        },
        {
          type: "prose",
          heading: "Social networking",
          pages: [58],
          paragraphs: [
            "Social networking websites such as Facebook and Twitter are a popular way to keep in touch with friends, organise social events and share photos, videos and opinions. Many people use them on their mobile phones when out and about.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Since August 2020 a free TV licence for over-75s is only available to people who receive Pension Credit. The handbook (2013) says anyone over 75 can apply. Learn the handbook's version for the test.",
              verify: "Check current rules at tvlicensing.co.uk.",
            },
            { text: "Twitter was renamed X in 2023." },
          ],
        },
      ],
      keyFacts: [
        { text: "Punch, the most famous satirical magazine, was first published in the 1840s; Private Eye continues the tradition.", page: 57 },
        { text: "Morecambe and Wise moved from the music hall to television.", page: 57 },
        { text: "Satire: That Was The Week That Was (1960s), Spitting Image (1980s–90s); Monty Python's Flying Circus began in 1969.", page: 57 },
        { text: "Popular soap operas: Coronation Street and EastEnders.", page: 57 },
        { text: "Anyone watching TV on any device needs a TV licence; one covers a whole home (but separate tenancies need separate licences).", page: 57 },
        { text: "Over-75s can apply for a free licence; blind people get 50% off; the fine is up to £1,000.", page: 57 },
        { text: "TV licences pay for the BBC, which is independent of government.", page: 58 },
      ],
      mnemonics: [
        {
          title: "Licence numbers",
          device: "75, 50, 1,000: free at 75, half price if blind, fine up to a thousand.",
          explanation: "The three TV licence numbers in the handbook.",
        },
        {
          title: "Satire timeline",
          device: "Punch (1840s) → TW3 (1960s) → Python (1969) → Spitting Image (1980s).",
          explanation: "Putting the satire milestones in order helps with 'which decade' questions.",
        },
      ],
      checkQuestionIds: ["le-q15", "le-q17", "le-q19"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "pubs-betting-pets",
      title: "Pubs, betting and pets",
      dek: "Age limits for drinking and gambling, pub opening hours and the rules for pet owners.",
      pages: [58],
      minutes: 4,
      heroImageId: "leisure-pub",
      recall: {
        question: "Before you read: at what age can someone drink wine or beer with a meal in a restaurant, if they are with someone over 18?",
        answer: "16.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Pubs and night clubs",
          pages: [58],
          paragraphs: [
            "Public houses (pubs) are an important part of UK social culture. Most communities have a 'local' pub that is a natural focal point for social activities. Pub quizzes are popular, and pool and darts are traditional pub games.",
            "You must be 18 or over to buy alcohol in a pub or night club, but people under 18 may be allowed into some pubs with an adult. At 16, people can drink wine or beer with a meal in a hotel or restaurant (including eating areas in pubs) as long as they are with someone over 18.",
            "Pubs are usually open during the day from 11.00 am (12 noon on Sundays). Night clubs with dancing and music usually open and close later. The licensee decides the opening hours.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "leisure-pub", kind: "photograph", caption: "The Village Pub in Barnsley, Gloucestershire: a traditional English village pub." },
        },
        {
          type: "prose",
          heading: "Betting and gambling",
          pages: [58],
          paragraphs: [
            "People often enjoy a gamble on sports or other events, and there are casinos in many places. You must be 18 to go into betting shops or gambling clubs.",
            "There is a National Lottery with draws every week. You can enter by buying a ticket or a scratch card. People under 18 are not allowed to take part.",
          ],
        },
        {
          type: "prose",
          heading: "Pets",
          pages: [58],
          paragraphs: [
            "Many people have pets such as cats or dogs, for company or because they enjoy looking after them. It is against the law to treat a pet cruelly or to neglect it.",
            "All dogs in public places must wear a collar showing the owner's name and address. The owner must keep the dog under control and clean up after it in public places.",
            "Vaccinations and medical treatment for animals are available from veterinary surgeons (vets), and there are charities which may help people who cannot afford a vet.",
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The minimum age for the National Lottery rose from 16 to 18 in April 2021. This PDF has been updated to say 18; the official 3rd edition (2013) says 16. Some practice materials still use 16.",
              verify: "Check which handbook edition your test is based on.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "You must be 18 to buy alcohol in a pub or night club.", page: 58 },
        { text: "At 16 you can drink wine or beer with a meal in a hotel or restaurant if with someone over 18.", page: 58 },
        { text: "Pubs usually open from 11.00 am (12 noon on Sundays); the licensee decides the hours.", page: 58 },
        { text: "You must be 18 to enter betting shops or gambling clubs.", page: 58 },
        { text: "National Lottery draws are weekly; people under 18 cannot take part (16 in the original 3rd edition).", page: 58 },
        { text: "Dogs in public must wear a collar with the owner's name and address; owners must control and clean up after them.", page: 58 },
        { text: "It is against the law to treat a pet cruelly or to neglect it.", page: 58 },
      ],
      mnemonics: [
        {
          title: "16 with a meal, 18 at the bar",
          device: "Sixteen sits down to eat; eighteen stands at the bar.",
          explanation: "At 16 you may drink wine or beer with a meal if accompanied by someone over 18; you must be 18 to buy alcohol in a pub or club.",
        },
        {
          title: "Dog collar",
          device: "Name and address round the neck.",
          explanation: "All dogs in public places must wear a collar with the owner's name and address.",
        },
      ],
      checkQuestionIds: ["le-q22", "le-q24", "le-q26"],
    },
  ],

  places: [
    { id: "leisure-kew", name: "Kew Gardens", lat: 51.4787, lon: -0.2956, label: { side: "left" }, note: "London. A famous garden in England.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-sissinghurst", name: "Sissinghurst", lat: 51.1153, lon: 0.5824, note: "Kent. A famous garden in England.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-hidcote", name: "Hidcote", lat: 52.0815, lon: -1.7463, label: { side: "left" }, note: "Gloucestershire. A famous garden in England.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-crathes", name: "Crathes Castle", lat: 57.0617, lon: -2.4386, note: "Aberdeenshire. A famous garden in Scotland.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-inveraray", name: "Inveraray Castle", lat: 56.2372, lon: -5.0734, label: { side: "left" }, note: "Argyll. A famous garden in Scotland.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-bodnant", name: "Bodnant Garden", lat: 53.2236, lon: -3.8014, label: { side: "left" }, note: "Conwy, North Wales. A famous garden in Wales.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-mount-stewart", name: "Mount Stewart", lat: 54.5536, lon: -5.6011, label: { side: "left" }, note: "County Down. A famous garden in Northern Ireland.", page: 54, lessonId: "gardens-shopping-food", era: "Garden" },
    { id: "leisure-ealing-studios", name: "Ealing Studios", lat: 51.5094, lon: -0.3046, label: { side: "left" }, note: "West London. Claims to be the oldest continuously working film studio in the world.", page: 57, lessonId: "british-film", era: "Film" },
  ],

  keyFacts: [
    { text: "Some people rent an allotment to grow fruit and vegetables.", page: 54 },
    { text: "Gardens: Kew, Sissinghurst, Hidcote (England); Crathes, Inveraray (Scotland); Bodnant (Wales); Mount Stewart (NI).", page: 54 },
    { text: "Foods: roast beef and Yorkshire pudding (England), Welsh cakes, haggis (Scotland), Ulster fry (NI).", page: 55 },
    { text: "Films were first shown publicly in the UK in 1896.", page: 56 },
    { text: "Ealing Studios claims to be the oldest continuously working film studio in the world.", page: 57 },
    { text: "The BAFTAs are the British equivalent of the Oscars.", page: 57 },
    { text: "Punch was first published in the 1840s; Monty Python's Flying Circus began in 1969.", page: 57 },
    { text: "A TV licence is needed to watch TV on any device; fine up to £1,000; over-75s free, blind people 50% off.", page: 57 },
    { text: "TV licences fund the BBC, which is independent of government.", page: 58 },
    { text: "You must be 18 to buy alcohol in a pub and to enter a betting shop.", page: 58 },
    { text: "Dogs in public must wear a collar with the owner's name and address.", page: 58 },
  ],

  flashcards: [
    // gardens-shopping-food
    { id: "le-f01", lessonId: "gardens-shopping-food", page: 54, front: "What is an allotment?", back: "Extra land that people rent to grow fruit and vegetables." },
    { id: "le-f02", lessonId: "gardens-shopping-food", page: 54, front: "Name the famous gardens in England, Scotland, Wales and Northern Ireland given in the handbook.", back: "England: Kew Gardens, Sissinghurst, Hidcote. Scotland: Crathes Castle, Inveraray Castle. Wales: Bodnant Garden. NI: Mount Stewart." },
    { id: "le-f03", lessonId: "gardens-shopping-food", page: 54, front: "What are the national flowers of the UK's four countries?", back: "England: rose. Scotland: thistle. Wales: daffodil. Northern Ireland: shamrock." },
    { id: "le-f04", lessonId: "gardens-shopping-food", page: 54, front: "What is a town centre?", back: "The central shopping area of a town or city." },
    { id: "le-f05", lessonId: "gardens-shopping-food", page: 55, front: "Haggis: which nation, and what is it?", back: "Scotland. A sheep's stomach stuffed with offal, suet, onions and oatmeal." },
    { id: "le-f06", lessonId: "gardens-shopping-food", page: 55, front: "What is a Yorkshire pudding?", back: "Batter baked in the oven, served with roast beef (England)." },
    { id: "le-f07", lessonId: "gardens-shopping-food", page: 55, front: "Welsh cakes and the Ulster fry: what are they?", back: "Welsh cakes: a snack of flour, dried fruits and spices, hot or cold. Ulster fry (NI): a fried meal with bacon, eggs, sausage, black and white pudding, tomatoes, mushrooms, soda bread and potato bread." },
    // british-film
    { id: "le-f08", lessonId: "british-film", page: 56, front: "When were films first shown publicly in the UK?", back: "1896." },
    { id: "le-f09", lessonId: "british-film", page: 56, front: "Which British actor became famous in silent films for his tramp character?", back: "Sir Charles (Charlie) Chaplin." },
    { id: "le-f10", lessonId: "british-film", page: 56, front: "Name two eminent British directors of the 1930s.", back: "Sir Alexander Korda and Sir Alfred Hitchcock (who later went to Hollywood and died in 1980)." },
    { id: "le-f11", lessonId: "british-film", page: 56, front: "Which British film boosted morale in the Second World War?", back: "In Which We Serve." },
    { id: "le-f12", lessonId: "british-film", page: 56, front: "Name three British comedies from the 1950s and 1960s.", back: "Passport to Pimlico, The Ladykillers and the Carry On films." },
    { id: "le-f13", lessonId: "british-film", page: 57, front: "Which studio claims to be the oldest continuously working film studio in the world?", back: "Ealing Studios." },
    { id: "le-f14", lessonId: "british-film", page: 57, front: "Nick Park", back: "Animator who has won four Oscars, including three for Wallace and Gromit films." },
    { id: "le-f15", lessonId: "british-film", page: 57, front: "What are the BAFTAs?", back: "The British Academy Film Awards, hosted by the British Academy of Film and Television Arts: the British equivalent of the Oscars." },
    { id: "le-f16", lessonId: "british-film", page: 57, front: "Who directed Brief Encounter (1945) and Lawrence of Arabia (1962)?", back: "David Lean." },
    { id: "le-f17", lessonId: "british-film", page: 57, front: "Who directed The 39 Steps (1935), The Third Man (1949) and Chariots of Fire (1981)?", back: "Alfred Hitchcock; Carol Reed; Hugh Hudson." },
    // comedy-tv-radio
    { id: "le-f18", lessonId: "comedy-tv-radio", page: 57, front: "What was Punch, and when was it first published?", back: "The most famous 19th-century satirical magazine, first published in the 1840s." },
    { id: "le-f19", lessonId: "comedy-tv-radio", page: 57, front: "Which comedy show of 1969 introduced a new type of progressive comedy?", back: "Monty Python's Flying Circus." },
    { id: "le-f20", lessonId: "comedy-tv-radio", page: 57, front: "Name two satirical TV shows and their decades.", back: "That Was The Week That Was (1960s) and Spitting Image (1980s and 1990s)." },
    { id: "le-f21", lessonId: "comedy-tv-radio", page: 57, front: "Who needs a TV licence?", back: "Everyone with a TV, computer or other device used to watch TV. One licence covers a home, but people with separate tenancies in a shared house each need one." },
    { id: "le-f22", lessonId: "comedy-tv-radio", page: 57, front: "TV licence: concessions and fine?", back: "Over-75s can apply for a free licence; blind people get a 50% discount. Fine up to £1,000." },
    { id: "le-f23", lessonId: "comedy-tv-radio", page: 58, front: "How is the BBC funded?", back: "By the TV licence. It is the only wholly state-funded media organisation independent of government." },
    // pubs-betting-pets
    { id: "le-f24", lessonId: "pubs-betting-pets", page: 58, front: "Minimum age to buy alcohol in a pub or night club?", back: "18." },
    { id: "le-f25", lessonId: "pubs-betting-pets", page: 58, front: "When can a 16-year-old drink alcohol?", back: "Wine or beer with a meal in a hotel or restaurant (including pub eating areas), with someone over 18." },
    { id: "le-f26", lessonId: "pubs-betting-pets", page: 58, front: "When do pubs usually open, and who decides the hours?", back: "From 11.00 am (12 noon on Sundays). The licensee decides." },
    { id: "le-f27", lessonId: "pubs-betting-pets", page: 58, front: "Minimum age for betting shops and the National Lottery?", back: "18 for betting shops and gambling clubs. National Lottery: 18 in this PDF (raised from 16 in April 2021; the original 3rd edition says 16)." },
    { id: "le-f28", lessonId: "pubs-betting-pets", page: 58, front: "What must a dog wear in a public place?", back: "A collar showing the name and address of the owner." },
  ],

  questions: [
    // gardens-shopping-food
    { id: "le-q01", lessonId: "gardens-shopping-food", page: 54, type: "single", prompt: "What is an allotment?", options: ["A garden centre", "Land that people rent to grow fruit and vegetables", "A national flower show", "A public park"], answer: [1], explanation: "Some people rent additional land called an allotment, where they grow fruit and vegetables." },
    { id: "le-q02", lessonId: "gardens-shopping-food", page: 54, type: "single", prompt: "Bodnant Garden is a famous garden in which country?", options: ["England", "Scotland", "Wales", "Northern Ireland"], answer: [2], explanation: "Bodnant Garden is in Wales." },
    { id: "le-q03", lessonId: "gardens-shopping-food", page: 54, type: "multi", prompt: "Which TWO are famous gardens in Scotland?", options: ["Crathes Castle", "Hidcote", "Inveraray Castle", "Mount Stewart"], answer: [0, 2], explanation: "Crathes Castle and Inveraray Castle are in Scotland. Hidcote is in England; Mount Stewart is in Northern Ireland." },
    { id: "le-q04", lessonId: "gardens-shopping-food", page: 54, type: "single", prompt: "Which flower is associated with Wales?", options: ["The rose", "The thistle", "The daffodil", "The shamrock"], answer: [2], explanation: "Wales: daffodil. England: rose. Scotland: thistle. Northern Ireland: shamrock." },
    { id: "le-q05", lessonId: "gardens-shopping-food", page: 55, type: "single", prompt: "Which traditional food is associated with Scotland?", options: ["Ulster fry", "Welsh cakes", "Haggis", "Yorkshire pudding"], answer: [2], explanation: "Haggis is a sheep's stomach stuffed with offal, suet, onions and oatmeal." },
    { id: "le-q06", lessonId: "gardens-shopping-food", page: 55, type: "single", prompt: "Which country is the Ulster fry associated with?", options: ["England", "Scotland", "Wales", "Northern Ireland"], answer: [3], explanation: "The Ulster fry is from Northern Ireland: a fried meal including soda bread and potato bread." },
    { id: "le-q07", lessonId: "gardens-shopping-food", page: 54, type: "truefalse", prompt: "Most shops in the UK are open seven days a week.", options: ["True", "False"], answer: [0], explanation: "True, although trading hours on Sundays and public holidays are generally reduced." },
    { id: "le-q07b", lessonId: "gardens-shopping-food", page: 54, type: "single", prompt: "Mount Stewart is a famous garden in which country?", options: ["Scotland", "Wales", "Northern Ireland", "England"], answer: [2], explanation: "Mount Stewart is in Northern Ireland." },
    // british-film
    { id: "le-q08", lessonId: "british-film", page: 56, type: "single", prompt: "When were films first shown publicly in the UK?", options: ["1886", "1896", "1906", "1927"], answer: [1], explanation: "Films were first shown publicly in the UK in 1896." },
    { id: "le-q09", lessonId: "british-film", page: 56, type: "single", prompt: "Which British actor became famous in silent movies for his tramp character?", options: ["David Niven", "Charlie Chaplin", "Richard Burton", "Laurence Olivier"], answer: [1], explanation: "Sir Charles (Charlie) Chaplin was one of many British actors to make a career in Hollywood." },
    { id: "le-q10", lessonId: "british-film", page: 57, type: "single", prompt: "Which film studio has a claim to being the oldest continuously working film studio in the world?", options: ["Pinewood Studios", "Ealing Studios", "Shepperton Studios", "Elstree Studios"], answer: [1], explanation: "Ealing Studios has a claim to being the oldest continuously working studio facility in the world." },
    { id: "le-q11", lessonId: "british-film", page: 57, type: "single", prompt: "Who directed Lawrence of Arabia (1962)?", options: ["Alfred Hitchcock", "David Lean", "Ridley Scott", "Ken Russell"], answer: [1], explanation: "David Lean directed Lawrence of Arabia and Brief Encounter." },
    { id: "le-q12", lessonId: "british-film", page: 57, type: "single", prompt: "What are the BAFTAs?", options: ["Awards for British theatre", "The British equivalent of the Oscars", "Awards for British pop music", "A prize for fiction"], answer: [1], explanation: "The British Academy Film Awards, hosted by BAFTA, are the British equivalent of the Oscars." },
    { id: "le-q13", lessonId: "british-film", page: 57, type: "multi", prompt: "Which TWO are named as the two highest-grossing film franchises, both produced in the UK?", options: ["Harry Potter", "Star Wars", "James Bond", "The Lord of the Rings"], answer: [0, 2], explanation: "The handbook names Harry Potter and James Bond." },
    { id: "le-q14", lessonId: "british-film", page: 57, type: "truefalse", prompt: "Nick Park has won four Oscars, including three for films featuring Wallace and Gromit.", options: ["True", "False"], answer: [0], explanation: "True. Britain is particularly strong in special effects and animation." },
    { id: "le-q14b", lessonId: "british-film", page: 56, type: "single", prompt: "Which British film played an important part in boosting morale during the Second World War?", options: ["Brief Encounter", "In Which We Serve", "The Third Man", "Passport to Pimlico"], answer: [1], explanation: "The handbook gives In Which We Serve as an example of a wartime morale-boosting film." },
    // comedy-tv-radio
    { id: "le-q15", lessonId: "comedy-tv-radio", page: 57, type: "single", prompt: "What was the most famous satirical magazine of the 19th century?", options: ["Private Eye", "Punch", "The Spectator", "The Times"], answer: [1], explanation: "Punch was first published in the 1840s. Private Eye is a modern magazine continuing the tradition." },
    { id: "le-q16", lessonId: "comedy-tv-radio", page: 57, type: "single", prompt: "In which year did Monty Python's Flying Circus introduce a new type of progressive comedy?", options: ["1959", "1969", "1979", "1989"], answer: [1], explanation: "Monty Python's Flying Circus began in 1969." },
    { id: "le-q17", lessonId: "comedy-tv-radio", page: 57, type: "single", prompt: "What is the maximum fine for watching TV without a TV licence?", options: ["£100", "£500", "£1,000", "£5,000"], answer: [2], explanation: "You can be fined up to £1,000." },
    { id: "le-q18", lessonId: "comedy-tv-radio", page: 57, type: "truefalse", prompt: "People renting rooms with separate tenancy agreements in a shared house must each buy a separate TV licence.", options: ["True", "False"], answer: [0], explanation: "True. Otherwise one licence covers all the equipment in one home." },
    { id: "le-q19", lessonId: "comedy-tv-radio", page: 58, type: "single", prompt: "How is the BBC mainly funded?", options: ["Advertising", "Subscriptions", "TV licences", "Direct government grants each year"], answer: [2], explanation: "Money from TV licences pays for the BBC. Other channels are funded by advertisements and subscriptions." },
    { id: "le-q20", lessonId: "comedy-tv-radio", page: 57, type: "multi", prompt: "Which TWO concessions on the TV licence does the handbook mention?", options: ["People over 75 can apply for a free licence", "Students get a free licence", "Blind people get a 50% discount", "Families with children get 25% off"], answer: [0, 2], explanation: "Over-75s can apply for a free licence and blind people can get a 50% discount." },
    { id: "le-q21", lessonId: "comedy-tv-radio", page: 57, type: "single", prompt: "Which comedians performed in the music halls and later became television stars?", options: ["Morecambe and Wise", "Gilbert and Sullivan", "Torvill and Dean", "Monty Python"], answer: [0], explanation: "Morecambe and Wise performed in the music halls in the 1940s and 1950s and became TV stars." },
    { id: "le-q21b", lessonId: "comedy-tv-radio", page: 57, type: "single", prompt: "Which satirical TV show was popular in the 1980s and 1990s?", options: ["That Was The Week That Was", "Spitting Image", "Coronation Street", "EastEnders"], answer: [1], explanation: "Spitting Image ran in the 1980s and 1990s. That Was The Week That Was was in the 1960s; the others are soap operas." },
    // pubs-betting-pets
    { id: "le-q22", lessonId: "pubs-betting-pets", page: 58, type: "single", prompt: "What is the minimum age to buy alcohol in a pub or night club?", options: ["16", "17", "18", "21"], answer: [2], explanation: "You must be 18 or over to buy alcohol in a pub or night club." },
    { id: "le-q23", lessonId: "pubs-betting-pets", page: 58, type: "truefalse", prompt: "At 16, people can drink wine or beer with a meal in a restaurant if they are with someone over 18.", options: ["True", "False"], answer: [0], explanation: "True. This includes eating areas in pubs and hotels." },
    { id: "le-q24", lessonId: "pubs-betting-pets", page: 58, type: "single", prompt: "Who decides the opening hours of a pub?", options: ["The local council", "The police", "The licensee", "The government"], answer: [2], explanation: "The licensee decides the hours. Pubs usually open from 11.00 am (12 noon on Sundays)." },
    { id: "le-q25", lessonId: "pubs-betting-pets", page: 58, type: "single", prompt: "How old must you be to go into a betting shop?", options: ["16", "18", "21", "25"], answer: [1], explanation: "You have to be 18 to go into betting shops or gambling clubs." },
    { id: "le-q26", lessonId: "pubs-betting-pets", page: 58, type: "single", prompt: "What must all dogs in public places wear?", options: ["A muzzle", "A collar showing the owner's name and address", "A microchip tag only", "A lead at all times"], answer: [1], explanation: "All dogs in public places must wear a collar showing the name and address of the owner." },
    { id: "le-q27", lessonId: "pubs-betting-pets", page: 58, type: "multi", prompt: "Which TWO are traditional pub games?", options: ["Pool", "Snooker", "Darts", "Bowls"], answer: [0, 2], explanation: "Pool and darts are traditional pub games." },
    { id: "le-q28", lessonId: "pubs-betting-pets", page: 58, type: "truefalse", prompt: "It is against the law to neglect a pet.", options: ["True", "False"], answer: [0], explanation: "True. It is against the law to treat a pet cruelly or to neglect it." },
  ],

  flags: [
    { page: 54, text: "The list of national flowers (rose, thistle, daffodil, shamrock) is not in this PDF's text; it appears to be shown only as pictures. The site teaches the list from the official 3rd edition." },
    { page: 57, text: "\"Sir Lawrence Olivier\" (p. 57) should be Laurence Olivier, as spelled on p. 45. Touching the Void's director is usually spelled Kevin Macdonald." },
    { page: 57, text: "Free TV licences for all over-75s ended in August 2020; they are now only for over-75s receiving Pension Credit. The handbook describes the 2013 rule." },
    { page: 57, text: "\"The two highest-grossing film franchises (Harry Potter and James Bond)\" was true in 2013 but has since changed." },
    { page: 58, text: "Publisher update: the National Lottery minimum age rose from 16 to 18 in April 2021. The official 3rd edition says 16." },
    { page: 58, text: "Twitter, named as a social networking site, was renamed X in 2023." },
  ],
};
