/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html", // Ensure you are targeting the correct folder
    "./src/**/*.{js,html}", // Ensure you are targeting your JS and HTML files in the src folder
  ],
  theme: {
    extend: {
      width: {
        '540': '540px', // Custom width class `w-540`
      },
      colors: {
        'text-color': '#219653',
        'old-lace': '#FCF5DC',
        'light-sage': '#BED8CB',
        'light-sage1': '#F0FFF8',
        'light-sage2': '#B6E0CA',
        'yellow': '#FCF5DC',
        'light-green': '#F0FFF8'
      },
      animation: {
        'count-up': 'countUp 1s ease-out forwards', // Custom animation name
      },
      keyframes: {
        countUp: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
