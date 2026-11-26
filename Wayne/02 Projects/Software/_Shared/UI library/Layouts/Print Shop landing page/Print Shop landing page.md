# Print Shop Landing Page: Layout Template

Reusable layout template. Style: **Midday-inspired** (editorial serif headline, spaced sans body, pill buttons, flat, hairline borders, one dark frame).

## The three files (keep them together)

| File | What it is for |
|---|---|
| `print-shop-template.pdf` | The picture. Attach it so Claude can *see* the target look. |
| `print-shop-template.html` | The working page. Open it in any browser; edit the text and colours; it runs as is. |
| `Print Shop landing page.md` (this file) | The explanation: rules, section map, code. Attach it so Claude *understands* the structure. |

Stack: plain HTML + CSS (no Tailwind, no React, no build step). All colours, fonts and spacing live in the `:root` block at the top of the CSS.

## How to reuse it

1. **Same look, new business:** copy the HTML file, replace every `[PLACEHOLDER]`, change the text. Done.
2. **New colours or fonts:** edit only the `:root` tokens (section 1 of the CSS).
3. **New page in this style:** attach the 3 files to Claude and say what you want, using the prompt at the bottom.
4. **New PDF:** open the HTML in Chrome, Print, Save as PDF, turn on "Background graphics". Print rules are already in the CSS.

## Design tokens

| Token | Value | Used for |
|---|---|---|
| `--canvas` | `#FDFBF9` | Page background |
| `--paper` | `#FFFFFF` | Cards, inputs |
| `--ink` | `#1B1B1B` | Body text, dark button, dark frame |
| `--ink-strong` | `#000000` | Headings, button hover |
| `--muted` | `#717171` | Secondary text |
| `--hairline` | `#CBCBCB` | 1px borders on cards and dividers |
| `--control` | `#838383` | Input and ghost-button borders |
| `--accent` | `#977A50` | Large numerals only (too faint for small text) |

Fonts: Hedvig Letters Serif (headlines), Hedvig Letters Sans (everything else). Fallbacks: Georgia, Inter.

## Style rules (what makes it "Midday")

Do:
- Serif headlines at weight 400 with negative tracking (-0.025em). Sans body with positive tracking (0.05em small, 0.025em at 16px+).
- Every button, badge and pill is fully rounded (`9999px`). Cards and inputs are `8px`.
- Depth comes only from surface changes (canvas, white cards) and 1px hairlines.
- One dark filled button style for the main action; everything else is a ghost (outlined) pill.
- Exactly one dark full-width area, used to show the product (here, a sample proposal).

Don't:
- No box-shadows, no gradients, no square-cornered buttons.
- No second accent colour. Use the accent only for large numerals.
- Don't use the serif for body text or labels.
- Small grey text must stay `--muted` (`#717171`) or darker so it stays readable.

## Section map (top to bottom)

| # | Section | Layout | What you edit |
|---|---|---|---|
| 1 | Nav | Logo left; links and a ghost button right; wraps on mobile | Shop name, link labels |
| 2 | Hero | Centred stack: pill, headline, subtext, 2 buttons, trust line, pill row | Headline, subtext, trust line, pills |
| 3 | Dark frame | Full-width dark band holding two white cards (sample proposal + checklist) | Sample job, line items, checklist |
| 4 | Services | Centred title, wrapping grid of cards (min 340px each) | Card titles and descriptions; copy a card to add one |
| 5 | Process | Centred title, wrapping row of numbered step cards (min 240px) | Step titles and descriptions |
| 6 | Proposal form | Two columns: text left, form card right; stacks on mobile | Intro text, form fields, job-type options |
| 7 | Footer | Hairline top border, name left, contact right | Address, phone, email |

## Placeholders to replace

`[SHOP NAME]` `[REPLY TIME]` `[QUANTITY]` `[PAPER STOCK]` `[FINISH]` `[TURNAROUND]` `[PRICE]` `[PHONE]` `[ADDRESS]` `[OPENING HOURS]` `[EMAIL]` `[One-line description]` `[Step description]`

## Known limits

- The form is a demo: it validates and shows a thank-you card but does not send anything. Connect it to an email or form service to receive real requests.
- The Hedvig fonts load from Google Fonts. Offline or in some PDF tools the fallback fonts (Georgia, Inter) are used instead, so the PDF may look slightly different.

## Prompt for Claude

> Using the attached `print-shop-template.pdf` (look), `print-shop-template.html` (code) and this `.md` (rules), build a landing page for **[BUSINESS NAME]**, who **[WHAT THEY DO]**. Keep the same layout, tokens, components and style rules. Change only the content, the services list, and the colour tokens if I give new ones. Return a single HTML file.

## Full CSS

```css
/* ============ 1. DESIGN TOKENS: change the look here ============ */
:root{
  --canvas:#FDFBF9;        /* page background */
  --paper:#FFFFFF;         /* cards, inputs */
  --ink:#1B1B1B;           /* body text, dark button, dark frame */
  --ink-strong:#000000;    /* headings, button hover */
  --muted:#717171;         /* secondary text */
  --hairline:#CBCBCB;      /* 1px borders on cards and dividers */
  --control:#838383;       /* borders on inputs and ghost buttons */
  --accent:#977A50;        /* small accent: large numerals only */
  --font-sans:'Hedvig Letters Sans',Inter,ui-sans-serif,system-ui,sans-serif;
  --font-serif:'Hedvig Letters Serif',Georgia,serif;
  --radius-card:8px;       /* cards, inputs */
  --radius-pill:9999px;    /* buttons, badges, pills */
  --max:1200px;            /* page max width */
  --gap-section:64px;      /* vertical space between sections */
}

/* ============ 2. BASE ============ */
*{box-sizing:border-box}
body{margin:0;background:var(--canvas);color:var(--ink);font-family:var(--font-sans);font-size:14px;letter-spacing:.05em;line-height:1.43}
a{color:inherit}
.wrap{max-width:var(--max);margin:0 auto;padding:0 24px}
.stack{display:flex;flex-direction:column}
.center{align-items:center;text-align:center}
:focus-visible{outline:2px solid var(--ink);outline-offset:2px}

/* ============ 3. TYPE ============ */
.display{font-family:var(--font-serif);font-weight:400;font-size:clamp(2.5rem,7vw,4.5rem);line-height:1;letter-spacing:-.025em;color:var(--ink-strong);margin:0}
.title{font-family:var(--font-serif);font-weight:400;font-size:48px;line-height:1;letter-spacing:-.025em;color:var(--ink-strong);margin:0}
.heading{font-family:var(--font-serif);font-weight:400;font-size:24px;line-height:1.33;letter-spacing:-.025em;color:var(--ink-strong);margin:0}
.h3{font-size:20px;font-weight:400;line-height:1.4;letter-spacing:.025em;color:var(--ink-strong);margin:0}
.lead{font-size:16px;letter-spacing:.025em;line-height:1.6;color:var(--muted);margin:0}
.small{font-size:12px;color:var(--muted);margin:0}
.muted{color:var(--muted);margin:0}

/* ============ 4. COMPONENTS ============ */
.btn{display:inline-flex;align-items:center;min-height:44px;padding:0 24px;border-radius:var(--radius-pill);font:inherit;letter-spacing:.05em;text-decoration:none;cursor:pointer;border:0}
.btn-dark{background:var(--ink);color:#fff}
.btn-dark:hover{background:var(--ink-strong)}
.btn-ghost{background:transparent;color:var(--ink);border:1px solid var(--control)}
.btn-ghost:hover{background:var(--paper)}
.pill{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:var(--paper);border:1px solid var(--hairline);border-radius:var(--radius-pill);font-size:12px;text-decoration:none;color:var(--ink)}
.card{background:var(--paper);border:1px solid var(--hairline);border-radius:var(--radius-card);padding:24px}
.row{display:flex;justify-content:space-between;gap:16px;padding:12px 0;border-bottom:1px solid var(--hairline)}
.row:last-child{border-bottom:0}
.numeral{font-family:var(--font-serif);font-size:24px;letter-spacing:-.025em;color:var(--accent)}
.step{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border:1px solid var(--control);border-radius:var(--radius-pill)}
label{font-size:14px;color:var(--ink-strong)}
input,select,textarea{font:inherit;letter-spacing:.05em;color:var(--ink);background:var(--paper);border:1px solid var(--control);border-radius:var(--radius-card);padding:0 14px;min-height:44px;width:100%}
textarea{padding:12px 14px;resize:vertical}

/* ============ 5. LAYOUT: positioning of each section ============ */
.nav{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:16px 0}
.nav-links{display:flex;flex-wrap:wrap;align-items:center;gap:28px}
.nav-links a:not(.btn){text-decoration:none}
.nav-links a:not(.btn):hover{color:var(--muted)}
.hero{padding:64px 24px;gap:24px}
.hero .lead{max-width:560px}
.hero .display{max-width:900px}
.btn-row,.pill-row{display:flex;flex-wrap:wrap;justify-content:center;gap:12px}
.pill-row{gap:8px;list-style:none;margin:8px 0 0;padding:0}
.frame{background:var(--ink)}
.frame .wrap{padding-top:64px;padding-bottom:64px;display:flex;flex-wrap:wrap;justify-content:center;gap:24px}
.frame .card{flex:1 1 420px;max-width:640px;min-width:0}
.frame .card.narrow{flex:1 1 260px;max-width:320px}
.section{padding:var(--gap-section) 24px}
.section-head{margin-bottom:40px;gap:12px}
.grid{display:flex;flex-wrap:wrap;gap:16px;list-style:none;margin:0;padding:0}
.grid>*{flex:1 1 340px;min-width:0;display:flex;flex-direction:column;gap:8px}
.grid.steps>*{flex-basis:240px}
.proposal{display:flex;flex-wrap:wrap;gap:40px 64px;padding:0 24px var(--gap-section)}
.proposal>*{flex:1 1 340px;min-width:0}
.proposal>.form-col{flex-basis:420px}
.form{display:flex;flex-direction:column;gap:16px}
.field{display:flex;flex-direction:column;gap:6px}
.error{margin:0;padding:8px 12px;border:1px solid var(--ink);border-radius:var(--radius-card);color:var(--ink-strong)}
.footer{border-top:1px solid var(--hairline)}
.footer .wrap{padding-top:32px;padding-bottom:32px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px}
[hidden]{display:none !important}

/* ============ 6. PRINT / PDF ============ */
@page{size:A4;margin:12mm}
@media print{
  *{-webkit-print-color-adjust:exact;print-color-adjust:exact}
  .card,.grid>*,.row{break-inside:avoid}
  .proposal form{break-inside:avoid}
}
```

## Full HTML (body)

```html
<!-- SECTION 1: NAV (logo left, links + ghost button right) -->
<div class="wrap">
  <nav class="nav" aria-label="Main">
    <a href="#top" class="heading" style="text-decoration:none">[SHOP NAME]</a>
    <div class="nav-links">
      <a href="#services">What we print</a>
      <a href="#process">How it works</a>
      <a href="#proposal" class="btn btn-ghost">Request a proposal</a>
    </div>
  </nav>
</div>

<!-- SECTION 2: HERO (centred stack: pill, headline, subtext, buttons, trust line, pills) -->
<header id="top" class="wrap hero stack center">
  <a href="#proposal" class="pill">Now taking proposals <span aria-hidden="true">→</span></a>
  <h1 class="display">Print that looks as good as your idea.</h1>
  <p class="lead">From one run of business cards to a full packaging job, tell us what you need and we'll send back a clear proposal.</p>
  <div class="btn-row">
    <a href="#proposal" class="btn btn-dark">Request a proposal</a>
    <a href="#services" class="btn btn-ghost">See what we print</a>
  </div>
  <p class="small">Replies within [REPLY TIME] · A proof before every print run</p>
  <ul class="pill-row">
    <li class="pill">Business cards</li><li class="pill">Posters</li><li class="pill">Packaging</li>
    <li class="pill">Books and booklets</li><li class="pill">Stickers</li><li class="pill">Custom jobs</li>
  </ul>
</header>

<!-- SECTION 3: DARK FRAME (the only dark area; shows a sample proposal) -->
<section class="frame" aria-label="Sample proposal">
  <div class="wrap">
    <div class="card stack" style="gap:16px">
      <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px">
        <div><div class="small">Proposal · sample</div><div class="heading">Business cards, [QUANTITY]</div></div>
        <span class="pill">Awaiting your approval</span>
      </div>
      <div style="border-top:1px solid var(--hairline)">
        <div class="row"><span class="muted">Stock</span><span>[PAPER STOCK]</span></div>
        <div class="row"><span class="muted">Finish</span><span>[FINISH]</span></div>
        <div class="row"><span class="muted">Turnaround</span><span>[TURNAROUND]</span></div>
        <div class="row"><span class="muted">Total</span><span style="font-size:20px">[PRICE]</span></div>
      </div>
      <span class="btn btn-dark" style="align-self:flex-start">Approve proof</span>
    </div>
    <div class="card narrow stack" style="gap:12px">
      <div class="small">What's in every proposal</div>
      <div><div class="row">A clear total price</div><div class="row">Stock and finish options</div><div class="row">A realistic timeline</div><div class="row">A proof to approve</div></div>
    </div>
  </div>
</section>

<!-- SECTION 4: SERVICES (title + wrapping grid of cards; copy a card to add one) -->
<section id="services" class="wrap section" aria-labelledby="services-h">
  <div class="stack center section-head">
    <h2 id="services-h" class="title">What we print</h2>
    <p class="lead" style="max-width:520px">A starting list. If your job isn't here, send it anyway and we'll tell you honestly whether we can do it.</p>
  </div>
  <div class="grid">
    <article class="card"><span class="numeral">01</span><h3 class="h3">Business cards and stationery</h3><p class="muted">[One-line description]</p></article>
    <article class="card"><span class="numeral">02</span><h3 class="h3">Posters and large format</h3><p class="muted">[One-line description]</p></article>
    <article class="card"><span class="numeral">03</span><h3 class="h3">Packaging and labels</h3><p class="muted">[One-line description]</p></article>
    <article class="card"><span class="numeral">04</span><h3 class="h3">Books and booklets</h3><p class="muted">[One-line description]</p></article>
    <article class="card"><span class="numeral">05</span><h3 class="h3">Stickers and decals</h3><p class="muted">[One-line description]</p></article>
    <article class="card"><span class="numeral">06</span><h3 class="h3">Something custom</h3><p class="muted">[One-line description]</p></article>
  </div>
</section>

<!-- SECTION 5: PROCESS (title + row of numbered step cards) -->
<section id="process" class="wrap section" style="padding-top:0" aria-labelledby="process-h">
  <div class="stack center section-head"><h2 id="process-h" class="title">How a proposal works</h2></div>
  <ol class="grid steps">
    <li class="card"><span class="step">1</span><h3 class="h3">Tell us what you need</h3><p class="muted">[Step description]</p></li>
    <li class="card"><span class="step">2</span><h3 class="h3">We send a proposal</h3><p class="muted">[Step description]</p></li>
    <li class="card"><span class="step">3</span><h3 class="h3">Approve the proof</h3><p class="muted">[Step description]</p></li>
    <li class="card"><span class="step">4</span><h3 class="h3">Collect or delivery</h3><p class="muted">[Step description]</p></li>
  </ol>
</section>

<!-- SECTION 6: PROPOSAL FORM (text left, form card right) -->
<section id="proposal" class="wrap proposal" aria-labelledby="proposal-h">
  <div class="stack" style="gap:16px">
    <h2 id="proposal-h" class="title">Request a proposal</h2>
    <p class="lead">The more you tell us, the more accurate the proposal. Size, paper, finish and quantity all help.</p>
    <p class="small">Prefer to talk? Call [PHONE] or visit [ADDRESS]. Open [OPENING HOURS].</p>
  </div>
  <div class="form-col">
    <div id="thanks" class="card stack" role="status" hidden style="gap:8px">
      <h3 class="heading">Thank you, we've got your request.</h3>
      <p class="muted">We'll reply by email with a proposal within [REPLY TIME].</p>
    </div>
    <form id="proposal-form" class="card form" novalidate>
      <div class="field"><label for="pname">Your name</label><input id="pname" type="text" autocomplete="name"></div>
      <div class="field"><label for="pemail">Email address</label><input id="pemail" type="email" autocomplete="email"></div>
      <div class="field"><label for="ptype">What do you need printed?</label>
        <select id="ptype"><option>Business cards and stationery</option><option>Posters and large format</option><option>Packaging and labels</option><option>Books and booklets</option><option>Stickers and decals</option><option>Something custom</option></select></div>
      <div class="field"><label for="pdetails">Tell us about the job</label><textarea id="pdetails" rows="5" placeholder="Size, quantity, paper or finish, and when you need it by"></textarea></div>
      <p id="form-error" class="error" role="alert" hidden>Please add your name, a valid email and a few details about the job.</p>
      <button type="submit" class="btn btn-dark" style="align-self:flex-start">Send my request</button>
    </form>
  </div>
</section>

<!-- SECTION 7: FOOTER -->
<footer class="footer">
  <div class="wrap">
    <span class="heading">[SHOP NAME]</span>
    <span class="small">[ADDRESS] · [PHONE] · [EMAIL]</span>
  </div>
</footer>
```
