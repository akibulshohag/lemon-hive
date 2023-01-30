/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px) { ... }

      sm: {'min': '481px', 'max': '768px'},
      // => @media (min-width: 640px) { ... }
      md: {'min': '769px', 'max': '1024px'},
      // => @media (min-width: 768px) { ... }

      lg: {'min': '1025px', 'max': '1440px'},
      
      // => @media (min-width: 1024px) { ... }
      xl: {'min': '1441px','max': '2500px'},
      // => @media (min-width: 1280px) { ... } 
      xxl: {'min': '2500px','max': '2561px'},    
    },
    extend: {
      colors:{
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        'purple':{
          100: '#445268'
        },
        'blue':{
          100: '#3383C8'
        },
      },
     
    },
  },
  plugins: [],
}