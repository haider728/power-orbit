import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beauty: {
          pink: "#f4b8c8",
          nude: "#f5e7dd",
          cream: "#fff8f4",
        },
      },
    },
  },
  plugins: [],
};

export default config;
