# Style index

One note per visual style. A style note describes feel, palette, type, spacing, components, and rules; it does not replace [[Design tokens]], which holds the semantic variable mappings that no style has chosen yet.

```dataview
TABLE name AS Style, status AS Status, used-for AS "Used for", source AS Source
FROM ""
WHERE type = "ui-style"
SORT status ASC, name ASC
```

## Which style to follow

- Every Screen spec starts from [[UI style]] unless the screen says otherwise.
- [[Fuel style]] is the Fuel app's own direction, still a draft. Its four fuel status colors are reserved and must not be overridden by any palette.
- [[Alden]] and [[Midday]] are reference styles for study and for borrowing a single decision, not for mixing. They conflict on accent, radius, spacing base, and tracking.

## Where the originals live

| Style | Reference note | Collected source |
|---|---|---|
| Alden | [[Alden]] | `Styles/_source/Alden/` |
| Midday | [[Midday]] | `Styles/_source/Midday/` |
| Fuel style | [[Fuel style]] | written by hand in this vault |
| UI style | [[UI style]] | written by hand in this vault |

CSS sources stay unchanged in `Styles/_source/`; see [[README#Library folder map]] for the file map. Component notes live in `Components/`, their source files live in `Components/_source/`, and page patterns live in `Layouts/`.

## Adding a style

1. Put the collected source in `Styles/_source/<Style name>/` without editing it.
2. Create one note in `Styles/` with `type: ui-style`, `name`, `status` (`current`, `reference`, or `draft`), `used-for`, and `source`.
3. Keep the note as the normalized reference and record where the source lives.
4. Do not pick a palette here. Record the style's values and let [[Design tokens]] track conflicts.
