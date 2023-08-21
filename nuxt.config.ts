// https://nuxt.com/docs/api/configuration/nuxt-config
export default{
  //devtools: { enabled: true }
  app:{
    head:{
      title: "Mark bee",
      link:[
        {rel: "icon", type: "image/png", href: "../md-2.png"}
      ]
    }
  },
  build:{
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css:[
    "@/styles/main.scss",
  ],
  modules:[
    "@nuxtjs/tailwindcss"
  ]
}
