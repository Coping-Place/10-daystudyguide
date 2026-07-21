import { trapPatterns } from "@/lib/trapPatterns";

export default function LogicPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold">
          50X Logic: How ATI Actually Writes Trap Questions
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          ATI rarely tests raw facts alone — it tests whether you can spot ONE
          of these five trap types hiding inside a normal-sounding question.
          Learn the patterns before you drill the 50 questions.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {trapPatterns.map((trap, i) => (
          <div key={trap.id} className="card flex gap-4 p-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neuro text-sm font-extrabold text-white">
              {i + 1}
            </span>
            <div>
              <h2 className="font-bold">{trap.name}</h2>
              <p className="mt-1 text-sm text-muted">{trap.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-5 text-sm text-muted">
        Don&apos;t just check right/wrong on the drill — read the trap logic
        every time, even when you got it right. That&apos;s the part that
        transfers to questions you haven&apos;t seen yet.
      </div>
    </div>
  );
}
