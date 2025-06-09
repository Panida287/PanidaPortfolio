/** @type {import('tailwindcss').Config} */
import textShadowPlugin from 'tailwindcss-textshadow';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        slideDown: "slideDown 0.5s ease-out",
        slideDownFast: "slideDown 0.1s ease-out",
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        display: ['Bruno Ace', 'cursive'],
        heading: ['Contrail One', 'cursive'],
        body:    ['Inter', 'sans-serif'],
        gothic:  ['DotGothic16', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        thin: '200',
        regular: '400',
        medium: '500',
        bold: '700',
        black: '900',
      },
      boxShadow: {
        neon: '0 0 1em #14f7ff',
      },
      textShadow: {
        neon: '0 0 0.2em, 0 0 0.3em #14f7ff',
      },
      colors: {
        neon: "#14f7ff",
        pink: "#C62F94",
        error: "#EB5757",
        black: "#282828",
        white: "#FFFFFF",
        gray: {
          1: "#828282",
          2: "#BDBDBD",
          3: "#E0E0E0",
        },
      }
    },
    screens: {
      xs: "550px",
      sm: "700px",
      md: "800x",
      lg: "900px",
      xl: "1200px",
    },
  },
  plugins: [textShadowPlugin],
}