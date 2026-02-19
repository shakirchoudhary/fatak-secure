'use client'

import { usePage } from '@/lib/PageContext'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

// Home page sections
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import ProductsGrid from '@/components/home/ProductsGrid'
import WhySection from '@/components/home/WhySection'
import HowItWorks from '@/components/home/HowItWorks'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import PartnersSection from '@/components/home/PartnersSection'
import FAQSection from '@/components/home/FAQSection'
import CTASection from '@/components/home/CTASection'

// Category pages
import HealthPage from '@/components/health/HealthPage'
import HealthBuyPage from '@/components/health/HealthBuyPage'
import MotorPage from '@/components/motor/MotorPage'
import MotorBuyPage from '@/components/motor/MotorBuyPage'
import LifePage from '@/components/life/LifePage'
import LifeBuyPage from '@/components/life/LifeBuyPage'
import CalculatorsPage from '@/components/calculators/CalculatorsPage'
import GlossaryPage from '@/components/glossary/GlossaryPage'

function HomePage() {
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

export default function App() {
  const { currentPage } = usePage()

  const noFooterPages = ['health-buy', 'motor-buy', 'life-buy']
  const showFooter = !noFooterPages.includes(currentPage)

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />
      case 'health': return <HealthPage />
      case 'health-buy': return <HealthBuyPage />
      case 'motor': return <MotorPage />
      case 'motor-buy': return <MotorBuyPage />
      case 'life': return <LifePage />
      case 'life-buy': return <LifeBuyPage />
      case 'calculators': return <CalculatorsPage />
      case 'glossary': return <GlossaryPage />
      default: return <HomePage />
    }
  }

  return (
    <>
      <Navbar />
      <main>{renderPage()}</main>
      {showFooter && <Footer />}
    </>
  )
}
