import { PARTNERS } from '@/lib/data'

export default function PartnersSection() {
  return (
    <section className="py-[68px] px-[5%] bg-white border-t border-slate-100">
      <div className="max-w-[940px] mx-auto text-center">
        <h2 className="font-heading text-[26px] font-extrabold tracking-[-0.8px] text-navy-DEFAULT mb-2">
          Partnered with India's Best Insurers
        </h2>
        <p className="text-sm text-slate-400">All IRDAI-approved — your claims are never at risk.</p>

        <div className="flex flex-wrap justify-center gap-2.5 mt-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner}
              className="bg-slate-50 border-[1.5px] border-slate-200 rounded-xl px-5 py-2.5 text-[13px] font-semibold text-slate-500 transition-all duration-200 hover:border-navy-DEFAULT hover:text-navy-DEFAULT hover:shadow-s1 cursor-pointer"
            >
              {partner}
            </div>
          ))}
        </div>

        <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-500 mt-6">
          🏛️ <strong className="text-navy-DEFAULT">IRDAI Licensed Web Aggregator</strong>
          &nbsp;|&nbsp; All partners registered &nbsp;|&nbsp; 100% secure
        </div>
      </div>
    </section>
  )
}
