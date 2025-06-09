import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, DollarSign, Building2, TrendingUp, FileText, Target, Users, Star } from "lucide-react"
import { buybacks } from "@/lib/buyback-data"
// Import the CTA button component at the top of the file
import { CTAButton } from "@/components/cta-button"
// Import the new buyback components
import { BuybackOfferDetails } from "@/components/buyback-offer-details"
import { BuybackAcceptanceRatio } from "@/components/buyback-acceptance-ratio"
import { BuybackFinancialReport } from "@/components/buyback-financial-report"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const buyback = buybacks.find((buyback) => buyback.slug === slug)

  if (!buyback) {
    return {
      title: "Buyback Not Found",
    }
  }

  return {
    title: `${buyback.companyName} Buyback 2025 Record Date, Price & Ratio Details`,
    description: `Read full details of ${buyback.companyName} share buyback offer including offer price, record date, type, size, and market price.`,
    openGraph: {
      title: `${buyback.companyName} Buyback 2025 Record Date, Price & Ratio Details`,
      description: `${buyback.companyName} buyback offer with record date ${buyback.recordDate} and offer price ₹${buyback.offerPrice}`,
      type: "website",
    },
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`
}

function getStatusBadge(status: string) {
  const statusStyles = {
    Open: "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg",
    Upcoming: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg",
    Closed: "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg",
  }

  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${statusStyles[status as keyof typeof statusStyles]}`}
    >
      {status}
    </span>
  )
}

function getPremiumDiscount(offerPrice: number, marketPrice: number) {
  const difference = offerPrice - marketPrice
  const percentage = ((difference / marketPrice) * 100).toFixed(1)
  const isPositive = difference > 0

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600">Premium/Discount:</span>
      <span className={`font-bold text-lg ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {isPositive ? "+" : ""}
        {percentage}%
      </span>
    </div>
  )
}

export default async function BuybackDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const buyback = buybacks.find((buyback) => buyback.slug === slug)

  if (!buyback) {
    notFound()
  }

  // Dummy data for the new components
  const dummyOfferDetails = {
    companyName: buyback.companyName,
    year: "2025",
    offerAmount: buyback.buybackSize,
    numberOfShares: "10,81,081",
    faceValue: "₹10",
    buybackPrice: formatPrice(buyback.offerPrice),
    listing: "BSE, NSE",
    buybackType: buyback.buybackType,
    letterOfOfferLink: "https://www.sebi.gov.in/filings/buyback/letter-of-offer.pdf",
  }

  const dummyAcceptanceData = {
    companyName: buyback.companyName,
    year: "2025",
    marketPrice: formatPrice(buyback.marketPrice),
    buybackPrice: formatPrice(buyback.offerPrice),
    investment: "₹2,00,000",
    acceptanceData: [
      { ratio: "100%", shares: "1,081", profit: "₹38,916" },
      { ratio: "75%", shares: "811", profit: "₹29,187" },
      { ratio: "50%", shares: "541", profit: "₹19,458" },
      { ratio: "25%", shares: "270", profit: "₹9,720" },
    ],
  }

  const dummyFinancialData = {
    companyName: buyback.companyName,
    financials: [
      { year: "FY 2024", revenue: "₹1,245.67", expense: "₹1,098.45", pat: "₹147.22" },
      { year: "FY 2023", revenue: "₹1,098.34", expense: "₹975.67", pat: "₹122.67" },
      { year: "FY 2022", revenue: "₹956.78", expense: "₹845.23", pat: "₹111.55" },
      { year: "FY 2021", revenue: "₹834.56", expense: "₹756.89", pat: "₹77.67" },
    ],
  }

  // Add FAQ data
  const faqs = [
    {
      q: "How do I participate in this buyback?",
      a: "To participate in this buyback, you must hold shares on the record date. Contact your broker or use their trading platform to tender your shares during the offer period.",
    },
    {
      q: "What is the record date for this buyback?",
      a: `The record date for this buyback is ${formatDate(buyback.recordDate)}. You must hold shares in your demat account on this date to be eligible.`,
    },
    {
      q: "Can I tender partial shares in the buyback?",
      a: "Yes, you can tender any number of shares you hold, up to your total holding. You don't have to tender all your shares in the buyback offer.",
    },
    {
      q: "When will I receive the buyback proceeds?",
      a: "Buyback proceeds are typically credited to your bank account within 7-10 working days after the buyback offer closes and acceptance is processed.",
    },
    {
      q: "What if the buyback is oversubscribed?",
      a: "If the buyback is oversubscribed, shares will be accepted on a proportionate basis. Small shareholders (holding up to ₹2 lakhs worth) get preferential treatment.",
    },
    {
      q: "Are there any tax implications?",
      a: "Yes, buyback proceeds are subject to capital gains tax. The tax treatment depends on your holding period and whether the shares are listed or unlisted.",
    },
    {
      q: "Can I buy more shares to participate in the buyback?",
      a: "You can buy shares before the record date to participate in the buyback, but ensure the shares are settled in your demat account by the record date.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-violet-900 to-purple-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,69,193,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/share-buyback-offers"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Buyback Offers
            </Link>
          </div>

          {/* Header */}
          <div className="text-white pb-16">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-3xl border border-white/20">
                  {buyback.companyName.charAt(0)}
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">{buyback.companyName}</h1>
                  <div className="text-2xl md:text-3xl font-semibold text-white/80 mb-6">
                    Buyback 2025 Record Date, Price & Ratio Details
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex items-center px-6 py-2 rounded-full text-base font-medium ${
                        buyback.status === "Open"
                          ? "bg-green-500/80 text-white"
                          : buyback.status === "Upcoming"
                            ? "bg-blue-500/80 text-white"
                            : "bg-gray-500/80 text-white"
                      }`}
                    >
                      {buyback.status}
                    </span>
                    <span className="inline-flex items-center px-6 py-2 rounded-full text-base font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                      {buyback.buybackType}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{buyback.buybackSize}</div>
                <div className="text-white/80 text-lg">Buyback Size</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Buyback Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Price Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                Price Information
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Offer Price</span>
                  <span className="font-bold text-2xl bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {formatPrice(buyback.offerPrice)}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Market Price</span>
                  <span className="font-bold text-xl text-gray-900">{formatPrice(buyback.marketPrice)}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Premium/Discount</span>
                  <div className="font-bold">{getPremiumDiscount(buyback.offerPrice, buyback.marketPrice)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                Buyback Information
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Company Name</span>
                  <span className="font-bold text-lg text-gray-900">{buyback.companyName}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Buyback Type</span>
                  <span className="font-bold text-lg text-gray-900">{buyback.buybackType}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Buyback Size</span>
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {buyback.buybackSize}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Status</span>
                  <div>{getStatusBadge(buyback.status)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline & Notes */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                Important Dates
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium mb-1 sm:mb-0">Record Date</span>
                  <span className="font-bold text-2xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {formatDate(buyback.recordDate)}
                  </span>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                  <div className="text-sm text-orange-800 leading-relaxed">
                    <strong>Record Date:</strong> Only shareholders holding shares on this date will be eligible to
                    participate in the buyback offer. Make sure your shares are in your demat account before this date.
                  </div>
                </div>
              </div>
            </div>

            {buyback.notes && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="p-3 bg-gradient-to-br from-gray-500 to-gray-600 rounded-xl mr-4">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  Additional Notes
                </h2>
                <div className="text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-6">{buyback.notes}</div>
              </div>
            )}

            <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 rounded-2xl border border-violet-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-6 w-6 mr-3 text-violet-600" />
                Key Highlights
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>
                    <strong>{buyback.buybackType}</strong> buyback mechanism
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>
                    Total buyback size of <strong>{buyback.buybackSize}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>
                    Current status: <strong>{buyback.status}</strong>
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span>
                    Premium of{" "}
                    <strong>
                      {(((buyback.offerPrice - buyback.marketPrice) / buyback.marketPrice) * 100).toFixed(1)}%
                    </strong>{" "}
                    to market price
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Buyback Components Section */}
        <div className="my-6 space-y-6">
          <BuybackOfferDetails {...dummyOfferDetails} />
          <BuybackAcceptanceRatio {...dummyAcceptanceData} />
          <BuybackFinancialReport {...dummyFinancialData} />
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Interested in {buyback.companyName} Buyback?</h3>
            <p className="text-violet-100 mb-6 max-w-2xl mx-auto">
              Make sure to check your eligibility and consult with your broker for participation details. Verify the
              record date and ensure your shares are in your demat account.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/share-buyback-offers"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                View All Buyback Offers
              </Link>
              <CTAButton variant="secondary" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Investment Tools</h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/upcoming-ipo-calendar"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO Calendar</h4>
              <p className="text-sm text-gray-600">Upcoming IPOs</p>
            </Link>

            <Link
              href="/ipo-subscription-status"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Subscription Status</h4>
              <p className="text-sm text-gray-600">Live IPO Data</p>
            </Link>

            <Link
              href="/ipo-grey-market-premium"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IPO GMP</h4>
              <p className="text-sm text-gray-600">Grey Market Premium</p>
            </Link>

            <Link
              href="/share-buyback-offers"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Buyback Offers</h4>
              <p className="text-sm text-gray-600">Share Buybacks</p>
            </Link>

            <Link
              href="/stock-brokers-comparison"
              className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/50"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Broker Comparison</h4>
              <p className="text-sm text-gray-600">Compare Brokers</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Add FAQ section before the closing div */}
      {faqs.length > 0 && (
        <section className="mt-16">
          <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
  Frequently Asked Questions
</h2>


            {faqs.map((faq, idx) => (
              <details key={idx} className="mb-4 rounded-md bg-gray-50 p-4 shadow">
                <summary className="cursor-pointer font-medium text-lg text-blue-700">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}

            <script type="application/ld+json" suppressHydrationWarning>
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.a,
                  },
                })),
              })}
            </script>
          </div>
        </section>
      )}
    </div>
  )
}
