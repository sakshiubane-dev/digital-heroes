import type { Metadata, Viewport } from "next";
import { Manrope, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const garamond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NorthPeak Digital | Digital Growth & Product Studio",
  description:
    "A modern digital growth studio helping ambitious companies build better digital products, brands, and marketing systems.",
  keywords: [
    "Digital Growth Studio",
    "Product Design",
    "Web Engineering",
    "AI Systems",
    "NorthPeak Digital",
  ],
  authors: [{ name: "NorthPeak Digital" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${garamond.variable} scroll-smooth dark`}
    >
      <body className="bg-[#0B0B0B] text-[#F7F7F5] font-sans antialiased min-h-screen relative overflow-x-hidden selection:bg-[#4F8CFF]/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
