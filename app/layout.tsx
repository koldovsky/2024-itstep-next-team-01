import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header/Header";
import { inter, frankRuhlLibre, mrsSaintDelafield } from './fonts'
import Footer from "./components/layout/footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Sami's Flowers",
  description: "Online marketplace for flowers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${frankRuhlLibre.variable} ${mrsSaintDelafield.variable} font-sans bg-overlayBg`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
