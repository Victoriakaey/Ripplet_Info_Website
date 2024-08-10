// TODO: still need to make responsiveness
import React, { useContext } from "react";
import Image from "next/image";
import home_page_image from "@/lib/img/home_page_picture.png";
import { LanguageContext } from "@/context/language_context";
import { cn_home_page, en_home_page } from "@/lib/utils/content";

export default function HomePageHeading() {
  const { language } = useContext(LanguageContext);
  const content = language === "en" ? en_home_page : cn_home_page;
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col w-[50rem] gap-5 ml-4">
        <p className="font-bold text-4xl">{content.title}</p>
        <p className="text-xl italic">{content.content}</p>
        <div>
          <button className="bg-blue-300 w-auto py-2 px-7 rounded-3xl font-bold">
            {content.button_text}
          </button>
        </div>
      </div>
      <Image
        src={home_page_image}
        alt="home-page-picture"
        width={520}
        height={520}
      />
    </div>
  );
}
