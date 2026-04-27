import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import contact from "../../content/contact.json";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const SITE = "https://royalblue-snail-286673.hostingersite.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "MAGNA — Fisioteràpia i Exercici Terapèutic",
    template: "%s · MAGNA",
  },
  description:
    "Centre de fisioteràpia i exercici terapèutic a Lleida. Et tractem i t'ensenyem a moure't millor — sortiràs amb autonomia, no amb dependència.",
  keywords: [
    "fisioteràpia Lleida",
    "exercici terapèutic",
    "punció seca",
    "teràpia manual",
    "sòl pelvià",
    "readaptació esportiva",
    "fisio Lleida",
    "MAGNA",
  ],
  alternates: { canonical: SITE, languages: { "ca-ES": SITE } },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: SITE,
    siteName: "MAGNA Fisioteràpia",
    title: "MAGNA — Mou-te amb confiança",
    description:
      "Centre de fisioteràpia i exercici terapèutic a Lleida. El millor tractament és el que t'ensenya a no necessitar-lo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAGNA — Mou-te amb confiança",
    description:
      "Fisioteràpia i exercici terapèutic a Lleida. Et donem eines, no només sessions.",
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

// JSON-LD structured data for local business (PhysicalTherapy)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PhysicalTherapy",
      "@id": `${SITE}/#business`,
      name: "MAGNA Fisioteràpia",
      alternateName: "MAGNA Fisioteràpia i Exercici Terapèutic",
      description:
        "Centre de fisioteràpia i exercici terapèutic. Tractem el dolor i construïm el moviment perquè recuperis autonomia.",
      url: SITE,
      logo: `${SITE}/icon`,
      image: `${SITE}/opengraph-image`,
      telephone: `+${contact.whatsapp_number}`,
      email: contact.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.address,
        addressLocality: "Lleida",
        postalCode: "25000",
        addressCountry: "ES",
        addressRegion: "Catalunya",
      },
      areaServed: {
        "@type": "City",
        name: "Lleida",
      },
      priceRange: "€€",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
          description: "Amb cita prèvia",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serveis de fisioteràpia",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fisioteràpia" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exercici Terapèutic" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Punció Seca" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Teràpia Manual" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Readaptació Esportiva" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sòl Pelvià" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "MAGNA Fisioteràpia",
      inLanguage: "ca-ES",
      publisher: { "@id": `${SITE}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ca"
      className={`${manrope.variable} ${fraunces.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
