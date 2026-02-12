import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'

// 引入设置的主题 https://element.eleme.cn/#/zh-CN/theme/preview
// import './theme/element/index.css'
import ElementUI from 'element-ui'

import './less/main.less'
// 打印环境变量
console.log(process.env)
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'medium' })
// 禁用表格的列可拖动
// 安装组件

// Vue.prototype.$http = axios
Vue.prototype.api = process.env.VUE_APP_BASEURL
// 利用路由的钩子修改网站标题  在这里定义的是全局
router.beforeEach(function (to, from, next) {
  // 保存面包屑
  store.commit('setBreadList', to.matched)
  if (to.meta.title) { document.title = to.meta.title }
  next()// 确保要调用next
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
