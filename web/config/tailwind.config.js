const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: { enabled: true, content: ['./src/**/*.html', './src/**/*.js'] },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
}
