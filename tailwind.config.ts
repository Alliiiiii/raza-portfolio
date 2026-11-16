import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050509",
        surface: "#0d0d14",
        "surface-2": "#14141f",
        border: "rgba(255,255,255,0.08)",
        accent: "#22d3ee",
        accent2: "#a78bfa",
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["var(--font-space)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.12), transparent 60%)",
        "hero-gradient":
          "linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2.5s ease-in-out infinite alternate",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "spin-slow": "spin 12s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(34,211,238,0.25)" },
          "100%": { boxShadow: "0 0 40px rgba(167,139,250,0.45)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "gradient-x": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
