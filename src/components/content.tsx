import React from "react";
import Image, { StaticImageData } from "next/image";
import { contents } from "@/lib/utils/content";
import Link from "next/link";

interface contentProps {
  image: StaticImageData;
  image_alt: string;
  image_width: number;
  contents: contents;
  reverse?: boolean;
}

export default function Content(props: contentProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:justify-center lg:items-center gap-20 text-ripplet-text ${
        props.reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={props.image}
        alt={props.image_alt}
        width={props.image_width}
        className="select-none"
      />
      <div>
        <div className="flex flex-col gap-10">
          <div className="text-4xl font-semibold">{props.contents.title}</div>
          {props.contents.content.map((content, index) => (
            <div key={index}>{content}</div>
          ))}
        </div>
        {props.contents.button_link && props.contents.button_text ? (
          <div className="mt-14">
            <Link
              href={props.contents.button_link}
              target="_blank"
              className="bg-ripplet-button py-3 px-7 rounded-3xl font-bold select-none"
            >
              {props.contents.button_text}
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
