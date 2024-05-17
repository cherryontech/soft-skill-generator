/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      borderRadius: {
        full: '9999px',
        lg: '0.5rem',
      },
    extend: {
      fontFamily: {
        inter:['inter']
      },
      fontSize: {
        52:'52px',
        48:'48px',
        32:'32px',
        20:'20px'
      },
      fontWeight: {
        bold:'700',
        semibold:'600',
        regular:'400'
      },
      colors: {
        yellow: '#eef26d',
        lightPurple: '#b796d9',
        darkPurple: '#4e2973',
        white: '#f2f2f2',
        black: '#0d0d0'
      },
    },
  },
  plugins: [],
}

