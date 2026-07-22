---
doc_type: session-artifact
title: "Opus advisory: three-surface topology + Expo scaffold"
repo: RoundsRN
created: 2026-07-21
updated: 2026-07-21
version: "1.0.0"
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [opus, advisory, roundsrn, feedback]
source_subagent: "1e7ae9b1-79db-49f6-bc4e-87a506bd68a0"
---

# Opus advisory: three-surface topology + Expo scaffold

**Source:** Cursor Task subagent `1e7ae9b1-79db-49f6-bc4e-87a506bd68a0`  
**Session:** `sess_roundsrn_dual_preview_20260721`  
**Captured:** 2026-07-21

> Advisory / research extract only. Not an approval. Deploy, DNS, and native ship still need explicit go-ahead.

---

## RoundsRN topology and app scaffold advisory

**A) Three surface topology, confirmed.** Keep it clean and separate:
- Surface 1: `roundsrn1.damieus.app` (wife, Lane A web, Next.js) — untouched.
- Surface 2: `roundsrn2.damieus.app` (wife, Lane B web, Next.js) — untouched.
- Surface 3: `DaBigHomie/RoundsRN` native app — new, standalone product repo. It borrows Lane B's visual language but never repoints or shares deploy targets with the wife's two web lanes.

Lane B is the design SSOT for surface 3; it stays a web surface in its own right.

**B) "App files" should mean an Expo React Native scaffold, not Capacitor.** Put it at `RoundsRN/apps/mobile`. Expo gives you real iOS/Android native, EAS build/submit, and first class font loading (`expo-font` for Baloo 2 + Nunito), which you will need to match Lane B. Capacitor only wraps a webview, so you would inherit web layout debt and gain little native benefit for a study app with day navigation and local progress. Reserve Capacitor only if you later decide the web build is the true product and mobile is a thin shell, which is not the current intent.

**C) Port from Lane B first, in this order:**
1. Theme tokens (highest value, lowest risk): the full colour set, system palette (neuro/immune/endo/resp/mixed), and typography into a single `theme.ts` token module. This is the visual SSOT.
2. Data model types: day guide, mission card, mnemonic, trap alert, question/reveal shapes as TypeScript types. Content agnostic, so they carry over cleanly.
3. Component map (as a porting spec, not a copy): day navigator, mission cards, mnemonic vault, trap alerts, click to reveal, local progress. Rebuild these as RN components.

Stays web only: Next.js routing, SSR/metadata, DOM/CSS specific layout, and anything tied to the `.app` deploy. Do not lift web components verbatim.

**D) New plan/ADR goes in `RoundsRN/docs`.** Author the app plan and an ADR ("Expo RN scaffold, Lane B as visual SSOT") there. Leave the dual preview plan untouched except one short cross-link line pointing to the new ADR, so provenance is traceable without editing the wife's plan.

**E) Risk: Exam 2 visuals on Exam 3 content.** Label explicitly at both content and build level. Tag the theme as "RoundsRN visual system (derived from Exam 2 Lane B)" and tag content datasets with their exam number in the data model and in a visible in app badge (for example "Exam 3"). Keep theme version and content version as separate fields so a customer never conflates the look with the syllabus.

Advisory only. No files changed.

I'm keeping this advisory-focused and concise, so I'll provide the guidance directly without needing to dig into the codebase since the user has already given me the context I need.
