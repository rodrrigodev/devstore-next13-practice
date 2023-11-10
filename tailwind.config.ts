import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-inter)',
    },
    gridTemplateRows: {
      app: 'min-content max-content',
      6: '	grid-template-rows: repeat(6, minmax(0, 1fr))',
    },
  },
  plugins: [],
}
export default config
