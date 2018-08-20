// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import layer from 'vue-layer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import rem from './assets/js/rem.js'

Vue.prototype.$rem = rem

Vue.config.productionTip = false

Vue.prototype.$layer = layer(Vue)

Vue.use(ElementUI)

router.isLogin = false

Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
