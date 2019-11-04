import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import mobile from "@/views/mobile/index";
import change from "@/views/change/index";
import fault from "@/views/fault/index";
import login from "@/views/login/login";

const routes = [
  {
    path: "/",

    component: login
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/mobile",
    name: "mobile",
    component: mobile
  },
  {
    path: "/change",
    name: "change",
    component: change
  },
  {
    path: "/fault",
    name: "fault",
    component: fault
  }
];

const router = new VueRouter({
  routes
});

export default router;
