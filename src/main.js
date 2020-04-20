import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';
import currencyFilter from './components/shared/currency-filter';

Vue.config.productionTip = false
Vue.filter('currency', currencyFilter)
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
