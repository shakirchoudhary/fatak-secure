import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ProductsGrid from '@/components/home/ProductsGrid'
import WhySection from '@/components/home/WhySection'
import HowItWorks from '@/components/home/HowItWorks'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import PartnersSection from '@/components/home/PartnersSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProductsGrid />
      <WhySection />
      <HowItWorks />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
