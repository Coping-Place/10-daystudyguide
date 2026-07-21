"use client";

import type { ReactNode } from "react";
import { hexToRgba, type SystemTheme } from "@/data/systems";

interface Props {
  id: string;
  label: string;
  emoji: string;
  theme: SystemTheme;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: ReactNode;
}

export function CollapsibleSection({
  id,
  label,
  emoji,
  theme,
  isOpen,
  onToggle,
  children,
}: Props) {
  const bodyId = `section-body-${id}`;
  return (
    <div className="mb-3.5">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={bodyId}
        onClick={() => onToggle(id)}
        className="flex w-full items-center justify-between rounded-[10px] border px-3.5 py-2.5"
        style={{
          borderColor: hexToRgba(theme.color, 0.35),
          background: `linear-gradient(90deg, ${hexToRgba(theme.color, 0.13)}, transparent)`,
        }}
      >
        <span className="font-baloo text-[15px] font-bold text-[#f1f4fa]">
          {emoji} {label}
        </span>
        <span className="text-sm" style={{ color: theme.color }} aria-hidden>
          {isOpen ? "▲" : "▼"}
        </span>
      </button>
      {isOpen && (
        <div id={bodyId} className="mt-3 pb-1.5">
          {children}
        </div>
      )}
    </div>
  );
}
