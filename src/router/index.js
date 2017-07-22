import Vue from 'vue';
import Router from 'vue-router';
import Upload from '@/components/home/Upload';
import Player from '@/components/home/Player';
import NotFound from '@/components/error/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Upload',
      component: Upload,
    },
    {
      path: '/player/:id',
      name: 'Player',
      component: Player,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});
