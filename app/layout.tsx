
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adams-kipsang-portfolio.vercel.app"),

  title: {
    default: "Adams Kipsang | Web Developer in Kenya",
    template: "%s | Adams Kipsang",
  },

  description:
    "Adams Kipsang is a web developer based in Kenya, creating modern, responsive restaurant websites, business websites and digital experiences for clients in Kenya and worldwide.",

  applicationName: "Adams Kipsang Portfolio",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Adams Kipsang",
    "Web Developer Kenya",
    "Web Designer Kenya",
    "Website Development Kenya",
    "Restaurant Website Design",
    "Business Website Development",
    "Responsive Web Design",
    "Freelance Web Developer Kenya",
  ],

  authors: [{ name: "Adams Kipsang" }],

  creator: "Adams Kipsang",

  openGraph: {
    title: "Adams Kipsang | Web Developer in Kenya",
    description:
      "Modern, responsive websites for restaurants, businesses and individuals in Kenya and worldwide.",
    url: "/",
    siteName: "Adams Kipsang",
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adams Kipsang | Web Developer in Kenya",
    description:
      "Building modern digital experiences that move businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
