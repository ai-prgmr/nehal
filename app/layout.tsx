import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookingButton from "@/components/FloatingBookingButton";

export const metadata: Metadata = {
  title: "Nehal Jhavveri | Personal Image Stylist & Confidence Coach",
  description: "Head-to-toe image transformation, public confidence coaching, and 3-month wedding styling by Nehal Jhavveri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-text-primary font-sans antialiased selection:bg-champagne selection:text-text-primary min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  );
}
