# T-Tech Website: Design Decisions Summary

Date: 10 October 2026 Prepared by: Prince Msowoya

This note collects everything decided since the requirements document (version 3.1). It replaces the earlier version of this summary. Your answers and my suggestions are now all included as decisions. Things that are still open are in section 5.

Related notes: [[00 Page map]], [[01 Quote journey]], [[02 Customer screens]].

---

## 1. Decisions

### How a quote works

- Online quotes are written on the website for now. Walk-in customers are still quoted in T-Tech Studio as today.
- The quote goes to the customer by email and on WhatsApp, both as a link to view the quote on the website.
- The customer reads the quote, ticks the agreement to the terms, pays 50%, uploads proof of payment, and presses OK.
- **The 50% deposit applies to every product and every order. Work starts only after the 50% is paid and approved.**
- A quote is valid for 14 days.
- An expired quote stays on the customer's page with an **Expired** tag. The customer can press **Revive**. The quote then shows **Checking** and is not active yet, so the customer cannot accept it. Staff check the price first. If the price is still right, the quote becomes active again with a new 14 days. If not, staff write an updated quote.
- Staff can contact the customer directly on WhatsApp or by phone call to get a better file or more details.

### Payments

- Cash is approved by staff. No picture is needed for cash.
- For bank transfer and mobile money, a picture of the proof of payment must be on the website before staff approve.
- The customer can pay the other 50% at any time. The order shows "Partly paid" until then, and "Paid" after.
- **The customer cannot collect the finished job until it is paid in full.**
- Many customers will not come back to upload proof for the second payment. So staff can upload the picture of the proof on the customer's behalf and approve it. The website records who uploaded it and who approved it, with the date and time.

### The quote form

The quote form is guided and visual:

- The customer picks a product, for example banners.
- A slideshow of past work opens as a pop-up, and the customer picks the ones they like as inspiration. They can skip it.
- A short set of questions follows, for example main colour and side colour. Each product has its own questions.
- The customer can upload their own design, write their own description, or record a voice note.
- The customer can add more than one product to the same request.
- The customer can save an unfinished request and finish it later. It shows as **Draft**.
- A review screen shows everything before the customer presses Send.
- **Talk to staff** is available on every step. It opens a pop-up with a WhatsApp button that already has the product filled in, and a "please call me" option that staff can see.
- This is a request, not a shopping cart. There are no prices and no checkout at launch.

### Quotes, orders and the customer area

- My orders is not a cart. An order only appears after a quote is accepted and the 50% is paid.
- **Every order is tied to the quote it came from.** The quote page has a View order button after acceptance, and the order page has a View the quote button.
- Public pages are open to everyone. The customer area is only for signed-in customers.
- Customer area screens: Register and sign in, My account, Get a quote, My quotes, One quote, My orders, One order. "One order" is the Order Tracking page from the requirements document.

### Messages, mistakes and changes

- On every quote and order there is a button: **Something is wrong or needs changing**.
- It opens a pop-up with cards, each with a title and a short description: Change my order or quote, Report a mistake, Complaint, Suggestion, Question, Other.
- After choosing a card, the customer writes a message or records a voice note, and can add a picture.
- Staff see it in a Messages list, tied to that quote or order. When staff reply, the customer is told by email and WhatsApp, and the reply shows under the quote or order.
- If a change affects the price, staff send a new quote. Staff can also still be reached directly on WhatsApp or by phone call.

### Link with T-Tech Studio

- T-Tech Studio tracks the business money, so only the money side goes across.
- **At launch,** when a quote is accepted and the deposit is paid, the website saves a short summary of the order into a set Google Drive folder. The summary has the order number, customer name, what was ordered, price, amount paid, and Partly paid or Paid, plus a link back to the quote on the website. Staff read it and enter it into Studio.
- It goes one way only: website to Drive. The website keeps the real record of everything. Drive only gets a copy of the summary.
- Studio reads a RAR file from Google Drive, so it cannot read the summary on its own yet. I said earlier that Studio would pick it up by itself. That was wrong.
- **Next phase:** change the back part of Studio so it can take the website's data and turn it into a database entry. The proper secure connection comes after Studio moves to an online records store.
- **Flag for that phase:** before this starts, get the actual details of how Studio handles its backup from Google Drive: where the RAR file is kept, how it is named, what is inside it, and how Studio reads it. The website's data must fit that, so the change is smooth.

### Safety and privacy

- The website gets a limited key for Google Drive that can write to that one folder only, not your whole Drive.
- Payment proof pictures and customers' phone numbers stay out of Drive. A link back to the website is enough.
- Anything private in the slideshow photos, such as people's names, logos and ID cards, is hidden, or permission is asked first.
- Slideshow pictures are light so they load quickly on a phone with slow internet.

### Reminders

- Customers get a reminder before a quote expires, and when the second 50% is still unpaid. At launch staff send these on WhatsApp by hand. Automatic reminders come later.

---

## 2. Staff side

Staff need these in the admin area, in addition to what is already in the requirements document:

- One clear page per quote request, showing the product, the answers, the pictures the customer liked, the files, the description, the voice note, and the customer's questions.
- Upload a proof of payment picture on a customer's behalf, and approve a payment. Cash needs approval only.
- A Messages list for the "Something is wrong or needs changing" messages, with the reply tool.
- A list of revive requests. Staff check the price, then approve the quote or write an updated one.

---

## 3. Photos and testing

- The slideshow needs good photos of past jobs for each of the five launch products. Photos are due a month after approval, so watch that date. If they are late, launch with the questions and Talk to staff, and add the slideshow after.
- Before building, have Galf and Victor walk through a pretend job on paper sketches of the quote form and the customer screens.

---

## 4. Changes to the requirements document (version 3.2)

When you say go, I will update the requirements document with these:

- The 50% deposit on every order, work starts only after it is approved, and no collection until paid in full.
- The quote goes out as a link by email and WhatsApp.
- Cash needs approval only. Staff can upload proof on the customer's behalf, and the website records who did it.
- Expired quotes show an Expired tag. Revive puts the quote in Checking, staff check the price, and only then does it become active with a new 14 days.
- The guided, visual quote form, with the slideshow, product questions, own design upload, voice note, save for later, review screen and Talk to staff.
- Online quotes are written on the website.
- The Messages feature: Something is wrong or needs changing.
- Orders tied to quotes, and the customer screens.
- The link with T-Tech Studio becomes the Google Drive summary at launch. The Studio change, with the flag about Studio's backup details, moves to the next phase. The "orders go into Studio automatically" requirement, its acceptance test and the earlier Q37 answer move with it.
- Reminders, by hand at launch.

---

## 5. Still open

- The questions for each of the five launch products. Galf and Victor should correct my drafts.
- The date for photos of past work for the slideshow.
- Which tags should My quotes and My orders show, and is the first list in [[02 Customer screens]] right?
- Who in the shop answers the Messages, and how fast should the customer expect a reply?
- The open items from section 16 of the requirements document still apply, including the launch date (1 March 2027 or 1 January), who needs a login and training, backups, the budget, the refund process, and who works out transport costs.

---

## 6. Suggested next steps

1. Check the drawings in [[02 Customer screens]] and tell me what is wrong.
2. Make rough sketches of the quote form and each customer screen.
3. Show the sketches to Galf and Victor.
4. Update the requirements document to version 3.2.