import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandsPage",
    component: () => import("../views/loginRegister/LandsPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/loginRegister/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/loginRegister/Register.vue"),
  },
  {
    path: "/registerNaturalPerson",
    name: "RegisterNaturalPerson",
    component: () => import("../views/loginRegister/RegisterNaturalPerson.vue"),
  },
  {
    path: "/registerJudicialPerson",
    name: "RegisterJudicialPerson",
    component: () =>
      import("../views/loginRegister/RegisterJudicialPerson.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
