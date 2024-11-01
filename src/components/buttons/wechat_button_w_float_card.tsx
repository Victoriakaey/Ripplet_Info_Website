"use client"
import React, { useState } from "react";
import { TbBrandWechat } from "react-icons/tb";
import FloatingCard from "../floating_card";
import wechatQR from "../../lib/img/wechat.png"

export default function WechatButtonWFloatCard() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute bottom-full mb-2">
          <FloatingCard isHovered={isHovered} image={wechatQR} image_alt="wechat-qr-code"/>
        </div>
      )}
      <div 
        className="bg-ripplet-text hover:bg-ripplet-text/80 p-2.5 rounded-full shadow-xl text-white hover:cursor-pointer"
      >
        <TbBrandWechat className="text-xl" />
      </div>
    </div>
  );
}