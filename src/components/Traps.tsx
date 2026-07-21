import type { Trap } from "@/data/types";
import { hexToRgba, type SystemTheme } from "@/data/systems";

export function Traps({ traps, theme }: { traps: Trap[]; theme: SystemTheme }) {
  return (
    <>
      {traps.map((t, i) => (
        <div
          key={i}
          className="mb-2.5 rounded-[10px] border-2 px-3.5 py-3"
          style={{ borderColor: theme.color, background: hexToRgba("#ef4444", 0.08) }}
        >
          <div className="mb-1.5 flex items-start gap-2 text-[13.5px] italic text-[#fef3c7]">
            <span aria-hidden>⚠️</span>
            <span>{t.trap}</span>
          </div>
          <div
            className="ml-[9px] border-l-[3px] pl-[26px] text-[13.5px] text-[#e7ecf6]"
            style={{ borderColor: theme.color }}
          >
            <strong className="font-baloo font-bold" style={{ color: theme.color }}>
              WHY THIS MATTERS →{" "}
            </strong>
            {t.logic}
          </div>
        </div>
      ))}
    </>
  );
}
