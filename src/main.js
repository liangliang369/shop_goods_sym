import Vue from 'vue'
import App from './App.vue'
import router from './views/router/router'
import store from './views/store/store'
import './plugins/element.js'
import './static/css/bootstrap.min.css'
import './assets/css/base.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
