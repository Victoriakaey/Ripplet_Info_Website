import React from "react";
import { MdGTranslate } from "react-icons/md";

export default function TranslateButton() {
  return (
    <div className="bg-slate-600 p-2 fixed rounded-full bottom-4 right-4 shadow-xl hover:bg-slate-200 text-white hover:cursor-pointer hover:text-slate-600">
      <MdGTranslate className="text-xl" />
    </div>
  );
}

// Need to have a onclick function to transfer chinese to english
