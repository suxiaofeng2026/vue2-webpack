<template>
  <div>
    <div :id="id" style="width:100%;height: 300px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      id: new Date().getTime() + this.randomString(8),
      chartContainer: ''
    }
  },
  props: {
    option: { type: Object, default: () => {} }
  },
  created () {
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById(this.id))
    // window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    // 多次调用该组件 使用下面方法
    window.addEventListener('resize', () => {
      this.chartContainer.resize()
    })
    this.chartContainer.setOption(this.option)
    // setTimeout(() => { this.chartContainer.setOption(this.option) }, 50)
  },
  methods: {
    randomString (len) {
      len = len || 32
      let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      let maxPos = $chars.length
      let pwd = ''
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
      }
      return pwd
    }
  }
}
</script>
