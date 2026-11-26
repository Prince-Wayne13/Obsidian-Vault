# Tetris grid

## Idea

Use CSS Grid with cells that span multiple rows and columns. The varied spans create an interlocking, Tetris-like composition while remaining responsive. Inverse-corner SVG cutouts can fill the outside of a rounded corner when a label or action interrupts a card edge.

## Clean CSS Grid

```html
<section class="tetris-grid" aria-label="Feature grid">
  <article class="tile tile-intro">Placeholder introduction</article>
  <article class="tile tile-benefit">Placeholder benefit</article>
  <article class="tile tile-detail">Placeholder detail</article>
</section>
```

```css
.tetris-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: minmax(10rem, auto);
  gap: 1rem;
}

.tile-intro { grid-column: span 2; grid-row: span 2; }
.tile-benefit { grid-column: span 1; }
.tile-detail { grid-column: span 1; grid-row: span 2; }

@media (max-width: 48rem) {
  .tetris-grid { grid-template-columns: 1fr; }
  .tile-intro, .tile-benefit, .tile-detail { grid-column: auto; grid-row: auto; }
}
```

## Tailwind version

```tsx
<section className="grid grid-cols-1 auto-rows-[minmax(10rem,auto)] gap-4 md:grid-cols-4" aria-label="Feature grid">
  <article className="rounded-3xl border p-6 md:col-span-2 md:row-span-2">Placeholder introduction</article>
  <article className="rounded-3xl border p-6">Placeholder benefit</article>
  <article className="rounded-3xl border p-6 md:row-span-2">Placeholder detail</article>
</section>
```

An inverse corner is a small SVG filled with `currentColor`, positioned just beyond the interrupted edge and rotated for the required corner.
