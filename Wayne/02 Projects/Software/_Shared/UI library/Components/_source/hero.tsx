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
