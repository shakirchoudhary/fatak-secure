import type { Metadata } from 'next'
import '@/styles/globals.css'
import { PageProvider } from '@/lib/PageContext'

export const metadata: Metadata = {
  title: 'FatakSecure – Insurance Made Simple | A FatakPay Product',
  description: 'India\'s fastest insurance platform. Compare health, life, motor & travel insurance from 20+ insurers. IRDAI approved. Policy in 2 minutes.',
  keywords: 'health insurance, car insurance, bike insurance, term life insurance, travel insurance, IRDAI, FatakPay, India',
  openGraph: {
    title: 'FatakSecure – Insurance Made Simple',
    description: 'Compare & buy insurance from 20+ insurers. Policy in 2 minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageProvider>
          {children}
        </PageProvider>
      </body>
    </html>
  )
}
