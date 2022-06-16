import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/usage',
    name: 'Usage',
    component: () => import('../views/UsageView.vue'),
  },
  {
    path: '/cheatsheet',
    name: 'CheatSheet',
    component: () => import('../views/CheatSheetView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
