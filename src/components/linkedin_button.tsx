import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";

export default function LinkedInButton() {
  return (
    <Link
      href={links.linkedin}
      target="_blank"
      className="bg-slate-600 p-2 rounded-full shadow-xl hover:bg-slate-400 hover:text-slate-950 text-white hover:cursor-pointer"
    >
      <TbBrandLinkedin className="text-xl" />
    </Link>
  );
}
