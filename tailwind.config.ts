import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-sora)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"], // bind Playfair to font-serif
      },
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
      },
    },
  },
  plugins: [],
};

export default config;
