/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'cyber': "url('/src/assets/cyberpunkBG-car.png')",
        'cyber-bulding': "url('/src/assets/cyberpunk-building.png')",
        'cyber-cadre': "url('/src/assets/cyberpunkBG.png')",
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
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      appear: {
        '0%': { transform: 'translate(100px)'},
        '100%': { transform: 'translate(0px)'},
      },
      iconAppear: {
        '0%': { 
          transform: 'translate(0px, 1000px)',
          height: '0px'
        },
        '90%': { 
          transform: 'rotate(30deg)', 
        },
        '100%': { 
          transform: 'translate(0px)',
          height: '40px'
        },
      },
      profilePicture: {
        '100%': {
          transform: 'rotate(180deg)',
          height: '0%'
        }
      }
    }
  },
  plugins: [],
}
