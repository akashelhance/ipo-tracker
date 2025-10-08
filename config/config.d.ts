/**
 * TypeScript Type Definitions for Global Configuration
 * 
 * This file provides type safety for the config.js file.
 * Import these types when using the config in TypeScript files.
 */

export interface AddressConfig {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface CompanyConfig {
  name: string
  address: AddressConfig
  phone: string
  registrationNumber: string
}

export interface SocialConfig {
  twitter: string
  facebook: string
  linkedin: string
  instagram: string
  youtube: string
}

export interface MetadataConfig {
  keywords: string[]
  author: string
  language: string
  currency: string
}

export interface StatsConfig {
  totalUsers: string
  totalIPOs: string
  accuracy: string
  foundedYear: string
}

export interface FeaturesConfig {
  newsletter: boolean
  darkMode: boolean
  notifications: boolean
  calculator: boolean
}

export interface LegalConfig {
  privacyPolicy: string
  termsOfService: string
  disclaimer: string
}

export interface SiteConfig {
  siteName: string
  siteDescription: string
  siteTagline: string
  siteUrl: string
  contactEmail: string
  supportEmail: string
  social: SocialConfig
  company: CompanyConfig
  metadata: MetadataConfig
  stats: StatsConfig
  features: FeaturesConfig
  legal: LegalConfig
}

export interface SocialLink {
  platform: string
  url: string
  name: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

// Main exports
export declare const siteConfig: SiteConfig
export declare function getFullAddress(): string
export declare function getSocialLinks(): SocialLink[]
export declare function getContactInfo(): ContactInfo

