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
    extend: {
      colors: {
        'ripplet-purple': '#F1E8FF',
        'ripplet-blue': '#EFF9FF',
        'ripplet-text': '#1E4264',
        'ripplet-button': '#75B8EE',
      }
    },
  },
  plugins: [],
};
export default config;
