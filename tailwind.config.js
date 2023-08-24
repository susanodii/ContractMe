/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {


    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    
    fontFamily: {
      eczar: ["Eczar", "serif"],
      bodoni: ["Bodoni Moda", "serif"],
      inter: ["Inter", "sans-serif"],
    },

    colors: {
      black: "#000000",
      black100: "#110B11",
      dark: "#353840",
      white: "#FFFFFF",
      grey: "#59656F",
      lightGrey: "#CED0CE",
      grey100: "#D5D8DE",
      offWhite: "#EBEBEB",
      blue50: "#e6f0ff",
      blue75: "96c0ff",
      blue100: "#6ba6ff",
      blue200: "#2b7fff",
      blue300: "0065ff",
      blue400: "#0047b3",
      blue500: "#003e9c",
      yellow50: "#fefae7",
      yellow75: "#fde89c",
      yellow100: "#fcdf73",
      yellow200: "#fad137",
      yellow300: "#f9c80e",
      yellow400: "#ae8c0a",
      yellow500: "#987a09",
      red: "#FF0000",
      blue: "#0000ff",
    },

   
         
    extend: { },
  },
  plugins: [],
};
