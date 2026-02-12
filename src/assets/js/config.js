export default {
  install (Vue, options) {
    Vue.prototype.api = '/api'
    Vue.prototype.otherInfo = {
      title: '其他配置'
    }
  }
}
