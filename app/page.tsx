import Hero from '@/components/home/Hero'
import UspGrid from '@/components/home/UspGrid'
import ProcessSteps from '@/components/home/ProcessSteps'
import AboutTeaser from '@/components/home/AboutTeaser'
import Reviews from '@/components/home/Reviews'
import FooterCta from '@/components/home/FooterCta'

export default function Home() {
  return (
    <>
      <Hero />
      <UspGrid />
      <ProcessSteps />
      <AboutTeaser />
      <Reviews />
      <FooterCta />
    </>
  )
}
