/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  presets: [require("nativewind/preset")],
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./shared/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3629B7',
        secondary: '#fff',
        tertiary: '#E0E0E0',
        quaternary: '#E0E0E0',
        quinary: '#E0E0E0',
        senary: '#E0E0E0',
        septenary: '#E0E0E0',
        octonary: '#E0E0E0',
        nonary: '#E0E0E0',
        denary: '#E0E0E0',
      },
      fontFamily:{
        poppinsemibold: ['PoppinsSemiBold', 'sans-serif'],
        poppinsbolst: ['PoppinsBold', 'sans-serif'],
        poppinsmedium: ['PoppinsMedium', 'sans-serif'],
        poppinsregular: ['PoppinsRegular', 'sans-serif'],
        poppinslight: ['PoppinsLight', 'sans-serif'],
        poppinsextralight: ['PoppinsExtraLight', 'sans-serif'],
      }
    },
  },
  plugins: [],
}