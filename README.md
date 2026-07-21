# RoundRn Study Guide — NSG 2600 Exam 2

A 10-day, ATI-style study system for **NSG 2600 · Adult Health I · Exam 2**,
covering Neuro → Immune → Endocrine → Respiratory. Each day has a mission,
core content, a "mnemonic vault," trap-pattern alerts, and click-to-reveal
practice questions with rationales. Progress is tracked per day and persists in
the browser.

This is a Next.js rebuild of the original single-file HTML study guide —
scaled up into a typed, componentized app while preserving the exact content,
interactions, and visual design. See
[`.claude/skills/html-artifact-to-nextjs`](.claude/skills/html-artifact-to-nextjs)
for the reusable "50x logic" workflow this was built with.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- Fonts via `next/font` (Baloo 2 + Nunito)
- Progress persisted in `localStorage`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (typechecks)
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, viewport
│   ├── globals.css       # Tailwind v4 theme, background, fonts, a11y
│   └── page.tsx          # renders <StudyGuide />
├── components/
│   ├── StudyGuide.tsx    # top-level state + layout (hero, nav, panel)
│   ├── DayNav.tsx        # horizontal day picker
│   ├── DayPanel.tsx      # one day: header, mission, sections, complete
│   ├── CollapsibleSection.tsx
│   ├── DayContent.tsx    # core content bullets
│   ├── Mnemonics.tsx     # sticky-note mnemonic cards
│   ├── Traps.tsx         # "trap alert" callouts
│   ├── Questions.tsx     # click-to-reveal quiz with rationale
│   └── ProgressBar.tsx
├── data/
│   ├── types.ts          # Day, Question, Mnemonic, Trap, ContentBlock
│   ├── systems.ts        # per-body-system theming + hexToRgba
│   └── days.ts           # all 10 days of content
└── hooks/
    └── useProgress.ts    # localStorage-backed completion tracking
```

## Content note

The study material is a learning aid for exam prep and mirrors the source
artifact verbatim. It is not medical advice.
