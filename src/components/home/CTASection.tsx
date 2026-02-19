'use client'

import Button from '@/components/shared/Button'

export default function CTASection() {
  return (
    <section className="py-24 px-[5%] text-center bg-gradient-to-br from-[#2A0D52] to-[#3B1370] relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[680px] h-[680px] bg-[radial-gradient(circle,rgba(0,196,180,0.1),transparent_65%)] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto relative z-10">
        <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-3">
          Don't Wait for a Crisis<br />
          <span className="text-teal-light">to Get Covered</span>
        </h2>
        <p className="text-base text-white/60 max-w-[440px] mx-auto mb-8 leading-[1.78]">
          Start with as little as ₹99. Protect what matters most — right now.
        </p>

        <div className="flex justify-center gap-3.5 flex-wrap">
          <Button
            size="lg"
            onClick={() => document.getElementById('home-prods')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🛡️ Get Insured Now
          </Button>
          <Button variant="ghost" size="lg">
            📞 Talk to an Expert
          </Button>
        </div>
      </div>
    </section>
  )
}
