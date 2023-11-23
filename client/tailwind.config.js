import withMT from "@material-tailwind/react/utils/withMT"
/** @type {import('tailwindcss').Config} */
export default  withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },   
     colors: {
      'background': '#0C1522',
      'text': '#F0F4FA',
      'primary': '#D58BAA',
      'secondary': '#142338',
      'accent': '#83C256',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      poppins: ['Poppins', 'sans-serif']
    },

    extend: {},
  },
  plugins: [],

});

