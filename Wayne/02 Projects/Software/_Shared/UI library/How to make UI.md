---
type: ui-guide
---
# UI library: start here

The library is three things. Everything else is reference.

| Thing | What it is | Where it lives |
|---|---|---|
| Pieces | Ready parts I reuse: card, nav, hero | `Components/` |
| Look | My colors, fonts and shapes, in one place | [[UI style]] (full list in [[Design tokens]]) |
| Pages | Recipes for whole pages, section by section | `Layouts/` |

## I want to... open this

| I want to | Open |
|---|---|
| Design a new page or screen | [[Screen spec]] (the template). Fill it in. |
| Change a color, font or shape | [[UI style]]. Only there. |
| Use a card, a nav or a hero | [[Cutout card]], [[Pill nav]], [[Hero]] |
| Copy a whole page structure | [[Landing page - Fuelwise]] |
| See everything I have | [[Component index]] |
| Save something I liked | Drop a screenshot in `Inspiration/` with one line on what I like about it |
| Add a new piece | New note from the UI component template. Set status to raw. |

## Use these first (my 3 signature pieces)

- [[Cutout card]]: a card with carved corners. Status, distance and an action each get their own notch.
- [[Pill nav]]: logo, a pill of links, round icon buttons.
- [[Hero]]: big headline, one line, two pill buttons, cards in the corner.

## Ignore until needed

- The raw pieces: [[Popover examples]], [[Floating panel]], [[Expandable screen (waitlist)]], [[Onboarding (headless)]], [[Wizard expandable]]. They are collected, some files are missing, and they are not part of my look yet.
- The layout references: [[Tetris grid]], [[Area landing page]], [[Fashionise blog]]. For ideas only.

If it is not on this page, I do not need it today.

## Build a page with Claude: 5 steps

1. Write the Screen spec: the sections top to bottom, and which piece each one uses.
2. Gather three things: the Screen spec, the notes for the pieces it names, and [[UI style]].
3. Give them to Claude with the prompt below.
4. Look at the result. If something is wrong, fix the note (UI style or the piece), not the page.
5. Save what I liked. A new page structure goes in `Layouts/`. A screenshot goes in `Inspiration/`.

Prompt:

> Build this screen from my Screen spec. Use only the pieces I gave you and my UI style. Use stub data. Show all four states: loading, empty, error, no permission. If you need something that is not in the pieces, tell me instead of inventing it.

## Who can see what

- Claude Code or Codex with access to my vault reads the notes itself.
- A normal Claude chat cannot see my vault. I paste the three things from step 2.

## One place per thing

| Thing | Lives in |
|---|---|
| Colors, fonts, radii | [[UI style]] |
| The shape and code of a piece | That piece's note |
| The structure of a page | A Screen spec, or a note in `Layouts/` |

A page only combines them. It never holds its own copy.

## Status words

- signature: my own, defines my look. Use freely.
- usable: works and is documented. Use when it fits.
- raw: collected, not checked. Do not use yet.

## Rules that keep it small

- Day to day I use three pieces. I add a fourth only after I have needed the same pattern twice.
- Every new piece gets a note with source and license filled in.
- Colors are never written inside a piece or a page. They come from [[UI style]].
