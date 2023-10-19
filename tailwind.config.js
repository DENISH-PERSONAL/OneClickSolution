/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea3f43",
        primaryDark: "#ff4348",
        dark: "#292930",
        light: "#999fae",
      },
    },
  },
  plugins: [],
}