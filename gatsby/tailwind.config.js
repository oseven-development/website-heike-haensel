module.exports = {
  theme: {
    fontFamily: {
      sans: [
        '"Montserrat"',
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    fontSize: {
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.5rem", // 40px
    },
    colors: {
      white: "#fff",
      black: "#000",
      purple: "#B10058",
      "white-purple": "#FFE6FF",
      "light-purple": "#e785b6",
      "tyrian-purple": "#660033",
      "dark-tyrian-purple": "#1a000d",
      hover: {
        peach: "#cc5656",
        turquoise: "#268b99",
        "gray-blue": "#b4b9bf",
      },
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      current: "currentColor",
      inherit: "inherit",
    }),
    borderColor: theme => ({
      ...theme("colors"),
      "light-grey": "#e5e5e5",
    }),
    // customForms: theme => ({
    //   default: {
    //     "textarea, multiselect, select": undefined,
    //     "input, radio, checkbox": {
    //       backgroundColor: theme("colors.light-blue"),
    //     },
    //   },
    // }),
    extend: {
      width: {
        inherit: "inherit",
        "18": "4.5rem",
      },
      maxWidth: {
        "300px": "300px",
        "576px": "576px",
        "706px": "706px",
        "1600px": "1600px",
      },
      height: {
        inherit: "inherit",
        "3px": "3px",
        "300px": "300px",
        "18": "4.5rem",
      },
      minHeight: {
        "56": "14rem",
      },
      inset: {
        "1/2": "50%",
        full: "100%",
      },
      margin: {
        "-80": "-20rem",
      },
    },
  },
  purge: false,
  //   variants: {
  //     margin: ["responsive", "last"],
  //   },
  //   plugins: [require("@tailwindcss/custom-forms")],
  extend: {
    transitionProperty: {
      height: "height",
    },
  },
}
