/** @type {import('tailwindcss').Config} */
export default {
  content: [],  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
    extend: {
      colors: {
        primary: '#F44336',    // Red color for the navbar and button
        buttonHover: '#D32F2F', // Darker red for button hover
      },
    },
  },
  plugins: [],
}

