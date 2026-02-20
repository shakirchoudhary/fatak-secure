'use client'

import { usePage } from '@/lib/PageContext'

export default function Footer() {
  const { showPage } = usePage()

  return (
    <footer className="bg-[#44226e] text-white pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div className="mb-4 cursor-pointer" onClick={() => showPage('home')}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fatak-secure-logo.svg"
                alt="FatakSecure"
                style={{ width: 140, height: 'auto', objectFit: 'contain' }}
              />
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">
              FatakSecure is the dedicated insurance vertical of FatakPay — India's fastest-growing digital financial wellness platform. IRDAI Corporate Agent Licensed. Serving gig workers, blue-collar professionals and every Indian seeking simple, affordable protection.
            </p>
            <div className="flex gap-3">
              {[
                { label: 'in', href: 'https://in.linkedin.com/company/fatakpay' },
                { label: 'ig', href: 'https://www.instagram.com/fatakpay/' },
                { label: '𝕏', href: 'https://x.com/FatakPay/' },
                { label: 'fb', href: 'https://www.facebook.com/share/1EpZrAwpJM/' },
                { label: '▶', href: 'https://www.youtube.com/@fatakpay' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center text-xs font-semibold transition-colors hover:bg-white/[0.12] text-white/60 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Health Insurance', page: 'health' as const },
                { label: 'Term Life Insurance', page: 'life' as const },
                { label: 'Car Insurance', page: 'motor' as const },
                { label: 'Bike Insurance', page: 'motor' as const },
                { label: 'Travel Insurance', page: 'travel' as const },
                { label: 'Insurance Glossary', page: 'glossary' as const },
                { label: 'Personal Accident', page: 'health' as const },
                { label: 'Cancer Insurance', page: 'health' as const },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => showPage(item.page)}
                    className="text-[13px] text-white/50 hover:text-[#00C4B4] transition-colors bg-transparent border-none cursor-pointer font-body text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About FatakPay', href: 'https://fatakpay.com/about' },
                { label: 'Claims Support', href: '#' },
                { label: 'Insurance Glossary', href: '#' },
                { label: 'Blog & Tips', href: 'https://fatakpay.com/blog' },
                { label: 'FAQs', href: '#' },
                { label: 'Contact Us', href: 'https://fatakpay.com/contact' },
                { label: 'Careers', href: 'https://fatakpay.com/career' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href !== '#' ? '_blank' : undefined}
                    rel={item.href !== '#' ? 'noopener noreferrer' : undefined}
                    className="text-[13px] text-white/50 hover:text-[#00C4B4] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2.5">
              {[
                'Privacy Policy',
                'Terms & Conditions',
                'Grievance Redressal',
                'IRDAI Disclosure',
                'Fraud Safety',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/50 hover:text-[#00C4B4] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://fatakpay.com/site-map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/50 hover:text-[#00C4B4] transition-colors"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
          <p className="text-[12px] text-white/30">
            © 2026 FatakPay Digital Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://fatakpay.com" target="_blank" rel="noopener noreferrer" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">fatakpay.com</a>
            <a href="mailto:support@fatakpay.com" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">support@fatakpay.com</a>
            <a href="tel:+918880080808" className="text-[12px] text-white/40 hover:text-white/70 transition-colors">+91 888 008 0808</a>
          </div>
        </div>

        <p className="text-[11px] text-white/25 leading-relaxed">
          FatakSecure is the insurance vertical of FatakPay Digital Pvt. Ltd., operating under an IRDAI composite Corporate Agent License. Insurance is the subject matter of solicitation. FatakSecure acts as a Corporate Agent and does not underwrite insurance. All policies are issued by IRDAI-registered insurance companies. Premiums shown are indicative and subject to underwriting. Registered Office: FatakPay Digital Pvt. Ltd., India.
        </p>
      </div>
    </footer>
  )
}
