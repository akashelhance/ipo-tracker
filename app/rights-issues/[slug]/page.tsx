import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CTAButton } from "@/components/cta-button"
import {
  ArrowLeft,
  Calendar,
  Building2,
  Award,
  Info,
  Target,
  TrendingUp,
  FileText,
  Users,
  Percent,
  DollarSign,
} from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

interface RightsIssueDetail {
  id: string
  companyName: string
  slug: string
  issueSize: string
  rightsRatio: string
  issuePrice: string
  recordDate: string
  issueOpenDate: string
  issueCloseDate: string
  marketPrice: string
  discount: string
  status: "Open" | "Upcoming" | "Closed"
  exchange: string[]
  description: string
  objectives: string[]
  eligibility: string[]
  howToApply: string[]
  importantDates: {
    announcement: string
    exDate: string
    recordDate: string
    tradingOfRE: string
    issueOpen: string
    issueClose: string
    allotment: string
    creditToDemat: string
  }
}

async function fetchRightsIssueDetail(slug: string): Promise<RightsIssueDetail | null> {
  const sampleData: RightsIssueDetail[] = [
    {
      id: "1",
      companyName: "Reliance Industries Ltd",
      slug: "reliance-industries-rights",
      issueSize: "₹15,000 Crores",
      rightsRatio: "1:10",
      issuePrice: "₹1,250",
      recordDate: "2025-01-20",
      issueOpenDate: "2025-02-01",
      issueCloseDate: "2025-02-15",
      marketPrice: "₹1,450",
      discount: "13.8%",
      status: "Upcoming",
      exchange: ["NSE", "BSE"],
      description: "Reliance Industries Limited is offering rights shares to its existing shareholders to raise capital for expansion, debt reduction, and working capital requirements.",
      objectives: [
        "Fund capital expenditure for new energy and green initiatives",
        "Strengthen balance sheet and reduce debt",
        "Invest in digital and retail business expansion",
        "Working capital requirements for ongoing projects",
      ],
      eligibility: [
        "All shareholders holding shares as on the record date",
        "Shares must be in demat form before record date",
        "Rights entitlements will be credited to eligible shareholders",
        "Both resident and non-resident shareholders are eligible",
      ],
      howToApply: [
        "Check your rights entitlement in your demat account",
        "Apply through your broker's trading platform or ASBA",
        "Select number of rights shares to subscribe",
        "Make payment through UPI, net banking, or cheque",
        "Submit application before the issue closing date",
      ],
      importantDates: {
        announcement: "2025-01-05",
        exDate: "2025-01-18",
        recordDate: "2025-01-20",
        tradingOfRE: "2025-01-22 to 2025-02-13",
        issueOpen: "2025-02-01",
        issueClose: "2025-02-15",
        allotment: "2025-02-20",
        creditToDemat: "2025-02-22",
      },
    },
  ]

  return sampleData.find((item) => item.slug === slug) || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const issue = await fetchRightsIssueDetail(params.slug)

  if (!issue) {
    return { title: "Rights Issue Not Found" }
  }

  return {
    title: `${issue.companyName} Rights Issue 2025 - Ratio, Price & Details`,
    description: `${issue.companyName} rights issue with ${issue.rightsRatio} ratio at ₹${issue.issuePrice} per share. ${issue.discount} discount to market price. Check eligibility and apply.`,
    keywords: `${issue.companyName} rights issue, rights shares, ${issue.companyName} rights entitlement`,
  }
}

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
}

export default async function RightsIssueDetailPage({ params }: { params: { slug: string } }) {
  const issue = await fetchRightsIssueDetail(params.slug)

  if (!issue) {
    notFound()
  }

  const faqs = [
    {
      q: `What is the rights ratio for ${issue.companyName}?`,
      a: `The rights ratio is ${issue.rightsRatio}, meaning you can subscribe to 1 new share for every 10 shares you hold as on the record date.`,
    },
    {
      q: "Am I eligible to participate?",
      a: `You are eligible if you held shares of ${issue.companyName} before the record date (${formatDate(issue.recordDate)}). Your rights entitlement will be credited to your demat account.`,
    },
    {
      q: "Can I sell my rights entitlement?",
      a: `Yes, you can sell your rights entitlement (RE) on the stock exchange during the trading period from ${formatDate(issue.importantDates.tradingOfRE.split(" to ")[0])} to ${formatDate(issue.importantDates.tradingOfRE.split(" to ")[1])}.`,
    },
    {
      q: "What is the discount offered?",
      a: `The issue price is ${issue.issuePrice} compared to the current market price of ${issue.marketPrice}, offering a discount of ${issue.discount}.`,
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
            name: `${issue.companyName} Rights Issue`,
            description: issue.description,
            provider: {
              "@type": "Organization",
              name: issue.companyName,
            },
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-rose-600/20"></div>
          <div className="relative container mx-auto px-4 py-12">
            <Link
              href="/rights-issues"
              className="inline-flex items-center text-white hover:text-purple-200 transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Rights Issues
            </Link>

            <div className="text-white">
              <div className="inline-flex items-center px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-4">
                <Award className="h-4 w-4 mr-2" />
                Rights Issue
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{issue.companyName} Rights Issue 2025</h1>
              <p className="text-xl text-purple-100 mb-6">{issue.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-purple-200 text-sm mb-1">Rights Ratio</div>
                  <div className="text-2xl font-bold">{issue.rightsRatio}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-purple-200 text-sm mb-1">Issue Price</div>
                  <div className="text-2xl font-bold">{issue.issuePrice}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-purple-200 text-sm mb-1">Discount</div>
                  <div className="text-2xl font-bold text-green-300">{issue.discount}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                  <div className="text-purple-200 text-sm mb-1">Issue Size</div>
                  <div className="text-2xl font-bold">{issue.issueSize}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Important Dates */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Calendar className="h-6 w-6 mr-3 text-purple-600" />
              Important Dates
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Announcement Date</span>
                <span className="font-semibold">{formatDate(issue.importantDates.announcement)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Ex-Date</span>
                <span className="font-semibold">{formatDate(issue.importantDates.exDate)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Record Date</span>
                <span className="font-semibold text-purple-600">{formatDate(issue.importantDates.recordDate)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Trading of RE</span>
                <span className="font-semibold">{issue.importantDates.tradingOfRE}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Issue Opens</span>
                <span className="font-semibold text-green-600">{formatDate(issue.importantDates.issueOpen)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Issue Closes</span>
                <span className="font-semibold text-red-600">{formatDate(issue.importantDates.issueClose)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Allotment Date</span>
                <span className="font-semibold">{formatDate(issue.importantDates.allotment)}</span>
              </div>
              <div className="flex justify-between items-center border-b pb-3">
                <span className="text-gray-600">Credit to Demat</span>
                <span className="font-semibold">{formatDate(issue.importantDates.creditToDemat)}</span>
              </div>
            </div>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-6 w-6 mr-3 text-purple-600" />
              Objectives of Rights Issue
            </h2>
            <ul className="space-y-3">
              {issue.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-purple-600" />
              Eligibility Criteria
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {issue.eligibility.map((criteria, index) => (
                <div key={index} className="flex items-start bg-purple-50 rounded-lg p-4">
                  <Percent className="h-5 w-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{criteria}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How to Apply */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3 text-purple-600" />
              How to Apply
            </h2>
            <div className="space-y-4">
              {issue.howToApply.map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Price Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
              Price Comparison
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Issue Price</div>
                <div className="text-3xl font-bold text-purple-600">{issue.issuePrice}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Market Price</div>
                <div className="text-3xl font-bold text-blue-600">{issue.marketPrice}</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                <div className="text-sm text-gray-600 mb-2">Discount</div>
                <div className="text-3xl font-bold text-green-600">{issue.discount}</div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <CTAButton size="lg" />
            <p className="text-gray-600 text-sm mt-3">Subscribe to rights issue through your broker</p>
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

