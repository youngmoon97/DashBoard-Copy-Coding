import { createWebHistory, createRouter } from "vue-router";
import main from "@/views/MainView.vue";
import test from "@/views/TestView.vue";
import bar from "@/components/BarChart";
import progess from "@/components/ProgessChart.vue";
// import PieBoatChart from "@/components/PieBoatChart.vue";

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
  {
    path: "/test",
    name: "test",
    component: test,
  },
  {
    path: "/bar",
    name: "bar",
    component: bar,
  },
  {
    path: "/progess",
    name: "progess",
    component: progess,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
