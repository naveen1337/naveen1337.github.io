import type { Config } from "tailwindcss";

export default {
  mode: 'jit',
  content: [
    "./src/shared-ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      regular: "Montserrat-Regular",
      medium: "Montserrat-Med",
    },
    fontSize: {
      "xss": ["12px", "18px"],
      "xs": ["14px", "20px"],
      "sm": ["16px", "22px"],
      "base": ["18px", "24px"],
      "lg": ["24px", "28px"],
      "xl": ["26px", "32px"],
      "2xl": ["28px", "35px"],
      "3xl": ["32px", "38px"],
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
