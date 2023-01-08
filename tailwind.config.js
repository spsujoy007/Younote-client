/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        noteTheme: {
          primary: "#FF7B54",

          secondary: "#FFB26B",

          accent: "#FFD56F",

          neutral: "#3D4451",

          "base-100": "#FFFFFF",

          info: "#939B62",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
