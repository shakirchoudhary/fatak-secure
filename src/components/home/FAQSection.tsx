import Tag from '@/components/shared/Tag'
import FAQ from '@/components/shared/FAQ'
import { FAQ_ITEMS } from '@/lib/data'

export default function FAQSection() {
  return (
    <section className="py-20 px-[5%] bg-slate-50" id="faq-home">
      <div className="max-w-[700px] mx-auto">
        <Tag>FAQ</Tag>
        <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold leading-[1.1] tracking-[-0.8px] text-navy mb-8">
          Frequently Asked Questions
        </h2>
        <FAQ items={FAQ_ITEMS} />
      </div>
    </section>
  )
}
