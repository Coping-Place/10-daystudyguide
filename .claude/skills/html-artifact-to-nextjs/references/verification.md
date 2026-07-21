# Verification: run it and look at it

A clean `npm run build` proves the code typechecks and compiles. It proves
nothing about whether the page looks right or the clicks work. Always drive the
running app and screenshot it before handing back.

## 1. Start the dev server and wait for it

Start it in the background, then poll the port — don't guess a fixed sleep:

```bash
(npm run dev > /tmp/dev.log 2>&1 &) ; sleep 1
for i in $(seq 1 15); do
  code=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || true)
  [ "$code" = "200" ] && break
  sleep 2
done
tail -5 /tmp/dev.log
```

## 2. Screenshot + interaction script

In sandboxed environments the `playwright` npm package is typically installed
**globally**, with browsers under `PLAYWRIGHT_BROWSERS_PATH` (do NOT run
`playwright install`). ESM ignores `NODE_PATH`, so import the global build by its
absolute path. Find it with `npm root -g` (commonly
`/opt/node22/lib/node_modules`).

```js
// shot.mjs — adjust the absolute import path to `npm root -g`
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const OUT = process.env.OUT || '/tmp';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 900, height: 1400 } });

const errors = [];
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
await page.screenshot({ path: `${OUT}/01-landing.png` });

// Drive the interactions that actually matter for this artifact, e.g.:
await page.getByRole('button', { name: /Core Content/ }).click();
await page.getByRole('button', { name: /Practice Questions/ }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/02-expanded.png`, fullPage: true });

// Trigger a state reveal (pick an answer, open a detail, etc.)
const first = (await page.getByRole('button', { name: /^A\./ }).all())[0];
if (first) { await first.click(); await page.waitForTimeout(200); }
await page.screenshot({ path: `${OUT}/03-revealed.png`, fullPage: true });

// Switch category/nav to confirm theming re-themes correctly.
await page.getByRole('button', { name: /DAY 6/ }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${OUT}/04-themed.png`, fullPage: true });

console.log('ERRORS:', JSON.stringify(errors, null, 2));
await browser.close();
```

Run it, then Read the PNGs back to compare against the original artifact:

```bash
OUT=/path/to/scratch node shot.mjs
```

`ERRORS: []` plus screenshots that match the source is the bar. A non-empty error
array or visible drift means keep fixing.

## 3. Clean up

```bash
pkill -f "next dev"; pkill -f "next-server"
```

## Common gotchas

- **Hydration mismatch warning in console** → something read `localStorage`,
  `Date.now()`, `window`, or `Math.random()` during render. Move it into a mount
  effect gated by a `hydrated` flag.
- **Fonts flash / wrong font** → make sure `next/font` variables are on `<html>`
  and referenced from the Tailwind `@theme` block and `body`.
- **Colors look flat/monochrome** → a per-category accent that was inline in the
  artifact got dropped; restore the `style={{ color: theme.color }}` threading.
- **Blank page, 500 in dev.log** → usually a client component missing
  `"use client"`, or a server component importing a hook.
