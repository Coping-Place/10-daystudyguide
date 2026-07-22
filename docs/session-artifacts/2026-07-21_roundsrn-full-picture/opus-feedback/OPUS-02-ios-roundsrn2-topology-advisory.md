---
doc_type: session-artifact
title: "Opus advisory: RoundsRN2 as iOS — product topology"
repo: RoundsRN
created: 2026-07-21
updated: 2026-07-21
version: "1.0.0"
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [opus, advisory, roundsrn, feedback]
source_subagent: "10cc71ea-1cc5-4d06-9f75-aade3886ffde"
---

# Opus advisory: RoundsRN2 as iOS — product topology

**Source:** Cursor Task subagent `10cc71ea-1cc5-4d06-9f75-aade3886ffde`  
**Session:** `sess_roundsrn_dual_preview_20260721`  
**Captured:** 2026-07-21

> Advisory / research extract only. Not an approval. Deploy, DNS, and native ship still need explicit go-ahead.

---

# RoundsRN2 as iOS: Product Topology Advisory

## 1. Verdict (for the customer demo this week)

**Conditional, leaning discourage for native this week.** Keep `roundsrn2.damieus.app` as the web lane for the demo. A true iOS app (TestFlight, let alone App Store) cannot be responsibly stood up, reviewed, and provisioned to a customer inside one week, and Lane B was built on browser APIs (localStorage, `window.scrollTo`, Next fonts) that do not survive a naive native port. If "on a phone" is the actual demo requirement, satisfy it with a **PWA/installable web** experience, not a store build. Reserve real iOS for a scoped fast-follow.

## 2. Topology options, ranked

1. **Keep roundsrn2 as web (recommended for the demo).** Ship Lane B (`claude/nextjs-50x-logic-app-v92juv`) to Vercel behind `roundsrn2.damieus.app`. Zero new risk, honours the dual-lane plan already written.
2. **PWA-enhance Lane B (best "mobile feel" this week).** Add a manifest, icons, `themeColor #0B1020`, and offline-safe handling of the existing localStorage progress. Installable to the home screen, demoable on the customer's own iPhone, no store gate. Low effort, high perceived payoff.
3. **Capacitor wrap of Lane B (fast native shell, next sprint).** Wraps the same web build in a WKWebView. Gets you a `.ipa` for TestFlight without rebuilding logic. Caveat: web-view apps face App Store 4.2 "minimum functionality" scrutiny, so this is a distribution tactic, not an App Store strategy.
4. **Expo/React Native rebuild (only if native is a real product goal).** Strong house precedent exists (`atl-table-booking-app/apps/mobile`), but this is a genuine rebuild: re-implement the day navigator, replace localStorage with `AsyncStorage`/SQLite, restyle to the brand kit. Weeks, not days.
5. **TestFlight → App Store.** Downstream of 3 or 4. Requires Apple Developer enrolment, bundle ID, signing, review. Out of scope this week regardless of path.

## 3. Interaction with the dual Vercel + Cloudflare plan

The existing `PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md` (roundsrn1 = Lane A/Exam 1A, roundsrn2 = Lane B) stays fully intact under options 1–2. PWA-enhancing Lane B is **purely additive** to that plan: same Vercel deploy, same `roundsrn2.damieus.app` Cloudflare record. Options 3–4 introduce a **third distribution surface** (a native binary) that the current DNS/Vercel plan does not cover; the web app remains the SSOT and the native shell points at or embeds the same content. Do not repoint or retire the `roundsrn2` web deploy to "make room" for iOS. Native is an *addition* to the topology, never a *replacement*, until a native build has actually shipped and been validated.

## 4. Where docs/plans should live (PAC: owning repo for product RoundsRN)

State plainly: **RoundsRN today holds only the brand kit (`brand/Arnesha-Gates-Persona-Brand-Kit.md`) and study artifacts (docx/HTML). It has no `docs/` or `docs/plans/`.** The formal dual-preview plan and architecture doc live in **10-daystudyguide** (`docs/plans/...` and `docs/ROUNDSRN-ARCHITECTURE.md`), because that repo owns the running Next.js code.

Going forward, split by ownership rather than duplicating:
- **Product-level topology, roadmap, and any iOS decision record → RoundsRN** (the PAC owning repo for the product). This is where an iOS ADR *should* be born if you proceed.
- **Implementation/deploy plans that describe the Next.js lanes → 10-daystudyguide**, where the code is.
- Cross-link, do not fork. Avoid a third copy. First hygiene action if you go iOS: fix the stale `localPath: /Users/dame/management-git/RoundsRN` in career-corpus to the real `/Users/dabighomie/Management Git/RoundsRN`.

## 5. Brand kit implications for native

The brand kit's Triplet framework already anticipates this: **Mobile Apps take action/spark names, Web-apps take sanctuary/grid names.** So a native RoundsRN2 must not simply inherit the web name and voice. Give the mobile surface a **Spark-tier action name** and treat the palette accordingly: Midnight Ocean `#0A192F` / Soft Mist `#F4F7F6` as base, Pioneer Coral `#FF6B6B` / Ember Orange `#FF5722` as the action accent (native CTAs, tab bars), Objective Slate `#8892B0` for secondary text. Note Lane B's `#0B1020` themeColor is close to but not identical to Midnight Ocean `#0A192F`; reconcile to the brand kit before minting a native theme.

## 6. Content SSOT risk (Exam 1A vs 2 vs 3)

This is the sharpest risk. Three exam scopes are in play: **canonical RoundsRN = Exam 3** (docx/HTML), **Lane A = Exam 1A**, **Lane B = Exam 2**. "Ship RoundsRN2 as iOS" therefore does **not** mean "ship Exam 3 native" — Lane B is Exam 2. Before any native scoping, pick one exam as the SSOT for the mobile surface and record it explicitly, or you will demo Exam 2 under an Exam 3 product banner. Do not silently merge exams.

## 7. Minimal DAG if the user chooses iOS

1. Decide SSOT exam scope (2 vs 3) → record ADR in **RoundsRN**.
2. Ship Lane B to web `roundsrn2` (demo unblock, unchanged).
3. PWA-enhance Lane B (manifest, icons, offline localStorage).
4. Reconcile brand: Spark-tier mobile name + palette/themeColor.
5. Spike Capacitor wrap → TestFlight internal only (no App Store).
6. Only then decide: Expo rebuild vs stay Capacitor.

Steps 1–2 gate everything; 3–4 gate 5.

## 8. Explicit non-goals this week

- Do **not** deploy or submit any iOS build; no TestFlight/App Store this week.
- Do **not** repoint or retire the `roundsrn2` web deploy for native.
- Do **not** start an Expo rebuild before the SSOT exam decision.
- Do **not** create `docs/plans` inside RoundsRN to mirror 10-daystudyguide; plans stay where the code is.
- Do **not** conflate Exam 1A/2/3 into one "RoundsRN" bundle.

I'm moving on to write the advisory now, keeping it concise and under 900 words.
