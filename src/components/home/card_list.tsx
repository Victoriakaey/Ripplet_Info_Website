"use client";
// TODO: still need to make responsiveness
import React, { useContext } from "react";
import Card from "./card";
import { LanguageContext } from "@/context/language_context";
import {
  cn_challenge,
  cn_journal,
  cn_world,
  en_challenge,
  en_journal,
  en_world,
} from "@/lib/utils/content";
import community_support from "@/lib/img/community_support.png";
import expert_led_challenges from "@/lib/img/expert_led_challenges.png";
import guided_journaling from "@/lib/img/guided_journaling.png";

export default function CardList() {
  const { language } = useContext(LanguageContext);
  const journal = language === "en" ? en_journal : cn_journal;
  const world = language === "en" ? en_world : cn_world;
  const challenge = language === "en" ? en_challenge : cn_challenge;
  return (
    <div className="mt-4 flex flex-col xl:flex-row items-center justify-center min-w-full gap-14 p-5 xl:p-0">
      <Card
        card_content={journal}
        image={guided_journaling}
        image_width={140}
        image_height={140}
        image_alt="guided journaling image"
      />
      <Card
        card_content={world}
        image={community_support}
        image_width={220}
        image_height={220}
        image_alt="community support image"
      />
      <Card
        card_content={challenge}
        image={expert_led_challenges}
        image_width={160}
        image_height={160}
        image_alt="expert-led challenges image"
      />
    </div>
  );
}
