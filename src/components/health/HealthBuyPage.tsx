'use client'

import { useState } from 'react'
import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

type Step = 'members' | 'details' | 'quotes' | 'otp' | 'success'

const QUOTES = [
  { logo: 'HDFC', name: 'HDFC ERGO Optima Secure', plan: '₹10L Sum Insured · Family Floater', price: 12450, features: ['Cashless at 10,000+ hospitals', 'No room rent limits', 'No co-payment'], recommended: true },
  { logo: 'STAR', name: 'Star Family Health Optima', plan: '₹10L Sum Insured · Family Floater', price: 10870, features: ['Cashless at 8,500+ hospitals', '150% SI restoration', 'Annual health checkup'] },
  { logo: 'CARE', name: 'Care Health Floater', plan: '₹10L Sum Insured · Family Floater', price: 9980, features: ['No co-payment', 'Unlimited restoration', 'Free preventive care'] },
  { logo: 'NIVA', name: 'Niva Bupa ReAssure', plan: '₹10L Sum Insured · Family Floater', price: 11200, features: ['Lock the clock feature', 'Lifetime renewability', 'Annual health checkup'] },
]

export default function HealthBuyPage() {
  const { showPage } = usePage()
  const [step, setStep] = useState<Step>('members')
  const [selectedMembers, setSelectedMembers] = useState<string[]>([])
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [selectedQuote, setSelectedQuote] = useState<number | null>(null)

  const memberOptions = [
    { id: 'self', emoji: '👤', name: 'Self', sub: 'Primary member' },
    { id: 'spouse', emoji: '💑', name: 'Spouse', sub: 'Husband / Wife' },
    { id: 'son', emoji: '👦', name: 'Son', sub: 'Male child' },
    { id: 'daughter', emoji: '👧', name: 'Daughter', sub: 'Female child' },
    { id: 'father', emoji: '👴', name: 'Father', sub: 'Biological father' },
    { id: 'mother', emoji: '👵', name: 'Mother', sub: 'Biological mother' },
  ]

  const toggleMember = (id: string) => {
    setSelectedMembers(prev => prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id])
  }

  const inputCls = 'flex-1 px-3.5 py-3 border-none outline-none font-body text-[14.5px] text-navy-DEFAULT bg-white'
  const wrapCls = 'flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-health-DEFAULT focus-within:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] transition-all mb-3.5'

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 px-[5%] py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => showPage('health')} className="text-slate-400 hover:text-navy-DEFAULT transition-colors bg-transparent border-none cursor-pointer font-body text-xl">←</button>
          <div>
            <div className="font-heading font-bold text-navy-DEFAULT text-sm">Health Insurance Quote</div>
            <div className="text-xs text-slate-400">Step {['members','details','quotes','otp','success'].indexOf(step)+1} of 5</div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="flex gap-1.5">
          {(['members','details','quotes','otp','success'] as Step[]).map((s, i) => (
            <div
              key={s}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                ['members','details','quotes','otp','success'].indexOf(step) >= i
                  ? 'w-8 bg-health-DEFAULT'
                  : 'w-8 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-[480px] mx-auto px-5 py-8">
        {/* Step 1: Members */}
        {step === 'members' && (
          <div>
            <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
              Step 1 of 5
            </div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Who needs cover?</h2>
            <p className="text-sm text-slate-500 mb-6">Select all family members to include in the plan.</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {memberOptions.map((m) => (
                <div
                  key={m.id}
                  onClick={() => toggleMember(m.id)}
                  className={`border-2 rounded-2xl p-4 cursor-pointer transition-all duration-200 text-center ${
                    selectedMembers.includes(m.id)
                      ? 'border-health-DEFAULT bg-health-bg'
                      : 'border-slate-200 bg-white hover:border-health-DEFAULT'
                  }`}
                >
                  <div className="text-3xl mb-2">{m.emoji}</div>
                  <div className="font-heading text-[13.5px] font-bold text-navy-DEFAULT mb-0.5">{m.name}</div>
                  <div className="text-[11.5px] text-slate-400">{m.sub}</div>
                  <div className={`w-5 h-5 border-2 rounded-md flex items-center justify-center text-[11px] text-white mx-auto mt-2 transition-all ${
                    selectedMembers.includes(m.id) ? 'bg-health-DEFAULT border-health-DEFAULT' : 'border-slate-300'
                  }`}>
                    {selectedMembers.includes(m.id) ? '✓' : ''}
                  </div>
                </div>
              ))}
            </div>

            <button
              disabled={selectedMembers.length === 0}
              onClick={() => setStep('details')}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 'details' && (
          <div>
            <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
              Step 2 of 5
            </div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Enter your details</h2>
            <p className="text-sm text-slate-500 mb-6">We'll fetch quotes from 20+ insurers in seconds.</p>

            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile Number</label>
            <div className={wrapCls}>
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">+91</div>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className={inputCls}
                maxLength={10}
              />
            </div>

            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Full Name</label>
            <div className={wrapCls}>
              <input type="text" placeholder="Your full name" className={inputCls} />
            </div>

            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Date of Birth</label>
            <div className={wrapCls}>
              <input type="date" className={inputCls} />
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 mb-5 leading-snug">
              <input type="checkbox" className="mt-0.5 flex-shrink-0" defaultChecked />
              <span>I agree to the <a className="text-health-DEFAULT font-semibold">Terms & Conditions</a> and consent to be contacted by FatakSecure.</span>
            </div>

            <button
              onClick={() => { setStep('quotes') }}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              Get My Quotes →
            </button>
          </div>
        )}

        {/* Step 3: Quotes */}
        {step === 'quotes' && (
          <div>
            <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
              Step 3 of 5
            </div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-1.5">Choose your plan</h2>
            <p className="text-sm text-slate-500 mb-6">Sorted by value. All plans include ₹10L cover for {selectedMembers.length} member(s).</p>

            <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
              {['All Plans', 'Lowest Price', 'Best Coverage', 'No Co-pay'].map((f) => (
                <button key={f} className="px-4 py-1.5 border-[1.5px] border-slate-200 rounded-2xl text-xs font-semibold text-slate-500 bg-white hover:border-health-DEFAULT hover:text-health-dark transition-all whitespace-nowrap">
                  {f}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3.5">
              {QUOTES.map((q, i) => (
                <div
                  key={q.logo}
                  onClick={() => setSelectedQuote(i)}
                  className={`bg-white border-[1.5px] rounded-[18px] p-5 cursor-pointer transition-all duration-200 relative ${
                    selectedQuote === i ? 'border-health-DEFAULT shadow-s2' : 'border-slate-100 hover:border-health-DEFAULT'
                  }`}
                >
                  {q.recommended && (
                    <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-DEFAULT to-orange-dark text-white text-[10.5px] font-bold px-3 py-1 rounded-xl">
                      ⭐ Recommended
                    </div>
                  )}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-[50px] h-[50px] rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[11px] font-extrabold text-navy-DEFAULT text-center leading-tight flex-shrink-0">
                      {q.logo}
                    </div>
                    <div className="flex-1">
                      <div className="font-heading text-[15px] font-bold text-navy-DEFAULT">{q.name}</div>
                      <div className="text-xs text-slate-400">{q.plan}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-[22px] font-extrabold text-navy-DEFAULT leading-none">₹{q.price.toLocaleString('en-IN')}</div>
                      <div className="text-xs text-slate-400">/year</div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {q.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-4 h-4 rounded-full bg-health-bg text-health-DEFAULT text-[8px] font-extrabold flex items-center justify-center flex-shrink-0">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              disabled={selectedQuote === null}
              onClick={() => setStep('otp')}
              className="w-full mt-5 py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 transition-transform"
            >
              Proceed to Buy →
            </button>
          </div>
        )}

        {/* Step 4: OTP */}
        {step === 'otp' && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-health-bg text-health-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-xl mb-3">
              Step 4 of 5
            </div>
            <div className="text-5xl mb-4">📱</div>
            <h2 className="font-heading text-[22px] font-extrabold text-navy-DEFAULT mb-2">Verify your number</h2>
            <p className="text-sm text-slate-500 mb-6">We've sent a 6-digit OTP to +91 {phone || 'XXXXXXXXXX'}</p>

            <div className="flex gap-2.5 justify-center mb-5">
              {otp.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={val}
                  onChange={e => {
                    const newOtp = [...otp]
                    newOtp[i] = e.target.value
                    setOtp(newOtp)
                    if (e.target.value && i < 5) (document.querySelector(`input[data-otp="${i+1}"]`) as HTMLInputElement)?.focus()
                  }}
                  data-otp={i}
                  className="otp-box w-12 h-14 border-2 border-slate-200 rounded-xl text-center font-heading text-2xl font-extrabold text-navy-DEFAULT outline-none focus:border-health-DEFAULT focus:shadow-[0_0_0_3px_rgba(14,165,233,0.12)] transition-all"
                />
              ))}
            </div>

            <p className="text-sm text-slate-400 mb-6">
              Didn't receive? <span className="text-health-DEFAULT font-semibold cursor-pointer">Resend OTP</span>
            </p>

            <button
              onClick={() => setStep('success')}
              className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-health-DEFAULT to-health-dark text-white hover:-translate-y-0.5 transition-transform"
            >
              Verify & Continue →
            </button>
          </div>
        )}

        {/* Step 5: Success */}
        {step === 'success' && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-health-bg rounded-full flex items-center justify-center text-4xl mx-auto mb-5">✅</div>
            <h2 className="font-heading text-[26px] font-extrabold text-navy-DEFAULT mb-2">Policy Issued!</h2>
            <p className="text-slate-500 mb-6">Your health insurance policy has been sent to your WhatsApp and email.</p>

            <div className="bg-health-bg border border-health-DEFAULT/20 rounded-2xl p-5 mb-6 text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-navy-DEFAULT">Policy Number</span>
                <span className="text-sm font-extrabold text-health-DEFAULT">FS-HLT-2025-78342</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-navy-DEFAULT">Insurer</span>
                <span className="text-sm text-slate-600">HDFC ERGO</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-navy-DEFAULT">Valid Till</span>
                <span className="text-sm text-slate-600">19 Feb 2026</span>
              </div>
            </div>

            <Button onClick={() => showPage('home')}>← Back to Home</Button>
          </div>
        )}
      </div>
    </div>
  )
}
