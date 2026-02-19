'use client'

import { usePage } from '@/lib/PageContext'
import Tag from '@/components/shared/Tag'
import FAQ from '@/components/shared/FAQ'

const PLANS = [
  {
    type: 'Domestic',
    name: 'India Explorer',
    desc: 'Essential cover for trips within India.',
    price: '₹199',
    per: '/trip',
    popular: false,
    features: [
      { ok: true, text: 'Medical Emergency ₹1 Lakh' },
      { ok: true, text: 'Trip Cancellation Cover' },
      { ok: true, text: 'Baggage Loss ₹10,000' },
      { ok: true, text: 'Flight Delay ₹2,000' },
      { ok: false, text: 'International Cover' },
      { ok: false, text: 'Adventure Sports' },
    ],
    btnText: 'Buy India Explorer',
    btnStyle: { background: 'var(--travel-bg)', color: 'var(--travel)' },
  },
  {
    type: 'International',
    name: 'World Traveller',
    desc: 'Complete global coverage for international travel.',
    price: '₹599',
    per: '/trip',
    popular: true,
    badge: '⭐ Best for International',
    features: [
      { ok: true, text: 'Medical Emergency $1,00,000' },
      { ok: true, text: 'Emergency Evacuation & Repatriation' },
      { ok: true, text: 'Trip Cancellation & Curtailment' },
      { ok: true, text: 'Baggage & Passport Loss' },
      { ok: true, text: 'Flight Delay Compensation' },
      { ok: true, text: '150+ Countries Coverage' },
    ],
    btnText: 'Buy World Traveller',
    btnStyle: { background: 'var(--travel)', color: '#fff', boxShadow: '0 6px 20px rgba(16,185,129,.3)' },
  },
  {
    type: 'Annual Multi-Trip',
    name: 'Frequent Flyer',
    desc: 'Best value for business travellers & frequent flyers.',
    price: '₹3,999',
    per: '/year',
    orig: '₹5,500',
    popular: false,
    features: [
      { ok: true, text: 'Unlimited International Trips/yr' },
      { ok: true, text: 'Medical Emergency $2,50,000' },
      { ok: true, text: 'Business Equipment Cover' },
      { ok: true, text: 'Adventure Sports Cover' },
      { ok: true, text: 'Home Burglary While Abroad' },
      { ok: true, text: 'Premium Lounge Access' },
    ],
    btnText: 'Buy Frequent Flyer',
    btnStyle: { background: 'var(--travel-bg)', color: 'var(--travel)' },
  },
]

const COVERAGE = [
  { ico: '🏥', title: 'Medical Emergency', desc: 'Medical treatment, hospitalisation, surgery and ICU charges during your trip. Cashless treatment at partner hospitals worldwide.', tag: 'All plans' },
  { ico: '✈️', title: 'Trip Cancellation', desc: 'Reimbursement of non-refundable trip costs if you cancel due to illness, death in family, natural disaster or flight cancellation.', tag: 'All plans' },
  { ico: '🧳', title: 'Baggage Loss & Delay', desc: 'Compensation for lost, stolen or delayed baggage. Includes emergency purchase cover for essentials if bags are delayed over 12 hours.', tag: 'All plans' },
  { ico: '🆘', title: 'Emergency Evacuation', desc: 'Medical evacuation to the nearest adequate medical facility and repatriation back to India if medically necessary.', tag: 'International plans' },
  { ico: '🛂', title: 'Passport & Document Loss', desc: 'Covers expenses incurred for obtaining emergency travel documents, replacement passport and related administrative costs.', tag: 'World Traveller+' },
  { ico: '🏔️', title: 'Adventure Sports', desc: 'Cover for injuries from adventure activities including trekking, skiing, scuba diving, bungee jumping and water sports.', tag: 'Frequent Flyer plan' },
]

const WHY = [
  { ico: '⚡', title: '60-Second Policy', desc: 'Enter your trip details, pay — policy issued in under 60 seconds with instant WhatsApp delivery.' },
  { ico: '🌍', title: '150+ Countries', desc: 'Coverage in 150+ countries including USA, Schengen, UAE and all major travel destinations.' },
  { ico: '📞', title: '24/7 Emergency Helpline', desc: 'Round-the-clock multilingual assistance. Call us from anywhere in the world, anytime.' },
  { ico: '💳', title: 'Cashless Worldwide', desc: 'Cashless treatment at 10,000+ partner hospitals globally. No need to pay upfront.' },
  { ico: '📲', title: 'Digital Claims', desc: 'File claims on the app or WhatsApp. Upload documents — fast reimbursement in 3–5 days.' },
  { ico: '🏅', title: 'Schengen Visa Compliant', desc: 'Our plans meet Schengen visa requirements (minimum €30,000 cover). Accepted at all embassies.' },
]

const FAQS = [
  { question: 'Do I need travel insurance for a Schengen visa?', answer: 'Yes. Schengen countries mandate travel insurance with a minimum medical coverage of €30,000 as a visa requirement. Our World Traveller plan is specifically Schengen compliant and accepted at all European embassies.' },
  { question: 'Can I buy travel insurance after booking my flight?', answer: 'Yes. You can buy travel insurance any time before your departure. However, for trip cancellation cover to apply, it is recommended to buy as soon as you book your tickets — so you\'re protected if something goes wrong before your trip.' },
  { question: 'Does travel insurance cover COVID-19?', answer: 'Yes. Our World Traveller and Frequent Flyer plans cover COVID-19 medical treatment and hospitalisation abroad. Trip cancellation due to a positive COVID test before departure is also covered.' },
  { question: 'How do I claim for medical emergency abroad?', answer: 'Call our 24/7 emergency helpline the moment you need medical help. Our team will guide you to a cashless partner hospital if possible, or authorise treatment and arrange direct payment to the hospital.' },
]

export default function TravelPage() {
  const { showPage } = usePage()

  return (
    <div className="pt-16">
      {/* Hero */}
      <section style={{ background: 'linear-gradient(155deg,#002d1a,#003d24,#00562e)', padding: '72px 5% 56px' }}>
        <div className="max-w-[1180px] mx-auto grid grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="text-[12px] text-white/50 mb-4">
              <button onClick={() => showPage('home')} className="text-white/50 hover:text-white bg-transparent border-none cursor-pointer">Home</button>
              <span className="mx-2 text-white/30">›</span>
              <span className="text-white/70">Travel Insurance</span>
            </div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-[12px] font-semibold" style={{ background: 'rgba(16,185,129,.15)', border: '1px solid rgba(16,185,129,.3)', color: '#6EE7B7' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Domestic &amp; International Cover
            </div>
            <h1 className="font-heading text-[clamp(30px,4vw,52px)] font-extrabold leading-[1.08] tracking-[-1px] text-white mb-4">
              Travel Insurance<br /><span style={{ color: '#34D399' }}>for Every Journey</span>
            </h1>
            <p className="text-[16px] text-white/65 leading-[1.75] max-w-[480px] mb-6">
              From a weekend trip to a world tour — get insured in 60 seconds. Medical emergencies, trip cancellation, lost baggage &amp; more, all covered.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-7">
              {['🌍 150+ Countries Covered', '🏥 Medical Emergency Cover', '🧳 Baggage & Passport Loss', '✈️ Flight Delay Compensation'].map((pill) => (
                <div key={pill} className="flex items-center gap-2 text-[13px] font-medium px-3.5 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] text-white/75">
                  {pill}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => showPage('home')}
                className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#FF6B35] to-[#e5521c] py-3.5 px-7 text-[14.5px] shadow-[0_6px_22px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,107,53,0.5)] transition-all border-none cursor-pointer"
              >
                Get Travel Quote →
              </button>
              <button className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer">
                See Coverage
              </button>
            </div>
          </div>
          {/* Stat card */}
          <div className="min-w-[260px] rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="grid grid-cols-2 gap-4 mb-5">
              {[
                { num: '5L+', lbl: 'Trips Insured' },
                { num: '150+', lbl: 'Countries Covered' },
                { num: '24/7', lbl: 'Emergency Helpline' },
                { num: '₹199', lbl: 'Starting Price' },
              ].map((s) => (
                <div key={s.lbl} className="text-center">
                  <div className="font-heading font-extrabold text-[22px] leading-none mb-1" style={{ color: '#34D399' }}>{s.num}</div>
                  <div className="text-[11px] text-white/45">{s.lbl}</div>
                </div>
              ))}
            </div>
            <button
              onClick={() => showPage('home')}
              className="w-full flex items-center justify-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#FF6B35] to-[#e5521c] py-3 px-5 text-[14px] shadow-[0_6px_22px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 transition-all border-none cursor-pointer mb-3"
            >
              Get Travel Insurance →
            </button>
            <p className="text-center text-[11.5px] text-white/35">🔒 Instant policy · Valid globally</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-12">
            <Tag color="travel">Travel Plans</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy-DEFAULT">Plans for Every Trip Type</h2>
            <p className="text-[16px] text-slate-500 leading-[1.78] mt-2">Domestic trips, international holidays, or frequent flyers — we have you covered.</p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`relative rounded-2xl p-6 border transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] ${plan.popular ? 'border-[#10B981] shadow-[0_8px_32px_rgba(16,185,129,0.15)]' : 'border-slate-200'}`}>
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11.5px] font-bold text-white bg-[#10B981] whitespace-nowrap shadow-sm">
                    {plan.badge}
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--travel)' }}>{plan.type}</div>
                <div className="font-heading text-[20px] font-extrabold text-navy-DEFAULT mb-1">{plan.name}</div>
                <div className="text-[13px] text-slate-500 mb-4">{plan.desc}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-heading text-[32px] font-extrabold text-navy-DEFAULT">{plan.price}</span>
                  <span className="text-[14px] text-slate-400">{plan.per}</span>
                  {plan.orig && <span className="text-[13px] text-slate-400 line-through ml-2">{plan.orig}</span>}
                </div>
                <div className="h-px bg-slate-100 my-4" />
                <ul className="space-y-2.5 mb-5">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5 text-[13px]">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${f.ok ? '' : 'bg-slate-100 text-slate-400'}`} style={f.ok ? { background: 'var(--travel-bg)', color: 'var(--travel)' } : undefined}>
                        {f.ok ? '✓' : '✕'}
                      </span>
                      <span className={f.ok ? 'text-slate-700' : 'text-slate-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl text-[14px] font-heading font-bold border-none cursor-pointer transition-all hover:opacity-90"
                  style={plan.btnStyle}
                  onClick={() => showPage('home')}
                >
                  {plan.btnText}
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
            <Tag color="travel">Coverage Details</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy-DEFAULT">What Does Travel Insurance Cover?</h2>
            <p className="text-[16px] text-slate-500 leading-[1.78] mt-2 max-w-[520px]">Comprehensive protection before, during and after your trip.</p>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {COVERAGE.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ background: 'var(--travel-bg)' }}>{c.ico}</div>
                <h4 className="font-heading font-bold text-[16px] text-navy-DEFAULT mb-2">{c.title}</h4>
                <p className="text-[13.5px] text-slate-500 leading-[1.65] mb-4">{c.desc}</p>
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full" style={{ background: 'var(--travel-bg)', color: 'var(--travel)' }}>{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-[88px] px-[5%] bg-white">
        <div className="max-w-[1180px] mx-auto">
          <div className="mb-10">
            <Tag color="teal">Why Choose Us</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy-DEFAULT">Why Smart Travellers Choose FatakSecure</h2>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {WHY.map((w) => (
              <div key={w.title} className="p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-[0_8px_28px_rgba(0,0,0,0.06)] transition-all">
                <div className="text-3xl mb-3">{w.ico}</div>
                <h4 className="font-heading font-bold text-[15px] text-navy-DEFAULT mb-1.5">{w.title}</h4>
                <p className="text-[13px] text-slate-500 leading-[1.6]">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-[88px] px-[5%]" style={{ background: 'var(--g50)' }}>
        <div className="max-w-[700px] mx-auto">
          <Tag color="travel">FAQ</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy-DEFAULT mb-8">Travel Insurance FAQs</h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] px-[5%] text-white text-center" style={{ background: 'linear-gradient(145deg,#002d1a,#003d24)' }}>
        <div className="max-w-[600px] mx-auto">
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-white mb-4">
            Travel Without Worry.<br /><span style={{ color: '#34D399' }}>From ₹199/Trip</span>
          </h2>
          <p className="text-[16px] text-white/65 mb-8">Instant policy. 150+ countries. 24/7 emergency support. Schengen compliant.</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => showPage('home')}
              className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white bg-gradient-to-br from-[#FF6B35] to-[#e5521c] py-3.5 px-8 text-[15px] shadow-[0_6px_22px_rgba(255,107,53,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(255,107,53,0.5)] transition-all border-none cursor-pointer"
            >
              ✈️ Get Travel Insurance →
            </button>
            <button className="inline-flex items-center gap-2 font-heading font-bold rounded-full text-white border border-white/[0.28] bg-white/[0.1] py-3 px-6 text-[14.5px] hover:bg-white/[0.18] hover:border-white/50 transition-all cursor-pointer">
              See All Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
