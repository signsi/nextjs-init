import { Link } from 'react-router-dom'

const mainLinks = [
  { href: '/ueber-mich',         label: 'Über mich' },
  { href: '/dienstleistungen',   label: 'Dienstleistungen' },
  { href: '/kostenlose-bewertung', label: 'Kostenlose Bewertung' },
  { href: '/regionen/seetal',    label: 'Region Seetal' },
  { href: '/regionen/luzern',    label: 'Region Luzern' },
  { href: '/marktberichte',      label: 'Marktberichte' },
  { href: '/faq',                label: 'FAQ' },
]

const legalLinks = [
  { href: '/impressum',   label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
]

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="site-container" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-normal text-navy mb-3">
              frischkopf.immo
            </p>
            <p className="font-sans text-small text-warmgray leading-loose">
              Boutique-Makler für Seetal & Luzern.<br />
              Präzise bewertet. Persönlich begleitet.
            </p>
          </div>

          {/* Nav-Links */}
          <nav>
            <p className="eyebrow mb-4">Navigation</p>
            <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
              {mainLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans text-small text-warmgray no-underline transition-colors duration-150 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <p className="eyebrow mb-4">Kontakt</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+41000000000" className="font-sans text-small text-warmgray no-underline hover:text-navy transition-colors duration-150">
                +41 00 000 00 00
              </a>
              <a href="mailto:hallo@frischkopf.immo" className="font-sans text-small text-warmgray no-underline hover:text-navy transition-colors duration-150">
                hallo@frischkopf.immo
              </a>
              <p className="font-sans text-small text-warmgray leading-loose mt-2">
                Seetal & Luzern, Schweiz
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-16 pt-6 border-t border-border">
          <p className="font-sans text-caption text-warmgray">
            © {new Date().getFullYear()} frischkopf.immo · Sandro Frischkopf
          </p>
          <div className="flex gap-6">
            {legalLinks.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="font-sans text-caption text-warmgray no-underline hover:text-navy transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
