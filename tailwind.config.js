/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    'glass',
    'glass-subtle',
    'glass-card',
    'glass-highlight',
    'grid-background',
    'gradient-text',
    'glow-border',
    'text-glow',
    'card-hover',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
