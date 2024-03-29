// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import config from './config';
import App from './App';
import router from './router';
import store from './store';

Vue.use(Vuex);
Vue.config.productionTip = false;

// 定数を適用
Vue.prototype.$config = config;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
