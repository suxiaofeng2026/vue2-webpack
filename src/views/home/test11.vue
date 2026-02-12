<template>
  <div>
    <div id="chartContainer" style="width:100%;height: 600px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      chartContainer: ''
    }
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById('chartContainer'))
    this.initChart()
  },
  methods: {
    initChart () {
      let geoJson = require('./test11-data.json')
      console.table(geoJson.features)
      echarts.registerMap('sichuan', geoJson) // 注册自定义地图模块

      this.chartContainer.setOption({
        title: {
          text: '四川 （2011）',
          subtext: '四川',
          sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
        },

        series: [
          {
            name: '四川',
            type: 'map',
            mapType: 'sichuan' // 自定义扩展图表类型 载入自定义地图信息
          }
        ]
      })
    }
  }
}
</script>
