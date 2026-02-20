const STATS = [
  { num: '30', suffix: 'L+', label: 'FatakPay Users' },
  { num: '10', suffix: '+', label: 'Insurer Partners' },
  { num: '99', suffix: '%', label: 'Claim Settlement' },
  { num: '2', suffix: 'min', label: 'Policy Issuance' },
]

export default function StatsBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-10 md:py-12 px-[5%]">
      <div className="max-w-[1000px] mx-auto grid grid-cols-2 md:grid-cols-4 text-center">
        {STATS.map((stat, i) => {
          const cls = [
            'py-3 px-4',
            // Right border: items 0 and 2 always; items 1 on desktop only
            i === 0 || i === 2 ? 'border-r border-slate-100' : '',
            i === 1 ? 'md:border-r md:border-slate-100' : '',
            // Bottom border for top row on mobile only
            i < 2 ? 'border-b border-slate-100 md:border-b-0' : '',
          ].filter(Boolean).join(' ')
          return (
            <div key={stat.label} className={cls}>
              <div className="font-heading text-[44px] font-extrabold text-navy leading-none tracking-[-1.5px]">
                {stat.num}<span className="text-orange">{stat.suffix}</span>
              </div>
              <div className="text-[13px] text-slate-400 mt-1.5 font-medium">{stat.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
