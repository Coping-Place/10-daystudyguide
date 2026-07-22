---
doc_type: session-artifact
title: "Opus advisory: dual Vercel + Cloudflare customer preview"
repo: RoundsRN
created: 2026-07-21
updated: 2026-07-21
version: "1.0.0"
session_id: sess_roundsrn_dual_preview_20260721
status: active
tags: [opus, advisory, roundsrn, feedback]
source_subagent: "04ee0f75-ba5d-482e-a17d-7d4386a6a64e"
---

# Opus advisory: dual Vercel + Cloudflare customer preview

**Source:** Cursor Task subagent `04ee0f75-ba5d-482e-a17d-7d4386a6a64e`  
**Session:** `sess_roundsrn_dual_preview_20260721`  
**Captured:** 2026-07-21

> Advisory / research extract only. Not an approval. Deploy, DNS, and native ship still need explicit go-ahead.

---

## RoundsRN Dual Preview: Deployment Plan

### 1. Recommended topology
Use **two separate Vercel projects** from the **same GitHub repo**, each pinned to a different production branch. The apps have no merge base and share a package name, so a single project with branch aliasing would fight over root detection and build config. Two projects give clean isolation, independent env, and one stable custom domain each.

- Project `roundsrn1` -> production branch `claude/session-5mn6ou` (Exam 1A multi-route app)
- Project `roundsrn2` -> production branch `claude/nextjs-50x-logic-app-v92juv` (RoundRn single-page day navigator)

### 2. Exact Vercel setup steps (per project)
For each project (do these once each, values differ):
1. **New Project** -> Import `Rainbowgangsta26/10-daystudyguide` under the jay-anthony team.
2. **Root Directory**: set explicitly.
   - `roundsrn1`: repo root (the branch checks out `10-daystudyguide` at root).
   - `roundsrn2`: confirm whether the 50x app builds from repo root on its branch or a subfolder; set Root Directory to wherever `package.json`/`next.config` sits on that branch. Do not assume root.
3. **Production Branch**: Settings -> Git -> set to the branch above (not `main`).
4. **Framework preset**: Next.js (auto). Node build defaults are fine for Next 16.
5. **Environment variables**: add per project as needed. Keep them project-scoped, do not share a single env across both.
6. **ignoreCommand** (deploy hygiene): since both projects watch the same repo, add a build-ignore guard so each only builds when its branch changes, e.g. compare `$VERCEL_GIT_COMMIT_REF` against the intended branch and exit 0 (skip) otherwise. This prevents cross-triggered builds.
7. **Turbopack root warning**: the stray `~/package-lock.json` makes Turbopack infer the wrong workspace root. Set `turbopack.root` (or `outputFileTracingRoot`) in `next.config` to the app directory, or remove/relocate the home-level lockfile. Note this to the customer as pre-demo hygiene, not a blocker.

### 3. Cloudflare DNS steps (conceptual, via API)
Zone: `damieus.app`. These are **subdomains**, so use CNAME (no APEX/ALIAS needed).
1. For each subdomain, create a **CNAME**:
   - `roundsrn1` -> `cname.vercel-dns.com`
   - `roundsrn2` -> `cname.vercel-dns.com`
2. **Proxy status**: set to **DNS only** (grey cloud). Vercel issues and serves its own TLS; leaving Cloudflare proxy on (orange cloud) commonly causes redirect loops and cert conflicts unless you configure Full (strict) deliberately. Grey cloud is the safe default.
3. In Vercel, **Add Domain** on each project (`roundsrn1.damieus.app`, `roundsrn2.damieus.app`). Vercel shows the exact target and verifies via the CNAME. SSL provisions automatically once the record resolves.
4. Credentials come from the Management Git root env (`CLOUDFLARE_*` / `CF_*`); reference by name only, never print values.

### 4. jay-anthony team ownership
Create both projects **inside the jay-anthony team**, not a personal scope. The exact team **slug is unknown** (user spelled it jay-anythony / jay-anthony). **Flag: confirm the real slug** in the Vercel dashboard before scripting anything, as `--scope`/team slug must match exactly. Domains and env then live under that team so the customer handover is clean.

### 5. Customer presentation URL map
| Branch | App identity | Subdomain |
|---|---|---|
| `claude/session-5mn6ou` | Exam 1A, multi-route quiz + schedule | **roundsrn1.damieus.app** |
| `claude/nextjs-50x-logic-app-v92juv` | RoundRn, Exam 2 day navigator | **roundsrn2.damieus.app** |

Naming recommendation: standardise the brand to **RoundsRN** everywhere customer-facing (page titles, headers, metadata) and let the `1`/`2` map to **Exam 1A vs Exam 2**. Consider labelling them in-app as "RoundsRN — Exam 1" and "RoundsRN — Exam 2" so the numeral is meaningful rather than arbitrary.

### 6. Risks
- **Unrelated histories / no merge base**: never attempt to merge; two-project topology sidesteps this.
- **Single repo, dual branch**: cross-triggered builds without the ignoreCommand guard; each project must pin its branch.
- **PWA gap**: no manifest/service worker found; installable/offline demo not currently possible.
- **Naming conflict (Exam 1A vs Exam 2)**: unify under RoundsRN to avoid customer confusion.
- **npm vulns**: run an audit pre-demo; patch high/critical only, avoid risky major bumps before a live demo.
- **Turbopack root**: fix as in step 2.7 to remove build-time warnings.

### 7. Minimal vs fuller options
- **Minimal**: share the two Vercel-generated preview/production URLs. Zero DNS work, fastest, but unbranded and less credible.
- **Fuller (recommended)**: the branded `roundsrn1/2.damieus.app` custom domains with SSL, as above. Best customer optics for modest extra setup.

### 8. Enable PWA before demo?
**No, not before this demo.** Adding a manifest and service worker to two Next 16 apps introduces caching/offline behaviour that is easy to get wrong under time pressure and can serve stale content mid-demo. Ship the branded domains first, then treat PWA as a scoped follow-up (single app first, verified offline, then the second). Recommend it as a phase 2 enhancement, not a demo gate.

**Advisory only. No deploys, DNS writes, or env changes have been executed.**

I'm planning to provide advisory guidance rather than execute anything, keeping it concise and structured within about 800 words, using British English throughout.
