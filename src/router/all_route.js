import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['../views/login/index.vue'], resolve),
    meta: {
      title: '登录',
      keepAlive: false
    }
  },
  {
    path: '/404',
    component: (resolve) => require(['../views/home/404.vue'], resolve)
  }

]

let router = new VueRouter({
  routes
})

export default router
