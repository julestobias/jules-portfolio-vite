import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import AboutMe from "../pages/AboutMe.vue";

const routes = [
  {
    path: "/",
    component: AboutMe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
