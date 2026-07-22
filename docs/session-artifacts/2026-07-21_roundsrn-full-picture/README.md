---
doc_type: session-artifact
title: "RoundsRN full picture — 2026-07-21"
repo: RoundsRN
created: 2026-07-21
updated: 2026-07-21
version: "1.0.0"
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [roundsrn, session-artifact, topology]
---

# RoundsRN full picture — 2026-07-21

**Live canvas (open beside chat):**
`~/.cursor/projects/Users-dabighomie-Management-Git/canvases/RoundsRN-session-picture-20260721.canvas.tsx`

## One sentence

Two agent-built Next.js study apps (Exam 1A + Exam 2) stay on branded `damieus.app`
subdomains for the wife project; a separate Expo app in `DaBigHomie/RoundsRN` reuses
the RoundsRN2 look only.

## Three surfaces

| Surface | URL / path | Branch / tip | Role |
|---------|------------|--------------|------|
| Rounds1 web | `roundsrn1.damieus.app` · `10-daystudyguide` | `claude/session-5mn6ou` @ `1f2bbdb` | Wife · Exam 1A multi-route |
| Rounds2 web | `roundsrn2.damieus.app` · `.worktrees/nextjs-50x` | `claude/nextjs-50x-logic-app-v92juv` @ `bec1fe7` | Wife · Exam 2 day navigator · **visual SSOT for mobile** |
| RoundsRN Mobile | `RoundsRN/apps/mobile` | `main` (uncommitted apps/docs) | Product Expo app |

## Exam map

| Surface | Exam |
|---------|------|
| Lane A | 1A |
| Lane B / mobile scaffold data | 2 |
| RoundsRN HTML/docx | 3 |

## Deploy (wife webs) — planned, not executed

- Two Vercel projects on jay-anthony team
- Cloudflare `damieus.app` records for `roundsrn1` / `roundsrn2`
- See `10-daystudyguide/docs/plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md`

## Mobile

- Expo SDK 57 scaffold + Lane B tokens/systems/days port
- Plan: `docs/plans/PLAN-ROUNDSRN-MOBILE-EXPO-20260721.md`
- ADR: `docs/ADR-001-EXPO-MOBILE-ROUNDSRN2-VISUAL.md`

## Done vs next

**Done:** clones, dual previews, docs on both web branches, Expo scaffold, ADR/plan,
career-corpus `localPath` fix, this artifact.

**Next (on go-ahead):** Vercel+DNS, commits, Exam 2 vs 3 content decision for mobile,
`expo start` smoke, fonts.

## Local ports

- Wife A `:3000` · Wife B `:3001` · Mobile `npx expo start` in `apps/mobile`
