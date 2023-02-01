const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bg-dark': '#2F2E41',
        'text-gray': '#999999',
        'btn-blue': '#009EDD',
        'input-border': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
