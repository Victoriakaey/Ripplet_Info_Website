import React, { useContext } from "react";
import Card from "./card";
import { LanguageContext } from "@/context/language_context";
import { BsPeople } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { PiSmileyStickerBold } from "react-icons/pi";
import {
  cn_challenge,
  cn_journal,
  cn_world,
  en_challenge,
  en_journal,
  en_world,
} from "@/lib/utils/content";

export default function CardList() {
  const { language } = useContext(LanguageContext);
  const journal = language === "en" ? en_journal : cn_journal;
  const world = language === "en" ? en_world : cn_world;
  const challenge = language === "en" ? en_challenge : cn_challenge;
  return (
    <div className="flex items-center justify-center min-w-full gap-14">
      <Card
        card_content={journal}
        icon={
          <PiSmileyStickerBold className="text-5xl text-green-400 mb-2 -ml-1" />
        }
      />
      <Card
        card_content={world}
        icon={<BsPeople className="text-5xl text-blue-400 mb-2" />}
      />
      <Card
        card_content={challenge}
        icon={<TbSchool className="text-5xl text-orange-400 mb-2 -ml-1" />}
      />
    </div>
  );
}
