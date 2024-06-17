/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      borderRadius: {
        full: '9999px',
        lg: '0.5rem',
        20: '1.25rem', //20px
        10: '10px'
      },
    extend: {
      fontFamily: {
        inter:['inter', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      },
      fontWeight: {
        bold:'700',
        semibold:'600',
        regular:'400'
      },
      colors: {
        yellow: '#eef26d', //yellow
        lightPurple: '#b796d9', //light purple
        darkPurple: '#4e2973', //dark purple
        white: '#f2f2f2', //white
        black: '#0d0d0d', //black
      },
      fontSize:{
        txt9: '9px',
        txt10: '10px',
        txt13: '13px',
        txt15: '15px',
        txt17: '17px',
        txt22: '22px',
        txt20: '1.25rem', //20px
        txt28: '1.75rem', //28px
        txt32: '2rem', //32px
        txt40: '2.5rem', //40px
        txt48: '3rem', //48px
        txt52: '3.25rem' //52px
      },
      margin: {
        marginXl: '22.125rem', //354px
        26: '1.625rem', //26px
        30: '1.875rem', //30px
        50: '3.125rem', //50px
        70: '4.375rem', //70px
        100: '6.25rem', //100px
      },
      padding: {
        '5px': '0.313rem', //5px
        '11px': '0.688rem', //11px
        22: '1.375rem', //22px
        23: '1.438rem', //23px
        30: '1.875rem', //30px
        42: '2.625rem', //42px
        84: '5.25rem', //84px
      },
      lineHeight: {
        36: '3rem',
        72: '4.5rem', //72px
      }
    },
  },
  plugins: [],
}

