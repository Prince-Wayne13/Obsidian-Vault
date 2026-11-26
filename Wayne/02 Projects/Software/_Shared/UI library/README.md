# UI library

The reusable UI reference for Fuel and other projects. Notes document source, license, dependencies, missing primitives, APIs, states, and unchanged collected code.

## Structure

The UI library is the home for reusable software design references. Project-specific
decisions belong in that project's `Design/` folder; reusable patterns belong here.
Start with this page, then use the component and style indexes to browse.

For the short, practical workflow, open [[How to make UI]].

- [[Component index]] — Dataview inventory of all component notes.
- [[Style index]] — Dataview inventory of all style notes.
- `Styles/` — one note per visual style: [[UI style]], [[Fuel style]], [[Alden]], [[Midday]].
- `Tokens/Design tokens` — semantic theme options and verified design values.
- `Components/` — one note per component.
- `Layouts/` — page and grid patterns.
- `Inspiration/` — visual references and observations; empty for now.
- `_raw/` — reserved for collected raw files; leave existing contents untouched.

## Start here

Styles live in `Styles/`; reusable components live in `Components/`; layouts and page patterns live in `Layouts/`. Project-specific decisions belong in that project's `Design/` folder.

- [[Alden]] — editorial healthcare and marketing style reference.
- [[Midday]] — financial dashboard and editorial style reference.
- [[Hero]] and [[Cutout card]] — reusable components.
- [[Pill nav]] — reusable navigation pattern.

Original reusable source files live inside this library, beside the notes that document them. Keep those source files unchanged.

## Library folder map

| Location | Purpose |
|---|---|
| `Components/` | Component notes: [[Hero]], [[Cutout card]], and [[Pill nav]] |
| `Components/_source/` | Original `.tsx` files for those components |
| `Styles/` | Normalized style notes: [[Alden]], [[Midday]], [[UI style]], and [[Fuel style]] |
| `Styles/_source/` | Original CSS and reference notes for Alden and Midday |
| `Layouts/Print Shop landing page/` | Print Shop template: Markdown guide, HTML file, and PDF preview |
| `Layouts/Fuelwise landing page/` | Fuelwise landing-page HTML and PDF reference |
| `Inspiration/` | Visual references, including the social roadmap landing-page PDF |

`02 Projects/Software/_Shared/` now contains only this library and `dump.md`, which is the remaining unclassified source archive.

## Add a component

1. Save the original source in `Components/_source/` without modifying it.
2. Create one note in `Components/` from [[UI component]].
3. Copy the source into the `Code` fence unchanged.
4. Record dependencies, missing files, source, and license.
5. Set `status` to `raw`, `usable`, or `signature`.

## Rules

- `raw` means collected and not yet validated for project use.
- `usable` means documented and ready to reuse.
- `signature` means a defining library component.
- Always record the source and license, even when unknown.
- Keep one component per note.
- Do not invent missing primitives; document them.

## Styles

| Style | Status | Use |
|---|---|---|
| [[UI style]] | current | default for every project |
| [[Fuel style]] | draft | the Fuel app; status colors reserved |
| [[Alden]] | reference | editorial healthcare and marketing |
| [[Midday]] | reference | financial dashboards and editorial layouts |

Style notes record values and rules; they never choose a palette. [[Design tokens]] holds the semantic mappings, marked inferred until a palette is picked. Dates, sources, and CSS paths live in each note's frontmatter.

## Assumed stack

React, Tailwind v4, and shadcn semantic theme tokens.

## Components

- [[Hero]] — usable; source and note in `_Shared`.
- [[Cutout card]] — signature; source and note in `_Shared`.
- [[Pill nav]] — usable; source and note in `_Shared`.
- [[Popover examples]] — raw.
- [[Floating panel]] — raw.
- [[Expandable screen (waitlist)]] — raw.
- [[Onboarding (headless)]] — raw.
- [[Wizard expandable]] — raw.

## Collected React Bits components

- [[FlipCard]], [[BranchedMenu]], [[CometDial]], [[SwipeToast]], [[VoicePill]], and [[FolderFloat]] — raw interaction components.
- [[DotField]], [[GlowCursor]], [[CursorGrid]], and [[LetterGlitch]] — raw WebGL background and cursor effects.
- [[DepthCarousel]], [[ScrollExpand]], [[LineSidebar]], and [[SpotlightCard]] — raw presentation components.

Their supplied `.jsx` and `.css` files are preserved in `Components/_source/react-bits/`. Each note retains any supplied CLI command and usage example.

## Missing primitives

- `../ui/popover`
- `../ui/floating-panel`
- `@/components/ui/expandable-screen`
- `../ui/onboarding`
- `@/components/ui/button`, `input`, `label`, `select`, `textarea`, `dialog`, `badge`
- `@base-ui/react/scroll-area`
- `@radix-ui/react-use-controllable-state`
- `@/lib/utils`

The protected `Hero`, `Cutout card`, and `Pill nav` implementations exist as `.tsx` source in `_Shared`, but their expected `@/components/ui/...` paths are not present in the vault.

## UI prompt

> Build this screen from my Screen spec. Use only components from `UI library/Components` and tokens from [[Design tokens]]. Follow [[UI style]]. Use stub data from the API contract. Show all four states.
