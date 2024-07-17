import React from "react";
import { TbBrandWechat } from "react-icons/tb";

export default function WechatButton() {
  return (
    <div className="bg-slate-600 p-2 fixed rounded-full shadow-xl hover:bg-slate-400 hover:text-slate-950 text-white hover:cursor-pointer ml-12">
      <TbBrandWechat className="text-xl" />
    </div>
  );
}
