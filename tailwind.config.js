/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], 
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        title: '47px',
      },
      colors: {
        'green': '#008088',
        'orange': '#EC6C00',
      },
      animation: {
        'scale1': 'scale1 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale2': 'scale2 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale3': 'scale3 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scale1: {
          '0%, 20%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.1)' },
        },
        scale2: {
          '30%, 50%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.1)' },
        },
        scale3: {
          '60%, 80%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.1)' },
        }
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
