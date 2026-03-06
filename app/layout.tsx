import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blumen-flein.de"),
  title: {
    default: "Gärtnerei Klumpp | Blumengeschäft & Grabpflege in Flein",
    template: "%s | Gärtnerei Klumpp Flein",
  },
  description:
    "Ihr Blumengeschäft in Flein seit 1968. Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik und professionelle Grabpflege auf 15 Friedhöfen im Raum Heilbronn.",
  keywords: [
    "Florist Flein",
    "Blumenladen Flein",
    "Hochzeitsfloristik Flein",
    "Trauerfloristik Flein",
    "Blumen kaufen Flein",
    "Grabpflege Flein",
    "Grabpflege Heilbronn",
    "Gärtnerei Klumpp",
    "Blumengeschäft Heilbronn",
    "Dauergrabpflege",
  ],
  openGraph: {
    title: "Gärtnerei Klumpp | Blumengeschäft & Grabpflege in Flein",
    description:
      "Ihr Blumengeschäft in Flein seit 1968. Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik und professionelle Grabpflege.",
    url: "https://www.blumen-flein.de",
    siteName: "Gärtnerei Klumpp",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gärtnerei Klumpp | Blumengeschäft & Grabpflege in Flein",
    description:
      "Ihr Blumengeschäft in Flein seit 1968. Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik und professionelle Grabpflege.",
  },
  alternates: {
    canonical: "https://www.blumen-flein.de",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function JsonLd() {
  const floristSchema = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: "Gärtnerei Klumpp",
    alternateName: "Roger Klumpp Blumengeschäft und Gärtnerei",
    url: "https://www.blumen-flein.de",
    telephone: "+497131252449",
    email: "klumpp@blumen-flein.de",
    faxNumber: "+497131252441",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Buchernstraße 21",
      addressLocality: "Flein",
      postalCode: "74223",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 49.1033,
      longitude: 9.2125,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
        opens: "14:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "08:30",
        closes: "12:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "12:30",
      },
    ],
    foundingDate: "1968",
    founder: {
      "@type": "Person",
      name: "Eberhard Klumpp",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "12",
      bestRating: "5",
    },
    priceRange: "€€",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 49.1033,
        longitude: 9.2125,
      },
      geoRadius: "30000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Floristik & Grabpflege",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schnittblumen & Sträuße" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hochzeitsfloristik" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trauerfloristik" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Grabpflege" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dauergrabpflege" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Topfpflanzen & Zimmerpflanzen" } },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.blumen-flein.de/#business",
    name: "Gärtnerei Klumpp",
    description:
      "Blumengeschäft und Gärtnerei in Flein seit 1968. Schnittblumen, Sträuße, Hochzeitsfloristik, Trauerfloristik und professionelle Grabpflege auf 15 Friedhöfen im Raum Heilbronn.",
    url: "https://www.blumen-flein.de",
    telephone: "+497131252449",
    email: "klumpp@blumen-flein.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Buchernstraße 21",
      addressLocality: "Flein",
      postalCode: "74223",
      addressRegion: "Baden-Württemberg",
      addressCountry: "DE",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(floristSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <JsonLd />
      </head>
      <body className={`${heading.variable} ${body.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
