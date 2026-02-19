'use client'

import { usePage } from '@/lib/PageContext'
import Button from '@/components/shared/Button'

export default function MotorBuyPage() {
  const { showPage } = usePage()

  return (
    <div className="pt-16 bg-slate-50 min-h-screen">
      <div className="bg-white border-b border-slate-100 px-[5%] py-4 flex items-center gap-3">
        <button onClick={() => showPage('motor')} className="text-slate-400 hover:text-navy-DEFAULT transition-colors bg-transparent border-none cursor-pointer font-body text-xl">←</button>
        <div className="font-heading font-bold text-navy-DEFAULT text-sm">Motor Insurance Quote</div>
      </div>

      <div className="max-w-[480px] mx-auto px-5 py-10 text-center">
        <div className="text-5xl mb-4">🚗</div>
        <h2 className="font-heading text-[24px] font-extrabold text-navy-DEFAULT mb-3">Get Your Motor Quote</h2>
        <p className="text-slate-500 mb-8">Enter your vehicle details to compare quotes from 15+ insurers.</p>

        <div className="bg-white rounded-2xl shadow-s1 p-6 text-left mb-6">
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Vehicle Type</label>
            <select className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-motor-DEFAULT transition-all bg-white">
              <option>Car</option>
              <option>Bike / Scooter</option>
              <option>Commercial Vehicle</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Registration Number</label>
            <input type="text" placeholder="e.g. MH02AB1234" className="w-full px-3.5 py-3 border-[1.5px] border-slate-200 rounded-xl font-body text-sm text-navy-DEFAULT outline-none focus:border-motor-DEFAULT transition-all bg-white uppercase" />
          </div>
          <div className="mb-4">
            <label className="block text-[11.5px] font-bold text-slate-600 uppercase tracking-[0.8px] mb-2">Mobile Number</label>
            <div className="flex items-center border-[1.5px] border-slate-200 rounded-xl overflow-hidden focus-within:border-motor-DEFAULT transition-all">
              <div className="px-3.5 py-3 font-bold text-slate-500 bg-slate-50 border-r border-slate-100 text-sm flex-shrink-0">+91</div>
              <input type="tel" placeholder="Mobile number" className="flex-1 px-3.5 py-3 border-none outline-none font-body text-sm text-navy-DEFAULT bg-white" />
            </div>
          </div>
          <button className="w-full py-3.5 rounded-2xl font-heading font-bold text-sm border-none cursor-pointer bg-gradient-to-br from-motor-DEFAULT to-motor-dark text-white hover:-translate-y-0.5 transition-transform">
            Get Motor Quotes →
          </button>
        </div>

        <Button variant="ghost" onClick={() => showPage('motor')}>← Back to Motor Insurance</Button>
      </div>
    </div>
  )
}
