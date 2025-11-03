import type { Metadata } from "next";
import * as React from "react";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";


import { HeroUIProvider } from "@heroui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paskalrental.com"),
  title: {
    default: "Paskal Rental — Rental Motor Berkualitas, Aman & Terpercaya di Bandung",
    template: "%s | Paskal Rental",
  },
  description:
    "Paskal Rental menyediakan layanan rental motor berkualitas, aman, dan terpercaya di Kota Bandung. Unit terawat, proses mudah, antar-jemput, harga transparan.",
  keywords: [
    "rental motor bandung",
    "sewa motor bandung",
    "rental motor murah bandung",
    "rental motor aman bandung",
    "rental motor terpercaya bandung",
    "antar jemput motor bandung",
  ],
  openGraph: {
    title: "Paskal Rental — Rental Motor Berkualitas, Aman & Terpercaya di Bandung",
    description:
      "Sewa motor berkualitas & aman di Bandung. Unit terawat, proses mudah, antar-jemput, harga transparan.",
    siteName: "Paskal Rental",
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paskal Rental — Rental Motor Berkualitas, Aman & Terpercaya di Bandung",
    description:
      "Sewa motor berkualitas & aman di Bandung. Unit terawat, proses mudah, antar-jemput, harga transparan.",
  },
  icons: {
    icon: "/icon/logo-rental.svg",
    shortcut: "/icon/logo-rental.svg",
    apple: "/icon/logo-rental.svg",
  },
  alternates: {
    canonical: "https://paskalrental.com",
  },
  verification: {
    google: "MGk24fcilIRxdCix3VH0j2bfr9viFjNajNWWgnhqER4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} antialiased`}>
        <HeroUIProvider>
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
          <Script id="ld-json" type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Paskal Rental",
                image: "/icon/logo-rental.svg",
                url: "",
                telephone: "+62 878-3797-0070",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Ruko Paskal Hypersquare B-45 Jl. Pasirkaliki 25-27",
                  addressLocality: "Bandung",
                  addressRegion: "Jawa Barat",
                  postalCode: "",
                  addressCountry: "ID",
                },
                sameAs: [
                  "https://www.instagram.com/paskalrentalmotor",
                ],
                description:
                  "Rental motor berkualitas, aman, dan terpercaya di Bandung. Unit terawat, proses mudah, antar-jemput, harga transparan.",
              }),
            }}
          />
        </HeroUIProvider>
      </body>
    </html>
  );
}
