import { createRouter, createWebHistory } from "vue-router";
import HomeViewVue from "../views/HomeView.vue";
import CarViewVue from "../views/Car/IdView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeViewVue,
        },
        {
            path: "/Car/:id",
            name: "article",
            component: CarViewVue,
        },
    ],
});

export default router;
