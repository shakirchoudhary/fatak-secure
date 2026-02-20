'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

type Screen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13

const STEP_MAP: Record<number, number> = {
  0: 0, 1: 0,
  2: 1, 3: 1,
  4: 2, 5: 2,
  6: 3,
  7: 4,
  8: 5, 9: 5,
  10: 6, 11: 6,
  12: 7, 13: 7,
}

const STEP_LABELS = ['Phone', 'Plans', 'OD/NCB', 'Add-ons', 'Proposal', 'Payment', 'KYC', 'Policy']

const PLANS: Record<string, { name: string; idv: string; price: string; popular?: boolean }[]> = {
  comp: [
    { name: 'ACKO Insurance', idv: '₹1,90,000', price: '₹4,788', popular: true },
    { name: 'ICICI Lombard', idv: '₹1,90,000', price: '₹5,124' },
    { name: 'SBI General', idv: '₹1,90,000', price: '₹5,340' },
    { name: 'Go Digit Insurance', idv: '₹1,90,000', price: '₹4,920' },
  ],
  od: [
    { name: 'ACKO Insurance', idv: '₹1,90,000', price: '₹1,140' },
    { name: 'ICICI General', idv: '₹1,90,000', price: '₹1,140' },
    { name: 'SBI General', idv: '₹1,90,000', price: '₹1,140', popular: true },
  ],
  tp: [
    { name: 'ACKO Insurance', idv: 'N/A', price: '₹2,072' },
    { name: 'ICICI Lombard', idv: 'N/A', price: '₹2,072' },
    { name: 'Bajaj Allianz', idv: 'N/A', price: '₹2,072', popular: true },
  ],
}

const MOTOR_ADDONS = [
  { id: 'passenger', emoji: '👥', name: 'Passenger Cover', desc: 'Financial protection for passengers in your vehicle if an accident occurs.', price: 220 },
  { id: 'zerodep', emoji: '0️⃣', name: 'Zero Depreciation', desc: 'Your vehicle parts are covered fully, without any value reduction.', price: 129 },
  { id: 'rti', emoji: '🧾', name: 'Return to Invoice Cover', desc: 'Full invoice value returned if your vehicle is stolen or completely damaged.', price: 210 },
  { id: 'engine', emoji: '⚙️', name: 'Engine Protection Cover', desc: 'Protection for engine damage, including pistons, rods and other parts.', price: 299 },
  { id: 'rsa', emoji: '🛞', name: 'Road Side Assistance (RSA)', desc: 'Roadside assistance for flat tyres, fuel needs and breakdowns.', price: 99 },
]

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const STATES = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal']

export default function MotorBuyPage() {
  const router = useRouter()
  const [screen, setScreen] = useState<Screen>(0)
  const [history, setHistory] = useState<Screen[]>([])
  const topRef = useRef<HTMLDivElement>(null)

  // Screen 0
  const [regNo, setRegNo] = useState('')
  const [phone, setPhone] = useState('')
  const [consent, setConsent] = useState(true)

  // Screen 1
  const [otp, setOtp] = useState(['', '', '', ''])

  // Screen 3
  const [planType, setPlanType] = useState<'comp' | 'od' | 'tp'>('comp')
  const [tenure, setTenure] = useState('1 year')
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  // Screen 4 – calendar
  const [calDate, setCalDate] = useState(new Date(2024, 8, 1))
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  // Screen 5 – NCB
  const [madeClaim, setMadeClaim] = useState<'yes' | 'no' | 'ns'>('no')
  const [ncbPct, setNcbPct] = useState(20)

  // Screen 6 – add-ons
  const [activeAddons, setActiveAddons] = useState<string[]>([])

  // Screen 7 – proposal
  const [propName, setPropName] = useState('')
  const [propDob, setPropDob] = useState('')
  const [propGender, setPropGender] = useState<'Male' | 'Female' | 'Other'>('Male')
  const [propEmail, setPropEmail] = useState('')
  const [propAddr, setPropAddr] = useState('')
  const [propState, setPropState] = useState('')
  const [propCity, setPropCity] = useState('')

  // Screen 9 – payment
  const [payMethod, setPayMethod] = useState(0)

  // Screen 10 – countdown
  const [countdown, setCountdown] = useState(5)

  // Screen 11 – KYC
  const [kycFront, setKycFront] = useState(false)
  const [kycBack, setKycBack] = useState(false)
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
      router.push('/motor')
    }
  }

  // Auto-advance loader screen
  useEffect(() => {
    if (screen === 2) {
      const t = setTimeout(() => goTo(3), 2500)
      return () => clearTimeout(t)
    }
    if (screen === 12) {
      const t = setTimeout(() => goTo(13), 3000)
      return () => clearTimeout(t)
    }
  }, [screen])

  // Payment success countdown
  useEffect(() => {
    if (screen !== 10) return
    setCountdown(5)
    const t = setInterval(() => setCountdown(c => {
      if (c <= 1) { clearInterval(t); goTo(11); return 0; }
      return c - 1
    }), 1000)
    return () => clearInterval(t)
  }, [screen])

  const currentPlan = selectedPlan !== null ? PLANS[planType][selectedPlan] : null
  const addonTotal = activeAddons.reduce((s, id) => s + (MOTOR_ADDONS.find(a => a.id === id)?.price ?? 0), 0)
  const basePriceNum = currentPlan ? parseInt(currentPlan.price.replace(/[₹,]/g, '')) : 4788
  const ncbDiscount = Math.round(basePriceNum * ncbPct / 100)
  const subtotal = basePriceNum + addonTotal + 420 - ncbDiscount  // 420 = PA cover
  const gst = Math.round(subtotal * 0.18)
  const total = subtotal + gst

  const currentStep = STEP_MAP[screen] ?? 0

  // Calendar helpers
  const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate()
  const firstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay()

  return (
    <div className="pt-16 bg-slate-50 min-h-screen" ref={topRef}>
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-[5%] py-3.5 flex items-center justify-between sticky top-16 z-10">
        <div className="flex items-center gap-3">
          <button onClick={goBack} className="text-slate-400 hover:text-navy transition-colors bg-transparent border-none cursor-pointer font-body text-xl leading-none">←</button>
          <div>
            <div className="font-heading font-bold text-navy text-sm">Motor Insurance</div>
            <div className="text-[11px] text-slate-400">{STEP_LABELS[currentStep]} · Step {currentStep + 1} of 8</div>
          </div>
        </div>
        {regNo && screen >= 3 && (
          <div className="flex items-center gap-1.5 text-xs font-semibold text-navy bg-motor-bg border border-motor/20 px-3 py-1.5 rounded-xl">
            <span>🚗</span> <span>{regNo}</span>
          </div>
        )}
        <div className="flex gap-1.5">
          {STEP_LABELS.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${
              i < currentStep ? 'w-4 bg-motor' :
              i === currentStep ? 'w-7 bg-motor opacity-50' :
              'w-4 bg-slate-200'
            }`} />
          ))}
        </div>
      </div>

      {/* ─── Screen 0: Landing ─── */}
      {screen === 0 && (
        <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
          <div className="text-5xl mb-4">🚗</div>
          <h2 className="font-heading text-[24px] font-extrabold text-navy mb-2">Every journey deserves protection.</h2>
          <p className="text-[13px] font-bold text-orange mb-2">Buy Vehicle Insurance in 2 Minutes</p>
          <p className="text-slate-500 text-sm mb-8">Enter your vehicle registration number and mobile to get instant quotes from 12+ insurers.</p>

          <div className="bg-white rounded-2xl shadow-s1 p-6 text-left">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Registration No.</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-motor transition-all mb-1.5">
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">IND</div>
              <input
                type="text"
                placeholder="Eg. MH02J/2022"
                value={regNo}
                onChange={e => setRegNo(e.target.value.toUpperCase())}
                className="flex-1 px-3.5 py-3 border-none outline-none font-body text-[14.5px] text-navy bg-white uppercase"
              />
            </div>
            <button onClick={() => setRegNo('')} className="text-[12px] text-motor font-semibold mb-4 bg-transparent border-none cursor-pointer p-0 underline-offset-2 hover:underline">
              Continue without Registration No.
            </button>

            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile No.</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-motor transition-all mb-4">
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">+91</div>
              <input
                type="tel"
                placeholder="Enter your Mobile No."
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                className="flex-1 px-3.5 py-3 border-none outline-none font-body text-[14.5px] text-navy bg-white"
              />
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 mb-5 leading-snug">
              <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-motor" />
              <span>By submitting you agree to our <span className="text-motor font-semibold cursor-pointer">Privacy Policy</span> and <span className="text-motor font-semibold cursor-pointer">Terms & Conditions</span></span>
            </div>

            <button
              disabled={phone.length !== 10 || !consent}
              onClick={() => goTo(1)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Insure Now →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 1: OTP ─── */}
      {screen === 1 && (
        <div className="max-w-[440px] mx-auto px-5 py-10 text-center">
          <div className="bg-white rounded-2xl shadow-s1 p-7">
            <div className="text-4xl mb-3">📱</div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy mb-2">Verify Your Number</h2>
            <p className="text-sm text-slate-500 mb-1">OTP sent to <strong>+91 {phone}</strong></p>
            <p className="text-sm font-bold text-slate-600 mb-4">OTP Verification</p>

            <div className="flex gap-3 justify-center mb-5">
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
                      const next = document.querySelector(`input[data-motp="${i + 1}"]`) as HTMLInputElement
                      next?.focus()
                    }
                  }}
                  onKeyDown={e => {
                    if (e.key === 'Backspace' && !val && i > 0) {
                      const prev = document.querySelector(`input[data-motp="${i - 1}"]`) as HTMLInputElement
                      prev?.focus()
                    }
                  }}
                  data-motp={i}
                  className="w-14 h-16 border-2 border-slate-200 rounded-xl text-center font-heading text-2xl font-extrabold text-navy outline-none focus:border-motor focus:shadow-[0_0_0_3px_rgba(245,158,11,0.12)] transition-all bg-white"
                />
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-5">
              Didn't receive an OTP? <span className="text-motor font-semibold cursor-pointer" onClick={() => setOtp(['', '', '', ''])}>Resend OTP</span>
            </p>

            <button
              disabled={otp.join('').length !== 4}
              onClick={() => goTo(2)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 2: Loader ─── */}
      {screen === 2 && (
        <div className="max-w-[480px] mx-auto px-5 py-24 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-motor-bg" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-motor animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🚗</div>
          </div>
          <h3 className="font-heading text-xl font-extrabold text-navy mb-2">Fetching your quotes...</h3>
          <p className="text-slate-400 text-sm">Please wait while we compare plans from 12+ insurers for your vehicle.</p>
        </div>
      )}

      {/* ─── Screen 3: Plan Listing ─── */}
      {screen === 3 && (
        <div className="max-w-[480px] mx-auto px-5 py-6">
          {/* Vehicle header */}
          <div className="bg-white rounded-2xl border border-slate-100 px-4 py-3.5 flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-motor-bg rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚗</div>
            <div className="flex-1">
              <div className="font-heading text-sm font-bold text-navy">{regNo || 'MH-01-CT-1376'} · Ford Ecosport</div>
              <div className="text-xs text-slate-400">Third Party Expiry: <strong>20 Oct 2025</strong></div>
            </div>
            <button onClick={() => goTo(0)} className="text-xs text-motor font-semibold cursor-pointer bg-transparent border-none">✏️ Edit</button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            <div>
              <div className="text-[10.5px] font-bold text-slate-400 uppercase mb-1">Plan Type</div>
              <select
                value={planType}
                onChange={e => { setPlanType(e.target.value as 'comp' | 'od' | 'tp'); setSelectedPlan(null) }}
                className="w-full px-3 py-2.5 border-[1.5px] border-slate-200 rounded-xl font-body text-[13px] text-navy outline-none focus:border-motor transition-all bg-white"
              >
                <option value="comp">Comprehensive</option>
                <option value="od">Own Damage</option>
                <option value="tp">Third Party</option>
              </select>
            </div>
            <div>
              <div className="text-[10.5px] font-bold text-slate-400 uppercase mb-1">IDV Cover</div>
              <select className="w-full px-3 py-2.5 border-[1.5px] border-slate-200 rounded-xl font-body text-[13px] text-navy outline-none focus:border-motor transition-all bg-white">
                <option>Minimum IDV</option>
                <option>Custom IDV</option>
              </select>
            </div>
            <div>
              <div className="text-[10.5px] font-bold text-slate-400 uppercase mb-1">Tenure</div>
              <select value={tenure} onChange={e => setTenure(e.target.value)}
                className="w-full px-3 py-2.5 border-[1.5px] border-slate-200 rounded-xl font-body text-[13px] text-navy outline-none focus:border-motor transition-all bg-white">
                <option>1 year</option>
                <option>3 years</option>
              </select>
            </div>
          </div>

          {/* Plans */}
          <div className="flex flex-col gap-3.5 mb-4">
            {PLANS[planType].map((p, i) => (
              <div
                key={i}
                onClick={() => setSelectedPlan(i)}
                className={`bg-white border-[1.5px] rounded-[18px] p-5 cursor-pointer transition-all duration-200 relative ${
                  selectedPlan === i ? 'border-motor shadow-s2' : 'border-slate-100 hover:border-motor'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange to-orange-dark text-white text-[10.5px] font-bold px-3 py-1 rounded-xl">⭐ Popular</div>
                )}
                <div className="flex items-center gap-3.5">
                  <div className="w-[50px] h-[50px] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-extrabold text-navy flex-shrink-0 text-center">
                    {p.name.split(' ')[0].toUpperCase()}<br />{p.name.split(' ')[1]?.toUpperCase()?.slice(0, 3) || ''}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading text-[14.5px] font-bold text-navy">{p.name}</div>
                    <div className="text-xs text-slate-400">IDV: {p.idv} · {planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-heading text-[22px] font-extrabold text-navy leading-none">{p.price}</div>
                    <div className="text-xs text-slate-400">excl. GST</div>
                  </div>
                </div>
                {selectedPlan === i && (
                  <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                    <button className="flex-1 py-2 rounded-xl border-[1.5px] border-motor text-motor-dark font-heading font-bold text-xs bg-white cursor-pointer">View Details</button>
                    <button
                      onClick={e => { e.stopPropagation(); goTo(4) }}
                      className="flex-1 py-2 rounded-xl border-none cursor-pointer font-heading font-bold text-xs bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform"
                    >
                      Buy Now →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 text-center">* Prices shown are exclusive of GST (18%). Final amount includes GST.</p>

          <div className="mt-5">
            <button
              disabled={selectedPlan === null}
              onClick={() => goTo(4)}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 4: OD Expiry Calendar ─── */}
      {screen === 4 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-motor-bg text-motor-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            📅 Almost There
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">What is your previous<br />Own Damage expiry date?</h2>
          <p className="text-sm text-slate-500 mb-6">This helps us calculate your new policy start date and NCB eligibility.</p>

          {/* Calendar */}
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <button onClick={() => setCalDate(d => new Date(d.getFullYear(), d.getMonth() - 1, 1))}
                className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-motor hover:text-motor transition-all cursor-pointer bg-white font-bold">‹</button>
              <div className="font-heading text-sm font-bold text-navy">
                {MONTH_NAMES[calDate.getMonth()]} {calDate.getFullYear()}
              </div>
              <button onClick={() => setCalDate(d => new Date(d.getFullYear(), d.getMonth() + 1, 1))}
                className="w-8 h-8 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:border-motor hover:text-motor transition-all cursor-pointer bg-white font-bold">›</button>
            </div>
            <div className="px-4 pb-4">
              <div className="grid grid-cols-7 text-center mt-3 mb-2">
                {DAY_NAMES.map(d => (
                  <div key={d} className="text-[10.5px] font-bold text-slate-400 uppercase py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfMonth(calDate.getFullYear(), calDate.getMonth()) }).map((_, i) => (
                  <div key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth(calDate.getFullYear(), calDate.getMonth()) }).map((_, i) => {
                  const day = i + 1
                  const isSelected = selectedDay === day
                  return (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`h-9 rounded-xl text-sm font-semibold transition-all cursor-pointer border-none ${
                        isSelected ? 'bg-motor text-white' : 'bg-transparent text-navy hover:bg-motor-bg'
                      }`}
                    >
                      {day}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <button onClick={() => setSelectedDay(null)} className="text-sm text-slate-400 cursor-pointer underline bg-transparent border-none mb-5 block">
            Don't know policy expiry date
          </button>

          <button
            disabled={!selectedDay}
            onClick={() => goTo(5)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 5: NCB ─── */}
      {screen === 5 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-motor-bg text-motor-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            💰 NCB Details
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Almost there!</h2>
          <p className="text-sm text-slate-500 mb-6">Tell us about your No Claim Bonus to apply the correct discount on your premium.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 mb-5">
            <div className="font-heading text-sm font-bold text-navy mb-3">Have you made claims last year?</div>
            <div className="flex gap-2 mb-5">
              {([['yes', '✅ Yes'], ['no', '❌ No'], ['ns', '🤔 Not sure']] as const).map(([v, label]) => (
                <button key={v} onClick={() => setMadeClaim(v)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    madeClaim === v ? 'border-motor bg-motor-bg text-motor-dark' : 'border-slate-200 bg-white text-slate-500'
                  }`}>
                  {label}
                </button>
              ))}
            </div>

            <div className="font-heading text-sm font-bold text-navy mb-3">Previous year No Claim Bonus %</div>
            <div className="grid grid-cols-6 gap-2">
              {[0, 20, 25, 35, 45, 50].map(pct => (
                <button key={pct} onClick={() => setNcbPct(pct)}
                  className={`py-2.5 rounded-xl text-sm font-bold border-[1.5px] transition-all cursor-pointer ${
                    ncbPct === pct ? 'border-motor bg-motor text-white' : 'border-slate-200 bg-white text-navy hover:border-motor'
                  }`}>
                  {pct}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => goTo(6)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 6: Add-ons ─── */}
      {screen === 6 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="bg-motor-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-5 border border-motor/20">
            <span className="text-lg">🏢</span>
            <div>
              <div className="font-heading text-sm font-bold text-navy">{currentPlan?.name ?? 'ACKO Insurance'}</div>
              <div className="text-xs text-slate-400">{planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'} · IDV {currentPlan?.idv ?? '₹1,90,000'}</div>
            </div>
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Pick your add-ons</h2>
          <p className="text-sm text-slate-500 mb-5">Customise your coverage. Add-ons are optional — proceed without selecting any.</p>

          {/* Mandatory PA */}
          <div className="bg-motor-bg border border-motor/20 rounded-2xl p-4 flex items-start gap-3.5 mb-3">
            <div className="text-2xl flex-shrink-0">🧑‍⚕️</div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="font-heading text-sm font-bold text-navy">Personal Accident Cover</span>
                <span className="text-[10px] font-bold bg-motor text-white px-2 py-0.5 rounded-full">Mandatory</span>
              </div>
              <div className="text-xs text-slate-500">₹10 Lakhs cover for personal accident. Required by law.</div>
            </div>
            <div className="text-right">
              <div className="font-heading text-sm font-bold text-motor-dark">₹420</div>
              <div className="w-5 h-5 bg-motor rounded-full flex items-center justify-center text-[9px] text-white ml-auto mt-1">✓</div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {MOTOR_ADDONS.map(a => (
              <div
                key={a.id}
                onClick={() => setActiveAddons(prev => prev.includes(a.id) ? prev.filter(x => x !== a.id) : [...prev, a.id])}
                className={`border-[1.5px] rounded-2xl p-4 cursor-pointer transition-all duration-200 flex items-start gap-3.5 ${
                  activeAddons.includes(a.id) ? 'border-motor bg-motor-bg' : 'border-slate-100 bg-white hover:border-motor'
                }`}
              >
                <div className="text-2xl flex-shrink-0">{a.emoji}</div>
                <div className="flex-1">
                  <div className="font-heading text-sm font-bold text-navy mb-0.5">{a.name}</div>
                  <div className="text-xs text-slate-500 leading-snug">{a.desc}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-heading text-sm font-bold text-motor-dark">₹{a.price}</div>
                  <div className={`w-5 h-5 border-2 rounded flex items-center justify-center text-[9px] text-white ml-auto mt-1.5 ${
                    activeAddons.includes(a.id) ? 'bg-motor border-motor' : 'border-slate-300'
                  }`}>{activeAddons.includes(a.id) ? '✓' : ''}</div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => goTo(7)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 7: Proposal Form ─── */}
      {screen === 7 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="bg-motor-bg rounded-xl px-4 py-3 flex items-center gap-3 mb-5 border border-motor/20">
            <span className="text-lg">🏢</span>
            <div className="flex-1">
              <div className="font-heading text-sm font-bold text-navy">{currentPlan?.name ?? 'ACKO Insurance'}</div>
              <div className="text-xs text-slate-400">{planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'} · IDV {currentPlan?.idv ?? '₹1,90,000'}</div>
            </div>
            <button onClick={() => null} className="text-[11px] text-motor font-semibold cursor-pointer bg-transparent border-none">Policy brochure</button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-5">
            <h4 className="font-heading text-[15px] font-extrabold text-navy mb-4 pb-3 border-b-2 border-slate-100">Policy Holder Details</h4>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Name (as per RC)</label>
            <input type="text" placeholder="Enter full name" value={propName} onChange={e => setPropName(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Date of Birth</label>
                <input type="date" value={propDob} onChange={e => setPropDob(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Gender</label>
                <div className="flex gap-1.5">
                  {(['Male', 'Female', 'Other'] as const).map(g => (
                    <button key={g} onClick={() => setPropGender(g)}
                      className={`flex-1 py-3 rounded-xl text-xs font-bold border-[1.5px] transition-all cursor-pointer ${
                        propGender === g ? 'border-motor bg-motor-bg text-motor-dark' : 'border-slate-200 bg-white text-slate-500'
                      }`}>
                      {g === 'Male' ? '♂' : g === 'Female' ? '♀' : '⚧'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Email ID</label>
            <input type="email" placeholder="Enter your email address" value={propEmail} onChange={e => setPropEmail(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white mb-3.5" />

            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">Residential Address</label>
            <input type="text" placeholder="Enter your residential address" value={propAddr} onChange={e => setPropAddr(e.target.value)}
              className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white mb-3.5" />

            <div className="grid grid-cols-2 gap-3 mb-3.5">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">State</label>
                <select value={propState} onChange={e => setPropState(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white">
                  <option value="">Select your state</option>
                  {STATES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">City</label>
                <input type="text" placeholder="Enter city" value={propCity} onChange={e => setPropCity(e.target.value)}
                  className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy outline-none focus:border-motor transition-all bg-white" />
              </div>
            </div>
          </div>

          {/* Sticky bar */}
          <div className="bg-white rounded-2xl shadow-s2 border border-slate-100 p-4 flex items-center justify-between">
            <div>
              <div className="text-[11px] text-slate-400">Total Premium</div>
              <div className="font-heading text-xl font-extrabold text-navy">₹{total.toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-normal">incl. GST</span></div>
            </div>
            <button
              disabled={!propName || !propDob || !propEmail}
              onClick={() => goTo(8)}
              className="py-3 px-6 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* ─── Screen 8: Summary ─── */}
      {screen === 8 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-motor-bg text-motor-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            📋 Review & Pay
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Summary</h2>
          <p className="text-sm text-slate-400 mb-6">{regNo || 'MH-01-CT-1376'} · Ford Ecosport</p>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            <div className="bg-motor-bg px-5 py-4 flex items-center gap-3 border-b border-motor/20">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-[10px] font-extrabold text-navy flex-shrink-0 text-center">ACKO</div>
              <div>
                <div className="font-heading font-bold text-navy text-sm">{currentPlan?.name ?? 'ACKO Insurance'}</div>
                <div className="text-xs text-slate-500">{planType === 'comp' ? 'Third Party · Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'}</div>
              </div>
            </div>
            <div className="px-5 py-4">
              {[
                ['Policy Holder', propName || '—'],
                ['Date of Birth', propDob || '—'],
                ['Gender', propGender],
                ['Email', propEmail || '—'],
                ['Address', `${propCity || 'Mumbai'}, ${propState || 'Maharashtra'}`],
                ['Plan', `${planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'} · ${tenure}`],
                ['IDV', currentPlan?.idv ?? '₹1,90,000'],
                ['Add-ons', `PA Cover${activeAddons.length > 0 ? ` + ${activeAddons.length} add-on(s)` : ''}`],
                ['NCB Discount', `${ncbPct}% (₹${ncbDiscount.toLocaleString('en-IN')} saved)`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                  <span className="text-xs text-slate-500 font-medium">{k}</span>
                  <span className={`text-xs font-bold ${k === 'NCB Discount' ? 'text-emerald-500' : 'text-navy'} text-right max-w-[55%]`}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 mb-5">
            <div className="font-heading text-sm font-bold text-navy mb-4 flex items-center gap-2"><span>💰</span> Premium Details</div>
            {[
              ['Plan Premium', `₹${basePriceNum.toLocaleString('en-IN')}`],
              [`Add-ons (PA${activeAddons.length > 0 ? ` + ${activeAddons.length}` : ''})`, `₹${(addonTotal + 420).toLocaleString('en-IN')}`],
              [`NCB Discount (${ncbPct}%)`, `−₹${ncbDiscount.toLocaleString('en-IN')}`],
            ].map(([k, v]) => (
              <div key={k} className={`flex justify-between text-sm py-1.5 ${k.includes('NCB') ? 'text-emerald-500' : ''}`}>
                <span className="text-slate-500">{k}</span>
                <span className={`font-semibold ${k.includes('NCB') ? 'text-emerald-500' : 'text-navy'}`}>{v}</span>
              </div>
            ))}
            <div className="border-t border-slate-100 my-2" />
            <div className="flex justify-between text-sm py-1.5">
              <span className="text-slate-500">Subtotal (excl. GST)</span>
              <span className="font-semibold text-navy">₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm py-1.5">
              <span className="text-slate-500">GST (18%)</span>
              <span className="font-semibold text-navy">₹{gst.toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-slate-200 my-2" />
            <div className="flex justify-between">
              <span className="font-heading font-bold text-navy">Total Purchase Amount</span>
              <span className="font-heading text-lg font-extrabold text-navy">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button onClick={() => goTo(9)} className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform">
            Proceed to Buy →
          </button>
        </div>
      )}

      {/* ─── Screen 9: Payment ─── */}
      {screen === 9 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="inline-flex items-center gap-2 bg-motor-bg text-motor-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
            💳 Secure Payment
          </div>
          <h2 className="font-heading text-[22px] font-extrabold text-navy mb-1.5">Complete Your Payment</h2>
          <p className="text-sm text-slate-500 mb-5">Total amount: <strong className="text-navy">₹{total.toLocaleString('en-IN')}</strong> (incl. GST)</p>

          <div className="bg-slate-50 rounded-xl px-4 py-2.5 text-xs text-slate-500 text-center mb-5">
            🔒 256-bit SSL encrypted · RBI compliant · PCI DSS certified
          </div>

          <div className="flex flex-col gap-3 mb-5">
            {[
              { ico: '📱', name: 'UPI', sub: 'GPay, PhonePe, Paytm, BHIM & more' },
              { ico: '💳', name: 'Debit / Credit Card', sub: 'Visa, Mastercard, RuPay & more' },
              { ico: '🏦', name: 'Net Banking', sub: 'All major banks supported' },
              { ico: '🔄', name: 'EMI', sub: '0% EMI on select cards' },
            ].map((m, i) => (
              <div key={i} onClick={() => setPayMethod(i)}
                className={`flex items-center gap-3.5 p-4 border-[1.5px] rounded-2xl cursor-pointer transition-all ${
                  payMethod === i ? 'border-motor bg-motor-bg' : 'border-slate-100 bg-white hover:border-motor'
                }`}>
                <div className="text-2xl">{m.ico}</div>
                <div>
                  <div className="font-heading text-sm font-bold text-navy">{m.name}</div>
                  <div className="text-xs text-slate-400">{m.sub}</div>
                </div>
                <div className={`ml-auto w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                  payMethod === i ? 'border-motor bg-motor' : 'border-slate-300'
                }`}>
                  {payMethod === i && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 flex items-center justify-between mb-5">
            <div>
              <div className="text-xs text-slate-400">Paying to FatakPay Digital Pvt. Ltd.</div>
              <div className="font-heading text-2xl font-extrabold text-navy">₹{total.toLocaleString('en-IN')}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400">Order ID</div>
              <div className="text-[12.5px] font-semibold text-navy">FS{Date.now().toString().slice(-10)}</div>
            </div>
          </div>

          <button onClick={() => goTo(10)} className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform">
            🔒 Proceed to Pay →
          </button>
        </div>
      )}

      {/* ─── Screen 10: Payment Success ─── */}
      {screen === 10 && (
        <div className="max-w-[480px] mx-auto px-5 py-20 text-center">
          <div className="w-20 h-20 bg-emerald-50 border-4 border-emerald-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-5">✓</div>
          <div className="font-heading text-[26px] font-extrabold text-navy mb-2">Payment Successful!</div>
          <p className="text-slate-600 text-sm mb-7">Your payment of <strong className="text-navy">₹{total.toLocaleString('en-IN')}</strong> was successful!</p>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-xs mx-auto text-left mb-7">
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-3">Transaction Details</div>
            {[
              ['Amount', `₹${total.toLocaleString('en-IN')}`],
              ['Transaction ID', `FS${Date.now().toString().slice(-10)}`],
              ['Status', '✅ Paid'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-slate-100 last:border-0">
                <span className="text-xs text-slate-500">{k}</span>
                <span className={`text-xs font-bold ${k === 'Status' || k === 'Amount' ? 'text-emerald-500' : 'text-navy'}`}>{v}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 mb-6">
            Taking you to the next step in <span className="font-heading text-[22px] font-extrabold text-motor">{countdown}</span>
          </p>

          <button onClick={() => goTo(11)} className="py-3.5 px-8 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform mx-auto block max-w-xs w-full">
            Complete KYC Verification →
          </button>
        </div>
      )}

      {/* ─── Screen 11: KYC ─── */}
      {screen === 11 && (
        <div className="max-w-[480px] mx-auto px-5 py-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔐</span>
            <h2 className="font-heading text-[22px] font-extrabold text-navy">KYC Verification Required</h2>
          </div>
          <p className="text-sm text-slate-500 mb-5">Upload the Aadhaar Card to continue</p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-[13px] text-amber-800 leading-snug mb-5">
            <strong className="block mb-1">⚠️ Action Required within 48 hours</strong>
            To issue your policy, please complete <strong>KYC verification within 48 hours</strong> of payment. Amount will be refunded if KYC is not completed.
          </div>

          {[
            { key: 'front', state: kycFront, set: setKycFront, ico: '📄', title: 'Front side of the Aadhaar card', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
            { key: 'back', state: kycBack, set: setKycBack, ico: '📄', title: 'Back side of the Aadhaar card', sub: 'Maximum size 2 MB · Click to Scan or Upload' },
          ].map(item => (
            <div key={item.key} onClick={() => item.set(true)}
              className={`border-2 rounded-2xl p-5 text-center cursor-pointer transition-all mb-4 ${
                item.state ? 'border-motor bg-motor-bg' : 'border-dashed border-slate-300 bg-white hover:border-motor'
              }`}>
              <div className="text-3xl mb-2">{item.state ? '✅' : item.ico}</div>
              <div className="font-heading text-sm font-bold text-navy mb-1">{item.title}</div>
              <p className={`text-xs mb-4 ${item.state ? 'text-motor-dark font-semibold' : 'text-slate-400'}`}>
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
            <input type="checkbox" checked={kycConsent} onChange={e => setKycConsent(e.target.checked)} className="mt-0.5 flex-shrink-0 accent-motor" />
            <span>I consent to FatakSecure and its insurance partner collecting and verifying my PAN and Aadhaar.</span>
          </div>

          <button
            disabled={!kycFront || !kycBack || !kycConsent}
            onClick={() => goTo(12)}
            className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
          >
            Continue →
          </button>
        </div>
      )}

      {/* ─── Screen 12: KYC Loader ─── */}
      {screen === 12 && (
        <div className="max-w-[480px] mx-auto px-5 py-24 text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-motor-bg" />
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-motor animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🔐</div>
          </div>
          <h3 className="font-heading text-xl font-extrabold text-navy mb-2">Verifying your KYC…</h3>
          <p className="text-slate-400 text-sm mb-8">Please do not close or leave this screen while we fetch your data.</p>

          <div className="bg-white rounded-2xl border border-slate-100 p-5 text-left max-w-xs mx-auto">
            {[
              { icon: '✅', text: 'Plan selected', done: true },
              { icon: '✅', text: 'Payment completed', done: true },
              { icon: '⏳', text: 'KYC verification...', done: false },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-3 text-sm ${i > 0 ? 'mt-3' : ''}`}>
                <span>{s.icon}</span>
                <span className={s.done ? 'text-navy font-semibold' : 'text-slate-400'}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── Screen 13: Congrats ─── */}
      {screen === 13 && (
        <div className="max-w-[480px] mx-auto px-5 py-10">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="font-heading text-[28px] font-extrabold text-navy mb-2">Congratulations!</h2>
            <p className="text-slate-500 text-sm mb-3">on securing your <strong>
              {planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'} Motor Insurance
            </strong> policy underwritten by</p>
            <div className="inline-block bg-motor-bg border-2 border-motor/30 rounded-xl px-6 py-2 font-heading text-lg font-extrabold text-motor-dark">
              {currentPlan?.name ?? 'ACKO Insurance'}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden mb-4">
            {[
              ['Amount Paid', `₹${total.toLocaleString('en-IN')}`, true],
              ['Transaction ID', `FS${Date.now().toString().slice(-10)}`, false],
              ['Insurer', currentPlan?.name ?? 'ACKO General Insurance', false],
              ['Insured', propName || '—', false],
              ['Policy Valid From', '19 Feb 2026', false],
            ].map(([k, v, green]) => (
              <div key={k as string} className="flex items-center justify-between px-5 py-3 border-b border-slate-50 last:border-0">
                <span className="text-xs text-slate-500 font-medium">{k}</span>
                <span className={`text-xs font-extrabold ${green ? 'text-emerald-500' : 'text-navy'}`}>{v}</span>
              </div>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 text-center mb-4">
            <div className="text-3xl mb-2">📑</div>
            <h4 className="font-heading text-sm font-bold text-navy mb-2">
              {planType === 'comp' ? 'Comprehensive' : planType === 'od' ? 'Own Damage' : 'Third Party'} Motor Insurance Policy
            </h4>
            <p className="text-xs text-slate-400 mb-4">We will update your insurance within 1 or 2 days via email.</p>
            <button
              onClick={() => router.push('/motor')}
              className="w-full max-w-xs mx-auto block py-3 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor to-motor-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              📥 View Document
            </button>
          </div>

          <div className="text-center mt-4">
            <button onClick={() => router.push('/')} className="text-sm font-semibold text-motor bg-transparent border-none cursor-pointer hover:underline">
              ← Back to Home
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
