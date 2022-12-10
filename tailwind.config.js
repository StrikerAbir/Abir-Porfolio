/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#059669",

          secondary: "#34d399",

          accent: "#a3e635",

          neutral: "#2A2037",

          "base-100": "#F6F6F9",

          info: "#A5D0F3",

          success: "#5AEDC8",

          warning: "#EEAD5D",

          error: "#F93963",
        },
        dark: {
          primary: "#0d9488",

          secondary: "#2dd4bf",

          accent: "#bef264",

          neutral: "#262131",

          "base-100": "#403946",

          info: "#55B5E2",

          success: "#56DC8E",

          warning: "#eab308",

          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
