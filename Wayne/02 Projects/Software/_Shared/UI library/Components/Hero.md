---
type: ui-component
name: Hero
status: usable
source: Written for me by Claude on 2026-11-26, patterned on a cutout card I collected plus two site designs I liked. Not copied code.
license: Mine. Free to use in any of my projects.
stack: React, Tailwind v4, shadcn theme tokens
depends-on: none (no npm packages)
missing: none
---
# Hero

## What it is
My top-of-page section. A big confident headline, one short line, up to two pill buttons, and an optional slot at the bottom-right for cards. With a background image it becomes white text on a dark gradient. Without one it uses your theme colors.

## When to use it
The first thing on a landing page or a main screen. One hero per page.

## Fuel app use
A landing hero for drivers: the headline says what the app promises, the primary button is Find fuel, the secondary is for station managers, and the bottom-right slot holds two or three CutoutCards of nearby stations.

## Dependencies
React and Tailwind v4. Theme tokens used: card, border, foreground, background, muted, muted-foreground.

## Missing files
None. This file is self-contained.

## API (props)
| Prop | Type | Default | What it does |
|---|---|---|---|
| `title` | `ReactNode` | required | The headline |
| `subtitle` | `ReactNode` | none | One short supporting line |
| `eyebrow` | `ReactNode` | none | Small uppercase mono line above the title |
| `primary` | `{label, href?, onClick?, icon?}` | none | Main pill button |
| `secondary` | `{label, href?, onClick?, icon?}` | none | Quiet pill button |
| `image` | `string` | none | Background image URL. Switches to light-on-dark |
| `imageAlt` | `string` | "" | Alt text |
| `align` | `"left" | "center"` | "left" | Text alignment |
| `aside` | `ReactNode` | none | Bottom-right slot. Drops below the text on phones |
| `className` | `string` | none | Extra classes on the section |

### Usage
```tsx
import { Play, Plus } from "lucide-react"
import { Hero } from "@/components/ui/hero"

<Hero
  eyebrow="Live fuel status"
  title="Know before you drive."
  subtitle="Station managers post it. You see it in seconds."
  image="/hero/road.jpg"
  primary={{ label: "Find fuel", href: "/stations", icon: <Plus /> }}
  secondary={{ label: "I run a station", href: "/manager", icon: <Play /> }}
  aside={<NearbyCards />}
/>
```

## States
- With image: white text, white primary pill, frosted secondary pill, dark gradient for readability.
- Without image: theme colors, ink primary pill, outlined secondary pill.
- Center align: stacks everything in the middle, and the aside goes below.

## Code
Save as `components/ui/hero.tsx`.

```tsx
import * as React from "react"

/**
 * Hero: my top-of-page section.
 *
 * Big confident headline, one short line, up to two pill buttons, and an
 * optional slot on the bottom-right for cards. With an image, it becomes
 * light text on a dark gradient. Without one, it uses your theme colors.
 *
 * Needs: React, Tailwind v4, and shadcn theme tokens
 * (card, border, foreground, background, muted, muted-foreground).
 * No npm packages.
 */

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ")

export type HeroAction = {
  label: string
  href?: string
  onClick?: () => void
  /** Trailing icon, like a play arrow or plus. */
  icon?: React.ReactNode
}

export type HeroProps = {
  title: React.ReactNode
  subtitle?: React.ReactNode
  /** Small uppercase mono line above the title. */
  eyebrow?: React.ReactNode
  primary?: HeroAction
  secondary?: HeroAction
  /** Background image URL. */
  image?: string
  imageAlt?: string
  align?: "left" | "center"
  /** Bottom-right slot, like a row of CutoutCards. Drops below the text on phones. */
  aside?: React.ReactNode
  className?: string
}

const BUTTON_BASE =
  "inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium " +
  "transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] " +
  "active:scale-[0.97] motion-reduce:transition-none [&_svg]:size-4"

function HeroButton({
  action,
  variant,
  onDark,
}: {
  action: HeroAction
  variant: "primary" | "secondary"
  onDark: boolean
}) {
  const tone = onDark
    ? variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/25"
    : variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "bg-card text-foreground ring-1 ring-border hover:bg-muted"

  const content = (
    <>
      {action.label}
      {action.icon}
    </>
  )

  if (action.href) {
    return (
      <a className={cx(BUTTON_BASE, tone)} href={action.href} onClick={action.onClick}>
        {content}
      </a>
    )
  }

  return (
    <button className={cx(BUTTON_BASE, tone)} onClick={action.onClick} type="button">
      {content}
    </button>
  )
}

export function Hero({
  title,
  subtitle,
  eyebrow,
  primary,
  secondary,
  image,
  imageAlt = "",
  align = "left",
  aside,
  className,
}: HeroProps) {
  const onDark = Boolean(image)
  const centered = align === "center"

  return (
    <section
      className={cx(
        "relative isolate flex min-h-[28rem] w-full overflow-hidden rounded-3xl sm:min-h-[34rem]",
        onDark ? "text-white" : "bg-card text-foreground ring-border ring-1",
        className
      )}
    >
      {image ? (
        <>
          <img
            alt={imageAlt}
            className="absolute inset-0 -z-20 size-full object-cover"
            src={image}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-linear-to-t from-black/70 via-black/20 to-black/10"
          />
        </>
      ) : null}

      <div
        className={cx(
          "relative z-10 flex w-full flex-col gap-8 p-6 sm:p-10",
          centered
            ? "items-center justify-center text-center"
            : "justify-end lg:flex-row lg:items-end lg:justify-between"
        )}
      >
        <div className="max-w-2xl">
          {eyebrow ? (
            <p
              className={cx(
                "mb-3 font-mono text-[11px] tracking-[0.12em] uppercase",
                onDark ? "text-white/80" : "text-muted-foreground"
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl leading-[0.95] font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p
              className={cx(
                "mt-4 max-w-xl text-base leading-relaxed text-pretty sm:text-lg",
                centered && "mx-auto",
                onDark ? "text-white/85" : "text-muted-foreground"
              )}
            >
              {subtitle}
            </p>
          ) : null}
          {primary || secondary ? (
            <div className={cx("mt-6 flex flex-wrap gap-3", centered && "justify-center")}>
              {primary ? (
                <HeroButton action={primary} onDark={onDark} variant="primary" />
              ) : null}
              {secondary ? (
                <HeroButton action={secondary} onDark={onDark} variant="secondary" />
              ) : null}
            </div>
          ) : null}
        </div>

        {aside ? <div className="w-full lg:w-auto lg:max-w-[55%]">{aside}</div> : null}
      </div>
    </section>
  )
}
```

## Notes
- Zero npm packages. Uses a plain `<img>` for the background.
- Pick a background image with a calm lower-left area, since that is where the text sits.
- The gradient is fixed at 70% black at the bottom. Raise it if your image is bright.
