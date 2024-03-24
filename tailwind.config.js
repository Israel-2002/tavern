/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB8F2C",
        light: "#F4F2F0",
        dark: "#121110",
        grey: "#55504C",
        green: "#40AF49",
      },

      fontSize: {
        "h1-clamp": "clamp(2.1875rem, 1.2054rem + 4.9107vw, 5.625rem);",
        "h2-clamp": "clamp(1.875rem, 1.5179rem + 1.7857vw, 3.125rem);",
      },

      fontFamily: {
        stylish: ["Qwigley", "cursive"],
        header: ["Fraunces", "serif"],
      },
      screens: {
        520: "520px",
      },
    },
  },
  plugins: [],
};
