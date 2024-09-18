/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#0A192F",
        designColor:"#64ffda",
        lightTExt: "#ccd6f6",
        darkText: "#8892b0",
        hoverColor: "#000000"
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"]
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      // animation: {
      //   rotate: "rotate 4s cubic-bezier(0.2, 0.8, 0.2, 1) infinite"
      // },

      animation: {
        'spin-slow': 'spin 7s linear infinite',
        'pulse-slow': 'pulse 2s linear infinite',
        'spin-fast': 'spin 0.5s linear infinite',
        wave: 'wave 1.5s ease-in-out infinite'
      },

    },
  
  },
  plugins: [],
}