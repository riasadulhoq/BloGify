import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff",
  variable: "--font-satoshi",
  weight: "300 400 500 700 900",
});

export const metadata = {
  title: "Blogify",
  description: "Blogs are our life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Header />
        <div className="py-10 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row">
              {children}
              {/* <Sidebar /> */}
            </div>
          </div>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
