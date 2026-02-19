'use client'

import { usePage } from '@/lib/PageContext'
import type { PageId } from '@/types'

const PRODUCTS = [
  { emoji: '❤️‍🩹', label: 'Health Insurance', sub: 'From ₹299/month', page: 'health' as PageId },
  { emoji: '🛡️', label: 'Life Insurance', sub: 'From ₹499/year', page: 'life' as PageId },
  { emoji: '🚗', label: 'Motor Insurance', sub: 'Car & Bike from ₹2,072/yr', page: 'motor' as PageId },
  { emoji: '✈️', label: 'Travel Insurance', sub: 'From ₹199/trip', page: 'travel' as PageId },
]

export default function Navbar() {
  const { showPage, gotoSection } = usePage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] h-16 flex items-center justify-between px-[5%] bg-[#3B1370] border-b border-white/[0.07]">
      {/* Brand */}
      <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => showPage('home')}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/fataksecure-logo.jpg"
          alt="FatakSecure"
          style={{ width: 140, height: 'auto', objectFit: 'contain' }}
          className="h-[52px] max-w-[220px] flex-shrink-0"
        />
      </div>

      {/* Nav */}
      <ul className="flex items-center gap-0.5 list-none">
        {/* Home */}
        <li>
          <button
            className="text-[13.5px] font-medium text-white px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-white/[0.09] border-none font-body"
            onClick={() => showPage('home')}
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
                onClick={() => showPage(p.page)}
              >
                <span className="text-lg w-7 text-center flex-shrink-0">{p.emoji}</span>
                <div>
                  <div className="font-semibold text-[13px] text-white/85 leading-none mb-0.5">{p.label}</div>
                  <div className="text-[11px] text-white/40">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </li>

        {/* Why Us */}
        <li>
          <button
            className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
            onClick={() => gotoSection('why-home')}
          >
            Why Us
          </button>
        </li>

        {/* How It Works */}
        <li>
          <button
            className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
            onClick={() => gotoSection('how-home')}
          >
            How It Works
          </button>
        </li>

        {/* FAQ */}
        <li>
          <button
            className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
            onClick={() => gotoSection('faq-home')}
          >
            FAQ
          </button>
        </li>

        {/* Glossary */}
        <li>
          <button
            className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
            onClick={() => showPage('glossary')}
          >
            Glossary
          </button>
        </li>
      </ul>

      {/* Right */}
      <div className="flex items-center gap-3">
        <a
          href="https://fatakpay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.09]"
        >
          ↗ fatakpay.com
        </a>
        <button
          className="inline-flex items-center gap-2 font-heading font-bold border-none cursor-pointer rounded-full transition-all whitespace-nowrap text-white bg-gradient-to-br from-[#FF6B35] to-[#e5521c] py-[9px] px-5 text-[13px] shadow-[0_6px_22px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,107,53,0.5)]"
          onClick={() => showPage('health-buy')}
        >
          Get Insured
        </button>
      </div>
    </nav>
  )
}
