import type { Mnemonic } from "@/data/types";
import type { SystemTheme } from "@/data/systems";

export function Mnemonics({
  mnemonics,
  theme,
}: {
  mnemonics: Mnemonic[];
  theme: SystemTheme;
}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 px-1 py-2.5">
      {mnemonics.map((m, i) => (
        <div
          key={m.title}
          className="relative rounded border-2 border-dashed bg-[#fef9c3] px-4 py-3.5 text-[#1c1917] shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
          style={{
            borderColor: theme.color,
            transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)`,
          }}
        >
          <span
            className="absolute -top-2.5 left-1/2 -translate-x-1/2 rotate-[-20deg] text-base"
            style={{ color: theme.color }}
            aria-hidden
          >
            📌
          </span>
          <div
            className="font-baloo mb-1 text-sm font-bold"
            style={{ color: theme.color }}
          >
            {m.title}
          </div>
          <div className="text-[13px] leading-[1.4]">{m.text}</div>
        </div>
      ))}
    </div>
  );
}
