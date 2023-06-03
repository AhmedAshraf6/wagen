/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        arb: ['var(--font-tajawal)'],
        eng: ['var(--font-josefin-sans)'],
      },
      screens: {
        sm: '576px',
        md: '767px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      colors: {
        primary: '#FDC001',
        secondary: '#2E2A66',
        white: '#ffffff',
        black: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
