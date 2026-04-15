# Design Tokens — frischkopf.immo

**Stack:** Tailwind CSS v4 · `@theme` in `src/index.css`  
**Philosophie:** Bankenpräzision trifft alpine Wärme

---

## Farben

| Token | Wert | Verwendung |
|-------|------|------------|
| `--color-navy` | `#0B1C35` | Primärfarbe, Texte auf hellen Flächen |
| `--color-navy-mid` | `#1A3460` | Sekundärfarbe, Hover-States |
| `--color-navy-light` | `#243F72` | Akzent auf dunklen Flächen |
| `--color-gold` | `#B8952A` | Akzentfarbe, CTA-Hintergrund |
| `--color-gold-light` | `#D4AF50` | Hover-State des Gold-Buttons |
| `--color-gold-muted` | `#8A6E1F` | Aktiv-State, Schatten |
| `--color-sand` | `#F5F0E8` | Hintergrund für Abschnitte |
| `--color-offwhite` | `#FAFAF8` | Haupt-Hintergrundfarbe |
| `--color-warmgray` | `#8A8578` | Sekundärer Text, Labels |
| `--color-warmgray-light` | `#C4BFB8` | Trennlinien, dezente UI |

### Semantische Rollen

| Token | Wert | Verwendung |
|-------|------|------------|
| `--color-background` | `#FAFAF8` | Seitenhintergrund |
| `--color-surface` | `#F5F0E8` | Abschnitts-Hintergrund (Sand) |
| `--color-surface-dark` | `#0B1C35` | Dunkle Abschnitte (USPs) |
| `--color-text` | `#0B1C35` | Primärtext |
| `--color-text-secondary` | `#8A8578` | Fliesstext, Untertitel |
| `--color-text-inverse` | `#FAFAF8` | Text auf dunklem Hintergrund |
| `--color-accent` | `#B8952A` | Gold-Akzent |
| `--color-border` | `#E8E3D8` | Trennlinien |

---

## Typografie

### Schriften

| Token | Wert | Einsatz |
|-------|------|---------|
| `--font-serif` | `'Playfair Display', Georgia, serif` | H1, H2, H3, kursive Akzente |
| `--font-sans` | `'Inter', system-ui, sans-serif` | Body, Labels, CTAs |

Google Fonts: `Playfair Display` 400/500 regular+italic, `Inter` 400/500

### Gewichte
Nur `400` (regular) und `500` (medium). Kein 700.

### Schriftgrössen (fluid)

| Token | Bereich | Einsatz |
|-------|---------|---------|
| `--text-hero` | 44px → 72px | Hero H1 |
| `--text-h1` | 32px → 52px | Seitentitel |
| `--text-h2` | 24px → 32px | Abschnittstitel |
| `--text-h3` | 18px → 22px | Kacheltitel, Unterüberschriften |
| `--text-body` | 16px | Fliesstext |
| `--text-small` | 14px | CTAs, Labels, Captions |
| `--text-caption` | 12px | Meta, Quellenangaben |
| `--text-label` | 11px | Eyebrow-Labels |

### Zeilenabstände

| Token | Wert | Einsatz |
|-------|------|---------|
| `--leading-tight` | 1.15 | Headlines |
| `--leading-snug` | 1.3 | Subtitles |
| `--leading-normal` | 1.6 | Fliesstext |
| `--leading-loose` | 1.8 | Lesbarkeit langer Absätze |

### Zeichenabstände

| Token | Wert | Einsatz |
|-------|------|---------|
| `--tracking-tight` | -0.03em | Grosse Headlines |
| `--tracking-normal` | 0em | Body |
| `--tracking-wide` | 0.08em | H4–H6, Eyebrows |
| `--tracking-wider` | 0.15em | CTA-Labels, Uppercase |

---

## Abstände

| Token | Wert | Einsatz |
|-------|------|---------|
| `--spacing-section` | 4rem → 7rem | Vertikaler Abstand zwischen Abschnitten |
| `--spacing-block` | 2rem → 3.5rem | Abstand innerhalb eines Abschnitts |
| `--spacing-gap` | 1rem → 1.5rem | Grid-Gap, Komponentenabstand |

---

## Rahmen & Ecken

| Token | Wert | Einsatz |
|-------|------|---------|
| `--radius-none` | 0 | Kacheln, harte Kanten |
| `--radius-sm` | 4px | Tags, kleine Elemente |
| `--radius-md` | 8px | Cards |
| `--radius-lg` | 16px | Grosse Cards |
| `--radius-pill` | 9999px | Alle CTA-Buttons |

---

## Breiten

| Token | Wert | Einsatz |
|-------|------|---------|
| `--width-content` | 72rem / 1152px | Max-Breite Content |
| `--width-text` | 44rem / 704px | Text-Kolumnen |
| `--width-narrow` | 36rem / 576px | Schmale Kolumnen, Formulare |

---

## Komponenten-Klassen

Definiert in `src/index.css`:

| Klasse | Beschreibung |
|--------|-------------|
| `.btn-primary` | Gold, Pill-Button — primärer CTA |
| `.btn-secondary` | Transparent, weisser Rand — sekundärer CTA |
| `.btn-text` | Nur Text — tertiärer CTA |
| `.container` | Zentriert, max-width, padding |
| `.section` | Vertikales padding via `--spacing-section` |
| `.label` | Gold, uppercase, tracking-wider — Eyebrow |
| `.usp-number` | Serif, grosse Zahl, Gold gedämpft — 01–04 |

---

## Farbkombinationen (zulässige Paare)

| Hintergrund | Text | Akzent | Einsatz |
|-------------|------|--------|---------|
| `offwhite` | `navy` | `gold` | Hauptseiten |
| `sand` | `navy` | `gold` | Abschnittswechsel |
| `navy` | `offwhite` | `gold` | USP-Kacheln, dunkle Sections |
| `navy-mid` | `offwhite` | `gold-light` | Hover, Karten auf dunkel |

---

## Stilregeln (Nicht-Token)

- Kein `box-shadow`, keine `gradient`-Hintergründe
- Kein `font-weight: 700`
- Keine Icon-Libraries — Pfeil-Symbole via Unicode oder SVG inline
- Trennlinien via `border-color: var(--color-border)`, nie via Hintergrundfarbe
- Bilder immer `object-fit: cover`, cinematic graded via CSS-Filter nur wenn nötig

---

*Letzte Aktualisierung: April 2026*
