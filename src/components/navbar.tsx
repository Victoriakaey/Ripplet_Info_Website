// TODO: add responsive

import Image from "next/image";
import logo from "@/lib/img/logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white h-12 flex justify-between shadow-xl">
      <Link href="/">
        <Image src={logo} alt="ripplet logo image" width={124} />
      </Link>
      {/* font: Satoshi */}
      <div className="flex gap-10 mr-8">
        <Link href="/participate" className="mt-3 hover:text-red-400">
          Participate
        </Link>
        <Link href="/about" className="mt-3 hover:text-red-400">
          About
        </Link>
        <Link
          href="https://forms.gle/RYuNdLpzugrCPdA28"
          target="_blank"
          className="bg-red-400 rounded-full py-2 px-4 text-white mt-1 mb-1 hover:bg-sky-600"
        >
          Join the beta
        </Link>
      </div>
    </div>
  );
}
