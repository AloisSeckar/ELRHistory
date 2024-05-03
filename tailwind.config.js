// TODO tailwind plugin w/o require?

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'app.vue',
  ],
  theme: {
    fontSize: {
      'xs': '0.8rem',
      'sm': '0.95rem',
      'base': '1.2rem',
      'lg': '1.3rem',
      'xl': '1.5rem',
      '2xl': '2rem',
    },
    extend: {
      colors: {
        navy: '#000033',
        silver: '#cccccc',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.text-silver': {
          color: theme('colors.silver'),
        },
        '.text-navy': {
          color: theme('colors.navy'),
        },
        '.bg-navy': {
          backgroundColor: theme('colors.navy'),
        },
      })
    }),
  ],
}
