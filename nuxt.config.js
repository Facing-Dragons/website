
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/'
  }
}: process.env.DEPLOY_ENV === 'STAGING' ? {
    router: {
      base: '/facingdragons'
    }
  } : {}

export default {
  ...routerBase,
  loading: "~/components/Loading.vue",
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Facing Dragons",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A Gamified Mental Health App"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        src: "https://apis.google.com/js/api.js"
      },
      {
        src:
          "https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  /*
   ** Global CSS
   */
  css: ["~/css/fonts.css", "~/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ["~/plugins/firebase.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    "@nuxtjs/pwa",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyBZl2uevP2LqC8Bf5zi5Y3GZefTa6P_J8Q",
          authDomain: "facingdragonstest.firebaseapp.com",
          databaseURL: "https://facingdragonstest.firebaseio.com",
          projectId: "facingdragonstest",
          storageBucket: "facingdragonstest.appspot.com",
          messagingSenderId: "155097958588",
          appId: "1:155097958588:web:5a536294886c85677be8b9",
          measurementId: "G-WF5FZMTBTE"
        },
        services: {
          // analytics: true
          firestore: true,
          auth: {
            initialize: {
              // onSuccessMutation: 'ON_SUCCESS_MUTATION',
              onSuccessAction: 'onSuccessAction',
              onErrorMutation: 'ON_ERROR_MUTATION',
              onErrorAction: 'onErrorAction',
              ssr: false // default
            }
          }
        }
      }
    ],
    [
      "nuxt-facebook-pixel-module",
      {
        /* module options */
        pixelId: "533481937059854"
      }
    ],
    [
      "@nuxtjs/device",
      {
        defaultUserAgent:
          "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Mobile Safari/537.36"
      }
    ],
    [
      "nuxt-fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["fab"]
          }
        ]
      }
    ]
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const vueLoader = config.module.rules.find(
        rule => rule.loader === "vue-loader"
      );
      vueLoader.options.transformAssetUrls = {
        video: ["src", "poster"],
        source: "src",
        img: "src",
        image: "xlink:href",
        parallaxingImage: "src",
        "parallaxing-image": "src",
        "b-img": "src",
        "b-embed": "src"
      };
    }
  }
};
