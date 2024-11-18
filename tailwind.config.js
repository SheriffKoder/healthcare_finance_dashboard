/** @type {import('tailwindcss').Config} */

import {colors} from "./constants.ts";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      // ...
    },
    extend: {},
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '550px',
      // => @media (min-width: 768px) { ... }

      'md1': '770px',
      // => @media (min-width: 768px) { ... }

      'md2': '900px',
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'lg1120': '1120px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}