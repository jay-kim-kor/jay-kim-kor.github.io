/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#edfffe',
          100: '#c2fffc',
          200: '#84fff9',
          300: '#3ffff5',
          400: '#0ae8d8',
          500: '#00ccc0',
          600: '#00a39e',
          700: '#00827f',
          800: '#086665',
          900: '#0c5453',
          950: '#003333',
        },
        surface: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5dae2',
          300: '#b0b9c9',
          400: '#8594ab',
          500: '#667791',
          600: '#516078',
          700: '#424e62',
          800: '#394353',
          900: '#1e2433',
          950: '#0f1219',
        },
      },
      fontFamily: {
        sans: ['Pretendard Variable', 'Pretendard', 'Noto Sans KR', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-links': theme('colors.primary.400'),
            '--tw-prose-code': theme('colors.primary.300'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
