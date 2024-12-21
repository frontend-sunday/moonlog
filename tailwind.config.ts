import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        link: "#0070f3",
        "link-hover": "#0056b3",
      },
      fontSize: {
        h1: "2rem", // 32px
        h2: "1.75rem", // 28
        h3: "1.5rem", // 24
        base: "1rem", // 16
      },
      fontWeight: {
        h1: "700",
        h2: "600",
        h3: "600",
        base: "400",
      },
      lineHeight: {
        base: "1.6", // 본문 lineheight 간격
      },
      spacing: {
        paragraph: "0.625rem", // 10px (단락 간격)
        heading: "0.5rem", // 8px (제목 간 간격)
      },
    },
  },
  plugins: [],
} satisfies Config;
