import React from "react";
import { TbBrandLinkedin } from "react-icons/tb";

export default function LinkedInButton() {
  return (
    <div className="bg-slate-600 p-2 fixed rounded-full shadow-xl hover:bg-slate-400 hover:text-slate-950 text-white hover:cursor-pointer">
      <TbBrandLinkedin className="text-xl" />
    </div>
  );
}
