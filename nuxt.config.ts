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
  modules: ["@nuxt/image-edge"],
  router: {
    base: "/specialists/",
  },
  ssr: false,
});
