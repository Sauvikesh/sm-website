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
        outfit: ['var(--font-outfit)', 'sans-serif'],
      },
      margin: {
        '53': '13.5rem',
        '17': '4.5rem',
      },
      padding: {
        '53': '13.5rem',
        '17': '4.5rem',
        'case-study': '18%',
      },
      colors: {
        'dark-bg': 'var(--dark-background)',
        'light-bg': 'var(--light-background)',
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
        'load-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        lineGrow: {
          '0%': {
            height: '0px',
          },
          '50%': {
            height: '200px',
            transform: 'translateY(0px)',
          },
          '100%': {
            height: '0px',
            transform: 'translateY(200px)',
          },
        },
      },
      animation: {
        'slide-header-down': 'slide-header-down 0.5s ease-in',
        'slide-header-down-delayed': 'slide-header-down-delay 1s ease-in-out',
        'slide-line-down': 'slide-line-down 2s linear infinite',
        'load-rotate-full': 'load-rotate 1400ms cubic-bezier(0.4, 0, 0.2, 1)',
        'load-rotate-full-infinite':
          'load-rotate 1400ms cubic-bezier(0.4, 0, 0.2, 1) infinite',
        grow: 'lineGrow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
