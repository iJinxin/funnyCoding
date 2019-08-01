import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/lang'

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key: string, value: string) => i18n.t(key, value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
