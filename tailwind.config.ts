import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      nav: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        brand: {
          green: "#16a34a",
          "green-dark": "#0b6b3a",
          "green-light": "#15a249",
          "green-x-light": "#f0fdf4",
          red: "#dc2626",
          dark: "#1A1A1A",
          gray: "#6B7280",
          "gray-light": "#F5F5F5",
          "gray-dark": "#475569",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        backgroundImage: {
          "four-corners": `
              radial-gradient(closest-side at top left, #f7fef9 0%, #fefefe 100%),
              radial-gradient(closest-side at top right, #f5f5f5 0%, #fefefe 100%),
              radial-gradient(closest-side at bottom left, #f5f5f5 0%, #fefefe 100%),
              radial-gradient(closest-side at bottom right, #fef8f8 0%, #fefefe 100%)
        `,
        },
      },
    },
  },
  plugins: [],
};
export default config;
