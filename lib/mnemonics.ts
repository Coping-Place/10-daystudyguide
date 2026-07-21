import { MnemonicCard } from "./types";

export const mnemonics: MnemonicCard[] = [
  // ---- Neurological ----
  {
    id: "aeiou-tips",
    title: "AEIOU TIPS — Causes of Altered LOC",
    system: "neuro",
    items: [
      { letter: "A", text: "Alcohol / Acidosis-Alkalosis (metabolic)" },
      { letter: "E", text: "Epilepsy (seizure) / Electrolytes" },
      { letter: "I", text: "Insulin (too much or too little glucose)" },
      { letter: "O", text: "Overdose / Oxygen deficit (hypoxia)" },
      { letter: "U", text: "Uremia (kidney failure — toxic buildup)" },
      { letter: "T", text: "Trauma / Temperature (hyper/hypothermia)" },
      { letter: "I", text: "Infection (meningitis, encephalitis)" },
      { letter: "P", text: "Psychiatric" },
      { letter: "S", text: "Stroke / Structural (tumor, hemorrhage)" },
    ],
  },
  {
    id: "fast",
    title: "FAST — Stroke Recognition",
    system: "neuro",
    items: [
      { letter: "F", text: "Face drooping — ask patient to smile" },
      { letter: "A", text: "Arm weakness — one arm drifts down" },
      { letter: "S", text: "Speech difficulty — slurred or strange" },
      {
        letter: "T",
        text: "Time — time of onset = time last known well; drives the tPA clock",
      },
    ],
  },
  {
    id: "trap",
    title: "TRAP — Parkinson's Disease",
    system: "neuro",
    items: [
      { letter: "T", text: "Tremor at rest" },
      { letter: "R", text: "Rigidity" },
      { letter: "A", text: "Akinesia / bradykinesia" },
      { letter: "P", text: "Postural instability" },
    ],
  },
  {
    id: "bell",
    title: "BELL — Bell's Palsy",
    system: "neuro",
    items: [
      {
        letter: "B",
        text: "Blink lost — can't close the affected eye (protect the cornea!)",
      },
      { letter: "E", text: "Eyelid droop + drooling on that side" },
      {
        letter: "L",
        text: "Lopsided smile / facial drooping, one side only",
      },
      {
        letter: "L",
        text: "Lasts weeks–months — usually temporary, 80–90% recover",
      },
    ],
  },
  {
    id: "dab-ch",
    title: "DAB-CH — Causes of Peripheral Neuropathy",
    system: "neuro",
    items: [
      { letter: "D", text: "Diabetes — the #1 cause" },
      { letter: "A", text: "Alcoholism" },
      { letter: "B", text: "B12 deficiency" },
      { letter: "C", text: "Chemotherapy" },
      { letter: "H", text: "HIV / Guillain-Barré" },
    ],
  },
  {
    id: "mg-vs-gbs",
    title: "MG vs. GBS — the pair ATI loves to test against each other",
    system: "neuro",
    colA: "Myasthenia Gravis (MG)",
    colB: "Guillain-Barré Syndrome (GBS)",
    rows: [
      {
        label: "Onset pattern",
        a: "Progressive weakness, WORSE by end of day / with activity",
        b: "Ascending paralysis: feet → legs → trunk → arms → face → respiratory",
      },
      {
        label: "Key symptoms",
        a: "Diplopia, ptosis, dysarthria, dysphagia",
        b: "Symmetric weakness moving upward",
      },
      {
        label: "Diagnostic test",
        a: "Tensilon (edrophonium) test; anti-AChR antibodies; EMG",
        b: "CSF: albuminocytologic dissociation (high protein, normal WBC)",
      },
      {
        label: "Priority nursing concern",
        a: "Medication timing — give Mestinon ON TIME, every time",
        b: "RESPIRATORY FAILURE — monitor RR, SpO2, negative inspiratory force constantly",
      },
      {
        label: "Treatment trap",
        a: "Pyridostigmine (Mestinon), thymectomy if thymoma",
        b: "IVIG / plasmapheresis — do NOT give corticosteroids (can worsen GBS)",
      },
    ],
  },

  // ---- Immunologic / Endocrine ----
  {
    id: "angioedema",
    title: "3-Way Angioedema Trap",
    system: "immune",
    items: [
      {
        letter: "Allergic",
        text: "IgE-mediated, rapid onset — TX: epinephrine, antihistamines, steroids",
      },
      {
        letter: "Hereditary (HAE)",
        text: "C1-inhibitor deficiency, NO urticaria — TX: C1-inhibitor concentrate, icatibant. Epinephrine does NOT work",
      },
      {
        letter: "ACE-inhibitor induced",
        text: "Bradykinin-mediated — TX: STOP the ACE inhibitor, switch to ARB",
      },
    ],
  },
  {
    id: "chvostek-trousseau",
    title: "Chvostek + Trousseau — Post-Thyroidectomy Hypocalcemia",
    system: "immune",
    items: [
      {
        letter: "Chvostek",
        text: "Tap the facial (CN VII) nerve near the ear → facial twitching = POSITIVE",
      },
      {
        letter: "Trousseau",
        text: "Inflate BP cuff above systolic → hand/wrist spasm (carpal spasm) = POSITIVE",
      },
      {
        letter: "Nursing",
        text: "Monitor calcium Q4h, keep IV calcium gluconate at bedside, watch for hoarseness (laryngeal nerve) and swelling (airway)",
      },
    ],
  },
  {
    id: "dka-vs-hhs",
    title: "DKA vs HHS — the #1 ATI Endocrine Trap",
    system: "immune",
    items: [
      {
        letter: "DKA",
        text: "Type 1 diabetes, ketones PRESENT (fruity breath, Kussmaul respirations), glucose usually 250–600, FAST onset (hours)",
      },
      {
        letter: "HHS",
        text: "Type 2 diabetes, NO ketones, glucose extremely HIGH (>600, often 1000+), SLOW onset (days), profound dehydration/altered LOC",
      },
    ],
  },

  // ---- Respiratory ----
  {
    id: "percussion-fremitus",
    title: "Percussion & Fremitus — Match the Sound to the Problem",
    system: "respiratory",
    items: [
      {
        letter: "Hyperresonant",
        text: "Too much air — emphysema, pneumothorax",
      },
      {
        letter: "Dull",
        text: "Fluid/solid — consolidation (pneumonia), pleural effusion",
      },
      {
        letter: "Fremitus ↑",
        text: "Consolidation (sound travels better through solid)",
      },
      {
        letter: "Fremitus ↓",
        text: "Air or fluid in the way — pneumothorax, pleural effusion",
      },
    ],
  },
  {
    id: "trach-safety",
    title: "Trach Safety — Non-Negotiables",
    system: "respiratory",
    items: [
      {
        letter: "Bedside",
        text: "ALWAYS have a spare trach tube (same size) + obturator + smaller size at bedside",
      },
      {
        letter: "Suction",
        text: "Preoxygenate → insert with NO suction → suction ONLY on withdrawal → max 10 seconds",
      },
      {
        letter: "Cuff",
        text: "Inflated during meals and mechanical ventilation; keep pressure 20–25 mmHg",
      },
    ],
  },
  {
    id: "post-laryngectomy",
    title: "Post-Laryngectomy — The Trap ATI Loves",
    system: "respiratory",
    items: [
      {
        letter: "No nose/mouth",
        text: "Patient breathes ONLY through the neck stoma — permanent",
      },
      {
        letter: "No NRB mask",
        text: "Never place a standard face mask — use a STOMA mask/collar instead",
      },
      {
        letter: "Red flag",
        text: "Hoarseness lasting >2 weeks pre-op = classic early warning sign of laryngeal cancer",
      },
    ],
  },
  {
    id: "stop-bang",
    title: "STOP-BANG — OSA Screening",
    system: "respiratory",
    items: [
      { letter: "S", text: "Snoring loudly" },
      { letter: "T", text: "Tiredness during the day" },
      { letter: "O", text: "Observed apnea" },
      { letter: "P", text: "Pressure — high blood pressure" },
      { letter: "B", text: "BMI > 35" },
      { letter: "A", text: "Age > 50" },
      { letter: "N", text: "Neck circumference large" },
      { letter: "G", text: "Gender — male" },
    ],
  },
];
