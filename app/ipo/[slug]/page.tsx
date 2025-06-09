import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, DollarSign, Building2, TrendingUp, Target, Users, Star } from "lucide-react"
import { ipos } from "@/lib/ipo-data"
import { CTAButton } from "@/components/cta-button"
import { IpoFinancialReport } from "@/components/ipo-financial-report"
import { IpoValuationSection } from "@/components/ipo-valuation-section"
import { PeerGroupComparison } from "@/components/peer-group-comparison"
import { ObjectsOfTheIssue } from "@/components/objects-of-the-issue"
import { IpoReviewSources } from "@/components/ipo-review-sources"
import { IpoRegistrarDetails } from "@/components/ipo-registrar-details"
import { IpoLeadManagers } from "@/components/ipo-lead-managers"
import { CompanyAddress } from "@/components/company-address"
import { IpoDetailsSection } from "@/components/ipo-details-section"
import { IpoMarketLotTable } from "@/components/ipo-market-lot-table"

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const ipo = ipos.find((ipo) => ipo.slug === slug)

  if (!ipo) {
    return {
      title: "IPO Not Found",
    }
  }

  return {
    title: `${ipo.companyName} IPO Date, Review, Price, Allotment Details 2025 – Price Band ₹${ipo.priceBandLow}-₹${ipo.priceBandHigh} | Dates & Review`,
    description: `Get complete details about ${ipo.companyName} IPO including price band ₹${ipo.priceBandLow}-₹${ipo.priceBandHigh}, issue dates ${ipo.openDate} to ${ipo.closeDate}, lot size ${ipo.marketLot} shares, and ${ipo.exchangePlatform} listing.`,
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

function formatPriceBand(low: number, high: number): string {
  return `₹${low} - ₹${high}`
}

export default function IPODetailsPage({ params }: PageProps) {
  const { slug } = params
  const ipo = ipos.find((ipo) => ipo.slug === slug)

  if (!ipo) {
    notFound()
  }

  // Dummy IPO details data
  const dummyIpoDetails = {
    openDate: "June 13, 2025",
    closeDate: "June 17, 2025",
    allotmentDate: "June 18, 2025",
    listingDate: "June 20, 2025",
    faceValue: "₹10 per share",
    priceBand: "₹430 to ₹450 per share",
    issueSize: "₹800 crore",
    freshIssue: "₹500 crore",
    offerForSale: "₹300 crore",
    issueType: "Book Built Issue IPO",
    listing: "BSE, NSE",
    retailQuota: "35% of the net offer",
    qibQuota: "50% of the net offer",
    niiQuota: "15% of the net offer",
    drhpLink: "https://www.sebi.gov.in/filings/public-issues/oswal-pumps-drhp.pdf",
    rhpLink: "https://www.sebi.gov.in/filings/public-issues/oswal-pumps-rhp.pdf",
    anchorLink: "https://www.sebi.gov.in/filings/public-issues/oswal-pumps-anchor.pdf",
    revenueFY23: "₹198.34 crore",
    revenueFY24: "₹245.67 crore",
    profitFY23: "₹18.45 crore",
    profitFY24: "₹35.22 crore",
  }

  // Dummy financial data
  const dummyFinancials = {
    summary:
      "Oswal Pumps Limited has shown consistent growth in revenue over the past three years, with a significant improvement in profitability. The company's financial performance demonstrates strong operational efficiency and effective cost management strategies. The increasing trend in assets indicates expansion and investment in business growth.",
    table: [
      {
        period: "FY 2024",
        revenue: "₹245.67 Cr",
        expense: "₹198.45 Cr",
        profitAfterTax: "₹35.22 Cr",
        assets: "₹412.89 Cr",
      },
      {
        period: "FY 2023",
        revenue: "₹198.34 Cr",
        expense: "₹175.67 Cr",
        profitAfterTax: "₹18.45 Cr",
        assets: "₹356.78 Cr",
      },
      {
        period: "FY 2022",
        revenue: "₹156.78 Cr",
        expense: "₹145.23 Cr",
        profitAfterTax: "₹8.92 Cr",
        assets: "₹298.45 Cr",
      },
    ],
  }

  // Dummy valuation data
  const dummyValuation = {
    roe: "18.5%",
    roce: "22.3%",
    ebitdaMargin: "24.8%",
    patMargin: "14.3%",
    debtToEquity: "0.45",
    eps: "₹28.50",
    peRatio: "15.2x",
    ronw: "19.7%",
    nav: "₹145.60",
  }

  // Dummy peer group comparison data
  const dummyPeerComparison = [
    {
      name: "Oswal Pumps",
      eps: "₹28.50",
      peRatio: "15.2x",
      ronw: "19.7%",
      nav: "₹145.60",
      income: "₹245.67 Cr",
    },
    {
      name: "Kirloskar Brothers",
      eps: "₹32.10",
      peRatio: "18.5x",
      ronw: "16.2%",
      nav: "₹168.90",
      income: "₹3,245.80 Cr",
    },
    {
      name: "Grundfos Pumps",
      eps: "₹45.20",
      peRatio: "22.1x",
      ronw: "21.5%",
      nav: "₹198.45",
      income: "₹1,567.30 Cr",
    },
    {
      name: "Crompton Greaves",
      eps: "₹38.75",
      peRatio: "19.8x",
      ronw: "18.9%",
      nav: "₹175.20",
      income: "₹4,890.60 Cr",
    },
  ]

  // Dummy objects of the issue data
  const dummyObjectsOfIssue = [
    "To fund capital expenditure requirements for expansion of manufacturing facilities",
    "To repay or prepay certain borrowings availed by the company",
    "To fund working capital requirements of the company",
    "To fund research and development activities for new product development",
    "General corporate purposes including strategic acquisitions and investments",
  ]

  // Dummy review sources data
  const dummyReviewSources = [
    "Based on strong fundamentals and consistent growth trajectory, analysts recommend 'Subscribe' for long-term investors",
    "The company operates in a growing industrial pumps market with increasing demand from infrastructure projects",
    "Management has demonstrated effective execution of business strategy with improving profit margins",
    "Valuation appears reasonable compared to industry peers with similar business models",
  ]

  // Dummy registrar details data
  const dummyRegistrarDetails = {
    name: "Link Intime India Private Limited",
    phone: "+91-22-4918-6000",
    email: "oswal.ipo@linkintime.co.in",
    website: "https://www.linkintime.co.in",
  }

  // Dummy lead managers data
  const dummyLeadManagers = [
    "ICICI Securities Limited",
    "Axis Capital Limited",
    "IIFL Securities Limited",
    "Motilal Oswal Investment Advisors Limited",
  ]

  // Dummy company address data
  const dummyCompanyAddress = {
    name: "Oswal Pumps Limited",
    address: "Plot No. 123, Industrial Area Phase-II, Chandigarh - 160002, Punjab, India",
    phone: "+91-172-2665-4000",
    email: "investors@oswalpumps.com",
    website: "https://www.oswalpumps.com",
  }

  // Add FAQ data
  const faqs = [
    {
      q: "How do I apply for this IPO?",
      a: "You can apply for this IPO through your broker's trading platform, mobile app, or UPI-enabled applications. Ensure you have a demat account and sufficient funds.",
    },
    {
      q: "What documents are required to apply for IPO?",
      a: "You need a PAN card, Aadhaar card, bank account, and demat account to apply for an IPO. Some brokers may require additional KYC documents.",
    },
    {
      q: "Can I modify or cancel my IPO application?",
      a: "You can modify your IPO application multiple times during the bidding period, but you cannot cancel it once submitted. You can only increase the bid quantity or price.",
    },
    {
      q: "When will I know about allotment?",
      a: "IPO allotment results are typically announced within 7-10 working days after the IPO closes. You can check the status on the registrar's website or your broker's platform.",
    },
    {
      q: "What if I don't get allotment?",
      a: "If you don't get allotment, the blocked amount in your bank account will be unblocked and refunded within 3-5 working days after the allotment process.",
    },
    {
      q: "When will the shares be listed?",
      a: "Shares are typically listed within 6-10 working days after the IPO closes, subject to regulatory approvals and market conditions.",
    },
    {
      q: "Can I apply for more than one lot?",
      a: "Yes, retail investors can apply for up to 13 lots (if the total value doesn't exceed ₹2 lakhs). Beyond that, you'll be classified as NII (Non-Institutional Investor).",
    },
  ]

  // Prepare schema data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: `${ipo.companyName} IPO`,
    description: `${ipo.companyName} Initial Public Offering with price band ₹${ipo.priceBandLow}-₹${ipo.priceBandHigh}`,
    provider: {
      "@type": "Organization",
      name: ipo.companyName,
    },
    offers: {
      "@type": "Offer",
      price: `${ipo.priceBandLow}-${ipo.priceBandHigh}`,
      priceCurrency: "INR",
      validFrom: ipo.openDate,
      validThrough: ipo.closeDate,
    },
  }

  // Prepare FAQ schema
  const faqSchema = {
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
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/upcoming-ipo-calendar"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to IPO Calendar
            </Link>
          </div>

          {/* Header */}
          <div className="text-white">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/15 backdrop-blur-md rounded-2xl flex items-center justify-center text-white font-bold text-2xl border border-white/20">
                    {ipo.companyName.charAt(0)}
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{ipo.companyName}</h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium mb-4">
                      IPO Date, Review, Price, Allotment Details
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15 backdrop-blur-md text-white border border-white/20">
                        {ipo.ipoType}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 backdrop-blur-md text-emerald-100 border border-emerald-400/30">
                        {ipo.exchangePlatform}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold text-white mb-2">{ipo.ipoSize}</div>
                <div className="text-blue-200 text-lg">IPO Size</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* IPO Details Section */}
        <div className="mb-12">
          <IpoDetailsSection {...dummyIpoDetails} />
        </div>

        {/* Market Lot Table */}
        <IpoMarketLotTable marketLot={33} lotPrice={450} maxRetailLots={13} />

        {/* IPO Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Key Details */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl mr-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                Price Information
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Price Band</span>
                  <span className="font-bold text-2xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {formatPriceBand(ipo.priceBandLow, ipo.priceBandHigh)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Market Lot</span>
                  <span className="font-bold text-xl text-gray-900">{ipo.marketLot} shares</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600 font-medium">Minimum Investment</span>
                  <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ₹{(ipo.priceBandHigh * ipo.marketLot).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                IPO Information
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">IPO Type</span>
                  <span className="font-bold text-lg text-gray-900">{ipo.ipoType}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Exchange Platform</span>
                  <span className="font-bold text-lg text-gray-900">{ipo.exchangePlatform}</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-gray-600 font-medium">Issue Size</span>
                  <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {ipo.ipoSize}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl mr-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                IPO Timeline
              </h2>
              <div className="relative space-y-8">
                {/* Timeline connector line */}
                <div className="absolute left-3 top-6 bottom-6 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 via-orange-500 to-purple-500"></div>

                {/* IPO Opens */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Opens</div>
                    <div className="text-2xl font-bold text-green-600 mb-2">{formatDate(ipo.openDate)}</div>
                    <div className="text-sm text-gray-500 bg-green-50 px-3 py-1 rounded-full inline-block">
                      Subscription begins
                    </div>
                  </div>
                </div>

                {/* IPO Closes */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Closes</div>
                    <div className="text-2xl font-bold text-red-600 mb-2">{formatDate(ipo.closeDate)}</div>
                    <div className="text-sm text-gray-500 bg-red-50 px-3 py-1 rounded-full inline-block">
                      Last date to apply
                    </div>
                  </div>
                </div>

                {/* Basis of Allotment */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Basis of Allotment</div>
                    <div className="text-2xl font-bold text-blue-600 mb-2">June 18, 2025</div>
                    <div className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full inline-block">
                      Allotment results announced
                    </div>
                  </div>
                </div>

                {/* Refunds */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Refunds</div>
                    <div className="text-2xl font-bold text-orange-600 mb-2">June 19, 2025</div>
                    <div className="text-sm text-gray-500 bg-orange-50 px-3 py-1 rounded-full inline-block">
                      Refund processing
                    </div>
                  </div>
                </div>

                {/* Credit to Demat Account */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Credit to Demat Account</div>
                    <div className="text-2xl font-bold text-teal-600 mb-2">June 19, 2025</div>
                    <div className="text-sm text-gray-500 bg-teal-50 px-3 py-1 rounded-full inline-block">
                      Shares credited
                    </div>
                  </div>
                </div>

                {/* IPO Listing Date */}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0 z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="text-sm font-semibold text-gray-900 mb-1">IPO Listing Date</div>
                    <div className="text-2xl font-bold text-purple-600 mb-2">June 20, 2025</div>
                    <div className="text-sm text-gray-500 bg-purple-50 px-3 py-1 rounded-full inline-block">
                      Trading begins
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Report Section */}
        <div className="mt-12">
          <IpoFinancialReport financials={dummyFinancials} />
        </div>

        {/* Valuation Section */}
        <div className="mt-8">
          <IpoValuationSection valuation={dummyValuation} />
        </div>

        {/* New Components Section */}
        <div className="space-y-8 mt-8">
          <PeerGroupComparison companies={dummyPeerComparison} />

          <ObjectsOfTheIssue points={dummyObjectsOfIssue} />

          <IpoReviewSources sources={dummyReviewSources} />

          <IpoRegistrarDetails
            name={dummyRegistrarDetails.name}
            phone={dummyRegistrarDetails.phone}
            email={dummyRegistrarDetails.email}
            website={dummyRegistrarDetails.website}
          />

          <IpoLeadManagers managers={dummyLeadManagers} />

          <CompanyAddress
            name={dummyCompanyAddress.name}
            address={dummyCompanyAddress.address}
            phone={dummyCompanyAddress.phone}
            email={dummyCompanyAddress.email}
            website={dummyCompanyAddress.website}
          />
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl p-8 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Ready to Invest in {ipo.companyName}?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Make sure to do your research and consult with financial advisors before investing. Check the
              company&apos;s fundamentals and market conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/upcoming-ipo-calendar"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                View All IPOs
              </Link>
              <CTAButton variant="secondary" className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-200 p-8 mt-12 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore More Investment Tools</h3>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
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

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-300 pb-2">
  Frequently Asked Questions
</h2>


            {faqs.map((faq, idx) => (
              <details key={idx} className="mb-4 rounded-md bg-gray-50 p-4 shadow">
                <summary className="cursor-pointer font-medium text-lg text-blue-700">{faq.q}</summary>
                <p className="mt-2 text-gray-700">{faq.a}</p>
              </details>
            ))}

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          </section>
        )}
      </div>
    </div>
  )
}
