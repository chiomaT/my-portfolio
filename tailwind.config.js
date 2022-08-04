module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-h-110": "150vh",
        "custom-h-85": "85vh",
        "custom-h-60": "60vh",
      },

      screen: {
        xs: "360",
        sm: "480px",
        md: "768px",
        lg: "912px",
      },
    },
  },
  plugins: [],
};
