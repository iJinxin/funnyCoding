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
    redirect: 'funnycoding', // when dashboard finish, change back
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard')
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login')
  },
  funnyCodingRouter
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: routeMap
})
