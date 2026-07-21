"use client";

import { useCallback, useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function readValue<T>(key: string, initialValue: T): T {
  try {
    const stored = window.localStorage.getItem(key);
    return stored !== null ? (JSON.parse(stored) as T) : initialValue;
  } catch {
    return initialValue;
  }
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const getSnapshot = useCallback(
    () => window.localStorage.getItem(key),
    [key]
  );
  const getServerSnapshot = () => null;

  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const value: T = raw !== null ? (JSON.parse(raw) as T) : initialValue;

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      try {
        const current = readValue(key, initialValue);
        const resolved =
          typeof next === "function"
            ? (next as (prev: T) => T)(current)
            : next;
        window.localStorage.setItem(key, JSON.stringify(resolved));
        window.dispatchEvent(new StorageEvent("storage", { key }));
      } catch {
        // ignore quota / serialization errors
      }
    },
    [key, initialValue]
  );

  return [value, setValue] as const;
}
