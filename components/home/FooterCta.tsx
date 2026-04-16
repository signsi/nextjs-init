export default function FooterCta() {
  return (
    <section className="bg-navy">
      <div className="site-container py-[clamp(5rem,10vw,9rem)] flex flex-col items-center text-center">

        <p className="eyebrow mb-6" style={{ color: 'var(--color-gold)' }}>
          Kostenloses Erstgespräch
        </p>

        <h2 className="font-serif text-h1 font-normal text-offwhite leading-tight tracking-tight m-0 mb-6" style={{ maxWidth: '36rem' }}>
          Ihre Liegenschaft verdient{' '}
          <em className="italic text-gold">eine präzise Bewertung</em>
        </h2>

        <p className="font-sans text-body text-warmgray leading-loose m-0 mb-10" style={{ maxWidth: '26rem' }}>
          Keine Verbindlichkeit. Ich erkläre Ihnen, was Ihre Liegenschaft
          wirklich wert ist – und warum.
        </p>

        <button className="btn-primary">Termin buchen</button>

      </div>
    </section>
  )
}
