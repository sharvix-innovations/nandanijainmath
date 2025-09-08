/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
       animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-medium': 'spin 10s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        }
      },
      colors: {
        primary: "#EDA35A", //Green
        // primary: "#663B1D", //Green
        secondary: "#FFD54F", //Yellow
        accent: "#fffbf5", //Fent green
        background: "#FFFFFF",
        text: "#333333",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], 
        heading: ["Playfair Display", "serif"],
      },
      boxShadow: {
        'glow': '0 0 15px rgba(245, 158, 11, 0.7)',
        'glow-green': '0 0 15px rgba(4, 120, 87, 0.5)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.12)'
      }
    },
  },
  plugins: [],
};
