"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { questions } from "@/lib/questions";
import { Question, SYSTEMS, SystemId } from "@/lib/types";
import { systemStyle } from "@/lib/systemStyle";
import { shuffle, formatSeconds } from "@/lib/shuffle";
import { useLocalStorage } from "@/lib/useLocalStorage";

type Stage = "setup" | "running" | "summary";
type SystemFilter = SystemId | "all";

const ALL_SYSTEMS = Object.keys(SYSTEMS) as SystemId[];

export default function QuizClient() {
  const searchParams = useSearchParams();
  const initialSystem = (searchParams.get("system") as SystemFilter) || "all";
  const initialFlaggedMode = searchParams.get("mode") === "flagged";

  const [flagged, setFlagged] = useLocalStorage<number[]>(
    "flaggedQuestions",
    []
  );

  const [stage, setStage] = useState<Stage>("setup");
  const [systemFilter, setSystemFilter] = useState<SystemFilter>(initialSystem);
  const [flaggedOnly, setFlaggedOnly] = useState(initialFlaggedMode);
  const [randomize, setRandomize] = useState(true);

  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [elapsed, setElapsed] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setElapsed((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const eligible = useMemo(() => {
    let list = questions;
    if (flaggedOnly) list = list.filter((q) => flagged.includes(q.id));
    else if (systemFilter !== "all")
      list = list.filter((q) => q.system === systemFilter);
    return list;
  }, [systemFilter, flaggedOnly, flagged]);

  function start() {
    const set = randomize ? shuffle(eligible) : eligible;
    setPool(set);
    setIndex(0);
    setSelected(null);
    setResults({});
    setElapsed(0);
    setRunning(true);
    setStage("running");
  }

  function answer(letter: string) {
    if (selected) return;
    const q = pool[index];
    const correct = letter === q.correct;
    setSelected(letter);
    setResults((r) => ({ ...r, [q.id]: correct }));
    if (!correct) {
      setFlagged((f) => (f.includes(q.id) ? f : [...f, q.id]));
    }
  }

  function next() {
    if (index + 1 >= pool.length) {
      setRunning(false);
      setStage("summary");
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  }

  function toggleFlag(id: number) {
    setFlagged((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  }

  function retryMissed() {
    const missedIds = Object.entries(results)
      .filter(([, ok]) => !ok)
      .map(([id]) => Number(id));
    const missedQuestions = pool.filter((q) => missedIds.includes(q.id));
    setPool(randomize ? shuffle(missedQuestions) : missedQuestions);
    setIndex(0);
    setSelected(null);
    setResults({});
    setElapsed(0);
    setRunning(true);
    setStage("running");
  }

  if (stage === "setup") {
    return (
      <QuizSetup
        systemFilter={systemFilter}
        setSystemFilter={setSystemFilter}
        flaggedOnly={flaggedOnly}
        setFlaggedOnly={setFlaggedOnly}
        flaggedCount={flagged.length}
        randomize={randomize}
        setRandomize={setRandomize}
        eligibleCount={eligible.length}
        onStart={start}
      />
    );
  }

  if (stage === "running") {
    const q = pool[index];
    if (!q) return null;
    return (
      <QuizRunner
        question={q}
        index={index}
        total={pool.length}
        selected={selected}
        elapsed={elapsed}
        isFlagged={flagged.includes(q.id)}
        onAnswer={answer}
        onNext={next}
        onToggleFlag={() => toggleFlag(q.id)}
        onQuit={() => {
          setRunning(false);
          setStage("setup");
        }}
      />
    );
  }

  const score = Object.values(results).filter(Boolean).length;
  return (
    <QuizSummary
      pool={pool}
      results={results}
      score={score}
      elapsed={elapsed}
      flagged={flagged}
      onToggleFlag={toggleFlag}
      onRetryMissed={retryMissed}
      onDone={() => setStage("setup")}
    />
  );
}

function QuizSetup({
  systemFilter,
  setSystemFilter,
  flaggedOnly,
  setFlaggedOnly,
  flaggedCount,
  randomize,
  setRandomize,
  eligibleCount,
  onStart,
}: {
  systemFilter: SystemFilter;
  setSystemFilter: (s: SystemFilter) => void;
  flaggedOnly: boolean;
  setFlaggedOnly: (b: boolean) => void;
  flaggedCount: number;
  randomize: boolean;
  setRandomize: (b: boolean) => void;
  eligibleCount: number;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">50-Question ATI-Style Drill</h1>
        <p className="mt-1 text-sm text-muted">
          Closed-book, in order. Every question is followed by trap logic —
          read it even when you get it right.
        </p>
      </div>

      <div className="card flex flex-col gap-4 p-5">
        <div>
          <p className="mb-2 text-sm font-semibold">System</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                setSystemFilter("all");
                setFlaggedOnly(false);
              }}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                systemFilter === "all" && !flaggedOnly
                  ? "bg-foreground text-background"
                  : "bg-neuro-soft text-muted"
              }`}
            >
              All 50
            </button>
            {ALL_SYSTEMS.map((sys) => (
              <button
                key={sys}
                onClick={() => {
                  setSystemFilter(sys);
                  setFlaggedOnly(false);
                }}
                className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                  systemFilter === sys && !flaggedOnly
                    ? systemStyle[sys].header
                    : `${systemStyle[sys].soft} ${systemStyle[sys].text}`
                }`}
              >
                {SYSTEMS[sys].label}
              </button>
            ))}
            <button
              onClick={() => setFlaggedOnly(true)}
              disabled={flaggedCount === 0}
              className={`rounded-full px-3 py-1.5 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 ${
                flaggedOnly
                  ? "bg-neuro-dark text-white"
                  : "bg-black/5 text-muted dark:bg-white/5"
              }`}
            >
              🚩 Flagged pile ({flaggedCount})
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={randomize}
            onChange={(e) => setRandomize(e.target.checked)}
            className="h-4 w-4"
          />
          Randomize question order
        </label>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-muted">
            {eligibleCount} question{eligibleCount === 1 ? "" : "s"} in this set
          </span>
          <button
            onClick={onStart}
            disabled={eligibleCount === 0}
            className="rounded-full bg-neuro px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start Quiz →
          </button>
        </div>
      </div>
    </div>
  );
}

function QuizRunner({
  question,
  index,
  total,
  selected,
  elapsed,
  isFlagged,
  onAnswer,
  onNext,
  onToggleFlag,
  onQuit,
}: {
  question: Question;
  index: number;
  total: number;
  selected: string | null;
  elapsed: number;
  isFlagged: boolean;
  onAnswer: (letter: string) => void;
  onNext: () => void;
  onToggleFlag: () => void;
  onQuit: () => void;
}) {
  const style = systemStyle[question.system];
  const letters: ("A" | "B" | "C" | "D")[] = ["A", "B", "C", "D"];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm text-muted">
        <button onClick={onQuit} className="font-medium underline">
          ← Quit
        </button>
        <span>
          Question {index + 1} / {total}
        </span>
        <span className="font-mono">{formatSeconds(elapsed)}</span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-neuro-soft">
        <div
          className="h-full rounded-full bg-neuro transition-all"
          style={{ width: `${(index / total) * 100}%` }}
        />
      </div>

      <div className="card p-5">
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.header}`}
          >
            {SYSTEMS[question.system].short}
          </span>
          <button
            onClick={onToggleFlag}
            className={`text-lg ${isFlagged ? "" : "opacity-30"}`}
            aria-label="Flag question"
            title="Flag for review"
          >
            🚩
          </button>
        </div>
        <p className="font-semibold">{question.text}</p>

        <div className="mt-4 flex flex-col gap-2">
          {letters.map((letter) => {
            const isSelected = selected === letter;
            const isCorrectAnswer = letter === question.correct;
            let cls = `${style.soft} border border-border`;
            if (selected) {
              if (isCorrectAnswer)
                cls = "bg-green-100 border-green-500 dark:bg-green-950";
              else if (isSelected)
                cls = "bg-red-100 border-red-500 dark:bg-red-950";
              else cls = "border border-border opacity-60";
            }
            return (
              <button
                key={letter}
                onClick={() => onAnswer(letter)}
                disabled={!!selected}
                className={`flex gap-2 rounded-xl p-3 text-left text-sm transition-colors ${cls}`}
              >
                <span className="font-bold">{letter})</span>
                <span>{question.options[letter]}</span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-4 rounded-xl bg-black/5 p-4 text-sm dark:bg-white/5">
            <p className="font-semibold">
              {selected === question.correct ? "✅ Correct." : "❌ Not quite."}{" "}
              Trap logic:
            </p>
            <p className="mt-1 text-muted">{question.trapLogic}</p>
            <button
              onClick={onNext}
              className="mt-4 rounded-full bg-neuro px-4 py-2 text-sm font-semibold text-white"
            >
              {index + 1 >= total ? "Finish →" : "Next question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function QuizSummary({
  pool,
  results,
  score,
  elapsed,
  flagged,
  onToggleFlag,
  onRetryMissed,
  onDone,
}: {
  pool: Question[];
  results: Record<number, boolean>;
  score: number;
  elapsed: number;
  flagged: number[];
  onToggleFlag: (id: number) => void;
  onRetryMissed: () => void;
  onDone: () => void;
}) {
  const missed = pool.filter((q) => results[q.id] === false);
  const pct = pool.length ? Math.round((score / pool.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="card p-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          Session complete
        </p>
        <p className="mt-1 text-4xl font-extrabold">
          {score} / {pool.length}
        </p>
        <p className="mt-1 text-muted">
          {pct}% correct · {formatSeconds(elapsed)}
        </p>
      </div>

      {missed.length > 0 ? (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Review your misses</h2>
            <button
              onClick={onRetryMissed}
              className="rounded-full bg-neuro px-4 py-2 text-sm font-semibold text-white"
            >
              Retry missed only →
            </button>
          </div>
          {missed.map((q) => (
            <div key={q.id} className="card p-4">
              <div className="flex items-center justify-between">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${systemStyle[q.system].header}`}
                >
                  {SYSTEMS[q.system].short}
                </span>
                <button
                  onClick={() => onToggleFlag(q.id)}
                  className={`text-lg ${flagged.includes(q.id) ? "" : "opacity-30"}`}
                  title="Toggle flag"
                >
                  🚩
                </button>
              </div>
              <p className="mt-2 font-semibold">{q.text}</p>
              <p className="mt-1 text-sm">
                Correct answer:{" "}
                <span className="font-semibold">
                  {q.correct}) {q.options[q.correct]}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted">{q.trapLogic}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="card p-5 text-center font-semibold text-neuro">
          Perfect set. Every trap dodged. 🎉
        </p>
      )}

      <button
        onClick={onDone}
        className="self-start rounded-full bg-black/5 px-4 py-2 text-sm font-semibold dark:bg-white/10"
      >
        ← Back to quiz menu
      </button>
    </div>
  );
}
