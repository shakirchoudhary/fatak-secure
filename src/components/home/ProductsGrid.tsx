'use client'

import { usePage } from '@/lib/PageContext'
import Tag from '@/components/shared/Tag'
import { PRODUCTS } from '@/lib/data'
import type { PageId } from '@/types'

const colorConfig: Record<string, {
  accent: string
  bg: string
  border: string
  check: string
  checkBg: string
  cta: string
  ctaText: string
  bar: string
}> = {
  health: {
    accent: '#0EA5E9', bg: '#EFF9FF', border: '#BAE6FD', check: '#0EA5E9',
    checkBg: '#EFF9FF', cta: '#EFF9FF', ctaText: '#0EA5E9',
    bar: 'from-[#0EA5E9] to-[#38BDF8]',
  },
  life: {
    accent: '#EC4899', bg: '#FFF0F7', border: '#FBCFE8', check: '#EC4899',
    checkBg: '#FFF0F7', cta: '#FFF0F7', ctaText: '#EC4899',
    bar: 'from-[#EC4899] to-[#F472B6]',
  },
  motor: {
    accent: '#F59E0B', bg: '#FFFBEB', border: '#FDE68A', check: '#F59E0B',
    checkBg: '#FFFBEB', cta: '#FFFBEB', ctaText: '#F59E0B',
    bar: 'from-[#F59E0B] to-[#FCD34D]',
  },
  travel: {
    accent: '#10B981', bg: '#ECFDF5', border: '#A7F3D0', check: '#10B981',
    checkBg: '#ECFDF5', cta: '#ECFDF5', ctaText: '#10B981',
    bar: 'from-[#10B981] to-[#34D399]',
  },
  accident: {
    accent: '#8B5CF6', bg: '#F5F3FF', border: '#DDD6FE', check: '#8B5CF6',
    checkBg: '#F5F3FF', cta: '#F5F3FF', ctaText: '#8B5CF6',
    bar: 'from-[#8B5CF6] to-[#A78BFA]',
  },
  cancer: {
    accent: '#EF4444', bg: '#FFF5F5', border: '#FECACA', check: '#EF4444',
    checkBg: '#FFF5F5', cta: '#FFF5F5', ctaText: '#EF4444',
    bar: 'from-[#EF4444] to-[#F87171]',
  },
}

export default function ProductsGrid() {
  const { showPage } = usePage()

  return (
    <section className="py-[88px] px-[5%] bg-slate-50" id="home-prods">
      <div className="max-w-[1180px] mx-auto">
        <div className="text-center mb-[52px]">
          <Tag centered noBar>Our Products</Tag>
          <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-3">
            Insurance for Every Need
          </h2>
          <p className="text-base text-slate-500 leading-[1.78] max-w-[520px] mx-auto">
            Compare plans from India's top insurers. Best price. Instant digital policy.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5">
          {PRODUCTS.map((product) => {
            const c = colorConfig[product.colorClass]
            return (
              <div
                key={product.id}
                className="bg-white rounded-[22px] p-7 pt-7 pb-6 border-[1.5px] border-slate-100 flex flex-col transition-all duration-300 cursor-pointer relative overflow-hidden group hover:-translate-y-1.5 hover:shadow-s3"
                style={{ '--hover-border': c.border } as React.CSSProperties}
                onClick={() => showPage(product.page as PageId)}
              >
                {/* Top color bar */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px] bg-gradient-to-r ${c.bar} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div
                  className="w-[58px] h-[58px] rounded-[15px] flex items-center justify-center text-[26px] mb-4 flex-shrink-0"
                  style={{ background: c.bg }}
                >
                  {product.emoji}
                </div>

                <h3 className="font-heading text-[18px] font-bold text-navy mb-1.5">{product.title}</h3>
                <p className="text-[13px] text-slate-500 leading-[1.65] mb-3.5">{product.description}</p>

                <ul className="flex flex-col gap-1.5 mb-4 list-none">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-[12.5px] text-slate-800 leading-snug">
                      <span
                        className="text-[9.5px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: c.checkBg, color: c.check }}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-3.5 border-t border-slate-100">
                  <div>
                    <small className="text-[11px] text-slate-400 block">Starting at</small>
                    <strong className="font-heading text-[19px] font-extrabold text-navy">
                      {product.startingPrice}<span className="text-sm font-medium text-slate-400">{product.priceUnit}</span>
                    </strong>
                  </div>
                  <span
                    className="inline-flex items-center text-[12.5px] font-bold px-4 py-2 rounded-2xl border-none cursor-pointer transition-transform duration-200 group-hover:translate-x-1"
                    style={{ background: c.cta, color: c.ctaText }}
                  >
                    Explore →
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
