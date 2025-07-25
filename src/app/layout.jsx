import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdullah Portfolio",
  description: "Abdullah Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` flex flex-col min-h-screen bg-black text-white ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
