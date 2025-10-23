import type { Config } from "tailwindcss";

export default {
  mode: "jit",
  content: [
    "./src/shared-ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-montserrat)"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        primary: "#5922F7",
        secondary: "#E87A27",
        error: {
          400: "#ef233c",
          800: "#d80032",
        },
        info: {
          400: "#5fbff9",
          800: "#5863f8",
        },
        overlay: "#0B102C",
      },
    },
  },
  plugins: [],
} satisfies Config;
