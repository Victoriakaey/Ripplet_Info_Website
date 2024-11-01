import { BsDiscord } from "react-icons/bs";
import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";

export default function DiscordButton() {
  return (
    <Link
      href={links.discord}
      target="_blank"
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer"
    >
      <BsDiscord className="text-xl" />
    </Link>
  );
}
