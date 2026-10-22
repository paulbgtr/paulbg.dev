import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { site } from "./content";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

const title = "Pavel B. | Electronics & Embedded";

export const metadata: Metadata = {
  metadataBase: new URL("https://paulbg.dev"),
  title: {
    default: title,
    template: "%s | Pavel B.",
  },
  description: site.description,
  authors: [{ name: "Pavel B." }],
  creator: "Pavel B.",
  keywords: [
    "Electronics design",
    "Embedded systems",
    "Firmware",
    "PCB design",
    "Hardware",
    "Tallinn",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description: site.description,
    url: "/",
    siteName: "Pavel B.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
