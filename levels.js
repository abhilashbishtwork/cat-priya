// Levels 4–20 per section (coach-written, answer keys verified). Lives in the repo, not the Sheet, to keep the Sheet light.
// Order matters: EXTRA.levels[sec][0] is Level 4. Append only — her unlocks are counted by position.
const EXTRA = {
 "levels": {
  "VARC": [
   {
    "title": "Memory & Meaning",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_V_1",
      "type": "tita",
      "text": "Type the number of the odd sentence out:\n\n1. Bees communicate the location of food through a 'waggle dance'.\n2. The angle of the dance indicates direction relative to the sun.\n3. The duration of the waggle indicates distance to the food source.\n4. Honey has been found preserved in ancient Egyptian tombs.\n5. Other bees watch the dance and fly directly to the flowers.",
      "ans": "4",
      "exp": "1, 2, 3, 5 explain how the dance guides bees to food. 4 is a fact about honey — same topic word, different idea. Trick: find the paragraph's 'job' first, then the sentence that doesn't do that job."
     },
     {
      "id": "c20261018_V_2",
      "type": "tita",
      "text": "Arrange into a logical order (type e.g. 1234):\n\n1. But the tool was soon used for something its inventors never imagined.\n2. The first spreadsheet program was designed to help accountants avoid recalculating tables by hand.\n3. Today, entire businesses are planned, modelled and forecast inside it.\n4. Managers began using it to ask 'what if?' — testing plans before committing money.",
      "ans": "2143",
      "exp": "2 introduces the tool (opener: no pronoun, no 'But'). 1 'But…' twists. 4 says what that new use was. 3 'Today' closes. Trick: sentences starting with But/This/It can never open."
     },
     {
      "id": "c20261018_V_3",
      "type": "mcq",
      "text": "The author's main point is that memory:",
      "opts": [
       "is essentially a recording that slowly fades and blurs as time passes.",
       "is rebuilt each time we recall it: useful, but unreliable as a record.",
       "is so unreliable that it cannot be trusted and should never guide decisions.",
       "is more dependable in courtrooms than in the routines of everyday life."
      ],
      "ans": 1,
      "exp": "The passage replaces the 'recording' model with 'reconstruction': useful for the future, unreliable about the past. The fading-recording option is the very view being rejected. The 'never guide decisions' option overreaches; the author calls memory useful. The courtroom option is unsupported and, if anything, contradicted by the eyewitness example.",
      "set": "c_v4"
     },
     {
      "id": "c20261018_V_4",
      "type": "mcq",
      "text": "The example of eyewitnesses is used to show that:",
      "opts": [
       "witnesses frequently invent details to influence a court's verdict.",
       "a witness's sincerity does not guarantee that a memory is accurate.",
       "courts should stop relying on eyewitness testimony altogether.",
       "the stress of witnessing a crime makes memories sharper and clearer."
      ],
      "ans": 1,
      "exp": "'Entirely sincere... may still mislead': honest but wrong. The option about deliberate invention contradicts 'sincere'. The option about abandoning testimony is a recommendation the author never makes. The stress option is never discussed.",
      "set": "c_v4"
     },
     {
      "id": "c20261018_V_5",
      "type": "mcq",
      "text": "The author's tone is best described as:",
      "opts": [
       "explanatory and corrective",
       "reflective and wistful",
       "sceptical and dismissive",
       "alarmed and cautionary"
      ],
      "ans": 0,
      "exp": "The author explains the research and corrects a common belief ('Most people assume... research suggests otherwise'). There is no longing for the past, no dismissiveness (memory is called useful), and no sense of alarm.",
      "set": "c_v4"
     }
    ]
   },
   {
    "title": "Jumble Master",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_V_6",
      "type": "tita",
      "text": "Arrange into a logical order:\n\n1. Within a generation, tea had become a symbol of British identity.\n2. Tea first reached Britain in the seventeenth century as an expensive curiosity.\n3. Falling taxes in the 1780s made it affordable for ordinary households.\n4. Its popularity at the royal court gave it an air of fashion.",
      "ans": "2431",
      "exp": "Follow the timeline: arrival (2) → fashion at court (4, 'Its' needs tea named before) → becomes affordable (3) → national symbol (1)."
     },
     {
      "id": "c20261018_V_7",
      "type": "tita",
      "text": "Type the number of the odd sentence out:\n\n1. Remote work has removed the daily commute for millions of employees.\n2. Freed from travel, many report spending more time with family.\n3. Yet some feel isolated, missing the informal conversations of an office.\n4. The first commercial airline flight took place in 1914.\n5. Companies are now experimenting with hybrid models to balance both effects.",
      "ans": "4",
      "exp": "1-2-3-5 weigh the pros and cons of remote work. 4 is about aviation history — 'travel' is a trap word."
     },
     {
      "id": "c20261018_V_8",
      "type": "mcq",
      "text": "Choose the best summary:\n\n\"Cities are often blamed for environmental damage, yet per person, city dwellers tend to use less energy than rural residents. Dense housing shares walls and heat, public transport replaces cars, and shorter distances make walking practical. The environmental question, then, is not whether to have cities but how to build them well.\"",
      "opts": [
       "Cities harm the environment more than villages do, despite their efficient public transport.",
       "Density cuts per-person energy use, so well-built cities can be environmentally efficient.",
       "Since city dwellers use less energy, rural people should be encouraged to move to cities.",
       "Public transport is the main reason city dwellers use less energy than rural residents."
      ],
      "ans": 1,
      "exp": "The summary keeps the claim (less energy per person), the reason (density) and the conclusion (build cities well). The option saying cities are worse reverses the paragraph. The option urging people to move overreaches; the question is how to build cities, not who should live in them. The public-transport option singles out one of three reasons and calls it the main one."
     },
     {
      "id": "c20261018_V_9",
      "type": "mcq",
      "text": "The librarians' conclusion implies that the fines had:",
      "opts": [
       "encouraged most families to return their books on time.",
       "kept away families who could not afford to pay them.",
       "raised revenue that the library relied on to buy books.",
       "pushed children to read more in order to avoid fines."
      ],
      "ans": 1,
      "exp": "'Families who could not pay simply stopped coming': the fine excluded poorer families. The on-time-returns option is contradicted, since returns improved after fines ended. Revenue is never mentioned. Reading more is what the new programme did, not the fines.",
      "set": "c_v5"
     },
     {
      "id": "c20261018_V_10",
      "type": "mcq",
      "text": "Which of the following, if true, would most weaken the librarians' conclusion?",
      "opts": [
       "Children said they enjoyed reading in the library more than reading at home.",
       "Child membership also doubled that year in nearby towns that kept their fines.",
       "The new programme cost the library less to run than collecting fines had.",
       "Some children still returned their books late under the new programme."
      ],
      "ans": 1,
      "exp": "If membership doubled in towns that kept fines, something other than removing fines probably explains the rise, so the conclusion is weakened. Children's enjoyment and the programme's low cost do not touch the causal claim. A few late returns are consistent with returns improving overall.",
      "set": "c_v5"
     }
    ]
   },
   {
    "title": "Tone Detective",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_V_11",
      "type": "mcq",
      "set": "c_v6",
      "text": "The author suggests that the usual account of the paperback's arrival is:",
      "opts": [
       "false, because publishers were driven purely by profit and not by idealism.",
       "accurate as far as it goes, but silent on the commercial motive behind it.",
       "an exaggeration that critics of the paperback invented to discredit it.",
       "true of the 1930s but irrelevant to how people read books today."
      ],
      "ans": 1,
      "exp": "'That story is true, but incomplete', followed by the profit motive. The 'false' option contradicts 'true'. The critics did not invent the democratisation story; they opposed the format. Relevance to reading today is never discussed. The answer keeps the story and adds what is missing."
     },
     {
      "id": "c20261018_V_12",
      "type": "mcq",
      "set": "c_v6",
      "text": "The critics' warning is mentioned mainly in order to:",
      "opts": [
       "confirm that cheap books did in fact lead to falling literary standards.",
       "set up a prediction that the author then shows to have been mistaken.",
       "explain why publishers later decided to raise the price of paperbacks.",
       "suggest that cheap books were bought far more often than they were read."
      ],
      "ans": 1,
      "exp": "Right after the warning comes 'What they failed to anticipate...': the view is quoted so it can be answered. The option confirming falling standards reverses the author's verdict. Later price rises are never mentioned. The suggestion that cheap books went unread contradicts the image of reading on a crowded train. Ask why the sentence is there: it is a function question."
     },
     {
      "id": "c20261018_V_13",
      "type": "mcq",
      "set": "c_v6",
      "text": "The author's attitude towards the paperback is best described as:",
      "opts": [
       "appreciative, while acknowledging its commercial motives",
       "hostile, believing that cheap formats cheapened literature",
       "neutral, describing its history without judging its effects",
       "wistful, preferring the leather-bound book it displaced"
      ],
      "ans": 0,
      "exp": "The ending praises the paperback ('moved reading... into ordinary life') while admitting publishers were not idealists. The hostile option is the critics' view, which the author rejects. The neutral option ignores the clear verdict. The wistful option fails because leather books are described as furniture, not missed."
     },
     {
      "id": "c20261018_V_14",
      "type": "tita",
      "text": "Type the number of the odd sentence out:\n\n1. Volunteers who planted trees in a neighbourhood park were surveyed a year later.\n2. Most said they now knew more of their neighbours by name.\n3. Several had joined other local groups after meeting fellow planters.\n4. Trees planted in cities can lower summer street temperatures by several degrees.\n5. Shared physical work, it seems, builds the kind of trust that casual greetings rarely do.",
      "ans": "4",
      "exp": "The paragraph's job: what tree-planting did to PEOPLE's social ties (1→2→3→5). Sentence 4 is about cooling, a different benefit. Same topic word ('trees'), different job — that's the classic CAT trap."
     },
     {
      "id": "c20261018_V_15",
      "type": "tita",
      "text": "Arrange into a logical order (type e.g. 1234):\n\n1. So the managers moved the arrival gates further from baggage claim.\n2. Hiring more handlers cut the average wait, yet complaints barely fell.\n3. Passengers now spent the same time overall, but most of it walking, and complaints nearly vanished.\n4. Airport managers once faced constant complaints about slow baggage delivery.",
      "ans": "4213",
      "exp": "4 opens (sets up the problem, no 'So/yet'). 2 = first fix fails. 1 'So…' = the new idea. 3 = the result ('now'). Trick: link problem → failed fix → clever fix → result."
     }
    ]
   },
   {
    "title": "The Itch of Idleness",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_VARC_1",
      "type": "mcq",
      "text": "The primary purpose of the passage is to argue that boredom",
      "opts": [
       "functions as a useful signal whose value is lost when it is reflexively suppressed",
       "is a pleasant state that modern people should deliberately seek out and cultivate",
       "is caused chiefly by smartphones and by a culture of constant stimulation",
       "reliably makes people more creative, as recent experiments have demonstrated"
      ],
      "ans": 0,
      "exp": "The answer must cover both halves: paragraph 1 says boredom is a signal like pain; paragraph 2 says we silence it. The 'pleasant state to cultivate' option is directly denied ('not that boredom is pleasant'). The smartphone option reverses cause and effect: phones silence boredom, they do not cause it. The creativity option is too strong: the author calls the effect 'modest' and its durability 'unclear'.",
      "set": "c_vr7"
     },
     {
      "id": "c20261018b_VARC_2",
      "type": "mcq",
      "text": "The author would most likely agree with which of the following?",
      "opts": [
       "Boredom and pain are processed by the same neural mechanisms, which is why they feel alike.",
       "Boredom is best understood as a sign that one's surroundings offer too little stimulation.",
       "Twentieth-century psychologists were right to class boredom with fatigue as a state to minimise.",
       "Escaping boredom without asking what caused it is like numbing pain without examining the wound."
      ],
      "ans": 3,
      "exp": "The pain analogy plus 'the itch is scratched, and the question disappears' directly support the option about numbing pain without examining the wound. The neural-mechanism option is out of scope: the analogy is functional, not neurological. The 'too little stimulation' option contradicts 'less a deficiency of stimulation than a judgement'. The option endorsing twentieth-century psychologists contradicts 'this view mistakes the signal for the problem'.",
      "set": "c_vr7"
     },
     {
      "id": "c20261018b_VARC_3",
      "type": "mcq",
      "text": "The author's attitude toward the research on boredom and idea generation is best described as",
      "opts": [
       "politely dismissive",
       "cautiously receptive",
       "openly enthusiastic",
       "studiously indifferent"
      ],
      "ans": 1,
      "exp": "Tone hinges on qualifiers. The author cites the finding in support (receptive) but immediately hedges: 'the effect is modest and its durability unclear' (cautious). 'Enthusiastic' ignores the hedge; 'dismissive' ignores that the finding is used in support; 'indifferent' ignores that it is used at all.",
      "set": "c_vr7"
     },
     {
      "id": "c20261018b_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 1234).\n\n1. To guard against such multiplication of errors, print shops began employing correctors, who checked proofs line by line before a full run was printed.\n2. Early printers discovered that a press could reproduce a mistake as faithfully as it reproduced the truth.\n3. Their role, humble as it seemed, laid the foundation for the modern profession of proofreading.\n4. A single misprinted word in a Bible, for instance, might appear in a thousand copies before anyone noticed it.",
      "ans": "2413",
      "exp": "Opener rule: pick the sentence that needs nothing before it. 2 is a standalone general claim; 1 ('such multiplication'), 3 ('Their role') and 4 ('for instance') all lean backwards. 'For instance' means 4 illustrates 2 -> pair 2-4. 'Such multiplication of errors' in 1 points to the thousand copies in 4 -> 4-1. 'Their' in 3 can only mean the correctors of 1 -> 1-3. Order: 2-4-1-3."
     },
     {
      "id": "c20261018b_VARC_5",
      "type": "tita",
      "text": "Four of the five sentences below form a coherent paragraph. Identify the odd sentence out and type its number.\n\n1. Trees lower the temperature of city streets both by shading surfaces and by releasing water vapour through their leaves.\n2. Neighbourhoods with dense canopy can be several degrees cooler on summer afternoons than treeless blocks nearby.\n3. Yet canopy cover in many cities tracks income, so that the poorest districts are often the hottest.\n4. The tallest tree species in the world are found in the coastal forests of northern California.\n5. Planting programmes that target these districts therefore address both a climate problem and an equity problem.",
      "ans": "4",
      "exp": "Find the thread first: urban trees cool cities -> canopy is unequal -> targeted planting fixes both. 1-2-3-5 links cleanly ('Yet' turns to inequality; 'these districts' in 5 points back to 'poorest districts' in 3). Sentence 4 shares the keyword 'tree' but is about tree height and geography, not cities or cooling: a classic keyword trap."
     }
    ]
   },
   {
    "title": "Gaming the Gauge",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_VARC_6",
      "type": "mcq",
      "text": "Which of the following best captures the central argument of the passage?",
      "opts": [
       "Performance metrics in public services should be abandoned, since institutions invariably game them.",
       "Hospital administrators routinely act in bad faith, manipulating waiting-time figures for rewards.",
       "Metrics are valuable as diagnostic tools but tend to be distorted when mechanically tied to rewards.",
       "Adding more indicators is the most effective way to stop institutions gaming any single measure."
      ],
      "ans": 2,
      "exp": "The final paragraph gives the verdict ('The lesson is narrower...'). The 'abandon metrics' option is contradicted ('None of this means that measurement should be abandoned'). The bad-faith option is contradicted ('None of this requires villainy'). The 'add more indicators' option is the standard response the author argues against. Look for where the author says 'the lesson': the main idea lives there.",
      "set": "c_vr8"
     },
     {
      "id": "c20261018b_VARC_7",
      "type": "mcq",
      "text": "Based on the passage, which of the following practices is the author LEAST likely to expect to produce gamed numbers?",
      "opts": [
       "A ministry that ranks hospitals on fifteen separate indicators and ties each budget to the ranking.",
       "A ward nurse who tracks her unit's patient-fall rate weekly and discusses it with her team.",
       "A regulator that cuts funding to any hospital whose four-hour compliance falls below 95 per cent.",
       "A hospital board that gives bonuses to whichever department most improves its waiting-time figure."
      ],
      "ans": 1,
      "exp": "The author's rule: numbers get gamed when (a) mechanically tied to rewards and (b) set far from people who know the work. The ward nurse uses the number diagnostically, close to the work, with no reward attached. The ministry, regulator and board all attach money to the number; the fifteen-indicator ministry also crowds the dashboard. Write the author's rule in five words first, then match.",
      "set": "c_vr8"
     },
     {
      "id": "c20261018b_VARC_8",
      "type": "mcq",
      "text": "Which of the following, if true, would most seriously weaken the author's claim that adding more measures often deepens the problem?",
      "opts": [
       "Hospitals judged on many indicators, recorded automatically and reviewed equally often, gamed less than single-target ones.",
       "Some hospitals assessed only on a single waiting-time target went on to report real improvements in patient outcomes.",
       "Managers in several hospitals say they feel overwhelmed by the sheer number of indicators they are now required to track.",
       "Gaming of numerical targets has also been documented in schools and police forces that rely on performance indicators."
      ],
      "ans": 0,
      "exp": "To weaken, attack the mechanism. The author says more measures backfire because recording costs staff time and managers chase the most-reviewed numbers. The option with automatic recording and equal review removes both mechanisms and still finds less gaming, directly undercutting the claim. The single-target option says nothing about adding measures. Overwhelmed managers strengthen the claim. Gaming in schools and police supports the author's general view.",
      "set": "c_vr8"
     },
     {
      "id": "c20261018b_VARC_9",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 1234).\n\n1. Over the following two centuries, however, physicians stopped treating the condition as a medical illness at all.\n2. By the time it entered everyday speech, the word had shed its clinical sense and come to mean a bittersweet fondness for the past.\n3. The word 'nostalgia' was coined in 1688 by a Swiss medical student to describe a disease.\n4. Its sufferers, mostly soldiers and students far from home, were said to waste away from longing for their native land.",
      "ans": "3412",
      "exp": "Opener: 3 introduces the noun 'nostalgia' and a date, and needs no antecedent. 4 begins 'Its sufferers': 'its' needs a disease, so 3-4 is a mandatory pair. 1's 'however' contrasts with the medical picture in 3-4, and 'the following two centuries' needs the 1688 date. 2 ('By the time it entered everyday speech') is the end-point of the change in 1. Timeline sentences: let dates and 'following/by the time' markers sequence them."
     },
     {
      "id": "c20261018b_VARC_10",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph.\n\nTranslation is usually discussed as a problem of loss: the pun that cannot survive the journey, the rhythm that breaks on a foreign tongue. But the history of literature suggests that translation is as much a source of invention as of loss. Forms such as the sonnet, the haiku and the ghazal travelled into new languages precisely because translators, unable to carry them across intact, were forced to improvise equivalents, and those improvisations frequently became traditions of their own. The imperfection of translation, on this view, is not merely a cost to be minimised but one of the engines by which literatures renew themselves.",
      "opts": [
       "Although translation inevitably loses wordplay and rhythm, careful translators can keep these losses small.",
       "Forms like the sonnet and the ghazal survived in new languages only because translators kept them intact.",
       "Translation is fundamentally a creative act, so fidelity to the original is an outdated, needless ideal.",
       "Translation's failure to reproduce originals exactly has driven literary invention, not merely loss."
      ],
      "ans": 3,
      "exp": "A summary must keep the 'But' pivot from loss to invention through imperfection. The 'careful translators minimise loss' option stays on the rejected side of the pivot. The 'kept them intact' option contradicts 'unable to carry them across intact'. The 'fidelity is outdated' option is extreme: the paragraph says 'as much... as', and never dismisses fidelity. The correct option keeps both halves and the causal link."
     }
    ]
   },
   {
    "title": "Novels and Niceness",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_VARC_11",
      "type": "mcq",
      "text": "The author's main purpose in the passage is to",
      "opts": [
       "refute the idea that literature has any moral value, for individual readers or for society",
       "argue that laboratory studies of reading are methodologically worthless and should be ignored",
       "question a widely held claim about fiction's moral effects and propose a more modest alternative",
       "show that cultivated readers are more likely than others to tolerate or commit acts of cruelty"
      ],
      "ans": 2,
      "exp": "Structure: creed stated, evidence attacked (fragile, too narrow, selection effect, history), then 'None of this shows that literature is morally inert', then a smaller claim offered. The correct option maps the whole arc. The 'no moral value' option is denied outright. The 'worthless studies' option inflates 'fragile' and 'narrower'. The cruelty option turns 'can coexist' (possibility) into 'more likely' (comparison).",
      "set": "c_vr9"
     },
     {
      "id": "c20261018b_VARC_12",
      "type": "mcq",
      "text": "Which of the following can most reasonably be inferred from the passage?",
      "opts": [
       "The author believes that readers of popular fiction are, on the whole, less empathetic than literary readers.",
       "Finding that fiction readers score higher on empathy tests would not alone show that reading causes empathy.",
       "The author thinks literature teachers exaggerate fiction's benefits chiefly to protect their own profession.",
       "If the laboratory findings were reliably replicated, the author would accept that fiction makes readers kinder."
      ],
      "ans": 1,
      "exp": "The selection-effect point ('the habit may be a symptom of sympathy rather than its cause') means a correlation would not prove causation. The popular-fiction option turns something the author reports (and doubts) into something she believes. The 'protect their profession' option imputes a motive; 'less flattering' is not an accusation. The replication option is contradicted: 'even taken at face value' the findings show only a perceptual effect, not kindness.",
      "set": "c_vr9"
     },
     {
      "id": "c20261018b_VARC_13",
      "type": "mcq",
      "text": "Which of the following, if true, would most strengthen the author's suggestion about fiction's 'real contribution'?",
      "opts": [
       "Long-term readers of literary fiction give noticeably more to charity each year than matched non-readers.",
       "Readers of popular fiction report enjoying their reading far more than readers of literary fiction do.",
       "Several further laboratory studies linking fiction reading with better empathy have failed to replicate.",
       "Long-term literary readers describe others' feelings with a wider, more specific vocabulary than non-readers."
      ],
      "ans": 3,
      "exp": "The target is the alternative claim: fiction makes readers more precise in distinguishing kinds of suffering and less content with stock phrases. A richer, more specific emotional vocabulary tests precision directly. The charity option supports the kindness creed the author doubts. The failed-replication option supports the critique, not the alternative (scope shift). Enjoyment is irrelevant.",
      "set": "c_vr9"
     },
     {
      "id": "c20261018b_VARC_14",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 1234).\n\n1. Employers who paid by the hour soon had every reason to care whether those hours were filled with work.\n2. For most of human history, time was told by tasks rather than by clocks: a meal took as long as it took to cook rice, a prayer as long as it took to recite it.\n3. It is no accident, then, that the factory bell and the punishment for lateness arrived together with the wage.\n4. For the first time, hours could be measured independently of what was done in them, and therefore bought and sold.\n5. The mechanical clock, which spread through European towns from the fourteenth century, made a different arrangement possible.",
      "ans": "25413",
      "exp": "Opener: 2 sets up the 'before' state with no backward reference. 5's 'a different arrangement' needs the task-time of 2 -> 2-5. 4's 'For the first time' explains what the clock made possible -> 5-4. 'Bought and sold' in 4 sets up 'employers who paid by the hour' in 1 -> 4-1. 3 opens with 'then', a conclusion marker, so it closes. Chain the mandatory pairs: 2-5, 5-4, 4-1, then 3."
     },
     {
      "id": "c20261018b_VARC_15",
      "type": "tita",
      "text": "Four of the five sentences below form a coherent paragraph. Identify the odd sentence out and type its number.\n\n1. When ocean temperatures rise even slightly above their usual summer maximum, corals expel the algae that live inside their tissues.\n2. Because these algae supply most of the coral's food and all of its colour, the expelled coral turns white and begins to starve.\n3. Reef algae are also being studied by pharmacologists, who have isolated several compounds from them with potential use against cancer.\n4. If temperatures fall quickly enough, the algae can recolonise the coral and the reef may recover within a few years.\n5. Repeated bleaching events, however, leave too little time between them for this recovery, and reefs that bleach every other year gradually die.",
      "ans": "3",
      "exp": "The thread is the bleaching cycle: heat -> algae expelled -> starvation -> possible recovery -> repeated bleaching prevents recovery (1-2-4-5). Sentence 3 reuses the keyword 'algae' but turns to pharmacology, which nothing before or after it continues. Odd-one-out rule: shared vocabulary is not shared argument; ask whether the sentence advances the same chain of cause and effect."
     }
    ]
   },
   {
    "title": "Commons Sense",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_VARC_16",
      "type": "mcq",
      "text": "Which of the following best expresses the author's central claim?",
      "opts": [
       "The ruin the parable predicts depends on lacking any means to make and enforce agreements; it is not inevitable.",
       "Shared resources are best left to local communities, since enclosure and state control have consistently failed.",
       "The overgrazing parable has no real empirical basis and should be discarded from economic reasoning entirely.",
       "Collective management of a commons succeeds only when a distant authority supervises and enforces local rules."
      ],
      "ans": 0,
      "exp": "The third paragraph gives the 'more defensible conclusion', and it is conditional. The 'leave it to local communities' option is the mirror-image parable the author warns against. The 'discard the parable' option is too strong: it describes 'a real situation'. The distant-authority option reverses the text, which lists outside override as a cause of failure. When an author rejects two extremes, the answer is usually the qualified middle.",
      "set": "c_vr10"
     },
     {
      "id": "c20261018b_VARC_17",
      "type": "mcq",
      "text": "The author's reference to 'global fisheries and a shared atmosphere' most strongly implies that",
      "opts": [
       "the field studies show that global resources can be governed just as local irrigation systems are",
       "the parable was originally intended to describe international resources rather than local pastures",
       "global resources are inherently unmanageable and will inevitably be degraded whatever rules are made",
       "the parable's grim prediction may apply with special force to some of the largest resource problems"
      ],
      "ans": 3,
      "exp": "Link the remark to the failure conditions: large groups, open entry, distant authority. Global fisheries and the atmosphere have vast, open user groups with no shared means of agreement, so they resemble the parable's strangers ('perhaps an increasingly common' situation). The irrigation-systems option ignores those failure conditions. The 'originally intended' option is unsupported history. The 'inherently unmanageable' option clashes with 'not a law of nature'. The right inference keeps the author's 'perhaps'.",
      "set": "c_vr10"
     },
     {
      "id": "c20261018b_VARC_18",
      "type": "mcq",
      "text": "Which of the following, if true, would most seriously weaken the author's account of when collective arrangements fail?",
      "opts": [
       "A communal grazing system collapsed soon after the state imposed uniform grazing rules on the region.",
       "Several privately owned pastures were overgrazed by owners even though no one else could use them.",
       "Many communal fisheries collapsed despite small, stable membership, closed access and no interference.",
       "Several irrigation communities using graduated penalties have survived intact for over four centuries."
      ],
      "ans": 2,
      "exp": "The account says collective arrangements fail under identifiable conditions (too large, open entry, outside override). The strongest weakener shows failure when none of those holds: the fisheries with small, stable, closed membership. The state-imposed-rules case is an instance of the third condition, so it strengthens. Long-surviving irrigation communities support the success story. Private pastures are outside the scope of when collective arrangements fail.",
      "set": "c_vr10"
     },
     {
      "id": "c20261018b_VARC_19",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 1234).\n\n1. A claim without a footnote asks the reader for trust; a claim with one offers the reader a test.\n2. For a weak argument can be seen to be weak by any attentive reader, whereas a false citation corrupts the very means by which weakness is detected.\n3. A historian's footnotes are often read as mere decoration, a scholarly ritual performed for the benefit of reviewers.\n4. In fact they do something the main text cannot: they expose the argument to verification by anyone willing to follow the trail.\n5. It is precisely because footnotes offer this test that a forged or careless one is a graver offence than a weak argument.",
      "ans": "34152",
      "exp": "Opener: 3 states the common view; 4's 'In fact they...' rebuts it and needs 'footnotes' as the antecedent of 'they', so 3-4 is mandatory. 1 sharpens 'verification' into trust vs test. 5's 'this test' can only point to 'a test' in 1, giving 1-5. 2 opens with 'For' (= because) and explains why a forgery is worse than a weak argument, so it must follow 5. Watch 'this + noun': the noun usually repeats a word from the previous sentence, which gives you the pair."
     },
     {
      "id": "c20261018b_VARC_20",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph.\n\nWe tend to assume that a forecaster who is right more often is the better forecaster. But accuracy rates can mislead when outcomes are lopsided. In a region where it rains on one day in ten, a forecaster who announces 'no rain' every morning will be right ninety per cent of the time while telling us nothing we did not already know. The value of a forecast lies not in how often it is correct but in how much it improves on what a well-informed person would have guessed without it.",
      "opts": [
       "Forecasters working in dry regions can reach very high accuracy rates without possessing any real skill.",
       "Accuracy rates are meaningless for judging forecasters, since anyone can match them by predicting the usual.",
       "A forecast's worth lies in what it adds beyond a sensible default expectation, not in its raw hit rate.",
       "Because rare events are hard to predict, forecasters should focus on getting the common outcomes right."
      ],
      "ans": 2,
      "exp": "A summary keeps the conclusion, not the example. The dry-regions option restates only the rain example. The 'meaningless' option is extreme: accuracy 'can mislead when outcomes are lopsided', a conditional claim. The 'focus on common outcomes' option draws the opposite lesson, since always forecasting the common outcome is what the paragraph calls uninformative. The correct option carries the final sentence's criterion: improvement over an informed baseline."
     }
    ]
   },
   {
    "title": "The Verdict of Boredom",
    "mins": 15,
    "qs": [
     {
      "id": "l11_VARC_1",
      "type": "mcq",
      "text": "The primary purpose of the passage is to:",
      "opts": [
       "argue that boredom should generally be overridden, since it is usually a miscalibrated response.",
       "recast boredom as a fallible evaluative signal that deserves scrutiny rather than suppression.",
       "condemn digital media for causing a modern epidemic of boredom from which they then profit.",
       "show that boredom, properly understood, is a reliable guide to what is worth doing with one's life."
      ],
      "ans": 1,
      "exp": "The author moves from 'boredom is a judgment' to 'it can be miscalibrated' to 'it should be interrogated, treated as a claim that may be true or false'. The correct option keeps both halves (evaluative and fallible). The closest trap is the 'reliable guide' option: it keeps the judgment half but drops 'None of this means boredom is infallible'. The 'generally overridden' option inflates the concession into the thesis. The digital-media option distorts: the feed prevents boredom's verdict; it is not said to cause boredom.",
      "set": "c_vr11"
     },
     {
      "id": "l11_VARC_2",
      "type": "mcq",
      "text": "A reader puts down a demanding novel after twenty pages because she finds it dull. Based on the passage, the author would most likely say that she has:",
      "opts": [
       "correctly obeyed her boredom's judgment that the novel offers nothing worth caring about.",
       "displayed the lack of inner resources that eighteenth-century moralists saw in the bored.",
       "possibly mistaken a deferred reward for an absent one, by not persisting long enough to tell.",
       "been conditioned by the attention industries to drop anything that does not stimulate at once."
      ],
      "ans": 2,
      "exp": "Some goods disclose themselves only after 'initial flatness', and the two kinds of boredom 'differ in what follows when one persists'. Quitting at twenty pages means she never tested which kind hers was, hence the hedged 'possibly mistaken a deferred reward'. The 'correctly obeyed' option is the trap: boredom can be right, but the author could not say so here without persistence. The moralists' option revives the deficiency view the author rejects. The conditioning option is unsupported by the scenario.",
      "set": "c_vr11"
     },
     {
      "id": "l11_VARC_3",
      "type": "mcq",
      "text": "The author attributes each of the following to the 'endlessly refreshing feed' EXCEPT that it:",
      "opts": [
       "reliably supplies content that users, on reflection, judge worth their time.",
       "forestalls the question of whether an activity is truly worth one's life.",
       "delivers stimulus at a pace calibrated to stay ahead of evaluative judgment.",
       "erodes a restlessness that once prompted people to make major life changes."
      ],
      "ans": 0,
      "exp": "Paragraph 2 says the feed prevents the question from being asked, is 'calibrated to stay just ahead of the judgment', and removes 'the restlessness that once drove people to quit jobs...'. The option about content users judge worth their time is never claimed; the point is that the feed stops users reaching any reflective verdict. The restlessness option may look like an extrapolation, but 'with it the restlessness' states it directly.",
      "set": "c_vr11"
     },
     {
      "id": "l11_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. Critics soon complained that such readers were consulting books without reading them, plucking out what they wanted through the back door.\n2. Printing changed this by fixing each passage to a stable page number, so that a reference made in one copy held for all.\n3. The complaint sounds familiar because it is the one now levelled at search engines, with the index cast as their disreputable ancestor.\n4. Before the printed book, an index was of limited use, since the same passage fell on different leaves in every handwritten copy.\n5. This stability turned the index from a private aide-memoire into a public instrument that any reader could use.",
      "ans": "42513",
      "exp": "4 opens: it sets up the problem (variable leaves in manuscripts). 2 follows: 'Printing changed THIS' = that problem. 5 follows: 'This STABILITY' = the stable page numbers of 2. 1 follows: 'SUCH readers' = the 'any reader' using the index in 5. 3 closes: 'The COMPLAINT' = the critics' complaint in 1. Every link is a forced back-reference, so no other order works."
     },
     {
      "id": "l11_VARC_5",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph:\n\nWe often say we trust experts because they know more than we do, but this cannot be the whole story, since we are rarely in a position to verify that they do. What we actually assess are proxies: credentials, institutional affiliation, the agreement of other experts, the track record of a field. Each proxy can fail, and each can be gamed. Yet the alternative, judging every claim on its merits, is not available to finite beings in a complex society. Rational trust, then, is less a matter of checking the expert than of checking the system that produced and certifies the expert.",
      "opts": [
       "Since every proxy for expertise can be gamed, laypeople should instead evaluate each expert claim on its own merits.",
       "Experts deserve our trust because they know more than laypeople do, as their credentials and posts show.",
       "Trust in experts is irrational in complex societies, since every proxy we use for expertise can fail.",
       "Since laypeople cannot verify expertise directly, rational trust rests on checking the systems that certify it."
      ],
      "ans": 3,
      "exp": "The paragraph concludes that rational trust means 'checking the system that produced and certifies the expert', while conceding proxies are fallible. The correct option keeps both. The 'trust is irrational' option is the close trap: it takes the 'proxies can fail' premise to a conclusion the paragraph avoids. The 'judge on the merits' option recommends the alternative the paragraph calls unavailable. The 'they know more' option is the view called 'not the whole story'."
     }
    ]
   },
   {
    "title": "No Ribbon for Repairs",
    "mins": 15,
    "qs": [
     {
      "id": "l12_VARC_1",
      "type": "mcq",
      "text": "The author's central contention is that:",
      "opts": [
       "governments should shift spending from new construction to the upkeep of infrastructure they already have.",
       "institutions depreciate faster than physical infrastructure, since their decay leaves no rust or visible trace.",
       "measurement that hides upkeep biases societies toward novelty, so building versus keeping is decided by default.",
       "deferred maintenance is the principal cause of infrastructure failure in modern democracies and institutions."
      ],
      "ans": 2,
      "exp": "The last paragraph names the 'deeper problem': 'our instruments of measurement make the choice for us... the decision between them is rarely posed as a decision at all.' The option about measurement deciding by default says exactly this. Shifting spending to upkeep is the conclusion the author calls 'too simple'. The 'institutions depreciate faster' option distorts: they are harder to see, not said to decay faster. The 'principal cause' option is a causal claim the passage never makes.",
      "set": "c_vr12"
     },
     {
      "id": "l12_VARC_2",
      "type": "mcq",
      "text": "Which of the following, if true, would most weaken the author's account of why maintenance is routinely deferred?",
      "opts": [
       "Voters reliably trace later infrastructure failures to the officials whose earlier cuts caused them, and punish them.",
       "Engineers report that designing new structures is far more professionally rewarding than maintaining existing ones.",
       "Many private firms also underinvest in maintaining their equipment, much as public bodies do with infrastructure.",
       "The share of public budgets devoted to maintenance varies widely from one country to another and year to year."
      ],
      "ans": 0,
      "exp": "The mechanism is that deferral costs the decision-maker nothing: the bill arrives later, 'often to a different administration', and is 'blamed on age or bad luck'. If voters reliably trace and punish the original choice, that mechanism collapses. The engineers option is consistent with (even supports) the claim about what engineers are rewarded for. Private-firm underinvestment is compatible with the account. Cross-country variation is irrelevant without a link to measurement or accountability.",
      "set": "c_vr12"
     },
     {
      "id": "l12_VARC_3",
      "type": "mcq",
      "text": "Which of the following is most analogous to the institutional cases described in the third paragraph?",
      "opts": [
       "A city replaces its ageing tram fleet with new buses after publishing a full comparison of costs.",
       "A museum lets a temporary installation decay on public display because the artist intended it to fall apart.",
       "A factory's machinery slowly rusts and seizes after its owner stops paying for regular lubrication.",
       "A professional body adds rules yearly and retires none, until members cannot say what its code requires."
      ],
      "ans": 3,
      "exp": "Paragraph 3's cases are non-physical institutions degrading through accumulation and neglect (procedures that 'accrete exceptions', a curriculum 'extended every year and pruned never'). The professional body's ever-growing code mirrors this. The rusting-factory option is the trap: it is deferred maintenance, but physical, with literal rust, which is the contrast the author draws ('there is no rust'). The tram replacement is a deliberate, visible choice; the museum installation is decay chosen on purpose.",
      "set": "c_vr12"
     },
     {
      "id": "l12_VARC_4",
      "type": "tita",
      "text": "Five sentences are given below. Four of them form a coherent paragraph. Type the number of the sentence that does NOT belong.\n\n1. Each time a memory is recalled, it becomes briefly unstable and must be stored again.\n2. During this window, the memory can be altered by new information, emotions, or suggestions present at the moment of recall.\n3. This is why confident eyewitnesses can nonetheless be wrong: their memories have been rewritten through repeated retelling.\n4. Sleep, particularly deep slow-wave sleep, plays a key role in transferring new memories from the hippocampus to the cortex.\n5. Paradoxically, then, the memories we revisit most often may be the least faithful to the original event.",
      "ans": "4",
      "exp": "Sentences 1-2-3-5 form one argument about recall making memories unstable and rewritable (reconsolidation), ending in the paradox that the most-revisited memories are least faithful. Sentence 4 is about first-time consolidation of new memories during sleep: same broad topic (memory), different process, and it connects to nothing about recall."
     },
     {
      "id": "l12_VARC_5",
      "type": "mcq",
      "text": "Where does the following sentence best fit in the paragraph?\n\nSentence: There are records of mill owners quietly setting their clocks back in the mornings and forward at night, and of workers forbidden to carry watches of their own.\n\nParagraph: Before mechanical clocks governed work, the labouring day in much of Europe was measured by tasks rather than hours: one worked until the hay was in or the bread was baked. ___(1)___ The factory changed this, because a mill whose machines ran continuously needed workers who arrived and left together. ___(2)___ Employers responded by installing clocks, ringing bells and fining latecomers, and workers responded, at first, by contesting whose clock counted. ___(3)___ Within a few generations, however, the struggle was no longer over the clock but over the hours it measured: the ten-hour day, then the eight. ___(4)___",
      "opts": [
       "Position 1",
       "Position 2",
       "Position 3",
       "Position 4"
      ],
      "ans": 2,
      "exp": "The sentence is evidence for a dispute over 'whose clock counted' (owners manipulating clocks, workers barred from keeping their own time), so it belongs right after that claim, at position 3, before 'however' turns to the later struggle over hours. At position 1 or 2 it would mention mill clocks before the paragraph has introduced employers installing them. At position 4 it would jump back in time after the paragraph has moved on to the eight-hour day."
     }
    ]
   },
   {
    "title": "Fair Is a Long Line",
    "mins": 15,
    "qs": [
     {
      "id": "l13_VARC_1",
      "type": "mcq",
      "text": "The author's attitude toward the queue is best described as:",
      "opts": [
       "dismissive: it is an inefficient relic that paid priority lanes are right to replace.",
       "nostalgic: it belongs to a lost era in which all citizens once waited as true equals.",
       "appreciative yet clear-eyed: valued for its symbolic role despite unequal burdens.",
       "neutral: the arguments on both sides are set out without the author taking a side."
      ],
      "ans": 2,
      "exp": "The author calls the queue 'among the most underrated of social institutions' and defends it as a 'public demonstration', while insisting its egalitarianism is 'of form rather than of burden' and 'partly a fiction': appreciation with open eyes. The neutral option is the trap: both sides are laid out, but the author then takes a position ('Neither side, I think, has quite grasped...'). There is no lost era, and the author resists replacing queues with paid lanes.",
      "set": "c_vr13"
     },
     {
      "id": "l13_VARC_2",
      "type": "mcq",
      "text": "Each of the following is presented in the passage as a feature or consequence of the ordinary queue EXCEPT that it:",
      "opts": [
       "is maintained without any formal authority or written rules.",
       "distributes goods more efficiently than paid alternatives do.",
       "imposes heavier costs on those whose time is scarcer or dearer.",
       "exposes rich and poor alike to the same tedium, side by side."
      ],
      "ans": 1,
      "exp": "The no-authority, heavier-costs and shared-tedium options are stated in paragraphs 1, 2 and 3. On efficiency the author says only that the queue distributes goods 'badly'; the passage never compares it favourably with paid lanes. The heavier-costs option may look like criticism rather than a 'feature', but it is plainly asserted ('the parent with a child in tow pays more').",
      "set": "c_vr13"
     },
     {
      "id": "l13_VARC_3",
      "type": "mcq",
      "text": "It can be inferred that the author regards the defenders of paid priority arrangements as:",
      "opts": [
       "right that the queue already hides an inequality, but blind to the symbolism that selling places would destroy.",
       "wrong to claim that the burdens of waiting in a queue fall unevenly on different kinds of people in society.",
       "valuing efficiency over justice, which the author takes to be the queue's primary and proper purpose.",
       "motivated chiefly by the self-interest of wealthy people who would rather not wait alongside everyone else."
      ],
      "ans": 0,
      "exp": "Paragraph 2 independently endorses the defenders' premise (the queue 'rewards those who can afford to wait'), yet 'Neither side... has quite grasped what the queue does': staging a demonstration that 'cannot survive being openly sold'. The correct option holds both halves. The efficiency-over-justice option is the close trap: the author says the queue distributes justly 'only roughly', so justice is not its primary purpose. The 'wrong about uneven burdens' option contradicts paragraph 2; the self-interest motive is never suggested.",
      "set": "c_vr13"
     },
     {
      "id": "l13_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. For them, physicians proposed cures ranging from leeches to threats of being buried alive and, most reliably, a ticket home.\n2. That shift matters, because a place can be returned to while a past cannot, which is why the modern condition admits no ticket home.\n3. The word 'nostalgia' was coined in 1688 by a Swiss medical student to name a disease.\n4. Only in the twentieth century did the term drift from geography to time, so that one now longs not for a place but for a past.\n5. Its sufferers, mostly soldiers serving far from home, were said to waste away from longing for their native valleys.",
      "ans": "35142",
      "exp": "3 opens (the coinage). 5 follows: 'ITS sufferers' = the disease of 3. 1 follows: 'For THEM' = the soldiers of 5 (1 cannot precede 5, since 'them' would have no referent). 4 follows: 'Only in the twentieth century' moves on from the 17th-18th-century medical history. 2 closes: 'That SHIFT' = the drift from place to time in 4, and its 'no ticket home' answers the cure in 1."
     },
     {
      "id": "l13_VARC_5",
      "type": "tita",
      "text": "Five sentences are given below. Four of them form a coherent paragraph. Type the number of the sentence that does NOT belong.\n\n1. Street trees cool cities not only by shading pavements but by releasing water vapour through their leaves.\n2. On a hot afternoon, a tree-lined street can be several degrees cooler than a bare one only a block away.\n3. These benefits, however, are unevenly distributed, since wealthier neighbourhoods have historically been planted far more densely.\n4. The result is that the residents least able to afford air-conditioning often live on the hottest streets.\n5. Many cities now choose tree species for their drought tolerance, as hotter summers place greater stress on urban plantings.",
      "ans": "5",
      "exp": "1-2-3-4 build one argument: trees cool streets, the cooling is unequally distributed, so the poorest live on the hottest streets. Sentence 5 shares the vocabulary (trees, heat) but changes the subject to the trees' own survival under heat stress; it neither follows from 4 nor sets up any of the others."
     }
    ]
   },
   {
    "title": "Six Species Map the World",
    "mins": 15,
    "qs": [
     {
      "id": "l14_VARC_1",
      "type": "mcq",
      "text": "The passage is primarily concerned with:",
      "opts": [
       "arguing that research on model organisms, being unrepresentative of human patients, should give way to studies of human-derived tissue and organoids.",
       "explaining why cellular machinery conserved across species makes findings from yeast, flies and mice dependable guides to human biology.",
       "documenting how treatments that cure disease in laboratory mice fail in human trials, and tracing those failures to how the mice are raised.",
       "showing how choosing a few model organisms for convenience has limited the reach of findings and skewed which questions get asked."
      ],
      "ans": 3,
      "exp": "The passage covers why the models were chosen (convenience), where findings fail to transfer (late-evolving, variable processes), the 'subtler problem' of shaping which questions get asked, and why the dependence persists. The option about convenience limiting findings and skewing questions covers all of this. The option about conserved cellular machinery is just the 'standard defence', which the author only partly accepts. The option about failed human trials expands one illustrative clause. The option about giving way to human-derived tissue goes beyond the author, who calls abandoning the old models a 'naive' expectation and argues for no replacement.",
      "set": "c_vr14"
     },
     {
      "id": "l14_VARC_2",
      "type": "mcq",
      "text": "According to the passage, the 'standard defence' is weakest when applied to which of the following research questions?",
      "opts": [
       "How chromosomes are duplicated and then separated when a dividing cell splits in two.",
       "How a person's immune system responds to a chronic infection over many years.",
       "How ribosomes assemble proteins from the instructions carried by messenger RNA.",
       "How the sequence of DNA is preserved with high fidelity during each round of replication."
      ],
      "ans": 1,
      "exp": "The defence is 'largely correct' for conserved, early-evolved machinery: DNA copying, protein synthesis and cell division, which covers the options about chromosomes, ribosomes and DNA replication. It is 'less convincing' for processes that 'evolved late and vary widely: immune responses... the course of chronic disease'. The immune-response option combines two of these and also involves an adult with a history, unlike the young, sterile lab mouse.",
      "set": "c_vr14"
     },
     {
      "id": "l14_VARC_3",
      "type": "mcq",
      "text": "Which of the following, if true, would most strengthen the author's claim in the third paragraph that model organisms shape which questions get asked?",
      "opts": [
       "Many drugs that cure disease in mice go on to fail in human clinical trials, often because mouse physiology differs from ours.",
       "The cost of sequencing a genome has fallen so sharply that researchers can now study the genes of almost any species they choose.",
       "Phenomena absent from the six model species are markedly under-studied relative to their estimated medical importance.",
       "Researchers working on fruit flies publish more papers per year than colleagues working on any other species, model or otherwise."
      ],
      "ans": 2,
      "exp": "The claim is that topics not studiable in model organisms get neglected regardless of importance. The option about phenomena absent from the six species being under-studied relative to medical importance provides exactly that evidence. The option about drugs failing in human trials is the trap: it echoes the same paragraph, but supports the separate point that models 'sometimes... mislead', which the author explicitly sets aside ('The point is not that...'). The options about cheaper genome sequencing and fruit-fly publication rates say nothing about which questions get neglected.",
      "set": "c_vr14"
     },
     {
      "id": "l14_VARC_4",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph:\n\nTranslators are often praised for being 'invisible', for producing a text that reads as though it had been written in the target language. But invisibility has a cost. A translation that smooths away every foreign turn of phrase also erases the evidence that the work came from elsewhere, and readers come away believing that a distant culture thinks much as they do. A degree of strangeness, deliberately preserved, may be the more honest service: it reminds readers that they are reading across a distance, and that something has been carried over that does not fully belong to their language.",
      "opts": [
       "Praised 'invisible' translation hides a text's foreignness and so misleads readers; preserving some strangeness may serve them more honestly.",
       "Translators should preserve every foreign construction intact, so that readers meet the original exactly as its first audience did.",
       "Readers find foreign-sounding translations off-putting, which is why translators strive so hard to make their work invisible.",
       "Because no translation can carry its original over fully, every translation, however fluent or deliberately strange, is in some way dishonest."
      ],
      "ans": 0,
      "exp": "The option about invisible translation misleading readers and some strangeness being more honest captures the contrast (praised invisibility versus its hidden cost) and the tentative recommendation ('a degree of strangeness... may be'). The option about preserving every foreign construction is the trap: it overstates 'a degree of strangeness' and adds an impossible goal. The option about readers finding foreignness off-putting invents a reader preference. The option calling every translation dishonest inflates a critique of one style into a verdict on all translation."
     },
     {
      "id": "l14_VARC_5",
      "type": "mcq",
      "text": "Where does the following sentence best fit in the paragraph?\n\nSentence: Nor are they paid for the work, or credited for it in any way that advances their careers.\n\nParagraph: Peer review is often described as the gatekeeper of science, as though it certified that published findings are true. ___(1)___ In practice, reviewers rarely have access to the raw data, almost never attempt to reproduce the experiments, and are given a few hours to judge work that took years. ___(2)___ What review can reasonably do is check whether the claims follow from the evidence presented and whether obvious alternatives have been considered. ___(3)___ The real test of a finding comes afterwards, when other laboratories try to build on it and either succeed or quietly fail. ___(4)___",
      "opts": [
       "Position 1",
       "Position 2",
       "Position 3",
       "Position 4"
      ],
      "ans": 1,
      "exp": "'Nor' needs a preceding list of negatives, and 'they' needs reviewers as its referent: both are supplied only by the sentence ending at (2), which lists what reviewers do not have or do. At (1), no reviewers have yet been mentioned. At (3), the preceding sentence is positive (what review CAN do), so 'Nor' jars. At (4), 'they' would refer to the other laboratories, which makes no sense."
     }
    ]
   },
   {
    "title": "Varnish, Time and Truth",
    "mins": 15,
    "qs": [
     {
      "id": "l15_VARC_1",
      "type": "mcq",
      "text": "The primary purpose of the passage is to:",
      "opts": [
       "show that both sides misconceive a painting as static, and to recast restoration as a choice of where to arrest its change over time.",
       "defend conservators against critics who claim cleaning strips old paintings of subtlety, by showing the darkening was merely accreted damage.",
       "show that painters of earlier centuries pitched their colours higher than intended, so that cleaned paintings look harsher than they should.",
       "argue that, since the restoration question has no single answer, museums should leave old paintings and their varnish untouched."
      ],
      "ans": 0,
      "exp": "The author faults both parties ('both... misconceive it'), diagnoses the shared error (the painting treated as 'a static thing'), and proposes the trajectory question. The option about both sides misconceiving the painting as static covers all three. The option defending conservators is the trap: their rebuttal of the critics is reported, but the author then finds the conservators equally wrong. The option about painters pitching colours higher is supporting evidence only. The option about leaving paintings untouched contradicts the passage, which accepts that an institution must decide and asks only that it decide knowingly.",
      "set": "c_vr15"
     },
     {
      "id": "l15_VARC_2",
      "type": "mcq",
      "text": "Which of the following practices would the author most likely regard as consistent with the approach recommended in the final paragraph?",
      "opts": [
       "A museum fully cleans a painting after technical analysis of its pigments and announces that visitors can now see it exactly as the artist intended.",
       "A museum consults critics and regular visitors and, finding that they cherish the painting's mellow tones, decides to leave its darkened varnish in place.",
       "A museum studies the artist's methods, removes part of the varnish to reach a state the painter likely anticipated, and presents this as one defensible choice.",
       "A museum adopts a carefully reasoned rule that every painting over two centuries old is cleaned to the same degree, regardless of who painted it."
      ],
      "ans": 2,
      "exp": "The author wants restorers to ask 'what trajectory was it meant to follow' and to decide 'in the knowledge that it is a choice among defensible states'. The option where the museum removes part of the varnish to an anticipated state and presents it as one defensible choice does both. The full-cleaning option repeats the conservators' error ('simply uncovering the truth'); the option deferring to visitors' fondness for mellow tones repeats the critics' error (familiarity as the criterion). The uniform two-century rule is the subtle trap: it is deliberate, but it ignores what each maker 'to varying degrees, anticipated'.",
      "set": "c_vr15"
     },
     {
      "id": "l15_VARC_3",
      "type": "mcq",
      "text": "The statement that 'a habit of perception is not an intention' serves primarily to:",
      "opts": [
       "concede that the critics' long attachment to darkened paintings has some genuine aesthetic justification after all.",
       "deny that long familiarity with a painting's aged appearance can establish what the work is meant to be.",
       "suggest that the conservators' appeal to the artist's original intention is as misguided as the critics' habit.",
       "imply that viewers' perceptions and habits of looking are irrelevant to how a painting should be judged or restored."
      ],
      "ans": 1,
      "exp": "The sentence answers the critics, who treat the darkened surface as 'the true painting because it is the one they... have known'. It cuts the inference from 'we are used to it' to 'that is the work'. The option about the conservators being equally misguided is the trap: the author does fault them, but in the previous paragraph and for a different reason (freezing intention at day one); this sentence addresses only the critics. The option about conceding aesthetic justification reverses its function. The option calling perceptions irrelevant overgeneralises, since the author says familiarity tells us 'something about our history'.",
      "set": "c_vr15"
     },
     {
      "id": "l15_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. The analogy was seductive but strange, for a star has a true position, whereas there is no one soldier of whom all the others are flawed copies.\n2. Astronomers had long known that repeated sightings of a star scatter around a mean, and had learned to take the mean of many readings as the best estimate of where the star truly is.\n3. Yet the fiction proved durable, and the habit of treating deviation from the average as a kind of error still shapes what we call 'normal'.\n4. Measuring the chests of thousands of Scottish soldiers, he treated their variation as though it were error around a single ideal body, which he called 'the average man'.\n5. In the 1830s, the Belgian astronomer Adolphe Quetelet turned this technique on human beings.",
      "ans": "25413",
      "exp": "2 opens: it is the only sentence that needs nothing before it. 5 follows: 'THIS TECHNIQUE' = taking the mean of readings in 2. 4 follows: 'HE' = Quetelet, introduced only in 5. 1 follows: 'The ANALOGY' = treating soldiers like star readings in 4. 3 closes: 'Yet the FICTION proved durable' presupposes the critique in 1 that no true 'average soldier' exists. Each step is pinned by a reference word, so no other order works."
     },
     {
      "id": "l15_VARC_5",
      "type": "tita",
      "text": "Five sentences are given below. Four of them form a coherent paragraph. Type the number of the sentence that does NOT belong.\n\n1. Irony depends on a gap between what is said and what is meant, and on the listener's ability to notice that gap.\n2. For this reason it is a peculiarly social figure: it presupposes a shared background against which the literal statement can be seen to be absurd.\n3. Sarcasm, its cruder relative, adds to this gap an evident intention to wound.\n4. Among strangers, irony is therefore risky, since the speaker cannot be sure the background is shared.\n5. Written irony is riskier still, because it strips away the tone and expression that might have signalled the gap.",
      "ans": "3",
      "exp": "1, 2, 4 and 5 form one chain about irony's reliance on a shared background: the gap (1), so irony is social (2), so it is risky among strangers (4), and riskier still in writing (5, where 'riskier still' answers 'risky' in 4). Sentence 3 shares the word 'gap' but turns to defining sarcasm and its intent to wound, which has nothing to do with shared background or risk."
     }
    ]
   },
   {
    "title": "Minds, Notebooks & Marginalia",
    "mins": 16,
    "qs": [
     {
      "id": "l16_VARC_1",
      "type": "mcq",
      "text": "The author's principal criticism of those who attack the parity argument 'at its edges' is that they:",
      "opts": [
       "underestimate how often biological memory confabulates, and so overrate its reliability compared with notebooks and search engines.",
       "grant the functionalist premise and so reduce the dispute to a comparison of failure rates that they cannot clearly win.",
       "have not yet catalogued enough cases of lost notebooks and lying search engines to establish that the parity thesis is false.",
       "wrongly assume that a state's ownership is anchored in biology, and so conclude too quickly that the mind stops at the skin."
      ],
      "ans": 1,
      "exp": "The criticism is that the edge-attack 'concedes the decisive premise' (role, not holding, makes a state mental), turning the debate 'actuarial', which biological memory cannot obviously win. The option about underestimating biological memory's confabulation is only the supporting reason the actuarial contest is unwinnable, not the criticism itself. The option about not having catalogued enough cases inverts the point: more cases would not help, because the strategy is flawed in kind, not quantity. The option about ownership anchored in biology is a view the author rejects in paragraph 3 against a different inference, not one attributed to the edge-critics.",
      "set": "c_vr16"
     },
     {
      "id": "l16_VARC_2",
      "type": "mcq",
      "text": "The author would most likely DISAGREE with which of the following?",
      "opts": [
       "A state can guide what a person does without being owned by that person, in the sense of being one she answers for.",
       "Some external artefacts, such as long-annotated texts, can come to belong to a person's mind in the normative sense.",
       "Other things being equal, the more fully a resource satisfies the parity conditions, the more likely the agent is to own it.",
       "The functionalist neglect of ownership is a deliberate feature of its method, the price of its generality, rather than an oversight."
      ],
      "ans": 2,
      "exp": "The option linking fuller satisfaction of parity conditions to greater likelihood of ownership reverses the final paragraph: the resources that 'most perfectly satisfy the parity conditions' are 'least likely to be owned', because frictionlessness forecloses corrective engagement. The option about states guiding behaviour without being owned is the author's own conclusion ('states that guide what we do while answering to no one'). The option about annotated texts belonging to the mind is the scholar's-marginalia point. The option about functionalism's deliberate neglect restates 'not because it is careless but because it is designed to be'.",
      "set": "c_vr16"
     },
     {
      "id": "l16_VARC_3",
      "type": "mcq",
      "text": "The sentence about the scholar who has annotated her copy of a text for thirty years serves primarily to:",
      "opts": [
       "show that external records, being written down and deliberated, can be more reliable than recollections that merely accrue.",
       "concede that the parity principle correctly classifies some external states, such as a scholar's marginalia, as genuinely mental.",
       "suggest that states an agent has deliberated over are invariably owned more fully than those she has merely accumulated.",
       "illustrate that ownership rests on a history of engaged uptake rather than on location, so the mind need not end at the skin."
      ],
      "ans": 3,
      "exp": "The sentence directly follows 'It would be a mistake... to conclude that the mind therefore stops at the skin' and 'anchored to a history of uptake'; the marginalia are owned because deliberated and stood by, which the option about engaged uptake rather than location captures. The option about external records being more reliable shifts the criterion back to reliability, which the author has set aside. The option about parity correctly classifying marginalia is tempting but wrong: parity classifies by function, while the author's point is normative; the marginalia count because of answerability. The option saying deliberated states are invariably owned more fully overgeneralises 'more so, perhaps'.",
      "set": "c_vr16"
     },
     {
      "id": "l16_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. Yet the claim that a word is untranslatable is usually advanced in a translation: an essay, written in the reader's language, that explains at length what the word means.\n2. Every few years a list circulates of words said to have no equivalent in English: a Portuguese term for longing, a Japanese term for light falling through leaves.\n3. The performance thus refutes the thesis it is meant to illustrate, for what the essay demonstrates is not that the word cannot be translated but that it cannot be translated by one word.\n4. And that is a far weaker claim, since almost no word in any language is ever rendered by a single equivalent once its connotations are taken seriously.\n5. Such lists are offered as evidence that languages carve the world into incommensurable pieces.",
      "ans": "25134",
      "exp": "2 introduces the lists and must open (no sentence it depends on). 5 'Such lists' needs 2 immediately before it. 1 'Yet the claim...' contrasts with the thesis stated in 5. 3 'The performance thus' refers to the explanatory essay in 1. 4 'that is a far weaker claim' can only refer to 3's 'cannot be translated by one word'. 1 cannot open (Yet), and 3/4 are locked by their back-references, so 25134 is the only order."
     },
     {
      "id": "l16_VARC_5",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph.\n\nWe tend to think that a forgery, once exposed, loses value because we have learned something about the object: that it is not what it claimed to be. But nothing about the canvas has changed; its pigments, composition and effects on the eye are exactly as they were the day before the exposure. What has changed is our relation to a history of making. To admire a painting is partly to admire an achievement, and an achievement is indexed to a person, a time and a set of problems solved. The forger's skill is real, but it solves a different problem, that of resembling, rather than the problem the original painter solved, that of inventing. The drop in value is therefore not a snobbish reaction to a label but a correct revision of what, exactly, we were admiring.",
      "opts": [
       "Exposure rightly devalues a forgery, since admiring a painting includes admiring its achievement, and resembling is a different achievement from inventing.",
       "Since the canvas is physically unchanged by exposure, a forgery's devaluation reflects new beliefs about its provenance, not any loss of aesthetic merit.",
       "The forger's skill is genuine, so exposure ought to transfer our admiration from the original painter to the forger rather than simply reduce it.",
       "A forgery loses value on exposure because viewers care more about the label attached to a work than about what the canvas visibly offers them."
      ],
      "ans": 0,
      "exp": "The option about exposure rightly devaluing a forgery because resembling differs from inventing captures both the justification and its ground. The option separating provenance from aesthetic merit is the closest trap: the paragraph folds achievement into what we admire, so the revision is aesthetic, not merely about provenance. The option about transferring admiration to the forger is never suggested: the forger's skill solves a different problem and does not inherit the admiration. The option about viewers caring about labels is the 'snobbish reaction to a label' view the paragraph explicitly rejects."
     }
    ]
   },
   {
    "title": "Scarcity Is a Relation",
    "mins": 16,
    "qs": [
     {
      "id": "l17_VARC_1",
      "type": "mcq",
      "text": "Which of the following, if true, would most seriously weaken the author's account of what enclosure did?",
      "opts": [
       "Enclosure was often accompanied by drainage and quarrying that permanently ruined much cultivable soil, leaving far less land able to yield crops.",
       "Many commoners excluded by enclosure later worked as wage labourers on the very fields they had once farmed by customary right.",
       "Some commons had been so heavily over-grazed in the decades before enclosure that their yield had already fallen well below its former level.",
       "The rules defining who could legitimately claim the yield of a common, and on what terms, varied widely from one region and century to the next."
      ],
      "ans": 0,
      "exp": "The author claims enclosure 'did not make land scarcer in any physical sense' and 'the quantity of the good was unchanged'. The option about drainage and quarrying ruining soil directly contradicts this by showing a physical reduction caused by enclosure. The option about commoners becoming wage labourers fits the account (claimants excluded, the rest drawn into the market). The option about prior over-grazing concerns the commons' condition before enclosure, not whether enclosure itself changed physical quantity. The option about regional variation in claim rules supports the view that legitimate demand is fixed by rules 'neither natural nor arbitrary'.",
      "set": "c_vr17"
     },
     {
      "id": "l17_VARC_2",
      "type": "mcq",
      "text": "All of the following can be inferred from the passage EXCEPT:",
      "opts": [
       "The author regards the critics' examples of manufactured scarcity as accurate but the conclusion they draw from them as mistaken.",
       "In the author's view, both the textbook definition and its critics leave unaddressed how finite goods ought to be shared.",
       "The author believes an economy can be efficient by its own measure while its most urgent needs register nowhere in its accounts.",
       "The author implies that the textbook definition should be replaced by one that explicitly names markets, money and property."
      ],
      "ans": 3,
      "exp": "The option about replacing the definition with one naming markets, money and property cannot be inferred: the author says 'None of this requires abandoning the analysis of scarcity' and the definition 'is not false', only incomplete; the remedy is to recognise its political presupposition. The option about the critics' examples: 'Each example is accurate, but the conclusion... mistakes the shape'. The option about both sides leaving sharing unaddressed: the critic has 'nothing to say about how finite goods ought to be shared', and the textbook is 'silent on the prior allocation'. The option about efficiency missing urgent needs is stated in paragraph 4.",
      "set": "c_vr17"
     },
     {
      "id": "l17_VARC_3",
      "type": "mcq",
      "text": "In saying that the definition's neutrality 'looks less like impartiality than like a decision not to look', the author implies that:",
      "opts": [
       "economists consciously conceal the political origins of scarcity in order to protect the interests of those who already hold entitlements.",
       "the definition's apparent neutrality is achieved by excluding from analysis the very distribution of claims that shapes outcomes.",
       "a genuinely impartial economics would treat every human want, whether or not backed by purchasing power, as effective demand.",
       "the definition is incoherent, since a framework that applies equally to households and planned economies cannot say anything specific."
      ],
      "ans": 1,
      "exp": "The next sentence explains the 'decision': taking 'the pattern of claims as given' and staying silent on the prior allocation, which is the option about neutrality achieved by excluding the distribution of claims. The option about conscious concealment reads 'decision' as a motive; the author describes a methodological exclusion and its effect, attributing no intent. The option about treating every want as effective demand is never proposed: the author asks only that the question of entitlement be faced. The option calling the definition incoherent twists the generality praised in paragraph 1 into a flaw the author never claims.",
      "set": "c_vr17"
     },
     {
      "id": "l17_VARC_4",
      "type": "tita",
      "text": "Four of the five sentences below form a coherent paragraph. Identify the odd sentence out and type its number.\n\n1. An archive is often imagined as a neutral repository, a place where the past simply deposits itself to await the historian.\n2. But every archive is the residue of countless decisions about what was worth keeping, made by clerks and institutions with purposes of their own.\n3. The sheer volume of records produced by modern bureaucracies has made the task of cataloguing them more difficult than ever.\n4. The historian who reads an archive therefore reads not the past but the past as it was filtered by those with the power to preserve it.\n5. Reading against the grain, attending to silences and to people who appear only as numbers, is the discipline's attempt to recover what that filtering excluded.",
      "ans": "3",
      "exp": "1-2-4-5 form an epistemic argument: the archive looks neutral (1) but is the product of selection (2), so the historian reads a filtered past (4, 'therefore' follows 2), and reading against the grain tries to recover what was filtered out (5). Sentence 3 is about archives too, but it raises a practical problem (how hard it is to catalogue large volumes), not the question of what was kept and why. It does not lead to 4's 'therefore'."
     },
     {
      "id": "l17_VARC_5",
      "type": "mcq",
      "text": "The sentence below can be placed at one of the four numbered positions in the paragraph. Choose the most appropriate position.\n\nSentence: Such sceptics were not obscurantists; a lens that could magnify could also distort, and nothing in the image itself announced which it was doing.\n\nParagraph: Accounts of scientific revolutions usually dwell on the moment of conceptual rupture: the new theory, the anomaly it explains, the resistance of the old guard. (1) Less attention goes to the instruments, whose adoption often preceded the theory that would later be said to justify them. (2) The telescope was turned on the heavens before anyone possessed an optics adequate to explain why it should be trusted, and its early users had to argue, against reasonable sceptics, that what it showed was not an artefact of the lens. (3) The argument was won less by demonstration than by convergence: independent observers, using different instruments, began to report the same moons. (4) Trust in the instrument, in other words, was a social achievement before it was a theoretical one.",
      "opts": [
       "Position (1)",
       "Position (2)",
       "Position (3)",
       "Position (4)"
      ],
      "ans": 2,
      "exp": "'Such sceptics' needs the 'reasonable sceptics' of the telescope sentence, so the sentence must come after it: only (3) or (4). At (3) it justifies 'reasonable' and explains why 'demonstration' could not settle the matter, which leads into 'won less by demonstration than by convergence'. At (4) it would split the convergence sentence from 'in other words', which restates it, and 'Such sceptics' would point back past a sentence about something else. (1) and (2) come before any sceptics are mentioned."
     }
    ]
   },
   {
    "title": "Suspicion's Economy of Credit",
    "mins": 16,
    "qs": [
     {
      "id": "l18_VARC_1",
      "type": "mcq",
      "text": "The author would most likely DISAGREE with which of the following?",
      "opts": [
       "The dominance of suspicious reading owed more to institutional incentives than to the persuasiveness of Marx or Freud.",
       "Exhortations to read more suspiciously succeeded, in an important sense, where calls to read generously are likely to fail.",
       "Post-critical reading, by denying the priority of hidden meaning, escapes the framework within which suspicion operated.",
       "A change in what a discipline rewards, such as valuing confirmation over novelty, could alter the readings its members produce."
      ],
      "ans": 2,
      "exp": "The option saying post-critical reading escapes suspicion's framework contradicts paragraph 2: the remedy 'inherits the very assumption it means to escape'. Both sides treat reading as 'a contest over depth' and assume a stance can be chosen; denying depth's priority is still a position inside that contest. The option about institutional incentives restates 'not because critics were persuaded by Marx or Freud'. The option about suspicious exhortations succeeding where generous ones will fail matches 'will fail for the same reason that exhortations to read more suspiciously succeeded'. The option about changing rewards is the claim of the final paragraph.",
      "set": "c_vr18"
     },
     {
      "id": "l18_VARC_2",
      "type": "mcq",
      "text": "The sentence 'The seminar rewards the reading that no one else has produced, and novelty is most cheaply produced by discovering that a text is not what it seems' serves mainly to:",
      "opts": [
       "explain the mechanism by which an institutional setting could select for the suspicious stance.",
       "argue that suspicious readings, being driven by novelty, are generally less accurate than surface readings.",
       "concede that suspicion, whatever its institutional uses, was also intellectually compelling in its own right.",
       "suggest that novelty is an illegitimate aim for literary scholarship and ought to be rewarded less."
      ],
      "ans": 0,
      "exp": "The sentence comes right after the claim that the 'institutional setting' places readers in stances, and before 'Suspicion flourished... because it was the most reliable way to generate publishable difference'; it supplies the link between reward and stance, as the mechanism option says. The option about accuracy fails because the author never compares accuracy. The option conceding intellectual appeal runs the other way: the point is that suspicion succeeded for non-intellectual reasons. The option calling novelty illegitimate goes too far: the author imagines rewarding confirmation 'rather than' novelty as one possible alternative, but never condemns novelty.",
      "set": "c_vr18"
     },
     {
      "id": "l18_VARC_3",
      "type": "mcq",
      "text": "Which of the following, if true, would most STRENGTHEN the argument of the third paragraph?",
      "opts": [
       "Most literary scholars, when surveyed, say they adopted suspicious reading because they found the arguments of Marx and Freud persuasive.",
       "Critics who practise surface reading publish about as often, and in journals as prestigious, as those who practise suspicious reading.",
       "Several prominent post-critical scholars were once committed suspicious readers who changed their approach after reading its critics.",
       "When journals began rewarding confirmations of earlier findings, contrarian readings fell sharply, though few scholars reported changed convictions."
      ],
      "ans": 3,
      "exp": "The paragraph claims that stances follow institutional selection, not individual conviction. The option about journals rewarding confirmation shows exactly that: readings changed when incentives changed while convictions did not. The survey option about Marx and Freud weakens the argument (theory-driven adoption), though self-report is weak evidence. The option about surface readers publishing as often, if anything, undercuts the claim that suspicion is the 'most reliable' route to publication. The option about scholars converting after reading critics is about individual persuasion and, if anything, cuts against the paragraph.",
      "set": "c_vr18"
     },
     {
      "id": "l18_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. The spectacle is less hypocritical than it looks: what the modern author fears is not borrowing but being seen to borrow.\n2. Writers have always taken from one another, and for most of literary history the practice required no defence, since imitating exemplary models was the core of a writer's training.\n3. What changed was not the practice but its valuation, once originality came to be understood as the expression of an irreducibly individual self.\n4. Under that understanding, a visible debt counts as evidence that the self being expressed is not one's own, which is why writers learned to conceal their sources with an ingenuity they once spent on displaying them.\n5. Hence the curious modern spectacle of authors who borrow as freely as their predecessors while insisting, more strenuously than any predecessor would have, that they owe nothing.",
      "ans": "23451",
      "exp": "2 must open: 3's 'not the practice' refers back to the practice of taking from one another in 2. 4's 'Under that understanding' refers to 3's understanding of originality, so 3-4. 5's 'Hence' draws a consequence from the concealment in 4, and 'the spectacle' first appears in 5. 1's 'The spectacle' needs 5 before it, so 1 closes. Every link is tied by a back-reference: 23451."
     },
     {
      "id": "l18_VARC_5",
      "type": "tita",
      "text": "Four of the five sentences below form a coherent paragraph. Identify the odd sentence out and type its number.\n\n1. Social measurements differ from physical ones in that the people being measured can learn what is measured and respond to it.\n2. A school ranked by its examination results will, in time, teach toward the examination, so that the ranking increasingly measures its own influence.\n3. An indicator that becomes a target ceases to report on the condition it was designed to track and begins to report on the efforts made to move it.\n4. Physical instruments, too, disturb what they measure, as when a thermometer warms or cools the liquid into which it is dipped.\n5. The more weight an institution places on a number, therefore, the less that number can be trusted to tell it what it wants to know.",
      "ans": "4",
      "exp": "The paragraph's mechanism is reflexive: the people measured learn what is measured and adapt to it (1). The school example illustrates this (2), the indicator-as-target point generalises it (3), and 5 concludes. Sentence 4 is also about measurement disturbing what it measures, so it looks like it belongs. But a thermometer's effect is passive, with no learning or response, and its 'too' blurs the very contrast sentence 1 draws. It also gives no support to 5's 'therefore', which depends on agents responding to the weight placed on a number."
     }
    ]
   },
   {
    "title": "Beauty After the Fact",
    "mins": 16,
    "qs": [
     {
      "id": "l19_VARC_1",
      "type": "mcq",
      "text": "The author's central objection to both the realist and the deflationary answers is that they:",
      "opts": [
       "overstate the role that aesthetic judgement actually plays when working physicists choose among competing theories.",
       "cannot explain why simpler, more elegant theories are also easier to calculate with, to test and to teach.",
       "mistake a community's familiarity with a theory's forms for evidence that the theory is actually true.",
       "treat the perception of a theory's elegance as independent of the theory's subsequent history in the field."
      ],
      "ans": 3,
      "exp": "'Both answers assume that the aesthetic judgement is prior to, and separable from, the history of the theory judged', and everything that follows attacks that shared assumption, as the option about elegance being independent of later history says. The option about mistaking familiarity for evidence of truth is the closest trap, but it fits only the realist: the deflationist never treats beauty as evidence of truth, so it cannot be the objection to both. The option about overstating aesthetic judgement clashes with 'This does not show that aesthetic criteria are idle'. The option about explaining ease of testing fails because the deflationist simply asserts these virtues and the author does not dispute them.",
      "set": "c_vr19"
     },
     {
      "id": "l19_VARC_2",
      "type": "mcq",
      "text": "All of the following can be inferred from the passage EXCEPT:",
      "opts": [
       "The deflationary account is correct in principle, even though the realist account is a useful guide during periods of consolidation.",
       "A theory regarded as ungainly when first proposed may later be considered beautiful without any change to its content or equations.",
       "Aesthetic preferences in a scientific community encode an expectation that the structures which worked before will keep working.",
       "During a crisis, a theory that will prove successful may be disfavoured because it lacks the forms the community has learned to find beautiful."
      ],
      "ans": 0,
      "exp": "The option calling the deflationary account correct in principle cannot be inferred. The author refuses 'a single verdict on the epistemic worth of elegance'; the deflationist is 'the better guide' only in crisis, and the realist is warranted 'in practice if not in principle', which does not make the deflationist right in principle. The option about ungainly theories later seen as beautiful follows from the equations admired only after a generation of familiarisation. The option about expecting past structures to keep working restates 'a bet that the future of inquiry will look like its past'. The option about crisis-era theories being disfavoured restates the 'characteristic failure mode'.",
      "set": "c_vr19"
     },
     {
      "id": "l19_VARC_3",
      "type": "mcq",
      "text": "The sentence 'What looks like a judgement of beauty made in advance of success is often a judgement of familiarity made in its wake' functions primarily to:",
      "opts": [
       "deny that physicists ever make genuine aesthetic judgements, since what they call beauty is always familiarity in disguise.",
       "recast seemingly forward-looking aesthetic judgements as retrospective, undercutting the assumption that beauty is perceived apart from history.",
       "support the deflationary view that a theory's beauty is merely an honorific name for its practical convenience in calculation.",
       "show that aesthetic criteria play no real role in theory choice, since judgements of beauty arrive only after a theory succeeds."
      ],
      "ans": 1,
      "exp": "The sentence sums up the 'different sequence' the record reveals, which counters the shared assumption stated at the start of paragraph 2; the option about recasting forward-looking judgements as retrospective captures this. The option denying genuine aesthetic judgements goes too far ('often', not 'always'), and paragraph 3 treats aesthetic preference as real. The option supporting the deflationary view confuses familiarity with convenience: the point is about when elegance is perceived, and both answers are criticised. The option saying aesthetic criteria play no role is ruled out by 'This does not show that aesthetic criteria are idle'.",
      "set": "c_vr19"
     },
     {
      "id": "l19_VARC_4",
      "type": "mcq",
      "text": "Choose the option that best captures the essence of the paragraph.\n\nTolerance is often praised as the virtue of a pluralist society, but the praise conceals a peculiarity. One can only tolerate what one disapproves of; to 'tolerate' a practice one regards as harmless or admirable is a confusion, or an insult. Tolerance thus presupposes, and preserves, the very disapproval it restrains. A society that becomes perfectly tolerant of a minority has not thereby come to accept it; it has merely agreed to refrain from acting on its objection. This is why minorities who have long been tolerated so often come to demand something tolerance cannot give: not forbearance, but recognition that there is nothing to forbear.",
      "opts": [
       "Because tolerance presupposes disapproval, a society that tolerates its minorities necessarily treats them unjustly.",
       "Tolerance is at bottom a confused virtue, since one cannot coherently tolerate a practice one regards as harmless or admirable.",
       "Tolerance restrains disapproval without dissolving it, which is why tolerated groups may seek recognition rather than mere forbearance.",
       "A pluralist society should replace tolerance with recognition, since tolerance insults the very minorities to whom it is extended."
      ],
      "ans": 2,
      "exp": "The option about tolerance restraining disapproval without dissolving it captures both moves: tolerance keeps the disapproval it holds back (the 'peculiarity'), and this explains the demand for recognition. The option about necessary injustice adds a verdict the paragraph never gives. The option calling tolerance a confused virtue turns a detail (misapplying the word to harmless practices) into a verdict on tolerance as a whole. The option prescribing replacement by recognition is prescriptive and too broad: the 'insult' arises only when one 'tolerates' what one finds harmless, and the paragraph explains a demand rather than recommending a policy."
     },
     {
      "id": "l19_VARC_5",
      "type": "mcq",
      "text": "The sentence below can be placed at one of the four numbered positions in the paragraph. Choose the most appropriate position.\n\nSentence: A melody that falls by a semitone at the close of a phrase may sigh in a minor key and merely settle in a major one.\n\nParagraph: Music is often called the most abstract of the arts, since it represents nothing and refers to nothing outside itself. (1) Yet listeners routinely describe a passage as yearning, resigned or triumphant, and these descriptions are not idiosyncratic: they converge across listeners who have never compared notes. (2) One explanation is that music resembles the contours of human expression, the rising pitch of agitation, the slowed tempo of grief. (3) But resemblance cannot be the whole story, since the same contour can sound consoling in one context and desolate in another. (4) What the listener hears, it seems, is not a resemblance but a gesture, and gestures take their meaning from what surrounds them.",
      "opts": [
       "Position (1)",
       "Position (2)",
       "Position (3)",
       "Position (4)"
      ],
      "ans": 3,
      "exp": "The sentence illustrates one contour (a falling semitone) meaning different things in different settings (minor or major key). That is exactly the claim 'the same contour can sound consoling in one context and desolate in another', so it belongs at (4), after that claim and before the conclusion about gestures. At (3) it would offer the counter-example before the 'But' that introduces the objection, so the objection would have nothing to lead into. At (1) and (2) the contour/context question has not yet been raised."
     }
    ]
   },
   {
    "title": "The Witness and the Promise",
    "mins": 16,
    "qs": [
     {
      "id": "l20_VARC_1",
      "type": "mcq",
      "text": "Which of the following best captures the author's criticism of the commitment account?",
      "opts": [
       "It fails to accommodate the experimental finding that people misreport the causes of their choices, which it can neither absorb nor explain away.",
       "It wrongly models belief on promising, since a belief, unlike a promise, must answer to evidence and cannot be made sincere merely by declaring it.",
       "It secures first-person authority only by shrinking the mental domain to what the subject has committed to, which makes that authority trivial.",
       "It cannot explain how someone could sincerely avow an attitude that her conduct contradicts, and so has to deny that such cases ever really occur."
      ],
      "ans": 2,
      "exp": "The correct option paraphrases 'the authority is guaranteed only because it has been made trivial: she knows her mind because her mind has been redefined as what she has committed to'. The option about failing to accommodate the experimental findings is wrong: the account does accommodate them by declaring them 'beside the point'; the author's complaint is the cost of doing so. The option about belief answering to evidence unlike promises is a reasonable philosophical objection, but not the author's: the promise analogy is presented without challenge. The option saying the account cannot explain sincere avowals contradicted by conduct is refuted by 'The commitment account does not deny this'; it explains the case by moving the attitude outside the subject's authority.",
      "set": "c_vr20"
     },
     {
      "id": "l20_VARC_2",
      "type": "mcq",
      "text": "The author would most likely DISAGREE with which of the following?",
      "opts": [
       "Showing that first-person authority survives the experimental findings would, by itself, be enough to answer the sceptic about self-knowledge.",
       "The experimental findings count against the model of introspection as a kind of inner perception that gives its owner privileged access.",
       "A person may be fully entitled to an avowal even when it misdescribes the attitudes that are actually guiding her conduct.",
       "The weaknesses of the commitment account do nothing to restore the credibility of introspection understood as inner perception."
      ],
      "ans": 0,
      "exp": "The conclusion rejects the claim that surviving authority alone answers the sceptic: authority to commit 'offers no assurance' of the capacity to discover, and a theory that secures the first while abandoning the second 'has not answered the sceptic; it has changed the subject'. The option about experimental findings counting against inner perception restates paragraph 1. The option about being entitled to an avowal that misdescribes one's operative attitudes is the prejudice case ('fully entitled to the avowal' while her conduct is 'steered by the very attitude she disowns'). The option about the commitment account's weaknesses not restoring introspection restates 'None of this rehabilitates the inner witness'.",
      "set": "c_vr20"
     },
     {
      "id": "l20_VARC_3",
      "type": "mcq",
      "text": "Which of the following, if true, would most WEAKEN the argument of the third paragraph?",
      "opts": [
       "People who sincerely avow that they hold no prejudice frequently display it on implicit-association measures and in their hiring choices.",
       "Many people decline to avow attitudes they feel unsure about, preferring to withhold judgment until they have observed their own behaviour.",
       "Some defenders of the commitment account explicitly acknowledge that sincere avowals can diverge from the attitudes that actually guide conduct.",
       "Sincere avowals reliably reshape the avower's later conduct, so that her behaviour soon comes to conform to the attitude she avowed."
      ],
      "ans": 3,
      "exp": "The paragraph depends on avowal and the attitudes that actually operate being able to 'come apart', which is what makes commitment-based authority trivial. If avowals reliably bring conduct into line, commitment helps determine what moves the agent, and the gap (and the charge of triviality) shrinks. The option about implicit-association measures supports the divergence. The option about people declining to avow uncertain attitudes is irrelevant to avowals that are made. The option about defenders acknowledging divergence targets only the side remark that they 'seldom acknowledge' the price; the author already grants the account 'does not deny' divergence, and the price is triviality, which acknowledgement does not remove.",
      "set": "c_vr20"
     },
     {
      "id": "l20_VARC_4",
      "type": "tita",
      "text": "Arrange the sentences into a logical paragraph. Type the order (e.g. 12345).\n\n1. That description takes the form of a label: the object that once had a use now has only a caption telling us what the use was.\n2. To place a ritual mask in a vitrine is to promise that it will be seen as it really is, free of the clutter that surrounded it.\n3. But the clutter was not incidental; it was the dance, the firelight, the audience that knew what the mask was for.\n4. Such is the museum's characteristic exchange: it takes away what an object did and hands back a caption saying what it did.\n5. What the vitrine removes, then, is not an obstruction to the object but a part of it, and what it offers in return is description.",
      "ans": "23514",
      "exp": "2 opens by introducing the vitrine and the 'clutter'. 3's 'But the clutter' needs 2. 5's 'then' draws a conclusion from 3 (the clutter was part of the object), and 5 introduces 'description'. 1's 'That description' can only follow 5. 4's 'hands back a caption' needs the caption introduced in 1, and 'exchange' sums up the removal and return described in 5 and 1. 5 cannot follow 2 directly, because without 3 there is nothing to support 'not an obstruction but a part of it'. Order: 23514."
     },
     {
      "id": "l20_VARC_5",
      "type": "tita",
      "text": "Four of the five sentences below form a coherent paragraph. Identify the odd sentence out and type its number.\n\n1. No rule can specify the conditions of its own application, for any such specification would itself be a rule requiring application.\n2. Legal systems that rely heavily on precedent tend to produce more predictable outcomes than those that rely on detailed statutory codes.\n3. At some point, therefore, following a rule must rest on something that is not a further rule: a trained sense of how to go on.\n4. This is why codes of conduct, however detailed, never eliminate the need for judgement but only relocate it to the interpretation of the code.\n5. The demand for ever more explicit rules, made in the hope of removing discretion, is thus self-defeating: each new rule opens a new site at which discretion must be exercised.",
      "ans": "2",
      "exp": "1-3-4-5 is a single regress argument. Rules cannot fix their own application (1), so rule-following rests on trained judgement (3, 'therefore' follows 1). Detailed codes only relocate judgement (4). Demanding more explicit rules therefore defeats itself (5). Sentence 2 shares the vocabulary (precedent, codes), but it makes an empirical claim comparing the predictability of legal systems. That claim neither follows from the regress nor supports 'this is why' or 'thus'. It also blocks the 1→3 'therefore' link."
     }
    ]
   }
  ],
  "DILR": [
   {
    "title": "Table Tamer",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_D_1",
      "type": "tita",
      "text": "What is Bala's total score?",
      "ans": "220",
      "exp": "60 + 85 + 75 = 220.",
      "set": "c_d4"
     },
     {
      "id": "c20261018_D_2",
      "type": "mcq",
      "text": "Who has the highest total?",
      "opts": [
       "Asha",
       "Bala",
       "Chitra",
       "Dev"
      ],
      "ans": 0,
      "exp": "Totals: Asha 240, Bala 220, Chitra 230, Dev 210. Make a 'Total' column first — it answers several questions at once.",
      "set": "c_d4"
     },
     {
      "id": "c20261018_D_3",
      "type": "tita",
      "text": "What is the average Maths score of the four students?",
      "ans": "75",
      "exp": "(80 + 60 + 90 + 70) / 4 = 300 / 4 = 75.",
      "set": "c_d4"
     },
     {
      "id": "c20261018_D_4",
      "type": "tita",
      "text": "How many students scored more than 70 in at least two subjects?",
      "ans": "3",
      "exp": "Asha (80, 90), Bala (85, 75), Chitra (90, 80) → yes. Dev only 75 → no. Careful: 70 is NOT more than 70.",
      "set": "c_d4"
     },
     {
      "id": "c20261018_D_5",
      "type": "mcq",
      "text": "If Dev's English score increased by 20%, what would his new total be?",
      "opts": [
       "220",
       "223",
       "225",
       "230"
      ],
      "ans": 1,
      "exp": "65 × 1.2 = 78. New total = 70 + 75 + 78 = 223.",
      "set": "c_d4"
     }
    ]
   },
   {
    "title": "Round Table",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_D_6",
      "type": "mcq",
      "text": "Who sits in chair 3?",
      "opts": [
       "B",
       "C",
       "E",
       "F"
      ],
      "ans": 2,
      "exp": "A=1, D=4. C is next to D → 3 or 5. B is opposite C → 6 or 2. B < C rules out C=3/B=6, so C=5, B=2. Chairs 3 and 6 are left; E can't be next to A (chairs 2, 6) → E=3, F=6.",
      "set": "c_d5"
     },
     {
      "id": "c20261018_D_7",
      "type": "mcq",
      "text": "Who sits directly opposite F?",
      "opts": [
       "A",
       "B",
       "C",
       "E"
      ],
      "ans": 3,
      "exp": "F = 6, opposite is 6 − 3 = 3 → E.",
      "set": "c_d5"
     },
     {
      "id": "c20261018_D_8",
      "type": "tita",
      "text": "What is C's chair number?",
      "ans": "5",
      "exp": "Final: 1 A, 2 B, 3 E, 4 D, 5 C, 6 F.",
      "set": "c_d5"
     },
     {
      "id": "c20261018_D_9",
      "type": "mcq",
      "text": "Who are A's two neighbours?",
      "opts": [
       "B and F",
       "B and E",
       "E and F",
       "C and F"
      ],
      "ans": 0,
      "exp": "Chairs 2 and 6 → B and F.",
      "set": "c_d5"
     },
     {
      "id": "c20261018_D_10",
      "type": "tita",
      "text": "Going clockwise from B to D, how many people sit between them?",
      "ans": "1",
      "exp": "B=2 → chair 3 (E) → D=4. One person.",
      "set": "c_d5"
     }
    ]
   },
   {
    "title": "Venn Voyager",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_D_11",
      "type": "tita",
      "set": "c_d6",
      "text": "How many students use only Spotify?",
      "ans": "15",
      "exp": "Fill the centre first: all three = 10. I∩Y only = 25−10 = 15; I∩S only = 18−10 = 8. Total formula: 100 = 58+52+40 − (exactly two) − 2×10 → exactly two = 30, so Y∩S only = 30−15−8 = 7. Only S = 40 − 8 − 7 − 10 = 15."
     },
     {
      "id": "c20261018_D_12",
      "type": "tita",
      "set": "c_d6",
      "text": "How many students use exactly two of the three apps?",
      "ans": "30",
      "exp": "Shortcut: Total = I+Y+S − (exactly two) − 2×(all three). 100 = 150 − x − 20 → x = 30."
     },
     {
      "id": "c20261018_D_13",
      "type": "mcq",
      "set": "c_d6",
      "text": "How many students use both YouTube and Spotify (including those who use all three)?",
      "opts": [
       "15",
       "17",
       "20",
       "22"
      ],
      "ans": 1,
      "exp": "Y∩S only = 7, plus all three = 10 → 17."
     },
     {
      "id": "c20261018_D_14",
      "type": "tita",
      "set": "c_d6",
      "text": "How many students use exactly one app?",
      "ans": "60",
      "exp": "100 − exactly two (30) − all three (10) = 60. (Check: only I 25 + only Y 20 + only S 15 = 60.)"
     },
     {
      "id": "c20261018_D_15",
      "type": "mcq",
      "set": "c_d6",
      "text": "How many students use Instagram but not YouTube?",
      "opts": [
       "25",
       "33",
       "35",
       "40"
      ],
      "ans": 1,
      "exp": "I − (I∩Y) = 58 − 25 = 33. No need to split regions: 'A but not B' = A − (A and B)."
     }
    ]
   },
   {
    "title": "Who Lives Where?",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_DILR_1",
      "type": "mcq",
      "text": "Who is the Teacher?",
      "opts": [
       "Asha",
       "Bharat",
       "Dev",
       "Esha"
      ],
      "ans": 2,
      "exp": "Dev lives in Chennai (3). Engineer is in Mumbai (7); Asha, Bharat, Chitra are not in Mumbai, so Esha is the Engineer in Mumbai. Bharat is then in Kolkata (6), so Bharat is the Doctor (1). Asha is in Pune, Chitra in Delhi. Pilot is not in Chennai/Pune, so Chitra is the Pilot. Teacher is not in Pune (5), so Dev is the Teacher and Asha the Lawyer. Answer: Dev.",
      "set": "c_dl7"
     },
     {
      "id": "c20261018b_DILR_2",
      "type": "mcq",
      "text": "In which city does the Lawyer live?",
      "opts": [
       "Chennai",
       "Delhi",
       "Kolkata",
       "Pune"
      ],
      "ans": 3,
      "exp": "From the full solution, Asha is the Lawyer and lives in Pune.",
      "set": "c_dl7"
     },
     {
      "id": "c20261018b_DILR_3",
      "type": "mcq",
      "text": "What is Chitra's profession?",
      "opts": [
       "Doctor",
       "Lawyer",
       "Pilot",
       "Teacher"
      ],
      "ans": 2,
      "exp": "Chitra lives in Delhi. The Pilot cannot be in Chennai or Pune, and Kolkata/Mumbai belong to the Doctor/Engineer, so the Pilot is in Delhi: Chitra is the Pilot.",
      "set": "c_dl7"
     },
     {
      "id": "c20261018b_DILR_4",
      "type": "mcq",
      "text": "Which of the following statements is FALSE?",
      "opts": [
       "Esha is the Engineer",
       "Bharat lives in Kolkata",
       "The Teacher lives in Delhi",
       "Dev is not the Pilot"
      ],
      "ans": 2,
      "exp": "The Teacher is Dev, who lives in Chennai, not Delhi. The other three statements are true (Esha-Engineer, Bharat-Kolkata, Dev is the Teacher so not the Pilot).",
      "set": "c_dl7"
     },
     {
      "id": "c20261018b_DILR_5",
      "type": "tita",
      "text": "If clue 9 (Chitra does not live in Mumbai) were removed, how many complete assignments (profession and city for every friend) would satisfy the remaining clues?",
      "ans": "2",
      "exp": "Without clue 9, the Engineer in Mumbai could be Chitra as well as Esha. If Chitra is the Engineer in Mumbai, then Esha is in Delhi, Bharat is the Doctor in Kolkata, Asha is in Pune; the Pilot (not in Chennai/Pune) is Esha, the Teacher (not in Pune) is Dev, and Asha is the Lawyer - every remaining clue holds. Together with the original solution, there are 2 assignments.",
      "set": "c_dl7"
     }
    ]
   },
   {
    "title": "Five Outlets, Four Quarters",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_DILR_6",
      "type": "mcq",
      "text": "Which outlet recorded the highest percentage growth in total revenue from Q1 to Q4?",
      "opts": [
       "Alpha",
       "Beta",
       "Gamma",
       "Omega"
      ],
      "ans": 3,
      "exp": "Growth Q1->Q4: Alpha 50.0%, Beta 26.0%, Gamma 50.0%, Delta 20.0%, Omega 80.0%. Highest: Omega (25 to 45).",
      "set": "c_dl8"
     },
     {
      "id": "c20261018b_DILR_7",
      "type": "tita",
      "text": "What was the combined offline revenue (in Rs lakh) of all five outlets in Q2?",
      "ans": "142",
      "exp": "Offline Q2 = revenue x (1 - online share): Alpha 33, Beta 27, Gamma 22, Delta 48, Omega 12. Total = 142.",
      "set": "c_dl8"
     },
     {
      "id": "c20261018b_DILR_8",
      "type": "mcq",
      "text": "In Q3, what was the ratio of Gamma's online revenue to Beta's online revenue?",
      "opts": [
       "22:27",
       "11:15",
       "4:5",
       "27:22"
      ],
      "ans": 0,
      "exp": "Gamma online Q3 = 50% of 44 = 22; Beta online Q3 = 50% of 54 = 27. Ratio = 22:27.",
      "set": "c_dl8"
     },
     {
      "id": "c20261018b_DILR_9",
      "type": "mcq",
      "text": "For how many outlets did the online revenue increase in every quarter (Q1<Q2<Q3<Q4)?",
      "opts": [
       "1",
       "2",
       "3",
       "4"
      ],
      "ans": 1,
      "exp": "Online revenue by quarter: Alpha 10, 11, 15, 21; Beta 20, 18, 27, 25.2; Gamma 16, 18, 22, 24; Delta 12, 16, 18.9, 18; Omega 15, 18, 18, 18. Strictly increasing every quarter: Alpha, Gamma -> 2.",
      "set": "c_dl8"
     },
     {
      "id": "c20261018b_DILR_10",
      "type": "mcq",
      "text": "Approximately what percentage of the chain's total Q4 revenue came from online orders?",
      "opts": [
       "31.6%",
       "34.2%",
       "36.9%",
       "39.5%"
      ],
      "ans": 2,
      "exp": "Q4 online = 21 + 25.2 + 24 + 18 + 18 = 106.2; total Q4 revenue = 288. Share = 106.2/288 = 36.9%.",
      "set": "c_dl8"
     }
    ]
   },
   {
    "title": "The Workshop Week",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_DILR_11",
      "type": "mcq",
      "text": "Which workshop is held on Sunday?",
      "opts": [
       "B",
       "C",
       "D",
       "F"
      ],
      "ans": 2,
      "exp": "G cannot be on the weekend and F is not on Sunday. D on Monday would force G to Sunday, impossible, so D is not on Monday. Working through the A-E and B-C pairs with exactly two workshops between B and E, all valid schedules are: AEGCBFD, EACBGFD, EAGBCFD, GEACBFD (Mon to Sun). In every one, D is on Sunday.",
      "set": "c_dl9"
     },
     {
      "id": "c20261018b_DILR_12",
      "type": "tita",
      "text": "On how many different days of the week can G be held?",
      "ans": "3",
      "exp": "Across the 4 valid schedules, G falls on Monday, Wednesday, Friday -> 3 days.",
      "set": "c_dl9"
     },
     {
      "id": "c20261018b_DILR_13",
      "type": "mcq",
      "text": "If A is held on Monday, which workshop is held on Thursday?",
      "opts": [
       "B",
       "C",
       "G",
       "E"
      ],
      "ans": 1,
      "exp": "With A on Monday, the only valid schedule is AEGCBFD, so Thursday has C.",
      "set": "c_dl9"
     },
     {
      "id": "c20261018b_DILR_14",
      "type": "mcq",
      "text": "Which of the following can NEVER be true?",
      "opts": [
       "B is held on Thursday",
       "C is held on Wednesday",
       "E is held on Tuesday",
       "B is held on Tuesday"
      ],
      "ans": 3,
      "exp": "B only ever falls on Friday, Thursday in the valid schedules (AEGCBFD, EACBGFD, EAGBCFD, GEACBFD), so B on Tuesday is impossible; each of the other three occurs in at least one valid schedule.",
      "set": "c_dl9"
     },
     {
      "id": "c20261018b_DILR_15",
      "type": "tita",
      "text": "How many of the seven workshops are held on the same day in every valid schedule?",
      "ans": "2",
      "exp": "Only D (Sunday) and F (Saturday) are fixed across all 4 valid schedules -> 2.",
      "set": "c_dl9"
     }
    ]
   },
   {
    "title": "League of Five",
    "mins": 14,
    "qs": [
     {
      "id": "c20261018b_DILR_16",
      "type": "tita",
      "text": "How many matches in the league ended in a draw?",
      "ans": "3",
      "exp": "T drew R and lost to P, Q, S. P (10, unbeaten) = 3W+1D; Q (7) = 2W+1D+1L. R's single win cannot be over P (unbeaten) or T (drawn), so it is over Q or S. Trying each case together with each choice of P's draw, and requiring every team to draw and S > R, only one set of results survives. Unique table: P beat Q, R, T and drew S; Q beat R, T and drew S; R beat S and drew T; S beat T. Points: P 10, Q 7, S 5, R 4, T 1. Total points = 27, and each draw removes 1 point from the maximum 30, so draws = 30 - 27 = 3.",
      "set": "c_dl10"
     },
     {
      "id": "c20261018b_DILR_17",
      "type": "mcq",
      "text": "How many points did S finish with?",
      "opts": [
       "4",
       "5",
       "6",
       "7"
      ],
      "ans": 1,
      "exp": "T drew R and lost to P, Q, S. P (10, unbeaten) = 3W+1D; Q (7) = 2W+1D+1L. R's single win cannot be over P (unbeaten) or T (drawn), so it is over Q or S. Trying each case together with each choice of P's draw, and requiring every team to draw and S > R, only one set of results survives. Unique table: P beat Q, R, T and drew S; Q beat R, T and drew S; R beat S and drew T; S beat T. Points: P 10, Q 7, S 5, R 4, T 1. S = 3 (beat T) + 1 + 1 (draws with P and Q) = 5.",
      "set": "c_dl10"
     },
     {
      "id": "c20261018b_DILR_18",
      "type": "mcq",
      "text": "What was the result of the match between Q and S?",
      "opts": [
       "Q won",
       "S won",
       "The match was drawn",
       "Cannot be determined"
      ],
      "ans": 2,
      "exp": "T drew R and lost to P, Q, S. P (10, unbeaten) = 3W+1D; Q (7) = 2W+1D+1L. R's single win cannot be over P (unbeaten) or T (drawn), so it is over Q or S. Trying each case together with each choice of P's draw, and requiring every team to draw and S > R, only one set of results survives. Unique table: P beat Q, R, T and drew S; Q beat R, T and drew S; R beat S and drew T; S beat T. Points: P 10, Q 7, S 5, R 4, T 1. So Q vs S was drawn.",
      "set": "c_dl10"
     },
     {
      "id": "c20261018b_DILR_19",
      "type": "mcq",
      "text": "Against which team did P draw?",
      "opts": [
       "Q",
       "R",
       "S",
       "T"
      ],
      "ans": 2,
      "exp": "T drew R and lost to P, Q, S. P (10, unbeaten) = 3W+1D; Q (7) = 2W+1D+1L. R's single win cannot be over P (unbeaten) or T (drawn), so it is over Q or S. Trying each case together with each choice of P's draw, and requiring every team to draw and S > R, only one set of results survives. Unique table: P beat Q, R, T and drew S; Q beat R, T and drew S; R beat S and drew T; S beat T. Points: P 10, Q 7, S 5, R 4, T 1. So P's only draw was with S.",
      "set": "c_dl10"
     },
     {
      "id": "c20261018b_DILR_20",
      "type": "tita",
      "text": "What is the total number of matches won by the teams other than P (i.e. by Q, R, S and T together)?",
      "ans": "4",
      "exp": "Wins: Q 2, R 1, S 1, T 0. Total = 4. (Check: 10 matches = 3 draws + 3 P-wins + 4 other wins.)",
      "set": "c_dl10"
     }
    ]
   },
   {
    "title": "Club Crossover Count",
    "mins": 15,
    "qs": [
     {
      "id": "l11_DILR_1",
      "type": "tita",
      "text": "How many students belong to exactly one of the three clubs?",
      "ans": "47",
      "exp": "Members in at least one club = 100 − 25 = 75. All three = 24/6 = 4. Exactly one = 75 − 24 − 4 = 47.",
      "set": "c_dl11"
     },
     {
      "id": "l11_DILR_2",
      "type": "mcq",
      "text": "How many students belong to the Music club only?",
      "opts": [
       "20",
       "22",
       "24",
       "26"
      ],
      "ans": 1,
      "exp": "Let MD-only = d, MDr-only = e, DDr-only = f, all three = 4. d + e + f = 24 and d = e + 2. Drama: c + e + f + 4 = 30 with c = f, so 2f + e = 26. From d + e + f = 24: 2e + 2 + f = 24, so f = 22 − 2e. Then 44 − 4e + e = 26 gives e = 6, d = 8, f = 10, c = 10. Music only = 40 − 8 − 6 − 4 = 22.",
      "set": "c_dl11"
     },
     {
      "id": "l11_DILR_3",
      "type": "tita",
      "text": "How many students belong to the Dance club or the Drama club (or both) but NOT to the Music club?",
      "ans": "35",
      "exp": "Dance only = 37 − 8 − 10 − 4 = 15, Drama only = 10, Dance and Drama but not Music = 10. Total = 15 + 10 + 10 = 35. (Check: 75 in some club − 40 in Music = 35.)",
      "set": "c_dl11"
     },
     {
      "id": "l11_DILR_4",
      "type": "mcq",
      "text": "By how much does the number of students in exactly one club exceed the number in exactly two clubs?",
      "opts": [
       "21",
       "23",
       "25",
       "27"
      ],
      "ans": 1,
      "exp": "Exactly one = 22 + 15 + 10 = 47; exactly two = 24. Difference = 47 − 24 = 23.",
      "set": "c_dl11"
     },
     {
      "id": "l11_DILR_5",
      "type": "tita",
      "text": "Some students who currently belong to no club join only the Drama club. What is the minimum number of such students needed for Drama to have strictly more members than each of the other two clubs?",
      "ans": "11",
      "exp": "Music has 40 members, Dance 37, Drama 30. Drama needs at least 41, so 41 − 30 = 11 students must join. There are 25 students in no club, so this is possible.",
      "set": "c_dl11"
     }
    ]
   },
   {
    "title": "Bakery Ledger Detective",
    "mins": 15,
    "qs": [
     {
      "id": "l12_DILR_1",
      "type": "tita",
      "text": "What was the percentage growth in T's sales from 2024 to 2025?",
      "ans": "70",
      "exp": "P 2025 = 80 × 1.25 = 100. P : T = 25 : 17, so T 2025 = 68. Growth = (68 − 40)/40 × 100 = 70%.",
      "set": "c_dl12"
     },
     {
      "id": "l12_DILR_2",
      "type": "mcq",
      "text": "Which outlet had the highest absolute increase in sales from 2024 to 2025?",
      "opts": [
       "P",
       "R",
       "S",
       "T"
      ],
      "ans": 1,
      "exp": "Q 2024 = 132/1.1 = 120; S 2024 = 400 − 80 − 120 − 60 − 40 = 100, so S 2025 = 110. Total 2025 = 100 + 132 + R + 110 + 68 = 410 + R and R = 0.18(410 + R) gives 0.82R = 73.8, R = 90. Increases: P 20, Q 12, R 30, S 10, T 28. Highest is R.",
      "set": "c_dl12"
     },
     {
      "id": "l12_DILR_3",
      "type": "tita",
      "text": "What percentage of the total 2025 sales was contributed by S?",
      "ans": "22",
      "exp": "Total 2025 = 410 + 90 = 500. S 2025 = 110. Share = 110/500 × 100 = 22%.",
      "set": "c_dl12"
     },
     {
      "id": "l12_DILR_4",
      "type": "tita",
      "text": "How many outlets recorded a percentage growth strictly greater than the overall percentage growth of the chain from 2024 to 2025?",
      "ans": "2",
      "exp": "Overall growth = (500 − 400)/400 = 25%. Growths: P 25%, Q 10%, R 50%, S 10%, T 70%. Only R and T are strictly above 25%, so the answer is 2.",
      "set": "c_dl12"
     },
     {
      "id": "l12_DILR_5",
      "type": "mcq",
      "text": "If every outlet's sales grow from 2025 to 2026 at the same percentage rate as from 2024 to 2025, what will be the total 2026 sales (in Rs. lakh)?",
      "opts": [
       "625.0",
       "641.8",
       "650.4",
       "662.5"
      ],
      "ans": 1,
      "exp": "2026 sales: P 100 × 1.25 = 125, Q 132 × 1.1 = 145.2, R 90 × 1.5 = 135, S 110 × 1.1 = 121, T 68 × 1.7 = 115.6. Total = 641.8.",
      "set": "c_dl12"
     }
    ]
   },
   {
    "title": "Six Floors, Six Colours",
    "mins": 15,
    "qs": [
     {
      "id": "l13_DILR_1",
      "type": "mcq",
      "text": "Who likes Blue?",
      "opts": [
       "A",
       "C",
       "E",
       "F"
      ],
      "ans": 2,
      "exp": "Key fact: White is on floor 1 and Green is below A, so Green is on floor 2 or higher and A is on floor 3 or higher. Also C is not on floor 1 (C does not like White). Case C odd (3 or 5): F likes Yellow, so F is on floor 6; B is even and above C, so B = 4 and C = 3. A, D, E take floors 1, 2, 5 with E above A, so A is on 1 or 2 — contradicts A ≥ 3. So C is on an even floor and F lives immediately above D. Case C = 2: if B = 4, the D–F pair must be 5–6, leaving A on 1 or 3 with E above A, so A = 1 — contradiction; if B = 6, the D–F pair is 3–4 or 4–5, again forcing A = 1 — contradiction. So C = 4, B = 6. Floors 1, 2, 3, 5 remain; A ≥ 3 and E above A (not 6) give A = 3, E = 5, so D = 1, F = 2. Colours: Yellow on 6 = B, White on 1 = D, Black immediately above A = C (4), Green below A on floor 2 = F. Red and Blue are one person apart on floors 3 and 5; A is not Blue, so A = Red, E = Blue. Final: 1 D White, 2 F Green, 3 A Red, 4 C Black, 5 E Blue, 6 B Yellow. So E likes Blue.",
      "set": "c_dl13"
     },
     {
      "id": "l13_DILR_2",
      "type": "tita",
      "text": "On which floor does C live?",
      "ans": "4",
      "exp": "From the final arrangement (1 D White, 2 F Green, 3 A Red, 4 C Black, 5 E Blue, 6 B Yellow), C lives on floor 4.",
      "set": "c_dl13"
     },
     {
      "id": "l13_DILR_3",
      "type": "tita",
      "text": "How many people live between F and E?",
      "ans": "2",
      "exp": "F is on floor 2 and E on floor 5, so the people on floors 3 and 4 (A and C) are between them: 2.",
      "set": "c_dl13"
     },
     {
      "id": "l13_DILR_4",
      "type": "mcq",
      "text": "Which colour does F like?",
      "opts": [
       "Red",
       "Green",
       "Yellow",
       "Black"
      ],
      "ans": 1,
      "exp": "Green must be below A (floor 3); floor 1 is White, so Green is on floor 2, which is F's floor.",
      "set": "c_dl13"
     },
     {
      "id": "l13_DILR_5",
      "type": "mcq",
      "text": "Which of the following statements is true?",
      "opts": [
       "B likes Yellow and lives on floor 6",
       "D lives immediately below A",
       "The person who likes Black lives on floor 5",
       "A likes Green"
      ],
      "ans": 0,
      "exp": "Final: 1 D White, 2 F Green, 3 A Red, 4 C Black, 5 E Blue, 6 B Yellow. D is on 1 (not immediately below A on 3), Black is on floor 4, A likes Red. Only 'B likes Yellow and lives on floor 6' is true.",
      "set": "c_dl13"
     }
    ]
   },
   {
    "title": "Courier Cost Crunch",
    "mins": 15,
    "qs": [
     {
      "id": "l14_DILR_1",
      "type": "tita",
      "text": "What is the minimum cost (in Rs. hundred) of sending a parcel from S to T?",
      "ans": "22",
      "exp": "Key routes: S–C–E–T = 9 + 1 + 4 + 3 + 5 = 22; S–A–D–T = 4 + 3 + 8 + 2 + 6 = 23; S–B–D–T = 7 + 4 + 5 + 2 + 6 = 24; S–A–B–D–T = 4 + 3 + 2 + 4 + 5 + 2 + 6 = 26. Every other route costs more, so the minimum is 22.",
      "set": "c_dl14"
     },
     {
      "id": "l14_DILR_2",
      "type": "mcq",
      "text": "What is the minimum cost (in Rs. hundred) of a route from S to T that passes through B?",
      "opts": [
       "24",
       "26",
       "27",
       "28"
      ],
      "ans": 0,
      "exp": "Routes through B: S–B–D–T = 7 + 4 + 5 + 2 + 6 = 24 is the cheapest (S–A–B–D–T = 26, S–B–C–E–T = 27, others higher). Answer 24.",
      "set": "c_dl14"
     },
     {
      "id": "l14_DILR_3",
      "type": "mcq",
      "text": "The halt fee at C is increased by x (an integer, in Rs. hundred). What is the smallest x for which no cheapest S-to-T route passes through C?",
      "opts": [
       "1",
       "2",
       "3",
       "4"
      ],
      "ans": 1,
      "exp": "The best route through C is S–C–E–T at 22 + x; the best route avoiding C is S–A–D–T at 23. At x = 1 they tie at 23, so a cheapest route still uses C. At x = 2, 24 > 23, so x = 2.",
      "set": "c_dl14"
     },
     {
      "id": "l14_DILR_4",
      "type": "tita",
      "text": "How many different routes from S to T have a total cost of at most 27 (Rs. hundred)?",
      "ans": "7",
      "exp": "Listing routes by cost: S–C–E–T 22, S–A–D–T 23, S–B–D–T 24, S–A–B–D–T 26, S–A–D–E–T 27, S–B–C–E–T 27, S–C–E–D–T 27. The next one (S–B–D–E–T) costs 28. So 7 routes.",
      "set": "c_dl14"
     },
     {
      "id": "l14_DILR_5",
      "type": "mcq",
      "text": "A van must go from S to T and then return from T to S, with no road used more than once over the whole trip (halt fees are paid on each passage). What is the minimum total cost (in Rs. hundred)?",
      "opts": [
       "44",
       "45",
       "46",
       "48"
      ],
      "ans": 1,
      "exp": "The trip is two S–T routes with no common road. The two cheapest routes, S–C–E–T (22) and S–A–D–T (23), share no road, so the minimum is 22 + 23 = 45. Nothing smaller is possible because 22 cannot be used twice (it would repeat roads) and 23 is the next lowest cost.",
      "set": "c_dl14"
     }
    ]
   },
   {
    "title": "Quiz Final Scorecard",
    "mins": 15,
    "qs": [
     {
      "id": "l15_DILR_1",
      "type": "tita",
      "text": "What was R's final score?",
      "ans": "19",
      "exp": "S: 4c − w = 30 with c + w ≤ 10 gives c = 8, w = 2. Q: 4c − (10 − c) = 20 gives c = 6, w = 4. P: c + w = 9, score = 5c − 9; it must exceed 20 and be below 30, so c = 6 (21) or c = 7 (26). Unattempted total 5: P 1, Q 0, S 0, so R left 4 and attempted 6. Correct total 26 gives P + R correct = 12. If P = 6 correct, R = 6 correct, 0 wrong, score 24 > Q — not allowed. So P = 7 correct, 2 wrong (26); R = 5 correct, 1 wrong, score 20 − 1 = 19.",
      "set": "c_dl15"
     },
     {
      "id": "l15_DILR_2",
      "type": "tita",
      "text": "How many wrong answers were given by the four contestants in total?",
      "ans": "9",
      "exp": "Wrong answers: P 2, Q 4, R 1, S 2. Total = 9.",
      "set": "c_dl15"
     },
     {
      "id": "l15_DILR_3",
      "type": "mcq",
      "text": "Who finished second in the contest?",
      "opts": [
       "P",
       "Q",
       "R",
       "Cannot be determined"
      ],
      "ans": 0,
      "exp": "Scores: S 30, P 26, Q 20, R 19. P is second.",
      "set": "c_dl15"
     },
     {
      "id": "l15_DILR_4",
      "type": "tita",
      "text": "What was the total of the four contestants' scores?",
      "ans": "95",
      "exp": "30 + 26 + 20 + 19 = 95. (Check: 4 × 26 correct − 9 wrong = 95.)",
      "set": "c_dl15"
     },
     {
      "id": "l15_DILR_5",
      "type": "mcq",
      "text": "If the scheme had instead been +3 for a correct answer and −1 for a wrong answer, what would have been the difference between the highest and the lowest score?",
      "opts": [
       "6",
       "8",
       "10",
       "12"
      ],
      "ans": 1,
      "exp": "New scores: P 3×7 − 2 = 19, Q 3×6 − 4 = 14, R 3×5 − 1 = 14, S 3×8 − 2 = 22. Difference = 22 − 14 = 8.",
      "set": "c_dl15"
     }
    ]
   },
   {
    "title": "The Unless Clause Gauntlet",
    "mins": 16,
    "qs": [
     {
      "id": "l16_DILR_1",
      "type": "tita",
      "text": "How many different schedules satisfy all the conditions?",
      "ans": "6",
      "exp": "Key branch: 'C on Wed unless G on Thu'. Case 1: C=Wed. Then C is not on the weekend and not Thu, so E must be on Mon/Wed/Fri/Sun (not Sun, not Wed) -> Mon or Fri. Working through D-F (gap of 3) and the A/E and B/D conditionals leaves A-G-C-D-E-B-F, A-G-C-F-E-B-D, E-F-C-G-D-A-B and E-F-C-G-D-B-A. Case 2: G=Thu, C not Wed. C=Mon gives C-F-E-G-D-A-B and C-F-E-G-D-B-A; every other placement violates a clue (e.g., C on the weekend forces D=Mon, and then F=Thu clashes with G). Total = 6 schedules.",
      "set": "c_dl16"
     },
     {
      "id": "l16_DILR_2",
      "type": "mcq",
      "text": "If Analytics is held on Monday, which workshop is held on Friday?",
      "opts": [
       "Ethics",
       "Design",
       "Branding",
       "Finance"
      ],
      "ans": 0,
      "exp": "With A on Monday, only two schedules survive: A-G-C-D-E-B-F and A-G-C-F-E-B-D. In both, Friday hosts E (Ethics). (A=Mon kills the G=Thu branch because C would then need Mon.)",
      "set": "c_dl16"
     },
     {
      "id": "l16_DILR_3",
      "type": "mcq",
      "text": "Which of the following CANNOT be true?",
      "opts": [
       "C is held on Monday",
       "D is held on Thursday",
       "G is held on Wednesday",
       "A is held on Saturday"
      ],
      "ans": 2,
      "exp": "G appears only on Tuesday (A-G-C-... schedules) or Thursday (all others), so G on Wednesday is impossible. C=Mon (C-F-E-G-D-A-B), D=Thu (A-G-C-D-E-B-F) and A=Sat (E-F-C-G-D-A-B) all occur in valid schedules.",
      "set": "c_dl16"
     },
     {
      "id": "l16_DILR_4",
      "type": "tita",
      "text": "If Branding is held on Saturday, how many different workshops could be held on Monday?",
      "ans": "3",
      "exp": "B=Sat leaves four schedules: A-G-C-D-E-B-F, A-G-C-F-E-B-D, C-F-E-G-D-B-A, E-F-C-G-D-B-A. Monday can host A, C or E -> 3.",
      "set": "c_dl16"
     },
     {
      "id": "l16_DILR_5",
      "type": "mcq",
      "text": "If Ethics is held on Wednesday, which of the following must be true?",
      "opts": [
       "D is held on Friday",
       "A is held on Saturday",
       "B is held on Sunday",
       "C is held on Wednesday"
      ],
      "ans": 0,
      "exp": "E=Wed means C is not on Wed, so G=Thu. Then C must be Mon (C-F-E-G-D-?-?), giving C-F-E-G-D-A-B or C-F-E-G-D-B-A. D is on Friday in both; A and B can swap Sat/Sun; C is on Monday, not Wednesday.",
      "set": "c_dl16"
     }
    ]
   },
   {
    "title": "Ratios Hiding in Plain Sight",
    "mins": 16,
    "qs": [
     {
      "id": "l17_DILR_1",
      "type": "tita",
      "text": "What is the total number of employees in the firm?",
      "ans": "504",
      "exp": "36% of North must be an integer, so North is a multiple of 25; North = 1.25 x East, so North = 25m, East = 20m, women N = 9m, women E = 9m. Women S = 18m = 62.5% of South, so South = 28.8m -> m must be a multiple of 5. Let m = 5k: N = 125k, E = 100k, S = 144k (women 90k, men 54k). West men = 108k = 80% of West, so West = 135k (women 27k). Total = 504k < 1000 forces k = 1 -> 504.",
      "set": "c_dl17"
     },
     {
      "id": "l17_DILR_2",
      "type": "mcq",
      "text": "Approximately what percentage of the firm's employees are women?",
      "opts": [
       "38.6%",
       "41.1%",
       "43.5%",
       "45.8%"
      ],
      "ans": 1,
      "exp": "Women = 45 + 45 + 90 + 27 = 207 out of 504 -> 207/504 = 41.07% ~ 41.1%.",
      "set": "c_dl17"
     },
     {
      "id": "l17_DILR_3",
      "type": "mcq",
      "text": "Which region has the highest ratio of men to women?",
      "opts": [
       "North",
       "East",
       "South",
       "West"
      ],
      "ans": 3,
      "exp": "Men:Women -> North 80:45 (1.78), East 55:45 (1.22), South 54:90 (0.6), West 108:27 (4.0). West is highest.",
      "set": "c_dl17"
     },
     {
      "id": "l17_DILR_4",
      "type": "mcq",
      "text": "If 15 women move from South to East (no other change), by how many percentage points does the share of women in East's workforce rise (approximately)?",
      "opts": [
       "5.83",
       "6.52",
       "7.17",
       "8.04"
      ],
      "ans": 2,
      "exp": "East currently: 45 women of 100 = 45%. After the move: 60 of 115 = 52.17%. Rise = 7.17 percentage points ~ 7.17.",
      "set": "c_dl17"
     },
     {
      "id": "l17_DILR_5",
      "type": "tita",
      "text": "By how many does the number of men in the firm exceed the number of women?",
      "ans": "90",
      "exp": "Men = 80 + 55 + 54 + 108 = 297; women = 207. Difference = 90.",
      "set": "c_dl17"
     }
    ]
   },
   {
    "title": "Points Table Detective",
    "mins": 16,
    "qs": [
     {
      "id": "l18_DILR_1",
      "type": "tita",
      "text": "How many of its matches did A draw?",
      "ans": "2",
      "exp": "A has 11 points from 5 unbeaten matches: 3w+d = 11 with w+d = 5 -> w = 3, d = 2. So A drew 2 matches.",
      "set": "c_dl18"
     },
     {
      "id": "l18_DILR_2",
      "type": "mcq",
      "text": "What was the result of the match between A and B?",
      "opts": [
       "A won",
       "B won",
       "The match was drawn",
       "Cannot be determined"
      ],
      "ans": 0,
      "exp": "B lost to C, so B earned 9 points from its other 4 matches. 2 wins + 3 draws would need 5 matches, so B must have 3 wins, 0 draws and 2 losses. A is unbeaten, so A-B was not a B win, and B had no draws, so it was not a draw either. Hence A won.",
      "set": "c_dl18"
     },
     {
      "id": "l18_DILR_3",
      "type": "tita",
      "text": "What is the maximum number of points E could have scored?",
      "ans": "8",
      "exp": "Total points = 3 x 15 - 4 draws = 41, so C + E = 41 - (11+9+7+2) = 12, with E > C. C beat B (3 points). C cannot have lost to F, otherwise F would have at least 3 points; so C-F was at least a draw and C >= 4. Hence E <= 8. E = 8, C = 4 is achievable (e.g., C: W vs B, D vs F, L in the other three; E: 2 wins, 2 draws), so the maximum is 8.",
      "set": "c_dl18"
     },
     {
      "id": "l18_DILR_4",
      "type": "tita",
      "text": "What is the minimum number of points C could have scored?",
      "ans": "4",
      "exp": "C beat B (3 points) and could not have lost to F (F has only 2 points), so C >= 4. C = 4 occurs in a valid table (C beats B, draws F, loses to A, D and E), so the minimum is 4.",
      "set": "c_dl18"
     },
     {
      "id": "l18_DILR_5",
      "type": "mcq",
      "text": "If E finished strictly above D in points, how many points did C score?",
      "opts": [
       "3",
       "4",
       "5",
       "6"
      ],
      "ans": 1,
      "exp": "D has 7. E above D means E >= 8; since E is at most 8, E = 8 and C = 12 - 8 = 4.",
      "set": "c_dl18"
     }
    ]
   },
   {
    "title": "Liars, Pets and Paradoxes",
    "mins": 16,
    "qs": [
     {
      "id": "l19_DILR_1",
      "type": "tita",
      "text": "How many of the five friends are Liars?",
      "ans": "3",
      "exp": "Suppose A is a Truth-teller: then B is too, so E ('A is a Liar') lies, so B owns Dog or Rabbit; A's 'Dog owner is a Liar' rules out Dog, so B owns Rabbit; D's 'Rabbit owner is a Truth-teller' is then true, so D is truthful and C (who says D is truthful) is truthful -> only 1 Liar, contradicting truthful B's 'exactly three'. So A is a Liar, hence B is a Truth-teller (A's 'same type' is false) and E is a Truth-teller. B truthful -> exactly 3 Liars, i.e., A, C and D.",
      "set": "c_dl19"
     },
     {
      "id": "l19_DILR_2",
      "type": "mcq",
      "text": "Who owns the Rabbit?",
      "opts": [
       "A",
       "B",
       "D",
       "E"
      ],
      "ans": 2,
      "exp": "Liars: A, C, D. C lies -> A owns the Fish. B truthful -> C owns the Parrot. A lies -> the Dog owner is a Truth-teller (B or E); E truthful -> B owns neither Dog nor Rabbit, so E owns the Dog. D lies -> the Rabbit owner is a Liar; remaining Cat/Rabbit go to B and D, and B can't have the Rabbit -> D owns the Rabbit, B the Cat.",
      "set": "c_dl19"
     },
     {
      "id": "l19_DILR_3",
      "type": "mcq",
      "text": "Which pair consists of two Truth-tellers?",
      "opts": [
       "A and C",
       "B and E",
       "B and D",
       "C and E"
      ],
      "ans": 1,
      "exp": "The Truth-tellers are exactly B and E.",
      "set": "c_dl19"
     },
     {
      "id": "l19_DILR_4",
      "type": "mcq",
      "text": "Which pet - owner pairing is correct?",
      "opts": [
       "Cat - D",
       "Fish - E",
       "Dog - E",
       "Parrot - D"
      ],
      "ans": 2,
      "exp": "Final allocation: A-Fish, B-Cat, C-Parrot, D-Rabbit, E-Dog. So Dog - E is correct.",
      "set": "c_dl19"
     },
     {
      "id": "l19_DILR_5",
      "type": "tita",
      "text": "Of the ten statements made, how many are true?",
      "ans": "4",
      "exp": "Truth-tellers B and E make 2 true statements each; the three Liars' 6 statements are all false. Total true = 4.",
      "set": "c_dl19"
     }
    ]
   },
   {
    "title": "CAT Boss: The Allocation Engine",
    "mins": 16,
    "qs": [
     {
      "id": "l20_DILR_1",
      "type": "tita",
      "text": "How many different allocations satisfy all the conditions?",
      "ans": "27",
      "exp": "There are 6!/(2!2!2!) = 90 ways to form the three named pairs. Applying the five rules by brute-force case work on R's project (X or Y) and P/Q placement leaves 27 valid allocations.",
      "set": "c_dl20"
     },
     {
      "id": "l20_DILR_2",
      "type": "tita",
      "text": "What is the maximum possible team score?",
      "ans": "48",
      "exp": "Unconstrained best would be P-X 8, Q-Y 9, R-Z 9, S-X 9, T-Y 8, U-Z 8 = 51, but R cannot be on Z. Moving R to Y (7) pushes T off Y; T to Z (7) with U-Z (8): X = {P, S}, Y = {Q, R}, Z = {T, U} -> 8+9+7+9+7+8 = 48. All rules hold (S on X, T on Z, U and R apart). No valid allocation beats 48.",
      "set": "c_dl20"
     },
     {
      "id": "l20_DILR_3",
      "type": "mcq",
      "text": "In the allocation with the maximum team score, who works with T?",
      "opts": [
       "U",
       "P",
       "R",
       "S"
      ],
      "ans": 0,
      "exp": "The unique optimum is X = {P, S}, Y = {Q, R}, Z = {T, U}. T is paired with U.",
      "set": "c_dl20"
     },
     {
      "id": "l20_DILR_4",
      "type": "tita",
      "text": "What is the minimum possible team score of a valid allocation?",
      "ans": "32",
      "exp": "Exhaustively scoring all 27 valid allocations, the lowest is 32 (e.g., X = {T, U}, Y = {P, R}, Z = {Q, S}: 5+4+6+7+4+6 = 32).",
      "set": "c_dl20"
     },
     {
      "id": "l20_DILR_5",
      "type": "tita",
      "text": "Management adds one more rule: Q must be on Project X. What is now the maximum possible team score?",
      "ans": "44",
      "exp": "With Q on X (7), P cannot be on X, and the old optimum (P, S on X) breaks. S keeps X (9) as Q's partner; P goes to Y (6), which also allows R to join Y (7) without clashing with U; T and U take Z (7 + 8). Team = 7 + 9 + 6 + 7 + 7 + 8 = 44 (X = {Q, S}, Y = {P, R}, Z = {T, U}). Checking all valid allocations with Q on X, none exceeds 44.",
      "set": "c_dl20"
     }
    ]
   }
  ],
  "QA": [
   {
    "title": "Percent & Averages Rematch",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_Q_1",
      "type": "tita",
      "text": "The average of 6 numbers is 15. If the number 25 is removed, what is the average of the remaining numbers?",
      "ans": "13",
      "exp": "Total = 6 × 15 = 90. Remove 25 → 65. 65 / 5 = 13. Averages trick: always convert to TOTAL first."
     },
     {
      "id": "c20261018_Q_2",
      "type": "mcq",
      "text": "The price of a book rises from ₹400 to ₹500. What is the percentage increase?",
      "opts": [
       "20%",
       "25%",
       "30%",
       "33.3%"
      ],
      "ans": 1,
      "exp": "Change / ORIGINAL = 100 / 400 = 25%. (Dividing by 500 gives the 20% trap.)"
     },
     {
      "id": "c20261018_Q_3",
      "type": "tita",
      "text": "Compound interest on ₹8,000 at 5% per annum for 2 years (compounded annually) is ₹ ____",
      "ans": "820",
      "exp": "8000 × 1.05 × 1.05 = 8820 → interest 820. Shortcut: 2-year CI rate = 5 + 5 + (5×5)/100 = 10.25% → 10.25% of 8000 = 820."
     },
     {
      "id": "c20261018_Q_4",
      "type": "tita",
      "text": "A 30-litre mixture has milk and water in the ratio 2 : 1. How many litres of water must be added to make the ratio 1 : 1?",
      "ans": "10",
      "exp": "Milk 20, water 10. Milk stays 20, so water must become 20 → add 10. Trick: the ingredient you DON'T add stays fixed."
     },
     {
      "id": "c20261018_Q_5",
      "type": "mcq",
      "text": "An item marked ₹1,000 gets successive discounts of 10% and 20%. What is the selling price?",
      "opts": [
       "₹700",
       "₹720",
       "₹750",
       "₹680"
      ],
      "ans": 1,
      "exp": "1000 × 0.9 × 0.8 = 720. Successive discounts multiply, they don't add (not 30% off)."
     }
    ]
   },
   {
    "title": "Speed & Work Sprint",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018_Q_6",
      "type": "tita",
      "text": "A finishes a job in 12 days and B in 24 days. Working together, how many days do they take?",
      "ans": "8",
      "exp": "Rates: 1/12 + 1/24 = 3/24 = 1/8 → 8 days. Shortcut: ab/(a+b) = 288/36 = 8."
     },
     {
      "id": "c20261018_Q_7",
      "type": "tita",
      "text": "A car travels 60 km at 30 km/h and returns the same 60 km at 60 km/h. What is its average speed (km/h) for the round trip?",
      "ans": "40",
      "exp": "Time = 2 h + 1 h = 3 h for 120 km → 40. Trap: (30+60)/2 = 45 is wrong. Same distance both ways → 2xy/(x+y) = 3600/90 = 40."
     },
     {
      "id": "c20261018_Q_8",
      "type": "mcq",
      "text": "A boat goes 30 km downstream in 2 hours and returns 30 km upstream in 3 hours. What is the boat's speed in still water (km/h)?",
      "opts": [
       "12",
       "12.5",
       "13",
       "15"
      ],
      "ans": 1,
      "exp": "Downstream 15, upstream 10. Boat = (15 + 10)/2 = 12.5; stream = (15 − 10)/2 = 2.5."
     },
     {
      "id": "c20261018_Q_9",
      "type": "tita",
      "text": "Pipe A fills a tank in 6 hours; pipe B empties it in 10 hours. With both open, how many hours does it take to fill the empty tank?",
      "ans": "15",
      "exp": "1/6 − 1/10 = 5/30 − 3/30 = 2/30 = 1/15 → 15 hours. Emptying pipe = subtract its rate."
     },
     {
      "id": "c20261018_Q_10",
      "type": "tita",
      "text": "Two trains, 150 m and 100 m long, run in opposite directions at 40 km/h and 50 km/h. How many seconds do they take to cross each other?",
      "ans": "10",
      "exp": "Opposite directions → add speeds: 90 km/h = 90 × 5/18 = 25 m/s. Distance = 150 + 100 = 250 m → 10 s."
     }
    ]
   },
   {
    "title": "Ratio & Interest Climb",
    "mins": 13,
    "qs": [
     {
      "id": "c20261018_Q_11",
      "type": "mcq",
      "text": "If A : B = 3 : 4 and B : C = 6 : 5, then A : B : C is:",
      "opts": [
       "9 : 12 : 10",
       "3 : 4 : 5",
       "18 : 24 : 15",
       "9 : 12 : 15"
      ],
      "ans": 0,
      "exp": "Make B the same in both: B is 4 and 6 → LCM 12. A:B = 9:12, B:C = 12:10 → 9:12:10."
     },
     {
      "id": "c20261018_Q_12",
      "type": "tita",
      "text": "A sum of money doubles itself in 5 years at simple interest. In how many years will it become 4 times itself?",
      "ans": "15",
      "exp": "Doubling = 100% interest in 5 years → 20% a year. 4 times = 300% interest → 300/20 = 15 years. Trap: answering 10 (that would be compound-style thinking)."
     },
     {
      "id": "c20261018_Q_13",
      "type": "tita",
      "text": "The compound interest on a sum for 2 years at 10% per annum (compounded annually) is ₹525. What is the sum (₹)?",
      "ans": "2500",
      "exp": "2-year CI rate = 10 + 10 + (10×10)/100 = 21%. 21% of P = 525 → P = 525/0.21 = 2500."
     },
     {
      "id": "c20261018_Q_14",
      "type": "tita",
      "text": "₹1,200 is divided among A, B and C so that A gets half of what B and C get together, and B gets one-third of what A and C get together. What is C's share (₹)?",
      "ans": "500",
      "exp": "A = ½(B+C) → A is 1 part out of 3 → A = 1200/3 = 400. B = ⅓(A+C) → B is 1 part of 4 → B = 300. C = 1200 − 700 = 500. Trick: 'x gets 1/k of the rest' means x = total/(k+1)."
     },
     {
      "id": "c20261018_Q_15",
      "type": "mcq",
      "text": "The present ages of a father and his son are in the ratio 7 : 2. After 10 years the ratio will be 9 : 4. What is the son's present age (years)?",
      "opts": [
       "8",
       "10",
       "12",
       "15"
      ],
      "ans": 1,
      "exp": "(7x+10)/(2x+10) = 9/4 → 28x+40 = 18x+90 → x = 5 → son 10. Faster: try options — son 10 → father 35; in 10 years 45:20 = 9:4 ✓."
     }
    ]
   },
   {
    "title": "Rematch: Old Foes, New Numbers",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018b_QA_1",
      "type": "tita",
      "text": "The average of 8 numbers is 24. When one number is removed, the average of the remaining 7 numbers becomes 22. What is the number that was removed?",
      "ans": "38",
      "exp": "Convert averages to totals. Total of 8 = 8 × 24 = 192. Total of 7 = 7 × 22 = 154. Removed number = 192 − 154 = 38."
     },
     {
      "id": "c20261018b_QA_2",
      "type": "mcq",
      "text": "What is the compound interest on ₹10,000 at 10% per annum, compounded annually, for 3 years?",
      "opts": [
       "₹3,000",
       "₹3,100",
       "₹3,310",
       "₹3,410"
      ],
      "ans": 2,
      "exp": "Amount = 10000 × 1.1 × 1.1 × 1.1 = 13310, so CI = 13310 − 10000 = ₹3,310. Shortcut: for 10%, multiply by 1.1 each year (10000 → 11000 → 12100 → 13310). ₹3,000 is simple interest, the trap."
     },
     {
      "id": "c20261018b_QA_3",
      "type": "tita",
      "text": "A can finish a job in 10 days and B can finish it in 15 days. Working together, in how many days will they finish it?",
      "ans": "6",
      "exp": "Assume total work = LCM(10,15) = 30 units. A does 3 units/day, B does 2 units/day, together 5 units/day. Days = 30 ÷ 5 = 6."
     },
     {
      "id": "c20261018b_QA_4",
      "type": "mcq",
      "text": "Pipes A and B can fill a tank in 20 hours and 30 hours respectively. Pipe C can empty the full tank in 15 hours. If all three are opened together on an empty tank, how long will it take to fill it?",
      "opts": [
       "12 hours",
       "20 hours",
       "30 hours",
       "60 hours"
      ],
      "ans": 3,
      "exp": "Tank = LCM(20,30,15) = 60 units. A fills +3/hr, B fills +2/hr, C empties −4/hr. Net = +1 unit/hr, so 60 ÷ 1 = 60 hours. Always subtract the emptying pipe."
     },
     {
      "id": "c20261018b_QA_5",
      "type": "tita",
      "text": "A train 240 m long running at 54 km/h crosses a platform 360 m long. How many seconds does it take?",
      "ans": "40",
      "exp": "Distance = train + platform = 240 + 360 = 600 m. Speed = 54 × 5/18 = 15 m/s. Time = 600 ÷ 15 = 40 s. Key trap: add the platform length, and convert km/h to m/s by × 5/18."
     }
    ]
   },
   {
    "title": "Percent Power-Up",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018b_QA_6",
      "type": "mcq",
      "text": "The price of sugar rises by 25%. By what percentage must a family reduce its sugar consumption so that its expenditure stays the same?",
      "opts": [
       "15%",
       "20%",
       "22.5%",
       "25%"
      ],
      "ans": 1,
      "exp": "Shortcut: reduction = r ÷ (100 + r) × 100 = 25 ÷ 125 × 100 = 20%. Fraction view: 25% = 1/4 rise, so price becomes 5/4; consumption must become 4/5, i.e. a 1/5 = 20% cut."
     },
     {
      "id": "c20261018b_QA_7",
      "type": "tita",
      "text": "A shopkeeper marks an item 40% above its cost price and then gives a 15% discount. What is his profit percentage?",
      "ans": "19",
      "exp": "Take CP = 100. MP = 140. SP = 140 × 0.85 = 119. Profit = 19%. Shortcut: multiply the factors 1.40 × 0.85 = 1.19."
     },
     {
      "id": "c20261018b_QA_8",
      "type": "tita",
      "text": "An article marked at ₹2,500 is sold after two successive discounts of 20% and 10%. What is the selling price (in ₹)?",
      "ans": "1800",
      "exp": "2500 × 0.8 = 2000, then 2000 × 0.9 = 1800. Successive discounts of 20% and 10% equal one discount of 20 + 10 − (20 × 10)/100 = 28%, not 30%. 2500 × 0.72 = 1800."
     },
     {
      "id": "c20261018b_QA_9",
      "type": "mcq",
      "text": "A sum of money doubles itself in 8 years at simple interest. In how many years will it become 4 times itself?",
      "opts": [
       "16 years",
       "20 years",
       "24 years",
       "32 years"
      ],
      "ans": 2,
      "exp": "Doubling means interest = 100% of principal in 8 years, so 12.5% per year. 4 times means interest = 300%, so 300 ÷ 12.5 = 24 years. Trap: 16 (thinking 'double again') only works for compound interest."
     },
     {
      "id": "c20261018b_QA_10",
      "type": "tita",
      "text": "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is ₹50. What is the sum (in ₹)?",
      "ans": "5000",
      "exp": "For 2 years, CI − SI = P × (r/100)². So 50 = P × (0.1)² = P × 0.01, giving P = ₹5,000."
     }
    ]
   },
   {
    "title": "Algebra Unlocked",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018b_QA_11",
      "type": "tita",
      "text": "The present ages of Ravi and Meera are in the ratio 5 : 7. After 6 years, the ratio will be 3 : 4. What is the sum of their present ages (in years)?",
      "ans": "72",
      "exp": "Let ages be 5x and 7x. (5x + 6)/(7x + 6) = 3/4, so 20x + 24 = 21x + 18, x = 6. Ages are 30 and 42; sum = 72. Check: 36 : 48 = 3 : 4."
     },
     {
      "id": "c20261018b_QA_12",
      "type": "mcq",
      "text": "If α and β are the roots of x² − 5x + 3 = 0, what is the value of α² + β²?",
      "opts": [
       "19",
       "22",
       "25",
       "31"
      ],
      "ans": 0,
      "exp": "Sum of roots α + β = 5, product αβ = 3. α² + β² = (α + β)² − 2αβ = 25 − 6 = 19. No need to find the roots."
     },
     {
      "id": "c20261018b_QA_13",
      "type": "tita",
      "text": "₹7,000 is divided among A, B and C such that A : B = 2 : 3 and B : C = 4 : 5. What is C's share (in ₹)?",
      "ans": "3000",
      "exp": "Make B common: A : B = 2 : 3 = 8 : 12 and B : C = 4 : 5 = 12 : 15. So A : B : C = 8 : 12 : 15 (total 35 parts). One part = 7000 ÷ 35 = 200. C = 15 × 200 = ₹3,000."
     },
     {
      "id": "c20261018b_QA_14",
      "type": "tita",
      "text": "If log₂x + log₄x = 6, what is the value of x?",
      "ans": "16",
      "exp": "log₄x = log₂x ÷ 2 (since 4 = 2²). So log₂x + ½ log₂x = 6, i.e. (3/2) log₂x = 6, log₂x = 4, x = 2⁴ = 16."
     },
     {
      "id": "c20261018b_QA_15",
      "type": "mcq",
      "text": "If 2^(x + 3) = 32^(x − 1), what is the value of x?",
      "opts": [
       "1",
       "2",
       "3",
       "4"
      ],
      "ans": 1,
      "exp": "Write 32 as 2⁵: 32^(x − 1) = 2^(5x − 5). Equate powers: x + 3 = 5x − 5, so 4x = 8, x = 2. Rule: make the bases equal, then equate exponents."
     }
    ]
   },
   {
    "title": "Numbers & Progressions Boss",
    "mins": 12,
    "qs": [
     {
      "id": "c20261018b_QA_16",
      "type": "tita",
      "text": "What is the remainder when 2¹⁰⁰ is divided by 7?",
      "ans": "2",
      "exp": "Find a power of 2 that leaves remainder 1: 2³ = 8 = 7 + 1. So 2¹⁰⁰ = (2³)³³ × 2¹ leaves remainder 1³³ × 2 = 2."
     },
     {
      "id": "c20261018b_QA_17",
      "type": "mcq",
      "text": "What is the unit digit of 3⁴⁷ × 7²²?",
      "opts": [
       "1",
       "3",
       "7",
       "9"
      ],
      "ans": 1,
      "exp": "Unit digits of powers of 3 and 7 repeat every 4. 47 ÷ 4 leaves 3, so 3⁴⁷ ends like 3³ = 27, i.e. 7. 22 ÷ 4 leaves 2, so 7²² ends like 7² = 49, i.e. 9. 7 × 9 = 63, so the unit digit is 3."
     },
     {
      "id": "c20261018b_QA_18",
      "type": "tita",
      "text": "How many integers from 1 to 300 (both included) are divisible by 4 or 6?",
      "ans": "100",
      "exp": "Divisible by 4: 300 ÷ 4 = 75. By 6: 300 ÷ 6 = 50. By both, i.e. by LCM 12: 300 ÷ 12 = 25. Answer = 75 + 50 − 25 = 100. Use the LCM, not 4 × 6 = 24."
     },
     {
      "id": "c20261018b_QA_19",
      "type": "tita",
      "text": "The 3rd term of an arithmetic progression is 11 and the 7th term is 23. What is the sum of its first 20 terms?",
      "ans": "670",
      "exp": "7th − 3rd = 4d = 12, so d = 3 and a = 11 − 2×3 = 5. 20th term = 5 + 19×3 = 62. Sum = n/2 × (first + last) = 10 × (5 + 62) = 670."
     },
     {
      "id": "c20261018b_QA_20",
      "type": "mcq",
      "text": "The first term of a geometric progression is 3 and its 4th term is 81. What is the sum of its first 6 terms?",
      "opts": [
       "364",
       "1092",
       "1093",
       "2184"
      ],
      "ans": 1,
      "exp": "3 × r³ = 81, so r³ = 27, r = 3. Sum = a(rⁿ − 1)/(r − 1) = 3 × (729 − 1)/2 = 3 × 364 = 1092. (364 forgets to multiply by a.)"
     }
    ]
   },
   {
    "title": "Triangle Tactics",
    "mins": 14,
    "qs": [
     {
      "id": "l11_QA_1",
      "type": "tita",
      "text": "In triangle ABC, angle A = 90°, AB = 15 cm and AC = 20 cm. AD is the perpendicular from A to BC. Find BD (in cm).",
      "ans": "9",
      "exp": "BC = √(15² + 20²) = 25. In a right triangle, each leg² = (its adjacent hypotenuse segment) × hypotenuse, so AB² = BD × BC → BD = 225 ÷ 25 = 9. Trap: using AC² instead gives 16 — that is DC, not BD. (Altitude AD = 15×20/25 = 12.)"
     },
     {
      "id": "l11_QA_2",
      "type": "mcq",
      "text": "In triangle ABC, AB = 12, AC = 18 and BC = 20. The bisector of angle A meets BC at D. What is the length of AD?",
      "opts": [
       "2√29",
       "2√30",
       "6√6",
       "4√6"
      ],
      "ans": 1,
      "exp": "Angle bisector theorem: BD:DC = AB:AC = 12:18 = 2:3, so BD = 8, DC = 12. Shortcut: AD² = AB×AC − BD×DC = 216 − 96 = 120 → AD = 2√30. Traps: taking D as the midpoint (BD = DC = 10) gives 216 − 100 = 116 → 2√29; forgetting to subtract gives √216 = 6√6."
     },
     {
      "id": "l11_QA_3",
      "type": "tita",
      "text": "In triangle ABC, D lies on AB and E lies on AC such that DE is parallel to BC, and AD : DB = 2 : 3. If the area of quadrilateral DECB is 84 sq cm, find the area of triangle ABC (in sq cm).",
      "ans": "100",
      "exp": "ΔADE ~ ΔABC with ratio AD:AB = 2:5 (not 2:3!). Area ratio = 4:25, so the trapezium is 21/25 of ABC → ABC = 84 × 25/21 = 100. Trap: using 2:3 directly gives area ratio 4:9 and a wrong answer of 151.2."
     },
     {
      "id": "l11_QA_4",
      "type": "mcq",
      "text": "A triangle has sides 13 cm, 14 cm and 15 cm. What is the radius of its circumcircle (in cm)?",
      "opts": [
       "4",
       "7",
       "65/8",
       "65/4"
      ],
      "ans": 2,
      "exp": "Heron: s = 21, area = √(21×8×7×6) = 84. R = abc/(4×Area) = 2730/336 = 65/8 = 8.125. Traps: 4 is the inradius (Area/s); 65/4 comes from abc/(2×Area); 7 is half the middle side."
     },
     {
      "id": "l11_QA_5",
      "type": "tita",
      "text": "P is a point inside rectangle ABCD (vertices in order) such that PA = 3, PB = 4 and PC = 5. Find PD².",
      "ans": "18",
      "exp": "British Flag theorem: for any point inside a rectangle, PA² + PC² = PB² + PD² (opposite corners pair up). 9 + 25 = 16 + PD² → PD² = 18. Trap: pairing adjacent corners (PA² + PB² = PC² + PD²) gives 0 — impossible, which is your hint the pairing is wrong."
     }
    ]
   },
   {
    "title": "Circles, Polygons & Solids",
    "mins": 14,
    "qs": [
     {
      "id": "l12_QA_1",
      "type": "tita",
      "text": "Two parallel chords of a circle have lengths 16 cm and 30 cm and lie on opposite sides of the centre. The distance between the chords is 23 cm. Find the radius of the circle (in cm).",
      "ans": "17",
      "exp": "Let the distances from the centre be d and 23 − d. r² = 8² + d² = 15² + (23 − d)². 64 + d² = 225 + 529 − 46d + d² → 46d = 690 → d = 15, so r² = 64 + 225 = 289 → r = 17. Fast check: 8-15-17 and 15-8-17 triples. Trap: halving is easy to forget — use half-chords 8 and 15, not 16 and 30."
     },
     {
      "id": "l12_QA_2",
      "type": "mcq",
      "text": "A regular hexagon has side 6 cm. Joining its alternate vertices forms a triangle. What is the area of this triangle (in sq cm)?",
      "opts": [
       "18√3",
       "27√3",
       "36√3",
       "54√3"
      ],
      "ans": 1,
      "exp": "The triangle is equilateral with side = √3 × 6 = 6√3 (a short diagonal). Area = (√3/4)(6√3)² = 27√3 — exactly half the hexagon (54√3). Traps: 54√3 is the whole hexagon; the hexagon is 6 small equilateral triangles of 9√3 each, so 36√3 (4 of them) and 18√3 (2 of them) are miscounts."
     },
     {
      "id": "l12_QA_3",
      "type": "tita",
      "text": "A sector of angle 216° is cut from a circular sheet of radius 10 cm and folded (without overlap) into a right circular cone. If the volume of the cone is kπ cubic cm, find k.",
      "ans": "96",
      "exp": "Arc length = (216/360) × 2π × 10 = 12π = circumference of the base → base radius 6. Slant height = 10, so height = √(100 − 36) = 8. V = (1/3)π × 36 × 8 = 96π. Traps: forgetting 1/3 gives 288; swapping radius and height gives 128."
     },
     {
      "id": "l12_QA_4",
      "type": "mcq",
      "text": "Two circles of radii 9 cm and 4 cm touch each other externally. What is the length of their direct (external) common tangent?",
      "opts": [
       "13 cm",
       "12 cm",
       "6 cm",
       "2√13 cm"
      ],
      "ans": 1,
      "exp": "Distance between centres d = 9 + 4 = 13. Direct common tangent = √(d² − (r₁ − r₂)²) = √(169 − 25) = 12. Shortcut for touching circles: 2√(r₁r₂) = 2√36 = 12. Trap: 13 is the distance between centres; using (r₁ + r₂) in the formula gives 0 (that is the transverse tangent)."
     },
     {
      "id": "l12_QA_5",
      "type": "tita",
      "text": "Each interior angle of a regular polygon is 156°. How many diagonals does the polygon have?",
      "ans": "90",
      "exp": "Exterior angle = 180° − 156° = 24°, so n = 360/24 = 15. Diagonals = n(n − 3)/2 = 15 × 12/2 = 90. Trap: using C(15,2) = 105 counts the 15 sides too."
     }
    ]
   },
   {
    "title": "Count, Choose & Chance",
    "mins": 14,
    "qs": [
     {
      "id": "l13_QA_1",
      "type": "tita",
      "text": "In how many distinct ways can the letters of the word BANANA be arranged so that the two N's are never next to each other?",
      "ans": "40",
      "exp": "Gap method: arrange B, A, A, A first: 4!/3! = 4 ways. This creates 5 gaps; choose 2 of them for the identical N's: C(5,2) = 10. Total = 4 × 10 = 40. (Check: all arrangements 60, with NN together 20 → 60 − 20 = 40.) Trap: forgetting the A's are identical and using 4! = 24 gives 240."
     },
     {
      "id": "l13_QA_2",
      "type": "mcq",
      "text": "A committee of 5 is to be chosen from 6 men and 4 women. In how many ways can it be done if the committee must have at least 2 women?",
      "opts": [
       "120",
       "186",
       "246",
       "252"
      ],
      "ans": 1,
      "exp": "Complement: total C(10,5) = 252; remove 0 women: C(6,5) = 6; remove exactly 1 woman: 4 × C(6,4) = 60. Answer = 252 − 66 = 186. (Direct: 2W 120 + 3W 60 + 4W 6 = 186.) Traps: 120 counts only 'exactly 2'; 246 removes only the all-men case."
     },
     {
      "id": "l13_QA_3",
      "type": "mcq",
      "text": "Three fair dice are rolled. What is the probability that the three numbers shown, read in order (first, second, third die), are strictly increasing?",
      "opts": [
       "1/6",
       "5/54",
       "7/27",
       "5/9"
      ],
      "ans": 1,
      "exp": "Any 3 distinct numbers can be arranged in strictly increasing order in exactly one way, so favourable = C(6,3) = 20. P = 20/216 = 5/54. Trap: 1/6 = 1/3! ignores the cases with repeated numbers; 7/27 = 56/216 is for non-decreasing (repeats allowed)."
     },
     {
      "id": "l13_QA_4",
      "type": "tita",
      "text": "How many ordered triples of non-negative integers (a, b, c) satisfy a + b + c = 10 with each of a, b, c at most 5?",
      "ans": "21",
      "exp": "Without the cap: C(12,2) = 66. If a ≥ 6, put a = 6 + a': a' + b + c = 4 → C(6,2) = 15; same for b and c → 45. Two variables can't both be ≥ 6 (sum would exceed 10). Answer = 66 − 45 = 21. Trap: forgetting the cap gives 66; using 'positive' formula C(9,2) = 36 is wrong since 0 is allowed."
     },
     {
      "id": "l13_QA_5",
      "type": "tita",
      "text": "Six friends, including Asha and Bina, sit around a circular table. In how many arrangements are Asha and Bina NOT seated next to each other?",
      "ans": "72",
      "exp": "Circular arrangements of 6 = (6 − 1)! = 120. Asha and Bina together: treat as one unit → (5 − 1)! × 2 = 48. Not together = 120 − 48 = 72. Trap: using linear 6! = 720 or forgetting the ×2 (gives 96)."
     }
    ]
   },
   {
    "title": "Mod Squad & Function Fun",
    "mins": 14,
    "qs": [
     {
      "id": "l14_QA_1",
      "type": "tita",
      "text": "How many integers x satisfy |x − 3| + |x + 2| ≤ 11?",
      "ans": "12",
      "exp": "|x − 3| + |x + 2| is the sum of distances from 3 and −2; it equals 5 for −2 ≤ x ≤ 3 and grows by 2 per unit outside. x > 3: 2x − 1 ≤ 11 → x ≤ 6. x < −2: 1 − 2x ≤ 11 → x ≥ −5. So x = −5 … 6 → 12 integers. Trap: counting only 6 (one side) or 11 (off-by-one)."
     },
     {
      "id": "l14_QA_2",
      "type": "mcq",
      "text": "A function f satisfies f(x) + 2f(1/x) = 3x for every non-zero real x. What is f(2)?",
      "opts": [
       "1",
       "−1",
       "3/2",
       "−3/2"
      ],
      "ans": 1,
      "exp": "Put x = 2: f(2) + 2f(1/2) = 6. Put x = 1/2: f(1/2) + 2f(2) = 3/2. Multiply the second by 2: 2f(1/2) + 4f(2) = 3. Subtract from the first: −3f(2) = 3 → f(2) = −1. Trap: sign slip when subtracting gives +1."
     },
     {
      "id": "l14_QA_3",
      "type": "tita",
      "text": "How many integer values of x satisfy x² − 7|x| + 10 < 0?",
      "ans": "4",
      "exp": "Since x² = |x|², this is (|x| − 2)(|x| − 5) < 0 → 2 < |x| < 5 → |x| = 3 or 4 → x = ±3, ±4. That is 4 integers. Trap: forgetting negative values gives 2; using ≤ would add ±2, ±5."
     },
     {
      "id": "l14_QA_4",
      "type": "mcq",
      "text": "What is the minimum value of |x − 1| + |x − 2| + |x − 3| + … + |x − 10| over all real x?",
      "opts": [
       "20",
       "25",
       "27.5",
       "30"
      ],
      "ans": 1,
      "exp": "A sum of distances is minimised at the median of the points: any x in [5, 6]. At x = 5: (4+3+2+1+0) + (1+2+3+4+5) = 10 + 15 = 25. Trap: plugging x = 1 or 10 (endpoints) gives 45; arithmetic slips give 20 or 30."
     },
     {
      "id": "l14_QA_5",
      "type": "tita",
      "text": "Let f(x) = max(x², 4 − 3x) for all real x. What is the minimum value of f(x)?",
      "ans": "1",
      "exp": "x² = 4 − 3x → x² + 3x − 4 = 0 → x = 1 or x = −4. Between −4 and 1 the line 4 − 3x is on top and decreases to 1 at x = 1; for x > 1, x² > 1; for x < −4, x² > 16. So the minimum is 1, at x = 1. Trap: answering 0 (min of x² alone) — but at x = 0, f = max(0, 4) = 4."
     }
    ]
   },
   {
    "title": "Number Ninja",
    "mins": 14,
    "qs": [
     {
      "id": "l15_QA_1",
      "type": "tita",
      "text": "How many even factors does 2160 have?",
      "ans": "32",
      "exp": "2160 = 2⁴ × 3³ × 5. Total factors = 5 × 4 × 2 = 40. An even factor needs at least one 2: choices for the power of 2 are 1–4 (4 ways) → 4 × 4 × 2 = 32. Trap: 40 is all factors; 8 is the odd factors (40 − 32)."
     },
     {
      "id": "l15_QA_2",
      "type": "mcq",
      "text": "What is the remainder when 7¹⁰⁰ is divided by 13?",
      "opts": [
       "1",
       "3",
       "9",
       "10"
      ],
      "ans": 2,
      "exp": "Fermat: 7¹² ≡ 1 (mod 13). 100 = 12 × 8 + 4, so 7¹⁰⁰ ≡ 7⁴. 7² = 49 ≡ 10 ≡ −3, so 7⁴ ≡ 9. Remainder 9. Traps: assuming 7¹⁰⁰ ≡ 1 (100 isn't a multiple of 12); stopping at 7² gives 10; 3 is from sign slip (−3)."
     },
     {
      "id": "l15_QA_3",
      "type": "tita",
      "text": "A three-digit number N is written as 'abc' in base 7 and as 'cba' in base 9 (a and c are non-zero). Find N in decimal.",
      "ans": "248",
      "exp": "49a + 7b + c = 81c + 9b + a → 48a = 2b + 80c → 24a = b + 40c. Digits must be base-7 valid (0–6). b = 24a − 40c must be in 0–6: only a = 5, c = 3 gives b = 0. N = 5×49 + 0 + 3 = 248 (check: 3×81 + 0 + 5 = 248). Trap: forgetting digits must be < 7 lets in extra 'solutions'."
     },
     {
      "id": "l15_QA_4",
      "type": "mcq",
      "text": "What is the highest power of 12 that divides 30! ?",
      "opts": [
       "10",
       "13",
       "14",
       "26"
      ],
      "ans": 1,
      "exp": "12 = 2² × 3. Power of 2 in 30!: 15 + 7 + 3 + 1 = 26 → 26/2 = 13 copies of 2². Power of 3: 10 + 3 + 1 = 14. The limiting factor is min(13, 14) = 13. Traps: 14 uses only the 3s; 26 forgets that 12 needs two 2s."
     },
     {
      "id": "l15_QA_5",
      "type": "tita",
      "text": "Find the smallest positive integer that leaves remainder 2 when divided by each of 3, 4, 5 and 6, and is exactly divisible by 7.",
      "ans": "182",
      "exp": "LCM(3,4,5,6) = 60, so N = 60k + 2. Need 60k + 2 ≡ 0 (mod 7): 60 ≡ 4, so 4k ≡ −2 ≡ 5 (mod 7) → k ≡ 3 (since 4×3 = 12 ≡ 5). N = 182 = 7 × 26. Trap: using LCM = 360 (product) or stopping at 62/122 without checking 7."
     }
    ]
   },
   {
    "title": "Track Kings & Leaky Vessels",
    "mins": 15,
    "qs": [
     {
      "id": "l16_QA_1",
      "type": "tita",
      "text": "A circular track is 600 m long. A and B start together from point P and run clockwise at 10 m/s and 16 m/s; at the same instant C starts from P running anticlockwise at 20 m/s. In the first 30 minutes (excluding the start, including the instant t = 30 min), how many times are all three runners at the same point of the track?",
      "ans": "18",
      "exp": "A and B together: relative speed 6 m/s, so every 600/6 = 100 s. A and C together: relative speed 30 m/s, so every 20 s. B and C: every 600/36 = 50/3 s. All three together = common multiple of 100, 20 and 50/3 = every 100 s. In 1800 s: 1800/100 = 18. Trap: computing when all three are back at P (LCM of lap times 60, 37.5, 30 = 300 s) gives 6 - but they can coincide anywhere, not only at P."
     },
     {
      "id": "l16_QA_2",
      "type": "mcq",
      "text": "A, B and C can each finish a job alone in 12, 18 and 36 days. They work in pairs on a rotating schedule: Day 1 A+B, Day 2 B+C, Day 3 C+A, then repeat. From Day 4 onwards B works at only half his efficiency. On which day is the job completed?",
      "opts": [
       "Day 9",
       "Day 10",
       "Day 10½",
       "Day 11"
      ],
      "ans": 1,
      "exp": "Take work = 36 units: A=3, B=2, C=1 per day. Days 1-3: 5+3+4 = 12. From Day 4, B=1: cycle = (3+1)+(1+1)+(1+3) = 10 per 3 days. Remaining 24: Days 4-9 give 20, leaving 4; Day 10 is A+B = 3+1 = 4, so it finishes exactly at the end of Day 10. Trap: ignoring the drop gives 12 per cycle, so 9 days; using 10 units per cycle from Day 1 gives about 10½-11."
     },
     {
      "id": "l16_QA_3",
      "type": "tita",
      "text": "A vessel is full of pure milk. 10 litres are taken out and replaced with water. Then 15 litres of the mixture are taken out and replaced with water. Now milk : water = 5 : 3. What is the capacity of the vessel (in litres)?",
      "ans": "60",
      "exp": "Milk left as a fraction = (1 − 10/V)(1 − 15/V) = 5/8. So 8(V − 10)(V − 15) = 5V², which gives 3V² − 200V + 1200 = 0, so V = 60 or V = 20/3. Trap: V = 20/3 is a root of the equation but you cannot remove 10 L from a 6.67 L vessel. Check 60: (5/6)(3/4) = 5/8. Answer 60."
     },
     {
      "id": "l16_QA_4",
      "type": "mcq",
      "text": "A man walks up an escalator that is moving upwards. Walking at his normal speed he takes 20 steps to reach the top. When he walks at 3 times that speed, he takes 30 steps. How many steps are visible on the escalator when it is stationary?",
      "opts": [
       "36",
       "40",
       "45",
       "50"
      ],
      "ans": 1,
      "exp": "Let walking speed = v steps per unit time and escalator speed = e, with N visible steps. At speed v: time = 20/v, so N = 20 + 20e/v. At speed 3v: time = 30/(3v) = 10/v, so N = 30 + 10e/v. Equating gives 10e/v = 10, so e/v = 1 and N = 40. Trap: the faster run takes more steps but less time; people who treat the times as equal get a wrong N."
     },
     {
      "id": "l16_QA_5",
      "type": "tita",
      "text": "Two trains start at the same time from stations P and Q towards each other. After they cross, they take 9 hours and 16 hours respectively to reach Q and P. If the faster train runs at 60 km/h, what is the distance PQ in km?",
      "ans": "1260",
      "exp": "Speed ratio = √(16/9) = 4/3, so the speeds are 60 and 45. Time to meet t = √(9 × 16) = 12 h. PQ = (60 + 45) × 12 = 1260. Trap: using the ratio 16/9 without the square root, or taking the slower train as 60."
     }
    ]
   },
   {
    "title": "Roots, Logs & Telescopes",
    "mins": 15,
    "qs": [
     {
      "id": "l17_QA_1",
      "type": "tita",
      "text": "For how many integer values of k in the range −10 ≤ k ≤ 10 does the equation x² + 2(k − 1)x + k + 5 = 0 have at least one positive real root?",
      "ans": "10",
      "exp": "Discriminant ≥ 0: (k − 1)² − (k + 5) ≥ 0, so k² − 3k − 4 ≥ 0, so k ≤ −1 or k ≥ 4. If the product k + 5 < 0, one root is positive (k < −5). If k = −5, the roots are 0 and 12. If k + 5 > 0, both roots have the same sign and we need the sum −2(k − 1) > 0, so k < 1; with the discriminant this gives −5 < k ≤ −1. Together: every k ≤ −1, which is k = −10 to −1, so 10 values. Trap: also counting k ≥ 4 (real roots, but both negative) gives 17."
     },
     {
      "id": "l17_QA_2",
      "type": "mcq",
      "text": "Find the value of 1/(1·2·3) + 1/(2·3·4) + 1/(3·4·5) + … + 1/(20·21·22).",
      "opts": [
       "115/462",
       "1/4",
       "230/231",
       "229/924"
      ],
      "ans": 0,
      "exp": "1/(n(n+1)(n+2)) = ½[1/(n(n+1)) − 1/((n+1)(n+2))], so the sum telescopes to ½[1/2 − 1/(21·22)] = ½[1/2 − 1/462] = ½ × 230/462 = 115/462. Trap: forgetting the factor ½ gives 230/462. Taking the infinite-sum limit gives 1/4."
     },
     {
      "id": "l17_QA_3",
      "type": "tita",
      "text": "Positive reals x, y, z satisfy: log₂x + log₄y + log₄z = 2, log₃y + log₉z + log₉x = 2, and log₄z + log₁₆x + log₁₆y = 2. Find the value of 3(x + z) − 8y.",
      "ans": "7",
      "exp": "Rewrite each in one base: log₂(x√(yz)) = 2 gives x²yz = 16. Similarly y²zx = 81 and z²xy = 256. Multiply: (xyz)⁴ = 16·81·256, so xyz = 2·3·4 = 24. Then x = 16/24 = 2/3, y = 81/24 = 27/8, z = 256/24 = 32/3. So 3(x + z) − 8y = 3(34/3) − 27 = 7. Trap: solving for xyz alone and stopping, or mixing up which base belongs to which equation."
     },
     {
      "id": "l17_QA_4",
      "type": "mcq",
      "text": "For which values of a does exactly one root of x² − 2(a + 1)x + a² + 2a − 3 = 0 lie strictly between 0 and 4?",
      "opts": [
       "(−3, 5)",
       "(−3, 1) ∪ (1, 5)",
       "(−1, 3)",
       "[−3, 5] excluding a = 1"
      ],
      "ans": 1,
      "exp": "Discriminant/4 = (a + 1)² − (a² + 2a − 3) = 4, so the roots are a + 3 and a − 1. They differ by exactly 4, so both can never lie inside the open interval (0, 4). Exactly one lies inside when a − 1 ∈ (0, 4), so a ∈ (1, 5), or when a + 3 ∈ (0, 4), so a ∈ (−3, 1). Trap: at a = 1 the roots are 0 and 4, and neither is strictly inside, so a = 1 must be excluded. Answer: (−3, 1) ∪ (1, 5)."
     },
     {
      "id": "l17_QA_5",
      "type": "tita",
      "text": "How many terms are common to the arithmetic progressions 3, 7, 11, …, 407 and 2, 9, 16, …, 709?",
      "ans": "14",
      "exp": "Common terms satisfy x ≡ 3 (mod 4) and x ≡ 2 (mod 7). The first common term is 23, and the common difference is LCM(4, 7) = 28. The terms must be ≤ 407 (the smaller last term): 23 + 28(n − 1) ≤ 407 gives n − 1 ≤ 13.7, so n = 14. Trap: using 709 as the bound, or starting from 3 or 2 instead of 23."
     }
    ]
   },
   {
    "title": "Tangents, Cones & Diamonds",
    "mins": 15,
    "qs": [
     {
      "id": "l18_QA_1",
      "type": "mcq",
      "text": "Two circles of radii 9 cm and 4 cm touch each other externally, and both touch a straight line L. A third circle, lying in the gap between the two circles and L, touches both circles and the line L. What is its radius?",
      "opts": [
       "36/25 cm",
       "6/5 cm",
       "36/13 cm",
       "1 cm"
      ],
      "ans": 0,
      "exp": "For circles of radii a and b touching each other and a common line, the tangent points are 2√(ab) apart. For the small circle r: 2√(9r) + 2√(4r) = 2√36 = 12, so 6√r + 4√r = 12, √r = 6/5, r = 36/25. (Shortcut: 1/√r = 1/√9 + 1/√4 = 5/6.) Trap: stopping at √r = 6/5 and marking 6/5."
     },
     {
      "id": "l18_QA_2",
      "type": "tita",
      "text": "A right circular cone has base radius 12 cm and height 16 cm. A sphere is placed inside so that it touches the base and the curved surface. A second, smaller sphere is placed above it, touching the first sphere and the curved surface. Find the radius of the smaller sphere in millimetres.",
      "ans": "15",
      "exp": "The vertical cross-section is a triangle with sides 20, 20, 24, area 192 and semi-perimeter 32, so the first sphere's radius = 192/32 = 6 cm. Its top is at height 12, leaving a similar cone of height 16 − 12 = 4, scale factor 4/16 = 1/4. The small sphere is the inscribed sphere of that cone: 6/4 = 1.5 cm = 15 mm. Trap: using height ratio with the sphere's centre (16 − 6)/16 instead of the top tangent plane."
     },
     {
      "id": "l18_QA_3",
      "type": "tita",
      "text": "Find the area (in square units) of the region in the xy-plane that satisfies both |x − 2| + |y + 1| ≤ 6 and xy ≥ 0.",
      "ans": "32",
      "exp": "The first condition is a square (diamond) with vertices (8, −1), (2, 5), (−4, −1), (2, −7). xy ≥ 0 keeps quadrants I and III. Quadrant I: polygon (0,0), (7,0), (2,5), (0,3), area 41/2 by the shoelace formula. Quadrant III: polygon (0,0), (−3,0), (−4,−1), (0,−5), area 23/2. Total = 41/2 + 23/2 = 32. Trap: assuming symmetry about the origin and doubling one quadrant; the diamond is centred at (2, −1), not at the origin."
     },
     {
      "id": "l18_QA_4",
      "type": "tita",
      "text": "A circle has centre O and radius 9 cm. P is a point with OP = 15 cm, and PA and PB are the tangents from P. The tangent to the circle at the point of the minor arc AB nearest to P meets PA at X and PB at Y. Find XY in cm.",
      "ans": "9",
      "exp": "PA = √(15² − 9²) = 12, and the half-angle θ at P has tan θ = 9/12 = 3/4. The nearest point Q is on PO with PQ = 15 − 9 = 6, and XY is perpendicular to PO at Q. So XY = 2 × 6 × tan θ = 2 × 6 × 3/4 = 9. Trap: the well-known result 'perimeter of PXY = 2·PA = 24' answers a different question; and XY is not PA/2."
     },
     {
      "id": "l18_QA_5",
      "type": "mcq",
      "text": "Each corner of a cube of side 4 cm is sliced off by a plane passing through the midpoints of the three edges meeting at that corner. What is the ratio of the total surface area of the resulting solid to that of the original cube?",
      "opts": [
       "5/6",
       "(3 + √3)/6",
       "(2 + √3)/4",
       "(3 + √3)/12"
      ],
      "ans": 1,
      "exp": "Each face of the cube becomes a square with its 4 corner triangles removed: 16 − 4 × 2 = 8, so 6 faces give 48. Each of the 8 cuts adds an equilateral triangle of side 2√2 with area (√3/4) × 8 = 2√3, giving 16√3 in total. Ratio = (48 + 16√3)/96 = (3 + √3)/6. Trap: 5/6 is the volume ratio (64 − 8 × 4/3 = 160/3), not the surface-area ratio."
     }
    ]
   },
   {
    "title": "Remainders & Rolling Dice",
    "mins": 15,
    "qs": [
     {
      "id": "l19_QA_1",
      "type": "tita",
      "text": "Find the remainder when 2²⁰²⁶ is divided by 1000.",
      "ans": "864",
      "exp": "Split 1000 = 8 × 125. Mod 8: 2²⁰²⁶ ≡ 0. Mod 125: φ(125) = 100, so 2²⁰²⁶ ≡ 2²⁶. Since 2⁷ = 128 ≡ 3, 2²⁶ = (2⁷)³ × 2⁵ ≡ 27 × 32 = 864 ≡ 114 (mod 125). Now find the number ≡ 114 (mod 125) that is divisible by 8: from 114, 239, 364, 489, 614, 739, 864, 989 it is 864. Trap: applying Euler with φ(1000) = 400 directly fails because 2 and 1000 are not coprime."
     },
     {
      "id": "l19_QA_2",
      "type": "mcq",
      "text": "How many 5-digit natural numbers have a digit sum of exactly 10?",
      "opts": [
       "715",
       "714",
       "705",
       "1001"
      ],
      "ans": 1,
      "exp": "Let the first digit be d₁ = 1 + a with a ≥ 0, so a + d₂ + d₃ + d₄ + d₅ = 9: C(13, 4) = 715 solutions. No digit d₂ to d₅ can exceed 9, but a = 9 would make d₁ = 10, which is not a digit. Remove that 1 case: 714. Trap: 715 forgets the cap on the leading digit. 1001 = C(14, 4) allows a leading zero."
     },
     {
      "id": "l19_QA_3",
      "type": "tita",
      "text": "In how many ways can 8 identical balls be placed in 4 distinct boxes so that no box gets more than 3 balls? (Boxes may be empty.)",
      "ans": "31",
      "exp": "Without the cap: C(11, 3) = 165. Subtract cases where some box has ≥ 4: 4 × C(7, 3) = 140. Add back cases where two boxes have ≥ 4 (exactly 4 each): C(4, 2) × 1 = 6. Total = 165 − 140 + 6 = 31. Trap: forgetting the add-back step gives 25."
     },
     {
      "id": "l19_QA_4",
      "type": "mcq",
      "text": "A, B and C take turns rolling a fair die in the order A, B, C, A, B, C, …. The first person to roll a 6 wins. What is the probability that C wins?",
      "opts": [
       "1/3",
       "30/91",
       "25/91",
       "36/91"
      ],
      "ans": 2,
      "exp": "C wins on the first round with probability (5/6)(5/6)(1/6) = 25/216. Each full round with no six has probability (5/6)³ = 125/216, so P(C) = (25/216)/(1 − 125/216) = 25/91. (A = 36/91, B = 30/91.) Trap: assuming fairness gives 1/3; 36/91 is A's chance."
     },
     {
      "id": "l19_QA_5",
      "type": "tita",
      "text": "What is the largest integer n such that 12ⁿ divides 50! ?",
      "ans": "22",
      "exp": "12ⁿ = 2²ⁿ × 3ⁿ. Power of 2 in 50!: 25 + 12 + 6 + 3 + 1 = 47, so pairs of 2s allow n ≤ 23. Power of 3: 16 + 5 + 1 = 22, so n ≤ 22. The binding factor is 3, so n = 22. Trap: assuming the larger prime power or the factor 2 limits n, which gives 23."
     }
    ]
   },
   {
    "title": "CAT Boss: The 99%ile Gate",
    "mins": 15,
    "qs": [
     {
      "id": "l20_QA_1",
      "type": "tita",
      "text": "How many ordered pairs of integers (x, y) satisfy x² − y² = 2025?",
      "ans": "30",
      "exp": "(x − y)(x + y) = 2025 = 3⁴ × 5², which is odd, so every factor pair has the same parity and gives an integer solution. Positive divisors: 5 × 3 = 15, so 15 ordered factor pairs (d, 2025/d). Negative pairs double this to 30. (d = 45 gives y = 0, which is still counted once in each sign.) Trap: answering 15 (positive factors only) or 7 (positive x, y with y > 0)."
     },
     {
      "id": "l20_QA_2",
      "type": "mcq",
      "text": "In triangle ABC, AB = 13, BC = 14 and CA = 15. What is the distance between its incentre and its circumcentre?",
      "opts": [
       "√65/8",
       "√65/4",
       "65/64",
       "1/2"
      ],
      "ans": 0,
      "exp": "Area = 84 (Heron, s = 21), so r = 84/21 = 4 and R = abc/(4 × Area) = 2730/336 = 65/8. Euler's formula: OI² = R² − 2Rr = 4225/64 − 65 = 65/64, so OI = √65/8. Trap: 65/64 is OI², not OI. Using R² − Rr gives other wrong values."
     },
     {
      "id": "l20_QA_3",
      "type": "tita",
      "text": "Pipes A and B can fill a tank in 20 and 30 minutes, and pipe C can empty the full tank in 15 minutes. Starting with an empty tank, the pipes are opened one at a time for 1 minute each in the order A, B, C, A, B, C, …. After how many minutes is the tank full for the first time?",
      "ans": "167",
      "exp": "Take capacity = 60 units: A = +3, B = +2, C = −4 per minute. Each 3-minute cycle adds a net 1, but within a cycle the level rises by 5 before C runs. The tank fills during a cycle once the start level is ≥ 55. That is after 55 cycles = 165 minutes (level 55). Then A gives 58 at 166 minutes and B gives 60 at 167 minutes. Trap: 60 cycles × 3 = 180 minutes ignores the peak inside a cycle."
     },
     {
      "id": "l20_QA_4",
      "type": "mcq",
      "text": "x, y, z are positive reals with x + y + z = 12. What is the maximum value of x·y²·z³?",
      "opts": [
       "4096",
       "5184",
       "6912",
       "8192"
      ],
      "ans": 2,
      "exp": "Weighted AM-GM: split the sum into x, y/2, y/2, z/3, z/3, z/3 (6 parts summing to 12, so each is 2 at the maximum). This gives x = 2, y = 4, z = 6, and the maximum = 2 × 16 × 216 = 6912. Trap: taking x = y = z = 4 gives 4096. Getting the weights on the wrong variables gives other options."
     },
     {
      "id": "l20_QA_5",
      "type": "tita",
      "text": "How many 7-digit numbers that use each of the digits 1, 2, 3, 4, 5, 6, 7 exactly once are divisible by 11?",
      "ans": "576",
      "exp": "Let S be the sum of the 4 odd-position digits; the even positions sum to 28 − S. Divisibility by 11 needs 2S − 28 ≡ 0 (mod 11), so S = 14 (S = 25 > 22 and S = 3 are impossible). The 4-element subsets of {1,…,7} with sum 14 are {1,2,4,7}, {1,2,5,6}, {1,3,4,6}, {2,3,4,5}: 4 subsets. Each gives 4! × 3! = 144 arrangements, so 4 × 144 = 576. Trap: forgetting to arrange the 3 even-position digits (×3!) gives 4 × 24 = 96; also, a difference of ±22 is impossible here, so no extra cases."
     }
    ]
   }
  ]
 },
 "sets": {
  "c_v4": "Most people assume that memory works like a recording: an event happens, the brain stores it, and remembering means playing it back. Decades of research suggest otherwise. Each time we recall an event, we rebuild it from fragments, filling gaps with expectation and present knowledge. This is why vivid memories can be confidently wrong, and why eyewitnesses who are entirely sincere may still mislead a court. Memory, in this view, is less an archive than a reconstruction — useful for navigating the future, but unreliable as a record of the past.",
  "c_v5": "When a library in a small town replaced its fines for overdue books with a 'read-to-return' programme — children could clear their fines by reading in the library — staff expected chaos. Instead, returns improved and the number of child members doubled within a year. Librarians concluded that the fines had been doing quiet damage: families who could not pay simply stopped coming, so the fine punished poverty more than lateness.",
  "c_d4": "Marks of four students in three subjects (out of 100):\nAsha — Maths 80, Science 70, English 90\nBala — Maths 60, Science 85, English 75\nChitra — Maths 90, Science 60, English 80\nDev — Maths 70, Science 75, English 65",
  "c_d5": "Six chairs, numbered 1 to 6 clockwise, stand equally spaced around a round table. Six friends — A, B, C, D, E and F — sit one per chair.\n• A sits in chair 1.\n• D sits directly opposite A.\n• C sits next to D.\n• B sits directly opposite C.\n• E does not sit next to A.\n• B's chair number is smaller than C's.",
  "c_v6": "For most of the nineteenth century, a book was a piece of furniture as much as a vessel of thought. Bound in leather and priced beyond a clerk's weekly wage, it announced the education — or at least the ambition — of the household that owned it. The arrival of the cheap paperback in the 1930s is usually told as a story of democratisation: suddenly a factory worker could carry Homer in a coat pocket. That story is true, but incomplete. Publishers did not lower prices out of idealism; they had discovered that volume, not margin, paid the bills, and they chose their titles accordingly. Critics at the time warned that the new format would cheapen literature, that readers who paid little would value little. What they failed to anticipate was that a book read on a crowded train might matter more to its reader than one displayed, unopened, behind glass. The paperback did not lower the worth of reading; it moved reading from the shelf into ordinary life.",
  "c_d6": "A college surveyed 100 students about three apps: Instagram (I), YouTube (Y) and Spotify (S). Every student uses at least one of the three.\n• 58 students use Instagram, 52 use YouTube and 40 use Spotify.\n• 10 students use all three apps.\n• 25 students use both Instagram and YouTube (this count includes those who use all three).\n• 18 students use both Instagram and Spotify (this count includes those who use all three).",
  "c_dl7": "Five friends - Asha, Bharat, Chitra, Dev and Esha - each have a different profession among Doctor, Engineer, Lawyer, Pilot and Teacher, and each lives in a different city among Chennai, Delhi, Kolkata, Mumbai and Pune. The following is known:\n• 1. The Doctor lives in Kolkata.\n• 2. Asha is neither the Doctor nor the Engineer, and she lives in neither Mumbai nor Delhi.\n• 3. Dev lives in Chennai.\n• 4. Esha is not the Lawyer and does not live in Pune.\n• 5. The Teacher lives in neither Mumbai nor Pune.\n• 6. Bharat lives in neither Delhi nor Mumbai.\n• 7. The Engineer lives in Mumbai.\n• 8. The Pilot lives in neither Chennai nor Pune.\n• 9. Chitra does not live in Mumbai.",
  "c_dl8": "A restaurant chain runs five outlets. Table 1 gives each outlet's total revenue (in Rs lakh) for the four quarters of a year. Table 2 gives the percentage of that revenue which came from online orders; the rest came from offline (dine-in/takeaway) orders.\n\nTable 1: Total revenue (Rs lakh)\nOutlet | Q1 | Q2 | Q3 | Q4\nAlpha | 40 | 44 | 50 | 60\nBeta | 50 | 45 | 54 | 63\nGamma | 32 | 40 | 44 | 48\nDelta | 60 | 64 | 63 | 72\nOmega | 25 | 30 | 36 | 45\n\nTable 2: Online share of revenue\nOutlet | Q1 | Q2 | Q3 | Q4\nAlpha | 25% | 25% | 30% | 35%\nBeta | 40% | 40% | 50% | 40%\nGamma | 50% | 45% | 50% | 50%\nDelta | 20% | 25% | 30% | 25%\nOmega | 60% | 60% | 50% | 40%\n\nNote: 'Growth' means percentage change over the stated base period.",
  "c_dl9": "Seven workshops - A, B, C, D, E, F and G - are to be held on the seven days of one week, Monday to Sunday, exactly one workshop per day. The schedule must satisfy all of the following:\n• C is held on a later day than A, and F is held on a later day than C.\n• Exactly two workshops are held between B and E.\n• A and E are held on consecutive days (in either order).\n• B and C are held on consecutive days (in either order).\n• If D is held on Monday, then G is held on Sunday.\n• G is held on neither Saturday nor Sunday.\n• F is not held on Sunday.\n• If B is held on an earlier day than G, then D is held on a later day than G.",
  "c_dl10": "Five teams - P, Q, R, S and T - played a football league in which every team played every other team exactly once. A win earned 3 points, a draw earned 1 point to each team, and a loss earned 0 points. The following facts are known about the final standings:\n• P finished with 10 points and did not lose any match.\n• Q finished with exactly 7 points.\n• T finished with exactly 1 point, and that point came from its match against R.\n• Every team drew at least one match.\n• S finished with strictly more points than R.\n• R won exactly one match.",
  "c_vr7": "Boredom has long had a poor reputation. Moralists treated it as a symptom of idleness, and psychologists, for most of the twentieth century, filed it alongside fatigue as a state to be minimised. Yet a growing body of research suggests that this view mistakes the signal for the problem. Boredom, on this account, is less a deficiency of stimulation than a judgement: the mind's verdict that what it is currently doing is not worth doing. Seen this way, boredom resembles pain. Pain is unpleasant precisely because it must be; an organism that felt nothing when its hand touched a flame would not keep its hand for long. Similarly, a mind that never grew restless during a pointless task would have no reason to abandon it for a better one.\n\nThis reframing has an uncomfortable implication for how we now manage boredom. The smartphone offers an escape so immediate that the signal is silenced before it can be read. The person waiting in a queue who reaches for a feed does not ask what the restlessness is pointing toward; the itch is scratched, and the question disappears. Some researchers report that people made to sit with a dull task for a few minutes subsequently generate more varied ideas than those who are not, though the effect is modest and its durability unclear. The case, then, is not that boredom is pleasant or that it should be sought out for its own sake. It is that an alarm we continually switch off cannot tell us anything, and that a culture which treats every idle minute as an emergency may be losing access to one of the few internal instruments that tell it when to change course.",
  "c_vr8": "When a government wants hospitals to treat patients faster, the obvious move is to measure waiting times and reward the hospitals that reduce them. The difficulty is that a measure, once rewarded, ceases to be a neutral window onto performance and becomes a target that institutions learn to hit. Hospitals told to see emergency patients within four hours have, in some documented cases, kept ambulances waiting outside so that the clock would not start, or admitted patients to a ward in name only. None of this requires villainy. Administrators under pressure do what the incentive literally asks, and the literal request is never quite the same as the intention behind it.\n\nThe standard response is to add more measures, on the theory that it is harder to game ten indicators than one. But this often deepens the problem. Each new metric demands staff time to record, and the dashboard grows so crowded that managers attend to whichever numbers are reviewed most often, not those that matter most. What began as an effort to see the institution clearly ends by replacing the institution, in the minds of those who run it, with its own reflection.\n\nNone of this means that measurement should be abandoned. Numbers expose neglect that anecdote would hide, and a hospital that does not count its infections will not notice when they rise. The lesson is narrower: a figure works best as a diagnostic, consulted by people who understand what lies beneath it, and worst as a verdict mechanically attached to rewards. The more distance there is between those who set the numbers and those who know the work, the more likely the numbers are to be performed rather than achieved.",
  "c_vr9": "The claim that reading fiction makes us better people has become something like a professional creed among those who teach literature. It is usually defended on the grounds that novels train us to inhabit other minds, and that this practice, repeated over years, enlarges our capacity for sympathy. Laboratory studies have lent the claim a scientific gloss, reporting that participants who read a short literary story perform slightly better on tests of reading emotions in faces than those who read popular fiction or nothing at all. Yet the findings have proved fragile on replication, and even taken at face value they establish something much narrower than the creed requires: a brief improvement in a perceptual task is not a disposition to act kindly.\n\nThere is, moreover, a difficulty that no experiment can easily remove. People who choose to read serious fiction may already be unusually attentive to others; the habit may be a symptom of sympathy rather than its cause. And the historical record offers little comfort. Some of the most cultivated readers of their age have also been among its most accomplished administrators of cruelty, which suggests that the capacity to imagine another's suffering can coexist with an indifference to relieving it.\n\nNone of this shows that literature is morally inert. It may be that fiction's real contribution lies not in making readers kinder but in making them more precise: better able to distinguish one kind of suffering from another, less content with the stock phrase. That is a smaller claim, and a less flattering one for the profession, but it has the advantage of being something a novel might plausibly do.",
  "c_vr10": "The parable of the overgrazed pasture has done remarkable work for a story with almost no empirical content. In its familiar form, each herder reasons that the gain from adding one more animal accrues to him alone while the cost of the degraded grass is shared by all; each therefore adds animals until the pasture is ruined. The conclusion usually drawn is that shared resources must be either enclosed as private property or placed under the authority of the state. What the parable assumes, without announcing it, is that the herders cannot speak to one another, that they are strangers who meet only through the grass.\n\nField studies of actual commons tell a less tidy story. Fisheries, irrigation systems and grazing lands have been managed collectively for centuries by communities that devised their own rules about who may take what and when, monitored one another, and graduated their penalties so that a first offence drew a reproach rather than expulsion. Such arrangements fail, certainly; but they tend to fail under identifiable conditions: when the group grows too large for members to observe each other, when outsiders can enter freely, or when a distant authority overrides local rules it does not understand.\n\nIt would be a mistake, though, to replace one parable with its mirror image, in which communities are naturally wise and only interference corrupts them. The more defensible conclusion is conditional: the parable describes not the fate of shared resources as such but the fate of shared resources among people who have no means of making and enforcing agreements. That is a real situation, and in a world of global fisheries and a shared atmosphere, perhaps an increasingly common one. But it is a situation, not a law of nature.",
  "c_dl11": "Each of the 100 students of Class XII at Riverdale School was asked whether they belong to the Music club (M), the Dance club (D) and the Drama club (Dr). A student may belong to any number of these three clubs, including none.\n• 25 students belong to none of the three clubs.\n• The Music, Dance and Drama clubs have 40, 37 and 30 members respectively.\n• 24 students belong to exactly two of the three clubs.\n• The number of students who belong to all three clubs is one-sixth of the number who belong to exactly two clubs.\n• The number of students in Music and Dance but not Drama is 2 more than the number in Music and Drama but not Dance.\n• The number of students in Drama only equals the number in Dance and Drama but not Music.",
  "c_dl12": "The table shows the annual sales (in Rs. lakh) of five outlets P, Q, R, S and T of a bakery chain in 2024 and 2025, along with the percentage growth in sales from 2024 to 2025. Some entries are missing (shown as ?).\nOutlet | Sales 2024 | Sales 2025 | Growth (%)\nP | 80 | ? | 25\nQ | ? | 132 | 10\nR | 60 | ? | ?\nS | ? | ? | 10\nT | 40 | ? | ?\nAdditional information:\n• The total sales of all five outlets in 2024 was Rs. 400 lakh.\n• In 2025, the ratio of P's sales to T's sales was 25 : 17.\n• In 2025, R contributed exactly 18% of the total sales of the five outlets.",
  "c_dl13": "Six friends A, B, C, D, E and F live in a six-storey building, one on each floor. The floors are numbered 1 (lowest) to 6 (top). Each of them likes a different colour among Red, Blue, Green, Yellow, White and Black.\n• B lives on an even-numbered floor, somewhere above C.\n• E lives above A, but E does not live on the top floor.\n• If C lives on an odd-numbered floor, then F likes Yellow; otherwise F lives on the floor immediately above D.\n• Exactly one person lives between the person who likes Red and the person who likes Blue. A does not like Blue.\n• The person who likes Black lives on the floor immediately above A.\n• The person who likes White lives on floor 1; this person is none of C, E and F.\n• The person who likes Green lives on some floor below A.\n• The person who likes Yellow lives on the top floor.",
  "c_dl14": "A courier company moves parcels from its hub S to the city T through the cities A, B, C, D and E. The roads (each usable in either direction) and their travel costs (in Rs. hundred) are:\nS–A: 4, S–B: 7, S–C: 9, A–B: 2, A–D: 8, B–C: 3, B–D: 5, B–E: 9, C–E: 4, D–E: 2, D–T: 6, E–T: 5\nNo other roads exist. In addition, every city passed through on the way (other than S and T) charges a halt fee (in Rs. hundred) each time a courier passes through it:\nA: 3, B: 4, C: 1, D: 2, E: 3\n• The cost of a route = sum of the travel costs of the roads used + the halt fees of all intermediate cities.\n• A route from S to T never visits any city more than once.\n• Unless stated otherwise, the fees and costs above apply.",
  "c_dl15": "Four contestants P, Q, R and S took part in the final of a quiz contest. Each contestant faced the same 10 questions and, for each question, either answered it or left it unattempted. A correct answer earned +4 points, a wrong answer earned −1 point, and an unattempted question earned 0.\n• The four final scores were all different, and S topped the contest with 30 points.\n• Q attempted every question and scored 20 points.\n• P left exactly one question unattempted and scored more than Q.\n• The four contestants together gave 26 correct answers.\n• Altogether, 5 questions were left unattempted across the four contestants.\n• R gave fewer wrong answers than each of the other three contestants, but scored less than Q.",
  "c_dl16": "Seven workshops - Analytics (A), Branding (B), Coding (C), Design (D), Ethics (E), Finance (F) and Growth (G) - are held at an incubator on the seven days of one week, Monday to Sunday, exactly one workshop per day. Saturday and Sunday are the weekend days. The schedule obeys all of the following:\n• If C is held on a weekend day, then D is held on Monday.\n• A is held on an earlier day than E, unless F is held on Tuesday.\n• Exactly two workshops are held between D and F.\n• E is held on Monday, Wednesday, Friday or Sunday, unless C is held on Thursday.\n• If B is held on an earlier day than D, then G is held on an earlier day than C.\n• A and C are held on consecutive days only if E is held on Wednesday.\n• C is held on Wednesday, unless G is held on Thursday.\n• E is not held on Sunday.",
  "c_dl17": "A logistics firm has employees in exactly four regions - North, East, South and West. Every employee is either a man or a woman, and every count below is a whole number.\n• North has 25% more employees than East.\n• Women make up 36% of North's employees and 45% of East's employees.\n• The number of women in South equals the number of women in North and East combined; women make up 62.5% of South's employees.\n• West has twice as many men as South, and only 20% of West's employees are women.\n• The firm has fewer than 1,000 employees in all.",
  "c_dl18": "Six teams - A, B, C, D, E and F - played a single round-robin football tournament (each pair met exactly once, 15 matches). A win earned 3 points, a draw 1 point to each side, a loss 0. The following is known about the final standings:\n• A finished with 11 points, B with 9, D with 7 and F with 2.\n• Exactly 4 of the 15 matches ended in draws.\n• A did not lose a single match.\n• C defeated B.\n• E finished with strictly more points than C.",
  "c_dl19": "Five friends - A, B, C, D and E - each own exactly one pet, all different: a Cat, a Dog, a Fish, a Parrot and a Rabbit. Each friend is either a Truth-teller (every statement true) or a Liar (every statement false). Each makes two statements:\n• A: \"B and I are of the same type.\" / \"The Dog owner is a Liar.\"\n• B: \"C owns the Parrot.\" / \"Exactly three of us five are Liars.\"\n• C: \"A does not own the Fish.\" / \"D is a Truth-teller.\"\n• D: \"The Rabbit owner is a Truth-teller.\" / \"A owns the Cat.\"\n• E: \"B owns neither the Dog nor the Rabbit.\" / \"A is a Liar.\"",
  "c_dl20": "Six interns - P, Q, R, S, T and U - must be split across three projects X, Y and Z, exactly two interns per project. The table gives each intern's productivity score on each project; the team score of an allocation is the sum of the six interns' scores on their assigned projects.\nIntern | X | Y | Z\nP | 8 | 6 | 5\nQ | 7 | 9 | 4\nR | 6 | 7 | 9\nS | 9 | 5 | 6\nT | 5 | 8 | 7\nU | 4 | 6 | 8\nThe allocation must satisfy:\n• P and Q cannot be on the same project.\n• R cannot be on Project Z.\n• If S is on Project Z, then T must be on Project X.\n• U and R can be on the same project only if P is on Project Y.\n• If T is on Project Y, then S is not on Project X.",
  "c_vr11": "Boredom has long been treated as a deficiency of the bored: a failure of inner resources, a symptom of a mind too shallow to furnish its own entertainment. The moralists of the eighteenth century scolded it as idleness; their modern descendants medicalise it as an attentional disorder. Both verdicts share an assumption worth questioning: that boredom is a malfunction to be corrected rather than information to be read. If we take the experience on its own terms, it begins to look less like an absence than a judgment. To be bored is to register, before one can articulate why, that a situation offers nothing one has reason to care about. The bored student in a lecture hall is not merely failing to attend; she is assessing the lecture, and her assessment may well be correct.\n\nThis reframing has an uncomfortable implication. If boredom is evaluative, then the industries devoted to abolishing it are not neutral servants of our wellbeing. The endlessly refreshing feed does not answer the question boredom poses (is this worth my life?) so much as prevent it from being asked. It supplies stimulus at a rate calibrated to stay just ahead of the judgment. What disappears is not the tedium but the verdict, and with it the restlessness that once drove people to quit jobs, abandon creeds, or leave towns that had nothing left to teach them.\n\nNone of this means boredom is infallible. Like fear, it can be miscalibrated. The novice pianist bored by scales is not detecting a genuine absence of value; she is mistaking the slowness of a reward for its nonexistence. Some goods disclose themselves only to those who have endured an initial flatness, and a person who obeyed every flicker of tedium would never acquire a demanding skill or finish a difficult book. The point is not that boredom should always be heeded but that it should be interrogated: treated as a claim that may be true or false, rather than a noise to be drowned.\n\nWhat would such interrogation look like? It would require, first, tolerating the state long enough to hear it. One cannot evaluate a judgment one has fled. It would require, second, distinguishing the boredom that says 'this is empty' from the boredom that says 'this is hard and its rewards are deferred.' The two feel alike from inside; they differ in what follows when one persists. The first deepens into a conviction; the second, given time, gives way to absorption. A culture that cannot sit with tedium long enough to tell these apart loses not only its capacity for patience but its capacity for refusal.",
  "c_vr12": "Economies are very good at counting things that are new and very bad at counting things that are kept. A bridge built appears in the national accounts as investment, its contractors' wages as income, its steel as output. A bridge maintained (repainted, its bearings replaced, its joints resealed) appears, if at all, as a cost to be minimised. The asymmetry is not a mere accounting quirk. It shapes what politicians promise, what engineers are rewarded for, and what citizens notice. No minister cuts a ribbon on a resurfaced road.\n\nThe bias toward novelty is reinforced by the peculiar invisibility of success. A maintenance budget that works produces nothing to look at: the absence of collapse. Its achievement is counterfactual, and counterfactuals do not win elections. Deferred maintenance, by contrast, produces no immediate cost either; its bill arrives years later, often to a different administration, and is then blamed on age or bad luck rather than on the choice that caused it. The result is a systematic transfer of costs from the present to the future, conducted without anyone deciding to make it.\n\nEconomists have a vocabulary for this (depreciation, the consumption of capital), but the vocabulary tends to be applied to firms rather than to the public realm, and to physical stock rather than to institutions. Yet institutions also depreciate. A regulatory agency whose experienced staff retire without successors, a court whose procedures accrete exceptions until no one can explain them, a university whose curriculum is extended every year and pruned never: these are cases of deferred maintenance as surely as a crumbling viaduct, and they are harder to see, because there is no rust.\n\nIt would be too simple to conclude that we should spend less on the new and more on the old. Some things ought to be allowed to decay; maintenance can become a way of embalming arrangements that have outlived their purpose, and a society that only repaired would never discover anything better. The deeper problem is that our instruments of measurement make the choice for us. Because building is legible and upkeep is not, the decision between them is rarely posed as a decision at all. To make it deliberately, we would first need ways of seeing what endures: of recording, alongside what a society has made, what it has managed to keep.",
  "c_vr13": "The queue is among the most underrated of social institutions. It requires no authority to enforce it, no written rules, and no shared language; strangers who will never meet again sustain it through nothing more than mutual watchfulness and a vague sense of what is owed. Sociologists who have studied queues report that violations are punished less by the person directly behind the intruder than by those further back, who have less to lose and more moral indignation to spend. The queue, in this sense, is a miniature commonwealth, policed by its members on behalf of a principle (first come, first served) that none of them invented.\n\nBut the principle is less innocent than it looks. First come, first served is fair only on the assumption that everyone's time is equally available and equally valuable, and that assumption is false. The retiree and the shift worker do not pay the same price for an hour in line; the parent with a child in tow pays more than either. The queue converts waiting into entitlement, and so it rewards those who can afford to wait. Its egalitarianism is real, but it is an egalitarianism of form rather than of burden.\n\nThis helps explain the curious ambivalence that greets paid alternatives to queuing: the express lane, the priority pass, the professional line-stander hired to hold a place. Defenders argue that such arrangements merely make explicit an inequality the queue already contained: if waiting is a cost, why not let people pay it in money rather than time? Critics answer that something is lost when the cost becomes purchasable. In the ordinary queue, the wealthy and the poor at least suffer the same tedium side by side; the experience, however unevenly burdensome, is shared. The priority lane removes the rich from that common experience, and with it removes one of the few remaining occasions on which they are visibly subject to the same rules as everyone else.\n\nNeither side, I think, has quite grasped what the queue does. Its value lies not in distributing goods efficiently, which it does badly, nor in distributing them justly, which it does only roughly, but in staging a public demonstration that a rule can bind people irrespective of who they are. That demonstration is partly a fiction, since the burdens are not equal, but it is a fiction societies may need, and one that cannot survive being openly sold.",
  "c_vr14": "Much of what we know about biology we know about a handful of creatures: a bacterium that lives in the gut, a yeast used in brewing, a nematode worm a millimetre long, a fruit fly, a small flowering weed, and the laboratory mouse. These 'model organisms' were not chosen because they were typical of life. They were chosen because they were convenient: quick to breed, cheap to house, easy to manipulate genetically. Their convenience made them productive, and their productivity made them more convenient still, as each generation of researchers inherited the strains, techniques and databases of the last. The result is a science of extraordinary depth resting on an extraordinarily narrow base.\n\nThe standard defence of this arrangement is that life is conservative. The machinery of the cell (how DNA is copied, how proteins are made, how cells divide) was established early in evolution and has changed little since; what holds for yeast holds, in its essentials, for us. This defence is largely correct for the processes it names. It is less convincing for the processes that matter most to medicine, which tend to be precisely those that evolved late and vary widely: immune responses, metabolism, behaviour, the course of chronic disease. A laboratory mouse is a young, genetically uniform animal raised in sterile isolation on a constant diet. It is, in other words, a model of almost nothing that a human patient is.\n\nThe point is not that model organisms mislead, though sometimes they do: many treatments that cure disease in mice fail in human trials. The subtler problem is that they shape which questions are asked. A phenomenon that is easy to study in a fly will be studied; one that does not occur in flies, or cannot be measured in them, will tend to be neglected, not because anyone judged it unimportant but because no one had the tools to begin. Over decades, the map of biological knowledge comes to reflect the habits of six species as much as the structure of life.\n\nRecent technologies (cheap genome sequencing, organoids grown from human cells, methods for editing the genes of almost any species) have begun to loosen this dependence. Yet it would be naive to expect the old models simply to be abandoned. Their accumulated infrastructure is itself a reason to keep using them, and that is exactly the difficulty: in science as elsewhere, the path already taken tends to be the one that looks most promising.",
  "c_vr15": "Every few decades a major restoration provokes a quarrel that follows the same script. Conservators remove centuries of yellowed varnish and grime from a celebrated painting; the colours that emerge are brighter, harsher, sometimes startlingly modern; and a chorus of critics protests that the picture has been 'skinned', its subtleties scrubbed away along with the dirt. The conservators reply that they have merely revealed what the artist painted, and that the critics are attached not to the work but to the accumulated damage they mistook for it.\n\nBoth parties appeal to the same authority, the artist's original intention, and both, I want to suggest, misconceive it. The conservators assume that intention is fixed at the moment the last brushstroke dried, so that whatever was on the canvas then is the work and everything since is accretion. But painters of earlier centuries knew perfectly well that their pigments would darken and their glazes sink; many painted with that ageing in mind, pitching their colours higher than they wished them to be seen. To restore the painting to its day-one appearance may therefore be to restore a state the painter regarded as provisional.\n\nThe critics' error is the mirror image. They treat the darkened surface as the true painting because it is the one they, and generations before them, have known. But a habit of perception is not an intention. That we learned to love a painting in its yellowed state tells us something about our history, not about the work's; to make familiarity the criterion is to let the accidents of survival legislate for the object.\n\nWhat the quarrel obscures is that a painting is not a static thing that either retains or loses an original condition, but an event extended in time, whose appearance was always going to change and whose maker, to varying degrees, anticipated that change. The question for a restorer is therefore not 'what did it look like?' but 'what trajectory was it meant to follow, and where along that trajectory should we arrest it?' This question has no single answer, and that is uncomfortable for an institution that must, in the end, either remove the varnish or leave it. But a decision taken in the knowledge that it is a choice among defensible states is very different from one taken in the belief that it is simply uncovering the truth.",
  "c_vr16": "A familiar argument for the extended mind holds that a notebook can be part of a person's mind. The provocation lies less in the claim itself than in the criterion used to defend it. If an external resource is reliably available, automatically endorsed and easily accessed, the argument runs, it plays the same functional role as biological memory, and parity demands that we treat it the same way. The argument is usually attacked at its edges: critics multiply cases of notebooks lost, phones hacked, search engines that lie, as if the thesis would fall once enough unreliable prostheses were catalogued. But this strategy concedes the decisive premise, that what makes something mental is the role it plays rather than the way it is held. Once that is granted, the dispute becomes an actuarial one about failure rates, and biological memory, which confabulates as freely as any search engine, has no obvious claim to win it.\n\nThe more interesting objection begins elsewhere. A belief is not only a state that guides behaviour; it is a state for which I can be asked for reasons and in which I can be found wanting. When I misremember a date, the error is mine in a way that demands no further explanation: I do not blame my hippocampus. When the notebook contains a wrong entry, by contrast, there is always a further question, who wrote it and when, and the answer can come apart from me. Ownership of this kind is not a functional property; it does not show up in any description of inputs, outputs and access conditions. It is a normative relation, constituted by the practices through which we hold one another answerable. The parity principle is blind to it not because it is careless but because it is designed to be: functionalism earns its generality precisely by abstracting from who answers for a state.\n\nIt would be a mistake, however, to conclude that the mind therefore stops at the skin. Ownership is not anchored to biology either; it is anchored to a history of uptake. A scholar who has annotated her own copy of a text for thirty years may be answerable for its marginalia in exactly the way she is answerable for her recollections, more so, perhaps, since the marginalia were deliberated and the recollections merely accrued. What matters is not where a state is located or how reliably it is retrieved but whether the agent has, over time, made it hers by correcting, revising and standing by it. On this view the boundary of the mind is neither fixed nor arbitrary; it is achieved, and it can be lost.\n\nThis reframing has an uncomfortable consequence for the enthusiasts of cognitive extension. The resources that most perfectly satisfy the parity conditions, the always-on, frictionless, automatically trusted feeds that now mediate so much of what we claim to know, are precisely those least likely to be owned, since their frictionlessness forecloses the corrective engagement through which ownership is built. The more seamlessly a device extends cognition in the functional sense, the less it may extend the mind in the normative one. Parity, pursued to its limit, yields not a larger self but a more crowded one, populated by states that guide what we do while answering to no one in particular.",
  "c_vr17": "Economics textbooks still open, more or less, with the definition that made the discipline modern: the study of how societies allocate scarce means among competing ends. The definition is admired for its neutrality. It says nothing about markets, money or property; it applies equally to a household, a monastery and a planned economy. Yet its neutrality is purchased by treating scarcity as a datum, something the economist finds in the world before analysis begins, rather than as something the analysis might itself have to explain.\n\nThe critics who have noticed this tend to overcorrect. Scarcity, they say, is manufactured: enclosure turned abundant commons into scarce private plots, patents turn freely copyable knowledge into rationed goods, and planned obsolescence turns durable objects into recurrent needs. Each example is accurate, but the conclusion drawn from them, that scarcity is an ideological fiction concealing a latent abundance, mistakes the shape of the problem. Land really is finite; the hours in which a surgeon can operate really are limited. To call such constraints fictions is to trade one dogma for another, and to leave the critic with nothing to say about how finite goods ought to be shared.\n\nA more productive approach begins from the observation that scarcity is not a property of things but a relation between things and the claims made upon them. A field is not scarce in itself; it is scarce relative to the number of people who may legitimately demand its yield, and what counts as a legitimate demand is fixed by rules that are neither natural nor arbitrary. Enclosure did not make land scarcer in any physical sense; it redistributed the claims, excluding some claimants altogether and converting the rest into buyers. The quantity of the good was unchanged; the structure of scarcity was transformed.\n\nSeen this way, the neutrality of the textbook definition looks less like impartiality than like a decision not to look. By taking the pattern of claims as given, the economist can describe efficient allocation within it while remaining silent on the prior allocation that determines whose wants count as demand at all. This silence is not a minor omission. An economy can be perfectly efficient in allocating what is effectively demanded while the most urgent needs, unbacked by purchasing power, register nowhere in its accounts. Efficiency, so measured, is a verdict on how well an economy serves the claims it already recognises, and it is silent on the claims it does not.\n\nNone of this requires abandoning the analysis of scarcity. It requires recognising that every such analysis presupposes an answer to a political question, namely who is entitled to claim what, and that the answer is not supplied by the facts of finitude. The discipline's founding definition is not false. It is incomplete in a way that systematically favours whatever distribution of entitlements happens to obtain.",
  "c_vr18": "For much of the last century, to read critically was to read suspiciously. The critic's task was to show that a text meant something other than it said: that its professions of universality concealed a class interest, its coherence a repressed contradiction, its innocence a desire. The method's prestige derived from an asymmetry. The suspicious reader always knew something the text did not, and the more confidently a work announced its meaning, the more surely it betrayed another one. Lately this posture has come under attack, and the attack has a familiar shape. Suspicion, it is said, has become a reflex rather than a discovery; it finds what it looks for because it already knows what it will find; and it has been absorbed so thoroughly by the culture it once unmasked that conspiracy theorists now practise it more fluently than professors.\n\nThe diagnosis is largely correct, but the remedy usually proposed, a turn to surface reading, attentive description or affirmative attachment to the works we love, inherits the very assumption it means to escape. Both suspicion and its critics treat the relationship between reader and text as a contest over depth: the suspicious reader insists on a hidden layer, the post-critical reader denies its priority, but each accepts that the question to be settled is where meaning lives. What neither position asks is whether the reader's stance can be chosen in the way both imagine, as though one could decide, at the threshold of a reading, to be generous or wary.\n\nThat assumption deserves scepticism of its own. Readers do not adopt stances so much as find themselves in them, and what puts them there is less a theory of interpretation than the institutional setting in which reading is done. The seminar rewards the reading that no one else has produced, and novelty is most cheaply produced by discovering that a text is not what it seems. Suspicion flourished not because critics were persuaded by Marx or Freud but because it was the most reliable way to generate publishable difference. If this is right, exhortations to read more generously will fail for the same reason that exhortations to read more suspiciously succeeded: they address individual dispositions while leaving untouched the conditions that select for them.\n\nThe implication is not that interpretive method is irrelevant but that it is downstream. A discipline that wanted different readings would have to reward different things: the confirmation of an insight rather than its novelty, say, or the patient elaboration of what others have already noticed. Whether literary study could survive such a change in its economy of credit is an open question. That it will not change its readings without one is less open than its post-critical reformers suppose, for a reform that leaves the incentives intact will be absorbed by them, and the generous reading will become, in its turn, the newest way of being different.",
  "c_vr19": "Physicists have long confessed, with a mixture of pride and embarrassment, that they choose among theories partly on grounds of beauty. The confession is usually framed as a puzzle: why should the universe care about our taste? Two answers dominate, and each can cite its cases. The realist answer holds that elegance is a symptom of truth: the world is in fact economical, and minds shaped by it have learned to recognise its economy as beauty. The deflationary answer holds that elegance is merely convenient: simpler theories are easier to calculate with, easier to test and easier to teach, and their beauty is a name for these practical virtues dressed in honorific language.\n\nBoth answers assume that the aesthetic judgement is prior to, and separable from, the history of the theory judged. On this assumption the scientist meets a theory, perceives its elegance, and must then decide what that perception is worth. But the record suggests a different sequence. The equations now cited as paradigms of beauty were frequently regarded, when first proposed, as ungainly, artificial or ad hoc; their elegance became visible only after a generation of work had reorganised the field around them, rewritten its textbooks in their notation, and trained students for whom they were the natural starting point. What looks like a judgement of beauty made in advance of success is often a judgement of familiarity made in its wake.\n\nThis does not show that aesthetic criteria are idle. A community that has internalised the forms of its successful theories will, when confronting a new problem, prefer candidates that resemble them, and this preference is neither arbitrary nor infallible. It is a bet that the future of inquiry will look like its past, that the structures which have worked will continue to work. Such a bet is often sound, which is why the realist can always produce examples in which beauty led to truth. But it is a bet with a characteristic failure mode: it is least reliable precisely where a field most needs it, at the points where the old forms have stopped working and the successful theory will, at first, look ugly.\n\nThe interesting consequence is that the two dominant answers are not rivals so much as descriptions of different moments. During periods of consolidation, beauty is a reliable heuristic, and the realist's confidence is warranted in practice if not in principle. During periods of crisis, beauty is a conservative force, and the deflationist's suspicion is the better guide. The error lies in seeking a single verdict on the epistemic worth of elegance, when its worth is indexed to the state of the field that perceives it. A physicist who asks whether beauty is a guide to truth has asked a question with no answer; one who asks when it is a guide has asked a question that history can begin to settle.",
  "c_vr20": "The claim that each of us has a special authority over our own minds once rested on a picture of introspection as inner perception. I know that I believe it will rain, on this picture, because I can look inward and see the belief, much as I can look outward and see the clouds; my authority is that of a privileged witness, stationed where no one else can stand. The picture has not survived its encounter with experimental psychology. Subjects confidently report reasons for choices that demonstrably had other causes; they deny preferences their behaviour reveals; they describe the course of their own deliberations in ways that match, item for item, what an outsider would guess. If introspection is a form of perception, it is a strikingly unreliable one, and the authority it was meant to underwrite looks like a courtesy extended by convention.\n\nA more resilient account locates first-person authority not in observation but in commitment. When I say that I believe it will rain, I am not usually reporting a discovery about my inner states; I am taking a stand on the weather, and the stand is mine to take. My authority over the avowal is like my authority over a promise: no one else can make it for me, and its sincerity does not wait on evidence. The experimental findings, on this view, are beside the point. They show that people are poor witnesses to the causes of their attitudes, but avowal was never testimony about causes in the first place.\n\nThe commitment account purchases its resilience at a price that its defenders seldom acknowledge. If avowing a belief is taking a stand rather than reporting a fact, then the authority it confers is authority over what one is answerable for, not over what is the case in one's head. Those can come apart. A person may sincerely avow that she holds no prejudice against a group, and be fully entitled to the avowal in the sense that she has committed herself to its content, while her conduct continues to be steered by the very attitude she disowns. The commitment account does not deny this; it simply relocates the attitude outside the domain of the mental over which she has authority. But that domain is now defined by her commitments, and the authority is guaranteed only because it has been made trivial: she knows her mind because her mind has been redefined as what she has committed to.\n\nNone of this rehabilitates the inner witness. It suggests rather that self-knowledge names two achievements that the tradition ran together, the authority to commit and the capacity to discover, and that the first offers no assurance of the second. A theory that secures the one by abandoning the other has not answered the sceptic; it has changed the subject, and the question the sceptic asked, whether we can find out what actually moves us, is left exactly where it was."
 }
};
