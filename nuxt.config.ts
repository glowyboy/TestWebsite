import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  css: [
    '~/assets/css/navbar.css' ,
    '~/assets/css/font.css' ,
    '~/assets/css/Icon.css' ,
    '~/assets/css/Buttons.css' ,
    '~/pages/Dashboard/Dash2.css' ,

  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2025-02-26'
})


