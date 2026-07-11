const state = {
  data: null,
  query: "",
  filter: "all",
  quickQuery: "",
  theme: localStorage.getItem("ghl-theme") || "light",
};

const fmt = new Intl.NumberFormat("en-US");
const searchTextCache = new WeakMap();

const $ = (id) => document.getElementById(id);

function textMatches(value, q) {
  if (!q) return true;

  let normalizedValue = "";
  if (value == null) {
    normalizedValue = "";
  } else if (typeof value === "object") {
    normalizedValue = searchTextCache.get(value);
    if (!normalizedValue) {
      normalizedValue = JSON.stringify(value).toLowerCase();
      searchTextCache.set(value, normalizedValue);
    }
  } else {
    normalizedValue = String(value).toLowerCase();
  }

  return normalizedValue.includes(q);
}

function rowsFor(items) {
  const q = (state.query || state.quickQuery || "").toLowerCase();
  if (!q) return items;
  return items.filter((item) => textMatches(item, q));
}

function statusClass(status) {
  const normalized = String(status || "")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/g, "-");
  return `status-${normalized}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("ghl-theme", theme);
  $("theme-toggle").textContent = theme === "dark" ? "Light" : "Dark";
  $("theme-toggle").setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
}

function setSearch(query) {
  state.quickQuery = query;
  $("search").value = query;
  state.query = query;
  render();
}

function renderTable(el, headers, rows) {
  el.innerHTML = [
    `<thead><tr>${headers.map((h) => `<th>${escapeHtml(h.label)}</th>`).join("")}</tr></thead>`,
    `<tbody>${rows.map((row) => `<tr>${headers.map((h) => `<td>${h.render ? h.render(row) : escapeHtml(row[h.key] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody>`,
  ].join("");
}

function renderKpis(data) {
  const kpis = [
    ["Sub-accounts", data.totals.subAccounts],
    ["Contacts / leads", data.totals.contacts],
    ["Visible opportunities", data.totals.opportunities],
    ["n8n workflows", data.n8n.workflows.length],
    ["Telnyx numbers", data.telnyx.phoneNumbers.length],
    ["Credential refs", data.totals.credentialRefs],
    ["Routes", data.totals.connectionRoutes],
  ];
  $("kpis").innerHTML = kpis
    .map(([label, value]) => `<div class="kpi"><strong>${escapeHtml(fmt.format(value))}</strong><span>${escapeHtml(label)}</span></div>`)
    .join("");
}

function renderPlainSummary(data) {
  const cards = [
    {
      title: "CRM Accounts",
      detail: `${fmt.format(data.totals.subAccounts)} GHL subaccounts hold ${fmt.format(data.totals.contacts)} visible contacts/leads and ${fmt.format(data.totals.opportunities)} visible opportunities.`,
    },
    {
      title: "Main Working Account",
      detail: `PROSPER MAIN is the active center: ${fmt.format(data.accounts.find((account) => account.name === "PROSPER MAIN")?.contacts || 0)} contacts, 47 users, and 15 GHL phone assignments.`,
    },
    {
      title: "Automation Layer",
      detail: `Make and n8n connect GHL to Monday, Telnyx, Hanna voice, quote intake, post-call sync, and lead-response routes.`,
    },
    {
      title: "Phone Layer",
      detail: `Telnyx has ${fmt.format(data.totals.telnyxPhoneNumbers)} numbers, ${fmt.format(data.totals.telnyxMessagingProfiles)} messaging profiles, and ${fmt.format(data.totals.telnyxConnections)} voice/SIP connections.`,
    },
    {
      title: "Credential Map",
      detail: `${fmt.format(data.totals.credentialRefs)} credential references are mapped by role and route. Secret values are not published.`,
    },
    {
      title: "Public Knowledge",
      detail: "GitHub, Supabase, Netlify, and Cloudflare publish this read-only map at ghl.prospershield.io.",
    },
  ];
  $("plain-summary").innerHTML = cards
    .map((card) => `<div class="plain-card"><strong>${escapeHtml(card.title)}</strong><p>${escapeHtml(card.detail)}</p></div>`)
    .join("");
}

function renderAttention(data) {
  const attention = [
    ...data.phoneRisks.map((risk) => ({ title: risk.title, detail: risk.detail })),
    ...data.credentialMap.systems
      .filter((system) => !["validated", "validated-service-account", "validated-auth-endpoint"].includes(system.validation))
      .map((system) => ({ title: `${system.system}: ${system.validation}`, detail: system.loginStatus })),
    {
      title: "HighLevel API scope",
      detail: "PROSPER MAIN is readable deeply by API; non-main subaccounts still rely on browser inventory for full detail.",
    },
  ];
  const rows = rowsFor(attention);
  $("attention-count").textContent = `${rows.length} visible`;
  $("attention-list").innerHTML = rows
    .map((item) => `<button class="item action-item" type="button" data-search="${escapeHtml(item.title.split(":")[0])}"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></button>`)
    .join("");
  $("attention-list").querySelectorAll("[data-search]").forEach((button) => {
    button.addEventListener("click", () => setSearch(button.dataset.search));
  });
}

function renderGlossary(data) {
  const glossary = [
    ["GHL", "The CRM. It stores subaccounts, leads, opportunities, users, phone assignments, workflows, social planner, and contact records."],
    ["Make.com", "The automation bridge. It moves work between GHL, Monday, quote intake, install projects, GitHub, Netlify, Google/Gemini, and SignNow."],
    ["n8n", "The webhook/workflow layer. It handles Telnyx inbound routes, Hanna voice paths, post-call sync, retry jobs, and GHL call triggers."],
    ["Telnyx", "The phone/SMS/voice provider. It owns the numbers, messaging profiles, SIP/LiveKit/Assistable connections, and voice profiles."],
    ["Supabase", "The private knowledge store. This report is also written to the Prosper knowledge base and activity log."],
    ["GitHub + Netlify + Cloudflare", "The public publishing path. GitHub stores source, Netlify hosts, Cloudflare routes the domain."],
    ["Credential ref", "A variable name that points to a token, endpoint, object id, phone number, user, board, or connector setting. Values are redacted."],
  ];
  const rows = rowsFor(glossary.map(([title, detail]) => ({ title, detail })));
  $("glossary-list").innerHTML = rows
    .map((item) => `<button class="item action-item" type="button" data-search="${escapeHtml(item.title)}"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></button>`)
    .join("");
  $("glossary-list").querySelectorAll("[data-search]").forEach((button) => {
    button.addEventListener("click", () => setSearch(button.dataset.search));
  });
}

function renderAccounts(data) {
  const rows = rowsFor(data.accounts).filter((row) => state.filter === "all" || row.activity.toLowerCase() === state.filter);
  $("account-count").textContent = `${rows.length} visible`;
  renderTable($("accounts-table"), [
    { label: "Sub-account", key: "name" },
    { label: "Activity", render: (r) => `<span class="${statusClass(r.activity)}">${escapeHtml(r.activity)}</span>` },
    { label: "Last login", key: "lastLogin" },
    { label: "Contacts", render: (r) => escapeHtml(fmt.format(r.contacts)) },
    { label: "Opps", render: (r) => r.opportunities == null ? "Not rendered" : escapeHtml(fmt.format(r.opportunities)) },
    { label: "Visible phone", key: "visiblePhone" },
    { label: "Phone status", key: "phoneStatus" },
    { label: "LC Email", key: "lcEmail" },
    { label: "LC Phone", key: "lcPhone" },
  ], rows);
}

function renderCards(data) {
  $("phone-risks").innerHTML = data.phoneRisks
    .filter((item) => !state.query || textMatches(item, state.query))
    .map((item) => `<div class="item"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>`)
    .join("");

  $("integration-summary").innerHTML = data.integrationSummary
    .filter((item) => !state.query || textMatches(item, state.query))
    .map((item) => `<div class="item"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></div>`)
    .join("");
}

function renderCredentials(data) {
  const rows = rowsFor(data.credentialMap.systems || []);
  $("credential-count").textContent = `${rows.length} systems visible`;
  renderTable($("credentials-table"), [
    { label: "System", key: "system" },
    { label: "Status", key: "validation" },
    { label: "Connector", key: "connector" },
    { label: "Credential refs", render: (r) => (r.credentialRefs || []).map((ref) => escapeHtml(ref)).join(", ") },
    { label: "Login / auth note", key: "loginStatus" },
  ], rows);
}

function renderCredentialRoutes(data) {
  const rows = rowsFor(data.credentialMap.routes || []);
  $("route-count").textContent = `${rows.length} routes visible`;
  renderTable($("routes-table"), [
    { label: "Route", key: "route" },
    { label: "Status", key: "status" },
    { label: "Source", key: "source" },
    { label: "Connector", key: "connector" },
    { label: "Target", key: "target" },
    { label: "Credential refs", render: (r) => (r.credentialRefs || []).map((ref) => escapeHtml(ref)).join(", ") },
    { label: "Live objects", key: "liveObjects" },
    { label: "Notes", key: "notes" },
  ], rows);
}

function renderCredentialDetails(data) {
  const rows = rowsFor(data.credentialMap.details || []);
  $("credential-detail-count").textContent = `${rows.length} refs visible`;
  renderTable($("credential-detail-table"), [
    { label: "Ref", key: "name" },
    { label: "System", key: "system" },
    { label: "Kind", key: "kind" },
    { label: "Set", key: "valueState" },
    { label: "Occurrences", key: "occurrences" },
    { label: "Validation", key: "validation" },
    { label: "Public handling", key: "publicHandling" },
    { label: "Role", key: "role" },
    { label: "Route", key: "route" },
  ], rows);
}

function renderN8n(data) {
  const rows = rowsFor(data.n8n.workflows);
  $("n8n-count").textContent = `${rows.length} visible`;
  renderTable($("n8n-table"), [
    { label: "Workflow", key: "name" },
    { label: "Active", render: (r) => r.active ? "yes" : "no" },
    { label: "Updated", key: "updatedAt" },
    { label: "Nodes", key: "nodeCount" },
    { label: "Webhook paths", render: (r) => (r.webhookPaths || []).map((w) => w.path).filter(Boolean).map((path) => escapeHtml(path)).join(", ") },
    { label: "Integrations", render: (r) => (r.integrations || []).map((integration) => escapeHtml(integration)).join(", ") },
  ], rows);
}

function renderGhlPages(data) {
  const rows = rowsFor(data.ghlBrowserPages);
  $("ghl-page-count").textContent = `${rows.length} visible`;
  renderTable($("ghl-pages-table"), [
    { label: "Page", key: "page" },
    { label: "Captured signal", key: "signal" },
  ], rows);
}

function renderProsperMain(data) {
  const users = rowsFor((data.prosperMain.users || []).map((name) => ({ name })));
  const phones = rowsFor(data.prosperMain.phoneAssignments || []);
  $("prosper-main-count").textContent = `${users.length} users, ${phones.length} numbers visible`;
  $("prosper-main-users").innerHTML = users.map((user) => `<span class="token">${escapeHtml(user.name)}</span>`).join("");
  renderTable($("prosper-main-phones"), [
    { label: "Number", key: "number" },
    { label: "Friendly name", key: "friendlyName" },
    { label: "Linked user", key: "linkedUser" },
    { label: "Forwarding", key: "forwarding" },
    { label: "Capabilities", key: "capabilities" },
  ], phones);
}

function renderMake(data) {
  const scenarios = rowsFor(data.make.scenarios);
  const hooks = rowsFor(data.make.hooks);
  const connections = rowsFor(data.make.connections);
  $("make-count").textContent = `${scenarios.length} scenarios, ${hooks.length} hooks, ${connections.length} connections visible`;
  renderTable($("make-scenarios"), [
    { label: "ID", key: "id" },
    { label: "Scenario", key: "name" },
    { label: "Active", render: (r) => r.isActive === true ? "yes" : r.isActive === false ? "no" : "not returned" },
    { label: "Scheduling", render: (r) => escapeHtml(r.scheduling?.type || r.scheduling || "") },
  ], scenarios);
  renderTable($("make-hooks"), [
    { label: "ID", key: "id" },
    { label: "Hook", key: "name" },
    { label: "Scenario", key: "scenarioId" },
    { label: "Enabled", render: (r) => r.enabled === true ? "yes" : r.enabled === false ? "no" : "" },
  ], hooks);
  renderTable($("make-connections"), [
    { label: "ID", key: "id" },
    { label: "Connection", key: "name" },
    { label: "Account", key: "accountName" },
    { label: "Team", key: "teamId" },
  ], connections);
}

function renderTelnyx(data) {
  const rows = rowsFor(data.telnyx.phoneNumbers);
  const profiles = rowsFor(data.telnyx.messagingProfiles);
  const connections = rowsFor(data.telnyx.connections);
  $("telnyx-count").textContent = `${rows.length} numbers, ${profiles.length} profiles, ${connections.length} connections visible`;
  renderTable($("telnyx-table"), [
    { label: "Number", key: "phoneNumber" },
    { label: "Status", key: "status" },
    { label: "Messaging profile", key: "messagingProfileName" },
    { label: "Connection", key: "connectionName" },
  ], rows);
  renderTable($("telnyx-profiles"), [
    { label: "ID", key: "id" },
    { label: "Profile", key: "name" },
    { label: "Enabled", render: (r) => r.enabled ? "yes" : "no" },
    { label: "Updated", key: "updatedAt" },
  ], profiles);
  renderTable($("telnyx-connections"), [
    { label: "ID", key: "id" },
    { label: "Type", key: "type" },
    { label: "Name", key: "name" },
    { label: "Active", render: (r) => r.active ? "yes" : "no" },
  ], connections);
}

function renderChips() {
  const chips = [
    { type: "filter", id: "all", label: "All" },
    { type: "filter", id: "active", label: "Active accounts" },
    { type: "filter", id: "stale", label: "Stale accounts" },
    { type: "filter", id: "dormant", label: "Dormant accounts" },
    { type: "query", id: "needs", label: "Needs action" },
    { type: "query", id: "validated", label: "Validated" },
    { type: "query", id: "GHL", label: "GHL" },
    { type: "query", id: "Telnyx", label: "Phones" },
    { type: "query", id: "Make", label: "Make" },
    { type: "query", id: "n8n", label: "n8n" },
    { type: "query", id: "Setmore", label: "Setmore" },
  ];
  $("chips").innerHTML = chips
    .map((chip) => {
      const isActive = chip.type === "filter" ? state.filter === chip.id && !state.query : state.query === chip.id;
      return `<button class="chip ${isActive ? "active" : ""}" data-${chip.type}="${chip.id}">${chip.label}</button>`;
    })
    .join("");
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      state.query = "";
      state.quickQuery = "";
      $("search").value = "";
      render();
    });
  });
  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = "all";
      setSearch(button.dataset.query);
    });
  });
}

function renderSearchStatus(data) {
  const q = state.query || state.quickQuery;
  const counts = {
    accounts: rowsFor(data.accounts).length,
    systems: rowsFor(data.credentialMap.systems || []).length,
    routes: rowsFor(data.credentialMap.routes || []).length,
    refs: rowsFor(data.credentialMap.details || []).length,
    workflows: rowsFor(data.n8n.workflows || []).length,
    telnyx: rowsFor(data.telnyx.phoneNumbers || []).length,
  };
  const label = q ? `Showing matches for "${q}"` : "Showing full map";
  $("search-status").textContent = `${label}: ${counts.accounts} accounts, ${counts.systems} credential systems, ${counts.routes} routes, ${counts.refs} refs, ${counts.workflows} workflows, ${counts.telnyx} phone numbers.`;
}

function render() {
  const { data } = state;
  $("updated").textContent = `Updated ${data.generatedAt}`;
  renderChips();
  renderKpis(data);
  renderPlainSummary(data);
  renderAttention(data);
  renderGlossary(data);
  renderSearchStatus(data);
  renderAccounts(data);
  renderCards(data);
  renderCredentials(data);
  renderCredentialRoutes(data);
  renderCredentialDetails(data);
  renderN8n(data);
  renderGhlPages(data);
  renderProsperMain(data);
  renderMake(data);
  renderTelnyx(data);
}

fetch("./data/ghl-live-map.json")
  .then((res) => res.json())
  .then((data) => {
    state.data = data;
    setTheme(state.theme);
    $("theme-toggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
    $("search").addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      state.quickQuery = state.query;
      state.filter = "all";
      render();
    });
    render();
  });
