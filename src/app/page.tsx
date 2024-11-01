"use client";
import CardList from "@/components/home/card_list";
import HomePageHeading from "@/components/home/home_page_heading";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex lg:items-center lg:justify-center bg-ripplet-blue lg:bg-gradient-to-r lg:from-ripplet-blue lg:to-ripplet-purple">
      <div className="flex lg:items-center justify-center mt-10">
        <div className="mb-10 flex flex-col gap-3">
          <HomePageHeading />
          <CardList />
        </div>
      </div>
    </div>
  );
}
