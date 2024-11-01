import Image, { StaticImageData } from "next/image";
import React from "react";

interface FloatingCardProps {
    isHovered: boolean;
    image: StaticImageData;
    image_alt: string;
}

export default function FloatingCard(props: FloatingCardProps) {
  return (
    <div className={`p-1 border-2 border-ripplet-text rounded-xl bg-white ${props.isHovered ? "" : "hidden"}`}>
      {/* <Image
        src={props.image}
        alt={props.image_alt}
      /> */}
      <div className="w-[10rem]">
      <Image
        src={props.image}
        alt={props.image_alt}
        className="w-[10rem]"
      />
      </div>
    </div>
  );
}
