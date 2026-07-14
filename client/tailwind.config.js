/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050807",
        surface: "#111815",
        surfaceLight: "#16201C",

        primary: "#22C55E",
        primaryHover: "#16A34A",
        primaryDark: "#15803D",
        glow: "#4ADE80",

        border: "#1F3027",

        text: {
          primary: "#F8FAFC",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      boxShadow: {
        glow: "0 0 20px rgba(34,197,94,.25)",
      },

      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },

  plugins: [],
};