"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/context/language_context";
import {
  cn_facilitators,
  cn_storytellers,
  en_facilitators,
  en_storytellers,
} from "@/lib/utils/content";
import storytellers_image from "@/lib/img/storytellers.png";
import facilitators_image from "@/lib/img/facilitators.png";
import Content from "@/components/content";

export default function Participate() {
  const { language } = useContext(LanguageContext);
  const storytellers_contents =
    language === "en" ? en_storytellers : cn_storytellers;
  const facilitators_contents =
    language === "en" ? en_facilitators : cn_facilitators;
  return (
    <main className="min-h-screen mt-4 mb-2 flex flex-col items-center justify-center">
      <Content
        image={storytellers_image}
        image_alt="storytellers image"
        image_width={520}
        contents={storytellers_contents}
      />
      <Content
        image={facilitators_image}
        image_alt="facilitators image"
        image_width={590}
        contents={facilitators_contents}
        reverse={true}
      />
    </main>
  );
}
