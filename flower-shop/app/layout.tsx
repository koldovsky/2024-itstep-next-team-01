import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header/Header";

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
      <body>
        <Header /> 
        <main>{children}</main>
      </body>
    </html>
  );
}
