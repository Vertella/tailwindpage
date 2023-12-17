const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      },
      fontFamily: {
        sans: ["'Roboto Condensed'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};