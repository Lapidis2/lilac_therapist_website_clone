import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
});

const _lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#2d3436" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://drmayareynolds.com"),
  title: {
    default: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist - Anxiety, Trauma & Burnout",
    template: "%s | Dr. Maya Reynolds Therapy",
  },
  description:
    "Licensed psychologist in Santa Monica, CA specializing in anxiety therapy, trauma-informed counseling (EMDR), and burnout support. In-person and telehealth sessions available throughout California. Schedule your free 15-minute consultation today.",
  keywords: [
    "therapist Santa Monica",
    "psychologist Santa Monica CA",
    "anxiety therapist near me",
    "trauma therapy Santa Monica",
    "EMDR therapy California",
    "burnout counseling",
    "perfectionism therapy",
    "telehealth therapy California",
    "licensed psychologist",
    "mental health Santa Monica",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds",
  publisher: "Dr. Maya Reynolds Therapy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds Therapy",
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
    description:
      "Compassionate anxiety therapy, trauma-informed counseling, and burnout support in Santa Monica, CA. In-person and telehealth sessions available.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Maya Reynolds - Licensed Psychologist in Santa Monica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Maya Reynolds, PsyD | Santa Monica Therapist",
    description:
      "Compassionate anxiety therapy, trauma-informed counseling, and burnout support in Santa Monica, CA.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://drmayareynolds.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  category: "health",
    generator: 'v0.app'
};

// JSON-LD Structured Data for Local Business + Person
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://drmayareynolds.com/#business",
      name: "Dr. Maya Reynolds Therapy",
      description:
        "Licensed psychologist in Santa Monica, CA specializing in anxiety therapy, trauma-informed counseling (EMDR), and burnout support.",
      url: "https://drmayareynolds.com",
      telephone: "(310) 555-0199",
      email: "hello@drmayareynolds.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1234 Ocean Avenue, Suite 300",
        addressLocality: "Santa Monica",
        addressRegion: "CA",
        postalCode: "90401",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0195,
        longitude: -118.4912,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "15:00",
        },
      ],
      priceRange: "$$",
      image: "https://drmayareynolds.com/images/dr-maya-hero.jpg",
      sameAs: [],
    },
    {
      "@type": "Person",
      "@id": "https://drmayareynolds.com/#person",
      name: "Dr. Maya Reynolds",
      jobTitle: "Licensed Psychologist",
      description:
        "Dr. Maya Reynolds is a licensed psychologist (PsyD) specializing in anxiety, trauma, and burnout therapy in Santa Monica, CA.",
      image: "https://drmayareynolds.com/images/dr-maya-hero.jpg",
      url: "https://drmayareynolds.com",
      worksFor: {
        "@id": "https://drmayareynolds.com/#business",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://drmayareynolds.com/#website",
      url: "https://drmayareynolds.com",
      name: "Dr. Maya Reynolds Therapy",
      description: "Licensed psychologist in Santa Monica specializing in anxiety, trauma, and burnout therapy.",
      publisher: {
        "@id": "https://drmayareynolds.com/#person",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://drmayareynolds.com/#service",
      name: "Therapy Services",
      provider: {
        "@id": "https://drmayareynolds.com/#person",
      },
      serviceType: ["Anxiety Therapy", "Trauma Counseling", "EMDR Therapy", "Burnout Support", "Telehealth Therapy"],
      areaServed: [
        {
          "@type": "City",
          name: "Santa Monica",
          containedInPlace: {
            "@type": "State",
            name: "California",
          },
        },
        {
          "@type": "State",
          name: "California",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
