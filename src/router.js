import MyBar from './pages/Bar.vue';
import MyFoo from './pages/Foo.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/foo',
        component: MyFoo,
    },
    {
        path: '/bar',
        component: MyBar,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;