/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/sandhouse.jpg')",
        'watto-image': "url('/src/assets/watto.jpg')",
      },
    },
    fontFamily: {
      sans: ['Montserrat'],
    },
  },
  plugins: [],
};
