/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    "screens": {
      "max-md-screen": {"max": "890px"},
      "max-sm-screen": {"max": "653px"},
      "max-2sm-screen": {"max": "548px"},
      "max-3sm-screen": {"max": "367px"}
    },
    extend: {
      animation: {
        "slideup": "slideup 0.5s ease-out forwards",
        "slideright": "slideright 0.7s ease-out forwards",
        "slideleft": "slideleft 0.7s ease-out forwards"
      },
      keyframes: {
        slideup: {
          "0%": {transform: "translateY(30px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"}
        },
        slideright: {
          "0%": {transform: "translateX(-30px)", opacity: "0"},
          "100%": {transform: "translateX(0px)", opacity: "1"}
        },
        slideleft: {
          "0%": {transform: "translateX(30px)", opacity: "0"},
          "100%": {transform: "translateX(0px)", opacity: "1"}
        }
      }
    },
  },
  plugins: [],
}
