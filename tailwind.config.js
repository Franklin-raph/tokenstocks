/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: "#2998ff",
        },
        dark: {
          100: "#20242e",
          200: "#979fa8",
        },
      },
      backgroundColor: {
        primary: {
          100: "#2998ff",
        },
        dark: {
          100: "#20242e",
          200: "#979fa8",
        },
      },
      backgroundImage: {
        product1bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product1bg.webp)",
        product2bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product2bg.webp)",
        product3bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product3bg.webp)",
      },
    },
  },
  plugins: [],
};
