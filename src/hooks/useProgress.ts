"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "nsg2600-exam2-completed-days";

/**
 * Tracks which day ids the learner has marked complete, persisted to
 * localStorage. `hydrated` flips true once the client has read from storage,
 * so the UI can avoid a server/client mismatch on first paint.
 */
export function useProgress() {
  const [completed, setCompleted] = useState<number[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // One-time sync from localStorage on mount. It must run in an effect
      // (not during render) so server and first client render match, then hydrate.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setCompleted(JSON.parse(raw));
    } catch {
      /* first run, nothing saved yet */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      /* storage unavailable (private mode / quota) — progress stays in memory */
    }
  }, [completed, hydrated]);

  const toggleComplete = useCallback((dayId: number) => {
    setCompleted((prev) =>
      prev.includes(dayId) ? prev.filter((id) => id !== dayId) : [...prev, dayId],
    );
  }, []);

  const isComplete = useCallback(
    (dayId: number) => completed.includes(dayId),
    [completed],
  );

  return { completed, toggleComplete, isComplete, hydrated };
}
