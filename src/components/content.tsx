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
      className={`flex flex-col md:flex-row lg:justify-center lg:items-center gap-10 lg:gap-20 text-ripplet-text ${
        props.reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Image
        src={props.image}
        alt={props.image_alt}
        width={props.image_width}
        className="w-full max-w-xs lg:max-w-md h-auto object-contain mx-auto select-none"
      />
      <div>
        <div className="flex flex-col gap-6 px-5 lg:px-0">
          <div className="mb-4 lg:mb-10 text-4xl font-semibold">{props.contents.title}</div>
          {props.contents.content.map((content, index) => (
            <div key={index} className="lg:text-lg">{content}</div>
          ))}
        </div>
        {props.contents.button_link && props.contents.button_text ? (
          <div className="mt-20 ml-5 lg:ml-0">
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
        {props.image_alt === "about ripplet image" ? 
          <div className="text-sm flex items-center lg:mt-24 lg:justify-end mx-5 text-ripplet-text gap-1 mt-8">
            <p>{props.contents.contact_us}</p>
            <a
              href="mailto:ripplet.wellness@gmail.com"
              className="text-ripplet-button"
            >
              ripplet.wellness@gmail.com
            </a>
          </div>: <></>
        }
      </div>
    </div>
  );
}
