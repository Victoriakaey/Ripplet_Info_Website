"use client";
import { LanguageContext } from "@/context/language_context";
import { cn_about_us, en_about_us } from "@/lib/utils/content";
import React, { useContext } from "react";

export default function AboutUsContent() {
  const { language } = useContext(LanguageContext);
  const contents = language === "en" ? en_about_us : cn_about_us;
  return (
    <div className="flex flex-col gap-6 text-slate-600">
      <div className="text-4xl">{contents.title}</div>
      {contents.content.map((content, index) => (
        <div key={index} className="font-extralight">
          {content}
        </div>
      ))}
    </div>
  );
}
