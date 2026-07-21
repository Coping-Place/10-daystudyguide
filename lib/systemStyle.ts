import { SystemId } from "./types";

export const systemStyle: Record<
  SystemId,
  { header: string; soft: string; text: string; ring: string }
> = {
  neuro: {
    header: "bg-neuro text-white",
    soft: "bg-neuro-soft",
    text: "text-neuro",
    ring: "ring-neuro",
  },
  immune: {
    header: "bg-immune text-white",
    soft: "bg-immune-soft",
    text: "text-immune",
    ring: "ring-immune",
  },
  respiratory: {
    header: "bg-resp text-white",
    soft: "bg-resp-soft",
    text: "text-resp",
    ring: "ring-resp",
  },
};
