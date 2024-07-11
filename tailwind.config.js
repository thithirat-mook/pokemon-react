/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      encode: ['Encode Sans', 'sans-serif'],
    },
    colors: {
      primary: '#024E74',
      white: '#FFFFFF',
      black: '#000000',
      'page-background': '#F6F6F7',
      'sprite-background': '#00000012',
      'neutral-shades-30': '#E3E1E5',
      'nertral-shades-50': '#23292B',
    }
  },
  plugins: [],
};
