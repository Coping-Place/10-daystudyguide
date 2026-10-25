#!/usr/bin/env node
/**
 * L7: turn a committed Canvas *week* JSON export into ScheduleDay stubs.
 * Capella FlexPath is out of scope. Quiz banks stay hand-authored.
 * Does not overwrite lib/schedule.ts unless --write is passed.
 *
 * Usage:
 *   node scripts/from-canvas-week-export.mjs fixtures/canvas-week-export.json
 *   node scripts/from-canvas-week-export.mjs fixtures/canvas-week-export.json --write
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const args = process.argv.slice(2);
const write = args.includes("--write");
const inputArg = args.find((a) => !a.startsWith("--"));
if (!inputArg) {
  console.error("Need a JSON export path. Quiz files are refused.");
  process.exit(1);
}

const src = resolve(process.cwd(), inputArg);
const raw = JSON.parse(readFileSync(src, "utf8"));

function denied(name) {
  const n = String(name || "").toLowerCase();
  return ["quiz", "knowledge check", "exam", "test bank", "item bank"].some((h) =>
    n.includes(h),
  );
}

const weeks = Array.isArray(raw) ? raw : raw.weeks || raw.assignments || [];
const stubs = [];
let day = 1;
for (const item of weeks) {
  const title = item.name || item.title || item.focus || `Week ${day}`;
  if (denied(title) || item.quiz_id || item.is_quiz_assignment) continue;
  const system = item.system || "review";
  stubs.push({
    day,
    date: item.date || item.due_at || `Week ${day}`,
    focus: title,
    tasks: item.tasks || "Read the week's outline. Do not ingest quiz items.",
    system,
  });
  day += 1;
}

const outDir = join(root, "generated");
const outFile = join(outDir, "schedule.stubs.json");
if (write) {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outFile, JSON.stringify(stubs, null, 2) + "\n", "utf8");
  console.log(`Wrote ${stubs.length} stubs to ${outFile}`);
  console.log("lib/schedule.ts was not touched. Copy by hand after review.");
} else {
  process.stdout.write(JSON.stringify(stubs, null, 2) + "\n");
}
