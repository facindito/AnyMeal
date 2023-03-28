/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        dynamic: 'clamp(1.5rem, 8vw - 2rem,3rem)',
      },
      colors: {
        yellow: {
          50: '#fefae8',
          100: '#fef5c3',
          200: '#ffe889',
          300: '#fece2f',
          400: '#fbbc14',
          500: '#eba307',
          600: '#cb7b03',
          700: '#a25706',
          800: '#86440d',
          900: '#723811',
        },
      },
      gridTemplateColumns: {
        list: 'repeat(auto-fill, minmax(300px,1fr))',
      },
    },
  },
  plugins: [],
}
