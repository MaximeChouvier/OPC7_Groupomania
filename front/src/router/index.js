import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/Feed',
    name: 'Feed',
    component: () => import(/* webpackChunkName: "feed" */ '../views/MainFeed.vue'), beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({name: "Home"})
      }
    }
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue'), beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({name: "Home"})
      }
    }
  },
  {
    path: "/EditAccount",
    name: "EditAccount",
    component: () => import(/* webpackChunkName: "EditAccount" */ '../views/EditAccount.vue'), beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({name: "Home"})
      }
    }
  },
  {
    path: '/Post',
    name: 'Post',
    component: () => import(/* webpackChunkName: "feed" */ '../views/Post.vue'), beforeEnter: (to, from, next) => {
      let token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({name: "Home"})
      }
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
