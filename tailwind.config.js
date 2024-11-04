/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        accent: {
          100: "#ffff98",
          200: "#feff83",
          300: "#d6ff6f",
          400: "#cdf66a",
          500: "#c3ea65", // original color
          600: "#a6c756",
          700: "#88a447",
          800: "#6b8138",
          900: "#4e5e28",
        },
      },
    },
  },
  plugins: [nextui()],
};
