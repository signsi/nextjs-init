import Link from 'next/link'

const tags = ['11 Jahre Bankenerfahrung', 'Boutique-Makler', 'Seetal & Luzern']

export default function AboutTeaser() {
  return (
    <section className="bg-background border-t border-border">
      <div className="site-container py-[clamp(5rem,10vw,9rem)]">
        <div className="about-grid">

          {/* Portrait */}
          <div className="aspect-[4/5] bg-surface flex flex-col items-center justify-center overflow-hidden relative">
            <p className="font-serif font-normal italic text-gold opacity-[0.15] leading-none select-none m-0"
               style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}>
              SF
            </p>
            <p className="font-sans text-caption text-warmgray uppercase tracking-wide mt-4 opacity-40">
              Foto folgt Mai 2026
            </p>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow mb-6">Über mich</p>

            <h2 className="font-serif text-h2 font-normal text-navy leading-tight tracking-tight m-0 mb-8">
              Sandro Frischkopf
            </h2>

            <p className="font-sans text-body text-warmgray leading-loose m-0 mb-5">
              Nach über einem Jahrzehnt in der Bankfinanzierung wollte ich den
              direkten Kontakt zum Menschen. Keine Vermittlung über Schalter –
              sondern echte Begleitung, von der ersten Bewertung bis zum Notar.
            </p>

            <p className="font-sans text-body text-warmgray leading-loose m-0 mb-10">
              Ich kenne beide Seiten des Tisches: die Banklogik hinter jedem
              Bewertungsmodell – und die menschliche Geschichte hinter jeder Liegenschaft.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map(tag => (
                <span key={tag} className="font-sans text-caption font-medium text-navy uppercase tracking-wide border border-border px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>

            <Link href="/ueber-mich" className="btn-text">Mehr über mich →</Link>
          </div>

        </div>
      </div>
    </section>
  )
}
