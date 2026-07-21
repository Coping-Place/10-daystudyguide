export type SystemId = "neuro" | "immune" | "respiratory";

export const SYSTEMS: Record<SystemId, { label: string; short: string }> = {
  neuro: { label: "Neurological", short: "Neuro" },
  immune: { label: "Immunologic / Endocrine", short: "Immune/Endo" },
  respiratory: { label: "Respiratory", short: "Resp" },
};

export interface ScheduleDay {
  day: number;
  date: string;
  focus: string;
  tasks: string;
  system: SystemId | "review" | "rest";
}

export interface LetterCard {
  id: string;
  title: string;
  system: SystemId;
  items: { letter: string; text: string }[];
}

export interface ComparisonCard {
  id: string;
  title: string;
  system: SystemId;
  colA: string;
  colB: string;
  rows: { label: string; a: string; b: string }[];
}

export type MnemonicCard = LetterCard | ComparisonCard;

export interface TrapPattern {
  id: string;
  name: string;
  description: string;
}

export interface Question {
  id: number;
  system: SystemId;
  text: string;
  options: { A: string; B: string; C: string; D: string };
  correct: "A" | "B" | "C" | "D";
  trapLogic: string;
}
