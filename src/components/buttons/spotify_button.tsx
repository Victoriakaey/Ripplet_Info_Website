import { BsSpotify } from "react-icons/bs";
import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";

export default function SpotifyButton() {
  return (
    <Link
      href={links.spotify}
      target="_blank"
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer"
    >
      <BsSpotify className="text-xl" />
    </Link>
  );
}