"use client";

import { schedule } from "@/lib/schedule";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { SYSTEMS, SystemId } from "@/lib/types";
import { systemStyle } from "@/lib/systemStyle";
import { parseScheduleDate, isSameDay } from "@/lib/date";

const SPECIAL_STYLE: Record<"review" | "rest", { header: string; soft: string; text: string }> = {
  review: {
    header: "bg-neuro-dark text-white",
    soft: "bg-black/5 dark:bg-white/5",
    text: "text-foreground",
  },
  rest: {
    header: "bg-muted text-white",
    soft: "bg-black/5 dark:bg-white/5",
    text: "text-muted",
  },
};

function styleFor(system: SystemId | "review" | "rest") {
  if (system === "review" || system === "rest") return SPECIAL_STYLE[system];
  return systemStyle[system];
}

function labelFor(system: SystemId | "review" | "rest") {
  if (system === "review") return "Review";
  if (system === "rest") return "Rest";
  return SYSTEMS[system].short;
}

export default function SchedulePage() {
  const [completedDays, setCompletedDays] = useLocalStorage<number[]>(
    "completedDays",
    []
  );

  const today = new Date();

  function toggleDay(day: number) {
    setCompletedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">14-Day Study Schedule</h1>
        <p className="mt-1 text-sm text-muted">
          Short focused blocks, active recall before rereading, one rest day,
          and a cumulative review before the exam. Adjust the dates if your
          test lands earlier — just keep the ORDER and the rest day.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {schedule.map((d) => {
          const done = completedDays.includes(d.day);
          const style = styleFor(d.system);
          const date = parseScheduleDate(d.date);
          const today_ = date && isSameDay(date, today);
          return (
            <div
              key={d.day}
              className={`card flex flex-col gap-2 p-4 sm:flex-row sm:items-start sm:gap-4 ${
                done ? "opacity-60" : ""
              } ${today_ ? "ring-2 ring-neuro" : ""}`}
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-40 sm:flex-col sm:items-start">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.header}`}
                >
                  Day {d.day} · {labelFor(d.system)}
                </span>
                <span className="text-xs text-muted">
                  {d.date}
                  {today_ ? " · today" : ""}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold">{d.focus}</p>
                <p className="mt-1 text-sm text-muted">{d.tasks}</p>
              </div>
              <label className="flex shrink-0 cursor-pointer items-center gap-2 self-start text-sm font-medium sm:self-center">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={() => toggleDay(d.day)}
                  className="h-4 w-4 accent-current"
                />
                Done
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
