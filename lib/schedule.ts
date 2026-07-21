import { ScheduleDay } from "./types";

export const schedule: ScheduleDay[] = [
  {
    day: 1,
    date: "Tue Jul 21",
    focus: "Neuro Part 1 — Assessment, LOC, Seizures, Coma states",
    tasks:
      "Read 1.1–1.2 once. Build AEIOU TIPS flashcards. Say the mnemonic out loud 5x. Do Q1–6 from the 50X set, no peeking at answers.",
    system: "neuro",
  },
  {
    day: 2,
    date: "Wed Jul 22",
    focus: "Neuro Part 2 — Stroke",
    tasks:
      "Drill the tPA numbers (3-4.5 hrs, BP <185/110, swallow screen BEFORE food, HOB 0-30°) as a single chant. Teach the stroke protocol out loud to an imaginary patient. Q7–10.",
    system: "neuro",
  },
  {
    day: 3,
    date: "Thu Jul 23",
    focus: "Neuro Part 3 — MS, Peripheral Neuropathy, Bell's Palsy",
    tasks:
      "Build the Uhthoff's/heat card and BELL card. Cover the card and rebuild it from memory 3x (active recall > rereading). Q11–13.",
    system: "neuro",
  },
  {
    day: 4,
    date: "Fri Jul 24",
    focus: "Neuro Part 4 — MG vs GBS (the #1 ATI trap pair)",
    tasks:
      "Do the side-by-side MG-vs-GBS contrast drill until you can say both columns cold, no notes. Q14–17.",
    system: "neuro",
  },
  {
    day: 5,
    date: "Sat Jul 25",
    focus: "Neuro Part 5 — Duchenne MD + FULL Neuro review",
    tasks:
      "Redo Q1–18 timed, ATI-style (don't overthink, first read-through answer). Grade yourself. Flag any you got wrong for Day 11 review pile.",
    system: "neuro",
  },
  {
    day: 6,
    date: "Sun Jul 26",
    focus: "REST / light review",
    tasks:
      "20 min max: flip through mnemonic cards only. No new material. Let your brain consolidate.",
    system: "rest",
  },
  {
    day: 7,
    date: "Mon Jul 27",
    focus: "Immune/Endo Part 1 — Anaphylaxis, Angioedema, Allergic Rhinitis",
    tasks:
      "Build the angioedema 3-way card (allergic vs hereditary vs ACE-I). This is a classic ATI trap set. Q19–22.",
    system: "immune",
  },
  {
    day: 8,
    date: "Tue Jul 28",
    focus: "Immune/Endo Part 2 — Obesity, Thyroid/Parathyroid",
    tasks:
      "Drill Chvostek/Trousseau + post-thyroidectomy priority assessment order. Q23–28.",
    system: "immune",
  },
  {
    day: 9,
    date: "Wed Jul 29",
    focus: "Immune/Endo Part 3 — Diabetes (DKA vs HHS, foot care, A1c)",
    tasks:
      "This is a heavy-hit ATI topic — build the DKA-vs-HHS card and quiz yourself until instant. Q29–34.",
    system: "immune",
  },
  {
    day: 10,
    date: "Thu Jul 30",
    focus: "Respiratory Part 1 — Assessment, OSA, Trach, Laryngeal Cancer",
    tasks:
      "Drill percussion/fremitus card + trach bedside safety rule + laryngectomy no-nose-no-mouth rule. Q35–42.",
    system: "respiratory",
  },
  {
    day: 11,
    date: "Fri Jul 31",
    focus:
      "Respiratory Part 2 — Aspiration, Pneumonia, Lung Cancer, COPD/Asthma, CF",
    tasks:
      "Finish remaining cards. Q43–50. Then redo EVERY question you missed all week (your flagged pile).",
    system: "respiratory",
  },
  {
    day: 12,
    date: "Sat Aug 1",
    focus: "FULL Mixed Review — all 50 questions, randomized, timed",
    tasks:
      "Do all 50 in one sitting like the real ATI. Time yourself. Review rationales for anything missed — read the trap logic, not just the answer.",
    system: "review",
  },
  {
    day: 13,
    date: "Sun Aug 2",
    focus: "Weak-area deep dive",
    tasks:
      "Spend the whole day only on your 2–3 weakest categories from Day 12. Re-teach those out loud.",
    system: "review",
  },
  {
    day: 14,
    date: "Mon Aug 3 — Exam Eve",
    focus: "Light final pass",
    tasks:
      "Flip mnemonic cards only, 30–45 min max. No cramming new content. Sleep is part of memory consolidation — protect it tonight.",
    system: "rest",
  },
];
