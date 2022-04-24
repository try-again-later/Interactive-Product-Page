module.exports = {
  content: ['./src/**/*.{ts,html}'],
  theme: {
    extend: {
      keyframes: {
        pulseScale: {
          '0%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.25)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 200ms ease-out forwards'
      }
    },
  },
  plugins: [],
};
