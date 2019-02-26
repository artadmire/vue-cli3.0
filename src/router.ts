import Vue from 'vue';
import Router from 'vue-router';
import Work from '@/views/Work/index.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'work',
      component: Work,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/role',
      name: 'role',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/Role/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/item',
      name: 'item',
      component: () => import('@/views/Item/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/colleague',
      name: 'colleague',
      component: () => import('@/views/Colleague/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/calandar',
      name: 'calandar',
      component: () => import('@/views/Calandar/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/Test/index.vue'),
      meta: {
        keepAlive: true,
      },
    },
  ],
});
