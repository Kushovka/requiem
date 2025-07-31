import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        black01: '#1F2937',
        gray01: '#9DA1AA',
        orange01: '#EC631B',
        pink01: '#FEF0E9',
        white01: '#F6F6F7'
      },
      backgroundImage: {},
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [
   
  ]
}
export default config
