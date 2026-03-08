import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatingButton from "@/components/shared/WhatsAppFloatingButton";
import { getCanonicalUrl, siteConfig } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "MelaniArts | Printing & Signage in Hambantota & Colombo",
    template: "MelaniArts | %s",
  },
  description: siteConfig.description,
  keywords: [
    "printing Sri Lanka",
    "signage Hambantota",
    "name boards",
    "number plates",
    "vehicle stickers",
    "digital printing",
    "mug printing",
    "awards",
    "MelaniArts",
    "Melani Arts",
    "Melani Arts Digital",
    "Digital Printing Sri Lanka"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: getCanonicalUrl("/"),
    siteName: siteConfig.name,
    title: "MelaniArts | Printing & Signage in Hambantota & Colombo",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "MelaniArts printing and signage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MelaniArts | Printing & Signage in Hambantota & Colombo",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
  icons: {
    icon: "/shortLogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: getCanonicalUrl(siteConfig.ogImage),
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 33 Tissa Road",
      addressLocality: "Hambantota",
      addressCountry: "LK",
    },
    areaServed: siteConfig.serviceAreas,
  };

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
