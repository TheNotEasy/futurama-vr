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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': "var(--primary)",
        'links': "var(--links)",
        'shade': "var(--shade)",
        'dark': "var(--dark)",
        'semiprimary': "rgba(var(--primary), 0.5)",
      },
      dropShadow: {
        glow: [
          "0 0 2px var(--primary)",
          "0 0 2px var(--primary)"
        ]
      }
    },
    container: {
      padding: '2rem',
      center: true,
    }
  },
  plugins: [],
};
export default config;
