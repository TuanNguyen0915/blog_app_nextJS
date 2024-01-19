/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": {
            // "webkit-transform": "translateX(-300px)",
            // transform: "translateX(-300px)",
            right: "-400px"
          },
          "100%": {
            // "webkit-transform": "translateX(0px)",
            // transform: "translateX(0px)",
            right: "0"
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      }
    },
  },
  plugins: [],
};
