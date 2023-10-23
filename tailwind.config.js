/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'first': '#ec7c6a',
        'second': '#6c757d',
        'back1': '#262837',
        'back2': '#1F1D2B',
      },
      textColor: {
        'txt1': '#e5e7eb',
        'txt2': '#808183',
        'first': '#ec7c6a',
        'back1': '#262837',
        'back2': '#1F1D2B',
      },
      borderColor: {
        'first': '#ec7c6a',
      },
    },
  },
  plugins: [],
}
