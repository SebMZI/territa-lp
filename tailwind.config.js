/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'btn': '2.9px 4px 4px 0px rgba(0, 0, 0, 0.25), -2.94px -4.9px 5.71px 0px #CB5B05 inset, 2.94px 4.9px 5.71px 0px #ECAB79 inset',
        "btnHover" : "-2.942px -4.896px 5.712px 0px #E06303 inset, 2.942px 4.896px 5.712px 0px #F9BB8C inset"
      },
      colors: {
        "primary": "FAFAFA",
        "ascent": "#EE7519",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
