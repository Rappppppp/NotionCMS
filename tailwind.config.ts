import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'teachers': "'Teachers'",
      'yeseva': "'Yeseva One'",
    },
    extend: {
      colors: {
        primary: '#598F99', // Light Blue
        secondary: '#FFFAE4', // Khaki
        tertiary: '#FFEA8A', // Yellow Vintage
        quarternary: '#574B14',
        'primary-darker': '#45737B',
        orange: '#E69904'
      }, screens: {
        'xsm': { 'max': '375px' },
        'sm': { 'max': '770px' },
      },
    },
  },
  plugins: [],
};
export default config;
