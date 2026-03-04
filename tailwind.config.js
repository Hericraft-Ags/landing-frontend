/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2966',
        cyanBright: '#0EF1EB',
        collegeOrange: '#FF6B35',
        metanoiaPink: '#EC4899',
        agoraLime: '#84CC16',
        teal: '#0dbcc9',
        accentPink: '#e91e63',
        cyan: '#0ef1eb',
        'cyan-bright': '#08be66',
        'dark-nav': '#2f302d',
        agoraDark: '#121212',
        oxfordGray: '#2d3748',
        metanoiaLight: '#fff0f5',
        metanoiaDeep: '#880038',
        blueprint: {
          navy: '#0A1931',
          cyan: '#0EF1EB',
          orange: '#FF6B35',
          green: '#22c55e',
          blue: '#2563eb',
          purple: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        display: ['Montserrat', 'sans-serif'],
        processus: ['Reddit Sans', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
        'tech-grid': "url('https://www.transparenttextures.com/patterns/cubes.png')",
      },
      animation: {
        'float-soft': 'float-soft 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 3s infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.4 },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
