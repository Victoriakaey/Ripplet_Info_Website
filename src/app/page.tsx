"use client";
import CardList from "@/components/home/card_list";
import HomePageHeading from "@/components/home/home_page_heading";
import React from "react";

export default function Home() {
  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-r from-ripplet-blue to-ripplet-purple">
      <div className="flex items-center justify-center mt-10">
        <div className="mb-10 flex flex-col gap-3">
          <HomePageHeading />
          <CardList />
        </div>
      </div>
    </div>
  );
}
