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
    <div className="fixed w-full bg-white z-50 select-none px-1 lg:px-2">
      <div className="h-10 mt-2 md:mt-0 md:h-14 flex justify-between items-center mb-2">
        <Link href="/">
          <Image
            src={logo}
            alt="ripplet logo image"
            width={200}
            height={100}
            className="ml-4 md:ml-6 w-[60%] h-auto md:mt-2 md:w-[75%]"
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
        <div className="hidden md:flex gap-12 mr-8 text-lg">
          {navbar.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              // target={item.button ? "_blank" : ""}
              className={
                item.button
                  ? "-mr-4 bg-ripplet-button rounded-full py-2 px-7 text-ripplet-text font-semibold mt-3 mb-1 hover:bg-red-400 hover:text-white"
                  : "font-semibold mt-5 hover:text-red-400"
              }
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center absolute top-[3.4rem] left-0 w-full bg-white shadow-md transition-transform duration-300 ${
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
