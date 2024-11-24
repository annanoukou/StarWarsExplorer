module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveStars: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1000px)' },
        },
      },
      animation: {
        stars: 'moveStars 100s linear infinite',
        stars2: 'moveStars 50s linear infinite',
        stars3: 'moveStars 25s linear infinite',
      },
      backgroundImage: {
        'stars-layer': "url('https://www.transparenttextures.com/patterns/stardust.png')",
      },
    },
  },
  plugins: [],
};
