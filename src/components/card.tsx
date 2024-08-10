// TODO: still need to make responsiveness
import React, { useState } from "react";
import { card_type } from "@/lib/utils/content";

interface cardProps {
  icon: React.ReactNode;
  card_content: card_type;
}

export default function Card(props: cardProps) {
  return (
    <div className="bg-white w-[25rem] h-[25rem] rounded-2xl shadow-md p-6">
      {props.icon}
      <p className="text-2xl font-bold mb-3">{props.card_content.title}</p>
      <p className="italic font-semibold mb-1">
        {props.card_content.sub_title}
      </p>
      <p className="font-light">{props.card_content.content_short_version}</p>
    </div>
  );
}
