import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogDrop — High-signal engineering insights",
  description:
    "BlogDrop filters and explains high-quality behind-the-tech engineering blogs. Architecture, scaling systems, and real-world tradeoffs—without the noise.",
  keywords: [
    "engineering blog",
    "system design",
    "software architecture",
    "scaling systems",
    "backend engineering",
    "distributed systems",
  ],
  authors: [{ name: "BlogDrop" }],
  openGraph: {
    title: "BlogDrop",
    description:
      "High-signal engineering insights. Filtered, explained, and delivered.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
