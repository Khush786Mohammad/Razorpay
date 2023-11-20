/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["mulish","sans-serif"],
      },
      boxShadow:{
        '7xl': 'rgba(0, 0, 0, 0.09) 0px 3px 12px',
        '99xl': 'rgba(0,0,0,0.1) 0px 0px 42px 22px'
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
      }
    },
  },
  plugins: [],
}