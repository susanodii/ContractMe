/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
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
