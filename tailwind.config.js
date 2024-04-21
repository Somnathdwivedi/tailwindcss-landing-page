/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      color:{
        'primary':'#3255EB',
      },
      fontfamily:{
        'display':['Poppins','sans-serif'],
        'body':['Inter','sans-serif'],
      },
    },
  },
  plugins: [],
}