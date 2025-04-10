import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ActiveSectionContextProvider } from "@/context/activeSectionContetxt";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "McKnight Group",
  description: "McKnight Group Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} !scroll-smooth`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background-primary)] text-[var(--text-primary)]`}
      >
        <ActiveSectionContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
