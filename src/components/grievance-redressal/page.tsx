import React from 'react'
import Tag from '@/components/ui/Tag'

const Page = () => {
  const bimaPortalUrl = 'https://bimabharosa.irdai.gov.in'

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-20 px-[5%] text-center bg-gradient-to-br from-[#2d1057] via-[#44226e] to-[#6b3fa0] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(0,196,180,0.13),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(246,70,45,0.08),transparent_65%)] pointer-events-none" />
        <div className="relative z-10">
          <Tag color="teal" centered>Support</Tag>
          <h1 className="font-heading text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.8px] text-white mt-1">
            Grievance Redressal
          </h1>
          <p className="text-white/60 mt-3 text-base leading-[1.78] max-w-[560px] mx-auto">
            Prompt, transparent, and fair resolution of all customer grievances.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 px-[5%] bg-white">
        <div className="max-w-[860px] mx-auto">

          {/* Introduction */}
          <p className="text-slate-600 text-[15px] leading-[1.78] mb-8 md:mb-10 text-left sm:text-center">
            At FatakSecure (Fatakpay Insurance Solutions Private Limited), we are
            committed to providing prompt, transparent, and fair resolution of
            customer grievances. If you have any concern related to insurance
            policies purchased through us, you may raise a grievance using the
            structure outlined below.
          </p>

          {/* Section heading */}
          <div className="mb-6 md:mb-8">
            <Tag color="teal">Mechanism</Tag>
            <h2 className="font-heading text-xl font-bold text-navy mt-1">
              3-Level Grievance Redressal Mechanism
            </h2>
          </div>

          {/* Level cards */}
          <div className="space-y-5">

            {/* Level 01 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#ffc837] to-[#f6462d] flex items-center justify-center shadow-orange">
                  <span className="text-white font-heading font-bold text-sm">01</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-navy text-[15px] mb-3">
                    FatakSecure – Grievance Redressal Officer (GRO)
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-[1.78] mb-4">
                    If you have any grievance related to services provided by Fatak
                    Secure, you may contact us through the following channels:
                  </p>
                  <div className="space-y-2 text-[14px] text-slate-600">
                    <p>
                      <span className="font-semibold text-navy">Designation:</span>{' '}
                      <span className="text-[#44226e]">Grievance Redressal Officer</span>
                    </p>
                    <p>
                      <span className="font-semibold text-navy">Email:</span>{' '}
                      <a
                        href="mailto:gro@fataksecure.com"
                        className="text-[#44226e] hover:underline"
                      >
                        gro@fataksecure.com
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-navy">Phone:</span>{' '}
                      <a
                        href="tel:+919619476476"
                        className="text-[#44226e] font-medium hover:underline"
                      >
                        +91-9619476476
                      </a>
                    </p>
                    <p className="italic text-slate-500 pt-1 text-[13px]">
                      Turnaround Time (TAT): Your grievance will be acknowledged
                      immediately and resolved within 14 days from the date of receipt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Level 02 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">02</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-navy text-[15px] mb-3">
                    Insurer-Specific Escalation
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-[1.78] mb-3">
                    If your grievance is related to the insurance product, policy terms,
                    premium, benefits, servicing, or claims, and you are not satisfied
                    with the resolution provided by FatakSecure, you may escalate the
                    matter to the respective insurance company.
                  </p>
                  <ul className="space-y-1.5 text-[14px] text-slate-600 list-none">
                    {[
                      'Each insurer has its own Grievance Redressal / Escalation Matrix.',
                      'Contact details of the concerned insurer will be shared with you during escalation.',
                      'You may also directly approach the insurer for resolution which will be shared in the Certificate of Insurance.',
                    ].map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-teal mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Level 03 */}
            <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#44226e] to-[#6b3fa0] flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">03</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-navy text-[15px] mb-3">
                    Bima Bharosa / Insurance Ombudsman
                  </h3>
                  <p className="text-slate-600 text-[14px] leading-[1.78] mb-3">
                    If your grievance remains unresolved after approaching the insurer,
                    you may escalate the matter to Bima Bharosa or the Insurance
                    Ombudsman, as per applicable IRDAI guidelines.
                  </p>
                  <div className="space-y-1.5 text-[14px] text-slate-600">
                    <p>
                      <span className="font-semibold text-navy">Bima Bharosa Portal:</span>{' '}
                      <a
                        href={bimaPortalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#44226e] hover:underline break-all"
                      >
                        {bimaPortalUrl}
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-navy">Insurance Ombudsman:</span>{' '}
                      As per jurisdiction defined by IRDAI
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Page
