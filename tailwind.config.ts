import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#15151C",
        cloud: "#EDEAFB",
        cloudline: "#DFDAF6",
        violet: "#7C6FF0",
        "violet-dark": "#6355D6",
        "violet-soft": "#E4E0FB",
        lime: "#CFF24E",
        "lime-soft": "#EAFAB8",
        graphite: "#6B7280",
        card: "#FFFFFF",
      },
      fontFamily: {
        display: [
          "Poppins",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Inter",
          "Segoe UI",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
