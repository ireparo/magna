import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
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
    "Centre de fisioteràpia i exercici terapèutic. Tractaments personalitzats per recuperar-te, prevenir lesions i tornar a moure't bé.",
  keywords: [
    "fisioteràpia",
    "exercici terapèutic",
    "punció seca",
    "teràpia manual",
    "recuperació de lesions",
    "MAGNA",
    "fisio Lleida",
  ],
  alternates: { canonical: SITE, languages: { "ca-ES": SITE } },
  openGraph: {
    type: "website",
    locale: "ca_ES",
    url: SITE,
    siteName: "MAGNA Fisioteràpia",
    title: "MAGNA — Fisioteràpia i Exercici Terapèutic",
    description:
      "Centre de fisioteràpia amb un enfocament actiu: et tractem i t'ensenyem a moure't millor.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
