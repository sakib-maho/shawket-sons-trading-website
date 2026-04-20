import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1240px"
      }
    },
    extend: {
      colors: {
        // Brand palette: white / green / dark accents
        brand: {
          50: "#f1f8f3",
          100: "#dcefe1",
          200: "#bcdfc6",
          300: "#8cc69f",
          400: "#5ba776",
          500: "#3a8a58",
          600: "#2a6e44",
          700: "#235838",
          800: "#1e472f",
          900: "#193a27",
          950: "#0d2115"
        },
        ink: {
          DEFAULT: "#0f1a14",
          soft: "#273330",
          muted: "#5a6b64"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        bangla: ["var(--font-bangla)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 8px 24px rgba(16, 24, 40, 0.06)",
        "card-hover":
          "0 2px 4px rgba(16, 24, 40, 0.06), 0 18px 40px rgba(16, 24, 40, 0.10)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both"
      }
    }
  },
  plugins: []
};

export default config;
