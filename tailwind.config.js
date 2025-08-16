/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-mobile': '844px',
      },
      width: {
        'screen-mobile': '390px',
      },
      maxWidth: {
        'mobile': '390px',
      },
    },
  },
  plugins: [],
}