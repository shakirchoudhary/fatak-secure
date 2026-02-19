'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

const HERO_CARDS = [
  { emoji: '❤️‍🩹', title: 'Health Insurance', desc: 'Family floater from ₹299/mo', badge: 'Most Popular', badgeCls: 'bg-teal-DEFAULT/20 text-teal-light', page: 'health' as const, anim: 'animate-float1' },
  { emoji: '🛡️', title: 'Term Life', desc: '₹1 Crore from ₹499/year', badge: 'Best Value', badgeCls: 'bg-orange-DEFAULT/20 text-[#FFAA80]', page: 'life' as const, anim: 'animate-float2' },
  { emoji: '🚗', title: 'Motor Insurance', desc: 'Instant renewal in 2 min', badge: 'Quick Renew', badgeCls: 'bg-gold/20 text-gold', page: 'motor' as const, anim: 'animate-float3' },
  { emoji: '✈️', title: 'Travel Insurance', desc: 'International from ₹199/trip', badge: 'New', badgeCls: 'bg-[#8B5CF6]/20 text-[#C4B5FD]', page: 'travel' as const, anim: 'animate-float1' },
]

const TRUST_PILLS = [
  { ico: '🏛️', label: 'IRDAI Approved' },
  { ico: '⚡', label: '2-Min Policy' },
  { ico: '🤝', label: '20+ Insurers' },
  { ico: '📞', label: '24/7 Claims' },
]

export default function HeroSection() {
  const { showPage } = usePage()

  return (
    <section className="min-h-screen pt-[90px] pb-[72px] px-[5%] flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(155deg,#2A0D52 0%,#3B1370 48%,#5C1E9E 100%)' }}>
      {/* Blobs */}
      <div className="absolute -top-44 -right-36 w-[680px] h-[680px] bg-[radial-gradient(circle,rgba(0,196,180,0.13),transparent_68%)] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-30 w-[520px] h-[520px] bg-[radial-gradient(circle,rgba(255,107,53,0.1),transparent_68%)] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:54px_54px] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto w-full grid grid-cols-2 gap-14 items-center relative z-10">
        {/* Cards side */}
        <div className="grid grid-cols-2 gap-3.5">
          {HERO_CARDS.map((card) => (
            <div
              key={card.title}
              className={`bg-white/[0.07] border border-white/[0.13] backdrop-blur-xl rounded-[18px] p-5 px-4 text-white cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)] hover:bg-white/[0.12] ${card.anim}`}
              onClick={() => showPage(card.page)}
            >
              <span className="text-[28px] mb-2.5 block">{card.emoji}</span>
              <div className="font-heading text-[13.5px] font-bold mb-1">{card.title}</div>
              <div className="text-[11.5px] text-white/50 leading-snug mb-2.5">{card.desc}</div>
              <span className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-xl ${card.badgeCls}`}>
                {card.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Text side */}
        <div>
          <div className="inline-flex items-center gap-2 bg-teal-DEFAULT/[0.12] border border-teal-DEFAULT/[0.28] text-teal-light text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
            <span className="w-[7px] h-[7px] bg-teal-DEFAULT rounded-full animate-blink" />
            Now Live — India's Fastest Insurance Platform
          </div>

          <h1 className="font-heading text-[clamp(36px,4.8vw,58px)] font-extrabold leading-[1.07] tracking-[-1.8px] text-white mb-4">
            Protection That's<br />
            <span className="text-orange-DEFAULT">Simple,</span>{' '}
            <span className="text-teal-DEFAULT">Honest</span><br />
            &amp; Instant.
          </h1>

          <p className="text-[17px] text-white/67 leading-[1.78] max-w-[455px] mb-8">
            From health to your bike — secure everything that matters. No paperwork. No agents. Policy in 2 minutes.
          </p>

          <div className="flex items-center gap-3.5 flex-wrap">
            <Button size="lg" onClick={() => document.getElementById('home-prods')?.scrollIntoView({ behavior: 'smooth' })}>
              🛡️ Explore All Plans
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById('how-home')?.scrollIntoView({ behavior: 'smooth' })}>
              How It Works
            </Button>
          </div>

          <div className="flex items-center gap-5 mt-8 pt-6 border-t border-white/10 flex-wrap">
            {TRUST_PILLS.map((p) => (
              <div key={p.label} className="flex items-center gap-1.5 text-xs text-white/62">
                <span className="w-[25px] h-[25px] bg-white/[0.08] rounded-full flex items-center justify-center text-[11px] flex-shrink-0">
                  {p.ico}
                </span>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
