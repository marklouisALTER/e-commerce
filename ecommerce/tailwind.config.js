/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#62564c",
        secondary: "#cfbfb3",
        optional: "#e4dfdb",
        normalize: '#ebedee',
      },
      fontFamily: {
        primary: ['Roboto', 'sans-serif'],
        secondary: ['Karla', 'sans-serif'],
        optional : ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

