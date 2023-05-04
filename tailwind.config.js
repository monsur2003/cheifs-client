/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#2b6cb0",

               secondary: "#a90bb8",

               accent: "#36b5d8",

               neutral: "#161523",

               "base-100": "#FCFCFD",

               info: "#5682E1",

               success: "#0F6258",

               warning: "#F8D25D",

               error: "#F46C7E",
            },
         },
      ],
   },
   plugins: [require("daisyui")],
};
