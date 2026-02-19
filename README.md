# FatakSecure – Next.js + TypeScript + Tailwind CSS

A full-featured insurance comparison web app converted from vanilla HTML to Next.js 14 with TypeScript and Tailwind CSS.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Entry point
├── components/
│   ├── App.tsx             # Main page router (SPA pattern)
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed navigation with dropdowns
│   │   └── Footer.tsx      # Site footer
│   ├── shared/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Tag.tsx         # Section tag labels
│   │   └── FAQ.tsx         # Accordion FAQ component
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── ProductsGrid.tsx
│   │   ├── WhySection.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── PartnersSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   ├── health/
│   │   ├── HealthPage.tsx
│   │   └── HealthBuyPage.tsx  # Full 5-step quote journey
│   ├── motor/
│   │   ├── MotorPage.tsx
│   │   └── MotorBuyPage.tsx
│   ├── life/
│   │   ├── LifePage.tsx
│   │   └── LifeBuyPage.tsx
│   ├── calculators/
│   │   └── CalculatorsPage.tsx  # Car, Bike, Health calculators
│   └── glossary/
│       └── GlossaryPage.tsx    # 50+ insurance terms A-Z
├── lib/
│   ├── PageContext.tsx      # SPA navigation context
│   ├── calculators.ts      # Premium calculation logic
│   ├── data.ts             # Insurance products, FAQs, glossary
│   └── useScrollAnimation.ts
├── styles/
│   └── globals.css         # CSS variables + base styles
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Tech Stack

- **Next.js 14** – App Router
- **TypeScript** – Type safety
- **Tailwind CSS** – Utility-first styling
- **React Context** – SPA page navigation
- **Google Fonts** – Sora + DM Sans

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `navy.DEFAULT` | `#0d1b4b` | Primary text |
| `orange.DEFAULT` | `#FF6B35` | CTAs, highlights |
| `teal.DEFAULT` | `#00C4B4` | Trust badges |
| `brand.purple` | `#3B1370` | Navbar, hero |
| `health.DEFAULT` | `#0EA5E9` | Health category |
| `life.DEFAULT` | `#EC4899` | Life category |
| `motor.DEFAULT` | `#F59E0B` | Motor category |
| `travel.DEFAULT` | `#10B981` | Travel category |

### Fonts
- **Sora** (700–800) – Headings & brand
- **DM Sans** (400–600) – Body text

## 🗺️ Pages

| Page | ID | Description |
|------|----|-------------|
| Home | `home` | Landing page with all sections |
| Health | `health` | Health insurance plans |
| Health Buy | `health-buy` | 5-step purchase journey |
| Motor | `motor` | Motor insurance plans |
| Motor Buy | `motor-buy` | Motor quote form |
| Life | `life` | Term life insurance plans |
| Life Buy | `life-buy` | Life quote form |
| Calculators | `calculators` | Premium calculators |
| Glossary | `glossary` | Insurance terms A–Z |

## 💡 Navigation Pattern

Uses a SPA-style navigation via React Context (`PageContext`). The `showPage(pageId)` function switches pages without full navigation, maintaining all scroll behavior.

```tsx
import { usePage } from '@/lib/PageContext'

function MyComponent() {
  const { showPage } = usePage()
  return <button onClick={() => showPage('health')}>View Health Plans</button>
}
```

## 🔧 Calculator Logic

Premium calculation logic is in `src/lib/calculators.ts` and follows IRDAI guidelines:
- **Car**: Based on IDV, engine CC, policy type, NCB, city
- **Bike**: Based on engine CC, year, policy type, NCB
- **Health**: Based on plan type, age, sum insured, members, PED, city

All calculations include 18% GST and return estimated ranges.

## 📝 Adding New Insurance Products

1. Add to `PRODUCTS` array in `src/lib/data.ts`
2. Add color config to `colorConfig` in `ProductsGrid.tsx`
3. Create a new page component in the relevant folder
4. Add the page ID to `PageId` type in `src/types/index.ts`
5. Add case to `renderPage()` in `App.tsx`
