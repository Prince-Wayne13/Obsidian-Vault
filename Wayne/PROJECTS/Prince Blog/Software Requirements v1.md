# Software Requirements Document (SRD)

**Project:** Prince's Space, a personal journal-portfolio website (working title) **Version:** 0.9 (draft for discussion) **Date:** 11 October 2026 **Owner:** Prince

---

## 1. Vision

A living journal on the web where the owner documents who he is: what he has learned, what he is studying, what he is working toward, and how his mind works. It is **not** a teaching site and **not** a social network. Visitors come to get to know the owner, say hello, ask a question, and share a little of themselves in return.

The feeling should be a handwritten journal: warm, playful, a little messy on purpose, with dashed arrows, sticky notes, stamps, and doodles.

**Core idea in one line:** _"This is me, this is what I did, this is what I'm learning. What about you?"_

### Goals

1. Let the owner account for everything he does, productive or leisure, in one place.
2. Show learning progress and goals visually (meters, calendar marks).
3. Give visitors a gentle, low-pressure way to interact (comments, posts, a weekly picture, short private chats).
4. Be fun: games, reveals, and animation, not a corporate portfolio.
5. Be built so it can later become a mobile app.
6. Be a place visitors want to settle into and come back to: immersive, themeable and playful, with a 3D character who guides them around.

### Non-goals (for now)

- Teaching or tutorials.
- Infinite feeds, likes-for-clout, follower counts, or algorithms.
- Public direct-messaging inboxes that store history.
- A native mobile app (planned for a later phase).

---

## 2. Users and Roles

|Role|Description|Can do|
|---|---|---|
|**Owner / Admin**|The site owner|Everything: edit journal, manage goals, moderate, see contact details of all accounts, ban users|
|**Member**|Registered visitor with a visible name|Comment, post in sections, submit weekly picture, join private rooms, play games|
|**Anonymous Member**|Registered visitor who chooses to mask their identity from other members|Same as Member, but others see only an alias and avatar. Anonymity is the member's own privacy choice, not something the admin approves. The admin can still see the registration details|
|**Guest**|Not registered|See the landing page and galaxy intro, the **public portfolio**, and any journal posts the owner marked public. Can register. Cannot see community pages, comments, the Saturday gallery, the map, rooms, or games|

> **Key rules:**
> 
> 1. Anonymity is a **mask between members**. Members are anonymous to each other, but every account (anonymous or not) is registered with personal details that only the admin can see. This allows rule enforcement and handling of spam or abuse.
> 2. Members can choose to **reveal** their username or name to the other person inside a private room (see 4.7). Revealing never exposes email or phone number.
> 3. The admin does not approve anonymity. It is a setting the member controls.

---

## 3. Site Structure

1. **Home / The Desk:** welcome note, this week's status, current goal meters, latest journal entries, countdown to the Saturday reveal.
2. **Portfolio and Journal** (owner content): the portfolio is public; journal posts are for members unless marked public
    - Learning Log: what I learned in school ("straight from my head") and what I'm studying now
    - Productivity Calendar
    - Goals and Meters
    - About my mind: how I think, what I like
3. **Community Pages** (open to members): Spiritual, Health, Engineering, Economics, Art, General
4. **Weekly Picture Wall:** submit up to three pictures per week; reveals on Saturday at 6pm
5. **Map and Intersections:** an interactive map of location "bumps" (opt-in) and a calendar showing shared learning topics
6. **Rooms:** short private timed chats in a 3D space
7. **Arcade:** small cute games
8. **Contact / Ask Me:** question box and contact form
9. **Account:** profile, privacy and presence settings

---

## 4. Functional Requirements

Priority key: **M** = Must (MVP), **S** = Should (Phase 2), **C** = Could (Phase 3+)

### 4.1 Learning Log and Portfolio

|ID|Requirement|Pri|
|---|---|---|
|FR-1.1|Owner can create entries of type: _Learned in school_, _Currently studying_, _Project_, _Leisure_, _Reflection_.|M|
|FR-1.2|Each entry has a title, date, body text, tags, optional images, and a category (Spiritual, Health, Engineering, Economics, Art, General).|M|
|FR-1.3|Entries can be linked to a goal so they count toward its meter.|M|
|FR-1.4|Entries have a "how I feel about this / why I like it" field to capture how the owner's mind works.|S|
|FR-1.5|Each entry has a visibility: **Public** (anyone, including guests), **Members** (registered members only, the default for journal posts), or **Private draft** (only the owner).|M|
|FR-1.7|A public **Portfolio** page shows the owner's **About** page, **projects**, and **learning goals with their meters**. Calendar highlights stay members-only. It is open to everyone and works as the owner's career showcase, with a clean timeline view.|M|
|FR-1.6|A "mind map" view connecting related entries with dashed arrows.|C|

### 4.2 Productivity Calendar

|ID|Requirement|Pri|
|---|---|---|
|FR-2.1|Month, week, and day calendar views.|M|
|FR-2.2|Each day can hold multiple marked events, color-coded by type (learned, built, practiced, leisure, rest).|M|
|FR-2.3|Clicking a day shows what was done and learned, with links to the related journal entries.|M|
|FR-2.4|Streaks and a "productivity heat" overview (like a contribution graph, but styled like a journal).|S|
|FR-2.5|The built-in calendar is the source of truth. Export to .ics; optional Google Calendar sync can be added later.|S|
|FR-2.6|Leisure activities are first-class, so the calendar accounts for the _whole_ life, not only work.|M|

### 4.3 Learning Goals and Meters

|ID|Requirement|Pri|
|---|---|---|
|FR-3.1|Owner can create goals with a title, category, target (hours, chapters, projects, or a custom unit), and deadline (optional).|M|
|FR-3.2|Each goal shows a progress meter (bar, dial, or hand-drawn gauge) that updates from linked entries or manual updates.|M|
|FR-3.3|Goal statuses: _Not started, In progress, Paused, Done_.|M|
|FR-3.4|Visitors can comment on a goal.|S|
|FR-3.5|Milestone celebrations (a small animation when a meter fills).|C|

### 4.4 Community Pages and Posts

|ID|Requirement|Pri|
|---|---|---|
|FR-4.1|Six sections: Spiritual, Health, Engineering, Economics, Art, General. Owner can add more later.|M|
|FR-4.2|Members can post short notes: findings of the day, a thought, or a question.|M|
|FR-4.3|Posts can be published under the member's name or anonymously.|M|
|FR-4.4|Comments on posts and on the owner's entries, with the same name/anonymous choice.|M|
|FR-4.5|Post types framed for sharing, not teaching: _"Here's what I found"_, _"This is me"_, _"I have a question"_.|S|
|FR-4.6|Report button on every post and comment.|M|
|FR-4.7|Owner can pin, hide, or delete any content.|M|
|FR-4.8|No like counts or follower counts. Optionally a small set of reactions (e.g., "me too", "interesting").|S|

### 4.5 Accounts and Presence

|ID|Requirement|Pri|
|---|---|---|
|FR-5.1|Sign-up requires a unique username, password, full name, email (verified through a confirmation link), phone number (collected and stored, but not SMS-verified in the first version), and acceptance of the Community Agreement.|M|
|FR-5.2|At sign-up (and any time later), the member chooses to show their username or to be **masked** with an alias and avatar. Other members never see a real name unless the member reveals it. Past posts keep their original setting unless edited.|M|
|FR-5.3|Contact details are visible only to the admin.|M|
|FR-5.4|Presence setting: _Visible_ (shows as "around now") or _Hidden_.|M|
|FR-5.5|Members can delete their account and their content.|M|
|FR-5.6|Admin can warn, suspend, or ban an account, and block the contact used to sign up.|M|
|FR-5.8|Phone numbers are collected **only for safety and follow-up if something goes wrong** (abuse, a serious report, account recovery, or a legal request). They are admin-only, never shown to other members, never used for marketing, and not used to track location. The sign-up page states this purpose plainly.|M|
|FR-5.7|Members must be **18 or older**. Sign-up asks for date of birth and blocks anyone under 18. The Community Agreement states the age rule, and the admin can remove any account found to be underage.|M|

### 4.6 Weekly Picture Wall ("Up to three pictures to sum up your week")

|ID|Requirement|Pri|
|---|---|---|
|FR-6.1|Each member can submit up to **three** pictures per week, each with a caption and an optional location tag. Pictures can be replaced or removed until the reveal.|M|
|FR-6.2|Submitted pictures are **hidden** from everyone (except the admin for moderation) during the week. They appear only as sealed "instant photo" placeholders (count only).|M|
|FR-6.3|On **Saturday at 18:00 Johannesburg time (SAST, UTC+2)** the wall "unwraps": an animation reveals all pictures at once as a gallery of instant-style photos.|M|
|FR-6.4|The wall cannot be opened early by anyone, including through direct URLs or API calls.|M|
|FR-6.5|Past weeks are archived and browsable by registered members after reveal.|M|
|FR-6.6|The owner's own pictures are included. Pictures can be shown as anonymous or named, following the member's choice.|M|
|FR-6.7|Admin moderates pictures before reveal (or removes them after).|M|
|FR-6.8|Image upload limits (type, size) and automatic resizing.|M|
|FR-6.9|Optional reminder to submit (email or in-site) on Friday.|S|
|FR-6.10|Each picture has a caption and an optional **location tag**. The location is a coarse place name chosen by the member, never read from the photo itself.|M|
|FR-6.11|All hidden location data (EXIF/GPS) is stripped from uploaded pictures.|M|
|FR-6.12|Look and feel is deliberately different from Instagram: instant-photo frames, the caption handwritten on the back (flip to read), the location shown as a postmark stamp, no likes, no follower counts, no algorithm, and a shuffled order at every reveal.|M|
|FR-6.13|After the reveal, the week's picture locations can appear as pins on the Space map (visible to members).|C|
|FR-6.14|The reveal happens even if only a few pictures were submitted. The revealed gallery then stays on the home page as the **week's highlight** until the next Saturday reveal.|M|
|FR-6.15|**Saturday evening extra (proposed):** the 3D character hosts the reveal with a short countdown scene before the photos unwrap.|S|
|FR-6.16|**Saturday evening extra (proposed):** the owner's **Saturday letter**, a short note about his week with his goal-meter progress, appears with the reveal.|S|
|FR-6.17|**Saturday evening extra (proposed):** members who are present at 18:00 for the live unwrap collect a special **Saturday stamp** for their passport.|S|
|FR-6.18|**Saturday evening extra (proposed):** a **Saturday question** is revealed at 18:00, and members can answer it in one line next to the gallery.|C|
|FR-6.19|**Saturday evening extra (proposed):** the owner can pick a **picture of the week** as a highlight, chosen by the owner and never by votes.|C|

### 4.7 Private Rooms (short timed rooms that disintegrate)

|ID|Requirement|Pri|
|---|---|---|
|FR-7.1|Any two members can start a private room by invitation.|S|
|FR-7.2|A first room between two members is live for **5 minutes**. Rooms between connected members are **3 minutes**. Rooms with the owner are also **5 minutes**. The owner can change each length. Every room shows a visible countdown with a warning near the end, and then **disintegrates** with an "atoms popping" animation.|S|
|FR-7.3|Messages are not stored after the room ends.|S|
|FR-7.4|A **registered member** can request a room with the owner. The owner can accept or decline.|S|
|FR-7.5|Either person can leave, block, or report at any time. A report captures the recent messages for the admin.|S|
|FR-7.6|Each room is a small **3D scene**: two chairs in a quiet space, each person's avatar seated, with the chat appearing as speech bubbles. The room's look follows the chosen theme. The feeling is "just the two of us."|S|
|FR-7.7|Chat is text-only in the first version.|S|
|FR-7.8|Both people are masked by default. Either person can tap **"Reveal myself"** to show their username or name to the other. Reveal is per room, is optional for each side, and cannot be undone within that room.|S|
|FR-7.9|Revealing never shares email, phone number, or any registration detail. Those stay admin-only.|S|
|FR-7.10|Low-end device fallback: a 2D version of the same room.|S|
|FR-7.11|Rooms are for a short "pitch, teach, or ask" conversation. Optional prompt cards help start it (e.g., "one thing I learned this week").|S|
|FR-7.12|**Connect:** before the room ends, either person can tag the other. A connection exists only when **both** people have tagged each other (shown by alias, or by name if revealed).|S|
|FR-7.13|Connected members can open a new room together only after a cooldown of **at least 5 hours**.|S|
|FR-7.14|Either person can remove a connection or block the other at any time.|S|
|FR-7.15|Each member can take part in at most **5 rooms per day**, including rooms with the owner.|S|

### 4.8 Map and Calendar Intersections

|ID|Requirement|Pri|
|---|---|---|
|FR-8.1|**Topic intersections:** members list what they are currently learning. The Space shows where topics overlap and when (e.g., two people on Economics this month), anonymously by default.|S|
|FR-8.2|**Location tag (opt-in):** off by default. A member must switch it on after a plain explanation of what it does, and can pause or turn it off at any time.|C|
|FR-8.3|**Bump:** when two members with the tag on are within about a **football field's radius (roughly 100 metres)** of each other for as little as **1 minute**, the Space records a "bump" and notifies both ("funny, you two were in the same place").|C|
|FR-8.4|Matching uses a radius of about a football field (roughly 100 metres). Exact coordinates are never shown: the map shows the bump as a rounded spot or place name. Notifications are **delayed** (a few hours at least) so nobody can use them to find someone in real time. Raw location data is deleted after matching, and only the bump record is kept.|C|
|FR-8.5|Each bump appears as a **dot on the map** at the area where it happened. Hovering shows the other person's anonymous ID and the area name.|C|
|FR-8.6|In that popup, a member can turn their own ID **off**, so the other person sees only "a member".|C|
|FR-8.7|A bump dot is visible **only to the two people involved**, never to other members.|C|
|FR-8.8|A bump is only a hello. The only follow-ups are to tag the person as a connection or request a room. There are no direct messages, no exact locations, and no live tracking.|C|
|FR-8.9|Every bump has block and report. Blocked members never bump with the blocker.|C|
|FR-8.10|On the website, bumps work through a manual **check-in** or while the site is open with location permission. Automatic background bumping is only for the later mobile app, because websites cannot track location in the background. A check-in stays active for a set time (proposed: 30 minutes), so two people don't have to check in during the same minute.|C|
|FR-8.11|Calendar overlay showing shared study or activity periods.|C|

### 4.9 Arcade

|ID|Requirement|Pri|
|---|---|---|
|FR-9.1|A page with small, cute games (single-player first).|C|
|FR-9.2|First games are **word games and trivia**: a daily word puzzle (e.g., anagram or word search), and trivia questions per section (Spiritual, Health, Engineering, Economics, Art, General).|S|
|FR-9.4|One daily challenge per game type, with a friendly streak that never punishes a missed day.|S|
|FR-9.5|Owner can add trivia questions and word lists from the admin dashboard.|S|
|FR-9.3|Optional score boards using the member's display name or alias.|C|

### 4.10 Contact and Questions

|ID|Requirement|Pri|
|---|---|---|
|FR-10.1|"Ask me anything" box. Available to registered members. Questions can be answered to all members or privately.|M|
|FR-10.2|Contact form with spam protection.|M|

### 4.11 Admin and Moderation

|ID|Requirement|Pri|
|---|---|---|
|FR-11.1|Admin dashboard: new sign-ups, reports, pending pictures, latest posts.|M|
|FR-11.2|Admin can view a member's contact details and activity history (audit-logged).|M|
|FR-11.3|Rate limits and spam filters on posts, comments, and sign-ups.|M|
|FR-11.4|Community Agreement and Privacy Notice shown at sign-up and updatable (members re-accept on changes).|M|

### 4.12 Intro Experience and Character

|ID|Requirement|Pri|
|---|---|---|
|FR-12.1|On first visit, a short cinematic intro: a galaxy unveils, then Prince's **3D character** appears, presents the site (your life, your mind, a place to settle) and shows what visitors can do.|M (light version)|
|FR-12.2|The intro has a **Skip** button, plays fully only on the first visit, and can be replayed from the menu.|M|
|FR-12.3|The intro ends with a quick playful game moment (e.g., tap stars to collect a first badge) that leads into sign-up or browsing.|S|
|FR-12.4|The character acts as a guide across the site with pop-ups and reactions (celebrates when a goal meter fills, waves on reveal day). Members can minimize or turn it off in settings.|S|
|FR-12.5|The character is an original 3D design made by the owner (Prince), who owns it. The site needs a documented way to load the character model and its animations (e.g., glTF/GLB files).|M|
|FR-12.6|Atmosphere: galaxy background with gentle parallax, small micro-animations, and optional sound (off by default).|S|
|FR-12.7|The character's personality is **playful**: light, witty, curious, never pushy or guilt-tripping. Pop-up copy follows this voice.|M|

### 4.13 Reasons to Come Back

|ID|Requirement|Pri|
|---|---|---|
|FR-13.1|A weekly rhythm: the home page shows a countdown to the Saturday 18:00 reveal and whether the member's picture is in.|M|
|FR-13.2|Collectible **stamps** earned for taking part (first picture, four weeks in a row, trivia streak), kept in a "passport" page styled like a journal.|S|
|FR-13.3|Members can decorate their own small corner of the Space (stickers, a pinned note, a favourite quote).|C|
|FR-13.4|Notifications are opt-in, limited, and never guilt-based.|M|

### 4.14 Themes and Personalization

|ID|Requirement|Pri|
|---|---|---|
|FR-14.1|Default theme: **Journal** (paper, dashed arrows, doodles).|M|
|FR-14.2|Additional themes: **Cyber** (dark with neon), **Soft Pastel** (dreamy, gentle colors), **Galaxy**, and a **Minimal** option. More can be added later.|S|
|FR-14.3|Members can pick an accent color and a font style on top of any theme.|S|
|FR-14.4|The theme is saved to the account (and remembered on the device for guests) and also restyles the calendar, gallery, and 3D rooms.|S|
|FR-14.5|Every theme must keep readable contrast.|M|

---

## 5. UI / UX Requirements

- **Journal feel:** paper textures, handwritten fonts for headings, readable fonts for body text, tape, stamps, doodles, sticky notes.
- **Dashed arrows** connect related items (goal → entries → calendar days).
- **Components as journal objects:** goal meters as hand-drawn gauges, calendar as a planner page, posts as notes pinned on a board, pictures as instant photos.
- **Motion with meaning:** Saturday unwrap, room disintegration, and meter-fill animations. All respect "reduce motion" settings.
- **Mobile-first** and responsive, designed so it translates cleanly into an app later.
- **Accessibility:** sufficient contrast, keyboard navigation, alt text for images, readable text sizes, even with the decorative style.
- Tone of copy: personal, curious, light. Never preachy.

---

## 6. Non-Functional Requirements

|Area|Requirement|
|---|---|
|**Privacy**|Contact details encrypted at rest and visible to admin only. Collect the minimum data. Exact locations are never stored or shown.|
|**Security**|Hashed passwords, HTTPS everywhere, email/phone verification, CSRF/XSS protection, rate limiting, secure image upload handling.|
|**Performance**|Pages load fast on slow connections; images compressed; gallery lazy-loads. The 3D intro and rooms use lightweight models, load only when needed, never block the rest of the site, and fall back to 2D on weak devices.|
|**Reliability**|Daily backups. The Saturday reveal is triggered by the server clock, not the visitor's device.|
|**Moderation**|Every user-generated item is reportable and removable. Pictures are reviewable before reveal.|
|**Legal / compliance**|Community Agreement, Privacy Notice, and an 18+ age rule. Check requirements for storing personal data in the country of operation. _This should be reviewed by someone qualified, not just assumed._|
|**Portability**|Backend exposed through an API so a mobile app can reuse it later.|
|**Maintainability**|Content (sections, goal types, game list) editable without code changes where possible.|

---

## 7. Core Data Entities (high level)

- **User** (id, username, alias, is_anonymous, presence_visible, role, status)
- **ContactInfo** (user_id, email/phone, verified) _(admin-only)_
- **Entry** (type, category, title, body, date, visibility, goal_id)
- **Event** (date, type, entry_id), shown on the calendar
- **Goal** (title, category, unit, target, current, deadline, status)
- **Post** (section, author, anonymous_flag, body, type)
- **Comment** (parent, author, anonymous_flag, body)
- **WeeklyPicture** (user_id, week_id, image, caption, status)
- **Week** (start, reveal_at, revealed)
- **Room** (members, created_at, expires_at, status)
- **Report** (target, reporter, reason, status)
- **Interest** (user_id, topic, period), opt-in only
- **Bump** (member_a, member_b, time, rounded place; raw location is not kept)
- **Connection** (member_a, member_b, created_at, last_room_at)

---

## 8. Suggested Technical Direction (to be confirmed)

- **Frontend:** a modern JS framework (e.g., React or Svelte) with a component library built for the journal theme. Building it as a Progressive Web App gives an "app-like" experience before a true native app.
- **Backend:** Node or Python API with a relational database (PostgreSQL).
- **Realtime:** WebSockets for private rooms.
- **Storage:** object storage for pictures.
- **Calendar:** start with the site's own calendar; add Google Calendar/.ics later.
- **Maps:** an open map library (e.g., Leaflet with OpenStreetMap) to avoid cost.
- **Later:** wrap as a mobile app (React Native, Flutter, or PWA install).

---

## 9. Phasing

**Phase 1: "The Journal" (MVP)** Owner journal + learning log, calendar with event marks, goal meters, six sections, comments, accounts (including masked/anonymous), admin moderation, contact/ask-me, and a **light version of the galaxy intro** with the 3D character (with Skip).

**Phase 2: "The Community"** Weekly Picture Wall with the Saturday 18:00 reveal, member posts per section, reactions, themes (Cyber, Soft Pastel, Galaxy), word games and trivia with daily challenges, stamps/passport, calendar export/sync, Friday reminders, character guide pop-ups.

**Phase 3: "The Playground"** Private 3D 5-minute rooms with connections and optional reveal, more games, topic intersections, and location bumps (web check-in version).

**Phase 4: "The App"** Mobile app or installable PWA, push notifications, optional automatic location bumps.

---

## 10. Risks and Mitigations

|Risk|Mitigation|
|---|---|
|Anonymous users abuse the space|Verified contact, report buttons, rate limits, ban by contact, Community Agreement|
|Inappropriate pictures in the weekly wall|Moderate before reveal; upload restrictions; report after reveal|
|Private rooms used for harassment|Block/report, captured reports, admin ability to ban, text-only at first|
|Location features used for stalking or finding someone|Off by default, 18+ only, small matching radius (about 100 m) with a rounded display, delayed notifications, no live tracking, raw location deleted after matching, bump dots visible only to the two people, block/report, plain explanation before switching on|
|Personal data and privacy obligations|Collect minimum data, clear privacy notice, encrypted contact info, deletion on request|
|Underage users|18+ only; date of birth checked at sign-up (self-declared, so it can't be fully verified); admin removes accounts found to be underage; report button covers this too|
|Scope too big for one person|Strict phasing; Phase 1 must stand on its own|
|Low participation (empty community)|The site must be valuable even with zero visitors. The owner's journal is the core.|

---

## 11. Open Questions (to decide together)

**Decided so far (v0.2)**

- Working name: **Prince's Space**.
- Anonymity is a mask between members, controlled by the member, not approved by the admin. Registration still collects personal details.
- Members can reveal their name or username to each other inside a private room.
- Sign-up: email verified by link; phone number submitted and stored.
- Saturday reveal at 18:00 Johannesburg time (SAST, UTC+2).
- First games: word games and trivia.
- Minimum age is **18**.
- The calendar is **built-in** (Google Calendar sync only later, if ever).
- The owner makes the 3D character himself, and its personality is playful.
- Phone numbers are for safety and follow-up only (admin-only, no marketing, no location tracking).
- The **portfolio is public** and shows the About page, projects, and goals with their meters. Calendar highlights stay members-only. Journal posts are for members by default, and the owner can mark any post public. Everything else (community pages, comments, weekly gallery, rooms, map, games) is for registered members.
- Only registered members can request a private room with the owner.
- A first room between two members lasts **5 minutes**, like a short pitch. Rooms between connected members last **3 minutes**, and rooms with the owner are also 5 minutes. Each member can take part in at most 5 rooms per day. All are changeable. To continue, both members must tag each other as connections, and they can open another room after at least 5 hours.
- Weekly pictures: up to **three** per week, each with a caption and an optional location tag, revealed Saturday at 18:00.
- **Location bumps** (opt-in): when two members are in the same place, both get a notice and a dot appears on the map with the other person's anonymous ID (which they can hide) and the place. Matches within about a football-field radius (~100 m) for as little as 1 minute; dots visible only to the two people involved; delayed notices for safety. Website check-ins last 30 minutes, and notices arrive a few hours after the bump.
- The first map feature is shared learning topics; bumps follow later.
- Experience: galaxy intro with a 3D character, pop-ups, animations, selectable themes (Cyber, Soft Pastel, and more).

**Still open**

1. **Intro script:** What does the character say, and what is the "game moment" at the end? (Owner is thinking about it.)
2. **Saturday extras:** Which of the proposed Saturday evening extras (FR-6.15 to FR-6.19) do you want, and do you have other ideas to make Saturday special?
3. **Cost and hosting:** What budget, if any, is there for hosting, storage, and 3D assets?
4. **Languages:** English only, or others as well?

---

## 12. Recommendations and Ideas

These are suggestions to react to. Keep, cut, or change any of them.

1. **"Currently" strip on the home page:** a small live note like _Reading: ... / Studying: ... / Mood: ... / Listening to: ..._ It makes the site feel alive.
2. **Year-in-review / "Mind Map" page:** at year's end, auto-generate a journal-style recap from your calendar and meters.
3. **Weekly "I did / I learned / I'm stuck on" template** to make logging fast, so the habit survives busy weeks.
4. **Quick-log button:** add an entry in under 10 seconds (one line + category + done). Easy logging is what keeps a journal going.
5. **Ask-me jar:** questions people leave are collected in a jar; you pull and answer a few each week.
6. **Postcards:** members can leave a short postcard on your journal that only you see (a gentler alternative to public comments).
7. **Time capsule:** write an entry now that unlocks on a future date. It fits the "unwrap" theme.
8. **Reveal rituals:** besides the Saturday gallery, a small monthly "unwrap" of your own highlights.
9. **Reading-list shelf and "Things I'm curious about" wall**, which shows how your mind works without teaching.
10. **Honest "fail log":** a calendar mark for things that went wrong and what you noticed. This makes the portfolio feel real and distinguishes it from a polished résumé.
11. **Career view toggle:** a one-click "Portfolio mode" that hides the playful parts and shows a clean career timeline for employers or scholarship applications, so the same data serves two audiences.
12. **Data ownership:** a full export of your own journal (JSON/PDF) so your records are never locked in.