/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FFC107',
        accent2: '#FF5252',
        accent1: '#29B6F6',
        lightBg: '#F9FAFB',
        darkBg: '#2E3B4E',
      },
    },
  },
  plugins: [],
}

