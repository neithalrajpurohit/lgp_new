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
        brand: {
          black: "#0a0a0a",
          dark: "#111111",
          darker: "#080808",
          charcoal: "#1a1a1a",
          gold: "#C9A961",
          goldLight: "#E8D5B7",
          goldDark: "#8A6D3B",
          goldHover: "#b5952f",
          goldMuted: "rgba(201, 169, 97, 0.15)",
          gray: "#1e1e1e",
          grayLight: "#2a2a2a",
          grayMedium: "#3a3a3a",
          cream: "#f8f6f1",
          creamDark: "#e8e4dc",
          ivory: "#faf9f6",
          warmWhite: "#f5f0e8",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["8rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": [
          "6rem",
          { lineHeight: "0.95", letterSpacing: "-0.02em" },
        ],
        "display-md": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": [
          "3.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.01em" },
        ],
        "heading-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "heading-lg": ["2.5rem", { lineHeight: "1.15" }],
        "heading-md": ["2rem", { lineHeight: "1.2" }],
        "heading-sm": ["1.5rem", { lineHeight: "1.3" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        "body-md": ["1.125rem", { lineHeight: "1.7" }],
        "body-sm": ["1rem", { lineHeight: "1.7" }],
        caption: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        overline: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.25em" }],
        micro: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "50": "12.5rem",
        "60": "15rem",
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "prose-wide": "75ch",
        "prose-narrow": "55ch",
      },
      boxShadow: {
        luxury: "0 25px 80px rgba(201, 169, 97, 0.08)",
        "luxury-hover": "0 30px 100px rgba(201, 169, 97, 0.12)",
        premium: "0 10px 40px rgba(0, 0, 0, 0.4)",
        "premium-lg": "0 20px 60px rgba(0, 0, 0, 0.5)",
        "inner-glow": "inset 0 0 60px rgba(201, 169, 97, 0.05)",
        card: "0 4px 30px rgba(0, 0, 0, 0.3)",
        "card-hover": "0 8px 50px rgba(0, 0, 0, 0.4)",
        "gold-glow": "0 0 40px rgba(201, 169, 97, 0.15)",
        "gold-glow-lg": "0 0 80px rgba(201, 169, 97, 0.2)",
      },
      backdropBlur: {
        xs: "2px",
        "3xl": "64px",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        "bounce-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        cinematic: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease forwards",
        "fade-in-up":
          "fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-down":
          "fadeInDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-left":
          "fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in-right":
          "fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "scale-in":
          "scaleIn 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        float: "float 3s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        marquee: "marquee 30s linear infinite",
        "slow-zoom": "slowZoom 25s ease-out forwards",
        kenburns: "kenburns 20s ease-in-out infinite",
        "line-grow": "lineGrow 2s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          from: { opacity: "0", transform: "translateY(-30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(-50%)" },
          "50%": { transform: "translateY(10px) translateX(-50%)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201, 169, 97, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(201, 169, 97, 0.25)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
        kenburns: {
          "0%": { transform: "scale(1) translate(0, 0)" },
          "50%": { transform: "scale(1.1) translate(-1%, -1%)" },
          "100%": { transform: "scale(1) translate(0, 0)" },
        },
        lineGrow: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-luxury":
          "linear-gradient(135deg, #C9A961 0%, #E8D5B7 50%, #C9A961 100%)",
        "gradient-dark": "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
        "gradient-section":
          "linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)",
        "gradient-overlay":
          "linear-gradient(0deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 40%, transparent 100%)",
        "gradient-overlay-full":
          "linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.1) 30%, rgba(10,10,10,0.1) 70%, rgba(10,10,10,0.6) 100%)",
        "gradient-gold-text":
          "linear-gradient(90deg, #C9A961 0%, #E8D5B7 25%, #C9A961 50%, #E8D5B7 75%, #C9A961 100%)",
      },
      aspectRatio: {
        cinema: "21/9",
        portrait: "3/4",
        landscape: "4/3",
        "ultra-wide": "32/9",
      },
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;
