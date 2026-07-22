import {
  Callout,
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Spacer,
  Stack,
  Stat,
  Table,
  Text,
  TodoList,
} from "cursor/canvas";

/**
 * RoundsRN session picture — 2026-07-21
 * Three surfaces, dual agent branches, docs, deploy plan, mobile scaffold.
 */
export default function RoundsRNSessionPicture() {
  return (
    <Stack gap={24} style={{ padding: 24, maxWidth: 960 }}>
      <Stack gap={8}>
        <H1>RoundsRN — session picture</H1>
        <Text tone="secondary">
          Source: workstation state 2026-07-21 · Wife web lanes locked · Mobile
          is a third surface · Dual Next.js histories are unrelated
        </Text>
        <Row gap={8} style={{ flexWrap: "wrap" }}>
          <Pill tone="success">Wife web: continue dual Vercel plan</Pill>
          <Pill tone="info">Mobile: Expo scaffold in RoundsRN</Pill>
          <Pill tone="warning">Not PWA (either web lane)</Pill>
          <Pill tone="neutral">Disk was ~0 free mid-scaffold; ~1.3 GiB after cache clear</Pill>
        </Row>
      </Stack>

      <Callout tone="info" title="One sentence">
        Two agent-built Next.js study apps (Exam 1A + Exam 2) stay on branded
        damieus.app subdomains for your wife; a separate Expo app in
        DaBigHomie/RoundsRN reuses the RoundsRN2 look, not the wife deploy
        targets.
      </Callout>

      <H2>Three surfaces</H2>
      <Grid columns={3} gap={12}>
        <Card>
          <CardHeader trailing={<Pill tone="success" size="sm">Wife</Pill>}>
            Rounds1 (web)
          </CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text weight="semibold">roundsrn1.damieus.app</Text>
              <Text tone="secondary" size="small">
                Branch claude/session-5mn6ou · tip 1f2bbdb
              </Text>
              <Text size="small">
                Multi-route Next app: home, schedule, quiz, mnemonics, logic.
                Exam 1A framing. 50 quiz items. 14 schedule days. Local :3000.
              </Text>
              <Text size="small" tone="secondary">
                Path: Management Git/10-daystudyguide
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader trailing={<Pill tone="success" size="sm">Wife</Pill>}>
            Rounds2 (web)
          </CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text weight="semibold">roundsrn2.damieus.app</Text>
              <Text tone="secondary" size="small">
                Branch claude/nextjs-50x-logic-app-v92juv · tip bec1fe7
              </Text>
              <Text size="small">
                Single-page day navigator (50x HTML→Next). Exam 2. 10 days in
                src/data/days.ts. Visual SSOT for mobile. Local :3001 worktree.
              </Text>
              <Text size="small" tone="secondary">
                Path: 10-daystudyguide.worktrees/nextjs-50x
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader trailing={<Pill tone="info" size="sm">Product</Pill>}>
            RoundsRN Mobile
          </CardHeader>
          <CardBody>
            <Stack gap={6}>
              <Text weight="semibold">DaBigHomie/RoundsRN · apps/mobile</Text>
              <Text tone="secondary" size="small">
                Expo SDK 57 · main · ADR-001 accepted
              </Text>
              <Text size="small">
                Uses RoundsRN2 colours/systems/day UX. Content badge: Exam 2
                dataset (scaffold). Canonical repo also holds Exam 3 HTML/docx +
                brand kit.
              </Text>
              <Text size="small" tone="secondary">
                Path: Management Git/RoundsRN
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H2>At a glance</H2>
      <Grid columns={4} gap={12}>
        <Stat value="2" label="Wife web lanes" />
        <Stat value="1" label="Expo mobile app" tone="info" />
        <Stat value="0" label="Shared merge base (web lanes)" tone="warning" />
        <Stat value="3" label="Exam scopes in play" tone="warning" />
      </Grid>

      <H2>Exam content map (do not conflate)</H2>
      <Table
        headers={["Surface", "Exam", "Content source", "Risk if mixed"]}
        rows={[
          [
            "Lane A / roundsrn1",
            "1A",
            "lib/questions.json + schedule",
            "Wrong syllabus on branded 1",
          ],
          [
            "Lane B / roundsrn2",
            "2",
            "src/data/days.ts",
            "Wrong syllabus on branded 2",
          ],
          [
            "RoundsRN repo artifacts",
            "3",
            "docx + AdultHealth1 HTML quizzes",
            "Mobile banner vs syllabus mismatch",
          ],
          [
            "Mobile scaffold (now)",
            "2 (ported)",
            "Copied days.ts into apps/mobile",
            "Looks like Exam 3 product, is Exam 2 data",
          ],
        ]}
      />

      <H2>Git / worktrees</H2>
      <Table
        headers={["Repo", "Lane", "Branch", "Tip", "Dirty"]}
        rows={[
          [
            "10-daystudyguide",
            "A",
            "claude/session-5mn6ou",
            "1f2bbdb",
            "?? docs/ · ?? temp-gitignore/",
          ],
          [
            "10-daystudyguide",
            "B worktree",
            "claude/nextjs-50x-logic-app-v92juv",
            "bec1fe7",
            "?? docs/",
          ],
          [
            "RoundsRN",
            "product",
            "main",
            "1d9e071+",
            "M README · ?? apps/ · ?? docs/",
          ],
        ]}
      />
      <Text size="small" tone="secondary">
        Web lanes: no merge-base (unrelated histories). Never merge A↔B. Dual
        Vercel projects required.
      </Text>

      <H2>Customer deploy plan (wife webs)</H2>
      <Stack gap={8}>
        <Text>
          Topology: two Vercel projects under jay-anthony team, same GitHub repo
          Rainbowgangsta26/10-daystudyguide, each pinned to its production
          branch. Cloudflare zone damieus.app — prefer
          CLOUDFLARE_ZONE_ID_DAMIEUS_APP. Opus recommends CNAME →
          cname.vercel-dns.com (DNS only / grey). House showcase script used A →
          76.76.21.21 proxied — pick one pattern deliberately.
        </Text>
        <Table
          headers={["URL", "Vercel project", "Production branch"]}
          rows={[
            [
              "roundsrn1.damieus.app",
              "roundsrn1",
              "claude/session-5mn6ou",
            ],
            [
              "roundsrn2.damieus.app",
              "roundsrn2",
              "claude/nextjs-50x-logic-app-v92juv",
            ],
          ]}
        />
        <Callout tone="warning" title="Not executed yet">
          No Vercel projects created, no Cloudflare DNS writes, no domains
          attached. Vercel MCP still needsAuth. Confirm jay-anthony team slug
          before scripting.
        </Callout>
      </Stack>

      <H2>Design system borrowed by mobile</H2>
      <Text size="small" tone="secondary">
        From Lane B globals.css / systems.ts — also documented at
        RoundsRN/docs/design/ROUNDSRN2-VISUAL-SYSTEM.md
      </Text>
      <Grid columns={2} gap={12}>
        <Card>
          <CardHeader>Core tokens</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text size="small">
                ink <Code>#0b1020</Code> · panel <Code>#0b1220</Code> · deep{" "}
                <Code>#0a0f1c</Code>
              </Text>
              <Text size="small">
                edge <Code>#2c3a56</Code> · muted <Code>#c9d3e6</Code> · bright{" "}
                <Code>#f1f4fa</Code>
              </Text>
              <Text size="small" tone="secondary">
                Web fonts Baloo 2 + Nunito (expo-font still TODO)
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>System accents</CardHeader>
          <CardBody>
            <Stack gap={4}>
              <Text size="small">neuro #B794FF · immune #3DFFC0</Text>
              <Text size="small">endo #FFC93C · resp #4FD3FF</Text>
              <Text size="small">mixed #FF7FC0</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H2>Docs inventory</H2>
      <Table
        headers={["Owning repo", "Doc", "Role"]}
        rows={[
          [
            "10-daystudyguide (both branches)",
            "docs/plans/PLAN-ROUNDSRN-DUAL-VERCEL-PREVIEW-20260721.md",
            "Wife dual Vercel + Cloudflare plan",
          ],
          [
            "10-daystudyguide (both branches)",
            "docs/ROUNDSRN-ARCHITECTURE.md",
            "Lane A/B architecture",
          ],
          [
            "RoundsRN",
            "docs/plans/PLAN-ROUNDSRN-MOBILE-EXPO-20260721.md",
            "Mobile Expo plan",
          ],
          [
            "RoundsRN",
            "docs/ADR-001-EXPO-MOBILE-ROUNDSRN2-VISUAL.md",
            "Expo + Lane B visual SSOT",
          ],
          [
            "RoundsRN",
            "docs/design/ROUNDSRN2-VISUAL-SYSTEM.md",
            "Token reference",
          ],
          [
            "RoundsRN",
            "brand/Arnesha-Gates-Persona-Brand-Kit.md",
            "Triplet persona (Flow/Spark/Grid)",
          ],
          [
            "career-corpus",
            "config/repos.manifest.json",
            "localPath fixed → dabighomie Management Git/RoundsRN",
          ],
        ]}
      />

      <H2>Skills / agents noted</H2>
      <Table
        headers={["Item", "Surface", "Note"]}
        rows={[
          [
            "study-guide-to-quiz",
            "Claude only",
            "Missing Cursor/Gemini peers; HTML converter ≠ this Next/Expo stack",
          ],
          [
            "html-artifact-to-nextjs",
            "Lane B only",
            "50x skill shipped on nextjs-50x branch",
          ],
          [
            "Opus dual Vercel plan",
            "Advisory",
            "Two projects + Cloudflare CNAMEs",
          ],
          [
            "Opus iOS then wife/app clarify",
            "Advisory → executed",
            "Three surfaces; Expo at apps/mobile",
          ],
        ]}
      />

      <H2>DAG — what is done vs next</H2>
      <TodoList
        todos={[
          {
            id: "1",
            content: "Clone 10-daystudyguide + dual worktrees + local previews :3000/:3001",
            status: "completed",
          },
          {
            id: "2",
            content: "Workspace files for 10-daystudyguide (cursor/code/antigravity)",
            status: "completed",
          },
          {
            id: "3",
            content: "Dual-preview plan + architecture docs on both web branches",
            status: "completed",
          },
          {
            id: "4",
            content: "Clone DaBigHomie/RoundsRN; Expo scaffold + Lane B theme/data port",
            status: "completed",
          },
          {
            id: "5",
            content: "RoundsRN mobile plan, ADR-001, visual system doc; cross-link wife plan",
            status: "completed",
          },
          {
            id: "6",
            content: "Fix career-corpus RoundsRN localPath",
            status: "completed",
          },
          {
            id: "7",
            content: "Confirm jay-anthony Vercel team slug; create roundsrn1/2 projects",
            status: "pending",
          },
          {
            id: "8",
            content: "Cloudflare DNS for roundsrn1/2.damieus.app + attach domains",
            status: "pending",
          },
          {
            id: "9",
            content: "Commit docs on both web branches + RoundsRN apps/docs (on request)",
            status: "pending",
          },
          {
            id: "10",
            content: "Decide mobile content SSOT (keep Exam 2 vs ingest Exam 3)",
            status: "pending",
          },
          {
            id: "11",
            content: "expo-font Baloo/Nunito; richer RN components; expo start smoke",
            status: "pending",
          },
          {
            id: "12",
            content: "PWA for wife webs / TestFlight — deferred (not this week unless asked)",
            status: "cancelled",
          },
        ]}
      />

      <H2>Open decisions</H2>
      <Stack gap={6}>
        <Text>
          1. Cloudflare record style: Opus CNAME+grey vs house showcase A+orange.
        </Text>
        <Text>
          2. Mobile content: stay on Exam 2 port or ingest Exam 3 from RoundsRN
          HTML/docx into the same visual shell.
        </Text>
        <Text>
          3. Spark-tier native product name (brand kit) — GOV if renaming beyond
          “RoundsRN Mobile”.
        </Text>
        <Text>
          4. Whether to commit untracked docs/apps now (three git lanes).
        </Text>
      </Stack>

      <Divider />
      <H3>Local commands</H3>
      <Stack gap={4}>
        <Text size="small">
          Wife A: <Code>cd 10-daystudyguide && npm run dev</Code> → :3000
        </Text>
        <Text size="small">
          Wife B:{" "}
          <Code>cd 10-daystudyguide.worktrees/nextjs-50x && npm run dev -- -p 3001</Code>
        </Text>
        <Text size="small">
          Mobile: <Code>cd RoundsRN/apps/mobile && npm start</Code>
        </Text>
      </Stack>

      <Spacer height={8} />
      <Text size="small" tone="secondary">
        Durable markdown twin also under RoundsRN
        docs/session-artifacts/2026-07-21_roundsrn-full-picture/README.md
      </Text>
    </Stack>
  );
}
