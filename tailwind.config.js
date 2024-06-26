/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
// import tailwindCssAnimated from 'tailwindcss-animated'
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: { Campton: ['Sorts Mill Goudy', 'sans-serif'] },
    extend: {},
  },
  darkMode: 'class',

  plugins: [
    scrollbar,
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#335f32',
          },
        },
        dark: {
          colors: {},
        },
      },
    }),
  ],
}
