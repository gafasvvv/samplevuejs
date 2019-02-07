// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'
// import router from './router.js'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   store,//アプリケーションに登録
//   router,//アプリケーションに登録
//   components: { App },
//   template: '<App/>'
// })

//ストアルートをアプリケーションに登録
import Vue from 'vue'
import store from '@/store.js'
import router from '@/router.js'
import App from '@/App.vue'

new Vue({
  el: '#app',
  store, // アプリケーションに登録
  router,
  render: h => h(App)
  // ...
})
