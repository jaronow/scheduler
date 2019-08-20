import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("@/views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import("@/views/About.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () =>
        import("@/components/Register.vue")
    },
    {
      path: "/calendar/:user",
      name: "calendar",
      component: () =>
        import("@/components/Calendar.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
        import("@/components/Services.vue")
    },
    {
      path: "/profile/:user",
      name: "profile",
      component: () =>
        import("@/components/Profile.vue")
    },
    {
      path: "/employees",
      name: "employees",
      component: () =>
        import("@/components/Employees.vue")
    }
  ]
});
