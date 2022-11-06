/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {},
    fontFamily: {
      primary: "Montserrat",
    },
    colors: {
      text_white: "#fff",
      text_black: "#000",
      bg_white: "#fff",
      error: "#FF1A00",
      bg_black: "#000",
      bg_blue: "#4B00FF",
      btn: "#4B00FF",
      check: "#4B00FF",
      light_green: "#B4FF00",
      light_gray: "#F8F8F8",
      dark_gray: "#858585",
      subTitle: "#CFCFCF",
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
