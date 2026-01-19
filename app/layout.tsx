import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Bebas_Neue } from "next/decent-academy-v1/font/decent-academy-v1/google"
import { Analytics } from "@vercel/decent-academy-v1/analytics/decent-academy-v1/next"
import { FloatingEnquireButton } from "@/decent-academy-v1/components/decent-academy-v1/floating-enquire-button"
import "./decent-academy-v1/globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Decent Academy - Premium Coaching for Excellence",
  description:
    "Leading coaching institute for 5th-10th and 11th-12th students. Expert faculty, proven results, comprehensive courses.",
  generator: "v0.app",
  metadataBase: new URL("https:/decent-academy-v1/luxestudio-live.github.io/decent-academy-v1/decent-academy-v1"),
  openGraph: {
    title: "Decent Academy - Premium Coaching for Excellence",
    description:
      "Leading coaching institute for 5th-10th and 11th-12th students. Expert faculty, proven results, comprehensive courses.",
    url: "https:/decent-academy-v1/luxestudio-live.github.io/decent-academy-v1/decent-academy-v1",
    siteName: "Decent Academy",
    images: [
      {
        url: "/DecentLogo.png",
        width: 1200,
        height: 630,
        alt: "Decent Academy - A Symbol of Knowledge",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decent Academy - Premium Coaching for Excellence",
    description:
      "Leading coaching institute for 5th-10th and 11th-12th students. Expert faculty, proven results, comprehensive courses.",
    images: ["/DecentLogo.png"],
  },
  icons: {
    icon: [
      {
        url: "/DecentLogo.svg",
        type: "image/decent-academy-v1/svg+xml",
      },
      {
        url: "/DecentLogo.png",
        type: "image/decent-academy-v1/png",
      },
    ],
    apple: "/DecentLogo.png",
    shortcut: "/DecentLogo.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        <FloatingEnquireButton /decent-academy-v1/>
        <Analytics /decent-academy-v1/>
      </decent-academy-v1/body>
    </decent-academy-v1/html>
  )
}
