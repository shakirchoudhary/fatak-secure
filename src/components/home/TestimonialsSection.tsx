import Tag from '@/components/ui/Tag'
import { TESTIMONIALS } from '@/lib/data'

export default function TestimonialsSection() {
  return (
    <section className="py-[88px] px-[5%] bg-[#FFF9F5]">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-12">
          <Tag centered noBar>Real Stories</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-3">
            When It Mattered Most,<br />FatakSecure Came Through
          </h2>
          <p className="text-base text-slate-500 leading-[1.78] max-w-[520px] mx-auto">
            Millions of Indians trust us. Here's what they say.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-[20px] p-6 px-5 shadow-s1 border border-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-s2"
            >
              <div className="text-gold text-sm tracking-[2px] mb-3">{'★'.repeat(t.stars)}</div>
              <blockquote className="text-sm text-slate-800 leading-[1.75] italic mb-4 min-h-[72px]">
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-[38px] h-[38px] rounded-full font-heading text-[15px] font-extrabold text-white flex items-center justify-center flex-shrink-0"
                  style={{ background: t.avatarGradient }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-[13.5px] text-navy">{t.name}</div>
                  <div className="text-[11.5px] text-slate-400 mt-0.5">{t.location}</div>
                  <span
                    className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-xl mt-0.5"
                    style={{ background: t.tagBg, color: t.tagColor }}
                  >
                    {t.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
