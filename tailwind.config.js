/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0D1F3C',
        gold: '#C9A84C',
        'gold-light': '#e2c47a',
        surface: '#F5F7FA',
      },
      fontFamily: {
        heading: ["'Playfair Display'", 'serif'],
        body: ["'DM Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}

