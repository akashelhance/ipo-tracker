import Link from "next/link";
import {
  Calendar,
  TrendingUp,
  Calculator,
  FileText,
  Users,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import { CTAButton } from "@/components/cta-button";

export default function OtherInvestmentOptionWithDemat() {
  return (
    <>
      {/* Explore More Investment Tools Section */}
      <div className="mt-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore More Investment Tools
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of investment tools and resources
            to make informed decisions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* IPO Calendar */}
          <Link href="/upcoming-ipo-calendar" className="group">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  IPO Calendar
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Track all upcoming IPOs with dates, price bands, and
                subscription details
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                View Calendar <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Subscription Status */}
          <Link href="/ipo-subscription-status" className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-green-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-600 rounded-xl">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Subscription Status
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time IPO subscription data and oversubscription ratios
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                Check Status <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* GMP */}
          <Link href="/ipo-grey-market-premium" className="group">
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-purple-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-600 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Grey Market Premium
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Latest GMP rates and market sentiment for upcoming IPOs
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                View GMP <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Calculators */}
          <Link href="/calculators" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-600 rounded-xl">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Investment Calculators
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                SIP, Lumpsum, FD, PPF and other financial calculators
              </p>
              <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                Use Calculators <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Broker Comparison */}
          <Link href="/stock-brokers-comparison" className="group">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-teal-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-teal-600 rounded-xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Broker Comparison
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Compare brokerage charges, features and choose the best broker
              </p>
              <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                Compare Brokers <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Blog */}
          <Link href="/blog" className="group">
            <div className="bg-gradient-to-br from-rose-50 to-pink-100 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-rose-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-rose-600 rounded-xl">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  Investment Blog
                </h4>
              </div>
              <p className="text-gray-600 mb-4">
                Latest market insights, IPO analysis and investment tips
              </p>
              <div className="flex items-center text-rose-600 font-semibold group-hover:text-rose-700">
                Read Articles <ExternalLink className="h-4 w-4 ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Zerodha CTA Section */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Invest in SME IPOs?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Open your demat account with India's largest broker and start
            investing in SME IPOs with zero brokerage on equity delivery trades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Zero brokerage on equity delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Advanced trading platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Trusted by 1.5+ crore investors</span>
            </div>
          </div>
          <CTAButton
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          />
        </div>
      </div>
    </>
  );
}
