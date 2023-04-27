/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#64748b",
        neutral: "#f3f4f6",
        dark: "#0f172a",
      },
      screens: {
        xl: "1320px",
      },
    },
  },
  plugins: [],
};
