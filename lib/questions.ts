import raw from "./questions.json";
import { Question } from "./types";

export const questions: Question[] = raw as Question[];

export function questionsBySystem(system?: Question["system"]) {
  return system ? questions.filter((q) => q.system === system) : questions;
}
