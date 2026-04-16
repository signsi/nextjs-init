import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyBar from '@/components/StickyBar'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'frischkopf.immo – Boutique-Makler für Seetal & Luzern',
  description: 'Präzise bewertet. Persönlich begleitet. Sandro Frischkopf – 11 Jahre Bankenerfahrung im Immobilienmarkt Seetal & Luzern.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  )
}
