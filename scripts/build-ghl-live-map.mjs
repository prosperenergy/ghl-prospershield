import fs from "node:fs";
import path from "node:path";

const root = "/Volumes/Samgsung T9/04_Fleet-Ops/ghl";
const live = path.join(root, "live-data");
const siteData = path.join(root, "site", "data");
const wikiDir = "/Users/craigstratton/prosper-brain/wiki/sales";
const generatedAt = new Date().toISOString();

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
}

function writeText(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, data);
}

function markdownTable(headers, rows) {
  const esc = (value) => String(value ?? "").replaceAll("|", "\\|").replace(/\n+/g, " ");
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map(esc).join(" | ")} |`),
  ].join("\n");
}

function readEnvNames() {
  const envPath = "/Users/craigstratton/.config/prosper/prosper.env";
  const text = fs.readFileSync(envPath, "utf8");
  const names = [];
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=/);
    if (match) names.push(match[1]);
  }
  return [...new Set(names)].sort();
}

function readEnvEntries() {
  const envPath = "/Users/craigstratton/.config/prosper/prosper.env";
  const text = fs.readFileSync(envPath, "utf8");
  const entries = [];
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!match) continue;
    const rawValue = match[2] ?? "";
    entries.push({
      name: match[1],
      valueState: rawValue.trim() && rawValue.trim() !== "\"\"" && rawValue.trim() !== "''" ? "set" : "empty",
      line: index + 1,
    });
  }
  const counts = entries.reduce((map, entry) => {
    map.set(entry.name, (map.get(entry.name) || 0) + 1);
    return map;
  }, new Map());
  return entries
    .filter((entry, index) => entries.findLastIndex((candidate) => candidate.name === entry.name) === index)
    .map((entry) => ({
      ...entry,
      occurrences: counts.get(entry.name) || 1,
      storage: "~/.config/prosper/prosper.env",
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function refs(names, prefixes) {
  return names.filter((name) => prefixes.some((prefix) => name === prefix || name.startsWith(`${prefix}_`)));
}

function credentialKind(name) {
  if (/(PASSWORD|SECRET|TOKEN|PAT|API_KEY|PRIVATE|BASIC_AUTH|MFA|RECOVERY)/.test(name)) return "secret";
  if (/(WEBHOOK|HOOK)/.test(name)) return "webhook-ref";
  if (/(URL|URI|BASE|HOST|HOSTNAME|ENDPOINT)/.test(name)) return "endpoint";
  if (/(EMAIL|USER|USERNAME|OWNER|ACCOUNT_SLUG)/.test(name)) return "identity";
  if (/(PHONE|CELL|NUMBER)/.test(name)) return "phone-ref";
  if (/(BOARD|COLUMN|COL_|WORKSPACE|FOLDER|DOC)/.test(name)) return "workspace-object";
  if (/(ID|ORG|TEAM|PROJECT|PROFILE|CAMPAIGN|BRAND|CONNECTION|FQDN|OVP|WF|SCENARIO)/.test(name)) return "object-id";
  if (/(MODEL|PROVIDER|ENABLED|TLS|REGION|PORT|DIMENSIONS|LIMIT|THRESHOLD|MAXLEN|TIMEOUT)/.test(name)) return "configuration";
  if (/(PATH|CREDENTIALS|SSH_KEY)/.test(name)) return "file-or-key-path";
  return "configuration";
}

function publicHandling(kind) {
  if (["secret", "webhook-ref", "file-or-key-path"].includes(kind)) return "name-only; value redacted";
  if (["endpoint", "identity", "phone-ref"].includes(kind)) return "name and role only; value not published";
  return "name, role, and live linkage only";
}

function roleForCredential(name) {
  if (name === "GHL_API_TOKEN" || name === "GHL_API_KEY") return "HighLevel API authentication for PROSPER MAIN reads and selected location/user/phone checks.";
  if (name === "GHL_LOCATION_ID") return "Primary PROSPER MAIN location scope.";
  if (name === "GHL_LOCATION_COLE") return "Cole Stallard subaccount location reference.";
  if (name === "GHL_COMPANY_ID") return "Agency/company scope for HighLevel user search.";
  if (name === "GHL_SOCIAL_ACCOUNT_MAP") return "GHL Social Planner account reference map for Facebook, Instagram, LinkedIn, and TikTok.";
  if (name.startsWith("GHL_WEBHOOK")) return "HighLevel webhook ingress reference; raw URL/secret withheld.";
  if (name.startsWith("MAKE_HOOK") || name.includes("_WEBHOOK")) return "Make webhook or webhook secret reference; raw URL/secret withheld.";
  if (name.includes("MAKE_") && name.includes("SCENARIO")) return "Make scenario routing reference.";
  if (name === "MAKE_API_KEY") return "Make API token that validated live scenario/hook/connection reads.";
  if (name === "MAKE_API_TOKEN_OP") return "Older Make/1Password-token reference that previously returned 401.";
  if (name.startsWith("N8N_WEBHOOK")) return "n8n webhook URL reference mapped to workflow ingress paths; raw URL withheld.";
  if (name.startsWith("N8N_WF")) return "n8n workflow id reference.";
  if (name === "N8N_API_KEY") return "n8n API key that validated workflow reads.";
  if (name === "TELNYX_API_KEY") return "Telnyx API token that validated phone number/profile/connection reads.";
  if (name.startsWith("TELNYX_SIP")) return "Telnyx SIP/LiveKit/voice credential or connection reference.";
  if (name.includes("TELNYX_MSG_PROFILE")) return "Telnyx messaging profile reference.";
  if (name.includes("TELNYX_BRAND") || name.includes("TELNYX_CAMPAIGN") || name.includes("TELNYX_TCR")) return "Telnyx/A2P brand or campaign compliance reference.";
  if (name === "SUPABASE_SERVICE_ROLE_KEY") return "Supabase privileged server write key used for knowledge_base and activity log updates.";
  if (name.startsWith("SUPABASE")) return "Supabase project, database, anon, publishable, or secret reference.";
  if (name.startsWith("GITHUB") || name.startsWith("GH_")) return "GitHub auth/org reference for prosperenergy repo/wiki publishing.";
  if (name.startsWith("NETLIFY")) return "Netlify team/API/deploy reference for ghl.prospershield.io.";
  if (name.startsWith("CLOUDFLARE") || name.startsWith("CF_")) return "Cloudflare DNS/API reference for prospershield.io.";
  if (name.startsWith("MONDAY_SP_COL")) return "Monday solar pipeline column mapping.";
  if (name.startsWith("MONDAY") && name.includes("BOARD")) return "Monday board/workspace routing reference.";
  if (name.startsWith("MONDAY")) return "Monday account/API/workspace connector reference.";
  if (name.includes("GEMINI") || name.startsWith("GOOGLE") || name.startsWith("BRAIN_GOOGLE")) return "Google/Gemini API or OAuth reference.";
  if (name.startsWith("REDIS") || name.startsWith("PROSPER_REDIS")) return "Prosper Redis bus/stream/connection reference.";
  if (name.startsWith("OP_") || name.startsWith("ONEPASSWORD")) return "1Password service/connect token reference.";
  if (name.startsWith("SETMORE")) return "Setmore booking API credential; currently needs reauthorization.";
  if (name.startsWith("SIGNNOW")) return "SignNow login/OAuth/folder/webhook reference.";
  if (name.startsWith("ASSISTABLE")) return "Assistable voice/assistant API reference used by Telnyx/n8n voice paths.";
  return "Prosper vendor or agent credential reference; not core to the GHL public route.";
}

function routeForCredential(name, system) {
  if (system === "GoHighLevel / HighLevel") return "GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks";
  if (system === "Make.com") return "Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync";
  if (system === "n8n") return "n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes";
  if (system === "Telnyx") return "Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections";
  if (system === "Supabase") return "Supabase env -> REST API -> knowledge_base and agent_activity_log";
  if (system === "GitHub") return "GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield";
  if (system === "Netlify") return "Netlify env -> Netlify API -> ghl-prospershield deploy";
  if (system === "Cloudflare") return "Cloudflare env -> DNS API -> ghl.prospershield.io CNAME";
  if (system === "Monday.com") return "Monday env -> Monday API/Make -> boards, columns, GHL sync";
  if (system === "Google / Gemini") return "Google/Gemini env -> model/API/OAuth surfaces";
  if (system === "Redis") return "Redis env -> redis-prosper -> fleet bus/agent streams";
  if (system === "1Password / OP") return "OP env -> 1Password service account/connect surfaces";
  if (system === "Setmore") return "Setmore env -> booking API; current key needs reauth";
  if (system === "SignNow") return "SignNow env -> OAuth/basic auth/folder/webhook surfaces";
  if (system === "Assistable / Voice AI") return "Assistable env -> Telnyx/n8n voice assistant paths";
  return "Prosper vendor env -> auxiliary agent/business tooling";
}

const envEntries = readEnvEntries();
const envNames = envEntries.map((entry) => entry.name);

const credentialSystems = [
  {
    system: "GoHighLevel / HighLevel",
    connector: "GHL API + live browser session + Make/n8n GHL connections",
    credentialRefs: refs(envNames, ["GHL", "HIGHLEVEL", "CRAIG_GHL_CONTACT_ID"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "Browser session worked; API token read PROSPER MAIN location/users. Agency-wide API scope still limited for non-main subaccounts.",
  },
  {
    system: "Make.com",
    connector: "Make API + Make scenarios/hooks/connections",
    credentialRefs: refs(envNames, ["MAKE"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "MAKE_API_KEY returned HTTP 200. MAKE_API_TOKEN_OP previously returned 401 and should be treated as stale or vault-only until reauthorized.",
  },
  {
    system: "n8n",
    connector: "n8n REST API + webhook workflow refs",
    credentialRefs: refs(envNames, ["N8N"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "N8N_API_KEY returned HTTP 200 against workflows.",
  },
  {
    system: "Telnyx",
    connector: "Telnyx Messaging, phone numbers, SIP, LiveKit/Assistable voice",
    credentialRefs: refs(envNames, ["TELNYX"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "TELNYX_API_KEY returned HTTP 200 for phone numbers. SIP username/password refs exist but values are redacted.",
  },
  {
    system: "Supabase",
    connector: "Supabase REST knowledge_base + agent_activity_log",
    credentialRefs: refs(envNames, ["SUPABASE"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "SUPABASE_SERVICE_ROLE_KEY returned HTTP 200 and successfully updated the GHL knowledge base.",
  },
  {
    system: "GitHub",
    connector: "GitHub CLI/API + prosperenergy shared user repo",
    credentialRefs: refs(envNames, ["GITHUB", "GH"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "gh is authenticated as prosperenergy and pushed the ghl-prospershield repo. GitHub wiki is enabled; separate wiki remote did not accept pushes, so wiki source is committed under /wiki.",
  },
  {
    system: "Netlify",
    connector: "Netlify API deploy + custom domain",
    credentialRefs: refs(envNames, ["NETLIFY"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "NETLIFY_AUTH_TOKEN returned HTTP 200 and deployed ghl.prospershield.io.",
  },
  {
    system: "Cloudflare",
    connector: "Cloudflare DNS for prospershield.io",
    credentialRefs: refs(envNames, ["CLOUDFLARE", "CF"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "CLOUDFLARE_API_TOKEN verified and created the CNAME for ghl.prospershield.io.",
  },
  {
    system: "Monday.com",
    connector: "Monday API + Make connection + Prosper boards",
    credentialRefs: refs(envNames, ["MONDAY"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "MONDAY_API_KEY returned HTTP 200 for the current user query.",
  },
  {
    system: "Google / Gemini",
    connector: "Gemini API, Google OAuth clients, Google APIs",
    credentialRefs: refs(envNames, ["GEMINI", "GOOGLE", "BRAIN_GOOGLE", "MADDIE_GEMINI"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "GEMINI_API_KEY returned HTTP 200 for model listing. OAuth client refs are present but not reauthenticated here.",
  },
  {
    system: "Redis",
    connector: "Prosper Redis bus + agent streams",
    credentialRefs: refs(envNames, ["REDIS", "PROSPER_REDIS"]),
    validation: "validated",
    lastCheck: generatedAt,
    loginStatus: "redis-prosper returned PONG.",
  },
  {
    system: "1Password / OP",
    connector: "1Password CLI/service-token refs",
    credentialRefs: refs(envNames, ["OP", "ONEPASSWORD"]),
    validation: "validated-service-account",
    lastCheck: generatedAt,
    loginStatus: "OP_SERVICE_ACCOUNT_TOKEN validated as a 1Password service account. Interactive op whoami without the service token still has no signed-in user account in this shell.",
  },
  {
    system: "Setmore",
    connector: "Setmore booking API",
    credentialRefs: refs(envNames, ["SETMORE"]),
    validation: "needs-reauth",
    lastCheck: generatedAt,
    loginStatus: "SETMORE_API_KEY is present but the tested services endpoint returned HTTP 401.",
  },
  {
    system: "SignNow",
    connector: "SignNow e-signature API",
    credentialRefs: refs(envNames, ["SIGNNOW"]),
    validation: "validated-auth-endpoint",
    lastCheck: generatedAt,
    loginStatus: "SignNow basic/OAuth endpoint returned HTTP 200. No document, signing, or invite action was performed.",
  },
  {
    system: "Assistable / Voice AI",
    connector: "Assistable API and assistant refs",
    credentialRefs: refs(envNames, ["ASSISTABLE"]),
    validation: "present-not-tested",
    lastCheck: generatedAt,
    loginStatus: "Assistable refs exist and connect to voice/AI call paths through Telnyx/n8n.",
  },
  {
    system: "Other Prosper AI/vendor keys",
    connector: "AgentOps, Firecrawl, ElevenLabs, NVIDIA, OpenSolar, Hostinger, Telegram, Paperclip, OWE/Solo, VoyageAI, Ollama",
    credentialRefs: envNames.filter((name) => /^(AGENTOPS|FIRECRAWL|ELEVENLABS|NVIDIA|OPENAI|ANTHROPIC|OPENSOLAR|HOSTINGER|TELEGRAM|PAPERCLIP|OWE|SOLO|VOYAGEAI|OLLAMA|GROK|HUBSTAFF|NS1|DOCKER|ASCEND|OUTPORTAL|IPQS|KALEY|PSO)/.test(name)),
    validation: "present-not-tested",
    lastCheck: generatedAt,
    loginStatus: "Refs are present in the Prosper env registry. They are not core to the GHL live map and were not exercised in this run.",
  },
];

const credentialSystemByRef = credentialSystems.reduce((map, system) => {
  for (const ref of system.credentialRefs) map.set(ref, system);
  return map;
}, new Map());

const credentialDetails = envEntries
  .filter((entry) => credentialSystemByRef.has(entry.name))
  .map((entry) => {
    const system = credentialSystemByRef.get(entry.name);
    const kind = credentialKind(entry.name);
    return {
      name: entry.name,
      system: system.system,
      kind,
      valueState: entry.valueState,
      occurrences: entry.occurrences,
      storage: entry.storage,
      validation: system.validation,
      publicHandling: publicHandling(kind),
      role: roleForCredential(entry.name),
      route: routeForCredential(entry.name, system.system),
      lastCheck: system.lastCheck,
    };
  });

const accounts = [
  {
    name: "Andrew Brown",
    id: "rQxheT1tQDRnAsPwx4my",
    address: "15780 Jansen road",
    visiblePhone: "+14344430305",
    dateAdded: "2026-02-27",
    lastLogin: "2026-03-11",
    activity: "Stale",
    contacts: 959,
    opportunities: 956,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "2 phone numbers; A2P 10DLC incomplete/failed",
  },
  {
    name: "Cole Stallard",
    id: "S2HIAZD4LdIdHsm1hnYZ",
    address: "11900 Alor Ct",
    visiblePhone: "+1 803-556-7450",
    dateAdded: "2026-01-20",
    lastLogin: "2026-06-09",
    activity: "Active",
    contacts: 9551,
    opportunities: 4301,
    lcEmail: "Managed by LC Email",
    lcPhone: "Not managed by LC Phone",
    phoneStatus: "Requires phone system configuration; header showed CRM Phone Pro number +17029726492",
  },
  {
    name: "Daniel Tirri",
    id: "uvn2fEzSON9SJ5Tvl58W",
    address: "11900 alor court",
    visiblePhone: "+18439994606",
    dateAdded: "2026-02-27",
    lastLogin: "2026-03-21",
    activity: "Stale",
    contacts: 962,
    opportunities: 958,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "2 phone numbers; A2P 10DLC incomplete/failed",
  },
  {
    name: "Danny",
    id: "l8LZRLuH4byt1cvfUMND",
    address: "11900 Alor Ct",
    visiblePhone: "+18035567450",
    dateAdded: "2026-02-26",
    lastLogin: "2026-04-09",
    activity: "Stale",
    contacts: 957,
    opportunities: 957,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "Phone System page showed No Data",
  },
  {
    name: "Garett Eackelbary",
    id: "PMX06M3dloyKTN3WCCun",
    address: "3794 Troon Dr",
    visiblePhone: "+13303293748",
    dateAdded: "2025-09-02",
    lastLogin: "2026-06-09",
    activity: "Active",
    contacts: 9180,
    opportunities: 1,
    lcEmail: "Managed by LC Email",
    lcPhone: "Not managed by LC Phone",
    phoneStatus: "Requires phone system configuration",
  },
  {
    name: "Jeff Restel",
    id: "ndKcgKpYa3UPmznS6ao1",
    address: "1240 Winnowing Way",
    visiblePhone: "+18035567450",
    dateAdded: "2025-07-29",
    lastLogin: "N/A",
    activity: "Dormant",
    contacts: 6146,
    opportunities: 0,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "1 phone number; A2P 10DLC incomplete/failed",
  },
  {
    name: "Junnie",
    id: "6QlWtYKs2UtwvqwoNlVQ",
    address: "11900 Alor Ct",
    visiblePhone: "+1 877 317 9079",
    dateAdded: "2026-01-20",
    lastLogin: "N/A",
    activity: "Dormant",
    contacts: 366,
    opportunities: 0,
    lcEmail: "Not visible in extracted row",
    lcPhone: "Not visible in extracted row",
    phoneStatus: "Requires phone system configuration",
  },
  {
    name: "Nelson Mousques",
    id: "liBBSRKm6JNuGoSkvQ1G",
    address: "1240 Winnowing Way",
    visiblePhone: "+1 803-556-7450",
    dateAdded: "2026-06-08",
    lastLogin: "2026-06-08",
    activity: "Active",
    contacts: 5,
    opportunities: 2,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "Phone System page showed No Data",
  },
  {
    name: "PROSPER MAIN",
    id: "hU3tflAFRrVsoETFstfk",
    address: "1240 Winnowing Way",
    visiblePhone: "+18035567450",
    dateAdded: "2025-02-12",
    lastLogin: "2026-06-13",
    activity: "Active",
    contacts: 92284,
    opportunities: 11527,
    lcEmail: "Managed by LC Email",
    lcPhone: "Agency card says Not managed by LC Phone",
    phoneStatus: "API says LC phone active/under LC; A2P compliant; 15 phone numbers",
  },
  {
    name: "Prosper Team",
    id: "LW80mjJWwCPe8dFINhG0",
    address: "11900 Alor Ct",
    visiblePhone: "7073958984",
    dateAdded: "2026-02-03",
    lastLogin: "N/A",
    activity: "Dormant",
    contacts: 15,
    opportunities: null,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "1 phone number",
  },
  {
    name: "Sandbox",
    id: "zix3Qq3kD0tG9NmDgNs2",
    address: "not visible",
    visiblePhone: "+13049028155",
    dateAdded: "2025-03-14",
    lastLogin: "2025-06-30",
    activity: "Dormant",
    contacts: 2,
    opportunities: null,
    lcEmail: "Managed by LC Email",
    lcPhone: "Not managed by LC Phone",
    phoneStatus: "Requires phone system configuration",
  },
  {
    name: "Scott",
    id: "OxVnVhXGUiZQ4bBFcCdf",
    address: "11900 Alor Ct",
    visiblePhone: "8035567450",
    dateAdded: "2026-02-26",
    lastLogin: "2026-03-08",
    activity: "Stale",
    contacts: 969,
    opportunities: 957,
    lcEmail: "Managed by LC Email",
    lcPhone: "Managed by LC Phone",
    phoneStatus: "1 phone number; A2P 10DLC incomplete/failed",
  },
];

const prosperMainUsers = [
  "Abdourahamane Diallo",
  "Abidemi Mary Adebayo",
  "Akpaka Kenechukwu sandra",
  "Amber Gant",
  "Andy Herrmann",
  "avi prosper",
  "Brian Job",
  "Chidinma Akpati",
  "Cole Stallard",
  "Collins Situma",
  "Craig Stratton",
  "Danny Laveaga",
  "Elijah Sutton",
  "Garett Eackelbary",
  "Geoffrey Morris",
  "Hanna a210code",
  "Hanna a571areacode",
  "Hanna a857areacode",
  "Hanna Ai",
  "Hanna area540code",
  "Hanna Code202",
  "Hanna Hanna304",
  "Hanna Prosper",
  "Hanna ProspershieldDOTio Ai",
  "Hanna z803",
  "Hanna zzz803",
  "Hashim Sarfraz",
  "Ibukun Akinsiku",
  "Julie Iyamba",
  "Kishorna Loftman",
  "Laura Steepleton",
  "Mike Von Rupp",
  "Miranda Chepkorir",
  "Monty Campbell",
  "Nelson Mousques",
  "Nurjehaan Schroeder",
  "Olatoyan David",
  "Otto Zelaya",
  "PSO E2E Test 1772929336",
  "PSO UI E2E 1772929405",
  "Ricky Lelito",
  "Ricky R",
  "Sara Ai",
  "Scott Crumb",
  "Sodiq Oreoluwa",
  "Victor Nyachae",
  "Zackary Jackson",
];

const prosperMainPhoneAssignments = [
  ["+14104987548", "Brian Job", "Brian Job", "", "voice/sms/mms"],
  ["+15405834155", "Julie Iyamba", "Julie Iyamba", "+13049371183", "voice/sms/mms"],
  ["+13092457451", "Abid Mary Adebayo", "Abidemi Mary Adebayo", "", "voice/sms/mms"],
  ["+13049028155", "Abdourahamane Diallo", "Abdourahamane Diallo", "+13049371183", "voice/sms/mms"],
  ["+15714548627", "Kishorna Loftman", "Kishorna Loftman", "+13049371183", "voice/sms/mms"],
  ["+12109421906", "210areacode hanna", "Hanna a210code", "+13049371183", "voice/sms/mms"],
  ["+18035734080", "Nurjehaan Schroeder", "Nurjehaan Schroeder", "+13049371183", "voice/sms/mms"],
  ["+18575988373", "Otto Zelaya", "Otto Zelaya", "+13049371183", "voice/sms/mms"],
  ["+13368495577", "Ibukun Akinsiku", "Ibukun Akinsiku", "", "voice/sms/mms"],
  ["+13017012389", "Akpaka Kenechukwu sandra", "Akpaka Kenechukwu sandra", "", "voice/sms/mms"],
  ["+13098619729", "Chidinma Akpati", "Chidinma Akpati", "", "voice/sms/mms"],
  ["+18038642641", "Olatoyan David", "Olatoyan David", "+13049371183", "voice/sms/mms"],
  ["+19803516111", "Sodiq Oreoluwa", "Sodiq Oreoluwa", "", "voice/sms/mms"],
  ["+12029727938", "Notifications Only", "Hanna Code202", "+13049371183", "voice/sms/mms"],
  ["+18773179079", "HANNA - Prosper AI", "Hanna ProspershieldDOTio Ai", "+13049371183", "voice/sms/mms"],
].map(([number, friendlyName, linkedUser, forwarding, capabilities]) => ({
  number,
  friendlyName,
  type: number === "+18773179079" ? "tollFree" : "local",
  linkedUser,
  forwarding,
  capabilities,
}));

const n8nWorkflows = readJson(path.join(live, "n8n-workflows.summary.json"));
const makeScenarios = readJson(path.join(live, "make-scenarios.summary.json"));
const makeHooks = readJson(path.join(live, "make-hooks.summary.json"));
const makeConnections = readJson(path.join(live, "make-connections.summary.json"));
const telnyx = readJson(path.join(live, "telnyx-summary.json"));

const telnyxPhoneNumbers = (telnyx.phone_numbers_page_size_250 || []).map((number) => ({
  id: number.id,
  phoneNumber: number.phone_number,
  status: number.status,
  messagingProfileName: number.messaging_profile_name,
  messagingProfileId: number.messaging_profile_id,
  connectionName: number.connection_name,
  connectionId: number.connection_id,
  createdAt: number.created_at,
  updatedAt: number.updated_at,
}));

const telnyxConnections = (telnyx.connections_page_size_250 || []).map((connection) => ({
  id: connection.id,
  type: connection.record_type,
  name: connection.connection_name,
  active: connection.active,
  outboundVoiceProfileId: connection.outbound_voice_profile_id,
  createdAt: connection.created_at,
  updatedAt: connection.updated_at,
}));

const telnyxMessagingProfiles = (telnyx.messaging_profiles_page_size_250 || []).map((profile) => ({
  id: profile.id,
  name: profile.name,
  enabled: profile.enabled,
  createdAt: profile.created_at,
  updatedAt: profile.updated_at,
}));

const activeAccounts = accounts.filter((account) => account.activity === "Active").length;
const staleAccounts = accounts.filter((account) => account.activity === "Stale").length;
const dormantAccounts = accounts.filter((account) => account.activity === "Dormant").length;

const totals = {
  subAccounts: accounts.length,
  contacts: accounts.reduce((sum, account) => sum + account.contacts, 0),
  opportunities: accounts.reduce((sum, account) => sum + (account.opportunities || 0), 0),
  activeAccounts,
  staleAccounts,
  dormantAccounts,
  prosperMainUsers: 47,
  prosperMainAdmins: 19,
  prosperMainAccountUsers: 39,
  prosperMainAgencyUsers: 8,
  n8nWorkflows: n8nWorkflows.length,
  n8nActiveWorkflows: n8nWorkflows.filter((workflow) => workflow.active).length,
  makeScenarios: makeScenarios.length,
  makeHooks: makeHooks.length,
  makeConnections: makeConnections.length,
  telnyxPhoneNumbers: telnyxPhoneNumbers.length,
  telnyxMessagingProfiles: telnyxMessagingProfiles.length,
  telnyxConnections: telnyxConnections.length,
  telnyxVerifiedNumbers: (telnyx.verified_numbers_page_size_250 || []).length,
  credentialSystems: credentialSystems.length,
  credentialRefs: credentialSystems.reduce((sum, system) => sum + system.credentialRefs.length, 0),
  credentialDetails: credentialDetails.length,
};

const phoneRisks = [
  {
    title: "A2P incomplete or failed",
    detail: "Andrew Brown, Daniel Tirri, Jeff Restel, and Scott show incomplete/failed A2P 10DLC in the GHL phone system.",
  },
  {
    title: "Needs phone configuration",
    detail: "Cole Stallard, Garett Eackelbary, Junnie, and Sandbox require phone-system configuration from the GHL phone screens.",
  },
  {
    title: "No Data despite LC Phone card",
    detail: "Danny and Nelson Mousques have LC Phone managed indicators but the Phone System page rendered No Data.",
  },
  {
    title: "Outbound send freeze",
    detail: "Prosper policy/memory says no customer sends, SMS fallback, or public social blast should be fired without Craig's explicit go.",
  },
];

const integrationSummary = [
  {
    title: "GHL account surface",
    detail: "12 subaccounts; 121,396 visible contacts/leads; 19,659 visible opportunities; PROSPER MAIN is the active center with 92,284 contacts and 11,527 opportunities.",
  },
  {
    title: "GHL API coverage",
    detail: "Local token reads PROSPER MAIN deeply, including 47 users and 15 phone assignments. Other locations required the live browser session because agency-scoped API access is still restricted.",
  },
  {
    title: "Make.com",
    detail: "10 scenarios, 10 enabled hooks, and 13 connections. Visible connections include GHL v2, Prosper Main, Monday, GitHub, Netlify, Gmail, Google Drive, Gemini, NVIDIA, SignNow, and Make.",
  },
  {
    title: "n8n",
    detail: "16 workflows found; 6 active. Active paths include GHL outbound AI call to Assistable, Hanna voice, Hanna post-call sync, Maddi intake gates, PRO-1 retry, Telnyx inbound handler, and Telnyx inbound to GHL.",
  },
  {
    title: "Telnyx",
    detail: "14 active phone numbers, 8 messaging profiles, 8 voice/SIP connections, 3 outbound voice profiles, 2 FQDN rows, and 0 verified numbers returned by the verified-numbers API.",
  },
  {
    title: "Social planner",
    detail: "Browser capture shows GHL Social Planner is present with socials/settings; environment exposes an account map for Facebook, Instagram, LinkedIn, and TikTok. No public posts were sent.",
  },
];

const ghlBrowserPages = [
  {
    page: "All Integrations",
    signal: "42 Connect labels, 1 Connected, Google Calendar visible, plus Private Integrations, Conversation Providers, and Workflows entry points.",
  },
  {
    page: "Private Integrations",
    signal: "API v2.0 page captured but rows did not render clearly in text extraction.",
  },
  {
    page: "Conversation Providers",
    signal: "Page header captured but detailed providers did not render in text extraction.",
  },
  {
    page: "App Marketplace",
    signal: "Marketplace Apps, Installed Apps, Settings, AI Agents, Support Tickets, and Templates visible.",
  },
  {
    page: "Social Planner",
    signal: "Planner, Content, Comments, Statistics, Social Listening, Settings, and Socials visible.",
  },
  {
    page: "Workflows",
    signal: "Automation Workflows, Overview Beta, and Global Workflow Settings visible.",
  },
];

const connectionRoutes = [
  {
    route: "GHL API read path",
    source: "GHL_API_TOKEN",
    connector: "HighLevel API",
    target: "PROSPER MAIN location, users/search, phone-system numbers",
    status: "validated",
    credentialRefs: ["GHL_API_BASE", "GHL_API_TOKEN", "GHL_LOCATION_ID", "GHL_COMPANY_ID"],
    liveObjects: "Location hU3tflAFRrVsoETFstfk; 47 users; 15 phone assignments",
    notes: "Reads PROSPER MAIN deeply. Agency-wide API scope remains limited for non-main subaccounts.",
  },
  {
    route: "GHL browser inventory path",
    source: "login.prospersynk.com session",
    connector: "HighLevel browser session",
    target: "12 subaccounts, last-login, contacts, opportunities, phone system pages",
    status: "validated",
    credentialRefs: ["GHL_LOCATION_ID", "GHL_LOCATION_COLE"],
    liveObjects: "12 subaccounts; 121,396 visible contacts/leads; 19,659 opportunities",
    notes: "Used for non-main subaccounts where API scope could not read deeply.",
  },
  {
    route: "GHL Social Planner route",
    source: "GHL_SOCIAL_ACCOUNT_MAP",
    connector: "HighLevel Social Planner",
    target: "Facebook, Instagram, LinkedIn, TikTok account refs",
    status: "present-held",
    credentialRefs: ["GHL_SOCIAL_ACCOUNT_MAP"],
    liveObjects: "Social Planner pages captured; no post action",
    notes: "Public social blast remains held until Craig gives explicit go.",
  },
  {
    route: "Make GHL/Monday sync route",
    source: "MAKE_API_KEY",
    connector: "Make.com scenarios, hooks, and connections",
    target: "GHL v2, Prosper Main, Monday.com -> GHL Sync, install/quote intake scenarios",
    status: "validated",
    credentialRefs: ["MAKE_API_KEY", "MAKE_TEAM_ID", "MAKE_ORG_ID", "MAKE_QUOTE_INTAKE_SCENARIO_ID", "MAKE_QUOTE_INTAKE_HOOK_ID"],
    liveObjects: `${makeScenarios.length} scenarios; ${makeHooks.length} hooks; ${makeConnections.length} connections`,
    notes: "MAKE_API_KEY works. MAKE_API_TOKEN_OP is present but treated as stale after prior 401.",
  },
  {
    route: "n8n Telnyx/GHL workflow route",
    source: "N8N_API_KEY",
    connector: "n8n workflows and webhook refs",
    target: "Telnyx inbound SMS, Telnyx inbound SMS -> GHL, Hanna voice, post-call sync, GHL outbound call",
    status: "validated",
    credentialRefs: ["N8N_API_KEY", "N8N_URL", "N8N_WEBHOOK_INBOUND_SMS", "N8N_WEBHOOK_OUTBOUND_CALL", "N8N_WEBHOOK_OUTBOUND_SMS", "N8N_WEBHOOK_VOICE_EVENTS"],
    liveObjects: `${n8nWorkflows.length} workflows; ${n8nWorkflows.filter((workflow) => workflow.active).length} active`,
    notes: "Outbound customer-send routes remain operationally frozen unless Craig explicitly approves.",
  },
  {
    route: "Telnyx messaging route",
    source: "TELNYX_API_KEY",
    connector: "Telnyx Messaging API",
    target: "Phone numbers, messaging profiles, inbound SMS n8n workflows",
    status: "validated",
    credentialRefs: ["TELNYX_API_KEY", "TELNYX_MSG_PROFILE_ID", "TELNYX_PRIMARY_NUMBER", "TELNYX_BRAND_ID", "TELNYX_CAMPAIGN_ID"],
    liveObjects: `${telnyxPhoneNumbers.length} numbers; ${telnyxMessagingProfiles.length} messaging profiles`,
    notes: "Prosper SMS profile is disabled; inbound workflow refs exist; outbound SMS remains frozen.",
  },
  {
    route: "Telnyx voice/SIP route",
    source: "TELNYX_SIP_CONNECTION_ID",
    connector: "Telnyx SIP, LiveKit, Assistable, n8n voice",
    target: "Prosper LiveKit SIP, assistable, Hanna AI Voice",
    status: "validated",
    credentialRefs: ["TELNYX_SIP_CONNECTION_ID", "TELNYX_SIP_CONNECTION_NAME", "TELNYX_SIP_USERNAME", "TELNYX_SIP_PASSWORD", "TELNYX_FQDN_ID", "TELNYX_LIVEKIT_FQDN", "TELNYX_OVP_ID"],
    liveObjects: `${telnyxConnections.length} Telnyx connections; ${(telnyx.fqdns_page_size_250 || []).length} FQDN rows`,
    notes: "SIP secret values are not published.",
  },
  {
    route: "Supabase knowledge route",
    source: "SUPABASE_SERVICE_ROLE_KEY",
    connector: "Supabase REST",
    target: "knowledge_base and agent_activity_log",
    status: "validated",
    credentialRefs: ["SUPABASE_URL", "SUPABASE_SERVICE_ROLE_KEY", "SUPABASE_ANON_KEY", "SUPABASE_DB_URL"],
    liveObjects: "GHL map knowledge_base row and activity log rows",
    notes: "Privileged key was used only server-side for this wiki sync.",
  },
  {
    route: "GitHub wiki/source route",
    source: "GITHUB_TOKEN",
    connector: "GitHub CLI/API/git",
    target: "prosperenergy/ghl-prospershield",
    status: "validated",
    credentialRefs: ["GITHUB_TOKEN", "GITHUB_PAT", "GITHUB_ORG"],
    liveObjects: "Public repo main branch; wiki source under /wiki",
    notes: "GitHub has wiki enabled but the separate wiki git remote did not accept pushes.",
  },
  {
    route: "Public site route",
    source: "NETLIFY_AUTH_TOKEN + CLOUDFLARE_API_TOKEN",
    connector: "Netlify deploy + Cloudflare DNS",
    target: "https://ghl.prospershield.io",
    status: "validated",
    credentialRefs: ["NETLIFY_AUTH_TOKEN", "NETLIFY_TEAM", "CLOUDFLARE_API_TOKEN"],
    liveObjects: "Netlify site ghl-prospershield; Cloudflare CNAME ghl.prospershield.io",
    notes: "Public site hosts redacted refs only.",
  },
  {
    route: "Monday operations route",
    source: "MONDAY_API_KEY",
    connector: "Monday API + Make connection",
    target: "Prosper boards, columns, install pipeline, GHL sync",
    status: "validated",
    credentialRefs: refs(envNames, ["MONDAY"]).filter((name) => name === "MONDAY_API_KEY" || name.includes("BOARD") || name.includes("WORKSPACE") || name.startsWith("MONDAY_SP_COL")),
    liveObjects: "Monday current-user query returned HTTP 200; board/column refs present",
    notes: "No Monday records were modified.",
  },
  {
    route: "Google/Gemini model route",
    source: "GEMINI_API_KEY",
    connector: "Google Generative Language API",
    target: "Gemini model listing and Prosper AI model surfaces",
    status: "validated",
    credentialRefs: refs(envNames, ["GEMINI", "GOOGLE", "BRAIN_GOOGLE", "MADDIE_GEMINI"]),
    liveObjects: "Gemini models endpoint returned HTTP 200",
    notes: "OAuth client refs exist but no browser reauth was performed.",
  },
  {
    route: "Redis fleet bus route",
    source: "REDIS_URL/redis-prosper",
    connector: "Redis direct helper",
    target: "Prosper fleet bus and agent streams",
    status: "validated",
    credentialRefs: refs(envNames, ["REDIS", "PROSPER_REDIS"]),
    liveObjects: "PING returned PONG",
    notes: "No CMUX control was used.",
  },
  {
    route: "1Password vault/service route",
    source: "OP_SERVICE_ACCOUNT_TOKEN",
    connector: "1Password CLI service account",
    target: "Vault-backed credential lookup surface",
    status: "validated-service-account",
    credentialRefs: ["OP_SERVICE_ACCOUNT_TOKEN", "OP_CONNECT_TOKEN", "ONEPASSWORD_CONNECT_TOKEN"],
    liveObjects: "op whoami reported SERVICE_ACCOUNT when service token was provided",
    notes: "Interactive op login is still absent in this shell.",
  },
  {
    route: "Setmore booking route",
    source: "SETMORE_API_KEY",
    connector: "Setmore booking API",
    target: "Setmore booking/service read surface",
    status: "needs-reauth",
    credentialRefs: ["SETMORE_API_KEY"],
    liveObjects: "Tested services endpoint returned HTTP 401",
    notes: "No Setmore writes were performed.",
  },
  {
    route: "SignNow signing route",
    source: "SIGNNOW_BASIC_AUTH",
    connector: "SignNow auth/API refs",
    target: "Signing folders, OAuth/basic auth, webhook refs",
    status: "validated-auth-endpoint",
    credentialRefs: refs(envNames, ["SIGNNOW"]),
    liveObjects: "Auth endpoint returned HTTP 200",
    notes: "No document or signing action was performed.",
  },
];

totals.connectionRoutes = connectionRoutes.length;

const data = {
  generatedAt,
  mode: "read-only live inventory",
  safety: {
    noCustomerSends: true,
    noSmsFallback: true,
    noPublicPosts: true,
    telnyxTermInRequest: "User said Telmex; inventory mapped the available Prosper Telnyx system.",
  },
  sources: [
    "Live Prosper/HighLevel browser session",
    "Local HighLevel API for PROSPER MAIN",
    "Make.com API",
    "n8n API",
    "Telnyx API",
    "Prosper env connection registry with secrets redacted",
  ],
  accessLimits: [
    "HighLevel connector/API scope cannot yet read every subaccount deeply by API.",
    "1Password CLI was present but not signed in in this shell.",
    "Agency browser routes supplied counts, last-login, and phone status for non-main locations.",
    "Telnyx brand and 10DLC campaign probes returned Telnyx 10005 resource-not-found on the tested endpoints, while env still contains brand/campaign identifiers.",
  ],
  credentialMap: {
    source: "Prosper local env registry plus live read-only auth checks",
    rawSecretValuesPublished: false,
    policy: "Credential values, passwords, tokens, webhook URLs, and bearer material are intentionally not published to GitHub, Supabase, or the public site. This map publishes variable names, systems, connector purpose, and authentication status only.",
    systems: credentialSystems,
    details: credentialDetails,
    routes: connectionRoutes,
  },
  totals,
  accounts,
  prosperMain: {
    users: prosperMainUsers,
    phoneAssignments: prosperMainPhoneAssignments,
  },
  phoneRisks,
  integrationSummary,
  ghlBrowserPages,
  n8n: { workflows: n8nWorkflows },
  make: {
    scenarios: makeScenarios,
    hooks: makeHooks,
    connections: makeConnections,
  },
  telnyx: {
    phoneNumbers: telnyxPhoneNumbers,
    messagingProfiles: telnyxMessagingProfiles,
    connections: telnyxConnections,
    fqdnConnections: telnyx.fqdn_connections_page_size_250 || [],
    fqdns: telnyx.fqdns_page_size_250 || [],
    outboundVoiceProfiles: telnyx.outbound_voice_profiles_page_size_250 || [],
    prosperSmsProfileNumbers: telnyx.messaging_profiles_40019d74_04ab_4d0e_b225_700dafa0d7ab_phone_numbers_page_size_250 || telnyx["messaging_profiles_40019d74-04ab-4d0e-b225-700dafa0d7ab_phone_numbers_page_size_250"] || [],
  },
};

const accountRows = accounts.map((account) => [
  account.name,
  account.id,
  account.lastLogin,
  account.activity,
  account.contacts,
  account.opportunities == null ? "Not rendered" : account.opportunities,
  account.visiblePhone,
  account.phoneStatus,
]);

const makeScenarioRows = makeScenarios.map((scenario) => [
  scenario.id,
  scenario.name,
  scenario.isActive === true ? "yes" : scenario.isActive === false ? "no" : "not returned",
  scenario.scheduling?.type || "",
  scenario.created || "",
]);

const makeConnectionRows = makeConnections.map((connection) => [
  connection.id,
  connection.name,
  connection.accountName,
  connection.teamId,
]);

const n8nRows = n8nWorkflows.map((workflow) => [
  workflow.id,
  workflow.name,
  workflow.active ? "yes" : "no",
  workflow.updatedAt,
  (workflow.webhookPaths || []).map((webhook) => webhook.path).filter(Boolean).join(", "),
]);

const telnyxNumberRows = telnyxPhoneNumbers.map((number) => [
  number.phoneNumber,
  number.status,
  number.messagingProfileName,
  number.connectionName || "",
  number.updatedAt,
]);

const connectionRouteRows = connectionRoutes.map((route) => [
  route.route,
  route.source,
  route.connector,
  route.target,
  route.status,
  route.credentialRefs.join(", "),
  route.liveObjects,
  route.notes,
]);

const credentialDetailRows = credentialDetails.map((detail) => [
  detail.name,
  detail.system,
  detail.kind,
  detail.valueState,
  detail.occurrences,
  detail.validation,
  detail.publicHandling,
  detail.role,
  detail.route,
]);

const report = `# GHL Full Live Connection Map

Generated: ${generatedAt}
Mode: read-only inventory. No customer sends, SMS fallback, workflow activations, public posts, billing changes, permission changes, deletes, or outbound tests were performed.

## Executive Summary

- GHL subaccounts visible: ${totals.subAccounts}
- Contacts/leads visible: ${totals.contacts.toLocaleString("en-US")}
- Visible opportunities: ${totals.opportunities.toLocaleString("en-US")}
- Active / stale / dormant accounts: ${activeAccounts} / ${staleAccounts} / ${dormantAccounts}
- PROSPER MAIN users: 47 total; 39 account users; 8 agency users; 19 admins
- Make.com: ${totals.makeScenarios} scenarios, ${totals.makeHooks} hooks, ${totals.makeConnections} connections
- n8n: ${totals.n8nWorkflows} workflows, ${totals.n8nActiveWorkflows} active
- Telnyx: ${totals.telnyxPhoneNumbers} active phone numbers, ${totals.telnyxMessagingProfiles} messaging profiles, ${totals.telnyxConnections} voice/SIP connections
- Credential/connector systems mapped: ${totals.credentialSystems}; credential refs listed: ${totals.credentialRefs}; route rows: ${totals.connectionRoutes}

## Access And Limits

${data.accessLimits.map((item) => `- ${item}`).join("\n")}

## GHL Subaccounts

${markdownTable(["Subaccount", "ID", "Last login", "Activity", "Contacts/leads", "Opportunities", "Visible phone", "Phone status"], accountRows)}

## Ownership And User Signals

The visible owner lane is the GHL subaccount name. PROSPER MAIN is the only subaccount currently readable deeply by API. It returned 47 users:

${prosperMainUsers.join(", ")}

## PROSPER MAIN Phone Assignments

${markdownTable(["Number", "Friendly name", "Linked user", "Forwarding", "Capabilities"], prosperMainPhoneAssignments.map((row) => [row.number, row.friendlyName, row.linkedUser, row.forwarding, row.capabilities]))}

## Phone Risks

${phoneRisks.map((item) => `- ${item.title}: ${item.detail}`).join("\n")}

## GHL Browser Integration Pages

${markdownTable(["Page", "Captured signal"], ghlBrowserPages.map((row) => [row.page, row.signal]))}

## Credential, Token, Connector, And Login Map

Raw token/password/login values are not published. This table maps the credential references, live auth status, connector purpose, and login state.

${markdownTable(["System", "Connector purpose", "Status", "Credential refs", "Login/auth note"], credentialSystems.map((system) => [
  system.system,
  system.connector,
  system.validation,
  system.credentialRefs.join(", "),
  system.loginStatus,
]))}

### Connector Routes

${markdownTable(["Route", "Source", "Connector", "Target", "Status", "Credential refs", "Live objects", "Notes"], connectionRouteRows)}

### Credential Ref Detail

${markdownTable(["Credential ref", "System", "Kind", "Value state", "Occurrences", "Validation", "Public handling", "Role", "Route"], credentialDetailRows)}

## Make.com Map

${markdownTable(["ID", "Scenario", "Active", "Scheduling", "Created"], makeScenarioRows)}

### Make.com Connections

${markdownTable(["ID", "Connection", "Account name", "Team"], makeConnectionRows)}

### Make.com Hooks

${markdownTable(["ID", "Hook", "Scenario", "Enabled"], makeHooks.map((hook) => [hook.id, hook.name, hook.scenarioId, hook.enabled ? "yes" : "no"]))}

## n8n Map

${markdownTable(["ID", "Workflow", "Active", "Updated", "Webhook paths"], n8nRows)}

## Telnyx Map

${markdownTable(["Number", "Status", "Messaging profile", "Connection", "Updated"], telnyxNumberRows)}

### Telnyx Messaging Profiles

${markdownTable(["ID", "Profile", "Enabled", "Updated"], telnyxMessagingProfiles.map((profile) => [profile.id, profile.name, profile.enabled ? "yes" : "no", profile.updatedAt]))}

### Telnyx Voice/SIP Connections

${markdownTable(["ID", "Type", "Name", "Active", "Outbound voice profile", "Updated"], telnyxConnections.map((connection) => [connection.id, connection.type, connection.name, connection.active ? "yes" : "no", connection.outboundVoiceProfileId || "", connection.updatedAt]))}

## Operational Holds

- SMS/customer-send paths remain frozen unless Craig gives explicit approval.
- The old responder SMS fallback must remain removed/fail-closed.
- Social blast remains held until Craig gives explicit go.
- Webhook URLs, API tokens, and credentials are intentionally redacted from this wiki and the site data.

## Search Site

Live site: https://ghl.prospershield.io
GitHub repo: https://github.com/prosperenergy/ghl-prospershield
GitHub wiki source: https://github.com/prosperenergy/ghl-prospershield/tree/main/wiki
Static site source: ${path.join(root, "site")}
Data file: ${path.join(siteData, "ghl-live-map.json")}
`;

writeJson(path.join(siteData, "ghl-live-map.json"), data);
writeJson(path.join(live, "ghl-live-map.combined.json"), data);
writeText(path.join(root, "GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md"), report);
writeText(path.join(wikiDir, "ghl-full-live-connection-map.md"), report);

console.log(JSON.stringify({
  generatedAt,
  dataFile: path.join(siteData, "ghl-live-map.json"),
  reportFile: path.join(root, "GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md"),
  wikiFile: path.join(wikiDir, "ghl-full-live-connection-map.md"),
  totals,
}, null, 2));
