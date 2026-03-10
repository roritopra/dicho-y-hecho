import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dicho y Hecho - Soluciones Legales",
  description: "Trámites legales eficientes al alcance de un clic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-inter antialiased relative`}>
        {/* Global Background Gradient */}
        <div className="absolute top-0 left-0 -z-10 w-full h-[660px] bg-linear-to-b from-[#0071f5]/20 to-transparent pointer-events-none" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
