import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coffee app",
  description: "App for coffee market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className + ' container'}>
          <TheHeader/>
          {children}
          <TheFooter/>
      </body>
    </html>
  );
}
