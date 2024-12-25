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
        hr: "#eaeaea",
        blockquote: "#f5f5f5",
        code: "#f3f3f3",
      },
      fontSize: {
        h1: "2rem", // 32px
        h2: "1.75rem", // 28px
        h3: "1.5rem", // 24px
        base: "1rem", // 16px
        small: "0.875rem", // 14px
        code: "0.95rem", // 15px
      },
      fontWeight: {
        h1: "700",
        h2: "600",
        h3: "600",
        base: "400",
        bold: "700",
      },
      lineHeight: {
        base: "1.6",
        heading: "1.4",
      },
      spacing: {
        paragraph: "1rem", // 단락 간격
        heading: "0.5rem", // 제목 간 간격
        blockquote: "1rem", // Blockquote 여백
      },
      borderRadius: {
        blockquote: "0.5rem", // Blockquote 모서리
        code: "0.25rem", // Inline 코드 모서리
      },
    },
  },
  plugins: [],
} satisfies Config;
