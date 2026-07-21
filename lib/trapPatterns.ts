import { TrapPattern } from "./types";

export const trapPatterns: TrapPattern[] = [
  {
    id: "reversal",
    name: "The Reversal Trap",
    description:
      "Two things get swapped — MDI vs. DPI technique, Chvostek vs. Trousseau, fremitus increased vs. decreased. The wrong answer is the RIGHT fact applied to the WRONG condition.",
  },
  {
    id: "threshold",
    name: "The Threshold Trap",
    description:
      "A specific number is JUST over or JUST under the real cutoff (BMI 39 vs 41, CD4 210 vs 180, BP 184/109 vs 186/111). Read numbers like they're the whole question — because they are.",
  },
  {
    id: "sequencing",
    name: "The Sequencing Trap",
    description:
      "All 4 answers are technically correct nursing actions, but only one is FIRST/PRIORITY. Look for airway/breathing/circulation, or 'assess before you act.'",
  },
  {
    id: "sounds-right",
    name: "The Sounds-Right Trap",
    description:
      "A distractor uses real vocabulary from the unit but attaches it to the wrong disease (e.g., giving steroids for GBS, epinephrine for HAE). Familiar words don't mean correct pairing.",
  },
  {
    id: "definition",
    name: "The Definition Trap",
    description:
      "The question hinges on a strict definition (epilepsy = 2+ unprovoked seizures; HAP = onset after 48 hrs). One word in the stem changes the whole answer.",
  },
];
