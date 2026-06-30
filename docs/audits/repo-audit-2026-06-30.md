# Repo Audit — ghl-prospershield — 2026-06-30

**Auditor:** Burtha (Prosper autonomous engineering agent)
**Date:** 2026-06-30
**Repo:** `prosperenergy/ghl-prospershield`
**Branch audited:** `copilot/repo-audit-2026-06-30` (HEAD `8ffbd9d`)
**Data snapshot:** `data/ghl-live-map.json` generated 2026-06-15T01:09:32Z

---

## 1. Purpose

`ghl-prospershield` is a **read-only, publicly hosted inventory** of Prosper's GoHighLevel, Make.com, n8n, Telnyx, Supabase, Cloudflare, and related connector surfaces. It publishes a searchable single-page app at `https://ghl.prospershield.io` (Netlify / Cloudflare DNS) with fully redacted credential values.

Machine-readable companions (`ai-context.md`, `data/ghl-live-map.json`, `data/ai-index.json`, `llms.txt`) allow AI agents to answer operator questions without scraping the visual page. No customer sends, SMS fallback, workflow activations, or write operations are performed by this repo.

---

## 2. Structure

```
ghl-prospershield/
├── index.html            # SPA shell
├── app.js                # Vanilla-JS render logic (~380 LOC)
├── styles.css            # Theme + layout CSS
├── ai-context.md         # AI ingestion primer (generated)
├── llms.txt              # LLM guide (generated)
├── robots.txt            # robots.txt (generated)
├── sitemap.xml           # Sitemap (generated)
├── data/
│   ├── ghl-live-map.json # Primary source of truth (~large)
│   └── ai-index.json     # AI-index summary (generated)
├── docs/
│   └── GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md
├── scripts/
│   ├── build-ghl-live-map.mjs   # Pulls live data; builds ghl-live-map.json + docs
│   └── build-ai-index.mjs       # Derives ai-context.md, ai-index.json, llms.txt, etc.
├── wiki/
│   ├── Home.md
│   └── GHL-Full-Live-Connection-Map.md
└── .github/
    └── copilot-instructions.md
```

**No `package.json`, no `netlify.toml`, no `.gitignore`, no CI/CD workflow files.**

---

## 3. Dependencies

| Layer | Dependency | Version pinned? |
|---|---|---|
| Runtime (browser) | Vanilla JS — no frameworks | N/A |
| Build scripts | Node.js ESM (`node:fs`, `node:path`) | No engine spec |
| Hosting | Netlify (static publish, no build command configured in repo) | Not declared in repo |
| DNS | Cloudflare | External |

There is no `package.json`, so there are **no versioned dependencies, no lock file, and no reproducible build environment** declared in the repo.

---

## 4. CI/CD

**No GitHub Actions workflows exist in `.github/workflows/`.**

Deployment appears to be Netlify auto-deploy from the `main` branch (common Netlify default), but no `netlify.toml` is present in the repo to confirm or configure it.

The two build scripts (`scripts/build-ghl-live-map.mjs`, `scripts/build-ai-index.mjs`) are designed to run manually on a specific developer machine — `build-ghl-live-map.mjs` has hardcoded absolute paths tied to a single Mac (see §5, Risk #2). There is no automated data refresh pipeline.

---

## 5. Health Snapshot (from `data/ghl-live-map.json` as of 2026-06-15)

### 5.1 Totals

| Metric | Count |
|---|---|
| GHL sub-accounts | 12 (4 active, 4 stale, 4 dormant) |
| Contacts / leads | 121,396 |
| Opportunities | 19,659 |
| Credential systems | 16 |
| Credential refs | 248 |
| Connector routes | 16 |
| n8n workflows | 16 (7 active, **9 inactive**) |
| Make scenarios | 10 (2 active, **8 inactive**) |
| Telnyx phone numbers | 14 (**0 A2P verified**) |

### 5.2 Credential / Auth Issues

| System | Status | Note |
|---|---|---|
| Setmore | `needs-reauth` | `SETMORE_API_KEY` present; services endpoint returned HTTP 401 |
| Assistable / Voice AI | `present-not-tested` | Refs exist; connected to Telnyx/n8n voice paths |
| Other Prosper AI/vendor keys | `present-not-tested` | Present in env registry; not exercised in last run |

### 5.3 Phone Risks

- **A2P 10DLC incomplete/failed**: Andrew Brown, Daniel Tirri, Jeff Restel, Scott.
- **Needs phone configuration**: Cole Stallard, Garett Eackelbary, Junnie, Sandbox.
- **No Data despite LC Phone card**: Danny, Nelson Mousques.
- **Outbound send freeze active** (policy guardrail — no sends without Craig's explicit approval).

### 5.4 Access Limits

- GHL API scope only fully covers PROSPER MAIN; non-main subaccounts use browser inventory.
- 1Password CLI was present but not signed in during last data capture.
- Telnyx 10DLC brand/campaign probes returned `10005 resource-not-found`.

---

## 6. Risks

### 🔴 HIGH

**R1 — No CI/CD; no automated validation.**
No GitHub Actions exist. Broken HTML, malformed JSON, or JavaScript regressions will reach the public site undetected. A single bad merge can silently break `ghl.prospershield.io`.

**R2 — Hardcoded absolute local paths in `scripts/build-ghl-live-map.mjs`.**
- `scripts/build-ghl-live-map.mjs:4` — `const root = "/Volumes/Samgsung T9/04_Fleet-Ops/ghl";`
- `scripts/build-ghl-live-map.mjs:7` — `const wikiDir = "/Users/craigstratton/prosper-brain/wiki/sales";`
- `scripts/build-ghl-live-map.mjs:34,44` — env file path `/Users/craigstratton/.config/prosper/prosper.env`

The data collection script only runs on one specific Mac. If that machine is unavailable, the live map cannot be refreshed. This is a single point of failure for the public inventory.

### 🟠 MEDIUM

**R3 — Setmore needs-reauth (`needs-reauth`).**
`SETMORE_API_KEY` returns HTTP 401. Any automation route relying on Setmore is currently broken.

**R4 — Zero A2P 10DLC verified phone numbers (0 of 14).**
All 14 Telnyx numbers lack A2P verification. This blocks compliant outbound SMS across the entire fleet when the SMS freeze is eventually lifted. Carrier filtering/blocking risk is high.

**R5 — No `.gitignore`.**
Generated files (`ai-context.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `data/ai-index.json`) are committed to the repo alongside source. If a developer runs the build scripts locally they may accidentally overwrite or diverge these files.

### 🟡 LOW

**R6 — Data staleness.**
`ghl-live-map.json` was last generated 2026-06-15 (15 days ago). There is no automated refresh, so the public map drifts from reality over time.

**R7 — 9/16 n8n workflows inactive; 8/10 Make scenarios inactive.**
A large portion of automation is dormant. This may be intentional, but there is no documentation of which are intentionally off vs. pending activation.

**R8 — No `package.json` / engine declaration.**
The build scripts require a specific Node.js version (ESM `import`, top-level `await` patterns) but the required version is not declared. Future contributors may run scripts on incompatible Node versions.

---

## 7. Missing Tests

| Area | Gap |
|---|---|
| `app.js` render logic | No automated tests (no test framework, no test files) |
| `scripts/build-ai-index.mjs` | No unit tests for index generation, schema validation, or secret-pattern checks |
| `scripts/build-ghl-live-map.mjs` | No unit tests for data transformation, redaction, or env parsing |
| JSON schema | `data/ghl-live-map.json` has no schema file; structural regressions are invisible |
| HTML validity | No automated HTML linting or link checking |
| Public URL health | No uptime monitoring or smoke tests for `ghl.prospershield.io` |

---

## 8. Missing Documentation

| Gap | Impact |
|---|---|
| No build / run instructions in README | New contributors cannot run scripts without reading source |
| No deployment guide | No documented path from commit to `ghl.prospershield.io` |
| No CONTRIBUTING.md | No guidance on data refresh cadence, branching, or PR conventions |
| Inactive n8n workflows / Make scenarios not annotated | Cannot tell which are intentionally off vs. broken |
| `docs/` only contains one snapshot report (2026-06-14) | Hard to track what changed across refreshes |

---

## 9. Five Prioritized Recommendations

### P1 — Add a `package.json` and a minimal GitHub Actions CI workflow *(HIGH impact, LOW risk)*

Create a `package.json` with a `node` engine field and an `engines` constraint. Add a `.github/workflows/ci.yml` that runs on push/PR to validate:
- JSON syntax for `data/ghl-live-map.json` and `data/ai-index.json`
- `node --check app.js` and the two build scripts
- HTML validity (`html-validate` or `nu`)

This eliminates silent breakage on the public site and gives the team confidence before merges.

### P2 — Externalize hardcoded paths in `build-ghl-live-map.mjs` *(HIGH impact, MEDIUM risk)*

Replace the four hardcoded absolute paths (see R2) with environment variables (e.g., `PROSPER_DATA_ROOT`, `PROSPER_WIKI_DIR`, `PROSPER_ENV_FILE`). Document them in README. This makes the data-refresh script portable (runnable in CI or on any team machine) and removes the single-Mac dependency.

### P3 — Resolve Setmore `needs-reauth` *(MEDIUM impact, LOW risk)*

Rotate the Setmore API key (credential ref: `SETMORE_API_KEY`). Store the new value in the appropriate secret store (Supabase `app_secrets` / 1Password). Re-run `build-ghl-live-map.mjs` to confirm the services endpoint returns 200 and update `validation` to `validated` in the next map snapshot.

### P4 — Add a `.gitignore` and document generated vs. source files *(LOW impact, LOW risk)*

Add a `.gitignore` that ignores common Node.js artifacts (`node_modules/`, `*.log`). Add a comment at the top of `README.md` distinguishing which files are committed as source (`index.html`, `app.js`, `styles.css`, `scripts/`) versus generated artifacts (`ai-context.md`, `llms.txt`, `robots.txt`, `sitemap.xml`, `data/ai-index.json`). This prevents accidental overwrite and clarifies the data flow.

### P5 — Add a JSON schema for `ghl-live-map.json` and a validation step *(MEDIUM impact, LOW risk)*

Create `data/ghl-live-map.schema.json` (JSON Schema draft-07) that captures required top-level keys (`generatedAt`, `safety`, `totals`, `accounts`, `credentialMap`, `n8n`, `make`, `telnyx`, etc.). Add `ajv` as a dev dependency and a `validate` npm script. Include the validation in CI (P1). This catches structural regressions in the data before they reach the public site.

---

## 10. Summary Table

| Area | Status |
|---|---|
| Purpose / intent | ✅ Clear, well-documented |
| Secret handling | ✅ Values redacted; refs only in public data |
| CI/CD | ❌ None |
| Tests | ❌ None |
| Dependencies | ⚠️ No `package.json`; build scripts are local-only |
| Auth health | ⚠️ 3 systems non-ready; Setmore needs-reauth |
| Phone compliance | ⚠️ 0/14 numbers A2P verified |
| Data freshness | ⚠️ 15 days since last refresh (2026-06-15) |
| Documentation | ⚠️ Missing build/deploy/contributing docs |
| Overall risk | 🟠 Medium — public site can break silently; no safety net |

---

*This audit is additive and read-only. No production data, secrets, credentials, SMS, DNS, auth, or customer-facing changes were made. For review by Craig / Sam before any action is taken.*
