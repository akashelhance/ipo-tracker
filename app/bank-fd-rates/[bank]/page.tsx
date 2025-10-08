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
  DollarSign,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface BankFDDetail {
  bankName: string
  slug: string
  category: string
  description: string
  rateSlabs: {
    tenure: string
    generalRate: string
    seniorCitizenRate: string
    minDeposit: string
  }[]
  features: string[]
  eligibility: string[]
  documents: string[]
  specialSchemes: {
    name: string
    description: string
    rate: string
  }[]
}

async function fetchBankFDDetail(bank: string): Promise<BankFDDetail | null> {
  const sampleData: Record<string, BankFDDetail> = {
    "hdfc-bank": {
      bankName: "HDFC Bank",
      slug: "hdfc-bank",
      category: "Private Sector",
      description: "HDFC Bank offers competitive fixed deposit interest rates with flexible tenure options ranging from 7 days to 10 years. The bank provides special rates for senior citizens and offers both cumulative and non-cumulative options.",
      rateSlabs: [
        { tenure: "7-14 days", generalRate: "3.00%", seniorCitizenRate: "3.50%", minDeposit: "₹5,000" },
        { tenure: "15-29 days", generalRate: "3.00%", seniorCitizenRate: "3.50%", minDeposit: "₹5,000" },
        { tenure: "30-45 days", generalRate: "3.50%", seniorCitizenRate: "4.00%", minDeposit: "₹5,000" },
        { tenure: "46-90 days", generalRate: "4.00%", seniorCitizenRate: "4.50%", minDeposit: "₹5,000" },
        { tenure: "91-120 days", generalRate: "4.50%", seniorCitizenRate: "5.00%", minDeposit: "₹5,000" },
        { tenure: "121-180 days", generalRate: "5.00%", seniorCitizenRate: "5.50%", minDeposit: "₹5,000" },
        { tenure: "181-270 days", generalRate: "6.00%", seniorCitizenRate: "6.50%", minDeposit: "₹5,000" },
        { tenure: "271 days-1 year", generalRate: "6.50%", seniorCitizenRate: "7.00%", minDeposit: "₹5,000" },
        { tenure: "1-2 years", generalRate: "7.00%", seniorCitizenRate: "7.50%", minDeposit: "₹5,000" },
        { tenure: "2-3 years", generalRate: "7.00%", seniorCitizenRate: "7.50%", minDeposit: "₹5,000" },
        { tenure: "3-5 years", generalRate: "7.10%", seniorCitizenRate: "7.60%", minDeposit: "₹5,000" },
        { tenure: "5-10 years", generalRate: "7.40%", seniorCitizenRate: "7.90%", minDeposit: "₹5,000" },
      ],
      features: [
        "Competitive interest rates up to 7.90% for senior citizens",
        "Flexible tenure from 7 days to 10 years",
        "Cumulative and non-cumulative options available",
        "Loan facility up to 90% of deposit value",
        "Auto-renewal facility available",
        "Premature withdrawal allowed with penalty",
        "Online FD booking through NetBanking and Mobile App",
        "TDS certificate provided for tax filing",
      ],
      eligibility: [
        "Indian residents, NRIs, and HUFs",
        "Individuals above 18 years of age",
        "Minors through guardians",
        "Partnership firms and companies",
        "Trusts and societies",
      ],
      documents: [
        "PAN Card (mandatory for deposits above ₹5 lakhs)",
        "Aadhaar Card or any government-issued ID",
        "Address proof (utility bill, rent agreement)",
        "Passport-size photographs",
        "Existing savings/current account statement (if applicable)",
      ],
      specialSchemes: [
        {
          name: "Tax Saver FD",
          description: "5-year lock-in period with tax benefits under Section 80C up to ₹1.5 lakh",
          rate: "7.00%",
        },
        {
          name: "Senior Citizen FD",
          description: "Additional 0.50% interest rate for citizens above 60 years",
          rate: "Up to 7.90%",
        },
        {
          name: "Flexi Fixed Deposit",
          description: "Auto-sweep facility linking savings and FD account for better returns",
          rate: "Variable",
        },
      ],
    },
    "sbi": {
      bankName: "State Bank of India",
      slug: "sbi",
      category: "Public Sector",
      description: "State Bank of India, India's largest public sector bank, offers attractive FD rates with the security and trust of a government-backed institution. SBI provides special rates for senior citizens and various tenure options.",
      rateSlabs: [
        { tenure: "7-45 days", generalRate: "3.50%", seniorCitizenRate: "4.00%", minDeposit: "₹1,000" },
        { tenure: "46-179 days", generalRate: "4.50%", seniorCitizenRate: "5.00%", minDeposit: "₹1,000" },
        { tenure: "180-210 days", generalRate: "5.50%", seniorCitizenRate: "6.00%", minDeposit: "₹1,000" },
        { tenure: "211 days-1 year", generalRate: "6.50%", seniorCitizenRate: "7.00%", minDeposit: "₹1,000" },
        { tenure: "1-2 years", generalRate: "6.80%", seniorCitizenRate: "7.30%", minDeposit: "₹1,000" },
        { tenure: "2-3 years", generalRate: "6.75%", seniorCitizenRate: "7.25%", minDeposit: "₹1,000" },
        { tenure: "3-5 years", generalRate: "6.50%", seniorCitizenRate: "7.50%", minDeposit: "₹1,000" },
        { tenure: "5-10 years", generalRate: "7.10%", seniorCitizenRate: "7.60%", minDeposit: "₹1,000" },
      ],
      features: [
        "Trusted government-backed bank",
        "Low minimum deposit of ₹1,000",
        "Senior citizen rates up to 7.60%",
        "Loan against FD up to 95% of deposit",
        "Auto-renewal facility",
        "Online booking through YONO app",
        "Deposit insurance up to ₹5 lakhs per depositor",
        "Nomination facility available",
      ],
      eligibility: [
        "Resident Indians",
        "Non-Resident Indians (NRE/NRO FDs)",
        "Minors through guardians",
        "Hindu Undivided Families (HUF)",
        "Companies and partnership firms",
      ],
      documents: [
        "PAN Card",
        "Aadhaar Card",
        "Address proof",
        "Passport-size photographs",
        "Existing SBI account details (if applicable)",
      ],
      specialSchemes: [
        {
          name: "SBI Tax Saving FD",
          description: "5-year FD with tax benefits under Section 80C",
          rate: "6.50%",
        },
        {
          name: "SBI Amrit Kalash",
          description: "Special scheme for senior citizens with higher returns",
          rate: "7.60%",
        },
        {
          name: "Annuity Deposit Scheme",
          description: "Monthly income option for retirees",
          rate: "Variable",
        },
      ],
    },
  }

  const bankKey = bank.toLowerCase()
  return sampleData[bankKey] || null
}

export async function generateMetadata({ params }: { params: { bank: string } }): Promise<Metadata> {
  const data = await fetchBankFDDetail(params.bank)

  if (!data) {
    return { title: "Bank Not Found" }
  }

  return {
    title: `${data.bankName} FD Interest Rates 2025 - Fixed Deposit Rates & Calculator`,
    description: `${data.bankName} FD interest rates for 2025. Check latest fixed deposit rates for all tenures, senior citizen rates, and special schemes. Minimum deposit from ${data.rateSlabs[0].minDeposit}.`,
    keywords: `${data.bankName} FD rates, ${data.bankName} fixed deposit, ${data.bankName} FD interest rate 2025`,
  }
}

export default async function BankFDDetailPage({ params }: { params: { bank: string } }) {
  const data = await fetchBankFDDetail(params.bank)

  if (!data) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the interest rate for ${data.bankName} FD?`,
      a: `${data.bankName} offers FD interest rates ranging from ${data.rateSlabs[0].generalRate} to ${data.rateSlabs[data.rateSlabs.length - 1].generalRate} for general citizens and up to ${data.rateSlabs[data.rateSlabs.length - 1].seniorCitizenRate} for senior citizens.`,
    },
    {
      q: `What is the minimum deposit for ${data.bankName} FD?`,
      a: `The minimum deposit required is ${data.rateSlabs[0].minDeposit}. You can invest higher amounts as per your financial goals.`,
    },
    {
      q: `Can I get a loan against ${data.bankName} FD?`,
      a: `Yes, ${data.bankName} provides loan facility against FD up to 90-95% of the deposit value at interest rates typically 1-2% above the FD rate.`,
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
            name: `${data.bankName} Fixed Deposit`,
            description: data.description,
            provider: {
              "@type": "Organization",
              name: data.bankName,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/bank-fd-rates"
              className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Banks
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <Building2 className="h-4 w-4 mr-2" />
                {data.category} Bank
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{data.bankName} FD Rates 2025</h1>
              <p className="text-xl text-blue-100 mb-6">{data.description}</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Interest Rate Slabs */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Percent className="h-6 w-6 mr-3 text-blue-600" />
              FD Interest Rate Slabs
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tenure</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">General Rate</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Senior Citizen Rate</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Min Deposit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.rateSlabs.map((slab, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="px-6 py-4 font-medium text-gray-900">{slab.tenure}</td>
                      <td className="px-6 py-4 text-green-600 font-bold">{slab.generalRate}</td>
                      <td className="px-6 py-4 text-purple-600 font-bold">{slab.seniorCitizenRate}</td>
                      <td className="px-6 py-4 text-gray-700">{slab.minDeposit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-3 text-blue-600" />
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, index) => (
                <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                  <TrendingUp className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Special Schemes */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-3 text-blue-600" />
              Special FD Schemes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.specialSchemes.map((scheme, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-2 text-blue-900">{scheme.name}</h3>
                  <p className="text-gray-700 text-sm mb-3">{scheme.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{scheme.rate}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-blue-600" />
              Eligibility Criteria
            </h2>
            <ul className="space-y-3">
              {data.eligibility.map((criteria, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
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
              <Info className="h-6 w-6 mr-3 text-blue-600" />
              Required Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.documents.map((doc, index) => (
                <div key={index} className="flex items-start bg-blue-50 rounded-lg p-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Open an account with {data.bankName} today</p>
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

