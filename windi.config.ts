import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // darkMode: 'class',
  attributify: {
    prefix: 'w:',
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: '#0960bd',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
    },
  },
})
