"use client";
import { LanguageContext } from "@/context/language_context";
import { cn_storytellers, en_storytellers } from "@/lib/utils/content";
import Image from "next/image";
import React, { useContext } from "react";
import storytellers_image from "@/lib/img/storytellers.png";

export default function StorytellersContent() {
  const { language } = useContext(LanguageContext);
  const contents = language === "en" ? en_storytellers : cn_storytellers;

  return (
    <div className="flex justify-cent items-center gap-14 text-ripplet-text p-32">
      <Image
        src={storytellers_image}
        alt="story tellers image"
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
