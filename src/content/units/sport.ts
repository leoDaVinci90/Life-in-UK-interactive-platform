import type { Unit } from "../types";

/**
 * Unit 4.4 — Sport. Handbook (Britizen PDF) § 4.7, pp. 64–67.
 * Lesson prose paraphrases the handbook. Anything outside the handbook is in
 * `context` fields or `context` blocks.
 */
export const sport: Unit = {
  id: "sport",
  number: "4.4",
  title: "Sport",
  handbook: {
    chapter: 4,
    chapterTitle: "A modern, thriving society",
    section: "4.7",
    pages: [64, 67],
  },
  status: "available",
  dek: "Famous sportspeople, the Olympics and the sports that began in Britain.",
  heroImageId: "sport-olympic-stadium",
  overview: [
    "Sport plays an important part in many people's lives in the UK, and several of the world's most popular games (cricket, football, lawn tennis, golf and rugby) began in Britain. The handbook covers the major stadiums, the three London Olympic Games, the origins of the Paralympics and a gallery of famous British sportsmen and women.",
    "It then goes sport by sport: cricket and the Ashes, football, rugby union and league, horse racing, golf, tennis, sailing and rowing, motor sport and skiing. Expect test questions on who did what (and when), where famous events are held, and which sports started in which part of the UK.",
  ],
  objectives: [
    "Name the years the UK hosted the Olympic Games and explain where the Paralympics began.",
    "Match famous British sportsmen and women to their sport and their best-known achievement.",
    "Describe the origins of cricket, football, rugby, golf and tennis in the UK.",
    "Name the famous venues and events for each sport, such as the Ashes, Royal Ascot, St Andrews and Wimbledon.",
    "Recall the record-breaking sailors and the history of motor sport and skiing in the UK.",
  ],
  lessons: [
    // ─────────────────────────────────────────────────────────────── Lesson 1
    {
      id: "sport-in-the-uk",
      title: "Sport in the UK and the Olympics",
      dek: "Great stadiums, sports born in Britain, three Olympic Games and the birth of the Paralympics.",
      pages: [64],
      minutes: 5,
      heroImageId: "sport-olympic-stadium",
      recall: {
        question: "Before you read: in which three years has the UK hosted the Olympic Games?",
        answer: "1908, 1948 and 2012. The main site for the 2012 Games was in Stratford, East London.",
      },
      blocks: [
        {
          type: "prose",
          heading: "A sporting nation",
          pages: [64],
          paragraphs: [
            "Sports of all kinds play an important part in many people's lives, and several are particularly popular in the UK. Many sporting events take place at major stadiums such as Wembley Stadium in London and the Millennium Stadium in Cardiff.",
            "Local governments and private companies provide facilities such as swimming pools, tennis courts, football pitches, dry ski slopes and gymnasiums.",
            "Many famous sports began in Britain, including cricket, football, lawn tennis, golf and rugby.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "sport-wembley", kind: "aerial photograph", caption: "Wembley Stadium, London, with its arch, seen from the air." },
            { imageId: "sport-millennium-stadium", kind: "photograph", caption: "The Millennium Stadium in Cardiff city centre." },
          ],
        },
        {
          type: "prose",
          heading: "The Olympic Games",
          pages: [64],
          paragraphs: [
            "The UK has hosted the Olympic Games on three occasions: 1908, 1948 and 2012.",
            "The main Olympic site for the 2012 Games was in Stratford, East London. The British team was very successful across a wide range of sports and finished third in the medal table.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: {
            imageId: "sport-olympic-stadium",
            kind: "photograph",
            caption: "The Olympic Stadium and the Orbit tower in Stratford, East London, on the night of the 2012 opening ceremony.",
          },
        },
        {
          type: "prose",
          heading: "Where the Paralympics began",
          pages: [64],
          paragraphs: [
            "The 2012 Paralympic Games were also hosted in London.",
            "The Paralympics have their origin in the work of Dr Sir Ludwig Guttmann, a German refugee, at the Stoke Mandeville hospital in Buckinghamshire. He developed new methods of treatment for people with spinal injuries and encouraged patients to take part in exercise and sport.",
          ],
        },
        {
          type: "map",
          heading: "Olympic and Paralympic places",
          placeIds: ["sport-wembley", "sport-millennium-stadium", "sport-stratford", "sport-stoke-mandeville"],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "The handbook (and this PDF) spells his name \"Guttman\". The usual spelling is Guttmann; this site uses Guttmann.",
            },
            {
              text: "The Millennium Stadium has been called the Principality Stadium since 2016 for sponsorship reasons. The handbook uses the name Millennium Stadium.",
              verify: "Stadium naming rights can change.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Major stadiums: Wembley Stadium (London) and the Millennium Stadium (Cardiff).", page: 64 },
        { text: "Cricket, football, lawn tennis, golf and rugby all began in Britain.", page: 64 },
        { text: "The UK has hosted the Olympics three times: 1908, 1948 and 2012.", page: 64 },
        { text: "The main 2012 Olympic site was in Stratford, East London; Britain finished third in the medal table.", page: 64 },
        { text: "The Paralympics began with Dr Sir Ludwig Guttmann's work at Stoke Mandeville hospital, Buckinghamshire.", page: 64 },
      ],
      mnemonics: [
        {
          title: "Olympic years",
          device: "08, 48, 12: \"Eight, forty-eight, twenty-twelve.\"",
          explanation: "The first two London Games both end in 8 and are 40 years apart; the third was in 2012.",
        },
        {
          title: "Paralympics",
          device: "Stoke Mandeville = Stoke the Paralympic flame.",
          explanation: "The Paralympic movement grew from Guttmann's work with spinal injury patients at Stoke Mandeville hospital in Buckinghamshire.",
        },
      ],
      checkQuestionIds: ["sp-q01", "sp-q03", "sp-q05"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 2
    {
      id: "sporting-legends",
      title: "Sporting legends",
      dek: "The four-minute mile, the 1966 World Cup, ice dancing gold and record-breaking sailors and athletes.",
      pages: [64, 65],
      minutes: 7,
      heroImageId: "sport-bannister",
      recall: {
        question: "Before you read: who was the first man in the world to run a mile in under four minutes, and when?",
        answer: "Sir Roger Bannister, in 1954.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Notable British sportsmen and women",
          pages: [64],
          paragraphs: [
            "The handbook profiles a series of notable British sportsmen and women. This lesson covers the first nine; the next covers the stars of the 2004–2012 era.",
          ],
        },
        {
          type: "cards",
          heading: "Legends of the 20th century",
          cards: [
            {
              id: "bannister",
              title: "Sir Roger Bannister",
              meta: "1929– · Athletics",
              summary: "First man in the world to run a mile in under four minutes, in 1954.",
              detail: ["Sir Roger Bannister was the first man in the world to run a mile in under four minutes, in 1954."],
              page: 64,
              imageId: "sport-bannister",
              context: { text: "The run took place at the Iffley Road track in Oxford on 6 May 1954. Bannister died in 2018; the handbook shows him as still living." },
            },
            {
              id: "jackie-stewart",
              title: "Sir Jackie Stewart",
              meta: "1939– · Motor racing, Scotland",
              summary: "Scottish former racing driver, three times Formula 1 world champion.",
              detail: ["Sir Jackie Stewart is a Scottish former racing driver who won the Formula 1 world championship three times."],
              page: 64,
            },
            {
              id: "bobby-moore",
              title: "Bobby Moore",
              meta: "1941–93 · Football",
              summary: "Captained the England team that won the World Cup in 1966.",
              detail: ["Bobby Moore captained the English football team that won the World Cup in 1966."],
              page: 64,
              imageId: "sport-bobby-moore",
            },
            {
              id: "ian-botham",
              title: "Sir Ian Botham",
              meta: "1955– · Cricket",
              summary: "Captained England's cricket team; holds Test records for batting and bowling.",
              detail: ["Sir Ian Botham captained the English cricket team and holds a number of English Test cricket records, both for batting and for bowling."],
              page: 64,
            },
            {
              id: "torvill-dean",
              title: "Jayne Torvill and Christopher Dean",
              meta: "1957– and 1958– · Ice dancing",
              summary: "Olympic ice-dancing gold in 1984 and four consecutive world championships.",
              detail: ["Jayne Torvill and Christopher Dean won gold medals for ice dancing at the 1984 Olympic Games and in four consecutive world championships."],
              page: 64,
            },
            {
              id: "redgrave",
              title: "Sir Steve Redgrave",
              meta: "1962– · Rowing",
              summary: "Rowing gold medals at five consecutive Olympic Games.",
              detail: ["Sir Steve Redgrave won gold medals in rowing in five consecutive Olympic Games and is one of Britain's greatest Olympians."],
              page: 64,
            },
            {
              id: "tanni-grey-thompson",
              title: "Baroness Tanni Grey-Thompson",
              meta: "1969– · Wheelchair athletics",
              summary: "16 Paralympic medals (11 gold), six London Marathon wins, 30 world records.",
              detail: [
                "An athlete who uses a wheelchair, she won 16 Paralympic medals, including 11 gold medals, in races over five Paralympic Games.",
                "She won the London Marathon six times and broke a total of 30 world records.",
              ],
              page: 65,
            },
            {
              id: "kelly-holmes",
              title: "Dame Kelly Holmes",
              meta: "1970– · Athletics",
              summary: "Two running gold medals at the 2004 Olympic Games.",
              detail: ["Dame Kelly Holmes won two gold medals for running in the 2004 Olympic Games. She has held a number of British and European records."],
              page: 65,
            },
            {
              id: "ellen-macarthur",
              title: "Dame Ellen MacArthur",
              meta: "1976– · Sailing",
              summary: "In 2004 became the fastest person to sail around the world single-handed.",
              detail: ["Dame Ellen MacArthur is a yachtswoman who, in 2004, became the fastest person to sail around the world single-handed."],
              page: 65,
              imageId: "sport-ellen-macarthur",
            },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "This PDF prints \"Baroness Tanni-Grey Thompson\". Her name is usually written Tanni Grey-Thompson. The handbook's life dates and records describe 2013; several of these people have since retired, set new records or (Bannister, 2018) died.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Sir Roger Bannister: first man to run a mile in under four minutes, 1954.", page: 64 },
        { text: "Sir Jackie Stewart: Scottish racing driver, Formula 1 world champion three times.", page: 64 },
        { text: "Bobby Moore captained England to World Cup victory in 1966.", page: 64 },
        { text: "Sir Ian Botham captained England at cricket and holds Test records for batting and bowling.", page: 64 },
        { text: "Torvill and Dean: Olympic ice-dancing gold in 1984 and four consecutive world championships.", page: 64 },
        { text: "Sir Steve Redgrave won rowing gold at five consecutive Olympic Games.", page: 64 },
        { text: "Tanni Grey-Thompson: 16 Paralympic medals (11 gold), six London Marathons, 30 world records.", page: 65 },
        { text: "Dame Kelly Holmes: two running golds at the 2004 Olympics. Dame Ellen MacArthur: fastest solo sail round the world, 2004.", page: 65 },
      ],
      mnemonics: [
        {
          title: "Two 2004 Dames",
          device: "Kelly ran, Ellen sailed: both made history in 2004.",
          explanation: "Dame Kelly Holmes won two Olympic golds in 2004; Dame Ellen MacArthur became the fastest person to sail single-handed around the world in 2004.",
        },
        {
          title: "Counting golds",
          device: "Redgrave 5 in a row, Stewart 3 titles, Torvill & Dean 4 world titles.",
          explanation: "Five consecutive Olympic rowing golds; three Formula 1 world championships; four consecutive ice-dancing world championships plus 1984 Olympic gold.",
        },
      ],
      checkQuestionIds: ["sp-q07", "sp-q09", "sp-q11"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 3
    {
      id: "modern-champions",
      title: "Modern champions",
      dek: "Cyclists, runners, Paralympians and a Grand Slam winner: the stars of 2004 to 2012.",
      pages: [65],
      minutes: 6,
      heroImageId: "sport-mo-farah",
      recall: {
        question: "Before you read: who became the first Briton to win the Tour de France, and in which year?",
        answer: "Bradley Wiggins, in 2012.",
      },
      blocks: [
        {
          type: "cards",
          heading: "Champions of the 21st century",
          cards: [
            {
              id: "chris-hoy",
              title: "Sir Chris Hoy",
              meta: "1976– · Cycling, Scotland",
              summary: "Scottish cyclist: six Olympic golds and one silver, 11 world titles.",
              detail: ["Sir Chris Hoy is a Scottish cyclist who has won six gold and one silver Olympic medals. He has also won 11 world championship titles."],
              page: 65,
              imageId: "sport-chris-hoy",
            },
            {
              id: "david-weir",
              title: "David Weir",
              meta: "1979– · Wheelchair athletics",
              summary: "Six Paralympic golds over two Games; won the London Marathon six times.",
              detail: ["David Weir is a Paralympian who uses a wheelchair. He has won six gold medals over two Paralympic Games and has won the London Marathon six times."],
              page: 65,
            },
            {
              id: "bradley-wiggins",
              title: "Bradley Wiggins",
              meta: "1980– · Cycling",
              summary: "First Briton to win the Tour de France (2012); seven Olympic medals.",
              detail: [
                "In 2012 he became the first Briton to win the Tour de France.",
                "He has won seven Olympic medals, including gold medals at the 2004, 2008 and 2012 Olympic Games.",
              ],
              page: 65,
              imageId: "sport-bradley-wiggins",
            },
            {
              id: "mo-farah",
              title: "Mo Farah",
              meta: "1983– · Distance running, born in Somalia",
              summary: "2012 Olympic gold in the 5,000 and 10,000 metres.",
              detail: [
                "Mo Farah is a British distance runner, born in Somalia.",
                "He won gold medals in the 2012 Olympics for the 5,000 and 10,000 metres and is the first Briton to win Olympic gold in the 10,000 metres.",
              ],
              page: 65,
              imageId: "sport-mo-farah",
            },
            {
              id: "jessica-ennis",
              title: "Jessica Ennis",
              meta: "1986– · Athletics",
              summary: "2012 Olympic gold in the heptathlon (seven track and field events).",
              detail: [
                "She won the 2012 Olympic gold medal in the heptathlon, which includes seven different track and field events.",
                "She also holds a number of British athletics records.",
              ],
              page: 65,
              imageId: "sport-jessica-ennis",
            },
            {
              id: "andy-murray",
              title: "Andy Murray",
              meta: "1987– · Tennis, Scotland",
              summary: "Won the 2012 US Open: the first British man to win a Grand Slam singles title since 1936.",
              detail: [
                "Andy Murray is a Scottish tennis player who won the men's singles at the US Open in 2012.",
                "He was the first British man to win a singles title in a Grand Slam tournament since 1936.",
                "In the same year he won Olympic gold and silver medals and was runner-up in the men's singles at Wimbledon.",
              ],
              page: 65,
              imageId: "sport-andy-murray",
              context: { text: "Murray went on to win Wimbledon in 2013 and 2016, after the handbook was written." },
            },
            {
              id: "ellie-simmonds",
              title: "Ellie Simmonds",
              meta: "1994– · Paralympic swimming",
              summary: "Swimming golds at the 2008 and 2012 Paralympics; youngest of the 2008 British team.",
              detail: [
                "Ellie Simmonds won gold medals for swimming at the 2008 and 2012 Paralympic Games and holds a number of world records.",
                "She was the youngest member of the British team at the 2008 Games.",
              ],
              page: 65,
            },
          ],
        },
        {
          type: "sequence",
          heading: "Who did what in 2012",
          page: 65,
          steps: [
            { label: "Bradley Wiggins", detail: "First Briton to win the Tour de France; Olympic gold." },
            { label: "Mo Farah", detail: "Olympic gold in the 5,000 m and 10,000 m." },
            { label: "Jessica Ennis", detail: "Olympic gold in the heptathlon." },
            { label: "Andy Murray", detail: "US Open men's singles champion; Olympic gold and silver; Wimbledon runner-up." },
            { label: "Ellie Simmonds", detail: "Paralympic swimming gold (as in 2008)." },
          ],
        },
        {
          type: "context",
          title: "Check before your test",
          body: [
            {
              text: "Medal counts and records here are as the handbook gives them (up to 2012). Several of these athletes won more medals later, and Jessica Ennis is now known as Jessica Ennis-Hill. Learn the handbook's figures for the test.",
            },
          ],
        },
      ],
      keyFacts: [
        { text: "Sir Chris Hoy (Scottish cyclist): six Olympic golds and one silver; 11 world titles.", page: 65 },
        { text: "David Weir: six Paralympic golds over two Games; six London Marathon wins.", page: 65 },
        { text: "Bradley Wiggins: first Briton to win the Tour de France, 2012; seven Olympic medals.", page: 65 },
        { text: "Mo Farah, born in Somalia: 2012 Olympic gold in the 5,000 m and 10,000 m.", page: 65 },
        { text: "Jessica Ennis: 2012 Olympic gold in the heptathlon (seven events).", page: 65 },
        { text: "Andy Murray: 2012 US Open, first British male Grand Slam singles winner since 1936.", page: 65 },
        { text: "Ellie Simmonds: Paralympic swimming gold in 2008 and 2012; youngest in the 2008 team.", page: 65 },
      ],
      mnemonics: [
        {
          title: "Hepta = seven",
          device: "Heptathlon = seven events (like a heptagon has seven sides).",
          explanation: "Jessica Ennis won the 2012 heptathlon, which combines seven track and field events.",
        },
        {
          title: "Six and six",
          device: "Weir: 6 golds, 6 marathons. Grey-Thompson also won the London Marathon 6 times.",
          explanation: "Both wheelchair athletes won the London Marathon six times. Weir won six Paralympic golds; Grey-Thompson won 11.",
        },
        {
          title: "Scots on the list",
          device: "Stewart, Hoy, Murray: the three Scots.",
          explanation: "The handbook describes Jackie Stewart, Chris Hoy and Andy Murray as Scottish.",
        },
      ],
      checkQuestionIds: ["sp-q15", "sp-q16", "sp-q18"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 4
    {
      id: "cricket-football-rugby-racing",
      title: "Cricket, football, rugby and racing",
      dek: "The Ashes, the 1966 World Cup, the Six Nations and the great race meetings.",
      pages: [65, 66],
      minutes: 6,
      heroImageId: "sport-lords",
      recall: {
        question: "Before you read: what is the Ashes, and which two countries play for it?",
        answer: "A series of cricket Test matches played between England and Australia.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Cricket",
          pages: [65],
          paragraphs: [
            "Cricket originated in England and is now played in many countries. Games can last up to five days and still end in a draw.",
            "Its unusual nature and complex laws are said to reflect the best of the British character and sense of fair play. Cricket expressions have passed into everyday language: 'rain stopped play', 'batting on a sticky wicket', 'playing a straight bat', 'bowled a googly' and 'it's just not cricket'.",
            "The most famous competition is the Ashes, a series of Test matches played between England and Australia.",
          ],
        },
        {
          type: "figure",
          figure: {
            imageId: "sport-lords",
            kind: "photograph",
            caption: "A cricket match at Lord's Cricket Ground, London.",
            context: "Lord's is not named in the handbook. It is shown as a well-known English cricket ground.",
          },
        },
        {
          type: "prose",
          heading: "Football",
          pages: [66],
          paragraphs: [
            "Football is the UK's most popular sport. It has a long history and the first professional clubs were formed in the late 19th century.",
            "England, Scotland, Wales and Northern Ireland each have separate leagues. The English Premier League attracts a huge international audience and many of the world's best players. UK teams also play in European competitions such as the UEFA (Union of European Football Associations) Champions League. Most towns and cities have a professional club, and there can be great rivalry between clubs and fans.",
            "Each country of the UK has its own national team, which competes in tournaments such as the FIFA (Fédération Internationale de Football Association) World Cup and the UEFA European Championships. England's only international tournament victory was the 1966 World Cup, hosted in the UK.",
            "Football is also widely played by amateurs every week in parks all over the UK.",
          ],
        },
        {
          type: "prose",
          heading: "Rugby",
          pages: [66],
          paragraphs: [
            "Rugby originated in England in the early 19th century. There are two types, with different rules: union and league. Both have separate leagues and national teams in England, Wales, Scotland and Northern Ireland (which plays together with the Irish Republic).",
            "The most famous rugby union competition is the Six Nations Championship between England, Ireland, Scotland, Wales, France and Italy. The Super League is the best-known rugby league (club) competition.",
          ],
        },
        {
          type: "prose",
          heading: "Horse racing",
          pages: [66],
          paragraphs: [
            "Horse racing in Britain has a very long history, with evidence of events as far back as Roman times, and a long association with royalty. There are racecourses all over the UK.",
          ],
        },
        {
          type: "cards",
          heading: "Famous horse-racing events",
          cards: [
            { id: "royal-ascot", title: "Royal Ascot", meta: "Berkshire", summary: "A five-day race meeting attended by members of the Royal Family.", detail: ["Royal Ascot is a five-day race meeting in Berkshire attended by members of the Royal Family."], page: 66, imageId: "sport-ascot" },
            { id: "grand-national", title: "The Grand National", meta: "Aintree, near Liverpool", summary: "The famous steeplechase held at Aintree.", detail: ["The Grand National is run at Aintree near Liverpool."], page: 66 },
            { id: "scottish-grand-national", title: "The Scottish Grand National", meta: "Ayr", summary: "Scotland's Grand National, run at Ayr.", detail: ["The Scottish Grand National is run at Ayr."], page: 66 },
            { id: "horseracing-museum", title: "National Horseracing Museum", meta: "Newmarket, Suffolk", summary: "The national museum of horse racing.", detail: ["There is a National Horseracing Museum in Newmarket, Suffolk."], page: 66 },
          ],
        },
        { type: "map", heading: "Racing on the map", placeIds: ["sport-ascot", "sport-aintree", "sport-ayr", "sport-newmarket"] },
      ],
      keyFacts: [
        { text: "Cricket originated in England; games can last up to five days and still be a draw.", page: 65 },
        { text: "The Ashes is a series of Test matches between England and Australia.", page: 65 },
        { text: "Football is the UK's most popular sport; the first professional clubs formed in the late 19th century.", page: 66 },
        { text: "England's only international tournament win was the 1966 World Cup, hosted in the UK.", page: 66 },
        { text: "Rugby originated in England in the early 19th century; there are two types, union and league.", page: 66 },
        { text: "Six Nations: England, Ireland, Scotland, Wales, France and Italy. The Super League is for rugby league.", page: 66 },
        { text: "Royal Ascot (Berkshire), Grand National (Aintree, near Liverpool), Scottish Grand National (Ayr); museum at Newmarket, Suffolk.", page: 66 },
      ],
      mnemonics: [
        {
          title: "Six Nations",
          device: "The four home nations (with Ireland as one team) plus France and Italy.",
          explanation: "England, Scotland, Wales and Ireland, plus France and Italy, make six.",
        },
        {
          title: "Grand Nationals",
          device: "A for Aintree, A for Ayr.",
          explanation: "The Grand National is at Aintree (near Liverpool); the Scottish Grand National is at Ayr.",
        },
        {
          title: "Union and League",
          device: "Rugby has two codes: the Six Nations is Union, the Super League is League.",
          explanation: "Matching the word \"League\" in Super League to rugby league helps keep them apart.",
        },
      ],
      checkQuestionIds: ["sp-q20", "sp-q22", "sp-q25"],
    },

    // ─────────────────────────────────────────────────────────────── Lesson 5
    {
      id: "golf-tennis-sailing-motor",
      title: "Golf, tennis, water and motor sports",
      dek: "St Andrews, Wimbledon, the round-the-world sailors, the Boat Race, Formula 1 and skiing.",
      pages: [67],
      minutes: 6,
      heroImageId: "sport-st-andrews",
      recall: {
        question: "Before you read: which tennis tournament is the only Grand Slam played on grass?",
        answer: "The Wimbledon Championships, held at the All England Lawn Tennis and Croquet Club. It is also the oldest tennis tournament in the world.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Golf",
          pages: [67],
          paragraphs: [
            "The modern game of golf can be traced back to 15th-century Scotland. It is played socially as well as professionally, on public and private courses all over the UK.",
            "St Andrews in Scotland is known as the home of golf. The Open Championship is the only 'Major' tournament held outside the United States, and it is hosted by a different course every year.",
          ],
        },
        {
          type: "figure",
          wide: true,
          figure: { imageId: "sport-st-andrews", kind: "photograph", caption: "The Old Course at St Andrews, Fife, with the Swilcan Bridge." },
        },
        {
          type: "prose",
          heading: "Tennis",
          pages: [67],
          paragraphs: [
            "Modern tennis evolved in England in the late 19th century. The first tennis club was founded in Leamington Spa in 1872.",
            "The most famous tournament in Britain is the Wimbledon Championships, held each year at the All England Lawn Tennis and Croquet Club. It is the oldest tennis tournament in the world and the only 'Grand Slam' event played on grass.",
          ],
        },
        {
          type: "figure",
          figure: { imageId: "sport-wimbledon", kind: "photograph", caption: "Centre Court at the Wimbledon Championships." },
        },
        {
          type: "prose",
          heading: "Water sports",
          pages: [67],
          paragraphs: [
            "Sailing remains popular, reflecting Britain's maritime heritage. Sir Francis Chichester was the first person to sail single-handed around the world, in 1966/67. Two years later Sir Robin Knox-Johnston became the first person to do it without stopping.",
            "The most famous of the UK's many sailing events is at Cowes on the Isle of Wight.",
            "Rowing is popular both as a leisure activity and as a competitive sport. There is a popular yearly race on the Thames between Oxford and Cambridge Universities.",
          ],
        },
        {
          type: "figures",
          figures: [
            { imageId: "sport-gipsy-moth", kind: "photograph", caption: "Gipsy Moth IV, the yacht in which Sir Francis Chichester sailed single-handed around the world in 1966/67." },
            { imageId: "sport-boat-race", kind: "illustration", caption: "The Oxford and Cambridge Boat Race on the Thames, from a newspaper illustration of March 1877." },
          ],
        },
        {
          type: "prose",
          heading: "Motor sports",
          pages: [67],
          paragraphs: [
            "There is a long history of motor sport in the UK, for both cars and motorcycles. Motor-car racing in the UK started in 1902, and the UK remains a world leader in developing and manufacturing motor-sport technology.",
            "A Formula 1 Grand Prix is held in the UK each year, and several British drivers have won the Formula 1 World Championship. Recent British winners include Damon Hill, Lewis Hamilton and Jensen Button.",
          ],
        },
        {
          type: "prose",
          heading: "Skiing",
          pages: [67],
          paragraphs: [
            "Skiing is increasingly popular. Many people ski abroad, and there are dry ski slopes throughout the UK; skiing on snow may be possible in winter. There are five ski centres in Scotland, and Europe's longest dry ski slope is near Edinburgh.",
          ],
        },
        {
          type: "map",
          heading: "Golf, tennis, sailing and skiing",
          placeIds: ["sport-st-andrews", "sport-leamington-spa", "sport-wimbledon", "sport-cowes", "sport-boat-race", "sport-edinburgh-ski"],
        },
        {
          type: "context",
          title: "Beyond the handbook",
          body: [
            { text: "The British Grand Prix is usually held at Silverstone, Northamptonshire." },
            { text: "Lewis Hamilton has won several more world championships since the handbook was written." },
          ],
        },
      ],
      keyFacts: [
        { text: "Modern golf dates back to 15th-century Scotland; St Andrews is the home of golf.", page: 67 },
        { text: "The Open Championship is the only golf 'Major' held outside the USA.", page: 67 },
        { text: "The first tennis club was founded in Leamington Spa in 1872.", page: 67 },
        { text: "Wimbledon: the oldest tennis tournament in the world and the only Grand Slam on grass.", page: 67 },
        { text: "Sir Francis Chichester: first to sail single-handed around the world (1966/67). Sir Robin Knox-Johnston: first non-stop, two years later.", page: 67 },
        { text: "The most famous sailing event is at Cowes, Isle of Wight; Oxford and Cambridge race each year on the Thames.", page: 67 },
        { text: "Motor-car racing in the UK started in 1902. Recent British F1 champions: Damon Hill, Lewis Hamilton, Jensen Button.", page: 67 },
        { text: "Five ski centres in Scotland; Europe's longest dry ski slope is near Edinburgh.", page: 67 },
      ],
      mnemonics: [
        {
          title: "Chichester then Knox-Johnston",
          device: "C before K, as in the alphabet: first round, then first non-stop.",
          explanation: "Chichester sailed single-handed round the world in 1966/67; Knox-Johnston did it without stopping two years later.",
        },
        {
          title: "Grass and age",
          device: "Wimbledon: oldest and only on grass.",
          explanation: "Wimbledon is the world's oldest tennis tournament and the only Grand Slam on grass.",
        },
        {
          title: "Early dates",
          device: "Tennis club 1872, car racing 1902: thirty years apart.",
          explanation: "Leamington Spa's tennis club (1872) came 30 years before UK motor-car racing started (1902).",
        },
      ],
      checkQuestionIds: ["sp-q29", "sp-q31", "sp-q33"],
    },
  ],

  timeline: [
    { id: "sp-t-tennis-club", date: "1872", sortYear: 1872, title: "First tennis club founded", summary: "The first tennis club is founded in Leamington Spa.", people: [], whyItMatters: "Modern tennis evolved in England in the late 19th century.", remember: ["Leamington Spa", "1872"], page: 67, lessonId: "golf-tennis-sailing-motor" },
    { id: "sp-t-motor-racing", date: "1902", sortYear: 1902, title: "Motor-car racing begins in the UK", summary: "Motor-car racing in the UK starts.", people: [], whyItMatters: "The UK is still a world leader in motor-sport technology.", remember: ["1902"], page: 67, lessonId: "golf-tennis-sailing-motor" },
    { id: "sp-t-olympics-1908", date: "1908", sortYear: 1908, title: "The UK hosts the Olympic Games", summary: "The first of three Olympic Games hosted by the UK.", people: [], whyItMatters: "The UK has hosted the Games three times.", remember: ["1908, 1948, 2012"], page: 64, lessonId: "sport-in-the-uk" },
    { id: "sp-t-olympics-1948", date: "1948", sortYear: 1948, title: "The UK hosts the Olympic Games again", summary: "The second Olympic Games hosted by the UK.", people: [], whyItMatters: "The second of the UK's three Olympic Games.", remember: ["1948"], page: 64, lessonId: "sport-in-the-uk" },
    { id: "sp-t-bannister", date: "1954", sortYear: 1954, title: "The four-minute mile", summary: "Roger Bannister becomes the first man in the world to run a mile in under four minutes.", people: ["Sir Roger Bannister"], whyItMatters: "A world first in athletics.", remember: ["1954", "Under four minutes"], imageId: "sport-bannister", page: 64, lessonId: "sporting-legends" },
    { id: "sp-t-world-cup", date: "1966", sortYear: 1966, title: "England win the World Cup", summary: "England, captained by Bobby Moore, win the World Cup, hosted in the UK.", people: ["Bobby Moore"], whyItMatters: "England's only international tournament victory.", remember: ["1966", "Hosted in the UK", "Captain: Bobby Moore"], imageId: "sport-bobby-moore", page: 66, lessonId: "cricket-football-rugby-racing" },
    { id: "sp-t-chichester", date: "1966/67", sortYear: 1966.5, title: "First single-handed voyage around the world", summary: "Sir Francis Chichester becomes the first person to sail single-handed around the world.", people: ["Sir Francis Chichester"], whyItMatters: "A landmark of British sailing.", remember: ["1966/67", "Single-handed"], imageId: "sport-gipsy-moth", page: 67, lessonId: "golf-tennis-sailing-motor" },
    { id: "sp-t-knox-johnston", date: "Two years later (1968/69)", sortYear: 1968.5, title: "First non-stop solo voyage around the world", summary: "Sir Robin Knox-Johnston becomes the first person to sail single-handed around the world without stopping.", people: ["Sir Robin Knox-Johnston"], whyItMatters: "Went one better than Chichester: no stops.", remember: ["Two years after Chichester", "Without stopping"], page: 67, lessonId: "golf-tennis-sailing-motor" },
    { id: "sp-t-torvill-dean", date: "1984", sortYear: 1984, title: "Ice-dancing gold", summary: "Jayne Torvill and Christopher Dean win Olympic gold for ice dancing.", people: ["Jayne Torvill", "Christopher Dean"], whyItMatters: "They also won four consecutive world championships.", remember: ["1984 Olympics"], page: 64, lessonId: "sporting-legends" },
    { id: "sp-t-2004", date: "2004", sortYear: 2004, title: "Holmes's double gold and MacArthur's record", summary: "Kelly Holmes wins two Olympic running golds; Ellen MacArthur becomes the fastest person to sail single-handed around the world.", people: ["Dame Kelly Holmes", "Dame Ellen MacArthur"], whyItMatters: "Two Dames, two records, one year.", remember: ["Holmes: two golds", "MacArthur: fastest solo circumnavigation"], imageId: "sport-ellen-macarthur", page: 65, lessonId: "sporting-legends" },
    { id: "sp-t-london-2012", date: "2012", sortYear: 2012, title: "London 2012", summary: "London hosts the Olympic and Paralympic Games, with the main site at Stratford. Britain finishes third in the medal table.", people: ["Mo Farah", "Jessica Ennis", "Bradley Wiggins", "Ellie Simmonds", "Andy Murray"], whyItMatters: "The UK's third Olympic Games.", remember: ["Stratford, East London", "Third in the medal table"], imageId: "sport-olympic-stadium", page: 64, lessonId: "sport-in-the-uk" },
    { id: "sp-t-wiggins", date: "2012", sortYear: 2012.1, title: "First British Tour de France winner", summary: "Bradley Wiggins becomes the first Briton to win the Tour de France.", people: ["Bradley Wiggins"], whyItMatters: "A first for British cycling.", remember: ["2012"], imageId: "sport-bradley-wiggins", page: 65, lessonId: "modern-champions" },
    { id: "sp-t-murray", date: "2012", sortYear: 2012.2, title: "Murray wins the US Open", summary: "Andy Murray becomes the first British man to win a Grand Slam singles title since 1936.", people: ["Andy Murray"], whyItMatters: "Ended a 76-year wait for a British male Grand Slam singles champion.", remember: ["US Open 2012", "First since 1936"], imageId: "sport-andy-murray", page: 65, lessonId: "modern-champions" },
  ],

  places: [
    { id: "sport-wembley", name: "Wembley Stadium", lat: 51.556, lon: -0.2796, label: { side: "left", dy: -6 }, note: "London. A major stadium for sporting events.", page: 64, lessonId: "sport-in-the-uk", era: "Sport" },
    { id: "sport-millennium-stadium", name: "Millennium Stadium", lat: 51.4782, lon: -3.1826, label: { side: "left" }, note: "Cardiff. A major stadium for sporting events.", page: 64, lessonId: "sport-in-the-uk", era: "Sport" },
    { id: "sport-stratford", name: "Stratford (Olympic Park)", lat: 51.5386, lon: -0.0166, label: { side: "right", dy: -4 }, note: "East London. Main site of the 2012 Olympic Games.", page: 64, lessonId: "sport-in-the-uk", era: "Sport" },
    { id: "sport-stoke-mandeville", name: "Stoke Mandeville", lat: 51.7944, lon: -0.7853, label: { side: "left", dy: -6 }, note: "Buckinghamshire. Hospital where Ludwig Guttmann's work gave rise to the Paralympics.", page: 64, lessonId: "sport-in-the-uk", era: "Sport" },
    { id: "sport-ascot", name: "Ascot", lat: 51.4119, lon: -0.6766, label: { side: "left", dy: 6 }, note: "Berkshire. Royal Ascot, a five-day race meeting attended by the Royal Family.", page: 66, lessonId: "cricket-football-rugby-racing", era: "Sport" },
    { id: "sport-aintree", name: "Aintree", lat: 53.4769, lon: -2.9567, label: { side: "left" }, note: "Near Liverpool. Home of the Grand National.", page: 66, lessonId: "cricket-football-rugby-racing", era: "Sport" },
    { id: "sport-ayr", name: "Ayr", lat: 55.4544, lon: -4.6177, label: { side: "left" }, note: "Scotland. The Scottish Grand National.", page: 66, lessonId: "cricket-football-rugby-racing", era: "Sport" },
    { id: "sport-newmarket", name: "Newmarket", lat: 52.2446, lon: 0.4058, note: "Suffolk. The National Horseracing Museum.", page: 66, lessonId: "cricket-football-rugby-racing", era: "Sport" },
    { id: "sport-st-andrews", name: "St Andrews", lat: 56.3433, lon: -2.8031, note: "Scotland. Known as the home of golf.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
    { id: "sport-leamington-spa", name: "Leamington Spa", lat: 52.2852, lon: -1.5363, label: { side: "left" }, note: "The first tennis club was founded here in 1872.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
    { id: "sport-wimbledon", name: "Wimbledon", lat: 51.4343, lon: -0.2144, label: { side: "right", dy: 8 }, note: "London. The All England Lawn Tennis and Croquet Club, home of the Wimbledon Championships.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
    { id: "sport-cowes", name: "Cowes", lat: 50.7628, lon: -1.2976, note: "Isle of Wight. The most famous UK sailing event.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
    { id: "sport-boat-race", name: "The Boat Race (Thames)", lat: 51.4723, lon: -0.2215, label: { side: "left", dy: 4 }, note: "River Thames, London. Yearly race between Oxford and Cambridge Universities.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
    { id: "sport-edinburgh-ski", name: "Dry ski slope near Edinburgh", lat: 55.8892, lon: -3.2097, label: { side: "left" }, note: "Europe's longest dry ski slope.", page: 67, lessonId: "golf-tennis-sailing-motor", era: "Sport" },
  ],

  keyFacts: [
    { text: "Cricket, football, lawn tennis, golf and rugby all began in Britain.", page: 64 },
    { text: "The UK hosted the Olympic Games in 1908, 1948 and 2012 (main site: Stratford, East London).", page: 64 },
    { text: "The Paralympics began with Dr Sir Ludwig Guttmann's work at Stoke Mandeville hospital, Buckinghamshire.", page: 64 },
    { text: "Roger Bannister ran the first sub-four-minute mile in 1954.", page: 64 },
    { text: "Bobby Moore captained England to their only tournament win, the 1966 World Cup.", page: 64 },
    { text: "Bradley Wiggins was the first Briton to win the Tour de France (2012).", page: 65 },
    { text: "The Ashes: Test cricket between England and Australia.", page: 65 },
    { text: "Football is the UK's most popular sport.", page: 66 },
    { text: "The Six Nations: England, Ireland, Scotland, Wales, France and Italy.", page: 66 },
    { text: "Royal Ascot is in Berkshire; the Grand National is at Aintree; the Scottish Grand National at Ayr.", page: 66 },
    { text: "St Andrews is the home of golf; the Open is the only Major held outside the USA.", page: 67 },
    { text: "Wimbledon is the oldest tennis tournament and the only Grand Slam on grass.", page: 67 },
    { text: "Chichester (1966/67) first to sail single-handed round the world; Knox-Johnston first to do it non-stop.", page: 67 },
  ],

  flashcards: [
    // sport-in-the-uk
    { id: "sp-f01", lessonId: "sport-in-the-uk", page: 64, front: "Name two major stadiums the handbook mentions.", back: "Wembley Stadium (London) and the Millennium Stadium (Cardiff)." },
    { id: "sp-f02", lessonId: "sport-in-the-uk", page: 64, front: "Which five famous sports began in Britain?", back: "Cricket, football, lawn tennis, golf and rugby." },
    { id: "sp-f03", lessonId: "sport-in-the-uk", page: 64, front: "In which years has the UK hosted the Olympic Games?", back: "1908, 1948 and 2012." },
    { id: "sp-f04", lessonId: "sport-in-the-uk", page: 64, front: "Where was the main site of the 2012 Olympics, and where did Britain finish in the medal table?", back: "Stratford, East London. Britain finished third." },
    { id: "sp-f05", lessonId: "sport-in-the-uk", page: 64, front: "Who started the work that led to the Paralympics, and where?", back: "Dr Sir Ludwig Guttmann, a German refugee, at Stoke Mandeville hospital in Buckinghamshire." },
    // sporting-legends
    { id: "sp-f06", lessonId: "sporting-legends", page: 64, front: "Sir Roger Bannister", back: "First man in the world to run a mile in under four minutes, in 1954." },
    { id: "sp-f07", lessonId: "sporting-legends", page: 64, front: "Sir Jackie Stewart", back: "Scottish former racing driver; Formula 1 world champion three times." },
    { id: "sp-f08", lessonId: "sporting-legends", page: 64, front: "Bobby Moore", back: "Captained the England football team that won the 1966 World Cup." },
    { id: "sp-f09", lessonId: "sporting-legends", page: 64, front: "Sir Ian Botham", back: "Captained England's cricket team; holds English Test records for batting and bowling." },
    { id: "sp-f10", lessonId: "sporting-legends", page: 64, front: "Torvill and Dean", back: "Ice dancers: Olympic gold in 1984 and four consecutive world championships." },
    { id: "sp-f11", lessonId: "sporting-legends", page: 64, front: "Sir Steve Redgrave", back: "Rowing gold medals at five consecutive Olympic Games." },
    { id: "sp-f12", lessonId: "sporting-legends", page: 65, front: "Baroness Tanni Grey-Thompson", back: "Wheelchair athlete: 16 Paralympic medals (11 gold) over five Games, six London Marathons, 30 world records." },
    { id: "sp-f13", lessonId: "sporting-legends", page: 65, front: "Dame Kelly Holmes and Dame Ellen MacArthur: what did each do in 2004?", back: "Holmes won two Olympic running golds. MacArthur became the fastest person to sail single-handed around the world." },
    // modern-champions
    { id: "sp-f14", lessonId: "modern-champions", page: 65, front: "Sir Chris Hoy", back: "Scottish cyclist: six Olympic golds and one silver; 11 world championship titles." },
    { id: "sp-f15", lessonId: "modern-champions", page: 65, front: "David Weir", back: "Wheelchair Paralympian: six golds over two Paralympic Games; won the London Marathon six times." },
    { id: "sp-f16", lessonId: "modern-champions", page: 65, front: "Bradley Wiggins", back: "Cyclist; first Briton to win the Tour de France (2012); seven Olympic medals, golds in 2004, 2008 and 2012." },
    { id: "sp-f17", lessonId: "modern-champions", page: 65, front: "Mo Farah", back: "Distance runner born in Somalia; 2012 Olympic gold in the 5,000 m and 10,000 m (first Briton to win the 10,000 m)." },
    { id: "sp-f18", lessonId: "modern-champions", page: 65, front: "Jessica Ennis", back: "2012 Olympic gold in the heptathlon (seven track and field events)." },
    { id: "sp-f19", lessonId: "modern-champions", page: 65, front: "Andy Murray", back: "Scottish tennis player; won the 2012 US Open, the first British man to win a Grand Slam singles title since 1936." },
    { id: "sp-f20", lessonId: "modern-champions", page: 65, front: "Ellie Simmonds", back: "Paralympic swimmer: gold in 2008 and 2012; youngest member of the British team in 2008." },
    // cricket-football-rugby-racing
    { id: "sp-f21", lessonId: "cricket-football-rugby-racing", page: 65, front: "What is the Ashes?", back: "A series of cricket Test matches between England and Australia." },
    { id: "sp-f22", lessonId: "cricket-football-rugby-racing", page: 65, front: "Give three cricket expressions used in everyday speech.", back: "Any of: 'rain stopped play', 'batting on a sticky wicket', 'playing a straight bat', 'bowled a googly', 'it's just not cricket'." },
    { id: "sp-f23", lessonId: "cricket-football-rugby-racing", page: 66, front: "What was England's only international football tournament victory?", back: "The 1966 World Cup, hosted in the UK." },
    { id: "sp-f24", lessonId: "cricket-football-rugby-racing", page: 66, front: "When did rugby originate, and what are its two types?", back: "In England in the early 19th century. Union and league." },
    { id: "sp-f25", lessonId: "cricket-football-rugby-racing", page: 66, front: "Which countries play in the Six Nations Championship?", back: "England, Ireland, Scotland, Wales, France and Italy." },
    { id: "sp-f26", lessonId: "cricket-football-rugby-racing", page: 66, front: "Where are Royal Ascot, the Grand National, the Scottish Grand National and the National Horseracing Museum?", back: "Berkshire; Aintree near Liverpool; Ayr; Newmarket in Suffolk." },
    // golf-tennis-sailing-motor
    { id: "sp-f27", lessonId: "golf-tennis-sailing-motor", page: 67, front: "Where is the home of golf, and when can the modern game be traced back to?", back: "St Andrews, Scotland. 15th-century Scotland." },
    { id: "sp-f28", lessonId: "golf-tennis-sailing-motor", page: 67, front: "What is special about the Open Championship?", back: "It is the only golf 'Major' held outside the United States, and it moves to a different course every year." },
    { id: "sp-f29", lessonId: "golf-tennis-sailing-motor", page: 67, front: "Where and when was the first tennis club founded?", back: "Leamington Spa, 1872." },
    { id: "sp-f30", lessonId: "golf-tennis-sailing-motor", page: 67, front: "Two facts that make Wimbledon unique?", back: "It is the oldest tennis tournament in the world and the only Grand Slam played on grass." },
    { id: "sp-f31", lessonId: "golf-tennis-sailing-motor", page: 67, front: "Chichester and Knox-Johnston: who did what?", back: "Sir Francis Chichester: first to sail single-handed around the world (1966/67). Sir Robin Knox-Johnston: first to do it without stopping, two years later." },
    { id: "sp-f32", lessonId: "golf-tennis-sailing-motor", page: 67, front: "When did motor-car racing start in the UK? Name three recent British F1 champions.", back: "1902. Damon Hill, Lewis Hamilton and Jensen Button." },
    { id: "sp-f33", lessonId: "golf-tennis-sailing-motor", page: 67, front: "How many ski centres are there in Scotland, and where is Europe's longest dry ski slope?", back: "Five. Near Edinburgh." },
  ],

  questions: [
    // sport-in-the-uk
    { id: "sp-q01", lessonId: "sport-in-the-uk", page: 64, type: "single", prompt: "In which years has the UK hosted the Olympic Games?", options: ["1908, 1948 and 2012", "1896, 1948 and 2012", "1908, 1966 and 2012", "1924, 1948 and 2008"], answer: [0], explanation: "The UK has hosted the Olympics three times: 1908, 1948 and 2012." },
    { id: "sp-q02", lessonId: "sport-in-the-uk", page: 64, type: "single", prompt: "Where was the main Olympic site for the 2012 Games?", options: ["Wembley, north-west London", "Greenwich, south-east London", "Stratford, East London", "Cardiff"], answer: [2], explanation: "The main site for the 2012 Games was in Stratford, East London." },
    { id: "sp-q03", lessonId: "sport-in-the-uk", page: 64, type: "single", prompt: "The Paralympics have their origin in work done at which hospital?", options: ["St Thomas' Hospital, London", "Stoke Mandeville hospital, Buckinghamshire", "Great Ormond Street, London", "Addenbrooke's, Cambridge"], answer: [1], explanation: "Dr Sir Ludwig Guttmann developed new treatments for spinal injuries at Stoke Mandeville hospital and encouraged patients to take part in sport." },
    { id: "sp-q04", lessonId: "sport-in-the-uk", page: 64, type: "truefalse", prompt: "The British team finished third in the medal table at the 2012 Olympic Games.", options: ["True", "False"], answer: [0], explanation: "True. The British team was very successful across a wide range of sports." },
    { id: "sp-q05", lessonId: "sport-in-the-uk", page: 64, type: "multi", prompt: "Which TWO sports began in Britain, according to the handbook?", options: ["Cricket", "Basketball", "Golf", "Ice hockey"], answer: [0, 2], explanation: "Cricket, football, lawn tennis, golf and rugby all began in Britain." },
    { id: "sp-q06", lessonId: "sport-in-the-uk", page: 64, type: "single", prompt: "In which city is the Millennium Stadium?", options: ["Edinburgh", "Belfast", "Cardiff", "Manchester"], answer: [2], explanation: "The handbook names Wembley Stadium in London and the Millennium Stadium in Cardiff." },
    { id: "sp-q06b", lessonId: "sport-in-the-uk", page: 64, type: "truefalse", prompt: "Dr Sir Ludwig Guttmann, whose work led to the Paralympics, was a German refugee.", options: ["True", "False"], answer: [0], explanation: "True. He developed new methods of treatment for people with spinal injuries at Stoke Mandeville." },
    // sporting-legends
    { id: "sp-q07", lessonId: "sporting-legends", page: 64, type: "single", prompt: "Who was the first man in the world to run a mile in under four minutes?", options: ["Mo Farah", "Sir Roger Bannister", "Sir Steve Redgrave", "Sebastian Coe"], answer: [1], explanation: "Sir Roger Bannister did it in 1954." },
    { id: "sp-q08", lessonId: "sporting-legends", page: 64, type: "single", prompt: "Who captained the England football team that won the World Cup in 1966?", options: ["Bobby Moore", "Sir Ian Botham", "Sir Jackie Stewart", "David Beckham"], answer: [0], explanation: "Bobby Moore captained the 1966 World Cup-winning team." },
    { id: "sp-q09", lessonId: "sporting-legends", page: 64, type: "single", prompt: "Sir Steve Redgrave won gold medals in five consecutive Olympic Games in which sport?", options: ["Cycling", "Sailing", "Rowing", "Swimming"], answer: [2], explanation: "Redgrave won rowing gold at five consecutive Olympics and is one of Britain's greatest Olympians." },
    { id: "sp-q10", lessonId: "sporting-legends", page: 64, type: "single", prompt: "Jayne Torvill and Christopher Dean won Olympic gold in 1984 for what?", options: ["Ice dancing", "Figure skating pairs", "Ballroom dancing", "Bobsleigh"], answer: [0], explanation: "They won Olympic gold for ice dancing in 1984 and four consecutive world championships." },
    { id: "sp-q11", lessonId: "sporting-legends", page: 65, type: "single", prompt: "In 2004, who became the fastest person to sail around the world single-handed?", options: ["Sir Francis Chichester", "Sir Robin Knox-Johnston", "Dame Ellen MacArthur", "Dame Kelly Holmes"], answer: [2], explanation: "Dame Ellen MacArthur, a yachtswoman, set the record in 2004." },
    { id: "sp-q12", lessonId: "sporting-legends", page: 64, type: "single", prompt: "How many times did Sir Jackie Stewart win the Formula 1 world championship?", options: ["Once", "Twice", "Three times", "Five times"], answer: [2], explanation: "The Scottish former racing driver won it three times." },
    { id: "sp-q13", lessonId: "sporting-legends", page: 65, type: "truefalse", prompt: "Baroness Tanni Grey-Thompson won 16 Paralympic medals, including 11 golds.", options: ["True", "False"], answer: [0], explanation: "True. She also won the London Marathon six times and broke 30 world records." },
    { id: "sp-q14", lessonId: "sporting-legends", page: 64, type: "multi", prompt: "Which TWO statements about Sir Ian Botham are correct?", options: ["He captained the English cricket team", "He won the Tour de France", "He holds English Test records for batting and bowling", "He captained the 1966 World Cup team"], answer: [0, 2], explanation: "Botham captained England at cricket and holds Test records for both batting and bowling." },
    // modern-champions
    { id: "sp-q15", lessonId: "modern-champions", page: 65, type: "single", prompt: "Who was the first Briton to win the Tour de France?", options: ["Sir Chris Hoy", "Bradley Wiggins", "Mark Cavendish", "David Weir"], answer: [1], explanation: "Bradley Wiggins won the Tour de France in 2012." },
    { id: "sp-q16", lessonId: "modern-champions", page: 65, type: "single", prompt: "Jessica Ennis won the 2012 Olympic gold in which event?", options: ["The 10,000 metres", "The marathon", "The heptathlon", "The 800 metres"], answer: [2], explanation: "She won the heptathlon, which includes seven track and field events." },
    { id: "sp-q17", lessonId: "modern-champions", page: 65, type: "multi", prompt: "Which TWO events did Mo Farah win at the 2012 Olympics?", options: ["5,000 metres", "1,500 metres", "10,000 metres", "Marathon"], answer: [0, 2], explanation: "Farah won the 5,000 and 10,000 metres and was the first Briton to win Olympic gold in the 10,000 metres." },
    { id: "sp-q18", lessonId: "modern-champions", page: 65, type: "single", prompt: "In 2012 Andy Murray became the first British man to win a Grand Slam singles title since which year?", options: ["1936", "1966", "1977", "1908"], answer: [0], explanation: "His 2012 US Open win was the first British men's Grand Slam singles title since 1936." },
    { id: "sp-q19", lessonId: "modern-champions", page: 65, type: "single", prompt: "Which athlete was born in Somalia?", options: ["David Weir", "Mo Farah", "Sir Chris Hoy", "Bradley Wiggins"], answer: [1], explanation: "Mo Farah is a British distance runner born in Somalia." },
    { id: "sp-q19b", lessonId: "modern-champions", page: 65, type: "truefalse", prompt: "Ellie Simmonds was the youngest member of the British team at the 2008 Paralympic Games.", options: ["True", "False"], answer: [0], explanation: "True. She won swimming gold at both the 2008 and 2012 Paralympics." },
    { id: "sp-q19c", lessonId: "modern-champions", page: 65, type: "single", prompt: "Sir Chris Hoy is a Scottish ...", options: ["tennis player", "cyclist", "rower", "racing driver"], answer: [1], explanation: "Hoy is a Scottish cyclist with six Olympic golds, one silver and 11 world titles." },
    // cricket-football-rugby-racing
    { id: "sp-q20", lessonId: "cricket-football-rugby-racing", page: 65, type: "single", prompt: "The Ashes is a series of cricket Test matches between England and which country?", options: ["India", "South Africa", "Australia", "New Zealand"], answer: [2], explanation: "The Ashes is played between England and Australia." },
    { id: "sp-q21", lessonId: "cricket-football-rugby-racing", page: 65, type: "truefalse", prompt: "A cricket game can last up to five days and still end in a draw.", options: ["True", "False"], answer: [0], explanation: "True. Games can last up to five days but still result in a draw." },
    { id: "sp-q22", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "What is the UK's most popular sport?", options: ["Cricket", "Rugby", "Football", "Tennis"], answer: [2], explanation: "Football is the UK's most popular sport." },
    { id: "sp-q23", lessonId: "cricket-football-rugby-racing", page: 66, type: "multi", prompt: "Which TWO countries take part in the Six Nations Championship, apart from the UK nations and Ireland?", options: ["France", "Spain", "Italy", "Australia"], answer: [0, 2], explanation: "The Six Nations is between England, Ireland, Scotland, Wales, France and Italy." },
    { id: "sp-q24", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "Where is the Grand National run?", options: ["Ascot", "Aintree, near Liverpool", "Ayr", "Newmarket"], answer: [1], explanation: "The Grand National is at Aintree near Liverpool; the Scottish Grand National is at Ayr." },
    { id: "sp-q25", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "Royal Ascot is a five-day race meeting in which county?", options: ["Surrey", "Berkshire", "Suffolk", "Kent"], answer: [1], explanation: "Royal Ascot is in Berkshire and is attended by members of the Royal Family." },
    { id: "sp-q26", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "Where is the National Horseracing Museum?", options: ["Newmarket, Suffolk", "Aintree, Merseyside", "Ascot, Berkshire", "Cheltenham, Gloucestershire"], answer: [0], explanation: "The National Horseracing Museum is in Newmarket, Suffolk." },
    { id: "sp-q27", lessonId: "cricket-football-rugby-racing", page: 66, type: "truefalse", prompt: "Northern Ireland plays rugby together with the Irish Republic.", options: ["True", "False"], answer: [0], explanation: "True. Rugby has national teams in England, Wales, Scotland and Northern Ireland, which plays with the Irish Republic." },
    { id: "sp-q28", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "When were the first professional football clubs formed in the UK?", options: ["The late 17th century", "The early 19th century", "The late 19th century", "The 1920s"], answer: [2], explanation: "The first professional football clubs were formed in the late 19th century." },
    { id: "sp-q28b", lessonId: "cricket-football-rugby-racing", page: 66, type: "single", prompt: "What is the best-known rugby league (club) competition?", options: ["The Six Nations", "The Super League", "The Premier League", "The Ashes"], answer: [1], explanation: "The Super League is the best-known rugby league competition. The Six Nations is rugby union." },
    // golf-tennis-sailing-motor
    { id: "sp-q29", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "Which place is known as the home of golf?", options: ["Ayr", "St Andrews", "Troon", "Gleneagles"], answer: [1], explanation: "St Andrews in Scotland is known as the home of golf. Modern golf dates back to 15th-century Scotland." },
    { id: "sp-q30", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "Where was the first tennis club founded, in 1872?", options: ["Wimbledon", "Leamington Spa", "Bath", "Eastbourne"], answer: [1], explanation: "The first tennis club was founded in Leamington Spa in 1872." },
    { id: "sp-q31", lessonId: "golf-tennis-sailing-motor", page: 67, type: "multi", prompt: "Which TWO statements about Wimbledon are correct?", options: ["It is the oldest tennis tournament in the world", "It is played on clay", "It is the only Grand Slam played on grass", "It is held at St Andrews"], answer: [0, 2], explanation: "Wimbledon, at the All England Lawn Tennis and Croquet Club, is the oldest tennis tournament and the only Grand Slam on grass." },
    { id: "sp-q32", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "Who was the first person to sail single-handed around the world without stopping?", options: ["Sir Francis Chichester", "Sir Robin Knox-Johnston", "Dame Ellen MacArthur", "Sir Steve Redgrave"], answer: [1], explanation: "Chichester was first to sail single-handed around the world (1966/67); Knox-Johnston was first to do it without stopping, two years later." },
    { id: "sp-q33", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "Where is the most famous UK sailing event held?", options: ["Cowes, Isle of Wight", "Henley-on-Thames", "Plymouth", "Windermere"], answer: [0], explanation: "The most famous sailing event is at Cowes on the Isle of Wight." },
    { id: "sp-q34", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "In which year did motor-car racing start in the UK?", options: ["1872", "1902", "1926", "1950"], answer: [1], explanation: "Motor-car racing in the UK started in 1902." },
    { id: "sp-q35", lessonId: "golf-tennis-sailing-motor", page: 67, type: "truefalse", prompt: "Europe's longest dry ski slope is near Edinburgh.", options: ["True", "False"], answer: [0], explanation: "True. There are also five ski centres in Scotland." },
    { id: "sp-q36", lessonId: "golf-tennis-sailing-motor", page: 67, type: "truefalse", prompt: "The Open Championship is one of several golf Majors held in the UK.", options: ["True", "False"], answer: [1], explanation: "False. The Open is the only golf 'Major' held outside the United States. It is hosted by a different course each year." },
    { id: "sp-q37", lessonId: "golf-tennis-sailing-motor", page: 67, type: "multi", prompt: "Which TWO are named in the handbook as recent British Formula 1 world champions?", options: ["Lewis Hamilton", "Bradley Wiggins", "Jensen Button", "Andy Murray"], answer: [0, 2], explanation: "Recent British winners named are Damon Hill, Lewis Hamilton and Jensen Button." },
    { id: "sp-q38", lessonId: "golf-tennis-sailing-motor", page: 67, type: "single", prompt: "Which two universities race each other every year on the Thames?", options: ["Oxford and Cambridge", "London and Durham", "Edinburgh and St Andrews", "Oxford and London"], answer: [0], explanation: "There is a popular yearly rowing race on the Thames between Oxford and Cambridge Universities." },
  ],

  flags: [
    { page: 64, text: "The handbook spells the founder of the Paralympic movement \"Guttman\"; the usual spelling is Ludwig Guttmann. This site uses Guttmann." },
    { page: 65, text: "This PDF prints \"Baroness Tanni-Grey Thompson\"; her name is Tanni Grey-Thompson. This site uses the correct form." },
    { page: 64, text: "The sportspeople's records, medal counts and life dates describe the position in 2013. Some have changed (e.g. Sir Roger Bannister died in 2018; Andy Murray won Wimbledon in 2013 and 2016; Mo Farah, Bradley Wiggins and Chris Hoy have different final medal totals). Learn the handbook's figures for the test." },
    { page: 64, text: "The Millennium Stadium in Cardiff has been known as the Principality Stadium since 2016 (sponsorship name)." },
  ],
};
