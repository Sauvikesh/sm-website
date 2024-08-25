import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dmSans)', 'sans-serif'],
        'f-w': ['var(--font-fw)', 'sans-serif'],
      },
      margin: {
        '53': '13.5rem',
        '17': '4.5rem',
      },
      padding: {
        '53': '13.5rem',
        '17': '4.5rem',
      },
      colors: {
        'dark-b-bg': 'rgb(0,13,28)',
      },
      keyframes: {
        'slide-header-down': {
          '0%': { transform: 'translateY(-200px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-header-down-delay': {
          '0%': { transform: 'translateY(-230px)', opacity: '0' },
          '80%': { transform: 'translateY(-50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-line-down': {
          from: { transform: 'translateY(-7px)' },
          to: { transform: 'translateY(7px)' },
        },
      },
      animation: {
        'slide-header-down': 'slide-header-down 0.5s ease-in',
        'slide-header-down-delayed': 'slide-header-down-delay 1s ease-in-out',
        'slide-line-down': 'slide-line-down 2s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
