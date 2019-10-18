/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    fontFamily: {
      display: ['Quicksand', 'sans-serif']
    },
    extend: {
      width: {
        '80': '20rem',
        '160': '40rem',
        '240': '60rem',
      },
      flex: {
        '10auto': '1 0 auto',
      }
    },
    customForms: theme => ({
      default: {
        'input, textarea, select, multiselect, checkbox': {
          borderColor: theme('colors.gray.400'),
          backgroundColor: theme('colors.gray.100'),
          borderRadius: theme('borderRadius.lg'),
          borderWidth: theme('borderWidth[2]'),
          '&:focus': {
            borderColor: theme('colors.white'),
          }
        },
      },
    })
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
