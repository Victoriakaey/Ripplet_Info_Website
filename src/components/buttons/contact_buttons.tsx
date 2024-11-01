import React from "react";
import WechatButton from "./wechat_button";

import DiscordButton from "./discord_button";
import SpotifyButton from "./spotify_button";
import WechatButtonWFloatCard from "./wechat_button_w_float_card";

export default function ContactButtons() {
  return (
    <div className="flex gap-4 ml-4 fixed bottom-5 left-3">
      {/* <WechatButton /> */}
      <WechatButtonWFloatCard />
      <DiscordButton />
      <SpotifyButton />
    </div>
  );
}
