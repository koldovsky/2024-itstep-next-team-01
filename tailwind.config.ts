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
        footerText: '#8b7f74',
        footerHoverText: '#6b5b53',
        hoverText: '#9CA3AF',
        overlayBg: '#F6F1ED',
        secondaryText: '#918c74',
        contentText: '#a39f96',
        specialText: '#b7bec6',
        hrColor:'#b7bec6',
        primaryButton:'#6f6c4e',
        primaryButtonHover:'#7c7669',
        secondaryButton:'#7C7669',
        labelbg: '#F1AA47',
        cardbg: '#CFCEB8',
        cardJoinUsbg: '#B7BEC6',
        cardTitleText: '#F6F1ED',
        placeholderBg:'#ededea',
        placeholderText:'#6f6c4e',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        frank: ['var(--font-frank-ruhl-libre)'],
        mrsSaint: ['var(--font-mrs_saint_delafield)'],
      },
      backgroundImage: {
        'backgroundTitle': "url('/pageTitle/Image.png')",      }
    },
  },
  plugins: [],
};
export default config;
