"use client";
import { LanguageContext } from "@/context/language_context";
import React, { useContext } from "react";
import { MdGTranslate } from "react-icons/md";

export default function TranslateButton() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 fixed rounded-full bottom-5 right-5 shadow-xl text-white hover:cursor-pointer"
      onClick={toggleLanguage}
    >
      <MdGTranslate className="text-xl" />
    </div>
  );
}
