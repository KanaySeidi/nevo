export default {
  theme: {
    extend: {
      keyframes: {
        fadeAndGrow: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0",
          },
          "20%": {
            opacity: "1",
          },
          "80%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "fade-and-grow": "fadeAndGrow 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
