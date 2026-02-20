'use client'

import { useRouter } from 'next/navigation'
import Tag from '@/components/ui/Tag'
import FAQ from '@/components/ui/FAQ'

const MOTOR_PLANS = [
  {
    type: 'Mandatory',
    name: 'Third Party',
    desc: 'Legally required insurance for all Indian road vehicles.',
    price: '₹2,072',
    period: '/year',
    isPopular: false,
    features: [
      { text: 'Third-party Liability Cover', included: true },
      { text: 'Personal Accident Cover ₹15L', included: true },
      { text: 'Legal Compliance (RTO valid)', included: true },
      { text: 'Instant Digital RC Copy', included: true },
      { text: 'Own Vehicle Damage', included: false },
      { text: 'Theft & Natural Calamities', included: false },
    ],
    btnStyle: { background: 'var(--motor-bg)', color: 'var(--motor)' },
  },
  {
    type: 'Comprehensive',
    name: 'Full Cover',
    desc: 'Complete protection for your vehicle inside and out.',
    price: '₹5,499',
    period: '/year',
    isPopular: true,
    badge: '⭐ Recommended',
    features: [
      { text: 'Third-party Liability', included: true },
      { text: 'Own Damage Cover', included: true },
      { text: 'Theft, Fire, Flood, Earthquake', included: true },
      { text: '24/7 Roadside Assistance', included: true },
      { text: 'Cashless Repairs at 8,000+ Garages', included: true },
      { text: 'Personal Accident ₹15L', included: true },
    ],
    btnStyle: { background: 'var(--motor)', color: '#fff', boxShadow: '0 6px 20px rgba(245,158,11,.3)' },
  },
  {
    type: 'Comprehensive + Add-ons',
    name: 'Zero Dep Shield',
    desc: 'Full cover + zero depreciation — get full claim every time.',
    price: '₹7,999',
    period: '/year',
    isPopular: false,
    features: [
      { text: 'Everything in Full Cover', included: true },
      { text: 'Zero Depreciation Add-on', included: true },
      { text: 'Return to Invoice on Total Loss', included: true },
      { text: 'Engine Protect Add-on', included: true },
      { text: 'Tyre Protect Add-on', included: true },
      { text: 'Key Replacement Cover', included: true },
    ],
    btnStyle: { background: 'var(--motor-bg)', color: 'var(--motor)' },
  },
]

const WHY = [
  { ico: '⚡', title: '2-Minute Renewal', desc: 'Enter vehicle number, get quote, pay — policy renewed in 2 minutes flat.' },
  { ico: '🔧', title: '8,000+ Cashless Garages', desc: 'Pan-India cashless repair network. Vehicle fixed without a rupee from you.' },
  { ico: '🚨', title: '24/7 Roadside Assistance', desc: 'Flat tyre, dead battery, breakdown — we send help anywhere in India, anytime.' },
  { ico: '💰', title: 'No Claim Bonus Up to 50%', desc: 'Stay claim-free and earn up to 50% discount on next year\'s premium.' },
  { ico: '📱', title: 'Digital Claim Filing', desc: 'File a claim by uploading photos on the app. No surveyor visit for small claims.' },
  { ico: '🏆', title: 'Best Price Guarantee', desc: 'We compare 12+ motor insurers. If you find cheaper, we match it.' },
]

const FAQS = [
  { question: 'Is motor insurance mandatory in India?', answer: 'Yes. Under the Motor Vehicles Act 1988, third-party liability insurance is mandatory for all vehicles. Driving without valid insurance attracts fines up to ₹4,000 and/or imprisonment.' },
  { question: 'What is Zero Depreciation cover?', answer: 'Normally, the insurer deducts depreciation from your claim based on the vehicle\'s age. Zero Depreciation (Nil Dep) waives this deduction — you get the full cost of parts replaced. Highly recommended for vehicles under 5 years.' },
  { question: 'Can I transfer my NCB when switching insurers?', answer: 'Yes! NCB belongs to you, not the insurer. When you switch to FatakSecure, we honour your existing NCB. Just share your previous policy and NCB certificate — we apply the discount immediately.' },
]

export default function MotorPage() {
  const router = useRouter()

  return (
    <div>
      {/* Hero */}
      <section className="pt-[80px] pb-12 px-[5%] md:min-h-[90vh] flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(155deg,#2d1a00,#4a2d00,#6b3d00)' }}>
        <div className="absolute -top-36 -right-[120px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(245,158,11,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/[0.45] mb-4">
              <button onClick={() => router.push('/')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/[0.45]">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Motor Insurance</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-motor/[0.15] border border-motor/30 text-[#FCD34D] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-motor rounded-full animate-blink" />
              Car &amp; Bike Insurance
            </div>
            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Motor Insurance<br />
              <span className="text-[#FCD34D]">Renewed in 2 Minutes</span>
            </h1>
            <p className="text-[17px] text-white/[0.68] leading-[1.78] max-w-[460px] mb-8">
              Comprehensive car and bike insurance at the best price. Instant online renewal, zero depreciation add-on, 24/7 roadside assistance. IRDAI-approved.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['🚗 Car & Bike Insurance', '⚡ 2-Minute Renewal', '🔧 24/7 Roadside Assist', '0️⃣ Zero Depreciation Cover'].map((pill) => (
                <div key={pill} className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.12] text-white/80 text-[12.5px] font-medium px-3.5 py-1.5 rounded-xl">
                  {pill}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5">
              <button
                onClick={() => router.push('/motor/buy')}
                className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-3.5 px-7 text-[14.5px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)] transition-all border-none cursor-pointer"
              >
                Renew Motor Insurance →
              </button>
              <button
                onClick={() => router.push('/motor/buy')}
                className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border-[1.5px] border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer"
              >
                New Policy
              </button>
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white/[0.08] border border-white/[0.12] backdrop-blur-xl rounded-3xl p-7">
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { n: '25L+', lbl: 'Vehicles Insured' },
                { n: '2 min', lbl: 'Renewal Time' },
                { n: '97%', lbl: 'Claim Settlement' },
                { n: '₹0', lbl: 'Renewal Fees' },
              ].map((stat) => (
                <div key={stat.n} className="bg-white/[0.06] rounded-xl p-4 text-center">
                  <div className="font-heading text-[28px] font-extrabold text-[#FCD34D] leading-none mb-1">{stat.n}</div>
                  <div className="text-[11.5px] text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => router.push('/motor/buy')}
            >
              Check Vehicle Premium →
            </button>
            <p className="text-center text-[11.5px] text-white/40 mt-3">🔒 Enter vehicle number for instant quote</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-14 md:py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <Tag color="motor">Motor Plans</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy mb-3">Plans for Cars &amp; Bikes</h2>
            <p className="text-slate-500 max-w-[520px] mx-auto">Third-party mandatory cover or comprehensive — we have both.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOTOR_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] ${
                  plan.isPopular ? 'border-motor shadow-[0_8px_40px_rgba(245,158,11,0.15)]' : 'border-slate-200'
                }`}
              >
                {plan.isPopular && plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[11.5px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm" style={{ background: 'var(--motor)' }}>
                    {plan.badge}
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--motor)' }}>{plan.type}</div>
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
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${f.included ? '' : 'bg-slate-100 text-slate-400'}`} style={f.included ? { background: 'var(--motor-bg)', color: 'var(--motor)' } : undefined}>
                        {f.included ? '✓' : '✕'}
                      </span>
                      <span className={f.included ? 'text-slate-700' : 'text-slate-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl text-[14px] font-heading font-bold border-none cursor-pointer transition-all hover:opacity-90"
                  style={plan.btnStyle}
                  onClick={() => router.push('/motor/buy')}
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
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy">Why India Renews Motor Insurance with FatakSecure</h2>
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
          <Tag color="motor">FAQ</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-8">Motor Insurance FAQs</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-[80px] px-[5%] text-white text-center" style={{ background: 'linear-gradient(145deg,#2d1a00,#4a2d00)' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-4">
            Renew Your Motor Insurance<br /><span style={{ color: '#FCD34D' }}>in 2 Minutes Flat</span>
          </h2>
          <p className="text-[16px] text-white/[0.65] mb-8">Instant quote. Best price. Cashless garages across India.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => router.push('/motor/buy')}
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-3.5 px-8 text-[15px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)] transition-all border-none cursor-pointer"
            >
              🚗 Renew Motor Insurance →
            </button>
            <button
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border-[1.5px] border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer"
              onClick={() => router.push('/motor/buy')}
            >
              New Policy
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
