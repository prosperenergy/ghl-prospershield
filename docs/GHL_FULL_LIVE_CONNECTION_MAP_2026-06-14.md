# GHL Full Live Connection Map

Generated: 2026-06-15T00:46:57.755Z
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
Static site source: /Volumes/Samgsung T9/04_Fleet-Ops/ghl/site
Data file: /Volumes/Samgsung T9/04_Fleet-Ops/ghl/site/data/ghl-live-map.json
