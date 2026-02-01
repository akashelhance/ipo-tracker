import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Star, ExternalLink, Check, Calendar, Users, TrendingUp, Home, ChevronRight } from "lucide-react"
import { brokers } from "@/lib/broker-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const broker = brokers.find((broker) => broker.slug === slug)

  if (!broker) {
    return {
      title: "Broker Not Found",
    }
  }

  return {
    title: `${broker.name} Review – Charges, Features & Account Opening`,
    description: `Complete review of ${broker.name} - ${broker.type} broker. Account opening charges: ${broker.accountOpeningCharge}, AMC: ${broker.accountMaintenanceCharge}. Open demat account today.`,
    openGraph: {
      title: `${broker.name} Review – Charges, Features & Account Opening`,
      description: `Complete review of ${broker.name} - ${broker.type} broker with detailed charges and features.`,
      type: "website",
    },
  }
}

export default async function BrokerDetailsPage({ params }: PageProps) {
  const { slug } = await params
  const broker = brokers.find((broker) => broker.slug === slug)

  if (!broker) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12">
          {/* Back Navigation */}
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm text-blue-200 mb-8">
            <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
              <Home className="h-3 w-3" /> Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-blue-400" />
            <Link href="/stock-brokers-comparison" className="hover:text-white transition-colors">Stock Brokers</Link>
            <ChevronRight className="h-4 w-4 mx-2 text-blue-400" />
            <span className="text-white font-medium">{broker.name}</span>
          </nav>

          {/* Header */}
          <div className="text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 overflow-hidden">
                  <Image
                    src={broker.logo || "/placeholder.svg"}
                    alt={`${broker.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">{broker.name}</h1>
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${broker.type === "Discount"
                          ? "bg-green-500/20 backdrop-blur-md text-green-100 border border-green-400/30"
                          : "bg-blue-500/20 backdrop-blur-md text-blue-100 border border-blue-400/30"
                        }`}
                    >
                      {broker.type} Broker
                    </span>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-white ml-1 font-semibold">{broker.rating}</span>
                    </div>
                  </div>
                  <p className="text-blue-100 text-lg max-w-2xl">{broker.description}</p>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href={broker.openAccountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Open Account Now
                  <ExternalLink className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Charges Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Brokerage Charges</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Account Opening Charge</span>
                <span className="font-bold text-xl text-blue-600">{broker.accountOpeningCharge}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Account Maintenance (AMC)</span>
                <span className="font-bold text-xl text-purple-600">{broker.accountMaintenanceCharge}</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Equity Delivery Brokerage</span>
                <span className="font-bold text-xl text-green-600">{broker.equityDeliveryBrokerage}</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-gray-600 font-medium">Equity Intraday Brokerage</span>
                <span className="font-bold text-xl text-orange-600">{broker.equityIntradayBrokerage}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="space-y-4">
              {broker.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-3">Ready to Start Trading with {broker.name}?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of investors who trust {broker.name} for their trading and investment needs.
              </p>
              <a
                href={broker.openAccountUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                Open Demat Account
                <ExternalLink className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8 mt-12">
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
          </div>
        </div>
      </div>
    </div>
  )
}
