/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        50: "#DCDCDC",
        100: "#3742FA",
        101: "#252cdd",
        102: "#c0d5ff",
        200: "#F2F2F2",
        300: "#D9D9D9",
      },
      fontFamily: {
        Inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
