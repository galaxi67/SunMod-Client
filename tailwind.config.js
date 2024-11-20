/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Semua file dalam folder src dengan ekstensi ini
  ],
  theme: {
    extend: {
      spacing: {
        17: "4.25rem",
      },
      colors: {
        "custom-slate": "#F1F1F1",
        "custom-black": "#272727",
        "custom-green": "#7DA875",
      },
      borderRadius: {
        "custom-br": "18px",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
