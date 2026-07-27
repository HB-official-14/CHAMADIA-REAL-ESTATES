import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  path = "",
  image = siteConfig.ogImage,
  type = "website",
  publishedTime,
  tags,
}: SEOProps) {
  const url = `${siteConfig.url}${path}`;
  const fullTitle = `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    ...(tags && { keywords: tags.join(", ") }),
  };
}

export function generateStructuredData(type: string, data: Record<string, unknown>) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": type,
  };

  return JSON.stringify({ ...base, ...data });
}

export function propertyStructuredData(property: {
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  url: string;
}) {
  return generateStructuredData("Product", {
    name: property.title,
    description: property.description,
    image: property.images,
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "PKR",
      availability: "https://schema.org/InStock",
    },
    location: {
      "@type": "Place",
      name: property.location,
    },
    url: property.url,
  });
}

export function organizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        email: siteConfig.email,
        availableLanguage: "English",
      },
    ],
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ],
  };
}

export function websiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/properties?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
