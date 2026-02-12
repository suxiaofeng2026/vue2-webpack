import Vue from 'vue'
import axios from 'axios'

// axios.defaults.withCredentials = true;//让ajax携带cookie
Vue.prototype.$axios = axios

// loading
let loading = {
  customClass: 'globalLoading',
  lock: true,
  text: '拼命加载中',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0)'
}

// http请求拦截器
Vue.prototype.$axios.interceptors.request.use(config => {
  // 请求之前loading
  Vue.prototype.$loading(loading)

  // 登录页面接口不需要token
  if (window.location.href.indexOf('login') === -1) {
    config.headers = {
      token: localStorage.getItem('token')
    }
  }
  /*  config.headers = {
    "Content-Type":'multipart/form-data'
  } */

  return config
})

// http响应拦截器
Vue.prototype.$axios.interceptors.response.use(res => {
  // 关闭loading
  Vue.prototype.$loading(loading).close()

  return res
}, error => {
  let res = error.response

  // console.log(res);
  Vue.prototype.$message.error({
    type: 'error',
    message: '连接超时',
    onClose: () => {
      Vue.prototype.$loading(loading).close()
    }
  })

  // 2:登录过期
  if (res.data.code === '2') {
    Vue.prototype.$message({
      type: 'error',
      message: res.data.msg
      /*      onClose: () => {
        window.location.href = `${window.location.origin}/#/login`
      } */
    })
  }
  return Promise.reject(res)
})
