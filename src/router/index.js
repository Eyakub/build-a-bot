import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage
  }, {
    path:'/build',
    name: 'Build',
    component: RobotBuilder,
  }]
})