import type { Metadata } from "next"
import { PPFCalculatorForm } from "@/components/ppf-calculator-form"

export const metadata: Metadata = {
  title: "PPF Calculator - Calculate Public Provident Fund Returns & Maturity Amount",
  description:
    "Use our free PPF Calculator to estimate your Public Provident Fund returns, maturity amount, and interest earned. Plan your tax-saving investments with accurate PPF calculations.",
  keywords: "PPF calculator, public provident fund calculator, PPF returns, PPF interest, tax saving investment",
}

export default function PPFCalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">PPF Calculator</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Calculate your Public Provident Fund returns and plan your long-term tax-saving investments
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <PPFCalculatorForm />
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">What is PPF (Public Provident Fund)?</h3>
              <p className="text-gray-700">
                Public Provident Fund (PPF) is a long-term savings scheme offered by the Government of India. It
                provides an opportunity to build a retirement corpus while enjoying tax benefits. PPF has a lock-in
                period of 15 years with the option to extend in blocks of 5 years thereafter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                What are the tax benefits of investing in PPF?
              </h3>
              <p className="text-gray-700">
                PPF offers triple tax benefits under the EEE (Exempt-Exempt-Exempt) category. Your investment amount is
                eligible for tax deduction under Section 80C of the Income Tax Act (up to ₹1.5 lakh per year). The
                interest earned and the maturity amount are also completely tax-free.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                Can I withdraw money from my PPF account before maturity?
              </h3>
              <p className="text-gray-700">
                Yes, partial withdrawals are allowed from the 7th financial year onwards. The maximum withdrawal amount
                is either 50% of the balance at the end of the 4th preceding year or 50% of the balance at the end of
                the immediate preceding year, whichever is lower. You can also take a loan against your PPF between the
                3rd and 6th year.
              </p>
            </div>
          </div>
        </div>

        {/* Related Calculators */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore Other Investment Calculators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a
              href="/calculators/sip"
              className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg text-center transition-colors"
            >
              <h3 className="font-semibold text-blue-700">SIP Calculator</h3>
              <p className="text-sm text-gray-600 mt-1">Calculate returns on systematic investments</p>
            </a>
            <a
              href="/calculators/fd"
              className="bg-orange-50 hover:bg-orange-100 p-4 rounded-lg text-center transition-colors"
            >
              <h3 className="font-semibold text-orange-700">FD Calculator</h3>
              <p className="text-sm text-gray-600 mt-1">Estimate fixed deposit maturity amounts</p>
            </a>
            <a
              href="/calculators/rd"
              className="bg-teal-50 hover:bg-teal-100 p-4 rounded-lg text-center transition-colors"
            >
              <h3 className="font-semibold text-teal-700">RD Calculator</h3>
              <p className="text-sm text-gray-600 mt-1">Calculate recurring deposit returns</p>
            </a>
            <a
              href="/calculators/lumpsum"
              className="bg-green-50 hover:bg-green-100 p-4 rounded-lg text-center transition-colors"
            >
              <h3 className="font-semibold text-green-700">Lumpsum Calculator</h3>
              <p className="text-sm text-gray-600 mt-1">Estimate one-time investment growth</p>
            </a>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is PPF (Public Provident Fund)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Public Provident Fund (PPF) is a long-term savings scheme offered by the Government of India. It provides an opportunity to build a retirement corpus while enjoying tax benefits. PPF has a lock-in period of 15 years with the option to extend in blocks of 5 years thereafter.",
                },
              },
              {
                "@type": "Question",
                name: "What are the tax benefits of investing in PPF?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PPF offers triple tax benefits under the EEE (Exempt-Exempt-Exempt) category. Your investment amount is eligible for tax deduction under Section 80C of the Income Tax Act (up to ₹1.5 lakh per year). The interest earned and the maturity amount are also completely tax-free.",
                },
              },
              {
                "@type": "Question",
                name: "Can I withdraw money from my PPF account before maturity?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, partial withdrawals are allowed from the 7th financial year onwards. The maximum withdrawal amount is either 50% of the balance at the end of the 4th preceding year or 50% of the balance at the end of the immediate preceding year, whichever is lower. You can also take a loan against your PPF between the 3rd and 6th year.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
