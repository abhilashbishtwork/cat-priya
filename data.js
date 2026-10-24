// ============================================================
// CAT 2026 · Priya's Crash Course — content file
// Edit THIS file daily to add levels, questions, plan notes.
// ============================================================

const EXAM = {
  name: "CAT 2026",
  date: "2026-11-29T08:30:00+05:30", // Slot 1 start (IST). Change once admit card shows her slot.
  prepStart: "2026-10-17T00:00:00+05:30",
  conductedBy: "IIM Indore",
};

// ---------- Shared stems for passages / DILR sets ----------
const SETS = {
  d_rc: `For most of history, scarcity shaped how humans valued information. Books were expensive, libraries rare, and the right to interpret texts was jealously guarded by priests and scholars. The printing press did not merely make books cheaper; it relocated authority. Once readers could compare multiple copies of a text, they could also compare interpretations, and the monopoly of the interpreter weakened. Today, the internet has pushed this process to its limit. Information is no longer scarce; attention is. The new gatekeepers are not those who own texts, but those who can direct the gaze of millions — platforms, algorithms, and influencers. The irony is that a technology celebrated for democratising knowledge has created a new and subtler hierarchy, one in which being heard matters more than being right.`,
  d_lr: `Five friends — A, B, C, D and E — scored 30, 34, 38, 42 and 46 (in some order) out of 50 in a test. Each score belongs to exactly one person.
• B scored the highest.
• C scored more than A but less than E.
• D scored exactly 4 marks less than A.`,
  v1_rc: `Coral reefs occupy less than one percent of the ocean floor, yet they support roughly a quarter of all marine species. Their richness depends on a fragile partnership: tiny algae living inside coral tissue supply the coral with food through photosynthesis, while the coral offers shelter and nutrients. When water temperatures rise even slightly above normal for a few weeks, this partnership breaks down. The coral expels the algae, loses its colour, and — unless conditions recover — starves. Scientists call this "bleaching", but the gentle word hides a brutal reality.`,
  v2_rc: `Economists have long assumed that people respond to prices rationally: raise the cost of something, and people consume less of it. Yet a famous study of Israeli day-care centres complicates this. When the centres introduced a small fine for parents who arrived late, lateness increased. The fine, researchers argued, transformed a moral obligation into a market transaction. Before, parents felt guilty for inconveniencing teachers; afterwards, they felt they had simply paid for extra time. Even when the fine was removed, lateness remained high — the old norm, once displaced, did not return.`,
  v3_rc: `The word "nostalgia" was coined in 1688 by a Swiss medical student to describe a disease afflicting soldiers far from home; its symptoms included fever, fainting and, occasionally, death. For two centuries physicians treated it as a pathology. Only in the twentieth century did nostalgia become a mood rather than a malady — something to be indulged rather than cured. Recent psychological research goes further, suggesting that nostalgia may be functional: people who recall meaningful past experiences report greater social connectedness and a stronger sense that life has purpose. What was once diagnosed may now be prescribed.`,
  l1_seat: `Five people — P, Q, R, S and T — sit in a row facing north (positions 1 to 5 from left to right).
• T sits in the middle.
• Q sits at one of the extreme ends.
• R sits immediately to the right of P.
• S sits next to Q.
• P does not sit at an extreme end.`,
  l1_tab: `Units sold by a shop: January 120, February 150, March 135, April 180.`,
  l2_venn: `In a class of 60 students, 35 like tea, 30 like coffee and 10 like neither.`,
  l2_tour: `Four teams — A, B, C and D — play a round-robin tournament: every team plays every other team exactly once. A win gives 2 points, a loss 0. There are no draws. A won all its matches, and B, C and D finished with equal points.`,
  l3_sched: `Four lectures — Maths, Physics, Chemistry and Biology — are held Monday to Thursday, one per day, each taught by a different teacher from W, X, Y and Z.
• Physics is on Wednesday.
• Y teaches on Monday.
• X teaches Chemistry, which is not on Monday.
• Biology is held the day after Maths.
• W does not teach Biology.`,
  l3_di: `A company's revenue (₹ crore) and profit margin:
2021: revenue 200, margin 10%
2022: revenue 250, margin 12%
2023: revenue 300, margin 15%
2024: revenue 330, margin 10%
(Profit = revenue × margin)`,
};

// ---------- Questions ----------
// type: "mcq" (ans = option index, +3/−1) or "tita" (ans = string, +3/0)
const DIAGNOSTIC = [
  { id:"d1", sec:"VARC", type:"mcq", set:"d_rc", text:"Which of the following best captures the central idea of the passage?",
    opts:["Because it broke the interpreters' monopoly, the printing press was a more radical change than the internet.","When information becomes abundant, power shifts from those who control content to those who control attention.","By letting algorithms decide what people read, the internet has made knowledge far less reliable than it was before.","Authority over knowledge has always rested with whoever owns the texts, from medieval priests to platforms."], ans:1,
    exp:"The passage traces authority moving from those who owned and interpreted texts to those who 'direct the gaze' of millions: attention is the new scarce resource. The option ranking the press above the internet makes a comparison the author never draws. The option about algorithms making knowledge less reliable is not argued (the point is who gets heard, not accuracy of knowledge). The option saying authority always rests with text-owners is contradicted: the new gatekeepers 'are not those who own texts'." },
  { id:"d2", sec:"VARC", type:"mcq", set:"d_rc", text:"The 'irony' mentioned in the last sentence refers to the fact that:",
    opts:["the internet, by making information plentiful, has made useful information scarce once again.","a technology praised for democratising knowledge has produced a new and subtler kind of hierarchy.","readers who once doubted interpreters now trust influencers more than they trust the texts themselves.","platforms now control more texts than priests and libraries ever did, reviving the old monopoly."], ans:1,
    exp:"The last sentence states it: 'a technology celebrated for democratising knowledge has created a new and subtler hierarchy'. The option about information becoming scarce again reverses the passage (attention, not information, is scarce). The option about trusting influencers over texts is never said. The option about platforms controlling texts is contradicted: the new gatekeepers are 'not those who own texts'." },
  { id:"d3", sec:"VARC", type:"tita", text:"Arrange the sentences into a logical paragraph. Type the order (e.g. 1234).\n\n1. Within five years, the roads leading to each station were more crowded than before the metro opened.\n2. The metro line was meant to ease congestion in the city's eastern suburbs.\n3. Planners now call this 'induced demand': new capacity creates the very traffic it was built to absorb.\n4. Instead, by making those suburbs reachable, it drew thousands of new residents to them.", ans:"2413",
    exp:"2 sets up the intent → 4 'Instead' gives the twist → 1 shows the result → 3 names the phenomenon ('this')." },
  { id:"d4", sec:"VARC", type:"mcq", text:"Choose the option that best summarises the paragraph:\n\n\"Many organisations reward employees for individual targets while claiming to value teamwork. Unsurprisingly, employees respond to what is measured rather than to what is said. Colleagues hoard information, avoid shared projects and quietly compete. If firms truly want collaboration, they must change what they count, not merely what they celebrate.\"",
    opts:["Teamwork is overrated, since employees naturally compete and hoard information whatever firms say.","Employees follow incentives, so firms wanting collaboration must reward it, not merely praise it.","Individual targets breed rivalry and should therefore be abolished in every kind of organisation.","Employees hoard information and avoid shared work mainly because they distrust their managers."], ans:1,
    exp:"B captures both the cause (people respond to what is measured) and the prescription (change what you count). The 'teamwork is overrated' option misreads the paragraph, which wants collaboration. The option about abolishing targets everywhere overreaches: the paragraph asks firms to count collaboration, not to scrap all targets. The option blaming distrust of managers invents a cause; the paragraph blames incentives." },
  { id:"d5", sec:"DILR", type:"mcq", set:"d_lr", text:"Who scored 38?", opts:["A","C","D","E"], ans:1,
    exp:"B = 46. D = A − 4 so A ≥ 34. If A = 38, C and E must both exceed 38 but only 42 is left — impossible. So A = 34, D = 30, C = 38, E = 42." },
  { id:"d6", sec:"DILR", type:"tita", set:"d_lr", text:"What is the sum of the scores of A and E?", ans:"76", exp:"A = 34, E = 42 → 76." },
  { id:"d7", sec:"DILR", type:"tita", set:"d_lr", text:"What is E's rank from the top?", ans:"2", exp:"Order: B 46, E 42, C 38, A 34, D 30 → E is 2nd." },
  { id:"d8", sec:"QA", type:"mcq", text:"A shopkeeper marks an item 40% above cost price and then gives a 25% discount. What is the profit percentage?",
    opts:["5%","10%","15%","Loss of 5%"], ans:0, exp:"1.40 × 0.75 = 1.05 → 5% profit. Shortcut: 40 − 25 − (40×25)/100 = 5." },
  { id:"d9", sec:"QA", type:"tita", text:"A 240 m long train crosses a pole in 12 seconds. How many seconds will it take to cross a 360 m long platform?", ans:"30",
    exp:"Speed = 240/12 = 20 m/s. Distance to cross platform = 240 + 360 = 600 m → 600/20 = 30 s." },
  { id:"d10", sec:"QA", type:"tita", text:"If x + 1/x = 4, what is x² + 1/x²?", ans:"14", exp:"(x + 1/x)² = x² + 2 + 1/x² → 16 − 2 = 14." },
];

// LEVELS[sec][n] = { title, mins, qs:[...] }. Pass = 4/5. Add higher levels here daily.
const LEVELS = {
  VARC: [
    { title:"Warm-up Reader", mins:10, qs:[
      { id:"v1a", type:"mcq", set:"v1_rc", text:"Why does the author mention that reefs cover 'less than one percent of the ocean floor'?",
        opts:["To suggest that reefs are too small an area to justify major conservation efforts.","To highlight how disproportionately important reefs are to marine life.","To indicate that scientists have long underestimated how much area reefs cover.","To contrast the narrow reach of coral with the much wider spread of algae."], ans:1, exp:"A tiny share of the ocean floor set against roughly a quarter of all marine species stresses outsized importance. The option about reefs being too small to protect reverses the point. The option about scientists under-measuring reefs is never suggested. The option contrasting coral with algae misreads the passage: algae live inside the coral, and the area figure is compared with species richness, not with algae." },
      { id:"v1b", type:"mcq", set:"v1_rc", text:"The final sentence suggests that:",
        opts:["the term 'bleaching' understates how severe the damage really is.","bleached coral usually regains its colour once temperatures fall.","scientists have exaggerated the danger by choosing a vivid label.","the loss of colour is a cosmetic change unrelated to coral health."], ans:0, exp:"'The gentle word hides a brutal reality': the label sounds milder than what happens. The option about coral usually recovering is unsupported; the passage says the coral starves unless conditions recover. The option about scientists exaggerating reverses the point: the label understates. The option calling colour loss cosmetic is contradicted, since losing the algae means losing food." },
      { id:"v1c", type:"tita", text:"Four of these sentences form a coherent paragraph. Type the number of the odd one out.\n\n1. Sleep allows the brain to consolidate memories formed during the day.\n2. During deep sleep, connections that were used are strengthened while others are pruned.\n3. Many ancient cultures regarded dreams as messages from the gods.\n4. Students who sleep well after studying recall more than those who stay up late.\n5. Sleep is thus not a pause in learning but a part of it.", ans:"3", exp:"1, 2, 4, 5 are about sleep and memory/learning. 3 shifts to cultural beliefs about dreams." },
      { id:"v1d", type:"tita", text:"Arrange into a logical order (type e.g. 1234):\n\n1. Portraits were costly and rarely printed alongside books.\n2. Today, by contrast, an author's image often reaches readers before the book does.\n3. Before photography became cheap, few readers ever saw a writer's face.\n4. The result was a generation of readers who knew authors only through their words.", ans:"3142", exp:"3 opens (the past) → 1 explains why → 4 gives the result → 2 contrasts with today." },
      { id:"v1e", type:"mcq", text:"\"The minister's speech was so anodyne that even his rivals found nothing to object to.\" 'Anodyne' most nearly means:",
        opts:["inoffensive and bland","combative and harsh","painful and wounding","secretive and evasive"], ans:0, exp:"Even rivals found 'nothing to object to', so the speech was harmless and bland. 'Combative' contradicts the context. 'Painful' is a sound-alike trap (anodyne historically means pain-relieving, the opposite). 'Secretive' does not explain why no one objected." },
    ]},
    { title:"Inference Hunter", mins:10, qs:[
      { id:"v2a", type:"mcq", set:"v2_rc", text:"The day-care study primarily shows that:",
        opts:["fines tend to be ineffective at changing behaviour, whatever their size.","a monetary penalty can weaken a social norm and so make things worse.","parents had little regard for teachers even before any fine was imposed.","economists are mistaken to assume that prices shape behaviour at all."], ans:1, exp:"The fine turned guilt into a paid transaction, producing the opposite of the intended effect. The option saying fines are generally ineffective overgeneralises from one study. The option about parents not caring is contradicted: they felt guilty before the fine. The option saying prices never shape behaviour overreaches; the study 'complicates' the assumption, it does not demolish it." },
      { id:"v2b", type:"mcq", set:"v2_rc", text:"Which of the following, if true, most strengthens the researchers' explanation?",
        opts:["The fine was set well below what parents would have paid a babysitter for the time.","Parents surveyed after the fine said they no longer felt guilty about arriving late.","Teachers reported feeling more resentful of late parents once the fine was in place.","Lateness rose by a similar amount in comparable centres that never imposed a fine."], ans:1, exp:"The explanation is that guilt was replaced by a transaction; direct evidence that guilt disappeared supports it. The cheap-fine option points to a price explanation, not a norm explanation. Teachers' resentment says nothing about parents' guilt. A similar rise in centres without a fine weakens the explanation by suggesting another cause." },
      { id:"v2c", type:"mcq", set:"v2_rc", text:"The fact that lateness stayed high after the fine was removed suggests that:",
        opts:["parents had simply forgotten that a fine had ever been in place.","once a norm is replaced by market logic, it may not easily return.","the centres had quietly continued to collect the fine from parents.","teachers had come to welcome late pickups as a source of extra pay."], ans:1, exp:"The passage says it directly: 'the old norm, once displaced, did not return.' Forgetting the fine would, if anything, restore the old behaviour, so it does not fit. The claim that the fine continued contradicts 'when the fine was removed'. Teachers welcoming lateness is never mentioned." },
      { id:"v2d", type:"mcq", text:"Choose the best summary:\n\n\"Translation is often described as a loss: something of the original always slips away. But translation can also add. A translator must choose among meanings the author left open, and in choosing, makes visible interpretations that readers of the original might never have noticed. In this sense, every translation is also a commentary.\"",
        opts:["Translations inevitably lose something of the original and so remain inferior to it.","Though translation loses something, it also reveals new readings and acts as commentary.","Translators should avoid choosing among an author's open meanings, so as to limit loss.","Translators always grasp more of a text's meanings than its original readers ever do."], ans:1, exp:"A good summary keeps the concession (translation loses something) and the main claim (it also adds, as commentary). The 'inferior' option stays on the conceded side and ignores the 'But'. The option telling translators to avoid choosing contradicts the point that choosing is what adds. The option about translators always grasping more overreaches 'might never have noticed'." },
      { id:"v2e", type:"tita", text:"Type the number of the odd sentence out:\n\n1. Urban gardens are increasingly common on rooftops and vacant lots.\n2. They supply fresh produce to neighbourhoods that lack grocery stores.\n3. They also cool surrounding areas and absorb rainwater.\n4. Commercial agriculture uses most of the world's fresh water.\n5. For these reasons, city councils have begun offering grants to community gardeners.", ans:"4", exp:"Everything else is about urban gardens' benefits; 4 is about commercial agriculture." },
    ]},
    { title:"Tone Decoder", mins:10, qs:[
      { id:"v3a", type:"mcq", set:"v3_rc", text:"The passage is best described as tracing:",
        opts:["how seventeenth-century physicians diagnosed and treated homesick soldiers.","how nostalgia came to be seen not as an illness but as possibly beneficial.","why nostalgia, despite its softer image, remains a danger to mental health.","the rise of Swiss medicine and its influence on early military psychiatry."], ans:1, exp:"The arc is disease, then mood, then a possibly useful experience. The option about seventeenth-century treatment covers only the opening. The option calling nostalgia dangerous reverses the ending. The option about Swiss medicine mistakes a detail (the coiner's nationality) for the topic." },
      { id:"v3b", type:"mcq", set:"v3_rc", text:"\"What was once diagnosed may now be prescribed\" means:",
        opts:["doctors now treat nostalgia with medicines rather than with rest or a return home.","nostalgia, once treated as a disease, may now be recommended for its benefits.","nostalgia has grown so common that doctors no longer bother to diagnose it.","the original 1688 diagnosis was an error that modern medicine has now corrected."], ans:1, exp:"'Diagnosed' means treated as an illness; 'prescribed' means recommended. The option about medicines takes 'prescribed' literally and misses the reversal. The option about nostalgia being common is not stated. The option calling the 1688 diagnosis an error adds a judgement the passage does not make; it describes a change in understanding." },
      { id:"v3c", type:"mcq", set:"v3_rc", text:"Which of the following can be inferred from the passage?",
        opts:["Swiss soldiers were more prone to nostalgia than soldiers from other countries.","The original concept of nostalgia involved physical symptoms, not merely emotions.","Modern psychologists deny that nostalgia was ever properly regarded as an illness.","Recalling the past usually weakens people's sense that their lives have purpose."], ans:1, exp:"Fever, fainting and even death are physical symptoms, so the original concept was not purely emotional. The Swiss-soldiers option confuses the coiner's nationality with the patients'. The option about psychologists denying the illness history is unsupported. The option about weakened purpose reverses the research cited." },
      { id:"v3d", type:"tita", text:"Arrange into a logical order:\n\n1. Such feedback loops make the decline self-reinforcing.\n2. As Arctic ice melts, it exposes darker ocean water beneath.\n3. Ice reflects most of the sunlight that falls on it.\n4. Darker water absorbs more heat, which melts more ice.", ans:"3241", exp:"3 (premise) → 2 (melting exposes dark water) → 4 (more heat, more melt) → 1 ('such feedback loops')." },
      { id:"v3e", type:"mcq", text:"\"Since the city's new bicycle lanes opened, the number of cyclists counted on the main avenue has tripled. The lanes are clearly a success.\" The argument assumes that:",
        opts:["cycling on the avenue is healthier and safer than driving along the same route.","the increase is not merely cyclists switching to the avenue from other routes.","the city intends to build similar lanes on other major streets in the future.","car traffic on the avenue has fallen by roughly the same proportion as before."], ans:1, exp:"If cyclists simply moved from nearby streets, total cycling did not rise, so 'success' needs this assumption. Health and safety comparisons are outside the argument. Future plans for more lanes are irrelevant to whether these lanes worked. A drop in car traffic is not something the conclusion depends on." },
    ]},
  ],
  DILR: [
    { title:"Seat Setter", mins:12, qs:[
      { id:"l1a", type:"mcq", set:"l1_seat", text:"Who sits at the right end (position 5)?", opts:["P","Q","R","S"], ans:2,
        exp:"T = 3. P can't be at an end and P–R are adjacent, so P–R = (1,2) or (4,5) → P = 4, R = 5 (P can't be 1). Q is at the other end = 1, S next to Q = 2. Order: Q S T P R." },
      { id:"l1b", type:"mcq", set:"l1_seat", text:"Who sits between S and P?", opts:["Q","R","T","No one"], ans:2, exp:"Q S T P R → T is between S and P." },
      { id:"l1c", type:"tita", set:"l1_seat", text:"What is S's position from the left?", ans:"2", exp:"Q S T P R → 2." },
      { id:"l1d", type:"tita", set:"l1_tab", text:"By what percentage did sales increase from January to April?", ans:"50", exp:"(180 − 120)/120 = 0.5 → 50%." },
      { id:"l1e", type:"mcq", set:"l1_tab", text:"What were the average monthly sales?", opts:["140","145","146.25","150"], ans:2, exp:"(120 + 150 + 135 + 180)/4 = 585/4 = 146.25." },
    ]},
    { title:"Set Solver", mins:12, qs:[
      { id:"l2a", type:"tita", set:"l2_venn", text:"How many students like both tea and coffee?", ans:"15", exp:"Like at least one = 60 − 10 = 50. Both = 35 + 30 − 50 = 15." },
      { id:"l2b", type:"tita", set:"l2_venn", text:"How many students like only coffee?", ans:"15", exp:"30 − 15 = 15." },
      { id:"l2c", type:"tita", set:"l2_tour", text:"How many points were distributed in total in the tournament?", ans:"12", exp:"Matches = 4C2 = 6, each gives 2 points → 12." },
      { id:"l2d", type:"tita", set:"l2_tour", text:"How many points did B finish with?", ans:"2", exp:"A won 3 matches = 6 points. Remaining 6 points split equally among B, C, D → 2 each." },
      { id:"l2e", type:"mcq", set:"l2_tour", text:"Each of B, C and D won exactly how many matches?", opts:["0","1","2","Cannot be determined"], ans:1, exp:"2 points = 1 win each (they beat each other in a cycle)." },
    ]},
    { title:"Schedule Master", mins:12, qs:[
      { id:"l3a", type:"mcq", set:"l3_sched", text:"Which lecture is on Thursday?", opts:["Maths","Physics","Chemistry","Biology"], ans:2,
        exp:"Physics = Wed. Maths→Biology must be consecutive, only Mon–Tue is free → Maths Mon, Biology Tue. Chemistry = Thu (and indeed not Monday)." },
      { id:"l3b", type:"mcq", set:"l3_sched", text:"Who teaches Physics?", opts:["W","X","Y","Z"], ans:0,
        exp:"Y = Monday = Maths. X = Chemistry = Thu. W isn't Biology → W = Physics, Z = Biology." },
      { id:"l3c", type:"tita", set:"l3_sched", text:"How many lectures are held between Y's lecture and X's lecture?", ans:"2", exp:"Y = Monday, X = Thursday → Tue and Wed in between → 2." },
      { id:"l3d", type:"mcq", set:"l3_di", text:"In which year was profit the highest?", opts:["2021","2022","2023","2024"], ans:2, exp:"Profits: 20, 30, 45, 33 → 2023." },
      { id:"l3e", type:"tita", set:"l3_di", text:"What was the total profit (₹ crore) across all four years?", ans:"128", exp:"20 + 30 + 45 + 33 = 128." },
    ]},
  ],
  QA: [
    { title:"Arithmetic Spark", mins:10, qs:[
      { id:"q1a", type:"tita", text:"What is 20% of 30% of 500?", ans:"30", exp:"0.3 × 500 = 150; 0.2 × 150 = 30." },
      { id:"q1b", type:"tita", text:"The ratio of boys to girls in a class of 40 is 3 : 5. How many girls are there?", ans:"25", exp:"5/8 × 40 = 25." },
      { id:"q1c", type:"mcq", text:"Simple interest on ₹5,000 at 8% per annum for 3 years is:", opts:["₹1,000","₹1,200","₹1,250","₹1,300"], ans:1, exp:"5000 × 8 × 3 / 100 = 1200." },
      { id:"q1d", type:"tita", text:"The average of 5 numbers is 20. When one number is removed, the average of the rest is 18. What number was removed?", ans:"28", exp:"Total 100; remaining 4 × 18 = 72 → removed 28." },
      { id:"q1e", type:"mcq", text:"A can finish a job in 10 days and B in 15 days. Working together, they finish it in:", opts:["5 days","6 days","7.5 days","8 days"], ans:1, exp:"1/10 + 1/15 = 1/6 → 6 days. Shortcut: (10×15)/(10+15) = 6." },
    ]},
    { title:"Percent Pro", mins:10, qs:[
      { id:"q2a", type:"mcq", text:"The price of sugar rises by 25%. By what percentage must a family cut consumption to keep spending the same?", opts:["15%","20%","25%","30%"], ans:1, exp:"25/(100+25) = 1/5 = 20%." },
      { id:"q2b", type:"tita", text:"Compound interest on ₹10,000 at 10% per annum for 2 years (compounded annually) is ₹ ____", ans:"2100", exp:"10000 × 1.21 = 12100 → interest 2100." },
      { id:"q2c", type:"tita", text:"A boat's speed in still water is 10 km/h and the stream flows at 2 km/h. How many hours does it take to travel 24 km upstream?", ans:"3", exp:"Upstream speed = 10 − 2 = 8 → 24/8 = 3 h." },
      { id:"q2d", type:"tita", text:"A 40 L mixture has milk and water in the ratio 3 : 1. How many litres of water must be added to make the ratio 3 : 2?", ans:"10", exp:"Milk 30, water 10. For 3 : 2, water = 20 → add 10." },
      { id:"q2e", type:"mcq", text:"Two successive discounts of 20% and 10% are equivalent to a single discount of:", opts:["30%","28%","27%","25%"], ans:1, exp:"0.8 × 0.9 = 0.72 → 28%." },
    ]},
    { title:"Algebra Ace", mins:12, qs:[
      { id:"q3a", type:"tita", text:"If the roots of x² − 7x + 12 = 0 are a and b, what is a² + b²?", ans:"25", exp:"Roots 3 and 4 → 9 + 16 = 25. (Or (a+b)² − 2ab = 49 − 24.)" },
      { id:"q3b", type:"tita", text:"How many integers from 1 to 100 (inclusive) are divisible by 3 or 5?", ans:"47", exp:"33 + 20 − 6 (divisible by 15) = 47." },
      { id:"q3c", type:"tita", text:"What is log₂8 + log₃81?", ans:"7", exp:"3 + 4 = 7." },
      { id:"q3d", type:"tita", text:"An arithmetic progression has first term 5 and common difference 3. What is its 20th term?", ans:"62", exp:"5 + 19 × 3 = 62." },
      { id:"q3e", type:"mcq", text:"If 3x − 2y = 4 and x + y = 8, then x =", opts:["2","4","5","6"], ans:1, exp:"y = 8 − x → 3x − 16 + 2x = 4 → x = 4." },
    ]},
  ],
};

// ---------- Day-by-day plan ----------
const QA_TOPICS = ["Percentages","Profit, Loss & Discount","Ratio & Proportion","Averages & Mixtures","Simple & Compound Interest","Time & Work","Time, Speed & Distance","Boats, Trains & Races","Number System I — divisibility, HCF/LCM","Number System II — remainders, unit digits","Linear Equations","Quadratic Equations","Inequalities & Modulus","Logarithms & Indices","Progressions (AP/GP)","Functions & Graphs","Geometry I — triangles","Geometry II — circles & polygons","Mensuration","Coordinate Geometry","Permutations & Combinations","Probability","Set Theory & Venn"];
const DILR_TOPICS = ["Linear arrangements","Circular arrangements","Tables & caselets","Venn diagram sets","Games & tournaments","Scheduling","Distribution & matching","Bar / line / pie charts","Routes & networks","Truth-teller / liar logic","Grids & cubes","Quant-based DI","Mixed CAT PYQ sets"];

function buildPlan() {
  const start = new Date(EXAM.prepStart);
  const exam = new Date(EXAM.date.slice(0, 10) + "T00:00:00+05:30");
  const days = [];
  let qi = 0, li = 0;
  for (let d = new Date(start), n = 1; d < exam; d.setDate(d.getDate() + 1), n++) {
    const left = Math.round((exam - d) / 864e5);
    const date = new Date(d.getTime() + 19800000).toISOString().slice(0, 10);
    let phase, tasks;
    if (left <= 0) break;
    if (left === 1) {
      phase = "Eve of CAT";
      tasks = ["No new questions. Light 30-min revision of formula sheet only.","Pack: admit card print, govt photo ID, transparent bottle. Check centre route.","Sleep by 10 pm. You are ready."];
    } else if (left === 2) {
      phase = "Taper";
      tasks = ["One sectional (VARC) — 40 min, just to stay sharp.","Re-read your error log: top 20 mistakes.","Walk, sleep 8 hours."];
    } else if (left <= 13) {
      phase = "Mock Season";
      tasks = left % 2 === 1
        ? ["FULL MOCK — 120 min, exam timing (8:30 am), no breaks between sections.","Analysis (2 hrs): every wrong + every skipped question. Log in error notebook.","VARC: 1 RC from Aeon / The Hindu editorial."]
        : ["Fix the weakest topic from yesterday's mock (90 min).","DILR: 4 PYQ sets, timed 10 min each.","QA: 20 mixed questions, 40 min.","VARC: 2 RCs + 4 VA questions."];
    } else if (n <= 14) {
      phase = "Foundation";
      const q = QA_TOPICS[qi++ % QA_TOPICS.length], l = DILR_TOPICS[li++ % DILR_TOPICS.length];
      tasks = [`QA (2 hrs): ${q} — concepts + 30 practice questions.`,`DILR (1.5 hrs): ${l} — 3 sets, untimed first, then timed.`,"VARC (1 hr): 2 RCs + 1 para-jumble + 1 summary. Read 1 editorial.","App: clear at least 1 new level."];
      if (n % 7 === 0) tasks.push("Weekly check: Speed Mock in the app + share report with Abhilash.");
    } else {
      phase = "Build & Test";
      const q = QA_TOPICS[qi++ % QA_TOPICS.length], l = DILR_TOPICS[li++ % DILR_TOPICS.length];
      tasks = [`QA (1.5 hrs): ${q} — 25 questions incl. 5 CAT PYQs.`,`DILR (1.5 hrs): ${l} — 3 timed sets.`,"VARC (1 hr): 3 RCs, timed 8 min each."];
      if (n % 3 === 0) tasks.unshift("SECTIONAL MOCK today (40 min) — rotate VARC → DILR → QA.");
      if (n % 7 === 0) tasks.unshift("FULL MOCK today (120 min) + analysis.");
    }
    days.push({ n, date, left, phase, tasks });
  }
  return days;
}

// ---------- Colleges ----------
// cutoff = approx overall percentile usually needed for a call (General category, past years).
// Final admission also depends on sectional cut-offs, academics, gender/academic diversity, WAT-PI.
const COLLEGES = [
  { name:"IIM Ahmedabad", city:"Ahmedabad", cutoff:99, wiki:"Indian Institute of Management Ahmedabad",
    wow:"Louis Kahn's red-brick campus is an architectural icon. The case-method classroom where India's top CEOs were trained.", future:"Consulting (McKinsey, BCG, Bain), banking, product — the most famous MBA brand in India." },
  { name:"IIM Bangalore", city:"Bengaluru", cutoff:99, wiki:"Indian Institute of Management Bangalore",
    wow:"Stone-and-garden campus by B. V. Doshi, right in your city. Startup + tech capital of India on its doorstep.", future:"Top consulting, product management, VC & startups." },
  { name:"IIM Calcutta", city:"Kolkata", cutoff:99, wiki:"Indian Institute of Management Calcutta",
    wow:"135-acre lakeside campus at Joka — India's first IIM. Legendary finance placements.", future:"Investment banking, finance, consulting." },
  { name:"IIM Lucknow", city:"Lucknow", cutoff:98, wiki:"Indian Institute of Management Lucknow",
    wow:"Lush green campus, famed for marketing and its strong alumni network.", future:"Marketing, consulting, finance." },
  { name:"IIM Kozhikode", city:"Kozhikode", cutoff:97, wiki:"Indian Institute of Management Kozhikode",
    wow:"Hilltop campus overlooking the Western Ghats. Has had batches with ~50% women — huge for diversity.", future:"Strong in marketing, consulting, general management." },
  { name:"IIM Indore", city:"Indore", cutoff:97, wiki:"Indian Institute of Management Indore",
    wow:"Conducting CAT 2026! Sprawling hill campus and a strong all-round brand.", future:"Consulting, marketing, operations." },
  { name:"FMS Delhi", city:"New Delhi", cutoff:98, wiki:"Faculty of Management Studies, University of Delhi",
    wow:"Top-tier placements at a tiny fee — the best ROI MBA in India.", future:"Consulting, finance, marketing; elite ROI." },
  { name:"IIM Mumbai", city:"Mumbai", cutoff:96, wiki:"Indian Institute of Management Mumbai",
    wow:"Formerly NITIE — in Powai, Mumbai, by the lake. Operations & supply-chain powerhouse.", future:"Operations, supply chain, consulting." },
  { name:"IIT Bombay SJMSOM", city:"Mumbai", cutoff:97, wiki:"Shailesh J. Mehta School of Management",
    wow:"Inside the IIT Bombay campus — the IIT experience plus an MBA.", future:"Tech-product, consulting, analytics." },
  { name:"IIT Delhi DMS", city:"New Delhi", cutoff:96, wiki:"Department of Management Studies, IIT Delhi",
    wow:"IIT Delhi brand in the heart of the capital.", future:"Consulting, analytics, product." },
  { name:"SPJIMR Mumbai", city:"Mumbai", cutoff:95, wiki:"S. P. Jain Institute of Management and Research",
    wow:"Profile-heavy selection — values humanities and diverse backgrounds like yours.", future:"Marketing, consulting, finance." },
  { name:"MDI Gurgaon", city:"Gurugram", cutoff:95, wiki:"Management Development Institute",
    wow:"Corporate hub location, strong HR and marketing.", future:"HR, marketing, consulting." },
  { name:"IIM Shillong", city:"Shillong", cutoff:94, wiki:"Indian Institute of Management Shillong",
    wow:"Hills, clouds and pine forests — maybe the most beautiful IIM.", future:"General management, sustainability, consulting." },
  { name:"IIM Trichy", city:"Tiruchirappalli", cutoff:93, wiki:"Indian Institute of Management Tiruchirappalli",
    wow:"Modern 170-acre campus; fast-rising new-gen IIM.", future:"Marketing, operations, BFSI." },
  { name:"IIM Udaipur", city:"Udaipur", cutoff:93, wiki:"Indian Institute of Management Udaipur",
    wow:"City of lakes and palaces; strong research reputation.", future:"Digital, operations, marketing." },
  { name:"IIM Raipur / Ranchi / Kashipur", city:"Various", cutoff:90, wiki:"Indian Institute of Management Ranchi",
    wow:"New-gen IIMs with the IIM brand and steadily improving placements.", future:"Sales, marketing, BFSI, operations." },
];

// ---------- Morning boosts ----------
const BOOSTS = [
  "VARC is 24 of 68 questions. That's the section you were literally born for, Priya.",
  "You don't need to attempt everything. Toppers routinely skip a third of the paper — smart selection beats speed.",
  "IIMs actively add points for non-engineers and women. Your English Honours is an asset, not a gap.",
  "Quant isn't talent. It's 40 patterns repeated. You learn one or two a day — that's the whole trick.",
  "Every topper had a day-1 where percentages felt scary. This is yours. Keep going.",
  "Consistency beats intensity. Show up today — that's 80% of the win.",
  "Silver thinks it's silver because nobody has polished it yet. We're polishing.",
  "One more level today = one more step closer to Bangalore, Ahmedabad or Kolkata.",
  "Mistakes in practice are free. Mistakes on 29 Nov are expensive. Make all of them now.",
  "Accuracy first, speed later. Speed comes on its own after 3 weeks.",
];

// ---------- Video links (YouTube searches — always resolve to fresh results) ----------
const yt = q => "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const VIDEOS = [
  { title:"CAT exam pattern explained (latest)", url:yt("CAT 2026 exam pattern explained") },
  { title:"CAT topper strategy — non-engineers", url:yt("CAT 99 percentile non engineer strategy") },
  { title:"VARC: RC strategy", url:yt("CAT VARC reading comprehension strategy") },
  { title:"VARC: Para jumbles tricks", url:yt("CAT para jumbles tricks") },
  { title:"DILR: how to pick the right sets", url:yt("CAT DILR set selection strategy") },
  { title:"QA: Arithmetic one-shot", url:yt("CAT arithmetic one shot") },
  { title:"QA: Algebra one-shot", url:yt("CAT algebra one shot") },
  { title:"QA: Geometry one-shot", url:yt("CAT geometry one shot") },
  { title:"Rodha — QA concept videos", url:yt("Rodha CAT quant") },
  { title:"2IIM — CAT preparation", url:yt("2IIM CAT preparation") },
  { title:"Mock analysis: how to do it", url:yt("how to analyse CAT mock") },
  { title:"Life at IIM — a day in the life", url:yt("day in the life IIM MBA student") },
];
