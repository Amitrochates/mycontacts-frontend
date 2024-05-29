/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      customGray: {
        light: '#202020',
        DEFAULT: '#121212',
        dark: '#000000'
      }
    }
    },
  },
  plugins: [],
}

