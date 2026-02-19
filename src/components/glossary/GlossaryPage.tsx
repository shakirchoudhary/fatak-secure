'use client'

import { useState } from 'react'
import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'
import { GLOSSARY_SECTIONS } from '@/lib/data'

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  All: { bg: '#F1F5F9', color: '#475569' },
  Health: { bg: '#EFF9FF', color: '#0EA5E9' },
  Motor: { bg: '#FFFBEB', color: '#F59E0B' },
  Life: { bg: '#FFF0F7', color: '#EC4899' },
  Travel: { bg: '#ECFDF5', color: '#10B981' },
}

export default function GlossaryPage() {
  const { showPage } = usePage()
  const [search, setSearch] = useState('')

  const filteredSections = GLOSSARY_SECTIONS.map(section => ({
    ...section,
    terms: section.terms.filter(t =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(s => s.terms.length > 0)

  const letters = GLOSSARY_SECTIONS.map(s => s.letter)

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2A0D52] via-[#3B1370] to-[#5C1E9E] py-20 px-[5%] text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-white/45 mb-4">
          <button onClick={() => showPage('home')} className="hover:text-white/80 bg-transparent border-none cursor-pointer font-body text-white/45">Home</button>
          <span className="text-white/25">›</span>
          <span className="text-white/70">Insurance Glossary</span>
        </div>
        <h1 className="font-heading text-[clamp(28px,4vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-3">
          Insurance Glossary<br /><span className="text-teal-light">Know Every Term</span>
        </h1>
        <p className="text-white/65 text-base max-w-[480px] mx-auto mb-8">
          Plain-language explanations of 50+ insurance terms. No jargon, no confusion.
        </p>
        {/* Search */}
        <div className="max-w-[520px] mx-auto relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg pointer-events-none">🔍</span>
          <input
            type="text"
            placeholder="Search terms... e.g. deductible, NCB, co-pay"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-none outline-none font-body text-navy-DEFAULT text-sm shadow-s2"
          />
        </div>
      </div>

      <div className="max-w-[1180px] mx-auto px-7 py-12">
        {/* Alpha Nav */}
        {!search && (
          <div className="flex flex-wrap gap-1.5 mb-10">
            {letters.map(l => (
              <a
                key={l}
                href={`#gl-${l}`}
                className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-500 hover:bg-navy-DEFAULT hover:text-white hover:border-navy-DEFAULT transition-all"
              >
                {l}
              </a>
            ))}
          </div>
        )}

        {/* Terms */}
        {filteredSections.map((section) => (
          <div key={section.letter} id={`gl-${section.letter}`} className="mb-10">
            <div className="font-heading text-5xl font-extrabold text-slate-200 mb-4">{section.letter}</div>
            <div className="grid grid-cols-2 gap-4">
              {section.terms.map((term) => (
                <div key={term.term} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-s1 hover:shadow-s2 transition-shadow">
                  <h3 className="font-heading text-[15px] font-bold text-navy-DEFAULT mb-2">{term.term}</h3>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-3">{term.definition}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {term.tags.map((tag) => {
                      const c = TAG_COLORS[tag] || TAG_COLORS['All']
                      return (
                        <span
                          key={tag}
                          className="text-[10.5px] font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: c.bg, color: c.color }}
                        >
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filteredSections.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <div className="text-5xl mb-4">🔍</div>
            <p>No terms found for "{search}"</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16 py-16 bg-gradient-to-br from-navy-deep to-navy-mid rounded-3xl px-8">
          <h2 className="font-heading text-[clamp(24px,3vw,38px)] font-extrabold text-white mb-3">
            Ready to Buy Insurance?<br />
            <span className="text-teal-light">Pick Your Cover in 2 Minutes</span>
          </h2>
          <p className="text-white/70 mb-8">Now that you know the terms, choose wisely. Simple. Fast. Trusted.</p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Button size="lg" onClick={() => showPage('health-buy')}>❤️‍🩹 Health Insurance →</Button>
            <Button variant="ghost" onClick={() => showPage('motor-buy')}>🚗 Motor Insurance</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
