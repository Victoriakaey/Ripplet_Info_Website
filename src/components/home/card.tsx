// TODO: still need to make responsiveness
import React from "react";
import { card_type } from "@/lib/utils/content";
import Image, { StaticImageData } from "next/image";

interface cardProps {
  image: StaticImageData;
  image_alt: string;
  image_width: number;
  image_height: number;
  card_content: card_type;
}

export default function Card(props: cardProps) {
  return (
    <div className="bg-white w-[23rem] h-[23rem] rounded-2xl shadow-md p-11 flex flex-col gap-2 items-center justify-center text-ripplet-text">
      <p className="text-2xl font-bold mb-4 -mt-2">
        {props.card_content.title}
      </p>
      <Image
        src={props.image}
        alt={props.image_alt}
        width={props.image_width}
        height={props.image_height}
        className="select-none"
      />
      <p className="italic font-semibold mb-1 mt-1">
        {props.card_content.sub_title}
      </p>
      <p className="font-light text-center text-sm">
        {props.card_content.content_short_version}
      </p>
    </div>
  );
}
