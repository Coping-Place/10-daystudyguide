export function parseScheduleDate(label: string): Date | null {
  const cleaned = label.replace(/\s*—.*$/, "").trim();
  const withYear = `${cleaned} 2026`;
  const d = new Date(withYear);
  return isNaN(d.getTime()) ? null : d;
}

export function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
