/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '_site/**/*.{html,njk,md}'
  ],
  theme: {
    extend: {
      blur: {
        xs2: '1px',
        xs: '2px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
