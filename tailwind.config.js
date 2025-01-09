/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Manrope", "sans-serif"],
        custom: ["Nunito Sans", "serif"]
      },
      colors: {
        "custom-slate": "#898995",
        "custom-black": "#343434",
        "custom-blue": "#003C97",
        "custom-yellow": "#fcca59",
        "custom-yellow2": "#FFD85F",
        "custom-orange": "#f5793b",
        "custom-pink": "#f296bd",
        sidebar: "#1C2434",
        "sumod-wt": "#F6F6F6",
        "sumod-bl": "#1B4A82",
        "sumod-bl2": "#E8EFF9",
        "sumod-bl3": "#1C2674",
        "sumod-bl4": "#2082FF",
      },
      borderRadius: {
        "custom-br": "8px",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      lineHeight: {
        sumodleading: "5px",
      },
    },
  },
  plugins: [],
};
