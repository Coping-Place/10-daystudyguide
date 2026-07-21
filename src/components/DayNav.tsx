"use client";

import { DAYS } from "@/data/days";
import { SYSTEMS, hexToRgba } from "@/data/systems";

interface Props {
  activeDay: number;
  completed: number[];
  onSelect: (id: number) => void;
}

export function DayNav({ activeDay, completed, onSelect }: Props) {
  return (
    <nav
      aria-label="Study days"
      className="flex gap-2 overflow-x-auto px-4 pt-1.5 pb-4"
      style={{ scrollSnapType: "x proximity" }}
    >
      {DAYS.map((d) => {
        const s = SYSTEMS[d.sys];
        const active = d.id === activeDay;
        const done = completed.includes(d.id);
        return (
          <button
            key={d.id}
            type="button"
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(d.id)}
            className="relative min-w-[108px] shrink-0 cursor-pointer rounded-[14px] border-2 px-3.5 py-2.5 text-left transition-all"
            style={{
              scrollSnapAlign: "start",
              borderColor: active ? s.color : "#2c3a56",
              background: active ? hexToRgba(s.color, 0.13) : "#0b1220",
              boxShadow: active ? `0 0 18px ${s.glow}` : undefined,
            }}
          >
            {done && (
              <span className="absolute right-1.5 top-1.5 text-[13px] text-[#3dffc0]" aria-hidden>
                ✅
              </span>
            )}
            <div className="font-baloo text-[11px] font-bold" style={{ color: s.color }}>
              DAY {d.id}
            </div>
            <div className="mt-0.5 text-[11px] font-bold leading-[1.2] text-[#f1f4fa]">
              {d.title}
            </div>
          </button>
        );
      })}
    </nav>
  );
}
