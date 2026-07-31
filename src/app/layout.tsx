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
  title: "Nick Nelson | Automation Specialist",
  description:
    "I build automation systems that eliminate repetitive work and save businesses hours every week.",
  openGraph: {
    title: "Nick Nelson | Automation Specialist",
    description:
      "I build automation systems that eliminate repetitive work and save businesses hours every week.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
