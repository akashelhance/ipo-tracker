# Configuration System - Quick Reference

## 🎯 Import Statement
```typescript
import { siteConfig, getSocialLinks, getFullAddress, getContactInfo } from '@/config/config'
```

## 📦 Core Objects

### Site Info
```typescript
siteConfig.siteName              // "IPOTracker"
siteConfig.siteDescription       // Full description
siteConfig.siteTagline           // "Your IPO Investment Guide"
siteConfig.siteUrl               // "https://www.ipotracker.com"
```

### Contact
```typescript
siteConfig.contactEmail          // "info@ipotracker.com"
siteConfig.supportEmail          // "support@ipotracker.com"
```

### Social Media
```typescript
siteConfig.social.twitter        // Twitter URL
siteConfig.social.facebook       // Facebook URL
siteConfig.social.linkedin       // LinkedIn URL
siteConfig.social.instagram      // Instagram URL
siteConfig.social.youtube        // YouTube URL
```

### Company
```typescript
siteConfig.company.name          // Company name
siteConfig.company.phone         // Phone number
siteConfig.company.address       // Address object
  .street                        // Street address
  .city                          // City
  .state                         // State
  .postalCode                    // Postal code
  .country                       // Country
siteConfig.company.registrationNumber // CIN number
```

### Statistics
```typescript
siteConfig.stats.totalUsers      // "50,000+"
siteConfig.stats.totalIPOs       // "500+"
siteConfig.stats.accuracy        // "99.9%"
siteConfig.stats.foundedYear     // "2020"
```

### Features (Flags)
```typescript
siteConfig.features.newsletter   // boolean
siteConfig.features.darkMode     // boolean
siteConfig.features.notifications // boolean
siteConfig.features.calculator   // boolean
```

### Legal
```typescript
siteConfig.legal.privacyPolicy   // "/privacy-policy"
siteConfig.legal.termsOfService  // "/terms-of-service"
siteConfig.legal.disclaimer      // "/disclaimer"
```

### Metadata
```typescript
siteConfig.metadata.keywords     // Array of keywords
siteConfig.metadata.author       // Author name
siteConfig.metadata.language     // "en-IN"
siteConfig.metadata.currency     // "INR"
```

## 🔧 Helper Functions

### Get Full Address
```typescript
const address = getFullAddress()
// "123 Financial District, Mumbai, Maharashtra 400001, India"
```

### Get Social Links Array
```typescript
const links = getSocialLinks()
// [
//   { platform: 'twitter', url: 'https://...', name: 'Twitter' },
//   { platform: 'facebook', url: 'https://...', name: 'Facebook' },
//   ...
// ]
```

### Get Contact Info
```typescript
const contact = getContactInfo()
// {
//   email: 'info@ipotracker.com',
//   phone: '+91 22 1234 5678',
//   address: '123 Financial District, Mumbai...'
// }
```

## 💡 Common Patterns

### In Metadata
```typescript
export const metadata: Metadata = {
  title: `Page Title - ${siteConfig.siteName}`,
  description: siteConfig.siteDescription,
}
```

### Dynamic Social Links
```tsx
{getSocialLinks().map((social) => (
  <a key={social.platform} href={social.url}>
    {social.name}
  </a>
))}
```

### Conditional Rendering
```tsx
{siteConfig.features.newsletter && <Newsletter />}
```

### Email Link
```tsx
<a href={`mailto:${siteConfig.contactEmail}`}>
  {siteConfig.contactEmail}
</a>
```

### Phone Link
```tsx
<a href={`tel:${siteConfig.company.phone}`}>
  {siteConfig.company.phone}
</a>
```

## 📍 Example Implementation

See `app/about/page.tsx` for a complete working example demonstrating:
- ✅ Site name and description usage
- ✅ Statistics display
- ✅ Contact information layout
- ✅ Dynamic social media links generation
- ✅ Metadata generation
- ✅ Company address display

## 🚨 Remember

1. ✅ **DO** use for public site configuration
2. ✅ **DO** restart dev server after changes
3. ✅ **DO** use helper functions when available
4. ❌ **DON'T** store secrets or API keys
5. ❌ **DON'T** store sensitive data
6. ❌ **DON'T** expect runtime updates (build-time only)

## 📝 Edit Location

To update configuration values:
```
📁 config/config.js  ← Edit this file
```

After editing, restart:
```bash
npm run dev          # Development
npm run build        # Production
```

