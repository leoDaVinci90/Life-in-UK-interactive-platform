import type { Unit } from "../types";

/**
 * Unit 4.5 — Arts and culture. Handbook (Britizen PDF) § 4.2, pp. 44–50.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const artsAndCulture: Unit = {
  id: "arts-and-culture",
  number: "4.5",
  title: "Arts and culture",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.2",
    pages: [44, 50],
  },
  status: "available",
  dek: "Music, theatre, art, architecture, fashion, literature and poetry.",
  heroImageId: "arts-hay-wain",
  overview: [
    "This is the handbook's longest catalogue of names. It runs through British music from Purcell to the Beatles, the theatre from Gilbert and Sullivan to the West End, painters from Gainsborough to Hockney, architects from Inigo Jones to Zaha Hadid, designers, novelists and poets.",
    "It also lists the prizes and festivals that celebrate the arts: the Proms, the Mercury Prize and the Brit Awards, the Edinburgh Festival, the Olivier Awards, the Turner Prize, the Booker Prize and the National Eisteddfod. Test questions usually match a person to their work, or an award or festival to what it celebrates, so this unit is built around profile cards and plenty of practice.",
  ],
  objectives: [
    "Match British composers to their best-known works and describe the Proms.",
    "Name important pop bands, music venues, festivals and music awards.",
    "Describe British theatre traditions, including the West End, pantomime and the Edinburgh Festival Fringe.",
    "Identify notable British artists, galleries and the Turner Prize.",
    "Trace British architecture from medieval cathedrals to modern architects, with the key buildings and garden designers.",
    "Match famous writers and poets to their works, and recognise the poems quoted in the handbook.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "classical-music",
      title: "Classical music and the Proms",
      dek: "The Proms, and seven composers from Purcell to Britten.",
      pages: [44, 45],
      minutes: 7,
      heroImageId: "arts-royal-albert-hall",
      recall: {
        question: "Before you read: which piece is usually played at the Last Night of the Proms, and who wrote it?",
        answer: "Land of Hope and Glory (Pomp and Circumstance March No 1), by Sir Edward Elgar.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Proms",
          pages: [44],
          paragraphs: [
            "Music is an important part of British culture, ranging from classical music to modern pop, with many venues and events across the UK.",
            "The Proms is an eight-week summer season of orchestral classical music held in various venues, including the Royal Albert Hall in London. It has been organised by the BBC since 1927. The Last Night of the Proms is the best-known concert and, like others in the series, is broadcast on television.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "arts-royal-albert-hall", kind: "photograph", caption: "The Royal Albert Hall, London, the main venue of the Proms." },
        },
        {
          type: "cards",
          heading: "Composers to know",
          cards: [
            {
              id: "purcell",
              title: "Henry Purcell",
              meta: "1659–95",
              summary: "Organist at Westminster Abbey who developed a distinctly British style.",
              detail: [
                "Purcell was the organist at Westminster Abbey. He wrote church music, operas and other pieces.",
                "He developed a British style distinct from that elsewhere in Europe and continues to influence British composers.",
              ],
              page: 44,
              imageId: "arts-purcell",
            },
            {
              id: "handel",
              title: "George Frederick Handel",
              meta: "1695–1759 · German-born, British citizen from 1727",
              summary: "Wrote the Water Music, Music for the Royal Fireworks and Messiah.",
              detail: [
                "The German-born composer spent many years in the UK and became a British citizen in 1727.",
                "He wrote the Water Music for King George I and Music for the Royal Fireworks for his son, George II. Both are still very popular.",
                "He also wrote the oratorio Messiah, sung regularly by choirs, often at Easter.",
              ],
              page: 44,
              imageId: "arts-handel",
            },
            {
              id: "holst",
              title: "Gustav Holst",
              meta: "1874–1934",
              summary: "Composed The Planets suite.",
              detail: [
                "His work includes The Planets, a suite of pieces themed around the planets of the solar system.",
                "He adapted Jupiter, part of the suite, as the tune for 'I vow to thee my country', a popular hymn in British churches.",
              ],
              page: 44,
              imageId: "arts-holst",
            },
            {
              id: "elgar",
              title: "Sir Edward Elgar",
              meta: "1857–1934 · born in Worcester",
              summary: "Best known for the Pomp and Circumstance Marches.",
              detail: [
                "Elgar was born in Worcester, England. His best-known work is probably the Pomp and Circumstance Marches.",
                "March No 1 (Land of Hope and Glory) is usually played at the Last Night of the Proms at the Royal Albert Hall.",
              ],
              page: 44,
              imageId: "arts-elgar",
            },
            {
              id: "vaughan-williams",
              title: "Ralph Vaughan Williams",
              meta: "1872–1958",
              summary: "Music for orchestras and choirs, strongly influenced by English folk music.",
              detail: ["He wrote music for orchestras and choirs and was strongly influenced by traditional English folk music."],
              page: 44,
              imageId: "arts-vaughan-williams",
            },
            {
              id: "walton",
              title: "Sir William Walton",
              meta: "1902–83",
              summary: "Coronation marches; best known for Façade and Belshazzar's Feast.",
              detail: [
                "Walton wrote a wide range of music, from film scores to opera.",
                "He wrote marches for the coronations of King George VI and Queen Elizabeth II, but his best-known works are probably Façade, which became a ballet, and Belshazzar's Feast, intended to be sung by a large choir.",
              ],
              page: 44,
            },
            {
              id: "britten",
              title: "Benjamin Britten",
              meta: "1913–76",
              summary: "Operas Peter Grimes and Billy Budd; founded the Aldeburgh festival.",
              detail: [
                "Britten is best known for his operas, which include Peter Grimes and Billy Budd.",
                "He also wrote A Young Person's Guide to the Orchestra, based on a piece by Purcell, which introduces the listener to the different sections of an orchestra.",
                "He founded the Aldeburgh festival in Suffolk, still a popular music event of international importance.",
              ],
              page: 45,
              imageId: "arts-britten",
            },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-purcell", kind: "portrait", caption: "Henry Purcell, portrait attributed to John Closterman, c. 1695." },
            { imageId: "arts-handel", kind: "portrait", caption: "George Frederick Handel, portrait attributed to Balthasar Denner, c. 1726–28." },
            { imageId: "arts-elgar", kind: "photograph", caption: "Sir Edward Elgar, photographed in the early 20th century." },
          ],
        },
        {
          type: "sequence",
          heading: "Composers in order of birth",
          page: 44,
          steps: [
            { label: "Purcell (1659)", detail: "Westminster Abbey organist; a distinct British style." },
            { label: "Handel (1695)", detail: "Water Music, Royal Fireworks, Messiah." },
            { label: "Elgar (1857)", detail: "Pomp and Circumstance; Land of Hope and Glory." },
            { label: "Vaughan Williams (1872)", detail: "Orchestras and choirs; English folk music." },
            { label: "Holst (1874)", detail: "The Planets; 'I vow to thee my country'." },
            { label: "Walton (1902)", detail: "Façade; Belshazzar's Feast; coronation marches." },
            { label: "Britten (1913)", detail: "Peter Grimes, Billy Budd; Aldeburgh festival." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The handbook spells Walton's work \"Balthazar's Feast\"; the usual spelling is Belshazzar's Feast." },
          ],
        },
      ],
      keyFacts: [
        { text: "The Proms: an eight-week summer season of orchestral music, organised by the BBC since 1927; the Royal Albert Hall is a main venue.", page: 44 },
        { text: "Henry Purcell (1659–95) was organist at Westminster Abbey and developed a distinct British style.", page: 44 },
        { text: "Handel became a British citizen in 1727; wrote the Water Music (George I), Music for the Royal Fireworks (George II) and Messiah.", page: 44 },
        { text: "Holst wrote The Planets; Jupiter became the tune of 'I vow to thee my country'.", page: 44 },
        { text: "Elgar (born in Worcester) wrote the Pomp and Circumstance Marches; No 1 is Land of Hope and Glory.", page: 44 },
        { text: "Vaughan Williams was strongly influenced by English folk music.", page: 44 },
        { text: "Walton wrote coronation marches, Façade and Belshazzar's Feast.", page: 44 },
        { text: "Britten wrote Peter Grimes, Billy Budd and A Young Person's Guide to the Orchestra, and founded the Aldeburgh festival.", page: 45 },
      ],
      mnemonics: [
        {
          title: "Handel's royal pair",
          device: "Water for the father, Fireworks for the son.",
          explanation: "Water Music was written for George I; Music for the Royal Fireworks for his son George II.",
        },
        {
          title: "Holst's hymn",
          device: "Jupiter makes you vow.",
          explanation: "Holst adapted Jupiter, from The Planets, as the tune of 'I vow to thee my country'.",
        },
        {
          title: "Britten by the sea",
          device: "Britten's Billy Budd and Peter Grimes sail out of Aldeburgh.",
          explanation: "Britten's two named operas, and the festival he founded at Aldeburgh on the Suffolk coast.",
        },
      ],
      checkQuestionIds: ["ac-q01", "ac-q03", "ac-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "popular-music",
      title: "Pop, festivals and music awards",
      dek: "The Beatles and the Stones, big venues, summer festivals, the Eisteddfod and the music prizes.",
      pages: [45],
      minutes: 5,
      heroImageId: "arts-beatles",
      recall: {
        question: "Before you read: what is the Mercury Music Prize awarded for?",
        answer: "The best album from the UK and Ireland. It is awarded each September.",
      },
      blocks: [
        {
          type: "prose",
          heading: "British popular music",
          pages: [45],
          paragraphs: [
            "Folk music, jazz, pop and rock music have flourished in Britain since the 20th century. Britain has influenced popular music around the world because of the wide use of English, the UK's cultural links with many countries, and British invention and innovation.",
            "Since the 1960s British pop music has been one of the most important cultural contributions to life in the UK. Bands including The Beatles and The Rolling Stones still influence music here and abroad. British pop has kept innovating, for example with the Punk movement of the late 1970s and the trend towards boy and girl bands in the 1990s.",
          ],
        },
        {
          type: "figure",
          figure: { imageId: "arts-beatles", kind: "photograph", caption: "The Beatles arriving in New York in February 1964." },
        },
        {
          type: "cards",
          heading: "Venues, festivals and awards",
          cards: [
            { id: "venues", title: "Large venues", meta: "London · Glasgow", summary: "Wembley Stadium; The O2 in Greenwich; the SECC in Glasgow.", detail: ["Large venues that host music events throughout the year include Wembley Stadium, The O2 in Greenwich (south-east London) and the Scottish Exhibition and Conference Centre (SECC) in Glasgow."], page: 45 },
            { id: "festivals", title: "Summer festivals", meta: "Every summer", summary: "Glastonbury, the Isle of Wight Festival and the V Festival.", detail: ["Festival season takes place across the UK every summer. Famous festivals include Glastonbury, the Isle of Wight Festival and the V Festival, where both well-known and up-and-coming artists perform."], page: 45 },
            { id: "eisteddfod", title: "The National Eisteddfod of Wales", meta: "Annual", summary: "A cultural festival largely in Welsh, with important poetry competitions.", detail: ["An annual cultural festival of music, dance, art and original performances, largely in Welsh.", "It includes a number of important competitions for Welsh poetry."], page: 45 },
            { id: "mercury", title: "The Mercury Music Prize", meta: "Each September", summary: "For the best album from the UK and Ireland.", detail: ["Awarded each September for the best album from the UK and Ireland."], page: 45 },
            { id: "brits", title: "The Brit Awards", meta: "Annual", summary: "Awards such as best British group and best British solo artist.", detail: ["An annual event giving awards in a range of categories, such as best British group and best British solo artist."], page: 45 },
          ],
        },
        {
          type: "map",
          heading: "Music on the map",
          placeIds: ["arts-wembley", "arts-o2", "arts-secc", "arts-glastonbury", "arts-isle-of-wight", "arts-aldeburgh", "arts-worcester"],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "This PDF says \"folk music, jazz, pop and music\"; the official handbook says \"pop and rock music\"." },
            { text: "The V Festival was last held in 2017, and the SECC has been called the Scottish Event Campus since 2017. The handbook's names are what the test uses." },
          ],
        },
      ],
      keyFacts: [
        { text: "Since the 1960s British pop has been one of the UK's most important cultural contributions; The Beatles and The Rolling Stones remain influential.", page: 45 },
        { text: "Punk began in the late 1970s; boy and girl bands were a 1990s trend.", page: 45 },
        { text: "Large venues: Wembley Stadium, The O2 (Greenwich), the SECC (Glasgow).", page: 45 },
        { text: "Festivals: Glastonbury, the Isle of Wight Festival, the V Festival.", page: 45 },
        { text: "The National Eisteddfod of Wales is an annual festival largely in Welsh, with Welsh poetry competitions.", page: 45 },
        { text: "Mercury Prize (each September): best album from the UK and Ireland. Brit Awards: annual, e.g. best British group.", page: 45 },
      ],
      mnemonics: [
        {
          title: "Mercury in September",
          device: "Mercury is a planet; September starts the school year: one album, top of the class.",
          explanation: "The Mercury Music Prize goes to a single best album from the UK and Ireland, each September.",
        },
        {
          title: "Eisteddfod = Wales",
          device: "Double-d and double-f are Welsh spellings.",
          explanation: "The National Eisteddfod is the Welsh cultural festival, mainly in Welsh, with poetry competitions.",
        },
      ],
      checkQuestionIds: ["ac-q08", "ac-q10", "ac-q11"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "theatre",
      title: "Theatre",
      dek: "The West End and The Mousetrap, Gilbert and Sullivan, Lloyd Webber, pantomime, the Fringe and the Oliviers.",
      pages: [45],
      minutes: 5,
      heroImageId: "arts-mousetrap",
      recall: {
        question: "Before you read: which play has been running in the West End since 1952?",
        answer: "The Mousetrap, a murder-mystery by Dame Agatha Christie. It has had the longest initial run of any show in history.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Theatres and the West End",
          pages: [45],
          paragraphs: [
            "There are theatres in most towns and cities, from large to small. They are an important part of local communities and often show both professional and amateur productions.",
            "London's West End, also known as 'Theatreland', is particularly well known. The Mousetrap, a murder-mystery play by Dame Agatha Christie, has been running in the West End since 1952 and has had the longest initial run of any show in history.",
          ],
        },
        {
          type: "figure",
          figure: { imageId: "arts-mousetrap", kind: "photograph", caption: "St Martin's Theatre in the West End, home of The Mousetrap." },
        },
        {
          type: "prose",
          heading: "Musical theatre",
          pages: [45],
          paragraphs: [
            "In the 19th century Gilbert and Sullivan wrote comic operas, often making fun of popular culture and politics. They include HMS Pinafore, The Pirates of Penzance and The Mikado, and are still often staged by professional and amateur groups.",
            "More recently Andrew Lloyd Webber has written the music for shows popular around the world, including Jesus Christ Superstar and Evita (with Tim Rice), and Cats and The Phantom of the Opera.",
          ],
        },
        {
          type: "figure",
          figure: { imageId: "arts-mikado", kind: "illustration", caption: "A 19th-century poster for The Mikado by the D'Oyly Carte Opera Company, which staged Gilbert and Sullivan's operas." },
        },
        {
          type: "cards",
          heading: "Traditions, festivals and awards",
          cards: [
            {
              id: "pantomime",
              title: "Pantomime",
              meta: "At Christmas time",
              summary: "Light-hearted family plays based on fairy stories.",
              detail: [
                "Many theatres produce a pantomime at Christmas. Pantomimes are based on fairy stories and are light-hearted plays with music and comedy, enjoyed by families.",
                "A traditional character is the Dame, a woman played by a man. There is often also a pantomime horse or cow played by two actors in the same costume.",
              ],
              page: 45,
            },
            {
              id: "edinburgh-festival",
              title: "The Edinburgh Festival",
              meta: "Edinburgh, every summer",
              summary: "A series of festivals; the biggest is the Fringe, mainly theatre and comedy.",
              detail: [
                "The Edinburgh Festival takes place every summer. It is a series of arts and cultural festivals.",
                "The biggest and best known is the Edinburgh Festival Fringe ('the Fringe'), a showcase of mainly theatre and comedy that often shows experimental work.",
              ],
              page: 45,
            },
            {
              id: "olivier-awards",
              title: "The Laurence Olivier Awards",
              meta: "Annual, London",
              summary: "Theatre awards named after Sir Laurence Olivier.",
              detail: [
                "Held annually at different venues in London, with categories such as best director, best actor and best actress.",
                "They are named after the British actor Sir Laurence Olivier, later Lord Olivier, best known for his roles in various Shakespeare plays.",
              ],
              page: 45,
            },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The Mousetrap has played at St Martin's Theatre since 1974, having opened at the Ambassadors Theatre next door. Performances were paused during the Covid-19 pandemic in 2020–21." },
          ],
        },
      ],
      keyFacts: [
        { text: "London's West End is also known as 'Theatreland'.", page: 45 },
        { text: "The Mousetrap, by Agatha Christie, has run in the West End since 1952: the longest initial run of any show.", page: 45 },
        { text: "Gilbert and Sullivan (19th century) wrote comic operas: HMS Pinafore, The Pirates of Penzance, The Mikado.", page: 45 },
        { text: "Andrew Lloyd Webber: Jesus Christ Superstar and Evita (with Tim Rice), Cats, The Phantom of the Opera.", page: 45 },
        { text: "Pantomimes are staged at Christmas; the Dame is a woman played by a man.", page: 45 },
        { text: "The Edinburgh Festival is every summer; its biggest part is the Fringe.", page: 45 },
        { text: "The Laurence Olivier Awards are held annually in London.", page: 45 },
      ],
      mnemonics: [
        {
          title: "Gilbert and Sullivan's three",
          device: "A ship, some pirates and an emperor: Pinafore, Penzance, Mikado.",
          explanation: "HMS Pinafore, The Pirates of Penzance and The Mikado are the three comic operas named.",
        },
        {
          title: "Lloyd Webber with Rice",
          device: "Rice goes with Jesus and Evita.",
          explanation: "Tim Rice collaborated on Jesus Christ Superstar and Evita; Cats and The Phantom of the Opera are not with Rice.",
        },
      ],
      checkQuestionIds: ["ac-q14", "ac-q16", "ac-q18"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "art",
      title: "Art",
      dek: "From medieval wall paintings to the Turner Prize: galleries and ten notable British artists.",
      pages: [45, 46],
      minutes: 7,
      heroImageId: "arts-hay-wain",
      recall: {
        question: "Before you read: which painter is most famous for his pictures of Dedham Vale?",
        answer: "John Constable. Dedham Vale is on the Suffolk–Essex border in the east of England.",
      },
      blocks: [
        {
          type: "prose",
          heading: "A short history",
          pages: [45],
          paragraphs: [
            "In the Middle Ages most art had a religious theme, particularly wall paintings in churches and illustrations in religious books. Much of this was lost after the Protestant Reformation, but wealthy families began to collect other paintings and sculptures.",
            "Many painters working in Britain in the 16th and 17th centuries came from abroad, for example Hans Holbein and Sir Anthony Van Dyck. British artists, especially portrait and landscape painters, became well known from the 18th century onwards.",
          ],
        },
        {
          type: "prose",
          heading: "Galleries and the Turner Prize",
          pages: [45],
          paragraphs: [
            "Well-known galleries include the National Gallery, Tate Britain and Tate Modern in London, the National Museum in Cardiff and the National Gallery of Scotland in Edinburgh.",
            "The Turner Prize was established in 1984 and celebrates contemporary art. It is named after Joseph Turner. Four works are shortlisted each year and shown at Tate Britain before the winner is announced. It is one of the most prestigious visual art awards in Europe; past winners include Damien Hirst and Richard Wright.",
          ],
        },
        {
          type: "cards",
          heading: "Notable British artists",
          cards: [
            { id: "gainsborough", title: "Thomas Gainsborough", meta: "1727–88", summary: "Portrait painter who often set people in country or garden scenery.", detail: ["A portrait painter who often painted people in country or garden scenery."], page: 45, imageId: "arts-gainsborough" },
            { id: "david-allan", title: "David Allan", meta: "1744–96 · Scottish", summary: "Portrait painter; painted The Origin of Painting.", detail: ["A Scottish painter best known for portraits. One of his most famous works is The Origin of Painting."], page: 46 },
            { id: "turner", title: "Joseph Turner", meta: "1775–1851", summary: "Influential landscape painter in a modern style.", detail: ["An influential landscape painter in a modern style, considered the artist who raised the profile of landscape painting."], page: 46, imageId: "arts-turner" },
            { id: "constable", title: "John Constable", meta: "1776–1837", summary: "Landscape painter famous for Dedham Vale.", detail: ["A landscape painter most famous for his works of Dedham Vale on the Suffolk–Essex border in the east of England."], page: 46, imageId: "arts-hay-wain" },
            { id: "pre-raphaelites", title: "The Pre-Raphaelites", meta: "Second half of the 19th century", summary: "Detailed, brightly coloured pictures on religious or literary themes.", detail: ["An important group of artists who painted detailed pictures on religious or literary themes in bright colours.", "The group included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais."], page: 46, imageId: "arts-ophelia" },
            { id: "lavery", title: "Sir John Lavery", meta: "1856–1941 · Northern Irish", summary: "Very successful portrait painter who painted the Royal Family.", detail: ["A very successful Northern Irish portrait painter. His work included painting the Royal Family."], page: 46 },
            { id: "henry-moore", title: "Henry Moore", meta: "1898–1986", summary: "English sculptor known for large bronze abstract sculptures.", detail: ["An English sculptor and artist, best known for his large bronze abstract sculptures."], page: 46, imageId: "arts-henry-moore" },
            { id: "john-petts", title: "John Petts", meta: "1914–91 · Welsh", summary: "Engravings and stained glass.", detail: ["A Welsh artist, best known for his engravings and stained glass."], page: 46 },
            { id: "lucian-freud", title: "Lucian Freud", meta: "1922–2011 · German-born", summary: "German-born British artist best known for portraits.", detail: ["A German-born British artist, best known for his portraits."], page: 46 },
            { id: "hockney", title: "David Hockney", meta: "1937–", summary: "Important contributor to 1960s pop art.", detail: ["An important contributor to the 'pop art' movement of the 1960s who continues to be influential today."], page: 46 },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-gainsborough", kind: "portrait", caption: "Thomas Gainsborough, Mr and Mrs Andrews, c. 1750 (National Gallery, London): a portrait set in the countryside." },
            { imageId: "arts-turner", kind: "painting", caption: "J. M. W. Turner, The Fighting Temeraire, 1839 (National Gallery, London)." },
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "arts-hay-wain", kind: "painting", caption: "John Constable, The Hay Wain, 1821 (National Gallery, London), painted on the River Stour near Dedham Vale." },
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-ophelia", kind: "painting", caption: "Sir John Everett Millais, Ophelia, 1851–52 (Tate Britain): a Pre-Raphaelite painting on a literary theme." },
            { imageId: "arts-henry-moore", kind: "photograph", caption: "A large bronze sculpture by Henry Moore." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The handbook calls him Joseph Turner; he is usually known as J. M. W. Turner (Joseph Mallord William Turner)." },
          ],
        },
      ],
      keyFacts: [
        { text: "Medieval art was mostly religious; much was lost after the Reformation.", page: 45 },
        { text: "Holbein and Van Dyck were foreign painters working in Britain in the 16th–17th centuries.", page: 45 },
        { text: "Galleries: National Gallery, Tate Britain, Tate Modern (London); National Museum (Cardiff); National Gallery of Scotland (Edinburgh).", page: 45 },
        { text: "The Turner Prize (est. 1984) celebrates contemporary art; four works are shortlisted and shown at Tate Britain.", page: 45 },
        { text: "Gainsborough: portraits in country or garden scenery. David Allan: Scottish portrait painter, The Origin of Painting.", page: 46 },
        { text: "Turner raised the profile of landscape painting; Constable painted Dedham Vale.", page: 46 },
        { text: "The Pre-Raphaelites: Holman Hunt, Dante Gabriel Rossetti, Sir John Millais.", page: 46 },
        { text: "Lavery (NI): Royal Family portraits. Moore: bronze abstract sculpture. Petts (Wales): engravings, stained glass. Freud: portraits. Hockney: pop art.", page: 46 },
      ],
      mnemonics: [
        {
          title: "Two landscape painters, one year apart",
          device: "Turner 1775, Constable 1776: T before C.",
          explanation: "Turner raised the profile of landscape painting; Constable painted Dedham Vale on the Suffolk–Essex border.",
        },
        {
          title: "Artists by nation",
          device: "Allan the Scot, Lavery from Northern Ireland, Petts from Wales.",
          explanation: "The handbook names one artist from each of Scotland, Northern Ireland and Wales.",
        },
        {
          title: "Pre-Raphaelites",
          device: "\"Hunt, Rossetti, Millais\": a hunt in bright colours.",
          explanation: "The three members of the Pre-Raphaelite group named in the handbook.",
        },
      ],
      checkQuestionIds: ["ac-q20", "ac-q22", "ac-q24"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "architecture-and-gardens",
      title: "Architecture and garden design",
      dek: "Cathedrals and castles, Jones, Wren, Adam, Gothic revival, Lutyens and today's architects; Capability Brown and Gertrude Jekyll.",
      pages: [46, 47, 48],
      minutes: 7,
      heroImageId: "arts-st-pauls",
      recall: {
        question: "Before you read: who designed the new St Paul's Cathedral, and who designed the Cenotaph?",
        answer: "Sir Christopher Wren designed St Paul's. Sir Edwin Lutyens designed the Cenotaph in Whitehall.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The Middle Ages",
          pages: [46],
          paragraphs: [
            "The UK's architectural heritage is rich and varied. In the Middle Ages great cathedrals and churches were built, many still standing, such as the cathedrals in Durham, Lincoln, Canterbury and Salisbury.",
            "The White Tower in the Tower of London is an example of a Norman castle keep, built on the orders of William the Conqueror.",
            "As the countryside became more peaceful and landowners richer, the houses of the wealthy became more elaborate, and great country houses such as Hardwick Hall in Derbyshire were built. British styles of architecture began to evolve.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-durham", kind: "photograph", caption: "Durham Cathedral, seen from the railway." },
            { imageId: "arts-salisbury", kind: "photograph", caption: "Salisbury Cathedral, Wiltshire, one of the medieval cathedrals named in the handbook." },
            { imageId: "arts-hardwick-hall", kind: "photograph", caption: "Hardwick Hall, Derbyshire, the great country house named in the handbook.", context: "Hardwick Hall was built in the 1590s for Bess of Hardwick; her initials ES crown the towers." },
          ],
        },
        {
          type: "sequence",
          heading: "British architecture through the centuries",
          page: 47,
          steps: [
            { label: "Middle Ages", detail: "Cathedrals: Durham, Lincoln, Canterbury, Salisbury. Norman keep: the White Tower." },
            { label: "Country houses", detail: "Hardwick Hall, Derbyshire." },
            { label: "17th century", detail: "Inigo Jones: Queen's House (Greenwich), Banqueting House (Whitehall). Sir Christopher Wren: the new St Paul's Cathedral." },
            { label: "18th century", detail: "Simpler designs. Robert Adam: Dumfries House. The Royal Crescent, Bath." },
            { label: "19th century", detail: "Gothic revival: Houses of Parliament, St Pancras Station, Manchester and Sheffield town halls." },
            { label: "20th century", detail: "Sir Edwin Lutyens: New Delhi; the Cenotaph." },
            { label: "Today", detail: "Sir Norman Foster, Lord (Richard) Rogers, Dame Zaha Hadid." },
          ],
        },
        {
          type: "cards",
          heading: "Architects to know",
          cards: [
            { id: "inigo-jones", title: "Inigo Jones", meta: "17th century", summary: "Inspired by classical architecture: Queen's House and Banqueting House.", detail: ["Inigo Jones took inspiration from classical architecture to design the Queen's House at Greenwich and the Banqueting House in Whitehall, London."], page: 46, imageId: "arts-queens-house" },
            { id: "wren", title: "Sir Christopher Wren", meta: "Later 17th century", summary: "Designed the new St Paul's Cathedral.", detail: ["Wren helped develop a British version of the ornate styles popular in Europe, in buildings such as the new St Paul's Cathedral."], page: 46, imageId: "arts-st-pauls" },
            { id: "robert-adam", title: "Robert Adam", meta: "18th century · Scottish", summary: "Designed interiors as well as buildings, e.g. Dumfries House.", detail: ["The Scottish architect influenced architecture in the UK, Europe and America.", "He designed the inside decoration as well as the building itself in great houses such as Dumfries House in Scotland.", "His ideas influenced architects in cities such as Bath, where the Royal Crescent was built."], page: 47 },
            { id: "lutyens", title: "Sir Edwin Lutyens", meta: "20th century", summary: "Designed New Delhi and the Cenotaph.", detail: ["Lutyens had an influence throughout the British Empire. He designed New Delhi to be the seat of government in India.", "After the First World War he was responsible for many war memorials, including the Cenotaph in Whitehall, site of the annual Remembrance Day service attended by the Queen, politicians and foreign ambassadors."], page: 48, imageId: "arts-cenotaph" },
            { id: "modern-architects", title: "Modern British architects", meta: "Today", summary: "Sir Norman Foster, Lord (Richard) Rogers, Dame Zaha Hadid.", detail: ["They continue to work on major projects throughout the world as well as within the UK."], page: 48 },
          ],
        },
        {
          type: "prose",
          heading: "The 18th and 19th centuries",
          pages: [47],
          paragraphs: [
            "In the 18th century simpler designs became popular, led by the Scottish architect Robert Adam. In the 19th century the medieval 'gothic' style became popular again. As cities grew, many great public buildings were built in this style, including the Houses of Parliament, St Pancras Station and the town halls of cities such as Manchester and Sheffield.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-royal-crescent", kind: "photograph", caption: "The Royal Crescent, Bath, built in the 18th century." },
            { imageId: "arts-st-pancras", kind: "photograph", caption: "St Pancras Station, London, built in the 19th-century gothic revival style." },
          ],
        },
        {
          type: "prose",
          heading: "Gardens and landscapes",
          pages: [48],
          paragraphs: [
            "Garden design and landscaping have also played an important role. In the 18th century Lancelot 'Capability' Brown designed the grounds around country houses so that the landscape looked natural, with grass, trees and lakes. He often said that a place had 'capabilities'.",
            "Later, Gertrude Jekyll often worked with Edwin Lutyens to design colourful gardens around the houses he designed. Gardens remain an important part of UK homes, and the annual Chelsea Flower Show showcases garden design from Britain and around the world.",
          ],
        },
        {
          type: "map",
          heading: "Buildings on the map",
          placeIds: ["arts-durham", "arts-lincoln", "arts-canterbury", "arts-salisbury", "arts-hardwick-hall", "arts-dumfries-house", "arts-bath", "arts-manchester", "arts-sheffield", "arts-st-pauls", "arts-cenotaph"],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "The handbook says the Remembrance Day service at the Cenotaph is attended by the Queen. Since 2022 the monarch is King Charles III." },
          ],
        },
      ],
      keyFacts: [
        { text: "Medieval cathedrals: Durham, Lincoln, Canterbury, Salisbury.", page: 46 },
        { text: "The White Tower (Tower of London) is a Norman castle keep built for William the Conqueror.", page: 46 },
        { text: "Hardwick Hall in Derbyshire is a great country house.", page: 46 },
        { text: "Inigo Jones designed the Queen's House (Greenwich) and the Banqueting House (Whitehall).", page: 46 },
        { text: "Sir Christopher Wren designed the new St Paul's Cathedral.", page: 46 },
        { text: "Robert Adam (Scottish) designed Dumfries House; his ideas influenced Bath's Royal Crescent.", page: 47 },
        { text: "19th-century gothic revival: Houses of Parliament, St Pancras Station, Manchester and Sheffield town halls.", page: 47 },
        { text: "Sir Edwin Lutyens designed New Delhi and the Cenotaph in Whitehall.", page: 48 },
        { text: "Capability Brown designed natural-looking landscapes; Gertrude Jekyll worked with Lutyens on colourful gardens.", page: 48 },
        { text: "The Chelsea Flower Show is an annual showcase of garden design.", page: 48 },
      ],
      mnemonics: [
        {
          title: "Four cathedrals",
          device: "\"Do Little Children Sing?\": Durham, Lincoln, Canterbury, Salisbury.",
          explanation: "The four medieval cathedrals the handbook names.",
        },
        {
          title: "Jones before Wren",
          device: "J then W: Inigo Jones earlier, Wren later in the 17th century.",
          explanation: "Jones: Queen's House and Banqueting House. Wren: the new St Paul's.",
        },
        {
          title: "Lutyens and Jekyll",
          device: "Lutyens built the house, Jekyll planted the garden.",
          explanation: "Gertrude Jekyll often designed the gardens around the houses Lutyens designed.",
        },
      ],
      checkQuestionIds: ["ac-q26", "ac-q28", "ac-q31"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 6
    {
      id: "fashion-and-literature",
      title: "Fashion, design and literature",
      dek: "Chippendale to Westwood; Nobel winners, the Booker Prize and nine notable authors.",
      pages: [48],
      minutes: 7,
      heroImageId: "arts-dickens",
      recall: {
        question: "Before you read: which novel was voted the country's best-loved novel in 2003?",
        answer: "The Lord of the Rings by JRR Tolkien.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Fashion and design",
          pages: [48],
          paragraphs: [
            "Britain has produced many great designers, from Thomas Chippendale (furniture, 18th century) to Clarice Cliff (Art Deco ceramics) and Sir Terence Conran (20th-century interior design). Leading fashion designers of recent years include Mary Quant, Alexander McQueen and Vivienne Westwood.",
          ],
        },
        {
          type: "prose",
          heading: "Literature",
          pages: [48],
          paragraphs: [
            "The UK has a prestigious literary tradition. British winners of the Nobel Prize in Literature include the novelist Sir William Golding, the poet Seamus Heaney and the playwright Harold Pinter.",
            "Other authors are famous for popular fiction: Agatha Christie's detective stories are read all over the world, and Ian Fleming's books introduced James Bond. In 2003 The Lord of the Rings by JRR Tolkien was voted the country's best-loved novel.",
            "The Man Booker Prize for Fiction has been awarded every year since 1968 for the best fiction novel by an author from the Commonwealth, Ireland or Zimbabwe. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes.",
          ],
        },
        {
          type: "cards",
          heading: "Notable authors and writers",
          cards: [
            { id: "austen", title: "Jane Austen", meta: "1775–1817", summary: "Pride and Prejudice; Sense and Sensibility.", detail: ["An English novelist whose books include Pride and Prejudice and Sense and Sensibility.", "Her novels are about marriage and family relationships; many have been made into TV programmes or films."], page: 48, imageId: "arts-austen" },
            { id: "dickens", title: "Charles Dickens", meta: "1812–70", summary: "Oliver Twist; Great Expectations; Scrooge and Mr Micawber.", detail: ["He wrote many very famous novels, including Oliver Twist and Great Expectations.", "His characters appear in everyday talk: Scrooge (a mean person) and Mr Micawber (always hopeful)."], page: 48, imageId: "arts-dickens" },
            { id: "stevenson", title: "Robert Louis Stevenson", meta: "1850–94", summary: "Treasure Island; Kidnapped; Dr Jekyll and Mr Hyde.", detail: ["His books are still read by adults and children. The most famous include Treasure Island, Kidnapped and Dr Jekyll and Mr Hyde."], page: 48, imageId: "arts-stevenson" },
            { id: "hardy", title: "Thomas Hardy", meta: "1840–1928", summary: "Author and poet of rural society: Far from the Madding Crowd; Jude the Obscure.", detail: ["An author and poet whose best-known novels focus on rural society, including Far from the Madding Crowd and Jude the Obscure."], page: 48 },
            { id: "conan-doyle", title: "Sir Arthur Conan Doyle", meta: "1859–1930 · Scottish", summary: "Doctor and writer; created Sherlock Holmes.", detail: ["A Scottish doctor and writer, best known for his stories about Sherlock Holmes, one of the first fictional detectives."], page: 48, imageId: "arts-conan-doyle" },
            { id: "waugh", title: "Evelyn Waugh", meta: "1903–66", summary: "Satirical novels; best known for Brideshead Revisited.", detail: ["He wrote satirical novels, including Decline and Fall and Scoop. He is perhaps best known for Brideshead Revisited."], page: 48 },
            { id: "kingsley-amis", title: "Sir Kingsley Amis", meta: "1922–95", summary: "Novelist and poet; best known for Lucky Jim.", detail: ["An English novelist and poet who wrote more than 20 novels. The best known is Lucky Jim."], page: 48 },
            { id: "graham-greene", title: "Graham Greene", meta: "1904–91", summary: "Novels often influenced by his religious beliefs.", detail: ["His novels, often influenced by his religious beliefs, include The Heart of the Matter, The Honorary Consul, Brighton Rock and Our Man in Havana."], page: 48 },
            { id: "rowling", title: "J K Rowling", meta: "1965–", summary: "The Harry Potter series.", detail: ["She wrote the Harry Potter series of children's books, which have had huge international success. She now also writes fiction for adults."], page: 48 },
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-austen", kind: "painting", caption: "Jane Austen, pencil and watercolour sketch by her sister Cassandra, c. 1810." },
            { imageId: "arts-dickens", kind: "photograph", caption: "Charles Dickens, photographed by Jeremiah Gurney in 1867." },
            { imageId: "arts-conan-doyle", kind: "photograph", caption: "Sir Arthur Conan Doyle, photographed by Walter Benington in 1914." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            { text: "Since 2014 the Booker Prize has been open to authors of any nationality writing in English, and since 2019 it has been called simply the Booker Prize. The handbook describes the earlier rules." },
            { text: "Do not confuse Robert Louis Stevenson, the writer, with George Stephenson, the railway engineer. This PDF misspells the engineer as \"Stevenson\" elsewhere." },
          ],
        },
      ],
      keyFacts: [
        { text: "Designers: Thomas Chippendale (furniture), Clarice Cliff (Art Deco ceramics), Sir Terence Conran (interiors).", page: 48 },
        { text: "Fashion designers: Mary Quant, Alexander McQueen, Vivienne Westwood.", page: 48 },
        { text: "British Nobel literature winners include William Golding, Seamus Heaney and Harold Pinter.", page: 48 },
        { text: "The Lord of the Rings (Tolkien) was voted the best-loved novel in 2003.", page: 48 },
        { text: "The Man Booker Prize (since 1968): winners include Ian McEwan, Hilary Mantel and Julian Barnes.", page: 48 },
        { text: "Austen: Pride and Prejudice. Dickens: Oliver Twist, Great Expectations. Stevenson: Treasure Island.", page: 48 },
        { text: "Hardy: Far from the Madding Crowd. Conan Doyle: Sherlock Holmes. Waugh: Brideshead Revisited.", page: 48 },
        { text: "Amis: Lucky Jim. Greene: Brighton Rock. Rowling: Harry Potter.", page: 48 },
      ],
      mnemonics: [
        {
          title: "Nobel trio",
          device: "\"Go Home Please\": Golding (novelist), Heaney (poet), Pinter (playwright).",
          explanation: "One of each: a novelist, a poet and a playwright.",
        },
        {
          title: "Dickens's everyday characters",
          device: "Scrooge scrimps; Micawber hopes.",
          explanation: "A 'Scrooge' is a mean person; a 'Mr Micawber' is someone always hopeful.",
        },
        {
          title: "Fashion trio",
          device: "\"Quick McQueen West\": Quant, McQueen, Westwood.",
          explanation: "The three fashion designers named in the handbook.",
        },
      ],
      checkQuestionIds: ["ac-q33", "ac-q35", "ac-q37"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 7
    {
      id: "british-poets",
      title: "British poets",
      dek: "From Beowulf and Chaucer to the war poets, Poets' Corner and five famous extracts.",
      pages: [48, 49],
      minutes: 7,
      heroImageId: "arts-tyger",
      recall: {
        question: "Before you read: who wrote 'I wander'd lonely as a cloud'?",
        answer: "William Wordsworth. The handbook calls the poem The Daffodils.",
      },
      blocks: [
        {
          type: "prose",
          heading: "From Beowulf to Milton",
          pages: [48],
          paragraphs: [
            "British poetry is among the richest in the world. The Anglo-Saxon poem Beowulf tells of its hero's battles against monsters and is still translated into modern English.",
            "Poems surviving from the Middle Ages include Chaucer's Canterbury Tales and Sir Gawain and the Green Knight, about one of the knights at the court of King Arthur.",
            "As well as plays, Shakespeare wrote many sonnets (poems which must be 14 lines long) and some longer poems. As Protestant ideas spread, several poets wrote poems inspired by their religious views; one was John Milton, who wrote Paradise Lost.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-beowulf", kind: "manuscript", caption: "The first page of Beowulf in the only surviving manuscript (British Library)." },
            { imageId: "arts-chaucer", kind: "manuscript", caption: "Chaucer as a pilgrim, from the Ellesmere manuscript of The Canterbury Tales, early 15th century." },
          ],
        },
        {
          type: "prose",
          heading: "Romantics, Victorians and the war poets",
          pages: [49],
          paragraphs: [
            "Other poets, including William Wordsworth, were inspired by nature. Sir Walter Scott wrote poems inspired by Scotland and the traditional stories and songs of the Scottish–English borders; he also wrote novels, many set in Scotland.",
            "Poetry was very popular in the 19th century, with poets such as William Blake, John Keats, Lord Byron, Percy Shelley, Alfred Lord Tennyson, and Robert and Elizabeth Browning. Later, poets such as Wilfred Owen and Siegfried Sassoon wrote about their experiences in the First World War.",
            "More recent popular poets include Sir Walter de la Mare, John Masefield, Sir John Betjeman and Ted Hughes. Some of the best-known poets are buried or commemorated in Poets' Corner in Westminster Abbey.",
          ],
        },
        {
          type: "sequence",
          heading: "Poets through the ages",
          page: 49,
          steps: [
            { label: "Anglo-Saxon", detail: "Beowulf." },
            { label: "Middle Ages", detail: "Chaucer's Canterbury Tales; Sir Gawain and the Green Knight." },
            { label: "Shakespeare and Milton", detail: "Sonnets (14 lines); Paradise Lost." },
            { label: "Nature and Scotland", detail: "Wordsworth; Sir Walter Scott." },
            { label: "19th century", detail: "Blake, Keats, Byron, Shelley, Tennyson, Robert and Elizabeth Browning." },
            { label: "First World War", detail: "Wilfred Owen, Siegfried Sassoon." },
            { label: "More recently", detail: "Walter de la Mare, John Masefield, John Betjeman, Ted Hughes." },
          ],
        },
        {
          type: "prose",
          heading: "Famous lines",
          pages: [49],
          paragraphs: ["The handbook quotes five extracts. You should be able to recognise each one and name its poet."],
        },
        {
          type: "quote",
          text: "Oh to be in England now that April's there\nAnd whoever wakes in England sees, some morning, unaware,\nThat the lowest boughs and the brushwood sheaf\nRound the elm-tree bole are in tiny leaf\nWhile the Chaffinch sings on the orchard bough\nIn England – Now!",
          attribution: "Robert Browning, 1812–89 – Home Thoughts from Abroad",
        },
        {
          type: "quote",
          text: "She walks in beauty, like the night\nOf cloudless climes and starry skies,\nAll that's best of dark and bright\nMeet in her aspect and her eyes",
          attribution: "Lord Byron, 1788–1824 – She Walks in Beauty",
        },
        {
          type: "quote",
          text: "I wander'd lonely as a cloud\nThat floats on high o'er vales and hills\nWhen all at once I saw a crowd,\nA host of golden daffodils",
          attribution: "William Wordsworth, 1770–1850 – The Daffodils",
        },
        {
          type: "figure",
          figure: { imageId: "arts-tyger", kind: "manuscript", caption: "William Blake's own illuminated print of The Tyger, from Songs of Experience (1794)." },
        },
        {
          type: "quote",
          text: "Tyger! Tyger! Burning bright\nIn the forests of the night,\nWhat immortal hand or eye\nCould frame thy fearful symmetry?",
          attribution: "William Blake, 1757–1827 – The Tyger",
        },
        {
          type: "quote",
          text: "What passing-bells for these who die as cattle?\nOnly the monstrous anger of the guns.\nOnly the stuttering rifles' rapid rattle\nCan patter out their hasty orisons.",
          attribution: "Wilfred Owen, 1893–1918 – Anthem for Doomed Youth",
        },
        {
          type: "figures",
          figures: [
            { imageId: "arts-wordsworth", kind: "portrait", caption: "William Wordsworth, portrait by Benjamin Robert Haydon, 1842." },
            { imageId: "arts-byron", kind: "portrait", caption: "Lord Byron, portrait by Richard Westall, 1813." },
            { imageId: "arts-owen", kind: "photograph", caption: "Wilfred Owen in uniform, frontispiece to his Poems (1920)." },
          ],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "Wordsworth's poem is usually known by its first line, 'I Wandered Lonely as a Cloud'. The handbook calls it The Daffodils." },
            { text: "Wilfred Owen was killed in action in November 1918, a week before the Armistice." },
          ],
        },
      ],
      keyFacts: [
        { text: "Beowulf is an Anglo-Saxon poem about a hero's battles against monsters.", page: 48 },
        { text: "Medieval poems: Chaucer's Canterbury Tales; Sir Gawain and the Green Knight (King Arthur's court).", page: 48 },
        { text: "A sonnet must be 14 lines long; Shakespeare wrote many.", page: 48 },
        { text: "John Milton, inspired by his religious views, wrote Paradise Lost.", page: 48 },
        { text: "Wordsworth was inspired by nature; Sir Walter Scott by Scotland and the border stories and songs.", page: 49 },
        { text: "Wilfred Owen and Siegfried Sassoon wrote about the First World War.", page: 49 },
        { text: "Many poets are buried or commemorated in Poets' Corner, Westminster Abbey.", page: 49 },
        { text: "Quoted: Browning (Home Thoughts from Abroad), Byron (She Walks in Beauty), Wordsworth (The Daffodils), Blake (The Tyger), Owen (Anthem for Doomed Youth).", page: 49 },
      ],
      mnemonics: [
        {
          title: "Match the poem to the poet",
          device: "April in England = Browning abroad; Beauty = Byron; Daffodils = Wordsworth; Tyger = Blake; Guns = Owen.",
          explanation: "Each extract has one word that points to its poet: link it to the title.",
        },
        {
          title: "B-poets",
          device: "Blake burns, Byron's beauty, Browning's abroad.",
          explanation: "Three of the five quoted poets begin with B; tie each to its key image.",
        },
      ],
      checkQuestionIds: ["ac-q40", "ac-q42", "ac-q44"],
    },
  ],

  places: [
    { id: "arts-royal-albert-hall", name: "Royal Albert Hall", lat: 51.5009, lon: -0.1774, label: { side: "left", dy: 6 }, note: "London. A main venue of the Proms; Land of Hope and Glory at the Last Night.", page: 44, lessonId: "classical-music", era: "Music" },
    { id: "arts-westminster-abbey", name: "Westminster Abbey", lat: 51.4993, lon: -0.1273, label: { side: "right", dy: 10 }, note: "Henry Purcell was organist here. Poets' Corner commemorates famous poets.", page: 44, lessonId: "classical-music", era: "Music" },
    { id: "arts-worcester", name: "Worcester", lat: 52.192, lon: -2.22, label: { side: "left" }, note: "Birthplace of Sir Edward Elgar.", page: 44, lessonId: "classical-music", era: "Music" },
    { id: "arts-aldeburgh", name: "Aldeburgh", lat: 52.1528, lon: 1.6014, note: "Suffolk. Benjamin Britten founded the Aldeburgh festival here.", page: 45, lessonId: "classical-music", era: "Music" },
    { id: "arts-wembley", name: "Wembley Stadium", lat: 51.556, lon: -0.2796, label: { side: "left", dy: -6 }, note: "London. A large music venue.", page: 45, lessonId: "popular-music", era: "Music" },
    { id: "arts-o2", name: "The O2", lat: 51.503, lon: 0.0032, label: { side: "right", dy: -6 }, note: "Greenwich, south-east London. A large music venue.", page: 45, lessonId: "popular-music", era: "Music" },
    { id: "arts-secc", name: "SECC, Glasgow", lat: 55.8607, lon: -4.2875, label: { side: "left" }, note: "Scottish Exhibition and Conference Centre. A large music venue.", page: 45, lessonId: "popular-music", era: "Music" },
    { id: "arts-glastonbury", name: "Glastonbury", lat: 51.1555, lon: -2.5853, label: { side: "left" }, note: "Somerset. One of the most famous summer festivals.", page: 45, lessonId: "popular-music", era: "Music" },
    { id: "arts-isle-of-wight", name: "Isle of Wight", lat: 50.69, lon: -1.3, note: "Home of the Isle of Wight Festival.", page: 45, lessonId: "popular-music", era: "Music" },
    { id: "arts-west-end", name: "West End ('Theatreland')", lat: 51.5115, lon: -0.1281, label: { side: "right", dy: -10 }, note: "London. The Mousetrap has run here since 1952.", page: 45, lessonId: "theatre", era: "Theatre" },
    { id: "arts-edinburgh", name: "Edinburgh", lat: 55.9533, lon: -3.1883, note: "The Edinburgh Festival and the Fringe, every summer. Home of the National Gallery of Scotland.", page: 45, lessonId: "theatre", era: "Theatre" },
    { id: "arts-cardiff", name: "National Museum, Cardiff", lat: 51.4858, lon: -3.1771, label: { side: "left" }, note: "One of the UK's best-known galleries.", page: 45, lessonId: "art", era: "Art" },
    { id: "arts-tate-britain", name: "Tate Britain", lat: 51.4910, lon: -0.1278, label: { side: "left", dy: 10 }, note: "London. Turner Prize shortlist shown here each year.", page: 45, lessonId: "art", era: "Art" },
    { id: "arts-dedham-vale", name: "Dedham Vale", lat: 51.9580, lon: 0.9930, note: "Suffolk–Essex border. Painted by John Constable.", page: 46, lessonId: "art", era: "Art" },
    { id: "arts-durham", name: "Durham Cathedral", lat: 54.7735, lon: -1.5762, note: "A great medieval cathedral.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-lincoln", name: "Lincoln Cathedral", lat: 53.2343, lon: -0.5361, note: "A great medieval cathedral.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-canterbury", name: "Canterbury Cathedral", lat: 51.2798, lon: 1.0828, note: "A great medieval cathedral.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-salisbury", name: "Salisbury Cathedral", lat: 51.0648, lon: -1.7973, label: { side: "left" }, note: "A great medieval cathedral.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-white-tower", name: "White Tower, Tower of London", lat: 51.5081, lon: -0.0759, label: { side: "right", dy: 6 }, note: "A Norman castle keep built for William the Conqueror.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-hardwick-hall", name: "Hardwick Hall", lat: 53.1675, lon: -1.3115, label: { side: "left" }, note: "Derbyshire. A great country house.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-queens-house", name: "Queen's House, Greenwich", lat: 51.4810, lon: -0.0036, label: { side: "right", dy: 8 }, note: "Designed by Inigo Jones.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-banqueting-house", name: "Banqueting House", lat: 51.5045, lon: -0.1262, label: { side: "left", dy: -8 }, note: "Whitehall, London. Designed by Inigo Jones.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-st-pauls", name: "St Paul's Cathedral", lat: 51.5138, lon: -0.0984, label: { side: "right", dy: -4 }, note: "London. The new cathedral was designed by Sir Christopher Wren.", page: 46, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-dumfries-house", name: "Dumfries House", lat: 55.4527, lon: -4.3095, label: { side: "left" }, note: "Ayrshire, Scotland. Designed inside and out by Robert Adam.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-bath", name: "Royal Crescent, Bath", lat: 51.3871, lon: -2.3681, label: { side: "left", dy: 6 }, note: "18th century; influenced by Robert Adam's ideas.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-st-pancras", name: "St Pancras Station", lat: 51.5308, lon: -0.1260, label: { side: "left", dy: -4 }, note: "London. 19th-century gothic revival.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-houses-of-parliament", name: "Houses of Parliament", lat: 51.4995, lon: -0.1248, label: { side: "right", dy: 4 }, note: "London. 19th-century gothic revival.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-manchester", name: "Manchester Town Hall", lat: 53.4794, lon: -2.2446, label: { side: "left" }, note: "19th-century gothic revival town hall.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-sheffield", name: "Sheffield Town Hall", lat: 53.3801, lon: -1.4701, note: "19th-century gothic revival town hall.", page: 47, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-cenotaph", name: "The Cenotaph", lat: 51.5027, lon: -0.1262, label: { side: "left", dy: 4 }, note: "Whitehall, London. Designed by Lutyens; site of the Remembrance Day service.", page: 48, lessonId: "architecture-and-gardens", era: "Architecture" },
    { id: "arts-chelsea", name: "Chelsea Flower Show", lat: 51.4866, lon: -0.1578, label: { side: "left", dy: 12 }, note: "London. Annual showcase of garden design.", page: 48, lessonId: "architecture-and-gardens", era: "Architecture" },
  ],

  keyFacts: [
    { text: "The Proms: eight weeks of summer orchestral music, organised by the BBC since 1927; the Last Night is at the Royal Albert Hall.", page: 44 },
    { text: "Handel (British citizen 1727): Water Music, Music for the Royal Fireworks, Messiah.", page: 44 },
    { text: "Elgar's Land of Hope and Glory is played at the Last Night of the Proms.", page: 44 },
    { text: "Britten founded the Aldeburgh festival in Suffolk.", page: 45 },
    { text: "The Mercury Prize is for the best album from the UK and Ireland, each September.", page: 45 },
    { text: "The Mousetrap has run in the West End since 1952.", page: 45 },
    { text: "The Edinburgh Festival Fringe is mainly theatre and comedy.", page: 45 },
    { text: "The Turner Prize (1984) celebrates contemporary art; shortlist shown at Tate Britain.", page: 45 },
    { text: "Constable painted Dedham Vale; Turner raised the profile of landscape painting.", page: 46 },
    { text: "Wren designed St Paul's; Lutyens designed the Cenotaph and New Delhi.", page: 48 },
    { text: "Capability Brown designed natural-looking landscapes; the Chelsea Flower Show is annual.", page: 48 },
    { text: "The Lord of the Rings was voted the best-loved novel in 2003; the Man Booker Prize dates from 1968.", page: 48 },
    { text: "A sonnet has 14 lines; Milton wrote Paradise Lost.", page: 48 },
    { text: "Poets' Corner is in Westminster Abbey.", page: 49 },
  ],

  flashcards: [
    // classical-music
    { id: "ac-f01", lessonId: "classical-music", page: 44, front: "What are the Proms?", back: "An eight-week summer season of orchestral classical music in venues including the Royal Albert Hall, organised by the BBC since 1927." },
    { id: "ac-f02", lessonId: "classical-music", page: 44, front: "Henry Purcell", back: "1659–95. Organist at Westminster Abbey; wrote church music and operas; developed a distinct British style." },
    { id: "ac-f03", lessonId: "classical-music", page: 44, front: "Which pieces did Handel write for George I and George II?", back: "Water Music for George I; Music for the Royal Fireworks for George II. He also wrote Messiah. He became a British citizen in 1727." },
    { id: "ac-f04", lessonId: "classical-music", page: 44, front: "Gustav Holst", back: "Composed The Planets. He adapted Jupiter as the tune of the hymn 'I vow to thee my country'." },
    { id: "ac-f05", lessonId: "classical-music", page: 44, front: "Sir Edward Elgar", back: "Born in Worcester. Pomp and Circumstance Marches; March No 1 (Land of Hope and Glory) is played at the Last Night of the Proms." },
    { id: "ac-f06", lessonId: "classical-music", page: 44, front: "Vaughan Williams and Walton", back: "Vaughan Williams: orchestras and choirs, influenced by English folk music. Walton: film scores to opera, coronation marches, Façade and Belshazzar's Feast." },
    { id: "ac-f07", lessonId: "classical-music", page: 45, front: "Benjamin Britten", back: "Operas Peter Grimes and Billy Budd; A Young Person's Guide to the Orchestra (based on Purcell); founded the Aldeburgh festival in Suffolk." },
    // popular-music
    { id: "ac-f08", lessonId: "popular-music", page: 45, front: "Name two influential British bands from the 1960s.", back: "The Beatles and The Rolling Stones." },
    { id: "ac-f09", lessonId: "popular-music", page: 45, front: "Name three large music venues in the handbook.", back: "Wembley Stadium; The O2 in Greenwich; the SECC in Glasgow." },
    { id: "ac-f10", lessonId: "popular-music", page: 45, front: "Name three famous summer music festivals.", back: "Glastonbury, the Isle of Wight Festival and the V Festival." },
    { id: "ac-f11", lessonId: "popular-music", page: 45, front: "What is the National Eisteddfod?", back: "An annual Welsh cultural festival of music, dance, art and performances, largely in Welsh, with important Welsh poetry competitions." },
    { id: "ac-f12", lessonId: "popular-music", page: 45, front: "Mercury Music Prize vs Brit Awards?", back: "Mercury: best album from the UK and Ireland, each September. Brits: annual awards in categories such as best British group and best British solo artist." },
    // theatre
    { id: "ac-f13", lessonId: "theatre", page: 45, front: "The Mousetrap", back: "A murder-mystery by Dame Agatha Christie, running in the West End since 1952: the longest initial run of any show." },
    { id: "ac-f14", lessonId: "theatre", page: 45, front: "Gilbert and Sullivan", back: "19th-century comic operas mocking popular culture and politics: HMS Pinafore, The Pirates of Penzance, The Mikado." },
    { id: "ac-f15", lessonId: "theatre", page: 45, front: "Andrew Lloyd Webber", back: "Wrote the music for Jesus Christ Superstar and Evita (with Tim Rice), Cats and The Phantom of the Opera." },
    { id: "ac-f16", lessonId: "theatre", page: 45, front: "What is a pantomime, and who is the Dame?", back: "A light-hearted Christmas play with music and comedy, based on fairy stories. The Dame is a woman played by a man." },
    { id: "ac-f17", lessonId: "theatre", page: 45, front: "What is the Fringe?", back: "The Edinburgh Festival Fringe: the biggest part of the Edinburgh Festival, mainly theatre and comedy, often experimental." },
    { id: "ac-f18", lessonId: "theatre", page: 45, front: "The Laurence Olivier Awards", back: "Annual theatre awards in London (e.g. best director, actor, actress), named after Sir Laurence Olivier, known for his Shakespeare roles." },
    // art
    { id: "ac-f19", lessonId: "art", page: 45, front: "Name two foreign painters who worked in Britain in the 16th and 17th centuries.", back: "Hans Holbein and Sir Anthony Van Dyck." },
    { id: "ac-f20", lessonId: "art", page: 45, front: "The Turner Prize", back: "Established 1984 for contemporary art; named after Joseph Turner. Four works shortlisted and shown at Tate Britain. Winners include Damien Hirst and Richard Wright." },
    { id: "ac-f21", lessonId: "art", page: 46, front: "Gainsborough, Turner and Constable", back: "Gainsborough: portraits in country or garden scenery. Turner: modern-style landscapes. Constable: Dedham Vale landscapes." },
    { id: "ac-f22", lessonId: "art", page: 46, front: "Who were the Pre-Raphaelites?", back: "A 19th-century group painting detailed, brightly coloured religious or literary pictures: Holman Hunt, Dante Gabriel Rossetti, Sir John Millais." },
    { id: "ac-f23", lessonId: "art", page: 46, front: "David Allan, Sir John Lavery, John Petts", back: "Allan: Scottish portrait painter, The Origin of Painting. Lavery: Northern Irish portrait painter of the Royal Family. Petts: Welsh, engravings and stained glass." },
    { id: "ac-f24", lessonId: "art", page: 46, front: "Henry Moore, Lucian Freud, David Hockney", back: "Moore: large bronze abstract sculptures. Freud: German-born, portraits. Hockney: 1960s pop art." },
    // architecture-and-gardens
    { id: "ac-f25", lessonId: "architecture-and-gardens", page: 46, front: "Which four medieval cathedrals does the handbook name?", back: "Durham, Lincoln, Canterbury and Salisbury." },
    { id: "ac-f26", lessonId: "architecture-and-gardens", page: 46, front: "What is the White Tower?", back: "A Norman castle keep in the Tower of London, built on the orders of William the Conqueror." },
    { id: "ac-f27", lessonId: "architecture-and-gardens", page: 46, front: "Inigo Jones and Sir Christopher Wren", back: "Jones: Queen's House (Greenwich) and Banqueting House (Whitehall). Wren: the new St Paul's Cathedral." },
    { id: "ac-f28", lessonId: "architecture-and-gardens", page: 47, front: "Robert Adam", back: "18th-century Scottish architect; designed buildings and interiors, e.g. Dumfries House. Influenced Bath's Royal Crescent." },
    { id: "ac-f29", lessonId: "architecture-and-gardens", page: 47, front: "Name four 19th-century gothic revival buildings.", back: "The Houses of Parliament, St Pancras Station, and the town halls of Manchester and Sheffield." },
    { id: "ac-f30", lessonId: "architecture-and-gardens", page: 48, front: "Sir Edwin Lutyens", back: "Designed New Delhi as India's seat of government, and many war memorials including the Cenotaph in Whitehall." },
    { id: "ac-f31", lessonId: "architecture-and-gardens", page: 48, front: "Capability Brown and Gertrude Jekyll", back: "Brown (18th century): natural-looking landscapes of grass, trees and lakes. Jekyll: colourful gardens, often with Lutyens." },
    // fashion-and-literature
    { id: "ac-f32", lessonId: "fashion-and-literature", page: 48, front: "Chippendale, Clarice Cliff, Terence Conran", back: "Chippendale: 18th-century furniture. Clarice Cliff: Art Deco ceramics. Conran: 20th-century interior design." },
    { id: "ac-f33", lessonId: "fashion-and-literature", page: 48, front: "Name three British winners of the Nobel Prize in Literature.", back: "Sir William Golding (novelist), Seamus Heaney (poet), Harold Pinter (playwright)." },
    { id: "ac-f34", lessonId: "fashion-and-literature", page: 48, front: "The Man Booker Prize", back: "Annual since 1968, for the best fiction novel by an author from the Commonwealth, Ireland or Zimbabwe. Winners: Ian McEwan, Hilary Mantel, Julian Barnes." },
    { id: "ac-f35", lessonId: "fashion-and-literature", page: 48, front: "Austen, Dickens, Stevenson: one book each.", back: "Austen: Pride and Prejudice / Sense and Sensibility. Dickens: Oliver Twist / Great Expectations. Stevenson: Treasure Island / Kidnapped / Dr Jekyll and Mr Hyde." },
    { id: "ac-f36", lessonId: "fashion-and-literature", page: 48, front: "Hardy, Conan Doyle, Waugh", back: "Hardy: Far from the Madding Crowd, Jude the Obscure. Conan Doyle: Sherlock Holmes. Waugh: Decline and Fall, Scoop, Brideshead Revisited." },
    { id: "ac-f37", lessonId: "fashion-and-literature", page: 48, front: "Kingsley Amis, Graham Greene, J K Rowling", back: "Amis: Lucky Jim. Greene: The Heart of the Matter, The Honorary Consul, Brighton Rock, Our Man in Havana. Rowling: Harry Potter." },
    // british-poets
    { id: "ac-f38", lessonId: "british-poets", page: 48, front: "Beowulf and Sir Gawain and the Green Knight", back: "Beowulf: Anglo-Saxon poem of a hero fighting monsters. Gawain: medieval poem about a knight at King Arthur's court." },
    { id: "ac-f39", lessonId: "british-poets", page: 48, front: "How long must a sonnet be?", back: "14 lines." },
    { id: "ac-f40", lessonId: "british-poets", page: 48, front: "Who wrote Paradise Lost?", back: "John Milton, a poet inspired by his religious (Protestant) views." },
    { id: "ac-f41", lessonId: "british-poets", page: 49, front: "Name two First World War poets.", back: "Wilfred Owen and Siegfried Sassoon." },
    { id: "ac-f42", lessonId: "british-poets", page: 49, front: "Where are many famous poets buried or commemorated?", back: "Poets' Corner in Westminster Abbey." },
    { id: "ac-f43", lessonId: "british-poets", page: 49, front: "'Tyger! Tyger! burning bright' and 'She walks in beauty, like the night'", back: "William Blake, The Tyger; Lord Byron, She Walks in Beauty." },
    { id: "ac-f44", lessonId: "british-poets", page: 49, front: "'Oh to be in England now that April's there' and 'What passing-bells for these who die as cattle?'", back: "Robert Browning, Home Thoughts from Abroad; Wilfred Owen, Anthem for Doomed Youth." },
  ],

  questions: [
    // classical-music
    { id: "ac-q01", lessonId: "classical-music", page: 44, type: "single", prompt: "Since when has the BBC organised the Proms?", options: ["1895", "1927", "1945", "1967"], answer: [1], explanation: "The Proms has been organised by the BBC since 1927." },
    { id: "ac-q02", lessonId: "classical-music", page: 44, type: "single", prompt: "Who was the organist at Westminster Abbey and developed a British style distinct from the rest of Europe?", options: ["Henry Purcell", "George Frederick Handel", "Edward Elgar", "Benjamin Britten"], answer: [0], explanation: "Henry Purcell (1659–95) was organist at Westminster Abbey." },
    { id: "ac-q03", lessonId: "classical-music", page: 44, type: "single", prompt: "Which composer wrote the Water Music for King George I?", options: ["Purcell", "Handel", "Holst", "Walton"], answer: [1], explanation: "Handel wrote the Water Music for George I and Music for the Royal Fireworks for George II." },
    { id: "ac-q04", lessonId: "classical-music", page: 44, type: "single", prompt: "Which work by Gustav Holst includes Jupiter?", options: ["Façade", "The Planets", "Messiah", "Peter Grimes"], answer: [1], explanation: "Jupiter, part of The Planets suite, became the tune of 'I vow to thee my country'." },
    { id: "ac-q05", lessonId: "classical-music", page: 44, type: "single", prompt: "Which piece is usually played at the Last Night of the Proms?", options: ["Messiah", "Land of Hope and Glory", "The Planets", "Water Music"], answer: [1], explanation: "Elgar's Pomp and Circumstance March No 1, Land of Hope and Glory, is usually played at the Last Night." },
    { id: "ac-q06", lessonId: "classical-music", page: 45, type: "multi", prompt: "Which TWO operas were written by Benjamin Britten?", options: ["Peter Grimes", "The Mikado", "Billy Budd", "Evita"], answer: [0, 2], explanation: "Britten's operas include Peter Grimes and Billy Budd. The Mikado is Gilbert and Sullivan; Evita is Lloyd Webber." },
    { id: "ac-q07", lessonId: "classical-music", page: 44, type: "truefalse", prompt: "Ralph Vaughan Williams was strongly influenced by traditional English folk music.", options: ["True", "False"], answer: [0], explanation: "True. He wrote music for orchestras and choirs." },
    { id: "ac-q07b", lessonId: "classical-music", page: 44, type: "single", prompt: "Which composer wrote marches for the coronations of George VI and Elizabeth II?", options: ["Sir William Walton", "Sir Edward Elgar", "Henry Purcell", "Gustav Holst"], answer: [0], explanation: "Walton wrote the coronation marches; his best-known works are probably Façade and Belshazzar's Feast." },
    // popular-music
    { id: "ac-q08", lessonId: "popular-music", page: 45, type: "single", prompt: "What is the Mercury Music Prize awarded for?", options: ["Best live performance", "Best album from the UK and Ireland", "Best British solo artist", "Best Welsh poetry"], answer: [1], explanation: "It is awarded each September for the best album from the UK and Ireland." },
    { id: "ac-q09", lessonId: "popular-music", page: 45, type: "single", prompt: "The National Eisteddfod is a cultural festival of which country?", options: ["Scotland", "Ireland", "Wales", "Cornwall"], answer: [2], explanation: "The National Eisteddfod of Wales is held largely in Welsh and includes Welsh poetry competitions." },
    { id: "ac-q10", lessonId: "popular-music", page: 45, type: "multi", prompt: "Which TWO are famous summer music festivals named in the handbook?", options: ["Glastonbury", "The Proms", "The Isle of Wight Festival", "The Fringe"], answer: [0, 2], explanation: "Glastonbury, the Isle of Wight Festival and the V Festival are the music festivals named." },
    { id: "ac-q11", lessonId: "popular-music", page: 45, type: "single", prompt: "Where is the SECC music venue?", options: ["Edinburgh", "Glasgow", "Cardiff", "Belfast"], answer: [1], explanation: "The Scottish Exhibition and Conference Centre (SECC) is in Glasgow." },
    { id: "ac-q12", lessonId: "popular-music", page: 45, type: "truefalse", prompt: "The Punk movement began in the late 1970s.", options: ["True", "False"], answer: [0], explanation: "True. The handbook gives Punk (late 1970s) and boy and girl bands (1990s) as examples of innovation." },
    { id: "ac-q13", lessonId: "popular-music", page: 45, type: "single", prompt: "Where is The O2 venue?", options: ["Greenwich, south-east London", "Wembley, north-west London", "Manchester", "Glasgow"], answer: [0], explanation: "The O2 is in Greenwich, south-east London." },
    // theatre
    { id: "ac-q14", lessonId: "theatre", page: 45, type: "single", prompt: "Who wrote The Mousetrap?", options: ["Agatha Christie", "J K Rowling", "Evelyn Waugh", "Harold Pinter"], answer: [0], explanation: "The Mousetrap, a murder-mystery by Dame Agatha Christie, has run in the West End since 1952." },
    { id: "ac-q15", lessonId: "theatre", page: 45, type: "single", prompt: "Since when has The Mousetrap been running in the West End?", options: ["1932", "1952", "1972", "1992"], answer: [1], explanation: "Since 1952, the longest initial run of any show in history." },
    { id: "ac-q16", lessonId: "theatre", page: 45, type: "multi", prompt: "Which TWO were written by Gilbert and Sullivan?", options: ["HMS Pinafore", "Cats", "The Pirates of Penzance", "Evita"], answer: [0, 2], explanation: "Gilbert and Sullivan wrote HMS Pinafore, The Pirates of Penzance and The Mikado. Cats and Evita are by Andrew Lloyd Webber." },
    { id: "ac-q17", lessonId: "theatre", page: 45, type: "single", prompt: "In a pantomime, who is the Dame?", options: ["The fairy godmother", "A woman played by a man", "The villain", "A horse played by two actors"], answer: [1], explanation: "The Dame is a traditional pantomime character: a woman played by a man." },
    { id: "ac-q18", lessonId: "theatre", page: 45, type: "single", prompt: "What is the Edinburgh Festival Fringe mainly a showcase of?", options: ["Classical music", "Theatre and comedy", "Art and sculpture", "Welsh poetry"], answer: [1], explanation: "The Fringe is mainly theatre and comedy and often shows experimental work." },
    { id: "ac-q19", lessonId: "theatre", page: 45, type: "single", prompt: "Who are the Laurence Olivier Awards named after?", options: ["A playwright", "A British actor best known for Shakespeare roles", "A theatre owner", "A composer"], answer: [1], explanation: "They are named after Sir Laurence Olivier, later Lord Olivier, best known for roles in Shakespeare plays." },
    { id: "ac-q19b", lessonId: "theatre", page: 45, type: "truefalse", prompt: "Andrew Lloyd Webber wrote Jesus Christ Superstar and Evita in collaboration with Tim Rice.", options: ["True", "False"], answer: [0], explanation: "True. He also wrote Cats and The Phantom of the Opera." },
    // art
    { id: "ac-q20", lessonId: "art", page: 46, type: "single", prompt: "John Constable is most famous for his paintings of which place?", options: ["The Lake District", "Dedham Vale", "Snowdonia", "The Scottish Highlands"], answer: [1], explanation: "Constable painted Dedham Vale on the Suffolk–Essex border." },
    { id: "ac-q21", lessonId: "art", page: 45, type: "single", prompt: "When was the Turner Prize established?", options: ["1851", "1924", "1968", "1984"], answer: [3], explanation: "The Turner Prize was established in 1984 and celebrates contemporary art." },
    { id: "ac-q22", lessonId: "art", page: 46, type: "multi", prompt: "Which TWO artists were members of the Pre-Raphaelites?", options: ["Dante Gabriel Rossetti", "Thomas Gainsborough", "Sir John Millais", "Henry Moore"], answer: [0, 2], explanation: "The Pre-Raphaelites included Holman Hunt, Dante Gabriel Rossetti and Sir John Millais." },
    { id: "ac-q23", lessonId: "art", page: 46, type: "single", prompt: "Henry Moore is best known for what?", options: ["Stained glass", "Large bronze abstract sculptures", "Royal portraits", "Pop art"], answer: [1], explanation: "Henry Moore was an English sculptor best known for large bronze abstract sculptures." },
    { id: "ac-q24", lessonId: "art", page: 46, type: "single", prompt: "Which artist was an important contributor to the 'pop art' movement of the 1960s?", options: ["Lucian Freud", "David Hockney", "John Petts", "Sir John Lavery"], answer: [1], explanation: "David Hockney was an important contributor to 1960s pop art." },
    { id: "ac-q25", lessonId: "art", page: 46, type: "single", prompt: "Sir John Lavery was a very successful portrait painter from which country?", options: ["Scotland", "Wales", "Northern Ireland", "England"], answer: [2], explanation: "Lavery was a Northern Irish portrait painter whose work included the Royal Family." },
    { id: "ac-q25b", lessonId: "art", page: 45, type: "truefalse", prompt: "Hans Holbein and Sir Anthony Van Dyck were painters from abroad who worked in Britain in the 16th and 17th centuries.", options: ["True", "False"], answer: [0], explanation: "True. British artists became well known from the 18th century onwards." },
    { id: "ac-q25c", lessonId: "art", page: 46, type: "single", prompt: "Which Welsh artist is best known for engravings and stained glass?", options: ["John Petts", "David Allan", "Lucian Freud", "Henry Moore"], answer: [0], explanation: "John Petts (1914–91) was a Welsh artist known for engravings and stained glass." },
    // architecture-and-gardens
    { id: "ac-q26", lessonId: "architecture-and-gardens", page: 46, type: "single", prompt: "Who designed the new St Paul's Cathedral?", options: ["Inigo Jones", "Sir Christopher Wren", "Robert Adam", "Sir Edwin Lutyens"], answer: [1], explanation: "Sir Christopher Wren helped develop a British version of European ornate styles in buildings such as St Paul's." },
    { id: "ac-q27", lessonId: "architecture-and-gardens", page: 46, type: "single", prompt: "Inigo Jones designed which two buildings?", options: ["The Queen's House and the Banqueting House", "St Paul's and the Cenotaph", "Dumfries House and the Royal Crescent", "Hardwick Hall and St Pancras Station"], answer: [0], explanation: "Inigo Jones designed the Queen's House at Greenwich and the Banqueting House in Whitehall." },
    { id: "ac-q28", lessonId: "architecture-and-gardens", page: 48, type: "single", prompt: "Who designed the Cenotaph in Whitehall?", options: ["Sir Christopher Wren", "Sir Norman Foster", "Sir Edwin Lutyens", "Capability Brown"], answer: [2], explanation: "Sir Edwin Lutyens designed the Cenotaph and many other war memorials, as well as New Delhi." },
    { id: "ac-q29", lessonId: "architecture-and-gardens", page: 47, type: "multi", prompt: "Which TWO were built in the 19th-century gothic style?", options: ["The Houses of Parliament", "The Queen's House", "St Pancras Station", "The White Tower"], answer: [0, 2], explanation: "The Houses of Parliament and St Pancras Station were built in the revived gothic style, as were Manchester and Sheffield town halls." },
    { id: "ac-q30", lessonId: "architecture-and-gardens", page: 48, type: "single", prompt: "Which garden designer said that a place had 'capabilities'?", options: ["Gertrude Jekyll", "Lancelot Brown", "Robert Adam", "Thomas Chippendale"], answer: [1], explanation: "Lancelot 'Capability' Brown designed natural-looking grounds around country houses in the 18th century." },
    { id: "ac-q31", lessonId: "architecture-and-gardens", page: 47, type: "single", prompt: "Robert Adam designed the inside decoration as well as the building itself at which great house?", options: ["Hardwick Hall", "Dumfries House", "Blenheim Palace", "The Queen's House"], answer: [1], explanation: "The Scottish architect Robert Adam designed Dumfries House in Scotland, inside and out." },
    { id: "ac-q32", lessonId: "architecture-and-gardens", page: 46, type: "truefalse", prompt: "The White Tower in the Tower of London is an example of a Norman castle keep.", options: ["True", "False"], answer: [0], explanation: "True. It was built on the orders of William the Conqueror." },
    { id: "ac-q32b", lessonId: "architecture-and-gardens", page: 48, type: "single", prompt: "Which annual event showcases garden design from Britain and around the world?", options: ["The Chelsea Flower Show", "The Proms", "The Edinburgh Fringe", "The Turner Prize"], answer: [0], explanation: "The annual Chelsea Flower Show showcases garden design." },
    // fashion-and-literature
    { id: "ac-q33", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Which novel was voted the country's best-loved novel in 2003?", options: ["Pride and Prejudice", "Harry Potter", "The Lord of the Rings", "Great Expectations"], answer: [2], explanation: "The Lord of the Rings by JRR Tolkien was voted the best-loved novel in 2003." },
    { id: "ac-q34", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Who wrote Pride and Prejudice?", options: ["Jane Austen", "Charles Dickens", "Thomas Hardy", "Agatha Christie"], answer: [0], explanation: "Jane Austen's novels include Pride and Prejudice and Sense and Sensibility." },
    { id: "ac-q35", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Who created the detective Sherlock Holmes?", options: ["Agatha Christie", "Sir Arthur Conan Doyle", "Robert Louis Stevenson", "Ian Fleming"], answer: [1], explanation: "Sir Arthur Conan Doyle, a Scottish doctor and writer." },
    { id: "ac-q36", lessonId: "fashion-and-literature", page: 48, type: "multi", prompt: "Which TWO are British winners of the Nobel Prize in Literature named in the handbook?", options: ["Seamus Heaney", "J K Rowling", "Harold Pinter", "Charles Dickens"], answer: [0, 2], explanation: "The handbook names Sir William Golding, Seamus Heaney and Harold Pinter." },
    { id: "ac-q37", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "In everyday talk, what does calling someone 'a Scrooge' mean?", options: ["They are always hopeful", "They are mean", "They are a detective", "They are lucky"], answer: [1], explanation: "Scrooge, from Dickens, means a mean person. Mr Micawber means someone always hopeful." },
    { id: "ac-q38", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Which designer is known for Art Deco ceramics?", options: ["Thomas Chippendale", "Clarice Cliff", "Sir Terence Conran", "Mary Quant"], answer: [1], explanation: "Clarice Cliff designed Art Deco ceramics; Chippendale designed furniture; Conran was an interior designer." },
    { id: "ac-q39", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Which author wrote Treasure Island, Kidnapped and Dr Jekyll and Mr Hyde?", options: ["Robert Louis Stevenson", "Evelyn Waugh", "Graham Greene", "Thomas Hardy"], answer: [0], explanation: "Robert Louis Stevenson (1850–94)." },
    { id: "ac-q39b", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Since when has the Man Booker Prize for Fiction been awarded?", options: ["1928", "1948", "1968", "1984"], answer: [2], explanation: "It has been awarded since 1968. Past winners include Ian McEwan, Hilary Mantel and Julian Barnes." },
    { id: "ac-q39c", lessonId: "fashion-and-literature", page: 48, type: "single", prompt: "Evelyn Waugh is perhaps best known for which novel?", options: ["Lucky Jim", "Brideshead Revisited", "Brighton Rock", "Jude the Obscure"], answer: [1], explanation: "Waugh wrote satirical novels such as Decline and Fall and Scoop and is perhaps best known for Brideshead Revisited." },
    // british-poets
    { id: "ac-q40", lessonId: "british-poets", page: 48, type: "single", prompt: "How many lines must a sonnet have?", options: ["10", "12", "14", "16"], answer: [2], explanation: "Sonnets must be 14 lines long. Shakespeare wrote many." },
    { id: "ac-q41", lessonId: "british-poets", page: 48, type: "single", prompt: "Who wrote Paradise Lost?", options: ["Geoffrey Chaucer", "John Milton", "William Blake", "Lord Byron"], answer: [1], explanation: "John Milton, one of the poets inspired by Protestant religious views." },
    { id: "ac-q42", lessonId: "british-poets", page: 49, type: "single", prompt: "Who wrote the lines 'I wander'd lonely as a cloud / That floats on high o'er vales and hills'?", options: ["William Wordsworth", "John Keats", "Robert Browning", "Alfred Lord Tennyson"], answer: [0], explanation: "William Wordsworth, The Daffodils." },
    { id: "ac-q43", lessonId: "british-poets", page: 49, type: "multi", prompt: "Which TWO poets wrote about their experiences in the First World War?", options: ["Wilfred Owen", "Lord Byron", "Siegfried Sassoon", "Percy Shelley"], answer: [0, 2], explanation: "Wilfred Owen and Siegfried Sassoon were inspired to write about the First World War." },
    { id: "ac-q44", lessonId: "british-poets", page: 49, type: "single", prompt: "Where are some of the best-known poets buried or commemorated?", options: ["St Paul's Cathedral", "Poets' Corner, Westminster Abbey", "Canterbury Cathedral", "The British Library"], answer: [1], explanation: "Poets' Corner is in Westminster Abbey." },
    { id: "ac-q45", lessonId: "british-poets", page: 49, type: "single", prompt: "'Tyger! Tyger! burning bright / In the forests of the night' was written by...", options: ["William Blake", "Wilfred Owen", "Lord Byron", "Robert Browning"], answer: [0], explanation: "William Blake (1757–1827), The Tyger." },
    { id: "ac-q46", lessonId: "british-poets", page: 48, type: "truefalse", prompt: "Beowulf is an Anglo-Saxon poem about a hero's battles against monsters.", options: ["True", "False"], answer: [0], explanation: "True. It is still translated into modern English." },
    { id: "ac-q47", lessonId: "british-poets", page: 49, type: "single", prompt: "Which poet wrote poems inspired by Scotland and the stories and songs of the Scottish–English borders, and also wrote novels?", options: ["Robert Burns", "Sir Walter Scott", "William Wordsworth", "Ted Hughes"], answer: [1], explanation: "Sir Walter Scott; many of his novels were set in Scotland." },
    { id: "ac-q48", lessonId: "british-poets", page: 49, type: "single", prompt: "'What passing-bells for these who die as cattle?' comes from which poem?", options: ["The Tyger", "Home Thoughts from Abroad", "Anthem for Doomed Youth", "She Walks in Beauty"], answer: [2], explanation: "Wilfred Owen, Anthem for Doomed Youth." },
  ],

  flags: [
    { page: 45, text: "This PDF reads \"folk music, jazz, pop and music\"; the official handbook says \"pop and rock music\"." },
    { page: 45, text: "The V Festival was last held in 2017, and the SECC in Glasgow has been called the Scottish Event Campus since 2017." },
    { page: 44, text: "Walton's choral work is spelled \"Balthazar's Feast\" in the handbook; the usual spelling is Belshazzar's Feast." },
    { page: 48, text: "The Remembrance Day service at the Cenotaph is described as attended by the Queen; since September 2022 the monarch is King Charles III." },
    { page: 48, text: "The Man Booker Prize has been open to authors of any nationality writing in English since 2014 and has been called the Booker Prize since 2019. The handbook gives the pre-2014 eligibility (Commonwealth, Ireland or Zimbabwe)." },
    { page: 49, text: "The handbook writes \"Poet's Corner\"; the usual form is Poets' Corner." },
  ],
};
