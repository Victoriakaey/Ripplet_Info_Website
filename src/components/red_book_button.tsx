import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";
import { SiXiaohongshu } from "react-icons/si";

export default function RedBookButton() {
  return (
    <Link
      href={links.red_book}
      target="_blank"
      className="bg-slate-600 p-[0.4rem] rounded-full shadow-xl hover:bg-slate-400 hover:text-slate-950 text-white hover:cursor-pointer ml-4"
    >
      <SiXiaohongshu className="text-2xl" />
    </Link>
  );
}
