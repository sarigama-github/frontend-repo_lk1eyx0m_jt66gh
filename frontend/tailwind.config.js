/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EBF3FF',
          100: '#D6E7FF',
          200: '#AECBFF',
          300: '#85AEFF',
          400: '#5D92FF',
          500: '#346FFF', // primary blue accent
          600: '#2156DB',
          700: '#1841A8',
          800: '#112C75',
          900: '#0A1947',
        },
        dark: {
          900: '#0B1020',
          800: '#0E1630',
          700: '#0F1B3D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(52, 111, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
