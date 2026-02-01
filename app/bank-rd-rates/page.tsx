import type { Metadata } from "next"
import Link from "next/link"
import { CTAButton } from "@/components/cta-button"
import {
  Building2,
  Star,
  ArrowRight,
  Info,
  Target,
  DollarSign,
  Percent,
  Repeat,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface BankRDRate {
  bankName: string
  category: string
  generalRate: string
  seniorCitizenRate: string
  tenure: string
  minMonthlyDeposit: string
  lastUpdated: string
}

// Revalidate every 1 hour for bank rate updates (change less frequently)
export const revalidate = 3600

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bank RD Interest Rates 2025 – Recurring Deposit Rates Comparison | Best RD Rates in India",
    description:
      "Compare bank RD interest rates 2025 for all major banks in India. Check latest recurring deposit rates for general and senior citizens with tenure and minimum monthly deposit details.",
    keywords:
      "RD interest rates 2025, recurring deposit rates, bank RD rates, RD rates comparison, best RD rates, senior citizen RD rates, highest RD rates",
    authors: [{ name: "Bank RD Rates Team" }],
    creator: "IPO Calendar",
    publisher: "IPO Calendar",
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
    openGraph: {
      title: "Bank RD Interest Rates 2025 – Recurring Deposit Rates Comparison",
      description:
        "Compare bank RD interest rates 2025 for all major banks in India. Find the best recurring deposit rates.",
      type: "website",
      locale: "en_IN",
      url: "https://yoursite.com/bank-rd-rates",
      siteName: "IPO Calendar",
      images: [
        {
          url: "https://yoursite.com/images/bank-rd-rates-og.jpg",
          width: 1200,
          height: 630,
          alt: "Bank RD Interest Rates 2025",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Bank RD Interest Rates 2025",
      description: "Compare bank RD interest rates for all major banks in India.",
      images: ["https://yoursite.com/images/bank-rd-rates-twitter.jpg"],
    },
    alternates: {
      canonical: "https://yoursite.com/bank-rd-rates",
    },
  }
}

async function fetchBankRDRates(): Promise<BankRDRate[]> {
  // Sample data - replace with actual API call
  return [
    {
      bankName: "State Bank of India",
      category: "Public Sector",
      generalRate: "6.50% - 7.00%",
      seniorCitizenRate: "7.00% - 7.50%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "HDFC Bank",
      category: "Private Sector",
      generalRate: "7.00% - 7.30%",
      seniorCitizenRate: "7.50% - 7.80%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "ICICI Bank",
      category: "Private Sector",
      generalRate: "7.00% - 7.10%",
      seniorCitizenRate: "7.50% - 7.60%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Axis Bank",
      category: "Private Sector",
      generalRate: "7.10% - 7.50%",
      seniorCitizenRate: "7.60% - 8.00%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Punjab National Bank",
      category: "Public Sector",
      generalRate: "6.50% - 7.15%",
      seniorCitizenRate: "7.00% - 7.65%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
    {
      bankName: "Bank of Baroda",
      category: "Public Sector",
      generalRate: "6.50% - 7.05%",
      seniorCitizenRate: "7.00% - 7.55%",
      tenure: "1 year - 10 years",
      minMonthlyDeposit: "₹100",
      lastUpdated: new Date().toISOString(),
    },
  ]
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default async function BankRDRatesPage() {
  const rdRates = await fetchBankRDRates()

  const publicSectorBanks = rdRates.filter((b) => b.category === "Public Sector").length
  const privateSectorBanks = rdRates.filter((b) => b.category === "Private Sector").length

  const faqs = [
    {
      q: "What is a Recurring Deposit (RD)?",
      a: "A Recurring Deposit is a savings scheme where you deposit a fixed amount every month for a predetermined period at a fixed interest rate. It helps in building a savings habit while earning interest on your deposits.",
    },
    {
      q: "What is the minimum monthly deposit for RD?",
      a: "The minimum monthly deposit varies by bank but typically starts from ₹100. Some banks may have higher minimum amounts like ₹500 or ₹1,000. There is generally no upper limit.",
    },
    {
      q: "What is the tenure for Recurring Deposits?",
      a: "RD tenure typically ranges from 6 months to 10 years. Most banks offer flexible tenure options in multiples of months. Longer tenures generally offer higher interest rates.",
    },
    {
      q: "Is RD interest taxable?",
      a: "Yes, RD interest is taxable as per your income tax slab. Banks deduct TDS if annual interest exceeds ₹40,000 for general citizens and ₹50,000 for senior citizens.",
    },
    {
      q: "What happens if I miss an RD installment?",
      a: "If you miss an installment, banks usually charge a penalty (typically ₹1-5 per ₹100 of installment). After missing multiple installments, the RD account may be discontinued or converted to FD.",
    },
    {
      q: "Can I withdraw my RD before maturity?",
      a: "Yes, premature withdrawal is allowed but banks charge a penalty (typically 1-2% lower than the contracted rate). You receive interest for the period the deposit was held.",
    },
    {
      q: "What is the difference between RD and SIP?",
      a: "RD offers fixed guaranteed returns from banks, while SIP (Systematic Investment Plan) in mutual funds offers market-linked returns with potential for higher gains but also higher risk.",
    },
    {
      q: "Can I take a loan against my RD?",
      a: "Yes, most banks offer loans against RDs typically up to 80-90% of the deposit value. Interest rates on such loans are usually 1-2% above the RD interest rate.",
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Bank RD Interest Rates 2025",
            description: "Compare bank RD interest rates for all major banks in India with tenure and minimum monthly deposit details.",
            url: "https://yoursite.com/bank-rd-rates",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://yoursite.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Bank RD Rates",
                  item: "https://yoursite.com/bank-rd-rates",
                },
              ],
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-blue-600/20"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
          </div>
          <div className="relative container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 border border-white/20">
                <Repeat className="h-4 w-4 mr-2" />
                Disciplined Savings
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Bank RD Interest Rates 2025
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8 max-w-3xl mx-auto">
                Compare recurring deposit interest rates from all major banks. Build your savings with monthly deposits.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="group bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{rdRates.length}</div>
              </div>
              <div className="text-teal-100 text-lg font-medium">Total Banks</div>
              <div className="text-teal-200 text-sm mt-1">RD options available</div>
            </div>

            <div className="group bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{publicSectorBanks}</div>
              </div>
              <div className="text-green-100 text-lg font-medium">Public Sector</div>
              <div className="text-green-200 text-sm mt-1">Government banks</div>
            </div>

            <div className="group bg-gradient-to-br from-purple-500 to-violet-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold">{privateSectorBanks}</div>
              </div>
              <div className="text-purple-100 text-lg font-medium">Private Sector</div>
              <div className="text-purple-200 text-sm mt-1">Private banks</div>
            </div>

            <div className="group bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl mb-4 inline-flex items-center">
                <DollarSign className="h-6 w-6 text-white mr-2" />
              </div>
              <Link
                href="https://zerodha.com/?c=QT4498&s=CONSOLE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-100 text-lg font-medium hover:underline inline-block"
              >
                Open Savings Account
              </Link>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-gray-50 to-teal-50 p-6 border-b border-gray-200/50">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Bank-wise RD Interest Rates</h2>
                  <p className="text-gray-600">Compare recurring deposit rates across major banks</p>
                </div>
                <div className="text-sm text-gray-600">
                  Last updated: {formatDate(rdRates[0].lastUpdated)}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Bank Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      General Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Senior Citizen Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Tenure
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Min Monthly Deposit
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {rdRates.map((rate, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 group"
                    >
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {rate.bankName.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <Link
                              href={`/bank-rd-rates/${rate.bankName.toLowerCase().replace(/\s+/g, '-')}`}
                              className="text-lg font-semibold text-gray-900 hover:text-teal-600 transition-colors group-hover:text-teal-700"
                            >
                              {rate.bankName}
                              <ArrowRight className="inline h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800">
                          {rate.category}
                        </span>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <Percent className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-lg font-bold text-green-600">{rate.generalRate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="flex items-center">
                          <Percent className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="text-lg font-bold text-purple-600">{rate.seniorCitizenRate}</span>
                        </div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-gray-700 font-medium">{rate.tenure}</div>
                      </td>
                      <td className="px-6 py-6">
                        <div className="text-lg font-bold text-teal-600">{rate.minMonthlyDeposit}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-12">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Info className="h-8 w-8 mr-4 text-teal-600" />
                Understanding Recurring Deposits
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  Recurring Deposits (RDs) are a savings scheme offered by banks where you deposit a fixed amount every
                  month for a predetermined period at a fixed interest rate. RDs are ideal for salaried individuals and
                  those looking to build a savings habit while earning interest. They offer the benefit of compounding and
                  help achieve financial goals through disciplined monthly investments.
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-6 my-8">
                  <h3 className="text-2xl font-bold text-teal-900 mb-4 flex items-center">
                    <Repeat className="h-6 w-6 mr-3" />
                    How RD Works
                  </h3>
                  <div className="text-teal-800 space-y-3">
                    <p><strong>Step 1:</strong> Choose your monthly deposit amount and tenure (6 months to 10 years)</p>
                    <p><strong>Step 2:</strong> Deposit the same amount every month on a fixed date</p>
                    <p><strong>Step 3:</strong> Interest is compounded quarterly on your deposits</p>
                    <p><strong>Step 4:</strong> Receive principal plus interest at maturity</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-4">Advantages of RD</h4>
                    <ul className="text-green-800 space-y-2 text-sm">
                      <li>✓ Fixed guaranteed returns</li>
                      <li>✓ Develops disciplined saving habit</li>
                      <li>✓ Low monthly commitment (from ₹100)</li>
                      <li>✓ Flexible tenure options</li>
                      <li>✓ Loan facility against RD</li>
                      <li>✓ Safe and secure investment</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-200 rounded-xl p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-4">Things to Consider</h4>
                    <ul className="text-orange-800 space-y-2 text-sm">
                      <li>• Interest is fully taxable</li>
                      <li>• Penalty for missed installments</li>
                      <li>• Lower returns than equity investments</li>
                      <li>• Premature withdrawal penalty applies</li>
                      <li>• Fixed monthly commitment required</li>
                      <li>• May not beat inflation over time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Start your savings journey with recurring deposits</p>
          </div>

          <div className="mt-12 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 border border-teal-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-teal-900 mb-6 flex items-center">
              <Target className="h-7 w-7 mr-3 text-teal-600" />
              Tips for Maximizing RD Returns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-teal-800">
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-teal-900">Choose Right Tenure</h4>
                <p className="leading-relaxed">
                  Longer tenures typically offer higher interest rates. Align your RD tenure with your financial goals to
                  ensure funds are available when needed without premature withdrawal.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-teal-900">Never Miss Installments</h4>
                <p className="leading-relaxed">
                  Set up automatic debits to ensure timely payments. Missing installments attracts penalties and may lead to
                  account discontinuation after multiple defaults.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-teal-900">Compare Bank Rates</h4>
                <p className="leading-relaxed">
                  Interest rates vary across banks. Compare rates and choose banks offering higher returns. Small finance
                  banks often offer better rates than large banks.
                </p>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3 text-teal-900">Consider Alternatives</h4>
                <p className="leading-relaxed">
                  For higher risk appetite, consider SIPs in mutual funds which may offer better long-term returns. However,
                  RDs are safer for conservative investors seeking guaranteed returns.
                </p>
              </div>
            </div>
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
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.a,
                      },
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

