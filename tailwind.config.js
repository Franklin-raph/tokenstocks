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

      476: "476px",
      // => @media (min-width: 476px) { ... }

      997: "997px",
      // => @media (min-width: 997px) { ... }

      887: "887px",
      // => @media (min-width: 887px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: "#2998ff",
        },
        dark: {
          100: "#20242e",
          200: "#979fa8",
          300: "rgba(1, 16, 35)",
        },
        light: {
          100: "#f8f9fa",
          200: "#f1f3f5",
          300: "#e9ecef",
          400: "#dee2e6",
        },
      },
      backgroundColor: {
        primary: {
          100: "#2998ff",
        },
        dark: {
          100: "#20242e",
          200: "#979fa8",
          300: "rgba(1, 16, 35)",
        },
        light: {
          100: "#f8f9fa",
          200: "#f1f3f5",
          300: "#e9ecef",
          400: "#dee2e6",
        },
      },
      backgroundImage: {
        product1bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product1bg.webp)",
        product2bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product2bg.webp)",
        product3bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(/product3bg.webp)",
        cta1bg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(/cta1img.webp)",
        footerBg:
          "linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(/footer-bg1.webp)",
        mobileNavBg:
          "linear-gradient(to right, rgba(1, 16, 35, .9), rgba(1, 16, 35, .9)),url(/mobile-nav-bg.webp)",
      },
    },
  },
  plugins: [],
};
