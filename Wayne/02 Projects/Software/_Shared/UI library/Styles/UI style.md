---
type: ui-style
name: UI style
status: current
used-for: Default for every project
source: Mine, edited by hand
assets: none
---

# UI style

My one UI style for every project. Link to this from every Screen spec. Edit it as my taste develops.

## Feel
Clear, calm, friendly (default, edit me)

## Colors
| Name | Hex | Used for |
|---|---|---|
| Primary | #2563EB (default, edit me) | Main buttons, links |
| Background | #F8FAFC (default, edit me) | Page |
| Surface | #FFFFFF (default, edit me) | Cards |
| Text | #0F172A (default, edit me) | Body text |
| Muted | #64748B (default, edit me) | Secondary text |
| Success | #16A34A (default, edit me) | |
| Warning | #D97706 (default, edit me) | |
| Danger | #DC2626 (default, edit me) | |

## Typography
- Font: Inter, system sans-serif (default, edit me)
- Sizes: 2rem / 1.25rem / 1rem / 0.875rem (default, edit me)
- Weights: 700 / 600 / 400 (default, edit me)

## Spacing and shape
- Spacing scale: 4px base scale (default, edit me)
- Corner radius: 8px (default, edit me)
- Shadows: yes, subtle (default, edit me)

## Components
- Buttons (primary, secondary, danger): clear labels, one primary action per view (default, edit me)
- Cards: white surface with a subtle border and shadow (default, edit me)
- Forms and inputs: labels above fields, clear validation below fields (default, edit me)
- Navigation: simple top navigation with the current section visible (default, edit me)
- Tables and lists: readable rows with clear spacing and mobile overflow (default, edit me)
- Loading, empty and error states: plain-language message plus the next useful action (default, edit me)

## Layout rules
Mobile first, max width 1200px, responsive single-column-to-grid layout (default, edit me).

## Writing style
Plain, warm, direct, and reassuring (default, edit me).

## Claude prompt for UI work
Paste this with a Screen spec when I want a mockup:
"Build a clickable HTML mockup of this screen. Follow my UI style note exactly. Use stub data from the API contract. Show all four states: loading, empty, error, no permission."

## Signature: cutout corners

Use small inverse-corner SVGs filled with `currentColor` where a label or pin interrupts a rounded card edge. Position each SVG just beyond the edge it touches and rotate it for the required corner, so the card surface appears to rise cleanly into the media area. Keep the corner color synchronized with the surface or pin it belongs to.

## Library

- [[Style index]] — every style note, including this one
- [[Design tokens]] — semantic variables and palette options
- [[Component index]] — component notes
- [[Cutout card]]
- [[Pill nav]]
- [[Hero]]

Reference styles are kept for study, not mixing: [[Alden]], [[Midday]], [[Fuel style]].
