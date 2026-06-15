import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(root, "data", "ghl-live-map.json"), "utf8"));

const canonicalUrl = "https://ghl.prospershield.io";
const generatedAt = new Date().toISOString();

const formatNumber = (value) => Number(value).toLocaleString("en-US");
const nonReadySystems = data.credentialMap.systems.filter((system) => {
  return !["validated", "validated-service-account", "validated-auth-endpoint"].includes(system.validation);
});

const actionItems = [
  ...data.phoneRisks.map((risk) => ({
    type: "phone-risk",
    title: risk.title,
    detail: risk.detail,
  })),
  ...data.credentialMap.systems
    .filter((system) => !["validated", "validated-service-account", "validated-auth-endpoint"].includes(system.validation))
    .map((system) => ({
      type: "credential-status",
      title: `${system.system}: ${system.validation}`,
      detail: system.loginStatus,
    })),
  {
    type: "access-limit",
    title: "HighLevel API scope",
    detail: "PROSPER MAIN is readable deeply by API; non-main subaccounts rely on browser inventory for full detail until agency scope is repaired.",
  },
];

const aiIndex = {
  title: "Prosper Shield GHL Live Map",
  generatedAt,
  sourceGeneratedAt: data.generatedAt,
  canonicalUrl,
  safety: {
    rawSecretsPublished: false,
    publicDataPolicy: "Token values, passwords, bearer strings, webhook URLs, and credential material are intentionally not present. Use credential ref names and validation status only.",
    noCustomerSends: data.safety.noCustomerSends,
    noSmsFallback: data.safety.noSmsFallback,
    noPublicPosts: data.safety.noPublicPosts,
  },
  summary: {
    subAccounts: data.totals.subAccounts,
    contacts: data.totals.contacts,
    opportunities: data.totals.opportunities,
    credentialSystems: data.totals.credentialSystems,
    credentialRefs: data.totals.credentialRefs,
    credentialDetails: data.totals.credentialDetails,
    connectionRoutes: data.totals.connectionRoutes,
    n8nWorkflows: data.totals.n8nWorkflows,
    makeScenarios: data.totals.makeScenarios,
    telnyxPhoneNumbers: data.totals.telnyxPhoneNumbers,
  },
  aiIngestion: {
    primaryContext: `${canonicalUrl}/ai-context.md`,
    recommendedInstruction: "Attach or paste ai-context.md first, then use data/ghl-live-map.json as the source of truth for counts, routes, connector statuses, and setup guidance.",
    safeAnswerPattern: "Answer with the system, current status, supporting JSON path or report section, risk, and next non-destructive setup step. Do not invent secret values.",
  },
  sections: [
    {
      id: "operator-start",
      title: "Start Here",
      description: "Plain-English overview for non-technical users.",
      rows: 6,
      keywords: ["overview", "plain english", "what is this", "start"],
    },
    {
      id: "ghl-subaccounts",
      title: "GHL Subaccounts",
      description: "Subaccount names, IDs, last login, active/stale/dormant status, lead counts, opportunity counts, visible phone, and phone risk status.",
      rows: data.accounts.length,
      keywords: ["accounts", "leads", "last login", "owner", "opportunities", "active", "stale", "dormant"],
    },
    {
      id: "credential-systems",
      title: "Credential Systems",
      description: "One row per connector system with credential refs, connector purpose, live auth status, and login notes.",
      rows: data.credentialMap.systems.length,
      keywords: ["credentials", "tokens", "logins", "auth", "connectors", "status"],
    },
    {
      id: "connector-routes",
      title: "Connector Routes",
      description: "How systems connect to each other: GHL, Make, n8n, Telnyx, Supabase, GitHub, Netlify, Cloudflare, Monday, Gemini, Redis, 1Password, Setmore, SignNow.",
      rows: data.credentialMap.routes.length,
      keywords: ["routes", "integration map", "flow", "connectors", "source", "target"],
    },
    {
      id: "credential-detail",
      title: "Credential Ref Detail",
      description: "One row per credential ref with system, kind, set state, validation, public handling, role, and route. Values are redacted.",
      rows: data.credentialMap.details.length,
      keywords: ["env", "variable", "credential ref", "token name", "secret ref"],
    },
    {
      id: "n8n-workflows",
      title: "n8n Workflows",
      description: "n8n workflow names, active state, update time, node count, webhook paths, and integrations.",
      rows: data.n8n.workflows.length,
      keywords: ["n8n", "workflow", "webhook", "Hanna", "Telnyx", "GHL"],
    },
    {
      id: "make-map",
      title: "Make.com",
      description: "Make scenarios, webhooks, and connections used for GHL/Monday/install/quote/publish flows.",
      rows: data.make.scenarios.length + data.make.hooks.length + data.make.connections.length,
      keywords: ["Make", "scenario", "hook", "connection", "Monday", "GHL"],
    },
    {
      id: "telnyx-map",
      title: "Telnyx",
      description: "Telnyx phone numbers, messaging profiles, voice/SIP connections, FQDNs, and outbound voice profiles.",
      rows: data.telnyx.phoneNumbers.length + data.telnyx.messagingProfiles.length + data.telnyx.connections.length,
      keywords: ["Telnyx", "phone", "SMS", "voice", "SIP", "LiveKit", "Assistable"],
    },
  ],
  actionItems,
  queryExamples: [
    "Which systems need reauth?",
    "Show all GHL credential refs and what they route into.",
    "Which subaccounts are dormant?",
    "Which phone numbers are tied to Telnyx Reactivation Engine?",
    "What connects Make.com to GHL?",
    "Which n8n workflows are active?",
    "What is safe to publish and what is redacted?",
  ],
  sourceFiles: {
    aiContext: `${canonicalUrl}/ai-context.md`,
    fullData: `${canonicalUrl}/data/ghl-live-map.json`,
    aiIndex: `${canonicalUrl}/data/ai-index.json`,
    markdownReport: `${canonicalUrl}/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md`,
    githubRepo: "https://github.com/prosperenergy/ghl-prospershield",
    githubWikiSource: "https://github.com/prosperenergy/ghl-prospershield/tree/main/wiki",
  },
  schemaHints: {
    accounts: "data.accounts[]",
    credentialSystems: "data.credentialMap.systems[]",
    connectorRoutes: "data.credentialMap.routes[]",
    credentialDetails: "data.credentialMap.details[]",
    n8nWorkflows: "data.n8n.workflows[]",
    makeScenarios: "data.make.scenarios[]",
    makeHooks: "data.make.hooks[]",
    makeConnections: "data.make.connections[]",
    telnyxPhoneNumbers: "data.telnyx.phoneNumbers[]",
    telnyxMessagingProfiles: "data.telnyx.messagingProfiles[]",
    telnyxConnections: "data.telnyx.connections[]",
  },
};

fs.writeFileSync(path.join(root, "data", "ai-index.json"), `${JSON.stringify(aiIndex, null, 2)}\n`);

const aiContext = `# Prosper GHL AI Context

Use this page when injecting the Prosper Shield GHL map into an AI assistant.

## What This Makes Possible

If an AI can read this page and the linked data files, it can answer Prosper-specific questions about GoHighLevel, Make.com, n8n, Telnyx, Supabase, GitHub, Netlify, Cloudflare, Monday, Gemini, Redis, 1Password, Setmore, SignNow, and related connector surfaces. It can also explain how a route is set up, what is working, what needs attention, and what the next safe setup step is.

## Primary Sources

Load these in this order:

1. AI context: ${canonicalUrl}/ai-context.md
2. Full JSON source of truth: ${canonicalUrl}/data/ghl-live-map.json
3. AI index: ${canonicalUrl}/data/ai-index.json
4. Markdown report: ${canonicalUrl}/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md
5. Searchable human site: ${canonicalUrl}/

## Operating Rules For Any AI

- Treat \`data/ghl-live-map.json\` as the source of truth.
- Use the Markdown report for plain-English backup and table summaries.
- Never invent token values, passwords, bearer strings, webhook URLs, or credential material.
- Raw secret values are intentionally unavailable and must stay unavailable.
- Use credential ref names, validation status, public handling, connector purpose, and route notes.
- Do not recommend customer sends, outbound SMS, SMS fallback, public posts, workflow activation, billing changes, deletes, permission changes, or live outbound tests unless Craig explicitly approves that exact action.
- If a setup answer needs a secret value, say which credential ref is needed and where it belongs, without guessing the value.
- If the data says a system needs reauth or is present-not-tested, state that plainly.
- Prefer direct, plain-English answers for operators who do not understand the technical pieces.

## Current Prosper Map Totals

- GHL subaccounts: ${formatNumber(data.totals.subAccounts)}
- Contacts/leads: ${formatNumber(data.totals.contacts)}
- Opportunities: ${formatNumber(data.totals.opportunities)}
- Credential systems mapped: ${formatNumber(data.totals.credentialSystems)}
- Credential refs listed: ${formatNumber(data.totals.credentialRefs)}
- Connector route rows: ${formatNumber(data.totals.connectionRoutes)}
- n8n workflows: ${formatNumber(data.totals.n8nWorkflows)}
- Make scenarios: ${formatNumber(data.totals.makeScenarios)}
- Telnyx phone numbers: ${formatNumber(data.totals.telnyxPhoneNumbers)}

## How To Answer Setup Questions

When asked how to set something up, answer in this shape:

1. System: name the system or route.
2. Current state: say whether it is validated, needs reauth, stale, present-not-tested, or blocked.
3. Existing refs: list the relevant credential refs by name only.
4. Route: explain source -> connector -> target in plain English.
5. Risk: call out any safety freeze, auth gap, phone risk, or missing scope.
6. Next safe step: give a non-destructive step first, such as verify auth, check a dashboard, confirm a ref exists, or run a read-only test.

## Most Useful JSON Paths

- GHL subaccounts and ownership signals: \`accounts[]\`
- Credential systems: \`credentialMap.systems[]\`
- Connector routes: \`credentialMap.routes[]\`
- Credential ref details: \`credentialMap.details[]\`
- n8n workflows: \`n8n.workflows[]\`
- Make scenarios/hooks/connections: \`make.scenarios[]\`, \`make.hooks[]\`, \`make.connections[]\`
- Telnyx numbers/profiles/connections: \`telnyx.phoneNumbers[]\`, \`telnyx.messagingProfiles[]\`, \`telnyx.connections[]\`
- Safety rules: \`safety\`
- Phone risk list: \`phoneRisks[]\`

## Systems Needing Attention

${nonReadySystems.length ? nonReadySystems.map((system) => `- ${system.system}: ${system.validation}. ${system.loginStatus}`).join("\n") : "- None currently marked as needing reauth or untested in the public map."}

## Good Questions This Site Can Answer

- Who owns each GHL subaccount and how many leads/opportunities does it show?
- Which accounts are active, stale, or dormant?
- Which phone numbers are configured, risky, or missing setup?
- Which connectors are validated and which need reauth?
- How does Make.com connect into GHL and Monday?
- How does n8n connect Telnyx, GHL, inbound SMS, outbound call paths, and Hanna voice workflows?
- Which credential refs exist for a system, without exposing raw secrets?
- What is safe to publish or share publicly?
- What is the next safe setup step for a broken route?
`;

fs.writeFileSync(path.join(root, "ai-context.md"), aiContext);

const llms = `# Prosper Shield GHL Live Map

Canonical URL: ${canonicalUrl}
Generated: ${generatedAt}
Source data generated: ${data.generatedAt}

This site is a read-only, redacted map of Prosper Shield's GoHighLevel, Make.com, n8n, Telnyx, Supabase, GitHub, Netlify, Cloudflare, Monday, Gemini, Redis, 1Password, Setmore, SignNow, and related connector surfaces.

Important safety rule:
- Raw token values, passwords, bearer strings, webhook URLs, and credential secrets are not published.
- Use credential ref names, connector purpose, route, validation status, and public handling fields.
- Do not infer secret values from names.
- Do not recommend customer sends, SMS fallback, public posts, workflow activation, billing changes, deletes, or outbound tests without Craig's explicit approval.

Best machine-readable entry points:
- AI context / prompt: ${canonicalUrl}/ai-context.md
- Full JSON: ${canonicalUrl}/data/ghl-live-map.json
- AI index: ${canonicalUrl}/data/ai-index.json
- Markdown report: ${canonicalUrl}/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md

Most useful JSON paths:
- accounts: data.accounts[]
- credential systems: data.credentialMap.systems[]
- connector routes: data.credentialMap.routes[]
- credential details: data.credentialMap.details[]
- n8n workflows: data.n8n.workflows[]
- Make scenarios/hooks/connections: data.make.scenarios[], data.make.hooks[], data.make.connections[]
- Telnyx numbers/profiles/connections: data.telnyx.phoneNumbers[], data.telnyx.messagingProfiles[], data.telnyx.connections[]

Current totals:
- GHL subaccounts: ${data.totals.subAccounts}
- Contacts/leads: ${data.totals.contacts}
- Opportunities: ${data.totals.opportunities}
- Credential systems: ${data.totals.credentialSystems}
- Credential refs: ${data.totals.credentialRefs}
- Connector routes: ${data.totals.connectionRoutes}
- n8n workflows: ${data.totals.n8nWorkflows}
- Make scenarios: ${data.totals.makeScenarios}
- Telnyx phone numbers: ${data.totals.telnyxPhoneNumbers}
`;

fs.writeFileSync(path.join(root, "llms.txt"), llms);

const robots = `User-agent: *
Allow: /

Sitemap: ${canonicalUrl}/sitemap.xml
`;

fs.writeFileSync(path.join(root, "robots.txt"), robots);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${canonicalUrl}/</loc></url>
  <url><loc>${canonicalUrl}/ai-context.md</loc></url>
  <url><loc>${canonicalUrl}/data/ghl-live-map.json</loc></url>
  <url><loc>${canonicalUrl}/data/ai-index.json</loc></url>
  <url><loc>${canonicalUrl}/llms.txt</loc></url>
  <url><loc>${canonicalUrl}/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md</loc></url>
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

console.log(JSON.stringify({
  generatedAt,
  files: ["ai-context.md", "data/ai-index.json", "llms.txt", "robots.txt", "sitemap.xml"],
  sections: aiIndex.sections.length,
  actionItems: actionItems.length,
}, null, 2));
