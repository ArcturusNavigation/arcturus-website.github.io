/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#08054e',
          light: '#637dc5',
        },
        accent: '#56b8e6',
        text: {
          DEFAULT: '#08054e',
          dark: '#08054e',
          },
        background: {
          DEFAULT: '#ffffff',
          light: '#f0f5ff',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
