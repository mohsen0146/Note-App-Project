/** @type {import('tailwindcss').Config} */
import tailwindFormPlugin from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [
    tailwindFormPlugin({
      strategy: "class",
    }),
  ],
};
