"use client";
import { LanguageContext } from "@/context/language_context";
import {
  cn_facilitator,
  cn_participant,
  en_facilitator,
  en_participant,
} from "@/lib/utils/content";
import { links } from "@/lib/utils/data";
import Link from "next/link";
import React, { useContext } from "react";

export default function ParticipantContent() {
  const { language } = useContext(LanguageContext);
  const participants_contents =
    language === "en" ? en_participant : cn_participant;
  const facilitator_contents =
    language === "en" ? en_facilitator : cn_facilitator;

  return (
    <div className="flex h-full">
      <div className="flex flex-col justify-center bg-sky-100 p-10 gap-8">
        <div className="bg-gradient-to-r from-red-400 to-red-50 bg-clip-text text-transparent text-4xl font-semibold">
          {participants_contents.title}
        </div>
        {participants_contents.content.map((content, index) => (
          <div key={index} className="font-extralight">
            {content}
          </div>
        ))}
        <Link
          href={links.join_as_participant}
          target="_blank"
          className="bg-red-400 rounded-full text-center p-2 w-full lg:w-1/3 text-white hover:bg-red-300"
        >
          {participants_contents.button_text}
        </Link>
      </div>
      <div className="flex flex-col justify-center bg-sky-200 p-10 gap-8">
        <div className="bg-gradient-to-r from-cyan-600 to-red-50 bg-clip-text text-transparent text-4xl font-semibold">
          {facilitator_contents.title}
        </div>
        {facilitator_contents.content.map((content, index) => (
          <div key={index} className="font-extralight">
            {content}
          </div>
        ))}
        <Link
          href={links.join_as_facilitator}
          target="_blank"
          className="mt-4 bg-cyan-600 rounded-full text-center  p-2 w-full lg:w-1/3 text-white hover:bg-cyan-500"
        >
          {facilitator_contents.button_text}
        </Link>
      </div>
    </div>
  );
}
