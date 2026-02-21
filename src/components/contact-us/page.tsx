'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { supportIcon } from '@/assets'
import Tag from '@/components/ui/Tag'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-20 pb-14 md:pt-28 md:pb-20 px-[5%] text-center bg-gradient-to-br from-[#2d1057] via-[#44226e] to-[#6b3fa0] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[640px] h-[320px] bg-[radial-gradient(ellipse,rgba(0,196,180,0.13),transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(246,70,45,0.08),transparent_65%)] pointer-events-none" />
        <div className="relative z-10">
          <Tag color="teal" centered>Get In Touch</Tag>
          <h1 className="font-heading text-[clamp(32px,4vw,52px)] font-extrabold tracking-[-0.8px] text-white mt-1">
            We&apos;d love to{' '}
            <span className="text-teal-light">hear from you</span>
          </h1>
          <p className="text-white/60 mt-3 text-base leading-[1.78]">
            Fill the form below to drop us an email.
          </p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-14 md:py-20 px-[5%] bg-slate-50">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start bg-white rounded-2xl p-6 md:p-12 shadow-s2 border border-slate-100">

            {/* ── Contact Form ── */}
            <div className="order-2 lg:order-1">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-navy font-heading font-semibold text-[14px] mb-2">
                    Full Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name here"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44226e]/30 focus:border-[#44226e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-navy font-heading font-semibold text-[14px] mb-2">
                    Email Address <span className="text-orange">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44226e]/30 focus:border-[#44226e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-navy font-heading font-semibold text-[14px] mb-2">
                    Mobile Number <span className="text-orange">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="98XXXXXXXX"
                    pattern="^[6-9]\d{9}$"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6-9"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44226e]/30 focus:border-[#44226e] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-navy font-heading font-semibold text-[14px] mb-2">
                    Message <span className="text-orange">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here"
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-[14px] text-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#44226e]/30 focus:border-[#44226e] transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ffc837] to-[#f6462d] text-white font-heading font-bold py-3.5 px-6 rounded-full shadow-orange hover:shadow-orange-hover hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* ── Contact Info ── */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              {/* Illustration */}
              <div className="flex justify-center">
                <Image
                  src={supportIcon}
                  alt="Support illustration"
                  width={300}
                  height={220}
                  className="w-full max-w-[190px] sm:max-w-[240px] md:max-w-[300px] h-auto object-contain"
                />
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4 bg-[#44226e]/[0.06] rounded-2xl p-5">
                {/* Phone */}
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-s1">
                    <Phone className="w-5 h-5 text-[#44226e]" />
                  </div>
                  <h5 className="font-heading font-bold text-[13px] text-navy mb-1.5">
                    Contact No
                  </h5>
                  <a
                    href="tel:+919619476476"
                    className="text-slate-500 text-[13px] hover:text-[#44226e] transition-colors"
                  >
                    +91 96194 76476
                  </a>
                </div>

                {/* Email */}
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-s1">
                    <Mail className="w-5 h-5 text-[#44226e]" />
                  </div>
                  <h5 className="font-heading font-bold text-[13px] text-navy mb-1.5">
                    Mail Us
                  </h5>
                  <a
                    href="mailto:support@fataksecure.com"
                    className="text-slate-500 text-[13px] hover:text-[#44226e] transition-colors break-all"
                  >
                    support@fataksecure.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
