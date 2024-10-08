/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
