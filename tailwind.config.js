/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
          50: '#eef26d', //yellow
          100: '#b796d9', //light purple
          150: '#4e2973', //dark purple
          200: '#f2f2f2', //white
          250: '#0d0d0d', //black
        }
      },
    },
  plugins: [],
}

