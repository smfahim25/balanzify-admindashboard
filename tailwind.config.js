/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent_black: "#0D0D0D",
        accent_black_2: "#161616",
        accent_black_3: "#121212",
        accent_white: "#FFFFFF",
        accent_white_2: "#F2F2F2",
        accent_violet_text: "#9598FE",
        accent_blue: "#00035F",
        accent_blue_text: "#4B51F6",
        accent_green: "#3BDB5A",
        accent_slate_text: "#A6A6A6",
        accent_slate_text_2: "#666666",
      },
      fontFamily: {
        sfPro: "var(--font_sf_pro_display)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text_type": {
          "&-4XL": {
            "@apply text__4XL": {},
          },
          "&-XXXL": {
            "@apply text__XXXL": {},
          },
          "&-XXL": {
            "@apply text__XXL": {},
          },
          "&-XL": {
            "@apply text__XL": {},
          },
          "&-LG": {
            "@apply text__LG": {},
          },
          "&-MD": {
            "@apply text__MD": {},
          },
          "&-SM": {
            "@apply text__SM": {},
          },
        },
        ".no-scrollbar": {
          "@apply no_scrollbar": {},
        },
      });
    }),
  ],
};
