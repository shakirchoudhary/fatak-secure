'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

const MOTOR_PLANS = [
  {
    type: 'Mandatory',
    name: 'Third Party Only',
    desc: 'Legal minimum — covers damages you cause to others.',
    price: '₹2,072',
    period: '/year',
    features: [
      { text: 'Third-party property damage', included: true },
      { text: 'Third-party injury/death cover', included: true },
      { text: 'IRDAI mandated rates', included: true },
      { text: 'Own vehicle damage', included: false },
      { text: 'Theft cover', included: false },
      { text: 'Natural calamity protection', included: false },
    ],
  },
  {
    type: 'Comprehensive',
    name: 'Full Coverage',
    desc: 'Complete protection for your car and third parties.',
    price: '₹4,599',
    period: '/year',
    isPopular: true,
    features: [
      { text: 'All Third-Party cover included', included: true },
      { text: 'Own vehicle damage (OD)', included: true },
      { text: 'Theft & total loss cover', included: true },
      { text: 'Natural calamity cover', included: true },
      { text: 'Cashless at 8,000+ garages', included: true },
      { text: 'Zero depreciation add-on available', included: true },
    ],
  },
  {
    type: 'Premium',
    name: 'Total Shield',
    desc: 'Best-in-class cover with premium add-ons included.',
    price: '₹7,299',
    period: '/year',
    features: [
      { text: 'All Comprehensive cover included', included: true },
      { text: 'Zero Depreciation (included)', included: true },
      { text: '24/7 Roadside Assistance', included: true },
      { text: 'Engine Protect Add-on', included: true },
      { text: 'Personal Accident Cover', included: true },
      { text: 'NCB Protection Add-on', included: true },
    ],
  },
]

export default function MotorPage() {
  const { showPage } = usePage()

  return (
    <div>
      {/* Hero */}
      <section className="pt-[100px] pb-16 px-[5%] min-h-[90vh] flex items-center relative overflow-hidden bg-gradient-to-br from-[#2d1a00] via-[#4a2d00] to-[#6b3d00]">
        <div className="absolute -top-36 -right-30 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,158,11,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/45 mb-4">
              <button onClick={() => showPage('home')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/45">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Motor Insurance</span>
            </div>

            <div className="inline-flex items-center gap-2 bg-motor-DEFAULT/[0.15] border border-motor-DEFAULT/30 text-[#FCD34D] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-motor-DEFAULT rounded-full animate-blink" />
              Renew in Under 2 Minutes
            </div>

            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Motor Insurance<br />
              <span className="text-[#FCD34D]">for Car & Bike</span>
            </h1>

            <p className="text-[17px] text-white/68 leading-[1.78] max-w-[460px] mb-8">
              Protect your vehicle from accidents, theft & third-party liability. Instant renewal, cashless repairs at 8,000+ garages.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {['🚗 Car Insurance', '🏍️ Bike Insurance', '⚡ Instant Renewal', '🔧 8,000+ Garages'].map((pill) => (
                <div key={pill} className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white/80 text-[12.5px] font-medium px-3.5 py-1.5 rounded-xl">
                  {pill}
                </div>
              ))}
            </div>

            <div className="flex gap-3.5">
              <Button size="lg" onClick={() => showPage('motor-buy')}>Get Motor Quote →</Button>
              <Button variant="ghost" onClick={() => showPage('motor-buy')}>Compare Plans</Button>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { n: '50L+', lbl: 'Vehicles Insured' },
                { n: '8000+', lbl: 'Cashless Garages' },
                { n: '95%', lbl: 'Claim Settlement' },
                { n: '2 min', lbl: 'Renewal Time' },
              ].map((stat) => (
                <div key={stat.n} className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-heading text-[28px] font-extrabold text-[#FCD34D] leading-none mb-1">{stat.n}</div>
                  <div className="text-[11.5px] text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange-DEFAULT to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => showPage('motor-buy')}
            >
              Check Motor Premium →
            </button>
            <p className="text-center text-[11.5px] text-white/40 mt-3">🔒 IRDAI approved · Instant policy</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy-DEFAULT mb-3">
              Motor Insurance Plans
            </h2>
            <p className="text-slate-500 max-w-[520px] mx-auto">
              From mandatory third-party to premium comprehensive cover.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {MOTOR_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 p-8 flex flex-col ${
                  plan.isPopular
                    ? 'border-motor-DEFAULT bg-white shadow-[0_8px_40px_rgba(245,158,11,0.15)]'
                    : 'border-slate-100 bg-white'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-motor-DEFAULT to-[#FCD34D] text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ⭐ Most Popular
                  </div>
                )}
                <div className="text-motor-DEFAULT text-sm font-bold mb-1">{plan.type}</div>
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
                        <span className="w-4 h-4 rounded-full bg-motor-bg text-motor-DEFAULT text-[9px] font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
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
                      ? 'bg-motor-DEFAULT text-white hover:brightness-110'
                      : 'bg-motor-bg text-motor-DEFAULT hover:brightness-95'
                  }`}
                  onClick={() => showPage('motor-buy')}
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
            Ready to Insure Your Vehicle?
          </h2>
          <p className="text-white/70 mb-8">Get your motor insurance in 2 minutes. Cashless. Digital. Instant.</p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <Button size="lg" onClick={() => showPage('motor-buy')}>🚗 Get Motor Quote →</Button>
            <Button variant="ghost" onClick={() => showPage('home')}>← Back to Home</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
