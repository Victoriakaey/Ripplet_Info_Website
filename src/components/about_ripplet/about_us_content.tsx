"use client";
import { LanguageContext } from "@/context/language_context";
import {
  cn_about_us,
  cn_new_about_us,
  en_about_us,
  en_new_about_us,
} from "@/lib/utils/content";
import React, { useContext } from "react";
import about_ripplet_image from "@/lib/img/about_ripplet.png";
import Image from "next/image";

export default function AboutUsContent() {
  const { language } = useContext(LanguageContext);
  const contents = language === "en" ? en_new_about_us : cn_new_about_us;
  return (
    <div className="flex justify-cent items-center gap-14 text-ripplet-text">
      <Image
        src={about_ripplet_image}
        alt="about ripplet image"
        width={430}
        className="select-none"
      />
      <div className="flex flex-col gap-10">
        <div className="text-4xl font-semibold">{contents.title}</div>
        {contents.content.map((content, index) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    </div>
  );
}
