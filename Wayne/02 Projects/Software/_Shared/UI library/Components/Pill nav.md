---
type: ui-component
name: Pill nav
status: usable
source: Written for me by Claude on 2026-11-26, patterned on a cutout card I collected plus two site designs I liked. Not copied code.
license: Mine. Free to use in any of my projects.
stack: React, Tailwind v4, shadcn theme tokens
depends-on: none (no npm packages)
missing: none
---
# Pill nav

## What it is
My navigation bar. Logo on the left, a centered pill of links, and round outline-icon buttons on the right. On phones the link pill drops to its own row and scrolls sideways. The active link is a filled pill.

## When to use it
The top bar of any page or app. Keep it to 3 to 5 links and 2 to 3 icon buttons.

## Fuel app use
Links: Stations, Map, Alerts. Icon buttons: Search, Profile. A badge on Alerts shows how many stations near me changed status.

## Dependencies
React and Tailwind v4. Theme tokens used: card, border, foreground, muted, muted-foreground, accent, accent-foreground, primary, primary-foreground.

## Missing files
None. This file is self-contained.

## API (props)
| Prop | Type | Default | What it does |
|---|---|---|---|
| `logo` | `ReactNode` | required | Text or an SVG |
| `logoHref` | `string` | "/" | Where the logo links |
| `items` | `{label, href, active?}[]` | required | The pill links. Set active on the current page |
| `actions` | `{label, icon, href?, onClick?, badge?}[]` | [] | Round icon buttons. label is the accessible name. badge: true = dot, number = count |
| `sticky` | `boolean` | true | Stick to the top while scrolling |
| `linkComponent` | `ElementType` | "a" | Your router link, like next/link |
| `className` | `string` | none | Extra classes on the header |

### Usage
```tsx
import { Search, User, Bell } from "lucide-react"
import { PillNav } from "@/components/ui/pill-nav"

<PillNav
  logo="Fuelwise"
  items={[
    { label: "Stations", href: "/stations", active: true },
    { label: "Map", href: "/map" },
    { label: "Alerts", href: "/alerts" },
  ]}
  actions={[
    { label: "Search", icon: <Search strokeWidth={1.5} />, onClick: openSearch },
    { label: "Alerts", icon: <Bell strokeWidth={1.5} />, href: "/alerts", badge: 2 },
    { label: "Profile", icon: <User strokeWidth={1.5} />, href: "/me" },
  ]}
/>
```

## States
- Active link: filled with the accent token. Set your accent to the Highlight color from UI style if you want the warm pill.
- Badge: number shows a count, true shows a dot, omit for none.
- Focus and hover are built in, and motion is switched off for reduced-motion users.

## Code
Save as `components/ui/pill-nav.tsx`.

```tsx
import * as React from "react"

/**
 * PillNav: my navigation bar.
 *
 * Logo on the left, a centered pill of links, round outline-icon buttons on the
 * right. On phones the link pill drops to its own row and scrolls sideways.
 *
 * Needs: React, Tailwind v4, and shadcn theme tokens
 * (card, border, foreground, muted, muted-foreground, accent, accent-foreground,
 * primary, primary-foreground). No npm packages.
 * Icons are passed in by you (lucide-react works well: use strokeWidth={1.5}).
 */

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ")

export type PillNavItem = {
  label: string
  href: string
  active?: boolean
}

export type PillNavAction = {
  /** Used as the accessible name, since the button shows only an icon. */
  label: string
  icon: React.ReactNode
  href?: string
  onClick?: () => void
  /** true shows a dot, a number shows a count. */
  badge?: number | boolean
}

export type PillNavProps = {
  logo: React.ReactNode
  logoHref?: string
  items: PillNavItem[]
  actions?: PillNavAction[]
  /** Stick to the top while scrolling. Default true. */
  sticky?: boolean
  /** Swap in your router's link (like next/link). Must accept href and className. */
  linkComponent?: React.ElementType
  className?: string
}

const ICON_BUTTON =
  "relative inline-flex size-10 items-center justify-center rounded-full bg-card text-foreground ring-1 ring-border " +
  "transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-muted active:scale-[0.96] motion-reduce:transition-none " +
  "[&_svg]:size-[18px]"

function IconButton({
  action,
  Link,
}: {
  action: PillNavAction
  Link: React.ElementType
}) {
  const { label, icon, href, onClick, badge } = action

  const content = (
    <>
      {icon}
      <span className="sr-only">{label}</span>
      {badge ? (
        <span
          aria-hidden="true"
          className={cx(
            "bg-primary text-primary-foreground absolute -top-1 -right-1 inline-flex items-center justify-center rounded-full",
            typeof badge === "number"
              ? "h-4 min-w-4 px-1 text-[10px] font-semibold"
              : "size-2.5"
          )}
        >
          {typeof badge === "number" ? badge : null}
        </span>
      ) : null}
    </>
  )

  if (href) {
    return (
      <Link className={ICON_BUTTON} href={href} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button className={ICON_BUTTON} onClick={onClick} type="button">
      {content}
    </button>
  )
}

export function PillNav({
  logo,
  logoHref = "/",
  items,
  actions = [],
  sticky = true,
  linkComponent: Link = "a",
  className,
}: PillNavProps) {
  return (
    <header className={cx("z-40 w-full px-4 py-3", sticky && "sticky top-0", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
        <Link
          className="text-foreground col-start-1 row-start-1 inline-flex h-10 items-center justify-self-start text-lg font-semibold tracking-tight"
          href={logoHref}
        >
          {logo}
        </Link>

        <nav
          aria-label="Main"
          className="col-span-2 row-start-2 overflow-x-auto [scrollbar-width:none] md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="bg-card ring-border mx-auto flex w-max items-center gap-1 rounded-full p-1 shadow-sm ring-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  aria-current={item.active ? "page" : undefined}
                  className={cx(
                    "inline-flex h-9 items-center rounded-full px-4 text-sm font-medium whitespace-nowrap transition-colors duration-150 motion-reduce:transition-none",
                    item.active
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-start-2 row-start-1 flex items-center gap-2 justify-self-end md:col-start-3">
          {actions.map((action) => (
            <IconButton action={action} Link={Link} key={action.label} />
          ))}
        </div>
      </div>
    </header>
  )
}
```

## Notes
- Zero npm packages. Icons are yours to pass in. Lucide with strokeWidth 1.5 gives the thin outline look.
- If you pass `onClick` from a Next.js server component, add "use client" at the top of the file.
- Icon buttons use `sr-only` labels, so screen readers announce them by name.
