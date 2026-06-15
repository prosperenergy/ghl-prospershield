# Prosper GHL AI Context

Use this page when injecting the Prosper Shield GHL map into an AI assistant.

## What This Makes Possible

If an AI can read this page and the linked data files, it can answer Prosper-specific questions about GoHighLevel, Make.com, n8n, Telnyx, Supabase, GitHub, Netlify, Cloudflare, Monday, Gemini, Redis, 1Password, Setmore, SignNow, and related connector surfaces. It can also explain how a route is set up, what is working, what needs attention, and what the next safe setup step is.

## Primary Sources

Load these in this order:

1. AI context: https://ghl.prospershield.io/ai-context.md
2. Full JSON source of truth: https://ghl.prospershield.io/data/ghl-live-map.json
3. AI index: https://ghl.prospershield.io/data/ai-index.json
4. Markdown report: https://ghl.prospershield.io/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md
5. Searchable human site: https://ghl.prospershield.io/

## Operating Rules For Any AI

- Treat `data/ghl-live-map.json` as the source of truth.
- Use the Markdown report for plain-English backup and table summaries.
- Never invent token values, passwords, bearer strings, webhook URLs, or credential material.
- Raw secret values are intentionally unavailable and must stay unavailable.
- Use credential ref names, validation status, public handling, connector purpose, and route notes.
- Do not recommend customer sends, outbound SMS, SMS fallback, public posts, workflow activation, billing changes, deletes, permission changes, or live outbound tests unless Craig explicitly approves that exact action.
- If a setup answer needs a secret value, say which credential ref is needed and where it belongs, without guessing the value.
- If the data says a system needs reauth or is present-not-tested, state that plainly.
- Prefer direct, plain-English answers for operators who do not understand the technical pieces.

## Current Prosper Map Totals

- GHL subaccounts: 12
- Contacts/leads: 121,396
- Opportunities: 19,659
- Credential systems mapped: 16
- Credential refs listed: 248
- Connector route rows: 16
- n8n workflows: 16
- Make scenarios: 10
- Telnyx phone numbers: 14

## How To Answer Setup Questions

When asked how to set something up, answer in this shape:

1. System: name the system or route.
2. Current state: say whether it is validated, needs reauth, stale, present-not-tested, or blocked.
3. Existing refs: list the relevant credential refs by name only.
4. Route: explain source -> connector -> target in plain English.
5. Risk: call out any safety freeze, auth gap, phone risk, or missing scope.
6. Next safe step: give a non-destructive step first, such as verify auth, check a dashboard, confirm a ref exists, or run a read-only test.

## Most Useful JSON Paths

- GHL subaccounts and ownership signals: `accounts[]`
- Credential systems: `credentialMap.systems[]`
- Connector routes: `credentialMap.routes[]`
- Credential ref details: `credentialMap.details[]`
- n8n workflows: `n8n.workflows[]`
- Make scenarios/hooks/connections: `make.scenarios[]`, `make.hooks[]`, `make.connections[]`
- Telnyx numbers/profiles/connections: `telnyx.phoneNumbers[]`, `telnyx.messagingProfiles[]`, `telnyx.connections[]`
- Safety rules: `safety`
- Phone risk list: `phoneRisks[]`

## Systems Needing Attention

- Setmore: needs-reauth. SETMORE_API_KEY is present but the tested services endpoint returned HTTP 401.
- Assistable / Voice AI: present-not-tested. Assistable refs exist and connect to voice/AI call paths through Telnyx/n8n.
- Other Prosper AI/vendor keys: present-not-tested. Refs are present in the Prosper env registry. They are not core to the GHL live map and were not exercised in this run.

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
