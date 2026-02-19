'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

const HEALTH_PLANS = [
  {
    type: 'Individual Plan',
    name: 'Basic Shield',
    desc: 'Essential health cover for a single individual.',
    price: '₹299',
    period: '/month',
    features: [
      { text: 'Sum Insured: ₹3 Lakh', included: true },
      { text: 'Hospitalisation Cover', included: true },
      { text: 'Pre & Post Hospitalisation', included: true },
      { text: '540+ Daycare Procedures', included: true },
      { text: 'OPD Cover', included: false },
      { text: 'Maternity Cover', included: false },
    ],
  },
  {
    type: 'Family Floater',
    name: 'Family Protect',
    desc: 'Complete cover for your entire family under one plan.',
    price: '₹799',
    period: '/month',
    originalPrice: '₹1,100',
    isPopular: true,
    features: [
      { text: 'Sum Insured: ₹10 Lakh', included: true },
      { text: '4 Members Included', included: true },
      { text: 'Cashless at 10,000+ Hospitals', included: true },
      { text: 'OPD Cover ₹5,000/yr', included: true },
      { text: 'Ambulance Cover', included: true },
      { text: 'No Pre-Medical Checkup', included: true },
    ],
  },
  {
    type: 'Comprehensive',
    name: 'Total Care Plus',
    desc: 'Premium cover with OPD, maternity & mental health.',
    price: '₹1,499',
    period: '/month',
    features: [
      { text: 'Sum Insured: ₹25 Lakh', included: true },
      { text: 'OPD Cover ₹15,000/yr', included: true },
      { text: 'Maternity & Newborn Cover', included: true },
      { text: 'Mental Health Cover', included: true },
      { text: 'International Emergency Cover', included: true },
      { text: 'Annual Health Check-up', included: true },
    ],
  },
]

export default function HealthPage() {
  const { showPage } = usePage()

  return (
    <div>
      {/* Hero */}
      <section className="pt-[100px] pb-16 px-[5%] min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#2A0D52] via-[#3B1370] to-[#5C1E9E]">
        <div className="absolute -top-36 -right-30 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/45 mb-4">
              <button onClick={() => showPage('home')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/45">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Health Insurance</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-health-DEFAULT/[0.15] border border-health-DEFAULT/30 text-[#7DD3FC] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-health-DEFAULT rounded-full animate-blink" />
              India's Most Trusted Health Plans
            </div>

            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Health Insurance<br />
              <span className="text-[#38BDF8]">for Every Indian Family</span>
            </h1>

            <p className="text-[17px] text-white/68 leading-[1.78] max-w-[460px] mb-8">
              Affordable, comprehensive health insurance from ₹299/month. Cashless treatment at 10,000+ hospitals. No hidden surprises at claim time.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {[
                { ico: '🏥', text: 'Cashless at 10,000+ Hospitals' },
                { ico: '👨‍👩‍👧', text: 'Family Floater Plans' },
                { ico: '⚡', text: 'Instant Digital Policy' },
                { ico: '🔄', text: 'Lifetime Renewability' },
              ].map((pill) => (
                <div key={pill.text} className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white/80 text-[12.5px] font-medium px-3.5 py-1.5 rounded-xl">
                  <span>{pill.ico}</span>
                  {pill.text}
                </div>
              ))}
            </div>

            <div className="flex gap-3.5">
              <Button size="lg" onClick={() => showPage('health-buy')}>Get Health Quote →</Button>
              <Button variant="ghost" onClick={() => showPage('health-buy')}>Compare Plans</Button>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { n: '30L+', lbl: 'Health Policies Sold' },
                { n: '₹15Cr+', lbl: 'Claims Paid' },
                { n: '99%', lbl: 'Cashless Success' },
                { n: '2 hrs', lbl: 'Avg Approval' },
              ].map((stat) => (
                <div key={stat.n} className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-heading text-[28px] font-extrabold text-[#38BDF8] leading-none mb-1">{stat.n}</div>
                  <div className="text-[11.5px] text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange-DEFAULT to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => showPage('health-buy')}
            >
              Check Your Premium →
            </button>
            <p className="text-center text-[11.5px] text-white/40 mt-3">🔒 No credit card required · IRDAI approved</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[2px] uppercase mb-2.5 text-health-DEFAULT justify-center">
              Health Plans
            </div>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy-DEFAULT mb-3">
              Choose the Right Cover for You
            </h2>
            <p className="text-slate-500 max-w-[520px] mx-auto">
              Plans for individuals, couples & families. All with cashless hospitalisation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {HEALTH_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                  plan.isPopular
                    ? 'border-health-DEFAULT bg-white shadow-[0_8px_40px_rgba(14,165,233,0.15)]'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-health-DEFAULT to-[#38BDF8] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-health-DEFAULT text-sm font-bold mb-1">{plan.type}</div>
                <div className="font-heading text-2xl font-extrabold text-navy-DEFAULT mb-1">{plan.name}</div>
                <div className="text-sm text-slate-500 mb-4">{plan.desc}</div>
                <div className="mb-5">
                  <span className="font-heading text-4xl font-extrabold text-navy-DEFAULT">{plan.price}</span>
                  <span className="text-slate-400 text-sm">{plan.period}</span>
                  {plan.originalPrice && (
                    <span className="ml-2 text-slate-300 line-through text-sm">{plan.originalPrice}</span>
                  )}
                </div>
                <div className="h-px bg-slate-100 mb-5" />
                <ul className="flex flex-col gap-2.5 mb-6 list-none flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-[12.5px] text-slate-700">
                      {f.included ? (
                        <span className="w-4 h-4 rounded-full bg-health-bg text-health-DEFAULT text-[9px] font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
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
                      ? 'bg-health-DEFAULT text-white shadow-health hover:brightness-110'
                      : 'bg-health-bg text-health-DEFAULT hover:brightness-95'
                  }`}
                  onClick={() => showPage('health-buy')}
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
            Ready to Get Covered?<br />
            <span className="text-teal-light">Start in 2 Minutes</span>
          </h2>
          <p className="text-white/70 mb-8">Simple. Fast. Trusted.</p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Button size="lg" onClick={() => showPage('health-buy')}>❤️‍🩹 Buy Health Insurance →</Button>
            <Button variant="ghost" onClick={() => showPage('home')}>← Back to Home</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
