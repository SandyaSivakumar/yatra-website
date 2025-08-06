// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // This is correct for older Tailwind versions
    autoprefixer: {}, // Keep this if you want vendor prefixes
  },
};