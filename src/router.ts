import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Profile from './views/Profile.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  }, {
    path: '/profile/',
    name: 'profile',
    component: Profile,
  }];

const router = new VueRouter({
  routes,
});

export default router;
