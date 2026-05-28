import type { Metadata } from "next";
import { Oswald, Raleway } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Forbes Court Reporting Services, LLC.",
    template: "%s | Forbes Court Reporting",
  },
  description:
    "Stenographic and voice court reporting across Western New York and the Finger Lakes since 1972.",
  keywords: [
    "court reporting",
    "court reporter",
    "Batavia NY",
    "Western New York",
    "Finger Lakes",
    "depositions",
    "hearings",
    "transcripts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
