/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Dancing Script"', '"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0F172A',
          800: '#152037',
          700: '#1E293B',
        },
        brand: {
          pink: '#E93B77',
          'pink-hover': '#D82965',
          gold: '#F4B038',
          cream: '#FAF7F2',
          lightCream: '#FFFDF9',
        }
      }
    },
  },
  plugins: [],
}

