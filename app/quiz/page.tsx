import { Suspense } from "react";
import QuizClient from "@/components/quiz/QuizClient";

export default function QuizPage() {
  return (
    <Suspense fallback={<p className="text-sm text-muted">Loading quiz…</p>}>
      <QuizClient />
    </Suspense>
  );
}
