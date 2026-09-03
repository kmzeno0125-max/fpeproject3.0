/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0066CC',
        'brand-black': '#0A0A0A',
        'brand-dark-gray': '#4A4A4A',
        'brand-mid-gray': '#8A8A8A',
        'brand-light-gray': '#F4F4F4',
      },
    },
  },
  plugins: [],
};
