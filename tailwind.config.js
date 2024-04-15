/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "family-1": ["'Anta', sans-serif"],
        "family-2": [" 'Acme', sans-serif"],
        "family-3": [" 'Permanent Marker', cursive"],
        "family-6": [" 'Russo One', sans-serif"],
        "family-5": [" 'Galindo', sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
