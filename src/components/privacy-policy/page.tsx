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
            Privacy Policy
          </h1>
          <p className="text-white/60 mt-3 text-base leading-[1.78] max-w-[520px] mx-auto">
            How we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-14 md:py-20 px-[5%] bg-white">
        <div className="max-w-[860px] mx-auto">
          <div className="space-y-6 md:space-y-8 text-slate-600 text-[14.5px] leading-[1.78]">

            {/* Introduction */}
            <div className="space-y-4">
              <p className="font-semibold text-navy text-[15px]">
                Fatakpay Insurance Solutions Private Limited (Operating under the
                brand name, "FatakSecure")
              </p>

              <p>
                Fatakpay Insurance Solutions Private Limited ("FatakSecure",
                "Company", "we", "our", or "us") respects your privacy and is
                committed to protecting the personal information of users accessing
                our website, mobile applications, and digital platforms
                (collectively, the "Platform"). This Privacy Statement gives you
                specific information about how we protect your privacy, how we treat
                information we collect on the Site that identifies an individual
                user ("Personal Information"), and how we use aggregated information
                when you access or use our Platform and services related to
                insurance distribution, advisory, and allied services ("Services").
              </p>

              <p>
                By registering for or using the site, you signify your acceptance of
                this privacy statement. If you do not agree to this privacy
                statement, you cannot use the site. We reserve the right to modify
                this Statement at any time by posting a notice on the Site's home
                page. (If we consider it appropriate, we may also provide additional
                notice of significant changes.) Your use of the Site after the date
                of the last modification listed at the beginning of this Privacy
                Statement indicates to us that you agree to the changes.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                1. APPLICABILITY ELIGIBILITY
              </h2>
              <ul className="list-disc ml-4 md:ml-6 space-y-1.5">
                <li>You must be 18 years of age or older to use our Services.</li>
                <li>
                  By using our Platform, you represent that the information you
                  provide is accurate and lawful.
                </li>
                <li>
                  If you are acting on behalf of another person (including a
                  minor), you confirm that you have lawful authority to share such
                  information.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                2. INFORMATION WE COLLECT
              </h2>
              <p className="mb-3">We may collect the following types of information</p>

              <p className="font-semibold text-navy mt-4">a) Personal Information</p>

              <div className="mt-3 ml-4">
                <p className="mb-2">
                  Information that can identify you, including but not limited to:
                </p>
                <ul className="list-disc ml-4 md:ml-6 space-y-1.5">
                  <li>Name, email address, phone number</li>
                  <li>Address, city, state, PIN code</li>
                  <li>Date of birth, age, gender</li>
                  <li>
                    Government-issued identification (PAN, Aadhaar, Passport,
                    Driving License), where required for KYC or regulatory
                    purposes
                  </li>
                  <li>
                    Insurance-related details (policy preferences, nominee
                    details, coverage requirements)
                  </li>
                  <li>
                    WhatsApp number (if you opt to communicate via WhatsApp)
                  </li>
                </ul>

                <p className="font-semibold text-navy mt-5 mb-2">b) Sensitive Personal Data</p>
                <p className="mb-2">
                  Where required under law or for insurance issuance:
                </p>
                <ul className="list-disc ml-4 md:ml-6 space-y-1.5 mb-4">
                  <li>Financial details</li>
                  <li>
                    Health-related information (only when necessary for insurance
                    underwriting)
                  </li>
                  <li>KYC documents</li>
                </ul>

                <p className="mb-3">
                  For a better experience, while using our Service, we may require
                  you to provide us with certain personally identifiable
                  information, including but not limited to First Name, Last Name,
                  Email/Phone number. This information is not accessible to other
                  visitors using our Platform, either directly or by submitting a
                  request. We may also request you for your WhatsApp number in the
                  event you want to use our services via WhatsApp. In certain
                  specific cases once you have booked a call with one of our
                  advisors or going through the Insurance journey, the advisors or
                  the journey may ask for certain information. This information
                  may include your location, age, existing diseases, income etc.
                  The information that we request will be retained by us and used
                  as described in this privacy policy. Please note that any
                  information collected by us may be shared with the relevant
                  insurers and or the governing body (IRDAI) or any other service
                  provider to enable us to provide you with the relevant Service.
                </p>

                <p className="mb-3">
                  When you use the Website, Apps, Newsletters and interact with
                  our Services, we may use technology such as that provided by
                  Google Analytics, Mailchimp and other third-party service
                  providers to collect information about your visit to our website
                  and/or Newsletters. In essence, these tools enable us to analyse
                  how you and others interact with our Website, Apps and
                  Newsletters. The information we collect may include:
                </p>

                <ul className="list-disc ml-4 md:ml-6 space-y-1.5">
                  <li>
                    The type and version of browser you use to access our
                    website/newsletter
                  </li>
                  <li>
                    The number of sessions per day and the time spent for each
                    session and on each page
                  </li>
                  <li>Time and date of your visit</li>
                  <li>Internet Protocol Address</li>
                  <li>The service that you visit;</li>
                  <li>
                    The type of device (e.g. iPhone) and operating system (e.g.
                    iOS) you are using
                  </li>
                  <li>Pages visited, session duration, referral source</li>
                  <li>Cookies and analytics data</li>
                  <li>If you opened our newsletters</li>
                  <li>User preferences</li>
                  <li>Which pages you visited; and/or</li>
                  <li>
                    We may also collect information that your browser sends
                    whenever you visit Our service or when you access the service
                    by or through a device.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                3. PURPOSE OF COLLECTION &amp; USE
              </h2>
              <p className="mb-2">We use your information to:</p>
              <ul className="list-disc ml-4 md:ml-6 space-y-1.5">
                <li>
                  Enable us to provide the services through Call, Email, WhatsApp,
                  SMS, and any other digital communication platforms related to
                  the functionalities, product or contracted services, including
                  security updates, when required or reasonable for their
                  implementation;
                </li>
                <li>
                  To manage your account and your registration as user of the
                  service. The personal data you provide can give access to
                  various functionalities of the service that are available to you
                  as a registered user;
                </li>
                <li>For internal record keeping purposes;</li>
                <li>
                  Ensure that content from our Website, Apps and Newsletters is
                  presented in the most effective manner for you and for your
                  device to achieve the most user-friendly navigation experience;
                </li>
                <li>
                  Provide you with marketing information about us and our
                  services;
                </li>
                <li>
                  To provide you with news, special offers, and general
                  information about other product services and event which we
                  offer that are related or similar to those that you have already
                  purchased or enquired about unless you have opted not to receive
                  such information;
                </li>
                <li>
                  To manage your request or to offer different product or services
                  and to attend and manage your request to us;
                </li>
                <li>
                  Notify you about changes to the Website, Apps and Newsletters
                  and the Services;
                </li>
                <li>
                  Carry out our obligations arising out of the Terms of Use;
                </li>
                <li>Defend our servers against malicious attacks;</li>
                <li>
                  To process billing and payment, including sharing with third
                  party payment gateways in connection with Website and/or
                  products and Services;
                </li>
                <li>
                  To improve and maintain our Website and our Services (for
                  example, we track information entered through the "Search"
                  function; this helps us determine which areas of our Website
                  users like best and areas that we may want to enhance; we also
                  will use for trouble-shooting purposes, where applicable);
                  and/or
                </li>
                <li>
                  To resolve disputes, to protect ourselves and other users of our
                  Website and Services, and to enforce our Terms of Use;
                </li>
              </ul>
            </div>

            {/* Section 5 – Cookies (as in original) */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                5. COOKIES &amp; TRACKING TECHNOLOGIES
              </h2>
              <p className="mb-3">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites that you visit and are stored on your
                device's internal memory.
              </p>
              <p className="mb-3">
                This Service does not use these "cookies" explicitly. However, the
                app or the website may use third party code and libraries that use
                "cookies" to collect information and improve their services.
                Cookies are widely used in order to make websites work, or work
                more efficiently, as well as to provide information to the owners
                of the site. Cookies are typically stored on your computer&#39;s
                hard drive. Information collected from cookies is used to evaluate
                the effectiveness of the website, analyse trends and administer
                any platform. The information collected from cookies allows
                websites to determine such things as which parts of the website
                are most visited and what difficulties visitors may experience in
                accessing the website. With this knowledge
              </p>
              <p className="mb-3">
                service providers can improve the quality of your experience on
                the platform by recognizing and delivering more of the most
                desired features and information, as well as by resolving access
                difficulties. We may also use cookies and/or a technology known as
                web bugs or clear gifs, which are typically stored in emails to
                help us confirm your receipt of, and response to, our emails and
                to provide you with a more personalized experience when using our
                Site.
              </p>
              <p className="mb-4">
                You have the option to either accept or refuse these cookies and
                know when a cookie is being sent to your device. If you choose to
                refuse our cookies, you may not be able to use some portions of
                this Service.
              </p>

              <div>
                <p className="mb-2">
                  We may employ third-party companies and individuals and share
                  your personal information in the following situations:
                </p>
                <ul className="list-disc ml-4 md:ml-6 space-y-1.5 mb-4">
                  <li>To facilitate our Service;</li>
                  <li>To provide the Service on our behalf;</li>
                  <li>To perform Service-related services; or</li>
                  <li>To assist us in analyzing how our Service is used.</li>
                </ul>

                <p className="mb-3">
                  When a user decides to buy the policy and fills out an
                  application, the user will be required to fill out forms and
                  provide information. This information may include user name, KYC
                  and other details, etc., however, we do not store any such
                  information collected at such time.
                </p>

                <p>
                  When a user decides to buy the policy and fills out an
                  application, the user will be required to fill out forms and
                  provide information. This information may include user name, KYC
                  and other details, etc., however, we do not store any such
                  information collected at such time.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                6. INFORMATION DISCLOSURE TO PROTECT US AND OTHERS
              </h2>
              <p className="mb-2">We do not sell your personal information.</p>
              <p className="mb-2">
                We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc ml-4 md:ml-6 space-y-1.5">
                <li>
                  <span className="font-semibold text-navy">
                    With insurers, reinsurers, and insurance intermediaries
                  </span>{' '}
                  for policy issuance, servicing, underwriting, or claims
                </li>
                <li>
                  <span className="font-semibold text-navy">With service providers</span>{' '}
                  (technology, analytics, communication, payment gateways)
                  strictly for operational purposes
                </li>
                <li>
                  <span className="font-semibold text-navy">
                    With group companies, affiliates, or partners
                  </span>{' '}
                  under confidentiality obligations
                </li>
                <li>
                  <span className="font-semibold text-navy">
                    With regulators or government authorities,
                  </span>{' '}
                  including IRDAI, where required by law
                </li>
                <li>
                  <span className="font-semibold text-navy">To protect legal rights,</span>{' '}
                  prevent fraud, or comply with court orders or legal processes
                </li>
              </ul>
              <p className="mt-3">
                All third parties are required to maintain confidentiality and use
                information only for authorized purposes.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                7. DATA RETENTION
              </h2>
              <p className="mb-2">We retain personal information:</p>
              <ul className="list-disc ml-4 md:ml-6 space-y-1.5 mb-3">
                <li>For as long as necessary to provide Services</li>
                <li>
                  As required under applicable laws, IRDAI regulations, audits,
                  and compliance obligations
                </li>
                <li>For resolving disputes and enforcing agreements</li>
              </ul>
              <p>
                Once no longer required, information is securely deleted or
                anonymized.
              </p>
            </div>

            {/* Section 8 – Data Security */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                8. Data Security
              </h2>
              <p className="mb-3">
                We implement reasonable physical, technical, and administrative
                security measures to safeguard your information against
                unauthorized access, loss, misuse, or alteration.
              </p>
              <p>
                However, no system is completely secure, and we cannot guarantee
                absolute security of information transmitted over the internet.
              </p>
            </div>

            {/* Section 8 – Your Rights (as in original) */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                8. YOUR RIGHTS
              </h2>
              <p className="mb-2">Subject to applicable laws, you may have the right to:</p>
              <ul className="list-disc ml-4 md:ml-6 space-y-1.5 mb-3">
                <li>Access your personal information</li>
                <li>Request correction or update</li>
                <li>Withdraw consent (where applicable)</li>
                <li>Request deletion, subject to regulatory obligations</li>
                <li>Restrict or object to processing</li>
              </ul>
              <p>
                Requests may be made by contacting us at the details provided
                below. Regulatory requirements may override certain requests.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                9. THIRD-PARTY LINKS
              </h2>
              <p>
                Our Platform may contain links to third-party websites. We are not
                responsible for their content, policies, or data practices. You
                are advised to review their privacy policies independently.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                10. CHILDREN&apos;S PRIVACY
              </h2>
              <p>
                Our Services are not intended for individuals below 18 years of
                age. We do not knowingly collect personal data from minors without
                parental consent. If such data is identified, it will be deleted
                in accordance with applicable law.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                11. INTERNATIONAL USERS
              </h2>
              <p>
                If you access our Platform from outside India, you consent to the
                processing and storage of your information in India or other
                jurisdictions where our service providers operate, subject to
                applicable safeguards.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                12. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will
                be effective upon posting on our Platform. Continued use of our
                Services constitutes acceptance of the revised policy.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="font-heading text-[16px] font-bold text-navy mb-3">
                13. GRIVIANCE REDRESSAL &amp; CONTACT INFORMATION
              </h2>
              <p className="mb-3">
                In accordance with the Information Technology Act, 2000 and
                applicable rules:
              </p>
              <div className="ml-4 space-y-1.5">
                <p>
                  <span className="font-semibold text-navy">Company Name:</span>{' '}
                  Fatakpay Insurance Solutions Private Limited (Brand: FatakSecure)
                </p>
                <p>
                  <span className="font-semibold text-navy">EMAIL:</span>{' '}
                  GRO@fataksecure.com
                </p>
                <p className="font-semibold text-navy">Grievance Redressal Officer</p>
                <p>
                  <span className="font-semibold text-navy">Registered Office Address:</span>{' '}
                  Office no. 23, 2 Floor, Der Deutsche Parkz, Bhandup Village
                  Road, Bhandup (West), Mumbai Suburban (Mumbai) Maharashtra,
                  400078
                </p>
              </div>
              <p className="mt-3">
                You may contact us for any questions, concerns, or complaints
                regarding this Privacy Policy or data handling practices.
              </p>
            </div>

            {/* IRDAI Details */}
            <div className="pt-6 border-t border-slate-200 space-y-1.5">
              <p className="font-semibold text-navy">IRDAI CORPORATE AGENCY LICENSE DETAILS</p>
              <p>FATAKPAY INSURANCE SOLUTIONS PRIVATE LIMITED</p>
              <p>CIN: U66220MH2025PTC441934</p>
              <p>
                IRDAI Registered Corporate Agent (Composite) License No CA1073
                valid till 24th September 2028
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="pb-14 px-[5%] bg-white">
        <div className="max-w-[860px] mx-auto">
          <p className="text-slate-500 text-[13px] leading-[1.78] border-t border-slate-100 pt-6">
            Disclaimer: The information on this website is provided for general
            informational purposes only as a service to the broader internet
            community. It does not constitute insurance or financial advice, and we
            do not guarantee the accuracy, adequacy, or completeness of the
            information provided.
          </p>
        </div>
      </section>
    </>
  )
}

export default Page
