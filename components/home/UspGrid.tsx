const usps = [
  {
    number: '01',
    title: 'Bankenpräzise Bewertung',
    text: 'IAZI und Wüest Partner statt Bauchgefühl. Preise, die Banken kennen und akzeptieren.',
  },
  {
    number: '02',
    title: 'Käufer vorqualifiziert',
    text: 'Finanzierungsprüfung vor der Besichtigung. Kein Platzen des Kaufvertrags in letzter Minute.',
  },
  {
    number: '03',
    title: 'Boutique-Betreuung',
    text: 'Wenige Mandate, volle Aufmerksamkeit. Von der Bewertung bis zum Notar – ich persönlich.',
  },
  {
    number: '04',
    title: 'Regionale Expertise',
    text: 'Seetal und Luzern. Marktdaten, Netzwerk und Ortskenntnis aus über einem Jahrzehnt.',
  },
]

export default function UspGrid() {
  return (
    <section className="bg-background border-t border-border">
      <div className="site-container py-[clamp(5rem,10vw,9rem)]">

        <p className="eyebrow mb-[clamp(3rem,6vw,5rem)]">Warum frischkopf.immo</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {usps.map((usp, i) => (
            <div
              key={usp.number}
              className={`py-[clamp(2.5rem,5vw,4rem)] ${i < 2 ? 'border-b border-border' : ''} ${i % 2 === 1 ? 'md:border-l md:border-border md:pl-16' : ''}`}
            >
              <span className="font-serif italic text-gold opacity-40 leading-none select-none block mb-5"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                {usp.number}
              </span>

              <h3 className="font-serif text-h3 font-normal text-navy leading-snug tracking-tight m-0 mb-3">
                {usp.title}
              </h3>

              <p className="font-sans text-small text-warmgray leading-loose m-0">
                {usp.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
