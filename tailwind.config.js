import reactAriaPlugin from "tailwindcss-react-aria-components";
import tailwindAnimatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [reactAriaPlugin, tailwindAnimatePlugin],
};
