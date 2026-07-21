"use client";

import { useCallback, useState } from "react";
import { DAYS } from "@/data/days";
import { SYSTEMS } from "@/data/systems";
import { useProgress } from "@/hooks/useProgress";
import { ProgressBar } from "./ProgressBar";
import { DayNav } from "./DayNav";
import { DayPanel } from "./DayPanel";

export function StudyGuide() {
  const { completed, toggleComplete, isComplete } = useProgress();

  const [activeDay, setActiveDay] = useState(1);
  // Which section is open, per day id. Only one open at a time per day.
  const [openSection, setOpenSection] = useState<Record<number, string | null>>({});
  // "dayId-qIdx" -> picked option index.
  const [revealed, setRevealed] = useState<Record<string, number>>({});

  const day = DAYS.find((d) => d.id === activeDay) ?? DAYS[0];
  const s = SYSTEMS[day.sys];

  const selectDay = useCallback((id: number) => {
    setActiveDay(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleSection = useCallback(
    (sectionId: string) => {
      setOpenSection((prev) => ({
        ...prev,
        [day.id]: prev[day.id] === sectionId ? null : sectionId,
      }));
    },
    [day.id],
  );

  const pickAnswer = useCallback((dayId: number, qIdx: number, optIdx: number) => {
    setRevealed((prev) => ({ ...prev, [`${dayId}-${qIdx}`]: optIdx }));
  }, []);

  return (
    <>
      {/* Hero */}
      <header className="px-5 pt-7 pb-[18px] text-center">
        <div className="font-baloo mb-1 text-xs font-bold tracking-[2px] text-[#ff7fc0]">
          NSG 2600 · ADULT HEALTH I · EXAM 2
        </div>
        <h1 className="font-baloo mx-0 mb-1.5 mt-0 text-[clamp(28px,6vw,42px)] leading-[1.1] text-white">
          <span className="hero-gradient-text">RoundRn</span> Study Guide
        </h1>
        <p className="mx-auto mb-4 max-w-[480px] text-[13.5px] text-[#c9d3e6]">
          Your 10-day plan for Neuro → Immune → Endocrine → Respiratory.
          Mnemonics, trap-pattern breakdowns, and ATI-style questions built for
          brains that need it colorful, chunky, and click-to-reveal.
        </p>
        <ProgressBar completedCount={completed.length} total={DAYS.length} />
      </header>

      <DayNav activeDay={activeDay} completed={completed} onSelect={selectDay} />

      <main className="mx-auto max-w-[760px] px-4">
        <DayPanel
          key={day.id}
          day={day}
          openSection={openSection[day.id] ?? null}
          onToggleSection={toggleSection}
          revealed={revealed}
          onPick={pickAnswer}
          isComplete={isComplete(day.id)}
          onToggleComplete={toggleComplete}
        />

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            disabled={activeDay === 1}
            onClick={() => selectDay(Math.max(1, activeDay - 1))}
            className="font-baloo rounded-[10px] border-none bg-[#2c3a56] px-[18px] py-2.5 font-bold text-[#f1f4fa] disabled:cursor-default disabled:opacity-30"
            style={{ cursor: activeDay === 1 ? undefined : "pointer" }}
          >
            ← Prev Day
          </button>
          <button
            type="button"
            disabled={activeDay === DAYS.length}
            onClick={() => selectDay(Math.min(DAYS.length, activeDay + 1))}
            className="font-baloo rounded-[10px] border-none px-[18px] py-2.5 font-bold text-[#0b1220] disabled:cursor-default disabled:opacity-30"
            style={{
              background: s.color,
              cursor: activeDay === DAYS.length ? undefined : "pointer",
            }}
          >
            Next Day →
          </button>
        </div>
      </main>
    </>
  );
}
