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
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      <div className="flex flex-col justify-center bg-sky-100 p-6 lg:p-10 gap-6 lg:gap-8 w-full lg:w-1/2 flex-1">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-gradient-to-r from-red-500 to-red-200 bg-clip-text text-transparent text-3xl lg:text-4xl font-semibold text-center lg:text-left">
            {participants_contents.title}
          </div>
        </div>
        {participants_contents.content.map((content, index) => (
          <div key={index} className="font-extralight text-center lg:text-left">
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
      <div className="flex flex-col justify-center bg-sky-200 p-6 lg:p-10 gap-6 lg:gap-8 w-full lg:w-1/2 flex-1">
        <div className="flex justify-center lg:justify-start">
          <div className="bg-gradient-to-r from-cyan-700 to-cyan-400 bg-clip-text text-transparent text-3xl lg:text-4xl font-semibold text-center lg:text-left">
            {facilitator_contents.title}
          </div>
        </div>
        {facilitator_contents.content.map((content, index) => (
          <div key={index} className="font-extralight text-center lg:text-left">
            {content}
          </div>
        ))}
        <Link
          href={links.join_as_facilitator}
          target="_blank"
          className="mt-4 bg-cyan-600 rounded-full text-center p-2 w-full lg:w-1/3 text-white hover:bg-cyan-500"
        >
          {facilitator_contents.button_text}
        </Link>
      </div>
    </div>
  );
}
