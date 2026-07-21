"use client";

import { useState } from "react";
import { mnemonics } from "@/lib/mnemonics";
import { SYSTEMS, SystemId } from "@/lib/types";
import { systemStyle } from "@/lib/systemStyle";
import MnemonicCardView from "@/components/MnemonicCardView";

const ALL_SYSTEMS = Object.keys(SYSTEMS) as SystemId[];

export default function MnemonicsPage() {
  const [filter, setFilter] = useState<SystemId | "all">("all");

  const visible =
    filter === "all" ? ALL_SYSTEMS : ([filter] as SystemId[]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Quick Mnemonic Cards</h1>
        <p className="mt-1 text-sm text-muted">
          Cover the card, say it out loud, then flip to check. If you can
          teach it without looking, you know it.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium ${
            filter === "all"
              ? "bg-foreground text-background"
              : "bg-neuro-soft text-muted"
          }`}
        >
          All
        </button>
        {ALL_SYSTEMS.map((sys) => (
          <button
            key={sys}
            onClick={() => setFilter(sys)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              filter === sys ? systemStyle[sys].header : `${systemStyle[sys].soft} ${systemStyle[sys].text}`
            }`}
          >
            {SYSTEMS[sys].label}
          </button>
        ))}
      </div>

      {visible.map((sys) => {
        const cards = mnemonics.filter((c) => c.system === sys);
        if (cards.length === 0) return null;
        return (
          <section key={sys} className="flex flex-col gap-4">
            <h2 className={`text-lg font-bold ${systemStyle[sys].text}`}>
              {SYSTEMS[sys].label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <MnemonicCardView key={card.id} card={card} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
