// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

//ストア状態にアクセス
// import store from '@/store.js'
// store.commit('increment')
// console.log(store.state.count)

// Vue.config.productionTip = false

// import store from './store.js'
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })

//コンポーネントでストアを使用しよう
import Vue from 'vue'
import App from './App.vue'
import store from './store.js'
new Vue ({
  el: '#app',
  store,
  render: h => h(App)
})
