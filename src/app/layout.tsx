import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Mental Dev Tech",
};

const montserrat = Montserrat({
  weight: ["300", "500", "700"],
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-dark text-text overflow-x-hidden`}>
        <Nav />
        <div className="mx-10">
          {children}
          <SpeedInsights />
        </div>
        <Footer />
      </body>
    </html>
  );
}
