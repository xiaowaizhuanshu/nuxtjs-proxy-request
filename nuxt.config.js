export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ssr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
	// 配置axios
	axios: {
		prefix: "/api", // 配置请求接口前缀
		proxy: true // 开启代理
	},
	// 配置代理
	proxy: {
		"/api": {
			// 配置接口地址
			target: "https://test-h5.timingbio.com",
			changeOrigin: true
		}
	}
}
