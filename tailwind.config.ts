import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: '#F6F1ED',
        primaryText: '#7C7669',
        hoverText: '#9CA3AF',
        overlayBg: '#F6F1ED',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-frank-ruhl-libre)'],
        script: ['var(--font-mrs-saint-delafield)'],
      },
    },
  },
  plugins: [],
};
export default config;
