/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-300": "#c49b70",
        "primary-400": "#b48b5d",
        "primary-500": "#a47a4c",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)" },
          "20%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.15)" },
          "80%": { transform: "scale(1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "scale-pulse": "scale 1.25s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
