// TODO: add responsive
"use client";
import React, { useContext } from "react";
import Image from "next/image";
import logo from "@/lib/img/logo.png";
import Link from "next/link";
import { cn_navbar, en_navbar } from "@/lib/utils/content";
import { LanguageContext } from "@/context/language_context";

export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const navbar = language === "en" ? en_navbar : cn_navbar;
  return (
    <div className="fixed top-0 w-full bg-white h-12 flex justify-between shadow-md select-none">
      <Link href="/">
        <Image
          src={logo}
          alt="ripplet logo image"
          width={124}
          className="ml-6"
        />
      </Link>
      {/* font: Satoshi */}
      <div className="flex gap-10 mr-8">
        {navbar.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target={item.button ? "_blank" : ""}
            className={
              item.button
                ? "bg-red-400 rounded-full py-2 px-4 text-white mt-1 mb-1 hover:bg-sky-600"
                : "mt-3 hover:text-red-400"
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
