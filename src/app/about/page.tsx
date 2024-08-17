import React from "react";
import ContactButtons from "@/components/buttons/contact_buttons";
import AboutUsContent from "@/components/about_ripplet/about_us_content";

export default function About() {
  return (
    <main className="h-screen flex flex-col justify-center px-44">
      <AboutUsContent />
      <ContactButtons />
    </main>
  );
}
