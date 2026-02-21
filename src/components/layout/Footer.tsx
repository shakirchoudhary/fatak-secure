"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { contactIcons } from "@/assets";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-[#44226e] text-white pt-12 pb-8">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-7">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/[0.15]">
          {/* Logo & Contact */}
          <div>
            <div
              className="mb-6 cursor-pointer w-fit"
              onClick={() => router.push("/")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fatak-secure-logo.svg"
                alt="FatakSecure"
                style={{ width: 140, height: "auto", objectFit: "contain" }}
              />
            </div>
            <button
              onClick={() => router.push("/contact-us")}
              className="text-white text-sm font-medium flex items-center gap-2 hover:text-[#00C4B4] transition-colors w-fit"
            >
              <Image
                src={contactIcons}
                alt="Contact Icon"
                width={16}
                height={16}
              />{" "}
              Contact us
            </button>
          </div>

          {/* Insurance */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-wide">
              Insurance
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Motor Insurance", page: "motor" as const },
                { label: "Car Insurance", page: "motor" as const },
                { label: "Bike Insurance", page: "motor" as const },
                { label: "Health Insurance", page: "health" as const },
                { label: "Term Life Insurance", page: "life" as const },
                { label: "Travel Insurance", page: "travel" as const },
                { label: "Personal Accident", page: "health" as const },
                { label: "Cancer Insurance", page: "health" as const },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => router.push("/" + item.page)}
                    className="text-[13px] text-white/70 hover:text-[#00C4B4] transition-colors bg-transparent border-none cursor-pointer text-left font-normal"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-wide">
              Our Company
            </h4>
            <ul className="space-y-3">
              {[{ label: "About us", href: "/about-us" }].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target=""
                    rel="noopener noreferrer"
                    className="text-[13px] text-white/70 hover:text-[#00C4B4] transition-colors font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm text-white mb-5 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Grievance Redressal", href: "/grievance-redressal" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href !== "#" ? "" : undefined}
                    rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                    className="text-[13px] text-white/70 hover:text-[#00C4B4] transition-colors font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company Information */}
        <div className="pb-8 border-b border-white/[0.15] mb-8">
          <h5 className="font-bold text-white mb-3 text-sm">
            FatakPay Insurance Solutions Pvt Ltd
          </h5>
          <p className="text-[12px] text-white/70 mb-2">
            IRDAI Registered Corporate Agent (Composite) License No CA1073 valid
            till 24th September, 2028
          </p>
          <p className="text-[12px] text-white/70 mb-2">
            <span className="font-semibold">Registered Address: </span>
            <span>
              — Office no. 23, 2nd Floor, Der Deutsche Parkz, Bhandup Village
              Road, Bhandup (West), Mumbai Suburban (Mumbai) Maharashtra,
              400078.
            </span>
          </p>
          <p className="text-[12px] text-white/70 mb-3">
            <span className="font-semibold">Principal Officer: </span>Bikash
            Choudhary
          </p>
          <p className="text-[12px] text-white/70 leading-relaxed">
            Insurance is the subject matter of solicitation. Participation by
            customers is voluntary. Please read the sales brochure carefully
            before concluding a sale. Terms & Conditions Apply.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] text-white/40">
            © 2026 FatakSecure. All rights reserved.
          </p>
          <p className="text-[11px] text-white/40">
            FatakSecure is an applied trademark of FatakPay Insurance Services
            Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
