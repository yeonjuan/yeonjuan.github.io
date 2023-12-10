/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: {
          200: "#F4F6F8",
          300: "#E8EBEF",
          500: "#8A91A4",
          600: "#707990",
        },
        black: {
          300: "#C6C7C8",
          500: "#6e6e6e",
          700: "#525658",
          900: "#1D1D1D",
        },
        accent: "#6750D2",
      },
    },
  },
	plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.display1': {
          'font-family': '"DM Sans", sans-serif',
          'font-weight': 700,
          'font-size': '40px',
          'line-height': '48px'
        }
      });
    },
  ],
}
