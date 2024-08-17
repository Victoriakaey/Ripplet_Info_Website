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
    <main className="h-screen flex flex-col justify-center px-56 py-3">
      <Content
        image={about_ripplet_image}
        image_alt="about ripplet image"
        image_width={500}
        contents={contents}
      />
      <ContactButtons />
    </main>
  );
}
