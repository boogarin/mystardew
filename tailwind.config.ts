import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      keyframes: {
        "bird-sliding": {
          '0%': {transform: 'translate(60px, 100%)'},
          '50%': {transform: 'translate(-1250px, 100%)'},
          '100%': {transform: 'translate(-2500px, 100%)'},
        }
      },
      animation: {
        "bird-slide": "bird-sliding 20s linear infinite",
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    }
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
