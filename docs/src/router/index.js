import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import DocsView from '../views/DocsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/DocsView.vue'),
  },
  {
    path: '/usage',
    name: 'usage',
    component: () => import('../views/UsageView.vue'),
  },
  {
    path: '/cheatsheet',
    name: 'cheatsheet',
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
