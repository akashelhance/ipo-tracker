export interface GMPData {
  slug: string
  ipoName: string
  ipoDate: string
  ipoPrice: string
  gmp: string
  kostak: string
  sauda: string
  listingGain: string
  status: "Open" | "Closed" | "Upcoming"
}

export const gmpData: GMPData[] = [
  {
    slug: "oswal-pumps",
    ipoName: "Oswal Pumps",
    ipoDate: "13-17 June 2025",
    ipoPrice: "₹135-145",
    gmp: "₹45",
    kostak: "₹300",
    sauda: "₹2000",
    listingGain: "31%",
    status: "Closed",
  },
  {
    slug: "techcorp-solutions",
    ipoName: "TechCorp Solutions",
    ipoDate: "01-05 July 2025",
    ipoPrice: "₹200-220",
    gmp: "₹65",
    kostak: "₹450",
    sauda: "₹3500",
    listingGain: "29.5%",
    status: "Open",
  },
  {
    slug: "green-energy-ltd",
    ipoName: "Green Energy Ltd",
    ipoDate: "15-19 July 2025",
    ipoPrice: "₹300-350",
    gmp: "₹120",
    kostak: "₹800",
    sauda: "₹5000",
    listingGain: "34.3%",
    status: "Upcoming",
  },
  {
    slug: "digital-innovations",
    ipoName: "Digital Innovations",
    ipoDate: "01-05 Aug 2025",
    ipoPrice: "₹150-175",
    gmp: "₹30",
    kostak: "₹250",
    sauda: "₹1800",
    listingGain: "17.1%",
    status: "Upcoming",
  },
  {
    slug: "healthcare-ventures",
    ipoName: "Healthcare Ventures",
    ipoDate: "20-24 Aug 2025",
    ipoPrice: "₹400-450",
    gmp: "₹90",
    kostak: "₹600",
    sauda: "₹4200",
    listingGain: "20%",
    status: "Upcoming",
  },
  {
    slug: "fintech-dynamics",
    ipoName: "Fintech Dynamics",
    ipoDate: "10-14 Sep 2025",
    ipoPrice: "₹180-200",
    gmp: "₹75",
    kostak: "₹500",
    sauda: "₹3000",
    listingGain: "37.5%",
    status: "Upcoming",
  },
  {
    slug: "renewable-power",
    ipoName: "Renewable Power Corp",
    ipoDate: "05-09 June 2025",
    ipoPrice: "₹250-280",
    gmp: "₹55",
    kostak: "₹350",
    sauda: "₹2500",
    listingGain: "19.6%",
    status: "Closed",
  },
  {
    slug: "smart-logistics",
    ipoName: "Smart Logistics Ltd",
    ipoDate: "25-29 May 2025",
    ipoPrice: "₹120-140",
    gmp: "₹25",
    kostak: "₹200",
    sauda: "₹1500",
    listingGain: "17.9%",
    status: "Closed",
  },
  {
    slug: "quantum-computing",
    ipoName: "Quantum Computing Inc",
    ipoDate: "18-22 July 2025",
    ipoPrice: "₹450-500",
    gmp: "₹180",
    kostak: "₹950",
    sauda: "₹6500",
    listingGain: "36%",
    status: "Upcoming",
  },
  {
    slug: "agritech-solutions",
    ipoName: "AgriTech Solutions",
    ipoDate: "08-12 June 2025",
    ipoPrice: "₹160-180",
    gmp: "₹40",
    kostak: "₹280",
    sauda: "₹2200",
    listingGain: "22.2%",
    status: "Closed",
  },
]
