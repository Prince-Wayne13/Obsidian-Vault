import * as React from "react"

/**
 * CutoutCard: my signature card.
 *
 * A media card with carved-out corners. A label sits in the bottom-left notch,
 * a pin (status or tag) sits in the top-right notch, and an optional action
 * button sits in the bottom-right.
 *
 * Needs: React, Tailwind v4, and shadcn theme tokens
 * (card, card-foreground, primary, primary-foreground, muted-foreground, border,
 * foreground, background). No npm packages. Copy this file as-is.
 */

const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ")

const SURFACE_SHADOW =
  "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_2px_-1px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.04)] " +
  "dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_2px_-1px_rgba(255,255,255,0.03),0px_2px_4px_0px_rgba(0,0,0,0.2)]"

/**
 * Inverse rounded corner. Fills the bottom-right corner of its box, outside a
 * quarter circle. Rotate it to fill other corners. Color comes from the
 * text-* class or the `color` prop (it uses currentColor).
 * Position it 1px past the edge it touches so there is no seam.
 */
function Corner({
  size,
  className,
  color,
}: {
  size: number
  className?: string
  color?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={cx("absolute", className)}
      fill="none"
      height={size}
      style={color ? { color } : undefined}
      viewBox="0 0 30 30"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 0V30H0A30 30 0 0 0 30 0Z" fill="currentColor" />
    </svg>
  )
}

export type CutoutCardProps = {
  image: string
  imageAlt?: string
  /** Tailwind height class for the media area. Default "h-56". */
  mediaClassName?: string
  /** Bottom-left notch. Short text works best, like "2.4 km". */
  label?: React.ReactNode
  /** Top-right notch. Short text or a status, like "Has fuel". */
  pin?: React.ReactNode
  /** Any CSS color for the pin (hex, var(--x), oklch). Default: theme primary. */
  pinColor?: string
  /** Text color on the pin. Default: theme primary-foreground. */
  pinTextColor?: string
  title: React.ReactNode
  description?: React.ReactNode
  /** Footer row, left side. */
  meta?: React.ReactNode
  /** Footer row, right side. */
  aside?: React.ReactNode
  /** Bottom-right action, usually <CutoutCardButton>. Reserves space under the text. */
  action?: React.ReactNode
  className?: string
}

export function CutoutCard({
  image,
  imageAlt = "",
  mediaClassName = "h-56",
  label,
  pin,
  pinColor,
  pinTextColor,
  title,
  description,
  meta,
  aside,
  action,
  className,
}: CutoutCardProps) {
  const hasFooter = Boolean(meta || aside)

  return (
    <article
      className={cx(
        "bg-card text-card-foreground relative w-full overflow-hidden rounded-3xl",
        SURFACE_SHADOW,
        className
      )}
    >
      <div className={cx("relative w-full overflow-hidden", mediaClassName)}>
        <img
          alt={imageAlt}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
          src={image}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
        />

        {label ? (
          <div className="bg-card absolute bottom-0 left-0 z-10 rounded-tr-[20px] px-5 py-3">
            <span className="text-muted-foreground text-[11px] font-semibold tracking-widest uppercase">
              {label}
            </span>
            <Corner
              className="text-card -right-[31px] -bottom-px rotate-90"
              size={32}
            />
            <Corner
              className="text-card -top-[31px] -left-px rotate-90"
              size={32}
            />
          </div>
        ) : null}

        {pin ? (
          <div
            className={cx(
              "absolute top-0 right-0 z-10 rounded-bl-[16px] px-4 py-2 text-sm font-semibold",
              !pinColor && "bg-primary",
              !pinTextColor && "text-primary-foreground"
            )}
            style={{ backgroundColor: pinColor, color: pinTextColor }}
          >
            {pin}
            <Corner
              className={cx("top-0 -left-[23px] -rotate-90", !pinColor && "text-primary")}
              color={pinColor}
              size={24}
            />
            <Corner
              className={cx("right-0 -bottom-[23px] -rotate-90", !pinColor && "text-primary")}
              color={pinColor}
              size={24}
            />
          </div>
        ) : null}
      </div>

      <div className={cx("px-6 pt-5", action ? "pb-20" : "pb-6")}>
        <h3 className="mb-2 text-xl leading-snug font-semibold text-balance">
          {title}
        </h3>
        {description ? (
          <p className="text-muted-foreground mb-4 text-sm leading-relaxed text-pretty">
            {description}
          </p>
        ) : null}
        {hasFooter ? (
          <div className="border-border/80 flex items-center justify-between gap-3 border-t pt-4 text-sm">
            <div className="min-w-0 font-medium">{meta}</div>
            <div className="text-muted-foreground shrink-0 text-xs tabular-nums">
              {aside}
            </div>
          </div>
        ) : null}
      </div>

      {action ? <div className="absolute right-5 bottom-5 z-10">{action}</div> : null}
    </article>
  )
}

/** Ink pill button for the card's action slot. */
export function CutoutCardButton({
  className,
  type = "button",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cx(
        "bg-foreground text-background rounded-full px-4 py-2 text-sm font-medium shadow-md",
        "transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] motion-reduce:transition-none",
        className
      )}
      type={type}
      {...props}
    />
  )
}
