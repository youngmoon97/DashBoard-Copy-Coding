import { createWebHistory, createRouter } from "vue-router";
import main from "@/views/MainView.vue";
const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: main,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
