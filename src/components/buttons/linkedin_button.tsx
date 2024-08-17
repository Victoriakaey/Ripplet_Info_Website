import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";

export default function LinkedInButton() {
  return (
    <Link
      href={links.linkedin}
      target="_blank"
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer"
    >
      <TbBrandLinkedin className="text-xl" />
    </Link>
  );
}
