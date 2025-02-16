/** @type {import('tailwindcss').Config} */
export default {
  content:  {
    relative: true,
    files: ['./src/**/*.{html,js,svelte,ts}'],
  },  
  theme: {
    extend: { fontFamily: {
      sans: ['Noto Sans Math', 'sans-serif'],
    },},
  },
}

