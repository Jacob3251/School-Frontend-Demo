/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rootColor: "#e3f2fd",
        navbarColor: "#ffffff",
        // all sections heading colors
        headingh1: "#002454",
        headingh4: "#333333",
        // used in hero, cta, dates
        coloredh4: "#6CB4EE",
        // Hero Section
        heroHeading: "#002454",
        heroBtnBg: "#6CB4EE",
        heroHoverBtnBg: "#002D62",
        // Hero Counter Section
        hotlineCol: "#002454",
        counterBg: "#ffffff",
        counterText: "#3b82f6",
        // Acedemic Section Card
        acsBgBorder: "#ffffff",
        acsCardBgNormal: "#aee6ff52",
        acsCardBgHov: "#aee6ff",
        acsCardBgBtnBasic: "#ffffff",
        acsCardBgBtnHover: "#4188e5",
        acsCardBgArrow: "#facc15",
        // card section (branch & news)
        cardbgColor: "#ffffff",
        // cta
        ctabg: "#ffffff",
      },
      fontFamily: {
        robo: ["Roboto", "sans-serif"],
        heading_serif: ["Bree Serif", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
