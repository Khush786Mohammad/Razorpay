/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'm2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'mxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'mmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    
    extend: {
      fontFamily: {
        mullish: ["mulish","sans-serif"],
      },
      boxShadow:{
        '7xl': 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
        '99xl': 'rgba(0,0,0,0.1) 0px 0px 42px 22px',
        '98xl' : 'rgba(0,0,0,0.1) 15px 15px 60px -32px'
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      animation:{
        moveImage:'move 15s linear infinite',
      },
      keyframes:{
        move:{
          '0%' : {top:'0'},
          '100%' : {top:'-160%'},
        }
      },
    },
  },
  plugins: [],
}