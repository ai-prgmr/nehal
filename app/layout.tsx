import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Nehal Jhavveri",
  description: "Bridal & Occasion Stylist | Image Coach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kalam.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
