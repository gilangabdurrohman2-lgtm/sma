import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", weight: ["400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: { template: "%s | PiKIR SMA Darul Ulum 1", default: "PiKIR SMA Darul Ulum 1 | Riset, Inovasi & Kewirausahaan" },
  description: "PiKIR SMA Darul Ulum 1: Praktisi Kewirausahaan, Inovasi, dan Riset. Wadah siswa mengembangkan ide, riset, inovasi, dan karya yang berdampak.",
  keywords: ["PiKIR", "PiKIR GEN 14", "SMA Darul Ulum 1", "Riset", "Inovasi", "Kewirausahaan", "Jombang"],
  authors: [{ name: "PiKIR SMA Darul Ulum 1" }],
  openGraph: { title: "PiKIR SMA Darul Ulum 1", description: "Berpikir kritis. Berkarya nyata. Praktisi Kewirausahaan, Inovasi, dan Riset SMA Darul Ulum 1.", url: "https://sma-brown.vercel.app", siteName: "PiKIR SMA Darul Ulum 1", locale: "id_ID", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${plusJakartaSans.variable} ${playfair.variable} min-h-screen overflow-x-hidden bg-background-light font-sans text-slate-800 antialiased selection:bg-secondary-soft/30`}>
        <SmoothScrollProvider><ScrollProgress/><Navbar/>{children}<Footer/></SmoothScrollProvider>
      </body>
    </html>
  );
}
