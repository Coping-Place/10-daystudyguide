import type { SystemKey } from "./systems";

export interface ContentBlock {
  heading: string;
  points: string[];
}

export interface Mnemonic {
  title: string;
  text: string;
}

export interface Trap {
  /** The tempting-but-wrong scenario ATI sets up. */
  trap: string;
  /** The reasoning that defuses the trap. */
  logic: string;
}

export interface Question {
  q: string;
  options: string[];
  /** Zero-based index of the correct option. */
  answer: number;
  rationale: string;
}

export interface Day {
  id: number;
  sys: SystemKey;
  title: string;
  subtitle: string;
  objectives: string[];
  content: ContentBlock[];
  mnemonics: Mnemonic[];
  traps: Trap[];
  questions: Question[];
}
