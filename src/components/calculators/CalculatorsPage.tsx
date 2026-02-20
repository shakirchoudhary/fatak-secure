'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/ui/Button'
import { fmtINR, calcCar, calcBike, calcHealth } from '@/lib/calculators'

type TabId = 'car' | 'bike' | 'health'

export default function CalculatorsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabId>('car')

  // Car state
  const [carType, setCarType] = useState('')
  const [carYear, setCarYear] = useState(2023)
  const [carCc, setCarCc] = useState(1200)
  const [carPolicy, setCarPolicy] = useState('comprehensive')
  const [carNcb, setCarNcb] = useState(0)
  const [carCity, setCarCity] = useState('metro')
  const [carResult, setCarResult] = useState<ReturnType<typeof calcCar>>(null)

  // Bike state
  const [bikeCC, setBikeCC] = useState(150)
  const [bikeYear, setBikeYear] = useState(2023)
  const [bikePolicy, setBikePolicy] = useState('comprehensive')
  const [bikeNcb, setBikeNcb] = useState(0)
  const [bikeResult, setBikeResult] = useState<ReturnType<typeof calcBike>>(null)

  // Health state
  const [hPlan, setHPlan] = useState('individual')
  const [hAge, setHAge] = useState(35)
  const [hSi, setHSi] = useState(500000)
  const [hMembers, setHMembers] = useState(1)
  const [hPed, setHPed] = useState('no')
  const [hCity, setHCity] = useState('metro')
  const [hResult, setHResult] = useState<ReturnType<typeof calcHealth>>(null)

  const tabs: { id: TabId; label: string; emoji: string }[] = [
    { id: 'car', label: 'Car Insurance', emoji: '🚗' },
    { id: 'bike', label: 'Bike Insurance', emoji: '🏍️' },
    { id: 'health', label: 'Health Insurance', emoji: '❤️‍🩹' },
  ]

  const inputCls = 'w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-[14.5px] text-navy outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(246,70,45,0.12)] transition-all bg-white'
  const labelCls = 'block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2'

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#2d1057] via-[#44226e] to-[#6b3fa0] py-20 px-[5%] text-center">
        <div className="flex items-center justify-center gap-2 text-xs text-white/[0.45] mb-4">
          <button onClick={() => router.push('/')} className="hover:text-white/80 bg-transparent border-none cursor-pointer font-body text-white/[0.45]">Home</button>
          <span className="text-white/25">›</span>
          <span className="text-white/70">Calculators</span>
        </div>
        <h1 className="font-heading text-[clamp(28px,4vw,48px)] font-extrabold text-white leading-tight tracking-tight mb-3">
          Insurance Premium<br /><span className="text-teal-light">Calculators</span>
        </h1>
        <p className="text-white/[0.65] text-base max-w-[480px] mx-auto">
          Instant, indicative premium estimates for car, bike & health insurance. Based on IRDAI guidelines.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-[800px] mx-auto px-5 -mt-6 relative z-10">
        <div className="flex gap-2 bg-white rounded-2xl p-2 shadow-s2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 rounded-xl font-heading font-bold text-sm border-none cursor-pointer transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-navy text-white'
                  : 'bg-transparent text-slate-500 hover:text-navy'
              }`}
            >
              {tab.emoji} {tab.label}
            </button>
          ))}
        </div>

        {/* Car Calculator */}
        {activeTab === 'car' && (
          <div className="bg-white rounded-2xl shadow-s1 p-7 mt-5">
            <h2 className="font-heading text-xl font-extrabold text-navy mb-6">Car Insurance Calculator</h2>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className={labelCls}>Car Type</label>
                <select className={inputCls} value={carType} onChange={e => setCarType(e.target.value)}>
                  <option value="">Select type</option>
                  <option value="hatchback">Hatchback</option>
                  <option value="sedan">Sedan</option>
                  <option value="suv">SUV</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Year of Purchase</label>
                <select className={inputCls} value={carYear} onChange={e => setCarYear(Number(e.target.value))}>
                  {[2025,2024,2023,2022,2021,2020].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Engine Capacity (CC)</label>
                <select className={inputCls} value={carCc} onChange={e => setCarCc(Number(e.target.value))}>
                  <option value={800}>Upto 800cc</option>
                  <option value={1200}>800–1200cc</option>
                  <option value={1800}>1200–1800cc</option>
                  <option value={2500}>Above 1800cc</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Policy Type</label>
                <select className={inputCls} value={carPolicy} onChange={e => setCarPolicy(e.target.value)}>
                  <option value="comprehensive">Comprehensive</option>
                  <option value="tp">Third Party Only</option>
                  <option value="od">Own Damage Only</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>NCB Discount (%)</label>
                <select className={inputCls} value={carNcb} onChange={e => setCarNcb(Number(e.target.value))}>
                  <option value={0}>0% (New/Claim made)</option>
                  <option value={20}>20% (1 year)</option>
                  <option value={25}>25% (2 years)</option>
                  <option value={35}>35% (3 years)</option>
                  <option value={45}>45% (4 years)</option>
                  <option value={50}>50% (5+ years)</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>City Type</label>
                <select className={inputCls} value={carCity} onChange={e => setCarCity(e.target.value)}>
                  <option value="metro">Metro City</option>
                  <option value="nonmetro">Non-Metro City</option>
                </select>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"
              onClick={() => setCarResult(calcCar({ type: carType, year: carYear, cc: carCc, policy: carPolicy, ncb: carNcb, city: carCity }))}
            >
              Calculate Car Premium
            </button>
            {carResult && (
              <div className="mt-5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="text-center mb-4">
                  <div className="text-sm text-slate-500 mb-1">Estimated Annual Premium (incl. GST)</div>
                  <div className="font-heading text-5xl font-extrabold text-navy">{fmtINR(carResult.premium)}</div>
                  <div className="text-sm text-slate-400 mt-1">IDV (Vehicle Value): {fmtINR(carResult.idv)}</div>
                </div>
                <div className="text-xs text-slate-400 text-center">
                  *TP rates per IRDAI circular. OD varies by insurer. Range: {fmtINR(carResult.rangeMin)} – {fmtINR(carResult.rangeMax)}
                </div>
                <button
                  className="w-full mt-4 bg-navy text-white font-heading font-bold py-3 rounded-xl border-none cursor-pointer hover:bg-navy-mid transition-colors"
                  onClick={() => router.push('/motor/buy')}
                >
                  Get Actual Quote →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Bike Calculator */}
        {activeTab === 'bike' && (
          <div className="bg-white rounded-2xl shadow-s1 p-7 mt-5">
            <h2 className="font-heading text-xl font-extrabold text-navy mb-6">Bike Insurance Calculator</h2>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className={labelCls}>Engine Capacity (CC)</label>
                <select className={inputCls} value={bikeCC} onChange={e => setBikeCC(Number(e.target.value))}>
                  <option value={75}>Upto 75cc</option>
                  <option value={150}>75–150cc</option>
                  <option value={350}>150–350cc</option>
                  <option value={500}>350–500cc</option>
                  <option value={800}>Above 500cc</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Year of Purchase</label>
                <select className={inputCls} value={bikeYear} onChange={e => setBikeYear(Number(e.target.value))}>
                  {[2025,2024,2023,2022,2021].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Policy Type</label>
                <select className={inputCls} value={bikePolicy} onChange={e => setBikePolicy(e.target.value)}>
                  <option value="comprehensive">Comprehensive</option>
                  <option value="tp">Third Party Only</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>NCB Discount (%)</label>
                <select className={inputCls} value={bikeNcb} onChange={e => setBikeNcb(Number(e.target.value))}>
                  <option value={0}>0%</option>
                  <option value={20}>20% (1 year)</option>
                  <option value={25}>25% (2 years)</option>
                  <option value={35}>35% (3 years)</option>
                  <option value={45}>45% (4 years)</option>
                  <option value={50}>50% (5+ years)</option>
                </select>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"
              onClick={() => setBikeResult(calcBike({ cc: bikeCC, year: bikeYear, policy: bikePolicy, ncb: bikeNcb }))}
            >
              Calculate Bike Premium
            </button>
            {bikeResult && (
              <div className="mt-5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="text-center mb-4">
                  <div className="text-sm text-slate-500 mb-1">Estimated Annual Premium (incl. GST)</div>
                  <div className="font-heading text-5xl font-extrabold text-navy">{fmtINR(bikeResult.premium)}</div>
                  <div className="text-sm text-slate-400 mt-1">IDV (Bike Value): {fmtINR(bikeResult.idv)}</div>
                </div>
                <div className="text-xs text-slate-400 text-center">
                  *For new bikes, 5-year TP mandatory. Range: {fmtINR(bikeResult.rangeMin)} – {fmtINR(bikeResult.rangeMax)}
                </div>
                <button
                  className="w-full mt-4 bg-navy text-white font-heading font-bold py-3 rounded-xl border-none cursor-pointer hover:bg-navy-mid transition-colors"
                  onClick={() => router.push('/motor/buy')}
                >
                  Get Actual Quote →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Health Calculator */}
        {activeTab === 'health' && (
          <div className="bg-white rounded-2xl shadow-s1 p-7 mt-5">
            <h2 className="font-heading text-xl font-extrabold text-navy mb-6">Health Insurance Calculator</h2>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className={labelCls}>Plan Type</label>
                <select className={inputCls} value={hPlan} onChange={e => setHPlan(e.target.value)}>
                  <option value="individual">Individual</option>
                  <option value="family">Family Floater</option>
                  <option value="senior">Senior Citizen</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Age of Eldest Member</label>
                <select className={inputCls} value={hAge} onChange={e => setHAge(Number(e.target.value))}>
                  <option value={25}>18–25 years</option>
                  <option value={35}>26–35 years</option>
                  <option value={45}>36–45 years</option>
                  <option value={55}>46–55 years</option>
                  <option value={65}>56–65 years</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Sum Insured</label>
                <select className={inputCls} value={hSi} onChange={e => setHSi(Number(e.target.value))}>
                  <option value={300000}>₹3 Lakh</option>
                  <option value={500000}>₹5 Lakh</option>
                  <option value={1000000}>₹10 Lakh</option>
                  <option value={2000000}>₹20 Lakh</option>
                  <option value={2500000}>₹25 Lakh</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Number of Members</label>
                <select className={inputCls} value={hMembers} onChange={e => setHMembers(Number(e.target.value))}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Member{n>1?'s':''}</option>)}
                </select>
              </div>
              <div>
                <label className={labelCls}>Pre-existing Disease?</label>
                <select className={inputCls} value={hPed} onChange={e => setHPed(e.target.value)}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>City Type</label>
                <select className={inputCls} value={hCity} onChange={e => setHCity(e.target.value)}>
                  <option value="metro">Metro</option>
                  <option value="tier2">Tier 2</option>
                  <option value="tier3">Tier 3/Rural</option>
                </select>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-br from-orange to-orange-dark text-white font-heading font-bold py-3.5 rounded-2xl border-none cursor-pointer hover:-translate-y-0.5 transition-transform duration-200"
              onClick={() => setHResult(calcHealth({ plan: hPlan, age: hAge, si: hSi, members: hMembers, ped: hPed, city: hCity }))}
            >
              Calculate Health Premium
            </button>
            {hResult && (
              <div className="mt-5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <div className="text-center mb-4">
                  <div className="text-sm text-slate-500 mb-1">Estimated Annual Premium (incl. GST)</div>
                  <div className="font-heading text-5xl font-extrabold text-navy">{fmtINR(hResult.annual)}</div>
                  <div className="text-sm text-slate-400 mt-1">Monthly: {fmtINR(hResult.monthly)}/month</div>
                </div>
                <div className="text-xs text-slate-400 text-center">
                  {hMembers} member(s), ₹{(hSi/100000).toFixed(0)}L cover. Actual range: {fmtINR(hResult.rangeMin)} – {fmtINR(hResult.rangeMax)}
                </div>
                <button
                  className="w-full mt-4 bg-navy text-white font-heading font-bold py-3 rounded-xl border-none cursor-pointer hover:bg-navy-mid transition-colors"
                  onClick={() => router.push('/health/buy')}
                >
                  Get Actual Quote →
                </button>
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-8 mb-12">
          <Button onClick={() => router.push('/')}>← Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
