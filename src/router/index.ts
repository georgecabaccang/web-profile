import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "about",
        component: () => import("../components/pages/About.vue"),
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("../components/pages/Projects.vue"),
    },

    {
        path: "/projects/:id",
        name: "projectDetails",
        component: () => import("../components/pages/ProjectDetails.vue"),
    },
    {
        path: "/tools",
        name: "tools",
        component: () => import("../components/pages/Tools.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
