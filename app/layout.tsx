import type { Metadata } from "next"
import type React from "react"
import { Fraunces, Inter } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Maple Hearth Bakery | Artisan Baked Goods & Custom Cakes in Portland",
    template: "%s | Maple Hearth Bakery",
  },
  description:
    "Artisanal breads, pastries, and custom cakes crafted from the finest ingredients. Fresh-baked daily in Portland, OR. Pre-order your favorites or request a custom creation.",
  keywords: [
    "bakery",
    "artisan bread",
    "custom cakes",
    "Portland bakery",
    "sourdough",
    "pastries",
    "fresh baked goods",
    "wedding cakes",
    "birthday cakes",
  ],
  authors: [{ name: "Maple Hearth Bakery" }],
  creator: "Maple Hearth Bakery",
  publisher: "Maple Hearth Bakery",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maplehearth.com",
    siteName: "Maple Hearth Bakery",
    title: "Maple Hearth Bakery | Artisan Baked Goods & Custom Cakes",
    description:
      "Fresh-baked artisanal breads, pastries, and custom cakes in Portland, OR. Made with love and the finest ingredients.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maple Hearth Bakery - Fresh Artisan Baked Goods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maple Hearth Bakery | Artisan Baked Goods & Custom Cakes",
    description: "Fresh-baked artisanal breads, pastries, and custom cakes in Portland, OR.",
    images: ["/images/og-image.jpg"],
    creator: "@maplehearth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans bg-background text-foreground">{children}</body>
    </html>
  )
}
