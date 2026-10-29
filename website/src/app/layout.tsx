import type { Metadata } from "next";
import { Geist, Poppins } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";

const geist = Geist({
  variable: "--font-geist-src",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins-src",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${site.name} | Software studio, India`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <SmoothScroll />
        <Nav />
        {children}
      </body>
    </html>
  );
}
