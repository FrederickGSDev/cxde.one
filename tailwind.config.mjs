/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
      },
      borderColor: {
        light: '#333333',
        dark: '#333333'
      },
      textColor: {
        'hover-light': '#242424',
        'hover-dark': '#FAFAFA',
        light: '#444444',
        dark: '#C5C5C5'
      },
      backgroundColor: {
        light: '#bdc1c6',
        dark: '#393D42'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
