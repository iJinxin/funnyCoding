/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

/* layout */
import Layout from '@/views/layout/Layout';

/* router modules */
import funnyCodingRouter from './modules/funnycoding'

const routeMap = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard')
      }
    ],
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/about/About')
  },
  funnyCodingRouter
]

export default new Router({
  scrollBehavior: () => ({ y:0 }),
  routes: routeMap
})
