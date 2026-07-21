"use client";

import type { Question } from "@/data/types";
import type { SystemTheme } from "@/data/systems";

interface Props {
  dayId: number;
  questions: Question[];
  theme: SystemTheme;
  /** Map of "dayId-qIdx" -> picked option index. */
  revealed: Record<string, number>;
  onPick: (dayId: number, qIdx: number, optIdx: number) => void;
}

export function Questions({ dayId, questions, theme, revealed, onPick }: Props) {
  return (
    <>
      {questions.map((q, i) => {
        const key = `${dayId}-${i}`;
        const picked = revealed[key];
        const isRevealed = picked !== undefined;
        const correct = isRevealed && picked === q.answer;

        return (
          <div
            key={i}
            className="mb-3.5 rounded-xl border border-[#2c3a56] bg-[#0b1220] p-4"
          >
            <div className="mb-2.5 flex gap-2">
              <span
                className="font-baloo h-fit shrink-0 rounded-full px-2.5 py-0.5 text-xs font-extrabold text-[#0b1220]"
                style={{ background: theme.color }}
              >
                Q{i + 1}
              </span>
              <p className="m-0 text-[14.5px] leading-[1.5] text-[#f1f5f9]">{q.q}</p>
            </div>

            <div className="mb-2.5 flex flex-col gap-2">
              {q.options.map((opt, oi) => {
                const isAnswer = oi === q.answer;
                const isPicked = oi === picked;
                let bg = "#151e32";
                let border = "#3d4e75";
                let txt = "#f1f4fa";
                if (isRevealed && isAnswer) {
                  bg = "rgba(16,185,129,0.15)";
                  border = "#10b981";
                  txt = "#d1fae5";
                } else if (isRevealed && isPicked && !isAnswer) {
                  bg = "rgba(239,68,68,0.15)";
                  border = "#ef4444";
                  txt = "#fecaca";
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => onPick(dayId, i, oi)}
                    className="cursor-pointer rounded-lg border-[1.5px] px-3 py-2.5 text-left text-[13.5px] transition-all"
                    style={{ background: bg, borderColor: border, color: txt }}
                  >
                    <strong className="mr-1.5" style={{ color: theme.color }}>
                      {String.fromCharCode(65 + oi)}.
                    </strong>
                    {opt}
                  </button>
                );
              })}
            </div>

            {isRevealed && (
              <div
                className="rounded-md border-l-[3px] bg-[rgba(139,92,246,0.1)] px-3 py-2.5"
                style={{ borderColor: theme.color }}
              >
                <div
                  className="font-baloo mb-1 text-xs font-bold"
                  style={{ color: theme.color }}
                >
                  {correct ? "✅ CORRECT — here's why" : "❌ Not quite — here's the reasoning"}
                </div>
                <p className="m-0 text-[13px] leading-[1.5] text-[#e7ecf6]">
                  {q.rationale}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
