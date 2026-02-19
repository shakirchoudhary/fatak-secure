'use client'

import { useState, useEffect, useRef } from 'react'
import { usePage } from '@/lib/PageContext'

type Screen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14

const STEP_MAP: Record<number, number> = {
  0: 0, 1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5, 7: 5,
  8: 6,
  9: 7, 10: 7,
  11: 8, 12: 8, 13: 8, 14: 8,
}

const STEP_LABELS = ['Phone', 'About You', 'Coverage', 'Term', 'Nominee', 'Quotes', 'Riders', 'Proposal', 'Policy']

const COVER_OPTIONS = [
  { id: '25L', label: '₹25 L', sub: 'Lakh' },
  { id: '50L', label: '₹50 L', sub: 'Lakh' },
  { id: '1Cr', label: '₹1 Cr', sub: 'Popular' },
  { id: '2Cr', label: '₹2 Cr', sub: 'Crore' },
  { id: '3Cr', label: '₹3 Cr', sub: 'Crore' },
  { id: '5Cr', label: '₹5 Cr', sub: 'Max' },
]

const COVER_BASE: Record<string, number> = {
  '25L': 199, '50L': 349, '1Cr': 499, '2Cr': 799, '3Cr': 1099, '5Cr': 1499,
}

const COVER_LABELS: Record<string, string> = {
  '25L': '₹25 Lakh', '50L': '₹50 Lakh', '1Cr': '₹1 Crore', '2Cr': '₹2 Crore', '3Cr': '₹3 Crore', '5Cr': '₹5 Crore',
}

const LIFE_PLANS = [
  { insurer: 'HDFC Life', plan: 'Click 2 Protect Super', base: 499, type: 'term', claim: '99.5%', popular: true, short: 'HDFC' },
  { insurer: 'ICICI Pru', plan: 'iProtect Smart', base: 529, type: 'term', claim: '98.1%', popular: false, short: 'ICICI' },
  { insurer: 'Max Life', plan: 'Smart Secure Plus', base: 469, type: 'term', claim: '99.3%', popular: false, short: 'MAX' },
  { insurer: 'Tata AIA', plan: 'Sampoorna Raksha', base: 489, type: 'term', claim: '98.5%', popular: false, short: 'TATA' },
  { insurer: 'LIC', plan: 'Tech Term', base: 599, type: 'term', claim: '98.7%', popular: false, short: 'LIC' },
  { insurer: 'SBI Life', plan: 'eShield Next', base: 449, type: 'term', claim: '97.1%', popular: false, short: 'SBI' },
  { insurer: 'HDFC Life', plan: 'Sanchay Plus (ROP)', base: 1299, type: 'rop', claim: '99.5%', popular: false, short: 'HDFC' },
  { insurer: 'Max Life', plan: 'Smart Wealth Plan', base: 1199, type: 'rop', claim: '99.3%', popular: false, short: 'MAX' },
]

const RIDERS = [
  { id: 'ci', emoji: '💔', name: 'Critical Illness Rider', desc: '₹25 Lakh lump sum on diagnosis of 40+ critical illnesses including cancer, heart attack, stroke.', price: 1499 },
  { id: 'ad', emoji: '♿', name: 'Accidental Disability Rider', desc: 'Monthly income if permanently disabled in an accident. 1% of sum assured per month for 10 years.', price: 799 },
  { id: 'pw', emoji: '💊', name: 'Premium Waiver on CI', desc: 'All future premiums waived if you\'re diagnosed with a critical illness. Policy continues in force.', price: 599 },
  { id: 'cf', emoji: '👶', name: 'Child Future Protect', desc: 'Ensures your child\'s education and future goals are funded even in your absence.', price: 999 },
]

const INCOME_OPTIONS = [
  { value: '3L', label: 'Up to ₹3 Lakh' },
  { value: '5L', label: '₹3 – ₹5 Lakh' },
  { value: '10L', label: '₹5 – ₹10 Lakh' },
  { value: '25L', label: '₹10 – ₹25 Lakh' },
  { value: '50L', label: '₹25 Lakh+' },
]

const STATES = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Kerala', 'Punjab']

export default function LifeBuyPage() {
  const { showPage } = usePage()
  const [screen, setScreen] = useState<Screen>(0)
  const [history, setHistory] = useState<Screen[]>([])
  const topRef = useRef<HTMLDivElement>(null)

  // Screen 0
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(true)

  // Screen 1
  const [otp, setOtp] = useState(['', '', '', ''])

  // Screen 2
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState<'Male' | 'Female'>('Male')
  const [income, setIncome] = useState('10L')
  const [smoker, setSmoker] = useState(false)

  // Screen 3
  const [cover, setCover] = useState('1Cr')

  // Screen 4
  const [term, setTerm] = useState(30)

  // Screen 5 - nominee
  const [nomName, setNomName] = useState('')
  const [nomRel, setNomRel] = useState('')
  const [nomDob, setNomDob] = useState('')

  // Screen 7 - plan
  const [planFilter, setPlanFilter] = useState<'all' | 'term' | 'rop'>('all')
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  // Screen 8 - riders
  const [activeRiders, setActiveRiders] = useState<string[]>([])

  // Screen 9 - proposal
  const [propName, setPropName] = useState('')
  const [propDob, setPropDob] = useState('')
  const [propGender, setPropGender] = useState<'Male' | 'Female'>('Male')
  const [propEmail, setPropEmail] = useState('')
  const [propPan, setPropPan] = useState('')
  const [propAddr, setPropAddr] = useState('')
  const [propCity, setPropCity] = useState('')
  const [propState, setPropState] = useState('Maharashtra')
  const [onMeds, setOnMeds] = useState(false)
  const [hospitalized, setHospitalized] = useState(false)

  // Screen 11 - payment
  const [payMethod, setPayMethod] = useState(0)

  // Screen 12 - KYC
  const [kycFront, setKycFront] = useState(false)
  const [kycBack, setKycBack] = useState(false)
  const [kycPan, setKycPan] = useState(false)
  const [kycConsent, setKycConsent] = useState(true)

  const goTo = (n: Screen) => {
    setHistory(prev => [...prev, screen])
    setScreen(n)
    setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const goBack = () => {
    if (history.length > 0) {
      const prev = [...history]
      const last = prev.pop()!
      setHistory(prev)
      setScreen(last as Screen)
      setTimeout(() => topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
    } else {
      showPage('life')
    }
  }

  // Auto-advance loaders
  useEffect(() => {
    if (screen === 6) {
      const t = setTimeout(() => goTo(7), 2800)
      return () => clearTimeout(t)
    }
    if (screen === 13) {
      const t = setTimeout(() => goTo(14), 3000)
      return () => clearTimeout(t)
    }
  }, [screen])

  const filteredPlans = LIFE_PLANS.filter(p => planFilter === 'all' || p.type === planFilter)
  const plan = selectedPlan !== null ? LIFE_PLANS[selectedPlan] : LIFE_PLANS[0]
  const coverBase = COVER_BASE[cover] ?? 499
  const riderTotal = activeRiders.reduce((s, id) => s + (RIDERS.find(r => r.id === id)?.price ?? 0), 0)
  const basePremium = coverBase
  const totalBeforeGST = basePremium + riderTotal + 599  // 599 = mandatory PA
  const gst = Math.round(totalBeforeGST * 0.18)
  const total = totalBeforeGST + gst

  const currentStep = STEP_MAP[screen] ?? 0

  const changeTerm = (delta: number) => setTerm(prev => Math.max(5, Math.min(40, prev + delta)))

  return (
    <div className="pt-16 bg-slate-50 min-h-screen" ref={topRef}>
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-[5%] py-3.5 flex items-center justify-between sticky top-16 z-10">
        <div className="flex items-center gap-3">
          <button onClick={goBack} className="text-slate-400 hover:text-navy transition-colors bg-transparent border-none cursor-pointer font-body text-xl leading-none">←</button>
          <div>
            <div className="font-heading font-bold text-navy text-sm">Life Insurance</div>
            <div className="text-[11px] text-slate-400">{STEP_LABELS[currentStep]} · Step {currentStep + 1} of 9</div>
          </div>
        </div>
        {screen >= 3 && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-navy bg-life-bg border border-life/20 px-3 py-1.5 rounded-xl">
            <span>🛡️</span>
            <span>{COVER_LABELS[cover]} · {term} yrs</span>
          </div>
        )}
        <div className="flex gap-1.5">
          {STEP_LABELS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${
              i < currentStep ? 'w-4 bg-life opacity-50' :
              i === currentStep ? 'w-7 bg-life' :
              'w-4 bg-slate-200'
            }`} />
          ))}
        </div>
      </div>

      {/* ─── Screen 0: Landing ─── */}
      {screen === 0 && (
        <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
          <div className="w-[88px] h-[88px] bg-life-bg rounded-[28px] flex items-center justify-center text-[44px] mx-auto mb-6" style={{ animation: 'ljpulse 2.5s ease-in-out infinite' }}>
            🛡️
          </div>
          <h2 className="font-heading text-[24px] font-extrabold text-navy mb-2">Protect Your Family's Future</h2>
          <p className="text-[13px] font-bold text-life-dark mb-2">₹1 Crore Term Life Cover from ₹499/year</p>
          <p className="text-slate-500 text-sm mb-5">Enter your mobile number to get personalised quotes from India's top life insurers in seconds.</p>

          <div className="flex justify-center gap-2 flex-wrap mb-7">
            {['🏆 99% Claim Settlement', '📋 Tax Benefit u/s 80C', '⚡ 5-Minute Policy'].map(p => (
              <span key={p} className="bg-life-bg text-life-dark text-xs font-semibold px-3 py-1.5 rounded-xl">{p}</span>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-s1 p-6 text-left max-w-md mx-auto">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile Number</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-life focus-within:shadow-[0_0_0_3px_rgba(236,72,153,0.1)] transition-all mb-4">
              <div className="px-3.5 py-3 font-bold text-navy bg-slate-50 border-r border-slate-200 text-sm flex-shrink-0">+91</div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="flex-1 px-3.5 py-3 border-none outline-none font-heading text-navy text-sm bg-transparent"
              />
            </div>
            <div className="flex items-start gap-2.5 text-[12.5px] text-slate-500 leading-snug mb-5">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-life" />
              <label>I agree to the <span className="text-life font-semibold cursor-pointer">Privacy Policy</span> and <span className="text-life font-semibold cursor-pointer">Terms & Conditions</span></label>
            </div>
            <button
              disabled={phone.length !== 10 || !consent}
              onClick={() => goTo(1)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform shadow-[0_6px_22px_rgba(236,72,153,0.3)]"
            >
              Get Life Quotes →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 1: OTP ─── */}
      {screen === 1 && (
        <div className="max-w-[440px] mx-auto px-5 py-10 text-center">
          <div className="bg-white rounded-2xl shadow-s1 p-8">
            <div className="text-[44px] mb-4">📱</div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy mb-2">Verify Your Number</h2>
            <p className="text-[13.5px] text-slate-600 mb-5">
              OTP sent to <strong>+91 {phone}</strong> <span className="cursor-pointer" onClick={() => goTo(0)}>✏️</span>
            </p>

            <div className="flex gap-3 justify-center mb-4">
              {otp.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={e => {
                    const newOtp = [...otp]
                    newOtp[i] = e.target.value.replace(/\D/g, '')
                    setOtp(newOtp)
                    if (e.target.value && i < 3) {
                      const next = document.querySelector(`input[data-lotp="${i + 1}"]`) as HTMLInputElement
                      next?.focus()
                    }
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace' && !val && i > 0) {
                      const prev = document.querySelector(`input[data-lotp="${i - 1}"]`) as HTMLInputElement
                      prev?.focus()
                    }
                  }}
                  data-lotp={i}
                  className="w-14 h-16 border-2 border-slate-200 rounded-xl text-center font-heading text-2xl font-extrabold text-navy outline-none focus:border-life focus:shadow-[0_0_0_3px_rgba(236,72,153,0.12)] transition-all bg-white"
                />
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-5">
              Didn't receive? <span className="text-life font-semibold cursor-pointer" onClick={() => setOtp(['', '', '', ''])}>Resend OTP</span>
            </p>

            <button
              disabled={otp.join('').length !== 4}
              onClick={() => goTo(2)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Verify & Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 2: Basic Info ─── */}
      {screen === 2 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            👤 About You
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Tell us about yourself</h2>
          <p className="text-sm text-slate-500 mb-6">This helps us show the most accurate premiums for your age and health profile.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy mb-4">👤 Personal Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name</label>
            <input type="text" placeholder="Enter your full name" value={name} onChange={e => setName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Gender</label>
                <div className="flex gap-2">
                  {(['Male', 'Female'] as const).map(g => (
                    <button key={g} onClick={() => setGender(g)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                        gender === g ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500'
                      }`}>
                      {g === 'Male' ? '♂ Male' : '♀ Female'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Annual Income</label>
            <select value={income} onChange={e => setIncome(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5">
              {INCOME_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Do you smoke / use tobacco?</label>
            <div className="flex gap-2">
              {[[true, '🚬 Yes'], [false, '✅ No']].map(([v, label]) => (
                <button key={String(v)} onClick={() => setSmoker(v as boolean)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    smoker === v ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {label as string}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky bar */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Step</div>
              <div className="text-sm font-bold text-navy">Basic Info</div>
            </div>
            <button
              disabled={!name || !dob}
              onClick={() => goTo(3)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 3: Coverage Amount ─── */}
      {screen === 3 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            💰 Coverage
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">How much life cover do you need?</h2>
          <p className="text-sm text-slate-500 mb-6">We recommend 10–15× your annual income. You can customise below.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <div className="text-sm text-slate-500 mb-4 text-center">Select Sum Assured</div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              {COVER_OPTIONS.map(c => (
                <div
                  key={c.id}
                  onClick={() => setCover(c.id)}
                  className={`border-2 rounded-2xl p-4 cursor-pointer transition-all text-center ${
                    cover === c.id ? 'border-life bg-life-bg' : 'border-slate-200 bg-white hover:border-life'
                  }`}
                >
                  <div className={`font-heading text-lg font-extrabold ${cover === c.id ? 'text-life-dark' : 'text-navy'}`}>{c.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{c.sub}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center">
              Recommended for your income: <strong className="text-life-dark">₹1 Crore</strong>
            </p>
          </div>

          <button
            onClick={() => goTo(4)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 4: Policy Term ─── */}
      {screen === 4 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            📅 Policy Term
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">For how many years do you need cover?</h2>
          <p className="text-sm text-slate-500 mb-6">Longer term = more protection. Most people choose cover till age 60–70.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 text-center mb-4">
            <div className="text-sm text-slate-500 mb-1">Policy Term</div>
            <div className="flex items-center justify-center gap-5 py-5">
              <button onClick={() => changeTerm(-5)}
                className="w-11 h-11 rounded-full border-2 border-life bg-white text-xl font-bold text-life-dark cursor-pointer flex items-center justify-center hover:bg-life-bg transition-all">−</button>
              <div>
                <div className="font-heading text-[48px] font-extrabold text-navy leading-none">{term}</div>
                <div className="text-sm text-slate-400 mt-1">years</div>
              </div>
              <button onClick={() => changeTerm(5)}
                className="w-11 h-11 rounded-full border-2 border-life bg-white text-xl font-bold text-life-dark cursor-pointer flex items-center justify-center hover:bg-life-bg transition-all">+</button>
            </div>
            <div className="flex justify-center gap-2 flex-wrap">
              {[10, 15, 20, 30, 40].map(t => (
                <button key={t} onClick={() => setTerm(t)}
                  className={`px-3.5 py-1.5 rounded-xl text-sm font-semibold border-[1.5px] transition-all cursor-pointer ${
                    term === t ? 'border-life bg-life-bg text-life-dark font-bold' : 'border-slate-200 bg-white text-slate-600'
                  }`}>
                  {t} yrs
                </button>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 text-[13px] text-amber-800 mb-5">
            💡 Tip: With cover till age {(dob ? new Date().getFullYear() - new Date(dob).getFullYear() : 33) + term}, your family stays protected through your prime earning years.
          </div>

          <button
            onClick={() => goTo(5)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 5: Nominee ─── */}
      {screen === 5 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            👨‍👩‍👧 Nominee
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Who will receive the claim amount?</h2>
          <p className="text-sm text-slate-500 mb-6">Add your primary nominee — the person who will receive the sum assured in case of your demise.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy mb-4">👤 Nominee Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nominee's Full Name</label>
            <input type="text" placeholder="Enter nominee's name" value={nomName} onChange={e => setNomName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Relationship</label>
                <select value={nomRel} onChange={e => setNomRel(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white">
                  <option value="">Select relationship</option>
                  {['Spouse', 'Father', 'Mother', 'Son', 'Daughter', 'Brother', 'Sister'].map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={nomDob} onChange={e => setNomDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white" />
              </div>
            </div>
          </div>

          {/* Sticky */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Nominee</div>
              <div className="text-sm font-bold text-navy">{nomName || 'Not set'}</div>
            </div>
            <button
              disabled={!nomName || !nomRel || !nomDob}
              onClick={() => goTo(6)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 6: Fetching Quotes ─── */}
      {screen === 6 && (
        <div className="max-w-[480px] mx-auto px-5 py-24 text-center">
          <div className="relative w-[72px] h-[72px] mx-auto mb-5 border-[5px] border-life-bg border-t-life rounded-full animate-spin" />
          <h3 className="font-heading text-xl font-extrabold text-navy mb-2">Fetching your quotes…</h3>
          <p className="text-slate-400 text-sm mb-7">Comparing plans from India's top life insurers based on your profile.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left max-w-xs mx-auto">
            {['⏳ Analysing your profile…', '⏳ Comparing 10+ insurers…', '⏳ Calculating best premiums…'].map((msg, i) => (
              <div key={i} className={`text-sm text-slate-400 ${i > 0 ? 'mt-2' : ''}`}>{msg}</div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Screen 7: Plan Listing ─── */}
      {screen === 7 && (
        <div className="max-w-[480px] mx-auto px-5 py-6">
          {/* Profile banner */}
          <div className="bg-life-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-4 border border-life/20">
            <span className="text-xl">🛡️</span>
            <div>
              <div className="font-heading text-sm font-bold text-navy">{gender} · {dob ? (new Date().getFullYear() - new Date(dob).getFullYear()) : 33} yrs · {smoker ? 'Smoker' : 'Non-smoker'}</div>
              <div className="text-xs text-slate-400">{COVER_LABELS[cover]} · {term} Year Term</div>
            </div>
            <button onClick={() => goTo(2)} className="ml-auto text-[11px] text-life font-semibold cursor-pointer bg-transparent border-none">Edit ✏️</button>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
            {([['all', 'All Plans'], ['term', 'Pure Term'], ['rop', 'Return of Premium']] as const).map(([v, label]) => (
              <button key={v} onClick={() => setPlanFilter(v)}
                className={`px-4 py-1.5 rounded-2xl text-xs font-bold border-[1.5px] whitespace-nowrap cursor-pointer transition-all ${
                  planFilter === v ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500 hover:border-life'
                }`}>
                {label}
              </button>
            ))}
          </div>

          {/* Plans */}
          <div className="flex flex-col gap-3.5 mb-4">
            {filteredPlans.map((p, i) => {
              const planIdx = LIFE_PLANS.indexOf(p)
              const isSelected = selectedPlan === planIdx
              const annualPremium = ((coverBase * p.base) / 499)  // scale by cover
              return (
                <div
                  key={i}
                  onClick={() => setSelectedPlan(planIdx)}
                  className={`bg-white border-[1.5px] rounded-[18px] p-5 cursor-pointer transition-all duration-200 relative ${
                    isSelected ? 'border-life shadow-s2' : 'border-slate-100 hover:border-life'
                  }`}
                >
                  {p.popular && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-life to-life-dark text-white text-[10.5px] font-bold px-3 py-1 rounded-xl">⭐ Recommended</div>
                  )}
                  <div className="flex items-center gap-3.5">
                    <div className="w-[50px] h-[50px] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[11px] font-extrabold text-navy flex-shrink-0 text-center">
                      {p.short}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-heading text-[14.5px] font-bold text-navy">{p.insurer}</div>
                      <div className="text-xs text-slate-500">{p.plan}</div>
                      <div className="text-xs text-slate-400">{COVER_LABELS[cover]} · {term} yrs · {p.claim} claim settlement</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-heading text-[20px] font-extrabold text-navy leading-none">₹{p.base}</div>
                      <div className="text-xs text-slate-400">/year</div>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                      <button className="flex-1 py-2 rounded-xl border-[1.5px] border-life text-life-dark font-heading font-bold text-xs bg-white cursor-pointer">View Details</button>
                      <button
                        onClick={e => { e.stopPropagation(); goTo(8) }}
                        className="flex-1 py-2 rounded-xl border-none cursor-pointer font-heading font-bold text-xs bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
                      >
                        Buy Now →
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <p className="text-[11px] text-slate-400 text-center bg-slate-50 rounded-xl p-2.5">
            * Premiums shown are annual, exclusive of GST (18%). Final amount includes GST.
          </p>

          <button
            disabled={selectedPlan === null}
            onClick={() => goTo(8)}
            className="w-full mt-5 py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 8: Riders ─── */}
      {screen === 8 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            ➕ Riders
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Enhance your coverage</h2>
          <p className="text-sm text-slate-500 mb-5">Add riders to your base plan for comprehensive protection.</p>

          <div className="bg-life-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-5 border border-life/20">
            <span className="text-xl">🛡️</span>
            <div>
              <div className="font-heading text-sm font-bold text-navy">{plan.insurer}</div>
              <div className="text-xs text-slate-400">{plan.plan} · {COVER_LABELS[cover]} · {term} yrs</div>
            </div>
            <button onClick={() => goTo(7)} className="ml-auto text-[11px] text-life font-semibold cursor-pointer bg-transparent border-none">Change</button>
          </div>

          {/* Mandatory PA */}
          <div className="bg-life-bg border border-life/20 rounded-2xl p-4 flex items-start gap-3.5 mb-3">
            <div className="text-2xl flex-shrink-0">🧑‍⚕️</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-heading text-sm font-bold text-navy">Personal Accident Cover</span>
                <span className="text-[10px] font-bold bg-life text-white px-2 py-0.5 rounded-full">Mandatory</span>
              </div>
              <div className="text-xs text-slate-500">₹25 Lakh accidental death benefit. Mandatory by IRDAI.</div>
            </div>
            <div className="text-right">
              <div className="font-heading text-sm font-bold text-life-dark">₹599</div>
              <div className="w-5 h-5 bg-life rounded-full flex items-center justify-center text-[9px] text-white ml-auto mt-1">✓</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {RIDERS.map(r => (
              <div
                key={r.id}
                onClick={() => setActiveRiders(prev => prev.includes(r.id) ? prev.filter(x => x !== r.id) : [...prev, r.id])}
                className={`border-[1.5px] rounded-2xl p-4 cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                  activeRiders.includes(r.id) ? 'border-life bg-life-bg' : 'border-slate-100 bg-white hover:border-life'
                }`}
              >
                <div className="w-[38px] h-[38px] bg-life-bg rounded-xl flex items-center justify-center text-lg flex-shrink-0">{r.emoji}</div>
                <div className="flex-1">
                  <div className="font-heading text-sm font-bold text-navy mb-0.5">{r.name}</div>
                  <div className="text-xs text-slate-500 leading-snug">{r.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-heading text-sm font-bold text-life-dark">₹{r.price.toLocaleString('en-IN')}</div>
                  <div className={`w-5 h-5 border-2 rounded flex items-center justify-center text-[9px] text-white ml-auto mt-1.5 ${
                    activeRiders.includes(r.id) ? 'bg-life border-life' : 'border-slate-300'
                  }`}>{activeRiders.includes(r.id) ? '✓' : ''}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(9)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 9: Proposal ─── */}
      {screen === 9 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="bg-life-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-5 border border-life/20">
            <span className="text-xl">🛡️</span>
            <div>
              <div className="font-heading text-sm font-bold text-navy">{plan.insurer}</div>
              <div className="text-xs text-slate-400">{plan.plan} · {COVER_LABELS[cover]} · {term} yrs</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy mb-4">📋 Policy Holder Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name (as per Aadhaar)</label>
            <input type="text" placeholder="Enter full name" value={propName} onChange={e => setPropName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={propDob} onChange={e => setPropDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Gender</label>
                <div className="flex gap-2">
                  {(['Male', 'Female'] as const).map(g => (
                    <button key={g} onClick={() => setPropGender(g)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                        propGender === g ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500'
                      }`}>
                      {g === 'Male' ? '♂' : '♀'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
            <input type="email" placeholder="Enter email address" value={propEmail} onChange={e => setPropEmail(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5" />

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              PAN Number <span className="text-[10px] font-normal text-slate-400 normal-case">(Optional — tax benefit u/s 80C)</span>
            </label>
            <input type="text" placeholder="ABCDE1234F (optional)" value={propPan}
              onChange={e => setPropPan(e.target.value.toUpperCase().slice(0, 10))}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white uppercase" />
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy mb-4">📍 Address Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Residential Address</label>
            <input type="text" placeholder="House no., street name, area" value={propAddr} onChange={e => setPropAddr(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">City</label>
                <input type="text" placeholder="City" value={propCity} onChange={e => setPropCity(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">State</label>
                <select value={propState} onChange={e => setPropState(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-life transition-all bg-white">
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-5">
            <h4 className="font-heading text-sm font-bold text-navy mb-4">🩺 Medical Declaration</h4>

            <label className="block text-[12px] text-slate-600 mb-2 leading-snug">Are you currently on any long-term medication?</label>
            <div className="flex gap-2 mb-4">
              {[true, false].map(v => (
                <button key={String(v)} onClick={() => setOnMeds(v)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    onMeds === v ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {v ? 'Yes' : 'No'}
                </button>
              ))}
            </div>

            <label className="block text-[12px] text-slate-600 mb-2 leading-snug">Have you been hospitalised in the last 3 years?</label>
            <div className="flex gap-2">
              {[true, false].map(v => (
                <button key={String(v)} onClick={() => setHospitalized(v)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    hospitalized === v ? 'border-life bg-life-bg text-life-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {v ? 'Yes' : 'No'}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Annual Premium</div>
              <div className="font-heading text-xl font-extrabold text-navy">₹{plan.base} <span className="text-xs text-slate-400 font-normal">/year</span></div>
            </div>
            <button
              disabled={!propName || !propDob || !propEmail}
              onClick={() => goTo(10)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 10: Summary ─── */}
      {screen === 10 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            📋 Review
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Review Your Policy</h2>
          <p className="text-sm text-slate-500 mb-5">Please verify all details before proceeding to payment.</p>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            <div className="bg-life-bg px-5 py-4 flex items-center gap-3 border-b border-life/20">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[11px] font-extrabold text-navy flex-shrink-0">{plan.short}</div>
              <div>
                <div className="font-heading font-bold text-navy text-sm">{plan.insurer}</div>
                <div className="text-xs text-slate-500">{plan.plan}</div>
              </div>
            </div>
            <div className="px-5 py-4">
              {[
                ['Policy Holder', propName || name || '—'],
                ['Date of Birth', propDob || dob || '—'],
                ['Sum Assured', COVER_LABELS[cover]],
                ['Policy Term', `${term} years`],
                ['Premium Frequency', 'Annual'],
                ['Nominees', nomName ? `${nomName} (${nomRel})` : '—'],
                ['Add-ons', `PA Cover${activeRiders.length > 0 ? ` + ${activeRiders.length} rider(s)` : ''}`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <span className="text-xs text-slate-500 font-medium">{k}</span>
                  <span className="text-xs font-bold text-navy text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-5">
            <div className="font-heading text-sm font-bold text-navy mb-4">💰 Premium Breakdown</div>
            {[
              ['Base Premium', `₹${plan.base}`],
              ['Riders', `₹${(riderTotal + 599).toLocaleString('en-IN')}`],
              ['GST (18%)', `₹${gst.toLocaleString('en-IN')}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm py-1.5">
                <span className="text-slate-500">{k}</span>
                <span className="font-semibold text-navy">{v}</span>
              </div>
            ))}
            <div className="border-t border-slate-200 my-2" />
            <div className="flex justify-between">
              <span className="font-heading font-bold text-navy">Total Annual Premium</span>
              <span className="font-heading text-lg font-extrabold text-navy">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            onClick={() => goTo(11)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Proceed to Pay →
          </button>
        </div>
      )}

      {/* ─── Screen 11: Payment ─── */}
      {screen === 11 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-life-bg text-life-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            💳 Payment
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Complete Your Payment</h2>
          <p className="text-sm text-slate-500 mb-5">
            Total: <strong className="text-navy">₹{total.toLocaleString('en-IN')}</strong> (annual, incl. GST)
          </p>

          <div className="bg-slate-50 rounded-xl px-4 py-2.5 text-xs text-slate-500 flex items-center gap-2 mb-5">
            🔒 256-bit SSL encrypted · RBI compliant · PCI DSS certified
          </div>

          <div className="flex flex-col gap-3 mb-5">
            {[
              { ico: '📱', name: 'UPI', sub: 'GPay, PhonePe, Paytm, BHIM' },
              { ico: '💳', name: 'Debit / Credit Card', sub: 'Visa, Mastercard, RuPay' },
              { ico: '🏦', name: 'Net Banking', sub: 'All major banks supported' },
              { ico: '🔄', name: 'EMI', sub: '0% EMI on select cards' },
            ].map((m, i) => (
              <div key={i} onClick={() => setPayMethod(i)}
                className={`flex items-center gap-3.5 p-4 border-[1.5px] rounded-2xl cursor-pointer transition-all ${
                  payMethod === i ? 'border-life bg-life-bg' : 'border-slate-100 bg-white hover:border-life'
                }`}>
                <div className="text-2xl">{m.ico}</div>
                <div>
                  <div className="font-heading text-sm font-bold text-navy">{m.name}</div>
                  <div className="text-xs text-slate-400">{m.sub}</div>
                </div>
                <div className={`ml-auto w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  payMethod === i ? 'border-life bg-life' : 'border-slate-300'
                }`}>
                  {payMethod === i && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => goTo(12)} className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform">
            🔒 Pay ₹{total.toLocaleString('en-IN')} →
          </button>
        </div>
      )}

      {/* ─── Screen 12: KYC ─── */}
      {screen === 12 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[26px]">🔐</span>
            <div>
              <h2 className="font-heading text-[22px] font-extrabold text-navy">KYC Verification</h2>
              <p className="text-sm text-slate-500">Mandatory as per IRDAI guidelines to issue your life insurance policy.</p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[13px] text-amber-800 mb-5 leading-snug">
            <strong className="block mb-1">⚠️ Complete KYC within 48 hours</strong>
            Your payment is reserved. Upload documents to issue your policy immediately.
          </div>

          {[
            { key: 'front', state: kycFront, set: setKycFront, ico: '📄', title: 'Aadhaar Card — Front Side', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
            { key: 'back', state: kycBack, set: setKycBack, ico: '📄', title: 'Aadhaar Card — Back Side', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
            { key: 'pan', state: kycPan, set: setKycPan, ico: '🪪', title: 'PAN Card', sub: 'Required for tax benefit u/s 80C · Max 2 MB' },
          ].map(item => (
            <div key={item.key} onClick={() => item.set(true)}
              className={`border-2 rounded-2xl p-5 text-center cursor-pointer transition-all mb-4 ${
                item.state ? 'border-life bg-life-bg' : 'border-dashed border-slate-300 bg-white hover:border-life'
              }`}>
              <div className="text-3xl mb-2">{item.state ? '✅' : item.ico}</div>
              <div className="font-heading text-sm font-bold text-navy mb-1">{item.title}</div>
              <p className={`text-xs mb-4 ${item.state ? 'text-life-dark font-semibold' : 'text-slate-400'}`}>
                {item.state ? 'Uploaded successfully ✓' : item.sub}
              </p>
              {!item.state && (
                <div className="flex gap-2.5 justify-center">
                  <button className="py-2 px-5 border-[1.5px] border-slate-200 rounded-xl bg-white font-heading text-[13px] font-semibold text-slate-600 cursor-pointer">📷 Scan</button>
                  <button className="py-2 px-5 border-[1.5px] border-slate-200 rounded-xl bg-white font-heading text-[13px] font-semibold text-slate-600 cursor-pointer">⬆️ Upload</button>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-start gap-2.5 text-[12.5px] text-slate-500 leading-snug mb-5">
            <input type="checkbox" checked={kycConsent} onChange={e => setKycConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-life" />
            <label>I consent to FatakSecure and its insurance partner collecting and verifying my Aadhaar and PAN as per IRDAI KYC norms.</label>
          </div>

          {/* Sticky */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">KYC Status</div>
              <div className="text-sm font-bold text-navy">{[kycFront, kycBack, kycPan].filter(Boolean).length} of 3 uploaded</div>
            </div>
            <button
              disabled={!kycFront || !kycBack || !kycPan || !kycConsent}
              onClick={() => goTo(13)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Verify KYC →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 13: KYC Processing ─── */}
      {screen === 13 && (
        <div className="max-w-[480px] mx-auto px-5 py-24 text-center">
          <div className="relative w-[72px] h-[72px] mx-auto mb-5 border-[5px] border-life-bg border-t-life rounded-full animate-spin" />
          <h3 className="font-heading text-xl font-extrabold text-navy mb-2">Verifying your KYC…</h3>
          <p className="text-slate-400 text-sm mb-8">Please do not close or refresh this screen.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left max-w-xs mx-auto">
            {[
              { icon: '✅', text: 'Plan selected & confirmed', done: true },
              { icon: '✅', text: 'Proposal submitted', done: true },
              { icon: '✅', text: 'Payment verified', done: true },
              { icon: '⏳', text: 'KYC & underwriting…', done: false },
              { icon: '⏳', text: 'Policy issuance…', done: false },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-3 text-sm ${i > 0 ? 'mt-2.5' : ''}`}>
                <span>{s.icon}</span>
                <span className={s.done ? 'text-navy font-semibold' : 'text-slate-400'}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Screen 14: Policy Issued ─── */}
      {screen === 14 && (
        <div className="max-w-[480px] mx-auto px-5 py-10">
          <div className="text-center mb-7">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-heading text-[28px] font-extrabold text-navy mb-2">Congratulations!</h2>
            <p className="text-slate-500 text-sm mb-4">Your life insurance policy is now active. Your family is protected.</p>
            <div className="bg-life-bg border-2 border-life/25 rounded-xl px-6 py-2 inline-block font-heading text-lg font-extrabold text-life-dark mb-6">
              {plan.insurer} Life Insurance
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-xs mx-auto text-left mb-6">
              {[
                ['Annual Premium', `₹${total.toLocaleString('en-IN')}`, true],
                ['Transaction ID', `FSLI${Date.now().toString().slice(-8)}`, false],
                ['Insurer', plan.insurer, false],
                ['Insured', propName || name || '—', false],
                ['Sum Assured', COVER_LABELS[cover], false],
                ['Policy Term', `${term} years`, false],
                ['Valid From', '19 Feb 2026', false],
                ['Nominee', nomName ? `${nomName} (${nomRel})` : '—', false],
              ].map(([k, v, life]) => (
                <div key={k as string} className={`flex justify-between py-1.5 border-b border-slate-100 last:border-0`}>
                  <span className="text-xs text-slate-500">{k}</span>
                  <span className={`text-xs font-bold ${life ? 'text-life' : 'text-navy'}`}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center mb-5">
            <div className="text-3xl mb-2">📑</div>
            <h4 className="font-heading text-sm font-bold text-navy mb-2">Term Life Insurance Policy</h4>
            <p className="text-xs text-slate-400 mb-4">Your policy document will be sent to your registered email and WhatsApp within 1–2 hours.</p>
            <button
              onClick={() => showPage('life')}
              className="w-full max-w-xs mx-auto block py-3 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life to-life-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              📥 View Policy →
            </button>
          </div>

          <div className="text-center">
            <button onClick={() => showPage('home')} className="text-sm font-semibold text-life bg-transparent border-none cursor-pointer hover:underline">
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
