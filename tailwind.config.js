/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // or similar
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#FFFF00",
        tertiary: "#FFFFFF",
        custom: "#YOUR_CUSTOM_HEX",
      },
    },
  },
  plugins: [],
};

