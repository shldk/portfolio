/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#101010",
        black: "#000",
        forestgreen: "#007913",
        steelblue: "#005c9c",
      },
      fontFamily: { inter: "Inter", "konstant-grotesk": "'Konstant Grotesk'" },
    },
    screens: { sm: { max: "420px" } },
  },
  corePlugins: { preflight: false },
};
