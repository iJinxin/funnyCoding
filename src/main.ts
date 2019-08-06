import Vue, { DirectiveOptions } from 'vue'

import ElementUI from 'element-ui'
import './style/element-variables.scss'
import './style/index.scss' // global style

// kernel module
import App from './App.vue'
import router from './router'
import store from './store'

import i18n from '@/lang' // international

// utils
import * as filters from './utils/filter'
import * as directives from './utils/directives'

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key: string, value: string) => i18n.t(key, value)
})

// register global filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, (filters as { [key: string]: Function })[key])
})
// register global directives
Object.keys(directives).forEach(key => {
  Vue.directive(key, (directives as { [key: string]: DirectiveOptions })[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
