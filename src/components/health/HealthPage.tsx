'use client'

import { useRouter } from 'next/navigation'
import Tag from '@/components/ui/Tag'
import FAQ from '@/components/ui/FAQ'
import Button from '@/components/ui/Button'

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
    badge: '⭐ Most Popular',
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
      { text: 'International Emergency', included: true },
      { text: 'Annual Health Checkup', included: true },
    ],
  },
]

const COVERAGE = [
  { ico: '🏥', title: 'In-Patient Hospitalisation', desc: 'All expenses for hospitalisation over 24 hours — room rent, nursing, surgeon fees, diagnostics, medicines and more.', tag: 'All plans' },
  { ico: '💊', title: 'Pre & Post Hospitalisation', desc: 'Medical expenses 30 days before and 60 days after hospitalisation — consultations, medicines and follow-up tests.', tag: 'All plans' },
  { ico: '🌡️', title: 'Daycare Procedures', desc: 'Over 540 daycare treatments that don\'t require 24-hour stay — cataract surgery, chemotherapy, dialysis and more.', tag: 'All plans' },
  { ico: '🚑', title: 'Ambulance & Emergency', desc: 'Road ambulance charges for emergency transport to nearest hospital. Tele-consultation included.', tag: 'Family & Total Care' },
  { ico: '👶', title: 'Maternity & Newborn', desc: 'Delivery expenses (normal & C-section), pre & post-natal care, and newborn cover for the first 90 days.', tag: 'Total Care Plus only' },
  { ico: '🧠', title: 'Mental Health Cover', desc: 'Psychiatric consultation, in-patient psychiatric treatment and rehabilitation — because mental health matters.', tag: 'Total Care Plus only' },
]

const COVERED = [
  'All hospitalisation above 24 hours',
  'COVID-19 treatment',
  '540+ daycare procedures',
  'ICU charges and specialist fees',
  'Organ donor expenses',
  'Cashless at network hospitals',
  'AYUSH treatment',
  'Domiciliary hospitalisation',
]

const NOT_COVERED = [
  'Cosmetic surgery (unless accident)',
  'Self-inflicted injuries',
  'Pre-existing diseases (first 2–4 yrs)',
  'Dental treatment (unless accident)',
  'Routine eye tests / spectacles',
  'Weight loss / fertility treatment',
  'War or nuclear hazard injuries',
  'Non-prescribed supplements',
]

const WHY = [
  { ico: '🏥', title: '10,000+ Cashless Hospitals', desc: 'Pan-India network including top corporate hospitals in every city and town.' },
  { ico: '⚡', title: '2-Hour Cashless Approval', desc: 'Pre-authorisation for planned hospitalisations approved within 2 hours.' },
  { ico: '📋', title: 'No Medical Checkup', desc: 'Buy without pre-policy medical tests for eligible individuals.' },
  { ico: '♾️', title: 'Lifetime Renewability', desc: 'Your policy renews for life — no age cap, no rejection after purchase.' },
  { ico: '💰', title: 'Tax Benefits u/s 80D', desc: 'Save up to ₹25,000 in tax on health insurance premiums every year.' },
  { ico: '🔄', title: 'No Claim Bonus', desc: 'Earn up to 50% increase in sum insured for every claim-free year.' },
]

const FAQS = [
  { question: 'What is a family floater plan?', answer: 'A family floater covers your entire family under a single sum insured. All members can use the total cover, and the premium is shared — making it significantly cheaper than individual plans for each member.' },
  { question: 'What is cashless hospitalisation?', answer: 'Cashless means you don\'t pay upfront at network hospitals. The insurer directly settles the bill with the hospital. Just show your health card or policy number at the TPA desk at admission.' },
  { question: 'What is a waiting period?', answer: 'A waiting period is a duration during which certain benefits aren\'t payable. Typically: 30-day general waiting period, 2–4 years for pre-existing diseases, 2 years for specific illnesses. Accidents are covered from day 1.' },
  { question: 'Can I port my existing health insurance to FatakSecure?', answer: 'Yes! IRDAI\'s portability guidelines let you switch insurers while retaining your waiting period credits. Our team handles the port hassle-free — just share your existing policy details.' },
]

export default function HealthPage() {
  const router = useRouter()

  return (
    <div>
      {/* Hero */}
      <section className="pt-[100px] pb-16 px-[5%] min-h-[90vh] flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(155deg,#2d1057 0%,#44226e 48%,#6b3fa0 100%)' }}>
        <div className="absolute -top-36 -right-[120px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.15),transparent_68%)] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.022)_1px,transparent_1px)] bg-[size:52px_52px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-14 items-center relative z-10 w-full">
          <div>
            <div className="flex items-center gap-2 text-xs text-white/[0.45] mb-4">
              <button onClick={() => router.push('/')} className="hover:text-white/80 transition-colors bg-transparent border-none cursor-pointer font-body text-white/[0.45]">Home</button>
              <span className="text-white/25">›</span>
              <span className="text-white/70">Health Insurance</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-health/[0.15] border border-health/30 text-[#7DD3FC] text-xs font-semibold px-4 py-1.5 rounded-2xl mb-5">
              <span className="w-[7px] h-[7px] bg-health rounded-full animate-blink" />
              India's Most Trusted Health Plans
            </div>
            <h1 className="font-heading text-[clamp(32px,4.5vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-4">
              Health Insurance<br />
              <span className="text-[#38BDF8]">for Every Indian Family</span>
            </h1>
            <p className="text-[17px] text-white/[0.68] leading-[1.78] max-w-[460px] mb-8">
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
              <Button size="lg" onClick={() => router.push('/health/buy')}>Get Health Quote →</Button>
              <Button variant="ghost" onClick={() => router.push('/health/buy')}>Compare Plans</Button>
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
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200 text-sm"
              onClick={() => router.push('/health/buy')}
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
            <Tag color="health">Health Plans</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold text-navy mb-3">
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
                className={`relative rounded-2xl border p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] ${
                  plan.isPopular
                    ? 'border-health shadow-[0_8px_40px_rgba(14,165,233,0.15)]'
                    : 'border-slate-200'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-health text-white text-[11.5px] font-bold px-3.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {plan.badge}
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--health)' }}>{plan.type}</div>
                <div className="font-heading text-[20px] font-extrabold text-navy mb-1">{plan.name}</div>
                <div className="text-[13px] text-slate-500 mb-4">{plan.desc}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-[32px] font-extrabold text-navy">{plan.price}</span>
                  <span className="text-[14px] text-slate-400">{plan.period}</span>
                  {plan.originalPrice && <span className="text-[13px] text-slate-400 line-through ml-2">{plan.originalPrice}</span>}
                </div>
                <div className="h-px bg-slate-100 my-4" />
                <ul className="space-y-2.5 mb-5 flex-1 list-none">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-[13px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${f.included ? '' : 'bg-slate-100 text-slate-400'}`} style={f.included ? { background: 'var(--health-bg)', color: 'var(--health)' } : undefined}>
                        {f.included ? '✓' : '✕'}
                      </span>
                      <span className={f.included ? 'text-slate-700' : 'text-slate-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl text-[14px] font-heading font-bold border-none cursor-pointer transition-all hover:opacity-90"
                  style={plan.isPopular ? { background: 'var(--health)', color: '#fff', boxShadow: '0 6px 20px rgba(14,165,233,.3)' } : { background: 'var(--health-bg)', color: 'var(--health)' }}
                  onClick={() => router.push('/health/buy')}
                >
                  Buy {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-[88px] px-[5%]" style={{ background: 'var(--g50)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-11">
            <Tag color="health">Coverage Details</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy">What Does Health Insurance Cover?</h2>
            <p className="text-[16px] text-slate-500 leading-[1.78] mt-2 max-w-[520px]">Everything you need to know about your health cover.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {COVERAGE.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: 'var(--health-bg)' }}>{c.ico}</div>
                <h4 className="font-heading font-bold text-[16px] text-navy mb-2">{c.title}</h4>
                <p className="text-[13.5px] text-slate-500 leading-[1.65] mb-4">{c.desc}</p>
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: 'var(--health-bg)', color: 'var(--health)' }}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Covered vs Not Covered */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-11">
            <Tag color="health">Policy Details</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy">Covered vs. Not Covered</h2>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl p-7 border border-slate-200">
              <h3 className="font-heading font-bold text-[18px] text-navy mb-5">
                <span style={{ color: '#10B981' }}>✅</span> What's Covered
              </h3>
              <ul className="space-y-3 list-none">
                {COVERED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0" style={{ background: '#ECFDF5', color: '#10B981' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-7 border border-slate-200">
              <h3 className="font-heading font-bold text-[18px] text-navy mb-5">
                <span style={{ color: '#EF4444' }}>❌</span> Not Covered
              </h3>
              <ul className="space-y-3 list-none">
                {NOT_COVERED.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14px] text-slate-700">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0" style={{ background: '#FFF5F5', color: '#EF4444' }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-[88px] px-[5%]" style={{ background: 'var(--g50)' }}>
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <Tag color="teal">Why Choose Us</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy">India's Smartest Way to Buy Health Insurance</h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
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
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[700px] mx-auto">
          <Tag color="health">FAQ</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-8">Health Insurance FAQs</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] px-[5%] text-white text-center" style={{ background: 'linear-gradient(145deg,#2d1057,#44226e)' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-4">
            Protect Your Family's Health<br /><span style={{ color: '#38BDF8' }}>From ₹299/Month</span>
          </h2>
          <p className="text-[16px] text-white/[0.65] mb-8">Cashless treatment at 10,000+ hospitals. Instant policy. No paperwork.</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push('/health/buy')}
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#ffc837] to-[#f6462d] py-3.5 px-8 text-[15px] shadow-[0_6px_22px_rgba(246,70,45,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(246,70,45,0.5)] transition-all border-none cursor-pointer"
            >
              ❤️‍🩹 Get Health Insurance →
            </button>
            <button
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border-[1.5px] border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer"
              onClick={() => router.push('/health/buy')}
            >
              Compare Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
