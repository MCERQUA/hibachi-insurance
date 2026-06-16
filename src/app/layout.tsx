import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://hibachiinsurance.com";
const SITE_NAME = "Hibachi Insurance";
const PARENT = "Contractor's Choice Agency";
const PHONE = "+18449675247";
const OG_IMAGE = `${SITE_URL}/og-default.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Hibachi Insurance | Restaurant & Steakhouse Coverage | Contractor's Choice Agency",
    template: "%s | Hibachi Insurance",
  },
  description:
    "Specialized insurance for hibachi restaurants, Japanese steakhouses, and teppanyaki dining. General liability, workers comp, property, liquor liability and more. Licensed in all 50 states. 15-minute quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "Hibachi Insurance | Restaurant & Steakhouse Coverage",
    description:
      "Specialized insurance for hibachi restaurants, Japanese steakhouses, and teppanyaki dining. Licensed in all 50 states. 15-minute quotes.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hibachi Insurance — specialty coverage for Japanese steakhouses and teppanyaki restaurants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hibachi Insurance | Restaurant & Steakhouse Coverage",
    description:
      "Specialty coverage for hibachi restaurants and Japanese steakhouses. 15-minute quotes, all 50 states.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": `${SITE_URL}/#agency`,
  name: SITE_NAME,
  legalName: PARENT,
  url: SITE_URL,
  image: OG_IMAGE,
  telephone: PHONE,
  priceRange: "$$",
  description:
    "Specialty insurance agency for hibachi restaurants, Japanese steakhouses, and teppanyaki dining. 20+ years of restaurant-coverage expertise.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Road, Suite #105",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  email: "josh@contractorschoiceagency.com",
  founder: { "@type": "Person", name: "Josh Cotner" },
  areaServed: { "@type": "Country", name: "United States" },
  parentOrganization: { "@type": "Organization", name: PARENT },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE,
    contactType: "Sales",
    areaServed: "US",
    availableLanguage: ["English"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hibachi & Japanese Steakhouse Insurance",
  serviceType: "Restaurant Insurance",
  provider: { "@id": `${SITE_URL}/#agency` },
  areaServed: { "@type": "Country", name: "United States" },
  description:
    "Comprehensive insurance package for hibachi restaurants and teppanyaki operations — general liability, workers comp, property, liquor liability, and equipment breakdown.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hibachi Restaurant Coverage Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "General Liability Insurance for Hibachi Restaurants",
          url: `${SITE_URL}/coverage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Workers Compensation for Restaurant Staff",
          url: `${SITE_URL}/coverage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Commercial Property Insurance",
          url: `${SITE_URL}/coverage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Liquor Liability Coverage",
          url: `${SITE_URL}/coverage`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Equipment Breakdown Coverage",
          url: `${SITE_URL}/coverage`,
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What insurance does a hibachi restaurant need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hibachi or teppanyaki restaurant typically needs general liability (third-party injuries and property damage from the open-grill experience), workers compensation (burns, knife injuries, repetitive strain), commercial property (building, equipment, and inventory), liquor liability if you serve alcohol, and equipment breakdown for hibachi grills, ventilation, and refrigeration. Most operators bundle these into a Business Owner's Policy (BOP) for cost efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "Is open-flame cooking covered under standard liability policies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standard restaurant policies often exclude or limit open-flame cooking and tableside grill operations. Hibachi-specific policies are written to include flame exposure, knife and onion-volcano tricks, and the close-customer-proximity risk that defines the experience. Generic restaurant agencies regularly under-write this exposure.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I get a hibachi insurance quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most quotes come back within 15 minutes for a single-location hibachi restaurant. Multi-location operators and franchises typically take 24 to 48 hours due to additional underwriting review. Call 844-967-5247 to start, or request a quote online.",
      },
    },
    {
      "@type": "Question",
      name: "Do you write coverage in all 50 states?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are licensed in all 50 states and write hibachi and Japanese steakhouse coverage nationwide. Carrier appetite varies by state — a few jurisdictions require additional documentation due to local fire-code requirements around open-flame service — but we have placement options everywhere.",
      },
    },
    {
      "@type": "Question",
      name: "Does workers comp cover burn injuries on a hibachi grill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Workers compensation covers medical costs and lost wages for any work-related injury, including burns sustained while operating a hibachi or teppanyaki grill. We also help you document a safety program — PPE, burn-protocol training, and grill-maintenance schedules — that drives down your experience modification rate and your premium over time.",
      },
    },
  ],
};

const allSchemas = [localBusinessSchema, serviceSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {allSchemas.map((schema, i) => (
          <script
            key={`ld-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
