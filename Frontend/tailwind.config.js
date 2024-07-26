/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Move darkMode here
  
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
