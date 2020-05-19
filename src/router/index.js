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
  {
    path: "/homeNaturalPerson",
    name: "HomeNaturalPerson",
    component: () => import("../views/naturalPerson/HomeNP.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/homeJudicialPerson",
    name: "HomeJudicialPerson",
    component: () => import("../views/legalPerson/HomeJP.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/registerDebt",
    name: "registerDebt",
    component: () => import("../views/legalPerson/RegisterDebt.vue"),
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: "/listActivities",
    name: "listActivities",
    component: () => import("../views/legalPerson/TabActivities.vue"),
    meta: {
      requiresAuth: true,
    },
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
