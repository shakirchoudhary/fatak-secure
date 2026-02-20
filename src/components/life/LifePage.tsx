'use client'

import { useRouter } from 'next/navigation'
import Tag from '@/components/ui/Tag'
import FAQ from '@/components/ui/FAQ'

const LIFE_PLANS = [
  {
    type: 'Pure Term',
    name: 'Life Guard',
    desc: 'Simple, affordable term cover for young earners.',
    price: '₹499',
    period: '/year',
    isPopular: false,
    features: [
      { text: 'Sum Assured: ₹50 Lakh', included: true },
      { text: 'Policy Term: 10–40 years', included: true },
      { text: 'Death Benefit (lump sum)', included: true },
      { text: 'Tax Benefit u/s 80C', included: true },
      { text: 'Critical Illness Rider', included: false },
      { text: 'Return of Premium', included: false },
    ],
    btnStyle: { background: 'var(--life-bg)', color: 'var(--life)' },
  },
  {
    type: 'Term + Riders',
    name: 'Family Shield',
    desc: 'Comprehensive term cover with critical illness protection.',
    price: '₹1,299',
    period: '/year',
    isPopular: true,
    badge: '⭐ Best Seller',
    features: [
      { text: 'Sum Assured: ₹1 Crore', included: true },
      { text: 'Critical Illness Rider (40 CI)', included: true },
      { text: 'Accidental Death Benefit', included: true },
      { text: 'Premium Waiver on CI', included: true },
      { text: 'Monthly Income Option', included: true },
      { text: 'Tax Benefits 80C & 10(10D)', included: true },
    ],
    btnStyle: { background: 'var(--life)', color: '#fff', boxShadow: '0 6px 20px rgba(236,72,153,.3)' },
  },
  {
    type: 'Return of Premium',
    name: 'Smart Life Plus',
    desc: 'Get all premiums back if you survive the policy term.',
    price: '₹3,999',
    period: '/year',
    isPopular: false,
    features: [
      { text: 'Sum Assured: ₹1 Crore', included: true },
      { text: '100% Premium at Maturity', included: true },
      { text: 'CI & Disability Riders', included: true },
      { text: 'Whole Life Cover Option', included: true },
      { text: 'Multiple Payout Options', included: true },
      { text: 'Joint Life Cover Available', included: true },
    ],
    btnStyle: { background: 'var(--life-bg)', color: 'var(--life)' },
  },
]

const WHY = [
  { ico: '💸', title: 'Lowest Premiums', desc: '₹1 Crore cover under ₹500/year. We compare 15+ life insurers to find the best rate.' },
  { ico: '🏆', title: '99% Claim Paid Rate', desc: 'We partner only with insurers having the highest claim settlement ratios in India.' },
  { ico: '⚡', title: 'Paperless in 5 Minutes', desc: 'Buy entirely online. Policy issued in minutes. No agent visits, no paper forms.' },
  { ico: '📞', title: 'Claims Assistance', desc: 'Dedicated team helps your nominee file and track claims — swift settlement guaranteed.' },
  { ico: '🔄', title: 'Flexible Payout Options', desc: 'Choose lump sum, monthly income, or combination payout for your nominee.' },
  { ico: '📋', title: 'Tax Savings', desc: 'Save tax under Section 80C (premium) and Section 10(10D) (claim proceeds).' },
]

const FAQS = [
  { question: 'What is term life insurance?', answer: 'Term insurance is the purest form of life insurance. You pay a small annual premium, and in case of death during the policy term, your nominee receives a large sum. No maturity benefit in a pure term plan — making it the most affordable way to protect your family.' },
  { question: 'How much life cover do I need?', answer: 'A general rule: 10–15x your annual income. If you earn ₹8 Lakh/year, a ₹1 Crore term plan is ideal. Consider outstanding loans, dependents\' needs, children\'s education and your retirement corpus.' },
  { question: 'Can I buy without a medical test?', answer: 'Yes. For sum assured up to ₹1 Crore, most insurers offer non-medical plans for healthy individuals below 45 years. For higher covers, we arrange medical tests at your home.' },
]

export default function LifePage() {
  const router = useRouter()

  return (
    <div>
      {/* Hero */}
      <section className="pt-[80px] pb-12 px-[5%] md:min-h-[90vh] flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(155deg,#2d1057 0%,#44226e 48%,#6b3fa0 100%)' }}>
        <div className="absolute -top-36 -right-[120px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(236,72,153,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/[0.45] mb-4">
              <button onClick={() => router.push('/')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/[0.45]">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Life Insurance</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-life/[0.15] border border-life/30 text-[#F9A8D4] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-life rounded-full animate-blink" />
              Protect Your Family's Future
            </div>
            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Term Life Insurance<br />
              <span className="text-[#F472B6]">That Keeps Promises</span>
            </h1>
            <p className="text-[17px] text-white/[0.68] leading-[1.78] max-w-[460px] mb-8">
              Give your family a financial safety net. ₹1 Crore life cover from just ₹499/year. Tax benefits included. Claims paid in 7 days.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['🛡️ Cover up to ₹5 Crore', '📋 Tax Benefit u/s 80C', '⚡ Online in 5 Minutes', '🏆 99% Claim Paid Rate'].map((pill) => (
                <div key={pill} className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white/80 text-[12.5px] font-medium px-3.5 py-1.5 rounded-xl">
                  {pill}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={() => router.push('/life/buy')}
                className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-3.5 px-7 text-[14.5px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)] transition-all border-none cursor-pointer"
              >
                Calculate My Premium →
              </button>
              <button
                onClick={() => router.push('/life/buy')}
                className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border-[1.5px] border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer"
              >
                Compare Plans
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { n: '10L+', lbl: 'Families Protected' },
                { n: '₹1Cr', lbl: 'Min Cover' },
                { n: '99%', lbl: 'Claim Settlement' },
                { n: '7 days', lbl: 'Claim Paid In' },
              ].map((stat) => (
                <div key={stat.n} className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-heading text-[28px] font-extrabold text-[#F472B6] leading-none mb-1">{stat.n}</div>
                  <div className="text-[11.5px] text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => router.push('/life/buy')}
            >
              Get Life Cover →
            </button>
            <p className="text-center text-[11.5px] text-white/40 mt-3">🔒 100% secure · IRDAI approved</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 md:py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <Tag color="life">Term Life Plans</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy mb-3">Choose Your Life Cover</h2>
            <p className="text-slate-500 max-w-[520px] mx-auto">Pure term plans — affordable, high cover, no investment component.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIFE_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] ${
                  plan.isPopular ? 'border-life shadow-[0_8px_40px_rgba(236,72,153,0.15)]' : 'border-slate-200'
                }`}
              >
                {plan.isPopular && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[11.5px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm" style={{ background: 'var(--life)' }}>
                    {plan.badge}
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--life)' }}>{plan.type}</div>
                <div className="font-heading text-[20px] font-extrabold text-navy mb-1">{plan.name}</div>
                <div className="text-[13px] text-slate-500 mb-4">{plan.desc}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-[32px] font-extrabold text-navy">{plan.price}</span>
                  <span className="text-[14px] text-slate-400">{plan.period}</span>
                </div>
                <div className="h-px bg-slate-100 my-4" />
                <ul className="space-y-2.5 mb-5 flex-1 list-none">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-[13px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${f.included ? '' : 'bg-slate-100 text-slate-400'}`} style={f.included ? { background: 'var(--life-bg)', color: 'var(--life)' } : undefined}>
                        {f.included ? '✓' : '✕'}
                      </span>
                      <span className={f.included ? 'text-slate-700' : 'text-slate-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl text-[14px] font-heading font-bold border-none cursor-pointer transition-all hover:opacity-90"
                  style={plan.btnStyle}
                  onClick={() => router.push('/life/buy')}
                >
                  Buy {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-14 md:py-[88px] px-[5%]" style={{ background: 'var(--g50)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <Tag color="teal">Why Choose Us</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy">Why Millions Choose FatakSecure for Life Cover</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all">
                <div className="text-3xl mb-3">{w.ico}</div>
                <h4 className="font-heading font-bold text-[15px] text-navy mb-1.5">{w.title}</h4>
                <p className="text-[13px] text-slate-500 leading-[1.6]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 md:py-[88px] px-[5%] bg-white">
        <div className="max-w-[700px] mx-auto">
          <Tag color="life">FAQ</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-8">Life Insurance FAQs</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-[80px] px-[5%] text-white text-center" style={{ background: 'linear-gradient(145deg,#2d0a2e,#4a0d3d)' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-4">
            Secure Your Family's Future<br /><span style={{ color: '#F472B6' }}>From ₹499/Year</span>
          </h2>
          <p className="text-[16px] text-white/[0.65] mb-8">₹1 Crore life cover. Instant policy. 99% claim settlement.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.push('/life/buy')}
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-3.5 px-8 text-[15px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)] transition-all border-none cursor-pointer"
            >
              🛡️ Get Life Cover →
            </button>
            <button
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border-[1.5px] border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer"
              onClick={() => router.push('/life/buy')}
            >
              Calculate Premium
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
