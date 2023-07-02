/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
      },
    },
    // fontFamily: {
    //   sans: ["Mulish", "sans-serif"],
    //   mono: ["Rokkitt", "monospace"],
    // },
  },
  plugins: [],
};
