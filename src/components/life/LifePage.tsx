'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

export default function LifePage() {
  const { showPage } = usePage()

  const plans = [
    {
      type: 'Basic Term Plan',
      name: 'Protect 1 Cr',
      desc: 'Pure protection plan with ₹1 Crore sum assured.',
      price: '₹499',
      period: '/year',
      features: [
        { text: 'Sum Assured: ₹1 Crore', included: true },
        { text: 'Cover till age 65', included: true },
        { text: 'Death benefit lump-sum', included: true },
        { text: 'Tax benefit under 80C', included: true },
        { text: 'Critical illness rider', included: false },
        { text: 'Return of premium', included: false },
      ],
    },
    {
      type: 'Popular Choice',
      name: 'Comprehensive Guard',
      desc: 'Complete protection with critical illness & disability cover.',
      price: '₹899',
      period: '/year',
      isPopular: true,
      features: [
        { text: 'Sum Assured: ₹1 Crore', included: true },
        { text: 'Critical Illness Rider (37 illnesses)', included: true },
        { text: 'Accidental Death Benefit', included: true },
        { text: 'Waiver of Premium on disability', included: true },
        { text: 'Tax benefit under 80C & 80D', included: true },
        { text: 'Monthly income option available', included: true },
      ],
    },
    {
      type: 'Premium',
      name: 'Return of Premium',
      desc: 'All premium returned if you survive the policy term.',
      price: '₹1,899',
      period: '/year',
      features: [
        { text: '100% premium returned at maturity', included: true },
        { text: 'All benefits of Comprehensive Guard', included: true },
        { text: 'Survival benefit at maturity', included: true },
        { text: 'Enhanced sum assured option', included: true },
        { text: 'Guaranteed additions', included: true },
        { text: 'Tax-free maturity benefit', included: true },
      ],
    },
  ]

  return (
    <div>
      {/* Hero */}
      <section className="pt-[100px] pb-16 px-[5%] min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#2A0D52] via-[#3B1370] to-[#5C1E9E]">
        <div className="absolute -top-36 -right-30 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/45 mb-4">
              <button onClick={() => showPage('home')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/45">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Life Insurance</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-life-DEFAULT/[0.15] border border-life-DEFAULT/30 text-[#F9A8D4] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-life-DEFAULT rounded-full animate-blink" />
              ₹1 Crore Cover from ₹499/Year
            </div>

            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Term Life Insurance<br />
              <span className="text-[#F9A8D4]">for Your Family's Future</span>
            </h1>

            <p className="text-[17px] text-white/68 leading-[1.78] max-w-[460px] mb-8">
              India's most affordable term life insurance. High cover, low premium. Protect your family's financial future today.
            </p>

            <div className="flex gap-3.5">
              <Button size="lg" onClick={() => showPage('life-buy')}>Get Life Quote →</Button>
              <Button variant="ghost" onClick={() => showPage('life-buy')}>Compare Plans</Button>
            </div>
          </div>

          <div className="bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { n: '₹1Cr', lbl: 'Cover from ₹499/yr' },
                { n: '99%', lbl: 'Claim Settlement' },
                { n: '40yr', lbl: 'Max Policy Term' },
                { n: '80C', lbl: 'Tax Benefit' },
              ].map((stat) => (
                <div key={stat.n} className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-heading text-[28px] font-extrabold text-[#F9A8D4] leading-none mb-1">{stat.n}</div>
                  <div className="text-[11.5px] text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange-DEFAULT to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => showPage('life-buy')}
            >
              Calculate Your Premium →
            </button>
            <p className="text-center text-[11.5px] text-white/40 mt-3">🔒 No medical required for healthy individuals</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy-DEFAULT mb-3">
              Term Life Plans
            </h2>
            <p className="text-slate-500 max-w-[520px] mx-auto">
              Simple, transparent pricing. No hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                  plan.isPopular
                    ? 'border-life-DEFAULT bg-white shadow-[0_8px_40px_rgba(236,72,153,0.15)]'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-life-DEFAULT to-[#F472B6] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-life-DEFAULT text-sm font-bold mb-1">{plan.type}</div>
                <div className="font-heading text-2xl font-extrabold text-navy-DEFAULT mb-1">{plan.name}</div>
                <div className="text-sm text-slate-500 mb-4">{plan.desc}</div>
                <div className="mb-5">
                  <span className="font-heading text-4xl font-extrabold text-navy-DEFAULT">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                </div>
                <div className="h-px bg-slate-100 mb-5" />
                <ul className="flex flex-col gap-2.5 mb-6 list-none flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      {f.included ? (
                        <span className="w-4 h-4 rounded-full bg-life-bg text-life-DEFAULT text-[9px] font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
                      ) : (
                        <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-400 text-[9px] flex items-center justify-center flex-shrink-0">✕</span>
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer transition-all duration-200 ${
                    plan.isPopular
                      ? 'bg-life-DEFAULT text-white hover:brightness-110'
                      : 'bg-life-bg text-life-DEFAULT hover:brightness-95'
                  }`}
                  onClick={() => showPage('life-buy')}
                >
                  Buy {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-[5%] text-center bg-gradient-to-br from-[#060e2a] to-[#12255e]">
        <div className="max-w-[1180px] mx-auto">
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-white mb-3">
            Secure Your Family's Future Today
          </h2>
          <p className="text-white/70 mb-8">₹1 Crore cover from just ₹499/year. Buy in minutes.</p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Button size="lg" onClick={() => showPage('life-buy')}>🛡️ Get Life Quote →</Button>
            <Button variant="ghost" onClick={() => showPage('home')}>← Back to Home</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
