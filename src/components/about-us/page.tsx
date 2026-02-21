'use client'
import React, { useState } from 'react'
import { Linkedin, X } from 'lucide-react'
import {
  abhishekGandhi,
  aboutUsBgIcons,
  ajitKumar,
  amitGoyal,
  amitLodha,
  bikashChoudhary,
} from '@/assets'
import Image from 'next/image'
import Tag from '@/components/ui/Tag'

const Page = () => {
  const [selectedMember, setSelectedMember] = useState<{
    name: string
    title: string
    image: any
    description: string
    linkedin?: string
  } | null>(null)

  const [showFullDescription, setShowFullDescription] = useState(false)

  const teamMembers = [
    {
      name: 'Amit Lodha',
      title: 'Director',
      image: amitLodha,
      description: `Amit Lodha is the Co-founder and CEO of Fatakpay. He has over 20 years of experience, having worked in Kotak Mahindra Group, Kohlberg Kravis & Roberts and HDFC Bank.
Having spent his career as a Corporate Finance professional working with over 500 large to mid-sized corporates, capital raising and managing and building large team.
 Amit is an MBA by qualification.`,
      linkedin: '#',
    },
    {
      name: 'Amit Goyal',
      title: 'Director',
      image: amitGoyal,
      description: `Amit has over 20 years of experience in Financial Services & Investment Banking. He was also an entrepreneur for 3 years in a family-owned packaging business. Amit also co-founded Ethos Capital (a boutique investment banking firm) after working with Kotak Investment Banking, PWC and Brescon Corporate Advisors.
He is a Chartered Accountant and a Graduate in Commerce.`,
      linkedin: '#',
    },
    {
      name: 'Ajit Kumar',
      title: 'Director',
      image: ajitKumar,
      description: `Ajit Kumar is the COO and a co-founder of FatakPay. He oversees the daily operations of the team and is the force behind our process oriented functions. After spending more than a decade working in retail lending & web analytical solutions for Citibank and Axis Bank, Ajit has gained a deep understanding of the problem faced by most financial companies in India and how the potential benefits being offered still don't reach the masses. This led him to start RupeeCircle (acquired) and now FatakPay which aims to democratizing access to credit so as to empower all Indians. In the years that he has been working in the sector, Ajit has been featured in various publications like the Economic Times, Outlook, Business standard, VC Circle and YourStory and has participated in various talks and forums. Ajit is an alumnus of the prestigious IIT- Bombay.`,
      linkedin: '#',
    },
    {
      name: 'Abhishek Gandhi',
      title: 'Director',
      image: abhishekGandhi,
      description: `An entrepreneur at heart and a financial expert by training, FatakPay is the third company that Abhishek has cofounded over the years. Abhishek is a sought after expert in the Financial domain and has landed coverage in broadcast and digital outlets around the country, including the Economic Times, Radio City, Business Standard, The New Indian Standard, DNA India, Money Control, The Week, Financial Express, YourStory and Inc42 to name a few. More recently, he was awarded the '40 Under 40 for the year 2020' by IAAIF and 101 Top most influential BFSI leaders and 'India's inspiring leaders' award 2021 by ELETS. Abhishek holds a CFA and an MBA from Erasmus University, a BE in Comp Science and has 18+ Yrs of experience in Financial consulting & strategy with Infosys, Nidera and Kalpataru Group.`,
      linkedin: '#',
    },
  ]

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-20 px-[5%] text-center bg-gradient-to-br from-[#2d1057] via-[#44226e] to-[#6b3fa0] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(0,196,180,0.13),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(246,70,45,0.08),transparent_65%)] pointer-events-none" />
        <div className="relative z-10">
          <Tag color="teal" centered>Who We Are</Tag>
          <h1 className="font-heading text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.8px] text-white mt-1">
            About Us
          </h1>
          <p className="text-white/60 mt-3 text-base leading-[1.78] max-w-[540px] mx-auto">
            Bridging India's insurance gap with simple, accessible, and trusted protection for every Indian.
          </p>
        </div>
      </section>

      {/* ── Description ── */}
      <section className="py-14 md:py-20 px-[5%] bg-white">
        <div className="max-w-[760px] mx-auto space-y-5 text-center text-slate-600 leading-[1.78] text-[15px]">
          <p>
            FatakSecure exists to address persistent gaps in India's insurance
            landscape — primarily low penetration, complex products, and a lack of
            consumer trust — especially among gig workers, blue-collar employees,
            and families in Tier II and III cities.
          </p>
          <p>
            Its Vision is to make insurance a foundational pillar of financial
            wellness by offering simple, affordable, and accessible products
            tailored for the needs of "Bharat." The company's mission is
            "Insurance for All" by delivering transparent, user-friendly insurance
            products through digital innovation, personalized recommendations, and
            multilingual support, ensuring that every Indian can confidently
            secure their financial future.
          </p>
          <p>
            FatakSecure's goal is to help solve issues of mis-selling and
            awareness, becoming the most relevant financial wellness partner for
            underserved segments and supporting the government's "Insurance for
            All" initiative.
          </p>
        </div>
      </section>

      {/* ── Vision & Mission ── */}
      <section className="py-14 md:py-20 px-[5%] bg-gradient-to-br from-[#2d1057] to-[#44226e] relative overflow-hidden">
        {/* Decorative icons */}
        <div className="absolute left-6 top-6 md:left-14 md:top-14 opacity-30 pointer-events-none">
          <Image src={aboutUsBgIcons} alt="" className="w-20 h-20" />
        </div>
        <div className="absolute right-6 bottom-6 md:right-14 md:bottom-14 opacity-30 pointer-events-none">
          <Image src={aboutUsBgIcons} alt="" className="w-20 h-20" />
        </div>

        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 shadow-s2">
            {/* Vision */}
            <div className="text-center md:w-1/2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ffc837] to-[#f6462d] flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">👁</span>
              </div>
              <h2 className="font-heading text-xl font-bold text-navy mb-3">
                Our Vision
              </h2>
              <p className="text-slate-600 leading-[1.78] text-[15px]">
                Offering simple, affordable, and accessible products
                tailored for the needs of "Bharat."
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px bg-slate-200 self-stretch" />
            <div className="md:hidden h-px bg-slate-200 w-full" />

            {/* Mission */}
            <div className="text-center md:w-1/2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal-light flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h2 className="font-heading text-xl font-bold text-navy mb-3">
                Our Mission
              </h2>
              <p className="text-slate-600 leading-[1.78] text-[15px]">
                "Insurance for All" by delivering transparent, user-friendly
                insurance products through digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-14 md:py-20 px-[5%] bg-slate-50">
        <div className="max-w-[1180px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Tag color="teal" centered>Leadership</Tag>
            <h2 className="font-heading text-[clamp(26px,3.6vw,42px)] font-extrabold tracking-[-0.6px] text-navy mt-1">
              Team
            </h2>
          </div>

          {/* CEO Profile */}
          <div className="bg-white rounded-2xl p-6 md:p-12 shadow-s1 border border-slate-100 mb-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center relative">
            {/* Decorative border */}
            <div className="w-72 h-72 border border-brand-purple-light absolute rounded-xl overflow-hidden top-14 left-14 -z-0 hidden md:block opacity-20 pointer-events-none" />

            {/* Image */}
            <div className="flex justify-center relative z-10">
              <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-slate-200 rounded-xl overflow-hidden shadow-s2">
                <Image
                  src={bikashChoudhary}
                  alt="Bikash Choudhary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-brand-purple mb-1">
                Bikash Choudhary
              </h3>
              <p className="text-slate-500 mb-5">CEO &amp; Principal Officer</p>

              <div className="h-0.5 w-12 mb-6 bg-gradient-to-r from-[#ffc837] to-[#f6462d] rounded-sm" />

              <p className="text-slate-600 leading-[1.78] text-[15px] mb-5">
                Bikash Choudhary is the CEO &amp; Principal Officer of FatakSecure,
                with over 22 years of experience in actuarial science, risk
                management, and product strategy. He has held senior roles at
                leading insurance companies, including IndiaFirst Life and Future
                Generali Life, and has worked with global firms like Willis Towers
                Watson. Bikash's expertise spans both Indian and international
                markets, and he actively participates in regulatory and industry
                forums. He is focused on developing transparent, customer-centric
                insurance solutions to bridge the protection gap for underserved
                groups such as gig workers and families in Tier II and III cities.
                Bikash holds an M.Tech from the Indian Statistical Institute and
                is an actuary of Fellow of the Institute of Actuaries of India
                (FIAI) and Institute and Faculty of Actuaries, UK (FIA).
              </p>

              <div className="flex items-center gap-4">
                <div className="h-0.5 flex-1 bg-gradient-to-r from-[#ffc837] to-[#f6462d] rounded-sm" />
                <a
                  href="#"
                  className="bg-brand-purple/10 text-brand-purple p-3 rounded-full hover:bg-brand-purple/20 transition-colors shrink-0"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 border border-slate-100 shadow-s1 text-center cursor-pointer transition-all hover:-translate-y-1 hover:shadow-s2"
                onClick={() => {
                  setSelectedMember(member)
                  setShowFullDescription(false)
                }}
              >
                <div className="w-full aspect-square bg-slate-200 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-heading font-bold text-navy text-[15px]">{member.name}</h4>
                <p className="text-slate-500 text-[13px] mt-0.5">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Member Modal ── */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl p-5 sm:p-8 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-s3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
              {/* Image */}
              <div className="flex justify-center">
                <div className="w-full max-w-[220px] sm:max-w-xs aspect-square rounded-xl overflow-hidden bg-slate-200">
                  <Image
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-brand-purple mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-slate-500 text-base sm:text-lg mb-4">
                    {selectedMember.title}
                  </p>

                  <div className="h-0.5 w-12 mb-5 bg-gradient-to-r from-[#ffc837] to-[#f6462d] rounded-sm" />

                  <p
                    className="text-[14px] md:text-[15px] text-slate-600 leading-[1.78] text-justify"
                    style={
                      !showFullDescription && selectedMember.description.length > 500
                        ? {
                            display: '-webkit-box',
                            WebkitLineClamp: 6,
                            WebkitBoxOrient: 'vertical' as const,
                            overflow: 'hidden',
                          }
                        : {}
                    }
                  >
                    {selectedMember.description}
                  </p>

                  {selectedMember.description.length > 500 && (
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className="text-brand-purple hover:underline mt-2 text-sm font-medium"
                    >
                      {showFullDescription ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>

                {/* Bottom line + LinkedIn */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="h-0.5 flex-1 bg-gradient-to-r from-[#ffc837] to-[#f6462d] rounded-sm" />
                  {selectedMember.linkedin && (
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-purple/10 text-brand-purple p-3 rounded-full hover:bg-brand-purple/20 transition-colors shrink-0"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Page
