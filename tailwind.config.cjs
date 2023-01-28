/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cyber': "url('/src/assets/cyberpunkBG-car.png')",
      }
    },
    fontFamily: {
      'display': ['Oswald'],
      'fantasy': ['Rock Salt', 'cursive'],
      'title': ['Alfa Slab One', 'cursive'],
      'orbitron': ['Orbitron', 'sans-serif'],
      'quicksand': ['Quicksand', 'sans-serif'],
      
    },
    keyframes: {
      bounce: {
        '0%, 100%': {
          'transform': 'translateY(-15%)',
          'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
        },
        '50%': {
          'transform': 'translateY(0)',
          'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
        }
      },
    }
  },
  plugins: [],
}
