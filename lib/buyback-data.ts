export interface Buyback {
  slug: string
  companyName: string
  recordDate: string
  buybackType: string
  offerPrice: number
  marketPrice: number
  buybackSize: string
  status: "Open" | "Upcoming" | "Closed"
  notes?: string
}

export const buybacks: Buyback[] = [
  {
    slug: "infosys",
    companyName: "Infosys",
    recordDate: "2025-06-20",
    buybackType: "Tender Offer",
    offerPrice: 1850,
    marketPrice: 1720,
    buybackSize: "Rs. 9,300 Cr",
    status: "Upcoming",
    notes:
      "The buyback will be conducted through the tender offer route at a premium to the current market price. Eligible shareholders can tender their shares during the offer period.",
  },
  {
    slug: "tcs",
    companyName: "TCS",
    recordDate: "2025-07-01",
    buybackType: "Open Market",
    offerPrice: 4050,
    marketPrice: 3925,
    buybackSize: "Rs. 18,000 Cr",
    status: "Open",
    notes:
      "TCS will buy back shares from the open market over a period of 12 months. The buyback is part of the company's capital allocation strategy to return excess cash to shareholders.",
  },
  {
    slug: "wipro",
    companyName: "Wipro",
    recordDate: "2025-05-15",
    buybackType: "Tender Offer",
    offerPrice: 650,
    marketPrice: 580,
    buybackSize: "Rs. 12,000 Cr",
    status: "Closed",
    notes: "Successfully completed buyback program with high participation from retail and institutional investors.",
  },
  {
    slug: "hcl-technologies",
    companyName: "HCL Technologies",
    recordDate: "2025-08-10",
    buybackType: "Open Market",
    offerPrice: 1420,
    marketPrice: 1350,
    buybackSize: "Rs. 6,500 Cr",
    status: "Upcoming",
    notes:
      "The board has approved the buyback proposal. The company will announce the detailed schedule and process soon.",
  },
  {
    slug: "tech-mahindra",
    companyName: "Tech Mahindra",
    recordDate: "2025-07-25",
    buybackType: "Tender Offer",
    offerPrice: 1180,
    marketPrice: 1095,
    buybackSize: "Rs. 4,200 Cr",
    status: "Open",
    notes:
      "The tender offer is currently open for eligible shareholders. The offer price represents a significant premium to the current market price.",
  },
  {
    slug: "bharti-airtel",
    companyName: "Bharti Airtel",
    recordDate: "2025-09-05",
    buybackType: "Open Market",
    offerPrice: 950,
    marketPrice: 885,
    buybackSize: "Rs. 8,750 Cr",
    status: "Upcoming",
    notes:
      "Bharti Airtel's buyback is subject to regulatory approvals and market conditions. The company aims to enhance shareholder value through this initiative.",
  },
]
