// tailwind.config.js
module.exports = {
  purge: [
    // Add paths to all of your views or components that use Tailwind CSS
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // Add custom fonts here
      },
      colors: {
        // Add custom colors here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
