import { TbBrandWechat } from "react-icons/tb";
import { links } from "@/lib/utils/data";
import Link from "next/link";
import React from "react";

export default function WechatButton() {
  return (
    <Link
      href={links.wechat}
      target="_blank"
      className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer"
    >
      <TbBrandWechat className="text-xl" />
    </Link>
  );
}

