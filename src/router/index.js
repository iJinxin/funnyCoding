/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = r => require.ensure([], () => r(require('@/views/index')), 'Index');
const Home = r => require.ensure([], () => r(require('@/views/home/Home')), 'Home');
const Login = r => require.ensure([], () => r(require('@/views/login/Login')), 'Login');
// tools
const Calculator = r => require.ensure([], () => r(require('@/views/tools/Calculator')), 'Calculator');
// note
const Task = r => require.ensure([], () => r(require('@/views/record/Task')), 'Task');
const Note = r => require.ensure([], () => r(require('@/views/record/Note')), 'Article');
// canvas
const Barrage = r => require.ensure([], () => r(require('@/views/canvas/Barrage')), 'Barrage');
// visualization
const Visualization = r => require.ensure([], () => r(require('@/views/visualization/Visualization')), 'Visualization');
// about
const About = r => require.ensure([], () => r(require('@/views/about/About')), 'About');
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
        { path: '/visualization', name: 'Visualization', component: Visualization },
        { path: '/about', name: 'About', component: About },
      ],
    },
    { path: '/login', name: 'Login', component: Login },
  ],
});
