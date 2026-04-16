export default function Hero() {
  return (
    <section className="bg-background min-h-svh hero-grid pt-16 md:pt-20">

      {/* ── Text – links ───────────────────────── */}
      <div
        className="flex flex-col justify-center py-[clamp(4rem,8vw,7rem)]"
        style={{ paddingInline: 'clamp(1.25rem, 4vw, 2.5rem)', paddingRight: 'clamp(2rem, 5vw, 5rem)' }}
      >
        <p className="eyebrow mb-6">Boutique-Makler · Seetal & Luzern</p>

        <h1 className="font-serif text-hero font-normal text-navy leading-tight tracking-tight m-0 mb-8">
          Präzise bewertet.
          <br />
          <em className="text-gold italic">Persönlich begleitet.</em>
        </h1>

        <p className="font-sans text-body text-warmgray leading-loose m-0 mb-10" style={{ maxWidth: '28rem' }}>
          11 Jahre Bankenerfahrung. Ich begleite Sie von der Bewertung
          bis zum Notariat – persönlich und mit bankenpräziser Methodik.
        </p>

        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Termin buchen</button>
          <button className="btn-text">Dienstleistungen →</button>
        </div>
      </div>

      {/* ── Portrait – rechts ──────────────────── */}
      <div className="hidden md:flex relative bg-navy-mid items-center justify-center overflow-hidden">
        <p className="font-serif font-normal italic text-gold opacity-[0.08] leading-none select-none m-0"
           style={{ fontSize: 'clamp(8rem, 16vw, 14rem)' }}>
          SF
        </p>
        <div className="absolute bottom-10 text-center">
          <p className="eyebrow opacity-30 text-offwhite">Foto folgt</p>
          <p className="font-sans text-caption text-warmgray mt-1">Mai 2026</p>
        </div>
      </div>

    </section>
  )
}
