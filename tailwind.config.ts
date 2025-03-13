import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db4d4d",
        dark: "#31353f",
        light: "#d7d8d8",
        hover: "#454852",
        active: "#5a5d65",
        text: "#f4f5f4",
      },
    },
  },
  plugins: [],
} satisfies Config;
