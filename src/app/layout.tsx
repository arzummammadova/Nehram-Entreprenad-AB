import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // SEO və performans üçün
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nehram Entreprenad AB | Bygg och renovering i Sverige",
  description:
    "Nehram Entreprenad AB är en professionell bygg- och renoveringsfirma i Sverige. Vi erbjuder högkvalitativa byggtjänster för både privatpersoner och företag.",
  keywords: [
    "byggfirma Sverige",
    "renovering Stockholm",
    "byggtjänster",
    "Nehram Entreprenad",
    "husrenovering",
  ],
  authors: [{ name: "Nehram Entreprenad AB" }],
  openGraph: {
    title: "Nehram Entreprenad AB | Bygg och renovering i Sverige",
    description:
      "Professionell bygg- och renoveringsfirma i Sverige. Kontakta oss för byggtjänster av hög kvalitet.",
    url: "https://www.nehramentreprenad.se",
    siteName: "Nehram Entreprenad AB",
    locale: "sv_SE",
    type: "website",
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
    <html lang="sv" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
