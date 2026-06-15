import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const data = JSON.parse(fs.readFileSync(path.join(root, "data", "ghl-live-map.json"), "utf8"));

const canonicalUrl = "https://ghl.prospershield.io";
const generatedAt = new Date().toISOString();

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
  <url><loc>${canonicalUrl}/data/ghl-live-map.json</loc></url>
  <url><loc>${canonicalUrl}/data/ai-index.json</loc></url>
  <url><loc>${canonicalUrl}/llms.txt</loc></url>
  <url><loc>${canonicalUrl}/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md</loc></url>
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

console.log(JSON.stringify({
  generatedAt,
  files: ["data/ai-index.json", "llms.txt", "robots.txt", "sitemap.xml"],
  sections: aiIndex.sections.length,
  actionItems: actionItems.length,
}, null, 2));
