/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: { b_1f1f1f: '#1f1f1f', b_131313: '#131313', b_2b09ff: '#2b09ff' },
    },
  },
  plugins: [],
}
