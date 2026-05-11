import { siteConfig } from "@/constants/config";

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": siteConfig.fullName,
    "alternateName": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "image": `${siteConfig.url}/taina-og.jpeg`,
    "description": siteConfig.seo.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "telephone": siteConfig.phone.display,
    "email": siteConfig.email,
    "priceRange": "$$$",
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.linkedin
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
