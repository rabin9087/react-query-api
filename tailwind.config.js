/** @type {import('tailwindcss').Config} */
const withMT = import("@material-tailwind/react/utils/withMT");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}