---
type: software-project
status: planning
---

# T-Tech Website — Project hub

## Goal

Launch a mobile-friendly T-Tech website that turns visitors into quote requests and gives staff one clear place to manage quotes, payments, artwork, production, and customer updates.

## Done when

- The five launch product groups are defined.
- A customer can request a quote, receive it, accept it, pay the 50% deposit, and track the job.
- Staff can approve payments, review artwork, update statuses, and communicate with customers.
- The launch acceptance tests pass with 15 practice orders.

## Next action

- [ ] Confirm the five launch products, product questions, turnaround times, pricing rules, and required business details.
- [ ] Resolve the launch-date conflict in the SRS.
- [ ] Sketch the quote form and customer screens, then review them with Galf and Victor.

## Current source of truth

- [[SRS/SRS_Ttech_Website_v2]] — current requirements draft, version 3.2
- [[02 Projects/Software/TTECH_WEBSITE/Design/00 page map]] — page structure
- [[01 quote journey]] — quote-to-order flow
- [[02 customer screens]] — customer navigation and screens
- [[Design desicions]] — design decisions

## Delivery phases

### Launch

Public website, five products, guided quote requests, accounts, quote acceptance, 50% deposit, payment proof, order tracking, admin area, reports, email, WhatsApp contact, and Google Drive order summaries.

### Later

Automatic T-Tech Studio connection, online checkout, automatic messaging, company accounts, reordering, delivery calculation, extra product groups, and AI assistance.

## Open decisions

- Launch date: 1 January or 1 March 2027
- Final product catalogue and pricing rules
- Staff login and training list
- Refund/cancellation policy
- Backup process and ownership
- Domain, hosting, budget, and business contact details

## Decisions log

| Date | Decision | Reason | Consequence |
| --- | --- | --- | --- |
| 2026-11-25 | Use SRS v2 as the active requirements source | It replaces the earlier draft and includes the later decisions | SRS v1 is archived |
| 2026-11-25 | Keep T-Tech Studio automation in a later phase | Launch uses a one-way Google Drive summary | Avoids blocking launch on integration details |

## Log

### 2026-11-25

- Consolidated the project around the current SRS and an explicit launch checklist.

### 2026-11-27

- Added samples to T-Tech samples; Sample 1 is the first sample.
- Only 3 pages designed in this session: Home, Get Quote, Sample Quote.
- Work session notes (feedback for next iteration):
  - Voice recordings should always be placed to the right of the screen, expanding left. Code can be changed to expand right instead; no scroll bar (scroll bar reduces aesthetics).
  - Like icons should be ~20% smaller.
  - Sample Quote is disliked; keep Home (~90% liked) and Get a Quote.
  - Work with dark mode; search for a better colour palette.
  - Get proper wording, inspiration, fonts, and modals for forms.
  - Carousel background should change; options to consider: first sample's background, a nature picture, another solid colour picture, or a glass window.
  - Also , like the move from one section of a page usually has a visible background change either diffrence in colour/pattern/animation
  - the title "print that gets seen" and th ecarousel would lok excellent if they filled one esction..meanig one device window space..for  LAPTOP THAT IS
# T-Tech Website

## Design references

- [[T-Tech Promotional Image Palette]]
