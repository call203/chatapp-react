/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    fontSize: {
      xsm: '0.8rem',
      xxsm: '0.7rem',
    },
    extend: {
      colors: {
        b_1f1f1f: '#1f1f1f',
        b_131313: '#131313',
        b_2b09ff: '#2b09ff',
        my_gray: '#989898',
        my_orange: '#FF9900',
        my_blue: '#5E8BFF',
      },
    },
  },
  plugins: [],
}
