# Security & Secret Scan — 2026-06-30

## Scope
- Repository: `prosperenergy/ghl-prospershield`
- Scan focus: hardcoded secrets, unsafe patterns, exposed config, dependency risks
- Change policy: additive only, no code or infra mutation

## Summary
- Hardcoded secret values: **none detected**
- Unsafe/high-risk patterns: **3 findings**
- Dependency/composition risks: **1 finding**

## Findings

### 1) Hardcoded local environment and filesystem paths in build pipeline
- **Severity:** Medium
- **Evidence:** `/home/runner/work/ghl-prospershield/ghl-prospershield/scripts/build-ghl-live-map.mjs:4`, `:5`, `:6`, `:7`, `:34`, `:35`, `:45`, `:46`
- **Risk:** Reveals operator-specific local pathing and tightly couples automation to one workstation layout; scheduled/CI execution fails when those paths do not exist.
- **Remediation:** Move paths to environment variables with safe defaults, validate required inputs at startup, and fail with non-sensitive error messages.

### 2) Unsanitized `innerHTML` rendering from JSON-backed content
- **Severity:** High
- **Evidence:** `/home/runner/work/ghl-prospershield/ghl-prospershield/app.js:43`, `:59`, `:91`, `:109`, `:128`, `:153`, `:158`, `:233`, `:307`
- **Risk:** If upstream JSON/content is ever tampered, dynamic HTML injection could enable stored XSS in the public map UI.
- **Remediation:** Replace `innerHTML` templating with safe DOM construction/escaping, enforce strict content encoding, and treat all data fields as untrusted input.

### 3) No repository-managed browser security headers
- **Severity:** Medium
- **Evidence:** Missing `netlify.toml` and missing `_headers` file in repository root/public paths.
- **Risk:** Without explicit CSP/frame/referrer hardening in repo-controlled config, browser-side exploit impact (including XSS) is higher.
- **Remediation:** Add repository-managed response headers (at minimum CSP, `X-Frame-Options` or `frame-ancestors`, `Referrer-Policy`, `Permissions-Policy`), then validate in deployed responses.

### 4) Dependency risk visibility gap (no dependency manifest/lockfile in repo root)
- **Severity:** Low
- **Evidence:** No `package.json`, `pnpm-lock.yaml`, `yarn.lock`, `requirements*.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, or equivalent manifest at repository root.
- **Risk:** Automated SCA/CVE monitoring and SBOM generation are limited for this repository snapshot.
- **Remediation:** Add/commit the authoritative dependency manifest(s) and lockfile(s) for the runtime/tooling actually used by this project.

## Validation Notes
- Baseline command `node scripts/build-ai-index.mjs` completed successfully.
- Baseline command `node scripts/build-ghl-live-map.mjs` failed due to missing local env file path dependency (see Finding #1 evidence).
- No test files were detected in this repository snapshot.

## Recommended Next Actions (Human Review)
1. Prioritize remediation for Finding #2 (XSS hardening).
2. Decouple local paths in `build-ghl-live-map.mjs` to make scheduled automation portable.
3. Add explicit site security headers in repository-managed config.
4. Add dependency manifest/lockfile coverage for reliable vulnerability monitoring.
