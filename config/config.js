/**
 * Global Configuration File
 * 
 * This file contains all global website configuration data including:
 * - Site metadata (name, description, URL)
 * - Contact information
 * - Social media links
 * - Company details
 * 
 * This centralized configuration makes it easy to update site-wide settings
 * in one place. Import this config wherever you need access to these values.
 * 
 * Usage:
 * import { siteConfig } from '@/config/config'
 * console.log(siteConfig.siteName)
 * 
 * @module config
 */

/**
 * Site Configuration Object
 * @typedef {Object} SiteConfig
 * @property {string} siteName - The name of the website
 * @property {string} siteDescription - A short description of the website
 * @property {string} siteUrl - The base URL of the website
 * @property {string} contactEmail - Primary contact email address
 * @property {Object} social - Social media profile URLs
 * @property {Object} company - Company information
 */

export const siteConfig = {
  // Basic Site Information
  siteName: "IPOTracker",
  siteDescription: "India's most trusted platform for IPO insights, market analysis, and investment tools. Empowering smart investment decisions since 2020.",
  siteTagline: "Your IPO Investment Guide",
  siteUrl: "https://www.ipotracker.com",
  
  // Contact Information
  contactEmail: "info@ipotracker.com",
  supportEmail: "support@ipotracker.com",
  
  // Social Media Links
  social: {
    twitter: "https://twitter.com/ipotracker",
    facebook: "https://facebook.com/ipotracker",
    linkedin: "https://linkedin.com/company/ipotracker",
    instagram: "https://instagram.com/ipotracker",
    youtube: "https://youtube.com/@ipotracker",
  },
  
  // Company Information
  company: {
    name: "IPOTracker Private Limited",
    address: {
      street: "123 Financial District",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400001",
      country: "India",
    },
    phone: "+91 22 1234 5678",
    registrationNumber: "CIN: U67190MH2020PTC123456",
  },
  
  // Additional Metadata
  metadata: {
    keywords: ["IPO", "investment", "stock market", "India", "trading", "financial tools"],
    author: "IPOTracker Team",
    language: "en-IN",
    currency: "INR",
  },
  
  // Statistics (for homepage/about page)
  stats: {
    totalUsers: "50,000+",
    totalIPOs: "500+",
    accuracy: "99.9%",
    foundedYear: "2020",
  },
  
  // Feature Flags (for enabling/disabling features)
  features: {
    newsletter: true,
    darkMode: false,
    notifications: true,
    calculator: true,
  },
  
  // Legal Links
  legal: {
    privacyPolicy: "/privacy-policy",
    termsOfService: "/terms-of-service",
    disclaimer: "/disclaimer",
  },
}

// Helper function to get full address as string
export const getFullAddress = () => {
  const { street, city, state, postalCode, country } = siteConfig.company.address
  return `${street}, ${city}, ${state} ${postalCode}, ${country}`
}

// Helper function to get social media links as array
export const getSocialLinks = () => {
  return Object.entries(siteConfig.social).map(([platform, url]) => ({
    platform,
    url,
    name: platform.charAt(0).toUpperCase() + platform.slice(1),
  }))
}

// Helper function to format contact info
export const getContactInfo = () => {
  return {
    email: siteConfig.contactEmail,
    phone: siteConfig.company.phone,
    address: getFullAddress(),
  }
}

