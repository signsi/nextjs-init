# Information Architecture — frischkopf.immo

**Stand:** April 2026

---

## 1. Navigationsprinzip

**Ein Ziel, viele Wege.** Jede Seite führt zur Terminbuchung. Die Navigation ist minimal – sie räumt dem Inhalt Platz, nicht sich selbst.

**Desktop:** Horizontale Nav, rechtsbündig CTA «Termin buchen» (Gold-Button).  
**Mobile:** Hamburger-Menü + Sticky Bottom Bar (Telefon / WhatsApp).

---

## 2. Primäre Navigation

```
frischkopf.immo        Über mich   Dienstleistungen   Regionen ▾   Marktberichte   FAQ        [Termin buchen]
```

**Regionen-Dropdown:**
```
▾ Regionen
  ├── Seetal (Hub)
  └── Luzern (Hub)
```

*Gemeinde-Landingpages erscheinen nicht in der Navigation – sie sind SEO-Einstiegspunkte, keine primären Navigationsziele.*

---

## 3. Seitenbaum & URLs

```
/                                    → Startseite
├── /ueber-mich                      → Über mich
├── /dienstleistungen                → Dienstleistungen
├── /kostenlose-bewertung            → Bewertung & Terminbuchung
├── /regionen
│   ├── /regionen/seetal             → Region Seetal (Hub)
│   │   ├── /regionen/seetal/hochdorf
│   │   ├── /regionen/seetal/hitzkirch
│   │   ├── /regionen/seetal/eschenbach
│   │   ├── /regionen/seetal/baldegg
│   │   ├── /regionen/seetal/roemerswil
│   │   └── /regionen/seetal/mosen
│   └── /regionen/luzern             → Region Luzern (Hub)
│       ├── /regionen/luzern/luzern-stadt
│       ├── /regionen/luzern/emmen
│       ├── /regionen/luzern/horw
│       └── /regionen/luzern/kriens
├── /marktberichte                   → Blog-Index
│   └── /marktberichte/[slug]        → Artikel
├── /faq                             → FAQ
├── /impressum
└── /datenschutz
```

---

## 4. Seitentypen

| Typ | Seiten | Primäres Ziel |
|-----|--------|---------------|
| **Conversion** | Startseite, Kostenlose Bewertung | Terminbuchung |
| **Vertrauen** | Über mich, FAQ | Überzeugen, Einwände abbauen |
| **Service** | Dienstleistungen | Verständnis + Terminbuchung |
| **SEO Hub** | Region Seetal, Region Luzern | Regionale Autorität + Terminbuchung |
| **SEO Leaf** | Gemeinde-Landingpages (10 Stk.) | Long-tail Keywords + Terminbuchung |
| **Content** | Marktberichte / Blog | Expertise zeigen + SEO |
| **Legal** | Impressum, Datenschutz | Compliance |

---

## 5. User Flows

### Flow A – Direkter Verkäufer (primär)
```
Startseite
  → Hero (erster Eindruck, Sandro sehen)
  → USP-Kacheln (Warum ich?)
  → Verkaufsprozess (Wie läuft das ab?)
  → «Termin buchen» CTA
  → Calendly
```

### Flow B – Skeptiker / Recherchierer
```
Startseite
  → Über mich (Wer ist dieser Mensch?)
  → Dienstleistungen (Was genau bietet er?)
  → FAQ (Was kostet das? Wie lange dauert es?)
  → «Termin buchen» CTA
  → Calendly
```

### Flow C – SEO-Einstieg via Gemeinde
```
Google: «Immobilienmakler Hochdorf»
  → /regionen/seetal/hochdorf
  → Lokale Marktdaten, Sandros Expertise in der Region
  → «Kostenlose Bewertung für Ihre Liegenschaft in Hochdorf»
  → Calendly
```

### Flow D – Erbengemeinschaft
```
Google oder Empfehlung
  → Startseite oder Dienstleistungen
  → Sektion «Nachlass & Erbengemeinschaften»
  → Persönlicher Text: Situation wird benannt, nicht beschönigt
  → «Erstgespräch vereinbaren»
  → Calendly
```

### Flow E – Marktbericht-Leser (Content-to-Lead)
```
Google: «Immobilienpreise Seetal 2026»
  → /marktberichte/[artikel]
  → Expertise sichtbar
  → Inline CTA am Artikelende
  → Calendly
```

---

## 6. Seiteninhalte im Detail

### 01 Startseite `/`

| Abschnitt | Inhalt | CTA |
|-----------|--------|-----|
| Navigation | Logo, Links, «Termin buchen» | Gold-Button |
| Hero | Portrait Sandro, H1 Claim, Subheadline, 2 CTAs | Primär + Sekundär |
| USPs | 4 Kacheln (01–04), dunkler Hintergrund | — |
| Verkaufsprozess | 4 Schritte, nummeriert | — |
| Über mich (kurz) | Portrait, Hintergrund, 3 Tags | — |
| Rezensionen | 3 Google-Bewertungen, Sterne | — |
| Footer-CTA | Letzter Call vor Footer | «Termin buchen» |
| Footer | Logo, Links, Impressum, Datenschutz | — |

### 02 Über mich `/ueber-mich`

| Abschnitt | Inhalt |
|-----------|--------|
| Hero | Portrait, Name, Rolle |
| Geschichte | Narrative: Bank → direkter Kundenkontakt. Warum Makler? |
| Werte | 3–4 Grundsätze (Boutique, Präzision, Transparenz) |
| Bankenhintergrund | 11 Jahre Finanzierung – was das bedeutet für Verkäufer |
| CTA | «Lernen Sie mich kennen – Termin buchen» |

### 03 Dienstleistungen `/dienstleistungen`

| Abschnitt | Inhalt |
|-----------|--------|
| Bewertung | IAZI / Wüest Partner – bankenpräzise Methodik |
| Verkaufsbegleitung | Von A bis Z, Sandro persönlich |
| Käuferqualifikation | Finanzierungsprüfung vor Besichtigung |
| Preisstrategie | Marktdaten + Banklogik |
| Nachlass & Erben | Direkte Ansprache – Bewertung, Entscheidung, Verkauf |
| CTA | Je Dienstleistung eigener CTA-Block |

### 04 Kostenlose Bewertung `/kostenlose-bewertung`

| Abschnitt | Inhalt |
|-----------|--------|
| Intro | Was eine professionelle Bewertung bedeutet |
| Methodik | IAZI / Wüest Partner erklärt (kurz, verständlich) |
| Was Sie erhalten | Konkrete Outputs des Erstgesprächs |
| Warum kostenlos? | Transparenz, kein Versteckspiel |
| Calendly-Embed | Direkte Terminbuchung |

### 05 Region Seetal `/regionen/seetal`

| Abschnitt | Inhalt |
|-----------|--------|
| Hub-Intro | Seetal als Markt – Lage, Charakter, Preisniveau |
| Sandros Expertise | Warum Seetal, welche Gemeinden, Netzwerk |
| Gemeinde-Links | Cards zu allen 6 Gemeinden |
| Marktdaten | Aktuell, quartalsweise aktualisiert via Sanity |
| CTA | Regional formuliert: «Ihre Liegenschaft im Seetal bewerten lassen» |

### 06 Region Luzern `/regionen/luzern`

Analog zu Seetal – aber städtischer Ton, andere Preisklassen, Fokus auf ETW und städtische EFH.

### Gemeinde-Landingpages `/regionen/[region]/[gemeinde]`

Template-Seite mit variablem Inhalt via Sanity:

| Slot | Inhalt |
|------|--------|
| H1 | «Immobilien verkaufen in [Gemeinde]» |
| Intro | Gemeindecharakter, Lage, Verbindungen |
| Marktdaten | Ø Quadratmeterpreise, Transaktionen (Wüest-Daten) |
| Sandros Bezug | Persönliche Aussage zur Gemeinde |
| CTA | «Kostenlose Bewertung für [Gemeinde]» → Calendly |
| Interne Links | Zurück zur Hub-Seite + Nachbargemeinden |

### 07 Marktberichte `/marktberichte`

| Abschnitt | Inhalt |
|-----------|--------|
| Index | Cards: Artikelbild, Titel, Datum, Lesezeit |
| Artikel-Template | Autor (Sandro), Datum, Kategorie, Inline-CTAs |
| Kategorien | Marktberichte, Finanzierungstipps, Recht & Steuern |

### 08 FAQ `/faq`

Fragen gruppiert nach Thema:

| Gruppe | Beispiel-Fragen |
|--------|----------------|
| Maklerkosten | Was kostet ein Makler? Wer zahlt die Provision? |
| Bewertung | Wie wird eine Liegenschaft bewertet? Was ist IAZI? |
| Verkaufsdauer | Wie lange dauert ein Verkauf im Seetal? |
| Prozess | Wie läuft ein Verkauf ab? |
| Finanzierung | Wie qualifiziere ich Käufer? |
| Erben | Wie geht man mit Erbengemeinschaften um? |

---

## 7. Internes Verlinkungsnetz

```
Startseite ←→ Über mich
Startseite ←→ Dienstleistungen
Startseite ←→ Kostenlose Bewertung (primärer CTA-Ziel)
Dienstleistungen → Kostenlose Bewertung
Über mich → Kostenlose Bewertung
Gemeinden → Hub-Seite (Seetal / Luzern)
Hub-Seiten → Gemeinden (bidirektional)
Marktberichte → Kostenlose Bewertung (Inline-CTA)
FAQ → Kostenlose Bewertung (nach Key-Fragen)
```

---

## 8. Calendly-Integration

Calendly erscheint in drei Formen:

| Form | Wo | Verhalten |
|------|-----|-----------|
| Embed (vollständig) | `/kostenlose-bewertung` | Inline-Kalender auf der Seite |
| Popup | Alle anderen Seiten via CTA-Button | Öffnet Modal |
| Direktlink | Mobile Sticky Bar | Öffnet Calendly-App / Browser |

---

## 9. Mobile-Spezifika

| Element | Verhalten |
|---------|-----------|
| Navigation | Hamburger-Menü, vollflächig |
| Hero | Portrait oben, Text darunter (kein Overlap) |
| USP-Kacheln | 1-spaltig gestapelt |
| Sticky Bottom Bar | Telefon-Icon + WhatsApp-Icon + «Termin buchen» |
| Gemeinde-Karten | Horizontal scrollbar auf Hub-Seiten |

---

## 10. Content-Pflege via Sanity

| Content-Typ | Pflegbar? | Update-Rhythmus |
|-------------|-----------|-----------------|
| Marktberichte / Blog | Ja | Monatlich |
| Gemeinde-Marktdaten | Ja | Quartalsweise |
| Rezensionen | Ja (manuell kuratiert) | Bei Bedarf |
| FAQ | Ja | Bei Bedarf |
| Startseite Hero-Text | Ja | Selten |

---

*Letzte Aktualisierung: April 2026*
