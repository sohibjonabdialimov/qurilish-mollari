/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom_blue: "#4F46E5FF",
        custom_color: "#ff7439",
        custom_color_hover: "#f5bca3"
        
      },
      textColor: {
        custom_blue: "#4F46E5FF",
        custom_color: "#ff7439",
        custom_color_hover: "#f5bca3"
      }
    },
  },
  plugins: [],
}