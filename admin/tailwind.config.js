/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',      // Green
        secondary: '#FF9800',    // Amber
        darkBg: '#212121',       // Dark Background
        cardBg: '#424242',       // Card Background
        text: '#E0E0E0',         // Text color
        errorText: '#FF5252',    // Error text color
        buttonHover: '#388E3C',  // Button hover color
        indigoHover: '#4C51BF',
        textPrimary: '#E0E0E0',
      },
    },
  },
  plugins: [],
}

