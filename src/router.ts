import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Weekend from "@/pages/Weekend.vue";
import Billetterie from "@/pages/Billetterie.vue";
import MentionsLegales from "@/pages/MentionsLegales.vue";
import NotFound from "@/pages/NotFound.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/weekend", name: "weekend", component: Weekend },
    { path: "/billetterie", name: "billetterie", component: Billetterie },
    { path: "/mentions-legales", name: "mentions-legales", component: MentionsLegales },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});
