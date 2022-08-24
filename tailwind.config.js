/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ts: "300px",
        // => @media (min-width: 300px) { ... }
        xs: "576px",
        // => @media (min-width: 576px) { ... }
        sm: "768px",
        // => @media (min-width: 768px) { ... }
        md: "950px",
        // => @media (min-width: 950px) { ... }
        lg: "1350px",
        // => @media (min-width: 1350px) { ... }
        xl: "1400px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
