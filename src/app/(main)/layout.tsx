'use client'

import type { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      {/* Sticky floating CTA — hidden on mobile (navbar CTA covers it) */}
      <div className="hidden sm:block">
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
            onClick={() => router.push('/health/buy')}
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
      </div>
    </>
  )
}
