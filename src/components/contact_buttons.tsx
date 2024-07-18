import React from "react";
import LinkedInButton from "@/components/linkedin_button";
import WechatButton from "@/components/wechat_button";
import RedBookButton from "@/components/red_book_button";

export default function ContactButtons() {
  return (
    <div className="flex ml-4 fixed bottom-8 left-5">
      <LinkedInButton />
      <WechatButton />
      <RedBookButton />
    </div>
  );
}
