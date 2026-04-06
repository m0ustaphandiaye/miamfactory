/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F5F0",
        primary: "#1E293B", /* Dark Navy */
        accent: "#F97316",  /* Orange */
      },
      fontFamily: {
        sans: ['"Satoshi"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
