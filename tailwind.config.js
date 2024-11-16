/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        '1140':'1140px',
      },
      colors:{
        'green':'#8BAC3E',
        'light-blue':'#40A2B1',
        'blue':'#405EB6',
        'puple':'#B23F74',
        'light-green':'#A4B441',
        'gray':'#757575',
      },
      fontSize:{
        '28':'28px',
        '38':'38px',
        '64':'64px',
      },
      boxShadow:{
        'hero':'0px 8px 32px 0px rgba(102, 107, 226, 0.35)',
        'card-shadow':'0px 11px 39px 0px rgba(0, 0, 0, 0.07)'
      }
    },
  },
  plugins: [],
}