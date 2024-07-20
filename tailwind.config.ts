import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-red-500",
    "text-orange-400",
    "text-purple-800",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
