import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Frais — Handcrafted Organic Soap & Candles",
  description:
    "Just like nature intended. Discover handcrafted organic soap, probiotic cleaning bars, and nature's essence scented candles by Frais.",
  keywords: ["Frais", "organic soap", "candles", "handcrafted", "natural skincare"],
  authors: [{ name: "Frais" }],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-frais-cream text-frais-dark`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
