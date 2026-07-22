---
doc_type: session-artifact
title: "RoundsRN dual preview — session artifact index"
repo: 10-daystudyguide
created: 2026-07-21
updated: 2026-07-21
version: "1.1.0"
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [roundsrn, session-artifact]
---

# RoundsRN dual preview — session artifact index

Scoped folder for 2026-07-21 dual-branch customer preview work. Bodies of durable plans live
under `docs/plans/`; this index points at them and at local-only staging paths.

## Canonical docs (in-repo)

| Artifact | Path |
|----------|------|
| Plan | `docs/plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md` |
| Architecture | `docs/ROUNDSRN-ARCHITECTURE.md` |

## Local staging (not committed by default)

| Artifact | Path | Notes |
|----------|------|-------|
| Tentative logo 1 | `temp-gitignore/roundsrn-logos/roundsrn1-logo-tentative.png` | ImageGeneration; untracked |
| Tentative logo 2 | `temp-gitignore/roundsrn-logos/roundsrn2-logo-tentative.png` | ImageGeneration; untracked |

> [!WARNING]
> **forensic-auditing rule 4:** `temp-gitignore/` is **not** listed in `.gitignore` on either
> tip as of 2026-07-21. Confirm ignore rules before `git add -A` or logos may leak into a PR.

## Worktrees

| Lane | Path | Branch |
|------|------|--------|
| A | `10-daystudyguide` | `claude/session-5mn6ou` |
| B | `10-daystudyguide.worktrees/nextjs-50x` | `claude/nextjs-50x-logic-app-v92juv` |

## Change Log

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-07-21 | Index created |
| 1.1.0 | 2026-07-21 | Audit note: temp-gitignore not in .gitignore |
