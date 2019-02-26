import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store/index.ts';
import 'lib-flexible/flexible.js';

Vue.config.productionTip = false;
router.beforeEach((to: any, from: any, next: any) => {
  if (to.name === 'about') {
    next();
  } else {
    next();
  }
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
