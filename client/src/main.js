import Vue from 'vue'
import App from './App.vue'
import router from '@/routes/'
import store from '@/store/'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/app.scss';


require('bootstrap');
Vue.config.productionTip = false
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
