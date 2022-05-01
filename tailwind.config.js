module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
      padding: '15px',
    },
    extend: {
      colors: {
        'purple': '#4871D9',
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
