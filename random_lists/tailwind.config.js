/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#F0EDEE",
      black: "#433E3F",
      blue: "#548687",
    },
    fontFamily: {
      body: ["'Asap'", "sans-serif"],
      title: ["Dosis"],
    },
    backgroundImage: {
      main: "url('../assets/main_page.svg')",
      main_dark: "url('../assets/main_page_dark.svg')",
      decor: "url('../assets/background.svg')"
    },

    extend: {},
  },
  plugins: [],
};
