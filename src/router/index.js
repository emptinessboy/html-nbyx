import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pages from "@/views/Pages";
import User from "@/views/User";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta:{
      title : "首页 | 宁波印象BOOT-VUE3.0"
    }
  },
  {
    path: "/pages/:name",
    name: "PAGES",
    component: Pages,
    meta:{
      title : "文章加载中…… | 宁波印象BOOT-VUE3.0"
    }
  },
  {
    path: "/user/:status",
    name: "USER",
    component: User,
    meta:{
      title : "用户 | 宁波印象BOOT-VUE3.0"
    }
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
