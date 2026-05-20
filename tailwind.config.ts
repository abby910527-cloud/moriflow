import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EE',
        oat: '#D8C3A5',
        mocha: '#B08968',
        cocoa: '#5E524B',
        sage: '#A8B5A2',
        rose: '#E8D7D0',
        warmgray: '#ECE8E4'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(94, 82, 75, 0.10)',
        card: '0 10px 30px rgba(94, 82, 75, 0.08)'
      }
    }
  },
  plugins: []
};
export default config;
