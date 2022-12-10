/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "split-accent-white": "linear-gradient(to right, #ba45b4 50%, white 50%)"
      }
    },
  },
  plugins: [],
};
