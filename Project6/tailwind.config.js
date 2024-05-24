/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        black: 'rgb(33,33,33)'
      },
      fontFamily: {
        founders: ['FoundersGrotesk', 'sans-serif'],
        montreal: ['NeueMontreal', 'sans-serif']
      },
    },
  },
  plugins: [],
}

