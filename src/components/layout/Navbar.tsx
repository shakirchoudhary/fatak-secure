'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { PageId } from '@/types'

const PRODUCTS = [
  { emoji: '❤️‍🩹', label: 'Health Insurance', sub: 'From ₹299/month', page: 'health' as PageId },
  { emoji: '🛡️', label: 'Life Insurance', sub: 'From ₹499/year', page: 'life' as PageId },
  { emoji: '🚗', label: 'Motor Insurance', sub: 'Car & Bike from ₹2,072/yr', page: 'motor' as PageId },
  { emoji: '✈️', label: 'Travel Insurance', sub: 'From ₹199/trip', page: 'travel' as PageId },
]

export default function Navbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  const navigate = (path: string) => {
    router.push(path)
    setMenuOpen(false)
    setProductsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[300] h-16 flex items-center justify-between px-[5%] bg-[#44226e] border-b border-white/[0.07]">
        {/* Brand */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => navigate('/')}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fatak-secure-logo.svg"
            alt="FatakSecure"
            style={{ width: 140, height: 'auto', objectFit: 'contain' }}
            className="h-[52px] max-w-[220px] flex-shrink-0"
          />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          <li>
            <button
              className="text-[13.5px] font-medium text-white px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-white/[0.09] border-none font-body"
              onClick={() => navigate('/')}
            >
              Home
            </button>
          </li>

          {/* Products dropdown */}
          <li className="relative group">
            <button className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body flex items-center gap-1 hover:text-white hover:bg-white/[0.09]">
              Products
              <svg className="w-2.5 h-2.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 10 10" fill="none">
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="absolute top-[calc(100%+8px)] left-[-8px] bg-[rgba(8,18,50,0.98)] backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[220px] opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200] shadow-[0_20px_50px_rgba(0,0,0,0.45)] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              {PRODUCTS.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 text-white/70 hover:bg-white/[0.08] hover:text-white"
                  onClick={() => navigate('/' + p.page)}
                >
                  <span className="text-lg w-7 text-center flex-shrink-0">{p.emoji}</span>
                  <div>
                    <div className="font-semibold text-[13px] text-white/[0.85] leading-none mb-0.5">{p.label}</div>
                    <div className="text-[11px] text-white/40">{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </li>

          <li>
            <button
              className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
              onClick={() => navigate('/#why-home')}
            >
              Why Us
            </button>
          </li>

          <li>
            <button
              className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
              onClick={() => navigate('/#how-home')}
            >
              How It Works
            </button>
          </li>

          <li>
            <button
              className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
              onClick={() => navigate('/#faq-home')}
            >
              FAQ
            </button>
          </li>

          <li>
            <button
              className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
              onClick={() => navigate('/glossary')}
            >
              Glossary
            </button>
          </li>
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://fatakpay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.09]"
          >
            ↗ fatakpay.com
          </a>
          <button
            className="inline-flex items-center gap-2 font-heading font-bold border-none cursor-pointer rounded-full transition-all whitespace-nowrap text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-[9px] px-5 text-[13px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)]"
            onClick={() => navigate('/health/buy')}
          >
            Get Insured
          </button>
        </div>

        {/* Mobile: Get Insured + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            className="inline-flex items-center font-heading font-bold border-none cursor-pointer rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-2 px-4 text-[12px] shadow-[0_4px_14px_rgba(246,70,45,0.35)]"
            onClick={() => navigate('/health/buy')}
          >
            Get Insured
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-[5px] bg-white/[0.08] rounded-lg border-none cursor-pointer flex-shrink-0"
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-5 h-[2px] bg-white rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[2px] bg-white rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[290] bg-black/50 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className="fixed top-16 left-0 right-0 z-[295] bg-[#44226e] border-b border-white/[0.1] md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? 'calc(100vh - 64px)' : 0, opacity: menuOpen ? 1 : 0 }}
      >
        <div className="px-5 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
          <button
            className="w-full text-left text-[14px] font-medium text-white px-4 py-3 rounded-xl bg-white/[0.09] border-none cursor-pointer"
            onClick={() => navigate('/')}
          >
            Home
          </button>

          {/* Products accordion */}
          <div>
            <button
              className="w-full text-left text-[14px] font-medium text-white/[0.8] px-4 py-3 rounded-xl bg-transparent border-none cursor-pointer flex items-center justify-between hover:bg-white/[0.06] transition-colors"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products
              <svg
                className="w-4 h-4 transition-transform duration-200"
                style={{ transform: productsOpen ? 'rotate(180deg)' : 'none' }}
                viewBox="0 0 10 10"
                fill="none"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {productsOpen && (
              <div className="ml-3 mt-1 mb-1 space-y-1 border-l-2 border-white/[0.12] pl-3">
                {PRODUCTS.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer text-white/70 hover:bg-white/[0.06] hover:text-white transition-colors"
                    onClick={() => navigate('/' + p.page)}
                  >
                    <span className="text-base w-6 text-center flex-shrink-0">{p.emoji}</span>
                    <div>
                      <div className="font-semibold text-[13px] text-white/[0.85] leading-none mb-0.5">{p.label}</div>
                      <div className="text-[11px] text-white/40">{p.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            className="w-full text-left text-[14px] font-medium text-white/[0.8] px-4 py-3 rounded-xl bg-transparent border-none cursor-pointer hover:bg-white/[0.06] transition-colors"
            onClick={() => navigate('/#why-home')}
          >
            Why Us
          </button>

          <button
            className="w-full text-left text-[14px] font-medium text-white/[0.8] px-4 py-3 rounded-xl bg-transparent border-none cursor-pointer hover:bg-white/[0.06] transition-colors"
            onClick={() => navigate('/#how-home')}
          >
            How It Works
          </button>

          <button
            className="w-full text-left text-[14px] font-medium text-white/[0.8] px-4 py-3 rounded-xl bg-transparent border-none cursor-pointer hover:bg-white/[0.06] transition-colors"
            onClick={() => navigate('/#faq-home')}
          >
            FAQ
          </button>

          <button
            className="w-full text-left text-[14px] font-medium text-white/[0.8] px-4 py-3 rounded-xl bg-transparent border-none cursor-pointer hover:bg-white/[0.06] transition-colors"
            onClick={() => navigate('/glossary')}
          >
            Glossary
          </button>

          <a
            href="https://fatakpay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[13px] font-medium text-white/[0.55] px-4 py-3 rounded-xl hover:bg-white/[0.06] hover:text-white/80 transition-colors"
          >
            ↗ fatakpay.com
          </a>
        </div>
      </div>
    </>
  )
}
