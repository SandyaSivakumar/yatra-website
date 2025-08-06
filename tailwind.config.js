module.exports = {
  // Merge the new content configuration with your existing one
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}', // Assuming you use a 'src' directory
      // Add any other files where you use Tailwind classes, especially for taos
      './src/*.{html,js}', // This was from your taos config, adjust path if needed
    ],
  },
  // Add the safelist utilities
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        'fadeInUp-slow': 'fadeInUp 1s ease-out forwards',
        'fadeInUp-delay-200': 'fadeInUp 0.8s ease-out 200ms forwards',
        'fadeInUp-delay-400': 'fadeInUp 0.8s ease-out 400ms forwards',
      },
    },
  },
  // Add the taos plugin here
  plugins: [
    require('taos/plugin')
  ],
};