import React from 'react'
import Tag from '@/components/ui/Tag'

const Page = () => {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-20 px-[5%] text-center bg-gradient-to-br from-[#2d1057] via-[#44226e] to-[#6b3fa0] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(0,196,180,0.13),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(246,70,45,0.08),transparent_65%)] pointer-events-none" />
        <div className="relative z-10">
          <Tag color="teal" centered>Legal</Tag>
          <h1 className="font-heading text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.8px] text-white mt-1">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60 mt-3 text-base leading-[1.78] max-w-[520px] mx-auto">
            Please read these terms carefully before using our platform and services.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 px-[5%] bg-white">
        <div className="max-w-[860px] mx-auto">
          <ol className="space-y-6 md:space-y-8 text-slate-600 text-[14.5px] leading-[1.78] list-decimal list-outside pl-5 md:pl-6 marker:text-base marker:font-semibold marker:text-navy">

            {/* 1. Introduction */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                INTRODUCTION
              </h2>
              <div className="space-y-3">
                <p>
                  These Terms and Conditions ("Terms" or "T&C") govern your access
                  to and use of the website, mobile applications, and digital
                  platforms operated under the brand FatakSecure (collectively,
                  the "Website").
                </p>
                <p>
                  The Website is owned and operated by Fatakpay Insurance
                  Solutions Private Limited, a company incorporated under the
                  Companies Act, 2013, having its registered office at Office No.
                  23, 2nd Floor Der Deutsche Parkz, Subhash Nagar Road, Near Nahur
                  (W) Station, Bhandup West, Mumbai, Maharashtra, India, 400078
                  (hereinafter referred to as "FatakSecure", "Company", "We",
                  "Us", or "Our"). Please review our our privacy policy ("Privacy
                  Policy") as well, to fully understand our privacy practices and
                  how we process your information. It also governs your visit to
                  and use of the Platform and Services, in addition to these
                  Terms.
                </p>
                <p>
                  FatakSecure reserves the right to amend, add or remove any
                  portions of these Terms, from time to time, without notice to
                  you by posting revised Terms on the Platform. It is hereby
                  clarified that you shall be responsible for reviewing these
                  Terms periodically and keeping yourself updated with any
                  changes. Once posted, those changes are effective immediately,
                  unless stated otherwise. Continued access of the Platform or use
                  of the Services constitutes your acceptance of the amended
                  Terms.
                </p>
                <p>
                  By accessing, browsing, or using the Website, you ("You",
                  "User", or "Visitor") acknowledge that you have read,
                  understood, and agree to be bound by these Terms. If you do not
                  agree with any part of these Terms, you must not use the
                  Website.
                </p>
              </div>
            </li>

            {/* 2. Use License */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Use License
              </h2>
              <div className="space-y-3">
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on the Site for personal,
                  non-commercial transitory viewing only. This is the grant of a
                  license, not a transfer of title, and under this license you may
                  not:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Modify or copy the materials.</li>
                  <li>
                    Use the materials for any commercial purpose, or for any
                    public display (commercial or non-commercial).
                  </li>
                  <li>
                    Attempt to decompile or reverse engineer any software
                    contained on Ditto's Site.
                  </li>
                  <li>
                    remove any copyright or other proprietary notations from the
                    materials; or transfer the materials to another person or the
                    materials on any other server.
                  </li>
                </ul>
                <p>
                  This license shall automatically terminate if you violate any of
                  these restrictions and may be terminated by FatakSecure at any
                  time. Upon terminating your viewing of these materials or upon
                  the termination of this license, you must destroy any downloaded
                  materials in your possession whether in electronic or printed
                  format.
                </p>
              </div>
            </li>

            {/* 3. Scope of Services */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Scope of Services
              </h2>
              <div className="space-y-3">
                <p>
                  FatakSecure operates as a{' '}
                  <span className="font-semibold text-navy">
                    technology-enabled insurance distribution and support
                    platform.
                  </span>{' '}
                  The Website may:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>
                    Provide information about insurance products offered by
                    third-party insurers
                  </li>
                  <li>Facilitate comparisons, inquiries, and lead generation</li>
                  <li>
                    Redirect users to insurer platforms or authorized partners
                  </li>
                  <li>
                    Assist with policy servicing, renewal support, and claims
                    assistance (where applicable)
                  </li>
                </ul>
                <p>
                  FatakSecure does not itself underwrite insurance policies. All
                  insurance products are issued by registered insurance companies
                  and are governed by their respective policy terms and
                  conditions.
                </p>
              </div>
            </li>

            {/* 4. Eligibility */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Eligibility
              </h2>
              <div className="space-y-3">
                <p>By using the Services, you represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>You are at least 18 years of age.</li>
                  <li>
                    You have legally competent to enter into a binding contract
                    under Indian law.
                  </li>
                  <li>
                    Any information provided by you is true, accurate, and
                    complete
                  </li>
                </ul>
              </div>
            </li>

            {/* 5. Acceptance of Terms */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Acceptance of Terms
              </h2>
              <div className="space-y-3">
                <p>
                  Your continued use of the Website constitutes your ongoing
                  acceptance of these Terms, including any modifications made from
                  time to time.
                </p>
              </div>
            </li>

            {/* 6. Privacy and Data Protection */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Privacy and Data Protection
              </h2>
              <div className="space-y-3">
                <p>
                  Your use of the Website is also governed by our Privacy Policy,
                  which forms an integral part of these Terms.
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>
                    We may collect and process personal data in accordance with
                    applicable Indian laws, including the Digital Personal Data
                    Protection Act, 2023.
                  </li>
                </ul>
                <p>
                  By using the Website, you consent to such collection, use, and
                  sharing of information.
                </p>
              </div>
            </li>

            {/* 7. Modifications to Terms */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Modifications to Terms
              </h2>
              <div className="space-y-3">
                <p>
                  FatakSecure reserves the right to revise or update these Terms
                  at any time without prior notice. Changes will be effective
                  immediately upon being posted on the Website. Your continued use
                  after such changes constitutes acceptance of the revised Terms.
                </p>
              </div>
            </li>

            {/* 8. Intellectual Property Rights */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Intellectual Property Rights
              </h2>
              <div className="space-y-3">
                <p>
                  FatakSecure reserves the right to revise or update these Terms
                  at any time without prior notice. Changes will be effective
                  immediately upon being posted on the Website. Your continued use
                  after such changes constitutes acceptance of the revised Terms.{' '}
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Text, graphics, logos, images</li>
                  <li>Software, code, design, layout</li>
                  <li>Trademarks, service marks, and brand names</li>
                </ul>
                <p>
                  (collectively, "Content") are the exclusive property of
                  FatakSecure or its licensors and are protected under applicable
                  intellectual property laws.
                </p>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Copy, reproduce, modify, distribute, or publish Content</li>
                  <li>Reverse engineer or exploit any part of the Website</li>
                  <li>
                    Use Content for commercial purposes without prior written
                    consent
                  </li>
                </ul>
              </div>
            </li>

            {/* 9. User Obligations and Restrictions */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                User Obligations and Restrictions
              </h2>
              <div className="space-y-3">
                <p>You agree that you will not:</p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Provide false, misleading, or fraudulent information</li>
                  <li>Upload malicious software, viruses, or harmful code</li>
                  <li>Attempt unauthorized access to systems or data</li>
                  <li>
                    Use the Website for unlawful, abusive, or unethical activities
                  </li>
                  <li>Impersonate another person or entity</li>
                  <li>
                    Interfere with the security or performance of the Website
                  </li>
                </ul>
              </div>
            </li>

            {/* 10. Links */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Links
              </h2>
              <div className="space-y-3">
                <p>
                  The Website may contain links to third-party websites or
                  services ("Linked Sites").
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>These links are provided for convenience only</li>
                  <li>FatakSecure does not control or endorse Linked Sites</li>
                  <li>
                    We are not responsible for their content, accuracy, or
                    practices
                  </li>
                </ul>
                <p>
                  FatakSecure has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by FatakSecure of the site. Accessing Linked Sites
                  is at your own risk and subject to the irrespective terms and
                  policies.
                </p>
              </div>
            </li>

            {/* 11. No Professional Advice */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                No Professional Advice
              </h2>
              <div className="space-y-3">
                <p>
                  Information provided on the Website is for general informational
                  purposes only and should not be construed as:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Legal advice</li>
                  <li>Financial advice</li>
                  <li>Tax advice</li>
                </ul>
                <p>
                  The materials appearing on the Site could include technical,
                  typographical, or photographic errors. FatakSecure does not
                  warrant that any of the materials on its website are accurate,
                  complete or current. FatakSecure may make changes to the
                  materials contained on its website at any time without notice.
                  However, FatakSecure does not make any commitment to update the
                  materials. Insurance decisions should be made after reviewing
                  policy documents and consulting qualified professionals where
                  necessary.
                </p>
              </div>
            </li>

            {/* 12. Disclaimer of Warranties */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Disclaimer of Warranties
              </h2>
              <div className="space-y-3">
                <p>
                  The Website and all Content are provided on an "as is" and "as
                  available" basis. FatakSecure makes no warranties, expressed or
                  implied, and hereby disclaims and negates all other warranties
                  including, without limitation, implied warranties or conditions
                  of merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation of
                  rights.
                </p>
                <p>
                  Further, FatakSecure does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.
                </p>
                <p>
                  To the fullest extent permitted by law, FatakSecure disclaims
                  all warranties, including:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Accuracy or completeness of information</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Availability, reliability, or error-free operation</li>
                </ul>
              </div>
            </li>

            {/* 13. Limitation of Liability */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Limitation of Liability
              </h2>
              <div className="space-y-3">
                <p>
                  To the maximum extent permitted by law, FatakSecure and its
                  supplier shall not be liable for arising out of the use or
                  inability to use the materials on the Site, even if FatakSecure
                  or a FatakSecure authorized representative has been notified
                  orally or in writing of the possibility of such damage:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>
                    Any direct, indirect, incidental, consequential, or punitive
                    damages
                  </li>
                  <li>Loss of profits, data, business, or goodwill</li>
                  <li>
                    Damages arising from reliance on information on the Website
                  </li>
                  <li>Actions or omissions of insurers or third parties</li>
                </ul>
                <p>
                  Your sole remedy for dissatisfaction is to stop using the
                  Website.
                </p>
              </div>
            </li>

            {/* 14. Indemnity */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Indemnity
              </h2>
              <div className="space-y-3">
                <p>
                  You agree to indemnify and hold harmless FatakSecure, its
                  directors, officers, employees, affiliates, and partners from
                  any claims, damages, losses, or expenses arising from:
                </p>
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>Your use of the Website</li>
                  <li>Your violation of these Terms</li>
                  <li>Breach of applicable laws</li>
                  <li>Infringement of third-party rights</li>
                </ul>
              </div>
            </li>

            {/* 15. Termination */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Termination
              </h2>
              <div className="space-y-3">
                <p>
                  FatakSecure may suspend or terminate your access to the Website
                  at any time, with or without notice, for any reason, including
                  breach of these Terms.
                </p>
                <p>
                  Upon termination, all rights granted to you shall immediately
                  cease.
                </p>
              </div>
            </li>

            {/* 16. Governing Law and Jurisdiction */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3">
                <p>
                  These Terms shall be governed by and construed in accordance
                  with the laws of India.
                </p>
                <p>
                  The courts located in Mumbai, India shall have exclusive
                  jurisdiction over all disputes arising out of or relating to
                  these Terms.
                </p>
              </div>
            </li>

            {/* 17. General Provisions */}
            <li>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                General Provisions
              </h2>
              <div className="space-y-3">
                <ul className="list-disc list-inside space-y-1.5 ml-2 md:ml-4">
                  <li>
                    These Terms constitute the entire agreement between you and
                    FatakSecure
                  </li>
                  <li>
                    If any provision is held invalid, the remaining provisions
                    shall remain enforceable
                  </li>
                  <li>
                    Failure to enforce any right shall not constitute a waiver
                  </li>
                  <li>
                    These Terms do not create any partnership, agency, or joint
                    venture
                  </li>
                </ul>
              </div>
            </li>

          </ol>
        </div>
      </section>
    </>
  )
}

export default Page
