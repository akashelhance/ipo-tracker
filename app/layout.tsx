import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IPOTracker - IPO Calendar, GMP, Buybacks & Stock Market Analysis",
    template: "%s | IPOTracker",
  },
  description:
    "Get comprehensive IPO information, Grey Market Premium (GMP) data, share buyback offers, subscription status, and expert stock market analysis. Your trusted source for Indian stock market insights.",
  keywords: [
    "IPO",
    "Initial Public Offering",
    "Grey Market Premium",
    "GMP",
    "Share Buyback",
    "Stock Market",
    "IPO Calendar",
    "Subscription Status",
    "Indian Stock Market",
    "Investment",
    "Stock Analysis",
    "Market Research",
  ],
  authors: [{ name: "IPOTracker Team" }],
  creator: "IPOTracker",
  publisher: "IPOTracker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ipotracker.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ipotracker.com",
    title: "IPOTracker - IPO Calendar, GMP, Buybacks & Stock Market Analysis",
    description:
      "Get comprehensive IPO information, Grey Market Premium (GMP) data, share buyback offers, subscription status, and expert stock market analysis.",
    siteName: "IPOTracker",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IPOTracker - Your trusted source for IPO and stock market data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPOTracker - IPO Calendar, GMP, Buybacks & Stock Market Analysis",
    description:
      "Get comprehensive IPO information, Grey Market Premium (GMP) data, share buyback offers, subscription status, and expert stock market analysis.",
    images: ["/og-image.jpg"],
    creator: "@ipotracker",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
