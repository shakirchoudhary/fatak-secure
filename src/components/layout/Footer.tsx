'use client'

import { usePage } from '@/lib/PageContext'

export default function Footer() {
  const { showPage } = usePage()

  return (
    <footer className="bg-[#060e2a] text-white pt-16 pb-8">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 cursor-pointer" onClick={() => showPage('home')}>
              <div className="h-8 px-3 bg-white/10 rounded-lg flex items-center gap-1.5">
                <span className="text-white font-heading font-bold text-sm">Fatak</span>
                <span className="text-teal-DEFAULT font-heading font-bold text-sm">Secure</span>
              </div>
            </div>
            <p className="text-[13px] text-white/50 leading-relaxed mb-5">
              India's fastest insurance platform. IRDAI licensed. Policy in 2 minutes.
            </p>
            <div className="flex gap-3">
              {['📘', '🐦', '📸', '▶️'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.09] flex items-center justify-center text-sm transition-colors hover:bg-white/[0.12]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5">
              {[
                { label: '❤️‍🩹 Health Insurance', page: 'health' as const },
                { label: '🛡️ Term Life Insurance', page: 'life' as const },
                { label: '🚗 Motor Insurance', page: 'motor' as const },
                { label: '✈️ Travel Insurance', page: 'travel' as const },
                { label: '⚕️ Personal Accident', page: 'health' as const },
                { label: '🩺 Cancer Insurance', page: 'health' as const },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => showPage(item.page)}
                    className="text-[13px] text-white/50 hover:text-white/90 transition-colors bg-transparent border-none cursor-pointer font-body text-left"
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
              {['About FatakSecure', 'About FatakPay', 'Careers', 'Press', 'Blog', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/50 hover:text-white/90 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {['How to Claim', 'Track Claim', 'Policy Renewal', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[13px] text-white/50 hover:text-white/90 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/[0.08]">
              <div className="text-[11px] text-white/35 mb-1 uppercase tracking-wider">24/7 Helpline</div>
              <a href="tel:1800-123-4567" className="font-heading font-bold text-white text-lg hover:text-teal-light transition-colors">
                1800-123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3.5 py-2 text-[12px] text-white/50">
              🏛️ <strong className="text-white/70">IRDAI Approved</strong> · Corporate Agent
            </div>
          </div>
          <p className="text-[12px] text-white/30">
            © 2025 FatakSecure · A FatakPay Product · All rights reserved
          </p>
        </div>

        <p className="text-[11px] text-white/25 mt-4 leading-relaxed">
          Insurance is the subject matter of solicitation. FatakSecure acts as a Corporate Agent and does not underwrite insurance. 
          All policies are issued by IRDAI-registered insurance companies. Premiums shown are indicative and subject to underwriting.
        </p>
      </div>
    </footer>
  )
}
