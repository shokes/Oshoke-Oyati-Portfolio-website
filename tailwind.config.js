module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },

      colors: {
        'text-link': 'var(--text-link)',
        'text-color': 'var(--text-color)',
        background: 'var(--background)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
};
