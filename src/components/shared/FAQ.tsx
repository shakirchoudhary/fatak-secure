'use client'

import { useState } from 'react'
import type { FAQItem } from '@/types'

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3 mt-8">
      {items.map((item, i) => (
        <div
          key={i}
          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${openIndex === i ? 'border-orange-DEFAULT/30' : 'border-slate-100'}`}
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-navy-DEFAULT text-sm hover:bg-slate-50 transition-colors bg-transparent border-none cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <span
              className={`w-6 h-6 rounded-full flex items-center justify-center text-base font-light flex-shrink-0 ml-4 transition-all duration-300 ${
                openIndex === i
                  ? 'bg-orange-DEFAULT text-white rotate-45'
                  : 'bg-slate-100 text-slate-600'
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === i ? 'max-h-[500px] pb-4' : 'max-h-0'
            }`}
          >
            <p className="px-5 text-[13.5px] text-slate-500 leading-[1.78]">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
