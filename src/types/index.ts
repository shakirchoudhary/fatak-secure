export type PageId =
  | 'home'
  | 'health'
  | 'life'
  | 'motor'
  | 'travel'
  | 'health-buy'
  | 'motor-buy'
  | 'life-buy'
  | 'calculators'
  | 'glossary'

export interface InsuranceProduct {
  id: string
  emoji: string
  title: string
  description: string
  features: string[]
  startingPrice: string
  priceUnit: string
  colorClass: string
  page: PageId
}

export interface Testimonial {
  stars: number
  quote: string
  name: string
  location: string
  avatar: string
  tag: string
  tagColor: string
  tagBg: string
  avatarGradient: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface InsurancePlan {
  type: string
  name: string
  description: string
  price: string
  period: string
  originalPrice?: string
  features: { text: string; included: boolean }[]
  isPopular?: boolean
  ctaText: string
}

export interface GlossaryTerm {
  term: string
  definition: string
  tags: string[]
}

export interface GlossarySection {
  letter: string
  terms: GlossaryTerm[]
}
