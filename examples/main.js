import Vue from 'vue'
import App from './App.vue'
import OneUI from '../packages'
import Message from '../packages/topMsg/index'
Vue.config.productionTip = false
Vue.use(OneUI)
Vue.prototype.$message = Message
new Vue({
  render: h => h(App)
}).$mount('#app')
