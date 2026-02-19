'use client'

import { useState, useEffect, useRef } from 'react'
import { usePage } from '@/lib/PageContext'

type Screen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15

const STEP_MAP: Record<number, number> = {
  0: 0, 1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4, 6: 4,
  7: 5, 8: 5,
  9: 6, 10: 6,
  11: 7, 12: 7,
  13: 8, 14: 8, 15: 8,
}

const STEP_LABELS = ['Phone', 'Members', 'Ages', 'PED', 'City', 'Quotes', 'Proposal', 'Payment', 'KYC']

const MEMBER_OPTIONS = [
  { id: 'self', emoji: '🧑', name: 'Self', sub: 'Primary' },
  { id: 'spouse', emoji: '💑', name: 'Spouse', sub: 'Husband / Wife' },
  { id: 'son', emoji: '👦', name: 'Son', sub: 'Male child' },
  { id: 'daughter', emoji: '👧', name: 'Daughter', sub: 'Female child' },
  { id: 'father', emoji: '👨‍🦳', name: 'Father', sub: 'Bio. father' },
  { id: 'mother', emoji: '👩‍🦳', name: 'Mother', sub: 'Bio. mother' },
]

const INITIAL_AGES: Record<string, number> = {
  self: 30, spouse: 28, son: 8, daughter: 6, father: 55, mother: 52,
}

const PED_CONDITIONS = [
  { id: 'diabetes', emoji: '💉', name: 'Diabetes' },
  { id: 'heart', emoji: '❤️', name: 'Heart Disease' },
  { id: 'bp', emoji: '🫀', name: 'High BP / Hypertension' },
  { id: 'asthma', emoji: '🫁', name: 'Asthma / Respiratory' },
  { id: 'thyroid', emoji: '🦴', name: 'Thyroid Disorder' },
  { id: 'cancer', emoji: '🧠', name: 'Cancer (history)' },
  { id: 'kidney', emoji: '🦷', name: 'Kidney Disease' },
  { id: 'other', emoji: '💊', name: 'Other' },
]

const POPULAR_CITIES = ['Mumbai', 'Delhi', 'Bengaluru', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow']

const QUOTES = [
  {
    id: 0, logo: 'NIVA\nBUPA', insurer: 'Niva Bupa', plan: 'ReAssure 2.0', desc: 'Family Floater · ₹10 Lakh SI',
    price: 799, tag: '⭐ Recommended',
    features: ['Lock the Clock feature', 'Unlimited restoration', '10,000+ network hospitals'],
  },
  {
    id: 1, logo: 'HDFC\nERGO', insurer: 'HDFC ERGO', plan: 'Optima Secure', desc: 'Family Floater · ₹10 Lakh SI',
    price: 899,
    features: ['No room rent limit', 'No co-payment clause', '12,000+ network hospitals'],
  },
  {
    id: 2, logo: 'STAR\nHLTH', insurer: 'Star Health', plan: 'Family Health Optima', desc: 'Family Floater · ₹10 Lakh SI',
    price: 749,
    features: ['150% SI restoration', 'Annual health checkup', '8,500+ network hospitals'],
  },
  {
    id: 3, logo: 'CARE\nHLTH', insurer: 'Care Health', plan: 'Care Supreme', desc: 'Family Floater · ₹10 Lakh SI',
    price: 1149,
    features: ['Unlimited restoration', 'No co-payment', 'Preventive care included'],
  },
  {
    id: 4, logo: 'ICICI\nLOMB', insurer: 'ICICI Lombard', plan: 'Complete Health', desc: 'Family Floater · ₹10 Lakh SI',
    price: 559,
    features: ['No claim bonus 50%', 'Cashless at 6,500+ hospitals', 'Quick claim settlement'],
  },
]

const ADDONS = [
  { id: 'room', emoji: '🏥', name: 'Room Rent Waiver', desc: 'Upgrade to single private AC room at no extra limit. No room rent capping.', price: 180 },
  { id: 'opd', emoji: '🩺', name: 'OPD Cover Top-Up', desc: 'Outpatient consultations, pharmacy, diagnostics up to ₹15,000/year covered.', price: 220 },
  { id: 'maternity', emoji: '👶', name: 'Maternity & Newborn Cover', desc: 'Normal & C-section delivery, prenatal, postnatal + newborn cover for 90 days.', price: 399 },
  { id: 'global', emoji: '✈️', name: 'Global Emergency Cover', desc: 'Emergency hospitalisation anywhere in the world — up to ₹25 Lakh.', price: 299 },
  { id: 'mental', emoji: '🧠', name: 'Mental Health & Wellness', desc: 'Psychiatric in-patient treatment, tele-therapy sessions, wellness check-ins.', price: 99 },
  { id: 'dental', emoji: '🦷', name: 'Dental & Vision Cover', desc: 'Dental procedures, orthodontics, eye checkups and spectacle cover ₹10,000/yr.', price: 149 },
]

const STATES = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Kerala', 'Punjab']

export default function HealthBuyPage() {
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
  const [members, setMembers] = useState<Record<string, boolean>>({ self: true, spouse: false, son: false, daughter: false, father: false, mother: false })

  // Screen 3
  const [ages, setAges] = useState<Record<string, number>>(INITIAL_AGES)

  // Screen 4
  const [ped, setPed] = useState<string[]>([])

  // Screen 5
  const [city, setCity] = useState('Mumbai')
  const [citySearch, setCitySearch] = useState('')
  const [pincode, setPincode] = useState('')

  // Screen 7
  const [selectedQuote, setSelectedQuote] = useState<number | null>(null)

  // Screen 8
  const [activeAddons, setActiveAddons] = useState<string[]>([])

  // Screen 9
  const [propName, setPropName] = useState('')
  const [propDob, setPropDob] = useState('')
  const [propGender, setPropGender] = useState<'Male' | 'Female'>('Male')
  const [propEmail, setPropEmail] = useState('')
  const [propPan, setPropPan] = useState('')
  const [propAddr, setPropAddr] = useState('')
  const [propCity, setPropCity] = useState('')
  const [propState, setPropState] = useState('Maharashtra')
  const [propPin, setPropPin] = useState('')
  const [smoker, setSmoker] = useState(false)
  const [hospitalized, setHospitalized] = useState(false)

  // Screen 10
  const [nomName, setNomName] = useState('')
  const [nomRel, setNomRel] = useState('')
  const [nomDob, setNomDob] = useState('')

  // Screen 12 - countdown
  const [countdown, setCountdown] = useState(600)
  const [payMethod, setPayMethod] = useState(0)

  // Screen 13
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
      showPage('health')
    }
  }

  // Countdown timer for payment screen
  useEffect(() => {
    if (screen !== 12) return
    setCountdown(600)
    const t = setInterval(() => setCountdown(c => Math.max(0, c - 1)), 1000)
    return () => clearInterval(t)
  }, [screen])

  // Auto-advance loader screens
  useEffect(() => {
    if (screen === 6) {
      const t = setTimeout(() => goTo(7), 2800)
      return () => clearTimeout(t)
    }
    if (screen === 14) {
      const t = setTimeout(() => goTo(15), 3000)
      return () => clearTimeout(t)
    }
  }, [screen])

  const fmtCountdown = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const selectedMembers = MEMBER_OPTIONS.filter(m => members[m.id])
  const quote = selectedQuote !== null ? QUOTES[selectedQuote] : QUOTES[0]
  const addonTotal = activeAddons.reduce((sum, id) => sum + (ADDONS.find(a => a.id === id)?.price ?? 0), 0)
  const basePremium = (quote?.price ?? 799) * 12
  const gst = Math.round(basePremium * 0.18)
  const totalPremium = basePremium + (addonTotal * 12) + gst

  const currentStep = STEP_MAP[screen] ?? 0

  return (
    <div className="pt-16 bg-slate-50 min-h-screen" ref={topRef}>
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-[5%] py-3.5 flex items-center justify-between sticky top-16 z-10">
        <div className="flex items-center gap-3">
          <button onClick={goBack} className="text-slate-400 hover:text-navy-DEFAULT transition-colors bg-transparent border-none cursor-pointer font-body text-xl leading-none">←</button>
          <div>
            <div className="font-heading font-bold text-navy-DEFAULT text-sm">Health Insurance</div>
            <div className="text-[11px] text-slate-400">{STEP_LABELS[currentStep]} · Step {currentStep + 1} of 9</div>
          </div>
        </div>
        {/* Progress dots */}
        <div className="flex gap-1.5">
          {STEP_LABELS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i < currentStep ? 'w-5 bg-health-DEFAULT' :
                i === currentStep ? 'w-8 bg-health-DEFAULT' :
                'w-5 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ─── Screen 0: Phone ─── */}
      {screen === 0 && (
        <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
          <div className="text-5xl mb-4">🏥</div>
          <h2 className="font-heading text-[24px] font-extrabold text-navy-DEFAULT mb-2">Get Health Insurance Quotes</h2>
          <p className="text-slate-500 text-sm mb-8">Compare plans from 20+ insurers. 100% free. No spam.</p>

          <div className="bg-white rounded-2xl shadow-s1 p-6 text-left">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile Number</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-health-DEFAULT focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] transition-all mb-5">
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">+91</div>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="flex-1 px-3.5 py-3 border-none outline-none font-body text-[14.5px] text-navy-DEFAULT bg-white"
                autoFocus
              />
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 mb-5 leading-snug">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-health-DEFAULT" />
              <span>I agree to the <span className="text-health-DEFAULT font-semibold cursor-pointer">Terms & Conditions</span> and authorise FatakSecure to fetch my insurance details via Bima Central (IRDAI).</span>
            </div>

            <button
              disabled={phone.length !== 10 || !consent}
              onClick={() => goTo(1)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Get Free Quotes →
            </button>

            <div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-slate-400">
              <span>🔒 100% Secure</span>
              <span>✅ IRDAI Approved</span>
              <span>🚫 No Spam</span>
            </div>
          </div>
        </div>
      )}

      {/* ─── Screen 1: OTP ─── */}
      {screen === 1 && (
        <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
          <div className="text-5xl mb-4">📱</div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-2">Verify your number</h2>
          <p className="text-sm text-slate-500 mb-8">We've sent a 4-digit OTP to <strong>+91 {phone || 'XXXXXXXXXX'}</strong></p>

          <div className="flex gap-3 justify-center mb-6">
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
                    const next = document.querySelector(`input[data-hotp="${i + 1}"]`) as HTMLInputElement
                    next?.focus()
                  }
                }}
                onKeyDown={e => {
                  if (e.key === 'Backspace' && !val && i > 0) {
                    const prev = document.querySelector(`input[data-hotp="${i - 1}"]`) as HTMLInputElement
                    prev?.focus()
                  }
                }}
                data-hotp={i}
                className="w-14 h-16 border-2 border-slate-200 rounded-xl text-center font-heading text-2xl font-extrabold text-navy-DEFAULT outline-none focus:border-health-DEFAULT focus:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] transition-all bg-white"
              />
            ))}
          </div>

          <p className="text-sm text-slate-400 mb-6">
            Didn't receive? <span className="text-health-DEFAULT font-semibold cursor-pointer" onClick={() => setOtp(['', '', '', ''])}>Resend OTP</span>
          </p>

          <button
            disabled={otp.join('').length !== 4}
            onClick={() => goTo(2)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Verify & Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 2: Member Selection ─── */}
      {screen === 2 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 2 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Who needs cover?</h2>
          <p className="text-sm text-slate-500 mb-6">Select all family members to include in the plan.</p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {MEMBER_OPTIONS.map(m => (
              <div
                key={m.id}
                onClick={() => {
                  if (m.id === 'self') return
                  setMembers(prev => ({ ...prev, [m.id]: !prev[m.id] }))
                }}
                className={`border-2 rounded-2xl p-3.5 cursor-pointer transition-all duration-200 text-center ${
                  members[m.id]
                    ? 'border-health-DEFAULT bg-health-bg'
                    : 'border-slate-200 bg-white hover:border-health-DEFAULT'
                } ${m.id === 'self' ? 'cursor-default' : ''}`}
              >
                <div className="text-2xl mb-1.5">{m.emoji}</div>
                <div className="font-heading text-[12.5px] font-bold text-navy-DEFAULT mb-0.5">{m.name}</div>
                <div className="text-[10.5px] text-slate-400">{m.sub}</div>
                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center text-[9px] text-white mx-auto mt-2 transition-all ${
                  members[m.id] ? 'bg-health-DEFAULT border-health-DEFAULT' : 'border-slate-300'
                }`}>
                  {members[m.id] ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(3)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue → ({selectedMembers.length} member{selectedMembers.length !== 1 ? 's' : ''})
          </button>
        </div>
      )}

      {/* ─── Screen 3: Age Entry ─── */}
      {screen === 3 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 3 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Enter member ages</h2>
          <p className="text-sm text-slate-500 mb-6">Age affects your premium. Enter correct ages for accurate quotes.</p>

          <div className="flex flex-col gap-3 mb-6">
            {selectedMembers.map(m => (
              <div key={m.id} className="bg-white border-[1.5px] border-slate-200 rounded-2xl px-5 py-4 flex items-center gap-4">
                <div className="text-2xl">{m.emoji}</div>
                <div className="flex-1">
                  <div className="font-heading text-sm font-bold text-navy-DEFAULT">{m.name}</div>
                  <div className="text-[11px] text-slate-400">{m.sub}</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setAges(prev => ({ ...prev, [m.id]: Math.max(1, prev[m.id] - 1) }))}
                    className="w-9 h-9 rounded-xl border-[1.5px] border-slate-200 bg-white font-bold text-lg text-slate-500 hover:border-health-DEFAULT hover:text-health-DEFAULT transition-colors cursor-pointer flex items-center justify-center"
                  >−</button>
                  <span className="font-heading text-lg font-extrabold text-navy-DEFAULT w-8 text-center">{ages[m.id]}</span>
                  <button
                    onClick={() => setAges(prev => ({ ...prev, [m.id]: Math.min(80, prev[m.id] + 1) }))}
                    className="w-9 h-9 rounded-xl border-[1.5px] border-slate-200 bg-white font-bold text-lg text-slate-500 hover:border-health-DEFAULT hover:text-health-DEFAULT transition-colors cursor-pointer flex items-center justify-center"
                  >+</button>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(4)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 4: PED ─── */}
      {screen === 4 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 4 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Any pre-existing diseases?</h2>
          <p className="text-sm text-slate-500 mb-6">Select all that apply across all insured members. Honest declaration ensures hassle-free claims.</p>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {PED_CONDITIONS.map(c => (
              <div
                key={c.id}
                onClick={() => setPed(prev => prev.includes(c.id) ? prev.filter(p => p !== c.id) : [...prev, c.id])}
                className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-200 flex items-center gap-3 ${
                  ped.includes(c.id)
                    ? 'border-health-DEFAULT bg-health-bg'
                    : 'border-slate-200 bg-white hover:border-health-DEFAULT'
                }`}
              >
                <span className="text-2xl">{c.emoji}</span>
                <span className={`font-heading text-[12.5px] font-bold flex-1 ${ped.includes(c.id) ? 'text-health-dark' : 'text-navy-DEFAULT'}`}>{c.name}</span>
                <div className={`w-4 h-4 border-2 rounded flex items-center justify-center text-[9px] text-white flex-shrink-0 transition-all ${
                  ped.includes(c.id) ? 'bg-health-DEFAULT border-health-DEFAULT' : 'border-slate-300'
                }`}>
                  {ped.includes(c.id) ? '✓' : ''}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => { setPed([]); goTo(5) }}
            className="w-full py-3 mb-3 rounded-2xl font-heading font-bold text-sm border-2 border-slate-200 cursor-pointer bg-white text-slate-500 hover:border-health-DEFAULT hover:text-health-dark transition-all"
          >
            None of the above ✓
          </button>

          <button
            disabled={ped.length === 0}
            onClick={() => goTo(5)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 5: City ─── */}
      {screen === 5 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 5 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Your city</h2>
          <p className="text-sm text-slate-500 mb-6">Helps us show hospitals in your network and city-specific plans.</p>

          <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-health-DEFAULT focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] transition-all mb-5">
            <span className="pl-3.5 text-slate-400 text-base">🔍</span>
            <input
              type="text"
              placeholder="Search your city…"
              value={citySearch}
              onChange={e => setCitySearch(e.target.value)}
              className="flex-1 px-3 py-3 border-none outline-none font-body text-[14.5px] text-navy-DEFAULT bg-white"
            />
          </div>

          <div className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider mb-3">Popular Cities</div>
          <div className="flex flex-wrap gap-2 mb-5">
            {POPULAR_CITIES.filter(c => !citySearch || c.toLowerCase().includes(citySearch.toLowerCase())).map(c => (
              <button
                key={c}
                onClick={() => { setCity(c); setCitySearch('') }}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold border-[1.5px] transition-all cursor-pointer ${
                  city === c
                    ? 'border-health-DEFAULT bg-health-bg text-health-dark'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-health-DEFAULT'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Pincode <span className="text-[10px] font-normal text-slate-400 normal-case">(Optional)</span></label>
          <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-health-DEFAULT transition-all mb-6">
            <input
              type="text"
              inputMode="numeric"
              placeholder="6-digit pincode"
              value={pincode}
              onChange={e => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="flex-1 px-3.5 py-3 border-none outline-none font-body text-[14.5px] text-navy-DEFAULT bg-white"
            />
          </div>

          <button
            onClick={() => goTo(6)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Find Best Plans →
          </button>
        </div>
      )}

      {/* ─── Screen 6: Loader ─── */}
      {screen === 6 && (
        <div className="max-w-[480px] mx-auto px-5 py-20 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-health-bg" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-health-DEFAULT animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🔍</div>
          </div>
          <h3 className="font-heading text-xl font-extrabold text-navy-DEFAULT mb-2">Fetching best plans…</h3>
          <p className="text-slate-400 text-sm mb-8">Comparing premiums from 20+ insurers</p>
          <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left max-w-xs mx-auto">
            {['Analysing your family profile…', 'Comparing premiums…', 'Checking hospital networks…'].map((msg, i) => (
              <div key={i} className={`flex items-center gap-3 text-sm ${i > 0 ? 'mt-3' : ''}`}>
                <span className="text-base">{i === 0 ? '✅' : i === 1 ? '⏳' : '⏳'}</span>
                <span className={i === 0 ? 'text-navy-DEFAULT font-semibold' : 'text-slate-400'}>{msg}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Screen 7: Quotes ─── */}
      {screen === 7 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 6 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1">Choose your plan</h2>
          <p className="text-sm text-slate-500 mb-4">Sorted by value · ₹10 Lakh cover for {selectedMembers.length} member(s) in {city}</p>

          <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
            {['All Plans', 'Lowest Price', 'Best Coverage', 'No Co-pay'].map(f => (
              <button key={f} className="px-4 py-1.5 border-[1.5px] border-slate-200 rounded-2xl text-xs font-semibold text-slate-500 bg-white hover:border-health-DEFAULT hover:text-health-dark transition-all whitespace-nowrap cursor-pointer">
                {f}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 mb-6">
            {QUOTES.map(q => (
              <div
                key={q.id}
                onClick={() => setSelectedQuote(q.id)}
                className={`bg-white border-[1.5px] rounded-[18px] p-5 cursor-pointer transition-all duration-200 relative ${
                  selectedQuote === q.id ? 'border-health-DEFAULT shadow-s2' : 'border-slate-100 hover:border-health-DEFAULT'
                }`}
              >
                {q.tag && (
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-DEFAULT to-orange-dark text-white text-[10.5px] font-bold px-3 py-1 rounded-xl">
                    {q.tag}
                  </div>
                )}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-[50px] h-[50px] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-extrabold text-navy-DEFAULT text-center leading-snug whitespace-pre flex-shrink-0">
                    {q.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading text-[14.5px] font-bold text-navy-DEFAULT leading-tight">{q.insurer}</div>
                    <div className="text-[12px] font-semibold text-slate-600">{q.plan}</div>
                    <div className="text-xs text-slate-400">{q.desc}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-heading text-[22px] font-extrabold text-navy-DEFAULT leading-none">₹{q.price}</div>
                    <div className="text-xs text-slate-400">/month</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {q.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-4 h-4 rounded-full bg-health-bg text-health-DEFAULT text-[8px] font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
                {selectedQuote === q.id && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                    <button className="flex-1 py-2 rounded-xl border-[1.5px] border-health-DEFAULT text-health-dark font-heading font-bold text-xs bg-white cursor-pointer hover:bg-health-bg transition-colors">
                      View Details
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); goTo(8) }}
                      className="flex-1 py-2 rounded-xl border-none cursor-pointer font-heading font-bold text-xs bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
                    >
                      Buy Now →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            disabled={selectedQuote === null}
            onClick={() => goTo(8)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Proceed to Buy →
          </button>
        </div>
      )}

      {/* ─── Screen 8: Add-ons ─── */}
      {screen === 8 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 6 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Enhance your cover</h2>
          <p className="text-sm text-slate-500 mb-6">Add optional riders for more comprehensive protection.</p>

          {/* Mandatory PA */}
          <div className="bg-health-bg border border-health-DEFAULT/20 rounded-2xl p-4 flex items-start gap-3.5 mb-4">
            <div className="text-2xl flex-shrink-0">🛡️</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-heading text-sm font-bold text-navy-DEFAULT">Personal Accident Cover</span>
                <span className="text-[10px] font-bold bg-health-DEFAULT text-white px-2 py-0.5 rounded-full">Mandatory</span>
              </div>
              <div className="text-xs text-slate-500">₹10 Lakh accident cover included with your health plan. Covers accidental death & disability.</div>
            </div>
            <div className="w-5 h-5 bg-health-DEFAULT rounded-full flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">✓</div>
          </div>

          <div className="text-[11.5px] font-bold text-slate-500 uppercase tracking-wider mb-3">Optional Riders</div>
          <div className="flex flex-col gap-3 mb-6">
            {ADDONS.map(a => (
              <div
                key={a.id}
                onClick={() => setActiveAddons(prev => prev.includes(a.id) ? prev.filter(x => x !== a.id) : [...prev, a.id])}
                className={`border-[1.5px] rounded-2xl p-4 cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                  activeAddons.includes(a.id)
                    ? 'border-health-DEFAULT bg-health-bg'
                    : 'border-slate-100 bg-white hover:border-health-DEFAULT'
                }`}
              >
                <div className="text-2xl flex-shrink-0">{a.emoji}</div>
                <div className="flex-1">
                  <div className="font-heading text-sm font-bold text-navy-DEFAULT mb-0.5">{a.name}</div>
                  <div className="text-xs text-slate-500 leading-snug">{a.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-heading text-sm font-bold text-health-dark">+₹{a.price}/mo</div>
                  <div className={`w-5 h-5 border-2 rounded flex items-center justify-center text-[9px] text-white ml-auto mt-1.5 ${
                    activeAddons.includes(a.id) ? 'bg-health-DEFAULT border-health-DEFAULT' : 'border-slate-300'
                  }`}>
                    {activeAddons.includes(a.id) ? '✓' : ''}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky bottom bar */}
          <div className="bg-white border-t border-slate-100 rounded-2xl shadow-s2 p-4 flex items-center justify-between mb-2">
            <div>
              <div className="text-[11px] text-slate-400">Total Premium</div>
              <div className="font-heading text-xl font-extrabold text-navy-DEFAULT">
                ₹{(quote.price + addonTotal).toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/month</span>
              </div>
            </div>
            <button
              onClick={() => goTo(9)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 9: Proposal Form ─── */}
      {screen === 9 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 7 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Proposal Details</h2>
          <p className="text-sm text-slate-500 mb-6">These details will appear on your policy document.</p>

          {/* Selected plan banner */}
          <div className="bg-health-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-5 border border-health-DEFAULT/20">
            <span className="text-xl">🏢</span>
            <div className="flex-1">
              <div className="font-heading text-sm font-bold text-navy-DEFAULT">{quote.insurer}</div>
              <div className="text-xs text-slate-400">{quote.plan} · ₹10 Lakh</div>
            </div>
            <button onClick={() => goTo(7)} className="text-[11px] text-health-DEFAULT font-semibold cursor-pointer bg-transparent border-none">Change</button>
          </div>

          {/* Proposer Details */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy-DEFAULT mb-4">🙋 Proposer Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Full Name (as per Aadhaar)</label>
            <input type="text" placeholder="Enter full name" value={propName} onChange={e => setPropName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={propDob} onChange={e => setPropDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Gender</label>
                <div className="flex gap-2">
                  {(['Male', 'Female'] as const).map(g => (
                    <button key={g} onClick={() => setPropGender(g)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                        propGender === g ? 'border-health-DEFAULT bg-health-bg text-health-dark' : 'border-slate-200 bg-white text-slate-500'
                      }`}>
                      {g === 'Male' ? '♂' : '♀'} {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email Address</label>
            <input type="email" placeholder="Enter email address" value={propEmail} onChange={e => setPropEmail(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white mb-3.5" />

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">PAN Number <span className="text-[10px] font-normal text-slate-400 normal-case">(Optional — for 80D benefit)</span></label>
            <input type="text" placeholder="ABCDE1234F (optional)" value={propPan}
              onChange={e => setPropPan(e.target.value.toUpperCase().slice(0, 10))} maxLength={10}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white uppercase" />
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <h4 className="font-heading text-sm font-bold text-navy-DEFAULT mb-4">📍 Address Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Residential Address</label>
            <input type="text" placeholder="House no., street name, area" value={propAddr} onChange={e => setPropAddr(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">City</label>
                <input type="text" placeholder="City" value={propCity || city} onChange={e => setPropCity(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">State</label>
                <select value={propState} onChange={e => setPropState(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white">
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Pincode <span className="text-[10px] font-normal text-slate-400 normal-case">(Optional)</span></label>
            <input type="text" inputMode="numeric" placeholder="6-digit pincode" value={propPin} onChange={e => setPropPin(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white" />
          </div>

          {/* Health Declaration */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-6">
            <h4 className="font-heading text-sm font-bold text-navy-DEFAULT mb-4">🩺 Health Declaration</h4>

            <label className="block text-[12px] text-slate-600 mb-2 leading-snug">Have any insured members smoked / consumed tobacco in the last 2 years?</label>
            <div className="flex gap-2 mb-4">
              {[true, false].map(v => (
                <button key={String(v)} onClick={() => setSmoker(v)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    smoker === v ? 'border-health-DEFAULT bg-health-bg text-health-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {v ? 'Yes' : 'No'}
                </button>
              ))}
            </div>

            <label className="block text-[12px] text-slate-600 mb-2 leading-snug">Have any insured members been hospitalised in the last 3 years?</label>
            <div className="flex gap-2">
              {[true, false].map(v => (
                <button key={String(v)} onClick={() => setHospitalized(v)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    hospitalized === v ? 'border-health-DEFAULT bg-health-bg text-health-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {v ? 'Yes' : 'No'}
                </button>
              ))}
            </div>
          </div>

          {/* Sticky bar */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Total Premium</div>
              <div className="font-heading text-xl font-extrabold text-navy-DEFAULT">
                ₹{(quote.price + addonTotal).toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">/month</span>
              </div>
            </div>
            <button
              disabled={!propName || !propDob || !propEmail}
              onClick={() => goTo(10)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 10: Nominee ─── */}
      {screen === 10 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            Step 7 of 9
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Nominee Details</h2>
          <p className="text-sm text-slate-500 mb-6">The nominee will receive any claim payout. Can be changed from your policy dashboard.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-6">
            <h4 className="font-heading text-sm font-bold text-navy-DEFAULT mb-4">👤 Add Nominee</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Nominee Full Name</label>
            <input type="text" placeholder="Enter nominee's full name" value={nomName} onChange={e => setNomName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Relationship</label>
                <select value={nomRel} onChange={e => setNomRel(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white">
                  <option value="">Select</option>
                  {['Spouse', 'Father', 'Mother', 'Son', 'Daughter', 'Sibling', 'Other'].map(r => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={nomDob} onChange={e => setNomDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white" />
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Share (%)</label>
            <input type="number" placeholder="100" defaultValue={100} min={1} max={100}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-health-DEFAULT transition-all bg-white" />
          </div>

          <button
            disabled={!nomName || !nomRel || !nomDob}
            onClick={() => goTo(11)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Review & Proceed →
          </button>
        </div>
      )}

      {/* ─── Screen 11: Summary ─── */}
      {screen === 11 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            📋 Review & Pay
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Policy Summary</h2>
          <p className="text-sm text-slate-500 mb-6">Please review all details before proceeding to payment.</p>

          {/* Summary card */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            <div className="bg-health-bg px-5 py-4 flex items-center gap-3 border-b border-health-DEFAULT/20">
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-[10px] font-extrabold text-navy-DEFAULT whitespace-pre text-center leading-snug">
                {quote.logo}
              </div>
              <div>
                <div className="font-heading font-bold text-navy-DEFAULT text-sm">{quote.insurer}</div>
                <div className="text-xs text-slate-500">{quote.plan} · Family Floater</div>
              </div>
            </div>
            <div className="px-5 py-4">
              {[
                ['Policy Holder', propName || '—'],
                ['Date of Birth', propDob || '—'],
                ['Gender', propGender],
                ['PAN', propPan || '—'],
                ['Address', `${propCity || city}, ${propState}`],
                ['Members Covered', selectedMembers.map(m => m.name).join(' + ')],
                ['Sum Insured', '₹10 Lakh'],
                ['Policy Tenure', '1 Year'],
                ['Add-ons', activeAddons.length > 0 ? `PA Cover + ${activeAddons.length} rider(s)` : 'PA Cover (Mandatory)'],
                ['Nominee', nomName || '—'],
                ['PED Declared', ped.length > 0 ? ped.join(', ') : 'None'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <span className="text-xs text-slate-500 font-medium">{k}</span>
                  <span className="text-xs font-bold text-navy-DEFAULT text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium breakdown */}
          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-4">
            <div className="font-heading text-sm font-bold text-navy-DEFAULT mb-4 flex items-center gap-2">
              <span>💰</span> Premium Breakdown
            </div>
            {[
              ['Base Premium (Annual)', `₹${basePremium.toLocaleString('en-IN')}`],
              ['Add-ons', `₹${(addonTotal * 12).toLocaleString('en-IN')}`],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm py-1.5">
                <span className="text-slate-500">{k}</span>
                <span className="font-semibold text-navy-DEFAULT">{v}</span>
              </div>
            ))}
            <div className="border-t border-slate-100 my-2" />
            <div className="flex justify-between text-sm py-1.5">
              <span className="text-slate-500">Subtotal (excl. GST)</span>
              <span className="font-semibold text-navy-DEFAULT">₹{(basePremium + addonTotal * 12).toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm py-1.5">
              <span className="text-slate-500">GST (18%)</span>
              <span className="font-semibold text-navy-DEFAULT">₹{gst.toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-slate-200 my-2" />
            <div className="flex justify-between">
              <span className="font-heading font-bold text-navy-DEFAULT">Total Payable</span>
              <span className="font-heading text-lg font-extrabold text-navy-DEFAULT">₹{totalPremium.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3.5 flex gap-2.5 items-start mb-5 text-[12.5px] text-emerald-800 leading-snug">
            <span className="flex-shrink-0">💡</span>
            <span>Tax benefit: Claim deduction under Section 80D on this premium. Save up to ₹25,000 in tax this year.</span>
          </div>

          <button
            onClick={() => goTo(12)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Proceed to Pay →
          </button>
        </div>
      )}

      {/* ─── Screen 12: Payment ─── */}
      {screen === 12 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            💳 Secure Payment
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Complete Your Payment</h2>
          <p className="text-sm text-slate-500 mb-5">
            Total: <strong className="text-navy-DEFAULT">₹{totalPremium.toLocaleString('en-IN')}</strong> <span className="text-slate-400 text-xs">(incl. 18% GST · Annual)</span>
          </p>

          <div className="bg-slate-50 rounded-xl px-4 py-2.5 text-xs text-slate-500 text-center mb-5">
            🔒 256-bit SSL Encrypted · RBI Compliant · PCI DSS Certified · IRDAI Approved
          </div>

          <div className="flex flex-col gap-3 mb-5">
            {[
              { ico: '📱', name: 'UPI', sub: 'GPay, PhonePe, Paytm, BHIM, Amazon Pay & more' },
              { ico: '💳', name: 'Debit / Credit Card', sub: 'Visa, Mastercard, RuPay, Amex' },
              { ico: '🏦', name: 'Net Banking', sub: 'All major banks supported' },
              { ico: '💵', name: 'EMI / Buy Now Pay Later', sub: 'Pay ₹999/mo · 0% interest · 12 months' },
            ].map((m, i) => (
              <div
                key={i}
                onClick={() => setPayMethod(i)}
                className={`flex items-center gap-3.5 p-4 border-[1.5px] rounded-2xl cursor-pointer transition-all ${
                  payMethod === i ? 'border-health-DEFAULT bg-health-bg' : 'border-slate-100 bg-white hover:border-health-DEFAULT'
                }`}
              >
                <div className="text-2xl">{m.ico}</div>
                <div>
                  <div className="font-heading text-sm font-bold text-navy-DEFAULT">{m.name}</div>
                  <div className="text-xs text-slate-400">{m.sub}</div>
                </div>
                <div className={`ml-auto w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  payMethod === i ? 'border-health-DEFAULT bg-health-DEFAULT' : 'border-slate-300'
                }`}>
                  {payMethod === i && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-wrap mb-5">
            {['🔐 Encrypted', '✅ IRDAI Compliant', '🔄 Instant Refund', '📋 Policy in 2 min'].map(c => (
              <span key={c} className="bg-slate-100 text-slate-500 text-[11px] font-semibold px-3 py-1.5 rounded-xl">{c}</span>
            ))}
          </div>

          {/* Countdown */}
          <div className="text-center mb-6">
            <p className="text-xs text-slate-400 mb-2">Your quote is reserved for</p>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-health-DEFAULT bg-health-bg font-heading text-lg font-extrabold text-health-dark">
              {fmtCountdown(countdown)}
            </div>
            <p className="text-xs text-slate-400 mt-2">After this, premiums may change</p>
          </div>

          <button
            onClick={() => goTo(13)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform mb-3"
          >
            Pay ₹{totalPremium.toLocaleString('en-IN')} Securely →
          </button>
          <p className="text-center text-[11.5px] text-slate-400">By paying you agree to the insurer's Terms & Policy Wordings. Subject to IRDAI regulations.</p>
        </div>
      )}

      {/* ─── Screen 13: KYC Upload ─── */}
      {screen === 13 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔐</span>
            <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT">KYC Verification</h2>
          </div>
          <p className="text-sm text-slate-500 mb-5">As per IRDAI guidelines, KYC is mandatory to issue your health policy.</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[13px] text-amber-800 leading-snug mb-5">
            <strong className="block mb-1">⚠️ Complete KYC within 48 hours</strong>
            Your payment is reserved. Upload documents below to issue your policy immediately. Amount will be refunded if KYC is not completed.
          </div>

          {[
            { key: 'front', state: kycFront, set: setKycFront, ico: '📄', title: 'Aadhaar Card — Front Side', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
            { key: 'back', state: kycBack, set: setKycBack, ico: '📄', title: 'Aadhaar Card — Back Side', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
            { key: 'pan', state: kycPan, set: setKycPan, ico: '🪪', title: 'PAN Card', sub: 'Required for tax benefit u/s 80D · Maximum size 2 MB' },
          ].map(item => (
            <div
              key={item.key}
              onClick={() => item.set(true)}
              className={`border-2 rounded-2xl p-5 text-center cursor-pointer transition-all mb-4 ${
                item.state ? 'border-health-DEFAULT bg-health-bg' : 'border-dashed border-slate-300 bg-white hover:border-health-DEFAULT'
              }`}
            >
              <div className="text-3xl mb-2">{item.state ? '✅' : item.ico}</div>
              <div className="font-heading text-sm font-bold text-navy-DEFAULT mb-1">{item.title}</div>
              <p className={`text-xs mb-4 ${item.state ? 'text-health-dark font-semibold' : 'text-slate-400'}`}>
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

          <div className="flex items-start gap-2.5 text-[12.5px] text-slate-500 leading-snug mb-6">
            <input type="checkbox" checked={kycConsent} onChange={e => setKycConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-health-DEFAULT" />
            <span>I consent to FatakSecure and its insurance partner collecting and verifying my Aadhaar and PAN as per IRDAI KYC norms.</span>
          </div>

          {/* Sticky KYC bar */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">KYC Status</div>
              <div className="font-heading text-sm font-bold text-navy-DEFAULT">
                {[kycFront, kycBack, kycPan].filter(Boolean).length} of 3 uploaded
              </div>
            </div>
            <button
              disabled={!kycFront || !kycBack || !kycPan || !kycConsent}
              onClick={() => goTo(14)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Verify KYC →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 14: KYC Processing ─── */}
      {screen === 14 && (
        <div className="max-w-[480px] mx-auto px-5 py-20 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-health-bg" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-health-DEFAULT animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🔐</div>
          </div>
          <h3 className="font-heading text-xl font-extrabold text-navy-DEFAULT mb-2">Verifying your KYC…</h3>
          <p className="text-slate-400 text-sm mb-8">Please do not close or refresh this screen.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left max-w-xs mx-auto">
            {[
              { icon: '✅', text: 'Plan selected & confirmed', done: true },
              { icon: '✅', text: 'Proposal submitted', done: true },
              { icon: '✅', text: 'Payment verified', done: true },
              { icon: '⏳', text: 'KYC & underwriting…', done: false },
              { icon: '⏳', text: 'Policy issuance…', done: false },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-3 text-sm ${i > 0 ? 'mt-3' : ''}`}>
                <span className="text-base">{s.icon}</span>
                <span className={s.done ? 'text-navy-DEFAULT font-semibold' : 'text-slate-400'}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Screen 15: Congrats ─── */}
      {screen === 15 && (
        <div className="max-w-[480px] mx-auto px-5 py-10">
          {/* Congrats header */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-heading text-[28px] font-extrabold text-navy-DEFAULT mb-2">Congratulations!</h2>
            <p className="text-slate-500 text-sm mb-4">
              Your <strong>{quote.insurer} {quote.plan}</strong> policy has been issued successfully. You are now covered!
            </p>
            <div className="inline-block bg-health-bg border-2 border-health-DEFAULT/30 rounded-xl px-6 py-2 font-heading text-lg font-extrabold text-health-dark">
              {quote.insurer}
            </div>
          </div>

          {/* Transaction card */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            {[
              ['Amount Paid', `₹${totalPremium.toLocaleString('en-IN')}`, true],
              ['Transaction ID', `FS-HLT-${Date.now().toString().slice(-8)}`, false],
              ['Insurer', `${quote.insurer} Health Insurance`, false],
              ['Policy Holder', propName || '—', false],
              ['Members Covered', selectedMembers.map(m => m.name).join(' + '), false],
              ['Sum Insured', '₹10 Lakh', false],
              ['Policy Valid From', '19 Feb 2026', false],
              ['Policy Valid Till', '18 Feb 2027', false],
            ].map(([k, v, green]) => (
              <div key={k as string} className="flex items-center justify-between px-5 py-3 border-b border-slate-50 last:border-0">
                <span className="text-xs text-slate-500 font-medium">{k}</span>
                <span className={`text-xs font-extrabold ${green ? 'text-emerald-500' : 'text-navy-DEFAULT'}`}>{v}</span>
              </div>
            ))}
          </div>

          {/* Policy doc card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center mb-4">
            <div className="text-3xl mb-2">📑</div>
            <h4 className="font-heading text-sm font-bold text-navy-DEFAULT mb-2">Your Health Insurance Policy</h4>
            <p className="text-xs text-slate-400 mb-4">Your policy document is being generated. You will receive it on WhatsApp and email within 30 minutes.</p>
            <button
              onClick={() => showPage('health')}
              className="w-full max-w-xs mx-auto block py-3 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              📥 View My Policy
            </button>
            <div className="mt-3 text-xs text-slate-400">💬 Policy also sent on WhatsApp to your registered number</div>
          </div>

          <div className="bg-health-bg rounded-xl px-4 py-3.5 text-[13px] text-health-dark leading-snug mb-6">
            <strong>🏥 Cashless Activation:</strong> Your cashless card will be sent via email within 2 working days. For planned hospitalisations, call the insurer's TPA helpline 48 hours in advance.
          </div>

          <div className="text-center">
            <button onClick={() => showPage('home')} className="text-sm font-semibold text-health-DEFAULT bg-transparent border-none cursor-pointer hover:underline">
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
