'use client'

import { useRouter } from 'next/navigation'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'

const USPS = [
  { ico: '💰', title: 'Save Up to 40% on Premiums', desc: 'We compare 20+ insurers in real-time for the best price.' },
  { ico: '📱', title: 'Manage Everything on App', desc: 'View policy, renew, raise claims from the FatakPay app.' },
  { ico: '🗣️', title: 'Explained in Hindi & English', desc: 'No jargon, no surprises — plain simple language.' },
]

const CARDS = [
  { ico: '⚡', title: '2-Minute Policy', desc: 'Quote to policy document in under 2 minutes. 100% digital.' },
  { ico: '🤝', title: '98% Claim Success', desc: 'Our dedicated team guides every claim to settlement.' },
  { ico: '🔒', title: 'IRDAI Regulated', desc: 'All partners are IRDAI-approved. Money fully protected.' },
  { ico: '📲', title: 'WhatsApp Policy', desc: 'Policy delivered instantly on WhatsApp & email.' },
  { ico: '🏥', title: '10,000+ Hospitals', desc: 'Cashless hospitalisation across all major cities.' },
  { ico: '♻️', title: 'Easy Renewal', desc: 'Auto-reminders before expiry. One-tap renewal.' },
]

export default function WhySection() {
  const router = useRouter()

  return (
    <section className="py-14 md:py-[88px] px-[5%] text-white overflow-hidden relative" style={{ background: 'linear-gradient(145deg,#2d1057,#44226e)' }} id="why-home">
      <div className="absolute -top-[120px] -right-[100px] w-[480px] h-[480px] bg-[radial-gradient(circle,rgba(0,196,180,0.1),transparent_65%)] pointer-events-none" />
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-10 lg:gap-[68px] items-center relative z-10">
        {/* Left */}
        <div>
          <Tag color="teal">Why FatakSecure</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-3">
            Built for <span className="text-orange">Bharat's</span><br />Hardest Workers
          </h2>
          <p className="text-base text-white/[0.55] leading-[1.78] max-w-[520px]">
            Insurance in India is broken — complex, expensive, full of fine print. We're fixing that.
          </p>

          <div className="flex flex-col gap-3.5 mt-6">
            {USPS.map((usp) => (
              <div key={usp.title} className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.08] flex items-center justify-center text-[17px] flex-shrink-0 transition-colors duration-300 group-hover:bg-teal/[0.18]">
                  {usp.ico}
                </div>
                <div>
                  <strong className="block font-heading text-sm font-bold text-white mb-0.5">{usp.title}</strong>
                  <span className="text-[12.5px] text-white/50 leading-[1.55]">{usp.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button onClick={() => document.getElementById('home-prods')?.scrollIntoView({ behavior: 'smooth' })}>
              See All Plans →
            </Button>
          </div>
        </div>

        {/* Right grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="bg-white/[0.05] border border-white/[0.09] rounded-2xl p-5 px-4 transition-all duration-300 hover:bg-white/[0.09] hover:border-teal/25"
            >
              <div className="text-2xl mb-2.5">{card.ico}</div>
              <h4 className="font-heading text-sm font-bold text-white mb-1">{card.title}</h4>
              <p className="text-xs text-white/[0.48] leading-[1.6]">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
