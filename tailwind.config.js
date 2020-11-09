module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.ts'],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem'
      }
    },
  },
  variants: {},
  plugins: [
    //require('@tailwindcss/typography')
  ],
}
