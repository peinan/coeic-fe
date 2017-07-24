import Vue from 'vue';
import Router from 'vue-router';
import Upload from '@/components/home/Upload';
import Player from '@/components/home/Player';
import About from '@/components/home/About';
import NotFound from '@/components/error/NotFound';
import store from '../store';

Vue.use(Router);

const router = new Router({
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
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

// 遷移前に必ず実行
router.beforeEach((to, from, next) => {
  store.commit('pauseAudio');
  next();
});

export default router;
