/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'sans-serif'],
        custom2:['Vina Sans', 'sans-serif'],
        custom3: ['Raleway', 'sans-serif'],
        

      },
    },
  },
  plugins: [],
})

