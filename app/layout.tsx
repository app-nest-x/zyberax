import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import WebsiteStructuredData, { OrganizationStructuredData } from "./components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyberax | Future-Grade Fashion",
  description: "Minimal design meets future-grade fabrics, engineered for the digital age.",
  keywords: "zyberax, fashion, futuristic, cyberpunk, minimal design, premium apparel, technical clothing",
  metadataBase: new URL("https://zyberax.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Zyberax | Future-Grade Fashion",
    description: "Minimal design meets future-grade fabrics, engineered for the digital age.",
    url: "https://zyberax.com",
    siteName: "Zyberax",
    images: [
      {
        url: "https://zyberax.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zyberax - Future-Grade Fashion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zyberax | Future-Grade Fashion",
    description: "Minimal design meets future-grade fabrics, engineered for the digital age.",
    images: ["https://zyberax.com/twitter-image.jpg"],
    creator: "@zyberax",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <WebsiteStructuredData />
        <OrganizationStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative overflow-x-hidden`}
      >
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
