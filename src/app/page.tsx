"use client";
import HomePage from "@/components/home_page";
import { LanguageContext } from "@/context/language_context";
import {
  cn_ripplet_introduction,
  en_ripplet_introduction,
} from "@/lib/utils/content";
import React, { useContext } from "react";

export default function Home() {
  const { language } = useContext(LanguageContext);
  const contents =
    language === "en" ? en_ripplet_introduction : cn_ripplet_introduction;

  return (
    <main className="h-screen flex flex-col justify-center">
      {/* <div className="p-16 md:p-20">
        {contents.map((content, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="ml-[0.4rem] text-4xl font-semibold text-slate-600">
              {content.bold}
            </div>
            <div className="flex">
              <div
                className={`${content.color} text-2xl md:text-3xl lg:text-4xl font-semibold -mt-[0.2rem] md:-mt-[0.3rem] lg:-mt-[0.25rem] mr-[0.3rem] lg:mr-[0.4rem] mb-1`}
              >
                {content.highlight}
              </div>
              <div className="text-lg md:text-2xl lg:text-3xl font-extralight italic text-slate-600">
                {content.normal}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <HomePage />
    </main>
  );
}
