/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
        openSans: ["Open+Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        bitter: ["Bitter", "sans-serif"],
        crimsonText: ["Crimson+Text", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};

