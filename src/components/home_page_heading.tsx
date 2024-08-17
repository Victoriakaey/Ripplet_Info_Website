// TODO: still need to make responsiveness
import React, { useContext } from "react";
import Image from "next/image";
import home_page_image from "@/lib/img/home_page_picture.png";
import { LanguageContext } from "@/context/language_context";
import { cn_home_page, en_home_page } from "@/lib/utils/content";
import Link from "next/link";

export default function HomePageHeading() {
  const { language } = useContext(LanguageContext);
  const content = language === "en" ? en_home_page : cn_home_page;
  return (
    <div className="flex items-center justify-center text-ripplet-text">
      <div className="flex flex-col w-[44rem] gap-5 ml-4">
        <p className="font-semibold text-4xl">{content.title}</p>
        <p className="text-lg italic">{content.content}</p>
        <div className="mt-10">
          <Link
            href={content.button_link}
            target="_blank"
            className="bg-ripplet-button py-3 px-7 rounded-3xl font-bold select-none"
          >
            {content.button_text}
          </Link>
        </div>
      </div>
      <Image
        src={home_page_image}
        alt="home-page-picture"
        width={520}
        height={520}
        className="select-none"
      />
    </div>
  );
}
