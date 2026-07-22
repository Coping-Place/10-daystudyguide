---
doc_type: plan
title: "RoundsRN dual Vercel + Cloudflare customer preview"
version: "1.2.0"
created: 2026-07-21
updated: 2026-07-21
repo: 10-daystudyguide
session_id: sess_roundsrn_dual_preview_20260721
status: active
plan_tier: tactical
task_id: task_roundsrn_dual_vercel_preview_20260721
knowledge_key: plan:10-daystudyguide:roundsrn_dual_vercel_preview_20260721
tags:
  - roundsrn
  - vercel
  - cloudflare
  - customer-preview
  - jay-anthony
  - nsg-2600
canonical_basis: 10-daystudyguide/docs/plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md
---

# RoundsRN dual Vercel + Cloudflare customer preview

**Scope:** Customer-facing dual preview of both agent-built Next.js variants under
`roundsrn1.damieus.app` and `roundsrn2.damieus.app`, hosted on Vercel (jay-anthony team),
DNS via Cloudflare API for zone `damieus.app`.

**Out of scope this plan:** merging the two branches, PWA enablement before demo,
logo productionisation into `public/`, CORTEX cloud task seed (optional follow-up),
live DNS/Vercel writes until human go-ahead.

**Advisory source:** Opus dual-preview plan (session 2026-07-21). Local previews verified
at `:3000` (session) and `:3001` (nextjs-50x worktree).

---

## 0. Git SSOT (forensic-auditing rule 2)

| Lane | Path | Branch | Tip SHA (fetched 2026-07-21) |
|------|------|--------|------------------------------|
| A (roundsrn1) | `Management Git/10-daystudyguide` | `claude/session-5mn6ou` | `1f2bbdb` |
| B (roundsrn2) | `Management Git/10-daystudyguide.worktrees/nextjs-50x` | `claude/nextjs-50x-logic-app-v92juv` | `bec1fe7` |

> [!IMPORTANT]
> **forensic-auditing — temporal drift / no merge base:** These branches are **unrelated
> histories** (`git merge-base` fails). There is **no `origin/main`**. Never merge, rebase
> onto, or assume either tip is "behind main". Treat each tip as its own production SSOT.
> Verify with `git fetch` + `git rev-parse origin/<branch>` before any deploy script.

> [!WARNING]
> **forensic-auditing — name ≠ behavior:** Package name is `10-daystudyguide` on both, but
> lane A is framed Exam **1A** (14 schedule days, 50 quiz items, multi-route) and lane B
> README says Exam **2** / RoundRn (10 days, single-page navigator). Customer copy must say
> **RoundsRN** and map `1`/`2` to exam identity, not "day count".

---

## 1. Goals

1. Show **both** apps to the customer on branded subdomains.
2. Keep Vercel projects isolated so cross-branch builds do not clobber each other.
3. Use Cloudflare API credentials already present in Management Git root env
   (`CLOUDFLARE_API_TOKEN`, zone ids) without printing secrets.
4. Record PWA status, logo placeholders, and deploy hygiene risks before go-live.

---

## 2. Recommended topology

**Two Vercel projects**, same GitHub repo `Rainbowgangsta26/10-daystudyguide`, under the
**jay-anthony** team (confirm exact team slug before scripting).

| Vercel project | Production branch | Customer URL | App identity |
|----------------|-------------------|--------------|--------------|
| `roundsrn1` | `claude/session-5mn6ou` | `https://roundsrn1.damieus.app` | Multi-route quiz + schedule (Exam 1A) |
| `roundsrn2` | `claude/nextjs-50x-logic-app-v92juv` | `https://roundsrn2.damieus.app` | Single-page day navigator (Exam 2 / 50x) |

Root directory for **both**: repo root on that branch (`package.json` / `next.config` at tip).
Lane B uses `src/app/`; lane A uses root `app/`. Framework preset: Next.js.

> [!WARNING]
> **forecast-scrutiny — blast radius:** A single Vercel project with branch aliasing will
> fight root detection and shared build settings. Dual projects are mandatory until histories
> are deliberately unified (out of scope).

---

## 3. Vercel setup checklist (execute only on human go-ahead)

Per project:

1. Import `Rainbowgangsta26/10-daystudyguide` into jay-anthony team scope.
2. Set **Production Branch** to the branch in §2 (not `main`).
3. Root Directory: `.` (repo root on checkout).
4. Env: project-scoped only; no shared secret bag unless required later.
5. **ignoreCommand** guard so each project skips builds when
   `$VERCEL_GIT_COMMIT_REF` ≠ its production branch (prevents dual triggers on the same repo).
6. Add custom domain after DNS exists (§4).
7. Turbopack hygiene: set `turbopack.root` in `next.config` **or** remove/relocate
   `~/package-lock.json` (local warning observed on both previews).

> [!IMPORTANT]
> **forecast-scrutiny — wrong target:** Vercel MCP was `needsAuth` in session. Do not assume
> CLI `--scope` until the real jay-anthony **team slug** is confirmed in the dashboard
> (user spelled jay-anythony / jay-anthony). Wrong scope = wrong billing/ownership.

---

## 4. Cloudflare DNS (zone `damieus.app`)

Credentials (names only): `CLOUDFLARE_API_TOKEN`, prefer
`CLOUDFLARE_ZONE_ID_DAMIEUS_APP` for **`damieus.app`** (do not silently reuse a
`damieus.com` zone id).

**Recommended records (Opus):**

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | `roundsrn1` | `cname.vercel-dns.com` | DNS only (grey) |
| CNAME | `roundsrn2` | `cname.vercel-dns.com` | DNS only (grey) |

Then Add Domain in each Vercel project; wait for SSL.

> [!WARNING]
> **forensic-auditing — name ≠ behavior / house precedent:** Existing
> `damieus-com-migration/scripts/add-showcase-dns.mts` creates **A** `showcase` →
> `76.76.21.21` with **`proxied: true`**. Opus recommends **CNAME + grey cloud** for Vercel
> TLS. Pick one pattern deliberately before scripting; do not mix orange-cloud A with
> Vercel custom domains without Full (strict) TLS review.

House script pattern to remix (do not invent a new API shape):

```text
POST /zones/{ZONE_ID}/dns_records
Authorization: Bearer $CLOUDFLARE_API_TOKEN
```

---

## 5. PWA status (disk-verified 2026-07-21)

| Lane | manifest / SW / next-pwa | Verdict |
|------|--------------------------|---------|
| A `session-5mn6ou` | none under repo (excl. node_modules) | **Not PWA** |
| B `nextjs-50x` | `themeColor` only in layout metadata | **Not PWA** |

> [!IMPORTANT]
> **Opus + forecast-scrutiny:** Do **not** enable PWA before this customer demo. Manifest +
> service worker caching can serve stale builds mid-walkthrough. Phase 2 after domains are live.

---

## 6. Branding / logos (tentative)

Tentative ImageGeneration marks staged (untracked) at:

- `temp-gitignore/roundsrn-logos/roundsrn1-logo-tentative.png`
- `temp-gitignore/roundsrn-logos/roundsrn2-logo-tentative.png`

Also under Cursor assets. **Not** wired into `public/` or manifests yet. Customer-facing
brand string: **RoundsRN** (normalise RoundRn / Roundsrn in UI copy when editing apps).

---

## 7. DAG (forensic-auditing rule 5)

```text
1. Confirm jay-anthony Vercel team slug
2. Create Vercel projects + pin production branches + ignoreCommand
3. Create Cloudflare DNS records (chosen A/CNAME + proxy policy)
4. Attach domains in Vercel; verify TLS
5. Smoke GET https://roundsrn{1,2}.damieus.app
6. (Later) PWA per app — after demo
7. (Later) Merge strategy ONLY if product owners mandate one codebase
```

Do not run 2–5 concurrently with app feature edits on the same branch tips without a
dedicated deploy lane.

---

## 8. Minimal vs fuller

| Option | What | When |
|--------|------|------|
| Minimal | Share raw Vercel `*.vercel.app` URLs | Time-boxed internal QA |
| Fuller (default) | Branded `roundsrn1/2.damieus.app` | Customer presentation |

---

## 9. Acceptance criteria

- [ ] `roundsrn1.damieus.app` serves lane A tip `claude/session-5mn6ou`
- [ ] `roundsrn2.damieus.app` serves lane B tip `claude/nextjs-50x-logic-app-v92juv`
- [ ] HTTPS valid on both
- [ ] Cross-branch push does not rebuild the wrong Vercel project
- [ ] No secrets printed in logs or docs
- [ ] This plan mirrored under `/docs` on **both** branch worktrees

## PR references

| PR | Repo | Status | Notes |
|----|------|--------|-------|
| (none yet) | `Rainbowgangsta26/10-daystudyguide` | pending | Dual-branch docs + deploy not opened; gate with `/maximus-prime-doc-validation` before merge |
| (none yet) | Vercel / Cloudflare | n/a | Infra changes are dashboard/API, not a GitHub PR |

---

## Change Log

| Version | Date | Change |
|---------|------|--------|
| 1.0.0 | 2026-07-21 | Initial draft from Opus advisory + local dual worktree verification |
| 1.1.0 | 2026-07-21 | plan-audit-fix + forensic-auditing: SSOT table, no-merge-base WARNING, zone-id IMPORTANT, showcase A vs CNAME WARNING, PWA deferral, DAG, dual-tree publish note |
| 1.2.0 | 2026-07-21 | MALFIG G11 tactical: add PR references (Jul 15 wave-barrier / validate-plan-completeness) |

---

## Related — RoundsRN Mobile (separate product surface)

Wife dual web lanes above remain the customer preview SSOT. A separate Expo app in
`DaBigHomie/RoundsRN` (`apps/mobile`) reuses the **RoundsRN2 visual system** only.
See `RoundsRN/docs/plans/PLAN-ROUNDSRN-MOBILE-EXPO-20260721.md` and
`RoundsRN/docs/ADR-001-EXPO-MOBILE-ROUNDSRN2-VISUAL.md`. Do not repoint `roundsrn1` /
`roundsrn2` for native.
