import { createRouter, createWebHistory } from 'vue-router';
import Apartment from './pages/ApartmentPage.vue';
import HomePage from './pages/HomePage.vue';
import ErrorPage from './pages/ErrorPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    name: 'home',
  },
  {
    path: '/apartments/:id',
    component: Apartment,
    name: 'apartment',
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage,
    name: 'error',
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;