/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
