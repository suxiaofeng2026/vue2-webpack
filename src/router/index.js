import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/main' },
  {
    path: '/main',
    name: 'main',
    component: (resolve) => require(['../views/main/index.vue'], resolve),
    meta: {
      title: 'main',
      keepAlive: false
    },
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: (resolve) => require(['../views/admin/adminManage'], resolve),
        meta: {
          title: 'admin',
          keepAlive: false
        }
      }

    ]
  },
  {
    path: '/bpmn',
    name: 'bpmn',
    component: (resolve) => require(['../views/bpmn/index.vue'], resolve),
    meta: {
      title: 'bpmn',
      keepAlive: false
    }
  },

  {
    path: '/404',
    component: (resolve) => require(['../views/404.vue'], resolve)
  },

  { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
  routes
})
// 解决重复点击当前路由控制台报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
