import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { LanguageProvider } from "@/context/language_context";
import TranslateButton from "@/components/translate_button";

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
      <body className={`${inter.className} min-h-screen`}>
        <LanguageProvider>
          <Navbar />
          <div className="h-full pt-12 lg:pt-0">
            {children}
            <TranslateButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
