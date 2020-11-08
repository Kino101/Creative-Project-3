import Vue from 'vue'
import App from './App.vue'
import router from './router'
import garageSale from './garage-sale-data.js'

let data = {
  items: garageSale,
  wonItems: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false
