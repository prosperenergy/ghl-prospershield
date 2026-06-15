# Prosper GHL Live Map

Static searchable inventory for Prosper's HighLevel, Make.com, n8n, and Telnyx connection map.

Generated from read-only live pulls. The published data intentionally redacts webhook URLs, API tokens, secrets, and credential material.

## Public Entry Points

- Site: https://ghl.prospershield.io
- AI context / prompt: https://ghl.prospershield.io/ai-context.md
- AI index: https://ghl.prospershield.io/data/ai-index.json
- Full data: https://ghl.prospershield.io/data/ghl-live-map.json
- LLM guide: https://ghl.prospershield.io/llms.txt
- Markdown report: https://ghl.prospershield.io/docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md

## Local Source

- `data/ghl-live-map.json`
- `ai-context.md`
- `data/ai-index.json`
- `llms.txt`
- `docs/GHL_FULL_LIVE_CONNECTION_MAP_2026-06-14.md`
- `scripts/build-ghl-live-map.mjs`
- `scripts/build-ai-index.mjs`

## Interface Notes

- Light and dark mode are both supported.
- The first screen starts with plain-English summaries, needs-attention cards, and a glossary.
- Search works across account names, phone numbers, connector routes, credential refs, auth statuses, workflow names, and system names.
- Machine-readable files are designed for AI agents to answer questions without scraping the visual page. For another AI, attach `ai-context.md` first and then the JSON data file.

No customer sends, SMS fallback, workflow activations, public posts, billing changes, permission changes, deletes, or outbound tests were performed.
