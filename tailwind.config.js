module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        graph: 500,
      },
      height: {
        graph: 280,
        filter: "calc(100vh - 140px)",
      },
    },
  },
  variants: {},
  plugins: [],
};
