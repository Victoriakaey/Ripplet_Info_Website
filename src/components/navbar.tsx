// TODO: add responsive
"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/lib/img/logo.png";
import Link from "next/link";
import { cn_navbar, en_navbar } from "@/lib/utils/content";
import { LanguageContext } from "@/context/language_context";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for hamburger menu

/* font: Satoshi */
export default function Navbar() {
  const { language } = useContext(LanguageContext);
  const navbar = language === "en" ? en_navbar : cn_navbar;
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-50 select-none">
      <div className="h-12 flex justify-between items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="ripplet logo image"
            width={124}
            className="ml-6"
          />
        </Link>
        {/* Hamburger Menu Icon */}
        <div className="mr-6 md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 mr-8">
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
      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center absolute top-12 left-0 w-full bg-white shadow-md transition-transform duration-300 ${
          menuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        {navbar.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target={item.button ? "_blank" : ""}
            className={
              item.button
                ? "bg-red-400 rounded-full py-2 px-4 text-white my-2 w-11/12 text-center hover:bg-sky-600"
                : "my-2 w-11/12 text-center hover:text-red-400"
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
