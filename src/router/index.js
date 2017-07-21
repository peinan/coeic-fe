import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/Home';
import NotFound from '@/components/error/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
