/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{html, css, js}"],
  theme: {
    extend: {
      animation: {
        text: "text 3s ease infinite",

      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },

       
      },
    },
  },
  plugins: [],
};
