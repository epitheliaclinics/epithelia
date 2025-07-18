/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFEF5',
        secondary: '#0B3D3A',
        tertiary: '#8C8074',
        offwhite: '#F5F1E8',
        olive: '#E8E5DB',
      },
      fontFamily: {
        aboreto: ['var(--font-aboreto)'],
        figtree: ['var(--font-figtree)'],
      },
    },
  },
  plugins: [],
};
