import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";
import { SiXiaohongshu } from "react-icons/si";

export default function RedBookButton() {
  return (
    <Link
      href={links.red_book}
      target="_blank"
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2 rounded-full shadow-xl text-white hover:cursor-pointer ml-4"
    >
      <SiXiaohongshu className="text-2xl" />
    </Link>
  );
}
