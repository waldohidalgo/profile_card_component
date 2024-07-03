/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(185, 75%, 39%)",
        veryDarkDesaturatedBlue: "hsl(229, 23%, 23%)",
        darkGrayishBlue: "hsl(227, 10%, 46%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
      backgroundImage: {
        patternTop: "url('/images/bg-pattern-top.svg')",
        patternBottom: "url('/images/bg-pattern-bottom.svg')",
      },
    },
  },
  plugins: [],
};
