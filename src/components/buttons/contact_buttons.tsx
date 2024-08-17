import React from "react";
import LinkedInButton from "./linkedin_button";
import WechatButton from "./wechat_button";
import RedBookButton from "./red_book_button";

export default function ContactButtons() {
  return (
    <div className="flex ml-4 fixed bottom-5 left-3">
      <LinkedInButton />
      <WechatButton />
      <RedBookButton />
    </div>
  );
}
