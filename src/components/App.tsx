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
import TravelPage from '@/components/travel/TravelPage'
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
  const { currentPage, showPage } = usePage()

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
      case 'travel': return <TravelPage />
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

      {/* Sticky floating CTA */}
      <div
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 299,
          animation: 'popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2.5s both',
        }}
      >
        <button
          onClick={() => showPage('health-buy')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'linear-gradient(135deg,#ffc837,#f6462d)',
            color: '#fff',
            padding: '12px 22px',
            borderRadius: 50,
            fontFamily: 'var(--fh)',
            fontSize: 13.5,
            fontWeight: 700,
            boxShadow: '0 8px 28px rgba(246,70,45,.46)',
            transition: 'all .25s',
            cursor: 'pointer',
            border: 'none',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.transform = 'translateY(-3px) scale(1.04)'
            el.style.boxShadow = '0 14px 38px rgba(246,70,45,.58)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.transform = ''
            el.style.boxShadow = '0 8px 28px rgba(246,70,45,.46)'
          }}
        >
          🛡️ Free Quote
        </button>
      </div>
    </>
  )
}
