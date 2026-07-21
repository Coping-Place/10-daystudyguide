"use client";

import type { Day } from "@/data/types";
import { SYSTEMS } from "@/data/systems";
import { CollapsibleSection } from "./CollapsibleSection";
import { DayContent } from "./DayContent";
import { Mnemonics } from "./Mnemonics";
import { Traps } from "./Traps";
import { Questions } from "./Questions";

interface Props {
  day: Day;
  openSection: string | null;
  onToggleSection: (id: string) => void;
  revealed: Record<string, number>;
  onPick: (dayId: number, qIdx: number, optIdx: number) => void;
  isComplete: boolean;
  onToggleComplete: (dayId: number) => void;
}

export function DayPanel({
  day,
  openSection,
  onToggleSection,
  revealed,
  onPick,
  isComplete,
  onToggleComplete,
}: Props) {
  const s = SYSTEMS[day.sys];

  return (
    <div className="rounded-[18px] border border-[#2c3a56] bg-[linear-gradient(180deg,#0b1220,#0a0f1c)] p-5">
      {/* Header */}
      <div className="mb-1.5 flex items-center gap-3">
        <div
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl text-[22px]"
          style={{ background: s.color, boxShadow: `0 0 20px ${s.glow}` }}
          aria-hidden
        >
          {s.icon}
        </div>
        <div>
          <div className="font-baloo text-[11px] font-bold tracking-[1.5px]" style={{ color: s.color }}>
            DAY {day.id} · {s.name}
          </div>
          <h2 className="font-baloo my-0.5 text-2xl text-white">{day.title}</h2>
        </div>
      </div>
      <div className="mb-4 text-[13.5px] text-[#c9d3e6]">{day.subtitle}</div>

      {/* Mission */}
      <div className="mb-4 rounded-xl border border-[#2c3a56] bg-[#111827] px-4 py-3.5">
        <div className="font-baloo mb-2 text-[13px] font-bold text-[#ffc93c]">
          🎯 TODAY&apos;S MISSION
        </div>
        {day.objectives.map((o, i) => (
          <div key={i} className="mb-1.5 flex items-start gap-2 text-[13.5px] text-[#e7ecf6]">
            <span className="mt-px shrink-0" style={{ color: s.color }} aria-hidden>
              ⚡
            </span>
            <span>{o}</span>
          </div>
        ))}
      </div>

      {/* Sections */}
      <CollapsibleSection
        id="content"
        label="Core Content"
        emoji="📚"
        theme={s}
        isOpen={openSection === "content"}
        onToggle={onToggleSection}
      >
        <DayContent content={day.content} theme={s} />
      </CollapsibleSection>

      <CollapsibleSection
        id="mnemonics"
        label="Mnemonic Vault"
        emoji="📌"
        theme={s}
        isOpen={openSection === "mnemonics"}
        onToggle={onToggleSection}
      >
        <Mnemonics mnemonics={day.mnemonics} theme={s} />
      </CollapsibleSection>

      <CollapsibleSection
        id="traps"
        label="Trap Alerts"
        emoji="🚨"
        theme={s}
        isOpen={openSection === "traps"}
        onToggle={onToggleSection}
      >
        <Traps traps={day.traps} theme={s} />
      </CollapsibleSection>

      <CollapsibleSection
        id="questions"
        label={`Practice Questions (${day.questions.length})`}
        emoji="✍️"
        theme={s}
        isOpen={openSection === "questions"}
        onToggle={onToggleSection}
      >
        <Questions
          dayId={day.id}
          questions={day.questions}
          theme={s}
          revealed={revealed}
          onPick={onPick}
        />
      </CollapsibleSection>

      {/* Complete toggle */}
      <button
        type="button"
        onClick={() => onToggleComplete(day.id)}
        className="font-baloo mt-2 flex w-full items-center justify-center gap-2 rounded-xl border-none px-4 py-3.5 text-[15px] font-extrabold text-white"
        style={{
          background: isComplete
            ? "#065f46"
            : `linear-gradient(90deg, ${s.color}, #ff7fc0)`,
          cursor: "pointer",
        }}
      >
        {isComplete
          ? `✅ Day ${day.id} Complete — Nice work!`
          : `⭕ Mark Day ${day.id} Complete`}
      </button>
    </div>
  );
}
