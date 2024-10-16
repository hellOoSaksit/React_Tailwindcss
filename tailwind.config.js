/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      primary: 'Poppins',
    },
    container:{
      padding : {
        DEFAULT: '30px',
        lg:'0'
      }
    },
    extend: {
      backgroundImage: {
        'hero-banner': "url('/src/img/banner.jpg')",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
