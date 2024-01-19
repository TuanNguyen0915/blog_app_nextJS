/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fashion: "#da85c731",
        food: "#7fb88133",
        travel: "#ff795736",
        culture: "#ffb04f45",
        coding: "#5e4fff31",
        style: "#57c4ff31",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            right: "-400px",
          },
          "100%": {
            right: "0",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  plugins: [],
}
