---
name: html-artifact-to-nextjs
description: >-
  Convert a single-file HTML artifact (an inline-CSS + vanilla-JS page, often
  a Claude/AI-generated "artifact", study guide, dashboard, landing page, or
  interactive prototype) into a production-grade Next.js App Router application
  — this is the "50x logic" build: take a one-file prototype and scale it up
  into a real, componentized, typed, testable app WITHOUT losing visual or
  behavioral fidelity. Use this skill whenever the user attaches or pastes an
  .html file and asks to "make a Next.js app", "turn this into a real app",
  "productionize this", "rebuild this in React/Next", "use 50x logic", or
  otherwise wants a self-contained HTML page reborn as a proper Next.js project.
  Trigger even if they don't say "Next.js" explicitly but hand you a standalone
  HTML page and ask for a web app.
---

# HTML Artifact → Next.js ("50x logic")

## What this skill is for

Single-file HTML artifacts pack an entire app — data, styles, state, and render
logic — into one `<script>` and one `<style>`. That's great for a prototype and
terrible for anything you want to grow. The job here is a **faithful up-scaling**:
reproduce what the file does (and looks like) exactly, but re-express it as a
real Next.js project with separated data, typed models, reusable components, and
a build you can lint, test, and deploy.

"50x logic" is the mindset: one file becomes ~dozens of small, single-purpose
files. Fidelity first, architecture second, embellishment last. Do **not**
redesign the UI or invent features unless asked — the user chose this look and
these behaviors deliberately. Your value is structure, types, and a real build,
not a restyle.

## The workflow

Follow these phases in order. Each builds on the last.

### 1. Read the whole artifact first

Read the entire file before writing anything — large artifacts get truncated in
a single read, so page through to the end. Extract and note:

- **Data model** — the arrays/objects that drive the page (e.g. a `DAYS` list, a
  `SYS`/theme map). This becomes your typed data layer.
- **State** — every mutable variable and where it's persisted (`localStorage`
  keys, in-memory `let` state, URL, etc.).
- **Render functions** — each `renderX()` maps cleanly to one React component.
- **Styling system** — fonts, color tokens, the theming scheme (often a
  per-category accent color threaded through inline styles), custom scrollbars,
  gradients, focus rings, media queries.
- **Interactions** — clicks, toggles, reveals, navigation, and any scroll or
  focus side effects.

### 2. Scaffold Next.js

Use the current stable `create-next-app` non-interactively so it never blocks on
a prompt. Scaffold into the existing directory (a bare repo with only `.git` is
fine):

```bash
npx --yes create-next-app@latest . \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --no-turbopack --use-npm --yes
```

Then read what it generated — `package.json` (note the Next/React/Tailwind
**major versions**, they change defaults), `src/app/layout.tsx`,
`src/app/globals.css`, `postcss.config.*`. Tailwind v4 has no `tailwind.config.js`
by default: it configures via `@import "tailwindcss"` and an `@theme { … }` block
in `globals.css`. Don't hand-write a config file that the version doesn't use.

### 3. Rebuild the data layer (typed)

Move the artifact's data verbatim into `src/data/`. Split by concern:

- `types.ts` — interfaces for each record shape.
- One file per dataset (e.g. `days.ts`) plus a theming/config module
  (e.g. `systems.ts`) that also re-exports pure helpers like a `hexToRgba`.

Transcribe the content **exactly** — every question, rationale, label, and
number. This is the part users notice most if it drifts. If the source used a
helper like `esc()` to escape HTML, drop it: JSX escapes text by default.

### 4. Componentize the render functions

Map each `renderX()` to a component in `src/components/`, mirroring the original
nesting. Guidelines:

- Interactive components need `"use client"`. Pure presentational children can
  stay server components, but if a parent passes them callbacks they'll render
  under a client boundary anyway — keep it simple.
- **Dynamic, data-derived colors** (a per-category accent) belong in inline
  `style={{ … }}`, because Tailwind can't emit arbitrary runtime color values.
  Use Tailwind utility classes for the **static** layout/spacing/typography.
  This hybrid is expected and correct — don't torture everything into utilities.
- Preserve exact sizing where the design is deliberately chunky/specific: bracket
  utilities like `text-[13.5px]`, `rounded-[18px]`, `min-w-[108px]` keep pixel
  fidelity.
- Add the accessibility the original lacked, since it's cheap here: `aria-expanded`
  / `aria-controls` on toggles, `aria-current` on the active nav item,
  `role="progressbar"` with values, `type="button"` on non-submit buttons,
  `aria-hidden` on decorative emoji.

### 5. Port state to hooks

Lift shared state into the top-level client component (active selection, which
section is open, revealed answers). For persisted state, write a small hook
(e.g. `useProgress`) that reads `localStorage` in a mount effect — never during
render, or server HTML and first client render mismatch and hydration breaks.
Gate writes behind a `hydrated` flag so the initial read doesn't immediately
overwrite storage with the empty default.

The lint rule `react-hooks/set-state-in-effect` will flag the one-time
localStorage→state sync. That read genuinely must live in an effect for correct
hydration, so silence exactly that line with an
`// eslint-disable-next-line react-hooks/set-state-in-effect` and a comment
explaining why — don't restructure into a render-time read that reintroduces the
mismatch.

### 6. Fonts, global styles, metadata

- Load the artifact's Google Fonts through `next/font/google` in `layout.tsx`,
  exposing them as CSS variables (`--font-…`), and wire those into the Tailwind
  `@theme` block. This removes the render-blocking `<link>` and self-hosts them.
- Move `body` background, custom scrollbars, focus-visible ring, gradient-text
  and keyframes into `globals.css`. Add a
  `@media (prefers-reduced-motion: reduce)` block — the original almost never has
  one and it's a real accessibility win for a page full of transitions.
- Set real `metadata` (title/description) and a `viewport` (theme-color) from the
  artifact's `<title>` and meta tags. Replace the default `page.tsx` — read it
  first (the scaffold's file must be Read before Write), then render your root
  component.

### 7. Verify — build, lint, and actually look at it

Never hand back an unbuilt app. Run, in order:

```bash
npm run build   # must compile + typecheck clean
npm run lint    # must pass; justify any disable inline
```

Then **run it and look at it**. Start the dev server in the background, poll the
port until it answers 200, and screenshot the real thing with Playwright. In
these sandboxes the `playwright` npm package usually isn't local but is installed
globally with the browser under `PLAYWRIGHT_BROWSERS_PATH`. ESM ignores
`NODE_PATH`, so import the global build by absolute path:

```js
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
```

Drive the key interactions in the screenshot script (open a collapsible, answer a
question to trigger the reveal, switch category/nav to confirm the theme
changes), collect `console`/`pageerror` events, and assert the error list is
empty. Compare the screenshots against the original artifact and fix drift.
See `references/verification.md` for a ready-to-adapt screenshot script.

## Fidelity checklist

Before calling it done, confirm against the source:

- [ ] All data transcribed exactly — counts match (days, questions, options).
- [ ] Every interaction from the original works (toggle, reveal, nav, persist).
- [ ] Per-category theming still threads the right accent color everywhere.
- [ ] Fonts, gradients, scrollbars, focus states visually match.
- [ ] `localStorage` uses the **same key** as the original, so existing progress
      carries over.
- [ ] `npm run build` and `npm run lint` are clean.
- [ ] Screenshots reviewed; no console/page errors.

## What NOT to do

- Don't redesign, "modernize," or add features the artifact didn't have.
- Don't dump every value into Tailwind utilities — runtime colors stay inline.
- Don't read `localStorage` during render or in a `useMemo`/initializer.
- Don't invent a `tailwind.config.js` for a Tailwind v4 project.
- Don't skip the visual check because the build passed — a green build with a
  broken layout is still broken.
