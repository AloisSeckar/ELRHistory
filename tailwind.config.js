// TODO tailwind plugin w/o require?
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    'app.vue'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#000033',
        silver: '#cccccc'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.text-silver': {
          color: theme('colors.silver')
        },
        '.text-navy': {
          color: theme('colors.navy')
        },
        '.bg-navy': {
          backgroundColor: theme('colors.navy')
        }
      })
    })
  ]
}
