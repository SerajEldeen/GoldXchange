import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37",
        secondary: "#D0CECE",
        tertiary: "#1A1A1A",
      },
      fontFamily: {
        playfair: "var(--font-playfair)",
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
} satisfies Config;
