'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

export default function LifeBuyPage() {
  const { showPage } = usePage()

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100 px-[5%] py-4 flex items-center gap-3">
        <button onClick={() => showPage('life')} className="text-slate-400 hover:text-navy-DEFAULT transition-colors bg-transparent border-none cursor-pointer font-body text-xl">←</button>
        <div className="font-heading font-bold text-navy-DEFAULT text-sm">Life Insurance Quote</div>
      </div>

      <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
        <div className="text-5xl mb-4">🛡️</div>
        <h2 className="font-heading text-[24px] font-extrabold text-navy-DEFAULT mb-3">Get Your Life Insurance Quote</h2>
        <p className="text-slate-500 mb-8">₹1 Crore term insurance from ₹499/year.</p>

        <div className="bg-white rounded-2xl shadow-s1 p-6 text-left mb-6">
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Date of Birth</label>
            <input type="date" className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-life-DEFAULT transition-all bg-white" />
          </div>
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Annual Income</label>
            <select className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-life-DEFAULT transition-all bg-white">
              <option>₹2–5 Lakh</option>
              <option>₹5–10 Lakh</option>
              <option>₹10–25 Lakh</option>
              <option>₹25+ Lakh</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Sum Assured</label>
            <select className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-life-DEFAULT transition-all bg-white">
              <option>₹25 Lakh</option>
              <option>₹50 Lakh</option>
              <option>₹1 Crore</option>
              <option>₹2 Crore</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile Number</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-life-DEFAULT transition-all">
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">+91</div>
              <input type="tel" placeholder="Mobile number" className="flex-1 px-3.5 py-3 border-none outline-none font-body text-sm text-navy-DEFAULT bg-white" />
            </div>
          </div>
          <button className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-life-DEFAULT to-life-dark text-white hover:-translate-y-0.5 transition-transform">
            Get Life Quotes →
          </button>
        </div>

        <Button variant="ghost" onClick={() => showPage('life')}>← Back to Life Insurance</Button>
      </div>
    </div>
  )
}
