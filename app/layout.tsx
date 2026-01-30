import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://paulbg.dev"),
  title: {
    default: "Pavel B. | Web Developer",
    template: "%s | Pavel B.",
  },
  description:
    "I design and build web products that are calm, clear, and easy to maintain. Thoughtful structure, sharp UX, steady delivery.",
  applicationName: "Pavel B. Portfolio",
  authors: [{ name: "Pavel B." }],
  creator: "Pavel B.",
  publisher: "Pavel B.",
  category: "Portfolio",
  keywords: [
    "Web developer",
    "Frontend",
    "UI design",
    "Product design",
    "Landing pages",
    "Tallinn",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pavel B. | Web Developer",
    description:
      "I design and build web products that are calm, clear, and easy to maintain. Thoughtful structure, sharp UX, steady delivery.",
    url: "/",
    siteName: "Pavel B.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Pavel B. | Web Developer",
    description:
      "I design and build web products that are calm, clear, and easy to maintain. Thoughtful structure, sharp UX, steady delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
