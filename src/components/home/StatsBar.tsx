const STATS = [
  { num: '30', suffix: 'L+', label: 'FatakPay Users' },
  { num: '10', suffix: '+', label: 'Insurer Partners' },
  { num: '99', suffix: '%', label: 'Claim Settlement' },
  { num: '2', suffix: 'min', label: 'Policy Issuance' },
]

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-12 px-[5%]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-4 text-center">
        {STATS.map((stat, i) => (
          <div key={stat.label} className={`py-2.5 px-4 ${i < STATS.length - 1 ? 'border-r border-slate-100' : ''}`}>
            <div className="font-heading text-[44px] font-extrabold text-navy leading-none tracking-[-1.5px]">
              {stat.num}<span className="text-orange">{stat.suffix}</span>
            </div>
            <div className="text-[13px] text-slate-400 mt-1.5 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
