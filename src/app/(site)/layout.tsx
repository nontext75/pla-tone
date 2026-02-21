import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/layout/CartDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PLA.TONE STUDIO",
  description: "Bespoke Gundam Plamodel Artistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-brand-primary text-brand-secondary font-sans`}>
        <SmoothScroll>
          <CartProvider>
            <Header />
            <CartDrawer />
            {children}
            <Footer />
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

