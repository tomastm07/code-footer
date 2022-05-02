module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: 'true',
      padding: {
        DEFAULT: '15px',
        sm: '30px',
      },
    },
    extend: {
      colors:{
        'purple': '#4871D9'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
