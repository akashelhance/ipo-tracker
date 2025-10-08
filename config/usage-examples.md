# Config Usage Examples

This document demonstrates various ways to use the global configuration system in your Next.js application.

## Basic Import

```javascript
import { siteConfig } from '@/config/config'
```

## Usage Examples

### 1. In Page Components (Server Components)

```tsx
// app/example/page.tsx
import { siteConfig } from '@/config/config'

export default function ExamplePage() {
  return (
    <div>
      <h1>{siteConfig.siteName}</h1>
      <p>{siteConfig.siteDescription}</p>
    </div>
  )
}
```

### 2. In Metadata Generation

```tsx
// app/example/page.tsx
import type { Metadata } from 'next'
import { siteConfig } from '@/config/config'

export const metadata: Metadata = {
  title: `Example Page - ${siteConfig.siteName}`,
  description: siteConfig.siteDescription,
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
  },
}
```

### 3. Using Helper Functions

```tsx
import { getSocialLinks, getFullAddress, getContactInfo } from '@/config/config'

// Get social links as array
const socialLinks = getSocialLinks()
// Returns: [{ platform: 'twitter', url: '...', name: 'Twitter' }, ...]

// Get formatted address
const address = getFullAddress()
// Returns: "123 Financial District, Mumbai, Maharashtra 400001, India"

// Get contact info
const contact = getContactInfo()
// Returns: { email: '...', phone: '...', address: '...' }
```

### 4. Dynamically Generate Social Media Links

```tsx
import { getSocialLinks } from '@/config/config'

export default function SocialSection() {
  const socialLinks = getSocialLinks()
  
  return (
    <div>
      {socialLinks.map((social) => (
        <a key={social.platform} href={social.url}>
          {social.name}
        </a>
      ))}
    </div>
  )
}
```

### 5. Using Feature Flags

```tsx
import { siteConfig } from '@/config/config'

export default function ConditionalFeature() {
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

### 6. In Contact Forms

```tsx
import { siteConfig } from '@/config/config'

export default function ContactInfo() {
  return (
    <div>
      <p>Email: <a href={`mailto:${siteConfig.contactEmail}`}>
        {siteConfig.contactEmail}
      </a></p>
      <p>Phone: <a href={`tel:${siteConfig.company.phone}`}>
        {siteConfig.company.phone}
      </a></p>
      <p>Company: {siteConfig.company.name}</p>
    </div>
  )
}
```

### 7. In Footer Components

```tsx
import { siteConfig } from '@/config/config'

export function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} {siteConfig.company.name}</p>
      <p>{siteConfig.siteDescription}</p>
      <div>
        {Object.entries(siteConfig.social).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
            {platform}
          </a>
        ))}
      </div>
    </footer>
  )
}
```

### 8. In API Routes (if needed)

```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/config'

export async function POST(request: NextRequest) {
  const data = await request.json()
  
  // Use config in API logic
  const supportEmail = siteConfig.supportEmail
  
  // Send email to support
  // ...
  
  return NextResponse.json({ success: true })
}
```

### 9. Using Statistics

```tsx
import { siteConfig } from '@/config/config'

export default function StatsSection() {
  return (
    <div>
      <div>
        <h3>{siteConfig.stats.totalUsers}</h3>
        <p>Active Users</p>
      </div>
      <div>
        <h3>{siteConfig.stats.totalIPOs}</h3>
        <p>IPOs Tracked</p>
      </div>
      <div>
        <h3>{siteConfig.stats.accuracy}</h3>
        <p>Accuracy Rate</p>
      </div>
    </div>
  )
}
```

### 10. In Structured Data (JSON-LD)

```tsx
import { siteConfig } from '@/config/config'

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.siteUrl,
    email: siteConfig.contactEmail,
    telephone: siteConfig.company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.city,
      addressRegion: siteConfig.company.address.state,
      postalCode: siteConfig.company.address.postalCode,
      addressCountry: siteConfig.company.address.country,
    },
    sameAs: Object.values(siteConfig.social),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
```

## Best Practices

1. **Import only what you need**: Use named imports to keep bundle sizes minimal
2. **Server Components**: The config works seamlessly with Next.js 13+ server components
3. **Type Safety**: Consider creating a TypeScript definition file for better IDE support
4. **Environment Variables**: For sensitive data, use environment variables instead of the config file
5. **Caching**: The config is imported at build time, so changes require a rebuild

## Notes

- All config values are available at build time
- Changes to config.js require a rebuild (`npm run build` or restart dev server)
- The config is SSR-compatible and works in server components by default
- For client components, you can pass config values as props from server components

