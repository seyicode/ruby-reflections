/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spotify: {
          black: '#191414',
          green: '#1DB954',
          white: '#FFFFFF',
          'green-light': '#1ED760',
          'green-dark': '#1AA34A',
          'gray': '#282828',
          'gray-light': '#404040',
          'gray-dark': '#1A1A1A',
        },
        background: {
          dark: '#121212',
          light: '#282828',
        },
        primary: {
          50: '#E6F7ED',
          100: '#CCEFDB',
          200: '#99DFB7',
          300: '#66CF93',
          400: '#33BF6F',
          500: '#1DB954', // Spotify Green
          600: '#1AA346',
          700: '#178D38',
          800: '#14772A',
          900: '#11611C',
        },
        secondary: {
          300: '#B3B3B3',
          400: '#A7A7A7',
          500: '#535353',
          600: '#404040',
          700: '#282828',
          800: '#1A1A1A',
        },
        accent: {
          green: '#1DB954', // Spotify Green
          'green-light': '#1ED760',
          'green-dark': '#1AA34A',
        },
        dark: {
          100: '#1a1a2e',
          200: '#16213e',
          300: '#0f3460',
          400: '#0a2647',
          500: '#071330',
          900: '#050a18',
        },
        purple: {
          100: '#b8c0ff',
          200: '#9a94bc',
          300: '#7b78b8',
          400: '#5c5d8d',
          500: '#4a4e69',
        },
        blue: {
          100: '#a0c4ff',
          200: '#87a8d0',
          300: '#6883bc',
          400: '#3d5a80',
          500: '#293241',
        },
        teal: {
          100: '#90e0ef',
          200: '#48cae4',
          300: '#00b4d8',
          400: '#0096c7',
          500: '#023e8a',
        },
        glow: {
          green: '#1DB954',
          'green-light': '#1ED760',
          'green-dark': '#1AA34A',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out forwards',
        'slide-left': 'slide-left 0.5s ease-out forwards',
        'slide-right': 'slide-right 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slideUp': 'slideUp 0.5s ease-out',
        'pulseSoft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          'from': { transform: 'translateY(-20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        'slide-left': {
          'from': { transform: 'translateX(20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        'slide-right': {
          'from': { transform: 'translateX(-20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'glow': {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to right bottom, var(--tw-gradient-stops))',
        'gradient-dark-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    }
  },
  plugins: [],
};
