import React from "react";
import { TbBrandWechat } from "react-icons/tb";

export default function WechatButton() {
  return (
    <div className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer ml-4">
      <TbBrandWechat className="text-xl" />
    </div>
  );
}
