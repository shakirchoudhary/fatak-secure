import type { InsuranceProduct, Testimonial, FAQItem, GlossarySection } from '@/types'

export const PRODUCTS: InsuranceProduct[] = [
  {
    id: 'health',
    emoji: '❤️‍🩹',
    title: 'Health Insurance',
    description: 'Comprehensive cover for hospitalisation, illnesses & emergencies for your whole family.',
    features: [
      'Cashless at 10,000+ hospitals',
      'No pre-policy medical checkup',
      'OPD & mental health cover',
      'Family floater & individual plans',
    ],
    startingPrice: '₹299',
    priceUnit: '/mo',
    colorClass: 'health',
    page: 'health',
  },
  {
    id: 'life',
    emoji: '🛡️',
    title: 'Term Life Insurance',
    description: 'Protect your family\'s financial future with high cover at the most affordable premium.',
    features: [
      'Cover up to ₹1 Crore & beyond',
      'Tax benefit under Section 80C',
      'Critical illness rider available',
      'Return of premium option',
    ],
    startingPrice: '₹499',
    priceUnit: '/yr',
    colorClass: 'life',
    page: 'life',
  },
  {
    id: 'motor',
    emoji: '🚗',
    title: 'Motor Insurance',
    description: 'Protect your car or bike against accidents, theft & liability. Instant online renewal.',
    features: [
      'Instant online renewal in 2 min',
      'Zero depreciation add-on',
      '24/7 roadside assistance',
      'Cashless repairs at 8,000+ garages',
    ],
    startingPrice: '₹2,072',
    priceUnit: '/yr',
    colorClass: 'motor',
    page: 'motor',
  },
  {
    id: 'travel',
    emoji: '✈️',
    title: 'Travel Insurance',
    description: 'Travel worry-free with coverage for medical emergencies, cancellations & lost baggage.',
    features: [
      'International & domestic cover',
      'Medical emergency evacuation',
      'Lost baggage & passport cover',
      'Flight delay compensation',
    ],
    startingPrice: '₹199',
    priceUnit: '/trip',
    colorClass: 'travel',
    page: 'travel',
  },
  {
    id: 'accident',
    emoji: '⚕️',
    title: 'Personal Accident',
    description: 'Financial protection against accidental death, permanent and temporary disability.',
    features: [
      'Accidental death benefit',
      'Permanent & partial disability',
      'Education benefit for children',
      'Hospital daily cash benefit',
    ],
    startingPrice: '₹99',
    priceUnit: '/yr',
    colorClass: 'accident',
    page: 'health',
  },
  {
    id: 'cancer',
    emoji: '🩺',
    title: 'Cancer Insurance',
    description: 'Dedicated financial support upon cancer diagnosis — treatment, surgery & post-care.',
    features: [
      'Lump sum on diagnosis',
      'All stages & types covered',
      '2nd medical opinion benefit',
      'Home nursing care included',
    ],
    startingPrice: '₹199',
    priceUnit: '/mo',
    colorClass: 'cancer',
    page: 'health',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    stars: 5,
    quote: '"My father was hospitalised suddenly and the cashless claim was approved in 2 hours. FatakSecure saved us during the worst time of our lives."',
    name: 'Ramesh Gupta',
    location: 'Pune',
    avatar: 'R',
    tag: 'Health',
    tagColor: '#0EA5E9',
    tagBg: '#EFF9FF',
    avatarGradient: 'linear-gradient(135deg,#0EA5E9,#38BDF8)',
  },
  {
    stars: 5,
    quote: '"Renewed my car insurance in 3 minutes at a red light! The price was ₹1,200 cheaper than my previous insurer. Super impressed."',
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatar: 'P',
    tag: 'Motor',
    tagColor: '#F59E0B',
    tagBg: '#FFFBEB',
    avatarGradient: 'linear-gradient(135deg,#F59E0B,#FCD34D)',
  },
  {
    stars: 5,
    quote: '"Took accident insurance for ₹99. After a work accident, got ₹50,000 in 4 working days. Never thought it\'d be this simple."',
    name: 'Suresh Kumar',
    location: 'Delhi NCR',
    avatar: 'S',
    tag: 'Accident',
    tagColor: '#8B5CF6',
    tagBg: '#F5F3FF',
    avatarGradient: 'linear-gradient(135deg,#8B5CF6,#A78BFA)',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is FatakSecure?',
    answer: 'FatakSecure is the dedicated insurance arm of FatakPay — India\'s fastest-growing digital financial wellness platform. Founded to bridge India\'s insurance gap (currently at 4.2% of GDP vs 7%+ globally), FatakSecure holds an IRDAI composite Corporate Agent License and offers health, life, motor, accident and device insurance. Led by CEO Bikash Choudhary, FatakSecure is backed by FatakPay\'s 30 lakh+ user base and ₹1800 Cr+ in loan disbursals.',
  },
  {
    question: 'Is FatakSecure IRDAI approved?',
    answer: 'Yes. FatakSecure holds an IRDAI composite Corporate Agent License, received in October 2025. All insurance products are offered by IRDAI-registered insurers. Your policy is fully valid, legally backed, and underwritten by the insurer\'s complete financial strength.',
  },
  {
    question: 'How fast will I get my policy?',
    answer: 'Most policies are issued digitally in under 2 minutes after payment. Your document is sent instantly on WhatsApp and email. No physical document needed.',
  },
  {
    question: 'How do I file a claim?',
    answer: 'Via the FatakPay app, WhatsApp, or our 24/7 helpline. Our dedicated team guides every step — from submission to settlement. 98% claim settlement rate.',
  },
  {
    question: 'Can I buy without being a FatakPay customer?',
    answer: 'Yes. FatakSecure is open to all Indian citizens aged 18–65. No existing FatakPay account needed. Choose, pay — policy ready in minutes.',
  },
]

export const PARTNERS = [
  'Star Health', 'HDFC ERGO', 'ICICI Lombard', 'Bajaj Allianz',
  'New India Assurance', 'Tata AIG', 'Care Health', 'Go Digit',
  'Niva Bupa', 'SBI General', 'Max Bupa', 'Religare Health',
]

export const GLOSSARY_SECTIONS: GlossarySection[] = [
  {
    letter: 'A',
    terms: [
      { term: 'Actuary', definition: 'A mathematical expert who uses statistics, probability, and financial theory to calculate insurance premiums and reserves. They determine how much you should pay for your policy.', tags: ['All'] },
      { term: 'Add-on / Rider', definition: 'Optional coverage you can attach to your base policy for an extra premium. Examples: Zero Depreciation in motor, Critical Illness in health. Think of it as a "booster pack" for your policy.', tags: ['Health', 'Motor', 'Life'] },
      { term: 'Aggregate Deductible', definition: 'The total out-of-pocket amount you must pay across all claims in a policy year before the insurer starts paying 100%. Different from per-claim deductible.', tags: ['Health'] },
      { term: 'Ambulance Cover', definition: 'Reimburses emergency ambulance charges — road, air, or water. Standard policies cover ₹2,000–₹5,000; premium plans cover actual cost.', tags: ['Health'] },
    ],
  },
  {
    letter: 'C',
    terms: [
      { term: 'Cashless Hospitalisation', definition: 'You get treated at a network hospital without paying upfront. The insurer settles directly with the hospital. You only pay non-covered items. Key tip: Pre-authorisation needed except emergencies.', tags: ['Health'] },
      { term: 'Claim Settlement Ratio (CSR)', definition: '% of claims an insurer settled vs. total received in a year. Higher = better. IRDAI mandates disclosure annually. For life insurance, look for 95%+. For health, 85%+ is good.', tags: ['All'] },
      { term: 'Co-payment (Co-pay)', definition: 'You bear a fixed % of every claim — e.g., 20% co-pay means insurer pays ₹80,000 on a ₹1L claim, you pay ₹20,000. Common in senior citizen policies. Reduces premium significantly.', tags: ['Health'] },
      { term: 'Comprehensive Policy (Motor)', definition: 'Covers both Third-Party liability (mandatory) + Own Damage (vehicle damage). Recommended for vehicles under 7 years. Costs more than TP-only but provides full protection.', tags: ['Motor'] },
    ],
  },
  {
    letter: 'D',
    terms: [
      { term: 'Death Benefit', definition: 'The lump-sum amount paid to your nominee when the insured person dies. In term insurance, this equals the Sum Assured. In ULIPs, it\'s higher of fund value or Sum Assured.', tags: ['Life'] },
      { term: 'Deductible', definition: 'Amount you pay first before insurance kicks in. E.g., ₹5,000 deductible means on a ₹50,000 claim, you pay ₹5,000 and insurer pays ₹45,000. Lower deductible = higher premium.', tags: ['Health', 'Motor'] },
      { term: 'Depreciation (Motor)', definition: 'Reduction in a part\'s value due to age/wear. A 3-year-old bumper worth ₹10,000 may only be valued at ₹6,000 for claim purposes. Zero Depreciation add-on eliminates this deduction.', tags: ['Motor'] },
    ],
  },
  {
    letter: 'E',
    terms: [
      { term: 'Endorsement', definition: 'Written amendment to your policy that changes its terms — adding a nominee, updating address, or changing coverage. Must be done through insurer, not just verbally.', tags: ['All'] },
      { term: 'Entry Age', definition: 'Minimum and maximum age to buy a policy. Health: 18–65 years typically. Life term: 18–65. Senior health: 60–75. Buying young locks in lower premiums for life.', tags: ['All'] },
      { term: 'Exclusion', definition: 'Conditions, treatments, or events NOT covered. Pre-existing diseases (during waiting period), cosmetic surgery, war injuries are common exclusions. Always read the exclusion list before buying.', tags: ['All'] },
    ],
  },
  {
    letter: 'F',
    terms: [
      { term: 'Family Floater', definition: 'One policy covering the entire family under a single Sum Insured. If SI is ₹10L, any family member can claim up to ₹10L in a year. More economical than individual policies for young families.', tags: ['Health'] },
      { term: 'Free Look Period', definition: '15–30 days after policy purchase to review and return for a full refund (minus stamp duty & proportionate premium). Mandatory by IRDAI. Use it to carefully read your policy.', tags: ['All'] },
    ],
  },
  {
    letter: 'G',
    terms: [
      { term: 'Grace Period', definition: '15–30 days after premium due date to renew without losing benefits. During grace period, you\'re still covered for accidents but typically not illnesses.', tags: ['All'] },
      { term: 'Group Insurance', definition: 'Policy covering a group (employees, members). Cheaper than individual due to pooled risk. Caveat: It ends when you leave the job. Always have personal cover as backup.', tags: ['Health', 'Life'] },
    ],
  },
  {
    letter: 'I',
    terms: [
      { term: 'IDV (Insured Declared Value)', definition: 'Current market value of your vehicle — this is the maximum claim you can get for theft or total loss. Higher IDV = higher premium but better protection. Check IDV carefully at renewal.', tags: ['Motor'] },
      { term: 'IRDAI', definition: 'Insurance Regulatory and Development Authority of India. Government body that licenses insurers, sets rules, and protects policyholders. All legitimate insurers must be IRDAI-registered.', tags: ['All'] },
    ],
  },
  {
    letter: 'L',
    terms: [
      { term: 'Loading', definition: 'Additional premium charged due to higher risk factors — age, pre-existing disease, occupation, or claims history. E.g., a diabetic may face 25% loading on health premium.', tags: ['Health', 'Life'] },
      { term: 'Lapse', definition: 'Policy becomes void when premium isn\'t paid within grace period. In life insurance, lapsed policies lose all coverage. Revival may need health check-up and back-premiums.', tags: ['All'] },
    ],
  },
  {
    letter: 'N',
    terms: [
      { term: 'NCB (No Claim Bonus)', definition: 'Discount on Own Damage premium for every claim-free year. Ranges from 20% (1 year) to 50% (5 years). Worth ₹thousands on renewal — don\'t file small claims!', tags: ['Motor'] },
      { term: 'Network Hospital', definition: 'Hospital with a tie-up with your insurer for cashless treatment. Always check if your preferred hospital is in-network before buying. FatakSecure partners have 10,000+ network hospitals.', tags: ['Health'] },
      { term: 'Nominee', definition: 'Person who receives the death benefit when the insured dies. Must be updated after marriage, divorce, or death of nominee. Can be different from legal heir but ensure legal heirs know.', tags: ['Life', 'Health'] },
    ],
  },
  {
    letter: 'O',
    terms: [
      { term: 'OPD Cover', definition: 'Covers doctor consultations, diagnostics, and pharmacy bills without hospitalisation. Usually a sub-limit (e.g., ₹5,000/yr). Available in premium plans; increasingly common post-COVID.', tags: ['Health'] },
      { term: 'Own Damage (OD) Cover', definition: 'Motor insurance component covering damage to your own vehicle from accidents, fire, natural calamities, theft. Not mandatory but essential. Combined with TP for Comprehensive cover.', tags: ['Motor'] },
    ],
  },
  {
    letter: 'P',
    terms: [
      { term: 'PED (Pre-Existing Disease)', definition: 'Any medical condition present before buying health insurance. Usually covered after a waiting period of 2–4 years. Must be disclosed at application — concealment can lead to claim rejection.', tags: ['Health'] },
      { term: 'Premium', definition: 'Amount you pay (monthly/quarterly/annually) to keep your policy active. Determined by age, health, coverage amount, and risk profile. Tip: Annual payment saves 5–8% vs monthly.', tags: ['All'] },
      { term: 'Policy Bond / Document', definition: 'The physical or digital contract between you and the insurer. Contains all terms, conditions, exclusions. Read it within the free-look period. FatakSecure delivers instantly on WhatsApp.', tags: ['All'] },
    ],
  },
  {
    letter: 'R',
    terms: [
      { term: 'Reimbursement Claim', definition: 'You pay the hospital first, then submit bills to insurer for refund. Takes 7–15 days. Alternative to cashless when treated at non-network hospitals. Keep all original bills.', tags: ['Health'] },
      { term: 'Renewal', definition: 'Continuing your policy after the expiry date by paying premium again. Must renew before expiry to maintain continuity benefits like PED cover and NCB. FatakSecure sends auto-reminders.', tags: ['All'] },
      { term: 'Room Rent Sub-limit', definition: 'Cap on hospital room rent reimbursed. E.g., 1% of SI/day means ₹1,000/day room rent on ₹1L policy. Exceeding it proportionately reduces other charges too. Choose plans with no sub-limits.', tags: ['Health'] },
    ],
  },
  {
    letter: 'S',
    terms: [
      { term: 'Sum Assured / Sum Insured', definition: 'Maximum amount the insurer will pay. In life insurance, it\'s the death benefit. In health, it\'s the annual claim limit. In motor, it\'s IDV. Choosing the right amount is critical.', tags: ['All'] },
      { term: 'Subrogation', definition: 'After paying your claim, the insurer gets legal rights to recover money from the at-fault party. You must cooperate with this process. Common in motor third-party claims.', tags: ['Motor', 'Health'] },
    ],
  },
  {
    letter: 'T',
    terms: [
      { term: 'Term Insurance', definition: 'Pure life cover for a defined term (10–40 years). No investment component. Cheapest way to get high life cover. ₹1 Crore cover for 30-year-old can cost under ₹10,000/year.', tags: ['Life'] },
      { term: 'Third Party (TP) Insurance', definition: 'Mandatory motor cover that pays for damage/injury caused to others (not yourself) in an accident. Premium fixed by IRDAI. Does NOT cover your own vehicle damage.', tags: ['Motor'] },
    ],
  },
  {
    letter: 'W',
    terms: [
      { term: 'Waiting Period', definition: 'Time after buying when certain claims aren\'t payable. Initial: 30 days for illnesses (accidents covered from day 1). PED: 2–4 years. Maternity: 2–9 months. Shorter waiting period = better policy.', tags: ['Health'] },
      { term: 'Waiver of Premium', definition: 'If you become totally disabled, future premiums are waived but coverage continues. Available as rider in life and health plans. Essential for sole breadwinners.', tags: ['Life', 'Health'] },
    ],
  },
  {
    letter: 'Z',
    terms: [
      { term: 'Zero Depreciation (Nil Dep / Bumper to Bumper)', definition: 'Motor add-on paying full replacement cost of damaged parts with no depreciation deduction. Bumper worth ₹15,000 but depreciated to ₹9,000 — you get ₹15,000. Highly recommended for vehicles under 5 years.', tags: ['Motor'] },
      { term: 'Zone-based Pricing', definition: 'IRDAI allows different premium rates by geography. Metro cities (Zone A) carry 10–20% higher health premiums due to higher hospital costs. Same applies to motor insurance.', tags: ['Health'] },
    ],
  },
]
