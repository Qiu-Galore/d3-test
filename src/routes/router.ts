import Vue from 'vue';
import Router from 'vue-router';
import Home from '@views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home,
    // },
    // {
    //   path: '/d1',
    //   name: 'd1',
    //   component: () => import('@views/D1.vue'),
    // },
    // {
    //   path: '/d2',
    //   name: 'd2',
    //   component: () => import('@views/D2.vue'),
    // },
    {
      path: '/d3',
      name: 'd3',
      component: () => import('@views/D3.vue'),
    },
    // {
    //   path: '/d4',
    //   name: 'd4',
    //   component: () => import('@views/D4.vue'),
    // },
    // {
    //   path: '/d5',
    //   name: 'd5',
    //   component: () => import('@views/D5.vue'),
    // },
    // {
    //   path: '/d6',
    //   name: 'd6',
    //   component: () => import('@views/D6.vue'),
    // },
    {
      path: '*',
      name: 'home',
      component: () => import('@views/D2.vue'),
    },
  ],
});
