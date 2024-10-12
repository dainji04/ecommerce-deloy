module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      tablet: "46.1875em",
      pc: "65em",
    },
    extend: {
      colors: {
        primary: "#DB4444",
        grayScale: "#f5f5f5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
