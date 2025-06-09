export interface IPO {
  documentId: string
  slug: string // Add slug field
  companyName: string
  ipoType: string
  openDate: string
  closeDate: string
  priceBandLow: number
  priceBandHigh: number
  marketLot: number
  exchangePlatform: string
  ipoSize: string
}

export const ipos: IPO[] = [
  {
    documentId: "rkl2jdoto4rci3xwmu5cp1yb",
    slug: "oswal-pumps", // Add slug based on company name
    companyName: "Oswal Pumps",
    ipoType: "Mainboard",
    openDate: "2025-06-13",
    closeDate: "2025-06-17",
    priceBandLow: 135,
    priceBandHigh: 145,
    marketLot: 1,
    exchangePlatform: "NSE",
    ipoSize: "55 Crore",
  },
  {
    documentId: "abc123def456ghi789jkl012",
    slug: "techcorp-solutions", // Add slug
    companyName: "TechCorp Solutions",
    ipoType: "SME",
    openDate: "2025-07-01",
    closeDate: "2025-07-05",
    priceBandLow: 200,
    priceBandHigh: 220,
    marketLot: 50,
    exchangePlatform: "BSE",
    ipoSize: "120 Crore",
  },
  {
    documentId: "xyz789uvw456rst123opq890",
    slug: "green-energy-ltd", // Add slug
    companyName: "Green Energy Ltd",
    ipoType: "Mainboard",
    openDate: "2025-07-15",
    closeDate: "2025-07-19",
    priceBandLow: 300,
    priceBandHigh: 350,
    marketLot: 25,
    exchangePlatform: "NSE",
    ipoSize: "500 Crore",
  },
  {
    documentId: "mno345pqr678stu901vwx234",
    slug: "digital-innovations", // Add slug
    companyName: "Digital Innovations",
    ipoType: "SME",
    openDate: "2025-08-01",
    closeDate: "2025-08-05",
    priceBandLow: 150,
    priceBandHigh: 175,
    marketLot: 100,
    exchangePlatform: "BSE",
    ipoSize: "80 Crore",
  },
  {
    documentId: "def567ghi890jkl123mno456",
    slug: "healthcare-ventures", // Add slug
    companyName: "Healthcare Ventures",
    ipoType: "Mainboard",
    openDate: "2025-08-20",
    closeDate: "2025-08-24",
    priceBandLow: 400,
    priceBandHigh: 450,
    marketLot: 20,
    exchangePlatform: "NSE",
    ipoSize: "750 Crore",
  },
  {
    documentId: "pqr789stu012vwx345yza678",
    slug: "fintech-dynamics", // Add slug
    companyName: "Fintech Dynamics",
    ipoType: "SME",
    openDate: "2025-09-10",
    closeDate: "2025-09-14",
    priceBandLow: 180,
    priceBandHigh: 200,
    marketLot: 75,
    exchangePlatform: "BSE",
    ipoSize: "95 Crore",
  },
  // Add more SME IPOs
  {
    documentId: "sme001abc123def456ghi789",
    slug: "micro-tech-solutions",
    companyName: "Micro Tech Solutions",
    ipoType: "SME",
    openDate: "2025-06-20",
    closeDate: "2025-06-24",
    priceBandLow: 85,
    priceBandHigh: 95,
    marketLot: 150,
    exchangePlatform: "BSE",
    ipoSize: "25 Crore",
  },
  {
    documentId: "sme002def456ghi789jkl012",
    slug: "agri-innovations-ltd",
    companyName: "Agri Innovations Ltd",
    ipoType: "SME",
    openDate: "2025-07-08",
    closeDate: "2025-07-12",
    priceBandLow: 120,
    priceBandHigh: 135,
    marketLot: 80,
    exchangePlatform: "BSE",
    ipoSize: "45 Crore",
  },
  {
    documentId: "sme003ghi789jkl012mno345",
    slug: "smart-logistics-corp",
    companyName: "Smart Logistics Corp",
    ipoType: "SME",
    openDate: "2025-07-22",
    closeDate: "2025-07-26",
    priceBandLow: 160,
    priceBandHigh: 180,
    marketLot: 60,
    exchangePlatform: "BSE",
    ipoSize: "65 Crore",
  },
  {
    documentId: "sme004jkl012mno345pqr678",
    slug: "renewable-power-systems",
    companyName: "Renewable Power Systems",
    ipoType: "SME",
    openDate: "2025-08-15",
    closeDate: "2025-08-19",
    priceBandLow: 220,
    priceBandHigh: 250,
    marketLot: 40,
    exchangePlatform: "BSE",
    ipoSize: "85 Crore",
  },
]
