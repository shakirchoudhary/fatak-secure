'use client'

import { usePage } from '@/lib/PageContext'
import type { PageId } from '@/types'

interface NavItem {
  label: string
  page?: PageId
  children?: { emoji: string; label: string; sub: string; page: PageId }[]
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Insurance',
    children: [
      { emoji: '❤️‍🩹', label: 'Health Insurance', sub: 'For individuals & families', page: 'health' },
      { emoji: '🛡️', label: 'Term Life', sub: '₹1 Crore from ₹499/yr', page: 'life' },
      { emoji: '🚗', label: 'Motor Insurance', sub: 'Car & bike coverage', page: 'motor' },
      { emoji: '✈️', label: 'Travel Insurance', sub: 'India & international', page: 'travel' },
    ],
  },
  { label: 'Calculators', page: 'calculators' },
  { label: 'Claims', page: 'home' },
  { label: 'Glossary', page: 'glossary' },
]

export default function Navbar() {
  const { showPage } = usePage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-[300] h-16 flex items-center justify-between px-[5%] bg-[#3B1370] border-b border-white/[0.07]">
      {/* Brand */}
      <div
        className="flex items-center gap-2.5 cursor-pointer"
        onClick={() => showPage('home')}
      >
        <div className="h-8 px-3 bg-white/10 rounded-lg flex items-center gap-1.5">
          <span className="text-white font-heading font-bold text-sm tracking-tight">Fatak</span>
          <span className="text-teal-DEFAULT font-heading font-bold text-sm tracking-tight">Secure</span>
        </div>
        <div>
          <div className="font-heading text-[15.5px] font-extrabold text-white tracking-tight leading-none">FatakSecure</div>
          <div className="text-[9.5px] font-semibold text-teal-light tracking-[1.6px] uppercase mt-0.5">By FatakPay</div>
        </div>
      </div>

      {/* Nav */}
      <ul className="flex items-center gap-0.5 list-none">
        {NAV_ITEMS.map((item) =>
          item.children ? (
            <li key={item.label} className="dd relative group">
              <button className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body flex items-center gap-1 hover:text-white hover:bg-white/[0.09]">
                {item.label}
                <svg className="chev w-2.5 h-2.5 transition-transform duration-200" viewBox="0 0 10 10" fill="currentColor">
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </button>
              <div className="dd-menu absolute top-[calc(100%+8px)] left-[-8px] bg-[rgba(8,18,50,0.98)] backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[220px] opacity-0 invisible -translate-y-2 transition-all duration-200 z-[200] shadow-[0_20px_50px_rgba(0,0,0,0.45)] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                {item.children.map((child) => (
                  <div
                    key={child.label}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl cursor-pointer transition-colors duration-200 text-white/70 hover:bg-white/[0.08] hover:text-white"
                    onClick={() => showPage(child.page)}
                  >
                    <span className="text-lg w-7 text-center flex-shrink-0">{child.emoji}</span>
                    <div>
                      <div className="font-semibold text-[13px] text-white/85 leading-none mb-0.5">{child.label}</div>
                      <div className="text-[11px] text-white/40">{child.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          ) : (
            <li key={item.label}>
              <button
                className="text-[13.5px] font-medium text-white/[0.68] px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200 bg-transparent border-none font-body hover:text-white hover:bg-white/[0.09]"
                onClick={() => item.page && showPage(item.page)}
              >
                {item.label}
              </button>
            </li>
          )
        )}
      </ul>

      {/* Right */}
      <div className="flex items-center gap-2.5">
        <a
          href="https://fatakpay.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-white/40 border border-white/[0.13] px-3 py-1 rounded-2xl inline-flex items-center gap-1.5 transition-all duration-200 hover:text-white/75 hover:border-white/[0.28]"
        >
          <span>🏠</span> FatakPay
        </a>
        <button
          className="text-[13.5px] font-bold text-white bg-gradient-to-br from-orange-DEFAULT to-orange-dark px-5 py-2 rounded-full border-none cursor-pointer transition-all duration-200 font-heading shadow-orange hover:shadow-orange-hover hover:-translate-y-0.5"
          onClick={() => showPage('health-buy')}
        >
          Get Quote
        </button>
      </div>
    </nav>
  )
}
