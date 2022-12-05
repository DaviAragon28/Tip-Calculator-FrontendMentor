/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        strongCyan: '#26c0ab',
        veryDarkCyan: '#00494d',
        darkGrayishCyan: '#5e7a7d',
        grayishCyan: '#7f9c9f',
        lightGrayishCyan: '#c5e4e7',
        veryLightGrayishCyan: '#f4fafa',
      },
      fontFamily: {
        'sans': ['Space Mono', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
