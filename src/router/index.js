/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = () => import('@/views/index');
const Home = () => import('@/views/home/Home');
const Login = () => import('@/views/login/Login');
// tools
const Calculator = () => import('@/views/tools/Calculator');
// note
const Task = () => import('@/views/record/Task');
const Note = () => import('@/views/record/Note');
// canvas
const Barrage = () => import('@/views/canvas/Barrage');
// algorithm
const Knapsack = () => import('@/views/algorithm/Knapsack');
const Waterfall = () => import('@/views/algorithm/Waterfall');
// visualization
const Visualization = () => import('@/views/visualization/Visualization');
// about
const About = () => import('@/views/about/About');
export default new Router({
  routes: [
    {
      path: '',
      component: Index,
      children: [
        { path: '/', name: 'Home', component: Home },
        { path: '/calculator', name: 'Calculator', component: Calculator },
        { path: '/task', name: 'Task', component: Task },
        { path: '/note', name: 'Note', component: Note },
        { path: '/barrage', name: 'Barrage', component: Barrage },
        { path: '/knapsack', name: 'Knapsack', component: Knapsack },
        { path: '/waterfall', name: 'Waterfall', component: Waterfall },
        { path: '/visualization', name: 'Visualization', component: Visualization },
        { path: '/about', name: 'About', component: About },
      ],
    },
    { path: '/login', name: 'Login', component: Login },
  ],
});
