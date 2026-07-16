/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   extend: {
    colors: {
      // Base
      background: "#050807",
      panel: "#0A0F0D",
      surface: "#111815",
      elevated: "#16201C",

      // Accent
      accent: "#35E7D6",
      accentHover: "#4FF3E4",

      // Text
      text: {
        primary: "#F2F5F4",
        secondary: "#AEB8B4",
        muted: "#7E8A86",
      },

      // UI
      border: "#1E2B27",

      success: "#3DDC84",
      danger: "#FF5C5C",
    },

    borderRadius: {
      sm: "6px",
      md: "8px",
      lg: "12px",
      xl: "16px",
    },

    boxShadow: {
      soft: "0 8px 30px rgba(0,0,0,.35)",
      glow: "0 0 16px rgba(53,231,214,.18)",
    },

    transitionDuration: {
      DEFAULT: "180ms",
    },
      
  },
},
  
  plugins: [],
};