import { Navbar } from "@/components/sections/navbar";
import { SiteThemeRootStyle } from "@/components/site-theme-root-style";
import { siteMetadata } from "@/lib/site-metadata";
import type { Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SiteThemeRootStyle />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background`}
      >
        <div className="relative mx-auto max-w-7xl border-x">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-6 z-10 h-full w-px bg-border"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-6 z-10 h-full w-px bg-border"
          />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
