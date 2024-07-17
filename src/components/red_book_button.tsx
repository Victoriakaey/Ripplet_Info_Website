import React from "react";
import { SiXiaohongshu } from "react-icons/si";

export default function RedBookButton() {
  return (
    <div className="bg-slate-600 p-[0.4rem] fixed rounded-full shadow-xl hover:bg-slate-400 hover:text-slate-950 text-white hover:cursor-pointer ml-24">
      <SiXiaohongshu className="text-2xl" />
    </div>
  );
}
