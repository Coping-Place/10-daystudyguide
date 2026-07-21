"use client";

import { useState } from "react";
import { MnemonicCard } from "@/lib/types";
import { systemStyle } from "@/lib/systemStyle";

function isComparison(
  card: MnemonicCard
): card is Extract<MnemonicCard, { rows: unknown }> {
  return "rows" in card;
}

export default function MnemonicCardView({ card }: { card: MnemonicCard }) {
  const [flipped, setFlipped] = useState(false);
  const style = systemStyle[card.system];

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="flip-card block w-full text-left"
      aria-pressed={flipped}
    >
      <div
        className={`flip-card-inner min-h-[260px] ${flipped ? "flipped" : ""}`}
      >
        {/* FRONT */}
        <div
          className={`flip-card-face card flex min-h-[260px] flex-col items-center justify-center gap-2 p-6 text-center ${style.soft}`}
        >
          <p className={`text-xs font-semibold uppercase tracking-wide ${style.text}`}>
            Tap to reveal
          </p>
          <h3 className="text-xl font-extrabold">{card.title}</h3>
        </div>

        {/* BACK */}
        <div
          className={`flip-card-face flip-card-back card flex min-h-[260px] flex-col gap-2 overflow-y-auto p-5 ${style.soft}`}
        >
          {isComparison(card) ? (
            <div className="text-sm">
              <div
                className={`mb-2 grid grid-cols-2 gap-2 rounded-lg p-2 text-xs font-bold text-white ${style.header}`}
              >
                <span>{card.colA}</span>
                <span>{card.colB}</span>
              </div>
              <div className="flex flex-col gap-2">
                {card.rows.map((row) => (
                  <div key={row.label} className="rounded-lg bg-surface p-2">
                    <p className={`text-xs font-bold ${style.text}`}>
                      {row.label}
                    </p>
                    <div className="mt-1 grid grid-cols-2 gap-2 text-xs">
                      <span>{row.a}</span>
                      <span>{row.b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <ul className="flex flex-col gap-1.5 text-sm">
              {card.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-extrabold text-white ${style.header}`}
                  >
                    {item.letter}
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </button>
  );
}
