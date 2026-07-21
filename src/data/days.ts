import type { Day } from "./types";

// NSG 2600 · Adult Health I · Exam 2 — 10-day study system.
// Neuro (Days 1–4) → Immune (Day 5) → Endocrine (Days 6–7) →
// Respiratory (Days 8–9) → Full-system comprehensive review (Day 10).

export const DAYS: Day[] = [
  {
    id: 1,
    sys: "neuro",
    title: "Neuro Foundations",
    subtitle: "CNS/PNS/ANS · Neurotransmitters · Cranial Nerves · Reflexes · LOC",
    objectives: [
      "Separate CNS, PNS, and ANS roles without hesitating",
      "Rattle off all 12 cranial nerves and what each one DOES",
      "Grade DTRs 0–4+ and know what hyper vs hypo means clinically",
      "Rank the LOC spectrum in order and know what triggers it",
    ],
    content: [
      {
        heading: "The 3-Part Nervous System",
        points: [
          "CNS = brain + spinal cord = the control center that makes the decisions",
          "PNS = every nerve running out to the body = the wiring that carries the message",
          "ANS = the autopilot — breathing, HR, digestion — you don't consciously run it",
        ],
      },
      {
        heading: "Neurotransmitters — the ATI favorite trio",
        points: [
          "Dopamine — movement + pleasure. Too much → schizophrenia symptoms. Too little → Parkinson's",
          "Serotonin — mood + sleep. Too much → serotonin syndrome. Too little → depression",
          "Acetylcholine — muscle + memory. Too much → muscle spasms. Too little → Alzheimer's",
        ],
      },
      {
        heading: "Cranial Nerves that ATI loves to test",
        points: [
          "CN II Optic — vision. CN III Oculomotor — pupil constriction + eyelid (blown pupil = ↑ICP red flag)",
          "CN VII Facial — symmetry, taste front 2/3 tongue (Bell's palsy lives here)",
          "CN IX & X Glossopharyngeal/Vagus — gag reflex + swallow (this is your aspiration-risk nerve pair)",
          "CN XI Spinal accessory — shoulder shrug. CN XII Hypoglossal — tongue midline protrusion",
        ],
      },
      {
        heading: "DTR grading (0–4+) — know this cold",
        points: [
          "0 absent · 1+ diminished · 2+ NORMAL · 3+ brisk · 4+ hyperactive with clonus",
          "Hyperreflexia (3–4+) = UMN problem: stroke, spinal cord injury, MS",
          "Hyporeflexia (0–1+) = LMN problem: peripheral neuropathy, GBS",
          "Babinski positive in an ADULT = abnormal = UMN lesion (normal in infants only)",
        ],
      },
      {
        heading: "LOC spectrum — memorize the ORDER, not just the words",
        points: [
          "Alert → Lethargic → Obtunded → Stuporous → Comatose",
          "Lethargic = drowsy but answers appropriately once stimulated",
          "Obtunded = needs repeated stimulation, limited interaction",
          "Stuporous = only responds to vigorous/painful stimuli (sternal rub), no sustained interaction",
          "Comatose = no purposeful response to ANY stimuli",
        ],
      },
    ],
    mnemonics: [
      { title: "Dope, Ser, Ace", text: "Dopamine, Serotonin, Acetylcholine — your brain's Happy Trio. Too much = overload symptoms. Too little = deficiency disease." },
      { title: "No Dope in the Park", text: "No dopamine → Parkinson's. Locks the neurotransmitter-to-disease link instantly." },
      { title: "PERRLA", text: "Pupils Equal, Round, Reactive to Light and Accommodation — your pupil-check script every single time." },
      { title: "B for Bullets, T for Tactical", text: "B cells fire antibodies (bullets), T cells do direct tactical attack — parking this here since it pairs with cranial-nerve-style rote recall." },
    ],
    traps: [
      { trap: "ATI will describe a patient who is 'difficult to arouse, drowsy, but answers questions once you shake them' and offer 'obtunded' as a tempting wrong answer.", logic: "Reasoning: the KEY detail is 'answers appropriately once stimulated' — that's the definition of LETHARGIC. Obtunded patients give limited, confused answers even when aroused. Match the exact behavior, not the vibe of 'seems out of it.'" },
      { trap: "A question describes a positive Babinski in a 68-year-old and asks if this is expected.", logic: "Reasoning: age is the trap variable. Positive Babinski is NORMAL in infants (immature corticospinal tract) and ABNORMAL in anyone else. If the stem gives you an age over ~2, positive Babinski always points to a UMN lesion." },
    ],
    questions: [
      {
        q: "A nurse assesses a patient and notes they open their eyes and answer questions only after a firm sternal rub, then drift off again with no sustained conversation. Which LOC term does the nurse document?",
        options: ["Lethargic", "Obtunded", "Stuporous", "Comatose"],
        answer: 2,
        rationale: "Stuporous = requires vigorous/painful stimuli to elicit only a brief response, no sustained interaction. Trap: 'Obtunded' is the closest wrong answer because it also needs stimulation — but obtunded patients still interact somewhat once aroused; stuporous patients don't sustain it. The word 'vigorous/painful' is your signal word for stuporous, not obtunded.",
      },
      {
        q: "Which finding, if suddenly present, should the nurse recognize as the MOST concerning cranial nerve change in a head injury patient?",
        options: ["Difficulty with the whisper test (CN VIII)", "Unequal, blown pupil (CN III)", "Absent gag reflex (CN IX/X)", "Loss of smell (CN I)"],
        answer: 1,
        rationale: "A blown, unreactive pupil (CN III) signals oculomotor nerve compression from rising ICP/herniation — a neuro emergency. Trap: absent gag (option C) is also serious and real, but ATI ranks a sign of ACTIVE BRAIN HERNIATION above an aspiration-risk finding when the stem says 'MOST concerning' — herniation kills faster.",
      },
      {
        q: "A patient has 4+ deep tendon reflexes with clonus at the ankle. The nurse understands this is most consistent with which type of lesion?",
        options: ["Lower motor neuron lesion", "Upper motor neuron lesion", "Normal neurologic finding", "Peripheral neuropathy"],
        answer: 1,
        rationale: "Hyperreflexia (3–4+) with clonus = UMN lesion (stroke, spinal cord injury, MS). Trap: students confuse 'hyper' with 'more nerve function' — it's actually a loss of the INHIBITORY signal from the brain, so the reflex arc fires unchecked. Hypo/absent reflexes are the LMN pattern instead.",
      },
      {
        q: "The nurse is teaching new grads the neurotransmitter-disease pairing. Which pairing is CORRECT?",
        options: ["Excess acetylcholine → Alzheimer's disease", "Deficient dopamine → Parkinson's disease", "Deficient serotonin → serotonin syndrome", "Excess dopamine → depression"],
        answer: 1,
        rationale: "Low dopamine → Parkinson's. Trap: ATI loves flipping 'too much' and 'too little' in the wrong direction on distractor answers — always re-read whether the stem says excess or deficient before matching the disease.",
      },
    ],
  },
  {
    id: 2,
    sys: "neuro",
    title: "ICP, Seizures & Headaches",
    subtitle: "Increased ICP · Cushing's Triad · Seizure Types · Migraine Meds",
    objectives: [
      "Recognize early vs late signs of increased ICP",
      "Recite Cushing's triad and know WHY each piece happens",
      "Tell focal vs generalized seizures apart and know the nursing priority DURING a seizure",
      "Match migraine drug classes to their contraindications",
    ],
    content: [
      {
        heading: "Increased ICP (normal 10–20 mmHg)",
        points: [
          "Early signs: restlessness, confusion, headache, sluggish pupils — these are subtle, don't wait for them to worsen",
          "Late sign = Cushing's triad: ↑BP (widened pulse pressure) + bradycardia + irregular respirations",
          "Nursing: HOB 30°, head midline, avoid Valsalva/coughing/straining, limit suctioning, mannitol/steroids as ordered",
        ],
      },
      {
        heading: "Cushing's triad — the WHY matters for ATI",
        points: [
          "↑ICP compresses the brainstem → body raises BP to try to keep perfusing the brain",
          "That high BP triggers baroreceptors → reflex bradycardia",
          "Brainstem compression also disrupts the respiratory centers → irregular respirations",
          "This is a LATE, ominous sign — herniation is imminent without intervention",
        ],
      },
      {
        heading: "Seizures — focal vs generalized",
        points: [
          "Focal aware: consciousness intact, localized twitching/sensory change",
          "Focal impaired awareness: altered consciousness, staring, automatisms (lip smacking), postictal confusion",
          "Generalized tonic-clonic: sudden LOC loss → stiffening (tonic) → rhythmic jerking (clonic) → postictal confusion/fatigue",
          "Absence: brief staring, no postictal confusion, easily mistaken for daydreaming (usually kids)",
        ],
      },
      {
        heading: "Seizure nursing priority — during and after",
        points: [
          "DURING: protect the head, turn to side, loosen clothing, time it, do NOT restrain, NOTHING in the mouth",
          "AFTER: airway, vitals, neuro check, reorient, document sequence",
        ],
      },
      {
        heading: "Migraine medications",
        points: [
          "Triptans (sumatriptan) — vasoconstrict cranial vessels, take EARLY in attack, CONTRAINDICATED in CAD/stroke/uncontrolled HTN",
          "NSAIDs/acetaminophen — mild-moderate; watch GI bleed / liver toxicity",
          "Beta-blockers (propranolol) — PREVENTIVE, monitor HR/BP, caution in asthma",
          "Topiramate (anticonvulsant, preventive) — watch cognitive slowing + weight change",
        ],
      },
    ],
    mnemonics: [
      { title: "3 Bs = Brain is Breaking", text: "Bradycardia, (high) Blood pressure, aBnormal respirations = Cushing's triad = late ICP sign." },
      { title: "SIADH-style memory for seizures", text: "Tonic = TIGHT & stiff. Clonic = CLOCK-like rhythmic jerks. Say them in that order out loud 3x — order matters for charting." },
      { title: "Triptans + CAD = NO", text: "Triptans constrict vessels everywhere, not just the head — that's why cardiac and stroke history are hard contraindications." },
    ],
    traps: [
      { trap: "ATI gives vitals: BP 168/50, HR 52, irregular respirations, and asks what this indicates.", logic: "Reasoning: don't just say 'hypertension' — recognize the WIDENED PULSE PRESSURE (168-50=118) + bradycardia + irregular resp as the full Cushing's triad = late sign of increased ICP needing IMMEDIATE provider notification, not just a BP med." },
      { trap: "A stem describes a seizure and one answer choice is 'insert a padded tongue blade to prevent tongue biting.'", logic: "Reasoning: this is a classic ATI trap answer that sounds protective but is ALWAYS wrong — never put anything in the mouth during a seizure. Protecting the airway means turning to the side, not obstructing it further." },
    ],
    questions: [
      {
        q: "A patient with a head injury has BP 176/54, HR 48, and irregular respirations. What is the nurse's priority action?",
        options: ["Administer a PRN antihypertensive", "Notify the provider immediately", "Recheck vitals in one hour", "Encourage the patient to cough and deep breathe"],
        answer: 1,
        rationale: "This is Cushing's triad — a late sign of increased ICP requiring immediate provider notification for emergent intervention. Trap: giving an antihypertensive (option A) treats a symptom while ignoring the brainstem emergency underneath it — and coughing (option D) would raise ICP further.",
      },
      {
        q: "During a patient's tonic-clonic seizure, which action is the nursing priority?",
        options: ["Insert a padded tongue blade", "Restrain the extremities to prevent injury", "Turn the patient to the side and protect the head", "Give the ordered PRN antiepileptic IV push immediately"],
        answer: 2,
        rationale: "Turning to the side protects the airway and prevents aspiration; protecting the head prevents injury. Trap: both 'tongue blade' and 'restrain' are classic distractors that sound helpful but risk injury or airway obstruction — ATI includes both to see if you'll pick either.",
      },
      {
        q: "A patient with a history of coronary artery disease requests sumatriptan for a migraine. What is the nurse's best action?",
        options: ["Administer as ordered since it's a standard migraine drug", "Hold the medication and notify the provider due to the CAD history", "Give with food to reduce GI upset", "Administer only if pain is severe"],
        answer: 1,
        rationale: "Triptans cause vasoconstriction and are contraindicated with CAD, stroke/TIA history, and uncontrolled hypertension. Trap: the stem buries the contraindication in the patient's HISTORY, not the drug name — always scan the stem for comorbidities before assuming a 'standard' med is safe.",
      },
      {
        q: "A child has brief staring spells with subtle eye blinking, no falling, and no confusion afterward. Which seizure type is this?",
        options: ["Focal impaired awareness", "Myoclonic", "Absence", "Tonic-clonic"],
        answer: 2,
        rationale: "Absence seizures: brief staring, no postictal confusion, often mistaken for daydreaming. Trap: focal impaired awareness ALSO has staring, but it comes WITH automatisms and postictal confusion — the absence of postictal confusion is your distinguishing detail.",
      },
    ],
  },
  {
    id: 3,
    sys: "neuro",
    title: "Stroke & Cerebrovascular",
    subtitle: "Ischemic vs Hemorrhagic · FAST · tPA · Left vs Right Brain",
    objectives: [
      "Differentiate ischemic (thrombotic/embolic) vs hemorrhagic stroke",
      "Apply FAST and know the tPA time window + contraindications",
      "Match left-brain vs right-brain damage to symptoms without flipping them",
      "Sequence post-stroke priority care (swallow screen before anything else PO)",
    ],
    content: [
      {
        heading: "Stroke types",
        points: [
          "Ischemic (~87%) — thrombotic (clot forms locally, often preceded by TIA, evolves over time) vs embolic (clot travels from heart/AFib, sudden max deficit)",
          "Hemorrhagic (~13%) — intracerebral (HTN-driven bleed) or subarachnoid (ruptured aneurysm, 'worst headache of my life,' nuchal rigidity)",
        ],
      },
      {
        heading: "FAST + acute priorities",
        points: [
          "Face droop, Arm weakness, Speech difficulty, Time to call 911",
          "CT WITHOUT contrast FIRST — must rule out hemorrhage before giving tPA",
          "tPA window: within 3–4.5 hrs of symptom onset. Contraindicated with recent surgery, trauma, active bleeding, hemorrhagic stroke",
        ],
      },
      {
        heading: "Left brain vs Right brain — do NOT mix these up",
        points: [
          "LEFT brain damage = Language problems (aphasia) + RIGHT-sided paralysis (brain controls opposite side of body)",
          "RIGHT brain damage = poor judgment/impulsivity + LEFT-sided paralysis, often unaware of deficits",
        ],
      },
      {
        heading: "Post-stroke nursing",
        points: [
          "Swallow screen BEFORE any PO intake — aspiration is the #1 preventable complication",
          "Risk factor control: BP, glucose, lipids, smoking cessation",
          "Meds: antiplatelets for ischemic, anticoagulants for AFib-related, teach bleeding precautions",
          "Communication for aphasia: simple sentences, allow time, gestures/pictures, yes/no questions",
        ],
      },
    ],
    mnemonics: [
      { title: "LEFT = Language", text: "Left brain damage → Language deficit (aphasia) + right body paralysis. If you remember 'L for Language,' the rest follows by opposite-side logic." },
      { title: "Embolic = Explosive onset", text: "Embolic clots travel and hit suddenly — max deficit right away. Thrombotic builds slowly, sometimes with TIA warnings first." },
      { title: "CT before tPA, always", text: "No image, no clot-buster — you must rule out a bleed before you dissolve a clot, or you'll cause a catastrophic hemorrhage." },
    ],
    traps: [
      { trap: "A stem describes right-sided facial droop AND right arm weakness, and asks which side of the brain is affected.", logic: "Reasoning: the body's motor/sensory pathways CROSS at the brainstem, so right-sided symptoms point to LEFT brain damage. Don't answer with the same side as the symptoms — that's the trap ATI is testing." },
      { trap: "A patient had a hemorrhagic stroke 2 hours ago and the family asks about tPA.", logic: "Reasoning: tPA dissolves clots — giving it to a BLEED would make it catastrophically worse. tPA is ONLY for ischemic stroke within the time window. Hemorrhagic stroke is an absolute contraindication regardless of timing." },
    ],
    questions: [
      {
        q: "A patient presents with right-sided facial droop, right arm weakness, and expressive aphasia. The nurse understands the stroke likely occurred in which location?",
        options: ["Right cerebral hemisphere", "Left cerebral hemisphere", "Cerebellum", "Brainstem only"],
        answer: 1,
        rationale: "Left hemisphere damage causes aphasia (language center) and right-sided paralysis because motor pathways cross. Trap: the temptation is to match the symptom side to the same-side brain — remember the crossover rule.",
      },
      {
        q: "Which finding is an ABSOLUTE contraindication to administering tPA?",
        options: ["Blood pressure of 168/94", "Symptom onset 2 hours ago", "Recent hemorrhagic stroke", "Patient age of 78"],
        answer: 2,
        rationale: "A recent hemorrhagic stroke is an absolute contraindication — tPA would worsen active bleeding. Trap: BP of 168/94 (option A) is a modifiable factor that can often be managed per protocol before giving tPA, not an automatic disqualifier; age alone (D) is not a contraindication either.",
      },
      {
        q: "A patient returns from having a CT scan confirming an ischemic stroke 90 minutes ago. What is the nurse's priority BEFORE the patient eats or drinks anything?",
        options: ["Assess bowel sounds", "Perform a swallow screen", "Weigh the patient", "Obtain a fingerstick glucose"],
        answer: 1,
        rationale: "A swallow screen must be done before ANY oral intake post-stroke to prevent aspiration — this is a top nursing priority. Trap: other assessments (glucose, weight, bowel sounds) are reasonable but none of them prevent an acute, life-threatening complication the way the swallow screen does.",
      },
      {
        q: "A family member says the patient 'just suddenly collapsed with maximum weakness all at once' with a known history of atrial fibrillation. Which stroke type does the nurse suspect?",
        options: ["Thrombotic", "Embolic", "Subarachnoid hemorrhage", "Intracerebral hemorrhage"],
        answer: 1,
        rationale: "Embolic strokes present with SUDDEN onset and maximal deficit at the start, often from AFib-related clots traveling from the heart. Trap: thrombotic strokes evolve more gradually and are often preceded by TIAs — the word 'suddenly' plus the AFib history is the signal pointing to embolic.",
      },
    ],
  },
  {
    id: 4,
    sys: "neuro",
    title: "Neuro Infections, Autoimmune & Degenerative",
    subtitle: "Meningitis · MS · MG · GBS · Parkinson's · ALS",
    objectives: [
      "Recognize meningitis red flags and isolation precautions",
      "Tell MS, MG, and GBS apart using their SIGNATURE pattern",
      "Distinguish myasthenic crisis from cholinergic crisis",
      "Match Parkinson's TRAP symptoms and know ALS's one defining feature",
    ],
    content: [
      {
        heading: "Meningitis",
        points: [
          "Bacterial = medical emergency, viral = milder",
          "Signs: fever, headache, NUCHAL RIGIDITY, photophobia, +Kernig, +Brudzinski",
          "Tx: IV antibiotics stat, dexamethasone, seizure precautions, DROPLET isolation",
        ],
      },
      {
        heading: "Autoimmune trio — MS, MG, GBS",
        points: [
          "MS: demyelination of CNS → weakness, vision changes, relapsing-remitting pattern, fatigue, bladder/bowel dysfunction",
          "MG: autoimmune destruction of acetylcholine receptors → fluctuating weakness that gets WORSE with activity, ptosis, diplopia",
          "GBS: autoimmune attack on PERIPHERAL nerves, often AFTER an infection → ASCENDING paralysis (starts in feet, moves UP) — watch respiratory status closely",
        ],
      },
      {
        heading: "MG crisis differentiation — a favorite ATI pair",
        points: [
          "Myasthenic crisis = UNDER-medicated or infection → severe weakness, respiratory compromise",
          "Cholinergic crisis = OVER-medicated → weakness PLUS salivation, bradycardia, GI cramping (too much acetylcholine effect)",
          "Give anticholinesterase meds ON TIME, often before meals, to prevent crisis",
        ],
      },
      {
        heading: "Parkinson's vs ALS",
        points: [
          "Parkinson's TRAP: Tremor at rest, Rigidity, Akinesia/bradykinesia, Postural instability — low dopamine",
          "ALS: motor neuron degeneration → progressive weakness, but COGNITION STAYS INTACT — the mind is trapped in a failing body",
          "Parkinson's tx: carbidopa/levodopa. ALS tx: supportive, riluzole slows progression",
        ],
      },
    ],
    mnemonics: [
      { title: "My GBS is MS", text: "Myasthenia = muscle fatigue that WORSENS with use. GBS = goes UP (ascending). MS = multiple scars (demyelination, CNS)." },
      { title: "No Dope in the Park (TRAP)", text: "Tremor, Rigidity, Akinesia, Postural instability — say TRAP and you'll never forget Parkinson's four cardinal signs." },
      { title: "Cholinergic = too much of a good thing", text: "SLUDGE (salivation, lacrimation, urination, diarrhea, GI upset, emesis) = cholinergic crisis from too much anticholinesterase medication." },
      { title: "ALS = body fails, mind stays", text: "The single fact ATI tests over and over: cognition is INTACT in ALS even as the body weakens." },
    ],
    traps: [
      { trap: "A patient with MG becomes more short of breath after their scheduled dose of pyridostigmine is given LATE.", logic: "Reasoning: late/missed dosing in MG points to MYASTHENIC crisis (under-medication), not cholinergic. If the stem instead showed the dose was given TWICE or early with new GI cramping/salivation, that flips to cholinergic (over-medication)." },
      { trap: "A stem describes ascending weakness starting in the feet two weeks after a GI infection, and asks the nursing priority.", logic: "Reasoning: this is textbook GBS. The trap is picking a comfort-focused answer (positioning, pain control) instead of the real priority — monitoring RESPIRATORY status/vital capacity, because ascending paralysis can reach the diaphragm." },
    ],
    questions: [
      {
        q: "A patient with myasthenia gravis received their scheduled pyridostigmine dose 2 hours late and now has worsening weakness and difficulty breathing. The nurse suspects which condition?",
        options: ["Cholinergic crisis", "Myasthenic crisis", "Guillain-Barré exacerbation", "Multiple sclerosis relapse"],
        answer: 1,
        rationale: "A LATE or missed dose = under-medication = myasthenic crisis. Trap: cholinergic crisis is caused by TOO MUCH medication with signs like salivation and bradycardia — the timing detail (late dose) is the key differentiator ATI wants you to catch.",
      },
      {
        q: "Two weeks after a respiratory infection, a patient develops weakness that began in the feet and is progressing upward. What is the nurse's priority assessment?",
        options: ["Bladder function", "Respiratory rate and vital capacity", "Skin integrity", "Bowel sounds"],
        answer: 1,
        rationale: "This is Guillain-Barré syndrome — ascending paralysis can progress to the diaphragm and cause respiratory failure, making respiratory assessment the top priority. Trap: skin/bowel/bladder are all valid GBS nursing concerns long-term, but none are immediately life-threatening the way respiratory compromise is.",
      },
      {
        q: "Which combination of symptoms is most consistent with Parkinson's disease?",
        options: ["Ascending paralysis and areflexia", "Tremor at rest, rigidity, and bradykinesia", "Ptosis and fluctuating weakness that worsens with activity", "Optic neuritis and relapsing weakness"],
        answer: 1,
        rationale: "TRAP = Tremor, Rigidity, Akinesia/bradykinesia, Postural instability defines Parkinson's. Trap: option C describes MG (fluctuating, worse with activity, ptosis) and option A describes GBS — ATI often lines up all three autoimmune/degenerative disorders as distractors for each other.",
      },
      {
        q: "A patient with ALS asks the nurse if they will 'lose their mind' as the disease progresses. What is the nurse's best response?",
        options: ["\"Yes, cognitive decline is expected in later stages.\"", "\"ALS affects motor neurons; your cognitive function is expected to remain intact.\"", "\"This varies too much to predict.\"", "\"Most patients develop dementia within a year.\""],
        answer: 1,
        rationale: "ALS is a motor neuron disease — cognition remains intact even as physical function declines. Trap: ATI tests this specific fact repeatedly because it's the detail most students confuse with other degenerative diseases like dementia.",
      },
    ],
  },
  {
    id: 5,
    sys: "immune",
    title: "Immune System & Allergic Disorders",
    subtitle: "Innate vs Adaptive · Immune Deficiency · Anaphylaxis",
    objectives: [
      "Separate innate vs adaptive immunity and active vs passive immunity",
      "Know the #1 nursing priority for immunodeficient patients",
      "Rank the hypersensitivity reaction types I–IV",
      "Sequence anaphylaxis treatment in the correct priority order",
    ],
    content: [
      {
        heading: "Immune system basics",
        points: [
          "Innate immunity — born with it, fast, not specific (skin, mucous membranes, phagocytes)",
          "Adaptive immunity — develops after exposure: Active (body makes its own antibodies — natural via infection, artificial via vaccine) vs Passive (antibodies given TO you — natural via breast milk, artificial via immune globulin)",
          "B cells make antibodies, T cells attack infected cells directly, NK cells destroy tumor cells",
        ],
      },
      {
        heading: "Immune deficiency disorders",
        points: [
          "Primary = congenital (SCID = no T or B cells, 'bubble boy'; Wiskott-Aldrich = immune + platelet problem)",
          "Acquired = HIV/AIDS destroys CD4 T cells",
          "Nursing #1 priority: INFECTION PREVENTION — strict hand hygiene, avoid live vaccines, monitor for fever >100.4°F",
        ],
      },
      {
        heading: "Hypersensitivity reaction types",
        points: [
          "Type I — Immediate, IgE-mediated (anaphylaxis, asthma, allergic rhinitis)",
          "Type II — Cytotoxic (blood transfusion reaction)",
          "Type III — Immune complex (lupus, rheumatoid arthritis)",
          "Type IV — Delayed, T-cell mediated (contact dermatitis, TB skin test reaction)",
        ],
      },
      {
        heading: "Anaphylaxis — the sequence matters",
        points: [
          "1. STOP the allergen exposure immediately",
          "2. Epinephrine IM in the thigh (vastus lateralis) — this comes before everything else pharmacologic",
          "3. Oxygen + airway management, IV access/fluids, antihistamines/corticosteroids as adjuncts",
          "Teaching: carry epi-auto-injector, wear medical alert ID, avoid known allergens",
        ],
      },
    ],
    mnemonics: [
      { title: "B for Bullets, T for Tactical", text: "B cells fire antibody 'bullets' from a distance, T cells go tactical and attack infected cells directly." },
      { title: "I-II-III-IV in order", text: "Immediate → cytotoxic → immune complex → delayed. Say 'I is Immediate, IV is very slow (delayed)' to anchor the two ends first." },
      { title: "Epi FIRST, always", text: "In anaphylaxis, epinephrine IM is the single highest-priority intervention — before O2, before IV fluids, before antihistamines." },
    ],
    traps: [
      { trap: "An anaphylaxis question lists 4 correct-sounding interventions (epinephrine, O2, IV fluids, antihistamine) and asks which comes FIRST.", logic: "Reasoning: ATI is testing SEQUENCE, not just correctness — all 4 may be appropriate, but epinephrine IM always goes first because it reverses the life-threatening vasodilation/bronchoconstriction fastest. When every option looks 'right,' the question is asking about order." },
      { trap: "A stem describes a contact dermatitis reaction and asks which hypersensitivity type it is, with 'Type I' as a tempting choice because allergies = Type I in most students' minds.", logic: "Reasoning: Type I is for IMMEDIATE IgE reactions (hives within minutes). Contact dermatitis is DELAYED (24-72 hrs) and T-cell mediated = Type IV. Timing is the differentiator, not just 'is this allergic.'" },
    ],
    questions: [
      {
        q: "A patient begins having facial swelling, wheezing, and hypotension after a bee sting. What is the nurse's FIRST action?",
        options: ["Administer diphenhydramine", "Administer epinephrine IM", "Start high-flow oxygen", "Obtain IV access for fluids"],
        answer: 1,
        rationale: "Epinephrine IM is the priority first-line treatment for anaphylaxis — it reverses bronchoconstriction and vasodilation. Trap: all four options are appropriate parts of anaphylaxis management, but the question asks for FIRST — epi always leads.",
      },
      {
        q: "A newborn who received passive immunity from breastfeeding is an example of which type of immunity?",
        options: ["Active natural immunity", "Active artificial immunity", "Passive natural immunity", "Passive artificial immunity"],
        answer: 2,
        rationale: "Passive = antibodies given TO the person (not made by them); natural = via a biological/non-injected route (breast milk). Trap: students confuse 'natural' with 'active' — natural just means the antibodies came through a biological process, not that the body made them itself.",
      },
      {
        q: "Which nursing intervention is the HIGHEST priority for a patient with severe combined immunodeficiency (SCID)?",
        options: ["Encourage a high-protein diet", "Strict infection prevention including avoiding live vaccines", "Daily weight monitoring", "Range-of-motion exercises"],
        answer: 1,
        rationale: "SCID patients have no functional T or B cells — infection prevention (hand hygiene, avoiding live vaccines and sick contacts) is the top priority since even minor infections can be fatal. Trap: nutrition and mobility are reasonable general goals, but they don't address the life-threatening vulnerability specific to SCID.",
      },
      {
        q: "A patient develops an itchy, red rash 48 hours after wearing a new watch. Which hypersensitivity reaction does the nurse recognize?",
        options: ["Type I", "Type II", "Type III", "Type IV"],
        answer: 3,
        rationale: "Delayed onset (48 hours) + T-cell mediated = Type IV (contact dermatitis). Trap: the DELAY is the key detail — Type I reactions are immediate (minutes), so a 48-hour delay rules Type I out even though 'allergic reaction' sounds like it should default there.",
      },
    ],
  },
  {
    id: 6,
    sys: "endo",
    title: "Thyroid, Parathyroid & Adrenal",
    subtitle: "Hypo/Hyperthyroid · SIADH vs DI · Addison's vs Cushing's",
    objectives: [
      "Match thyroid labs to hypo vs hyperthyroidism without flipping direction",
      "Tell SIADH and DI apart using fluid balance, not just the hormone name",
      "Tell Addison's and Cushing's apart using cortisol level as the anchor",
      "Recognize thyroid storm and myxedema coma as opposite emergencies",
    ],
    content: [
      {
        heading: "Thyroid — direction is everything",
        points: [
          "Hypothyroidism: ↓T3/T4 → COLD, tired, weight GAIN, constipation, bradycardia, depression. Tx: levothyroxine, morning, empty stomach",
          "Hyperthyroidism (Graves'): ↑T3/T4 → HOT, anxious, weight LOSS, tachycardia, diarrhea, exophthalmos. Tx: radioactive iodine, beta-blockers, thyroidectomy",
          "Myxedema coma (severe hypothyroid emergency): hypothermia, hypotension, hypoventilation, altered LOC",
          "Thyroid storm (severe hyperthyroid emergency): severe tachycardia, hyperthermia, agitation, heart failure",
        ],
      },
      {
        heading: "Posterior pituitary — SIADH vs DI (the classic ATI opposite pair)",
        points: [
          "SIADH = too much ADH → body holds onto water → dilutional hyponatremia, concentrated urine, fluid OVERLOAD",
          "DI = too little ADH → body dumps water → massive dilute urine output, risk of severe DEHYDRATION and hypernatremia",
          "SIADH treatment = fluid RESTRICTION. DI treatment = desmopressin (DDAVP) + fluid replacement",
        ],
      },
      {
        heading: "Parathyroid",
        points: [
          "Hyperparathyroidism: ↑PTH → ↑Ca → 'bones, stones, groans, moans' (bone pain, kidney stones, GI upset, fatigue)",
          "Hypoparathyroidism: ↓PTH → ↓Ca → tetany, +Chvostek, +Trousseau, laryngospasm risk",
        ],
      },
      {
        heading: "Adrenal — Addison's vs Cushing's (anchor on cortisol level)",
        points: [
          "Addison's = cortisol DEFICIENCY → fatigue, hypotension, hyperpigmentation, weight LOSS. Addisonian crisis = life-threatening shock",
          "Cushing's = cortisol EXCESS → moon face, buffalo hump, thin skin, striae, weight GAIN, hyperglycemia, hypertension",
        ],
      },
    ],
    mnemonics: [
      { title: "High = Hot, Low = Slow", text: "Hyperthyroid = hot/fast/losing weight. Hypothyroid = slow/cold/gaining weight. Say it before every thyroid question." },
      { title: "SIADH = Soaked Inside, DI = Dry Inside", text: "SIADH holds fluid (soaked). DI dumps fluid (dry). This single line resolves the #1 most-missed endocrine pair on ATI." },
      { title: "Chvostek = Cheek, Trousseau = Tourniquet/arm", text: "Both are LOW calcium signs — tap the cheek (Chvostek), inflate a cuff on the arm (Trousseau)." },
      { title: "Cushy = Cushion of fat, Addison = Absence of steroid", text: "Cushing's builds fat deposits (cushion). Addison's is the ABSENCE of adrenal steroid output." },
    ],
    traps: [
      { trap: "A patient has serum sodium of 118, concentrated urine, and no edema — and one distractor answer says 'diabetes insipidus.'", logic: "Reasoning: DI causes DILUTE urine and HIGH sodium from fluid loss — the exact opposite pattern. Concentrated urine + LOW sodium + fluid retention = SIADH. Match urine concentration and sodium DIRECTION, don't just pattern-match 'ADH problem' to either answer." },
      { trap: "A stem describes hyperpigmentation, hypotension, and fatigue, with 'Cushing's syndrome' as a distractor because both are adrenal conditions.", logic: "Reasoning: hyperpigmentation + hypotension + weight LOSS = cortisol DEFICIENCY = Addison's. Cushing's gives you the opposite build — weight gain, moon face, hypertension. When two conditions come from the same gland, check whether the hormone is HIGH or LOW before picking." },
    ],
    questions: [
      {
        q: "A patient has serum sodium of 119 mEq/L, concentrated urine, and no signs of edema despite fluid retention. Which condition does the nurse suspect?",
        options: ["Diabetes insipidus", "SIADH", "Addison's disease", "Hyperparathyroidism"],
        answer: 1,
        rationale: "SIADH causes dilutional hyponatremia with concentrated urine due to excess ADH causing water retention. Trap: DI produces the OPPOSITE — dilute urine and hypernatremia from fluid loss. Match the sodium direction and urine concentration, not just the word 'ADH.'",
      },
      {
        q: "Which finding is expected in a patient with untreated Addison's disease?",
        options: ["Moon face and buffalo hump", "Hyperpigmentation and hypotension", "Weight gain and hypertension", "Hyperglycemia and striae"],
        answer: 1,
        rationale: "Addison's = cortisol deficiency → hyperpigmentation (from excess ACTH), hypotension, weight loss, fatigue. Trap: options A, C, and D all describe CUSHING'S (cortisol EXCESS) — ATI stacks the distractors from the 'opposite' disease to test if you know which direction the hormone is off.",
      },
      {
        q: "A patient taking levothyroxine for hypothyroidism asks when to take it. What is the nurse's best teaching?",
        options: ["With breakfast to reduce nausea", "At bedtime with a snack", "In the morning on an empty stomach", "With calcium supplements for better absorption"],
        answer: 2,
        rationale: "Levothyroxine should be taken in the morning on an empty stomach for consistent absorption. Trap: option D is designed to catch students who know calcium is relevant to thyroid/parathyroid conditions — but calcium actually IMPAIRS levothyroxine absorption and should be separated by several hours.",
      },
      {
        q: "A patient with hyperparathyroidism reports flank pain and is found to have a urinary calculus. The nurse understands this is related to which lab abnormality?",
        options: ["Hypercalcemia", "Hypocalcemia", "Hyperkalemia", "Hyponatremia"],
        answer: 0,
        rationale: "'Bones, stones, groans, moans' — hyperparathyroidism causes hypercalcemia, which leads to kidney stones. Trap: don't confuse this with hypoparathyroidism's presentation (tetany, Chvostek/Trousseau from LOW calcium) — the mnemonic phrase itself only applies to the HIGH calcium condition.",
      },
    ],
  },
  {
    id: 7,
    sys: "endo",
    title: "Diabetes Mellitus & Obesity",
    subtitle: "Type 1 vs 2 · Hypo/Hyperglycemia · DKA vs HHS · Obesity Risks",
    objectives: [
      "Know the 3 P's and the diagnostic glucose thresholds cold",
      "Treat hypoglycemia in the correct sequence for conscious vs unconscious patients",
      "Tell DKA and HHS apart by ketones, onset speed, and typical patient type",
      "Connect obesity's major complication categories to nursing priorities",
    ],
    content: [
      {
        heading: "Diabetes basics & diagnostics",
        points: [
          "Type 1 = autoimmune, NO insulin production, usually younger onset, ALWAYS needs insulin",
          "Type 2 = insulin resistance + relative deficiency, tied to obesity, may start with lifestyle/oral meds",
          "3 P's: Polyuria, Polydipsia, Polyphagia",
          "Diagnostic: fasting glucose ≥126, random glucose ≥200 with symptoms, A1C ≥6.5%",
        ],
      },
      {
        heading: "Hypoglycemia vs hyperglycemia treatment",
        points: [
          "Hypoglycemia symptoms: shaky, sweaty, confused, irritable, tachycardic, headache → can progress to seizure/coma",
          "CONSCIOUS: 15g fast-acting carb, recheck glucose in 15 min ('15-15 rule')",
          "UNCONSCIOUS: IV dextrose or IM/SQ glucagon — never give oral anything to an unconscious patient",
          "Hyperglycemia: polyuria, polydipsia, polyphagia, blurred vision, fatigue",
        ],
      },
      {
        heading: "DKA vs HHS — the other classic ATI opposite pair",
        points: [
          "DKA: usually Type 1, ketosis + metabolic ACIDOSIS, Kussmaul respirations, FRUITY breath, rapid onset (hours)",
          "HHS: usually Type 2, EXTREMELY high glucose, severe dehydration, NO significant ketosis/acidosis, slower onset (days), often has neuro changes from the extreme osmolarity",
          "Both need: airway, IV fluids first, then IV insulin, watch potassium closely as it shifts with insulin therapy",
        ],
      },
      {
        heading: "Obesity — complication categories",
        points: [
          "Cardiometabolic: T2DM, HTN, dyslipidemia, CAD, stroke",
          "Respiratory: obstructive sleep apnea, obesity hypoventilation, post-op respiratory risk",
          "GI/hepatic: NAFLD, GERD, gallstones",
          "Nursing focus: emphasize HEALTH gains (BP, glucose, mobility) not just the number on the scale",
        ],
      },
    ],
    mnemonics: [
      { title: "Hot & dry = sugar high, cold & clammy = need some candy", text: "Hyperglycemia presents warm and dry; hypoglycemia presents cold, sweaty, shaky — treat the clammy one with carbs FAST." },
      { title: "DKA = Dry, Kussmaul, Acidotic (Type 1, fast)", text: "Fruity breath + Kussmaul respirations + rapid onset = DKA, usually in a known Type 1 patient." },
      { title: "HHS = Huge Hyperglycemia, Slow (Type 2, no ketones)", text: "Sky-high glucose without the acidosis, develops over days, usually in an older Type 2 patient with a triggering illness." },
      { title: "15-15 Rule", text: "15 grams of fast carb, wait 15 minutes, recheck — repeat if still low. This is your go-to answer for a CONSCIOUS hypoglycemic patient." },
    ],
    traps: [
      { trap: "A stem describes a known Type 2 diabetic, glucose of 900, no fruity breath, and altered mental status, with 'DKA' as the tempting first answer.", logic: "Reasoning: the ABSENCE of ketosis/fruity breath plus the Type 2 history plus the extreme glucose level (often >600) points to HHS, not DKA. DKA needs the acid-base/ketone piece — high glucose alone in a Type 2 patient is the HHS signature." },
      { trap: "An unconscious hypoglycemic patient's family asks if they should give juice by mouth.", logic: "Reasoning: NEVER give anything by mouth to an unconscious or unresponsive patient — aspiration risk. The correct route is IM/SQ glucagon or IV dextrose, administered by trained personnel." },
    ],
    questions: [
      {
        q: "A patient with Type 2 diabetes presents with glucose of 850 mg/dL, severe dehydration, altered mental status, and no ketones in the urine. Which condition does the nurse suspect?",
        options: ["Diabetic ketoacidosis (DKA)", "Hyperglycemic hyperosmolar syndrome (HHS)", "Hypoglycemia", "Somogyi effect"],
        answer: 1,
        rationale: "HHS: extremely high glucose, severe dehydration, absent ketosis, typically Type 2 — matches this presentation exactly. Trap: the sky-high glucose number tempts students toward DKA, but the ABSENCE of ketones and the Type 2 history rule DKA out.",
      },
      {
        q: "A conscious patient with a glucose of 58 mg/dL reports feeling shaky and sweaty. What is the nurse's priority action?",
        options: ["Administer IM glucagon", "Give 15 g of a fast-acting carbohydrate and recheck in 15 minutes", "Start an IV dextrose infusion", "Withhold food and recheck in 1 hour"],
        answer: 1,
        rationale: "For a CONSCIOUS hypoglycemic patient, the 15-15 rule is the priority: 15g fast carb, recheck in 15 minutes. Trap: glucagon and IV dextrose are reserved for patients who are UNCONSCIOUS or unable to safely swallow — the word 'conscious' in the stem is what determines the route.",
      },
      {
        q: "Which arterial blood gas and clinical picture is most consistent with DKA?",
        options: ["Metabolic alkalosis, slow onset over days, no ketones", "Metabolic acidosis, Kussmaul respirations, fruity breath odor", "Respiratory acidosis, bradypnea, confusion", "Normal pH, extremely high glucose, severe dehydration only"],
        answer: 1,
        rationale: "DKA = metabolic acidosis with compensatory Kussmaul respirations and ketone (fruity/acetone) breath odor. Trap: option D describes HHS instead — normal pH with no acid-base disturbance and glucose as the dominant feature, no ketones/Kussmaul.",
      },
      {
        q: "A nurse is teaching a patient newly diagnosed with obesity-related health risks. Which complication category should the nurse prioritize discussing FIRST given the highest mortality impact?",
        options: ["Osteoarthritis and joint pain", "Cardiometabolic disease (T2DM, HTN, CAD, stroke)", "GERD and gallstones", "Difficulty finding properly fitting clothing"],
        answer: 1,
        rationale: "Cardiometabolic complications (diabetes, hypertension, CAD, stroke) carry the highest mortality risk among obesity-related complications. Trap: joint pain and GI issues are real and valid teaching points, but ATI prioritizes life-threatening systemic risk over quality-of-life complaints when a stem asks you to rank priority.",
      },
    ],
  },
  {
    id: 8,
    sys: "resp",
    title: "Respiratory Assessment & Upper Airway",
    subtitle: "PFTs · Auscultation · Sinusitis · Epistaxis · OSA · Trach Care",
    objectives: [
      "Match abnormal breath sounds to their most likely cause",
      "Know percussion tones and what each one means",
      "Sequence epistaxis and post-tonsillectomy nursing care",
      "Know the tracheostomy emergency protocol cold",
    ],
    content: [
      {
        heading: "Percussion & auscultation — the pattern-matching section",
        points: [
          "Resonant = normal lung. Dull = fluid/solid (pneumonia, tumor, effusion). Hyperresonant = too much air (emphysema, pneumothorax)",
          "Crackles/rales = fluid. Wheezing = narrow airways. Rhonchi = mucus. Stridor = upper airway obstruction — THIS ONE IS AN EMERGENCY",
          "Tactile fremitus increased = consolidation (pneumonia). Decreased = air trapping/effusion (emphysema, pleural effusion)",
        ],
      },
      {
        heading: "Diagnostics",
        points: [
          "Pulse ox — remove nail polish for accuracy",
          "ABGs — hold supplemental O2 15 min before draw when possible per protocol",
          "Thoracentesis — patient sits up LEANING FORWARD, monitor for pneumothorax after",
          "Bronchoscopy — NPO before AND after, monitor gag reflex return before resuming PO",
        ],
      },
      {
        heading: "Upper respiratory disorders",
        points: [
          "Sinusitis: facial pain/pressure, purulent drainage; chronic if >12 weeks",
          "Pharyngitis (strep): red tonsils, white patches, fever — UNTREATED can cause rheumatic fever (affects heart valves)",
          "Epistaxis: sit up, lean FORWARD, pinch soft part of nose 10–15 min, avoid nose-blowing 24 hrs",
          "OSA: repeated airway obstruction during sleep, risk factors = obesity/thick neck/alcohol; tx = CPAP",
        ],
      },
      {
        heading: "Post-tonsillectomy & tracheostomy safety",
        points: [
          "Post-tonsillectomy: watch for FREQUENT SWALLOWING and bright red blood = active bleeding, avoid straws and rough foods",
          "Trach emergency: accidental decannulation — if the tract is mature, reinsert obturator/new trach immediately; if NOT mature (recent surgery), call for help, do NOT attempt blind reinsertion",
          "Always keep obturator and a spare trach at bedside",
        ],
      },
    ],
    mnemonics: [
      { title: "PUSH for sinusitis", text: "Pressure, Unrelieved congestion, Sinus tenderness, Headache." },
      { title: "Dull = full, Hyper = air", text: "Dull percussion means something's filling the space (fluid/solid). Hyperresonant means too much trapped air." },
      { title: "Sit up, lean forward, pinch", text: "Your 3-step epistaxis script — say it in that order every time." },
      { title: "Swallow = bleed", text: "Frequent swallowing after a tonsillectomy is the earliest sign of bleeding — before you'll even see blood." },
    ],
    traps: [
      { trap: "A post-tonsillectomy patient is swallowing frequently but there's no visible blood yet, and a distractor says 'this is a normal response to surgical swelling.'", logic: "Reasoning: frequent swallowing after tonsillectomy is THE classic early sign of ACTIVE BLEEDING, even before you see blood in the mouth — the patient is swallowing blood trickling down the throat. Never write this off as 'normal.'" },
      { trap: "A patient's trach was accidentally dislodged 2 days after surgery (immature tract), and a distractor answer says to 'immediately reinsert the trach tube.'", logic: "Reasoning: with an IMMATURE tract (recent surgery, <7 days typically), blind reinsertion risks creating a false passage. Call for help/rapid response instead. A MATURE tract is the only scenario where immediate reinsertion by the nurse is appropriate." },
    ],
    questions: [
      {
        q: "A patient 4 hours post-tonsillectomy is swallowing frequently but the nurse sees no visible blood in the mouth. What is the nurse's priority action?",
        options: ["Document as a normal post-op finding", "Offer ice chips to reduce swelling", "Notify the provider for suspected bleeding", "Reassure the patient this is expected swallowing"],
        answer: 2,
        rationale: "Frequent swallowing is the earliest sign of post-tonsillectomy hemorrhage, even before visible blood appears — this requires prompt provider notification. Trap: ATI wants students to recognize this subtle early sign rather than dismissing it as normal surgical discomfort.",
      },
      {
        q: "A patient's tracheostomy tube (placed 2 days ago) becomes accidentally dislodged. What is the nurse's priority action?",
        options: ["Immediately reinsert the same trach tube", "Call for help/rapid response and do not attempt blind reinsertion", "Cover the stoma with an occlusive dressing and wait", "Insert a nasal cannula into the stoma"],
        answer: 1,
        rationale: "With an immature tract (recent surgery), blind reinsertion risks creating a false passage and worsening the airway emergency — call for help instead. Trap: option A would be correct ONLY if the tract were mature (established, typically >7 days) — the timing detail in the stem changes the right answer completely.",
      },
      {
        q: "On percussion, a nurse notes a dull sound over the right lower lobe with decreased breath sounds. Which condition is most consistent with this finding?",
        options: ["Emphysema", "Pneumothorax", "Pleural effusion", "Asthma"],
        answer: 2,
        rationale: "Dull percussion = fluid or solid filling the space; combined with decreased breath sounds, this points to a pleural effusion. Trap: emphysema and pneumothorax both cause HYPERresonance (too much trapped air) — the opposite finding — so they're ruled out by the word 'dull' alone.",
      },
      {
        q: "A patient reports a nosebleed after vigorous nose-blowing. What is the correct positioning for the nurse to teach?",
        options: ["Lie flat and apply ice to the forehead", "Tilt the head back and pinch the bridge of the nose", "Sit up, lean forward, and pinch the soft part of the nose", "Sit up straight with the head in a neutral position"],
        answer: 2,
        rationale: "Sitting up and leaning FORWARD while pinching the soft part of the nose prevents blood from draining down the throat (which can cause aspiration or nausea) and applies direct pressure to the bleeding site. Trap: 'tilt the head back' is a common myth that ATI specifically tests against — it's incorrect and increases aspiration risk.",
      },
    ],
  },
  {
    id: 9,
    sys: "resp",
    title: "Lower Airway Disorders",
    subtitle: "Pneumonia · TB · Pneumothorax · Pleural Effusion · Aspiration",
    objectives: [
      "Recognize the geriatric atypical presentation of pneumonia",
      "Know RIPE therapy and TB isolation requirements cold",
      "Differentiate simple pneumothorax from TENSION pneumothorax urgency",
      "Sequence aspiration prevention priorities",
    ],
    content: [
      {
        heading: "Pneumonia",
        points: [
          "S/S: fever, chills, productive cough, pleuritic pain, crackles, ↑HR/RR, ↓O2",
          "ELDERLY may show ONLY confusion/fatigue — no classic fever/cough, a huge ATI trap",
          "Tx: antibiotics, O2, fluids, incentive spirometer, early ambulation",
        ],
      },
      {
        heading: "Tuberculosis (TB)",
        points: [
          "Active: cough >3 weeks, night sweats, weight loss, hemoptysis",
          "Latent: positive skin test, NO symptoms, not contagious",
          "RIPE therapy: Rifampin (turns fluids orange), Isoniazid (hepatotoxic), Pyrazinamide, Ethambutol (eye toxicity)",
          "AIRBORNE isolation: N95 mask + negative pressure room",
        ],
      },
      {
        heading: "Pneumothorax — know when it becomes an emergency",
        points: [
          "Simple pneumothorax: air in pleural space, lung partially collapses, sudden dyspnea/chest pain",
          "TENSION pneumothorax: air keeps building with NO escape → tracheal deviation, absent breath sounds one side, severe respiratory distress, hemodynamic collapse — TRUE EMERGENCY needing immediate needle decompression/chest tube",
          "Pleural effusion: fluid (not air) buildup → dull percussion, decreased breath sounds; tx = thoracentesis",
        ],
      },
      {
        heading: "Aspiration prevention",
        points: [
          "Risk factors: decreased LOC, dysphagia, tube feeding, improper positioning",
          "Prevention: HOB ≥30°, verify tube placement, swallow evaluation, small bites/sips",
          "If suspected: assess breath sounds, SpO2, respiratory distress, notify provider immediately",
        ],
      },
    ],
    mnemonics: [
      { title: "RIPE for TB", text: "Rifampin, Isoniazid, Pyrazinamide, Ethambutol — say 'RIPE' and you'll never blank on the 4-drug regimen." },
      { title: "TB = Tight mask + Big meds for months", text: "N95 airborne precautions + a long multi-drug course — the two things ATI always tests together." },
      { title: "Tracheal deviation = TENSION, act NOW", text: "This single finding separates a routine pneumothorax from a life-threatening emergency." },
      { title: "Elderly pneumonia = confusion, not fever", text: "If the stem is an older adult with 'new confusion' and vague symptoms, think infection/pneumonia before dismissing it as 'just aging.'" },
    ],
    traps: [
      { trap: "An 82-year-old patient has new-onset confusion, mild fatigue, and no fever or cough, and a distractor says 'this is likely dementia progression.'", logic: "Reasoning: elderly patients often present ATYPICALLY with pneumonia and other infections — confusion may be the ONLY sign. Don't assume a new cognitive change in an older adult is just 'aging' or dementia without ruling out an acute, treatable cause like infection first." },
      { trap: "A trauma patient has absent breath sounds on one side, tracheal deviation, and hypotension, with a distractor answer of 'obtain a chest x-ray before treating.'", logic: "Reasoning: this presentation is TENSION pneumothorax — a clinical diagnosis requiring IMMEDIATE needle decompression. Waiting for imaging in a hemodynamically unstable patient can be fatal; treat first, confirm after when the patient is unstable enough to die waiting." },
    ],
    questions: [
      {
        q: "An 84-year-old patient develops new confusion and mild fatigue with no fever or cough. What should the nurse do FIRST?",
        options: ["Document as expected age-related cognitive decline", "Assess for signs of infection, including a possible atypical pneumonia presentation", "Reorient the patient and reassess in 24 hours", "Notify the family that dementia may be progressing"],
        answer: 1,
        rationale: "Elderly patients often present atypically with pneumonia/infection — new confusion may be the only sign. Ruling out an acute, treatable cause is the priority before attributing it to aging or dementia. Trap: ATI repeatedly tests whether students will dismiss a new geriatric symptom instead of investigating it.",
      },
      {
        q: "A trauma patient has absent breath sounds on the left, tracheal deviation to the right, and a blood pressure of 78/50. What is the nurse's priority expectation?",
        options: ["Immediate needle decompression, not waiting for a chest x-ray", "Obtain a stat chest x-ray to confirm before treatment", "Administer IV fluids and reassess in 15 minutes", "Position the patient in high Fowler's and observe"],
        answer: 0,
        rationale: "This presentation is tension pneumothorax — a clinical, life-threatening diagnosis requiring immediate needle decompression; waiting for imaging in an unstable patient risks death. Trap: 'confirm with imaging first' sounds cautious and thorough, but in an unstable patient it's the wrong answer — treat the emergency clinically.",
      },
      {
        q: "A patient starting RIPE therapy for active TB asks why their urine is orange. What is the nurse's best response?",
        options: ["\"This indicates liver damage and should be reported immediately.\"", "\"This is an expected, harmless effect of rifampin.\"", "\"This means the medication isn't working.\"", "\"This is a sign of ethambutol toxicity.\""],
        answer: 1,
        rationale: "Rifampin causes harmless orange discoloration of body fluids (urine, tears, sweat) — an expected, non-dangerous side effect. Trap: this is often confused with hepatotoxicity (which is actually linked to isoniazid, not the orange color) — know which drug in RIPE causes which specific effect.",
      },
      {
        q: "Which nursing action is the priority for preventing aspiration in a patient receiving continuous tube feeding?",
        options: ["Check gastric residual once per shift", "Keep the head of bed at 30 degrees or greater", "Flush the tube with water every 8 hours", "Change the feeding bag every 48 hours"],
        answer: 1,
        rationale: "Keeping the HOB at 30° or greater is the single most important intervention to prevent aspiration during tube feeding. Trap: the other options are all appropriate tube-feeding care tasks, but none directly prevents aspiration the way positioning does — match the intervention to the specific risk in the stem.",
      },
    ],
  },
  {
    id: 10,
    sys: "mixed",
    title: "Full-System Comprehensive Review",
    subtitle: "50 Mixed ATI-Style Questions · All Systems · Pure Trap-Pattern Drilling",
    objectives: [
      "Answer mixed questions WITHOUT knowing which system they're from first",
      "Catch every opposite-pair trap: SIADH/DI, Addison's/Cushing's, DKA/HHS, myasthenic/cholinergic",
      "Practice priority/delegation logic across all 4 systems",
      "Walk into test day having already seen every major trap pattern once",
    ],
    content: [
      {
        heading: "Your Day 10 game plan",
        points: [
          "Do NOT read the answer choices first — form your OWN answer from the stem, then match it to a choice",
          "Every question below mixes systems on purpose — real ATI exams do this too",
          "If you miss one, don't just memorize the right answer — go back to that Day's mnemonic and traps section",
          "Time yourself: aim for under 90 seconds per question to build exam-pace stamina",
        ],
      },
      {
        heading: "The 6 opposite-pairs ATI tests over and over — final review",
        points: [
          "SIADH (fluid overload, dilutional low Na) vs DI (fluid loss, high Na)",
          "Addison's (low cortisol, hyperpigmentation, hypotension) vs Cushing's (high cortisol, moon face, hypertension)",
          "DKA (Type 1, ketones, acidosis, fast onset) vs HHS (Type 2, no ketones, slow onset, extreme glucose)",
          "Myasthenic crisis (under-medicated) vs cholinergic crisis (over-medicated)",
          "Hyperparathyroidism (high Ca, stones/bones/groans) vs hypoparathyroidism (low Ca, tetany, Chvostek/Trousseau)",
          "Hyperthyroid (hot/fast) vs hypothyroid (cold/slow)",
        ],
      },
    ],
    mnemonics: [
      { title: "Read the stem twice, choices once", text: "Most wrong answers come from rushing the STEM, not the choices. Slow down on the setup." },
      { title: "When everything sounds right, it's asking about ORDER", text: "If all 4 options seem correct, the question wants sequence/priority — pick what's first, not what's true." },
      { title: "Direction words are landmines", text: "Excess vs deficient. Increased vs decreased. Underline every single one before choosing." },
    ],
    traps: [
      { trap: "Full comprehensive exams mix ALL the traps above in random order with no system labels.", logic: "Reasoning: the real test won't tell you 'this is an endocrine question' — train yourself now to identify the SYSTEM from the symptoms alone before applying the logic you drilled on that day." },
    ],
    questions: [
      { q: "A patient has BP 172/48, HR 46, and irregular respirations 4 hours after a head injury. What does the nurse suspect?", options: ["Cushing's syndrome", "Cushing's triad from increased ICP", "Addisonian crisis", "Anaphylaxis"], answer: 1, rationale: "Widened pulse pressure + bradycardia + irregular respirations = Cushing's TRIAD (a neuro emergency), not Cushing's SYNDROME (an endocrine cortisol excess condition). Trap: these two terms sound identical but are completely unrelated conditions — a classic ATI wording trap." },
      { q: "A patient with Type 1 diabetes has fruity breath, Kussmaul respirations, and glucose of 480. Which condition is this?", options: ["HHS", "DKA", "Hypoglycemia", "SIADH"], answer: 1, rationale: "Fruity breath + Kussmaul respirations + Type 1 history = DKA. Trap: HHS lacks the ketone/acidosis signs and typically occurs in Type 2 patients with much higher glucose." },
      { q: "A patient with Addison's disease is at risk for which life-threatening complication if steroids are abruptly stopped?", options: ["Thyroid storm", "Addisonian crisis (shock)", "Myxedema coma", "Myasthenic crisis"], answer: 1, rationale: "Abrupt steroid withdrawal in Addison's disease can trigger an Addisonian crisis — severe hypotension and shock. Trap: thyroid storm and myxedema coma are THYROID emergencies, not adrenal — match the gland to the crisis." },
      { q: "Which lab pattern is expected in SIADH?", options: ["Hypernatremia with dilute urine", "Hyponatremia with concentrated urine", "Hypernatremia with concentrated urine", "Hyponatremia with dilute urine"], answer: 1, rationale: "SIADH retains water → dilutional hyponatremia with concentrated urine (the kidneys are holding onto everything). Trap: DI would be the reverse — hypernatremia with dilute urine." },
      { q: "A patient with myasthenia gravis received an EXTRA dose of pyridostigmine and now has excessive salivation and bradycardia. What does the nurse suspect?", options: ["Myasthenic crisis", "Cholinergic crisis", "Anaphylaxis", "Addisonian crisis"], answer: 1, rationale: "An EXTRA/over-dose plus SLUDGE-type symptoms (salivation, bradycardia) = cholinergic crisis (too much acetylcholinesterase inhibitor). Trap: myasthenic crisis is caused by UNDER-dosing, the opposite direction." },
      { q: "A patient has a positive Trousseau's sign and tetany. Which lab abnormality does the nurse expect?", options: ["Hypercalcemia", "Hypocalcemia", "Hyperkalemia", "Hypernatremia"], answer: 1, rationale: "Trousseau's and Chvostek's signs indicate hypocalcemia (seen in hypoparathyroidism). Trap: hypercalcemia (hyperparathyroidism) causes the OPPOSITE presentation — bone pain, stones, and GI upset, not tetany." },
      { q: "Which stroke type has the fastest, most sudden onset of maximal deficit?", options: ["Thrombotic", "Embolic", "TIA", "Subacute ischemic"], answer: 1, rationale: "Embolic strokes present suddenly with maximal deficit at onset since the clot travels from elsewhere (often the heart). Trap: thrombotic strokes evolve more gradually, sometimes preceded by TIA warning signs." },
      { q: "A patient with COPD has an oxygen saturation of 88% on room air. What oxygen flow rate should the nurse anticipate?", options: ["Low-flow, 2 L/min via nasal cannula", "High-flow, 10 L/min via nonrebreather", "No supplemental oxygen needed", "100% FiO2 via face mask"], answer: 0, rationale: "COPD patients rely on a hypoxic drive to breathe; low-flow O2 (2 L/min) avoids knocking out that drive. Trap: high-flow oxygen can cause CO2 retention and respiratory depression in chronic CO2 retainers." },
      { q: "A patient with GBS reports new tingling in the feet that is spreading upward. What is the nursing priority?", options: ["Monitor bowel function", "Monitor respiratory status/vital capacity", "Apply compression stockings", "Assess for skin breakdown"], answer: 1, rationale: "GBS causes ASCENDING paralysis that can reach the diaphragm — respiratory monitoring is the top priority. Trap: all other options are valid GBS nursing concerns but none are immediately life-threatening." },
      { q: "Which finding indicates a MATURE tracheostomy tract, making immediate reinsertion by the nurse appropriate if dislodged?", options: ["Tract present for less than 24 hours", "Tract present for more than 7 days, well-healed", "Patient is on a ventilator", "Trach was placed emergently"], answer: 1, rationale: "A mature tract (typically >7 days, well-healed) allows safe immediate reinsertion; an immature tract risks a false passage and requires calling for help instead." },
      { q: "A patient with hyperthyroidism (Graves' disease) is at risk for which acute emergency?", options: ["Myxedema coma", "Thyroid storm", "Addisonian crisis", "DKA"], answer: 1, rationale: "Thyroid STORM is the hyperthyroid emergency (severe tachycardia, hyperthermia, agitation). Trap: myxedema coma is the opposite — the hypOthyroid emergency." },
      { q: "Which cranial nerve deficit would MOST directly increase a patient's aspiration risk?", options: ["CN I (olfactory)", "CN IX/X (glossopharyngeal/vagus) — impaired gag/swallow", "CN XI (spinal accessory)", "CN IV (trochlear)"], answer: 1, rationale: "CN IX and X control the gag reflex and swallowing — impairment directly increases aspiration risk. Trap: CN I (smell) has no bearing on swallowing safety despite being an early, easy-to-overselect distractor." },
      { q: "A patient with pneumonia has increased tactile fremitus and dull percussion over the right lower lobe. What does this suggest?", options: ["Pneumothorax", "Lung consolidation from pneumonia", "Emphysema", "Normal lung findings"], answer: 1, rationale: "Increased fremitus + dull percussion = consolidation (fluid/solid filling alveoli), classic for pneumonia. Trap: pneumothorax and emphysema both cause DECREASED fremitus and HYPERresonance — the opposite pattern." },
      { q: "A patient with Cushing's syndrome should be monitored for which electrolyte imbalance?", options: ["Hyperkalemia", "Hypokalemia", "Hyponatremia", "Hypercalcemia"], answer: 1, rationale: "Excess cortisol in Cushing's syndrome has mineralocorticoid-like effects, promoting sodium/water retention and potassium loss — hypokalemia. Trap: Addison's would trend toward the opposite (hyperkalemia) due to cortisol/aldosterone deficiency." },
      { q: "Which is the priority nursing action for a patient having an active tonic-clonic seizure?", options: ["Insert an oral airway", "Restrain the limbs gently", "Turn the patient to the side and time the seizure", "Administer oral anticonvulsant medication"], answer: 2, rationale: "Turning to the side protects the airway; timing the seizure provides critical documentation. Trap: never insert anything into the mouth or restrain limbs during an active seizure — both risk injury." },
    ],
  },
];
