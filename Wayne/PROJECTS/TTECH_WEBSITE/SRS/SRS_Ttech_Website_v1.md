# Software Requirements Specification (SRS)

*Digital Printing Business Website*

- **Project name:** Digital Printing Business Website
- **Document version:** 1
- **Prepared for:** T-Tech Suppliers & General Dealers Ltd
- **Prepared by:** Prince Msowoya
- **Date:** 4 October 2026
- **Target live date:** 1 March 2027

This document describes what is expected from a professional website for T-Tech Suppliers & General Dealers Ltd. The website must market our services, let customers request quotes, upload artwork, pay, and track their jobs, and let staff manage jobs efficiently. It replaces versions 1 and 2. Decisions made in the question-and-answer round are built into it.

## Key decisions at a glance

| Topic | Decision |
|---|---|
| Launch products | Banners and pull-up banners; stickers and labels; branded T-shirts and apparel; PVC ID cards; large-format printing |
| Prices | No fixed prices on the website at launch. Every product is "Request a Quote". |
| Money | Malawi Kwacha only |
| Payment | Cash on collection, bank transfer, mobile money. Customers upload proof of payment. |
| Accounts | Customers must register before asking for a quote or ordering |
| Quotes | Valid for 14 days. Staff write the quote on the website. The customer accepts it on the website. |
| Files | PDF, JPG, PNG and ZIP. Largest file 10 MB. |
| Language | English only at launch |
| Delivery | Yes, for items we install. Transport cost is added by staff by hand. |
| Staff logins | Prince and Galf |
| Link to shop program | Website orders go automatically into T-Tech Studio |
| Before launch | Staff run 15 practice orders |
| Success target | 15 online quotes or orders per month |

## How the website and WhatsApp work together

This rule keeps the work simple for staff and keeps one clear record of every job.

- **The website is the official record.** Quotes, acceptance, files, payments and job progress all live on the website.
- **WhatsApp is for talking and reminders.** Staff never need to type the same thing twice.
- **Quote steps:** (1) The customer sends a quote request on the website. (2) The website emails the customer to say it arrived. The shop's WhatsApp Business number also sends its automatic greeting message. (3) Staff write the quote once, on the website. (4) The website emails the quote to the customer. Staff also send a short WhatsApp message saying the quote is ready, as a second way of reaching them. (5) The customer presses "Accept" on the website and ticks the agreement box.
- **Proofs (a picture of how the finished print will look) at launch:** the designer sends the proof on WhatsApp. The customer replies "OK" on WhatsApp. Staff save that reply and attach it to the order on the website. Approving proofs on the website itself comes later.

## 1. Purpose

A modern, mobile-friendly website that helps the business attract customers, display print services clearly, receive and manage orders, and reduce back-and-forth on WhatsApp, calls, and email.

It serves retail customers (individuals) and business customers (companies, schools, churches, NGOs, shops, institutions). At launch, business customers are treated like all other customers.

The main aim is to turn visitors into paying customers by making it easy to understand our services, request a price, upload print files, approve artwork, and track jobs.

## 2. Scope

### In the first launch

- A public marketing website.
- A catalogue of the five launch products.
- Quote requests with file upload.
- Customer accounts (registration is required).
- Accepting quotes on the website.
- Payment by cash, bank transfer and mobile money, with proof of payment upload.
- Job tracking with seven simple statuses and automatic emails.
- Collection or delivery.
- An admin area for Prince and Galf.
- Three basic reports.
- A link so orders go into T-Tech Studio.
- WhatsApp contact button and the shop's WhatsApp Business greeting and away messages.
- Email, Google Maps and visitor counting.

### Not in the first launch (see section 14)

- Shopping cart, fixed prices and online checkout.
- Card payments and payment links.
- Proofs approved on the website.
- Automatic SMS and WhatsApp messages.
- Company accounts with special prices and credit.
- Re-ordering an old job, saved addresses, discount codes.
- Automatic delivery price calculation.
- Blog, Promotions and Templates pages.
- Chichewa version.
- Extra reports.
- The other 15 product groups.
- The AI assistant (to be defined separately).

## 3. Business Information and Dates

| Item | Who provides it | When |
|---|---|---|
| Business name | T-Tech Suppliers & General Dealers Ltd | Confirmed |
| Logo, brand colours, tagline | From the business | 1 week after this document is approved |
| Phone and WhatsApp numbers, email, shop address, opening hours | From the business | Already have |
| Social media links | From the business | 1 month after approval |
| Photos of completed jobs, shop and team | From the business | 1 month after approval |
| Terms and conditions, privacy policy, refund and reprint policy, delivery and collection policy | Written by Galf | 1 month after approval |
| About Us text, frequently asked questions, artwork guidelines in simple words | Written by Galf | 1 month after approval |
| Product list with sizes, materials, finishes, minimum quantities and pricing rules | From the business | Date to be set (pricing is complex) |
| Turnaround time for each launch product | From the business | Date to be set |
| Bank name and account name, mobile money services to show | From the business | Date to be set |
| Company registration and tax details for receipts and the website | From the business | Date to be set |
| Website name (domain) and hosting | Chosen and paid by the business | Not yet chosen. Part of the budget. |

## 4. People and Roles

| Role | What they do |
|---|---|
| Visitor | Anyone browsing. Can see services, portfolio, contact details and the WhatsApp button. Must register to request a quote. |
| Customer | A registered person or organization. Requests quotes, uploads artwork, accepts quotes, pays, and tracks jobs. |
| Staff: Galf and Victor | Check artwork, price quotes and design work, and update job progress. Galf also updates photos and prices on the website. |
| Administrator | Prince and Galf log in to the admin area. |
| Owners of website name, hosting and passwords | Prince Msowoya and Chisomo Msowoya |
| Support after launch | Prince Msowoya |

## 5. Product Catalogue

### Launch products

- Banners and pull-up banners
- Stickers and labels
- Branded T-shirts and apparel
- PVC ID cards
- Large-format printing

### Added later, one by one

Business cards, flyers and leaflets, brochures, posters, invitation cards, wedding stationery, certificates, receipt books and invoice books, letterheads and branded stationery, booklets, manuals and reports, calendars, photo printing, mugs and promotional gifts, signage, vehicle branding.

### Each product page contains

- Product name, pictures or mockups, and a clear description.
- Available sizes, materials, thickness where it matters, colour options, single or double sided, finishing options (such as lamination, folding, binding, eyelets, cutting), and quantity options.
- Estimated turnaround time.
- A "Request a Quote" button (no price is shown at launch).
- Artwork requirements in plain words.
- A file upload box.

## 6. Functional Requirements (What the Website Must Do)

### 6.1 Public pages

| ID | Requirement |
|---|---|
| FR-01 | The website shall have a professional home page that introduces the business and its key services. |
| FR-02 | The home page shall have large, easy buttons: "Get a Quote" and "WhatsApp Us". |
| FR-03 | The website shall show featured products, portfolio samples and contact information. |
| FR-04 | The website shall have an About Us page covering the business, experience, equipment, quality standards and mission. |
| FR-05 | The website shall have a Services page listing all printing and design services. |
| FR-06 | The website shall have a Portfolio page with examples of finished work sorted by product type. |
| FR-07 | The website shall have a Contact Us page with phone numbers, email, map, opening hours, a contact form and a WhatsApp link. |
| FR-08 | The website shall have FAQ pages on artwork, turnaround, payments, delivery, revisions and collection. |
| FR-09 | Galf shall be able to change photos and prices without a developer. Other changes (text, banners, page layout) are made by Prince. |

### 6.2 Customer accounts

| ID | Requirement |
|---|---|
| FR-10 | Customers shall register with name, phone number, email address and password. |
| FR-11 | Customers shall confirm their account through a link sent to their email. |
| FR-12 | The website shall offer sign in, sign out and password reset. |
| FR-13 | Customers must be registered and signed in before they send a quote request or place an order. |
| FR-14 | Customers shall be able to see their own quotes, orders and job status. |

### 6.3 Quote requests

| ID | Requirement |
|---|---|
| FR-15 | Registered customers shall be able to send a quote request. |
| FR-16 | The quote form shall collect customer name, phone number, email, product type, quantity, size, material, finishing, deadline, collection or delivery choice, and special instructions. |
| FR-17 | The quote form shall let the customer attach pictures, documents or artwork. |
| FR-18 | After a request is sent, the website shall email the customer to confirm it arrived. |
| FR-19 | The website shall tell staff when a new quote request arrives. |
| FR-20 | Staff shall write the quote once, on the website: price, turnaround time, payment instructions, transport cost where needed, and the quote's expiry date. |
| FR-21 | A quote shall be valid for 14 days. After that it shows as expired. |
| FR-22 | The website shall email the quote to the customer. Staff shall also send a short WhatsApp message to say the quote is ready. |
| FR-23 | The customer shall be able to accept the quote on the website by pressing "Accept" and ticking an agreement box. |
| FR-24 | The website shall save the date, time and customer name of every acceptance. |

### 6.4 Orders

| ID | Requirement |
|---|---|
| FR-25 | When a customer accepts a quote, the website shall create an order with its own unique order number. |
| FR-26 | The website shall email the customer an order confirmation and show the full order summary. |
| FR-27 | The website shall show the payment instructions for the order. |
| FR-28 | Each confirmed order shall be sent automatically to T-Tech Studio. |

### 6.5 Artwork upload and approval

| ID | Requirement |
|---|---|
| FR-29 | Customers shall be able to upload artwork when sending a quote request or after accepting it. |
| FR-30 | The website shall accept PDF, JPG, PNG and ZIP files, up to 10 MB each. |
| FR-31 | Before upload, the website shall show the artwork rules (size, sharpness, colours, margins) in plain words, and the largest allowed file size. |
| FR-32 | The website shall show upload progress. |
| FR-33 | The website shall store uploaded files safely and link them to the right quote or order. |
| FR-34 | Staff shall be able to mark artwork as approved, rejected, or needing correction. |
| FR-35 | If a file is bad or unsuitable, staff shall call the customer to ask for a better file. There is no charge for this. |
| FR-36 | Staff shall be able to attach a saved copy of the customer's proof approval (from WhatsApp) to the order. |
| FR-37 | If a file will not upload, the customer may send it on WhatsApp or bring it to the shop, and staff shall attach it to the order by hand. |
| FR-38 | Production shall not start until artwork is approved and payment is confirmed, unless an administrator allows it. At launch this is a shop rule that staff follow. |

### 6.6 Payments

| ID | Requirement |
|---|---|
| FR-39 | Customers shall be able to pay by cash on collection, bank transfer or mobile money. |
| FR-40 | The website shall show clear payment instructions, including bank name, account name and mobile money details. |
| FR-41 | Customers shall be able to upload proof of payment for bank transfers and mobile money. |
| FR-42 | Staff shall be able to confirm, reject, or mark a payment as received. |
| FR-43 | Each order shall show one of these payment statuses: unpaid, partly paid, paid, refunded, or payment being checked. |
| FR-44 | Receipts shall be made by hand or with T-Tech Studio. |
| FR-45 | Prices and payments shall be shown in Malawi Kwacha only. |

### 6.7 Job tracking

Customers see these seven statuses:

| Status | Meaning |
|---|---|
| Quote sent | Staff have sent the price |
| Awaiting payment | Payment or deposit is needed |
| Artwork review | Staff are checking the artwork |
| In production | Printing or finishing is under way |
| Ready | The job is finished and waiting for collection or delivery |
| Completed | The customer has received the job (collected, delivered or installed) |
| Cancelled | The order will not go ahead |

*"Ready" and "Completed" are different. "Ready" means the job is finished and waiting. "Completed" means the customer now has it.*

| ID    | Requirement                                                                                                                        |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------- |
| FR-46 | Customers shall be able to see their order status when signed in.                                                                  |
| FR-47 | Staff shall update the status from the admin area.                                                                                 |
| FR-48 | The website shall email the customer when the status changes to: Quote sent, Awaiting payment, In production, Ready, or Cancelled. |
| FR-49 | Staff shall be able to enter an estimated finish date and collection instructions.                                                 |

### 6.8 Delivery and collection

| ID | Requirement |
|---|---|
| FR-50 | Customers shall be able to choose shop collection or delivery. |
| FR-51 | Delivery is for items that our staff install. For delivery, the website shall collect the full address, recipient name, phone number and notes. |
| FR-52 | For places further from the shop, staff shall add the transport cost to the quote by hand. |
| FR-53 | Staff shall be able to mark an order as ready, delivered, or failed delivery. |
| FR-54 | The website shall show the collection address, opening hours and what the customer must bring. |

### 6.9 Admin area

| ID | Requirement |
|---|---|
| FR-55 | Only Prince and Galf shall have access to the admin area, using secure sign-in. |
| FR-56 | The admin area shall show new quote requests, orders waiting for payment checks, artwork waiting for review, jobs in production, and completed orders. |
| FR-57 | Administrators shall be able to add, change, archive and group products. |
| FR-58 | Administrators shall be able to set sizes, materials, finishing options, quantities and turnaround times. |
| FR-59 | Administrators shall be able to add and remove staff logins. |
| FR-60 | Administrators shall be able to change banners, portfolio pictures, FAQs, policies and contact details. |
| FR-61 | Administrators shall be able to search and filter orders. |
| FR-62 | The website shall keep a record of key actions: payment confirmation, artwork approval, status changes and refunds, with who did it and when. |
| FR-63 | The admin area shall show these three reports: sales totals (day, week, month); orders received, completed, cancelled and pending; jobs in production. |

### 6.10 Link with T-Tech Studio

| ID | Requirement |
|---|---|
| FR-64 | Orders confirmed on the website shall go into T-Tech Studio automatically, so staff do not type them twice. |
| FR-65 | Receipts shall come from T-Tech Studio. |

## 7. Website Pages (First Launch)

| No. | Page | What it has |
|---|---|---|
| 1 | Home | Introduction, main buttons, featured products, contact shortcuts |
| 2 | About Us | Company story, values, team, equipment, quality, opening hours |
| 3 | Services | Printing, branding, design and finishing services |
| 4 | Products | The launch products, grouped by category |
| 5 | Product Details | Options, artwork rules, file upload, Request a Quote button |
| 6 | Get a Quote | The quote request form |
| 7 | How to Order | Simple steps: quote, accept, artwork, proof, payment, production, collection or delivery |
| 8 | Artwork Guidelines | How to prepare print-ready files |
| 9 | Portfolio | Photos of past work by product type |
| 10 | FAQs | Common customer questions |
| 11 | Contact Us | Phone, WhatsApp, email, map, form, opening hours |
| 12 | Login / Register | Create and manage an account |
| 13 | Order Tracking | Job status page for customers |
| 14 | Policies | Privacy, terms, refunds, delivery, artwork approval |

## 8. Quality Requirements

### Speed

| ID | Requirement |
|---|---|
| NFR-01 | Main pages shall open within 3 seconds on a normal mobile connection. |
| NFR-02 | Pictures shall be made smaller without visibly losing quality. |
| NFR-03 | The website shall work properly with about 20 people using it at the same time. |
| NFR-04 | The website shall show progress while large files upload. |

### Phones and tablets

| ID | Requirement |
|---|---|
| NFR-05 | The website shall work fully on smartphones, tablets, laptops and desktop computers. |
| NFR-06 | Asking for a quote and tracking a job shall be easy on a phone. |
| NFR-07 | Buttons shall be large enough to tap easily. |
| NFR-08 | The WhatsApp button shall work correctly on phones. |

### Security

| ID | Requirement |
|---|---|
| NFR-09 | Every page shall use a secure connection (the padlock in the browser). |
| NFR-10 | Passwords shall be stored safely so that nobody, including staff, can read them. |
| NFR-11 | Customer files, payment records and personal details shall be visible only to authorized people. |
| NFR-12 | Each staff member shall see only what they need. |
| NFR-13 | Uploaded files shall be checked and harmful files blocked. |
| NFR-14 | The website, its files and the order records shall be backed up regularly. |
| NFR-15 | Public forms shall have protection against spam. |

### Easy to use

| ID | Requirement |
|---|---|
| NFR-16 | The website shall use plain language that non-technical customers understand. |
| NFR-17 | Prices, turnaround times, requirements and next steps shall be clearly shown. |
| NFR-18 | Text shall be easy to read with strong colour contrast. |
| NFR-19 | Forms shall show clear messages when something is missing or wrong. |
| NFR-20 | Pictures shall have short descriptions where practical. |

### Google search and visitors

| ID | Requirement |
|---|---|
| NFR-21 | The website shall be set up so Google and other search engines can find it. |
| NFR-22 | The website shall count visitors using Google Analytics or a similar tool. |
| NFR-23 | The website shall support sharing links on social media. |
| NFR-24 | The business location and contact details shall be set up to help local search results. |

## 9. Links With Other Services

| Service | Use at launch |
|---|---|
| WhatsApp | A contact button on the website. The shop's WhatsApp Business number sends an automatic greeting message and an away message when the shop is closed. |
| Email service | Confirmations, quotes, and status emails |
| Google Maps | Shop location and directions |
| Google Analytics | Visitor counts and popular pages |
| Cloud storage | Safe storage of customers' artwork files |
| T-Tech Studio | Website orders go in automatically |

## 10. Content Needed

Dates are in section 3. Galf writes the policies, About Us text, FAQs and artwork guidelines.

- **Text:** company profile, product descriptions, artwork guidelines, FAQs, terms and conditions, privacy policy, refund and reprint policy, delivery and collection policy, payment instructions, turnaround times.
- **Pictures and files:** logo, photos of the shop, team, printers, finishing equipment and finished work, product mockups, promotional banners.
- **Other:** social media links, brand colours and preferred fonts.

## 11. Artwork and Order Policy

The website must show these terms before a customer sends a job:

- Customers are responsible for checking spelling, sizes, colours and content before approval.
- Production begins only after payment is confirmed and artwork is approved, unless agreed otherwise.
- If a file is unsuitable, we will ask the customer for a better one at no charge. If the customer wants us to design or redo the artwork, staff will price that work.
- Colours on a screen may look different from the printed result.
- Low-quality pictures may print badly.
- Turnaround time starts after artwork approval and payment confirmation.
- We may refuse files that are unsuitable, unlawful, offensive, or copy someone else's work.
- What happens to a customer's money if they cancel after paying or after artwork approval (the deposit rule) will be added once the business decides it.

## 12. Reports

- Sales totals: daily, weekly and monthly.
- Orders received, completed, cancelled and pending.
- Jobs in production.

Other reports (money still owed, orders waiting for artwork approval, best-selling products, top customers, income by product group, quote-to-order rate, discount use, delivery versus collection) come after launch.

## 13. Acceptance Tests

The website is accepted when these are shown to work:

1. A customer can browse the products and see the product options.
2. A registered customer can send a quote request with an attached file.
3. Staff can write a quote on the website, and the customer receives it by email.
4. The customer can accept the quote on the website, and receives an order confirmation.
5. Staff can see and manage quotes, orders, uploaded files, payments and job statuses.
6. Staff can attach the customer's proof approval (saved from WhatsApp) to an order.
7. Staff can take an order from payment received, through production, to Ready and Completed.
8. The customer receives an email when the status changes to Quote sent, Awaiting payment, In production, Ready, or Cancelled.
9. The website works properly on Android phones, iPhones, tablets, laptops and desktop computers.
10. The website uses a secure connection, and the admin area is protected by secure sign-in.
11. Galf can change photos and prices without a developer.
12. The owner can see the three reports.
13. An order from the website appears in T-Tech Studio.
14. Staff have run 15 practice orders through the whole process before public launch.
15. Galf and Viviene have been trained, and a simple written guide has been handed over.

## 14. Delivery Phases

### Phase 1: First launch (target live date 1 March 2027)

Everything in sections 6 to 13 above.

### Phase 2: After launch

- Shopping cart, fixed prices and online checkout.
- Card payments and payment links.
- Proofs approved on the website.
- Automatic WhatsApp and SMS messages.
- Automatic receipts and invoices from the website.
- Saved addresses, re-ordering, and a fuller order history.
- Automatic delivery price calculation.
- The website blocks production until artwork is approved and payment confirmed.
- Discount codes and promotions page.
- Templates Download page, Blog/Resources page, testimonials.
- Editable search titles and descriptions for each page.
- Showing social media posts on the website.
- More reports.
- The other 15 product groups.

### Phase 3: Later

- Company accounts with special prices, purchase orders and credit.
- Stock management.
- Accounting system link.
- Delivery company link.
- Online design tool.
- Loyalty and referral programme.
- Chichewa version.
- AI assistant to help with decisions and ease staff work (to be defined separately).

## 15. After Launch

- **Ownership:** Prince Msowoya and Chisomo Msowoya hold the website name, hosting account and all passwords.
- **Fixes and changes:** Prince Msowoya. Small problems within about 2 days, very serious problems within about 4 days.
- **Success target:** 15 online quotes or orders per month.
- **Reply to quote requests:** within 15 minutes during shop hours is the aim. When the shop is closed, customers see the shop's away message.
- **Training:** Galf and Viviene, before launch.

## 16. Still To Be Confirmed

These were left open or are not yet consistent. They should be settled before building starts.

### From the business

- Deposit and cancellation rule: what happens to a customer's money if they cancel after paying or after artwork approval.
- Who handles refunds and how the money is returned.
- Turnaround time for each of the five launch products.
- The product list with sizes, materials, finishes, minimum quantities and pricing rules, and a date to provide it.
- Bank name and account name, and the mobile money services to show.
- Company registration and tax details to show on receipts and the website.
- Website name wanted, and whether it is available. Also whether the existing business email can be used with that name.
- Budget, including hosting and website name.
- Who works out delivery and transport costs for each quote, and the rule used.
- Cost of fixes and changes after launch.

### From Prince

- **Launch date:** 1 March 2027 is used here. An earlier answer said 1 January. Confirm which.
- **Staff names:** Galf and Victor check artwork and update progress. Only Prince and Galf are listed to log in. Galf and Viviene are to be trained. Confirm who needs a login and who needs training.
- **Registration before quotes:** the answer to "must register first" was applied to quote requests as well as orders. Confirm.
- **Quote acceptance on the website** is in the first launch, because you said it is better and simple. The rest of checkout stays later.
- **Automatic WhatsApp status messages** stay in Phase 2. At launch, customers get automatic emails for status changes, and staff send WhatsApp messages by hand where needed.
- **Which status changes send an email:** Quote sent, Awaiting payment, In production, Ready, Cancelled. Confirm.
- **Link to T-Tech Studio** is in the first launch, which adds work. Confirm this fits the time and budget.
- **Backups:** how often, where kept, and who checks they work.
- **When to check the success target:** for example 3 months after launch.
- **Date for training Galf and Viviene.**
