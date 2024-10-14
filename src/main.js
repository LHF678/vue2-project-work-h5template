import './utils/rem';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './plugin';
import 'normalize.css';
// import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  // store, // 需要时放开注释
  render: h => h(App),
}).$mount('#app');
