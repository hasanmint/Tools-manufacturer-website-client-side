module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#FF6A00",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#FBBD56",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
