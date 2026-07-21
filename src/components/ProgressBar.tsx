export function ProgressBar({
  completedCount,
  total,
}: {
  completedCount: number;
  total: number;
}) {
  const pct = total === 0 ? 0 : Math.round((completedCount / total) * 100);
  return (
    <div
      className="mx-auto flex max-w-[420px] items-center gap-2.5"
      role="progressbar"
      aria-valuenow={completedCount}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label="Days completed"
    >
      <div className="h-2.5 flex-1 overflow-hidden rounded-full border border-[#3d4e75] bg-[#1e293b]">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#ff7fc0,#b794ff,#4fd3ff)] transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-baloo whitespace-nowrap text-[13px] text-[#f1f4fa]">
        {completedCount}/{total} days 🔥
      </span>
    </div>
  );
}
