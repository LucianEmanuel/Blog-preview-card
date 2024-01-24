/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        figtree: "'Figtree', sans-serif",
      },
      colors: {
        yellow: "hsl(47, 88%, 63%)",
        grey: "hsl(0, 0%, 50%)",
        black: "hsl(0, 0%, 7%)",
      },
      boxShadow: {
        plain: " 8px 8px 0px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
