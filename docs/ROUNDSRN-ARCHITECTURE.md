---
title: "RoundsRN — Architecture"
doc_type: architecture
repo: 10-daystudyguide
version: "1.1.0"
created: 2026-07-21
updated: 2026-07-21
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [roundsrn, nsg-2600, nextjs, dual-branch, customer-preview]
knowledge_key: doc:10-daystudyguide:roundsrn_architecture
---

# RoundsRN — Architecture

Nursing study system for **NSG 2600 · Adult Health I**, product brand **RoundsRN**.
Two parallel Next.js 16 implementations currently ship from **unrelated git histories**
in one GitHub repository.

> [!IMPORTANT]
> **forensic-auditing rule 2:** Architecture claims below were verified against live branch
> tips on 2026-07-21 (`1f2bbdb` / `bec1fe7`), not against a non-existent `main`.

---

## 1. System overview

```text
Customer
  ├─ https://roundsrn1.damieus.app  → Vercel project roundsrn1 → branch session-5mn6ou
  └─ https://roundsrn2.damieus.app  → Vercel project roundsrn2 → branch nextjs-50x-logic-app-v92juv
DNS: Cloudflare zone damieus.app (API token in Management Git root env)
```

Local dual preview (agent workstations):

| Role | URL | Worktree |
|------|-----|----------|
| Lane A | http://localhost:3000 | `10-daystudyguide` |
| Lane B | http://localhost:3001 | `10-daystudyguide.worktrees/nextjs-50x` |

---

## 2. Lane A — Exam 1A multi-route app

**Branch:** `claude/session-5mn6ou`

| Concern | Location / behaviour |
|---------|----------------------|
| Routes | `app/` — `/`, `/schedule`, `/quiz`, `/mnemonics`, `/logic` |
| Quiz UI | `components/quiz/QuizClient.tsx` (Suspense-wrapped) |
| Items | `lib/questions.json` (50 items: neuro / immune / respiratory) |
| Schedule | `lib/schedule.ts` (14 day entries; name "10-day" is historical) |
| Mnemonics | `lib/mnemonics.ts` |
| Progress | `localStorage` via `lib/useLocalStorage.ts` |
| Stack | Next 16.2.11, React 19, Tailwind 4 |

> [!WARNING]
> **forensic-auditing rule 1 (name ≠ behavior):** Folder/package `10-daystudyguide` does not
> match the 14-day schedule payload. Prefer product name **RoundsRN Exam 1A** in UI.

---

## 3. Lane B — Exam 2 / 50x single-page app

**Branch:** `claude/nextjs-50x-logic-app-v92juv`

| Concern | Location / behaviour |
|---------|----------------------|
| Entry | `src/app/page.tsx` → `StudyGuide` |
| Day model | `src/data/days.ts` (~830 lines, 10 days) |
| Components | `src/components/*` (DayNav, DayPanel, Questions, Mnemonics, Traps, …) |
| Progress | `src/hooks/useProgress.ts` + localStorage |
| Skill artifact | `.claude/skills/html-artifact-to-nextjs/` (50x HTML→Next workflow) |
| Stack | Same Next/React/Tailwind major line as lane A |

> [!WARNING]
> **forensic-auditing rule 1:** README title "RoundRn" / "Exam 2" vs lane A "Exam 1A".
> Customer domains use `roundsrn1` / `roundsrn2` — map numerals to exam identity in copy.

---

## 4. Shared constraints

- **No merge base** between lanes — dual Vercel projects, not a monorepo app router split.
- **Not PWA** on either lane (no web manifest / service worker / next-pwa). `themeColor` on
  lane B alone does not equal installability.
- **npm audit:** 3 vulnerabilities observed post-install (postcss moderate; next/sharp high
  transitive). Patch policy: pre-demo triage only; avoid force majors mid-demo.
- **Turbopack** may infer workspace root from `~/package-lock.json`; set `turbopack.root` in
  deploy hygiene.

---

## 5. Related docs

| Doc | Path |
|-----|------|
| Dual preview plan | [`docs/plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md`](plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md) |
| Session artifact index | [`docs/session-artifacts/2026-07-21_roundsrn-dual-preview/README.md`](session-artifacts/2026-07-21_roundsrn-dual-preview/README.md) |

---

## Change Log

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-07-21 | Initial architecture from dual worktree inspection |
| 1.1.0 | 2026-07-21 | plan-audit-fix + forensic-auditing warnings (SSOT, naming, PWA) |
