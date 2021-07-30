const combineColorWithOpacity = (rgbVar, opacityVariable, opacityValue) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${rgbVar}), ${opacityValue})`;
  }
  if (opacityVariable !== undefined) {
    return `rgba(var(${rgbVar}), var(${opacityVariable}, 1))`;
  }
  return `rgb(var(${rgbVar}))`;
};

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        cards: "repeat(3, minmax(20rem, 1fr));",
      },
    },
    fontFamily: {
      sans: [
        "ObjectSans",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "'Segoe UI'",
        "Roboto",
        "'Helvetica Neue'",
        "Arial",
        "'Noto Sans'",
        "sans-serif",
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ],
    },
    colors: {
      brand: {
        DEFAULT: "var(--color-brand-100)",
        100: "var(--color-brand-100)",
        80: "var(--color-brand-80)",
        70: "var(--color-brand-70)",
        60: "var(--color-brand-60)",
        30: "var(--color-brand-30)",
        20: "var(--color-brand-20)",
        10: "var(--color-brand-10)",
      },
      accent: {
        DEFAULT: "var(--color-accent-100)",
        100: "var(--color-accent-100)",
        30: "var(--color-accent-30)",
        20: "var(--color-accent-20)",
      },
      tint: {
        DEFAULT: "var(--color-tint-100)",
        100: "var(--color-tint-100)",
        50: "var(--color-tint-50)",
      },
      warning: {
        DEFAULT: "var(--color-warning-100)",
        100: "var(--color-warning-100)",
      },
      foreground: ({ opacityVariable, opacityValue }) =>
        combineColorWithOpacity(
          "--color-foreground",
          opacityVariable,
          opacityValue
        ),
      background: "var(--color-background)",
      transparent: "transparent",
      current: "currentColor",
    },
    fontSize: {
      xs: ["0.75rem", 1.5],
      sm: ["0.875rem", 1.5],
      base: ["1rem", 1.5],
      lg: ["1.125rem", 1.4444],
      xl: ["1.375rem", 1.4545],
      "2xl": [
        "2.5rem",
        {
          letterSpacing: "-0.02em",
          lineHeight: 1.25,
        },
      ],
      "3xl": [
        "3.75rem",
        {
          letterSpacing: "-0.02em",
          lineHeight: 1.1667,
        },
      ],
      "4xl": [
        "4.125rem",
        {
          letterSpacing: "-0.05em",
          lineHeight: 1.1515,
        },
      ],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
