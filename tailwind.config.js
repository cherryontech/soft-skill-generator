/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
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
      },
      fontSize:{
        txt28: '1.75rem', //28px
        txt32: '2rem', //32px
      },
      margin: {
        marginXl: '22.125rem' //354px
      },
      padding: {
        '5px': '0.313rem', //5px
        '11px': '0.688rem', //11px
        23: '1.438rem', //23px
        22: '1.375rem', //22px
        42: '2.625rem', //42px
        84: '5.25rem', //84px
      }
    },
  },
  plugins: [],
}

