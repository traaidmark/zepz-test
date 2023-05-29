/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    'src/components/**/*.tsx',
    'src/pages/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      'primary': "var(--font-primary)",
      'secondary': "var(--font-secondary)"
    },
    extend: {
      spacing: {
        'sm': 'var(--gutter-sm)',
        'md': 'var(--gutter-md)',
        'lg': 'var(--gutter-lg)',
        'xl': 'var(--gutter-xl)',
      },
      colors: {

        // Base colors

        'color-base': 'rgb(var(--color-base))',

        // Brand colors

        'color-primary':        'rgb(var(--color-primary))',
        'color-secondary':      'rgb(var(--color-secondary))',
        'color-accent':         'rgb(var(--color-accent))',

        // Typography colors

        'color-heading':        'rgb(var(--color-heading))',
        'color-subheading':     'rgb(var(--color-subheading))',
        'color-body':           'rgb(var(--color-body))',
        'color-sub':            'rgb(var(--color-sub))',
        'color-bold':           'rgb(var(--color-bold))',

        'color-link':           'rgb(var(--color-link))',
        'color-link-hover':     'rgb(var(--color-link-hover))',

        // Interface element colors

        'color-darkest':        'rgb(var(--color-darkest))',
        'color-darker':         'rgb(var(--color-darker))',
        'color-dark':           'rgb(var(--color-dark))',
        'color-neutral':        'rgb(var(--color-neutral))',
        'color-light':          'rgb(var(--color-light))',
        'color-lighter':        'rgb(var(--color-lighter))',
        'color-lightest':       'rgb(var(--color-lightest))',

        'color-red-dark':       'rgb(var(--color-red-dark))',
        'color-red-neutral':    'rgb(var(--color-red-neutral))',
        'color-red-light':      'rgb(var(--color-red-light))',

        'color-green-dark':     'rgb(var(--color-green-dark))',
        'color-green-neutral':  'rgb(var(--color-green-neutral))',
        'color-green-light':    'rgb(var(--color-green-light))',

        'color-yellow-dark':    'rgb(var(--color-yellow-dark))',
        'color-yellow-neutral': 'rgb(var(--color-yellow-neutral))',
        'color-yellow-light':   'rgb(var(--color-yellow-light))',

        'color-blue-dark':      'rgb(var(--color-blue-dark))',
        'color-blue-neutral':   'rgb(var(--color-blue-neutral))',
        'color-blue-light':     'rgb(var(--color-blue-light))',
      },
    },
  },
  plugins: [
    plugin(function({addVariant}) {
      addVariant('not-last', '&:not(:last-child)'),
      addVariant('hocus', ['&:hover', '&:focus'])
    })
  ],
}
