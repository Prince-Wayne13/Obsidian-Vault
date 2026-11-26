# Design tokens

Verified from [[UI style]], [[Fuel style]], [[Midday]], [[Alden]] and their CSS files, the protected component notes and `.tsx` files, and the collected component source. Values marked inferred are proposed mappings, not chosen project decisions.

## Semantic variables

These mappings are intentionally unchosen until a project palette is selected.

| Variable | Light option | Dark option | Source / confidence |
|---|---|---|---|
| `--background` | `#F8FAFC` | inferred `#0F1A1C` | [[UI style]]; dark inferred |
| `--foreground` | `#0F172A` | inferred `#FDFBF9` | [[UI style]]; dark inferred |
| `--card` | `#FFFFFF` | inferred `#28262A` | [[UI style]], Alden |
| `--card-foreground` | `#0F172A` | inferred `#FDFBF9` | [[UI style]]; dark inferred |
| `--primary` | `#2563EB` | inferred `#FDFBF9` | [[UI style]]; dark inferred |
| `--primary-foreground` | `#FFFFFF` | inferred `#1B1B1B` | [[UI style]], Style 1 |
| `--muted` | `#E6E4E0` | inferred `#4A4A4C` | Midday; dark inferred |
| `--muted-foreground` | `#64748B` | inferred `#CBCBCB` | [[UI style]], Fashionise palette |
| `--accent` | `#F3C969` | inferred `#977A50` | Style 1, Fashionise palette |
| `--accent-foreground` | `#0F1A1C` | inferred `#FDFBF9` | Style 1; dark inferred |
| `--border` | `#CBD5E1` | inferred `#717171` | [[UI style]], Fashionise palette |
| `--radius` | `0.5rem` | `0.5rem` | current UI style; Midday card radius |
| `--chart-1` to `--chart-5` | reserved fuel/status and data colors | same roles | fuel colors are reserved |

## Palette options

No palette is chosen. Fuel status values are reserved and must not be overridden.

| Option          | Values                                                                                                                              | Source                                                        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Current default | Primary `#2563EB`, background `#F8FAFC`, surface `#FFFFFF`, text `#0F172A`, muted `#64748B`                                         | [[UI style]]                                                 |
| Fuel style      | Primary `#1F9AA8`, ink `#0F1A1C`, background `#F5F8F8`, highlight `#F3C969`                                                         | [[Fuel style]]                                                |
| Fashionise      | `#1B1B1B`, `#FDFBF9`, `#838383`, `#977A50`, `#CBCBCB`, `#717171`, `#000000`                                                         | pasted design reference                                       |
| Midday          | parchment `#DBDAD7`, paper `#FFFFFF`, sand `#E6E4E0`, ink `#121212`, smoke `#616161`, charcoal `#18181B`, moss `#4CAF50`            | [[Midday]]; CSS in `_Shared`                                  |
| Alden           | cream `#F3F1EB`, ink `#28262A`, graphite `#4A4A4C`, paper `#FFFFFF`, fog `#DDDCDD`, silver `#CBCBCB`, sky `#97CDE5`, sage `#C8DFAA` | [[Alden]]; the source CSS spells the fog value as `#dddcdd`   |

## Reserved fuel colors

| Status | Value | Source |
|---|---|---|
| Has fuel | `#2E9E6B` | [[Fuel style]], protected Cutout Card |
| Low | `#E8A33D` | [[Fuel style]], protected Cutout Card |
| Out | `#D64545` | [[Fuel style]], protected Cutout Card |
| Unknown | `#9AA5A8` | [[Fuel style]], protected Cutout Card |

## Typography

- Collected families: Crimson Text, DM Sans, Roboto Mono, Lora, Montserrat, Hedvig Letters Sans/Serif, STK Bureau Sans/Serif, Inter.
- Midday verified scale: 10px, 14px, 20px, 24px, 48px, 72px; 4px spacing base; positive tracking for small sans text.
- Alden verified scale: 12px, 14px, 16px, 18px, 24px, 32px, 48px, 56px; 8px spacing base; negative display tracking.
- Fuel style scale: hero 40px, heading 24px, subheading 18px, body 16px, small 13px; source [[Fuel style]].
- Crimson Text, DM Sans, Roboto Mono, Lora, and Montserrat are retained as collected candidates; no family is selected.

## Shape, spacing, and motion

- Spacing candidates: 4px base from Midday and current UI style; 8px base from Alden.
- Radius candidates: 8px cards and inputs, 16px cards, 20px/24px/30px editorial surfaces, and 50px/100px/full pills.
- Borders: 1px hairlines from Midday/Alden; current UI style also lists subtle separation without requiring borders.
- Protected Cutout Card uses a soft multi-layer shadow; Midday and Alden explicitly prefer no shadows. This is a conflict, not a merged rule.
- Protected Hero and Cutout Card use pill actions and semantic tokens including `card`, `primary`, `foreground`, `muted`, and `border`.
- Protected Hero and Cutout Card use `cubic-bezier(0.23,1,0.32,1)` for interaction easing.
- Spring source: Wizard expandable uses a spring transition with bounce `0` and duration `0.25`.

## Conflicts

- [[UI style]] blue primary conflicts with [[Fuel style]] teal primary, Midday charcoal primary, and Alden sage action.
- [[UI style]] cool gray background conflicts with Midday parchment and Alden paper/cream surfaces.
- Fashionise, Midday, and Alden each define distinct neutral palettes.
- Midday uses a 4px spacing base; Alden uses 8px; the current style mixes a 4px scale with larger steps.
- Card radii range from 8px to 30px; pill radii range from 50px to 100px/full.
- Midday/Alden prohibit shadows, while Cutout Card deliberately uses a soft shadow.
- Typography candidates and tracking conventions conflict across all sources.
- The protected components require semantic token names but do not select a single palette; the palette remains unchosen.

