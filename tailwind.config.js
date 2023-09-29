/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        split: '.5em',
        narrow: '-0.5em',
      }
    },
  },
  plugins: [],
}

