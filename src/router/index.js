import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/home/HomePage.vue';
import RobotBuilder from '../components/build/RobotBuilder.vue';
import PartInfo from '../components/parts/PartInfo.vue';
import BrowseParts from '../components/parts/BrowseParts.vue';
import RobotHeads from '../components/parts/RobotHeads.vue';
import RobotArms from '../components/parts/RobotArms.vue';
import RobotTorsos from '../components/parts/RobotTorsos.vue';
import RobotBases from '../components/parts/RobotBases.vue';

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
  },{
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads,
      },{
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms,
      },{
        name: 'BrowseTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },{
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases,
      }
    ]
  },{
    path:'/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  }]
})