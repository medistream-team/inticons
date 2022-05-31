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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
