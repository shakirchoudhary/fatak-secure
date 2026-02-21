import { Link } from 'lucide-react'
import React from 'react'

const Page = () => {
    const bimaPortalUrl = "https://bimabharosa.irdai.gov.in";
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="md:text-4xl text-3xl font-bold text-center text-[#4A1D8F] mb-8">
          Grievance Redressal
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-sm leading-relaxed mb-8">
          At FatakSecure (Fatakpay Insurance Solutions Private Limited), we are
          committed to providing prompt, transparent, and fair resolution of
          customer grievances. If you have any concern related to insurance
          policies purchased through us, you may raise a grievance using the
          structure outlined below.
        </p>

        {/* 3-Level Grievance Redressal Mechanism */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6">
          3-Level Grievance Redressal Mechanism
        </h2>

        {/* Level 01 */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            LEVEL 01: FatakSecure – Grievance Redressal Officer (GRO)
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            If you have any grievance related to services provided by Fatak
            Secure, you may contact us through the following channels:
          </p>
          <div className="ml-4 text-sm text-gray-700 space-y-1">
            <p>
              Designation:
              <span className='text-fatak-primary'>Grievance Redressal Officer</span>
            </p>
            <p>
              Email:
              <a
                href="mailto:gro@fataksecure.com"
                className="text-fatak-primary"
              >
                gro@fataksecure.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919619476476"
                className="font-medium text-fatak-primary"
              >
                +91-9619476476
              </a>
            </p>
            <p className="italic pt-2">
              Turnaround Time (TAT): Your grievance will be acknowledged
              immediately and resolved within 14 days from the date of receipt.
            </p>
          </div>
        </div>

        {/* Level 02 */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            LEVEL 02: Insurer-Specific Escalation
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            If your grievance is related to the insurance product, policy terms,
            premium, benefits, servicing, or claims, and you are not satisfied
            with the resolution provided by FatakSecure, you may escalate the
            matter to the respective insurance company.
          </p>
          <div className="ml-4 text-sm text-gray-700 space-y-1">
            <p>
              Each insurer has its own Grievance Redressal / Escalation Matrix.
            </p>
            <p>
              Contact details of the concerned insurer will be shared with you
              during escalation.
            </p>
            <p>
              You may also directly approach the insurer for resolution which
              will be shared in the Certificate of Insurance.
            </p>
          </div>
        </div>

        {/* Level 03 */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-gray-800 mb-4">
            LEVEL 03: Bima Bharosa / Insurance Ombudsman
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            If your grievance remains unresolved after approaching the insurer,
            you may escalate the matter to Bima Bharosa or the Insurance
            Ombudsman, as per applicable IRDAI guidelines.
          </p>
          <div className="ml-4 text-sm text-gray-700 space-y-1">
            <p>
              Bima Bharosa Portal:{" "}
              <a href={bimaPortalUrl} className="text-fatak-primary">
                {bimaPortalUrl}
              </a>
            </p>
            <p>Insurance Ombudsman: As per jurisdiction defined by IRDAI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page
