# Repo Audit — ghl-prospershield — 2026-07-11

**Auditor:** Burtha (Prosper autonomous engineering agent)
**Date:** 2026-07-11
**Repo:** `prosperenergy/ghl-prospershield`
**Branch audited:** `copilot/burtha-auto-dependency-check` (HEAD `7f80b97`)
**Data snapshot:** `data/ghl-live-map.json` generated 2026-06-15T01:09:32Z

---

## 1. Purpose

`ghl-prospershield` is a **read-only, publicly hosted inventory** of Prosper's GoHighLevel, Make.com, n8n, Telnyx, Supabase, Cloudflare, and related connector surfaces. It publishes a searchable single-page app at `https://ghl.prospershield.io` (Netlify / Cloudflare DNS) with fully redacted credential values.

---

## 2. Changes Since Last Audit (2026-06-30)

Two commits landed on `main` between the last audit and today:

| SHA | Message | Impact |
|---|---|---|
| `89e6b37` | Harden app rendering against XSS (#6) | Security: added `escapeHtml()` before all `innerHTML` template calls in `app.js`; entire repo committed (initial commit pattern) |
| `7f80b97` | docs: add repo audit 2026-06-30 to docs/audits/ (#2) | Documentation: added prior audit files |

The XSS hardening commit (PR #6) also contained the first commit of the full repository, so all files (including `scripts/build-ghl-live-map.mjs`) were newly introduced in that commit in this branch.

---

## 3. Prior Audit Risk Follow-Up

Status of each risk identified in `docs/audits/repo-audit-2026-06-30.md`:

| Risk | Prior severity | Status | Notes |
|---|---|---|---|
| R1 — No CI/CD | 🔴 HIGH | ❌ **Open** | No `.github/workflows/` directory exists. |
| R2 — Hardcoded absolute paths in build script | 🔴 HIGH | ✅ **Resolved** | `scripts/build-ghl-live-map.mjs:5–14` now uses `path.dirname(fileURLToPath(import.meta.url))` and resolves paths relative to the repo root. `PROSPER_ENV_PATH` env var is respected (line 72); no Mac-specific `/Users/` or `/Volumes/` paths remain. |
| R3 — Setmore `needs-reauth` | 🟠 MEDIUM | ❌ **Open** | `data/ghl-live-map.json` still records `needs-reauth` for Setmore; data is 26 days old. |
| R4 — Zero A2P 10DLC verified numbers | 🟠 MEDIUM | ❌ **Open** | `totals.telnyxVerifiedNumbers` = 0; all 14 Telnyx numbers remain unverified. |
| R5 — No `.gitignore` | 🟠 MEDIUM | ❌ **Open** | No `.gitignore` file exists. |
| R6 — Data staleness | 🟡 LOW | ⚠️ **Worsening** | Now 26 days stale (was 15 days at last audit). |
| R7 — Inactive automations | 🟡 LOW | ❌ **Open** | 9/16 n8n workflows inactive; 8/10 Make scenarios inactive. |
| R8 — No `package.json` | 🟡 LOW | ❌ **Open** | No `package.json`, no lock file, no engine declaration. |

Prior security scan findings (`docs/audits/security-scan-2026-06-30.md`):

| Finding | Prior severity | Status | Notes |
|---|---|---|---|
| #1 — Hardcoded local paths | Medium | ✅ **Resolved** | Paths are now relative/env-driven; see R2 above. |
| #2 — Unsanitized `innerHTML` | High | ✅ **Addressed** | `app.js` now calls `escapeHtml()` on all data before `innerHTML` template strings. All user-visible values are HTML-escaped. |
| #3 — No browser security headers | Medium | ❌ **Open** | No `netlify.toml` or `_headers` file present. |
| #4 — No dependency manifest / lockfile | Low | ❌ **Open** | No `package.json` or equivalent. |

---

## 4. Current Health Snapshot

Data source: `data/ghl-live-map.json` generated **2026-06-15T01:09:32Z** (26 days stale as of audit date).

### 4.1 Totals

| Metric | Count | Delta vs. 2026-06-30 audit |
|---|---|---|
| GHL sub-accounts | 12 (4 active, 4 stale, 4 dormant) | No change |
| Contacts / leads | 121,396 | No change |
| Opportunities | 19,659 | No change |
| Credential systems | 16 | No change |
| Credential refs | 248 | No change |
| Connector routes | 16 | No change |
| n8n workflows | 16 (7 active, **9 inactive**) | No change |
| Make scenarios | 10 (2 active, **8 inactive**) | No change |
| Telnyx phone numbers | 14 (**0 A2P verified**) | No change |

No changes in any count — the live map data has not been refreshed since the last audit.

### 4.2 Credential / Auth Issues (unchanged)

| System | Status | Note |
|---|---|---|
| Setmore | `needs-reauth` | `SETMORE_API_KEY` returned HTTP 401 at last capture |
| Assistable / Voice AI | `present-not-tested` | Refs exist; connect to Telnyx/n8n voice paths |
| Other Prosper AI/vendor keys | `present-not-tested` | Present in env registry; not exercised in last run |

### 4.3 Automation Status

**n8n workflows — 7 active / 9 inactive:**

| Status | Workflow | Nodes |
|---|---|---|
| ✅ Active | GHL Outbound AI Call → Assistable | 5 |
| ✅ Active | Hanna AI — Voice Agent (Telnyx + Gemini) | 11 |
| ✅ Active | Hanna Post-Call Sync | 33 |
| ✅ Active | Maddi Social Auto-Poster — Intake + OAuth Gates | 5 |
| ✅ Active | PRO-1: Daily Retry — Re-send to Non-Responders | 6 |
| ✅ Active | PRO-1: Telnyx Inbound SMS → Lead Response Handler | 8 |
| ✅ Active | Telnyx Inbound SMS → GHL | 8 |
| ⚪ Inactive | Cold Engine — 5-touch cadence | 6 |
| ⚪ Inactive | Hanna AI — SMS Handler (Gemini) | 9 |
| ⚪ Inactive | Hanna AI — SMS Poller (Gemini) | 6 |
| ⚪ Inactive | Hanna AI — SMS Poller v2 (Gemini) | 9 |
| ⚪ Inactive | LeadStrike — GHL Contact Webhook Relay | 2 |
| ⚪ Inactive | LeadStrike — New GHL Contact Monitor | 5 |
| ⚪ Inactive | Outbound SMS via Telnyx | 5 |
| ⚪ Inactive | Prosper Social Auto-Poster | 6 |
| ⚪ Inactive | Reactivation — Inbound SMS Handler | 17 |

**Make scenarios — 2 active / 8 inactive:**

| Status | Scenario |
|---|---|
| ✅ Active | New Contract -> AI Extract Fields and Update Monday |
| ✅ Active | Prosper Quote Intake - Internal Proof |
| ⚪ Inactive | create new install Project |
| ⚪ Inactive | create new install Project Ecovole |
| ⚪ Inactive | Install Updates |
| ⚪ Inactive | Install Updates Ecovole |
| ⚪ Inactive | Integration GoHighLevel |
| ⚪ Inactive | Monday.com -> GHL Sync |
| ⚪ Inactive | New scenario |
| ⚪ Inactive | Prosper AI Command Router - Internal Proof |

### 4.4 Phone Risks (unchanged)

- **A2P 10DLC incomplete/failed**: Andrew Brown (2 numbers), Daniel Tirri (2 numbers), Jeff Restel (1 number), Scott (1 number).
- **Needs phone configuration**: Cole Stallard, Garett Eackelbary, Junnie, Sandbox.
- **No data despite LC Phone card**: Danny, Nelson Mousques.
- **Outbound send freeze active** — policy guardrail; no sends without Craig's explicit approval.

---

## 5. Code Quality Check

The following checks were run in the audit environment:

| Check | Result |
|---|---|
| `node --check app.js` | ✅ Pass — no syntax errors |
| `node scripts/build-ai-index.mjs` | ✅ Pass — generates `ai-context.md`, `data/ai-index.json`, `llms.txt`, `robots.txt`, `sitemap.xml` cleanly |
| `node scripts/build-ghl-live-map.mjs` | ℹ️ Not run — requires live API credentials in env; falls back gracefully to existing `data/ghl-live-map.json` when env is absent (`readEnvEntries()` line 71–84) |
| Secret scan | ✅ Pass — no raw secret values detected in any committed file |
| `data/ghl-live-map.json` JSON validity | ✅ Valid |

---

## 6. New Risks This Cycle

### 🟠 MEDIUM

**R9 — `innerHTML` used with `escapeHtml()` — safe but fragile pattern.**

PR #6 resolved the raw XSS risk by wrapping all data in `escapeHtml()` before interpolating into `innerHTML` template strings. The `escapeHtml()` function at `app.js:30–37` correctly escapes `&`, `<`, `>`, `"`, and `'`. However, the pattern requires every future contributor to remember to call `escapeHtml()` on every new field they add. There is no linter rule or test to enforce it. A single omission in a future PR would reintroduce XSS. Consider a linting rule (e.g., `no-unsanitized` ESLint plugin) or migrating to DOM API construction (`document.createElement` + `textContent`) to make safe rendering structural rather than optional.
- **Evidence:** `app.js:55–303` — innerHTML used throughout with escapeHtml wrapping
- **Remediation:** Add `eslint-plugin-no-unsanitized` and configure it to reject `innerHTML` assignments that do not call `escapeHtml`. Alternatively, refactor critical render paths to use DOM construction.

**R10 — Data staleness now at 26 days; drift accelerating.**

The live map was last generated on 2026-06-15, 26 days before this audit. The previous audit noted 15 days. Without a scheduled refresh, the gap will widen indefinitely. The public site (`ghl.prospershield.io`) is presenting potentially incorrect contact counts, auth statuses, and phone configurations.
- **Evidence:** `data/ghl-live-map.json` → `generatedAt: 2026-06-15T01:09:32.083Z`
- **Remediation:** Establish a scheduled refresh cadence (weekly at minimum). Even a manual reminder (calendar event) would help until an automated pipeline is feasible.

### 🟡 LOW

**R11 — `build-ghl-live-map.mjs` reads `HOME` environment variable for default env path.**

`scripts/build-ghl-live-map.mjs:72` — `process.env.HOME || ""` is used to construct the default env file path. In containerized or restricted CI environments, `HOME` may be unset or point to `/root`, causing a silent no-op fallback to the repository snapshot. This is safe (the script falls back gracefully) but may be surprising.
- **Evidence:** `scripts/build-ghl-live-map.mjs:72`
- **Remediation:** Document the fallback behavior in README alongside the `PROSPER_ENV_PATH` env var usage.

---

## 7. Open Items Summary

| # | Item | Severity | First noted |
|---|---|---|---|
| R1 | No CI/CD (no GitHub Actions) | 🔴 HIGH | 2026-06-30 |
| R3 | Setmore `needs-reauth` | 🟠 MEDIUM | 2026-06-30 |
| R4 | Zero A2P 10DLC verified phone numbers | 🟠 MEDIUM | 2026-06-30 |
| R5 | No `.gitignore` | 🟠 MEDIUM | 2026-06-30 |
| R7 | 9/16 n8n + 8/10 Make automations inactive, undocumented | 🟡 LOW | 2026-06-30 |
| R8 | No `package.json` / engine declaration | 🟡 LOW | 2026-06-30 |
| Security #3 | No browser security headers (`netlify.toml` / `_headers`) | 🟠 MEDIUM | 2026-06-30 |
| R9 | `innerHTML` + `escapeHtml()` pattern has no linter guard | 🟠 MEDIUM | 2026-07-11 |
| R10 | Data staleness at 26 days and growing | 🟠 MEDIUM | 2026-07-11 |
| R11 | `HOME` fallback in build script undocumented | 🟡 LOW | 2026-07-11 |

---

## 8. Resolved Items (Since 2026-06-30)

| Item | Resolution |
|---|---|
| R2 — Hardcoded absolute Mac paths | ✅ Resolved in PR #6 — paths now relative/env-driven |
| Security #1 — Local filesystem path leakage | ✅ Resolved in PR #6 |
| Security #2 — Unsanitized `innerHTML` | ✅ Addressed in PR #6 — `escapeHtml()` applied consistently |

---

## 9. Prioritized Recommendations

### P1 — Add `.github/workflows/ci.yml` for push/PR validation *(HIGH impact, LOW risk)*

A minimal workflow running `node --check app.js`, `node scripts/build-ai-index.mjs`, and `python3 -m json.tool data/ghl-live-map.json > /dev/null` would catch syntax errors before they reach `ghl.prospershield.io`. No secrets required for these checks.

### P2 — Add browser security headers via `_headers` or `netlify.toml` *(MEDIUM impact, LOW risk)*

A `_headers` file at the repo root is the simplest Netlify-compatible path. Minimum recommended headers: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`. No credentials involved.

### P3 — Add `eslint-plugin-no-unsanitized` to guard the `innerHTML` pattern *(MEDIUM impact, LOW risk)*

Install the plugin and configure it to reject unguarded `innerHTML` assignments. Include it in CI (P1). This makes the XSS fix introduced in PR #6 structurally permanent rather than convention-dependent.

### P4 — Establish a live-map refresh cadence and document it *(MEDIUM impact, LOW risk)*

Add a section to README stating the intended refresh schedule and the `PROSPER_ENV_PATH` / `node scripts/build-ghl-live-map.mjs` invocation. Even documenting a weekly manual step is better than the current undocumented drift.

### P5 — Annotate inactive n8n and Make automations *(LOW impact, LOW risk)*

Add comments or a short table to `README.md` (or a new `docs/automation-status.md`) listing which workflows/scenarios are intentionally inactive vs. pending activation. Prevents future confusion and makes the Needs-Attention count in the UI easier to interpret.

---

## 10. Summary Table

| Area | Status | Delta |
|---|---|---|
| Purpose / intent | ✅ Clear, well-documented | — |
| Secret handling | ✅ Values redacted; refs only in public data | — |
| XSS protection | ✅ `escapeHtml()` applied throughout | ✅ Improved (PR #6) |
| Hardcoded paths | ✅ Resolved | ✅ Improved (PR #6) |
| CI/CD | ❌ None | No change |
| Tests | ❌ None | No change |
| Browser security headers | ❌ Missing | No change |
| Dependencies | ⚠️ No `package.json` | No change |
| Auth health | ⚠️ Setmore needs-reauth; 2 systems present-not-tested | No change |
| Phone compliance | ⚠️ 0/14 numbers A2P verified | No change |
| Data freshness | ⚠️ 26 days stale (↑ from 15 days) | ⬇️ Worsening |
| Inactive automations | ⚠️ 9/16 n8n + 8/10 Make inactive | No change |
| Overall risk | 🟠 Medium — XSS resolved; CI gap and data drift remain | Slightly improved |

---

*This audit is additive and read-only. No production data, secrets, credentials, SMS, DNS, auth, money movement, or customer-facing changes were made. For review by Craig / Sam before any action is taken.*
