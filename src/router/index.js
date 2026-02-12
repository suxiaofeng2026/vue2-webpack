import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/main',
    component: (resolve) => require(['@/views/home.vue'], resolve),
    meta: { title: '主页', keepAlive: true },
    children: [
      { path: '/main', redirect: 'index' },
      {
        path: 'index',
        component: (resolve) => require(['@/views/home/index.vue'], resolve),
        meta: { title: '场景', keepAlive: false }
      },

      {
        path: 'third',
        component: (resolve) => require(['@/views/home/blank.vue'], resolve),
        meta: { title: '二级路由', keepAlive: true },
        children: [
          {
            path: 'demo1',
            component: (resolve) => require(['@/views/home/index.vue'], resolve),
            meta: { title: '场景1', keepAlive: true }
          },
          {
            path: 'demo2',
            component: (resolve) => require(['@/views/home/index.vue'], resolve),
            meta: { title: '场景2', keepAlive: false }
          }
        ]
      },
      {
        path: 'test1',
        component: (resolve) => require(['@/views/home/test1.vue'], resolve),
        meta: { title: '动态表单实例', keepAlive: true }
      },
      {
        path: 'test2',
        component: (resolve) => require(['@/views/home/test2.vue'], resolve),
        meta: { title: '图表测试页', keepAlive: true }
      },

      {
        path: 'test3',
        component: (resolve) => require(['@/views/home/test3.vue'], resolve),
        meta: { title: '关系统', keepAlive: false }
      },
      {
        path: 'test4',
        component: (resolve) => require(['@/views/home/test4.vue'], resolve),
        meta: { title: '折线图平滑度', keepAlive: true }
      },
      {
        path: 'test5',
        component: (resolve) => require(['@/views/home/test5.vue'], resolve),
        meta: { title: '递归组件测试', keepAlive: true }
      },
      {
        path: 'test6',
        component: (resolve) => require(['@/views/home/test6.vue'], resolve),
        meta: { title: '箭头特效', keepAlive: true }
      },
      {
        path: 'test7',
        component: (resolve) => require(['@/views/home/test7.vue'], resolve),
        meta: { title: 'lines箭头效果抽取', keepAlive: true }
      },
      {
        path: 'test8',
        component: (resolve) => require(['@/views/home/test8.vue'], resolve),
        meta: { title: 'await async 实例', keepAlive: true }
      },
      {
        path: 'test9',
        component: (resolve) => require(['@/views/home/test9.vue'], resolve),
        meta: { title: '嵌入iframe框架实例', keepAlive: true }
      },
      {
        path: 'test10',
        component: (resolve) => require(['@/views/home/test10.vue'], resolve),
        meta: { title: 'geo地图测试', keepAlive: true }
      },
      {
        path: 'test10-1',
        component: (resolve) => require(['@/views/home/test10-1.vue'], resolve),
        meta: { title: '面板', keepAlive: true }
      },
      {
        path: 'test11',
        component: (resolve) => require(['@/views/home/test11.vue'], resolve),
        meta: { title: 'geo载入实力', keepAlive: true }
      },
      {
        path: 'test12',
        component: (resolve) => require(['@/views/home/test12.vue'], resolve),
        meta: { title: 'dashboard', keepAlive: true }
      },
      {
        path: 'test13',
        component: (resolve) => require(['@/views/home/test13.vue'], resolve),
        meta: { title: '矩形树图', keepAlive: true }
      },
      {
        path: 'test14',
        component: (resolve) => require(['@/views/home/test14.vue'], resolve),
        meta: { title: '验证', keepAlive: true }
      },
      {
        path: 'test15',
        component: (resolve) => require(['@/views/home/test15.vue'], resolve),
        meta: { title: 'markdown转换成为html', keepAlive: true }
      },
      {
        path: 'test16',
        component: (resolve) => require(['@/views/home/test16.vue'], resolve),
        meta: { title: '基于日历的热力分布图', keepAlive: true }
      },
      {
        path: 'test17',
        component: (resolve) => require(['@/views/home/test17.vue'], resolve),
        meta: { title: '动态表单', keepAlive: true }
      },
      {
        path: 'test18',
        component: (resolve) => require(['@/views/home/test18.vue'], resolve),
        meta: { title: 'test', keepAlive: true }
      },
      {
        path: 'test19',
        component: (resolve) => require(['@/views/home/test19.vue'], resolve),
        meta: { title: 'test', keepAlive: true }
      },
      {
        path: 'test20',
        component: (resolve) => require(['@/views/home/test20.vue'], resolve),
        meta: { title: 'test20', keepAlive: true }
      },
      {
        path: 'test21',
        name: '全屏设定',
        component: (resolve) => require(['@/views/home/test21.vue'], resolve),
        meta: { title: 'test21', keepAlive: true }
      },
      {
        path: 'test22',
        name: 'zd',
        component: (resolve) => require(['@/views/home/test22.vue'], resolve),
        meta: { title: 'test22', keepAlive: true }
      },
      {
        path: 'test23',
        name: 'zdcd',
        component: (resolve) => require(['@/views/home/test23.vue'], resolve),
        meta: { title: 'test22', keepAlive: true }
      },
      {
        path: 'test24',
        name: 'dd',
        component: (resolve) => require(['@/views/home/test24.vue'], resolve),
        meta: { title: 'test24', keepAlive: true }
      },
      {
        path: 'test25',
        component: (resolve) => require(['@/views/home/test25.vue'], resolve),
        meta: { title: '关系图表测试', keepAlive: true }
      },
      {
        path: 'test26',
        component: (resolve) => require(['@/views/home/test26.vue'], resolve),
        meta: { title: '树形菜单', keepAlive: true }
      },
      {
        path: 'test27',
        component: (resolve) => require(['@/views/home/test27.vue'], resolve),
        meta: { title: '菜单', keepAlive: true }
      },
      {
        path: 'test28',
        component: (resolve) => require(['@/views/home/test28.vue'], resolve),
        meta: { title: '滚动条样例', keepAlive: true }
      },
      {
        path: 'test29',
        component: (resolve) => require(['@/views/home/test29.vue'], resolve),
        meta: { title: 'base64实例', keepAlive: true }
      },
      {
        path: 'test30',
        component: (resolve) => require(['@/views/home/test30.vue'], resolve),
        meta: { title: '目录树复选框', keepAlive: true }
      },
      {
        path: 'test31',
        component: (resolve) => require(['@/views/home/test31.vue'], resolve),
        meta: { title: 'render', keepAlive: true }
      },
      {
        path: 'test32',
        component: (resolve) => require(['@/views/home/test32.vue'], resolve),
        meta: { title: '目录树拖拽', keepAlive: true }
      },
      {
        path: 'test33',
        component: (resolve) => require(['@/views/home/test33.vue'], resolve),
        meta: { title: '滚动条', keepAlive: true }
      },
      {
        path: 'test34',
        component: (resolve) => require(['@/views/home/test34.vue'], resolve),
        meta: { title: 'Json查询过滤', keepAlive: true }
      },
      {
        path: 'test35',
        component: (resolve) => require(['@/views/home/test35.vue'], resolve),
        meta: { title: '全局引入TinyMCE', keepAlive: true }
      },
      {
        path: 'test36',
        component: (resolve) => require(['@/views/home/test36.vue'], resolve),
        meta: { title: '分段加载测试', keepAlive: true }
      },
      {
        path: 'test37',
        component: (resolve) => require(['@/views/home/test37.vue'], resolve),
        meta: { title: '地图', keepAlive: true }
      },
      {
        path: 'test39',
        component: (resolve) => require(['@/views/home/test39.vue'], resolve),
        meta: { title: '39', keepAlive: true }
      },
      {
        path: 'test40',
        component: (resolve) => require(['@/views/home/test40.vue'], resolve),
        meta: { title: 'test40', keepAlive: true }
      },
      {
        path: 'test41',
        component: (resolve) => require(['@/views/home/test41.vue'], resolve),
        meta: { title: 'test41', keepAlive: true }
      },
      {
        path: 'test42',
        component: (resolve) => require(['@/views/home/test42.vue'], resolve),
        meta: { title: 'test42', keepAlive: true }
      },
      {
        path: 'test43',
        component: (resolve) => require(['@/views/home/test43.vue'], resolve),
        meta: { title: 'test43', keepAlive: true }
      },
      {
        path: 'test44',
        component: (resolve) => require(['@/views/home/test44.vue'], resolve),
        meta: { title: 'test44', keepAlive: true }
      },
      {
        path: 'test45',
        component: (resolve) => require(['@/views/home/test45.vue'], resolve),
        meta: { title: 'test45', keepAlive: true }
      },
      {
        path: 'test46',
        component: (resolve) => require(['@/views/home/test46.vue'], resolve),
        meta: { title: 'test46', keepAlive: true }
      },
      {
        path: 'test47',
        component: (resolve) => require(['@/views/home/test47.vue'], resolve),
        meta: { title: 'test47', keepAlive: true }
      },
      {
        path: 'test48',
        component: (resolve) => require(['@/views/home/test48.vue'], resolve),
        meta: { title: 'test48动态绑定事件', keepAlive: true }
      },
      {
        path: 'test49',
        component: (resolve) => require(['@/views/home/test49.vue'], resolve),
        meta: { title: '绝对定位', keepAlive: true }
      },
      {
        path: 'test50',
        component: (resolve) => require(['@/views/home/test50.vue'], resolve),
        meta: { title: 'test50', keepAlive: true }
      },
      {
        path: 'test51',
        component: (resolve) => require(['@/views/home/test51.vue'], resolve),
        meta: { title: 'test51', keepAlive: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
  routes
})

export default router
