/** @type {import('tailwindcss').Config} */
/*global require */
export default {
  content: ['./index.html', './src/**/*.{html,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
}
