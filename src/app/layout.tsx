import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ripplet",
  description: "", // TODO: Need to fill this in later
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-cyan-100 to-blue-300 `}
      >
        <Navbar />
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
