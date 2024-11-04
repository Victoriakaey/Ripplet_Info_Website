"use client";
import { LanguageContext } from "@/context/language_context";
import { cn_about_us, en_about_us } from "@/lib/utils/content";
import React, { useContext } from "react";
import about_ripplet_image from "@/lib/img/about_ripplet.png";
import ContactButtons from "@/components/buttons/contact_buttons";
import Content from "@/components/content";

export default function About() {
  const { language } = useContext(LanguageContext);
  const contents = language === "en" ? en_about_us : cn_about_us;
  return (
    <main className="min-h-screen flex flex-col justify-center px-6 py-10 ">
      <div className="mt-8 mb-8 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
        <Content
          image={about_ripplet_image}
          image_alt="about ripplet image"
          image_width={500}
          contents={contents}
        />
      </div>
      <div className="flex justify-center mt-4">
        <ContactButtons />
      </div>
    </main>
  );
}
