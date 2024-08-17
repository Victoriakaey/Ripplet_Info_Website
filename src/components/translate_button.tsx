"use client";
import { LanguageContext } from "@/context/language_context";
import React, { useContext } from "react";
import { MdGTranslate } from "react-icons/md";

export default function TranslateButton() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div
      className="bg-slate-600 p-2.5 fixed rounded-full bottom-5 right-5 shadow-xl hover:bg-slate-400 text-white hover:cursor-pointer hover:text-slate-900"
      onClick={toggleLanguage}
    >
      <MdGTranslate className="text-xl" />
    </div>
  );
}
