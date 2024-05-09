/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
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
        yellow:'#eef26d',
        lightpurple:'#b796d9',
        darkpurple:'#4e2973',
        white:'#f2f2f2',
        black:'#0d0d0d'
      },
    },
  },
  plugins: [],
}

