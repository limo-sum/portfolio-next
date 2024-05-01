import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: { flip: "flip 2s infinite" },
      keyframes: {
        flip: {
          "0%, 80%": { transform: "rotateY(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
