/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4173f",
        secondary: "#1a237e",
        accent: "#ffd700",
      },
      fontFamily: {
        'sans': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'serif': ['Merriweather', 'ui-serif', 'Georgia'],
      },
      backgroundImage: {
        'congress': "url('/images/congress.jpg')",
        'hcm': "url('/images/hcm.jpg')",
        'challenge': "url('/images/challenge.jpg')",
      }
    },
  },
  plugins: [],
}