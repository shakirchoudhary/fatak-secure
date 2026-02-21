'use client'
import React, { useState } from 'react'
import { Linkedin, X } from 'lucide-react'
import { abhishekGandhi, aboutUsBgIcons, ajitKumar, amitGoyal, amitLodha, bikashChoudhary } from '@/assets'
import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";


const Page = () => {
  const [selectedMember, setSelectedMember] = useState<{
    name: string;
    title: string;
    image: any;
    description: string;
    linkedin?: string;
  } | null>(null);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const teamMembers = [
    {
      name: "Amit Lodha",
      title: "Director",
      image: amitLodha,
      description: `Amit Lodha is the Co-founder and CEO of Fatakpay. He has over 20 years of experience, having worked in Kotak Mahindra Group, Kohlberg Kravis & Roberts and HDFC Bank.
Having spent his career as a Corporate Finance professional working with over 500 large to mid-sized corporates, capital raising and managing and building large team.
 Amit is an MBA by qualification.`,
      linkedin: "#",
    },
    {
      name: "Amit Goyal",
      title: "Director",
      image: amitGoyal,
      description: `Amit has over 20 years of experience in Financial Services & Investment Banking. He was also an entrepreneur for 3 years in a family-owned packaging business. Amit also co-founded Ethos Capital (a boutique investment banking firm) after working with Kotak Investment Banking, PWC and Brescon Corporate Advisors.
He is a Chartered Accountant and a Graduate in Commerce.`,
      linkedin: "#",
    },
    {
      name: "Ajit Kumar",
      title: "Director",
      image: ajitKumar,
      description: `Ajit Kumar is the COO and a co-founder of FatakPay. He oversees the daily operations of the team and is the force behind our process oriented functions. After spending more than a decade working in retail lending & web analytical solutions for Citibank and Axis Bank, Ajit has gained a deep understanding of the problem faced by most financial companies in India and how the potential benefits being offered still don't reach the masses. This led him to start RupeeCircle (acquired) and now FatakPay which aims to democratizing access to credit so as to empower all Indians. In the years that he has been working in the sector, Ajit has been featured in various publications like the Economic Times, Outlook, Business standard, VC Circle and YourStory and has participated in various talks and forums. Ajit is an alumnus of the prestigious IIT- Bombay.`,
      linkedin: "#",
    },
    {
      name: "Abhishek Gandhi",
      title: "Director",
      image: abhishekGandhi,
      description: `An entrepreneur at heart and a financial expert by training, FatakPay is the third company that Abhishek has cofounded over the years. Abhishek is a sought after expert in the Financial domain and has landed coverage in broadcast and digital outlets around the country, including the Economic Times, Radio City, Business Standard, The New Indian Standard, DNA India, Money Control, The Week, Financial Express, YourStory and Inc42 to name a few. More recently, he was awarded the '40 Under 40 for the year 2020' by IAAIF and 101 Top most influential BFSI leaders and 'India's inspiring leaders' award 2021 by ELETS. Abhishek holds a CFA and an MBA from Erasmus University, a BE in Comp Science and has 18+ Yrs of experience in Financial consulting & strategy with Infosys, Nidera and Kalpataru Group.`,
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen md:p-0 p-3">
      {/* About Us Title */}
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800">
          About Us
        </h1>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto space-y-6 my-6 text-center text-gray-700 font-light leading-relaxed">
        <p>
          FatakSecure exists to address persistent gaps in India’s insurance
          landscape — primarily low penetration, complex products, and a lack of
          consumer trust — especially among gig workers, blue - collar employees,
          and families in Tier II and III cities.
        </p>
        <p>
          Its Vision is to make insurance a foundational pillar of financial
          wellness by offering simple, affordable, and accessible products
          tailored for the needs of “Bharat.” The company’s mission is
          "Insurance for All" by delivering transparent, user-friendly insurance
          products through digital innovation, personalized recommendations, and
          multilingual support, ensuring that every Indian can confidently
          secure their financial future.
        </p>
        <p>
          FatakSecure’s goal is to help solve issues of mis-selling and
          awareness, becoming the most relevant financial wellness partner for
          underserved segments and supporting the government’s “Insurance for
          All” initiative.
        </p>
      </div>

      {/* Vision and Mission Section */}
      <div className="bg-linear-to-br rounded-2xl bg-fatak-primary md:p-25 p-10 md:my-16 relative overflow-hidden">
        {/* Decorative Dots - Left */}
        <div className="absolute md:left-15 left-5 z-10 md:top-15 top-5">
          <Image
            src={aboutUsBgIcons}
            alt="Background Icons"
            className="w-25 h-25"
          />
        </div>

        {/* Decorative Dots - Right */}
        <div className="absolute md:right-15 right-5 md:bottom-15 bottom-5">
          <Image
            src={aboutUsBgIcons}
            alt="Background Icons"
            className="w-25 h-25"
          />
        </div>

        <div className="bg-white md:flex rounded-3xl p-4 z-20 md:p-12 gap-8 relative">
          {/* Our Mission */}
          <div className="text-center md:w-1/2 md:mt-0 mt-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Offering simple, affordable, and accessible products
              tailored for the needs of “Bharat.”
            </p>
          </div>

          {/* Divider */}
          <div className=" md:block md:w-px h-px bg-gray-200"></div>

          {/* Our Vision */}
          <div className="text-center md:w-1/2 md:mb-0 mb-8">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              "Insurance for All" by delivering transparent, user-friendly
              insurance products through digital innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto md:x-4 py-16">
        <h2 className="text-6xl font-bold text-center text-gray-900 mb-16">
          Team
        </h2>

        {/* CEO Profile - Main */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center relative">
          {/* CEO Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 border md:block hidden border-fuchsia-600 absolute rounded-lg overflow-hidden top-14 left-14 -z-10"></div>
            <div className="w-80 h-80 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={bikashChoudhary}
                alt="Bikash Choudhary"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CEO Details */}
          <div>
            <h3 className="text-3xl font-bold text-purple-800 mb-2">
              Bikash Choudhary
            </h3>
            <p className="text-gray-600 mb-6">CEO & Principal Officer</p>

            <div className="h-0.5 w-15 mb-10 bg-linear-to-r from-fatak-secondary to-fatak-secondary-light"></div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Bikash Choudhary is the CEO & Principal Officer of FatakSecure,
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
            <div className="flex items-center gap-5">
              <div className="h-0.5 w-full bg-linear-to-r from-fatak-secondary to-fatak-secondary-light"></div>
              <a
                href="#"
                className="text-fatak-primary bg-fatak-primary-bg p-3 rounded-full"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-8 my-15 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center mb-20 cursor-pointer transition-transform hover:scale-105"
              onClick={() => {
                setSelectedMember(member);
                setShowFullDescription(false);
              }}
            >
              <div className="w-full h-full bg-gray-200 rounded-lg md:mb-4 mb-6 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>

        {/* Team Member Dialog */}
        <Dialog
          open={!!selectedMember}
          onOpenChange={() => setSelectedMember(null)}
        >
          <DialogTitle className="hidden"></DialogTitle>
          <DialogContent className="p-0 bg-transparent border-0 max-w-6xl! max-h-full overflow-y-auto">
            <div className="bg-white rounded-lg relative p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
                {/* Left Side - Image */}
                <div className="flex justify-center">
                  <div className="w-full max-w-md aspect-square rounded-lg overflow-hidden">
                    {selectedMember && (
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="md:w-full md:h-full mx-auto object-cover"
                      />
                    )}
                  </div>
                </div>
                {/* Right Side - Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-fatak-primary mb-2">
                      {selectedMember?.name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 mb-4">
                      {selectedMember?.title}
                    </p>

                    {/* Orange underline */}
                    <div className="h-0.5 w-15 md:mb-10 mb-5 bg-linear-to-r from-fatak-secondary to-fatak-secondary-light"></div>

                    <p className={`text-sm md:text-base text-gray-700 leading-relaxed text-justify ${!showFullDescription && selectedMember?.description && selectedMember.description.length > 500 ? 'line-clamp-8' : ''}`}>
                      {selectedMember?.description}
                    </p>

                    {selectedMember?.description && selectedMember.description.length > 500 && (
                      <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-fatak-primary hover:underline mt-2 text-sm"
                      >
                        {showFullDescription ? 'Show Less' : 'Show More'}
                      </button>
                    )}
                  </div>

                  {/* Bottom section with line and LinkedIn */}
                  <div className="flex items-center gap-5  md:mt-8">
                    <div className="h-0.5 w-full bg-linear-to-r from-fatak-secondary to-fatak-secondary-light"></div>
                    {selectedMember?.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-purple-100 p-3 rounded-full hover:bg-purple-200 transition-colors shrink-0"
                      >
                        <Linkedin className="w-6 h-6 text-fatak-primary" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Page
