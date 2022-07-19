module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#90C8E8",
        medblue: "#03649C",
        brightblue: "#41b7fb",
        darkblue: "#023451",
        offwhite: "#EEF8FF",
        linkblue: "#0374b5",
        lightgray: "#BEC8CF",
        medgray: "#606569",
      },
      gridTemplateColumns: {
        'boxes': 'repeat(auto-fit, minmax(275px, 1fr))',
      },
    },
  },
  plugins: [],
}
