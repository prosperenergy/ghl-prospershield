const state = {
  data: null,
  query: "",
  filter: "all",
};

const fmt = new Intl.NumberFormat("en-US");

const $ = (id) => document.getElementById(id);

function textMatches(value, q) {
  return JSON.stringify(value).toLowerCase().includes(q.toLowerCase());
}

function rowsFor(items) {
  if (!state.query) return items;
  return items.filter((item) => textMatches(item, state.query));
}

function statusClass(status) {
  return `status-${String(status || "").toLowerCase()}`;
}

function renderTable(el, headers, rows) {
  el.innerHTML = [
    `<thead><tr>${headers.map((h) => `<th>${h.label}</th>`).join("")}</tr></thead>`,
    `<tbody>${rows.map((row) => `<tr>${headers.map((h) => `<td>${h.render ? h.render(row) : row[h.key] ?? ""}</td>`).join("")}</tr>`).join("")}</tbody>`,
  ].join("");
}

function renderKpis(data) {
  const kpis = [
    ["Sub-accounts", data.totals.subAccounts],
    ["Contacts / leads", data.totals.contacts],
    ["Visible opportunities", data.totals.opportunities],
    ["n8n workflows", data.n8n.workflows.length],
    ["Telnyx numbers", data.telnyx.phoneNumbers.length],
  ];
  $("kpis").innerHTML = kpis
    .map(([label, value]) => `<div class="kpi"><strong>${fmt.format(value)}</strong><span>${label}</span></div>`)
    .join("");
}

function renderAccounts(data) {
  const rows = rowsFor(data.accounts).filter((row) => state.filter === "all" || row.activity.toLowerCase() === state.filter);
  $("account-count").textContent = `${rows.length} visible`;
  renderTable($("accounts-table"), [
    { label: "Sub-account", key: "name" },
    { label: "Activity", render: (r) => `<span class="${statusClass(r.activity)}">${r.activity}</span>` },
    { label: "Last login", key: "lastLogin" },
    { label: "Contacts", render: (r) => fmt.format(r.contacts) },
    { label: "Opps", render: (r) => r.opportunities == null ? "Not rendered" : fmt.format(r.opportunities) },
    { label: "Visible phone", key: "visiblePhone" },
    { label: "Phone status", key: "phoneStatus" },
    { label: "LC Email", key: "lcEmail" },
    { label: "LC Phone", key: "lcPhone" },
  ], rows);
}

function renderCards(data) {
  $("phone-risks").innerHTML = data.phoneRisks
    .filter((item) => !state.query || textMatches(item, state.query))
    .map((item) => `<div class="item"><strong>${item.title}</strong><p>${item.detail}</p></div>`)
    .join("");

  $("integration-summary").innerHTML = data.integrationSummary
    .filter((item) => !state.query || textMatches(item, state.query))
    .map((item) => `<div class="item"><strong>${item.title}</strong><p>${item.detail}</p></div>`)
    .join("");
}

function renderN8n(data) {
  const rows = rowsFor(data.n8n.workflows);
  $("n8n-count").textContent = `${rows.length} visible`;
  renderTable($("n8n-table"), [
    { label: "Workflow", key: "name" },
    { label: "Active", render: (r) => r.active ? "yes" : "no" },
    { label: "Updated", key: "updatedAt" },
    { label: "Nodes", key: "nodeCount" },
    { label: "Webhook paths", render: (r) => (r.webhookPaths || []).map((w) => w.path).filter(Boolean).join(", ") },
    { label: "Integrations", render: (r) => (r.integrations || []).join(", ") },
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
  $("prosper-main-users").innerHTML = users.map((user) => `<span class="token">${user.name}</span>`).join("");
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
    { label: "Scheduling", render: (r) => r.scheduling?.type || r.scheduling || "" },
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
    ["all", "All"],
    ["active", "Active"],
    ["stale", "Stale"],
    ["dormant", "Dormant"],
  ];
  $("chips").innerHTML = chips
    .map(([id, label]) => `<button class="chip ${state.filter === id ? "active" : ""}" data-filter="${id}">${label}</button>`)
    .join("");
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      render();
    });
  });
}

function render() {
  const { data } = state;
  $("updated").textContent = `Updated ${data.generatedAt}`;
  renderChips();
  renderKpis(data);
  renderAccounts(data);
  renderCards(data);
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
    $("search").addEventListener("input", (event) => {
      state.query = event.target.value.trim();
      render();
    });
    render();
  });
