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
  // {
  //   path: '/about',
  //   component: Layout,
  //   redirect: '/about/',
  //   children: [
  //     {
  //       path: '/',
  //       name: 'About',
  //       component: () => import('@/views/about/About')
  //     }
  //   ]
  // },
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
