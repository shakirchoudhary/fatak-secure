"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { contactUsBgImage, homeUI2Image, supportIcon } from "@/assets";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [selectedOffice, setSelectedOffice] = useState(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <div className="w-full left-0 -z-10 min-h-[calc(100dvh-48px)] md:min-h-[calc(100dvh-100px)] h-full bg-[#FFFBF0] absolute" />
      <section className="w-full bg-[#FFFBF0] md:py-16 py-10 px-4">
        <Image
          src={contactUsBgImage}
          alt="Contact Us Background 1"
          priority
          className="absolute top-2 hidden md:block left-0 z-0"
        />
        <Image
          src={contactUsBgImage}
          alt="Contact Us Background 1"
          priority
          className="absolute top-2 hidden md:block   right-0 z-0 scale-x-[-1]"
        />
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-25">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              We'd love to{" "}
              <span className="text-fatak-primary">hear from you</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Fill the form below to drop us an email.
            </p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-start md:mb-16 bg-white md:p-12 p-4 rounded-3xl shadow-sm z-10 relative">
            {/* Contact Form */}
            <div className="order-2 md:order-1">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name here"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fatak-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fatak-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    placeholder="98XXXXXXXX"
                    pattern="^[6-9]\d{9}$"
                    title="Please enter a valid 10-digit Indian mobile number starting with 6-9"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fatak-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fatak-primary focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-fatak-secondary to-fatak-secondary-light hover:from-orange-600 hover:to-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className="space-y-6 order-1 md:order-2">
              {/* Illustration Placeholder */}
              <div className="flex justify-center mb-8">
                <Image
                  src={supportIcon}
                  alt="support illustration"
                  width={300}
                  height={200}
                />
              </div>
              {/* Contact Cards */}
              <div className="grid grid-cols-2 rounded-xl gap-4 bg-fatak-primary-bg p-5">
                {/* Contact Number Card */}
                <div className="md:p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-bold md:text-sm text-[12px] text-gray-800 mb-2">Contact No</h5>
                  <a 
                    href="tel:+919619476476"
                    className="text-gray-600 md:text-sm text-[12px] hover:text-purple-600 transition-colors"
                  >
                    +91 96194 76476
                  </a>
                </div>

                {/* Mail Us Card */}
                <div className="md:p-6 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <h5 className="font-bold md:text-sm text-[12px] text-gray-800 mb-2">Mail Us</h5>
                  <a
                    href="mailto:support@fataksecure.com"
                    className="text-gray-600 md:text-sm text-[12px] hover:text-purple-600 transition-colors"
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
  );
};

export default ContactUs;
