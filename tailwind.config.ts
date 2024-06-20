import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#E6E9EF",
        100: "#C0C8D9",
        200: "#98A5BF",
        300: "#7282A5",
        400: "#546894",
        500: "#364F84",
        600: "#30487C",
        700: "#283E70",
        800: "#213564",
        900: "#18254C",
      },
      secondary: {
        50: "#E1F5FD",
        100: "#B2E6FA",
        200: "#80D5F7",
        300: "#4CC5F4",
        400: "#1CB8F3",
        500: "#00ACF2",
        600: "#009EE3",
        700: "#008BD0",
        800: "#0079BC",
        900: "#005A9B",
      },
      grayscale: {
        0: "#FFFFFF",
        100: "#F5F5F5",
        200: "#E9E9E9",
        300: "#C5C5C5",
        400: "#9F9F9F",
        500: "#7D7D7D",
        600: "#575757",
        700: "#454545",
        800: "#282828",
        900: "#121212",
      },
      background: {
        100: "#F1F3F8",
      },
      warning: {
        100: "#FF294F",
      },
      success: {
        100: "#1FCE65",
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".h1": {
          fontSize: "60px",
          lineHeight: "72px",
          letterSpacing: "-1%",
        },
        ".h2": {
          fontSize: "48px",
          lineHeight: "140%",
          letterSpacing: "0%",
        },
        ".h3": {
          fontSize: "36px",
          lineHeight: "40px",
          letterSpacing: "0%",
        },
        ".h4": {
          fontSize: "30px",
          lineHeight: "36px",
          letterSpacing: "0%",
        },

        ".b1": {
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "0%",
        },
        ".b2": {
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0%",
        },
        ".b3": {
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "0%",
        },
        ".b4": {
          fontSize: "16px",
          lineHeight: "24px",
          letterSpacing: "0%",
        },
        ".b5": {
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0%",
        },
        ".caption": {
          fontSize: "12px",
          lineHeight: "16px",
          letterSpacing: "0%",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
