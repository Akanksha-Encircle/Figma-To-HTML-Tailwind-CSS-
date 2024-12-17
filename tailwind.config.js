/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        '2xl': '1342px',
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          '2xl': '1342px',
        },
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

