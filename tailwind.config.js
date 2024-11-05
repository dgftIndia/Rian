/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#006494',
        'custom-black': '#1a1a1e',
        'custom-purple': '#9b51e0',
        'custom-yellow': '#fcb900',
        'custom-light-blue': '#8ed1fc',
        'custom-violet': '#9118e7',
        'custom-orange': '#fb8200',
        'crimson': '#DC143C'
      },
      fontSize: {
        '1.5xl': '1.375rem',
        '3.5em': '3.5em',
        '2em': '2em'
      },
      spacing: {
        '15': '3.75rem',
        '82': '82px',
        '92': '92px'
      },
      maxWidth: {
        '2000': '2000px'
      }
    }
  },
  plugins: []
}