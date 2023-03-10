/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': '820px',
      'md': '700px',
    },

    colors: {
      'black-400': '#050505',
      'black-300': '#1F1F1F',
      'black-200': '#2D2D2D',
      'black-100': '#3A3A3A',

      'grey-300': '#757575',
      'grey-200': '#E9E9E9',
      'grey-100': '#F4F4F4',

      'purple': '#A445ED',
      'red': '#FF5252',
      'white': '#FFFFFF',
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Lora', 'serif'],
      mono: ['Inconsolata', 'mono'],
    },
  },
  plugins: [],
}
