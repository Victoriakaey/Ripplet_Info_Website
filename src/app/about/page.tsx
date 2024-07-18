import React from "react";
import ContactButton from "../../components/contact_buttons";
import AboutUsContent from "@/components/about_us_content";

export default function About() {
  return (
    <main className="h-screen flex flex-col justify-center p-20 bg-sky-100">
      <AboutUsContent />
      <ContactButton />
    </main>
  );
}
