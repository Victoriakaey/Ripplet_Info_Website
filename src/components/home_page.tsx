// TODO: still need to make responsiveness
import React from "react";
import CardList from "./card_list";
import HomePageHeading from "./home_page_heading";

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* //? Would the background be too light? */}
      <div className="flex items-center justify-center bg-gradient-to-r from-cyan-50 to-indigo-100 rounded-3xl w-[105rem] h-[55rem] mt-10">
        <div className="flex flex-col gap-3">
          <HomePageHeading />
          <CardList />
        </div>
      </div>
    </div>
  );
}
