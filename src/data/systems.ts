// Body-system theming. Each day belongs to one system, which drives its
// accent color, glow, icon, and label throughout the UI.

export type SystemKey = "neuro" | "immune" | "endo" | "resp" | "mixed";

export interface SystemTheme {
  /** Display name shown in the day eyebrow, e.g. "NEURO". */
  name: string;
  /** Primary accent color (hex). */
  color: string;
  /** Box-shadow glow color (rgba). */
  glow: string;
  /** Deep tinted background used for icon tiles. */
  bg: string;
  /** Emoji used as the day's icon. */
  icon: string;
}

export const SYSTEMS: Record<SystemKey, SystemTheme> = {
  neuro: { name: "NEURO", color: "#B794FF", glow: "rgba(183,148,255,0.55)", bg: "#1E1533", icon: "🧠" },
  immune: { name: "IMMUNE", color: "#3DFFC0", glow: "rgba(61,255,192,0.5)", bg: "#0F2A22", icon: "✨" },
  endo: { name: "ENDOCRINE", color: "#FFC93C", glow: "rgba(255,201,60,0.5)", bg: "#2A2110", icon: "🔥" },
  resp: { name: "RESPIRATORY", color: "#4FD3FF", glow: "rgba(79,211,255,0.5)", bg: "#0F2230", icon: "🌬️" },
  mixed: { name: "FULL SYSTEM", color: "#FF7FC0", glow: "rgba(255,127,192,0.5)", bg: "#2A1420", icon: "🏆" },
};

/** Convert a #rrggbb hex string to an rgba() string at the given alpha. */
export function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
