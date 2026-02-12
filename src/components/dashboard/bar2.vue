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
      chartContainer: '',
      option: {
        title: {
          left: 'center',
          text: '训练时长分布',
          textStyle: {
            // 文字颜色
            color: '#aaa',
            // 字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            // 字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            // 字体系列
            fontFamily: 'sans-serif',
            // 字体大小
            fontSize: 14
          }
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            interval: 0,
            // rotate: 20,
            fontSize: 10 // 更改坐标轴文字大小
          },
          data: ['小于1小时', '1-6小时', '6-12小时', '12-18m', '18-24m', '大于24小时']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          // 设置柱状图大小
          barWidth: 30,
          itemStyle: {
            // normal: {
            //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            //     offset: 0,
            //     color: '#1268f3' // 0% 处的颜色
            //   }, {
            //     offset: 0.6,
            //     color: '#08a4fa' // 60% 处的颜色
            //   }, {
            //     offset: 1,
            //     color: '#01ccfe' // 100% 处的颜色
            //   }], false)
            // }
            // 这里是重点
            color: function (params) {
              var colorList = ['#0392ce']
              return colorList[params.dataIndex]
            }
          }
        }]
      }
    }
  },
  created () {
  },
  mounted () {
    this.chartContainer = echarts.init(document.getElementById(this.id))
    window.onresize = this.chartContainer.resize // 设置内容随着窗体变化而变化
    this.chartContainer.setOption(this.option)
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
