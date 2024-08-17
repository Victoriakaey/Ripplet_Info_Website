"use client";
import CardList from "@/components/card_list";
import HomePageHeading from "@/components/home_page_heading";
import React from "react";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center">
      {/* //? Would the background be too light? */}
      <div className="flex items-center justify-center bg-gradient-to-r from-ripplet-blue to-ripplet-purple rounded-3xl w-[100rem] h-[52rem] mt-10">
        <div className="flex flex-col gap-3">
          <HomePageHeading />
          <CardList />
        </div>
      </div>
    </div>
  );
}
