import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Scan all pages in the pages/ directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scan components in src/components/
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
