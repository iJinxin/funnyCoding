/* eslint-disable global-require */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Index = r => require.ensure([], () => r(require('@/views/index')), 'Index');
const Home = r => require.ensure([], () => r(require('@/views/home/Home')), 'Home');
const Task = r => require.ensure([], () => r(require('@/views/task/Task')), 'Task');
const Diary = r => require.ensure([], () => r(require('@/views/diary/Diary')), 'Diary');
const Book = r => require.ensure([], () => r(require('@/views/book/Book')), 'Book');
const Music = r => require.ensure([], () => r(require('@/views/music/Music')), 'Music');
const Movie = r => require.ensure([], () => r(require('@/views/movie/Movie')), 'Movie');
const LiveCourse = r => require.ensure([], () => r(require('@/views/live-course/LiveCourse')), 'LiveCourse');
const LiveCourseRoom = r => require.ensure([], () => r(require('@/views/live-course/LiveCourseRoom')), 'LiveCourseRoom');
const LiveCourseDetail = r => require.ensure([], () => r(require('@/views/live-course/LiveCourseDetail')), 'LiveCourseDetail');
const TrainingCourse = r => require.ensure([], () => r(require('@/views/training-course/TrainingCourse')), 'TrainingCourse');
const TrainingCourseRoom = r => require.ensure([], () => r(require('@/views/training-course/TrainingCourseRoom')), 'TrainingCourseRoom');
const TrainingCourseDetail = r => require.ensure([], () => r(require('@/views/training-course/TrainingCourseDetail')), 'TrainingCourseDetail');
const DataCenter = r => require.ensure([], () => r(require('@/views/data-center/DataCenter')), 'DataCenter');
const Teachers = r => require.ensure([], () => r(require('@/views/teachers/Teachers')), 'Teachers');
const UserCenter = r => require.ensure([], () => r(require('@/views/user-center/UserCenter')), 'UserCenter');
const Login = r => require.ensure([], () => r(require('@/views/login/Login')), 'Login');

export default new Router({
  routes: [
    {
      path: '',
      component: Index,
      children: [
        { path: '/', name: 'Home', component: Home },
        { path: '/task', name: 'Task', component: Task },
        { path: '/diary', name: 'Diary', component: Diary },
        { path: '/book', name: 'Book', component: Book },
        { path: '/music', name: 'Music', component: Music },
        { path: '/movie', name: 'Movie', component: Movie },
        { path: '/live-course', name: 'LiveCourse', component: LiveCourse },
        { path: '/live-course-detail', name: 'LiveCourseDetail', component: LiveCourseDetail },
        { path: '/training-course', name: 'TrainingCourse', component: TrainingCourse },
        { path: '/training-course-detail', name: 'TrainingCourseDetail', component: TrainingCourseDetail },
        { path: '/data-center', name: 'DataCenter', component: DataCenter },
        { path: '/teachers', name: 'Teachers', component: Teachers },
        { path: '/user-center', name: 'UserCenter', component: UserCenter },
      ],
    },
    { path: '/live-room', name: 'LiveCourseRoom', component: LiveCourseRoom },
    { path: '/training-room', name: 'TrainingCourseRoom', component: TrainingCourseRoom },
    { path: '/login', name: 'Login', component: Login },
  ],
});
