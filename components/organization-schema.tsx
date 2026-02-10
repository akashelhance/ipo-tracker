import { siteConfig } from "@/config/config"

export default function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.siteName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/logo.png`,
        sameAs: [
            siteConfig.social.twitter,
            siteConfig.social.facebook || "",
            siteConfig.social.instagram || "",
            siteConfig.social.linkedin || "",
        ].filter(Boolean),
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-1234567890", // Replace with real number
            contactType: "customer service",
            areaServed: "IN",
            availableLanguage: "en",
        },
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
