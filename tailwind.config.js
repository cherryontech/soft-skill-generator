/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#eef26d', //yellow
        lightPurple: '#b796d9', //light purple
        darkPurple: '#4e2973', //dark purple
        white: '#f2f2f2', //white
        black: '#0d0d0d', //black
      }
    },
  },
  plugins: [],
}

