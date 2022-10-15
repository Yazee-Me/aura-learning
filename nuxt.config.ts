// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "vh-100",
      },
      charset: "utf-8",
      htmlAttrs: {
        class: "vh-100",
        lang: "en",
      },
      link: [
        {
          href: "/favicon.ico",
          rel: "icon",
          type: "image/x-icon",
        },
        {
          href: "https://fonts.googleapis.com",
          rel: "preconnect",
        },
        {
          crossorigin: true,
          href: "https://fonts.gstatic.com",
          rel: "preconnect",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        { charset: "utf-8" },
        {
          content: "width=device-width, initial-scale=1",
          name: "viewport",
        },
        {
          content: "Specialists",
          hid: "description",
          name: "description",
        },
      ],
      script: [
        {
          crossorigin: "anonymous",
          integrity:
            "sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3",
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js",
        },
        {
          crossorigin: "anonymous",
          integrity:
            "sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz",
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js",
        },
      ],
      title: "Specialists",
    },
  },
  css: ["~/assets/scss/main.scss"],
  ssr: false,
  target: "static",
});
