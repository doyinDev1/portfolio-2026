import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--font-inter",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-display-face",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Developer in Nigeria, Based in Lagos | Adedoyin",
  description:
    "Adedoyin is a frontend developer in Nigeria, based in Lagos, building high-performance websites, SaaS frontends, and polished product interfaces for startups, brands, and remote teams worldwide.",
  keywords: [
    "frontend developer in Lagos",
    "frontend developer Lagos",
    "frontend engineer Lagos",
    "React developer Lagos",
    "Next.js developer Lagos",
    "web developer Lagos Nigeria",
    "frontend developer Nigeria",
    "UI engineer Lagos",
    "JavaScript developer Lagos",
  ],
  authors: [{ name: "Adedoyin" }],
  creator: "Adedoyin",
  publisher: "Adedoyin",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Frontend Developer in Nigeria, Based in Lagos | Adedoyin",
    description:
      "Frontend developer in Nigeria, based in Lagos, building premium web experiences, SaaS interfaces, and high-performance product frontends for startups and brands worldwide.",
    type: "website",
    locale: "en_NG",
    siteName: "Adedoyin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer in Nigeria, Based in Lagos | Adedoyin",
    description:
      "Frontend developer in Nigeria, based in Lagos, building premium web experiences, SaaS interfaces, and high-performance product frontends.",
  },
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${manrope.variable} ${unbounded.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
