/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#f9aa75",
      dark: "#373435",
      white: "#fefefe",
      "dark-orange": "#f58634",
      tan: "#f7f3e0",
      gray: "#636363",
      transparent: "transparent",
    },
    extend: {
      fontFamily: {
        Ubuntu: ["Ubtunu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
