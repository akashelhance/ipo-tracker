export interface IPOSubscription {
  slug: string
  companyName: string
  ipoType: "Mainboard" | "SME"
  qib: string
  nii: string
  retail: string
  employee: string
  total: string
  day1: string
  day2: string
  day3: string
  status: "Open" | "Closed" | "Upcoming"
}

export const subscriptions: IPOSubscription[] = [
  {
    slug: "oswal-pumps", // Changed from "osm-vision-limited"
    companyName: "Oswal Pumps", // Changed to match IPO data
    ipoType: "SME",
    qib: "15.23x",
    nii: "24.17x",
    retail: "28.12x",
    employee: "1.2x",
    total: "22.34x",
    day1: "1.42x",
    day2: "5.25x",
    day3: "22.34x",
    status: "Closed",
  },
  {
    slug: "techcorp-solutions",
    companyName: "TechCorp Solutions",
    ipoType: "Mainboard", // Changed from "SME"
    qib: "8.45x",
    nii: "12.67x",
    retail: "18.92x",
    employee: "2.1x",
    total: "14.23x",
    day1: "2.15x",
    day2: "7.89x",
    day3: "14.23x",
    status: "Open",
  },
  {
    slug: "green-energy-ltd",
    companyName: "Green Energy Ltd",
    ipoType: "Mainboard",
    qib: "25.78x",
    nii: "45.32x",
    retail: "67.89x",
    employee: "3.4x",
    total: "42.15x",
    day1: "5.67x",
    day2: "18.45x",
    day3: "42.15x",
    status: "Closed",
  },
  {
    slug: "digital-innovations",
    companyName: "Digital Innovations",
    ipoType: "SME",
    qib: "6.78x",
    nii: "9.34x",
    retail: "12.56x",
    employee: "0.8x",
    total: "8.92x",
    day1: "1.23x",
    day2: "4.56x",
    day3: "8.92x",
    status: "Open",
  },
  {
    slug: "healthcare-ventures",
    companyName: "Healthcare Ventures",
    ipoType: "Mainboard",
    qib: "0.45x",
    nii: "0.78x",
    retail: "1.23x",
    employee: "0.2x",
    total: "0.89x",
    day1: "0.12x",
    day2: "0.34x",
    day3: "0.89x",
    status: "Upcoming",
  },
  {
    slug: "fintech-dynamics",
    companyName: "Fintech Dynamics",
    ipoType: "SME",
    qib: "32.45x",
    nii: "58.67x",
    retail: "89.23x",
    employee: "4.5x",
    total: "56.78x",
    day1: "8.92x",
    day2: "25.34x",
    day3: "56.78x",
    status: "Closed",
  },
  // Keep the remaining entries as they are since they don't match IPO data
  {
    slug: "renewable-power",
    companyName: "Renewable Power Corp",
    ipoType: "Mainboard",
    qib: "12.34x",
    nii: "18.76x",
    retail: "25.43x",
    employee: "1.8x",
    total: "17.89x",
    day1: "3.45x",
    day2: "9.67x",
    day3: "17.89x",
    status: "Open",
  },
  {
    slug: "smart-logistics",
    companyName: "Smart Logistics Ltd",
    ipoType: "SME",
    qib: "4.56x",
    nii: "7.89x",
    retail: "11.23x",
    employee: "0.6x",
    total: "6.78x",
    day1: "0.89x",
    day2: "3.45x",
    day3: "6.78x",
    status: "Closed",
  },
]
