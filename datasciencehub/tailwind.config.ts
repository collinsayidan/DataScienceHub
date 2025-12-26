import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#1F6FEB',
        'brand-green': '#2DA44E',
        'bg-900': '#0B1220',
        'bg-800': '#0F172A',
        'text-100': '#E5E7EB'
      }
    }
  },
  plugins: []
}
export default config
