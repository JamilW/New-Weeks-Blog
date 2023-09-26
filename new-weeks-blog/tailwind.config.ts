import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      gridTemplateColumns:  {
        sidebar: "300px auto",
        "sidebar-collapsed": "64px auto",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config

