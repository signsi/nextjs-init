# Build Tasks — frischkopf.immo

**Stack:** React 19 · TypeScript · Tailwind CSS v4 · Vite  
**Reihenfolge:** Höchste Wirkung zuerst. Jeder Task ist unabhängig baubar.

---

## Legende
- [ ] Offen
- [x] Abgeschlossen
- [~] In Arbeit

---

## Phase A — Foundation

### A1 — Projektstruktur & Routing
- [ ] React Router installieren und konfigurieren
- [ ] Ordnerstruktur anlegen: `src/pages/`, `src/components/`, `src/layouts/`
- [ ] `RootLayout` mit `<Outlet />` und `<head>`-Management (react-helmet-async o.ä.)
- [ ] Platzhalter-Routen für alle 8 Kernseiten + Gemeinde-Template
- [ ] Google Fonts via `@import` in `index.css` verifizieren (Playfair Display + Inter)

### A2 — Navigation
- [ ] `<Nav>` Komponente: Logo-Platzhalter (Wortmarke «frischkopf.immo» in Playfair), Links, Gold-CTA-Button
- [ ] Desktop: horizontal, sticky beim Scrollen (weisser Hintergrund, dezente Border)
- [ ] Mobile: Hamburger-Icon, vollflächiges Overlay-Menü (Navy-Hintergrund)
- [ ] Active-State für aktuelle Seite
- [ ] CTA öffnet Calendly-Popup (zunächst: `href="#calendly"` als Platzhalter)

### A3 — Footer
- [ ] `<Footer>` Komponente: Logo, Navigationslinks, Impressum/Datenschutz-Links
- [ ] Hintergrund: Sand (`--color-surface`)
- [ ] Copyright-Zeile mit aktuellem Jahr
- [ ] Responsive: 2-spaltig Desktop, 1-spaltig Mobile

---

## Phase B — Startseite (höchste Priorität)

### B1 — Hero-Sektion
- [ ] `<Hero>` Komponente: 16:9 Vollbreite-Container
- [ ] Hintergrundbild: Platzhalter-Gradient (Navy → Navy-mid) bis Foto vorhanden
- [ ] H1: Claim (Platzhaltertext «Präzise bewertet. Persönlich begleitet.»), Playfair Display, fluid
- [ ] Subheadline: Region + Expertise, Sans-Serif, Warmgrau
- [ ] Zwei CTAs: `.btn-primary` «Termin buchen» + `.btn-secondary` «Mehr erfahren»
- [ ] Sandro-Portrait rechts positioniert (Platzhalter-Div bis Foto da)
- [ ] Mobile: Portrait oben, Text + CTAs darunter (kein Overlay)

### B2 — USP-Kacheln
- [ ] `<UspGrid>` Komponente: 4-spaltig Desktop, 2-spaltig Tablet, 1-spaltig Mobile
- [ ] Dunkler Hintergrund: `--color-navy`
- [ ] Pro Kachel: Nummer (01–04, `.usp-number`), Titel (Serif), Beschreibungstext
- [ ] Kein Border-Radius, keine Schatten — scharfe Kacheln
- [ ] Inhalte: 01 Bankenpräzise Bewertung · 02 Käufer vorqualifiziert · 03 Boutique-Betreuung · 04 Regionale Expertise
- [ ] Hover: leichter Gold-Akzent an der oberen Kante

### B3 — Verkaufsprozess
- [ ] `<ProcessSteps>` Komponente: 4 horizontale Schritte mit Verbindungslinie
- [ ] Schritte: 01 Bewertung → 02 Preisstrategie → 03 Vermarktung → 04 Abschluss
- [ ] Hintergrund: Sand (`--color-surface`)
- [ ] Verbindungslinie: Gold, dezent
- [ ] Mobile: vertikal gestapelt

### B4 — Über-mich-Teaser
- [ ] `<AboutTeaser>` Komponente: 2-spaltig (Foto links, Text rechts)
- [ ] Foto: quadratischer Platzhalter bis Shooting (Navy-Hintergrund mit Initialen)
- [ ] Name, Rolle (`.label` Eyebrow), Kurztext (2–3 Sätze)
- [ ] 3 Tags: «11 Jahre Finanzierung» · «Boutique-Makler» · «Seetal & Luzern»
- [ ] Link «Mehr über mich» als `.btn-text`
- [ ] Mobile: Portrait zentriert oben, Text darunter

### B5 — Rezensionen
- [ ] `<Reviews>` Komponente: 3 Karten nebeneinander
- [ ] Pro Karte: 5 Sterne (Gold), Zitat, Name, Datum, Google-Logo
- [ ] Hintergrund: Off-White
- [ ] Platzhalter-Karten mit Dummy-Text bis echte Reviews vorhanden
- [ ] Mobile: horizontal scrollbar (overflow-x: auto, snap)

### B6 — Startseite Assembly & Footer-CTA
- [ ] `src/pages/Home.tsx` alle Sektionen zusammenfügen
- [ ] Footer-CTA-Sektion vor dem Footer: Headline + `.btn-primary`
- [ ] Abstände zwischen Sektionen via `--spacing-section`
- [ ] Sticky Bottom Bar Mobile (siehe C2)

---

## Phase C — Globale Komponenten

### C1 — Calendly-Integration
- [ ] `react-calendly` installieren
- [ ] `<CalendlyPopup>` Komponente: öffnet auf Button-Klick
- [ ] Calendly-URL als Umgebungsvariable (`VITE_CALENDLY_URL`)
- [ ] Popup-Trigger an alle `.btn-primary`-CTAs im Nav und auf Seiten anschliessen
- [ ] `<CalendlyInline>` für `/kostenlose-bewertung`-Seite

### C2 — Mobile Sticky Bottom Bar
- [ ] `<StickyBar>` Komponente: fixed bottom, nur Mobile (`md:hidden`)
- [ ] Drei Aktionen: Telefon-Icon + Nummer · WhatsApp-Icon · «Termin buchen»
- [ ] Hintergrund: Navy, Text: Off-White, Akzent: Gold
- [ ] Versteckt sich wenn Footer sichtbar ist (IntersectionObserver)

---

## Phase D — Kernseiten

### D1 — Über mich `/ueber-mich`
- [ ] `src/pages/About.tsx`
- [ ] Hero: Portrait-Foto (Platzhalter), Name, Rolle, kurze Tagline
- [ ] Geschichte-Sektion: Narrativer Text (Bank → Direktkontakt, warum Makler?)
- [ ] Werte: 3–4 Grundsätze als nummerierte Liste (Playfair)
- [ ] Bankenhintergrund-Sektion: Was 11 Jahre Finanzierung für Verkäufer bedeutet
- [ ] CTA: «Lernen Sie mich kennen – Termin buchen»

### D2 — Dienstleistungen `/dienstleistungen`
- [ ] `src/pages/Services.tsx`
- [ ] Accordion oder Tabs: Bewertung · Verkauf · Käuferqualifikation · Preisstrategie
- [ ] Erbengemeinschaften: eigene Sektion, direkter Ton, klar benannt
- [ ] Pro Dienstleistung: eigener CTA-Block
- [ ] Visuell: abwechselnd Off-White / Sand Hintergrund

### D3 — Kostenlose Bewertung `/kostenlose-bewertung`
- [ ] `src/pages/Valuation.tsx`
- [ ] Intro: Was eine professionelle Bewertung beinhaltet
- [ ] Methodik: IAZI / Wüest Partner (kurz, verständlich erklärt)
- [ ] Was Sie erhalten: Liste der konkreten Outputs
- [ ] Warum kostenlos: Transparenz-Absatz
- [ ] `<CalendlyInline>` eingebettet

### D4 — FAQ `/faq`
- [ ] `src/pages/FAQ.tsx`
- [ ] `<Accordion>` Komponente: Frage / Antwort, Gold-Chevron
- [ ] Gruppen: Maklerkosten · Bewertung · Verkaufsdauer · Prozess · Finanzierung · Erben
- [ ] Am Seitenende: CTA «Noch Fragen? Termin buchen»

---

## Phase E — SEO-Seiten

### E1 — Region Seetal Hub `/regionen/seetal`
- [ ] `src/pages/regions/Seetal.tsx`
- [ ] Hub-Intro: Seetal als Markt (Charakter, Lage, Preisklasse)
- [ ] Sandros Expertise: persönliche Aussage zur Region
- [ ] Gemeinde-Cards: 6 Gemeinden verlinkt (Grid, 3-spaltig)
- [ ] Marktdaten-Sektion: Platzhalter für Quartals-Update
- [ ] CTA: «Ihre Liegenschaft im Seetal bewerten lassen»

### E2 — Region Luzern Hub `/regionen/luzern`
- [ ] `src/pages/regions/Luzern.tsx`
- [ ] Analog zu Seetal, städtischer Ton
- [ ] 4 Gemeinden verlinkt
- [ ] Fokus: ETW, städtische EFH, andere Preisniveaus

### E3 — Gemeinde-Landingpage Template
- [ ] `src/pages/regions/Community.tsx` — parametrisiert via React Router (`/regionen/:region/:gemeinde`)
- [ ] Slots: H1 «Immobilien verkaufen in [Gemeinde]» · Intro · Marktdaten · Sandros Bezug · CTA · interne Links
- [ ] Daten: `src/data/communities.ts` mit allen 10 Gemeinden (Name, Region, Beschreibung, Marktdaten-Platzhalter)

### E4 — Alle 10 Gemeinden
- [ ] Daten für alle Gemeinden in `communities.ts` erfassen:
  - Seetal: Hochdorf, Hitzkirch, Eschenbach, Baldegg, Römerswil, Mosen
  - Luzern: Luzern-Stadt, Emmen, Horw, Kriens
- [ ] Template-Rendering verifizieren für alle 10 Einträge
- [ ] Interne Verlinkung Hub ↔ Gemeinde testen

---

## Phase F — Content

### F1 — Marktberichte Index `/marktberichte`
- [ ] `src/pages/Blog.tsx`
- [ ] Artikel-Cards: Bild (Platzhalter), Titel, Datum, Lesezeit, Kategorie-Tag
- [ ] Kategorien-Filter: Alle · Marktberichte · Finanzierungstipps · Recht & Steuern
- [ ] Seite ist leer bis erster Artikel vorhanden — leerer State zeigen («Erster Marktbericht folgt im September»)

### F2 — Artikel-Template `/marktberichte/:slug`
- [ ] `src/pages/Article.tsx`
- [ ] Autor-Block: Portrait, Name, Datum
- [ ] Artikel-Body: Prosa, gut lesbar (`--width-text`, `--leading-loose`)
- [ ] Inline-CTA am Artikelende
- [ ] Zurück-Link zur Übersicht

---

## Phase G — Legal

### G1 — Impressum & Datenschutz
- [ ] `src/pages/Impressum.tsx` + `src/pages/Datenschutz.tsx`
- [ ] Minimales Layout: schmale Text-Kolumne, `--width-text`
- [ ] Inhalte: Platzhaltertext bis Rechtstext final vorliegt

---

## Reihenfolge (empfohlen)

```
A1 → A2 → A3          Foundation
B1 → B2 → B3 → B4 → B5 → B6    Startseite
C1 → C2               Globale Komponenten
D1 → D2 → D3 → D4    Kernseiten
E1 → E2 → E3 → E4    SEO-Seiten
F1 → F2               Content
G1                    Legal
```

---

## Abhängigkeiten

| Task | Benötigt |
|------|----------|
| B1–B6 | A1, A2, A3 |
| C1 | Calendly-Account + URL |
| C2 | C1 |
| D3 | C1 (Calendly Inline) |
| E3, E4 | E1 oder E2 |
| F2 | F1 |
| Alle Fotos | Shooting (Phase 1, Mai 2026) |

---

## Noch offen (kein Blocker für Build)

| # | Thema |
|---|-------|
| A | Finaler Claim (Brief Frage A) |
| B | Logo-Datei (Brief Frage B) |
| C | Hero-Foto (Brief Frage C) |
| D | Wüest Leads API-Zugang (Brief Frage D) |

---

*Letzte Aktualisierung: April 2026*
