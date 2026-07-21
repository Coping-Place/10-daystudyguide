"use client";

import Link from "next/link";
import { schedule } from "@/lib/schedule";
import { questions } from "@/lib/questions";
import { useLocalStorage } from "@/lib/useLocalStorage";
import { systemStyle } from "@/lib/systemStyle";
import { SYSTEMS } from "@/lib/types";
import { parseScheduleDate, isSameDay } from "@/lib/date";

export default function HomePage() {
  const [completedDays] = useLocalStorage<number[]>("completedDays", []);
  const [flagged] = useLocalStorage<number[]>("flaggedQuestions", []);

  const today = new Date();

  let activeDay = schedule.find((d) => {
    const date = parseScheduleDate(d.date);
    return date && isSameDay(date, today);
  });
  if (!activeDay) {
    activeDay =
      schedule.find((d) => {
        const date = parseScheduleDate(d.date);
        return date && date.getTime() > today.getTime();
      }) ?? schedule[schedule.length - 1];
  }

  const progressPct = Math.round(
    (completedDays.length / schedule.length) * 100
  );

  return (
    <div className="flex flex-col gap-8">
      <section className="card p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          NSG 2600 · Adult Health I · Exam 1A
        </p>
        <h1 className="mt-1 text-2xl font-bold">
          Neuro · Immunologic/Endocrine · Respiratory
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Built for how your brain actually works: short focused blocks, active
          recall (quiz yourself before rereading), one rest day, and a
          cumulative review pass before the exam.
        </p>
      </section>

      <section className="card p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Today — Day {activeDay.day}</h2>
          <span className="text-sm text-muted">{activeDay.date}</span>
        </div>
        <p className="mt-2 font-semibold">{activeDay.focus}</p>
        <p className="mt-1 text-sm text-muted">{activeDay.tasks}</p>
        <Link
          href="/schedule"
          className="mt-4 inline-block rounded-full bg-neuro px-4 py-2 text-sm font-semibold text-white"
        >
          Open full schedule →
        </Link>
      </section>

      <section className="card p-6">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-lg font-bold">Progress</h2>
          <span className="text-sm text-muted">
            {completedDays.length} / {schedule.length} days done
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-neuro-soft">
          <div
            className="h-full rounded-full bg-neuro transition-all"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        {flagged.length > 0 && (
          <p className="mt-3 text-sm text-muted">
            🚩 {flagged.length} flagged question{flagged.length === 1 ? "" : "s"}{" "}
            in your review pile —{" "}
            <Link href="/quiz?mode=flagged" className="font-semibold text-neuro">
              drill them now
            </Link>
          </p>
        )}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {(Object.keys(SYSTEMS) as (keyof typeof SYSTEMS)[]).map((sys) => {
          const count = questions.filter((q) => q.system === sys).length;
          return (
            <Link
              key={sys}
              href={`/quiz?system=${sys}`}
              className={`card p-4 transition-transform hover:-translate-y-0.5 ${systemStyle[sys].soft}`}
            >
              <p className={`text-sm font-bold ${systemStyle[sys].text}`}>
                {SYSTEMS[sys].label}
              </p>
              <p className="mt-1 text-xs text-muted">{count} drill questions</p>
            </Link>
          );
        })}
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <Link
          href="/mnemonics"
          className="card p-4 transition-transform hover:-translate-y-0.5"
        >
          <p className="font-bold">Mnemonic Cards</p>
          <p className="mt-1 text-sm text-muted">
            Flip cards for every system — cover, recall, rebuild.
          </p>
        </Link>
        <Link
          href="/logic"
          className="card p-4 transition-transform hover:-translate-y-0.5"
        >
          <p className="font-bold">50X Logic</p>
          <p className="mt-1 text-sm text-muted">
            The 5 trap patterns ATI hides inside almost every question.
          </p>
        </Link>
        <Link
          href="/quiz"
          className="card p-4 transition-transform hover:-translate-y-0.5"
        >
          <p className="font-bold">Full Quiz Drill</p>
          <p className="mt-1 text-sm text-muted">
            All 50 questions, timed, with trap-logic answer review.
          </p>
        </Link>
      </section>
    </div>
  );
}
