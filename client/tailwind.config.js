/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
   extend: {
      colors: {
        background: "#0B0F0E",
        surface: "#141917",
        card: "#1B211F",

        primary: "#3DDC84",
        primaryHover: "#31C876",
        accent: "#7EF9A9",

        border: "#29322E",

        text: {
          primary: "#F3F6F4",
          secondary: "#A0ABA5",
          muted: "#6F7A74",
        },

        danger: "#FF5C5C",
      },

      borderRadius: {
        md: "10px",
        lg: "14px",
        xl: "18px",
      },

      boxShadow: {
        soft: "0 8px 24px rgba(0,0,0,0.25)",
        glow: "0 0 12px rgba(61,220,132,0.18)",
      },

      transitionDuration: {
        DEFAULT: "180ms",
      },
},
},
  

  plugins: [],
};