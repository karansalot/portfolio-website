import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        savannah: {
          50: '#fffbf0',
          100: '#fff4cc',
          200: '#ffe899',
          300: '#ffdb66',
          400: '#ffce33',
          500: '#e6b800', // Primary Gold
          600: '#b38f00',
          700: '#806600',
          800: '#4d3d00',
          900: '#1a1400',
        },
        jungle: {
          50: '#f0f9f8',
          100: '#d1ede9',
          200: '#a3d9d3',
          300: '#73c3bc',
          400: '#4db0a9',
          500: '#2b9c94',
          600: '#207973',
          700: '#165753',
          800: '#0d3836', // Deep Green
          900: '#051a19',
        },
        earth: {
          500: '#8D6E63',
          800: '#3E2723',
        }
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
