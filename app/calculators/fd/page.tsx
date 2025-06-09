import type { Metadata } from "next"
import Link from "next/link"
import { PiggyBank, ArrowLeft } from "lucide-react"
import { FDCalculatorForm } from "@/components/fd-calculator-form"

export const metadata: Metadata = {
  title: "FD Calculator - Fixed Deposit Calculator | Calculate FD Returns Online",
  description:
    "Calculate your Fixed Deposit (FD) maturity amount and interest with our free online FD calculator. Compare FD rates and plan your investments.",
  keywords: "FD calculator, fixed deposit calculator, FD returns, bank FD rates, deposit calculator",
  openGraph: {
    title: "FD Calculator - Fixed Deposit Calculator | Calculate FD Returns Online",
    description:
      "Calculate your Fixed Deposit (FD) maturity amount and interest with our free online FD calculator. Compare FD rates and plan your investments.",
    url: "/calculators/fd",
    siteName: "InvestWise",
    images: [
      {
        url: "/og-image.png", // Replace with your actual image URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: "FD Calculator - Fixed Deposit Calculator | Calculate FD Returns Online",
    description:
      "Calculate your Fixed Deposit (FD) maturity amount and interest with our free online FD calculator. Compare FD rates and plan your investments.",
    images: ["/og-image.png"], // Replace with your actual image URL
    creator: "@InvestWise", // Replace with your Twitter handle
  },
  // JSON-LD metadata
  other: {
    "application-name": "InvestWise",
    "apple-mobile-web-app-title": "InvestWise",
    "msapplication-name": "InvestWise",
    "theme-color": "#ffffff",
    "twitter:site": "@InvestWise",
    "twitter:creator": "@InvestWise",
    "json-ld": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a Fixed Deposit (FD)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Fixed Deposit (FD) is a financial instrument provided by banks or NBFCs which provides investors a higher rate of interest than a regular savings account, until the given maturity date.",
          },
        },
        {
          "@type": "Question",
          name: "How is FD interest calculated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FD interest is typically calculated based on the principal amount, interest rate, and tenure of the deposit. The compounding frequency also affects the final maturity amount.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of investing in FDs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FDs offer guaranteed returns, capital protection, and are considered a safe investment option, especially suitable for risk-averse investors.",
          },
        },
      ],
    }),
  },
}

export default function FDCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/calculators"
            className="inline-flex items-center text-orange-100 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Calculators
          </Link>

          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
              <PiggyBank className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">FD Calculator</h1>
              <p className="text-orange-100 text-lg">Calculate Fixed Deposit maturity amount and interest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* FD Calculator Form */}
            <FDCalculatorForm />

            {/* Benefits of FD Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Benefits of Investing in Fixed Deposits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Benefit 1 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Guaranteed Returns</h3>
                  <p className="text-gray-600">
                    FDs offer fixed interest rates, ensuring predictable returns regardless of market fluctuations.
                  </p>
                </div>

                {/* Benefit 2 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Capital Protection</h3>
                  <p className="text-gray-600">
                    Your principal amount is safe and secure, making FDs a low-risk investment option.
                  </p>
                </div>

                {/* Benefit 3 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Flexible Tenure</h3>
                  <p className="text-gray-600">
                    Choose a deposit tenure that suits your financial goals, ranging from a few months to several years.
                  </p>
                </div>

                {/* Benefit 4 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Loan Facility</h3>
                  <p className="text-gray-600">
                    Banks often provide loan facilities against FDs, allowing you to access funds without breaking your
                    deposit.
                  </p>
                </div>

                {/* Benefit 5 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Senior Citizen Benefits</h3>
                  <p className="text-gray-600">
                    Many banks offer higher interest rates on FDs for senior citizens, providing them with enhanced
                    returns.
                  </p>
                </div>

                {/* Benefit 6 */}
                <div className="p-6 bg-orange-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-orange-700 mb-2">Easy to Open</h3>
                  <p className="text-gray-600">
                    Opening an FD account is simple and can be done online or offline through various banks and
                    financial institutions.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800">What is the minimum amount required to open an FD?</h3>
                  <p className="text-gray-600">
                    The minimum amount varies from bank to bank, but it typically starts from ₹1,000.
                  </p>
                </div>

                {/* FAQ 2 */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800">What is the maximum tenure for an FD?</h3>
                  <p className="text-gray-600">
                    The maximum tenure can range from 5 years to 10 years, depending on the bank's policies.
                  </p>
                </div>

                {/* FAQ 3 */}
                <div className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800">Is there any tax benefit on FD investments?</h3>
                  <p className="text-gray-600">
                    Yes, you can claim a tax deduction of up to ₹1.5 lakh under Section 80C of the Income Tax Act for
                    tax-saving FDs with a lock-in period of 5 years.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Calculators Section */}
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Other Calculators</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Calculator 1 */}
                <Link
                  href="/calculators/sip"
                  className="bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">SIP Calculator</h3>
                  <p className="text-gray-600">
                    Plan your investments in Systematic Investment Plans (SIP) and estimate returns.
                  </p>
                </Link>

                {/* Calculator 2 */}
                <Link
                  href="/calculators/loan"
                  className="bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Loan EMI Calculator</h3>
                  <p className="text-gray-600">
                    Calculate your Equated Monthly Installments (EMI) for various loan types.
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
