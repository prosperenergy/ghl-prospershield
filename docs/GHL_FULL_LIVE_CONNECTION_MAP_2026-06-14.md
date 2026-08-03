# GHL Full Live Connection Map

Generated: 2026-07-11T05:30:21.119Z
Mode: read-only inventory. No customer sends, SMS fallback, workflow activations, public posts, billing changes, permission changes, deletes, or outbound tests were performed.

## Executive Summary

- GHL subaccounts visible: 12
- Contacts/leads visible: 121,396
- Visible opportunities: 19,659
- Active / stale / dormant accounts: 4 / 4 / 4
- PROSPER MAIN users: 47 total; 39 account users; 8 agency users; 19 admins
- Make.com: 10 scenarios, 10 hooks, 13 connections
- n8n: 16 workflows, 7 active
- Telnyx: 14 active phone numbers, 8 messaging profiles, 8 voice/SIP connections
- Credential/connector systems mapped: 16; credential refs listed: 246; route rows: 16

## Access And Limits

- HighLevel connector/API scope cannot yet read every subaccount deeply by API.
- 1Password CLI was present but not signed in in this shell.
- Agency browser routes supplied counts, last-login, and phone status for non-main locations.
- Telnyx brand and 10DLC campaign probes returned Telnyx 10005 resource-not-found on the tested endpoints, while env still contains brand/campaign identifiers.

## GHL Subaccounts

| Subaccount | ID | Last login | Activity | Contacts/leads | Opportunities | Visible phone | Phone status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Andrew Brown | rQxheT1tQDRnAsPwx4my | 2026-03-11 | Stale | 959 | 956 | +14344430305 | 2 phone numbers; A2P 10DLC incomplete/failed |
| Cole Stallard | S2HIAZD4LdIdHsm1hnYZ | 2026-06-09 | Active | 9551 | 4301 | +1 803-556-7450 | Requires phone system configuration; header showed CRM Phone Pro number +17029726492 |
| Daniel Tirri | uvn2fEzSON9SJ5Tvl58W | 2026-03-21 | Stale | 962 | 958 | +18439994606 | 2 phone numbers; A2P 10DLC incomplete/failed |
| Danny | l8LZRLuH4byt1cvfUMND | 2026-04-09 | Stale | 957 | 957 | +18035567450 | Phone System page showed No Data |
| Garett Eackelbary | PMX06M3dloyKTN3WCCun | 2026-06-09 | Active | 9180 | 1 | +13303293748 | Requires phone system configuration |
| Jeff Restel | ndKcgKpYa3UPmznS6ao1 | N/A | Dormant | 6146 | 0 | +18035567450 | 1 phone number; A2P 10DLC incomplete/failed |
| Junnie | 6QlWtYKs2UtwvqwoNlVQ | N/A | Dormant | 366 | 0 | +1 877 317 9079 | Requires phone system configuration |
| Nelson Mousques | liBBSRKm6JNuGoSkvQ1G | 2026-06-08 | Active | 5 | 2 | +1 803-556-7450 | Phone System page showed No Data |
| PROSPER MAIN | hU3tflAFRrVsoETFstfk | 2026-06-13 | Active | 92284 | 11527 | +18035567450 | API says LC phone active/under LC; A2P compliant; 15 phone numbers |
| Prosper Team | LW80mjJWwCPe8dFINhG0 | N/A | Dormant | 15 | Not rendered | 7073958984 | 1 phone number |
| Sandbox | zix3Qq3kD0tG9NmDgNs2 | 2025-06-30 | Dormant | 2 | Not rendered | +13049028155 | Requires phone system configuration |
| Scott | OxVnVhXGUiZQ4bBFcCdf | 2026-03-08 | Stale | 969 | 957 | 8035567450 | 1 phone number; A2P 10DLC incomplete/failed |

## Ownership And User Signals

The visible owner lane is the GHL subaccount name. PROSPER MAIN is the only subaccount currently readable deeply by API. It returned 47 users:

Abdourahamane Diallo, Abidemi Mary Adebayo, Akpaka Kenechukwu sandra, Amber Gant, Andy Herrmann, avi prosper, Brian Job, Chidinma Akpati, Cole Stallard, Collins Situma, Craig Stratton, Danny Laveaga, Elijah Sutton, Garett Eackelbary, Geoffrey Morris, Hanna a210code, Hanna a571areacode, Hanna a857areacode, Hanna Ai, Hanna area540code, Hanna Code202, Hanna Hanna304, Hanna Prosper, Hanna ProspershieldDOTio Ai, Hanna z803, Hanna zzz803, Hashim Sarfraz, Ibukun Akinsiku, Julie Iyamba, Kishorna Loftman, Laura Steepleton, Mike Von Rupp, Miranda Chepkorir, Monty Campbell, Nelson Mousques, Nurjehaan Schroeder, Olatoyan David, Otto Zelaya, PSO E2E Test 1772929336, PSO UI E2E 1772929405, Ricky Lelito, Ricky R, Sara Ai, Scott Crumb, Sodiq Oreoluwa, Victor Nyachae, Zackary Jackson

## PROSPER MAIN Phone Assignments

| Number | Friendly name | Linked user | Forwarding | Capabilities |
| --- | --- | --- | --- | --- |
| +14104987548 | Brian Job | Brian Job |  | voice/sms/mms |
| +15405834155 | Julie Iyamba | Julie Iyamba | +13049371183 | voice/sms/mms |
| +13092457451 | Abid Mary Adebayo | Abidemi Mary Adebayo |  | voice/sms/mms |
| +13049028155 | Abdourahamane Diallo | Abdourahamane Diallo | +13049371183 | voice/sms/mms |
| +15714548627 | Kishorna Loftman | Kishorna Loftman | +13049371183 | voice/sms/mms |
| +12109421906 | 210areacode hanna | Hanna a210code | +13049371183 | voice/sms/mms |
| +18035734080 | Nurjehaan Schroeder | Nurjehaan Schroeder | +13049371183 | voice/sms/mms |
| +18575988373 | Otto Zelaya | Otto Zelaya | +13049371183 | voice/sms/mms |
| +13368495577 | Ibukun Akinsiku | Ibukun Akinsiku |  | voice/sms/mms |
| +13017012389 | Akpaka Kenechukwu sandra | Akpaka Kenechukwu sandra |  | voice/sms/mms |
| +13098619729 | Chidinma Akpati | Chidinma Akpati |  | voice/sms/mms |
| +18038642641 | Olatoyan David | Olatoyan David | +13049371183 | voice/sms/mms |
| +19803516111 | Sodiq Oreoluwa | Sodiq Oreoluwa |  | voice/sms/mms |
| +12029727938 | Notifications Only | Hanna Code202 | +13049371183 | voice/sms/mms |
| +18773179079 | HANNA - Prosper AI | Hanna ProspershieldDOTio Ai | +13049371183 | voice/sms/mms |

## Phone Risks

- A2P incomplete or failed: Andrew Brown, Daniel Tirri, Jeff Restel, and Scott show incomplete/failed A2P 10DLC in the GHL phone system.
- Needs phone configuration: Cole Stallard, Garett Eackelbary, Junnie, and Sandbox require phone-system configuration from the GHL phone screens.
- No Data despite LC Phone card: Danny and Nelson Mousques have LC Phone managed indicators but the Phone System page rendered No Data.
- Outbound send freeze: Prosper policy/memory says no customer sends, SMS fallback, or public social blast should be fired without Craig's explicit go.

## GHL Browser Integration Pages

| Page | Captured signal |
| --- | --- |
| All Integrations | 42 Connect labels, 1 Connected, Google Calendar visible, plus Private Integrations, Conversation Providers, and Workflows entry points. |
| Private Integrations | API v2.0 page captured but rows did not render clearly in text extraction. |
| Conversation Providers | Page header captured but detailed providers did not render in text extraction. |
| App Marketplace | Marketplace Apps, Installed Apps, Settings, AI Agents, Support Tickets, and Templates visible. |
| Social Planner | Planner, Content, Comments, Statistics, Social Listening, Settings, and Socials visible. |
| Workflows | Automation Workflows, Overview Beta, and Global Workflow Settings visible. |

## Credential, Token, Connector, And Login Map

Raw token/password/login values are not published. This table maps the credential references, live auth status, connector purpose, and login state.

| System | Connector purpose | Status | Credential refs | Login/auth note |
| --- | --- | --- | --- | --- |
| GoHighLevel / HighLevel | GHL API + live browser session + Make/n8n GHL connections | validated | CRAIG_GHL_CONTACT_ID, GHL_API_BASE, GHL_API_KEY, GHL_API_TOKEN, GHL_AUTH_SECRET, GHL_CLIENT_ID, GHL_CLIENT_SECRET, GHL_COMPANY_ID, GHL_LOCATION_COLE, GHL_LOCATION_ID, GHL_SOCIAL_ACCOUNT_MAP, GHL_WEBHOOK_SECRET, GHL_WEBHOOK_URL, GHL_WEBHOOK_URL_OLD | Browser session worked; API token read PROSPER MAIN location/users. Agency-wide API scope still limited for non-main subaccounts. |
| Make.com | Make API + Make scenarios/hooks/connections | validated | MAKE_API_BASE, MAKE_API_HOSTNAME, MAKE_API_KEY, MAKE_API_TOKEN_OP, MAKE_API_USERNAME, MAKE_HOOK_QUOTE_INTAKE, MAKE_HOOK_QUOTE_INTAKE_HOST, MAKE_HOOK_SECRET, MAKE_ORG_ID, MAKE_QUOTE_INTAKE_HOOK_ID, MAKE_QUOTE_INTAKE_SCENARIO_ID, MAKE_QUOTE_INTAKE_WEBHOOK_OP, MAKE_REGION, MAKE_TEAM_ID | MAKE_API_KEY returned HTTP 200. MAKE_API_TOKEN_OP previously returned 401 and should be treated as stale or vault-only until reauthorized. |
| n8n | n8n REST API + webhook workflow refs | validated | N8N_API_KEY, N8N_MCP_TOKEN, N8N_MCP_URL, N8N_URL, N8N_WEBHOOK_INBOUND_SMS, N8N_WEBHOOK_OUTBOUND_CALL, N8N_WEBHOOK_OUTBOUND_SMS, N8N_WEBHOOK_VOICE_EVENTS, N8N_WF_INBOUND_SMS, N8N_WF_OUTBOUND_CALL, N8N_WF_OUTBOUND_SMS, N8N_WF_POST_CALL_SYNC | N8N_API_KEY returned HTTP 200 against workflows. |
| Telnyx | Telnyx Messaging, phone numbers, SIP, LiveKit/Assistable voice | validated | TELNYX_API_KEY, TELNYX_BRAND_ID, TELNYX_CAMPAIGN_ID, TELNYX_FQDN_ID, TELNYX_LIVEKIT_FQDN, TELNYX_MSG_PROFILE_ID, TELNYX_MSG_PROFILE_NAME, TELNYX_OVP_ID, TELNYX_OVP_NAME, TELNYX_PRIMARY_NUMBER, TELNYX_SIP_CONNECTION_ID, TELNYX_SIP_CONNECTION_NAME, TELNYX_SIP_PASSWORD, TELNYX_SIP_USERNAME, TELNYX_TCR_BRAND, TELNYX_TCR_CAMPAIGN | TELNYX_API_KEY returned HTTP 200 for phone numbers. SIP username/password refs exist but values are redacted. |
| Supabase | Supabase REST knowledge_base + agent_activity_log | validated | SUPABASE_ACCESS_TOKEN, SUPABASE_ANON_KEY, SUPABASE_DB_URL, SUPABASE_JWT_SECRET, SUPABASE_MINDFORGE_URL, SUPABASE_PUBLISHABLE_KEY, SUPABASE_SECRET_KEY, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_URL | SUPABASE_SERVICE_ROLE_KEY returned HTTP 200 and successfully updated the GHL knowledge base. |
| GitHub | GitHub CLI/API + prosperenergy shared user repo | validated | GH_TOKEN, GITHUB_COPILOT_TOKEN, GITHUB_MODELS_TOKEN, GITHUB_ORG, GITHUB_PAT, GITHUB_TOKEN | gh is authenticated as prosperenergy and pushed the ghl-prospershield repo. GitHub wiki is enabled; separate wiki remote did not accept pushes, so wiki source is committed under /wiki. |
| Netlify | Netlify API deploy + custom domain | validated | NETLIFY_AUTH_TOKEN, NETLIFY_PAT_CURRENT, NETLIFY_PAT_FULL_ACCESS, NETLIFY_PAT_HANNA, NETLIFY_PAT_MINDFORGE, NETLIFY_PAT_MINDFORGE_2, NETLIFY_PAT_MINDFORGE_SITE, NETLIFY_TEAM, NETLIFY_TEAM_ID | NETLIFY_AUTH_TOKEN returned HTTP 200 and deployed ghl.prospershield.io. |
| Cloudflare | Cloudflare DNS for prospershield.io | validated | CLOUDFLARE_API_TOKEN | CLOUDFLARE_API_TOKEN verified and created the CNAME for ghl.prospershield.io. |
| Monday.com | Monday API + Make connection + Prosper boards | validated | MONDAY_ACCOUNT_SLUG, MONDAY_API_KEY, MONDAY_BOARD_ID, MONDAY_INSTALL_PIPELINE_BOARD_ID, MONDAY_INSTALL_PIPELINE_BOARD_URL, MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_ID, MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_URL, MONDAY_INSTALL_PIPELINE_SUBITEMS_BOARD_ID, MONDAY_INSTALLER_BOARD_ID, MONDAY_KYC_BOARD_ID, MONDAY_OWNER_EMAIL, MONDAY_REP_BOARD_ID, MONDAY_SP_COL_ADDRESS, MONDAY_SP_COL_DAYS_IN_LANE, MONDAY_SP_COL_DEALER, MONDAY_SP_COL_EMAIL, MONDAY_SP_COL_FILING, MONDAY_SP_COL_HERO, MONDAY_SP_COL_KW, MONDAY_SP_COL_KYC, MONDAY_SP_COL_LANE, MONDAY_SP_COL_LAST_ACTIVITY, MONDAY_SP_COL_LAST_SMS, MONDAY_SP_COL_MODE, MONDAY_SP_COL_NAME, MONDAY_SP_COL_NEXT_ACTION, MONDAY_SP_COL_PDF, MONDAY_SP_COL_PHONE, MONDAY_SP_COL_REP, MONDAY_SP_COL_SOURCE, MONDAY_SP_COL_STATE, MONDAY_SP_COL_SUBMITTED, MONDAY_SP_COL_SUPABASE_ID, MONDAY_SP_COL_TRACKING, MONDAY_SP_COL_VALUE, MONDAY_TOKEN, MONDAY_WORKSPACE_ID | MONDAY_API_KEY returned HTTP 200 for the current user query. |
| Google / Gemini | Gemini API, Google OAuth clients, Google APIs | validated | BRAIN_GOOGLE_CLIENT_ID, BRAIN_GOOGLE_CLIENT_SECRET, BRAIN_GOOGLE_DESKTOP_CLIENT_ID, BRAIN_GOOGLE_DESKTOP_CLIENT_SECRET, BRAIN_GOOGLE_WEB_CLIENT_ID, BRAIN_GOOGLE_WEB_CLIENT_SECRET, GOOGLE_APPLICATION_CREDENTIALS, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CLOUD_PROJECT, GOOGLE_CLOUD_QUOTA_PROJECT, GOOGLE_MAPS_API_KEY, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SOLAR_API_KEY | GEMINI_API_KEY returned HTTP 200 for model listing. OAuth client refs are present but not reauthenticated here. |
| Redis | Prosper Redis bus + agent streams | validated | PROSPER_REDIS_BUS_ENABLED, REDIS_API_KEY, REDIS_CLOUD_API_KEY, REDIS_CLOUD_API_KEY_OP, REDIS_DUAL_WRITE_ENABLED, REDIS_HOST, REDIS_PASSWORD, REDIS_PASSWORD_OP, REDIS_PORT, REDIS_STREAM_MAXLEN, REDIS_STREAMS_PRIMARY, REDIS_TLS, REDIS_URL, REDIS_USER | redis-prosper returned PONG. |
| 1Password / OP | 1Password CLI/service-token refs | validated-service-account | ONEPASSWORD_CONNECT_TOKEN, OP_CONNECT_TOKEN, OP_SERVICE_ACCOUNT_TOKEN | OP_SERVICE_ACCOUNT_TOKEN validated as a 1Password service account. Interactive op whoami without the service token still has no signed-in user account in this shell. |
| Setmore | Setmore booking API | needs-reauth | SETMORE_API_KEY | SETMORE_API_KEY is present but the tested services endpoint returned HTTP 401. |
| SignNow | SignNow e-signature API | validated-auth-endpoint | SIGNNOW_ACCOUNT_EMAIL, SIGNNOW_ACCOUNT_PASSWORD, SIGNNOW_API_BASE, SIGNNOW_BASIC_AUTH, SIGNNOW_CLIENT_ID, SIGNNOW_CLIENT_SECRET, SIGNNOW_MAIN_FOLDER_ID, SIGNNOW_TEAM_FOLDER_ID, SIGNNOW_WEBHOOK_SECRET | SignNow basic/OAuth endpoint returned HTTP 200. No document, signing, or invite action was performed. |
| Assistable / Voice AI | Assistable API and assistant refs | present-not-tested | ASSISTABLE_API_KEY, ASSISTABLE_API_KEY_ACTIVE, ASSISTABLE_ASSISTANT_ID | Assistable refs exist and connect to voice/AI call paths through Telnyx/n8n. |
| Other Prosper AI/vendor keys | AgentOps, Firecrawl, ElevenLabs, NVIDIA, OpenSolar, Hostinger, Telegram, Paperclip, OWE/Solo, VoyageAI, Ollama | present-not-tested | AGENTOPS_API_KEY, AGENTOPS_API_KEY_OP, ASCEND_PORTAL_TOKEN, ASCEND_PORTAL_URL, DOCKER_HUB_PAT, DOCKER_HUB_USER, ELEVENLABS_API_KEY, ELEVENLABS_API_KEY_OP, FIRECRAWL_API_KEY, GROK_CLI_KEY, GROK_CLI_KEY_NOTE, GROK_CLI_KEY_SAVED_AT, HOSTINGER_API_KEY, HOSTINGER_VPS_SSH_KEY, HUBSTAFF_REFRESH_TOKEN, IPQS_API_KEY, KALEY_HERMES_LOCAL_TAG, KALEY_INTRO_CALL_TOKEN, NS1_API_KEY, NVIDIA_API_KEY, NVIDIA_BASE_URL, NVIDIA_EMBEDDING_MODEL, NVIDIA_KEY_ID, OLLAMA_API_KEY, OLLAMA_BASE_URL, OLLAMA_CHAT_URL, OLLAMA_CLOUD_KEY, OLLAMA_CLOUD_TOKEN, OLLAMA_DESKTOP_HOST, OLLAMA_DESKTOP_KEY_STATUS, OLLAMA_DESKTOP_MODEL_HOST, OLLAMA_DESKTOP_PROVIDED_PUBLIC_KEY, OLLAMA_DESKTOP_VERIFIED_SSH_HOST_KEY, OLLAMA_LOCAL_BASE_URL, OLLAMA_LOCAL_CHAT_URL, OPENSOLAR_API_KEY, OPENSOLAR_TENANT_ID, OUTPORTAL_API_KEY, OWE_AURORA_EMAIL, OWE_AURORA_PASSWORD, OWE_AURORA_URL, OWE_DEALER_ID, OWE_HUB_EMAIL, OWE_HUB_PASSWORD, OWE_HUB_URL, OWE_SOLO_EMAIL, OWE_SOLO_PASSWORD, OWE_SOLO_URL, PAPERCLIP_ANN_AGENT_ID, PAPERCLIP_ANN_API_KEY, PAPERCLIP_API_URL, PAPERCLIP_BURTHA_AGENT_ID, PAPERCLIP_BURTHA_API_KEY, PAPERCLIP_COMPANY_ID, PAPERCLIP_HANNA_AGENT_ID, PAPERCLIP_HANNA_API_KEY, PAPERCLIP_HERMES_AGENT_ID, PAPERCLIP_HERMES_API_KEY, PAPERCLIP_MADDISON_AGENT_ID, PAPERCLIP_MADDISON_API_KEY, PAPERCLIP_OMA_AGENT_ID, PAPERCLIP_OMA_API_KEY, PAPERCLIP_SAM_AGENT_ID, PAPERCLIP_SAM_API_KEY, PAPERCLIP_SELAH_AGENT_ID, PAPERCLIP_SELAH_API_KEY, PSO_SYNC_SECRET, SOLO_MFA_RECOVERY_CODE, SOLO_USER_CHAD_ORAM, SOLO_USER_COLE_STALLARD, SOLO_USER_CRAIG_STRATTON, SOLO_USER_DREW_BROWN, SOLO_USER_EOIN_CAREY, SOLO_USER_GARETT_EACKELBARY, SOLO_USER_JEFF_RESTEL, SOLO_USER_MIKE_MILLER, SOLO_USER_SCOTT_CRUMB, SOLO_USER_SHCORI_SEABROOKS, SOLO_USER_ZACK_JACKSON, TELEGRAM_BOT_TOKEN, TELEGRAM_BOT_USERNAME, TELEGRAM_CRAIG_CHAT_ID, VOYAGEAI_API_KEY, VOYAGEAI_API_KEY_ALT | Refs are present in the Prosper env registry. They are not core to the GHL live map and were not exercised in this run. |

### Connector Routes

| Route | Source | Connector | Target | Status | Credential refs | Live objects | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GHL API read path | GHL_API_TOKEN | HighLevel API | PROSPER MAIN location, users/search, phone-system numbers | validated | GHL_API_BASE, GHL_API_TOKEN, GHL_LOCATION_ID, GHL_COMPANY_ID | Location hU3tflAFRrVsoETFstfk; 47 users; 15 phone assignments | Reads PROSPER MAIN deeply. Agency-wide API scope remains limited for non-main subaccounts. |
| GHL browser inventory path | login.prospersynk.com session | HighLevel browser session | 12 subaccounts, last-login, contacts, opportunities, phone system pages | validated | GHL_LOCATION_ID, GHL_LOCATION_COLE | 12 subaccounts; 121,396 visible contacts/leads; 19,659 opportunities | Used for non-main subaccounts where API scope could not read deeply. |
| GHL Social Planner route | GHL_SOCIAL_ACCOUNT_MAP | HighLevel Social Planner | Facebook, Instagram, LinkedIn, TikTok account refs | present-held | GHL_SOCIAL_ACCOUNT_MAP | Social Planner pages captured; no post action | Public social blast remains held until Craig gives explicit go. |
| Make GHL/Monday sync route | MAKE_API_KEY | Make.com scenarios, hooks, and connections | GHL v2, Prosper Main, Monday.com -> GHL Sync, install/quote intake scenarios | validated | MAKE_API_KEY, MAKE_TEAM_ID, MAKE_ORG_ID, MAKE_QUOTE_INTAKE_SCENARIO_ID, MAKE_QUOTE_INTAKE_HOOK_ID | 10 scenarios; 10 hooks; 13 connections | MAKE_API_KEY works. MAKE_API_TOKEN_OP is present but treated as stale after prior 401. |
| n8n Telnyx/GHL workflow route | N8N_API_KEY | n8n workflows and webhook refs | Telnyx inbound SMS, Telnyx inbound SMS -> GHL, Hanna voice, post-call sync, GHL outbound call | validated | N8N_API_KEY, N8N_URL, N8N_WEBHOOK_INBOUND_SMS, N8N_WEBHOOK_OUTBOUND_CALL, N8N_WEBHOOK_OUTBOUND_SMS, N8N_WEBHOOK_VOICE_EVENTS | 16 workflows; 7 active | Outbound customer-send routes remain operationally frozen unless Craig explicitly approves. |
| Telnyx messaging route | TELNYX_API_KEY | Telnyx Messaging API | Phone numbers, messaging profiles, inbound SMS n8n workflows | validated | TELNYX_API_KEY, TELNYX_MSG_PROFILE_ID, TELNYX_PRIMARY_NUMBER, TELNYX_BRAND_ID, TELNYX_CAMPAIGN_ID | 14 numbers; 8 messaging profiles | Prosper SMS profile is disabled; inbound workflow refs exist; outbound SMS remains frozen. |
| Telnyx voice/SIP route | TELNYX_SIP_CONNECTION_ID | Telnyx SIP, LiveKit, Assistable, n8n voice | Prosper LiveKit SIP, assistable, Hanna AI Voice | validated | TELNYX_SIP_CONNECTION_ID, TELNYX_SIP_CONNECTION_NAME, TELNYX_SIP_USERNAME, TELNYX_SIP_PASSWORD, TELNYX_FQDN_ID, TELNYX_LIVEKIT_FQDN, TELNYX_OVP_ID | 8 Telnyx connections; 2 FQDN rows | SIP secret values are not published. |
| Supabase knowledge route | SUPABASE_SERVICE_ROLE_KEY | Supabase REST | knowledge_base and agent_activity_log | validated | SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, SUPABASE_ANON_KEY, SUPABASE_DB_URL | GHL map knowledge_base row and activity log rows | Privileged key was used only server-side for this wiki sync. |
| GitHub wiki/source route | GITHUB_TOKEN | GitHub CLI/API/git | prosperenergy/ghl-prospershield | validated | GITHUB_TOKEN, GITHUB_PAT, GITHUB_ORG | Public repo main branch; wiki source under /wiki | GitHub has wiki enabled but the separate wiki git remote did not accept pushes. |
| Public site route | NETLIFY_AUTH_TOKEN + CLOUDFLARE_API_TOKEN | Netlify deploy + Cloudflare DNS | https://ghl.prospershield.io | validated | NETLIFY_AUTH_TOKEN, NETLIFY_TEAM, CLOUDFLARE_API_TOKEN | Netlify site ghl-prospershield; Cloudflare CNAME ghl.prospershield.io | Public site hosts redacted refs only. |
| Monday operations route | MONDAY_API_KEY | Monday API + Make connection | Prosper boards, columns, install pipeline, GHL sync | validated | MONDAY_API_KEY, MONDAY_BOARD_ID, MONDAY_INSTALL_PIPELINE_BOARD_ID, MONDAY_INSTALL_PIPELINE_BOARD_URL, MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_ID, MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_URL, MONDAY_INSTALL_PIPELINE_SUBITEMS_BOARD_ID, MONDAY_INSTALLER_BOARD_ID, MONDAY_KYC_BOARD_ID, MONDAY_REP_BOARD_ID, MONDAY_SP_COL_ADDRESS, MONDAY_SP_COL_DAYS_IN_LANE, MONDAY_SP_COL_DEALER, MONDAY_SP_COL_EMAIL, MONDAY_SP_COL_FILING, MONDAY_SP_COL_HERO, MONDAY_SP_COL_KW, MONDAY_SP_COL_KYC, MONDAY_SP_COL_LANE, MONDAY_SP_COL_LAST_ACTIVITY, MONDAY_SP_COL_LAST_SMS, MONDAY_SP_COL_MODE, MONDAY_SP_COL_NAME, MONDAY_SP_COL_NEXT_ACTION, MONDAY_SP_COL_PDF, MONDAY_SP_COL_PHONE, MONDAY_SP_COL_REP, MONDAY_SP_COL_SOURCE, MONDAY_SP_COL_STATE, MONDAY_SP_COL_SUBMITTED, MONDAY_SP_COL_SUPABASE_ID, MONDAY_SP_COL_TRACKING, MONDAY_SP_COL_VALUE, MONDAY_WORKSPACE_ID | Monday current-user query returned HTTP 200; board/column refs present | No Monday records were modified. |
| Google/Gemini model route | GEMINI_API_KEY | Google Generative Language API | Gemini model listing and Prosper AI model surfaces | validated | BRAIN_GOOGLE_CLIENT_ID, BRAIN_GOOGLE_CLIENT_SECRET, BRAIN_GOOGLE_DESKTOP_CLIENT_ID, BRAIN_GOOGLE_DESKTOP_CLIENT_SECRET, BRAIN_GOOGLE_WEB_CLIENT_ID, BRAIN_GOOGLE_WEB_CLIENT_SECRET, GOOGLE_APPLICATION_CREDENTIALS, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CLOUD_PROJECT, GOOGLE_CLOUD_QUOTA_PROJECT, GOOGLE_MAPS_API_KEY, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SOLAR_API_KEY | Gemini models endpoint returned HTTP 200 | OAuth client refs exist but no browser reauth was performed. |
| Redis fleet bus route | REDIS_URL/redis-prosper | Redis direct helper | Prosper fleet bus and agent streams | validated | PROSPER_REDIS_BUS_ENABLED, REDIS_API_KEY, REDIS_CLOUD_API_KEY, REDIS_CLOUD_API_KEY_OP, REDIS_DUAL_WRITE_ENABLED, REDIS_HOST, REDIS_PASSWORD, REDIS_PASSWORD_OP, REDIS_PORT, REDIS_STREAM_MAXLEN, REDIS_STREAMS_PRIMARY, REDIS_TLS, REDIS_URL, REDIS_USER | PING returned PONG | No CMUX control was used. |
| 1Password vault/service route | OP_SERVICE_ACCOUNT_TOKEN | 1Password CLI service account | Vault-backed credential lookup surface | validated-service-account | OP_SERVICE_ACCOUNT_TOKEN, OP_CONNECT_TOKEN, ONEPASSWORD_CONNECT_TOKEN | op whoami reported SERVICE_ACCOUNT when service token was provided | Interactive op login is still absent in this shell. |
| Setmore booking route | SETMORE_API_KEY | Setmore booking API | Setmore booking/service read surface | needs-reauth | SETMORE_API_KEY | Tested services endpoint returned HTTP 401 | No Setmore writes were performed. |
| SignNow signing route | SIGNNOW_BASIC_AUTH | SignNow auth/API refs | Signing folders, OAuth/basic auth, webhook refs | validated-auth-endpoint | SIGNNOW_ACCOUNT_EMAIL, SIGNNOW_ACCOUNT_PASSWORD, SIGNNOW_API_BASE, SIGNNOW_BASIC_AUTH, SIGNNOW_CLIENT_ID, SIGNNOW_CLIENT_SECRET, SIGNNOW_MAIN_FOLDER_ID, SIGNNOW_TEAM_FOLDER_ID, SIGNNOW_WEBHOOK_SECRET | Auth endpoint returned HTTP 200 | No document or signing action was performed. |

### Credential Ref Detail

| Credential ref | System | Kind | Value state | Occurrences | Validation | Public handling | Role | Route |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGENTOPS_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| AGENTOPS_API_KEY_OP | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ASCEND_PORTAL_TOKEN | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ASCEND_PORTAL_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ASSISTABLE_API_KEY | Assistable / Voice AI | secret | set | 1 | present-not-tested | name-only; value redacted | Assistable voice/assistant API reference used by Telnyx/n8n voice paths. | Assistable env -> Telnyx/n8n voice assistant paths |
| ASSISTABLE_API_KEY_ACTIVE | Assistable / Voice AI | secret | set | 1 | present-not-tested | name-only; value redacted | Assistable voice/assistant API reference used by Telnyx/n8n voice paths. | Assistable env -> Telnyx/n8n voice assistant paths |
| ASSISTABLE_ASSISTANT_ID | Assistable / Voice AI | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Assistable voice/assistant API reference used by Telnyx/n8n voice paths. | Assistable env -> Telnyx/n8n voice assistant paths |
| BRAIN_GOOGLE_CLIENT_ID | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| BRAIN_GOOGLE_CLIENT_SECRET | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| BRAIN_GOOGLE_DESKTOP_CLIENT_ID | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| BRAIN_GOOGLE_DESKTOP_CLIENT_SECRET | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| BRAIN_GOOGLE_WEB_CLIENT_ID | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| BRAIN_GOOGLE_WEB_CLIENT_SECRET | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| CLOUDFLARE_API_TOKEN | Cloudflare | secret | set | 1 | validated | name-only; value redacted | Cloudflare DNS/API reference for prospershield.io. | Cloudflare env -> DNS API -> ghl.prospershield.io CNAME |
| CRAIG_GHL_CONTACT_ID | GoHighLevel / HighLevel | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| DOCKER_HUB_PAT | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| DOCKER_HUB_USER | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ELEVENLABS_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ELEVENLABS_API_KEY_OP | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| FIRECRAWL_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| GH_TOKEN | GitHub | secret | set | 1 | validated | name-only; value redacted | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GHL_API_BASE | GoHighLevel / HighLevel | endpoint | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_API_KEY | GoHighLevel / HighLevel | secret | set | 1 | validated | name-only; value redacted | HighLevel API authentication for PROSPER MAIN reads and selected location/user/phone checks. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_API_TOKEN | GoHighLevel / HighLevel | secret | set | 1 | validated | name-only; value redacted | HighLevel API authentication for PROSPER MAIN reads and selected location/user/phone checks. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_AUTH_SECRET | GoHighLevel / HighLevel | secret | set | 1 | validated | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_CLIENT_ID | GoHighLevel / HighLevel | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_CLIENT_SECRET | GoHighLevel / HighLevel | secret | set | 1 | validated | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_COMPANY_ID | GoHighLevel / HighLevel | object-id | set | 1 | validated | name, role, and live linkage only | Agency/company scope for HighLevel user search. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_LOCATION_COLE | GoHighLevel / HighLevel | configuration | set | 1 | validated | name, role, and live linkage only | Cole Stallard subaccount location reference. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_LOCATION_ID | GoHighLevel / HighLevel | object-id | set | 1 | validated | name, role, and live linkage only | Primary PROSPER MAIN location scope. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_SOCIAL_ACCOUNT_MAP | GoHighLevel / HighLevel | configuration | set | 1 | validated | name, role, and live linkage only | GHL Social Planner account reference map for Facebook, Instagram, LinkedIn, and TikTok. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_WEBHOOK_SECRET | GoHighLevel / HighLevel | secret | set | 1 | validated | name-only; value redacted | HighLevel webhook ingress reference; raw URL/secret withheld. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_WEBHOOK_URL | GoHighLevel / HighLevel | webhook-ref | set | 1 | validated | name-only; value redacted | HighLevel webhook ingress reference; raw URL/secret withheld. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GHL_WEBHOOK_URL_OLD | GoHighLevel / HighLevel | webhook-ref | set | 1 | validated | name-only; value redacted | HighLevel webhook ingress reference; raw URL/secret withheld. | GHL env -> HighLevel API/browser -> subaccounts, users, phone assignments, social planner, webhooks |
| GITHUB_COPILOT_TOKEN | GitHub | secret | set | 1 | validated | name-only; value redacted | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GITHUB_MODELS_TOKEN | GitHub | secret | set | 1 | validated | name-only; value redacted | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GITHUB_ORG | GitHub | object-id | set | 1 | validated | name, role, and live linkage only | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GITHUB_PAT | GitHub | secret | set | 1 | validated | name-only; value redacted | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GITHUB_TOKEN | GitHub | secret | set | 1 | validated | name-only; value redacted | GitHub auth/org reference for prosperenergy repo/wiki publishing. | GitHub env -> gh/API/git -> prosperenergy/ghl-prospershield |
| GOOGLE_APPLICATION_CREDENTIALS | Google / Gemini | file-or-key-path | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_CLIENT_ID | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_CLIENT_SECRET | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_CLOUD_PROJECT | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_CLOUD_QUOTA_PROJECT | Google / Gemini | object-id | set | 1 | validated | name, role, and live linkage only | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_MAPS_API_KEY | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_SERVICE_ACCOUNT_EMAIL | Google / Gemini | identity | set | 1 | validated | name and role only; value not published | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GOOGLE_SOLAR_API_KEY | Google / Gemini | secret | set | 1 | validated | name-only; value redacted | Google/Gemini API or OAuth reference. | Google/Gemini env -> model/API/OAuth surfaces |
| GROK_CLI_KEY | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| GROK_CLI_KEY_NOTE | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| GROK_CLI_KEY_SAVED_AT | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| HOSTINGER_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| HOSTINGER_VPS_SSH_KEY | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| HUBSTAFF_REFRESH_TOKEN | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| IPQS_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| KALEY_HERMES_LOCAL_TAG | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| KALEY_INTRO_CALL_TOKEN | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| MAKE_API_BASE | Make.com | endpoint | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_API_HOSTNAME | Make.com | endpoint | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_API_KEY | Make.com | secret | set | 1 | validated | name-only; value redacted | Make API token that validated live scenario/hook/connection reads. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_API_TOKEN_OP | Make.com | secret | set | 1 | validated | name-only; value redacted | Older Make/1Password-token reference that previously returned 401. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_API_USERNAME | Make.com | identity | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_HOOK_QUOTE_INTAKE | Make.com | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_HOOK_QUOTE_INTAKE_HOST | Make.com | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_HOOK_SECRET | Make.com | secret | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_ORG_ID | Make.com | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_QUOTE_INTAKE_HOOK_ID | Make.com | webhook-ref | set | 1 | validated | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_QUOTE_INTAKE_SCENARIO_ID | Make.com | object-id | set | 1 | validated | name, role, and live linkage only | Make scenario routing reference. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_QUOTE_INTAKE_WEBHOOK_OP | Make.com | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_REGION | Make.com | configuration | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MAKE_TEAM_ID | Make.com | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Make env -> Make API -> scenarios, hooks, connections, GHL/Monday sync |
| MONDAY_ACCOUNT_SLUG | Monday.com | identity | set | 1 | validated | name and role only; value not published | Monday account/API/workspace connector reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_API_KEY | Monday.com | secret | set | 1 | validated | name-only; value redacted | Monday account/API/workspace connector reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALL_PIPELINE_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALL_PIPELINE_BOARD_URL | Monday.com | endpoint | set | 1 | validated | name and role only; value not published | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALL_PIPELINE_DASHBOARD_DOC_URL | Monday.com | endpoint | set | 1 | validated | name and role only; value not published | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALL_PIPELINE_SUBITEMS_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_INSTALLER_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_KYC_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_OWNER_EMAIL | Monday.com | identity | set | 1 | validated | name and role only; value not published | Monday account/API/workspace connector reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_REP_BOARD_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday board/workspace routing reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_ADDRESS | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_DAYS_IN_LANE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_DEALER | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_EMAIL | Monday.com | identity | set | 1 | validated | name and role only; value not published | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_FILING | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_HERO | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_KW | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_KYC | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_LANE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_LAST_ACTIVITY | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_LAST_SMS | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_MODE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_NAME | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_NEXT_ACTION | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_PDF | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_PHONE | Monday.com | phone-ref | set | 1 | validated | name and role only; value not published | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_REP | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_SOURCE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_STATE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_SUBMITTED | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_SUPABASE_ID | Monday.com | endpoint | set | 1 | validated | name and role only; value not published | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_TRACKING | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_SP_COL_VALUE | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday solar pipeline column mapping. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_TOKEN | Monday.com | secret | set | 1 | validated | name-only; value redacted | Monday account/API/workspace connector reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| MONDAY_WORKSPACE_ID | Monday.com | workspace-object | set | 1 | validated | name, role, and live linkage only | Monday account/API/workspace connector reference. | Monday env -> Monday API/Make -> boards, columns, GHL sync |
| N8N_API_KEY | n8n | secret | set | 1 | validated | name-only; value redacted | n8n API key that validated workflow reads. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_MCP_TOKEN | n8n | secret | set | 1 | validated | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_MCP_URL | n8n | endpoint | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_URL | n8n | endpoint | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WEBHOOK_INBOUND_SMS | n8n | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WEBHOOK_OUTBOUND_CALL | n8n | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WEBHOOK_OUTBOUND_SMS | n8n | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WEBHOOK_VOICE_EVENTS | n8n | webhook-ref | set | 1 | validated | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WF_INBOUND_SMS | n8n | object-id | set | 1 | validated | name, role, and live linkage only | n8n workflow id reference. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WF_OUTBOUND_CALL | n8n | object-id | set | 1 | validated | name, role, and live linkage only | n8n workflow id reference. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WF_OUTBOUND_SMS | n8n | object-id | set | 1 | validated | name, role, and live linkage only | n8n workflow id reference. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| N8N_WF_POST_CALL_SYNC | n8n | object-id | set | 1 | validated | name, role, and live linkage only | n8n workflow id reference. | n8n env -> n8n API/webhooks -> Telnyx/GHL/Hanna workflow routes |
| NETLIFY_AUTH_TOKEN | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_CURRENT | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_FULL_ACCESS | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_HANNA | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_MINDFORGE | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_MINDFORGE_2 | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_PAT_MINDFORGE_SITE | Netlify | secret | set | 1 | validated | name-only; value redacted | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_TEAM | Netlify | object-id | set | 1 | validated | name, role, and live linkage only | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NETLIFY_TEAM_ID | Netlify | object-id | set | 1 | validated | name, role, and live linkage only | Netlify team/API/deploy reference for ghl.prospershield.io. | Netlify env -> Netlify API -> ghl-prospershield deploy |
| NS1_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| NVIDIA_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| NVIDIA_BASE_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| NVIDIA_EMBEDDING_MODEL | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| NVIDIA_KEY_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_BASE_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_CHAT_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_CLOUD_KEY | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_CLOUD_TOKEN | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_DESKTOP_HOST | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_DESKTOP_KEY_STATUS | Other Prosper AI/vendor keys | configuration | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_DESKTOP_MODEL_HOST | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_DESKTOP_PROVIDED_PUBLIC_KEY | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_DESKTOP_VERIFIED_SSH_HOST_KEY | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_LOCAL_BASE_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OLLAMA_LOCAL_CHAT_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| ONEPASSWORD_CONNECT_TOKEN | 1Password / OP | secret | set | 1 | validated-service-account | name-only; value redacted | 1Password service/connect token reference. | OP env -> 1Password service account/connect surfaces |
| OP_CONNECT_TOKEN | 1Password / OP | secret | set | 1 | validated-service-account | name-only; value redacted | 1Password service/connect token reference. | OP env -> 1Password service account/connect surfaces |
| OP_SERVICE_ACCOUNT_TOKEN | 1Password / OP | secret | set | 1 | validated-service-account | name-only; value redacted | 1Password service/connect token reference. | OP env -> 1Password service account/connect surfaces |
| OPENSOLAR_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OPENSOLAR_TENANT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OUTPORTAL_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_AURORA_EMAIL | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_AURORA_PASSWORD | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_AURORA_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_DEALER_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_HUB_EMAIL | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_HUB_PASSWORD | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_HUB_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_SOLO_EMAIL | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_SOLO_PASSWORD | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| OWE_SOLO_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_ANN_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_ANN_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_API_URL | Other Prosper AI/vendor keys | endpoint | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_BURTHA_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_BURTHA_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_COMPANY_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_HANNA_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_HANNA_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_HERMES_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_HERMES_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_MADDISON_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_MADDISON_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_OMA_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_OMA_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_SAM_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_SAM_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_SELAH_AGENT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PAPERCLIP_SELAH_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| PROSPER_REDIS_BUS_ENABLED | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| PSO_SYNC_SECRET | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| REDIS_API_KEY | Redis | secret | set | 1 | validated | name-only; value redacted | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_CLOUD_API_KEY | Redis | secret | set | 1 | validated | name-only; value redacted | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_CLOUD_API_KEY_OP | Redis | secret | set | 1 | validated | name-only; value redacted | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_DUAL_WRITE_ENABLED | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_HOST | Redis | endpoint | set | 1 | validated | name and role only; value not published | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_PASSWORD | Redis | secret | set | 1 | validated | name-only; value redacted | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_PASSWORD_OP | Redis | secret | set | 1 | validated | name-only; value redacted | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_PORT | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_STREAM_MAXLEN | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_STREAMS_PRIMARY | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_TLS | Redis | configuration | set | 1 | validated | name, role, and live linkage only | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_URL | Redis | endpoint | set | 1 | validated | name and role only; value not published | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| REDIS_USER | Redis | identity | set | 1 | validated | name and role only; value not published | Prosper Redis bus/stream/connection reference. | Redis env -> redis-prosper -> fleet bus/agent streams |
| SETMORE_API_KEY | Setmore | secret | set | 1 | needs-reauth | name-only; value redacted | Setmore booking API credential; currently needs reauthorization. | Setmore env -> booking API; current key needs reauth |
| SIGNNOW_ACCOUNT_EMAIL | SignNow | identity | set | 1 | validated-auth-endpoint | name and role only; value not published | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_ACCOUNT_PASSWORD | SignNow | secret | set | 1 | validated-auth-endpoint | name-only; value redacted | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_API_BASE | SignNow | endpoint | set | 1 | validated-auth-endpoint | name and role only; value not published | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_BASIC_AUTH | SignNow | secret | set | 1 | validated-auth-endpoint | name-only; value redacted | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_CLIENT_ID | SignNow | object-id | set | 1 | validated-auth-endpoint | name, role, and live linkage only | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_CLIENT_SECRET | SignNow | secret | set | 1 | validated-auth-endpoint | name-only; value redacted | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_MAIN_FOLDER_ID | SignNow | workspace-object | set | 1 | validated-auth-endpoint | name, role, and live linkage only | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_TEAM_FOLDER_ID | SignNow | workspace-object | set | 1 | validated-auth-endpoint | name, role, and live linkage only | SignNow login/OAuth/folder/webhook reference. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SIGNNOW_WEBHOOK_SECRET | SignNow | secret | set | 1 | validated-auth-endpoint | name-only; value redacted | Make webhook or webhook secret reference; raw URL/secret withheld. | SignNow env -> OAuth/basic auth/folder/webhook surfaces |
| SOLO_MFA_RECOVERY_CODE | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_CHAD_ORAM | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_COLE_STALLARD | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_CRAIG_STRATTON | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_DREW_BROWN | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_EOIN_CAREY | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_GARETT_EACKELBARY | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_JEFF_RESTEL | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_MIKE_MILLER | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_SCOTT_CRUMB | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_SHCORI_SEABROOKS | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SOLO_USER_ZACK_JACKSON | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| SUPABASE_ACCESS_TOKEN | Supabase | secret | set | 1 | validated | name-only; value redacted | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_ANON_KEY | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_DB_URL | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_JWT_SECRET | Supabase | secret | set | 1 | validated | name-only; value redacted | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_MINDFORGE_URL | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_PUBLISHABLE_KEY | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_SECRET_KEY | Supabase | secret | set | 1 | validated | name-only; value redacted | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_SERVICE_ROLE_KEY | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase privileged server write key used for knowledge_base and activity log updates. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| SUPABASE_URL | Supabase | endpoint | set | 1 | validated | name and role only; value not published | Supabase project, database, anon, publishable, or secret reference. | Supabase env -> REST API -> knowledge_base and agent_activity_log |
| TELEGRAM_BOT_TOKEN | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| TELEGRAM_BOT_USERNAME | Other Prosper AI/vendor keys | identity | set | 1 | present-not-tested | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| TELEGRAM_CRAIG_CHAT_ID | Other Prosper AI/vendor keys | object-id | set | 1 | present-not-tested | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| TELNYX_API_KEY | Telnyx | secret | set | 1 | validated | name-only; value redacted | Telnyx API token that validated phone number/profile/connection reads. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_BRAND_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx/A2P brand or campaign compliance reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_CAMPAIGN_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx/A2P brand or campaign compliance reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_FQDN_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_LIVEKIT_FQDN | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_MSG_PROFILE_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx messaging profile reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_MSG_PROFILE_NAME | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx messaging profile reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_OVP_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_OVP_NAME | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Prosper vendor or agent credential reference; not core to the GHL public route. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_PRIMARY_NUMBER | Telnyx | phone-ref | set | 1 | validated | name and role only; value not published | Prosper vendor or agent credential reference; not core to the GHL public route. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_SIP_CONNECTION_ID | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx SIP/LiveKit/voice credential or connection reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_SIP_CONNECTION_NAME | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx SIP/LiveKit/voice credential or connection reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_SIP_PASSWORD | Telnyx | secret | set | 1 | validated | name-only; value redacted | Telnyx SIP/LiveKit/voice credential or connection reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_SIP_USERNAME | Telnyx | identity | set | 1 | validated | name and role only; value not published | Telnyx SIP/LiveKit/voice credential or connection reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_TCR_BRAND | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx/A2P brand or campaign compliance reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| TELNYX_TCR_CAMPAIGN | Telnyx | object-id | set | 1 | validated | name, role, and live linkage only | Telnyx/A2P brand or campaign compliance reference. | Telnyx env -> Telnyx API/SIP -> numbers, messaging profiles, voice/SIP connections |
| VOYAGEAI_API_KEY | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |
| VOYAGEAI_API_KEY_ALT | Other Prosper AI/vendor keys | secret | set | 1 | present-not-tested | name-only; value redacted | Prosper vendor or agent credential reference; not core to the GHL public route. | Prosper vendor env -> auxiliary agent/business tooling |

## Make.com Map

| ID | Scenario | Active | Scheduling | Created |
| --- | --- | --- | --- | --- |
| 5337149 | New Contract -> AI Extract Fields and Update Monday | yes | immediately | 2026-06-09T16:47:12.141Z |
| 5136889 | Prosper Quote Intake - Internal Proof | yes | immediately | 2026-05-21T02:48:43.118Z |
| 5144384 | create new install Project | not returned | immediately | 2026-05-21T18:35:12.607Z |
| 5269392 | create new install Project Ecovole | not returned | immediately | 2026-06-02T20:05:37.416Z |
| 5144532 | Install Updates | not returned | immediately | 2026-05-21T18:48:08.376Z |
| 5269398 | Install Updates Ecovole | not returned | immediately | 2026-06-02T20:06:08.144Z |
| 5301130 | Integration GoHighLevel | not returned | immediately | 2026-06-05T17:23:47.130Z |
| 5327037 | Monday.com -> GHL Sync | not returned | immediately | 2026-06-08T18:59:52.321Z |
| 5200455 | New scenario | not returned | indefinitely | 2026-05-27T03:04:12.881Z |
| 5137639 | Prosper AI Command Router - Internal Proof | not returned | immediately | 2026-05-21T04:05:43.329Z |

### Make.com Connections

| ID | Connection | Account name | Team |
| --- | --- | --- | --- |
| 9265385 | ghl v2 | highlevel4 | 1495551 |
| 9320207 | My Gemini AI connection | gemini-ai-q9zyjp | 1495551 |
| 9325729 | My Gmail connection | google-email | 1495551 |
| 9264976 | My GoHighlevel Company OAuth 2.0 connection | highlevel4 | 1495551 |
| 9321007 | My Google Drive connection | google-drive | 1495551 |
| 9321567 | My Make's AI Provider connection | ai-provider | 1495551 |
| 9320239 | My NVIDIA connection | nvidia | 1495551 |
| 8993049 | Prosper GitHub - prosperenergy | github | 1495551 |
| 9067984 | Prosper Main | highlevel3 | 1495551 |
| 8993066 | Prosper Make - Internal Ops | make | 1495551 |
| 8993029 | Prosper monday - Ops Cockpit | monday | 1495551 |
| 8993036 | Prosper Netlify - Site Ops | netlify | 1495551 |
| 8993159 | Prosper signNow - Signing Queue | signnow | 1495551 |

### Make.com Hooks

| ID | Hook | Scenario | Enabled |
| --- | --- | --- | --- |
| 2340059 | Prosper Quote Intake - Internal Proof | 5136889 | yes |
| 2340325 | Prosper AI Command Router - Internal Proof | 5137639 | yes |
| 2343250 | New Install Project | 5144384 | yes |
| 2343304 | Install Updates | 5144532 | yes |
| 2400089 | My gateway-webhook webhook | 5269392 | yes |
| 2400092 | My gateway-webhook webhook | 5269398 | yes |
| 2410679 | My Monday Board's Items webhook | 5269392 | yes |
| 2410703 | My Monday Board's Items webhook | 5337149 | yes |
| 2415303 | My Monday Board's Items webhook | 5301130 | yes |
| 2426797 | Monday -> GHL Sync | 5327037 | yes |

## n8n Map

| ID | Workflow | Active | Updated | Webhook paths |
| --- | --- | --- | --- | --- |
| uwqbIviaXq8hhIJb | Cold Engine — 5-touch cadence | no | 2026-05-03T02:20:26.908Z |  |
| 4AExrwQZtZxuQ7Aq | GHL Outbound AI Call → Assistable | yes | 2026-04-24T02:28:36.156Z | ghl-outbound-call |
| 3mzqfwFq4T2Aufpg | Hanna AI — SMS Handler (Gemini) | no | 2026-04-21T19:20:00.985Z | hanna-ai-sms |
| TIXj7oDQvMHghUZf | Hanna AI — SMS Poller (Gemini) | no | 2026-04-21T19:29:15.679Z |  |
| ZmpJjUWDzMebjdXY | Hanna AI — SMS Poller v2 (Gemini) | no | 2026-04-24T02:32:31.780Z |  |
| Gorkda74nEEmc0pH | Hanna AI — Voice Agent (Telnyx + Gemini) | yes | 2026-04-24T02:40:05.926Z | hanna-voice-ai |
| vZCgYuzHFKP28CyH | Hanna Post-Call Sync | yes | 2026-04-07T23:10:00.477Z | hanna/post-call |
| aKgSUAkFQNnPOtdR | LeadStrike — GHL Contact Webhook Relay | no | 2026-04-19T03:08:47.346Z | ghl-contact-created |
| LWWTJZCb90rNq9aG | LeadStrike — New GHL Contact Monitor | no | 2026-04-19T03:09:38.169Z |  |
| KlF6mb9tmdjWIQeY | Maddi Social Auto-Poster — Intake + OAuth Gates | yes | 2026-05-21T15:56:24.367Z | maddi/social-auto-poster/intake |
| ScRcapTwT4idnj9L | Outbound SMS via Telnyx | no | 2026-04-15T02:22:37.945Z | telnyx-outbound-sms |
| OI9SxQTsFxh78p6H | PRO-1: Daily Retry — Re-send to Non-Responders | yes | 2026-04-20T21:11:33.897Z |  |
| ckoyFUERRfH5vNjn | PRO-1: Telnyx Inbound SMS → Lead Response Handler | yes | 2026-04-20T21:11:33.388Z | telnyx-inbound |
| wQoB3mR1PQ7nK1E8 | Prosper Social Auto-Poster | no | 2026-05-21T15:56:43.061Z |  |
| x6dJUTCML4lVbRcg | Reactivation — Inbound SMS Handler | no | 2026-04-20T20:10:35.655Z | reactivation-inbound |
| L5QjmqbBrdHfKibj | Telnyx Inbound SMS → GHL | yes | 2026-04-18T20:00:58.953Z | telnyx-inbound-sms |

## Telnyx Map

| Number | Status | Messaging profile | Connection | Updated |
| --- | --- | --- | --- | --- |
| +13043988798 | active | Prosper Reactivation AI - Ripley |  | 2026-05-08T18:35:03.099Z |
| +18035904429 | active | Prosper SMS | ai-assistant-abc948e5-c799-4671-b74d-c664c61981e2 | 2026-05-07T22:54:43.809Z |
| +17029726492 | active | S2HIAZD4LdIdHsm1hnYZ - MSG Profile | crmphoneproS2HIAZD4LdIdHsm1hnYZ | 2026-04-25T16:19:42.174Z |
| +17029601485 | active | Prosper SMS | ai-assistant-d43e2525-34da-48ea-9535-506594fe3b9c | 2026-05-08T02:57:29.630Z |
| +17029474766 | active | Prosper SMS | ai-assistant-6481f289-12a0-4ded-94bd-5cadc2d1a5b2 | 2026-05-08T02:57:34.677Z |
| +17028199001 | active | Prosper SMS | ai-assistant-ce699eac-c383-49b4-a745-d8fff5722529 | 2026-05-08T02:57:39.318Z |
| +17027666275 | active | Prosper SMS | ai-assistant-4359a65f-a4b4-4e0f-b842-5571f611ae14 | 2026-05-08T02:57:43.834Z |
| +17027103529 | active | Reactivation Engine | assistable | 2026-04-25T02:04:16.554Z |
| +17026057295 | active | Reactivation Engine | assistable | 2026-04-25T02:04:18.608Z |
| +17025530278 | active | Reactivation Engine | assistable | 2026-05-03T02:14:25.560Z |
| +17025054626 | active | Reactivation Engine | assistable | 2026-05-03T02:14:24.647Z |
| +17023897403 | active | Reactivation Engine | assistable | 2026-05-03T02:14:23.695Z |
| +19179707465 | active | Operation JUICY | Prosper LiveKit SIP | 2026-05-04T22:45:30.396Z |
| +12028711657 | active | Prosper SMS | ai-assistant-31f984d9-81cb-409b-9e9f-419c6e31abac | 2026-05-07T23:28:12.169Z |

### Telnyx Messaging Profiles

| ID | Profile | Enabled | Updated |
| --- | --- | --- | --- |
| 40019c26-9784-4dd6-ba28-ac6ed572037a | Fair Rate Alliance | yes | 2026-05-17T22:20:57.834Z |
| 40019d74-04ab-4d0e-b225-700dafa0d7ab | Prosper SMS | no | 2026-05-17T22:20:58.274Z |
| 40019da2-d6b1-4a6d-b069-35ac1386418d | Operation JUICY | yes | 2026-05-17T22:20:58.989Z |
| 40019dab-9281-42b6-92e8-ad47d5610628 | Reactivation Engine | yes | 2026-05-17T22:20:59.448Z |
| 40019dc5-708b-4777-a6df-3ee5fc96b78c | S2HIAZD4LdIdHsm1hnYZ - MSG Profile | yes | 2026-05-17T22:20:59.883Z |
| 40019dc7-a9b6-4b32-b3aa-9ed22ceb0e69 | Kaley Text | yes | 2026-05-17T22:21:00.297Z |
| 40019de4-53fc-4fd6-a1fd-f92d17389983 | Prosper Reactivation AI - Ripley | no | 2026-05-18T11:09:50.827Z |
| 40019df5-254f-438e-a768-fe33f5780b00 | ai-assistant-abc948e5-c799-4671-b74d-c664c61981e2 | yes | 2026-05-17T22:21:01.185Z |

### Telnyx Voice/SIP Connections

| ID | Type | Name | Active | Outbound voice profile | Updated |
| --- | --- | --- | --- | --- | --- |
| 2954850912645940996 | credential_connection | Default Credential Connection | yes | 2951352049591125143 | 2026-05-07T22:01:19Z |
| 2951352053022065818 | credential_connection | Default | yes | 2951352049591125143 | 2026-05-03T02:09:41Z |
| 2945981668202120235 | credential_connection | crmphoneproS2HIAZD4LdIdHsm1hnYZ | yes | 2945981665257718826 | 2026-04-25T16:19:41Z |
| 2945546862817445214 | fqdn_connection | assistable | yes | 2925195896318592358 | 2026-04-25T02:29:36Z |
| 2942654148060907287 | credential_connection | Hanna AI Voice (Telnyx + Gemini) | yes | 2925195896318592358 | 2026-04-21T20:08:36Z |
| 2925776650404628165 | credential_connection | OpenClaw WebRTC | yes | 2925195896318592358 | 2026-03-28T19:24:10Z |
| 2925198157367215638 | fqdn_connection | Prosper LiveKit SIP | yes | 2925195896318592358 | 2026-04-22T02:55:23Z |
| 2887594360013063958 | credential_connection | Forward Only | yes |  | 2026-02-04T02:54:32Z |

## Operational Holds

- SMS/customer-send paths remain frozen unless Craig gives explicit approval.
- The old responder SMS fallback must remain removed/fail-closed.
- Social blast remains held until Craig gives explicit go.
- Webhook URLs, API tokens, and credentials are intentionally redacted from this wiki and the site data.

## Search Site

Live site: https://ghl.prospershield.io
GitHub repo: https://github.com/prosperenergy/ghl-prospershield
GitHub wiki source: https://github.com/prosperenergy/ghl-prospershield/tree/main/wiki
Static site source: /private/tmp/ghl-run
Data file: /private/tmp/ghl-run/data/ghl-live-map.json
