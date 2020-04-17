import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/serv",
    name: "Servicios",
    component: () => import("../views/Services.vue"),
  },
  {
    path: "/infra",
    name: "Infraestructura",
    component: () => import("../views/Infrastructure.vue"),
  },
  {
    path: "/proj",
    name: "Project",
    component: () => import("../views/Projects.vue"),
  },
  {
    path: "/sec",
    name: "Security",
    component: () => import("../views/Security.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
