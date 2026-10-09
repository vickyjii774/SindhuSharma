/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    colors: {
      brand: {
        DEFAULT: "#3F6240", // main green
        dark: "#29452C",    // deep forest green
        darker: "#1F3522",  // very dark green
        light: "#6F8F70",   // lighter accent
        subtle: "#E8EFE7",  // very light green
      },

      surface: {
        DEFAULT: "#F7F8F5",
        white: "#FFFFFF",
        alt: "#EEF2ED",
        dark: "#1F3522",
      },

      ink: {
        DEFAULT: "#171A18",
        secondary: "#566258",
        muted: "#7C867E",
        white: "#FFFFFF",
      },

      line: {
        DEFAULT: "#D9E0D9",
        subtle: "#E7ECE7",
        dark: "#355338",
      },
    },

    fontFamily: {
      serif: ['"Cormorant Garamond"', "Georgia", "serif"],
      sans: [
        '"DM Sans"',
        "system-ui",
        "-apple-system",
        "Segoe UI",
        "sans-serif",
      ],
    },

    maxWidth: {
      "7xl": "80rem",
    },

    transitionTimingFunction: {
      editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  },
},
plugins: [],
}