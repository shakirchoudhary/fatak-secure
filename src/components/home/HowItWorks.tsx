import Tag from '@/components/shared/Tag'

const STEPS = [
  {
    n: 1,
    color: '#00C4B4',
    title: 'Choose Your Plan',
    desc: 'Browse health, life, motor or travel plans based on your need and budget.',
  },
  {
    n: 2,
    color: '#0d1b4b',
    title: 'Compare & Select',
    desc: 'Compare premiums from 20+ insurers. Pick the best value plan.',
  },
  {
    n: 3,
    color: '#FF6B35',
    title: 'Fill Your Details',
    desc: 'KYC auto-fills from FatakPay. Just verify — no re-entry needed.',
  },
  {
    n: 4,
    color: '#8B5CF6',
    title: 'Pay & Get Policy',
    desc: 'Pay securely. Policy on WhatsApp & email in under 2 minutes.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-[88px] px-[5%] bg-white" id="how-home">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-0">
          <Tag centered noBar>Process</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy-DEFAULT mb-3">
            Get Insured in 4 Simple Steps
          </h2>
          <p className="text-base text-slate-500 leading-[1.78] max-w-[520px] mx-auto">
            Digitally, in minutes, with zero paperwork.
          </p>
        </div>

        <div className="grid grid-cols-4 mt-14 relative">
          {/* Connector line */}
          <div className="absolute top-[34px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal-DEFAULT to-orange-DEFAULT rounded z-0" />

          {STEPS.map((step) => (
            <div key={step.n} className="text-center px-4 relative z-10 group">
              <div
                className="w-[68px] h-[68px] rounded-full font-heading text-[22px] font-extrabold text-white flex items-center justify-center mx-auto mb-4 border-[3px] border-white shadow-[0_0_0_5px_rgba(13,27,75,0.12)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_5px_rgba(13,27,75,0.12),0_8px_26px_rgba(13,27,75,0.22)]"
                style={{ background: step.color }}
              >
                {step.n}
              </div>
              <h4 className="font-heading text-[15px] font-bold text-navy-DEFAULT mb-1.5">{step.title}</h4>
              <p className="text-[13px] text-slate-500 leading-[1.65]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
