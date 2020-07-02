import Vue from 'vue'
import App from './App.vue'
import router from './router'

import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.less'

Vue.use(element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
