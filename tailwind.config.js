module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Urbanist", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#4C9AFF",
        },
        bg: {
          100: "#f9f9f7",
          DEFAULT: "#1E1E2F",
        },
        text: {
          DEFAULT: "#F5F7FA",
        },
        subtext: {
          DEFAULT: "#AAB2C8",
        },
        accent: {
          DEFAULT: "#9FFFCB",
        },
      },
    },
  },
  plugins: [],
};
