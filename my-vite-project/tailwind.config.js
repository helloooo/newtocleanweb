module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // adjust this line so Tailwind can purge unused styles in production
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
