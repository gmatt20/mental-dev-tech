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
        primary: "#254336;",
        secondary: "#f5efe6",
        hover: "#b6c5be",
        active: "#657e72",
        text: "#f5efe6",
      },
    },
  },
  plugins: [],
} satisfies Config;
