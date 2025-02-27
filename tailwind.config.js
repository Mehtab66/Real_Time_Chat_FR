/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure it includes all JSX/TSX files
    "./public/index.html", // Include this if using in HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
