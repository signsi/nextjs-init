const reviews = [
  {
    text: 'Sandro hat unsere Liegenschaft nicht nur zum richtigen Preis verkauft – er hat uns durch jeden Schritt begleitet und erklärt. Eine Betreuung, die man so selten findet.',
    name: 'Familie M.',
    location: 'Hochdorf, Seetal',
  },
  {
    text: 'Als Erbengemeinschaft hatten wir viele offene Fragen. Sandro hat mit grosser Geduld und Sachkenntnis die Situation für alle Beteiligten klar gemacht.',
    name: 'R. & S. K.',
    location: 'Luzern',
  },
  {
    text: 'Die Bewertung war präzise und nachvollziehbar dokumentiert. Unsere Bank hat sie sofort akzeptiert. Der Verkauf lief reibungslos – wie versprochen.',
    name: 'Thomas B.',
    location: 'Hitzkirch, Seetal',
  },
]

export default function Reviews() {
  return (
    <section className="bg-surface border-t border-border">
      <div className="site-container py-[clamp(5rem,10vw,9rem)]">

        <div className="flex flex-wrap items-end justify-between gap-6 mb-[clamp(3rem,6vw,5rem)]">
          <div>
            <p className="eyebrow mb-4">Kundenstimmen</p>
            <h2 className="font-serif text-h2 font-normal text-navy leading-tight tracking-tight m-0">
              Was Eigentümer sagen
            </h2>
          </div>
          <p className="font-sans text-caption text-warmgray">
            Platzhalter · Google-Bewertungen ab September 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {reviews.map((r, i) => (
            <div
              key={i}
              className={`py-10 ${i > 0 ? 'md:border-l border-border md:pl-10' : ''} ${i < reviews.length - 1 ? 'border-b md:border-b-0 border-border' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="font-serif text-body italic text-navy leading-loose m-0 mb-8">
                «{r.text}»
              </p>

              <p className="font-sans text-small font-medium text-navy m-0">{r.name}</p>
              <p className="font-sans text-caption text-warmgray m-0 mt-1">{r.location}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
