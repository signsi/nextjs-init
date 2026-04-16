const steps = [
  { number: '01', title: 'Bewertung',      text: 'Bankenpräzise Analyse mit IAZI / Wüest Partner.' },
  { number: '02', title: 'Preisstrategie', text: 'Optimaler Einstiegspreis – weder verschenkt noch überteuert.' },
  { number: '03', title: 'Vermarktung',    text: 'Vorqualifizierte Käufer, weniger Besichtigungen.' },
  { number: '04', title: 'Abschluss',      text: 'Von der Verhandlung bis zum Notariat. Ich bin dabei.' },
]

export default function ProcessSteps() {
  return (
    <section className="bg-surface">
      <div className="site-container py-[clamp(5rem,10vw,9rem)]">

        <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-0 mb-[clamp(3rem,6vw,5rem)] md:justify-between">
          <p className="eyebrow">Der Verkaufsprozess</p>
          <h2 className="font-serif text-h2 font-normal text-navy leading-tight tracking-tight m-0 md:text-right" style={{ maxWidth: '22rem' }}>
            Vier Schritte zum{' '}
            <em className="italic text-gold">richtigen Preis</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`py-10 ${i > 0 ? 'sm:border-l border-border sm:pl-8' : ''}`}
            >
              <p className="eyebrow text-gold mb-6">{step.number}</p>

              <h3 className="font-serif text-h3 font-normal text-navy leading-snug m-0 mb-3">
                {step.title}
              </h3>

              <p className="font-sans text-small text-warmgray leading-loose m-0">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
