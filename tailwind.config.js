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
        DEFAULT: 'inter',
        // , ...defaultTheme.fontFamily.sans
      },
      fontSize: {
        52: '52px',
        48: '48px',
        32: '32px',
        20: '20px',
      },
      fontWeight: {
        'normal': '400',
        'semibold': '600',
        'bold': '900',
      },
      lineHeight: {
        78: '78px',
        72: '72px',
        48: '48px',
        36: '36px',
        32: '32px',
        24: '24px',
      },
      colors: {
        yellow: '#eef26d',
        lightpurple: '#b796d9',
        darkpurple: '#4e2973',
        white: '#f2f2f2',
        black: '#0d0d0'
      },
    },
  },
  plugins: [],
}

