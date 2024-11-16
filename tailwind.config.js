/** @type {import('tailwindcss').Config} */
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
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      dshbg: "#111217",
      accent1: "#4E78E4",
      white: "#ffffff"
      // ...
    },
    extend: {},
    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '470px',
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