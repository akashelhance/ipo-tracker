import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTAButton } from "@/components/cta-button"
import {
  ArrowLeft,
  Building2,
  Percent,
  Calendar,
  Award,
  Info,
  TrendingUp,
  Users,
  Repeat,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface BankRDDetail {
  bankName: string
  slug: string
  category: string
  description: string
  rateSlabs: {
    tenure: string
    generalRate: string
    seniorCitizenRate: string
    minMonthlyDeposit: string
  }[]
  features: string[]
  eligibility: string[]
  documents: string[]
  penalties: {
    missedInstallment: string
    prematureWithdrawal: string
  }
}

async function fetchBankRDDetail(bank: string): Promise<BankRDDetail | null> {
  const sampleData: Record<string, BankRDDetail> = {
    "hdfc-bank": {
      bankName: "HDFC Bank",
      slug: "hdfc-bank",
      category: "Private Sector",
      description: "HDFC Bank Recurring Deposit scheme helps you build savings systematically with monthly deposits. Earn attractive interest rates with flexible tenure options from 6 months to 10 years.",
      rateSlabs: [
        { tenure: "6-11 months", generalRate: "6.50%", seniorCitizenRate: "7.00%", minMonthlyDeposit: "₹100" },
        { tenure: "1-2 years", generalRate: "7.00%", seniorCitizenRate: "7.50%", minMonthlyDeposit: "₹100" },
        { tenure: "2-3 years", generalRate: "7.00%", seniorCitizenRate: "7.50%", minMonthlyDeposit: "₹100" },
        { tenure: "3-5 years", generalRate: "7.10%", seniorCitizenRate: "7.60%", minMonthlyDeposit: "₹100" },
        { tenure: "5-10 years", generalRate: "7.30%", seniorCitizenRate: "7.80%", minMonthlyDeposit: "₹100" },
      ],
      features: [
        "Low minimum monthly deposit of ₹100",
        "Flexible tenure from 6 months to 10 years",
        "Senior citizen rates up to 7.80%",
        "Loan facility up to 90% of deposit value",
        "Auto-debit facility for monthly installments",
        "Quarterly compounding of interest",
        "Online RD account opening",
        "Nomination facility available",
      ],
      eligibility: [
        "Resident Indian individuals",
        "Joint accounts allowed",
        "Minors through guardians",
        "Hindu Undivided Families (HUF)",
      ],
      documents: [
        "PAN Card",
        "Aadhaar Card or government-issued ID",
        "Address proof",
        "Passport-size photographs",
        "Savings account in the same bank",
      ],
      penalties: {
        missedInstallment: "₹1.50 per ₹100 of installment amount",
        prematureWithdrawal: "1% lower than the contracted rate for the period held",
      },
    },
    "sbi": {
      bankName: "State Bank of India",
      slug: "sbi",
      category: "Public Sector",
      description: "SBI Recurring Deposit is a popular savings scheme that enables you to deposit a fixed amount every month and earn attractive interest. Build your corpus systematically with India's largest bank.",
      rateSlabs: [
        { tenure: "6-11 months", generalRate: "6.50%", seniorCitizenRate: "7.00%", minMonthlyDeposit: "₹100" },
        { tenure: "1-2 years", generalRate: "6.80%", seniorCitizenRate: "7.30%", minMonthlyDeposit: "₹100" },
        { tenure: "2-3 years", generalRate: "6.75%", seniorCitizenRate: "7.25%", minMonthlyDeposit: "₹100" },
        { tenure: "3-5 years", generalRate: "6.50%", seniorCitizenRate: "7.50%", minMonthlyDeposit: "₹100" },
        { tenure: "5-10 years", generalRate: "7.15%", seniorCitizenRate: "7.65%", minMonthlyDeposit: "₹100" },
      ],
      features: [
        "Trusted government-backed bank",
        "Minimum monthly deposit of just ₹100",
        "Special rates for senior citizens",
        "Loan against RD up to 90%",
        "Auto-debit from savings account",
        "Premature withdrawal allowed",
        "Online account through YONO app",
        "Deposit insurance coverage",
      ],
      eligibility: [
        "Resident Indians",
        "Minors through guardians",
        "Joint account holders",
        "Hindu Undivided Families (HUF)",
      ],
      documents: [
        "PAN Card",
        "Aadhaar Card",
        "Address proof",
        "Passport-size photographs",
        "Existing SBI savings account",
      ],
      penalties: {
        missedInstallment: "₹1.50 per ₹100 of installment amount (may vary by branch)",
        prematureWithdrawal: "1-2% lower than the applicable rate for the period of deposit",
      },
    },
  }

  const bankKey = bank.toLowerCase()
  return sampleData[bankKey] || null
}

export async function generateMetadata({ params }: { params: { bank: string } }): Promise<Metadata> {
  const data = await fetchBankRDDetail(params.bank)

  if (!data) {
    return { title: "Bank Not Found" }
  }

  return {
    title: `${data.bankName} RD Interest Rates 2025 - Recurring Deposit Rates & Calculator`,
    description: `${data.bankName} RD interest rates for 2025. Check latest recurring deposit rates for all tenures, senior citizen rates. Minimum monthly deposit from ${data.rateSlabs[0].minMonthlyDeposit}.`,
    keywords: `${data.bankName} RD rates, ${data.bankName} recurring deposit, ${data.bankName} RD interest rate 2025`,
  }
}

export default async function BankRDDetailPage({ params }: { params: { bank: string } }) {
  const data = await fetchBankRDDetail(params.bank)

  if (!data) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the interest rate for ${data.bankName} RD?`,
      a: `${data.bankName} offers RD interest rates ranging from ${data.rateSlabs[0].generalRate} to ${data.rateSlabs[data.rateSlabs.length - 1].generalRate} for general citizens and up to ${data.rateSlabs[data.rateSlabs.length - 1].seniorCitizenRate} for senior citizens.`,
    },
    {
      q: `What is the minimum monthly deposit for ${data.bankName} RD?`,
      a: `The minimum monthly deposit required is ${data.rateSlabs[0].minMonthlyDeposit}. You can deposit higher amounts as per your savings capacity.`,
    },
    {
      q: `What happens if I miss an RD installment in ${data.bankName}?`,
      a: `If you miss an installment, a penalty of ${data.penalties.missedInstallment} will be charged. After missing multiple installments, the account may be discontinued.`,
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialProduct",
            name: `${data.bankName} Recurring Deposit`,
            description: data.description,
            provider: {
              "@type": "Organization",
              name: data.bankName,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-blue-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/bank-rd-rates"
              className="inline-flex items-center text-white hover:text-teal-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Banks
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <Building2 className="h-4 w-4 mr-2" />
                {data.category} Bank
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.bankName} RD Rates 2025</h1>
              <p className="text-xl text-teal-100 mb-6">{data.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Interest Rate Slabs */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Percent className="h-6 w-6 mr-3 text-teal-600" />
              RD Interest Rate Slabs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tenure</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">General Rate</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Senior Citizen Rate</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Min Monthly Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.rateSlabs.map((slab, index) => (
                    <tr key={index} className="hover:bg-teal-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{slab.tenure}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{slab.generalRate}</td>
                      <td className="px-6 py-4 text-purple-600 font-bold">{slab.seniorCitizenRate}</td>
                      <td className="px-6 py-4 text-gray-700">{slab.minMonthlyDeposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-teal-600" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-teal-50 rounded-lg p-4">
                  <Repeat className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Penalties */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 mr-3 text-teal-600" />
              Penalties & Charges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-amber-900">Missed Installment</h3>
                <p className="text-amber-800">{data.penalties.missedInstallment}</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2 text-red-900">Premature Withdrawal</h3>
                <p className="text-red-800">{data.penalties.prematureWithdrawal}</p>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-teal-600" />
              Eligibility Criteria
            </h2>
            <ul className="space-y-3">
              {data.eligibility.map((criteria, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{criteria}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Required Documents */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-teal-600" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.documents.map((doc, index) => (
                <div key={index} className="flex items-start bg-teal-50 rounded-lg p-4">
                  <TrendingUp className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Start your RD with {data.bankName} today</p>
          </div>

          <OtherInvestmentOptionWithDemat />
        </div>

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
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.q,
                      acceptedAnswer: { "@type": "Answer", text: faq.a },
                    })),
                  }),
                }}
              />
            </div>
          </section>
        )}
      </div>
    </>
  )
}

