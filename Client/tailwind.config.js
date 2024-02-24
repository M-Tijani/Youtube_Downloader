/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        50: "#DCDCDC",
        100: "#3742FA",
        101: "#252cdd",
        102: "#c0d5ff",
        200: "#F2F2F2",
        300: "#D9D9D9",
        500: "#0B090A",
        501: "#161A1D",
        502: "#141618",
        600: "#E64C66",
        700: "#272D3B",
      },
      fontFamily: {
        Inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
