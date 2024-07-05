/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-md': '10px 10px 0 0 rgba(50, 50, 255, 0.7)',
        'custom-lg': '15px 15px 2px 0 rgba(100, 100, 255, 0.7)',
      },
      keyframes: {
        flipIn: {
          '0%': { transform: 'rotateY(-90deg)', opacity: '0' },
          '100%': { transform: 'rotateY(0)', opacity: '1' },
        },
      },
      animation: {
        flipIn: 'flipIn 0.6s none',
      },
    },
  },
  plugins: [],
}

