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
        defaultGreen: "#06BDA7",
        defaultOrange: "#EEA71D",
        darkBlue: "#002B3E",
        dirtyGrey: "#E2E6ED",
        defaultBlue: "#19BFD3",
        orangeRed: "#E56A55",
        white: "#FFFFFF",
        textGrey: "#707070",
        buttonGreen: "#06BDA720",
        tableGrey: "#F5F5F5",
        lightBlack: "#00000061",
        darkBlack: "#00000099",
        borderGrey: "#7070703B",
        badge: "#A7ABB1",
        backgroundGrey: "#F5F5F5",
        blueGreen: "#D0EDEA",
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontSize: {
        50: "50rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      borderRadius: {
        sm: "0.5rem",
        md: "1.75rem",
      },
      opacity: {
        80: ".8",
      },
      zIndex: {
        2: 2,
        3: 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      height: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        48: "12rem",
      },
      backgroundSize: {
        full: "100%",
      },
    },
    fontFamily: {
      custom: ["Lato Regular", "Helvetica", "Arial", "sans-serif"],
    },

    fontSize: {
      // 20px
      title: [
        "1.25rem",
        {
          fontWeight: "600",
        },
      ],
      // 16px
      text: [
        "1em",
        {
          fontWeight: "400",
        },
      ],
      // 12px
      cardTitle: [
        "0.875rem",
        {
          fontWeight: "600",
        },
      ],
      // 16px
      nav: [
        "1rem",
        {
          fontWeight: "500",
        },
      ],
      // 18px
      subheading: [
        "1.125rem",
        {
          fontWeight: "500",
        },
      ],
      // 14px
      tableText: [
        "0.875rem",
        {
          fontWeight: "500",
        },
      ],
      // 25px
      popupTitle: [
        "1.563rem",
        {
          fontWeight: "600",
        },
      ],
    },
  },

  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],

  plugins: [],
};
export default config;
