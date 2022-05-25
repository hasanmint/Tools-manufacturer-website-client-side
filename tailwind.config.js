module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#FF6A00",
          secondary: "#FF991F",
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
