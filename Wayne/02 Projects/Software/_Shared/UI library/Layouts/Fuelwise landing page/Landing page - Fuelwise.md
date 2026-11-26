---
type: ui-layout
name: Landing page - Fuelwise
status: usable
source: Built in Claude from my own pieces, my UI style draft and two screenshots I liked
palette: provisional (not chosen yet)
---
# Landing page: Fuelwise

One page, top to bottom, for the fuel status app. "Fuelwise" is a working name.

Live design: https://claude.ai/artifact/KWZPB7J7HLnJAGq753AJTi (private, only I can open it). Screenshot it and save it in `_Attachments` for a copy that stays with the vault.

Back to [[HOW TO MAKE UI]].

## Sections

| # | Section | Piece | What is in it |
|---|---|---|---|
| 1 | Nav | [[Pill nav]] | Logo, 3 links (How it works, Status colors, Drivers and stations), 2 round icon buttons (search, alerts with a count) |
| 2 | Hero | [[Hero]] pattern | Small yellow chip, big headline, one line, 2 pill buttons. Bottom-right: 2 station cards and a caption saying they are examples |
| 3 | Status colors | none, plain cards | 4 cards: Has fuel, Low, Out, Unknown. Each has a colored circle with an icon, a label and one sentence |
| 4 | How it works | none, plain cards | 3 numbered cards: manager posts, drivers see it, driver picks a station. The order is real, so numbers fit |
| 5 | Drivers and stations | none, two panels | One panel for drivers (white), one for station managers (light tint). 3 ticks each and one button |
| 6 | Call to action | none, dark band | Headline, one line, 2 buttons |
| 7 | Footer | none | Placeholders: [YEAR] [COMPANY NAME], [YOUR EMAIL] |

Sections 3 to 7 use no library piece yet. If I reuse any of them in a second page, it becomes a new piece.

## The station card ([[Cutout card]] as used here)

Four jobs, each in its own spot. Nothing else goes on the card.

| Spot | Job |
|---|---|
| Notch, bottom-left of the image | Status pill with a dot in the status color. The notch is white, so it joins the white body |
| Tab, bottom-right of the card | Round ink button with an arrow: directions. The tab is the same pale tint as the image block |
| Body, first line | Station name |
| Body, second line | "1.2 km away. Updated 12 min ago" |

Moved out of the card on purpose: fuel types, queue length, opening hours. They belong on the station detail screen.

Card rules I learned while making it:

- A notch or tab takes the color of whatever it joins, so it reads as carved or attached. White notch on the white body, pale tint tab against the image.
- Never put the hero color inside the card. I did not like the teal box.
- Corners are smoothed with small inverse-corner shapes, in the same color as the notch.
- Text beside the tab needs extra right padding, so the name may wrap to two lines on narrow cards.

## Look values (provisional)

All values come from [[UI style]] draft. The palette is not chosen. Change them there, not here.

| Item | Value |
|---|---|
| Primary (hero ground, icons) | #1F9AA8 |
| Ink | #0F1A1C |
| Page background | #F5F8F8 |
| Surface | #FFFFFF |
| Muted text | #5E6B6E |
| Highlight | #F3C969 |
| Has fuel | #2E9E6B (reserved) |
| Low | #E8A33D (reserved) |
| Out | #D64545 (reserved) |
| Unknown | #9AA5A8 (reserved) |
| Fonts | Inter for everything. Bebas Neue only for the hero headline |
| Shapes | Pills for buttons and tags. Radius 32 for hero, panels and bands. 24 for cards. 16 for notches |
| Icons | Outline only, 1.5 to 2px stroke |

Contrast notes:

- The white hero headline passes only because it is large. Body text on the hero is ink.
- Status colors are never used for decoration. The icon inside each status circle is ink, so it stays readable.

## Layout rules

- Page width: max 1200, side gutter 16 to 32.
- Gap between sections: 32. Sections 3 and 4 sit 24 lower for air.
- Hero: minimum height 560. Text on the left, cards on the right. On a phone the cards go below the text.
- Nav: below 760 wide, the link pill drops to its own row and scrolls sideways.
- Headline size: 52 to 104, scales with the screen.
- Touch targets: 44 or more.

## Where it came from

| Source | What I took |
|---|---|
| [[Cutout card]] | Notch geometry: corner shapes, label and pin placement, soft shadow, 24 radius |
| [[Tetris grid]] | The idea of carving corners so things sit in notches |
| [[Pill nav]] | Logo left, pill of links centered, round icon buttons right with a badge |
| [[Hero]] | Headline, one line, two pill buttons bottom-left, cards in the bottom-right slot |
| Screenshot 1 (outdoor brand site) | Clean nav, big headline with two pill buttons |
| Screenshot 2 (green food site) | Colored ground, tall condensed headline, cards bottom-right, round icon buttons |
| [[UI style]] | Colors, fonts, pills, outline icons, reserved status colors |

Not used: Midday, Alden, Area and Fashionise. The page is plain markup that copies the look of the pieces, not the React files.

## To rebuild or change it

Give Claude this note, [[Cutout card]], [[Pill nav]], [[Hero]] and [[UI style]], with the prompt from [[HOW TO MAKE UI]].

## Still to fill in

- [ ] Choose the palette (hero ground is teal for now)
- [ ] Real station photos for the cards
- [ ] Real name, company and email in the footer
- [ ] Replace the example stations with real data once the app exists
