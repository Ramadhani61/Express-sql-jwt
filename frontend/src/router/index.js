import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import Dashboards from "../views/home/Dashboard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: Dashboards,
        meta: {
          title: "Home",
        },
      },
    ],
    meta: {
      // requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      // hideForAuth: true,
      title: "Login",
    },
  },
  {
    path: "*",
    redirect: "/",
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Jika ada posisi yang tersimpan, kembalikan ke posisi tersebut
    if (savedPosition) {
      return savedPosition;
    } else {
      // Jika tidak ada posisi yang tersimpan, kembali ke atas halaman
      return { x: 0, y: 0 };
    }
  },
});
router.beforeEach(async (to, from, next) => {
  // let session = !!sessionStorage.getItem("user_session");

  // if (to.matched.some((record) => record.meta.requiresAdmin)) {
  //   if (get_session().level == "1" || get_session().level == "0") {
  //     next();
  //   } else if (to.matched.some((record) => record.meta.requiresAnalyst)) {
  //     if (get_session().level == "2") {
  //       next();
  //     } else {
  //       next({ name: "Dashboard" });
  //     }
  //   } else {
  //     next({ name: "Dashboard" });
  //   }
  // }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!session) {
      next({ name: "Login" });
    } else {
      next();
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (session) {
      next({ name: "Dashboard" });
    } else {
      next();
    }
  }

  next();
});
router.afterEach(async (to, from, next) => {
  // document.title = to.meta.title + " | " + "Pulse";
  // if (to.name !== "Login" && from.name !== "Login") {
  //   if (get_session()) {
  //     store.dispatch("auth/setLoading", true);
  //     await store.dispatch("auth/tokenCheck");
  //   }
  // }
});

export default router;
