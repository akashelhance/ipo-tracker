# Global Configuration System

A centralized configuration management system for the Next.js application. This provides a single source of truth for all site-wide settings, contact information, social media links, and company details.

## 📁 File Structure

```
config/
├── config.js           # Main configuration file (edit this)
├── config.d.ts         # TypeScript type definitions
├── README.md           # This file
└── usage-examples.md   # Detailed usage examples
```

## 🚀 Quick Start

### 1. Import the Configuration

```javascript
import { siteConfig } from '@/config/config'
```

### 2. Use in Your Components

```tsx
export default function MyPage() {
  return (
    <div>
      <h1>{siteConfig.siteName}</h1>
      <p>{siteConfig.siteDescription}</p>
      <a href={`mailto:${siteConfig.contactEmail}`}>Contact Us</a>
    </div>
  )
}
```

## 📋 Available Configuration

### Basic Site Information
- `siteName` - Website name
- `siteDescription` - Website description
- `siteTagline` - Website tagline
- `siteUrl` - Base URL

### Contact Information
- `contactEmail` - Primary contact email
- `supportEmail` - Support email

### Social Media
```javascript
siteConfig.social.twitter
siteConfig.social.facebook
siteConfig.social.linkedin
siteConfig.social.instagram
siteConfig.social.youtube
```

### Company Information
```javascript
siteConfig.company.name
siteConfig.company.phone
siteConfig.company.registrationNumber
siteConfig.company.address.street
siteConfig.company.address.city
siteConfig.company.address.state
siteConfig.company.address.postalCode
siteConfig.company.address.country
```

### Statistics
```javascript
siteConfig.stats.totalUsers
siteConfig.stats.totalIPOs
siteConfig.stats.accuracy
siteConfig.stats.foundedYear
```

### Feature Flags
```javascript
siteConfig.features.newsletter
siteConfig.features.darkMode
siteConfig.features.notifications
siteConfig.features.calculator
```

### Legal Links
```javascript
siteConfig.legal.privacyPolicy
siteConfig.legal.termsOfService
siteConfig.legal.disclaimer
```

### Metadata
```javascript
siteConfig.metadata.keywords
siteConfig.metadata.author
siteConfig.metadata.language
siteConfig.metadata.currency
```

## 🛠️ Helper Functions

### Get Full Address
Returns the complete formatted address as a string.

```javascript
import { getFullAddress } from '@/config/config'

const address = getFullAddress()
// Returns: "123 Financial District, Mumbai, Maharashtra 400001, India"
```

### Get Social Links
Returns an array of social media links with platform names.

```javascript
import { getSocialLinks } from '@/config/config'

const socialLinks = getSocialLinks()
// Returns: [
//   { platform: 'twitter', url: 'https://...', name: 'Twitter' },
//   { platform: 'facebook', url: 'https://...', name: 'Facebook' },
//   ...
// ]
```

### Get Contact Info
Returns a consolidated object with all contact information.

```javascript
import { getContactInfo } from '@/config/config'

const contact = getContactInfo()
// Returns: {
//   email: 'info@ipotracker.com',
//   phone: '+91 22 1234 5678',
//   address: '123 Financial District, Mumbai...'
// }
```

## 📝 Common Use Cases

### 1. Page Metadata

```tsx
import type { Metadata } from 'next'
import { siteConfig } from '@/config/config'

export const metadata: Metadata = {
  title: `About - ${siteConfig.siteName}`,
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
}
```

### 2. Footer Component

```tsx
import { siteConfig, getSocialLinks } from '@/config/config'

export function Footer() {
  const socialLinks = getSocialLinks()
  
  return (
    <footer>
      <p>© {new Date().getFullYear()} {siteConfig.company.name}</p>
      {socialLinks.map((social) => (
        <a key={social.platform} href={social.url}>
          {social.name}
        </a>
      ))}
    </footer>
  )
}
```

### 3. Contact Page

```tsx
import { siteConfig, getFullAddress } from '@/config/config'

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: <a href={`mailto:${siteConfig.contactEmail}`}>
        {siteConfig.contactEmail}
      </a></p>
      <p>Phone: {siteConfig.company.phone}</p>
      <p>Address: {getFullAddress()}</p>
    </div>
  )
}
```

### 4. Conditional Features

```tsx
import { siteConfig } from '@/config/config'

export default function HomePage() {
  return (
    <div>
      {siteConfig.features.newsletter && (
        <NewsletterSubscription />
      )}
      {siteConfig.features.calculator && (
        <InvestmentCalculator />
      )}
    </div>
  )
}
```

## ✅ Benefits

1. **Single Source of Truth**: All site-wide configuration in one place
2. **Easy Maintenance**: Update once, reflect everywhere
3. **Type Safety**: TypeScript definitions included
4. **SSR Compatible**: Works seamlessly with Next.js server components
5. **Helper Functions**: Utility functions for common operations
6. **No Runtime Overhead**: Config is resolved at build time

## 🔧 Editing the Configuration

1. Open `config/config.js`
2. Modify the values in the `siteConfig` object
3. Save the file
4. Restart the development server or rebuild for production

```bash
# Development
npm run dev

# Production
npm run build
```

## ⚠️ Important Notes

- **Build Time Resolution**: Config values are resolved at build time, not runtime
- **Restart Required**: Changes require a dev server restart or rebuild
- **Server Components**: Works natively with Next.js 13+ server components
- **Client Components**: Pass config values as props from server components
- **Sensitive Data**: Use environment variables for sensitive information, not this config

## 🔒 Security Best Practices

1. **Never store secrets** in config.js (use environment variables)
2. **Never store API keys** in config.js
3. **Never store passwords** in config.js
4. **Public data only** - this file is client-accessible after build

For sensitive data, use Next.js environment variables:
```javascript
// .env.local
DATABASE_URL=your_secret_here
API_KEY=your_key_here
```

## 📚 Additional Resources

- See `usage-examples.md` for more detailed usage patterns
- Check `config.d.ts` for full TypeScript type definitions
- Refer to `app/about/page.tsx` for a complete implementation example

## 🤝 Contributing

When adding new configuration values:

1. Add the value to `config.js`
2. Update the TypeScript types in `config.d.ts`
3. Document the new value in this README
4. Add usage examples to `usage-examples.md`

## 📞 Support

For questions or issues with the configuration system:
- Check the usage examples first
- Review the implementation in `app/about/page.tsx`
- Consult the Next.js documentation for server components

