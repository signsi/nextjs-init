import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/ueber-mich',       label: 'Über mich' },
  { href: '/dienstleistungen', label: 'Dienstleistungen' },
  { href: '/regionen/seetal',  label: 'Regionen' },
  { href: '/faq',              label: 'FAQ' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-background ${scrolled ? 'border-b border-border' : ''}`}>
        <div className="site-container flex items-center justify-between h-16 md:h-20">

          <Link to="/" className="font-serif text-lg font-normal text-navy no-underline tracking-tight">
            frischkopf.immo
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map(link => (
              <Link
                key={link.href}
                to={link.href}
                className="font-sans text-label font-medium uppercase tracking-wider text-warmgray no-underline transition-colors duration-150 hover:text-navy"
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary" style={{ padding: '0.625rem 1.5rem' }}>
              Termin buchen
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menü"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -mr-2 bg-transparent border-0 cursor-pointer"
          >
            {[
              menuOpen ? 'translate-y-[5px] rotate-45' : '',
              menuOpen ? 'opacity-0' : '',
              menuOpen ? '-translate-y-[5px] -rotate-45' : '',
            ].map((extra, i) => (
              <span key={i} className={`block h-px w-5 bg-navy transition-all duration-200 origin-center ${extra}`} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`md:hidden fixed inset-0 z-40 flex flex-col justify-between bg-navy px-8 pt-24 pb-16 transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className="flex flex-col w-full">
          {links.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-serif font-normal text-offwhite no-underline block border-b border-white/[0.08] py-5 transition-all duration-200 ${menuOpen ? 'translate-x-0' : '-translate-x-4'}`}
              style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', transitionDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button className="btn-primary w-full justify-center" style={{ padding: '1rem' }}>
          Termin buchen
        </button>
      </div>
    </>
  )
}
