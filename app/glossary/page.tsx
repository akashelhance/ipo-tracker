"use client"

import { useState } from "react"
import Link from "next/link"
import { Book, Search, Home, ChevronRight, Hash } from "lucide-react"
import OtherInvestmentOptionWithDemat from "@/components/OtherInvestmentOptionWithDemat"

// Define glossary terms
const glossaryTerms = [
    {
        term: "Allotment",
        definition:
            "The process of assigning shares to investors who have applied for an IPO. If demand exceeds supply, allotment is done on a lottery basis.",
        category: "IPO",
    },
    {
        term: "Anchor Investor",
        definition:
            "Institutional investors who are invited to subscribe to shares before the IPO opens to the public. They help generate confidence in the offering.",
        category: "IPO",
    },
    {
        term: "Ask Price",
        definition: "The lowest price at which a seller is willing to sell a stock.",
        category: "Trading",
    },
    {
        term: "Bear Market",
        definition: "A market condition where stock prices are falling and investor sentiment is pessimistic.",
        category: "General",
    },
    {
        term: "Bid Price",
        definition: "The highest price a buyer is willing to pay for a stock.",
        category: "Trading",
    },
    {
        term: "Blue Chip Stock",
        definition:
            "Shares of large, well-established, and financially sound companies with a history of reliable performance.",
        category: "Stocks",
    },
    {
        term: "Book Building",
        definition:
            "A process used in IPOs where the price is not fixed. Instead, a price band is offered, and investors bid within that range.",
        category: "IPO",
    },
    {
        term: "Bull Market",
        definition: "A market condition where stock prices are rising and investor sentiment is optimistic.",
        category: "General",
    },
    {
        term: "Demat Account",
        definition:
            "An account used to hold shares and securities in electronic format. It stands for Dematerialized Account.",
        category: "General",
    },
    {
        term: "Dividend",
        definition: "A portion of a company's earnings distributed to shareholders.",
        category: "Stocks",
    },
    {
        term: "DRHP (Draft Red Herring Prospectus)",
        definition:
            "A preliminary registration document filed by a company with SEBI before its IPO, containing details about business operations and financials.",
        category: "IPO",
    },
    {
        term: "Face Value",
        definition: "The nominal value of a share as stated by the issuer. It is used to calculate dividends.",
        category: "Stocks",
    },
    {
        term: "GMP (Grey Market Premium)",
        definition:
            "The premium amount at which IPO shares are being traded in the unofficial (grey) market before they are listed on the stock exchange.",
        category: "IPO",
    },
    {
        term: "IPO (Initial Public Offering)",
        definition: "The process by which a private company offers shares to the public for the first time to raise capital.",
        category: "IPO",
    },
    {
        term: "Listing Gains",
        definition:
            "The profit made by an investor when an IPO lists on the stock exchange at a price higher than the issue price.",
        category: "IPO",
    },
    {
        term: "Lot Size",
        definition: "The minimum number of shares an investor must bid for in an IPO.",
        category: "IPO",
    },
    {
        term: "Market Cap (Market Capitalization)",
        definition:
            "The total value of a company's outstanding shares. Calculated by multiplying the current share price by the total number of shares.",
        category: "General",
    },
    {
        term: "Price Band",
        definition: "The price range within which investors can bid for IPO shares.",
        category: "IPO",
    },
    {
        term: "RHP (Red Herring Prospectus)",
        definition:
            "The final prospectus filed with ROC/SEBI containing all details except the price and quantity of shares issues.",
        category: "IPO",
    },
    {
        term: "Sensex",
        definition:
            "The benchmark index of the Bombay Stock Exchange (BSE), comprising 30 of the largest and most actively traded stocks.",
        category: "General",
    },
    {
        term: "Upper Circuit",
        definition:
            "The maximum percentage a stock price is allowed to rise in a single day. Trading halts if this limit is reached.",
        category: "Trading",
    },
    {
        term: "Lower Circuit",
        definition:
            "The maximum percentage a stock price is allowed to fall in a single day. Trading halts if this limit is reached.",
        category: "Trading",
    },
    {
        term: "Nifty 50",
        definition:
            "The benchmark index of the National Stock Exchange (NSE), representing the weighted average of 50 of the largest Indian companies.",
        category: "General",
    },
    {
        term: "Retail Investor",
        definition:
            "Individual investors who buy and sell securities for their personal account, not for another company or organization.",
        category: "General",
    },
    {
        term: "SEBI (Securities and Exchange Board of India)",
        definition: "The regulatory body for the securities and commodity market in India.",
        category: "Regulatory",
    },
]

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const faqs = [
        {
            q: "Where can I find the definition of a specific stock market term?",
            a: "You can use the search bar above to type any financial term (e.g., 'Dividend', 'Bull Market') and find its definition instantly."
        },
        {
            q: "Do I need a Demat account to buy stocks?",
            a: "Yes, a Demat account is mandatory to hold shares in electronic form in India. You also need a trading account to place buy/sell orders."
        },
        {
            q: "What is an IPO and how can I apply?",
            a: "An IPO is when a private company sells shares to the public for the first time. You can apply for an IPO through your bank's net banking (ASBA) or via UPI using stock broker apps."
        },
        {
            q: "What are Listing Gains?",
            a: "Listing gains refer to the profit an investor makes when an IPO lists on the stock exchange at a price higher than its issue price."
        }
    ]

    const filteredTerms = glossaryTerms.filter((item) =>
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => a.term.localeCompare(b.term))

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white">
                <div className="container mx-auto px-4 py-12">
                    <nav className="flex items-center text-sm text-emerald-200 mb-6">
                        <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
                            <Home className="h-3 w-3" /> Home
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-emerald-400" />
                        <span className="text-white font-medium">Glossary</span>
                    </nav>

                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center">
                            <Book className="h-8 w-8 md:h-12 md:w-12 mr-3 text-emerald-400" />
                            Stock Market Glossary
                        </h1>
                        <p className="text-emerald-100 text-lg mb-8">
                            Confused by financial jargon? Our comprehensive dictionary explains key stock market terms in simple language.
                        </p>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search terms (e.g., GMP, Dividend, IPO)..."
                                className="pl-10 pr-4 py-3 w-full rounded-xl text-gray-900 focus:ring-4 focus:ring-emerald-500/30 focus:outline-none shadow-lg"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {filteredTerms.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTerms.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200 group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                                        {item.term}
                                    </h3>
                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.definition}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="bg-gray-100 rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-4">
                            <Search className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">No terms found</h3>
                        <p className="text-gray-500">Try searching for something else like "IPO" or "Market"</p>
                    </div>
                )}

                <section className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <h3 className="font-semibold text-gray-900 mb-2 flex items-start">
                                    <span className="text-emerald-600 mr-2">Q.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-gray-600 text-sm pl-6">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <OtherInvestmentOptionWithDemat />
            </div>
        </div>
    )
}
