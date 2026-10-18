// Levels 4–10 per section (coach-written, answer keys verified). Lives in the repo, not the Sheet, to keep the Sheet light.
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
       "is a perfect recording that fades with time.",
       "is rebuilt each time we recall it, which makes it useful but unreliable as a record.",
       "cannot be trusted at all and should be ignored.",
       "works better in courtrooms than in daily life."
      ],
      "ans": 1,
      "exp": "The passage contrasts 'recording' with 'reconstruction'. A is the view being rejected; C overreaches ('at all'); D is unsupported.",
      "set": "c_v4"
     },
     {
      "id": "c20261018_V_4",
      "type": "mcq",
      "text": "The example of eyewitnesses is used to show that:",
      "opts": [
       "witnesses often lie deliberately.",
       "sincerity does not guarantee an accurate memory.",
       "courts should stop using testimony.",
       "memory improves under stress."
      ],
      "ans": 1,
      "exp": "'Entirely sincere… may still mislead' — honest but wrong. A contradicts 'sincere'; C and D are never claimed.",
      "set": "c_v4"
     },
     {
      "id": "c20261018_V_5",
      "type": "mcq",
      "text": "The author's tone is best described as:",
      "opts": [
       "explanatory and corrective",
       "nostalgic and wistful",
       "sarcastic and dismissive",
       "alarmed and urgent"
      ],
      "ans": 0,
      "exp": "The author explains research and corrects a common belief ('Most people assume… research suggests otherwise'). No sarcasm or alarm.",
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
       "Cities are worse for the environment than villages.",
       "Because density cuts per-person energy use, well-designed cities can be environmentally efficient.",
       "Everyone should move to cities immediately.",
       "Public transport is the only answer to climate change."
      ],
      "ans": 1,
      "exp": "Keeps the claim (less energy per person), the reason (density) and the conclusion (build them well). C and D overreach."
     },
     {
      "id": "c20261018_V_9",
      "type": "mcq",
      "text": "The librarians' conclusion implies that the fines had:",
      "opts": [
       "encouraged families to return books on time.",
       "kept away families who could not afford to pay.",
       "raised a lot of money for the library.",
       "made children read more."
      ],
      "ans": 1,
      "exp": "'Families who could not pay simply stopped coming' — the fine excluded poorer families.",
      "set": "c_v5"
     },
     {
      "id": "c20261018_V_10",
      "type": "mcq",
      "text": "Which of the following, if true, would most weaken the librarians' conclusion?",
      "opts": [
       "Children said they enjoyed reading in the library.",
       "Child membership also doubled that year in nearby towns that kept their fines.",
       "The programme cost the library very little.",
       "A few books were still returned late."
      ],
      "ans": 1,
      "exp": "If membership doubled elsewhere too, something else (not removing fines) may explain the rise. Weaken = offer another cause.",
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
       "false, because publishers were motivated only by profit.",
       "accurate, but it leaves out the commercial motive behind it.",
       "an exaggeration invented by critics of the format.",
       "irrelevant to how people read today."
      ],
      "ans": 1,
      "exp": "'That story is true, but incomplete' → then the profit motive. A says 'false' (author says true). C and D are never claimed. Trick: 'true but incomplete' = the answer keeps the story AND adds what's missing."
     },
     {
      "id": "c20261018_V_12",
      "type": "mcq",
      "set": "c_v6",
      "text": "The critics' warning is mentioned mainly in order to:",
      "opts": [
       "show that the critics were right about falling standards.",
       "set up a prediction that the author then shows to be mistaken.",
       "explain why publishers later raised prices.",
       "prove that cheap books were rarely read."
      ],
      "ans": 1,
      "exp": "Right after the warning comes 'What they failed to anticipate…'. A view is quoted so it can be answered. Ask 'why is this sentence HERE?' — that is a function question."
     },
     {
      "id": "c20261018_V_13",
      "type": "mcq",
      "set": "c_v6",
      "text": "The author's attitude towards the paperback is best described as:",
      "opts": [
       "appreciative, while acknowledging its commercial motives",
       "hostile, because it cheapened literature",
       "neutral, with no view on its effects",
       "nostalgic for the leather-bound book"
      ],
      "ans": 0,
      "exp": "The ending praises it ('moved reading… into ordinary life'), but the author admits publishers weren't idealists. B is the critics' view. C ignores the clear verdict. D: leather books are described as furniture, not missed."
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
       "is a pleasant state that modern people should deliberately cultivate",
       "is caused chiefly by smartphones and a culture of constant stimulation",
       "reliably makes people more creative, as recent experiments have shown"
      ],
      "ans": 0,
      "exp": "Main-idea test: the answer must cover BOTH halves of the passage (para 1: boredom is a signal like pain; para 2: we silence it). B is directly denied ('not that boredom is pleasant'). C reverses cause and effect: phones silence boredom, they don't cause it. D is extreme: the author calls the effect 'modest' and its durability 'unclear'.",
      "set": "c_vr7"
     },
     {
      "id": "c20261018b_VARC_2",
      "type": "mcq",
      "text": "The author would most likely agree with which of the following?",
      "opts": [
       "Boredom and pain are processed by the same mechanisms in the brain.",
       "Boredom is best understood as a sign that one's surroundings lack stimulation.",
       "Twentieth-century psychologists were right to classify boredom with fatigue.",
       "Escaping boredom without attending to its cause is like numbing pain without examining the injury."
      ],
      "ans": 3,
      "exp": "Inference = one small step from the text, no more. The pain analogy plus 'the itch is scratched, and the question disappears' directly support D. A is out of scope (the analogy is functional, not neurological). B contradicts 'less a deficiency of stimulation than a judgement'. C contradicts 'this view mistakes the signal for the problem'. Tip: when stuck, eliminate options that contradict a specific line, then check what survives against the author's analogy.",
      "set": "c_vr7"
     },
     {
      "id": "c20261018b_VARC_3",
      "type": "mcq",
      "text": "The author's attitude toward the research on boredom and idea generation is best described as",
      "opts": [
       "dismissive",
       "cautiously receptive",
       "enthusiastically approving",
       "studiously indifferent"
      ],
      "ans": 1,
      "exp": "Tone questions hinge on qualifiers. The author cites the finding (receptive) but immediately hedges: 'the effect is modest and its durability unclear' (cautious). 'Enthusiastically' ignores the hedge; 'dismissive' ignores that the author uses it in support; 'indifferent' ignores that it is used at all.",
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
       "Performance metrics in public services should be abandoned because they are invariably gamed.",
       "Hospital administrators routinely act in bad faith to manipulate waiting-time statistics.",
       "Metrics are valuable as diagnostic tools but tend to be distorted when mechanically tied to rewards.",
       "Adding more indicators is the most effective way to stop institutions gaming any single measure."
      ],
      "ans": 2,
      "exp": "The final paragraph is the author's verdict ('The lesson is narrower...'). A is extreme and contradicted ('None of this means that measurement should be abandoned'). B is contradicted ('None of this requires villainy'). D is the 'standard response' the author argues against. Tip: in argumentative RC, look for where the author says 'the lesson' or 'the conclusion': the main idea lives there.",
      "set": "c_vr8"
     },
     {
      "id": "c20261018b_VARC_7",
      "type": "mcq",
      "text": "Based on the passage, which of the following practices is the author LEAST likely to expect to produce gamed numbers?",
      "opts": [
       "A ministry that ranks hospitals on fifteen indicators and links budgets to the ranking.",
       "A ward nurse who tracks her unit's patient-fall rate weekly and discusses it with her team to spot problems.",
       "A regulator that cuts funding to any hospital whose four-hour compliance falls below 95 per cent.",
       "A hospital board that awards bonuses to whichever department most improves its waiting-time figure."
      ],
      "ans": 1,
      "exp": "Application-style inference: extract the author's criteria, then test each case. Criteria: numbers are gamed when (a) mechanically tied to rewards and (b) set far from people who know the work. B is diagnostic, held by someone close to the work, with no reward attached. A, C and D all attach money to the number; A also crowds the dashboard. Approach for skipped inference Qs: write the author's rule in 5 words first, then match.",
      "set": "c_vr8"
     },
     {
      "id": "c20261018b_VARC_8",
      "type": "mcq",
      "text": "Which of the following, if true, would most seriously weaken the author's claim that adding more measures often deepens the problem?",
      "opts": [
       "Hospitals assessed on many indicators, recorded automatically and reviewed with equal frequency, showed less gaming than hospitals assessed on a single target.",
       "Some hospitals assessed on a single waiting-time target reported improved patient outcomes.",
       "Managers in several hospitals say they feel overwhelmed by the number of indicators they track.",
       "Gaming of numerical targets has also been documented in schools and police forces."
      ],
      "ans": 0,
      "exp": "To weaken, attack the mechanism. The author gives two reasons more measures backfire: recording costs staff time, and managers chase the most-reviewed numbers. A removes both mechanisms and still shows less gaming with more measures, so it directly undercuts the claim. B is about single targets, not adding measures. C strengthens. D is about gaming generally and supports the author.",
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
       "Although translation inevitably loses wordplay and rhythm, careful translators can minimise these losses.",
       "Literary forms such as the sonnet and the ghazal survived in new languages only because translators preserved them intact.",
       "Translation is fundamentally a creative act, and fidelity to the original is an outdated ideal.",
       "Translation's inability to reproduce originals exactly has historically driven literary innovation, not merely loss."
      ],
      "ans": 3,
      "exp": "A summary must keep the 'But' pivot: the paragraph moves from 'loss' to 'invention through imperfection'. A stays on the rejected side of the pivot. B contradicts 'unable to carry them across intact'. C is extreme: the paragraph never dismisses fidelity, and says 'as much... as', not 'fundamentally'. D keeps both halves ('not merely loss') and the causal link."
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
       "refute the idea that literature has any moral value",
       "argue that laboratory studies of reading are methodologically worthless",
       "question a widely held claim about fiction's moral effects and propose a more modest alternative",
       "show that cultivated readers are more likely than others to behave cruelly"
      ],
      "ans": 2,
      "exp": "Structure: creed stated -> evidence for it attacked (fragile, too narrow, selection effect, history) -> 'None of this shows that literature is morally inert' -> smaller claim offered. C maps the whole arc. A is denied outright. B overstates 'fragile' and 'narrower' into 'worthless'. D distorts 'can coexist' (possibility) into 'more likely' (comparison).",
      "set": "c_vr9"
     },
     {
      "id": "c20261018b_VARC_12",
      "type": "mcq",
      "text": "Which of the following can most reasonably be inferred from the passage?",
      "opts": [
       "The author believes that readers of popular fiction are less empathetic than readers of literary fiction.",
       "Finding that fiction readers score higher on empathy tests would not, by itself, show that reading causes empathy.",
       "The author thinks literature teachers exaggerate fiction's benefits mainly to protect their profession.",
       "If the laboratory findings were replicated, the author would accept that fiction makes readers kinder."
      ],
      "ans": 1,
      "exp": "B follows from the selection-effect point ('the habit may be a symptom of sympathy rather than its cause'): correlation is not causation. A attributes to the author a claim she only reports from studies and in fact doubts. C imputes a motive; 'less flattering for the profession' is not an accusation of self-interest. D is contradicted: 'even taken at face value' the findings show only a perceptual effect, not kindness. Inference trap to watch: options that turn something the author REPORTS into something the author BELIEVES.",
      "set": "c_vr9"
     },
     {
      "id": "c20261018b_VARC_13",
      "type": "mcq",
      "text": "Which of the following, if true, would most strengthen the author's suggestion about fiction's 'real contribution'?",
      "opts": [
       "Long-term readers of literary fiction donate more to charity than matched non-readers.",
       "Readers of popular fiction report enjoying their reading more than readers of literary fiction do.",
       "Several further laboratory studies linking fiction to empathy have failed to replicate.",
       "Long-term readers of literary fiction use a wider and more specific vocabulary than matched non-readers when describing others' emotional states."
      ],
      "ans": 3,
      "exp": "Identify exactly which claim is targeted: not the critique, but the alternative, that fiction makes readers more PRECISE in distinguishing suffering and less content with stock phrases. D tests precision directly. A supports the kindness creed the author doubts. C supports the critique, not the alternative (scope shift). B is irrelevant.",
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
       "The ruin the parable predicts depends on the absence of means to make and enforce agreements; it is not an inevitable feature of shared resources.",
       "Shared resources are best managed by local communities, since enclosure and state control have consistently failed.",
       "The overgrazing parable is false and should be discarded from economic reasoning.",
       "Collective management of commons succeeds only when a distant authority supervises local rules."
      ],
      "ans": 0,
      "exp": "The third paragraph gives the 'more defensible conclusion', and it is conditional. B is the 'mirror image' the author explicitly warns against. C is too strong: the author says the parable describes 'a real situation'. D reverses the text: a distant authority overriding local rules is listed as a cause of FAILURE. Hard-RC tip: when an author rejects two extremes, the answer is almost always the qualified middle.",
      "set": "c_vr10"
     },
     {
      "id": "c20261018b_VARC_17",
      "type": "mcq",
      "text": "The author's reference to 'global fisheries and a shared atmosphere' most strongly implies that",
      "opts": [
       "the field studies show global resources can be governed in the same way as local irrigation systems",
       "the parable was originally meant to describe international rather than local resources",
       "global resources are inherently unmanageable and will inevitably be degraded",
       "the parable's grim prediction may apply with particular force to some of the largest-scale resource problems"
      ],
      "ans": 3,
      "exp": "Connect the remark to the failure conditions: large groups, free entry, distant authority. Global fisheries and the atmosphere have huge, open user groups with no shared means of agreement, so they resemble the parable's strangers: 'perhaps an increasingly common' situation. A ignores those failure conditions. B is unsupported history. C is extreme and clashes with 'not a law of nature'. Note the hedge 'may': the right inference keeps the author's 'perhaps'.",
      "set": "c_vr10"
     },
     {
      "id": "c20261018b_VARC_18",
      "type": "mcq",
      "text": "Which of the following, if true, would most seriously weaken the author's account of when collective arrangements fail?",
      "opts": [
       "A communal grazing system collapsed soon after the state imposed uniform grazing rules across the region.",
       "Some privately owned pastures have also been overgrazed by their owners.",
       "Many communal fisheries collapsed despite small, stable membership, closed access and no outside interference.",
       "Several irrigation communities using graduated penalties have survived for over four hundred years."
      ],
      "ans": 2,
      "exp": "The account says failure comes under identifiable conditions (too large, open entry, outside override). The strongest weakener shows failure when NONE of those conditions holds: C. A is an instance of the third condition, so it strengthens. D supports the general success story. B is about private property, outside the scope of when COLLECTIVE arrangements fail.",
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
       "Forecasters in dry regions can achieve high accuracy rates without any genuine skill.",
       "Accuracy rates are meaningless for evaluating forecasters, since anyone can achieve them by predicting the most common outcome.",
       "A forecast's worth lies in what it adds beyond a sensible default expectation, not in its raw rate of correctness.",
       "Because rare events are hard to predict, forecasters should concentrate on predicting common outcomes accurately."
      ],
      "ans": 2,
      "exp": "A summary keeps the conclusion, not the example. A restates only the rain example. B is extreme ('meaningless', 'anyone'): the paragraph says accuracy 'can mislead when outcomes are lopsided', a conditional claim. D draws the opposite lesson, since forecasting the common outcome is what the paragraph calls useless. C carries the final sentence's criterion: improvement over an informed baseline."
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
  "c_vr10": "The parable of the overgrazed pasture has done remarkable work for a story with almost no empirical content. In its familiar form, each herder reasons that the gain from adding one more animal accrues to him alone while the cost of the degraded grass is shared by all; each therefore adds animals until the pasture is ruined. The conclusion usually drawn is that shared resources must be either enclosed as private property or placed under the authority of the state. What the parable assumes, without announcing it, is that the herders cannot speak to one another, that they are strangers who meet only through the grass.\n\nField studies of actual commons tell a less tidy story. Fisheries, irrigation systems and grazing lands have been managed collectively for centuries by communities that devised their own rules about who may take what and when, monitored one another, and graduated their penalties so that a first offence drew a reproach rather than expulsion. Such arrangements fail, certainly; but they tend to fail under identifiable conditions: when the group grows too large for members to observe each other, when outsiders can enter freely, or when a distant authority overrides local rules it does not understand.\n\nIt would be a mistake, though, to replace one parable with its mirror image, in which communities are naturally wise and only interference corrupts them. The more defensible conclusion is conditional: the parable describes not the fate of shared resources as such but the fate of shared resources among people who have no means of making and enforcing agreements. That is a real situation, and in a world of global fisheries and a shared atmosphere, perhaps an increasingly common one. But it is a situation, not a law of nature."
 }
};
