/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Semua file dalam folder src dengan ekstensi ini
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Manrope", "sans-serif"],
      },
      colors: {
        "custom-slate": "#898995",
        "custom-black": "#343434",
        "custom-blue": "#003C97",
        "custom-yellow": "#ff9f1c",
        "sidebar": "#1C2434"
      },
      borderRadius: {
        "custom-br": "8px",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
